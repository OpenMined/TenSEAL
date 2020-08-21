from functools import reduce

import pytest
import numpy as np

import tenseal as ts

from tests.python.tenseal.utils import *


@pytest.mark.parametrize("vectors_nb", [1, 2, 3, 4, 9])
@pytest.mark.parametrize("vector_size", [1, 3, 11, 16, 64])
def test_pack_ckks_vectors(vectors_nb, vector_size):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    context.global_scale = pow(2, 40)
    # generated galois keys in order to do rotation on ciphertext vectors
    context.generate_galois_keys()

    # generate vectors
    vectors = [np.random.randn(vector_size).tolist() for _ in range(vectors_nb)]

    enc_vectors = [ts.ckks_vector(context, v) for v in vectors]

    result = ts.pack_vectors(enc_vectors)
    expected = reduce(lambda x, y: x + y, vectors, [])

    assert almost_equal(result.decrypt(), expected, 1), "packing CKKS vectors is incorrect."


@pytest.mark.parametrize("vectors_nb", [1, 2, 3, 4, 9])
@pytest.mark.parametrize("vector_size", [1, 3, 11, 16, 64])
def test_pack_bfv_vectors(vectors_nb, vector_size):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    # generated galois keys in order to do rotation on ciphertext vectors
    context.generate_galois_keys()

    # generate vectors
    vectors = [np.random.randint(1000, size=vector_size).tolist() for _ in range(vectors_nb)]

    enc_vectors = [ts.bfv_vector(context, v) for v in vectors]

    packed_vec = ts.pack_vectors(enc_vectors)
    result = packed_vec.decrypt()
    expected = reduce(lambda x, y: x + y, vectors, [])

    assert almost_equal(result, expected, 1), "packing BFV vectors is incorrect."
