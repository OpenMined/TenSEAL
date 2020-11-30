#include "tenseal/cpp/tensors/ckkstensor.h"

namespace tenseal {

using namespace seal;
using namespace std;

CKKSTensor::CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
                       const PlainTensor<double>& tensor,
                       std::optional<double> scale, bool batch)
    : _shape(tensor.shape()) {
    this->link_tenseal_context(ctx);
    if (scale.has_value()) {
        this->_init_scale = scale.value();
    } else {
        this->_init_scale = ctx->global_scale();
    }

    if (batch) {
        _batch_size = _shape[0];
        auto data = tensor.batch(0);

        for (auto it = data.cbegin(); it != data.cend(); it++)
            _data.push_back(CKKSTensor::encrypt(ctx, this->_init_scale, *it));

    } else {
        for (auto it = tensor.cbegin(); it != tensor.cend(); it++)
            _data.push_back(CKKSTensor::encrypt(ctx, this->_init_scale,
                                                vector<double>({*it})));
    }
}

CKKSTensor::CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
                       const string& tensor) {
    this->link_tenseal_context(ctx);
    this->load(tensor);
}

CKKSTensor::CKKSTensor(const TenSEALContextProto& ctx,
                       const CKKSTensorProto& tensor) {
    this->load_context_proto(ctx);
    this->load_proto(tensor);
}

CKKSTensor::CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
                       const CKKSTensorProto& tensor) {
    this->link_tenseal_context(ctx);
    this->load_proto(tensor);
}

CKKSTensor::CKKSTensor(const shared_ptr<const CKKSTensor>& tensor) {
    this->link_tenseal_context(tensor->tenseal_context());
    this->_init_scale = tensor->scale();
    this->_shape = tensor->shape();
    this->_data = tensor->data();
    this->_batch_size = tensor->_batch_size;
}

Ciphertext CKKSTensor::encrypt(const shared_ptr<TenSEALContext>& ctx,
                               const double scale, const vector<double>& data) {
    if (data.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }
    auto slot_count = ctx->slot_count<CKKSEncoder>();
    if (data.size() > slot_count)
        // number of slots available is poly_modulus_degree / 2
        throw invalid_argument(
            "can't encrypt vectors of this size, please use a larger "
            "polynomial modulus degree.");

    Ciphertext ciphertext(*ctx->seal_context());
    Plaintext plaintext;
    ctx->encode<CKKSEncoder>(data, plaintext, scale);
    ctx->encryptor->encrypt(plaintext, ciphertext);

    return ciphertext;
}

PlainTensor<double> CKKSTensor::decrypt(const shared_ptr<SecretKey>& sk) const {
    Plaintext plaintext;
    Decryptor decryptor =
        Decryptor(*this->tenseal_context()->seal_context(), *sk);

    if (_batch_size) {
        vector<vector<double>> result;
        result.reserve(this->_data.size());

        for (size_t i = 0; i < this->_data.size(); i++) {
            vector<double> buff;
            decryptor.decrypt(this->_data[i], plaintext);
            this->tenseal_context()->decode<CKKSEncoder>(plaintext, buff);
            result.push_back(
                vector<double>(buff.begin(), buff.begin() + *_batch_size));
        }

        return PlainTensor<double>(/*batched_tensor=*/result,
                                   /*original_shape=*/_shape, /*batch_axis=*/0);
    } else {
        vector<double> result;
        result.reserve(this->_data.size());

        for (size_t i = 0; i < this->_data.size(); i++) {
            vector<double> buff;
            decryptor.decrypt(this->_data[i], plaintext);
            this->tenseal_context()->decode<CKKSEncoder>(plaintext, buff);
            result.push_back(buff[0]);
        }

        return PlainTensor<double>(result, /*original_shape=*/_shape);
    }
}

