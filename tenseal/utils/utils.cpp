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

Ciphertext& sum_vector(shared_ptr<TenSEALContext> tenseal_context,
                       Ciphertext& vector, size_t size) {
    auto galois_keys = tenseal_context->galois_keys();
    Ciphertext ct = vector;
    for (size_t i = 1; i < size; i++) {
        tenseal_context->evaluator->rotate_vector_inplace(ct, 1, galois_keys);
        tenseal_context->evaluator->add_inplace(vector, ct);
    }

    return vector;
}

}  // namespace tenseal
