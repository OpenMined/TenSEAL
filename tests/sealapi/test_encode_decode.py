import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


@pytest.mark.parametrize(
    "ctx", [helper_context_bfv()],
)
def test_intencoder(ctx):
    encoder = sealapi.IntegerEncoder(ctx)

    enc = encoder.encode(5)
    assert enc.to_string() == "1x^2 + 1"
    assert enc.int_array()[2] == 1
    assert encoder.decode_uint32(enc) == 5
    assert encoder.decode_int32(enc) == 5
    assert encoder.decode_uint64(enc) == 5
    assert encoder.decode_int32(enc) == 5

    enc = sealapi.Plaintext()
    encoder.encode(7, enc)
    assert enc.to_string() == "1x^2 + 1x^1 + 1"

    big = sealapi.BigUInt("5555555555")
    enc = encoder.encode(big)
    assert enc.int_array()[0] == 1
    assert encoder.decode_biguint(enc) == 0x5555555555

    enc = sealapi.Plaintext()
    encoder.encode(big + 1, enc)
    assert encoder.decode_biguint(enc) == 0x5555555556


@pytest.mark.parametrize(
    "ctx", [helper_context_bfv(1024)],
)
def test_batchencoder(ctx):
    poly_modulus_degree = helper_poly_modulus_degree(ctx)
    enc_out = sealapi.Plaintext()

    testcase = [1, 2, 3, 4, 5]
    encoder = sealapi.BatchEncoder(ctx)
    encoder.encode(testcase, enc_out)
    assert enc_out.int_array().size() == poly_modulus_degree
    assert encoder.decode_uint64(enc_out)[: len(testcase)] == testcase
    assert encoder.decode_int64(enc_out)[: len(testcase)] == testcase

    test_str = "7FFx^3 + 1x^1 + 3"
    testcase = sealapi.Plaintext(test_str)
    encoder.encode(testcase)
    assert testcase.to_string() != test_str
    encoder.decode(testcase)
    assert testcase.to_string() == test_str


@pytest.mark.parametrize("testcase", [[10, 20, 30], [1 / div for div in range(2, 10)]])
def test_ckks_encoder(testcase):
    ctx = helper_context_ckks()
    encoder = sealapi.CKKSEncoder(ctx)

    plaintext = sealapi.Plaintext()
    encoder.encode(testcase, 2 ** 40, plaintext)
    out = encoder.decode_double(plaintext)

    is_close_enough(out, testcase)

    keygen = sealapi.KeyGenerator(ctx)
    public_key = keygen.public_key()
    secret_key = keygen.secret_key()

    decryptor = sealapi.Decryptor(ctx, secret_key)
    encryptor = sealapi.Encryptor(ctx, public_key, secret_key)

    plaintext = sealapi.Plaintext()
    ciphertext = sealapi.Ciphertext(ctx)

    encoder.encode(testcase, 2 ** 40, plaintext)
    encryptor.encrypt(plaintext, ciphertext)

    plaintext_out = sealapi.Plaintext()

    decryptor.decrypt(ciphertext, plaintext_out)
    decrypted = encoder.decode_double(plaintext)
    is_close_enough(decrypted, testcase)
