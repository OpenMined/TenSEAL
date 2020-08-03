import copy
import pickle
import math
import pytest

import numpy as np
from skimage.util.shape import view_as_windows

import tenseal as ts


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


def parallel_context(n_threads):
    context = ts.context(
        ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60], n_threads=n_threads
    )
    context.global_scale = pow(2, 40)
    return context


# default precision is 1, otherwise it can be specified in the test-case
@pytest.fixture(scope="function")
def precision():
    return 1


@pytest.mark.parametrize(
    "plain_vec", [[0], [-1], [1], [21, 81, 90], [-73, -81, -90], [-11, 82, -43, 52]]
)
def test_negate(context, plain_vec, precision):
    ckks_vec = ts.ckks_vector(context, plain_vec)

    expected = [-v for v in plain_vec]
    result = -ckks_vec
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"


@pytest.mark.parametrize(
    "plain_vec", [[0], [-1], [1], [21, 81, 90], [-73, -81, -90], [-11, 82, -43, 52]]
)
def test_negate_inplace(context, plain_vec, precision):
    ckks_vec = ts.ckks_vector(context, plain_vec)

    expected = [-v for v in plain_vec]
    ckks_vec.neg_()
    decrypted_result = ckks_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"


@pytest.mark.parametrize(
    "plain_vec, power, precision",
    [
        ([0], 3, 1),
        ([0, 1, -1, 2, -2], 0, 1),
        ([1, -1, 2, -2], 1, 1),
        ([1, -1, 2, -2], 2, 1),
        ([1, -1, 2, -2], 3, 1),
        ([1, -2, 3, -4], 4, 1),
        ([1, -2, 3, -4], 1, 1),
        ([1, -2, 3, -4], 2, 1),
        ([1, -2, 3, -4], 3, 1),
        ([1, -2, 3, -4], 4, 1),
        ([1, -2, 3, -4], 5, 1),
        ([1, -2, 3, -4], 6, 1),
        ([1, -2, 3, -4], 7, 0),
        ([1, -2, 3, -4], 8, -1),
    ],
)
def test_power(context, plain_vec, power, precision):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 16384, coeff_mod_bit_sizes=[60, 40, 40, 40, 40, 60])
    context.global_scale = pow(2, 40)
    ckks_vec = ts.ckks_vector(context, plain_vec)

    expected = [np.power(v, power) for v in plain_vec]
    new_vec = ckks_vec ** power
    decrypted_result = new_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"
    assert _almost_equal(
        ckks_vec.decrypt(), plain_vec, precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain_vec, power, precision",
    [
        ([0], 3, 1),
        ([0, 1, -1, 2, -2], 0, 1),
        ([1, -1, 2, -2], 1, 1),
        ([1, -1, 2, -2], 2, 1),
        ([1, -1, 2, -2], 3, 1),
        ([1, -2, 3, -4], 4, 1),
        ([1, -2, 3, -4], 1, 1),
        ([1, -2, 3, -4], 2, 1),
        ([1, -2, 3, -4], 3, 1),
        ([1, -2, 3, -4], 4, 1),
        ([1, -2, 3, -4], 5, 1),
        ([1, -2, 3, -4], 6, 1),
        ([1, -2, 3, -4], 7, 0),
        ([1, -2, 3, -4], 8, -1),
    ],
)
def test_power_inplace(context, plain_vec, power, precision):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 16384, coeff_mod_bit_sizes=[60, 40, 40, 40, 40, 60])
    context.global_scale = pow(2, 40)
    ckks_vec = ts.ckks_vector(context, plain_vec)

    expected = [np.power(v, power) for v in plain_vec]
    ckks_vec **= power
    decrypted_result = ckks_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"


