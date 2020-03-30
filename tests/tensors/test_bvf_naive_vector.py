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


def test_add_plain():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."
    assert first_vec.decrypt(
        sk) == [1, 2, 3, 4], "Something went wrong in memory."


def test_add__plain_inplace():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."


def test_sub():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, pk, [4, 3, 2, 1])
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert decrypted_result == [
        -3, -1, 1, 3], "Addition of vectors is incorrect."
    assert first_vec.decrypt(
        sk) == [1, 2, 3, 4], "Something went wrong in memory."
    assert second_vec.decrypt(
        sk) == [4, 3, 2, 1], "Something went wrong in memory."


def test_sub_inplace():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, pk, [4, 3, 2, 1])
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert decrypted_result == [
        -3, -1, 1, 3], "Addition of vectors is incorrect."
    assert second_vec.decrypt(
        sk) == [4, 3, 2, 1], "Something went wrong in memory."


def test_sub_plain():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert decrypted_result == [
        -3, -1, 1, 3], "Addition of vectors is incorrect."
    assert first_vec.decrypt(
        sk) == [1, 2, 3, 4], "Something went wrong in memory."


def test_sub_plain_inplace():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert decrypted_result == [
        -3, -1, 1, 3], "Addition of vectors is incorrect."


def test_mul():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [66, 73, 81, 90])
    second_vec = ts.bfv_naive_vector(context, pk, [2, 3, 4, 5])
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert decrypted_result == [
        132, 219, 324, 450], "Addition of vectors is incorrect."
    assert first_vec.decrypt(
        sk) == [66, 73, 81, 90], "Something went wrong in memory."
    assert second_vec.decrypt(
        sk) == [2, 3, 4, 5], "Something went wrong in memory."


def test_mul_inplace():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [66, 73, 81, 90])
    second_vec = ts.bfv_naive_vector(context, pk, [2, 3, 4, 5])
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert decrypted_result == [
        132, 219, 324, 450], "Addition of vectors is incorrect."
    assert second_vec.decrypt(
        sk) == [2, 3, 4, 5], "Something went wrong in memory."


def test_mul_plain():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert decrypted_result == [
        132, 219, 324, 450], "Addition of vectors is incorrect."
    assert first_vec.decrypt(
        sk) == [66, 73, 81, 90], "Something went wrong in memory."


def test_mul_plain_inplace():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    first_vec = ts.bfv_naive_vector(context, pk, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert decrypted_result == [
        132, 219, 324, 450], "Addition of vectors is incorrect."


def test_size():
    context = _get_bfv_context()
    pk, sk = _get_bfv_keys(context)

    for size in range(10):
        vec = ts.bfv_naive_vector(context, pk, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
