"""The tensors module provides tensors of different shape implementing
different homomorphic encryption schemes, allowing someone to use the right
one for their specific use case.
"""

import _tenseal_cpp as _ts_cpp


def bfv_naive_vector(context, public_key, plaintext_vector):
    """Constructor method for the BFVNaiveVector object, which can store
    a list of integers in encrypted form, using the BFV homomorphic encryption
    scheme.

    Args:
        context: a SEALContext object, holding the encryption parameters.
        public_key: a PublicKey object to be used for encrypting the vector.
        plaintext_vector: a list of integers to be encrypted.

    Returns:
        BFVNaiveVector object.
    """

    return _ts_cpp.BFVNaiveVector(context, public_key, plaintext_vector)


__all__ = ["bfv_naive_vector"]
