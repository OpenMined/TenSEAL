import tenseal as ts


def test_context_creation():
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    assert context.is_private() is True, "TenSEALContext should be private"
    assert context.public_key() is not None, "TenSEALContext shouldn't be None"


def test_make_context_public():
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)
    assert context.is_public() is True, "TenSEALContext should be public"


def test_generate_galois_keys():
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    secret_key = context.secret_key()
    context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)

    context.generate_galois_keys(secret_key)
    assert isinstance(context.galois_keys(), ts.GaloisKeys), "Galois keys should be set"


def test_generate_relin_keys():
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    secret_key = context.secret_key()
    context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)

    context.generate_relin_keys(secret_key)
    assert isinstance(context.relin_keys(), ts.RelinKeys), "Relin keys should be set"


def test_global_scale():
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])
    # global scale shouldn't be set at first
    assert context.global_scale == -1
    for scale in [0, 1, 2, 2 ** 40]:
        context.global_scale = scale
        assert context.global_scale == scale
