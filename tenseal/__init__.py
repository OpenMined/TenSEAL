"""TenSEAL is a library for doing homomorphic encryption operation on tensors.
"""

try:
    import _tenseal_cpp as _ts_cpp
except ImportError:
    import tenseal._tenseal_cpp as _ts_cpp
from tenseal.tensors import CKKSTensor, CKKSVector, BFVVector, PlainTensor

# TODO: remove keys constructor from public API
from tenseal.context import Context, PublicKey, SecretKey, GaloisKeys, RelinKeys
from tenseal.version import __version__


# TODO: make these native python enum
SCHEME_TYPE = _ts_cpp.SCHEME_TYPE


def im2col_encoding(context, tensor, kernel_n_rows, kernel_n_cols, stride):
    if not isinstance(context, Context):
        raise TypeError("context must be of type tenseal.Context")
    if not isinstance(tensor, PlainTensor):
        tensor = plain_tensor(tensor)
        if len(tensor.shape) != 2:
            raise ValueError("tensor must be a matrix")
        matrix = tensor.tolist()

    ckks_vec, windows_nb = _ts_cpp.im2col_encoding(
        context.data, matrix, kernel_n_cols, kernel_n_rows, stride
    )
    return CKKSVector._wrap(ckks_vec), windows_nb


def enc_matmul_encoding(context, tensor):
    if not isinstance(context, Context):
        raise TypeError("context must be of type tenseal.Context")
    if not isinstance(tensor, PlainTensor):
        tensor = plain_tensor(tensor)
        if len(tensor.shape) != 2:
            raise ValueError("tensor must be a matrix")
        matrix = tensor.tolist()
    return CKKSVector._wrap(_ts_cpp.enc_matmul_encoding(context.data, matrix))


def context(*args, **kwargs):
    return Context(*args, **kwargs)


def context_from(data, n_threads=None):
    return Context.load(data, n_threads)


def plain_tensor(*args, **kwargs):
    return PlainTensor(*args, **kwargs)


def bfv_vector(*args, **kwargs):
    return BFVVector(*args, **kwargs)


def bfv_vector_from(context, data):
    return BFVVector.load(context, data)


def ckks_vector(*args, **kwargs):
    return CKKSVector(*args, **kwargs)


def ckks_vector_from(context, data):
    return CKKSVector.load(context, data)


def ckks_tensor(*args, **kwargs):
    return CKKSTensor(*args, **kwargs)


def ckks_tensor_from(context, data):
    return CKKSTensor.load(context, data)


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
    "__version__",
]
