#ifndef TENSEAL_SERIALIZATION_H_
#define TENSEAL_SERIALIZATION_H_

#include <string>

#include "seal/seal.h"

namespace tenseal {

/**
 * Saves a SEAL object to a string.
 * Compatible SEAL types: Ciphertext, Plaintext, SecretKey, PublicKey,
 *GaloisKeys, RelinKeys, EncryptionParameters, Modulus, BigUInt, IntArray.
 **/
template <class T>
std::string SEALSerialize(const T& sealobj) {
    std::stringstream stream;
    sealobj.save(stream);

    return stream.str();
}

/**
 * Loads a SEAL object from a string.
 * Compatible SEAL types: Ciphertext, Plaintext, SecretKey, PublicKey,
 *GaloisKeys, RelinKeys.
 **/
template <class T>
T SEALDeserialize(const SEALContext& sealctx, const string& in) {
    T out;

    std::stringstream stream;
    stream << in;
    out.load(sealctx, stream);

    return out;
}

/**
 * Loads a SEAL object from a string.
 * Compatible SEAL types: EncryptionParameters, Modulus, BigUInt, IntArray
 * @returns InvalidArgument if the decoding fails.
 **/
template <class T>
T SEALDeserialize(const string& in) {
    T out;

    std::stringstream stream;
    stream << in;
    out.load(stream);

    return out;
}
}  // namespace tenseal

#endif  // TENSEAL_SERIALIZATION_H_
