#ifndef TENSEAL_UTILS_H
#define TESNEAL_UTILS_H

#include <seal/seal.h>

#include <memory>

using namespace seal;
using namespace std;

namespace tenseal {

EncryptionParameters create_bfv_parameters(size_t poly_modulus_degree,
                                           uint64_t plain_modulus);

shared_ptr<seal::SEALContext> create_context(EncryptionParameters parms);

}  // namespace tenseal

#endif