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
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.bfv_vector(context, vec2)

    result = first_vec.dot(second_vec)

    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    assert result.decrypt() == expected, "Multiplication of vectors is incorrect."
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
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.bfv_vector(context, vec2)
    first_vec.dot_(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    assert first_vec.decrypt() == expected, "Dot product of vectors is incorrect."
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
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.plain_tensor(vec2, dtype="int")
    result = first_vec.dot(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    assert result.decrypt() == expected, "Dot product of vectors is incorrect."
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
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.plain_tensor(vec2, dtype="int")
    first_vec.dot_(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    assert first_vec.decrypt() == expected, "Dot product of vectors is incorrect."


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
    first_vec = ts.bfv_vector(context, vec1)
    result = first_vec.sum()
    expected = [sum(vec1)]

    # Decryption
    assert result.decrypt() == expected, "Sum of vector is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
    first_vec = ts.bfv_vector(context, vec1)
    result = first_vec.sum()
    expected = [sum(vec1)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Sum of vector is incorrect."
