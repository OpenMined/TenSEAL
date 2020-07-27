import sys, os
import pytest
import tenseal.sealapi as sealapi

from tempfile import NamedTemporaryFile

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


def test_biguint_sanity():
    testcase = sealapi.BigUInt()
    assert testcase.is_zero()

    testcase = sealapi.BigUInt(16)
    assert testcase.bit_count() == 16

    testcase = sealapi.BigUInt("123A")
    assert testcase == 0x123A

    testcase = sealapi.BigUInt(16, "123B")
    assert testcase.bit_count() == 16
    assert testcase == 0x123B

    testcase = sealapi.BigUInt(16, 45)
    assert testcase.bit_count() == 16
    assert testcase == 45

    testcase = sealapi.BigUInt(128, 456)
    testcase2 = sealapi.BigUInt(testcase)
    assert testcase2.bit_count() == 128
    assert testcase2 == 456

    testcase = sealapi.BigUInt(8, 23)
    assert testcase.bit_count() == 8
    assert testcase.byte_count() == 1

    testcase = sealapi.BigUInt(128, 34)
    assert testcase.uint64_count() == 2
    assert testcase.significant_bit_count() == 6
    assert testcase.to_double() == 34
    assert testcase.to_string() == "22"  # hex string
    assert testcase.to_dec_string() == "34"
    assert testcase.data() == 34
    assert not testcase.is_zero()
    testcase.set_zero()
    assert testcase.is_zero()

    testcase = sealapi.BigUInt(128)
    assert testcase.bit_count() == 128
    testcase.resize(16)
    assert testcase.bit_count() == 16

    tmp = NamedTemporaryFile()

    testcase = sealapi.BigUInt(16, "123B")
    testcase.save(tmp.name)

    save_test = sealapi.BigUInt()
    save_test.load(tmp.name)

    assert save_test.bit_count() == 16
    assert save_test == 0x123B


def test_biguint_ops():
    numerator = 555555555555555555
    denominator = 77777777777
    num = sealapi.BigUInt(128, numerator)
    den = sealapi.BigUInt(128, denominator)
    rem = sealapi.BigUInt(128)

    assert sealapi.BigUInt.of(7).bit_count() == 3
    assert num.divrem(den, rem) == int(numerator / denominator)
    assert rem == numerator % denominator

    def expected_modinv(a, m):
        a = a % m
        for x in range(1, m):
            if (a * x) % m == 1:
                return x
        return 1

    value = 66
    modulus = 101
    testcase = sealapi.BigUInt(128, value)
    assert testcase.modinv(sealapi.BigUInt(128, modulus)) == expected_modinv(value, modulus)
    assert testcase.trymodinv(sealapi.BigUInt(128, modulus), sealapi.BigUInt(128)) is True
    assert testcase.trymodinv(sealapi.BigUInt(128, 99), sealapi.BigUInt(128)) is False

    testcase = sealapi.BigUInt(128, 34)

    testcase = sealapi.BigUInt(128, 555)
    testcase2 = sealapi.BigUInt(2, 10)
    testcase.duplicate_to(testcase2)
    assert testcase2.bit_count() == 128
    assert testcase2 == 555

    testcase = sealapi.BigUInt(128, 777)
    testcase2 = sealapi.BigUInt(2, 10)
    testcase2.duplicate_from(testcase)
    assert testcase2.bit_count() == 128
    assert testcase2 == 777


def test_biguint_operators():
    left = sealapi.BigUInt(32, 27)
    right = sealapi.BigUInt(32, 13)
    assert left - right == 14
    assert left - 13 == 14
    assert left + right == 40
    assert left + 13 == 40
    assert left * right == 351
    assert left * 13 == 351
    assert left / right == 2
    assert left / 13 == 2

    left = sealapi.BigUInt(32, 555)
    right = sealapi.BigUInt(32, 777)
    assert left & right == 555 & 777
    assert left & 777 == 555 & 777
    assert left | right == 555 | 777
    assert left | 777 == 555 | 777
    assert right > left
    assert right > 555
    assert right >= left
    assert right >= 555
    assert left < right
    assert left < 777
    assert left <= right
    assert left <= 777
    assert left != right
    assert left >> 2 == 555 >> 2

    left = sealapi.BigUInt(32, 27)
    right = sealapi.BigUInt(32, 13)
    left -= right
    assert left == 14

    left = sealapi.BigUInt(32, 27)
    left -= 13
    assert left == 14

    left = sealapi.BigUInt(32, 27)
    right = sealapi.BigUInt(32, 13)
    left += right
    assert left == 40

    left = sealapi.BigUInt(32, 27)
    left += 13
    assert left == 40

    left = sealapi.BigUInt(32, 27)
    right = sealapi.BigUInt(32, 13)
    left *= right
    assert left == 351

    left = sealapi.BigUInt(32, 27)
    left *= 13
    assert left == 351

    left = sealapi.BigUInt(32, 27)
    right = sealapi.BigUInt(32, 13)
    left /= right
    assert left == 2

    left = sealapi.BigUInt(32, 27)
    left /= 13
    assert left == 2


