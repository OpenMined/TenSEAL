import tenseal as ts


def test_context_make_public_crash():
    poly_mod_degree = 8192
    coeff_mod_bit_sizes = [40, 21, 21, 21, 21, 21, 21, 40]
    ctx = ts.context(ts.SCHEME_TYPE.CKKS, poly_mod_degree, -1, coeff_mod_bit_sizes)
    ctx.global_scale = 2 ** 21
    ctx.generate_galois_keys()

    ctx_copy = ctx.copy()
    ctx_copy.make_context_public()
    ser_ctx = ctx_copy.serialize()
