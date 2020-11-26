"""SEAL API bindings.
"""

try:
    import _sealapi_cpp
except ImportError:
    import tenseal.sealapi._sealapi_cpp

## seal/smallmodulus.h ##
Modulus = _sealapi_cpp.Modulus

## seal/serialization.h ##
COMPR_MODE_TYPE = _sealapi_cpp.COMPR_MODE_TYPE
Serialization = _sealapi_cpp.Serialization

## seal/plaintext.h  ##
Plaintext = _sealapi_cpp.Plaintext

## seal/randomgen.h ##
random_uint64 = _sealapi_cpp.random_uint64
prng_seed_type = _sealapi_cpp.prng_seed_type
prng_type = _sealapi_cpp.prng_type
UniformRandomGeneratorInfo = _sealapi_cpp.UniformRandomGeneratorInfo
Blake2xbPRNGFactory = _sealapi_cpp.Blake2xbPRNGFactory
Blake2xbPRNG = _sealapi_cpp.Blake2xbPRNG
Shake256PRNGFactory = _sealapi_cpp.Shake256PRNGFactory
(Shake256PRNG,) = (_sealapi_cpp.Shake256PRNG,)
RandomToStandardAdapter = _sealapi_cpp.RandomToStandardAdapter

## seal/encryptionparams.h ##
SCHEME_TYPE = _sealapi_cpp.SCHEME_TYPE
EncryptionParameters = _sealapi_cpp.EncryptionParameters

## seal/modulus.h ##
SEC_LEVEL_TYPE = _sealapi_cpp.SEC_LEVEL_TYPE
CoeffModulus = _sealapi_cpp.CoeffModulus
PlainModulus = _sealapi_cpp.PlainModulus

## seal/context.h ##
EncryptionParameterQualifiers = _sealapi_cpp.EncryptionParameterQualifiers
SEALContext = _sealapi_cpp.SEALContext

## seal/publickey.h ##
PublicKey = _sealapi_cpp.PublicKey

## seal/secretkey.h ##
SecretKey = _sealapi_cpp.SecretKey

## seal/relinkeys.h ##
RelinKeys = _sealapi_cpp.RelinKeys

## seal/galoiskeys.h ##
GaloisKeys = _sealapi_cpp.GaloisKeys

## seal/keygenerator.h ##
KeyGenerator = _sealapi_cpp.KeyGenerator

## seal/ciphertext.h ##
Ciphertext = _sealapi_cpp.Ciphertext

## seal/decryptor.h ##
Decryptor = _sealapi_cpp.Decryptor

## seal/encryptor.h ##
Encryptor = _sealapi_cpp.Encryptor

## seal/intarray.h ##
DynArray = _sealapi_cpp.DynArray

## seal/batchencoder.h ##
BatchEncoder = _sealapi_cpp.BatchEncoder

## seal/evaluator.h ##
Evaluator = _sealapi_cpp.Evaluator

## seal/valcheck.h ##
is_valid_for = _sealapi_cpp.is_valid_for
is_buffer_valid = _sealapi_cpp.is_buffer_valid
is_data_valid_for = _sealapi_cpp.is_data_valid_for
is_metadata_valid_for = _sealapi_cpp.is_metadata_valid_for

## seal/ckks.h ##
CKKSEncoder = _sealapi_cpp.CKKSEncoder
