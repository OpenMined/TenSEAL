import tenseal as ts
import pytest
import copy
import pickle


@pytest.fixture(scope="module")
def context():
    return ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)


def noop(vec):
    return vec


def deep_copy(vec):
    return copy.deepcopy(vec)


def simple_copy(vec):
    return copy.copy(vec)


def internal_copy(vec):
    return vec.copy()


def recreate(vec):
    proto = vec.serialize()
    return ts.bfv_vector_from(proto)


def pickled(vec):
    out = pickle.dumps(vec)
    return pickle.loads(out)


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_add(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    first_vec = duplicate(first_vec)

    second_vec = ts.bfv_vector(context, vec2)

    result = first_vec + second_vec
    result = duplicate(result)

    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_add_inplace(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.bfv_vector(context, vec2)

    first_vec += second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_add_plain(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    first_vec = duplicate(first_vec)

    second_vec = vec2
    result = first_vec + second_vec
    result = duplicate(result)

    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_add_plain_inplace(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = vec2

    first_vec += second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_sub(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    first_vec = duplicate(first_vec)

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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_sub_inplace(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = ts.bfv_vector(context, vec2)

    first_vec -= second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_sub_plain(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    first_vec = duplicate(first_vec)

    second_vec = vec2
    result = first_vec - second_vec
    result = duplicate(result)

    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_sub_plain_inplace(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = vec2
    first_vec -= second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_mul(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    first_vec = duplicate(first_vec)

    second_vec = ts.bfv_vector(context, vec2)
    result = first_vec * second_vec
    result = duplicate(result)

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_mul_inplace(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)

    second_vec = ts.bfv_vector(context, vec2)
    first_vec *= second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."
    assert second_vec.decrypt() == vec2, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_mul_plain(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    first_vec = duplicate(first_vec)

    second_vec = vec2
    result = first_vec * second_vec
    result = duplicate(result)

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."
    assert first_vec.decrypt() == vec1, "Something went wrong in memory."


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
@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_mul_plain_inplace(context, vec1, vec2, duplicate):
    first_vec = ts.bfv_vector(context, vec1)
    first_vec = duplicate(first_vec)

    second_vec = vec2
    first_vec *= second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Multiplication of vectors is incorrect."


@pytest.mark.parametrize(
    "duplicate", [noop, deep_copy, simple_copy, internal_copy, recreate, pickled,]
)
def test_size(context, duplicate):
    for size in range(10):
        vec = ts.bfv_vector(context, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
