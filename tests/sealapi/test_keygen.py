import sys, os
import pytest
import tenseal.sealapi as sealapi

from tempfile import NamedTemporaryFile
from pathlib import Path

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


@pytest.mark.parametrize(
    "ctx", [helper_context_bfv(8192), helper_context_ckks(8192)],
)
def test_keygenerator_publickey(ctx):
    keygen = sealapi.KeyGenerator(ctx)
    public_key = keygen.public_key()
    assert public_key.data().parms_id() == public_key.parms_id()
    assert public_key.data().poly_modulus_degree() == helper_poly_modulus_degree(ctx)

    tmp = NamedTemporaryFile()
    public_key.save(tmp.name)
    save_test = sealapi.PublicKey()
    save_test.load(ctx, tmp.name)
    assert save_test.parms_id() == public_key.parms_id()


@pytest.mark.parametrize(
    "ctx", [helper_context_bfv(8192), helper_context_ckks(8192)],
)
def test_keygenerator_secretkey(ctx):
    keygen = sealapi.KeyGenerator(ctx)
    secret_key = keygen.secret_key()
    assert secret_key.data().parms_id() == secret_key.parms_id()
    assert secret_key.data().is_ntt_form() is True

    ctx_data = ctx.key_context_data()
    parms = ctx_data.parms()
    poly_modulus_degree = parms.poly_modulus_degree()
    coeff_mod_count = len(parms.coeff_modulus())

    assert secret_key.data().coeff_count() == coeff_mod_count * poly_modulus_degree

    tmp = NamedTemporaryFile()
    secret_key.save(tmp.name)
    save_test = sealapi.SecretKey()
    save_test.load(ctx, tmp.name)
    assert save_test.data().parms_id() == secret_key.parms_id()


@pytest.mark.parametrize(
    "ctx", [helper_context_bfv(8192), helper_context_ckks(8192)],
)
def test_keygenerator_relinkeys(ctx):
    poly_modulus_degree = helper_poly_modulus_degree(ctx)

    index = 4
    assert sealapi.RelinKeys.get_index(index) == index - 2

    keygen = sealapi.KeyGenerator(ctx)
    relin_keys = keygen.relin_keys_local()

    assert relin_keys.has_key(2) is True

    pubkey = relin_keys.key(2)[0]
    assert pubkey.data().poly_modulus_degree() == poly_modulus_degree

    assert relin_keys.size() > 0
    assert len(relin_keys.data()) == relin_keys.size()
    assert relin_keys.data(0)[0].data().poly_modulus_degree() == helper_poly_modulus_degree(ctx)
    assert len(relin_keys.parms_id()) == 4

    tmp = NamedTemporaryFile()
    serial = keygen.relin_keys()
    serial.save(tmp.name)
    assert Path(tmp.name).stat().st_size > 0

    tmp = NamedTemporaryFile()
    keygen.relin_keys_local().save(tmp.name)
    save_test = sealapi.RelinKeys()
    assert save_test.has_key(2) is False
    save_test.load(ctx, tmp.name)
    assert save_test.has_key(2) is True


@pytest.mark.parametrize(
    "ctx", [helper_context_bfv(8192), helper_context_ckks(8192)],
)
def test_keygenerator_galoiskeys(ctx):
    poly_modulus_degree = helper_poly_modulus_degree(ctx)

    idx = 3
    assert sealapi.GaloisKeys.get_index(idx) == (idx - 1) >> 1

    keygen = sealapi.KeyGenerator(ctx)
    galois_keys = keygen.galois_keys_local()

    assert galois_keys.has_key(idx) is True

    pubkey = galois_keys.key(idx)[0]
    assert pubkey.data().poly_modulus_degree() == poly_modulus_degree

    assert galois_keys.size() > 0
    assert len(galois_keys.data()) == poly_modulus_degree
    assert len(galois_keys.data(sealapi.GaloisKeys.get_index(idx))) > 0

    assert (
        galois_keys.data(sealapi.GaloisKeys.get_index(idx))[0].data().poly_modulus_degree()
        == poly_modulus_degree
    )
    assert len(galois_keys.parms_id()) == 4

    tmp = NamedTemporaryFile()
    serial = keygen.galois_keys()
    serial.save(tmp.name)
    assert Path(tmp.name).stat().st_size > 0

    tmp = NamedTemporaryFile()
    keygen.galois_keys_local().save(tmp.name)
    save_test = sealapi.GaloisKeys()
    assert save_test.size() == 0
    save_test.load(ctx, tmp.name)
    assert save_test.size() > 0


@pytest.mark.parametrize(
    "ctx", [helper_context_bfv(8192), helper_context_ckks(8192)],
)
def test_keygenerator_galoiskeys_with_steps(ctx):
    ctx_data = ctx.key_context_data()
    parms = ctx_data.parms()
    poly_modulus_degree = parms.poly_modulus_degree()

    idx = sealapi.GaloisKeys.get_index(7)

    keygen = sealapi.KeyGenerator(ctx)
    galois_keys = keygen.galois_keys_local([idx])

    assert galois_keys.has_key(idx) is True

    pubkey = galois_keys.key(idx)[0]
    assert pubkey.data().poly_modulus_degree() == poly_modulus_degree

    assert galois_keys.size() > 0
    assert len(galois_keys.data()) == poly_modulus_degree
    assert len(galois_keys.data(sealapi.GaloisKeys.get_index(idx))) > 0

    assert (
        galois_keys.data(sealapi.GaloisKeys.get_index(idx))[0].data().poly_modulus_degree()
        == poly_modulus_degree
    )
    assert len(galois_keys.parms_id()) == 4

    tmp = NamedTemporaryFile()
    serial = keygen.galois_keys([idx])
    serial.save(tmp.name)
    assert Path(tmp.name).stat().st_size > 0
