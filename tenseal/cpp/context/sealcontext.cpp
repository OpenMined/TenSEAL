#include "tenseal/cpp/context/sealcontext.h"

#include <memory>

#include "seal/seal.h"

using namespace seal;
using namespace std;

namespace tenseal {

EncryptionParameters create_bfv_parameters(size_t poly_modulus_degree,
                                           uint64_t plain_modulus,
                                           vector<int> coeff_mod_bit_sizes) {
    EncryptionParameters parameters(scheme_type::bfv);
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
    EncryptionParameters parameters(scheme_type::ckks);
    parameters.set_poly_modulus_degree(poly_modulus_degree);
    parameters.set_coeff_modulus(
        CoeffModulus::Create(poly_modulus_degree, coeff_mod_bit_sizes));

    return parameters;
}

SEALContext create_context(EncryptionParameters parms) {
    return SEALContext(parms);
}
}  // namespace tenseal
