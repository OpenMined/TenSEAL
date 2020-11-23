import os
import time
import tenseal.sealapi as sealapi
from pathlib import Path


def helper_params_bfv(poly_modulus_degree=4096, plain_modulus=1032193):
    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    parms.set_poly_modulus_degree(poly_modulus_degree)
    parms.set_plain_modulus(plain_modulus)
    coeff = sealapi.CoeffModulus.BFVDefault(poly_modulus_degree, sealapi.SEC_LEVEL_TYPE.TC128)
    parms.set_coeff_modulus(coeff)

    return parms


def helper_context_bfv(poly_modulus_degree=4096, plain_modulus=1032193):
    return sealapi.SEALContext(
        helper_params_bfv(poly_modulus_degree, plain_modulus), True, sealapi.SEC_LEVEL_TYPE.TC128
    )


def helper_params_ckks(poly_modulus_degree=8192):
    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.CKKS)
    parms.set_poly_modulus_degree(poly_modulus_degree)
    coeff = sealapi.CoeffModulus.Create(poly_modulus_degree, [60, 40, 40, 60])
    parms.set_coeff_modulus(coeff)

    return parms


def helper_context_ckks(poly_modulus_degree=8192):
    return sealapi.SEALContext(
        helper_params_ckks(poly_modulus_degree), True, sealapi.SEC_LEVEL_TYPE.TC128
    )


def helper_context_invalid():
    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    return sealapi.SEALContext(parms, True, sealapi.SEC_LEVEL_TYPE.TC128)


def helper_poly_modulus_degree(ctx):
    ctx_data = ctx.key_context_data()
    parms = ctx_data.parms()
    return parms.poly_modulus_degree()


def helper_encode(scheme, ctx, test):
    plaintext = sealapi.Plaintext()
    if scheme == sealapi.SCHEME_TYPE.CKKS:
        encoder = sealapi.CKKSEncoder(ctx)
        encoder.encode(test, 2 ** 40, plaintext)
    else:
        encoder = sealapi.BatchEncoder(ctx)
        encoder.encode(test, plaintext)
    return plaintext


def helper_decode(scheme, ctx, test):
    if scheme == sealapi.SCHEME_TYPE.CKKS:
        encoder = sealapi.CKKSEncoder(ctx)
        return encoder.decode_double(test)

    encoder = sealapi.BatchEncoder(ctx)
    return encoder.decode_int64(test)


def helper_generate_evaluator(ctx):
    evaluator = sealapi.Evaluator(ctx)

    keygen = sealapi.KeyGenerator(ctx)
    public_key = sealapi.PublicKey()
    keygen.create_public_key(public_key)
    secret_key = keygen.secret_key()
    relin_keys = sealapi.RelinKeys()
    keygen.create_relin_keys(relin_keys)

    decryptor = sealapi.Decryptor(ctx, secret_key)
    encryptor = sealapi.Encryptor(ctx, public_key, secret_key)

    return evaluator, encryptor, decryptor, relin_keys


def is_close_enough(out, expected):
    for idx in range(len(expected)):
        assert abs(expected[idx] - out[idx]) < 0.1


def tmp_file(cbk):
    folder = Path("tmp")
    try:
        os.mkdir(folder)
    except FileExistsError:
        pass

    path = folder / str(time.time())

    e = None
    try:
        cbk(str(path))
    except BaseException as fail:
        e = fail

    try:
        os.remove(path)
    except BaseException:
        pass

    if e:
        raise e
