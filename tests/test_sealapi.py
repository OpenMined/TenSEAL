import pytest
import tenseal.sealapi as sealapi


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
    assert testcase.trymodinv(sealapi.BigUInt(128, modulus), sealapi.BigUInt(128)) == True
    assert testcase.trymodinv(sealapi.BigUInt(128, 99), sealapi.BigUInt(128)) == False

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


def test_smallmodulus():
    testcase = sealapi.SmallModulus(1023)
    assert testcase.bit_count() == 10
    assert testcase.uint64_count() == 1
    assert testcase.value() == 1023
    assert testcase.data() == 1023
    assert testcase.const_ratio()[2] == (2 ** 128) % 1023
    assert not testcase.is_zero()
    assert not testcase.is_prime()

    testcase = sealapi.SmallModulus(15451)
    assert testcase.is_prime()

    testcase = sealapi.SmallModulus(0)
    assert testcase.is_zero()

    # operators
    start = 15451
    left = sealapi.SmallModulus(start)
    right = sealapi.SmallModulus(start)
    assert left == right
    assert left == start

    right = sealapi.SmallModulus(start + 1)
    assert left != right
    assert right != start
    assert left < right
    assert left < start + 1
    assert left <= right
    assert left <= start
    assert left <= start + 1

    right = sealapi.SmallModulus(start - 1)
    assert left > right
    assert left > start - 1
    assert left >= right
    assert left >= start
    assert left >= start - 1


@pytest.mark.parametrize(
    "compr_type", [sealapi.COMPR_MODE_TYPE.NONE, sealapi.COMPR_MODE_TYPE.DEFLATE]
)
def test_serialization_compression(compr_type):
    assert sealapi.Serialization.IsSupportedComprMode(compr_type) == True
    assert sealapi.Serialization.ComprSizeEstimate(8, compr_type) > 0


def test_serialization_sanity():
    assert int(sealapi.COMPR_MODE_TYPE.NONE) == 0
    assert int(sealapi.COMPR_MODE_TYPE.DEFLATE) == 1

    header = sealapi.Serialization.SEALHeader()
    assert header.magic == 0xA15E
    assert header.zero_byte == 0
    assert header.compr_mode == sealapi.COMPR_MODE_TYPE.NONE
    assert header.size == 0
    assert header.reserved == 0

    assert sealapi.Serialization.IsSupportedComprMode(15) == False

    header = sealapi.Serialization.SEALHeader()
    assert sealapi.Serialization.IsValidHeader(header) == True

    header.magic = 0
    assert sealapi.Serialization.IsValidHeader(header) == False


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
    assert testcase.coeff_count() == 4
    assert testcase.capacity() == 4

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
    assert testcase.scale() == 1.0
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
    assert testcase.is_ntt_form() == False


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

        for i in range(1024):
            generator.refresh()
            generator.generate()


@pytest.mark.parametrize(
    "scheme_id,scheme",
    [(0, sealapi.SCHEME_TYPE.NONE), (1, sealapi.SCHEME_TYPE.BFV), (2, sealapi.SCHEME_TYPE.CKKS)],
)
def test_encryptionparams_scheme_sanity(scheme_id, scheme):
    assert int(scheme) == scheme_id

    testcase = sealapi.EncryptionParameters(scheme)
    assert testcase.scheme() == scheme

    testcase = sealapi.EncryptionParameters(scheme_id)
    assert testcase.scheme() == scheme


def test_encryptionparams_scheme_specific():
    testcase = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.NONE)
    with pytest.raises(BaseException):
        testcase.set_poly_modulus_degree(10)

    testcase.set_poly_modulus_degree(0)
    assert testcase.poly_modulus_degree() == 0
    testcase.set_coeff_modulus([])

    testcase = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    testcase.set_plain_modulus(sealapi.SmallModulus(1023))
    assert testcase.plain_modulus().value() == 1023

    testcase.set_random_generator(sealapi.BlakePRNGFactory())
    generator = testcase.random_generator().create()
    assert generator.generate() != generator.generate()


