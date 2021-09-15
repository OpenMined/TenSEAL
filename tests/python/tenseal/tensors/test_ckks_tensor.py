import copy
import pickle
import math
import pytest

import numpy as np
from skimage.util.shape import view_as_windows

import tenseal as ts


SHAPES = [[1], [2], [10], [2, 2], [3, 5], [2, 3, 4], [2, 3, 4, 5], [2, 3, 4, 5, 6]]

BROADCAST_SHAPES = [
    ([2, 3], [2, 1]),
    ([2, 1], [2, 4]),
    ([2, 2], [4, 2, 2]),
    ([2, 2, 3, 4, 5], [2, 3, 4, 5]),
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


def reshape(batched, shape):
    new_shape = shape.copy()
    if batched:
        batch_size = new_shape[0]
        new_shape = new_shape[1:]

    new_shape = new_shape[-1:] + new_shape[:-1]

    full_shape = new_shape.copy()
    if batched:
        full_shape.insert(0, batch_size)
    return new_shape, full_shape


@pytest.mark.parametrize(
    "data, new_shape",
    [
        # (ts.plain_tensor([0]), 0),
        (ts.plain_tensor([i for i in range(8)]), [4, 2]),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), [7, 15, 2]),
    ],
)
def test_reshape_no_batching(context, data, new_shape):
    tensor = ts.ckks_tensor(context, data, batch=False)

    old_shape = tensor.shape
    new_t = tensor.reshape(new_shape)

    assert new_t.shape == new_shape
    assert tensor.shape == old_shape

    tensor.reshape_(new_shape)
    assert tensor.shape == new_shape


@pytest.mark.parametrize(
    "data, new_shape",
    [
        # (ts.plain_tensor([0]), 0),
        (ts.plain_tensor([i for i in range(8)], shape=[2, 2, 2]), [4]),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), [7, 15]),
    ],
)
def test_reshape_batching(context, data, new_shape):
    tensor = ts.ckks_tensor(context, data, batch=True)

    old_shape = tensor.shape
    new_t = tensor.reshape(new_shape)

    assert new_t.shape == new_shape
    assert tensor.shape == old_shape

    tensor.reshape_(new_shape)
    assert tensor.shape == new_shape


@pytest.mark.parametrize(
    "data, slices, new_shape",
    [
        ([0, 1, 2, 3, 4, 5], [slice(1, 4, None)], [3]),
        ([0, 1, 2, 3, 4, 5], [slice(1, None, None)], [5]),
        ([0, 1, 2, 3, 4, 5], [slice(None, 4, None)], [4]),
        ([[0, 1, 2], [0, 1, 2], [0, 1, 2]], [slice(1, 3, None), slice(0, 2, None)], [2, 2]),
        ([[0, 1, 2], [0, 1, 2], [0, 1, 2]], [slice(1, None, None), slice(0, 2, None)], [2, 2]),
        (
            [[0, 1, 2], [0, 1, 2], [0, 1, 2]],
            [slice(1, None, None), slice(None, None, None)],
            [2, 3],
        ),
        (
            [[0, 1, 2], [0, 1, 2], [0, 1, 2]],
            [slice(None, None, None), slice(None, None, None)],
            [3, 3],
        ),
        ([[0, 1, 2], [0, 1, 2], [0, 1, 2]], 1, [1, 3]),
    ],
)
def test_subscript(context, data, slices, new_shape):
    tensor = ts.ckks_tensor(context, data)
    plain_data = np.array(data)

    new_tensor = tensor[slices]

    assert new_tensor.shape == new_shape
    if isinstance(slices, int):
        assert _almost_equal(
            new_tensor.decrypt().tolist(), [plain_data.__getitem__(slices).tolist()], 1
        )
    else:
        assert _almost_equal(
            new_tensor.decrypt().tolist(), plain_data.__getitem__(slices).tolist(), 1
        )


