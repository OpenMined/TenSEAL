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


@pytest.fixture(scope="function")
def context():
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    return context


def parallel_context(n_threads):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193, n_threads=n_threads)
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
        (ts.plain_tensor([i for i in range(8)], dtype="int"), [4, 2]),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7], dtype="int"), [7, 15, 2]),
    ],
)
def test_reshape_no_batching(context, data, new_shape):
    tensor = ts.bfv_tensor(context, data, batch=False)

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
        (ts.plain_tensor([i for i in range(8)], shape=[2, 2, 2], dtype="int"), [4]),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7], dtype="int"), [7, 15]),
    ],
)
def test_reshape_batching(context, data, new_shape):
    tensor = ts.bfv_tensor(context, data, batch=True)

    old_shape = tensor.shape
    new_t = tensor.reshape(new_shape)

    assert new_t.shape == new_shape
    assert tensor.shape == old_shape

    tensor.reshape_(new_shape)
    assert tensor.shape == new_shape


@pytest.mark.parametrize(
    "data, axis",
    [
        # (ts.plain_tensor([0]), 0),
        (ts.plain_tensor([i for i in range(8)], dtype="int"), 0),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3], dtype="int"), 0),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3], dtype="int"), 1),
        (ts.plain_tensor([i for i in range(8)], shape=[2, 2, 2], dtype="int"), 1),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5], dtype="int"), 0),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5], dtype="int"), 1),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5], dtype="int"), 2),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7], dtype="int"), 0),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7], dtype="int"), 1),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7], dtype="int"), 2),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7], dtype="int"), 3),
    ],
)
@pytest.mark.parametrize("batch", [False, True])
@pytest.mark.parametrize("reshape_first", [False, True])
def test_sum(context, data, batch, reshape_first, axis, precision):
    context.generate_galois_keys()
    tensor = ts.bfv_tensor(context, data, batch=batch)

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

    assert decrypted_result == expected, "Sum of tensor is incorrect."
    assert tensor.decrypt().tolist() == orig, "Something went wrong in memory."


@pytest.mark.parametrize(
    "data",
    [
        (ts.plain_tensor([0], dtype="int")),
        (ts.plain_tensor([i for i in range(8)], dtype="int")),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3], dtype="int")),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5], dtype="int")),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7], dtype="int")),
    ],
)
@pytest.mark.parametrize("reshape_first", [False, True])
def test_sum_batch(context, data, reshape_first, precision):
    context.generate_galois_keys()
    tensor = ts.bfv_tensor(context, data, batch=True)

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

    assert (decrypted_result == expected) == True, "Sum of tensor is incorrect."
    assert tensor.decrypt().tolist() == orig, "Something went wrong in memory."


@pytest.mark.parametrize(
    "data", [(ts.plain_tensor([i for i in range(8)], shape=[2, 2, 2], dtype="int"))]
)
@pytest.mark.parametrize("batch", [True, False])
def test_sum_fail(context, data, batch, precision):
    context.generate_galois_keys()
    tensor = ts.bfv_tensor(context, data, batch=batch)
    with pytest.raises(ValueError) as e:
        result = tensor.sum(1000)


def test_size(context):
    for size in range(1, 10):
        vec = ts.bfv_tensor(context, ts.plain_tensor([1] * size, dtype="int"))
        assert vec.shape == [size], "Size of encrypted tensor is incorrect."


