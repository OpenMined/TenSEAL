"""The tensors module provides tensors of different shape implementing
different homomorphic encryption schemes, allowing someone to use the right
one for their specific use case.
"""

import _tenseal_cpp as _ts_cpp


def bfv_vector(context, plaintext_vector):
    """Constructor method for the BFVVector object, which can store a list
    of integers in encrypted form, using the BFV homomorphic encryption
    scheme.

    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        plaintext_vector: a list of integers to be encrypted.

    Returns:
        BFVVector object.
    """

    return _ts_cpp.BFVVector(context, plaintext_vector)


def bfv_vector_from(ctx_buff, vec_buff):
    """Constructor method for the BFVVector object from a serialized protobuffer.
    Args:
        ctx_buff: The serialized context protobufer.
        vec_buff: The serialized vector protobufer.

    Returns:
        BFVVector object.
    """

    return _ts_cpp.BFVVector(ctx_buff, vec_buff)


def ckks_vector(context, plaintext_vector, scale=None):
    """Constructor method for the CKKSVector object, which can store a list
    of float numbers in encrypted form, using the CKKS homomorphic encryption
    scheme.

    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        plaintext_vector: a list of float to be encrypted.
        scale: the scale to be used to encode vector values.
            CKKSVector will use the global_scale provided by the context if it's set to None.

    Returns:
        CKKSVector object.
    """
    if scale is None:
        return _ts_cpp.CKKSVector(context, plaintext_vector)
    return _ts_cpp.CKKSVector(context, plaintext_vector, scale)


def ckks_vector_from(ctx_buff, vec_buff):
    """Constructor method for the CKKSVector object from a serialized protobuffer.

    Args:
        ctx_buff: The serialized context protobufer.
        vec_buff: The serialized vector protobufer.

    Returns:
        CKKSVector object.
    """
    return _ts_cpp.CKKSVector(ctx_buff, vec_buff)


__all__ = ["bfv_vector", "bfv_vector_from", "ckks_vector", "ckks_vector_from"]
