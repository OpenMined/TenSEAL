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
    "data, axis",
    [
        (ts.plain_tensor([0]), 0),
        (ts.plain_tensor([i for i in range(8)]), 0),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3]), 0),
        (ts.plain_tensor([i for i in range(6)], shape=[2, 3]), 1),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5]), 0),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5]), 1),
        (ts.plain_tensor([i for i in range(30)], shape=[2, 3, 5]), 2),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), 0),
        (ts.plain_tensor([i for i in range(210)], shape=[2, 3, 5, 7]), 3),
    ],
)
@pytest.mark.parametrize("batch", [True, False])
def test_sum(context, data, batch, axis, precision):
    context.generate_galois_keys()
    tensor = ts.ckks_tensor(context, data, batch=batch)

    if batch and axis:
        with pytest.raises(ValueError) as e:
            result = tensor.sum(axis)
        return

    orig = ts.tolist(data)
    np_orig = np.array(orig).reshape(data.shape())
    expected = [np.sum(np_orig, axis).tolist()]

    # Decryption
    plain_ts = result.decrypt()
    decrypted_result = ts.tolist(plain_ts)
    print(axis, np_orig, expected)
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
