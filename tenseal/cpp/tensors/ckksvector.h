#ifndef TENSEAL_TENSOR_CKKSVECTOR_H
#define TENSEAL_TENSOR_CKKSVECTOR_H

#include "tenseal/cpp/tensors/encrypted_vector.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * Holds a vector of real numbers in its encrypted form using the CKKS
 *homomorphic encryption scheme.
 **/
class CKKSVector
    : public EncryptedVector<double, shared_ptr<CKKSVector>, CKKSEncoder>,
      public enable_shared_from_this<CKKSVector> {
   public:
    using encrypted_t = shared_ptr<CKKSVector>;
    using plain_t = PlainTensor<double>;
    using EncryptedVector<double, shared_ptr<CKKSVector>, CKKSEncoder>::decrypt;

    template <typename... Args>
    static encrypted_t Create(Args&&... args) {
        return encrypted_t(new CKKSVector(std::forward<Args>(args)...));
    }
    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of real numbers using the secret-key.
     **/
    plain_t decrypt(const shared_ptr<SecretKey>& sk) const override;

    /**
     * Compute the power of the CKKSVector with minimal multiplication depth.
     **/
    encrypted_t power_inplace(unsigned int power) override;
    /**
     * Negates a CKKSVector.
     **/
    encrypted_t negate_inplace() override;
    /**
     * Compute the square of the CKKSVector.
     **/
    encrypted_t square_inplace() override;
    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new CKKSVector which is the result of either
     *addition, substraction or multiplication in an element-wise fashion.
     *in_place functions return a reference to the same object.
     **/
    encrypted_t add_inplace(const encrypted_t& to_add) override;
    encrypted_t sub_inplace(const encrypted_t& to_sub) override;
    encrypted_t mul_inplace(const encrypted_t& to_mul) override;
    encrypted_t dot_product_inplace(const encrypted_t& to_mul) override;
    encrypted_t dot_product_plain_inplace(const plain_t& to_mul) override;
    encrypted_t sum_inplace() override;

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new CKKSVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    encrypted_t add_plain_inplace(const plain_t::dtype& to_add) override;
    encrypted_t add_plain_inplace(const plain_t& to_add) override;
    encrypted_t sub_plain_inplace(const plain_t::dtype& to_sub) override;
    encrypted_t sub_plain_inplace(const plain_t& to_sub) override;
    encrypted_t mul_plain_inplace(const plain_t::dtype& to_mul) override;
    encrypted_t mul_plain_inplace(const plain_t& to_mul) override;

    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    encrypted_t matmul_plain_inplace(const plain_t& matrix,
                                     size_t n_jobs = 0) override;

    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    encrypted_t enc_matmul_plain_inplace(const plain_t& plain_vec,
                                         size_t row_size) override;

    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    encrypted_t polyval_inplace(const vector<double>& coefficients) override;

    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    encrypted_t conv2d_im2col_inplace(const plain_t& kernel,
                                      const size_t windows_nb) override;
    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    encrypted_t replicate_first_slot_inplace(size_t n) override;
    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const string& vec) override;
    string save() const override;

    /**
     *Recreates a new CKKSVector from the current one, without any
     *pointer/reference to this one.
     **/
    encrypted_t copy() const override;
    encrypted_t deepcopy() const override;

    double scale() const override { return _init_scale; }

   private:
    double _init_scale;
    /*
    Private evaluation functions to process both scalar and vector arguments.
    */
    template <typename T>
    encrypted_t _add_plain_inplace(const T& to_add);
    template <typename T>
    encrypted_t _sub_plain_inplace(const T& to_sub);
    template <typename T>
    encrypted_t _mul_plain_inplace(const T& to_mul);

    CKKSVector(const shared_ptr<TenSEALContext>& ctx, const plain_t& vec,
               optional<double> scale = {});
    CKKSVector(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    CKKSVector(const TenSEALContextProto& ctx, const CKKSVectorProto& vec);
    CKKSVector(const shared_ptr<TenSEALContext>& ctx,
               const CKKSVectorProto& vec);
    CKKSVector(const shared_ptr<const CKKSVector>& vec);

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context, double scale,
                              plain_t pt);

    void load_proto(const CKKSVectorProto& buffer);
    CKKSVectorProto save_proto() const;
};

}  // namespace tenseal

#endif
