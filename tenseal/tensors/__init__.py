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


def ckks_vector(context, scale, plaintext_vector):
    """Constructor method for the CKKSVector object, which can store a list
    of float numbers in encrypted form, using the CKKS homomorphic encryption
    scheme.

    Args:
        context: a TenSEALContext object, holding the encryption parameters and keys.
        scale: the scale to be used to encode vector values.
        plaintext_vector: a list of float to be encrypted.

    Returns:
        CKKSVector object.
    """

    return _ts_cpp.CKKSVector(context, scale, plaintext_vector)


__all__ = ["bfv_vector", "ckks_vector"]
