import tenseal as ts
import pytest
import copy
import pickle


@pytest.fixture(scope="module")
def context():
    return ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)


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
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_add(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.bfv_vector(context, vec2)

    result = first_vec + second_vec

    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_add_inplace(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.bfv_vector(context, vec2)

    first_vec += second_vec

    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_add_plain(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = vec2
    result = first_vec + second_vec

    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
    ],
)
def test_radd_plain(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)
    result = vec2 + first_vec
    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], 0),
        ([1, 2, 3, 4], -2),
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_add_plain_inplace(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = vec2
    first_vec += second_vec

    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."


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
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_sub(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = ts.bfv_vector(context, vec2)
    result = first_vec - second_vec
    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_sub_inplace(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.bfv_vector(context, vec2)

    first_vec -= second_vec

    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_sub_plain(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = vec2
    result = first_vec - second_vec

    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
        ([2 * i for i in range(10000)], [3 * i for i in range(10000)]),
        ([2 * i for i in range(100000)], [3 * i for i in range(100000)]),
    ],
)
def test_sub_plain_inplace(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = vec2
    first_vec -= second_vec

    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."


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
        ([2 for i in range(10000)], [3 for i in range(10000)]),
    ],
)
def test_mul(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = ts.bfv_vector(context, vec2)
    result = first_vec * second_vec

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
def test_mul_inplace(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = ts.bfv_vector(context, vec2)
    first_vec *= second_vec

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], -2),
        ([2 for i in range(10000)], [3 for i in range(10000)]),
    ],
)
def test_mul_plain(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = vec2
    result = first_vec * second_vec

    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]
    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
        ([1, 2, 3, 4], 2),
        ([1, 2, 3, 4], -2),
    ],
)
def test_mul_plain_inplace(context, vec1, vec2):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = vec2
    first_vec *= second_vec

    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."


def test_size(context):
    for size in range(1, 10):
        vec = ts.bfv_vector(context, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
