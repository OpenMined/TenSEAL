#ifndef TENSEAL_UTILS_MATRIX_OPS_H
#define TENSEAL_UTILS_MATRIX_OPS_H

#include <seal/seal.h>

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
    size_t n_cols = matrix[0].size();

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
    size_t vector_size, const vector<vector<T>>& matrix) {
    // matrix is organized by rows
    // _check_matrix(matrix, this->size())
    size_t n_rows = matrix.size();
    size_t n_cols = matrix[0].size();

    if (vector_size != matrix.size()) {
        throw invalid_argument("matrix shape doesn't match with vector size");
    }

    mutex result_mutex;
    Ciphertext result;
    // result should have the same scale and modulus as vec * pt_diag (ct)
    tenseal_context->encryptor->encrypt_zero(vec.parms_id(), result);
    result.scale() = vec.scale() * tenseal_context->global_scale();

    // TODO:
    // - each thread sum in a local result, then add with the global result at
    // the end
    // - maybe use queue for i values instead of dividing the range equally
    // - limit scope of the lambda function [&]
    // - rename threads and function
    auto thread_func = [&](size_t start, size_t end) {
        for (size_t i = start; i < end; i++) {
            Ciphertext ct;
            Plaintext pt_diag;
            vector<T> diag;

            diag = get_diagonal(matrix, -i,
                                tenseal_context->slot_count<Encoder>());
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
            result_mutex.lock();
            tenseal_context->evaluator->add_inplace(result, ct);
            result_mutex.unlock();
        }
    };

    // // start threads
    // int n_threads = 1;
    // vector<thread> threads;
    // threads.reserve(n_threads);
    // int step = n_rows / n_threads;
    // for (int i = 0; i < n_threads - 1; i++)
    //     threads.push_back(thread(thread_func, i * step, (i + 1) * step));
    // threads.push_back(thread(thread_func, (n_threads - 1) * step, n_rows));

    // // wait for threads
    // for (int i = 0; i < n_threads - 1; i++) threads[i].join();

    int n_threads = 8;
    int step = n_rows / n_threads;
    thread thread0(thread_func, 0 * step, 1 * step);
    thread thread1(thread_func, 1 * step, 2 * step);
    thread thread2(thread_func, 2 * step, 3 * step);
    thread thread3(thread_func, 3 * step, 4 * step);
    thread thread4(thread_func, 4 * step, 5 * step);
    thread thread5(thread_func, 5 * step, 6 * step);
    thread thread6(thread_func, 6 * step, 7 * step);
    thread thread7(thread_func, 7 * step, n_rows);
    // thread thread7(thread_func, 7 * step, 8 * step);
    // thread thread8(thread_func, 8 * step, 9 * step);
    // thread thread9(thread_func, 9 * step, 10 * step);
    // thread thread10(thread_func, 10 * step, 11 * step);
    // thread thread11(thread_func, 11 * step, 12 * step);
    // thread thread12(thread_func, 12 * step, 13 * step);
    // thread thread13(thread_func, 13 * step, 14 * step);
    // thread thread14(thread_func, 14 * step, 15 * step);
    // thread thread15(thread_func, 15 * step, n_rows);

    thread0.join();
    thread1.join();
    thread2.join();
    thread3.join();
    thread4.join();
    thread5.join();
    thread6.join();
    thread7.join();
    // thread8.join();
    // thread9.join();
    // thread10.join();
    // thread11.join();
    // thread12.join();
    // thread13.join();
    // thread14.join();
    // thread15.join();

    return result;
}

}  // namespace tenseal

#endif
