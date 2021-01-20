import tenseal as ts
import numpy as np
import pytest


def test_context_make_public_crash():
    poly_mod_degree = 8192
    coeff_mod_bit_sizes = [40, 21, 21, 21, 21, 21, 21, 40]
    ctx = ts.context(ts.SCHEME_TYPE.CKKS, poly_mod_degree, -1, coeff_mod_bit_sizes)
    ctx.global_scale = 2 ** 21
    ctx.generate_galois_keys()

    ctx_copy = ctx.copy()
    ctx_copy.make_context_public()
    ser_ctx = ctx_copy.serialize()


def test_ckks_vector_matmul_exception():
    context = ts.context(
        ts.SCHEME_TYPE.CKKS, poly_modulus_degree=16384, coeff_mod_bit_sizes=[60, 40, 40, 40, 60]
    )
    context.generate_galois_keys()
    context.global_scale = 2 ** 40

    x = np.random.rand(10)
    crypt_x = ts.ckks_vector(context, x)

    w = np.random.rand(10, 10)

    crypt_y = crypt_x.matmul(w)
    crypt_z = crypt_y.polyval([0.5, 0.197, 0, -0.004])

    with pytest.raises(ValueError) as exc_info:
        output = crypt_z.matmul(w)

    assert "scale out of bounds" in str(exc_info)
