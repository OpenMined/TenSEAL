import tenseal as ts
import pytest
import numpy as np
import copy


def _almost_equal(vec1, vec2, m_pow_ten):
    if len(vec1) != len(vec2):
        return False

    upper_bound = pow(10, -m_pow_ten)
    for v1, v2 in zip(vec1, vec2):
        if abs(v1 - v2) > upper_bound:
            return False
    return True


def ckks_context():
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    context.global_scale = pow(2, 40)
    return context


def bfv_context():
    return ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)


# default precision is 1, otherwise it can be specified in the test-case
@pytest.fixture(scope="function")
def precision():
    return 1


def deep_copy(vec):
    return copy.deepcopy(vec)


def simple_copy(vec):
    return copy.copy(vec)


def internal_copy(vec):
    return vec.copy()


def recreate_ckks(vec):
    vec_proto = vec.serialize()
    return ts.ckks_vector_from(vec.context(), vec_proto)


def recreate_ckks_tensor(vec):
    vec_proto = vec.serialize()
    return ts.ckks_tensor_from(vec.context(), vec_proto)


def recreate_bfv(vec):
    vec_proto = vec.serialize()
    return ts.bfv_vector_from(vec.context(), vec_proto)


@pytest.mark.parametrize(
    "plain_vec", [[0], [-1], [1], [21, 81, 90], [-73, -81, -90], [-11, 82, -43, 52]]
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_ckks_vector_sanity(plain_vec, precision, duplicate):
    context = ckks_context()
    orig = ts.ckks_vector(context, plain_vec)
    ckks_tensor = duplicate(orig)
    decrypted = ckks_tensor.decrypt()

    assert _almost_equal(decrypted, plain_vec, precision), "Decryption of vector is incorrect"


@pytest.mark.parametrize(
    "plain_vec", [[0], [-1], [1], [21, 81, 90], [-73, -81, -90], [-11, 82, -43, 52]]
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_negate(plain_vec, precision, duplicate):
    context = ckks_context()
    ckks_vec = ts.ckks_vector(context, plain_vec)
    ckks_vec = duplicate(ckks_vec)

    expected = [-v for v in plain_vec]
    result = -ckks_vec
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"


@pytest.mark.parametrize(
    "plain_vec, power, precision", [([0], 3, 1), ([1, -2, 3, -4], 8, -1),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_power(plain_vec, power, precision, duplicate):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 16384, coeff_mod_bit_sizes=[60, 40, 40, 40, 40, 60])
    context.global_scale = pow(2, 40)
    ckks_vec = ts.ckks_vector(context, plain_vec)
    ckks_vec = duplicate(ckks_vec)

    expected = [np.power(v, power) for v in plain_vec]
    new_vec = ckks_vec ** power
    decrypted_result = new_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"
    assert _almost_equal(
        ckks_vec.decrypt(), plain_vec, precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain_vec", [[0], [1, -4, 3, 5],],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_square(plain_vec, precision, duplicate):
    context = ckks_context()
    ckks_vec = ts.ckks_vector(context, plain_vec)
    ckks_vec = duplicate(ckks_vec)

    expected = [np.power(v, 2) for v in plain_vec]
    new_vec = ckks_vec.square()
    decrypted_result = new_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"
    assert _almost_equal(
        ckks_vec.decrypt(), plain_vec, precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2", [([0], [0]), ([1, 2], [-73, -10]), ([1, 0, -2, 0, -8, 4, 73], [81,]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_add(vec1, vec2, precision, duplicate):
    context = ckks_context()
    first_vec = ts.ckks_vector(context, vec1)
    first_vec = duplicate(first_vec)

    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    result = first_vec + second_vec
    result = duplicate(result)

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]), ([1, 0, -2, 0, -8, 4, 73], [81,]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_sub(vec1, vec2, precision, duplicate):
    context = ckks_context()
    first_vec = ts.ckks_vector(context, vec1)
    first_vec = duplicate(first_vec)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]
    result = first_vec - second_vec
    result = duplicate(result)

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2", [([0], [0]), ([1, 0, -2, 0, -8, 4, 73], [81,]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_mul(vec1, vec2, precision, duplicate):
    context = ckks_context()
    first_vec = ts.ckks_vector(context, vec1)
    first_vec = duplicate(first_vec)
    second_vec = ts.ckks_vector(context, vec2)

    # replicate for operation between n-sized and 1-sized vectors
    if len(vec2) == 1:
        # needed for replicating the first slot in the encrypted vector
        context.generate_galois_keys()
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2 * len(vec1))]
    else:
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    result = first_vec * second_vec
    result = duplicate(result)

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_dot_product(vec1, vec2, precision, duplicate):
    context = ckks_context()
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    first_vec = duplicate(first_vec)
    second_vec = ts.ckks_vector(context, vec2)

    result = first_vec.dot(second_vec)
    result = duplicate(result)

    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Dot product of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks,],
)
def test_mul_without_global_scale(vec1, vec2, precision, duplicate):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    scale = 2 ** 40

    first_vec = ts.ckks_vector(context, vec1, scale=scale)
    first_vec = duplicate(first_vec)
    second_vec = ts.ckks_vector(context, vec2, scale=scale)

    result = first_vec * second_vec
    result = duplicate(result)

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


@pytest.mark.parametrize(
    "vec1, vec2", [([1], [1]), ([-1], [1]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_add(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([1], [0]), ([-1], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_add_inplace(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_add_plain(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([1], [0]), ([-1], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_add_plain_inplace(vec1, vec2, duplicate):
    context = bfv_context()
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = vec2

    first_vec += second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Addition of vectors is incorrect."


@pytest.mark.parametrize(
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_sub(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([-1], [-1]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_sub_inplace(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([-1], [1]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_sub_plain(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_sub_plain_inplace(vec1, vec2, duplicate):
    context = bfv_context()
    first_vec = ts.bfv_vector(context, vec1)
    second_vec = vec2
    first_vec -= second_vec
    first_vec = duplicate(first_vec)

    expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == expected, "Substraction of vectors is incorrect."


@pytest.mark.parametrize(
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_mul(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([0], [0]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_mul_inplace(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([-1], [1]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_mul_plain(vec1, vec2, duplicate):
    context = bfv_context()
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
    "vec1, vec2", [([-1], [1]), ([1, 2, 3, 4], [4, 3, 2, 1]),],
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_bfv,],
)
def test_mul_plain_inplace(vec1, vec2, duplicate):
    context = bfv_context()
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
    "plain_vec", [[0], [-1], [1], [21, 81, 90], [-73, -81, -90], [-11, 82, -43, 52]]
)
@pytest.mark.parametrize(
    "duplicate", [deep_copy, simple_copy, internal_copy, recreate_ckks_tensor,],
)
def test_ckks_tensor_sanity(plain_vec, precision, duplicate):
    context = ckks_context()
    plain_tensor = ts.plain_tensor(plain_vec)
    orig = ts.ckks_tensor(context, plain_tensor)
    ckks_tensor = duplicate(orig)
    decrypted = ts.tolist(ckks_tensor.decrypt())

    assert _almost_equal(decrypted, plain_vec, precision), "Decryption of tensor is incorrect"
