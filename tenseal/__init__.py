"""TenSEAL is a library for doing homomorphic encryption operation on tensors.
"""

import _tenseal_cpp as _ts_cpp
from tenseal.tensors import bfv_naive_vector
from tenseal.version import __version__


key_generator = _ts_cpp.KeyGenerator
bfv_parameters = _ts_cpp.bfv_parameters
context = _ts_cpp.context


__all__ = [
    "key_generator",
    "bfv_parameters",
    "context",
    "bfv_naive_vector",
    "__version__",
]
