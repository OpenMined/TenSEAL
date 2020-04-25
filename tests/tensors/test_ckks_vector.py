import tenseal as ts
import pytest


def _almost_equal(vec1, vec2, m_pow_ten):
    if len(vec1) != len(vec2):
        return False

    upper_bound = pow(10, -m_pow_ten)
    for v1, v2 in zip(vec1, vec2):
        if abs(v1 - v2) > upper_bound:
            return False
    return True


@pytest.fixture(scope="module")
def context():
    return ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])


@pytest.fixture(scope="module")
def scale():
    return pow(2, 40)


def test_add(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, scale, [4, 3, 2, 1])
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, [5, 5, 5, 5], 1), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), [1, 2, 3, 4], 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_add_inplace(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, scale, [4, 3, 2, 1])
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, [5, 5, 5, 5], 1), "Addition of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_add_plain(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, [5, 5, 5, 5], 1), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), [1, 2, 3, 4], 1), "Something went wrong in memory."


def test_add_plain_inplace(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, [5, 5, 5, 5], 1), "Addition of vectors is incorrect."


def test_sub(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, scale, [4, 3, 2, 1])
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, [-3, -1, 1, 3], 1
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), [1, 2, 3, 4], 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_sub_inplace(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = ts.ckks_vector(context, scale, [4, 3, 2, 1])
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, [-3, -1, 1, 3], 1
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), [4, 3, 2, 1], 1), "Something went wrong in memory."


def test_sub_plain(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, [-3, -1, 1, 3], 1
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), [1, 2, 3, 4], 1), "Something went wrong in memory."


def test_sub_plain_inplace(context, scale):
    first_vec = ts.ckks_vector(context, scale, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, [-3, -1, 1, 3], 1
    ), "Substraction of vectors is incorrect."


def test_mul(context, scale):
    first_vec = ts.ckks_vector(context, scale, [66, 73, 81, 90])
    second_vec = ts.ckks_vector(context, scale, [2, 3, 4, 5])
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, [132, 219, 324, 450], 1
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(
        first_vec.decrypt(), [66, 73, 81, 90], 1
    ), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), [2, 3, 4, 5], 1), "Something went wrong in memory."


def test_mul_inplace(context, scale):
    first_vec = ts.ckks_vector(context, scale, [66, 73, 81, 90])
    second_vec = ts.ckks_vector(context, scale, [2, 3, 4, 5])
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, [132, 219, 324, 450], 1
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), [2, 3, 4, 5], 1), "Something went wrong in memory."


def test_mul_plain(context, scale):
    first_vec = ts.ckks_vector(context, scale, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, [132, 219, 324, 450], 1
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(
        first_vec.decrypt(), [66, 73, 81, 90], 1
    ), "Something went wrong in memory."


def test_mul_plain_inplace(context, scale):
    first_vec = ts.ckks_vector(context, scale, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, [132, 219, 324, 450], 1
    ), "Multiplication of vectors is incorrect."


def test_size(context, scale):
    for size in range(10):
        vec = ts.ckks_vector(context, scale, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
