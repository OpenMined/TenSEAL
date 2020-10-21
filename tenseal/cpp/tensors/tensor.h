#ifndef TENSEAL_TENSOR_TENSOR_H
#define TENSEAL_TENSOR_TENSOR_H

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
    virtual size_t size() const = 0;
    virtual size_t ciphertext_size() const = 0;

    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    virtual shared_ptr<EncryptedTensor> replicate_first_slot(
        size_t n) const = 0;
    virtual shared_ptr<EncryptedTensor> replicate_first_slot_inplace(
        size_t n) = 0;

    /**
     * Negates a EncryptedTensor<double>.
     **/
    virtual shared_ptr<EncryptedTensor> negate() const = 0;
    virtual shared_ptr<EncryptedTensor> negate_inplace() = 0;

    /**
     * Compute the square of the EncryptedTensor<double>.
     **/
    virtual shared_ptr<EncryptedTensor> square() const = 0;
    virtual shared_ptr<EncryptedTensor> square_inplace() = 0;

    /**
     * Compute the power of the EncryptedTensor<double> with minimal
     *multiplication depth.
     **/
    virtual shared_ptr<EncryptedTensor> power(unsigned int power) const = 0;
    virtual shared_ptr<EncryptedTensor> power_inplace(unsigned int power) = 0;

    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new EncryptedTensor<double> which is the result of either
     *addition, substraction or multiplication in an element-wise fashion.
     *in_place functions return a reference to the same object.
     **/
    virtual shared_ptr<EncryptedTensor> add(
        shared_ptr<EncryptedTensor> to_add) const = 0;
    virtual shared_ptr<EncryptedTensor> add_inplace(
        shared_ptr<EncryptedTensor> to_add) = 0;
    virtual shared_ptr<EncryptedTensor> sub(
        shared_ptr<EncryptedTensor> to_sub) const = 0;
    virtual shared_ptr<EncryptedTensor> sub_inplace(
        shared_ptr<EncryptedTensor> to_sub) = 0;
    virtual shared_ptr<EncryptedTensor> mul(
        shared_ptr<EncryptedTensor> to_mul) const = 0;
    virtual shared_ptr<EncryptedTensor> mul_inplace(
        shared_ptr<EncryptedTensor> to_mul) = 0;
    virtual shared_ptr<EncryptedTensor> dot_product(
        shared_ptr<EncryptedTensor> to_mul) const = 0;
    virtual shared_ptr<EncryptedTensor> dot_product_inplace(
        shared_ptr<EncryptedTensor> to_mul) = 0;

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new EncryptedTensor<double> which is the
     *result of either addition, substraction or multiplication in an
     *element-wise fashion. in_place functions return a reference to the same
     *object.
     **/
    virtual shared_ptr<EncryptedTensor> add_plain(double to_add) const = 0;
    virtual shared_ptr<EncryptedTensor> add_plain(
        const vector<double>& to_add) const = 0;
    virtual shared_ptr<EncryptedTensor> add_plain_inplace(double to_add) = 0;
    virtual shared_ptr<EncryptedTensor> add_plain_inplace(
        const vector<double>& to_add) = 0;
    virtual shared_ptr<EncryptedTensor> sub_plain(double to_sub) const = 0;
    virtual shared_ptr<EncryptedTensor> sub_plain(
        const vector<double>& to_sub) const = 0;
    virtual shared_ptr<EncryptedTensor> sub_plain_inplace(double to_sub) = 0;
    virtual shared_ptr<EncryptedTensor> sub_plain_inplace(
        const vector<double>& to_sub) = 0;
    virtual shared_ptr<EncryptedTensor> mul_plain(double to_mul) const = 0;
    virtual shared_ptr<EncryptedTensor> mul_plain(
        const vector<double>& to_mul) const = 0;
    virtual shared_ptr<EncryptedTensor> mul_plain_inplace(double to_mul) = 0;
    virtual shared_ptr<EncryptedTensor> mul_plain_inplace(
        const vector<double>& to_mul) = 0;
    virtual shared_ptr<EncryptedTensor> dot_product_plain(
        const vector<double>& to_mul) const = 0;
    virtual shared_ptr<EncryptedTensor> dot_product_plain_inplace(
        const vector<double>& to_mul) = 0;
    virtual shared_ptr<EncryptedTensor> sum() const = 0;
    virtual shared_ptr<EncryptedTensor> sum_inplace() = 0;

    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    virtual shared_ptr<EncryptedTensor> matmul_plain(
        const vector<vector<double>>& matrix, size_t n_jobs = 0) const = 0;
    virtual shared_ptr<EncryptedTensor> matmul_plain_inplace(
        const vector<vector<double>>& matrix, size_t n_jobs = 0) = 0;

    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    virtual shared_ptr<EncryptedTensor> enc_matmul_plain(
        const vector<double>& plain_vec, size_t row_size) = 0;
    virtual shared_ptr<EncryptedTensor> enc_matmul_plain_inplace(
        const vector<double>& plain_vec, size_t row_size) = 0;

    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    virtual shared_ptr<EncryptedTensor> polyval(
        const vector<double>& coefficients) const = 0;
    virtual shared_ptr<EncryptedTensor> polyval_inplace(
        const vector<double>& coefficients) = 0;

    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    virtual shared_ptr<EncryptedTensor> conv2d_im2col(
        const vector<vector<double>>& kernel,
        const size_t windows_nb) const = 0;
    virtual shared_ptr<EncryptedTensor> conv2d_im2col_inplace(
        const vector<vector<double>>& kernel, const size_t windows_nb) = 0;

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
    shared_ptr<TenSEALContext> tenseal_context() const {
        if (_context == nullptr) throw invalid_argument("missing context");
        return _context;
    }
    /**
     * Link to a TenSEAL context.
     **/
    void link_tenseal_context(shared_ptr<TenSEALContext> ctx) {
        this->_context = ctx;
    }

    shared_ptr<EncryptedTensor> as_encrypted_tensor() {
        return shared_from_this();
    }

    virtual ~EncryptedTensor(){};
    // protected:
    size_t _size;
    shared_ptr<TenSEALContext> _context;
    Ciphertext _ciphertext;
    double _init_scale;
};

using SharedEncryptedTensor = shared_ptr<EncryptedTensor>;

}  // namespace tenseal

#endif
