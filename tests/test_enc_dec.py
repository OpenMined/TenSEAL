import tenseal as ts


def test_bfv_naive_encryption_decryption():
    parms = ts.bfv_parameters(4096, 1024)
    context = ts.context(parms)
    keygen = ts.key_generator(context)
    pk, sk = keygen.public_key(), keygen.secret_key()

    plain_vec = [73, 81, 90]
    bfv_vec = ts.bfv_naive_vector(context, pk, plain_vec)
    decrypted_vec = bfv_vec.decrypt(sk)

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."