@pytest.mark.parametrize(
    "plain",
    [
        ts.plain_tensor([0], dtype="int"),
        ts.plain_tensor([1, 2, 3], dtype="int"),
        ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"),
    ],
)
@pytest.mark.parametrize("reshape_first", [False, True])
def test_negate(context, plain, precision, reshape_first):
    tensor = ts.bfv_tensor(context, plain)

    if reshape_first:
        shape, _ = reshape(False, plain.shape)
        tensor = tensor.reshape(shape)
        plain = plain.reshape(shape)

    expected = np.negative(plain.tolist())

    result = -tensor
    decrypted_result = result.decrypt().tolist()
    assert (decrypted_result == expected).all() == True, "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "plain",
    [
        ts.plain_tensor([0], dtype="int"),
        ts.plain_tensor([1, 2, 3], dtype="int"),
        ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"),
    ],
)
def test_negate_inplace(context, plain, precision):
    tensor = ts.bfv_tensor(context, plain)

    expected = np.negative(plain.tolist())

    tensor.neg_()
    decrypted_result = tensor.decrypt().tolist()
    assert (decrypted_result == expected).all() == True, "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "plain",
    [
        ts.plain_tensor([0], dtype="int"),
        ts.plain_tensor([1, 2, 3], dtype="int"),
        ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"),
    ],
)
@pytest.mark.parametrize("reshape_first", [False, True])
def test_square(context, plain, precision, reshape_first):
    tensor = ts.bfv_tensor(context, plain)
    result = tensor.square()

    if reshape_first:
        shape, _ = reshape(False, plain.shape)
        result = result.reshape(shape)
        plain = plain.reshape(shape)
    expected = np.square(plain.tolist())

    decrypted_result = result.decrypt().tolist()
    assert (decrypted_result == expected).all() == True, "Decryption of tensor is incorrect"
    assert tensor.decrypt().tolist() == plain.tolist(), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain",
    [
        ts.plain_tensor([0], dtype="int"),
        ts.plain_tensor([1, 2, 3], dtype="int"),
        ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"),
    ],
)
def test_square_inplace(context, plain, precision):
    tensor = ts.bfv_tensor(context, plain)
    expected = np.square(plain.tolist())

    tensor.square_()
    decrypted_result = tensor.decrypt().tolist()
    assert (decrypted_result == expected).all() == True, "Decryption of tensor is incorrect"


@pytest.mark.parametrize("shape", SHAPES)
@pytest.mark.parametrize("plain", [True, False])
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
@pytest.mark.parametrize("reshape_first", [False, True])
def test_add_sub_mul_tensor_ct_pt(context, shape, plain, op, reshape_first):
    r_t = np.random.randint(0, 110, *[shape], dtype=np.int64)
    l_t = np.random.randint(0, 100, *[shape], dtype=np.int64)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), shape, dtype="int")
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), shape, dtype="int")
    right = ts.bfv_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.bfv_tensor(context, l_pt)

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
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)


@pytest.mark.parametrize("shape", BROADCAST_SHAPES)
@pytest.mark.parametrize("plain", [True, False])
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
def test_broadcast_add_sub_mul_tensor_ct_pt(context, shape, plain, op):
    l_t = np.random.randint(0, 100, *[shape[1]], dtype=np.int64)
    r_t = np.random.randint(0, 100, *[shape[0]], dtype=np.int64)
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), shape[1], dtype="int")
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), shape[0], dtype="int")
    right = ts.bfv_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.bfv_tensor(context, l_pt)

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
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)


@pytest.mark.parametrize("shape", SHAPES)
@pytest.mark.parametrize("op", ["add", "sub", "mul"])
def test_add_sub_mul_scalar(context, shape, op):
    r_t = np.random.randint(0, 100, *[shape], dtype=np.int64)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), shape, dtype="int")
    right = ts.bfv_tensor(context, r_pt)
    left = np.random.randint(0, 100, size=1, dtype=np.int64)[0]

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
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0)

    # inplace
    if op == "add":
        right += left
    elif op == "sub":
        right -= left
    elif op == "mul":
        right *= left

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0)


@pytest.mark.parametrize(
    "plain,power",
    [
        (ts.plain_tensor([6], dtype="int"), 0),
        (ts.plain_tensor([6], dtype="int"), 2),
        (ts.plain_tensor([1, 2, 3], dtype="int"), 4),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"), 6),
    ],
)
def test_power(context, plain, power, precision):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    tensor = ts.bfv_tensor(context, plain)
    expected = np.array([np.power(v, power) for v in plain.raw]).reshape(plain.shape).tolist()

    new_tensor = tensor ** power
    decrypted_result = new_tensor.decrypt().tolist()
    assert (decrypted_result == expected) == True, "Decryption of tensor is incorrect"
    assert tensor.decrypt().tolist() == plain.tolist(), "Something went wrong in memory."


