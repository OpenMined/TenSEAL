import sys, os
import pytest
import tenseal.sealapi as sealapi

from tempfile import NamedTemporaryFile
from pathlib import Path

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


def test_encryptor_bfv():
    poly_modulus_degree = 4096
    plain_modulus = 1024
    ctx = helper_context_bfv(poly_modulus_degree, plain_modulus)

    keygen = sealapi.KeyGenerator(ctx)
    intenc = sealapi.IntegerEncoder(ctx)
    public_key = keygen.public_key()
    secret_key = keygen.secret_key()

    decryptor = sealapi.Decryptor(ctx, secret_key)

    expected_value = 1234
    plaintext = intenc.encode(expected_value)

    def _test_encryptor_symmetric_setup(encryptor):
        # encrypt symmetric
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_symmetric(plaintext, ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert intenc.decode_int64(plaintext_out) == expected_value

        tmp = NamedTemporaryFile()
        serial = encryptor.encrypt_symmetric(plaintext)
        serial.save(tmp.name)
        assert Path(tmp.name).stat().st_size > 0

        plaintext_out.set_zero()

        # zero symmetric
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero_symmetric(ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert intenc.decode_int64(plaintext_out) == 0

        tmp = NamedTemporaryFile()
        serial = encryptor.encrypt_zero_symmetric()
        serial.save(tmp.name)
        assert Path(tmp.name).stat().st_size > 0
        plaintext_out.set_zero()

        # zero symmetric parms_id
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero_symmetric(ctx.last_parms_id(), ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert intenc.decode_int64(plaintext_out) == 0

        tmp = NamedTemporaryFile()
        serial = encryptor.encrypt_zero_symmetric(ctx.last_parms_id())
        serial.save(tmp.name)
        assert Path(tmp.name).stat().st_size > 0

    def _test_encryptor_pk_setup(encryptor):
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt(plaintext, ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert intenc.decode_int64(plaintext_out) == expected_value
        plaintext_out.set_zero()

        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero(ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert intenc.decode_int64(plaintext_out) == 0
        plaintext_out.set_zero()

        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero(ctx.last_parms_id(), ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert intenc.decode_int64(plaintext_out) == 0
        plaintext_out.set_zero()

    encryptor = sealapi.Encryptor(ctx, public_key)
    _test_encryptor_pk_setup(encryptor)

    encryptor = sealapi.Encryptor(ctx, public_key, secret_key)
    _test_encryptor_symmetric_setup(encryptor)
    _test_encryptor_pk_setup(encryptor)

    encryptor = sealapi.Encryptor(ctx, secret_key)
    _test_encryptor_symmetric_setup(encryptor)

    encryptor = sealapi.Encryptor(ctx, public_key)
    encryptor.set_secret_key(secret_key)
    _test_encryptor_pk_setup(encryptor)
    _test_encryptor_symmetric_setup(encryptor)

    encryptor = sealapi.Encryptor(ctx, secret_key)
    encryptor.set_public_key(public_key)
    _test_encryptor_pk_setup(encryptor)
    _test_encryptor_symmetric_setup(encryptor)


def test_encryptor_bfv_batch():
    batch = [1, 2, 3, 4, 5]
    poly_modulus_degree = 8192
    plain_modulus = 1032193

    ctx = helper_context_bfv(poly_modulus_degree, plain_modulus)

    keygen = sealapi.KeyGenerator(ctx)
    batchenc = sealapi.BatchEncoder(ctx)
    public_key = keygen.public_key()
    secret_key = keygen.secret_key()

    decryptor = sealapi.Decryptor(ctx, secret_key)

    def _test_encryptor_pk_setup(encryptor):
        ciphertext = sealapi.Ciphertext(ctx)
        plaintext = sealapi.Plaintext()
        batchenc.encode(batch, plaintext)
        encryptor.encrypt(plaintext, ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert batchenc.decode_int64(plaintext_out)[: len(batch)] == batch
        plaintext_out.set_zero()

    encryptor = sealapi.Encryptor(ctx, public_key)
    _test_encryptor_pk_setup(encryptor)

    encryptor = sealapi.Encryptor(ctx, public_key, secret_key)
    _test_encryptor_pk_setup(encryptor)


def test_decryptor():
    poly_modulus_degree = 4096
    plain_modulus = 1024
    ctx = helper_context_bfv(poly_modulus_degree, plain_modulus)

    keygen = sealapi.KeyGenerator(ctx)
    intenc = sealapi.IntegerEncoder(ctx)
    public_key = keygen.public_key()
    secret_key = keygen.secret_key()

    decryptor = sealapi.Decryptor(ctx, secret_key)
    encryptor = sealapi.Encryptor(ctx, public_key, secret_key)

    expected_value = 1234
    plaintext = intenc.encode(expected_value)

    ciphertext = sealapi.Ciphertext(ctx)
    encryptor.encrypt(plaintext, ciphertext)
    plaintext_out = sealapi.Plaintext()

    assert decryptor.invariant_noise_budget(ciphertext) > 0

    decryptor.decrypt(ciphertext, plaintext_out)
    assert intenc.decode_int64(plaintext_out) == expected_value
