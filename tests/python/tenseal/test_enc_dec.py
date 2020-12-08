import pytest
import tenseal as ts
import numpy as np


PLAIN_VEC = [
    [0],
    [-1],
    [1],
    [73, 81, 90],
    [-73, -81, -90],
]
PLAIN_EMPTY_VEC = [
    [],
]
COEFF_MOD_BIT_SIZES = [60, 40, 40, 60]


def _almost_equal(vec1, vec2, m_pow_ten):
    if len(vec1) != len(vec2):
        return False

    upper_bound = pow(10, -m_pow_ten)
    for v1, v2 in zip(vec1, vec2):
        if abs(v1 - v2) > upper_bound:
            return False
    return True


@pytest.mark.parametrize("plain_vec", PLAIN_VEC)
def test_bfv_encryption_decryption(plain_vec):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    bfv_vec = ts.bfv_vector(context, plain_vec)
    decrypted_vec = bfv_vec.decrypt()

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."


@pytest.mark.parametrize("plain_vec", PLAIN_VEC)
def test_bfv_secretkey_decryption(plain_vec):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)

    bfv_vec = ts.bfv_vector(context, plain_vec)
    secret_key = context.secret_key()
    context.make_context_public()
    decrypted_vec = bfv_vec.decrypt(secret_key)

    assert decrypted_vec == plain_vec, "Decryption of vector is incorrect."


@pytest.mark.parametrize("plain_vec", PLAIN_EMPTY_VEC)
def test_bfv_empty_encryption(plain_vec):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    with pytest.raises(ValueError) as e:
        bfv_vec = ts.bfv_vector(context, plain_vec)
    assert str(e.value) == "Attempting to encrypt an empty vector"


@pytest.mark.parametrize("plain_vec", PLAIN_VEC)
def test_ckks_encryption_decryption(plain_vec):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=COEFF_MOD_BIT_SIZES)
    scale = pow(2, 40)

    ckks_vec = ts.ckks_vector(context, plain_vec, scale)
    decrypted_vec = ckks_vec.decrypt()
    assert _almost_equal(decrypted_vec, plain_vec, 1), "Decryption of vector is incorrect"


@pytest.mark.parametrize("plain_vec", PLAIN_VEC)
def test_ckks_encryption_decryption_with_global_scale(plain_vec):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=COEFF_MOD_BIT_SIZES)
    context.global_scale = pow(2, 40)

    ckks_vec = ts.ckks_vector(context, plain_vec)
    decrypted_vec = ckks_vec.decrypt()
    assert _almost_equal(decrypted_vec, plain_vec, 1), "Decryption of vector is incorrect"


@pytest.mark.parametrize("plain_vec", PLAIN_VEC)
def test_ckks_secretkey_decryption(plain_vec):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=COEFF_MOD_BIT_SIZES)
    scale = pow(2, 40)

    ckks_vec = ts.ckks_vector(context, plain_vec, scale)
    secret_key = context.secret_key()
    context.make_context_public()
    decrypted_vec = ckks_vec.decrypt(secret_key)
    assert _almost_equal(decrypted_vec, plain_vec, 1), "Decryption of vector is incorrect"


@pytest.mark.parametrize("plain_vec", PLAIN_EMPTY_VEC)
def test_ckks_empty_encryption(plain_vec):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=COEFF_MOD_BIT_SIZES)
    scale = pow(2, 40)
    with pytest.raises(ValueError) as e:
        ckks_vec = ts.ckks_vector(context, plain_vec, scale)
    assert str(e.value) == "Attempting to encrypt an empty vector"


@pytest.mark.parametrize("batch", [False, True])
def test_ckks_tensor_encryption_decryption_matrix(batch):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=COEFF_MOD_BIT_SIZES)
    scale = pow(2, 40)
    matrix = np.random.randn(4, 5)
    plain_tensor = ts.plain_tensor(matrix.tolist())

    ckks_vec = ts.ckks_tensor(context, plain_tensor, scale, batch)
    decrypted_vec = ckks_vec.decrypt().tolist()

    assert len(decrypted_vec) == len(matrix)
    for idx in range(len(decrypted_vec)):
        row = decrypted_vec[idx]
        assert isinstance(row, list)
        assert len(row) == len(matrix[0])

        assert _almost_equal(row, matrix[idx], 1), "Decryption of vector is incorrect"


@pytest.mark.parametrize("batch", [False, True])
@pytest.mark.parametrize(
    "shape", [[1], [2], [10], [2, 2], [3, 5], [2, 3, 4], [2, 3, 4, 5], [2, 3, 4, 5, 6],]
)
def test_ckks_tensor_encryption_decryption(batch, shape):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=COEFF_MOD_BIT_SIZES)
    scale = pow(2, 40)
    tensor = np.random.randn(*shape)
    plain_tensor = ts.plain_tensor(tensor.flatten().tolist(), shape=shape)

    ckks_vec = ts.ckks_tensor(context, plain_tensor, scale, batch)
    decrypted_vec = ckks_vec.decrypt().tolist()

    assert np.array(decrypted_vec).shape == tensor.shape
    assert np.allclose(tensor, decrypted_vec, rtol=0, atol=0.001)
