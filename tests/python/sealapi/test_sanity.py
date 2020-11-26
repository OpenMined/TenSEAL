import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


@pytest.mark.parametrize(
    "compr_type",
    [sealapi.COMPR_MODE_TYPE.NONE, sealapi.COMPR_MODE_TYPE.ZLIB, sealapi.COMPR_MODE_TYPE.ZSTD],
)
def test_serialization_compression(compr_type):
    assert sealapi.Serialization.IsSupportedComprMode(compr_type) is True
    assert sealapi.Serialization.ComprSizeEstimate(8, compr_type) > 0


def test_serialization_sanity():
    assert int(sealapi.COMPR_MODE_TYPE.NONE) == 0
    assert int(sealapi.COMPR_MODE_TYPE.ZLIB) == 1
    assert int(sealapi.COMPR_MODE_TYPE.ZSTD) == 2

    header = sealapi.Serialization.SEALHeader()
    assert header.magic == 0xA15E
    assert header.header_size == 0x10
    assert header.version_major == 3
    assert header.version_minor == 0x6
    assert header.compr_mode == sealapi.COMPR_MODE_TYPE.NONE
    assert header.size == 0
    assert header.reserved == 0

    assert sealapi.Serialization.IsSupportedComprMode(15) is False

    header = sealapi.Serialization.SEALHeader()
    assert sealapi.Serialization.IsValidHeader(header) is True

    header = sealapi.Serialization.SEALHeader()
    header.compr_mode = sealapi.COMPR_MODE_TYPE.ZLIB

    def save_load(path):
        sealapi.Serialization.SaveHeader(header, path)
        save_test = sealapi.Serialization.SEALHeader()
        sealapi.Serialization.LoadHeader(path, save_test, True)
        assert save_test.compr_mode == sealapi.COMPR_MODE_TYPE.ZLIB
        sealapi.Serialization.LoadHeader(path, save_test, False)
        assert save_test.compr_mode == sealapi.COMPR_MODE_TYPE.ZLIB

    tmp_file(save_load)


@pytest.mark.parametrize(
    "factory",
    [
        sealapi.Blake2xbPRNGFactory.DefaultFactory(),
        sealapi.Blake2xbPRNGFactory(),
        sealapi.Blake2xbPRNGFactory([sealapi.random_uint64() for i in range(8)]),
        sealapi.Shake256PRNGFactory.DefaultFactory(),
        sealapi.Shake256PRNGFactory(),
        sealapi.Shake256PRNGFactory([sealapi.random_uint64() for i in range(8)]),
    ],
)
def test_randomgen(factory):
    assert sealapi.random_uint64() != sealapi.random_uint64()

    for generator in [
        factory.create(),
        factory.create([sealapi.random_uint64() for i in range(8)]),
    ]:
        assert generator.generate() != generator.generate()

        adapter = sealapi.RandomToStandardAdapter(generator)
        assert adapter() != adapter()

        for i in range(1024):
            generator.refresh()
            generator.generate()


def test_intarray():
    testcase = sealapi.Plaintext("3x^3 + 1x^1 + 3")
    int_arr = testcase.dyn_array()

    assert int_arr[0] == 3
    assert int_arr.at(3) == 3
    assert int_arr.empty() is False
    assert int_arr.max_size() == 2 ** 64 - 1
    assert int_arr.size() == 4
    assert int_arr.capacity() == 4

    def save_load(path):
        int_arr.save(path)
        save_test = sealapi.DynArray()
        save_test.load(path)
        assert save_test[0] == 3

    tmp_file(save_load)

    int_arr.resize(10, True)
    assert int_arr.capacity() == 10
    assert int_arr.size() == 10

    int_arr.reserve(30)
    assert int_arr.capacity() == 30
    assert int_arr.capacity() == 30

    int_arr.shrink_to_fit()
    assert int_arr.capacity() == 10
    assert int_arr.size() == 10

    int_arr.clear()
    assert int_arr.size() == 0
    assert int_arr.capacity() == 10
    assert int_arr.empty() is True

    int_arr.release()
    assert int_arr.capacity() == 0