@pytest.mark.parametrize(
    "plain_vec",
    [
        [0],
        [1],
        [2],
        [1, -1, 2, -2],
        [1, -1, 6, -2],
        [2, 1, -2, -2],
        [1, -2, 3, -4],
        [3, -2, 5, -4],
        [1, -4, 3, 5],
    ],
)
def test_square(context, plain_vec, precision):
    ckks_vec = ts.ckks_vector(context, plain_vec)

    expected = [np.power(v, 2) for v in plain_vec]
    new_vec = ckks_vec.square()
    decrypted_result = new_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"
    assert _almost_equal(
        ckks_vec.decrypt(), plain_vec, precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain_vec",
    [
        [0],
        [1],
        [2],
        [1, -1, 2, -2],
        [1, -1, 6, -2],
        [2, 1, -2, -2],
        [1, -2, 3, -4],
        [3, -2, 5, -4],
        [1, -4, 3, 5],
    ],
)
def test_square_inplace(context, plain_vec, precision):
    ckks_vec = ts.ckks_vector(context, plain_vec)
    expected = [np.power(v, 2) for v in plain_vec]
    ckks_vec.square_()
    decrypted_result = ckks_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of vector is incorrect"


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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_add(context, vec1, vec2, precision):
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
    assert _almost_equal(decrypted_result, expected, precision), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_add_inplace(context, vec1, vec2, precision):
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
    assert _almost_equal(decrypted_result, expected, precision), "Addition of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