@pytest.mark.parametrize("scheme", [sealapi.SCHEME_TYPE.BFV, sealapi.SCHEME_TYPE.CKKS])
def test_encryptionparams_scheme_settings(scheme):
    testcase = sealapi.EncryptionParameters(scheme)
    testcase.set_poly_modulus_degree(32768)
    assert testcase.poly_modulus_degree() == 32768

    testcase = sealapi.EncryptionParameters(scheme)
    testcase.set_coeff_modulus([sealapi.SmallModulus(1023), sealapi.SmallModulus(234)])
    assert len(testcase.coeff_modulus()) == 2
    assert testcase.coeff_modulus()[0].value() == 1023
    assert testcase.coeff_modulus()[1].value() == 234

    left = sealapi.EncryptionParameters(scheme)
    left.set_poly_modulus_degree(32768)
    left.set_coeff_modulus([sealapi.SmallModulus(1023), sealapi.SmallModulus(234)])

    right = sealapi.EncryptionParameters(scheme)
    right.set_poly_modulus_degree(32768)
    assert left != right

    right.set_coeff_modulus([sealapi.SmallModulus(1023), sealapi.SmallModulus(234)])
    assert left == right


@pytest.mark.parametrize(
    "sec_level_int,sec_level",
    [
        (0, sealapi.SEC_LEVEL_TYPE.NONE),
        (128, sealapi.SEC_LEVEL_TYPE.TC128),
        (192, sealapi.SEC_LEVEL_TYPE.TC192),
        (256, sealapi.SEC_LEVEL_TYPE.TC256),
    ],
)
def test_modulus_sec_level_sanity(sec_level_int, sec_level):
    assert sec_level_int == int(sec_level)

    if sec_level != sealapi.SEC_LEVEL_TYPE.NONE:
        assert sealapi.CoeffModulus.MaxBitCount(1, sec_level) == 0


def test_modulus_sanity():
    custom_mod = sealapi.CoeffModulus.Create(1024, [32, 32])
    assert len(custom_mod) == 2
    for small_mod in custom_mod:
        assert small_mod.is_prime() == True

    small_mod = sealapi.PlainModulus.Batching(1024, 40)
    assert small_mod.is_prime() == True
    assert small_mod.bit_count() == 40

    sizes = [16, 32, 40]
    small_mods = sealapi.PlainModulus.Batching(1024, sizes)
    for idx, small_mod in enumerate(small_mods):
        assert small_mod.bit_count() == sizes[idx]


@pytest.mark.parametrize(
    "sec_level,expected_max_bit_count",
    [
        (sealapi.SEC_LEVEL_TYPE.NONE, 2147483647),
        (sealapi.SEC_LEVEL_TYPE.TC128, 881),
        (sealapi.SEC_LEVEL_TYPE.TC192, 611),
        (sealapi.SEC_LEVEL_TYPE.TC256, 476),
    ],
)
def test_modulus_max_bit_count(sec_level, expected_max_bit_count):
    assert sealapi.CoeffModulus.MaxBitCount(32768, sec_level) == expected_max_bit_count


@pytest.mark.parametrize(
    "sec_level,expected_bfv_default_len",
    [
        (sealapi.SEC_LEVEL_TYPE.TC128, 16),
        (sealapi.SEC_LEVEL_TYPE.TC192, 11),
        (sealapi.SEC_LEVEL_TYPE.TC256, 9),
    ],
)
def test_modulus_bfv_default(sec_level, expected_bfv_default_len):
    coeff_modulus = sealapi.CoeffModulus.BFVDefault(32768, sec_level)
    assert len(coeff_modulus) == expected_bfv_default_len
    for coeff in coeff_modulus:
        assert coeff.is_prime()


@pytest.mark.parametrize(
    "scheme", [sealapi.SCHEME_TYPE.NONE, sealapi.SCHEME_TYPE.BFV, sealapi.SCHEME_TYPE.CKKS],
)
@pytest.mark.parametrize(
    "sec_level",
    [
        sealapi.SEC_LEVEL_TYPE.NONE,
        sealapi.SEC_LEVEL_TYPE.TC128,
        sealapi.SEC_LEVEL_TYPE.TC192,
        sealapi.SEC_LEVEL_TYPE.TC256,
    ],
)
def test_context_failure(scheme, sec_level):
    parms = sealapi.EncryptionParameters(scheme)

    sealctx = sealapi.SEALContext.Create(parms, True, sec_level)
    assert sealctx.parameters_set() == False