shared_ptr<CKKSTensor> CKKSTensor::negate_inplace() {
    for (auto& ct : _data)
        this->tenseal_context()->evaluator->negate_inplace(ct);
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::square_inplace() {
    for (auto& ct : _data)
        this->tenseal_context()->evaluator->square_inplace(ct);
    this->auto_relin(_data);
    this->auto_rescale(_data);
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::power_inplace(unsigned int power) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::add_inplace(
    const shared_ptr<CKKSTensor>& to_add) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::sub_inplace(
    const shared_ptr<CKKSTensor>& to_sub) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::mul_inplace(
    const shared_ptr<CKKSTensor>& to_mul) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::dot_product_inplace(
    const shared_ptr<CKKSTensor>& to_mul) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::add_plain_inplace(
    const PlainTensor<double>& to_add) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::sub_plain_inplace(
    const PlainTensor<double>& to_sub) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::mul_plain_inplace(
    const PlainTensor<double>& to_mul) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::dot_product_plain_inplace(
    const PlainTensor<double>& to_mul) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::add_plain_inplace(const double& to_add) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::sub_plain_inplace(const double& to_sub) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::mul_plain_inplace(const double& to_mul) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::sum_inplace(size_t axis) {
    if (axis >= _shape.size()) throw invalid_argument("invalid axis");

    if (_batch_size && axis == 0) return sum_batch_inplace();

    auto new_shape = _shape;
    auto new_len = _data.size() / _shape[axis];

    // remove the summation axis
    new_shape.erase(new_shape.begin() + axis);

    auto working_shape = _shape;
    if (_batch_size) {
        // remove the batched axis
        working_shape.erase(working_shape.begin());
        new_shape.erase(new_shape.begin());
        axis--;
    }

    std::vector<Ciphertext> new_data(new_len);
    vector<vector<Ciphertext>> batches(new_len);

    auto old_strides = generate_strides(working_shape);
    auto new_strides = generate_strides(new_shape);

    for (size_t idx = 0; idx < _data.size(); ++idx) {
        auto pos = position_from_strides(old_strides, idx);
        pos.erase(pos.begin() + axis);

        size_t new_idx = 0;
        for (size_t pidx = 0; pidx < pos.size(); ++pidx)
            new_idx += new_strides[pidx] * pos[pidx];

        batches[new_idx].push_back(_data[idx]);
    }

    for (size_t idx = 0; idx < new_len; ++idx) {
        tenseal_context()->evaluator->add_many(batches[idx], new_data[idx]);
    }

    if (_batch_size) {
        // reinsert the batched axis
        new_shape.insert(new_shape.begin(), *_batch_size);
    }
    _data = new_data;
    _shape = new_shape;
    return shared_from_this();
}
shared_ptr<CKKSTensor> CKKSTensor::sum_batch_inplace() {
    if (!_batch_size) throw invalid_argument("unsupported operation");

    for (size_t idx = 0; idx < _data.size(); ++idx) {
        sum_vector(this->tenseal_context(), _data[idx], *_batch_size);
    }

    _batch_size = {};
    _shape.erase(_shape.begin());
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::polyval_inplace(
    const vector<double>& coefficients) {
    // TODO
    return shared_from_this();
}

void CKKSTensor::clear() {
    this->_shape = vector<size_t>();
    this->_data = vector<Ciphertext>();
    this->_batch_size = optional<double>();
    this->_init_scale = 0;
}

void CKKSTensor::load_proto(const CKKSTensorProto& tensor_proto) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->clear();

    for (int idx = 0; idx < tensor_proto.shape_size(); ++idx) {
        this->_shape.push_back(tensor_proto.shape(idx));
    }
    for (int idx = 0; idx < tensor_proto.ciphertexts_size(); ++idx)
        this->_data.push_back(SEALDeserialize<Ciphertext>(
            *this->tenseal_context()->seal_context(),
            tensor_proto.ciphertexts(idx)));
    this->_init_scale = tensor_proto.scale();
    if (tensor_proto.batch_size())
        this->_batch_size = tensor_proto.batch_size();
}

CKKSTensorProto CKKSTensor::save_proto() const {
    CKKSTensorProto buffer;

    for (auto& ct : this->_data) {
        buffer.add_ciphertexts(SEALSerialize<Ciphertext>(ct));
    }
    for (auto& dim : this->_shape) {
        buffer.add_shape(dim);
    }
    buffer.set_scale(this->_init_scale);
    if (this->_batch_size) buffer.set_batch_size(*this->_batch_size);

    return buffer;
}

void CKKSTensor::load(const std::string& tensor_str) {
    CKKSTensorProto buffer;
    if (!buffer.ParseFromArray(tensor_str.c_str(),
                               static_cast<int>(tensor_str.size()))) {
        throw invalid_argument("failed to parse CKKS tensor stream");
    }
    this->load_proto(buffer);
}

std::string CKKSTensor::save() const {
    auto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 static_cast<int>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save CKKS tensor proto");
    }

    return output;
}

shared_ptr<CKKSTensor> CKKSTensor::copy() const {
    return shared_ptr<CKKSTensor>(new CKKSTensor(shared_from_this()));
}

shared_ptr<CKKSTensor> CKKSTensor::deepcopy() const {
    TenSEALContextProto ctx = this->tenseal_context()->save_proto();
    CKKSTensorProto vec = this->save_proto();
    return CKKSTensor::Create(ctx, vec);
}

vector<Ciphertext> CKKSTensor::data() const { return _data; }
vector<size_t> CKKSTensor::shape() const { return _shape; }
double CKKSTensor::scale() const { return _init_scale; }
}  // namespace tenseal
