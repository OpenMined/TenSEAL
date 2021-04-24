import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


@pytest.mark.parametrize("ctx", [helper_context_bfv(1024)])
def test_batchencoder(ctx):
    poly_modulus_degree = helper_poly_modulus_degree(ctx)
    enc_out = sealapi.Plaintext()

    testcase = [1, 2, 3, 4, 5]
    encoder = sealapi.BatchEncoder(ctx)
    encoder.encode(testcase, enc_out)
    assert enc_out.dyn_array().size() == poly_modulus_degree
    assert encoder.decode_uint64(enc_out)[: len(testcase)] == testcase
    assert encoder.decode_int64(enc_out)[: len(testcase)] == testcase


@pytest.mark.parametrize("testcase", [[10, 20, 30], [1 / div for div in range(2, 10)]])
def test_ckks_encoder(testcase):
    ctx = helper_context_ckks()
    encoder = sealapi.CKKSEncoder(ctx)

    plaintext = sealapi.Plaintext()
    encoder.encode(testcase, 2 ** 40, plaintext)
    out = encoder.decode_double(plaintext)

    is_close_enough(out, testcase)

    keygen = sealapi.KeyGenerator(ctx)
    pk = sealapi.PublicKey()
    public_key = keygen.create_public_key(pk)
    secret_key = keygen.secret_key()

    decryptor = sealapi.Decryptor(ctx, secret_key)
    encryptor = sealapi.Encryptor(ctx, pk, secret_key)

    plaintext = sealapi.Plaintext()
    ciphertext = sealapi.Ciphertext(ctx)

    encoder.encode(testcase, 2 ** 40, plaintext)
    encryptor.encrypt(plaintext, ciphertext)

    plaintext_out = sealapi.Plaintext()

    decryptor.decrypt(ciphertext, plaintext_out)
    decrypted = encoder.decode_double(plaintext)
    is_close_enough(decrypted, testcase)
