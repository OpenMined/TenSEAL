#include "tenseal/cpp/tensors/bfvtensor.h"

namespace tenseal {

using namespace seal;
using namespace std;

void BFVTensor::prepare_context(const shared_ptr<TenSEALContext>& ctx) {
    this->link_tenseal_context(ctx);
    this->tenseal_context()->auto_rescale(false);
    this->tenseal_context()->auto_mod_switch(false);
}

BFVTensor::BFVTensor(const shared_ptr<TenSEALContext>& ctx,
                     const PlainTensor<int64_t>& tensor, bool batch) {
    if (tensor.empty()) {
        throw invalid_argument("Attempting to encrypt an empty tensor");
    }
    this->prepare_context(ctx);

    vector<Ciphertext> enc_data;
    vector<size_t> enc_shape = tensor.shape();
    if (batch) {
        _batch_size = enc_shape[0];
        auto data = tensor.batch(0);
        enc_shape.erase(enc_shape.begin());

        for (auto it = data.cbegin(); it != data.cend(); it++)
            enc_data.push_back(BFVTensor::encrypt(ctx, *it));

    } else {
        for (auto it = tensor.cbegin(); it != tensor.cend(); it++)
            enc_data.push_back(BFVTensor::encrypt(ctx, *it));
    }

    _data = TensorStorage<Ciphertext>(enc_data, enc_shape);
}

BFVTensor::BFVTensor(const shared_ptr<TenSEALContext>& ctx,
                     const string& tensor) {
    this->prepare_context(ctx);
    this->load(tensor);
}

BFVTensor::BFVTensor(const string& tensor) { this->load(tensor); }

BFVTensor::BFVTensor(const TenSEALContextProto& ctx,
                     const BFVTensorProto& tensor) {
    this->load_context_proto(ctx);
    this->load_proto(tensor);
}

BFVTensor::BFVTensor(const shared_ptr<TenSEALContext>& ctx,
                     const BFVTensorProto& tensor) {
    this->prepare_context(ctx);
    this->load_proto(tensor);
}

BFVTensor::BFVTensor(const shared_ptr<const BFVTensor>& tensor) {
    this->prepare_context(tensor->tenseal_context());
    this->_data = TensorStorage<Ciphertext>(tensor->data(), tensor->shape());
    this->_batch_size = tensor->_batch_size;
}

Ciphertext BFVTensor::encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const vector<int64_t>& data) {
    if (data.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }
    auto slot_count = ctx->slot_count<BatchEncoder>();
    if (data.size() > slot_count)
        // number of slots available is poly_modulus_degree / 2
        throw invalid_argument(
            "can't encrypt vectors of this size, please use a larger "
            "polynomial modulus degree.");

    Ciphertext ciphertext(*ctx->seal_context());
    Plaintext plaintext;
    ctx->encode<BatchEncoder>(data, plaintext);
    ctx->encrypt(plaintext, ciphertext);

    return ciphertext;
}

Ciphertext BFVTensor::encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const int64_t data) {
    Ciphertext ciphertext(*ctx->seal_context());
    Plaintext plaintext;
    ctx->encode<BatchEncoder>(data, plaintext);
    ctx->encrypt(plaintext, ciphertext);

    return ciphertext;
}

PlainTensor<int64_t> BFVTensor::decrypt(const shared_ptr<SecretKey>& sk) const {
    Plaintext plaintext;
    auto sz = this->_data.flat_size();
    auto shape = this->shape_with_batch();

    if (_batch_size) {
        vector<vector<int64_t>> result;
        result.reserve(sz);

        for (auto it = _data.cbegin(); it != _data.cend(); it++) {
            vector<int64_t> buff;
            this->tenseal_context()->decrypt(*sk, *it, plaintext);
            this->tenseal_context()->decode<BatchEncoder>(plaintext, buff);
            result.push_back(
                vector<int64_t>(buff.begin(), buff.begin() + *_batch_size));
        }

        return PlainTensor<int64_t>(/*batched_tensor=*/result,
                                    /*shape_with_batch=*/shape,
                                    /*batch_axis=*/0);
    } else {
        vector<int64_t> result;
        result.reserve(sz);

        for (auto it = _data.cbegin(); it != _data.cend(); it++) {
            vector<int64_t> buff;
            this->tenseal_context()->decrypt(*sk, *it, plaintext);
            this->tenseal_context()->decode<BatchEncoder>(plaintext, buff);
            result.push_back(buff[0]);
        }

        return PlainTensor<int64_t>(result, /*shape_with_batch=*/shape);
    }
}