def test_plaintext():
    testcase = sealapi.Plaintext()
    assert testcase.coeff_count() == 0

    testcase = sealapi.Plaintext(15)
    assert testcase.coeff_count() == 15

    testcase = sealapi.Plaintext(100, 15)
    assert testcase.coeff_count() == 15
    assert testcase.capacity() == 100

    testcase = sealapi.Plaintext("7FFx^3 + 1x^1 + 3")
    assert testcase.coeff_count() == 4
    assert testcase.significant_coeff_count() == 4
    assert testcase.capacity() == 4

    testcase2 = testcase
    assert testcase2.coeff_count() == 4
    assert testcase2.capacity() == 4

    testcase = sealapi.Plaintext(100, 15)
    testcase.reserve(200)
    assert testcase.capacity() == 200

    testcase = sealapi.Plaintext("7FFx^3 + 1x^1 + 3")
    assert testcase.capacity() == 4
    testcase.reserve(200)
    assert testcase.capacity() == 200
    testcase.shrink_to_fit()
    assert testcase.capacity() == 4
    assert testcase.dyn_array()[3] == 0x7FF
    assert testcase.data(3) == 0x7FF
    assert testcase.parms_id() == [0, 0, 0, 0]
    assert testcase.scale == 1.0
    assert testcase[3] == 0x7FF
    assert testcase.to_string() == "7FFx^3 + 1x^1 + 3"

    testcase.release()
    assert testcase.coeff_count() == 0

    testcase = sealapi.Plaintext("7FFx^3 + 1x^1 + 3")
    assert testcase.coeff_count() == 4
    assert testcase.nonzero_coeff_count() == 3
    testcase.resize(10)
    assert testcase.coeff_count() == 10

    testcase.set_zero()
    assert testcase.is_zero()
    assert testcase.nonzero_coeff_count() == 0

    testcase = sealapi.Plaintext("7FFx^3 + 2x^1 + 3")
    assert testcase.is_ntt_form() is False

    def save_load(path):
        testcase = sealapi.Plaintext("7FFx^3 + 2x^1 + 3")
        testcase.save(path)
        ctx = helper_context_bfv()
        save_test = sealapi.Plaintext()
        save_test.load(ctx, path)
        assert save_test.coeff_count() == 4

    tmp_file(save_load)


@pytest.mark.parametrize(
    "testcase", [[1, 2, 3, 4, 5, 6, 7, 8], [i for i in range(200)],],
)
@pytest.mark.parametrize(
    "scheme,ctx",
    [
        (sealapi.SCHEME_TYPE.BFV, helper_context_bfv()),
        (sealapi.SCHEME_TYPE.CKKS, helper_context_ckks()),
    ],
)
def test_ciphertext(testcase, scheme, ctx):
    poly_modulus_degree = helper_poly_modulus_degree(ctx)

    ctx_data = ctx.key_context_data()
    parms = ctx_data.parms()
    coeff_mod_count = len(parms.coeff_modulus())

    keygen = sealapi.KeyGenerator(ctx)

    ciphertext = sealapi.Ciphertext(ctx)
    plaintext = helper_encode(scheme, ctx, testcase)

    pk = sealapi.PublicKey()
    keygen.create_public_key(pk)

    encryptor = sealapi.Encryptor(ctx, pk)
    decryptor = sealapi.Decryptor(ctx, keygen.secret_key())

    encryptor.encrypt(plaintext, ciphertext)

    assert len(ciphertext.parms_id()) > 0
    assert ciphertext.scale > 0
    assert ciphertext.coeff_modulus_size() == coeff_mod_count - 1

    assert ciphertext.poly_modulus_degree() == poly_modulus_degree
    assert ciphertext.dyn_array().size() > 0
    assert ciphertext.size() == 2
    assert ciphertext.size_capacity() == 2
    assert ciphertext.is_transparent() is False
    assert ciphertext.is_ntt_form() is (scheme == sealapi.SCHEME_TYPE.CKKS)

    def save_load(path):
        ciphertext.save(path)
        save_test = sealapi.Ciphertext(ctx)
        save_test.load(ctx, path)
        decryptor.decrypt(save_test, plaintext)
        decoded = helper_decode(scheme, ctx, plaintext)
        is_close_enough(decoded[: len(testcase)], testcase)

    tmp_file(save_load)

    ciphertext.resize(ctx, 10)
    assert ciphertext.size() == 10
    assert ciphertext.size_capacity() == 10

    ciphertext.reserve(15)
    assert ciphertext.size() == 10
    assert ciphertext.size_capacity() == 15