def test_add_plain(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec + second_vec
    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_radd_plain(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    result = vec2 + first_vec
    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Addition of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_add_plain_inplace(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec += second_vec
    if isinstance(vec2, list):
        expected = [v1 + v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 + vec2 for v1 in vec1]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Addition of vectors is incorrect."


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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_sub(context, vec1, vec2, precision):
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
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_sub_inplace(context, vec1, vec2, precision):
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
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
def test_sub_plain(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec - second_vec
    if isinstance(vec2, list):
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 - vec2 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_rsub_plain(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    result = vec2 - first_vec
    if isinstance(vec2, list):
        expected = [v2 - v1 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [vec2 - v1 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Substraction of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_sub_plain_inplace(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec -= second_vec
    if isinstance(vec2, list):
        expected = [v1 - v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 - vec2 for v1 in vec1]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Substraction of vectors is incorrect."


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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_mul(context, vec1, vec2, precision):
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
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
        ([1, 2, 3, 4], [2,]),
        ([1, 0, -2, 73], [-5,]),
        ([1, 2, 3, 4, 5], [1,]),
        ([1, 0, -2, 0, -8, 4, 73], [81,]),
    ],
)
def test_mul_inplace(context, vec1, vec2, precision):
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
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
def test_mul_plain(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec * second_vec
    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_rmul_plain(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    result = vec2 * first_vec
    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_mul_plain_inplace(context, vec1, vec2, precision):
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec *= second_vec
    if isinstance(vec2, list):
        expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]
    elif isinstance(vec2, (float, int)):
        expected = [v1 * vec2 for v1 in vec1]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."


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
def test_dot_product(context, vec1, vec2, precision):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)

    result = first_vec.dot(second_vec)

    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Dot product of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
def test_dot_product_inplace(context, vec1, vec2, precision):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)
    first_vec.dot_(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Dot product of vectors is incorrect."
    assert _almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."


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
def test_dot_product_plain(context, vec1, vec2, precision):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    result = first_vec.dot(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Dot product of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_dot_product_plain_inplace(context, vec1, vec2, precision):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    second_vec = vec2
    first_vec.dot_(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Dot product of vectors is incorrect."


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
def test_sum(context, vec1, precision):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    result = first_vec.sum()
    expected = [sum(vec1)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Sum of vector is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
def test_sum_inplace(context, vec1, precision):
    context.generate_galois_keys()
    first_vec = ts.ckks_vector(context, vec1)
    result = first_vec.sum()
    expected = [sum(vec1)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(decrypted_result, expected, precision), "Sum of vector is incorrect."


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
def test_mul_without_global_scale(vec1, vec2, precision):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    scale = 2 ** 40

    first_vec = ts.ckks_vector(context, vec1, scale=scale)
    second_vec = ts.ckks_vector(context, vec2, scale=scale)

    result = first_vec * second_vec

    expected = [v1 * v2 for v1, v2 in zip(vec1, vec2)]

    # Decryption
    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Multiplication of vectors is incorrect."
    assert _almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."


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
@pytest.mark.parametrize("n_threads", [0, 1, 2, 4])
@pytest.mark.parametrize("n_jobs", [0, 1, 2, 4])
def test_vec_plain_matrix_mul(vec, matrix, n_threads, n_jobs, precision):
    context = parallel_context(n_threads)
    context.generate_galois_keys()
    ct = ts.ckks_vector(context, vec)
    result = ct.mm(matrix, n_jobs)
    expected = (np.array(vec) @ np.array(matrix)).tolist()
    assert _almost_equal(
        result.decrypt(), expected, precision
    ), "Matrix multiplciation is incorrect."
    assert _almost_equal(ct.decrypt(), vec, precision), "Something went wrong in memory."


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
@pytest.mark.parametrize("n_threads", [0, 1, 2, 4])
@pytest.mark.parametrize("n_jobs", [0, 1, 2, 4])
def test_vec_plain_matrix_mul_inplace(vec, matrix, n_threads, n_jobs, precision):
    context = parallel_context(n_threads)
    context.generate_galois_keys()
    ct = ts.ckks_vector(context, vec)
    ct.mm_(matrix, n_jobs)
    expected = (np.array(vec) @ np.array(matrix)).tolist()
    assert _almost_equal(ct.decrypt(), expected, precision), "Matrix multiplciation is incorrect."


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
def test_vec_plain_matrix_mul_depth2(context, vec, matrix1, matrix2, precision):
    context.generate_galois_keys()
    ct = ts.ckks_vector(context, vec)
    result = ct @ matrix1 @ matrix2
    expected = (np.array(vec) @ np.array(matrix1) @ np.array(matrix2)).tolist()
    assert _almost_equal(
        result.decrypt(), expected, precision
    ), "Matrix multiplication is incorrect."


@pytest.mark.parametrize(
    "data, polynom",
    [
        # null polynom
        ([0, 1, 2, 3, 4], [0]),
        ([0, 1, 2, 3, 4], [0, 0]),
        ([0, 1, 2, 3, 4], [0, 0, 0]),
        # power of two coeff
        ([0, 1, 2, 3, 4], [1, 1]),
        ([0, 1, 2, 3, 4], [0, 1, 1]),
        ([0, 1, 2, 3, 4], [0, 1, 1, 0, 1]),
        # random coeff
        ([0, 1, 2, 3, 4], [-4, -2, 5]),
        ([0, 0, 0, 0, 0], [0, 0, 0, 1]),
        ([0, 1, 2, 3, 4], [0, 0, 0, 1]),
        ([0, 1, 2, 3, 4], [3, 2, 4, 5]),
        ([0, -1, -2, -3, -4], [-3, -2, -4, -5, 1]),
    ],
)
def test_polynomial(context, data, polynom, precision):
    ct = ts.ckks_vector(context, data)
    expected = [np.polyval(polynom[::-1], x) for x in data]
    result = ct.polyval(polynom)

    decrypted_result = result.decrypt()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Polynomial evaluation is incorrect."


@pytest.mark.parametrize(
    "data, polynom",
    [
        ## high data may result in bigger error (2 is enough for 0.1 error)
        ([2, 2, 2, 2, 2], [0, 1, 1, 0, 1, 0, 0, 0, 1]),
        ([0, -1, 2, -3, 4], [5, -3, 4, 73, -3]),
        ([0, 1, -2, 3, -4], [-3, 0, 5, 1, -2]),
        ([0, -1, 1, -2, 2], [3, -7, 2, 0, 1, -1, 7, 2, -3]),
        ([0, -1, 1, -2, 2], [3, -7, 2, 0, 1, -1, 7, 2, -3, -7, 2, 0, 1, -1, 7, 2, -2]),
        ([0, -1, 1, -2, 2], [0] * 1 + [1]),
        ([0, -1, 1, -2, 2], [0] * 2 + [1]),
        ([0, -1, 1, -2, 2], [0] * 3 + [1]),
        ([0, -1, 1, -2, 2], [0] * 4 + [1]),
        ([0, -1, 1, -2, 2], [0] * 5 + [1]),
        ([0, -1, 1, -2, 2], [0] * 6 + [1]),
        ([0, -1, 1, -2, 2], [0] * 7 + [1]),
        ([0, -1, 1, -2, 2], [0] * 8 + [1]),
        ([0, -1, 1, -2, 2], [0] * 9 + [1]),
        ([0, -1, 1, -2, 2], [0] * 10 + [1]),
        ([0, -1, 1, -2, 2], [0] * 11 + [1]),
        ([0, -1, 1, -2, 2], [0] * 12 + [1]),
        ([0, -1, 1, -2, 2], [0] * 13 + [1]),
        ([0, -1, 1, -2, 2], [0] * 14 + [1]),
        ([0, -1, 1, -2, 2], [0] * 15 + [1]),
        ([0, -1, 1, -2, 2], [0] * 16 + [1]),
        ([0, -1, 1, -2, 2], [0] * 16 + [2]),
    ],
)
def test_high_degree_polynomial(data, polynom, precision):
    # special context for higher depth
    context = ts.context(
        ts.SCHEME_TYPE.CKKS, 16384, coeff_mod_bit_sizes=[60, 40, 40, 40, 40, 40, 60]
    )
    context.global_scale = pow(2, 40)
    ct = ts.ckks_vector(context, data)
    expected = [np.polyval(polynom[::-1], x) for x in data]
    result = ct.polyval(polynom)

    decrypted_result = result.decrypt()
    if len(polynom) >= 13:
        # we allow greater error since some polynomial has terms with a high exponent
        error_tolerance = -1
    else:
        error_tolerance = 1
    assert _almost_equal(
        decrypted_result, expected, error_tolerance
    ), "Polynomial evaluation is incorrect."


@pytest.mark.parametrize(
    "data, polynom",
    [
        ([0, 1, 2, 3, 4], [0, 1, 1]),
        ([0, 1, 2, 3, 4], [0, -1, 1]),
        ([0, 1, 2, 3, 4], [0, 1, 0, 1]),
        ([0, 0, 0, 0, 0], [0, 1, 0, 1]),
    ],
)
def test_polynomial_modswitch_off(context, data, polynom):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])
    context.global_scale = 2 ** 40
    context.auto_mod_switch = False

    ct = ts.ckks_vector(context, data)
    with pytest.raises(ValueError) as e:
        result = ct.polyval(polynom)
    # encrypted1 and encrypted2 parameter mismatch (or encrypted_ntt and plain_ntt)
    assert "parameter mismatch" in str(e.value)


@pytest.mark.parametrize(
    "data, polynom", [([0, 1, 2, 3, 4], [0, 1, 1]), ([0, 1, 2, 3, 4], [0, -1, 1]),],
)
def test_polynomial_rescale_off(context, data, polynom):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])
    context.global_scale = 2 ** 40
    context.auto_rescale = False

    ct = ts.ckks_vector(context, data)
    with pytest.raises(ValueError) as e:
        result = ct.polyval(polynom)
    assert str(e.value) == "scale mismatch"


@pytest.mark.parametrize(
    "input_size, kernel_size", [(2, 2), (3, 2), (4, 2), (4, 3), (7, 3), (12, 5)]
)
def test_conv2d_im2col(context, input_size, kernel_size):
    def generate_input(input_size, kernel_size, stride=1):
        # generated random values and prepare the inputs
        x = np.random.randn(input_size, input_size)
        kernel = np.random.randn(kernel_size, kernel_size)

        out_h, out_w = (
            (x.shape[0] - kernel.shape[0]) // stride + 1,
            (x.shape[1] - kernel.shape[1]) // stride + 1,
        )

        new_x = view_as_windows(x, kernel.shape, step=stride)
        new_x = new_x.reshape(out_h * out_w, kernel.shape[0] * kernel.shape[1])

        next_power2 = pow(2, math.ceil(math.log2(kernel.size)))
        pad_width = next_power2 - kernel.size
        new_x = np.pad(new_x, ((0, 0), (0, pad_width)))

        kernel = np.pad(kernel.flatten(), (0, pad_width))
        return new_x, kernel

    # generated galois keys in order to do rotation on ciphertext vectors
    context.generate_galois_keys()

    x, kernel = generate_input(input_size, kernel_size)
    windows_nb = x.shape[0]

    x_enc = ts.ckks_vector(context, x.flatten(order="F").tolist())
    y_enc = x_enc.conv2d_im2col(kernel.tolist(), windows_nb)
    decrypted_result = y_enc.decrypt()

    expected = (x @ kernel).tolist()
    assert _almost_equal(decrypted_result, expected, 0)


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
    for size in range(1, 10):
        vec = ts.ckks_vector(context, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