shared_ptr<BFVTensor> BFVTensor::negate_inplace() {
    for (auto& ct : _data)
        this->tenseal_context()->evaluator->negate_inplace(ct);
    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::square_inplace() {
    for (auto& ct : _data) {
        this->tenseal_context()->evaluator->square_inplace(ct);
        this->auto_relin(ct);
    }
    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::power_inplace(unsigned int power) {
    if (power == 0) {
        auto ones = PlainTensor<int64_t>::repeat_value(1, this->shape());
        *this =
            BFVTensor(this->tenseal_context(), ones, _batch_size.has_value());
        return shared_from_this();
    }

    if (power == 1) {
        return shared_from_this();
    }

    if (power == 2) {
        this->square_inplace();
        return shared_from_this();
    }

    int64_t closest_power_of_2 = 1 << static_cast<int>(floor(log2(power)));
    power -= closest_power_of_2;
    if (power == 0) {
        this->power_inplace(closest_power_of_2 / 2)->square_inplace();
    } else {
        auto closest_pow2_vector = this->power(closest_power_of_2);
        this->power_inplace(power)->mul_inplace(closest_pow2_vector);
    }

    return shared_from_this();
}

void BFVTensor::perform_op(seal::Ciphertext& ct, seal::Ciphertext other,
                           OP op) {
    switch (op) {
        case OP::ADD:
            this->tenseal_context()->evaluator->add_inplace(ct, other);
            break;
        case OP::SUB:
            this->tenseal_context()->evaluator->sub_inplace(ct, other);
            break;
        case OP::MUL:
            this->tenseal_context()->evaluator->multiply_inplace(ct, other);
            this->auto_relin(ct);
            break;
        default:
            throw invalid_argument("operation not defined");
    }
}

void BFVTensor::perform_plain_op(seal::Ciphertext& ct, seal::Plaintext other,
                                 OP op) {
    switch (op) {
        case OP::ADD:
            this->tenseal_context()->evaluator->add_plain_inplace(ct, other);
            break;
        case OP::SUB:
            this->tenseal_context()->evaluator->sub_plain_inplace(ct, other);
            break;
        case OP::MUL:
            try {
                this->tenseal_context()->evaluator->multiply_plain_inplace(
                    ct, other);
            } catch (const std::logic_error& e) {
                if (strcmp(e.what(), "result ciphertext is transparent") == 0) {
                    // replace by encryption of zero
                    this->tenseal_context()->encrypt_zero(ct);
                } else {  // Something else, need to be forwarded
                    throw;
                }
            }
            this->auto_relin(ct);
            break;
        default:
            throw invalid_argument("operation not defined");
    }
}

shared_ptr<BFVTensor> BFVTensor::op_inplace(
    const shared_ptr<BFVTensor>& raw_operand, OP op) {
    auto operand = raw_operand;
    if (this->shape() != operand->shape()) {
        operand = this->broadcast_or_throw(operand);
    }

    task_t worker_func = [&](size_t start, size_t end) -> bool {
        for (size_t i = start; i < end; i++) {
            this->perform_op(this->_data.flat_ref_at(i),
                             operand->_data.flat_ref_at(i), op);
        }
        return true;
    };

    this->dispatch_jobs(worker_func, this->_data.flat_size());

    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::op_plain_inplace(
    const PlainTensor<int64_t>& raw_operand, OP op) {
    // TODO batched ops

    auto operand = raw_operand;
    if (this->shape() != operand.shape()) {
        operand = this->broadcast_or_throw<>(operand);
    }

    task_t worker_func = [&](size_t start, size_t end) -> bool {
        Plaintext plaintext;
        for (size_t i = start; i < end; i++) {
            this->tenseal_context()->encode<BatchEncoder>(operand.flat_at(i),
                                                          plaintext);
            this->perform_plain_op(this->_data.flat_ref_at(i), plaintext, op);
        }
        return true;
    };

    this->dispatch_jobs(worker_func, this->_data.flat_size());

    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::op_plain_inplace(const int64_t& operand,
                                                  OP op) {
    Plaintext plaintext;
    this->tenseal_context()->encode<BatchEncoder>(operand, plaintext);

    task_t worker_func = [&](size_t start, size_t end) -> bool {
        for (size_t i = start; i < end; i++) {
            this->perform_plain_op(this->_data.flat_ref_at(i), plaintext, op);
        }
        return true;
    };

    this->dispatch_jobs(worker_func, this->_data.flat_size());

    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::add_inplace(
    const shared_ptr<BFVTensor>& to_add) {
    return this->op_inplace(to_add, OP::ADD);
}

shared_ptr<BFVTensor> BFVTensor::sub_inplace(
    const shared_ptr<BFVTensor>& to_sub) {
    return this->op_inplace(to_sub, OP::SUB);
}

shared_ptr<BFVTensor> BFVTensor::mul_inplace(
    const shared_ptr<BFVTensor>& to_mul) {
    return this->op_inplace(to_mul, OP::MUL);
}

shared_ptr<BFVTensor> BFVTensor::add_plain_inplace(
    const PlainTensor<int64_t>& to_add) {
    return this->op_plain_inplace(to_add, OP::ADD);
}

shared_ptr<BFVTensor> BFVTensor::sub_plain_inplace(
    const PlainTensor<int64_t>& to_sub) {
    return this->op_plain_inplace(to_sub, OP::SUB);
}

shared_ptr<BFVTensor> BFVTensor::mul_plain_inplace(
    const PlainTensor<int64_t>& to_mul) {
    return this->op_plain_inplace(to_mul, OP::MUL);
}

shared_ptr<BFVTensor> BFVTensor::add_plain_inplace(const int64_t& to_add) {
    return this->op_plain_inplace(to_add, OP::ADD);
}

shared_ptr<BFVTensor> BFVTensor::sub_plain_inplace(const int64_t& to_sub) {
    return this->op_plain_inplace(to_sub, OP::SUB);
}

shared_ptr<BFVTensor> BFVTensor::mul_plain_inplace(const int64_t& to_mul) {
    return this->op_plain_inplace(to_mul, OP::MUL);
}

shared_ptr<BFVTensor> BFVTensor::sum_inplace(size_t axis) {
    if (axis >= shape_with_batch().size())
        throw invalid_argument("invalid axis");

    if (_batch_size && axis == 0) return sum_batch_inplace();

    if (_batch_size) axis--;

    auto new_shape = shape();
    auto new_len = _data.flat_size() / shape()[axis];

    // remove the summation axis
    new_shape.erase(new_shape.begin() + axis);
    auto working_shape = shape();

    std::vector<Ciphertext> new_data(new_len);
    vector<vector<Ciphertext>> batches(new_len);

    auto old_strides = _data.strides();
    xt::xarray<int64_t> dummy(new_shape);
    auto new_strides = dummy.strides();

    for (size_t idx = 0; idx < _data.flat_size(); ++idx) {
        auto pos = position_from_strides(old_strides, idx);
        pos.erase(pos.begin() + axis);

        size_t new_idx = 0;
        for (size_t pidx = 0; pidx < pos.size(); ++pidx)
            new_idx += new_strides[pidx] * pos[pidx];

        batches[new_idx].push_back(_data.flat_ref_at(idx));
    }

    for (size_t idx = 0; idx < new_len; ++idx) {
        tenseal_context()->evaluator->add_many(batches[idx], new_data[idx]);
    }

    _data = TensorStorage<Ciphertext>(new_data, new_shape);
    return shared_from_this();
}
shared_ptr<BFVTensor> BFVTensor::sum_batch_inplace() {
    if (!_batch_size) throw invalid_argument("unsupported operation");

    for (size_t idx = 0; idx < _data.flat_size(); ++idx) {
        sum_vector(this->tenseal_context(), _data.flat_ref_at(idx),
                   *_batch_size);
    }

    _batch_size = {};
    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::polyval_inplace(
    const vector<double>& coefficients) {
    if (coefficients.size() == 0) {
        throw invalid_argument(
            "the coefficients vector need to have at least one element");
    }

    int degree = static_cast<int>(coefficients.size()) - 1;
    while (degree >= 0) {
        if (coefficients[degree] == 0.0)
            degree--;
        else
            break;
    }

    if (degree == -1) {
        auto zeros =
            PlainTensor<int64_t>::repeat_value(0, this->shape_with_batch());
        *this =
            BFVTensor(this->tenseal_context(), zeros, _batch_size.has_value());
        return shared_from_this();
    }

    // pre-compute squares of x
    auto x = this->copy();

    int max_square = static_cast<int>(floor(log2(degree)));
    vector<shared_ptr<BFVTensor>> x_squares;
    x_squares.reserve(max_square + 1);
    x_squares.push_back(x->copy());  // x
    for (int i = 1; i <= max_square; i++) {
        x->square_inplace();
        x_squares.push_back(x->copy());  // x^(2^i)
    }

    auto cst_coeff = PlainTensor<int64_t>::repeat_value(
        coefficients[0], this->shape_with_batch());
    auto result = BFVTensor::Create(this->tenseal_context(), cst_coeff,
                                    _batch_size.has_value());

    // coefficients[1] * x + ... + coefficients[degree] * x^(degree)
    for (int i = 1; i <= degree; i++) {
        if (coefficients[i] == 0.0) continue;
        x = compute_polynomial_term(i, coefficients[i], x_squares);
        result->add_inplace(x);
    }

    this->_data = TensorStorage<Ciphertext>(result->data(), result->shape());
    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::dot_inplace(
    const shared_ptr<BFVTensor>& other) {
    auto this_shape = this->shape();
    auto other_shape = other->shape();
    if (this_shape.size() == 1) {
        if (other_shape.size() == 1) {  // 1D-1D
            // inner product
            this->_mul_inplace(other);
            this->sum_inplace();
            return shared_from_this();
        } else if (other_shape.size() == 2) {  // 1D-2D
            if (this_shape[0] != other_shape[0])
                throw invalid_argument("can't perform dot: dimension mismatch");
            this->reshape_inplace(vector<size_t>({this_shape[0], 1}));
            this->_mul_inplace(other);
            this->sum_inplace();
            return shared_from_this();
        } else {
            throw invalid_argument(
                "don't support dot operations of more than 2 dimensions");
        }
    } else if (this_shape.size() == 2) {
        if (other_shape.size() == 1) {  // 2D-1D
            if (this_shape[1] != other_shape[0])
                throw invalid_argument("can't perform dot: dimension mismatch");
            auto other_copy =
                other->reshape(vector<size_t>({1, other_shape[0]}));
            this->_mul_inplace(other_copy);
            this->sum_inplace(1);
            return shared_from_this();
        } else if (other_shape.size() == 2) {  // 2D-2D
            this->_matmul_inplace(other);
            return shared_from_this();
        } else {
            throw invalid_argument(
                "don't support dot operations of more than 2 dimensions");
        }
    } else {
        throw invalid_argument(
            "don't support dot operations of more than 2 dimensions");
    }
}

shared_ptr<BFVTensor> BFVTensor::dot_plain_inplace(
    const PlainTensor<int64_t>& other) {
    auto this_shape = this->shape();
    auto other_shape = other.shape();
    if (this_shape.size() == 1) {
        if (other_shape.size() == 1) {  // 1D-1D
            // inner product
            this->_mul_inplace(other);
            this->sum_inplace();
            return shared_from_this();
        } else if (other_shape.size() == 2) {  // 1D-2D
            if (this_shape[0] != other_shape[0])
                throw invalid_argument("can't perform dot: dimension mismatch");
            this->reshape_inplace(vector<size_t>({this_shape[0], 1}));
            this->_mul_inplace(other);
            this->sum_inplace();
            return shared_from_this();
        } else {
            throw invalid_argument(
                "don't support dot operations of more than 2 dimensions");
        }
    } else if (this_shape.size() == 2) {
        if (other_shape.size() == 1) {  // 2D-1D
            if (this_shape[1] != other_shape[0])
                throw invalid_argument("can't perform dot: dimension mismatch");
            auto other_copy = other;
            other_copy.reshape_inplace(vector<size_t>({1, other_shape[0]}));
            this->_mul_inplace(other_copy);
            this->sum_inplace(1);
            return shared_from_this();
        } else if (other_shape.size() == 2) {  // 2D-2D
            this->_matmul_inplace(other);
            return shared_from_this();
        } else {
            throw invalid_argument(
                "don't support dot operations of more than 2 dimensions");
        }
    } else {
        throw invalid_argument(
            "don't support dot operations of more than 2 dimensions");
    }
}

shared_ptr<BFVTensor> BFVTensor::matmul_inplace(
    const shared_ptr<BFVTensor>& other) {
    auto this_shape = this->shape();
    auto other_shape = other->shape();

    if (this_shape.size() != 2)
        throw invalid_argument("this tensor isn't a matrix");
    if (other_shape.size() != 2)
        throw invalid_argument("operand tensor isn't a matrix");
    if (this_shape[1] != other_shape[0])
        throw invalid_argument("can't multiply matrices");  // put matrix shapes

    vector<size_t> new_shape = vector({this_shape[0], other_shape[1]});
    size_t new_size = new_shape[0] * new_shape[1];
    vector<Ciphertext> new_data;
    new_data.resize(new_shape[0] * new_shape[1]);

    task_t worker_func = [&](size_t start, size_t end) -> bool {
        vector<Ciphertext> to_sum;
        to_sum.resize(this_shape[1]);
        for (size_t i = start; i < end; i++) {
            auto evaluator = this->tenseal_context()->evaluator;
            size_t row = i / new_shape[1];
            size_t col = i % new_shape[1];
            // inner product
            for (size_t j = 0; j < this_shape[1]; j++) {
                to_sum[j] = this->_data.at({row, j});
                this->perform_op(to_sum[j], other->_data.at({j, col}), OP::MUL);
            }
            Ciphertext acc(*this->tenseal_context()->seal_context(),
                           to_sum[0].parms_id());
            evaluator->add_many(to_sum, acc);
            // set element[row, col] to the computed inner product
            new_data[i] = acc;
        }
        return true;
    };

    this->dispatch_jobs(worker_func, new_size);

    this->_data = TensorStorage(new_data, new_shape);
    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::matmul_plain_inplace(
    const PlainTensor<int64_t>& other) {
    auto this_shape = this->shape();
    auto other_shape = other.shape();

    if (this_shape.size() != 2)
        throw invalid_argument("this tensor isn't a matrix");
    if (other_shape.size() != 2)
        throw invalid_argument("operand tensor isn't a matrix");
    if (this_shape[1] != other_shape[0])
        throw invalid_argument("can't multiply matrices");  // put matrix shapes

    vector<size_t> new_shape = vector({this_shape[0], other_shape[1]});
    size_t new_size = new_shape[0] * new_shape[1];
    vector<Ciphertext> new_data;
    new_data.resize(new_shape[0] * new_shape[1]);

    task_t worker_func = [&](size_t start, size_t end) -> bool {
        vector<Ciphertext> to_sum;
        to_sum.resize(this_shape[1]);
        for (size_t i = start; i < end; i++) {
            auto evaluator = this->tenseal_context()->evaluator;
            size_t row = i / new_shape[1];
            size_t col = i % new_shape[1];
            // inner product
            for (size_t j = 0; j < this_shape[1]; j++) {
                to_sum[j] = this->_data.at({row, j});
                Plaintext pt;
                this->tenseal_context()->encode<BatchEncoder>(
                    other.at({j, col}), pt);
                this->perform_plain_op(to_sum[j], pt, OP::MUL);
            }
            Ciphertext acc(*this->tenseal_context()->seal_context(),
                           to_sum[0].parms_id());
            evaluator->add_many(to_sum, acc);
            // set element[row, col] to the computed inner product
            new_data[i] = acc;
        }
        return true;
    };

    this->dispatch_jobs(worker_func, new_size);

    this->_data = TensorStorage(new_data, new_shape);
    return shared_from_this();
}

void BFVTensor::clear() {
    this->_data = TensorStorage<Ciphertext>();
    this->_batch_size = optional<int64_t>();
}

void BFVTensor::load_proto(const BFVTensorProto& tensor_proto) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->clear();

    vector<Ciphertext> enc_data;
    vector<size_t> enc_shape;

    for (int64_t idx = 0; idx < tensor_proto.shape_size(); ++idx) {
        enc_shape.push_back(tensor_proto.shape(idx));
    }
    for (int64_t idx = 0; idx < tensor_proto.ciphertexts_size(); ++idx)
        enc_data.push_back(SEALDeserialize<Ciphertext>(
            *this->tenseal_context()->seal_context(),
            tensor_proto.ciphertexts(idx)));
    this->_data = TensorStorage<Ciphertext>(enc_data, enc_shape);
    if (tensor_proto.batch_size())
        this->_batch_size = tensor_proto.batch_size();
}

BFVTensorProto BFVTensor::save_proto() const {
    BFVTensorProto buffer;

    for (auto& ct : this->data()) {
        buffer.add_ciphertexts(SEALSerialize<Ciphertext>(ct));
    }
    for (auto& dim : this->shape()) {
        buffer.add_shape(dim);
    }
    if (this->_batch_size) buffer.set_batch_size(*this->_batch_size);

    return buffer;
}

void BFVTensor::load(const std::string& tensor_str) {
    if (!this->has_context()) {
        _lazy_buffer = tensor_str;
        return;
    }

    BFVTensorProto buffer;
    if (!buffer.ParseFromArray(tensor_str.c_str(),
                               static_cast<int64_t>(tensor_str.size()))) {
        throw invalid_argument("failed to parse BFV tensor stream");
    }
    this->load_proto(buffer);
}

std::string BFVTensor::save() const {
    if (_lazy_buffer) return _lazy_buffer.value();

    auto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray(
            (void*)output.c_str(),
            static_cast<int64_t>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save BFV tensor proto");
    }

    return output;
}

shared_ptr<BFVTensor> BFVTensor::copy() const {
    if (_lazy_buffer)
        return shared_ptr<BFVTensor>(new BFVTensor(_lazy_buffer.value()));
    return shared_ptr<BFVTensor>(new BFVTensor(shared_from_this()));
}

shared_ptr<BFVTensor> BFVTensor::deepcopy() const {
    if (_lazy_buffer) return this->copy();

    TenSEALContextProto ctx = this->tenseal_context()->save_proto(
        /*save_public_key=*/true, /*save_secret_key=*/true,
        /*save_galois_keys=*/true, /*save_relin_keys=*/true);
    BFVTensorProto vec = this->save_proto();
    return BFVTensor::Create(ctx, vec);
}

vector<Ciphertext> BFVTensor::data() const { return _data.data(); }
vector<size_t> BFVTensor::shape_with_batch() const {
    if (_batch_size) {
        auto res = _data.shape();
        res.insert(res.begin(), *_batch_size);
        return res;
    }

    return _data.shape();
}
vector<size_t> BFVTensor::shape() const { return _data.shape(); }

shared_ptr<BFVTensor> BFVTensor::reshape(const vector<size_t>& new_shape) {
    return this->copy()->reshape_inplace(new_shape);
}
shared_ptr<BFVTensor> BFVTensor::reshape_inplace(
    const vector<size_t>& new_shape) {
    this->_data.reshape_inplace(new_shape);

    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::broadcast(
    const vector<size_t>& other_shape) const {
    return this->copy()->broadcast_inplace(other_shape);
}
shared_ptr<BFVTensor> BFVTensor::broadcast_inplace(
    const vector<size_t>& other_shape) {
    this->_data.broadcast_inplace(other_shape);

    return shared_from_this();
}

shared_ptr<BFVTensor> BFVTensor::transpose() const {
    return this->copy()->transpose_inplace();
}
shared_ptr<BFVTensor> BFVTensor::transpose_inplace() {
    this->_data.transpose_inplace();

    return shared_from_this();
}
// namespace tenseal
}  // namespace tenseal