def context_sample(poly_modulus_degree=8192):
    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    parms.set_poly_modulus_degree(poly_modulus_degree)
    parms.set_plain_modulus(1032193)
    coeff = sealapi.CoeffModulus.BFVDefault(poly_modulus_degree, sealapi.SEC_LEVEL_TYPE.TC128)
    parms.set_coeff_modulus(coeff)

    return sealapi.SEALContext.Create(parms, True, sealapi.SEC_LEVEL_TYPE.TC128)


def test_context_sanity():
    assert context_sample().parameters_set() == True


@pytest.mark.parametrize(
    "sec_level",
    [sealapi.SEC_LEVEL_TYPE.TC128, sealapi.SEC_LEVEL_TYPE.TC192, sealapi.SEC_LEVEL_TYPE.TC256,],
)
def test_context_scheme_bfv_sanity(sec_level):
    poly_modulus_degree = 8192
    plaintext_modulus = 1032193

    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    parms.set_poly_modulus_degree(poly_modulus_degree)
    parms.set_plain_modulus(plaintext_modulus)

    coeff = sealapi.CoeffModulus.Create(poly_modulus_degree, [32, 32])
    parms.set_coeff_modulus(coeff)
    sealctx = sealapi.SEALContext.Create(parms, True, sec_level)
    assert sealctx.parameters_set() == True

    coeff = sealapi.CoeffModulus.BFVDefault(poly_modulus_degree, sec_level)
    parms.set_coeff_modulus(coeff)
    sealctx = sealapi.SEALContext.Create(parms, True, sec_level)
    assert sealctx.parameters_set() == True

    def context_data_sanity(ctx_data, ctx_alias, index):
        assert ctx_data.parms().poly_modulus_degree() == poly_modulus_degree
        assert len(ctx_data.parms_id()) == len(ctx_alias.parms_id())
        assert ctx_data.chain_index() == ctx_alias.chain_index()
        assert ctx_data.chain_index() == index
        assert (
            ctx_data.total_coeff_modulus() != 0
            and ctx_data.total_coeff_modulus() == ctx_alias.total_coeff_modulus()
        )
        assert ctx_data.total_coeff_modulus_bit_count() == ctx_alias.total_coeff_modulus_bit_count()
        assert ctx_data.plain_upper_half_threshold() == ctx_alias.plain_upper_half_threshold()
        assert ctx_data.coeff_div_plain_modulus() == ctx_alias.coeff_div_plain_modulus()
        assert ctx_data.coeff_mod_plain_modulus() == ctx_alias.coeff_mod_plain_modulus()
        assert ctx_data.upper_half_increment() == ctx_alias.upper_half_increment()
        assert ctx_data.upper_half_threshold() == ctx_alias.upper_half_threshold()

        qualifiers = ctx_data.qualifiers()
        assert qualifiers.parameters_set == True
        assert qualifiers.using_fft == True
        assert qualifiers.using_ntt == True
        assert qualifiers.using_batching == True
        assert qualifiers.using_fast_plain_lift == True
        assert qualifiers.sec_level == sec_level

    for (parms_id, ctx_data, index) in [
        (sealctx.first_parms_id(), sealctx.first_context_data(), len(coeff) - 2),
        (sealctx.last_parms_id(), sealctx.last_context_data(), 0),
        (sealctx.key_parms_id(), sealctx.key_context_data(), len(coeff) - 1),
    ]:
        should_be_same_ctx = sealctx.get_context_data(parms_id)
        context_data_sanity(ctx_data, should_be_same_ctx, index)

    assert sealctx.last_context_data().next_context_data() == None
    assert (
        sealctx.first_context_data().prev_context_data().chain_index()
        == sealctx.key_context_data().chain_index()
    )

    assert sealctx.using_keyswitching() == True


def test_keygenerator_publickey():
    poly_modulus_degree = 8192
    ctx = context_sample(poly_modulus_degree)
    keygen = sealapi.KeyGenerator(ctx)
    public_key = keygen.public_key()
    assert public_key.data().parms_id() == public_key.parms_id()
    assert public_key.data().poly_modulus_degree() == poly_modulus_degree


