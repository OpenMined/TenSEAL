#ifndef TENSEAL_UTILS_UTILS_H
#define TENSEAL_UTILS_UTILS_H

#include <algorithm>
#include <iterator>
#include <memory>

#include "seal/seal.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * horizontally scan matrix (vector of vectors)
 **/
template <typename T>
void horizontal_scan(const vector<vector<T>>& src, vector<T>& dst) {
    size_t in_height = src.size();
    size_t in_width = src[0].size();

    dst.resize(in_height * in_width);

    // check if each row size is equals to in_width
    if (any_of(src.begin(), src.end(), [in_width](const vector<T>& i) {
            return i.size() != in_width;
        })) {
        throw invalid_argument("rows sizes are different");
    }

    auto start = src.begin();
    auto end = src.end();
    auto iter = dst.begin();
    while (start != end) {
        iter = copy(start->begin(), start->end(), iter);
        start++;
    }
}

/**
 * vertically scan matrix (vector of vectors)
 **/
template <typename T>
void vertical_scan(const vector<vector<T>>& src, vector<T>& dst) {
    size_t in_height = src.size();
    size_t in_width = src[0].size();

    dst.resize(in_height * in_width);

    // check if each row size is equals to in_width
    if (any_of(src.begin(), src.end(), [in_width](const vector<T>& i) {
            return i.size() != in_width;
        })) {
        throw invalid_argument("rows sizes are different");
    }

    for (size_t i = 0; i < in_height; i++) {
        for (size_t j = 0; j < in_width; j++) {
            dst[i + j * in_height] = src[i][j];
        }
    }
}

/**
 * Image Block to Columns implementation
 **/
template <typename T>
size_t im2col(const vector<vector<T>>& src, vector<vector<T>>& dst,
              const size_t window_height, const size_t window_width,
              const size_t stride) {
    // input shape
    size_t in_height = src.size();
    size_t in_width = src[0].size();

    if (src.empty()) {
        throw invalid_argument("empty matrix");
    }

    // check if each row size is equals to in_width
    if (any_of(src.begin(), src.end(), [in_width](const vector<T>& i) {
            return i.size() != in_width;
        })) {
        throw invalid_argument("rows sizes are different");
    }

    // output shape
    size_t out_height = (in_height - window_height) / stride + 1;
    size_t out_width = (in_width - window_width) / stride + 1;
    dst.reserve(out_height);

    // windows number
    size_t windows_nb = out_height * out_width;

    // kernel_size
    size_t kernel_size = window_width * window_height;
    // calculate the next power of 2
    kernel_size = 1 << (static_cast<size_t>(ceil(log2(kernel_size))));

    for (size_t j = 0; j < in_height - window_height + 1; j += stride) {
        for (size_t i = 0; i < in_width - window_width + 1; i += stride) {
            // pad the window vector to the next power of 2 of kernel size
            vector<T> window_vec(kernel_size, 0);
            auto iter = window_vec.begin();
            for (size_t k = 0; k < window_height; k++) {
                iter = copy(src[j + k].begin() + i,
                            src[j + k].begin() + i + window_width, iter);
            }
            dst.push_back(window_vec);
        }
    }

    return windows_nb;
}

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
Apply modulus switching to the ciphertext (or plaintext) having the higher
modulus.
*/
template <typename T>
void set_to_same_mod(shared_ptr<TenSEALContext> context, Ciphertext& ct,
                     T& other) {
    auto get_chain_index = [&](const auto& obj) -> size_t {
        auto ctx_data =
            context->seal_context()->get_context_data(obj.parms_id());
        if (ctx_data == nullptr) {
            throw runtime_error(
                "SEAL: couldn't find context_data from params_id");
        }
        return ctx_data->chain_index();
    };

    size_t ct_idx = get_chain_index(ct);
    size_t other_idx = get_chain_index(other);

    if (ct_idx == other_idx) return;

    if (ct_idx > other_idx) {
        context->evaluator->mod_switch_to_inplace(ct, other.parms_id());
    } else {
        context->evaluator->mod_switch_to_inplace(other, ct.parms_id());
    }
}

/*
Check whether we should apply mod switching to one of the two elements.
*/
template <typename T>
inline bool should_set_to_same_mod(shared_ptr<TenSEALContext> context,
                                   Ciphertext& ct, T& other) {
    return context->auto_mod_switch() && ct.parms_id() != other.parms_id();
}

/*
Sum the values in the vector.
IMPORTANT: Tested only with CKKS.
*/
Ciphertext& sum_vector(shared_ptr<TenSEALContext> tenseal_context,
                       Ciphertext& vector, size_t size);

template <typename T>
T compute_polynomial_term(int degree, double coeff,
                          const vector<T>& x_squares) {
    if (degree < 1) {
        throw invalid_argument("degree must be greater or equal to 1");
    }

    int closest_power_of_2 = static_cast<int>(floor(log2(degree)));
    int new_degree = degree - (1 << closest_power_of_2);
    T x = x_squares[closest_power_of_2];  // x^(2^closest_power_of_2)

    if (new_degree == 0 && coeff != 1.0) {
        // x^(2^closest_power_of_2) * coeff
        x.mul_plain_inplace(coeff);
    } else if (new_degree != 0) {
        // x^(2^closest_power_of_2) * x^(new_degree) * coeff
        x.mul_inplace(compute_polynomial_term(new_degree, coeff, x_squares));
    }

    return x;
}

}  // namespace tenseal

#endif
