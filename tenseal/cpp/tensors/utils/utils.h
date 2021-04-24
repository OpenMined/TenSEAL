#ifndef TENSEAL_UTILS_UTILS_H
#define TENSEAL_UTILS_UTILS_H

#include <algorithm>
#include <iterator>
#include <memory>

#include "seal/seal.h"

namespace tenseal {

using namespace seal;
using namespace std;

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
Sum the values in the vector.
*/
Ciphertext& sum_vector(shared_ptr<TenSEALContext> tenseal_context,
                       Ciphertext& vector, size_t size);

template <typename T>
shared_ptr<T> compute_polynomial_term(int degree, double coeff,
                                      const vector<shared_ptr<T>>& x_squares) {
    if (degree < 1) {
        throw invalid_argument("degree must be greater or equal to 1");
    }

    int closest_power_of_2 = static_cast<int>(floor(log2(degree)));
    int new_degree = degree - (1 << closest_power_of_2);
    shared_ptr<T> x =
        x_squares[closest_power_of_2]->copy();  // x^(2^closest_power_of_2)

    if (new_degree == 0 && coeff != 1.0) {
        // x^(2^closest_power_of_2) * coeff
        x->mul_plain_inplace(coeff);
    } else if (new_degree != 0) {
        // x^(2^closest_power_of_2) * x^(new_degree) * coeff
        x->mul_inplace(compute_polynomial_term(new_degree, coeff, x_squares));
    }

    return x;
}

// TODO support multi-ciphertext vectors
template <typename T, class Encoder, typename D>
shared_ptr<T> pack_vectors(const vector<shared_ptr<T>>& vectors) {
    size_t vectors_nb = vectors.size();
    size_t vector_size = vectors[0]->size();
    size_t output_size = vectors_nb * vector_size;
    size_t mask_shift = output_size - vector_size;
    size_t slot_count =
        vectors[0]->tenseal_context()->template slot_count<Encoder>();

    // output_size must be smaller than slot_count
    if (vectors.empty()) {
        throw invalid_argument("empty input vector");
    }

    // output_size must be smaller than slot_count
    if (output_size > slot_count) {
        throw invalid_argument("output size is bigger than slot count");
    }

    // check if each vectors sizes are equal
    if (any_of(vectors.begin(), vectors.end(),
               [vector_size](const shared_ptr<T>& i) {
                   return i->size() != vector_size;
               })) {
        throw invalid_argument("vectors sizes are different");
    }

    // mask vector to multiply with ciphertext
    vector<D> mask(vectors_nb * vector_size, 0);
    fill(mask.begin(), mask.begin() + vector_size, 1);

    // copy and replicate mask vector
    vector<D> replicated_mask = mask;
    replicate_vector(replicated_mask, slot_count);

    auto packed_vec = vectors[0]->copy();
    packed_vec->chunked_size({slot_count});
    packed_vec->mul_plain_inplace(replicated_mask);

    for (size_t i = 1; i < vectors_nb; i++) {
        // rotate the mask then replicate it
        rotate(mask.begin(), mask.begin() + mask_shift, mask.end());
        replicated_mask = mask;
        replicate_vector(replicated_mask, slot_count);

        // multiply with the mask vector then accumulate
        auto vec = vectors[i]->copy();
        vec->chunked_size({slot_count});
        vec->mul_plain_inplace(replicated_mask);
        packed_vec->add_inplace(vec);
    }

    // set packed vector size to the total size of vectors
    packed_vec->chunked_size({output_size});

    return packed_vec;
}

}  // namespace tenseal

#endif
