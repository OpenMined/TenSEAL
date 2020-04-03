"""TenSEAL is a library for doing homomorphic encryption operation on tensors.
"""

import _tenseal_cpp as _ts_cpp
from tenseal.tensors import bfv_naive_vector, ckks_vector
from tenseal.version import __version__

# TODO: delete this from the API
key_generator = _ts_cpp.KeyGenerator
bfv_parameters = _ts_cpp.bfv_parameters
ckks_parameters = _ts_cpp.ckks_parameters
seal_context = _ts_cpp.context


def context(poly_modulus_degree, coeff_mod_bit_sizes=None, plain_modulus=None, scheme=None):
    # TODO: implement a generic context constructor or
    # reduce CKKSContext & BFVContext to a single TenSEALContext class
    pass


def ckks_context(poly_modulus_degree, coeff_mod_bit_sizes):
    """Construct a context that holds keys and parameters needed for
    operating encrypted tensors using the CKKS scheme.

    Args:
        poly_modulus_degree (int): The degree of the polynomial modulus, must be a power of two.
        coeff_mod_bit_sizes (list of int): List of bit size for each coeffecient modulus.

    Returns:
        A CKKSContext object.
    """
    return _ts_cpp.CKKSContext.new(poly_modulus_degree, coeff_mod_bit_sizes)


def bfv_context(poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes=[]):
    """Construct a context that holds keys and parameters needed for
    operating encrypted tensors using the BFV scheme.

    Args:
        poly_modulus_degree (int): The degree of the polynomial modulus, must be a power of two.
        plain_modulus (int): The plaintext modulus.
        coeff_mod_bit_sizes (list of int): List of bit size for each coeffecient modulus.

    Returns:
        A BFVContext object.
    """
    return _ts_cpp.BFVContext.new(
        poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes)


__all__ = [
    "key_generator",
    "bfv_context",
    "bfv_parameters",
    "bfv_naive_vector",
    "ckks_context",
    "ckks_parameters"
    "ckks_vector",
    "seal_context",
    "__version__",
]
