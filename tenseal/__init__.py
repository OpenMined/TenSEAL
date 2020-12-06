"""TenSEAL is a library for doing homomorphic encryption operation on tensors.
"""

try:
    import _tenseal_cpp as _ts_cpp
except ImportError:
    import tenseal._tenseal_cpp as _ts_cpp
from tenseal.tensors import CKKSTensor
from tenseal.version import __version__


# TODO: should we also wrap those in Python?
im2col_encoding = _ts_cpp.im2col_encoding
enc_matmul_encoding = _ts_cpp.enc_matmul_encoding

# TODO: make these native python enum
SCHEME_TYPE = _ts_cpp.SCHEME_TYPE
PublicKey = _ts_cpp.PublicKey
SecretKey = _ts_cpp.SecretKey
RelinKeys = _ts_cpp.RelinKeys
GaloisKeys = _ts_cpp.GaloisKeys

# Vectors
BFVVector = _ts_cpp.BFVVector
CKKSVector = _ts_cpp.CKKSVector
CKKSTensor = _ts_cpp.CKKSTensor


def context(
    scheme, poly_modulus_degree, plain_modulus=None, coeff_mod_bit_sizes=None, n_threads=None
):
    """Construct a context that holds keys and parameters needed for operating
    encrypted tensors using either BFV or CKKS scheme.

    Args:
        scheme : define the scheme to be used, either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS.
        poly_modulus_degree (int): The degree of the polynomial modulus, must be a power of two.
        plain_modulus (int): The plaintext modulus. Should not be passed when the scheme is CKKS.
        coeff_mod_bit_sizes (list of int): List of bit size for each coeffecient modulus.
            Can be an empty list for BFV, a default value will be given.

    Returns:
        A TenSEALContext object.
    """
    if scheme == SCHEME_TYPE.BFV:
        if plain_modulus is None:
            raise ValueError("plain_modulus must be provided")
        if coeff_mod_bit_sizes is None:
            coeff_mod_bit_sizes = []

    elif scheme == SCHEME_TYPE.CKKS:
        # must be int, but the value doesn't matter for ckks
        plain_modulus = 0
        if coeff_mod_bit_sizes is None:
            raise ValueError("coeff_mod_bit_sizes must be provided")

    else:
        raise ValueError("Invalid scheme type, use either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS")

    # We can't pass None here, everything should be set prior to this call
    if isinstance(n_threads, int) and n_threads > 0:
        return _ts_cpp.TenSEALContext.new(
            scheme, poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes, n_threads
        )

    return _ts_cpp.TenSEALContext.new(
        scheme, poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes
    )


def context_from(buff, n_threads=None):
    """Construct a context from a serialized buffer.

    Args:
        buff : bytes buffer from the original context .

    Returns:
        A TenSEALContext object.
    """
    if n_threads:
        return _ts_cpp.TenSEALContext.deserialize(buff, n_threads)
    return _ts_cpp.TenSEALContext.deserialize(buff)


def plain_tensor(data, shape=None, dtype="float"):
    """Constructor method for the PlainTensor object.
    Args:
        data:
        shape:
        dtype:
    Returns:
        PlainTensor object.
    """
    # just create a plaintensor using python lists for now
    if dtype != "float":
        raise ValueError("Invalid dtype")

    if shape is None:
        return _ts_cpp.PlainTensorDouble(data)

    return _ts_cpp.PlainTensorDouble(data, shape)


def bfv_vector(context, data):
    """Constructor method for the BFVVector object, which can store a list
    of integers in encrypted form, using the BFV homomorphic encryption
    scheme.

    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        data: a list of integers to be encrypted.

    Returns:
        BFVVector object.
    """
    if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, list):
        return _ts_cpp.BFVVector(context, data)

    raise TypeError(
        "Invalid BFV input types context: {} and vector: {}".format(type(context), type(data))
    )


