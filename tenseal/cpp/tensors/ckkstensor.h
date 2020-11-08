#ifndef TENSEAL_TENSOR_CKKSTENSOR_H
#define TENSEAL_TENSOR_CKKSTENSOR_H

#include "tenseal/cpp/tensors/encrypted_tensor.h"

namespace tenseal {

using namespace seal;
using namespace std;

class CKKSTensor : public EncryptedTensor<double, shared_ptr<CKKSTensor>> {
   public:
    
    /**
     * Create a new CKKSTensor from an 1D vector.
     * @param[in] input vector.
     * @param[in] input vector.
     * @param[in] input vector.
     */
    static shared_ptr<CKKSTensor> Create(const shared_ptr<TenSEALContext>& ctx,
                                         const vector<double>& data,
                                         std::optional<double> scale) {
        return shared_ptr<CKKSTensor>(new CKKSTensor(ctx, data, scale));
    }

    PlainTensor<double> decrypt() const override;
    PlainTensor<double> decrypt(const shared_ptr<SecretKey>& sk) const override;

    shared_ptr<CKKSTensor> negate_inplace() override;
    shared_ptr<CKKSTensor> square_inplace() override;
    shared_ptr<CKKSTensor> power_inplace(unsigned int power) override;

    shared_ptr<CKKSTensor> add_inplace(
        const shared_ptr<CKKSTensor>& to_add) override;
    shared_ptr<CKKSTensor> sub_inplace(
        const shared_ptr<CKKSTensor>& to_sub) override;
    shared_ptr<CKKSTensor> mul_inplace(
        const shared_ptr<CKKSTensor>& to_mul) override;
    shared_ptr<CKKSTensor> dot_product_inplace(
        const shared_ptr<CKKSTensor>& to_mul) override;

    shared_ptr<CKKSTensor> add_plain_inplace(const double& to_add) override;
    shared_ptr<CKKSTensor> sub_plain_inplace(const double& to_sub) override;
    shared_ptr<CKKSTensor> mul_plain_inplace(const double& to_mul) override;

    shared_ptr<CKKSTensor> add_plain_inplace(
        const PlainTensor<double>& to_add) override;
    shared_ptr<CKKSTensor> sub_plain_inplace(
        const PlainTensor<double>& to_sub) override;
    shared_ptr<CKKSTensor> mul_plain_inplace(
        const PlainTensor<double>& to_mul) override;
    shared_ptr<CKKSTensor> dot_product_plain_inplace(
        const PlainTensor<double>& to_mul) override;

    shared_ptr<CKKSTensor> sum_inplace() {
        // default axis=0
        return this->sum_inplace(0);
    }
    shared_ptr<CKKSTensor> sum_inplace(size_t axis = 0);

    shared_ptr<CKKSTensor> polyval_inplace(
        const vector<double>& coefficients) override;

    void load(const string& vec) override;
    string save() const override;

    shared_ptr<CKKSTensor> copy() const override;
    shared_ptr<CKKSTensor> deepcopy() const override;

   private:
    vector<Ciphertext> _data;
    vector<size_t> _shape;
    vector<size_t> _strides;
    double _init_scale;

    CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
               const vector<double>& data, std::optional<double> scale = {});

    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const double scale, const vector<double>& data);
    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const double scale, const double data);
};

}  // namespace tenseal

#endif
