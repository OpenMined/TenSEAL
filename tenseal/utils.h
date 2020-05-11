#ifndef TENSEAL_UTILS_H
#define TENSEAL_UTILS_H

#include <seal/seal.h>

#include <memory>

using namespace seal;
using namespace std;

namespace tenseal {

/*
Returns a setuped EncryptionParameters that holds the parameters required for
the BFV scheme, namely, the polynomial modulus, the coeffecient modulus bit
sizes and plaintext modulus.
*/
EncryptionParameters create_bfv_parameters(size_t poly_modulus_degree,
                                           uint64_t plain_modulus,
                                           vector<int> coeff_mod_bit_sizes);

/*
Returns a setuped EncryptionParameters that holds the parameters required for
the CKKS scheme, namely, the polynomial modulus, the coeffecient modulus bit
sizes.
*/
EncryptionParameters create_ckks_parameters(size_t poly_modulus_degree,
                                            vector<int> coeff_mod_bit_sizes);

/*
Returns a smart pointer to a SEALContext created with the provided encryption
parameters.
*/
shared_ptr<seal::SEALContext> create_context(EncryptionParameters parms);

/*
Replicate the current vector as many times to fill `final_size` elements.
*/
template <typename T>
void replicate_vector(vector<T>& vec, size_t final_size) {
    if (vec.empty()) {
        throw invalid_argument("can't replicate an empty vector");
    }
    size_t init_size = vec.size();
    vec.reserve(final_size);
    for (size_t i = 0; i < final_size - init_size; i++) {
        vec.push_back(vec[i % init_size]);
    }
}

/*
Returns the k-th diagonal of a matrix. Positive values of k represent upper
diagonals while negative values represent lower diagonal with 0 being the main
diagonal. It's important to note that diagonals here are of the size of the
matrix, we rotate as we reach the boundaries of the matrix.
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

}  // namespace tenseal

#endif