def bfv_vector_from(context, data):
    """Constructor method for the BFVVector object, from a serialized protobuffer.

    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        data: serialized protobuffer.

    Returns:
        BFVVector object.
    """
    if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, bytes):
        return _ts_cpp.BFVVector(context, data)

    raise TypeError(
        "Invalid BFV input types context: {} and vector: {}".format(type(context), type(data))
    )


def ckks_vector(context, data, scale=None):
    """Constructor method for the CKKSVector object, which can store a list
    of float numbers in encrypted form, using the CKKS homomorphic encryption
    scheme.
    """
    if scale is None:
        """
        Args:
            context: a TenSEALContext object, holding the encryption parameters and keys.
            data: a list of floats to be encrypted.
        Returns:
            CKKSVector object.
        """
        if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, list):
            return _ts_cpp.CKKSVector(context, data)

        raise TypeError(
            "Invalid CKKS input types context: {} and vector: {}".format(type(context), type(data))
        )
    else:
        """
        Args:
            context: a TenSEALContext object, holding the encryption parameters and keys.
            data: a list of floats to be encrypted.
            scale: the scale to be used to encode vector values.
                CKKSVector will use the global_scale provided by the context if it's set to None.

        Returns:
            CKKSVector object.
        """
        if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, list):
            return _ts_cpp.CKKSVector(context, data, scale)

        raise TypeError(
            "Invalid CKKS(scale) input types context: {} and vector: {}".format(
                type(context), type(data)
            )
        )


def ckks_vector_from(context, data):
    """
    Constructor method for the CKKSVector object from a serialized protobuffer.
    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        data: the serialized protobuffer.
    Returns:
        CKKSVector object.
    """
    if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, bytes):
        return _ts_cpp.CKKSVector(context, data)

    raise TypeError(
        "Invalid CKKS input types context: {} and vector: {}".format(type(context), type(data))
    )


def ckks_tensor(context, tensor, scale=None, batch=False):
    """Constructor method for the CKKSTensor object, which can store a list
    of float numbers in encrypted form, using the CKKS homomorphic encryption
    scheme.

    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        tensor: a PlainTensorDouble holding data to be encrypted.
        scale: the scale to be used to encode vector values. CKKSTensor will use the global_scale provided by the context if it's set to None.

    Returns:
        CKKSTensor object.
    """
    if not isinstance(context, _ts_cpp.TenSEALContext) or not isinstance(
        tensor, _ts_cpp.PlainTensorDouble
    ):
        raise TypeError(
            "Invalid CKKSTensor input types context: {} and vector: {}".format(
                type(context), type(tensor)
            )
        )

    if scale is None:
        return _ts_cpp.CKKSTensor(context, tensor, batch)
    else:
        return _ts_cpp.CKKSTensor(context, tensor, scale, batch)


def ckks_tensor_from(context, data):
    """
    Constructor method for the CKKSTensor object from a serialized protobuffer.
    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        data: the serialized protobuffer.
    Returns:
        CKKSTensor object.
    """
    if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, bytes):
        return _ts_cpp.CKKSTensor(context, data)

    raise TypeError(
        "Invalid CKKS input types context: {} and vector: {}".format(type(context), type(data))
    )


def tolist(plain_tensor):
    """
    Converts a plain tensor to a Python list.
    Args:
        plain_tensor: PlainTensor object.
    Returns:
        Python list.
    """
    if not isinstance(plain_tensor, _ts_cpp.PlainTensorDouble):
        raise TypeError("Invalid plain tensor type {}".format(type(plain_tensor)))

    import numpy as np

    return np.array(plain_tensor.data()).reshape(plain_tensor.shape()).tolist()


__all__ = [
    "bfv_vector",
    "bfv_vector_from",
    "ckks_vector",
    "ckks_vector_from",
    "ckks_tensor",
    "ckks_tensor_from",
    "context",
    "context_from",
    "im2col_encoding",
    "plain_tensor",
    "tolist",
    "__version__",
]
