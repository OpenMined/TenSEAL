import tenseal.sealapi as sealapi


def test_biguint():
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
    assert not testcase.is_zero()
    testcase.set_zero()
    assert testcase.is_zero()

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


def test_serialization():
    assert int(sealapi.COMPR_MODE_TYPE.NONE) == 0
    header = sealapi.Serialization.SEALHeader()
    assert header.magic == 0xA15E
    assert header.zero_byte == 0
    assert header.compr_mode == sealapi.COMPR_MODE_TYPE.NONE
    assert header.size == 0
    assert header.reserved == 0

    assert sealapi.Serialization.IsSupportedComprMode(sealapi.COMPR_MODE_TYPE.NONE) == True
    assert sealapi.Serialization.IsSupportedComprMode(15) == False
    assert sealapi.Serialization.IsSupportedComprMode(0) == True

    assert sealapi.Serialization.ComprSizeEstimate(256, sealapi.COMPR_MODE_TYPE.NONE) == 256

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
    assert testcase.to_string() == "7FFx^3 + 2x^1 + 3"


def test_randomgen():
    assert sealapi.random_uint64() != sealapi.random_uint64()

    seed = [sealapi.random_uint64() for i in range(8)]

    for factory in [
        sealapi.BlakePRNGFactory.DefaultFactory(),
        sealapi.BlakePRNGFactory(),
        sealapi.BlakePRNGFactory(seed),
    ]:
        for generator in [
            factory.create(),
            factory.create([sealapi.random_uint64() for i in range(8)]),
        ]:

            assert generator.generate() != generator.generate()

            for i in range(1024):
                generator.refresh()
                generator.generate()


def test_encryptionparams():
    schemes = [sealapi.SCHEME_TYPE.NONE, sealapi.SCHEME_TYPE.BFV, sealapi.SCHEME_TYPE.CKKS]

    for scheme_id, scheme in enumerate(schemes):
        assert int(scheme) == scheme_id

        testcase = sealapi.EncryptionParameters(scheme)
        assert testcase.scheme() == scheme

        testcase = sealapi.EncryptionParameters(scheme_id)
        assert testcase.scheme() == scheme

    testcase = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.NONE)
    poly_modulus_degree_failed = False
    try:
        testcase.set_poly_modulus_degree(10)
    except:
        poly_modulus_degree_failed = True
    assert poly_modulus_degree_failed
    testcase.set_poly_modulus_degree(0)
    assert testcase.poly_modulus_degree() == 0
    testcase.set_coeff_modulus([])

    for scheme in [sealapi.SCHEME_TYPE.BFV, sealapi.SCHEME_TYPE.CKKS]:
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

    testcase = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    testcase.set_plain_modulus(sealapi.SmallModulus(1023))
    assert testcase.plain_modulus().value() == 1023

    testcase.set_random_generator(sealapi.BlakePRNGFactory())
    generator = testcase.random_generator().create()
    assert generator.generate() != generator.generate()


def test_modulus():
    sec_levels = {
        0: sealapi.SEC_LEVEL_TYPE.NONE,
        128: sealapi.SEC_LEVEL_TYPE.TC128,
        192: sealapi.SEC_LEVEL_TYPE.TC192,
        256: sealapi.SEC_LEVEL_TYPE.TC256,
    }

    for val in sec_levels:
        assert val == int(sec_levels[val])

    expected_max_bit_count = {
        sealapi.SEC_LEVEL_TYPE.NONE: 2147483647,
        sealapi.SEC_LEVEL_TYPE.TC128: 881,
        sealapi.SEC_LEVEL_TYPE.TC192: 611,
        sealapi.SEC_LEVEL_TYPE.TC256: 476,
    }

    for level in expected_max_bit_count:
        assert sealapi.CoeffModulus.MaxBitCount(32768, level) == expected_max_bit_count[level]
    assert sealapi.CoeffModulus.MaxBitCount(1, sealapi.SEC_LEVEL_TYPE.TC256) == 0

    expected_bfv_def_len = {
        sealapi.SEC_LEVEL_TYPE.TC128: 16,
        sealapi.SEC_LEVEL_TYPE.TC192: 11,
        sealapi.SEC_LEVEL_TYPE.TC256: 9,
    }
    for level in expected_bfv_def_len:
        assert len(sealapi.CoeffModulus.BFVDefault(32768, level)) == expected_bfv_def_len[level]

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


def test_context():
    schemes = [sealapi.SCHEME_TYPE.NONE, sealapi.SCHEME_TYPE.BFV, sealapi.SCHEME_TYPE.CKKS]
    sec_levels = [
        sealapi.SEC_LEVEL_TYPE.NONE,
        sealapi.SEC_LEVEL_TYPE.TC128,
        sealapi.SEC_LEVEL_TYPE.TC192,
        sealapi.SEC_LEVEL_TYPE.TC256,
    ]

    for scheme in schemes:
        for sec_level in sec_levels:
            parms = sealapi.EncryptionParameters(scheme)
            sealctx = sealapi.SEALContext.Create(parms, True, sec_level)
            assert sealctx.parameters_set() == False

    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    parms.set_poly_modulus_degree(8192)
    parms.set_plain_modulus(1032193)
    parms.set_coeff_modulus([sealapi.SmallModulus(666013)])

    # for sec_level in sec_levels:
    #    sealctx = sealapi.SEALContext.Create(parms, True, sec_level)
    #    assert sealctx.parameters_set() == True


def test_intencoder():
    pass


def test_ciphertext():
    pass


def test_ckks():
    pass


def test_decryptor():
    pass


def test_encryptor():
    pass


def test_evaluator():
    pass


def test_intarray():
    pass


def test_keygenerator():
    pass


def test_batchencoder():
    pass


def test_publickey():
    pass


def test_relinkeys():
    pass


def test_secretkey():
    pass


def test_valcheck():
    pass


def test_memorymanager():
    pass
