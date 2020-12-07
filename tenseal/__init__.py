"""TenSEAL is a library for doing homomorphic encryption operation on tensors.
"""

try:
    import _tenseal_cpp as _ts_cpp
except ImportError:
    import tenseal._tenseal_cpp as _ts_cpp
from tenseal.tensors import CKKSTensor
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
CKKSVector = _ts_cpp.CKKSVector


def context(*args, **kwargs):
    return Context(*args, **kwargs)


def context_from(data, n_threads=None):
    return Context.load(data, n_threads)


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
