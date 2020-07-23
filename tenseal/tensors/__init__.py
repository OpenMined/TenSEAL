"""The tensors module provides tensors of different shape implementing
different homomorphic encryption schemes, allowing someone to use the right
one for their specific use case.
"""

import _tenseal_cpp as _ts_cpp


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
    """
    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        data: serialized protobuffer.

    Returns:
        BFVVector object.
    """
    if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, bytes):
        return _ts_cpp.BFVVector(context, data)
    """
    Args:
        context: a TenSEALContext serialized protobuffer.
        data: serialized protobuffer.

    Returns:
        BFVVector object.
    """
    if isinstance(context, bytes) and isinstance(data, bytes):
        return _ts_cpp.BFVVector(context, data)

    raise "Invalid BFV input types context: {} and vector: {}".format(type(context), type(vector))


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
        """
        Args:
            context: a TenSEALContext object, holding the encryption parameters and keys.
            data: the serialized protobuffer.
        Returns:
            CKKSVector object.
        """
        if isinstance(context, _ts_cpp.TenSEALContext) and isinstance(data, bytes):
            return _ts_cpp.CKKSVector(context, data)
        """
        Args:
            context: a serialized TenSEALContext object.
            data: the serialized protobuffer.
        Returns:
            CKKSVector object.
        """
        if isinstance(context, bytes) and isinstance(data, bytes):
            return _ts_cpp.CKKSVector(context, data)

        raise "Invalid CKKS input types context: {} and vector: {}".format(
            type(context), type(vector)
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

        raise "Invalid CKKS(scale) input types context: {} and vector: {}".format(
            type(context), type(vector)
        )


__all__ = ["bfv_vector", "ckks_vector"]
