import tenseal as ts


def _get_bfv_context(poly_modulus_degree=4096, plain_modulus=1024):
    parms = ts.bfv_parameters(poly_modulus_degree, plain_modulus)
    context = ts.context(parms)
    return context


def _get_bfv_keys(context):
    keygen = ts.key_generator(context)
    pk, sk = keygen.public_key(), keygen.secret_key()
    return pk, sk


def test_add():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, pk, [4, 3, 2, 1])
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."
    assert first_vec.decrypt(
        sk) == [1, 2, 3, 4], "Something went wrong in memory."
    assert second_vec.decrypt(
        sk) == [4, 3, 2, 1], "Something went wrong in memory."


def test_add_inplace():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, pk, [4, 3, 2, 1])
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."
    assert second_vec.decrypt(
        sk) == [4, 3, 2, 1], "Something went wrong in memory."
