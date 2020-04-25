import tenseal as ts


def _almost_equal(vec1, vec2, m_pow_ten):
    if len(vec1) != len(vec2):
        return False

    upper_bound = pow(10, -m_pow_ten)
    for v1, v2 in zip(vec1, vec2):
        if abs(v1 - v2) > upper_bound:
            return False
    return True


def test_bfv_naive_encryption_decryption():
    context = ts.context(ts.SCHEME_TYPE.BFV, 4096, 1024)

    plain_vec = [73, 81, 90]
    bfv_vec = ts.bfv_naive_vector(context, plain_vec)
    decrypted_vec = bfv_vec.decrypt()

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."


def test_bfv_naive_secretkey_decryption():
    context = ts.context(ts.SCHEME_TYPE.BFV, 4096, 1024)

    plain_vec = [73, 81, 90]
    bfv_vec = ts.bfv_naive_vector(context, plain_vec)
    secret_key = context.secret_key()
    context.make_context_public()
    decrypted_vec = bfv_vec.decrypt(secret_key)

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."


def test_bfv_encryption_decryption():
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    plain_vec = [73, 81, 90]
    bfv_vec = ts.bfv_vector(context, plain_vec)
    decrypted_vec = bfv_vec.decrypt()

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."


def test_bfv_secretkey_decryption():
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    plain_vec = [73, 81, 90]
    bfv_vec = ts.bfv_vector(context, plain_vec)
    secret_key = context.secret_key()
    context.make_context_public()
    decrypted_vec = bfv_vec.decrypt(secret_key)

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."


def test_ckks_encryption_decryption():
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    scale = pow(2, 40)

    plain_vec = [73, 81, 90]
    ckks_vec = ts.ckks_vector(context, scale, plain_vec)
    decrypted_vec = ckks_vec.decrypt()
    assert _almost_equal(decrypted_vec, plain_vec, 1), "Decryption of vector is incorrect"


def test_ckks_secretkey_decryption():
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    scale = pow(2, 40)

    plain_vec = [73, 81, 90]
    ckks_vec = ts.ckks_vector(context, scale, plain_vec)
    secret_key = context.secret_key()
    context.make_context_public()
    decrypted_vec = ckks_vec.decrypt(secret_key)
    assert _almost_equal(decrypted_vec, plain_vec, 1), "Decryption of vector is incorrect"
