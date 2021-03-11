import math
import pytest

import numpy as np
import tenseal as ts


@pytest.mark.parametrize(
    "data, shape",
    [
        ([i for i in range(10)], [10]),
        ([i for i in range(20)], [4, 5]),
        ([i for i in range(210)], [2, 3, 5, 7]),
    ],
)
def test_sanity(data, shape):
    tensor = ts.plain_tensor(data, shape)

    strides = []
    stride = 1

    for s in reversed(shape):
        strides.append(stride)
        stride *= s

    strides = list(reversed(strides))

    assert tensor.raw == data
    assert tensor.shape == shape
    assert tensor.size() == shape[0]
    assert len(tensor) == shape[0]
    assert tensor.empty() == False
    assert tensor.strides() == strides

    buf = tensor.serialize()
    new_tensor = ts.plain_tensor_from(buf)

    assert new_tensor.raw == data
    assert new_tensor.shape == shape
    assert new_tensor.size() == shape[0]
    assert len(new_tensor) == shape[0]
    assert new_tensor.empty() == False
    assert new_tensor.strides() == strides


@pytest.mark.parametrize(
    "data, shape, reshape",
    [
        ([i for i in range(10)], [10], [2, 5]),
        ([i for i in range(10)], [2, 5], [10]),
        ([i for i in range(210)], [2, 3, 5, 7], [6, 5, 7]),
        ([i for i in range(210)], [2, 3, 5, 7], [30, 7]),
        ([i for i in range(210)], [2, 3, 5, 7], [210]),
    ],
)
def test_reshape(data, shape, reshape):
    tensor = ts.plain_tensor(data, shape)

    newt = tensor.reshape(reshape)
    assert tensor.shape == shape
    assert newt.shape == reshape

    tensor.reshape_(reshape)
    assert tensor.shape == reshape


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
def test_batch(data, axis):
    batch = data.batch(axis)

    assert len(batch) == len(data.raw) / data.shape[axis]
    assert len(batch[0]) == data.shape[axis]

    expected = np.array(data.raw).reshape(int(len(data.raw) / data.shape[axis]), data.shape[axis])
    assert np.array(batch).any() == expected.any()


@pytest.mark.parametrize(
    "data, shape, new_shape",
    [([i for i in range(10)], [10], [2, 10]), ([i for i in range(9)], [3, 3], [2, 3, 3]),],
)
def test_broadcast(data, shape, new_shape):
    tensor = ts.plain_tensor(data, shape)

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
def test_transpose(data, shape):
    tensor = ts.plain_tensor(data, shape)

    expected = np.transpose(np.array(data).reshape(shape))

    newt = tensor.transpose()
    assert tensor.shape == shape
    assert newt.shape == list(expected.shape)
    assert np.array(newt.tolist()).any() == expected.any()

    tensor.transpose_()
    assert tensor.shape == list(expected.shape)
    assert np.array(tensor.tolist()).any() == expected.any()