@pytest.mark.parametrize(
    "data, axis",
    [
        # (ts.plain_tensor([0]), 0),
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
@pytest.mark.parametrize("reshape_first", [False, True])
def test_sum(context, data, batch, reshape_first, axis, precision):
    context.generate_galois_keys()
    tensor = ts.ckks_tensor(context, data, batch=batch)

    shape = data.shape
    full_shape = data.shape
    if reshape_first:
        shape, full_shape = reshape(batch, shape)
        tensor = tensor.reshape(shape)
        data = data.reshape(full_shape)

    result = tensor.sum(axis)

    orig = data.tolist()
    np_orig = np.array(orig).reshape(full_shape)
    expected = np.sum(np_orig, axis).tolist()

    # Decryption
    plain_ts = result.decrypt()
    decrypted_result = plain_ts.tolist()

    assert _almost_equal(decrypted_result, expected, precision), "Sum of tensor is incorrect."
    assert _almost_equal(
        tensor.decrypt().tolist(), orig, precision
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
@pytest.mark.parametrize("reshape_first", [False, True])
def test_sum_batch(context, data, reshape_first, precision):
    context.generate_galois_keys()
    tensor = ts.ckks_tensor(context, data, batch=True)

    shape = data.shape
    full_shape = data.shape
    if reshape_first:
        shape, full_shape = reshape(True, shape)
        tensor = tensor.reshape(shape)
        data = data.reshape(full_shape)

    orig = data.tolist()
    np_orig = np.array(orig).reshape(full_shape)
    expected = np.sum(np_orig, 0).tolist()

    result = tensor.sum_batch()

    # Decryption
    plain_ts = result.decrypt()
    decrypted_result = plain_ts.tolist()

    assert _almost_equal(decrypted_result, expected, precision), "Sum of tensor is incorrect."
    assert _almost_equal(
        tensor.decrypt().tolist(), orig, precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize("data", [(ts.plain_tensor([i for i in range(8)], shape=[2, 2, 2]))])
@pytest.mark.parametrize("batch", [True, False])
def test_sum_fail(context, data, batch, precision):
    context.generate_galois_keys()
    tensor = ts.ckks_tensor(context, data, batch=batch)
    with pytest.raises(ValueError) as e:
        result = tensor.sum(1000)


def test_size(context):
    for size in range(1, 10):
        vec = ts.ckks_tensor(context, ts.plain_tensor([1] * size))
        assert vec.shape == [size], "Size of encrypted tensor is incorrect."


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2])],
)
@pytest.mark.parametrize("reshape_first", [False, True])
def test_negate(context, plain, precision, reshape_first):
    tensor = ts.ckks_tensor(context, plain)

    if reshape_first:
        shape, _ = reshape(False, plain.shape)
        tensor = tensor.reshape(shape)
        plain = plain.reshape(shape)

    expected = np.negative(plain.tolist())

    result = -tensor
    decrypted_result = result.decrypt().tolist()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2])],
)
def test_negate_inplace(context, plain, precision):
    tensor = ts.ckks_tensor(context, plain)

    expected = np.negative(plain.tolist())

    tensor.neg_()
    decrypted_result = tensor.decrypt().tolist()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2])],
)
@pytest.mark.parametrize("reshape_first", [False, True])
def test_square(context, plain, precision, reshape_first):
    tensor = ts.ckks_tensor(context, plain)
    result = tensor.square()

    if reshape_first:
        shape, _ = reshape(False, plain.shape)
        result = result.reshape(shape)
        plain = plain.reshape(shape)
    expected = np.square(plain.tolist())

    decrypted_result = result.decrypt().tolist()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"
    assert _almost_equal(
        tensor.decrypt().tolist(), plain.tolist(), precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain",
    [ts.plain_tensor([0]), ts.plain_tensor([1, 2, 3]), ts.plain_tensor([1, 2, 3, 4], [2, 2])],
)
def test_square_inplace(context, plain, precision):
    tensor = ts.ckks_tensor(context, plain)
    expected = np.square(plain.tolist())

    tensor.square_()
    decrypted_result = tensor.decrypt().tolist()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"


