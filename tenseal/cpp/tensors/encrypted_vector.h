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
 * * vector<plain_t> EncryptedTensor::decrypt(const shared_ptr<SecretKey>&)
 *const = 0;
 * * encrypted_t negate_inplace_impl();
 * * encrypted_t square_inplace_impl();
 * * encrypted_t add_inplace_impl(encrypted_t to_add);
 * * encrypted_t sub_inplace_impl(encrypted_t to_sub);
 * * encrypted_t mul_inplace_impl(encrypted_t to_mul);
 * * encrypted_t dot_product_inplace_impl(encrypted_t to_mul);
 * * encrypted_t dot_product_plain_inplace_impl( const vector<plain_t>& to_mul);
 * * encrypted_t sum_inplace_impl();
 * * encrypted_t EncryptedTensor::power_inplace_impl(unsigned int power) = 0;
 * * encrypted_t EncryptedTensor::add_plain_inplace_impl(plain_t to_add) = 0;
 * * encrypted_t EncryptedTensor::add_plain_inplace_impl(const
 *PlainTensor<plain_t>& to_add) = 0;
 * * encrypted_t EncryptedTensor::sub_plain_inplace_impl(plain_t to_sub) = 0;
 * * encrypted_t EncryptedTensor::sub_plain_inplace_impl(const
 *PlainTensor<plain_t>& to_sub) = 0;
 * * encrypted_t EncryptedTensor::mul_plain_inplace_impl(plain_t to_mul) = 0;
 * * encrypted_t EncryptedTensor::mul_plain_inplace_impl(const
 *PlainTensor<plain_t>& to_mul) = 0;
 * * encrypted_t EncryptedTensor::polyval_inplace_impl(const vector<double>&
 *coefficients) = 0;
 * * void EncryptedTensor::load(const string& vec) = 0;
 * * string EncryptedTensor::save() const = 0;
 * * encrypted_t EncryptedTensor::copy() const = 0;
 * * encrypted_t EncryptedTensor::deepcopy() const = 0;
 **/
template <typename plain_t, typename encrypted_t, typename encoder_t>
class EncryptedVector : public EncryptedTensor<plain_t, encrypted_t> {
   public:
    /**
     * Return the size of the encrypted vector.
     **/
    size_t size() const { return this->_size; }
    void size(size_t val) { this->_size = val; }

