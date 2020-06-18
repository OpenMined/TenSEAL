#include <seal/seal.h>

#include <memory>

#include "tenseal/tensealcontext.h"

using namespace seal;
using namespace std;

namespace tenseal {

EncryptionParameters create_bfv_parameters(size_t poly_modulus_degree,
                                           uint64_t plain_modulus,
                                           vector<int> coeff_mod_bit_sizes) {
    EncryptionParameters parameters(scheme_type::BFV);
    parameters.set_poly_modulus_degree(poly_modulus_degree);
    parameters.set_plain_modulus(plain_modulus);

    if (coeff_mod_bit_sizes.size() == 0)
        parameters.set_coeff_modulus(
            CoeffModulus::BFVDefault(poly_modulus_degree));
    else
        parameters.set_coeff_modulus(
            CoeffModulus::Create(poly_modulus_degree, coeff_mod_bit_sizes));

    return parameters;
}

EncryptionParameters create_ckks_parameters(size_t poly_modulus_degree,
                                            vector<int> coeff_mod_bit_sizes) {
    EncryptionParameters parameters(scheme_type::CKKS);
    parameters.set_poly_modulus_degree(poly_modulus_degree);
    parameters.set_coeff_modulus(
        CoeffModulus::Create(poly_modulus_degree, coeff_mod_bit_sizes));

    return parameters;
}

shared_ptr<seal::SEALContext> create_context(EncryptionParameters parms) {
    auto context = SEALContext::Create(parms);
    return context;
}

inline size_t below_power2(size_t n) {
    if (n == 0) throw invalid_argument("n must be absolutely positive.");
    if (n && !(n & (n - 1))) return n;

    size_t count = 0;
    while (n != 1) {
        n >>= 1;
        count += 1;
    }
    return 1 << count;
}

Ciphertext& sum_vector(shared_ptr<TenSEALContext> tenseal_context,
                       Ciphertext& vector, size_t size) {
    // Nothing to do
    if (size == 1) return vector;

    auto galois_keys = tenseal_context->galois_keys();
    Ciphertext rest, tmp;
    size_t bp2 = below_power2(size);

    if (bp2 != size) {
        tenseal_context->evaluator->rotate_vector(vector, bp2, galois_keys,
                                                  rest);
        sum_vector(tenseal_context, rest, size - bp2);
    }

    for (size_t i = bp2 / 2; i > 0; i /= 2) {
        tenseal_context->evaluator->rotate_vector(vector, i, galois_keys, tmp);
        tenseal_context->evaluator->add_inplace(vector, tmp);
        tmp = vector;
    }

    if (bp2 != size) {
        tenseal_context->evaluator->add_inplace(vector, rest);
    }

    return vector;
}

}  // namespace tenseal
