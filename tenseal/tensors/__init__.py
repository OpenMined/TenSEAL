import _tenseal_cpp as _ts_cpp


def bfv_naive_vector(*args, **kwargs):
    """
    """
    return _ts_cpp.BFVNaive(*args, **kwargs)


__all__ = ["bfv_naive_vector"]