@pytest.mark.parametrize(
    "compr_type", [sealapi.COMPR_MODE_TYPE.NONE, sealapi.COMPR_MODE_TYPE.DEFLATE]
)
def test_serialization_compression(compr_type):
    assert sealapi.Serialization.IsSupportedComprMode(compr_type) is True
    assert sealapi.Serialization.ComprSizeEstimate(8, compr_type) > 0


def test_serialization_sanity():
    assert int(sealapi.COMPR_MODE_TYPE.NONE) == 0
    assert int(sealapi.COMPR_MODE_TYPE.DEFLATE) == 1

    header = sealapi.Serialization.SEALHeader()
    assert header.magic == 0xA15E
    assert header.header_size == 0x10
    assert header.version_major == 3
    assert header.version_minor == 0x5
    assert header.compr_mode == sealapi.COMPR_MODE_TYPE.NONE
    assert header.size == 0
    assert header.reserved == 0

    assert sealapi.Serialization.IsSupportedComprMode(15) is False

    header = sealapi.Serialization.SEALHeader()
    assert sealapi.Serialization.IsValidHeader(header) is True

    header = sealapi.Serialization.SEALHeader()
    header.compr_mode = sealapi.COMPR_MODE_TYPE.DEFLATE

    tmp = NamedTemporaryFile()
    sealapi.Serialization.SaveHeader(header, tmp.name)
    save_test = sealapi.Serialization.SEALHeader()
    sealapi.Serialization.LoadHeader(tmp.name, save_test, True)
    assert save_test.compr_mode == sealapi.COMPR_MODE_TYPE.DEFLATE
    sealapi.Serialization.LoadHeader(tmp.name, save_test, False)
    assert save_test.compr_mode == sealapi.COMPR_MODE_TYPE.DEFLATE


@pytest.mark.parametrize(
    "factory",
    [
        sealapi.BlakePRNGFactory.DefaultFactory(),
        sealapi.BlakePRNGFactory(),
        sealapi.BlakePRNGFactory([sealapi.random_uint64() for i in range(8)]),
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
    int_arr = testcase.int_array()

    assert int_arr[0] == 3
    assert int_arr.at(3) == 3
    assert int_arr.empty() is False
    assert int_arr.max_size() == 2 ** 64 - 1
    assert int_arr.size() == 4
    assert int_arr.capacity() == 4

    tmp = NamedTemporaryFile()
    int_arr.save(tmp.name)
    save_test = sealapi.IntArray()
    save_test.load(tmp.name)
    assert save_test[0] == 3

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
    assert testcase.int_array()[3] == 0x7FF
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

    tmp = NamedTemporaryFile()
    testcase = sealapi.Plaintext("7FFx^3 + 2x^1 + 3")
    testcase.save(tmp.name)

    ctx = helper_context_bfv()  # Plaintext load needs a context(??)
    save_test = sealapi.Plaintext()
    save_test.load(ctx, tmp.name)
    assert save_test.coeff_count() == 4


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

    encryptor = sealapi.Encryptor(ctx, keygen.public_key())
    decryptor = sealapi.Decryptor(ctx, keygen.secret_key())

    encryptor.encrypt(plaintext, ciphertext)

    assert len(ciphertext.parms_id()) > 0
    assert ciphertext.scale > 0
    assert ciphertext.coeff_modulus_size() == coeff_mod_count - 1

    assert ciphertext.poly_modulus_degree() == poly_modulus_degree
    assert ciphertext.int_array().size() > 0
    assert ciphertext.size() == 2
    assert ciphertext.size_capacity() == 2
    assert ciphertext.is_transparent() is False
    assert ciphertext.is_ntt_form() is (scheme == sealapi.SCHEME_TYPE.CKKS)

    tmp = NamedTemporaryFile()
    ciphertext.save(tmp.name)
    save_test = sealapi.Ciphertext(ctx)
    save_test.load(ctx, tmp.name)
    decryptor.decrypt(save_test, plaintext)
    decoded = helper_decode(scheme, ctx, plaintext)
    is_close_enough(decoded[: len(testcase)], testcase)

    ciphertext.resize(ctx, 10)
    assert ciphertext.size() == 10
    assert ciphertext.size_capacity() == 10

    ciphertext.reserve(15)
    assert ciphertext.size() == 10
    assert ciphertext.size_capacity() == 15
