#ifndef TENSEAL_MATRIX_OPS_H
#define TENSEAL_MATRIX_OPS_H

#include <seal/seal.h>

#include <memory>

#include "tensealcontext.h"

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
vector<T> get_diagonal(const vector<vector<T>>& matrix, int k) {
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

    for (size_t i = 0; i < n_rows * n_cols; i++) {
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
                                     const Ciphertext& vec, size_t vector_size,
                                     const vector<vector<T>>& matrix) {
    // matrix is organized by rows
    // _check_matrix(matrix, this->size())
    size_t n_rows = matrix.size();
    size_t n_cols = matrix[0].size();

    if (vector_size != matrix.size()) {
        throw invalid_argument("matrix shape doesn't match with vector size");
    }

    vector<Ciphertext> results;
    Ciphertext result;
    results.reserve(n_rows);

    for (size_t i = 0; i < n_rows; i++) {
        Ciphertext ct;
        Plaintext pt_diag;
        vector<T> diag;

        diag = get_diagonal(matrix, -i);
        replicate_vector(diag,
                         tenseal_context->get_encoder<Encoder>()->slot_count());

        rotate(diag.begin(), diag.begin() + diag.size() - i, diag.end());

        tenseal_context->encode<Encoder>(diag, pt_diag);
        tenseal_context->evaluator->multiply_plain(vec, pt_diag, ct);
        tenseal_context->evaluator->rotate_vector_inplace(
            ct, i, tenseal_context->galois_keys());
        results.push_back(ct);
    }

    tenseal_context->evaluator->add_many(results, result);

    return result;
}

}  // namespace tenseal

#endif