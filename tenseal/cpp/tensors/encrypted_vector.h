#ifndef TENSEAL_TENSOR_ENCRYPTED_VECTOR_H
#define TENSEAL_TENSOR_ENCRYPTED_VECTOR_H

#include <memory>
#include <optional>
#include <stdexcept>
#include <vector>

#include "seal/seal.h"
#include "tenseal/cpp/context/tensealcontext.h"
#include "tenseal/cpp/tensors/utils/utils.h"

namespace tenseal {

using namespace seal;
using namespace std;

template <typename plain>
class EncryptedVector : public enable_shared_from_this<EncryptedVector<plain>> {
   public:
    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of real numbers using the secret-key.
     **/
    virtual vector<plain> decrypt() const = 0;
    virtual vector<plain> decrypt(const shared_ptr<SecretKey>& sk) const = 0;
    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const;
    void size(size_t val);

    size_t ciphertext_size() const;
    const Ciphertext& ciphertext() const;
    void ciphertext(Ciphertext&&);
    /**
     * Negates a EncryptedVector<plain>.
     **/
    shared_ptr<EncryptedVector<plain>> negate() const;
    shared_ptr<EncryptedVector<plain>> negate_inplace();
    /**
     * Compute the square of the EncryptedVector<plain>.
     **/
    shared_ptr<EncryptedVector<plain>> square() const;
    shared_ptr<EncryptedVector<plain>> square_inplace();
    /**
     * Compute the power of the EncryptedVector<plain> with minimal
     *multiplication depth.
     **/
    shared_ptr<EncryptedVector<plain>> power(unsigned int power) const;
    virtual shared_ptr<EncryptedVector<plain>> power_inplace(
        unsigned int power) = 0;
    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    shared_ptr<EncryptedVector<plain>> replicate_first_slot(size_t n) const;
    shared_ptr<EncryptedVector<plain>> replicate_first_slot_inplace(size_t n);
    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new EncryptedVector<plain> which is the result of either
     *addition, substraction or multiplication in an element-wise fashion.
     *in_place functions return a reference to the same object.
     **/
    shared_ptr<EncryptedVector<plain>> add(
        shared_ptr<EncryptedVector<plain>> to_add) const;
    shared_ptr<EncryptedVector<plain>> add_inplace(
        shared_ptr<EncryptedVector<plain>> to_add);
    shared_ptr<EncryptedVector<plain>> sub(
        shared_ptr<EncryptedVector<plain>> to_sub) const;
    shared_ptr<EncryptedVector<plain>> sub_inplace(
        shared_ptr<EncryptedVector<plain>> to_sub);
    shared_ptr<EncryptedVector<plain>> mul(
        shared_ptr<EncryptedVector<plain>> to_mul) const;
    shared_ptr<EncryptedVector<plain>> mul_inplace(
        shared_ptr<EncryptedVector<plain>> to_mul);
    shared_ptr<EncryptedVector<plain>> dot_product(
        shared_ptr<EncryptedVector<plain>> to_mul) const;
    shared_ptr<EncryptedVector<plain>> dot_product_inplace(
        shared_ptr<EncryptedVector<plain>> to_mul);
    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new EncryptedVector<plain> which is the
     *result of either addition, substraction or multiplication in an
     *element-wise fashion. in_place functions return a reference to the same
     *object.
     **/
    shared_ptr<EncryptedVector<plain>> add_plain(plain to_add) const;
    shared_ptr<EncryptedVector<plain>> add_plain(
        const vector<plain>& to_add) const;
    virtual shared_ptr<EncryptedVector<plain>> add_plain_inplace(
        plain to_add) = 0;
    virtual shared_ptr<EncryptedVector<plain>> add_plain_inplace(
        const vector<plain>& to_add) = 0;

    shared_ptr<EncryptedVector<plain>> sub_plain(plain to_sub) const;
    shared_ptr<EncryptedVector<plain>> sub_plain(
        const vector<plain>& to_sub) const;
    virtual shared_ptr<EncryptedVector<plain>> sub_plain_inplace(
        plain to_sub) = 0;
    virtual shared_ptr<EncryptedVector<plain>> sub_plain_inplace(
        const vector<plain>& to_sub) = 0;

    shared_ptr<EncryptedVector<plain>> mul_plain(plain to_mul) const;
    shared_ptr<EncryptedVector<plain>> mul_plain(
        const vector<plain>& to_mul) const;
    virtual shared_ptr<EncryptedVector<plain>> mul_plain_inplace(
        plain to_mul) = 0;
    virtual shared_ptr<EncryptedVector<plain>> mul_plain_inplace(
        const vector<plain>& to_mul) = 0;

    shared_ptr<EncryptedVector<plain>> dot_product_plain(
        const vector<plain>& to_mul) const;
    shared_ptr<EncryptedVector<plain>> dot_product_plain_inplace(
        const vector<plain>& to_mul);
    shared_ptr<EncryptedVector<plain>> sum() const;
    shared_ptr<EncryptedVector<plain>> sum_inplace();
    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    shared_ptr<EncryptedVector<plain>> matmul_plain(
        const vector<vector<plain>>& matrix, size_t n_jobs = 0) const;
    virtual shared_ptr<EncryptedVector<plain>> matmul_plain_inplace(
        const vector<vector<plain>>& matrix, size_t n_jobs = 0) = 0;
    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    shared_ptr<EncryptedVector<plain>> enc_matmul_plain(
        const vector<plain>& plain_vec, size_t row_size);
    virtual shared_ptr<EncryptedVector<plain>> enc_matmul_plain_inplace(
        const vector<plain>& plain_vec, size_t row_size) = 0;
    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    shared_ptr<EncryptedVector<plain>> polyval(
        const vector<plain>& coefficients) const;
    virtual shared_ptr<EncryptedVector<plain>> polyval_inplace(
        const vector<plain>& coefficients) = 0;
    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    shared_ptr<EncryptedVector<plain>> conv2d_im2col(
        const vector<vector<plain>>& kernel, const size_t windows_nb) const;
    virtual shared_ptr<EncryptedVector<plain>> conv2d_im2col_inplace(
        const vector<vector<plain>>& kernel, const size_t windows_nb) = 0;

    void rotate_vector_inplace(int steps, const GaloisKeys& galois_keys);
    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    virtual void load(const string& vec) = 0;
    virtual string save() const = 0;

    /**
     *Recreates a new EncryptedVector<plain> from the current one, without any
     *pointer/reference to this one.
     **/
    virtual shared_ptr<EncryptedVector<plain>> copy() const = 0;
    virtual shared_ptr<EncryptedVector<plain>> deepcopy() const = 0;
    /**
     * Get a pointer to the current TenSEAL context.
     **/
    shared_ptr<TenSEALContext> tenseal_context() const;
    /**
     * Link to a TenSEAL context.
     **/
    void link_tenseal_context(shared_ptr<TenSEALContext> ctx);

    virtual double scale() const = 0;
    virtual ~EncryptedVector(){};

   protected:
    size_t _size;
    shared_ptr<TenSEALContext> _context;
    Ciphertext _ciphertext;
};

}  // namespace tenseal

#endif