def test_keygenerator_secretkey():
    poly_modulus_degree = 8192
    ctx = context_sample(poly_modulus_degree)
    keygen = sealapi.KeyGenerator(ctx)
    secret_key = keygen.secret_key()
    assert secret_key.data().parms_id() == secret_key.parms_id()
    assert secret_key.data().is_ntt_form() == True

    ctx_data = ctx.key_context_data()
    parms = ctx_data.parms()
    coeff_count = parms.poly_modulus_degree()
    coeff_mod_count = len(parms.coeff_modulus())

    assert secret_key.data().coeff_count() == coeff_mod_count * coeff_count


def test_keygenerator_relinkeys():
    index = 4
    assert sealapi.RelinKeys.get_index(index) == index - 2

    poly_modulus_degree = 8192
    ctx = context_sample(poly_modulus_degree)
    keygen = sealapi.KeyGenerator(ctx)
    relin_keys = keygen.relin_keys()

    assert relin_keys.has_key(2) == True

    pubkey = relin_keys.key(2)[0]
    assert pubkey.data().poly_modulus_degree() == poly_modulus_degree

    assert relin_keys.size() > 0
    assert len(relin_keys.data()) == relin_keys.size()
    assert relin_keys.data(0)[0].data().poly_modulus_degree() == poly_modulus_degree
    assert len(relin_keys.parms_id()) == 4


def test_keygenerator_galoiskeys():
    idx = 3
    assert sealapi.GaloisKeys.get_index(idx) == (idx - 1) >> 1

    poly_modulus_degree = 8192
    ctx = context_sample(poly_modulus_degree)
    keygen = sealapi.KeyGenerator(ctx)
    galois_keys = keygen.galois_keys()

    assert galois_keys.has_key(idx) == True

    pubkey = galois_keys.key(idx)[0]
    assert pubkey.data().poly_modulus_degree() == poly_modulus_degree

    assert galois_keys.size() > 0
    assert len(galois_keys.data()) == poly_modulus_degree
    assert len(galois_keys.data(sealapi.GaloisKeys.get_index(idx))) == 4

    assert (
        galois_keys.data(sealapi.GaloisKeys.get_index(idx))[0].data().poly_modulus_degree()
        == poly_modulus_degree
    )
    assert len(galois_keys.parms_id()) == 4


def test_keygenerator_galoiskeys_with_steps():
    idx = sealapi.GaloisKeys.get_index(7)
    poly_modulus_degree = 8192

    ctx = context_sample(poly_modulus_degree)
    keygen = sealapi.KeyGenerator(ctx)
    galois_keys = keygen.galois_keys([idx])

    assert galois_keys.has_key(idx) == True

    pubkey = galois_keys.key(idx)[0]
    assert pubkey.data().poly_modulus_degree() == poly_modulus_degree

    assert galois_keys.size() > 0
    assert len(galois_keys.data()) == poly_modulus_degree
    assert len(galois_keys.data(sealapi.GaloisKeys.get_index(idx))) == 4

    assert (
        galois_keys.data(sealapi.GaloisKeys.get_index(idx))[0].data().poly_modulus_degree()
        == poly_modulus_degree
    )
    assert len(galois_keys.parms_id()) == 4


def test_intencoder():
    ctx = context_sample()
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


def test_intarray():
    testcase = sealapi.Plaintext("3x^3 + 1x^1 + 3")
    int_arr = testcase.int_array()

    assert int_arr[0] == 3
    assert int_arr.at(3) == 3
    assert int_arr.empty() == False
    assert int_arr.max_size() == 2 ** 64 - 1
    assert int_arr.size() == 4
    assert int_arr.capacity() == 4

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
    assert int_arr.empty() == True

    int_arr.release()
    assert int_arr.capacity() == 0


def test_ciphertext():
    ctx = context_sample()
    keygen = sealapi.KeyGenerator(ctx)
    public_key = keygen.public_key()

    intenc = sealapi.IntegerEncoder(ctx)
    ciphertext = sealapi.Ciphertext(ctx)
    plaintext = sealapi.Plaintext(intenc.encode(42))

    encryptor = sealapi.Encryptor(ctx, public_key)

    encryptor.encrypt(plaintext, ciphertext)


def test_ckks():
    pass


def test_decryptor():
    pass


def test_encryptor():
    pass


def test_evaluator():
    pass


def test_batchencoder():
    pass


def test_valcheck():
    pass