@pytest.mark.parametrize("shape", SHAPES)
@pytest.mark.parametrize("plain", [True, False])
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
@pytest.mark.parametrize("reshape_first", [False, True])
@pytest.mark.slow
def test_add_sub_mul_tensor_ct_pt(context, shape, plain, op, reshape_first):
    r_t = np.random.randn(*shape)
    l_t = np.random.randn(*shape)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), shape)
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), shape)
    right = ts.ckks_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.ckks_tensor(context, l_pt)

    if reshape_first:
        shape, _ = reshape(False, shape)
        r_t = r_t.reshape(shape)
        l_t = l_t.reshape(shape)
        r_pt = r_pt.reshape(shape)
        l_pt = l_pt.reshape(shape)
        right = right.reshape(shape)
        left = left.reshape(shape)

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

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)


@pytest.mark.parametrize("shape", BROADCAST_SHAPES)
@pytest.mark.parametrize("plain", [True, False])
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
@pytest.mark.slow
def test_broadcast_add_sub_mul_tensor_ct_pt(context, shape, plain, op):
    l_t = np.random.randn(*shape[1])
    r_t = np.random.randn(*shape[0])
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), shape[1])
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), shape[0])
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

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)


@pytest.mark.parametrize("shape", SHAPES)
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
@pytest.mark.slow
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

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0.01)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0.01)


@pytest.mark.parametrize(
    "plain,power",
    [
        (ts.plain_tensor([6]), 0),
        (ts.plain_tensor([6]), 2),
        (ts.plain_tensor([1, 2, 3]), 4),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2]), 6),
    ],
)
def test_power(context, plain, power, precision):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 16384, coeff_mod_bit_sizes=[60, 40, 40, 40, 40, 60])
    context.global_scale = pow(2, 40)

    tensor = ts.ckks_tensor(context, plain)
    expected = np.array([np.power(v, power) for v in plain.raw]).reshape(plain.shape).tolist()

    new_tensor = tensor ** power
    decrypted_result = new_tensor.decrypt().tolist()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"
    assert _almost_equal(
        tensor.decrypt().tolist(), plain.tolist(), precision
    ), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain,power",
    [
        (ts.plain_tensor([6]), 2),
        (ts.plain_tensor([1, 2, 3]), 4),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2]), 6),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2]), 0),
    ],
)
def test_power_inplace(context, plain, power, precision):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 16384, coeff_mod_bit_sizes=[60, 40, 40, 40, 40, 60])
    context.global_scale = pow(2, 40)

    tensor = ts.ckks_tensor(context, plain)
    expected = np.array([np.power(v, power) for v in plain.raw]).reshape(plain.shape).tolist()

    tensor **= power
    decrypted_result = tensor.decrypt().tolist()
    assert _almost_equal(decrypted_result, expected, precision), "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "data, polynom",
    [
        (ts.plain_tensor([1, 2, 3]), [0, 0, 0]),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2]), [1, 1]),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2]), [1, 1, 1]),
        (ts.plain_tensor([1, 2, 3, 4, 5, 6], [2, 3]), [3, 2, 4, 5]),
    ],
)
@pytest.mark.parametrize("reshape_first", [False, True])
def test_polynomial(context, data, polynom, reshape_first):
    ct = ts.ckks_tensor(context, data)

    shape = data.shape
    if reshape_first:
        shape, _ = reshape(False, shape)
        data = data.reshape(shape)

    expected = (
        np.array([np.polyval(polynom[::-1], x) for x in data.raw]).reshape(data.shape).tolist()
    )
    result = ct.polyval(polynom)
    result = result.reshape(shape)

    if len(polynom) >= 13:
        precision = -1
    else:
        precision = 1

    decrypted_result = result.decrypt().tolist()
    assert _almost_equal(
        decrypted_result, expected, precision
    ), "Polynomial evaluation is incorrect."


@pytest.mark.parametrize(
    "data, polynom",
    [(ts.plain_tensor([1, 2, 3, 4]), [0, 1, 1]), (ts.plain_tensor([1, 2, 3, 4]), [0, 1, 0, 1])],
)
def test_polynomial_modswitch_off(context, data, polynom):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])
    context.global_scale = 2 ** 40
    context.auto_mod_switch = False

    ct = ts.ckks_tensor(context, data)
    with pytest.raises(ValueError) as e:
        result = ct.polyval(polynom)


