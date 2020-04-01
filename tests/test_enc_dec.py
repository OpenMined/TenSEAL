import tenseal as ts


def _almost_equal(vec1, vec2, m_pow_ten):
    if len(vec1) != len(vec2):
        return False

    upper_bound = pow(10, - m_pow_ten)
    for v1, v2 in zip(vec1, vec2):
        if abs(v1 - v2) > upper_bound:
            return False
    return True


def test_bfv_naive_encryption_decryption():
    parms = ts.bfv_parameters(4096, 1024)
    context = ts.context(parms)
    keygen = ts.key_generator(context)
    pk, sk = keygen.public_key(), keygen.secret_key()

    plain_vec = [73, 81, 90]
    bfv_vec = ts.bfv_naive_vector(context, pk, plain_vec)
    decrypted_vec = bfv_vec.decrypt(sk)

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."


def test_ckks_encryption_decryption():
    parms = ts.ckks_parameters(8192, [60, 40, 40, 60])
    context = ts.context(parms)
    keygen = ts.key_generator(context)
    pk, sk, relin_keys = keygen.public_key(), keygen.secret_key(), keygen.relin_keys()
    scale = pow(2, 40)

    plain_vec = [73, 81, 90]
    ckks_vec = ts.ckks_vector(context, pk, scale, plain_vec)
    decrypted_vec = ckks_vec.decrypt(sk)
    assert _almost_equal(decrypted_vec, plain_vec, 1), "Decryption of vector is incorrect"
