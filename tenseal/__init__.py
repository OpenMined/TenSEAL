"""TenSEAL is a library for doing homomorphic encryption operation on tensors.
"""

import _tenseal_cpp as _ts_cpp
from tenseal.tensors import bfv_naive_vector, bfv_vector, ckks_vector
from tenseal.version import __version__


SCHEME_TYPE = _ts_cpp.SCHEME_TYPE
PublicKey = _ts_cpp.PublicKey
SecretKey = _ts_cpp.SecretKey
RelinKeys = _ts_cpp.RelinKeys
GaloisKeys = _ts_cpp.GaloisKeys


def context(scheme, poly_modulus_degree, plain_modulus=None,
            coeff_mod_bit_sizes=None):
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
        raise ValueError(
            "Invalid scheme type, use either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS")

    # We can't pass None here, everything should be set prior to this call
    return _ts_cpp.TenSEALContext.new(scheme, poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes)


__all__ = [
    "bfv_naive_vector",
    "bfv_vector",
    "ckks_vector",
    "context"
    "__version__",
]
