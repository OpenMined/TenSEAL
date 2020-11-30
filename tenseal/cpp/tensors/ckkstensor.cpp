#include "tenseal/cpp/tensors/ckkstensor.h"

namespace tenseal {

using namespace seal;
using namespace std;

CKKSTensor::CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
                       const PlainTensor<double>& tensor,
                       std::optional<double> scale, bool batch)
    : _shape(tensor.shape()), _strides(tensor.strides()) {
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
    this->_strides = tensor->strides();
    this->_data = tensor->data();
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
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::square_inplace() {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::power_inplace(unsigned int power) {
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::add_inplace(
    const shared_ptr<CKKSTensor>& to_add) {
    // TODO implement broadcasting
    if (this->_shape != to_add->_shape) {
        // TODO provide a better message (what are the shapes)
        throw invalid_argument("Operands don't have the same shape");
    }

    size_t n_jobs = this->tenseal_context()->dispatcher_size();

    auto worker_func = [&](size_t start, size_t end) -> bool {
        for (size_t i = start; i < end; i++) {
            this->tenseal_context()->evaluator->add_inplace(this->_data[i],
                                                            to_add->_data[i]);
        }
        return true;
    };

    if (n_jobs == 1) {
        worker_func(0, this->_data.size());
    } else {
        size_t batch_size = (this->_data.size() + n_jobs - 1) / n_jobs;
        vector<future<bool>> futures;
        for (size_t i = 0; i < n_jobs; i++) {
            futures.push_back(
                this->tenseal_context()->dispatcher()->enqueue_task(
                    worker_func, i * batch_size,
                    std::min((i + 1) * batch_size, this->_data.size())));
        }
        // waiting
        for (size_t i = 0; i < futures.size(); i++) futures[i].get();
    }

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
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::polyval_inplace(
    const vector<double>& coefficients) {
    // TODO
    return shared_from_this();
}

void CKKSTensor::clear() {
    this->_shape = vector<size_t>();
    this->_strides = vector<size_t>();
    this->_data = vector<Ciphertext>();
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
    for (int idx = 0; idx < tensor_proto.strides_size(); ++idx) {
        this->_strides.push_back(tensor_proto.strides(idx));
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
    for (auto& stride : this->_strides) {
        buffer.add_strides(stride);
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
vector<size_t> CKKSTensor::strides() const { return _strides; }
double CKKSTensor::scale() const { return _init_scale; }
}  // namespace tenseal
