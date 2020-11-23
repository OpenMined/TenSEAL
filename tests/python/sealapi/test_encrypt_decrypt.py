import sys, os
import pytest
import tenseal.sealapi as sealapi

from pathlib import Path

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


def test_encryptor_bfv():
    batch = [1, 2, 3, 4, 5]
    poly_modulus_degree = 8192
    plain_modulus = 1032193

    ctx = helper_context_bfv(poly_modulus_degree, plain_modulus)

    keygen = sealapi.KeyGenerator(ctx)
    batchenc = sealapi.BatchEncoder(ctx)

    public_key = sealapi.PublicKey()
    keygen.create_public_key(public_key)

    secret_key = keygen.secret_key()

    decryptor = sealapi.Decryptor(ctx, secret_key)

    plaintext = sealapi.Plaintext()
    batchenc.encode(batch, plaintext)

    def _test_encryptor_symmetric_setup(encryptor):
        # encrypt symmetric
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_symmetric(plaintext, ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert batchenc.decode_int64(plaintext_out)[: len(batch)] == batch
        plaintext_out.set_zero()

        def save_load(path):
            serial = encryptor.encrypt_symmetric(plaintext)
            serial.save(path)
            assert Path(path).stat().st_size > 0

        tmp_file(save_load)
        plaintext_out.set_zero()

        # zero symmetric
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero_symmetric(ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert batchenc.decode_int64(plaintext_out)[: len(batch)] == [0] * len(batch)
        plaintext_out.set_zero()

        # zero symmetric parms_id
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero_symmetric(ctx.last_parms_id(), ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert batchenc.decode_int64(plaintext_out)[: len(batch)] == [0] * len(batch)
        plaintext_out.set_zero()

    def _test_encryptor_pk_setup(encryptor):
        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt(plaintext, ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert batchenc.decode_int64(plaintext_out)[: len(batch)] == batch
        plaintext_out.set_zero()

        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero(ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert batchenc.decode_int64(plaintext_out)[: len(batch)] == [0] * len(batch)
        plaintext_out.set_zero()

        ciphertext = sealapi.Ciphertext(ctx)
        encryptor.encrypt_zero(ctx.last_parms_id(), ciphertext)
        plaintext_out = sealapi.Plaintext()
        decryptor.decrypt(ciphertext, plaintext_out)
        assert batchenc.decode_int64(plaintext_out)[: len(batch)] == [0] * len(batch)
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
