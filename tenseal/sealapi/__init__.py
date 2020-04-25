"""SEAL API bindings.
"""

import _sealapi_cpp

# enums
COMPR_MODE_TYPE = _sealapi_cpp.COMPR_MODE_TYPE
SCHEME_TYPE = _sealapi_cpp.SCHEME_TYPE
SEC_LEVEL_TYPE = _sealapi_cpp.SEC_LEVEL_TYPE

# functions
random_uint64 = _sealapi_cpp.random_uint64

# classes
BigUInt = _sealapi_cpp.BigUInt
SmallModulus = _sealapi_cpp.SmallModulus
Serialization = _sealapi_cpp.Serialization
Plaintext = _sealapi_cpp.Plaintext
EncryptionParameters = _sealapi_cpp.EncryptionParameters

CoeffModulus = _sealapi_cpp.CoeffModulus
PlainModulus = _sealapi_cpp.PlainModulus

BlakePRNGFactory = _sealapi_cpp.BlakePRNGFactory
BlakePRNG = _sealapi_cpp.BlakePRNG

SEALContext = _sealapi_cpp.SEALContext
IntegerEncoder = _sealapi_cpp.IntegerEncoder
EncryptionParameterQualifiers = _sealapi_cpp.EncryptionParameterQualifiers
IntegerEncoder = _sealapi_cpp.IntegerEncoder
