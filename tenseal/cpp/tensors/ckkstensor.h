#ifndef TENSEAL_TENSOR_CKKSTENSOR_H
#define TENSEAL_TENSOR_CKKSTENSOR_H

#include "tenseal/cpp/tensors/encrypted_tensor.h"
#include "tenseal/cpp/tensors/plain_tensor.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

class CKKSTensor : public EncryptedTensor<double, shared_ptr<CKKSTensor>>,
                   public enable_shared_from_this<CKKSTensor> {
   public:
    using EncryptedTensor<double, shared_ptr<CKKSTensor>>::decrypt;
    /**
     * Create a new CKKSTensor from an 1D vector.
     * @param[in] input vector.
     * @param[in] input vector.
     * @param[in] input vector.
     */
    template <typename... Args>
    static shared_ptr<CKKSTensor> Create(Args&&... args) {
        return shared_ptr<CKKSTensor>(
            new CKKSTensor(std::forward<Args>(args)...));
    }

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

    vector<Ciphertext> data() const;
    vector<size_t> shape() const;
    vector<size_t> strides() const;
    double scale() const;

   private:
    vector<Ciphertext> _data;
    vector<size_t> _shape;
    vector<size_t> _strides;
    double _init_scale;

    CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
               const PlainTensor<double>& tensor,
               std::optional<double> scale = {});
    CKKSTensor(const TenSEALContextProto& ctx, const CKKSTensorProto& tensor);
    CKKSTensor(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
               const CKKSTensorProto& tensor);
    CKKSTensor(const shared_ptr<const CKKSTensor>& vec);

    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const double scale, const vector<double>& data);
    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const double scale, const double data);

    void load_proto(const CKKSTensorProto& buffer);
    CKKSTensorProto save_proto() const;
    void clear();
};

}  // namespace tenseal

#endif
