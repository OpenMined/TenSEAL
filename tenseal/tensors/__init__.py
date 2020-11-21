"""The tensors module provides tensors of different shape implementing
different homomorphic encryption schemes, allowing someone to use the right
one for their specific use case.
"""
try:
    import _tenseal_cpp as _ts_cpp
except ImportError:
    import tenseal._tenseal_cpp as _ts_cpp


def plain_tensor(data, shape=None, stride=None, dtype="float"):
    """Constructor method for the PlainTensor object.
    Args:
        data:
        shape:
        stride:
        dtype:
    Returns:
        PlainTensor object.
    """
    # just create a plaintensor using python lists for now
    if dtype == "float":
        return _ts_cpp.PlainTensorDouble(data)
    else:
        raise ValueError("Invalid dtype")


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


def ckks_tensor(context, tensor, scale=None):
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
    if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(
        tensor, _ts_cpp.PlainTensorDouble
    ):
        if scale is None:
            return _ts_cpp.CKKSTensor(context, tensor)
        else:
            return _ts_cpp.CKKSTensor(context, tensor, scale)

    raise TypeError(
        "Invalid CKKSTensor input types context: {} and vector: {}".format(
            type(context), type(tensor)
        )
    )


__all__ = ["bfv_vector", "bfv_vector_from", "ckks_vector", "ckks_vector_from", "ckks_tensor"]
