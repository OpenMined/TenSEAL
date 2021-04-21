#ifndef TENSEAL_TENSOR_BFVTENSOR_H
#define TENSEAL_TENSOR_BFVTENSOR_H

#include "tenseal/cpp/tensors/encrypted_tensor.h"
#include "tenseal/cpp/tensors/plain_tensor.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

class BFVTensor : public EncryptedTensor<int64_t, shared_ptr<BFVTensor>>,
                  public enable_shared_from_this<BFVTensor> {
   public:
    using EncryptedTensor<int64_t, shared_ptr<BFVTensor>>::decrypt;
    /**
     * Create a new BFVTensor from a tensor of any shape.
     * @param[in] TenSEAL context.
     * @param[in] tensor.
     * @param[in] batch.
     */
    template <typename... Args>
    static shared_ptr<BFVTensor> Create(Args&&... args) {
        return shared_ptr<BFVTensor>(
            new BFVTensor(std::forward<Args>(args)...));
    }

    PlainTensor<int64_t> decrypt(
        const shared_ptr<SecretKey>& sk) const override;

    shared_ptr<BFVTensor> negate_inplace() override;
    shared_ptr<BFVTensor> square_inplace() override;
    shared_ptr<BFVTensor> power_inplace(unsigned int power) override;

    shared_ptr<BFVTensor> add_inplace(
        const shared_ptr<BFVTensor>& to_add) override;
    shared_ptr<BFVTensor> sub_inplace(
        const shared_ptr<BFVTensor>& to_sub) override;
    shared_ptr<BFVTensor> mul_inplace(
        const shared_ptr<BFVTensor>& to_mul) override;

    shared_ptr<BFVTensor> add_plain_inplace(const int64_t& to_add) override;
    shared_ptr<BFVTensor> sub_plain_inplace(const int64_t& to_sub) override;
    shared_ptr<BFVTensor> mul_plain_inplace(const int64_t& to_mul) override;

    shared_ptr<BFVTensor> add_plain_inplace(
        const PlainTensor<int64_t>& to_add) override;
    shared_ptr<BFVTensor> sub_plain_inplace(
        const PlainTensor<int64_t>& to_sub) override;
    shared_ptr<BFVTensor> mul_plain_inplace(
        const PlainTensor<int64_t>& to_mul) override;

    shared_ptr<BFVTensor> sum_inplace(size_t axis = 0) override;
    shared_ptr<BFVTensor> sum_batch() {
        return this->copy()->sum_batch_inplace();
    }
    shared_ptr<BFVTensor> sum_batch_inplace();

    shared_ptr<BFVTensor> polyval_inplace(
        const vector<double>& coefficients) override;

    shared_ptr<BFVTensor> dot_inplace(
        const shared_ptr<BFVTensor>& to_mul) override;
    shared_ptr<BFVTensor> dot_plain_inplace(
        const PlainTensor<int64_t>& to_mul) override;

    shared_ptr<BFVTensor> matmul_inplace(
        const shared_ptr<BFVTensor>& other) override;
    shared_ptr<BFVTensor> matmul_plain_inplace(
        const PlainTensor<int64_t>& other) override;

    void load(const string& vec) override;
    string save() const override;

    shared_ptr<BFVTensor> copy() const override;
    shared_ptr<BFVTensor> deepcopy() const override;

    vector<Ciphertext> data() const;
    vector<size_t> shape() const;
    shared_ptr<BFVTensor> reshape(const vector<size_t>& new_shape);
    shared_ptr<BFVTensor> reshape_inplace(const vector<size_t>& new_shape);

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

    shared_ptr<BFVTensor> broadcast(const vector<size_t>& other_shape) const;
    shared_ptr<BFVTensor> broadcast_inplace(const vector<size_t>& other_shape);

    shared_ptr<BFVTensor> transpose() const;
    shared_ptr<BFVTensor> transpose_inplace();

    vector<size_t> shape_with_batch() const;
    double scale() const override { throw logic_error("not implemented"); }

   private:
    TensorStorage<Ciphertext> _data;
    optional<size_t> _batch_size;

    BFVTensor(const shared_ptr<TenSEALContext>& ctx,
              const PlainTensor<int64_t>& tensor, bool batch = false);
    BFVTensor(const TenSEALContextProto& ctx, const BFVTensorProto& tensor);
    BFVTensor(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    BFVTensor(const string& vec);
    BFVTensor(const shared_ptr<TenSEALContext>& ctx,
              const BFVTensorProto& tensor);
    BFVTensor(const shared_ptr<const BFVTensor>& vec);

    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const vector<int64_t>& data);
    static Ciphertext encrypt(const shared_ptr<TenSEALContext>& ctx,
                              const int64_t data);

    enum class OP { ADD, SUB, MUL };
    void perform_op(seal::Ciphertext& ct, seal::Ciphertext other, OP op);
    void perform_plain_op(seal::Ciphertext& ct, seal::Plaintext other, OP op);
    shared_ptr<BFVTensor> op_inplace(const shared_ptr<BFVTensor>& operand,
                                     OP op);
    shared_ptr<BFVTensor> op_plain_inplace(const PlainTensor<int64_t>& operand,
                                           OP op);
    shared_ptr<BFVTensor> op_plain_inplace(const int64_t& operand, OP op);

    /*
    Private overlaod functions to call the right implementation depending on the
    parameter
    */
    shared_ptr<BFVTensor> _add_inplace(const shared_ptr<BFVTensor>& to_add) {
        return this->add_inplace(to_add);
    }
    shared_ptr<BFVTensor> _sub_inplace(const shared_ptr<BFVTensor>& to_sub) {
        return this->sub_inplace(to_sub);
    }
    shared_ptr<BFVTensor> _mul_inplace(const shared_ptr<BFVTensor>& to_mul) {
        return this->mul_inplace(to_mul);
    }
    shared_ptr<BFVTensor> _matmul_inplace(const shared_ptr<BFVTensor>& other) {
        return this->matmul_inplace(other);
    }
    shared_ptr<BFVTensor> _add_inplace(const int64_t& to_add) {
        return this->add_plain_inplace(to_add);
    }
    shared_ptr<BFVTensor> _sub_inplace(const int64_t& to_sub) {
        return this->sub_plain_inplace(to_sub);
    }
    shared_ptr<BFVTensor> _mul_inplace(const int64_t& to_mul) {
        return this->mul_plain_inplace(to_mul);
    }
    shared_ptr<BFVTensor> _add_inplace(const PlainTensor<int64_t>& to_add) {
        return this->add_plain_inplace(to_add);
    }
    shared_ptr<BFVTensor> _sub_inplace(const PlainTensor<int64_t>& to_sub) {
        return this->sub_plain_inplace(to_sub);
    }
    shared_ptr<BFVTensor> _mul_inplace(const PlainTensor<int64_t>& to_mul) {
        return this->mul_plain_inplace(to_mul);
    }
    shared_ptr<BFVTensor> _matmul_inplace(const PlainTensor<int64_t>& other) {
        return this->matmul_plain_inplace(other);
    }

    void load_proto(const BFVTensorProto& buffer);
    BFVTensorProto save_proto() const;
    void clear();

    void prepare_context(const shared_ptr<TenSEALContext>& ctx);
};

}  // namespace tenseal

#endif
