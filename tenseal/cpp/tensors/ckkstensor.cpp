#include "tenseal/cpp/tensors/ckkstensor.h"

using namespace seal;
using namespace std;

namespace tenseal {

CKKSTensor::CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
                       const vector<double>& data, std::optional<double> scale)
    : _shape({data.size()}), _strides({1}) {
    this->link_tenseal_context(ctx);
    if (scale.has_value()) {
        this->_init_scale = scale.value();
    } else {
        this->_init_scale = ctx->global_scale();
    }

    for (int i = 0; i < data.size(); i++)
        _data.push_back(CKKSTensor::encrypt(ctx, this->_init_scale, data[i]));
}

Ciphertext CKKSTensor::encrypt(const shared_ptr<TenSEALContext>& ctx,
                               const double scale, const double data) {
    return encrypt(ctx, scale, {data});
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

}  // namespace tenseal
