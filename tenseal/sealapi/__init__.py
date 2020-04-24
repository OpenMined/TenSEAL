"""SEAL API bindings.
"""

import _sealapi_cpp

#enums
COMPR_MODE_TYPE = _sealapi_cpp.COMPR_MODE_TYPE
SCHEME_TYPE = _sealapi_cpp.SCHEME_TYPE

#classes
BigUInt = _sealapi_cpp.BigUInt
SmallModulus = _sealapi_cpp.SmallModulus
Serialization = _sealapi_cpp.Serialization
SEALContext = _sealapi_cpp.SEALContext
Plaintext = _sealapi_cpp.Plaintext
IntegerEncoder = _sealapi_cpp.IntegerEncoder
EncryptionParameters = _sealapi_cpp.EncryptionParameters
