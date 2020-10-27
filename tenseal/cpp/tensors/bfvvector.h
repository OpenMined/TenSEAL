#ifndef TENSEAL_TENSOR_BFVVECTOR_H
#define TENSEAL_TENSOR_BFVVECTOR_H

#include "tenseal/cpp/tensors/encrypted_vector.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * Holds a vector of integers in its encrypted form using the BFV homomorphic
 * encryption scheme.
 **/

class BFVVector : public EncryptedVector<int64_t, shared_ptr<BFVVector>>,
                  public enable_shared_from_this<BFVVector> {
   public:
    using encrypted_t = shared_ptr<BFVVector>;
    template <typename... Args>
    static encrypted_t Create(Args&&... args) {
        return shared_ptr<BFVVector>(
            new BFVVector(std::forward<Args>(args)...));
    }

    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of integers using the secret-key.
     **/
    vector<int64_t> decrypt() const override;
    vector<int64_t> decrypt(const shared_ptr<SecretKey>& sk) const override;
    /**
     * Compute the power of the BFVVector with minimal multiplication depth.
     **/
    encrypted_t power_inplace(unsigned int power) override;
    /**
     * Negates a BFVVector.
     **/
    encrypted_t negate_inplace() override;
    /**
     * Compute the square of the BFVVector.
     **/
    encrypted_t square_inplace() override;
    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new BFVVector which is the result of either
     *addition, substraction or multiplication in an element-wise fashion.
     *in_place functions return a reference to the same object.
     **/
    encrypted_t add_inplace(encrypted_t to_add) override;
    encrypted_t sub_inplace(encrypted_t to_sub) override;
    encrypted_t mul_inplace(encrypted_t to_mul) override;
    encrypted_t dot_product_inplace(encrypted_t to_mul) override;
    encrypted_t dot_product_plain_inplace(
        const vector<int64_t>& to_mul) override;
    encrypted_t sum_inplace() override;

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new BFVVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    encrypted_t add_plain_inplace(int64_t to_add) override;
    encrypted_t add_plain_inplace(const vector<int64_t>& to_add) override;
    encrypted_t sub_plain_inplace(int64_t to_sub) override;
    encrypted_t sub_plain_inplace(const vector<int64_t>& to_sub) override;
    encrypted_t mul_plain_inplace(int64_t to_mul) override;
    encrypted_t mul_plain_inplace(const vector<int64_t>& to_mul) override;
    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    encrypted_t matmul_plain_inplace(const vector<vector<int64_t>>& matrix,
                                     size_t n_jobs = 0) override;

    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    encrypted_t enc_matmul_plain_inplace(const vector<int64_t>& plain_vec,
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
    encrypted_t conv2d_im2col_inplace(const vector<vector<int64_t>>& kernel,
                                      const size_t windows_nb) override;
    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    encrypted_t replicate_first_slot_inplace(size_t n) override;
    void rotate_vector_inplace(int steps,
                               const GaloisKeys& galois_keys) override;

    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const string& vec) override;
    string save() const override;
    /**
     *Recreates a new BFVVector from the current one, without any
     *pointer/reference to this one.
     * **/
    encrypted_t copy() const override;
    encrypted_t deepcopy() const override;

    double scale() const override { throw logic_error("not implemented"); }

   private:
    BFVVector(const shared_ptr<TenSEALContext>& ctx,
              const vector<int64_t>& vec);
    BFVVector(const shared_ptr<const BFVVector>&);
    BFVVector(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    BFVVector(const TenSEALContextProto& ctx, const BFVVectorProto& vec);
    BFVVector(const shared_ptr<TenSEALContext>& ctx, const BFVVectorProto& vec);

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context,
                              vector<int64_t> input);

    void load_proto(const BFVVectorProto& buffer);
    BFVVectorProto save_proto() const;

    void prepare_context(const shared_ptr<TenSEALContext>& ctx);
    void load_context_proto(const TenSEALContextProto& buffer);

    // make pack_vectors a friend function in order to be able to modify vector
    // size (_size private member)
    friend encrypted_t pack_vectors<BFVVector, BatchEncoder, int64_t>(
        const vector<encrypted_t>&);
};

}  // namespace tenseal

#endif
