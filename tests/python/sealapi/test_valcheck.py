import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


@pytest.mark.parametrize(
    "check", [sealapi.is_metadata_valid_for, sealapi.is_data_valid_for, sealapi.is_valid_for],
)
def test_valcheck(check):
    ctx = helper_context_bfv(8192)
    other_ctx = helper_context_ckks(8192)
    invalid_ctx = helper_context_invalid()

    ciphertext = sealapi.Ciphertext(ctx)

    assert check(ciphertext, ctx) is True
    assert check(ciphertext, other_ctx) is False
    assert check(ciphertext, invalid_ctx) is False

    assert sealapi.is_buffer_valid(ciphertext) is True

    plaintext = sealapi.Plaintext()

    assert check(plaintext, ctx) is True
    assert check(plaintext, other_ctx) is True
    assert check(plaintext, invalid_ctx) is False

    keygen = sealapi.KeyGenerator(ctx)

    pk = sealapi.PublicKey()
    keygen.create_public_key(pk)

    rk = sealapi.RelinKeys()
    keygen.create_relin_keys(rk)

    gk = sealapi.GaloisKeys()
    keygen.create_galois_keys(gk)

    for key in [
        pk,
        keygen.secret_key(),
        gk,
        rk,
    ]:
        assert check(key, ctx) is True
        assert check(key, other_ctx) is False
        assert check(key, invalid_ctx) is False
        assert sealapi.is_buffer_valid(key) is True
