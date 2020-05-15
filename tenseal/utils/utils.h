#ifndef TENSEAL_UTILS_UTILS_H
#define TENSEAL_UTILS_UTILS_H

#include <seal/seal.h>

#include <memory>

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
void set_to_same_mod(shared_ptr<TenSEALContext> context, Ciphertext& ct1,
                     Ciphertext& ct2);
void set_to_same_mod(shared_ptr<TenSEALContext> context, Ciphertext& ct,
                     Plaintext pt);

}  // namespace tenseal

#endif