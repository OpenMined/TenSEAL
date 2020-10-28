#ifndef TENSEAL_TENSOR_ENCRYPTED_VECTOR_H
#define TENSEAL_TENSOR_ENCRYPTED_VECTOR_H

#include <vector>

#include "tenseal/cpp/tensors/encrypted_tensor.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * EncryptedVector<plain_t> interface - Specializes EncryptedTensor interface
 *for vectors.
 * @param plain_t: root plaintext datatype for representing data(double, int64
 *etc).
 *
 * The integrator must override the following inherited methods, along with the
 *EncryptedVector pure methods:
 * * vector<plain_t> EncryptedTensor::decrypt() const = 0;
 * * vector<plain_t> EncryptedTensor::decrypt() = 0;
 * * encrypted_t negate_inplace();
 * * encrypted_t square_inplace();
 * * encrypted_t add_inplace(encrypted_t to_add);
 * * encrypted_t sub_inplace(encrypted_t to_sub);
 * * encrypted_t mul_inplace(encrypted_t to_mul);
 * * encrypted_t dot_product_inplace(encrypted_t to_mul);
 * * encrypted_t dot_product_plain_inplace( const vector<plain_t>& to_mul);
 * * encrypted_t sum_inplace();
 * * encrypted_t EncryptedTensor::power_inplace(unsigned int power) = 0;
 * * encrypted_t EncryptedTensor::add_plain_inplace(plain_t to_add) = 0;
 * * encrypted_t EncryptedTensor::add_plain_inplace(const vector<plain_t>&
 *to_add) = 0;
 * * encrypted_t EncryptedTensor::sub_plain_inplace(plain_t to_sub) = 0;
 * * encrypted_t EncryptedTensor::sub_plain_inplace(const vector<plain_t>&
 *to_sub) = 0;
 * * encrypted_t EncryptedTensor::mul_plain_inplace(plain_t to_mul) = 0;
 * * encrypted_t EncryptedTensor::mul_plain_inplace(const vector<plain_t>&
 *to_mul) = 0;
 * * encrypted_t EncryptedTensor::polyval_inplace(const vector<double>&
 *coefficients) = 0;
 * * void EncryptedTensor::load(const string& vec) = 0;
 * * string EncryptedTensor::save() const = 0;
 * * encrypted_t EncryptedTensor::copy() const = 0;
 * * encrypted_t EncryptedTensor::deepcopy() const = 0;
 **/
template <typename plain_t, typename encrypted_t>
class EncryptedVector : public EncryptedTensor<plain_t, encrypted_t> {
   public:
    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const { return this->_size; }
    void size(size_t val) { this->_size = val; }

    /**
     * Returns information about the ciphertext.
     **/
    size_t ciphertext_size() const { return this->_ciphertext.size(); }
    const Ciphertext& ciphertext() const { return this->_ciphertext; }
    void ciphertext(Ciphertext&& other) { this->_ciphertext = other; }
    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    encrypted_t replicate_first_slot(size_t n) const {
        return this->copy()->replicate_first_slot_inplace(n);
    }
    virtual encrypted_t replicate_first_slot_inplace(size_t n) = 0;
    void broadcast_or_throw(encrypted_t other) {
        if (this->size() == other->size()) return;

        if (this->size() == 1) {
            this->replicate_first_slot_inplace(other->size());
            return;
        }

        if (other->size() == 1) {
            other->replicate_first_slot_inplace(this->size());
            return;
        }

        throw invalid_argument("can't compute on vectors of different sizes");
    }

    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    encrypted_t matmul_plain(const PlainTensor<plain_t>& matrix,
                             size_t n_jobs = 0) const {
        return this->copy()->matmul_plain_inplace(matrix, n_jobs);
    }
    virtual encrypted_t matmul_plain_inplace(const PlainTensor<plain_t>& matrix,
                                             size_t n_jobs = 0) = 0;
    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    encrypted_t enc_matmul_plain(const PlainTensor<plain_t>& plain_vec,
                                 size_t row_size) const {
        return this->copy()->enc_matmul_plain_inplace(plain_vec, row_size);
    }
    virtual encrypted_t enc_matmul_plain_inplace(
        const PlainTensor<plain_t>& plain_vec, size_t row_size) = 0;
    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    encrypted_t conv2d_im2col(const PlainTensor<plain_t>& kernel,
                              const size_t windows_nb) const {
        return this->copy()->conv2d_im2col_inplace(kernel, windows_nb);
    }
    virtual encrypted_t conv2d_im2col_inplace(
        const PlainTensor<plain_t>& kernel, const size_t windows_nb) = 0;
    void rotate_vector_inplace(int steps, const GaloisKeys& galois_keys) {
        this->tenseal_context()->evaluator->rotate_vector_inplace(
            this->_ciphertext, steps, galois_keys);
    }

    void auto_relin() {
        if (!this->tenseal_context()->auto_relin()) return;
        this->tenseal_context()->evaluator->relinearize_inplace(
            this->_ciphertext, *this->tenseal_context()->relin_keys());
    }

    void auto_rescale() {
        if (!this->tenseal_context()->auto_rescale()) return;

        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->_ciphertext);
        this->_ciphertext.scale() = this->scale();
    }

    template <typename Other>
    void auto_same_mod(Other& other) {
        if (should_set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                                   other)) {
            set_to_same_mod(this->tenseal_context(), this->_ciphertext, other);
        }
    }

    virtual double scale() const = 0;
    virtual ~EncryptedVector(){};

   protected:
    size_t _size;
    Ciphertext _ciphertext;
};

}  // namespace tenseal

#endif
