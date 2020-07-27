#ifndef TENSEAL_UTILS_MATRIX_OPS_H
#define TENSEAL_UTILS_MATRIX_OPS_H

#include <seal/seal.h>

#include <atomic>
#include <memory>
#include <mutex>
#include <thread>

#include "tenseal/tensealcontext.h"
#include "tenseal/utils/utils.h"

namespace tenseal {

using namespace seal;
using namespace std;

/*
Returns the k-th diagonal of a matrix. Positive values of k represent upper
diagonals while negative values represent lower diagonal with 0 being the main
diagonal. It's important to note that diagonals are extended to fit the size of
the matrix, we do that by rotating whenever we reach the boundaries of the
matrix.
*/
template <typename T>
vector<T> get_diagonal(const vector<vector<T>>& matrix, int k,
                       size_t max_size) {
    size_t n_rows = matrix.size();
    size_t n_cols = matrix[0].size();

    vector<double> t_diag;
    t_diag.reserve(n_rows * n_cols);

    size_t r_offset = 0, c_offset = 0;
    if (k > 0) {  // upper diagonals
        c_offset = k;
    } else {  // lower diagonal
        r_offset = -k;
    }

    size_t diag_size = min(max_size, n_rows * n_cols);
    for (size_t i = 0; i < diag_size; i++) {
        t_diag.push_back(
            matrix[(r_offset + i) % n_rows][(c_offset + i) % n_cols]);
    }

    return t_diag;
}

/*
Perform encrypted_vector-plain_matrix multiplication using a variant of the
diagonal method of Halevi and Shoup [1].

[1] Halevi, S., & Shoup, V. (2014, August). Algorithms in helib. In Annual
Cryptology Conference (pp. 554-571). Springer, Berlin, Heidelberg.
*/
template <typename T, class Encoder>
Ciphertext diagonal_ct_vector_matmul(shared_ptr<TenSEALContext> tenseal_context,
                                     Ciphertext& vec, size_t vector_size,
                                     const vector<vector<T>>& matrix) {
    // matrix is organized by rows
    // _check_matrix(matrix, this->size())
    size_t n_rows = matrix.size();

    if (vector_size != matrix.size()) {
        throw invalid_argument("matrix shape doesn't match with vector size");
    }

    Ciphertext result;
    // result should have the same scale and modulus as vec * pt_diag (ct)
    tenseal_context->encryptor->encrypt_zero(vec.parms_id(), result);
    result.scale() = vec.scale() * tenseal_context->global_scale();

    for (size_t i = 0; i < n_rows; i++) {
        Ciphertext ct;
        Plaintext pt_diag;
        vector<T> diag;

        diag = get_diagonal(matrix, -i, tenseal_context->slot_count<Encoder>());
        replicate_vector(diag, tenseal_context->slot_count<Encoder>());

        rotate(diag.begin(), diag.begin() + diag.size() - i, diag.end());

        tenseal_context->encode<Encoder>(diag, pt_diag);

        if (vec.parms_id() != pt_diag.parms_id()) {
            set_to_same_mod(tenseal_context, vec, pt_diag);
        }
        tenseal_context->evaluator->multiply_plain(vec, pt_diag, ct);

        tenseal_context->evaluator->rotate_vector_inplace(
            ct, i, *tenseal_context->galois_keys());

        // accumulate results
        tenseal_context->evaluator->add_inplace(result, ct);
    }

    return result;
}

template <typename T, class Encoder>
Ciphertext diagonal_ct_vector_matmul_parallel(
    shared_ptr<TenSEALContext> tenseal_context, Ciphertext& vec,
    const size_t vector_size, const vector<vector<T>>& matrix,
    uint n_threads = 0) {
    // matrix is organized by rows
    // _check_matrix(matrix, this->size())
    const size_t n_rows = matrix.size();

    if (vector_size != matrix.size()) {
        throw invalid_argument("matrix shape doesn't match with vector size");
    }

    mutex result_mutex;
    Ciphertext result;
    // result should have the same scale and modulus as vec * pt_diag (ct)
    tenseal_context->encryptor->encrypt_zero(vec.parms_id(), result);
    result.scale() = vec.scale() * tenseal_context->global_scale();

    atomic<size_t> i = 0;
    auto thread_func = [&tenseal_context, &vec, &matrix, &result, &result_mutex,
                        &i, n_rows]() {
        while (true) {
            // take next i
            size_t local_i;
            local_i = i.fetch_add(1);
            if (local_i >= n_rows) {
                break;
            }

            Ciphertext ct;
            Plaintext pt_diag;
            vector<T> diag;

            diag = get_diagonal(matrix, -local_i,
                                tenseal_context->slot_count<Encoder>());
            replicate_vector(diag, tenseal_context->slot_count<Encoder>());

            rotate(diag.begin(), diag.begin() + diag.size() - local_i,
                   diag.end());

            tenseal_context->encode<Encoder>(diag, pt_diag);

            if (vec.parms_id() != pt_diag.parms_id()) {
                set_to_same_mod(tenseal_context, vec, pt_diag);
            }
            tenseal_context->evaluator->multiply_plain(vec, pt_diag, ct);

            tenseal_context->evaluator->rotate_vector_inplace(
                ct, local_i, *tenseal_context->galois_keys());

            // accumulate results
            result_mutex.lock();
            tenseal_context->evaluator->add_inplace(result, ct);
            result_mutex.unlock();
        }
    };

    // if not specified (n_threads set to 0), detect automatically
    if (n_threads == 0) n_threads = get_concurrency();
    vector<thread> threads;
    threads.reserve(n_threads);
    // start the threads
    for (int i = 0; i < n_threads; i++) threads.push_back(thread(thread_func));
    // wait for the threads
    for (int i = 0; i < n_threads; i++) threads[i].join();

    return result;
}

}  // namespace tenseal

#endif
