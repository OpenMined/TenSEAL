import tenseal as ts
import pytest
import numpy as np


def _almost_equal(vec1, vec2, m_pow_ten):
    if len(vec1) != len(vec2):
        return False

    upper_bound = pow(10, -m_pow_ten)
    for v1, v2 in zip(vec1, vec2):
        if abs(v1 - v2) > upper_bound:
            return False
    return True


@pytest.fixture(scope="function")
def context():
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    context.global_scale = pow(2, 40)
    return context


@pytest.mark.parametrize(
    "plain_vec", [[], [0], [-1], [1], [21, 81, 90], [-73, -81, -90], [-11, 82, -43, 52]]
)
def test_negate(context, plain_vec):
    ckks_vec = ts.ckks_vector(context, plain_vec)
    expected = [-v for v in plain_vec]
    result = -ckks_vec
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Decryption of vector is incorrect"


@pytest.mark.parametrize(
    "plain_vec", [[], [0], [-1], [1], [21, 81, 90], [-73, -81, -90], [-11, 82, -43, 52]]
)
def test_negate_inplace(context, plain_vec):
    ckks_vec = ts.ckks_vector(context, plain_vec)
    expected = [-v for v in plain_vec]
    ckks_vec.neg_()
    decrypted_result = ckks_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Decryption of vector is incorrect"


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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_add(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    result = first_vec + second_vec

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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_add_inplace(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    first_vec += second_vec

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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_add_plain(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec + second_vec
    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_radd_plain(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    result = vec2 + first_vec
    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_add_plain_inplace(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec += second_vec
    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_sub(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]
    result = first_vec - second_vec

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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_sub_inplace(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]
    first_vec -= second_vec

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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_sub_plain(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec - second_vec
    if isinstance(vec2, list):
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 - vec2 for v1 in vec1]

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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_rsub_plain(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    result = vec2 - first_vec
    if isinstance(vec2, list):
        expected = [v2 - v1 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [vec2 - v1 for v1 in vec1]

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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_sub_plain_inplace(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec -= second_vec
    if isinstance(vec2, list):
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 - vec2 for v1 in vec1]

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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_mul(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    result = first_vec * second_vec

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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_mul_inplace(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    first_vec *= second_vec

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
        ([1, 2, 3, 4], 2),
        # ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_mul_plain(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec * second_vec
    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]

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
        ([1, 2, 3, 4], 2),
        # ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_rmul_plain(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    result = vec2 * first_vec
    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]

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
        ([1, 2, 3, 4], 2),
        # ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_mul_plain_inplace(context, vec1, vec2):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec *= second_vec
    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Multiplication of vectors is incorrect."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
        ([1, 2, 3], [4, 3, 2]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1]),
    ],
)
def test_dot_product(context, vec1, vec2):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)
    result = first_vec.dot(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Dot product of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
        ([1, 2, 3], [4, 3, 2]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1]),
    ],
)
def test_dot_product_inplace(context, vec1, vec2):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)
    first_vec.dot_(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Dot product of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
        ([1, 2, 3], [4, 3, 2]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1]),
    ],
)
def test_dot_product_plain(context, vec1, vec2):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec.dot(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Dot product of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
        ([1, 2, 3], [4, 3, 2]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1]),
    ],
)
def test_dot_product_plain_inplace(context, vec1, vec2):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec.dot_(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Dot product of vectors is incorrect."


@pytest.mark.parametrize(
    "vec1",
    [
        ([0]),
        ([1]),
        ([-1]),
        ([-1, -2]),
        ([1, 2]),
        ([1, 2, 3]),
        ([1, 2, 3, 4]),
        ([1, 2, 3, 4, 5]),
        ([1, 2, 3, 4, 5, 6]),
        ([1, 2, 3, 4, 5, 6, 7]),
        ([1, 2, 3, 4, 5, 6, 7, 8]),
    ],
)
def test_sum(context, vec1):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    result = first_vec.sum()
    expected = [sum(vec1)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Sum of vector is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1",
    [
        ([0]),
        ([1]),
        ([-1]),
        ([-1, -2]),
        ([1, 2]),
        ([1, 2, 3]),
        ([1, 2, 3, 4]),
        ([1, 2, 3, 4, 5]),
        ([1, 2, 3, 4, 5, 6]),
        ([1, 2, 3, 4, 5, 6, 7]),
        ([1, 2, 3, 4, 5, 6, 7, 8]),
    ],
)
def test_sum_inplace(context, vec1):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    result = first_vec.sum()
    expected = [sum(vec1)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Sum of vector is incorrect."


def test_mul_plain_zero(context):
    # from context
    max_slots = 8192 // 2
    pt = [0] * max_slots
    ct = ts.ckks_vector(context, [1] * max_slots)

    with pytest.raises(RuntimeError) as e:
        # the workaround of transparent ciphertext doesn't work when all slots are used
        result = ct * pt
    assert str(e.value) == "result ciphertext is transparent"


@pytest.mark.parametrize(
    "vec1, vec2",
    [
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
def test_mul_without_global_scale(vec1, vec2):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    scale = 2 ** 40

    first_vec = ts.ckks_vector(context, vec1, scale=scale)
    second_vec = ts.ckks_vector(context, vec2, scale=scale)
    result = first_vec * second_vec
    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, 1), "Something went wrong in memory."


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
def test_vec_plain_matrix_mul(context, vec, matrix):
    context.generate_galois_keys()
    ct = ts.ckks_vector(context, vec)
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
def test_vec_plain_matrix_mul_inplace(context, vec, matrix):
    context.generate_galois_keys()
    ct = ts.ckks_vector(context, vec)
    ct.mm_(matrix)
    expected = (np.array(vec) @ np.array(matrix)).tolist()
    assert _almost_equal(ct.decrypt(), expected, 1), "Matrix multiplciation is incorrect."


@pytest.mark.parametrize(
    "vec, matrix1, matrix2",
    [
        ([1, 2, 3], [[1, 2, 3], [1, 2, 3], [1, 2, 3]], [[1, 2, 3], [1, 2, 3], [1, 2, 3]]),
        (
            [0.7968, 0.7027, -0.5913],
            [[-0.0673, 0.2271], [-0.1252, 0.0273], [0.1905, -0.1435]],
            [[1.5545, -0.8035, -0.5180, -0.0950], [0.2614, 0.7102, 0.2147, -0.6553]],
        ),
        (
            [0.2232, -2.0231],
            [[1.5545, -0.8035, -0.5180, -0.0950], [0.2614, 0.7102, 0.2147, -0.6553]],
            [
                [0.7282164096832275, -1.4397623538970947, -1.4735020399093628],
                [-1.067466378211975, 0.6787762641906738, -1.720473051071167],
                [0.08132505416870117, 0.04388974606990814, 0.3696863353252411],
                [1.3272252082824707, 0.6236424446105957, -0.9497130513191223],
            ],
        ),
    ],
)
def test_vec_plain_matrix_mul_depth2(context, vec, matrix1, matrix2):
    context.generate_galois_keys()
    ct = ts.ckks_vector(context, vec)
    result = ct @ matrix1 @ matrix2
    expected = (np.array(vec) @ np.array(matrix1) @ np.array(matrix2)).tolist()
    assert _almost_equal(result.decrypt(), expected, 1), "Matrix multiplication is incorrect."


@pytest.mark.parametrize(
    "data, polynom",
    [
        ([0, 1, 2, 3, 4], lambda x: x * x + x),
        ([0, 1, 2, 3, 4], lambda x: x * x - x),
        ([0, 1, 2, 3, 4], lambda x: x * x * x),
        ([0, 0, 0, 0, 0], lambda x: x * x * x),
    ],
)
def test_simple_polynomial(context, data, polynom):
    ct = ts.ckks_vector(context, data)
    expected = [polynom(x) for x in data]
    result = polynom(ct)

    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1), "Polynomial evaluation is incorrect."
    # adding plain vector at the end
    result += data
    expected = [expected[i] + data[i] for i in range(len(data))]
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, 1)


@pytest.mark.parametrize(
    "data, polynom",
    [
        ([0, 1, 2, 3, 4], lambda x: x * x + x),
        ([0, 1, 2, 3, 4], lambda x: x * x - x),
        ([0, 1, 2, 3, 4], lambda x: x * x * x),
        ([0, 0, 0, 0, 0], lambda x: x * x * x),
    ],
)
def test_simple_polynomial_modswitch_off(context, data, polynom):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])
    context.global_scale = 2 ** 40
    context.auto_mod_switch = False

    ct = ts.ckks_vector(context, data)
    with pytest.raises(ValueError) as e:
        result = polynom(ct)
    assert str(e.value) == "encrypted1 and encrypted2 parameter mismatch"


