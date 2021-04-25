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
     * Create a new CKKSTensor from a tensor of any shape.
     * @param[in] TenSEAL context.
     * @param[in] tensor.
     * @param[in] scale.
     * @param[in] batch.
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

    shared_ptr<CKKSTensor> add_plain_inplace(const double& to_add) override;
    shared_ptr<CKKSTensor> sub_plain_inplace(const double& to_sub) override;
    shared_ptr<CKKSTensor> mul_plain_inplace(const double& to_mul) override;

    shared_ptr<CKKSTensor> add_plain_inplace(
        const PlainTensor<double>& to_add) override;
    shared_ptr<CKKSTensor> sub_plain_inplace(
        const PlainTensor<double>& to_sub) override;
    shared_ptr<CKKSTensor> mul_plain_inplace(
        const PlainTensor<double>& to_mul) override;

    shared_ptr<CKKSTensor> sum_inplace(size_t axis = 0) override;
    shared_ptr<CKKSTensor> sum_batch() {
        return this->copy()->sum_batch_inplace();
    }
    shared_ptr<CKKSTensor> sum_batch_inplace();

    shared_ptr<CKKSTensor> polyval_inplace(
        const vector<double>& coefficients) override;

    shared_ptr<CKKSTensor> dot_inplace(
        const shared_ptr<CKKSTensor>& to_mul) override;
    shared_ptr<CKKSTensor> dot_plain_inplace(
        const PlainTensor<double>& to_mul) override;

    shared_ptr<CKKSTensor> matmul_inplace(
        const shared_ptr<CKKSTensor>& other) override;
    shared_ptr<CKKSTensor> matmul_plain_inplace(
        const PlainTensor<double>& other) override;

    void load(const string& vec) override;
    string save() const override;

    shared_ptr<CKKSTensor> copy() const override;
    shared_ptr<CKKSTensor> deepcopy() const override;

    vector<Ciphertext> data() const;
    vector<size_t> shape() const;
    shared_ptr<CKKSTensor> reshape(const vector<size_t>& new_shape);
    shared_ptr<CKKSTensor> reshape_inplace(const vector<size_t>& new_shape);

    CKKSTensor subscript(const vector<pair<size_t, size_t>>& pairs);

    template <class T>
    shared_ptr<T> broadcast_or_throw(const shared_ptr<T>& other) {
        auto this_flat_size = this->_data.flat_size();
        auto other_flat_size = other->_data.flat_size();

        if (this_flat_size < other_flat_size) {
            this->broadcast_inplace(other->shape());
            return other;
        } else {
            return other->broadcast(this->shape());
        }
    }

    template <class T>
    T broadcast_or_throw(const T& other) {
        auto this_flat_size = this->_data.flat_size();
        auto other_flat_size = other.flat_size();

        if (this_flat_size < other_flat_size) {
            this->broadcast_inplace(other.shape());
            return other;
        } else {
            return other.broadcast(this->shape());
        }
    }

    shared_ptr<CKKSTensor> broadcast(const vector<size_t>& other_shape) const;
    shared_ptr<CKKSTensor> broadcast_inplace(const vector<size_t>& other_shape);

    shared_ptr<CKKSTensor> transpose() const;
    shared_ptr<CKKSTensor> transpose_inplace();

    vector<size_t> shape_with_batch() const;
    double scale() const override;

   private:
    TensorStorage<Ciphertext> _data;
    double _init_scale;
    optional<size_t> _batch_size;

    CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
               const PlainTensor<double>& tensor,
               std::optional<double> scale = {}, bool batch = false);
    CKKSTensor(const TenSEALContextProto& ctx, const CKKSTensorProto& tensor);
    CKKSTensor(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    CKKSTensor(const string& vec);
    CKKSTensor(const shared_ptr<TenSEALContext>& ctx,
               const CKKSTensorProto& tensor);
    CKKSTensor(const shared_ptr<const CKKSTensor>& vec);
    CKKSTensor(const shared_ptr<const CKKSTensor>& vec,
               const TensorStorage<Ciphertext>& storage);

    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const double scale, const vector<double>& data);
    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const double scale, const double data);

    enum class OP { ADD, SUB, MUL };
    void perform_op(seal::Ciphertext& ct, seal::Ciphertext other, OP op);
    void perform_plain_op(seal::Ciphertext& ct, seal::Plaintext other, OP op);
    shared_ptr<CKKSTensor> op_inplace(const shared_ptr<CKKSTensor>& operand,
                                      OP op);
    shared_ptr<CKKSTensor> op_plain_inplace(const PlainTensor<double>& operand,
                                            OP op);
    shared_ptr<CKKSTensor> op_plain_inplace(const double& operand, OP op);

    /*
    Private overlaod functions to call the right implementation depending on the
    parameter
    */
    shared_ptr<CKKSTensor> _add_inplace(const shared_ptr<CKKSTensor>& to_add) {
        return this->add_inplace(to_add);
    }
    shared_ptr<CKKSTensor> _sub_inplace(const shared_ptr<CKKSTensor>& to_sub) {
        return this->sub_inplace(to_sub);
    }
    shared_ptr<CKKSTensor> _mul_inplace(const shared_ptr<CKKSTensor>& to_mul) {
        return this->mul_inplace(to_mul);
    }
    shared_ptr<CKKSTensor> _matmul_inplace(
        const shared_ptr<CKKSTensor>& other) {
        return this->matmul_inplace(other);
    }
    shared_ptr<CKKSTensor> _add_inplace(const double& to_add) {
        return this->add_plain_inplace(to_add);
    }
    shared_ptr<CKKSTensor> _sub_inplace(const double& to_sub) {
        return this->sub_plain_inplace(to_sub);
    }
    shared_ptr<CKKSTensor> _mul_inplace(const double& to_mul) {
        return this->mul_plain_inplace(to_mul);
    }
    shared_ptr<CKKSTensor> _add_inplace(const PlainTensor<double>& to_add) {
        return this->add_plain_inplace(to_add);
    }
    shared_ptr<CKKSTensor> _sub_inplace(const PlainTensor<double>& to_sub) {
        return this->sub_plain_inplace(to_sub);
    }
    shared_ptr<CKKSTensor> _mul_inplace(const PlainTensor<double>& to_mul) {
        return this->mul_plain_inplace(to_mul);
    }
    shared_ptr<CKKSTensor> _matmul_inplace(const PlainTensor<double>& other) {
        return this->matmul_plain_inplace(other);
    }

    void load_proto(const CKKSTensorProto& buffer);
    CKKSTensorProto save_proto() const;
    void clear();
};

}  // namespace tenseal

#endif
