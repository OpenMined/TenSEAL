import copy
import pickle
import math
import pytest

import numpy as np
from skimage.util.shape import view_as_windows

import tenseal as ts


SHAPES = [
    [1],
    [2],
    [10],
    [2, 2],
    [3, 5],
    [2, 3, 4],
    [2, 3, 4, 5],
    [2, 3, 4, 5, 6],
]


def _almost_equal_number(v1, v2, m_pow_ten):
    upper_bound = pow(10, -m_pow_ten)

    return abs(v1 - v2) <= upper_bound


def _almost_equal(vec1, vec2, m_pow_ten):
    if not isinstance(vec1, list):
        return _almost_equal_number(vec1, vec2, m_pow_ten)

    if len(vec1) != len(vec2):
        return False

    for v1, v2 in zip(vec1, vec2):
        if isinstance(v1, list):
            if not _almost_equal(v1, v2, m_pow_ten):
                return False
        elif not _almost_equal_number(v1, v2, m_pow_ten):
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
    "data, axis",
    [
        (ts.plain_tensor([0]), 0),
        (ts.plain_tensor([i for i in range(8)]), 0),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3]), 0),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3]), 1),
        (ts.plain_tensor([i for i in range(8)], shape=[2, 2, 2]), 1),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5]), 0),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5]), 1),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5]), 2),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), 0),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), 1),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), 2),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), 3),
    ],
)
@pytest.mark.parametrize("batch", [False, True])
def test_sum(context, data, batch, axis, precision):
    context.generate_galois_keys()
    tensor = ts.ckks_tensor(context, data, batch=batch)

    result = tensor.sum(axis)

    orig = ts.tolist(data)
    np_orig = np.array(orig).reshape(data.shape())
    expected = np.sum(np_orig, axis).tolist()

    result = tensor.sum(axis)

    # Decryption
    plain_ts = result.decrypt()
    decrypted_result = ts.tolist(plain_ts)

    assert _almost_equal(decrypted_result, expected, precision), "Sum of tensor is incorrect."
    assert _almost_equal(
        ts.tolist(tensor.decrypt()), orig, precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "data",
    [
        (ts.plain_tensor([0])),
        (ts.plain_tensor([i for i in range(8)])),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3])),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5])),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7])),
    ],
)
def test_sum_batch(context, data, precision):
    context.generate_galois_keys()
    tensor = ts.ckks_tensor(context, data, batch=True)

    orig = ts.tolist(data)
    np_orig = np.array(orig).reshape(data.shape())
    expected = np.sum(np_orig, 0).tolist()

    result = tensor.sum_batch()

    # Decryption
    plain_ts = result.decrypt()
    decrypted_result = ts.tolist(plain_ts)

    assert _almost_equal(decrypted_result, expected, precision), "Sum of tensor is incorrect."
    assert _almost_equal(
        ts.tolist(tensor.decrypt()), orig, precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "data", [(ts.plain_tensor([i for i in range(8)], shape=[2, 2, 2])),],
)
@pytest.mark.parametrize("batch", [True, False])
def test_sum_fail(context, data, batch, precision):
    context.generate_galois_keys()
    tensor = ts.ckks_tensor(context, data, batch=batch)
    with pytest.raises(ValueError) as e:
        result = tensor.sum(1000)


def test_size(context):
    for size in range(1, 10):
        vec = ts.ckks_tensor(context, ts.plain_tensor([1] * size))
        assert vec.shape() == [size], "Size of encrypted tensor is incorrect."


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2]),],
)
def test_negate(context, plain, precision):
    tensor = ts.ckks_tensor(context, plain)

    expected = np.negative(ts.tolist(plain))

    result = -tensor
    decrypted_result = ts.tolist(result.decrypt())
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2]),],
)
def test_negate_inplace(context, plain, precision):
    tensor = ts.ckks_tensor(context, plain)

    expected = np.negative(ts.tolist(plain))

    tensor.neg_()
    decrypted_result = ts.tolist(tensor.decrypt())
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2]),],
)
def test_square(context, plain, precision):
    tensor = ts.ckks_tensor(context, plain)
    expected = np.square(ts.tolist(plain))

    result = tensor.square()
    decrypted_result = ts.tolist(result.decrypt())
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"
    assert _almost_equal(
        ts.tolist(tensor.decrypt()), ts.tolist(plain), precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2]),],
)
def test_square_inplace(context, plain, precision):
    tensor = ts.ckks_tensor(context, plain)
    expected = np.square(ts.tolist(plain))

    tensor.square_()
    decrypted_result = ts.tolist(tensor.decrypt())
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"


@pytest.mark.parametrize("shape", SHAPES)
@pytest.mark.parametrize("plain", [True, False])
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
def test_add_sub_mul_tensor_ct_pt(context, shape, plain, op):
    r_t = np.random.randn(*shape)
    l_t = np.random.randn(*shape)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), shape)
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), shape)
    right = ts.ckks_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.ckks_tensor(context, l_pt)

    if op == "add":
        expected_result = r_t + l_t
    elif op == "sub":
        expected_result = r_t - l_t
    elif op == "mul":
        expected_result = r_t * l_t

    ## non-inplace
    if op == "add":
        result = right + left
    elif op == "sub":
        result = right - left
    elif op == "mul":
        result = right * left

    np_result = np.array(ts.tolist(result.decrypt()))
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(ts.tolist(right.decrypt()))
    assert np.allclose(right_result, r_t, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(ts.tolist(left.decrypt()))
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(ts.tolist(result.decrypt()))
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(ts.tolist(right.decrypt()))
    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(ts.tolist(left.decrypt()))
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)


@pytest.mark.parametrize("shape", SHAPES)
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
def test_add_sub_mul_scalar(context, shape, op):
    r_t = np.random.randn(*shape)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), shape)
    right = ts.ckks_tensor(context, r_pt)
    left = np.random.randn(1)[0]

    if op == "add":
        expected_result = r_t + left
    elif op == "sub":
        expected_result = r_t - left
    elif op == "mul":
        expected_result = r_t * left

    ## non-inplace
    if op == "add":
        result = right + left
    elif op == "sub":
        result = right - left
    elif op == "mul":
        result = right * left

    np_result = np.array(ts.tolist(result.decrypt()))
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(ts.tolist(right.decrypt()))
    assert np.allclose(right_result, r_t, rtol=0, atol=0.01)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(ts.tolist(result.decrypt()))
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(ts.tolist(right.decrypt()))
    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0.01)