@pytest.mark.parametrize(
    "data, polynom",
    [([0, 1, 2, 3, 4], lambda x: x * x + x), ([0, 1, 2, 3, 4], lambda x: x * x - x),],
)
def test_simple_polynomial_rescale_off(context, data, polynom):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])
    context.global_scale = 2 ** 40
    context.auto_rescale = False

    ct = ts.ckks_vector(context, data)
    with pytest.raises(ValueError) as e:
        result = polynom(ct)
    assert str(e.value) == "scale mismatch"


@pytest.mark.parametrize(
    "poly_mod_degree, coeff_mod_bit_sizes, max_depth",
    [(8192, [30, 20, 20, 30], 2), (8192, [60, 40, 40, 60], 2), (16384, [40, 21, 21, 21, 40], 3),],
)
def test_depth_max(poly_mod_degree, coeff_mod_bit_sizes, max_depth):
    context = ts.context(ts.SCHEME_TYPE.CKKS, poly_mod_degree, 0, coeff_mod_bit_sizes)
    scale = 2 ** coeff_mod_bit_sizes[1]
    context.global_scale = scale
    vec = ts.ckks_vector(context, [1, 2, 3, 4])
    for _ in range(max_depth):
        vec *= vec

    with pytest.raises(ValueError) as e:
        vec *= vec
    assert str(e.value) in ["scale out of bounds", "end of modulus switching chain reached"]


def test_size(context):
    for size in range(10):
        vec = ts.ckks_vector(context, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
