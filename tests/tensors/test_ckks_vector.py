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


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_add(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = ts.ckks_vector(context, scale, vec2)
    result = first_vec + second_vec
    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_add_inplace(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = ts.ckks_vector(context, scale, vec2)
    first_vec += second_vec
    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Addition of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_add_plain(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = vec2
    result = first_vec + second_vec
    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_add_plain_inplace(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = vec2
    first_vec += second_vec
    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Addition of vectors is incorrect."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_sub(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = ts.ckks_vector(context, scale, vec2)
    result = first_vec - second_vec
    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_sub_inplace(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = ts.ckks_vector(context, scale, vec2)
    first_vec -= second_vec
    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Substraction of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_sub_plain(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = vec2
    result = first_vec - second_vec
    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_sub_plain_inplace(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = vec2
    first_vec -= second_vec
    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Substraction of vectors is incorrect."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_mul(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = ts.ckks_vector(context, scale, vec2)
    result = first_vec * second_vec
    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_mul_inplace(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = ts.ckks_vector(context, scale, vec2)
    first_vec *= second_vec
    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Multiplication of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_mul_plain(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = vec2
    result = first_vec * second_vec
    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([], []),
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
    ],
)
def test_mul_plain_inplace(context, scale, vec1, vec2):
    first_vec = ts.ckks_vector(context, scale, vec1)
    second_vec = vec2
    first_vec *= second_vec
    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Multiplication of vectors is incorrect."


def test_mul_plain_zero(context, scale):
    # from context
    max_slots = 8192 // 2
    pt = [0] * max_slots
    ct = ts.ckks_vector(context, scale, [1] * max_slots)

    with pytest.raises(RuntimeError) as e:
        # the workaround of transparent ciphertext doesn't work when all slots are used
        result = ct * pt
    assert str(e.value) == "result ciphertext is transparent"


@pytest.mark.parametrize(
    "vec, matrix",
    [
        ([1, 2, 3], [[1, 2, 3], [1, 2, 3], [1, 2, 3]]),
        ([0.7968, 0.7027, -0.5913], [[-0.0673, 0.2271], [-0.1252, 0.0273], [0.1905, -0.1435]]),
        (
            [0.2232, -2.0231],
            [[1.5545, -0.8035, -0.5180, -0.0950], [0.2614, 0.7102, 0.2147, -0.6553]],
        ),
    ],
)
def test_vec_plain_matrix_mul(context, scale, vec, matrix):
    import numpy as np

    context.generate_galois_keys()
    ct = ts.ckks_vector(context, scale, vec)
    result = ct.mm(matrix)
    expected = (np.array(vec) @ np.array(matrix)).tolist()
    assert _almost_equal(result.decrypt(), expected, 1), "Matrix multiplciation is incorrect."
    assert _almost_equal(ct.decrypt(), vec, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec, matrix",
    [
        ([1, 2, 3], [[1, 2, 3], [1, 2, 3], [1, 2, 3]]),
        ([0.7968, 0.7027, -0.5913], [[-0.0673, 0.2271], [-0.1252, 0.0273], [0.1905, -0.1435]]),
        (
            [0.2232, -2.0231],
            [[1.5545, -0.8035, -0.5180, -0.0950], [0.2614, 0.7102, 0.2147, -0.6553]],
        ),
    ],
)
def test_vec_plain_matrix_mul_inplace(context, scale, vec, matrix):
    import numpy as np

    context.generate_galois_keys()
    ct = ts.ckks_vector(context, scale, vec)
    ct.mm_(matrix)
    expected = (np.array(vec) @ np.array(matrix)).tolist()
    assert _almost_equal(ct.decrypt(), expected, 1), "Matrix multiplciation is incorrect."


def test_size(context, scale):
    for size in range(10):
        vec = ts.ckks_vector(context, scale, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