@pytest.mark.parametrize(
    "data, polynom",
    [(ts.plain_tensor([1, 2, 3, 4]), [0, 1, 1]), (ts.plain_tensor([1, 2, 3, 4]), [0, 1, 0, 1])],
)
def test_polynomial_rescale_off(context, data, polynom):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])
    context.global_scale = 2 ** 40
    context.auto_rescale = False

    ct = ts.ckks_tensor(context, data)
    with pytest.raises(ValueError) as e:
        result = ct.polyval(polynom)


@pytest.mark.parametrize(
    "shapes",
    [
        # 1D-1D
        ((1,), (1,)),
        ((3,), (3,)),
        ((8,), (8,)),
        # 1D-2D
        ((1,), (1, 2)),
        ((2,), (2, 2)),
        ((2,), (2, 4)),
        ((2,), (2, 5)),
        ((2,), (2, 3)),
        ((5,), (5, 1)),
        ((7,), (7, 5)),
        # 2D-1D
        ((2, 1), (1,)),
        ((2, 2), (2,)),
        ((4, 2), (2,)),
        ((3, 2), (2,)),
        ((5, 2), (2,)),
        ((3, 5), (5,)),
        ((3, 7), (7,)),
        # 2D-2D
        ((2, 1), (1, 2)),
        ((2, 2), (2, 2)),
        ((4, 2), (2, 4)),
        ((3, 2), (2, 5)),
        ((5, 2), (2, 3)),
        ((3, 5), (5, 1)),
        ((3, 7), (7, 5)),
    ],
)
@pytest.mark.parametrize("plain", [True, False])
def test_dot(context, shapes, plain):
    r_shape = shapes[0]
    l_shape = shapes[1]
    r_t = np.random.randn(*r_shape)
    l_t = np.random.randn(*l_shape)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), r_shape)
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), l_shape)
    right = ts.ckks_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.ckks_tensor(context, l_pt)

    expected_result = r_t.dot(l_t)

    ## non-inplace
    result = right.dot(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)

    # inplace
    right.dot_(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)


# this test only tests the python API for matmul
# a previous test already tests different shapes
@pytest.mark.parametrize("plain", [True, False])
@pytest.mark.parametrize("arithmetic", [True, False])
@pytest.mark.slow
def test_matmul_api(context, plain, arithmetic):
    r_t = np.random.randn(2, 2)
    l_t = np.random.randn(2, 2)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), (2, 2))
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), (2, 2))
    right = ts.ckks_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.ckks_tensor(context, l_pt)

    expected_result = r_t.dot(l_t)

    ## non-inplace
    if arithmetic:
        result = right @ left
    else:
        result = right.mm(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)

    # inplace
    if arithmetic:
        right @= left
    else:
        right.mm_(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0.01)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0.01)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0.01)


@pytest.mark.parametrize(
    "data, shape, new_shape",
    [([i for i in range(10)], [10], [2, 10]), ([i for i in range(9)], [3, 3], [2, 3, 3])],
)
def test_broadcast(context, data, shape, new_shape):
    tensor = ts.ckks_tensor(context, ts.plain_tensor(data, shape))

    newt = tensor.broadcast(new_shape)
    assert tensor.shape == shape
    assert newt.shape == new_shape

    tensor.broadcast_(new_shape)
    assert tensor.shape == new_shape


@pytest.mark.parametrize(
    "data, shape",
    [
        ([i for i in range(6)], [6]),
        ([i for i in range(6)], [3, 2]),
        ([i for i in range(12)], [3, 2, 2]),
        ([i for i in range(2 * 3 * 4 * 5)], [2, 3, 4, 5]),
    ],
)
def test_transpose(context, data, shape):
    tensor = ts.ckks_tensor(context, ts.plain_tensor(data, shape))

    expected = np.transpose(np.array(data).reshape(shape))

    newt = tensor.transpose()
    assert tensor.shape == shape
    assert newt.shape == list(expected.shape)
    result = np.array(newt.decrypt().tolist())
    assert np.allclose(result, expected, rtol=0, atol=0.01)

    tensor.transpose_()
    assert tensor.shape == list(expected.shape)
    result = np.array(tensor.decrypt().tolist())
    assert np.allclose(result, expected, rtol=0, atol=0.01)
