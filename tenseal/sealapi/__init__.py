"""SEAL API bindings.
"""

try:
    import _sealapi_cpp
except ImportError:
    import tenseal.sealapi._sealapi_cpp

## seal/biguint.h ##
BigUInt = _sealapi_cpp.BigUInt

## seal/smallmodulus.h ##
Modulus = _sealapi_cpp.Modulus

## seal/serialization.h ##
COMPR_MODE_TYPE = _sealapi_cpp.COMPR_MODE_TYPE
Serialization = _sealapi_cpp.Serialization

## seal/plaintext.h  ##
Plaintext = _sealapi_cpp.Plaintext

## seal/randomgen.h ##
random_uint64 = _sealapi_cpp.random_uint64
BlakePRNGFactory = _sealapi_cpp.BlakePRNGFactory
BlakePRNG = _sealapi_cpp.BlakePRNG
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

## seal/intencoder.h ##
IntegerEncoder = _sealapi_cpp.IntegerEncoder

## seal/intarray.h ##
IntArray = _sealapi_cpp.IntArray

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
