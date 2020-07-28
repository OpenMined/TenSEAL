#ifndef TENSEAL_UTILS_UTILS_H
#define TENSEAL_UTILS_UTILS_H

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

/* Compute how many threads can run in parallel */
uint get_concurrency();

}  // namespace tenseal

#endif
