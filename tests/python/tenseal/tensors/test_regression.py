import sys, os
import pytest
import tenseal as ts


def test_matmul_scale_bounds():
    N_THREADS = 8
    ctx = ts.context(ts.SCHEME_TYPE.CKKS, 8192, -1, [60, 40, 60], n_threads=N_THREADS)
    ctx.global_scale = 2 ** 40
    ctx.generate_galois_keys()

    vec = ts.ckks_vector(ctx, [0, 1])
    vec.square_()

    with pytest.raises(ValueError) as e:
        vec.mm_([[1, 2], [3, 4]])
