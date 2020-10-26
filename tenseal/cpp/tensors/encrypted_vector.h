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
 * * encrypted_t EncryptedTensor::polyval_inplace(const vector<plain_t>&
 *coefficients) = 0;
 * * void EncryptedTensor::load(const string& vec) = 0;
 * * string EncryptedTensor::save() const = 0;
 * * encrypted_t EncryptedTensor::copy() const = 0;
 * * encrypted_t EncryptedTensor::deepcopy() const = 0;
 **/
template <typename plain_t>
class EncryptedVector
    : public EncryptedTensor<plain_t, vector<plain_t>,
                             shared_ptr<EncryptedVector<plain_t>>>,
      public enable_shared_from_this<EncryptedVector<plain_t>> {
   public:
    using encrypted_t = shared_ptr<EncryptedVector<plain_t>>;
    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const;
    void size(size_t val);
    /**
     * Returns information about the ciphertext.
     **/
    size_t ciphertext_size() const;
    const Ciphertext& ciphertext() const;
    void ciphertext(Ciphertext&&);
    /**
     * Negates a EncryptedVector<plain_t>.
     **/
    encrypted_t negate_inplace() override;
    /**
     * Compute the square of the EncryptedVector<plain_t>.
     **/
    encrypted_t square_inplace();
    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    encrypted_t replicate_first_slot(size_t n) const;
    encrypted_t replicate_first_slot_inplace(size_t n);
    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new EncryptedVector<plain_t> which is the result of either
     *addition, substraction or multiplication in an element-wise fashion.
     *in_place functions return a reference to the same object.
     **/
    encrypted_t add_inplace(encrypted_t to_add) override;
    encrypted_t sub_inplace(encrypted_t to_sub) override;
    encrypted_t mul_inplace(encrypted_t to_mul) override;
    encrypted_t dot_product_inplace(encrypted_t to_mul) override;
    encrypted_t dot_product_plain_inplace(
        const vector<plain_t>& to_mul) override;
    encrypted_t sum_inplace() override;
    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    encrypted_t matmul_plain(const vector<vector<plain_t>>& matrix,
                             size_t n_jobs = 0) const;
    virtual encrypted_t matmul_plain_inplace(
        const vector<vector<plain_t>>& matrix, size_t n_jobs = 0) = 0;
    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    encrypted_t enc_matmul_plain(const vector<plain_t>& plain_vec,
                                 size_t row_size);
    virtual encrypted_t enc_matmul_plain_inplace(
        const vector<plain_t>& plain_vec, size_t row_size) = 0;
    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    encrypted_t conv2d_im2col(const vector<vector<plain_t>>& kernel,
                              const size_t windows_nb) const;
    virtual encrypted_t conv2d_im2col_inplace(
        const vector<vector<plain_t>>& kernel, const size_t windows_nb) = 0;

    void rotate_vector_inplace(int steps, const GaloisKeys& galois_keys);

    virtual double scale() const = 0;
    virtual ~EncryptedVector(){};

   protected:
    size_t _size;
    Ciphertext _ciphertext;
};

}  // namespace tenseal

#endif
