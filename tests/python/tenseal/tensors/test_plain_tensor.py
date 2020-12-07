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
