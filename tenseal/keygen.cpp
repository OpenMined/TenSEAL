#include <seal/seal.h>

#include <memory>

using namespace seal;
using namespace std;

namespace tenseal {

EncryptionParameters create_bfv_parameters(size_t poly_modulus_degree,
                                           uint64_t plain_modulus) {
    EncryptionParameters parameters(scheme_type::BFV);
    parameters.set_poly_modulus_degree(poly_modulus_degree);
    parameters.set_coeff_modulus(CoeffModulus::BFVDefault(poly_modulus_degree));
    parameters.set_plain_modulus(plain_modulus);

    return parameters;
}

shared_ptr<seal::SEALContext> create_context(EncryptionParameters parms) {
    auto context = SEALContext::Create(parms);
    return context;
}

}  // namespace tenseal