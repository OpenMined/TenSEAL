import tenseal as ts


def _get_ckks_context(poly_modulus_degree=8192, coeff_mod_bit_sizes=[60, 40, 40, 60]):
    parms = ts.ckks_parameters(poly_modulus_degree, coeff_mod_bit_sizes)
    context = ts.context(parms)
    return context


def _get_ckks_keys(context):
    keygen = ts.key_generator(context)
    pk, sk, relin_keys = keygen.public_key(), keygen.secret_key(), keygen.relin_keys()
    return pk, sk, relin_keys


def _almost_equal(vec1, vec2, m_pow_ten):
    if len(vec1) != len(vec2):
        return False

    upper_bound = pow(10, - m_pow_ten)
    for v1, v2 in zip(vec1, vec2):
        if abs(v1 - v2) > upper_bound:
            return False
    return True


def test_add():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, pk, scale, [4, 3, 2, 1])
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert _almost_equal(decrypted_result, [
                         5, 5, 5, 5], 1), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(
        sk), [1, 2, 3, 4], 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(
        sk), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_add_inplace():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, pk, scale, [4, 3, 2, 1])
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert _almost_equal(decrypted_result, [
                         5, 5, 5, 5], 1), "Addition of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(
        sk), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_add_plain():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert _almost_equal(decrypted_result, [
                         5, 5, 5, 5], 1), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(
        sk), [1, 2, 3, 4], 1), "Something went wrong in memory."


def test_add_plain_inplace():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert _almost_equal(decrypted_result, [
                         5, 5, 5, 5], 1), "Addition of vectors is incorrect."


def test_sub():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, pk, scale, [4, 3, 2, 1])
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        -3, -1, 1, 3], 1), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(
        sk), [1, 2, 3, 4], 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(
        sk), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_sub_inplace():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, pk, scale, [4, 3, 2, 1])
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        -3, -1, 1, 3], 1), "Substraction of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(
        sk), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_sub_plain():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        -3, -1, 1, 3], 1), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(
        sk), [1, 2, 3, 4], 1), "Something went wrong in memory."


def test_sub_plain_inplace():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        -3, -1, 1, 3], 1), "Substraction of vectors is incorrect."


def test_mul():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [66, 73, 81, 90])
    second_vec = ts.ckks_vector(context, pk, scale, [2, 3, 4, 5])
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        132, 219, 324, 450], 1), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(
        sk), [66, 73, 81, 90], 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(
        sk), [2, 3, 4, 5], 1), "Something went wrong in memory."


def test_mul_inplace():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [66, 73, 81, 90])
    second_vec = ts.ckks_vector(context, pk, scale, [2, 3, 4, 5])
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        132, 219, 324, 450], 1), "Multiplication of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(
        sk), [2, 3, 4, 5], 1), "Something went wrong in memory."


def test_mul_plain():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        132, 219, 324, 450], 1), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(
        sk), [66, 73, 81, 90], 1), "Something went wrong in memory."


def test_mul_plain_inplace():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    first_vec = ts.ckks_vector(context, pk, scale, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt(sk)
    assert _almost_equal(decrypted_result, [
        132, 219, 324, 450], 1), "Multiplication of vectors is incorrect."


def test_size():
    context = _get_ckks_context()
    pk, sk, relin_keys = _get_ckks_keys(context)
    scale = pow(2, 40)

    for size in range(10):
        vec = ts.ckks_vector(context, pk, scale, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
