#ifndef TENSEAL_TENSOR_TENSOR_H
#define TENSEAL_TENSOR_TENSOR_H

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

class EncryptedTensor : public enable_shared_from_this<EncryptedTensor> {
   public:
    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of real numbers using the secret-key.
     **/
    virtual vector<double> decrypt() const = 0;
    virtual vector<double> decrypt(const shared_ptr<SecretKey>& sk) const = 0;
    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const;
    void size(size_t val);

    size_t ciphertext_size() const;
    const Ciphertext& ciphertext() const;
    void ciphertext(Ciphertext&&);
    /**
     * Negates a EncryptedTensor.
     **/
    shared_ptr<EncryptedTensor> negate() const;
    shared_ptr<EncryptedTensor> negate_inplace();
    /**
     * Compute the square of the EncryptedTensor<double>.
     **/
    shared_ptr<EncryptedTensor> square() const;
    shared_ptr<EncryptedTensor> square_inplace();
    /**
     * Compute the power of the EncryptedTensor<double> with minimal
     *multiplication depth.
     **/
    shared_ptr<EncryptedTensor> power(unsigned int power) const;
    virtual shared_ptr<EncryptedTensor> power_inplace(unsigned int power) = 0;
    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    shared_ptr<EncryptedTensor> replicate_first_slot(size_t n) const;
    shared_ptr<EncryptedTensor> replicate_first_slot_inplace(size_t n);
    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new EncryptedTensor<double> which is the result of either
     *addition, substraction or multiplication in an element-wise fashion.
     *in_place functions return a reference to the same object.
     **/
    shared_ptr<EncryptedTensor> add(shared_ptr<EncryptedTensor> to_add) const;
    shared_ptr<EncryptedTensor> add_inplace(shared_ptr<EncryptedTensor> to_add);
    shared_ptr<EncryptedTensor> sub(shared_ptr<EncryptedTensor> to_sub) const;
    shared_ptr<EncryptedTensor> sub_inplace(shared_ptr<EncryptedTensor> to_sub);
    shared_ptr<EncryptedTensor> mul(shared_ptr<EncryptedTensor> to_mul) const;
    shared_ptr<EncryptedTensor> mul_inplace(shared_ptr<EncryptedTensor> to_mul);
    shared_ptr<EncryptedTensor> dot_product(
        shared_ptr<EncryptedTensor> to_mul) const;
    shared_ptr<EncryptedTensor> dot_product_inplace(
        shared_ptr<EncryptedTensor> to_mul);
    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new EncryptedTensor<double> which is the
     *result of either addition, substraction or multiplication in an
     *element-wise fashion. in_place functions return a reference to the same
     *object.
     **/
    shared_ptr<EncryptedTensor> add_plain(double to_add) const;
    shared_ptr<EncryptedTensor> add_plain(const vector<double>& to_add) const;
    virtual shared_ptr<EncryptedTensor> add_plain_inplace(double to_add) = 0;
    virtual shared_ptr<EncryptedTensor> add_plain_inplace(
        const vector<double>& to_add) = 0;
    shared_ptr<EncryptedTensor> sub_plain(double to_sub) const;
    shared_ptr<EncryptedTensor> sub_plain(const vector<double>& to_sub) const;
    virtual shared_ptr<EncryptedTensor> sub_plain_inplace(double to_sub) = 0;
    virtual shared_ptr<EncryptedTensor> sub_plain_inplace(
        const vector<double>& to_sub) = 0;
    shared_ptr<EncryptedTensor> mul_plain(double to_mul) const;
    shared_ptr<EncryptedTensor> mul_plain(const vector<double>& to_mul) const;
    virtual shared_ptr<EncryptedTensor> mul_plain_inplace(double to_mul) = 0;
    virtual shared_ptr<EncryptedTensor> mul_plain_inplace(
        const vector<double>& to_mul) = 0;
    shared_ptr<EncryptedTensor> dot_product_plain(
        const vector<double>& to_mul) const;
    shared_ptr<EncryptedTensor> dot_product_plain_inplace(
        const vector<double>& to_mul);
    shared_ptr<EncryptedTensor> sum() const;
    shared_ptr<EncryptedTensor> sum_inplace();
    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    shared_ptr<EncryptedTensor> matmul_plain(
        const vector<vector<double>>& matrix, size_t n_jobs = 0) const;
    virtual shared_ptr<EncryptedTensor> matmul_plain_inplace(
        const vector<vector<double>>& matrix, size_t n_jobs = 0) = 0;
    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    shared_ptr<EncryptedTensor> enc_matmul_plain(
        const vector<double>& plain_vec, size_t row_size);
    virtual shared_ptr<EncryptedTensor> enc_matmul_plain_inplace(
        const vector<double>& plain_vec, size_t row_size) = 0;
    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    shared_ptr<EncryptedTensor> polyval(
        const vector<double>& coefficients) const;
    virtual shared_ptr<EncryptedTensor> polyval_inplace(
        const vector<double>& coefficients) = 0;
    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    shared_ptr<EncryptedTensor> conv2d_im2col(
        const vector<vector<double>>& kernel, const size_t windows_nb) const;
    virtual shared_ptr<EncryptedTensor> conv2d_im2col_inplace(
        const vector<vector<double>>& kernel, const size_t windows_nb) = 0;

    void rotate_vector_inplace(int steps, const GaloisKeys& galois_keys);
    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    virtual void load(const string& vec) = 0;
    virtual string save() const = 0;

    /**
     *Recreates a new EncryptedTensor<double> from the current one, without any
     *pointer/reference to this one.
     **/
    virtual shared_ptr<EncryptedTensor> copy() const = 0;
    virtual shared_ptr<EncryptedTensor> deepcopy() const = 0;
    /**
     * Get a pointer to the current TenSEAL context.
     **/
    shared_ptr<TenSEALContext> tenseal_context() const;
    /**
     * Link to a TenSEAL context.
     **/
    void link_tenseal_context(shared_ptr<TenSEALContext> ctx);
    shared_ptr<EncryptedTensor> as_encrypted_tensor();

    virtual double scale() const = 0;
    virtual ~EncryptedTensor(){};

   protected:
    size_t _size;
    shared_ptr<TenSEALContext> _context;
    Ciphertext _ciphertext;
};

using SharedEncryptedTensor = shared_ptr<EncryptedTensor>;

}  // namespace tenseal

#endif
