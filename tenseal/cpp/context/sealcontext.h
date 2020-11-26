#ifndef TENSEAL_CONTEXT_SEALCONTEXT_H
#define TENSEAL_CONTEXT_SEALCONTEXT_H

#include <vector>

#include "seal/seal.h"

namespace tenseal {

using namespace seal;
using namespace std;

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
Returns a SEALContext created with the provided encryption
parameters.
*/
SEALContext create_context(EncryptionParameters parms);

}  // namespace tenseal

#endif