    /**
     * Return information about the ciphertext.
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
    encrypted_t replicate_first_slot_inplace(size_t n) {
        this->_check_operation_sanity();
        return replicate_first_slot_inplace_impl(n);
    };
    /**
     * Adjust two vectors to match sizes.
     * @return the right operand, in case it was copied and altered.
     **/
    encrypted_t broadcast_or_throw(const encrypted_t& other) {
        if (this->size() == other->size()) return other;

        if (this->size() == 1) {
            this->replicate_first_slot_inplace(other->size());
            return other;
        }

        if (other->size() == 1) {
            auto other_copy = other->copy();
            other_copy->replicate_first_slot_inplace(this->size());
            return other_copy;
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
    encrypted_t matmul_plain_inplace(const PlainTensor<plain_t>& matrix,
                                     size_t n_jobs = 0) {
        this->_check_operation_sanity();
        return matmul_plain_inplace_impl(matrix, n_jobs);
    };
    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    encrypted_t enc_matmul_plain(const PlainTensor<plain_t>& plain_vec,
                                 size_t row_size) const {
        return this->copy()->enc_matmul_plain_inplace(plain_vec, row_size);
    }
    encrypted_t enc_matmul_plain_inplace(const PlainTensor<plain_t>& plain_vec,
                                         size_t row_size) {
        this->_check_operation_sanity();
        return enc_matmul_plain_inplace_impl(plain_vec, row_size);
    };
    /**
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     **/
    encrypted_t conv2d_im2col(const PlainTensor<plain_t>& kernel,
                              const size_t windows_nb) const {
        return this->copy()->conv2d_im2col_inplace(kernel, windows_nb);
    }
    encrypted_t conv2d_im2col_inplace(const PlainTensor<plain_t>& kernel,
                                      const size_t windows_nb) {
        this->_check_operation_sanity();
        return conv2d_im2col_inplace_impl(kernel, windows_nb);
    };

    /**
     * Rotate encrypted plaintext cyclically
     * @param[in] number of steps and direction. if steps < 0, it rotates the
     *vector to the right, else it rotates it to the left.
     * @param[in] The Galois keys
     **/
    void rotate_vector_inplace(int steps, const GaloisKeys& galois_keys) {
        this->tenseal_context()->evaluator->rotate_vector_inplace(
            this->_ciphertext, steps, galois_keys);
    }

    /*
    Perform encrypted_vector-plain_matrix multiplication using a variant of the
    diagonal method of Halevi and Shoup [1].
    [1] Halevi, S., & Shoup, V. (2014, August). Algorithms in helib. In Annual
    Cryptology Conference (pp. 554-571). Springer, Berlin, Heidelberg.
    */
    Ciphertext diagonal_ct_vector_matmul(const PlainTensor<plain_t>& matrix,
                                         size_t n_jobs) {
        // matrix is organized by rows
        // _check_matrix(matrix, this->size())

        if (this->size() != matrix.size()) {
            throw invalid_argument(
                "matrix shape doesn't match with vector size");
        }

        if (!this->tenseal_context()->dispatcher() ||
            !this->tenseal_context()->dispatcher_size()) {
            throw invalid_argument("invalid dispatcher");
        }

        Ciphertext result;
        // result should have the same scale and modulus as vec * pt_diag (ct)
        this->tenseal_context()->encryptor->encrypt_zero(
            this->_ciphertext.parms_id(), result);
        result.scale() =
            this->_ciphertext.scale() * this->tenseal_context()->global_scale();

        auto worker_func = [&](size_t start, size_t end) -> Ciphertext {
            Ciphertext thread_result;
            this->tenseal_context()->encryptor->encrypt_zero(
                this->_ciphertext.parms_id(), thread_result);
            thread_result.scale() = this->_ciphertext.scale() *
                                    this->tenseal_context()->global_scale();

            for (size_t local_i = start; local_i < end; ++local_i) {
                Ciphertext ct;
                Plaintext pt_diag;

                auto diag = matrix.get_diagonal(
                    -local_i,
                    this->tenseal_context()->template slot_count<encoder_t>());
                replicate_vector(
                    diag,
                    this->tenseal_context()->template slot_count<encoder_t>());

                rotate(diag.begin(), diag.begin() + diag.size() - local_i,
                       diag.end());

                this->tenseal_context()->template encode<encoder_t>(diag,
                                                                    pt_diag);

                if (this->_ciphertext.parms_id() != pt_diag.parms_id()) {
                    this->set_to_same_mod(pt_diag, _ciphertext);
                }
                this->tenseal_context()->evaluator->multiply_plain(
                    this->_ciphertext, pt_diag, ct);

                this->tenseal_context()->evaluator->rotate_vector_inplace(
                    ct, local_i, *this->tenseal_context()->galois_keys());

                // accumulate thread results
                this->tenseal_context()->evaluator->add_inplace(thread_result,
                                                                ct);
            }
            return thread_result;
        };

        if (n_jobs == 0) n_jobs = this->tenseal_context()->dispatcher_size();

        if (n_jobs == 1) return worker_func(0, this->size());

        std::vector<std::future<Ciphertext>> future_results;
        size_t batch_size = (this->size() + n_jobs - 1) / n_jobs;

        for (size_t i = 0; i < n_jobs; i++) {
            future_results.push_back(
                this->tenseal_context()->dispatcher()->enqueue_task(
                    worker_func, i * batch_size,
                    std::min((i + 1) * batch_size, this->size())));
        }

        std::optional<std::exception> fail;
        for (size_t i = 0; i < n_jobs; i++) {
            try {
                this->tenseal_context()->evaluator->add_inplace(
                    result, future_results[i].get());
            } catch (std::exception& e) {
                fail = e;
            }
        }

        if (fail) {
            throw invalid_argument(fail.value().what());
        }

        return result;
    }

    virtual ~EncryptedVector(){};

   protected:
    size_t _size;
    Ciphertext _ciphertext;

    virtual encrypted_t replicate_first_slot_inplace_impl(size_t n) = 0;
    virtual encrypted_t matmul_plain_inplace_impl(
        const PlainTensor<plain_t>& matrix, size_t n_jobs = 0) = 0;
    virtual encrypted_t enc_matmul_plain_inplace_impl(
        const PlainTensor<plain_t>& plain_vec, size_t row_size) = 0;
    virtual encrypted_t conv2d_im2col_inplace_impl(
        const PlainTensor<plain_t>& kernel, const size_t windows_nb) = 0;
};

}  // namespace tenseal

#endif
