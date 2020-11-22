#include "tenseal/cpp/tensors/ckkstensor.h"

namespace tenseal {

using namespace seal;
using namespace std;

CKKSTensor::CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
                       const PlainTensor<double>& tensor,
                       std::optional<double> scale)
    : _shape(tensor.shape()), _strides(tensor.strides()) {
    this->link_tenseal_context(ctx);
    if (scale.has_value()) {
        this->_init_scale = scale.value();
    } else {
        this->_init_scale = ctx->global_scale();
    }

    vector<double> plain_data = tensor.data();
    for (int i = 0; i < plain_data.size(); i++)
        _data.push_back(CKKSTensor::encrypt(ctx, this->_init_scale,
                                            vector<double>({plain_data[i]})));
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

    Ciphertext ciphertext(ctx->seal_context());
    Plaintext plaintext;
    ctx->encode<CKKSEncoder>(data, plaintext, scale);
    ctx->encryptor->encrypt(plaintext, ciphertext);

    return ciphertext;
}

PlainTensor<double> CKKSTensor::decrypt() const {
    if (this->tenseal_context()->decryptor == NULL) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the tensor doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->tenseal_context()->secret_key());
}

PlainTensor<double> CKKSTensor::decrypt(const shared_ptr<SecretKey>& sk) const {
    Plaintext plaintext;
    Decryptor decryptor =
        Decryptor(this->tenseal_context()->seal_context(), *sk);

    vector<double> result;
    vector<double> buff;
    result.reserve(this->_data.size());

    for (size_t i = 0; i < this->_data.size(); i++) {
        decryptor.decrypt(this->_data[i], plaintext);
        this->tenseal_context()->decode<CKKSEncoder>(plaintext, buff);
        result.push_back(buff[0]);
    }

    return result;
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
    // TODO
    return shared_from_this();
}

shared_ptr<CKKSTensor> CKKSTensor::polyval_inplace(
    const vector<double>& coefficients) {
    // TODO
    return shared_from_this();
}

void CKKSTensor::load(const string& vec) {
    // TODO
}

string CKKSTensor::save() const {
    // TODO
    return "saving";
}

shared_ptr<CKKSTensor> CKKSTensor::copy() const {
    // TODO
    return nullptr;
}

shared_ptr<CKKSTensor> CKKSTensor::deepcopy() const {
    // TODO
    return nullptr;
}

}  // namespace tenseal
