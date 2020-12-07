"""TenSEAL is a library for doing homomorphic encryption operation on tensors.
"""

try:
    import _tenseal_cpp as _ts_cpp
except ImportError:
    import tenseal._tenseal_cpp as _ts_cpp
from tenseal.tensors import CKKSTensor, CKKSVector, PlainTensor

# TODO: remove keys constructor from public API
from tenseal.context import Context, PublicKey, SecretKey, GaloisKeys, RelinKeys
from tenseal.version import __version__


# TODO: should we also wrap those in Python?
im2col_encoding = _ts_cpp.im2col_encoding
enc_matmul_encoding = _ts_cpp.enc_matmul_encoding

# TODO: make these native python enum
SCHEME_TYPE = _ts_cpp.SCHEME_TYPE

# Vectors
BFVVector = _ts_cpp.BFVVector


def context(*args, **kwargs):
    return Context(*args, **kwargs)


def context_from(data, n_threads=None):
    return Context.load(data, n_threads)


def plain_tensor(*args, **kwargs):
    return PlainTensor(*args, **kwargs)


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


def ckks_vector(*args, **kwargs):
    return CKKSVector(*args, **kwargs)


def ckks_vector_from(context, data):
    return CKKSVector.load(context, data)


def ckks_tensor(*args, **kwargs):
    return CKKSTensor(*args, **kwargs)


def ckks_tensor_from(context, data):
    return CKKSTensor.load(context, data)


def tolist(plain_tensor):
    """
    Converts a plain tensor to a Python list.
    Args:
        plain_tensor: PlainTensor object.
    Returns:
        Python list.
    """
    if not isinstance(plain_tensor, PlainTensor):
        raise TypeError("Invalid plain tensor type {}".format(type(plain_tensor)))

    import numpy as np

    return np.array(plain_tensor.raw).reshape(plain_tensor.shape).tolist()


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