@pytest.mark.parametrize(
    "plain,power",
    [
        (ts.plain_tensor([6], dtype="int"), 2),
        (ts.plain_tensor([1, 2, 3], dtype="int"), 4),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"), 6),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"), 0),
    ],
)
def test_power_inplace(context, plain, power, precision):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    tensor = ts.bfv_tensor(context, plain)
    expected = np.array([np.power(v, power) for v in plain.raw]).reshape(plain.shape).tolist()

    tensor **= power
    decrypted_result = tensor.decrypt().tolist()
    assert (decrypted_result == expected) == True, "Decryption of tensor is incorrect"


@pytest.mark.parametrize(
    "data, polynom",
    [
        (ts.plain_tensor([1, 2, 3], dtype="int"), [0, 0, 0]),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"), [1, 1]),
        (ts.plain_tensor([1, 2, 3, 4], [2, 2], dtype="int"), [1, 1, 1]),
        (ts.plain_tensor([1, 2, 3, 4, 5, 6], [2, 3], dtype="int"), [3, 2, 4, 5]),
    ],
)
@pytest.mark.parametrize("reshape_first", [False, True])
def test_polynomial(context, data, polynom, reshape_first):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    ct = ts.bfv_tensor(context, data)

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
    assert (decrypted_result == expected) == True, "Polynomial evaluation is incorrect."


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
    r_t = np.random.randint(0, 100, *[r_shape], dtype=np.int64)
    l_t = np.random.randint(0, 100, *[l_shape], dtype=np.int64)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), r_shape, dtype="int")
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), l_shape, dtype="int")
    right = ts.bfv_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.bfv_tensor(context, l_pt)

    expected_result = r_t.dot(l_t)

    ## non-inplace
    result = right.dot(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)

    # inplace
    right.dot_(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)


# this test only test the python API for matmul
# a previous test already test different shapes
@pytest.mark.parametrize("plain", [True, False])
@pytest.mark.parametrize("arithmetic", [True, False])
def test_matmul_api(context, plain, arithmetic):
    r_t = np.random.randint(0, 100, size=(2, 2), dtype=np.int64)
    l_t = np.random.randint(0, 100, size=(2, 2), dtype=np.int64)
    r_pt = ts.plain_tensor(r_t.flatten().tolist(), (2, 2), dtype="int")
    l_pt = ts.plain_tensor(l_t.flatten().tolist(), (2, 2), dtype="int")
    right = ts.bfv_tensor(context, r_pt)
    if plain:
        left = l_pt
    else:
        left = ts.bfv_tensor(context, l_pt)

    expected_result = r_t.dot(l_t)

    ## non-inplace
    if arithmetic:
        result = right @ left
    else:
        result = right.mm(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())
    assert np.allclose(right_result, r_t, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)

    # inplace
    if arithmetic:
        right @= left
    else:
        right.mm_(left)

    np_result = np.array(result.decrypt().tolist())
    assert np_result.shape == expected_result.shape
    assert np.allclose(np_result, expected_result, rtol=0, atol=0)
    # right didn't change
    right_result = np.array(right.decrypt().tolist())

    assert right_result.shape == expected_result.shape
    assert np.allclose(right_result, expected_result, rtol=0, atol=0)
    # left didn't change
    if plain:
        left_result = l_t
    else:
        left_result = np.array(left.decrypt().tolist())
    assert np.allclose(left_result, l_t, rtol=0, atol=0)


@pytest.mark.parametrize(
    "data, shape, new_shape",
    [([i for i in range(10)], [10], [2, 10]), ([i for i in range(9)], [3, 3], [2, 3, 3])],
)
def test_broadcast(context, data, shape, new_shape):
    tensor = ts.bfv_tensor(context, ts.plain_tensor(data, shape, dtype="int"))

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
    tensor = ts.bfv_tensor(context, ts.plain_tensor(data, shape, dtype="int"))

    expected = np.transpose(np.array(data).reshape(shape))

    newt = tensor.transpose()
    assert tensor.shape == shape
    assert newt.shape == list(expected.shape)
    result = np.array(newt.decrypt().tolist())
    assert np.allclose(result, expected, rtol=0, atol=0)

    tensor.transpose_()
    assert tensor.shape == list(expected.shape)
    result = np.array(tensor.decrypt().tolist())
    assert np.allclose(result, expected, rtol=0, atol=0)
