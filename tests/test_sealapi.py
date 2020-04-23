import tenseal as ts


def test_biguint():
    testcase = ts.BigUInt()
    assert testcase.is_zero()

    testcase = ts.BigUInt(16)
    assert testcase.bit_count() == 16

    testcase = ts.BigUInt("123A")
    assert testcase == 0x123A

    testcase = ts.BigUInt(16, "123B")
    assert testcase.bit_count() == 16
    assert testcase == 0x123B

    testcase = ts.BigUInt(16, 45)
    assert testcase.bit_count() == 16
    assert testcase == 45

    testcase = ts.BigUInt(128, 456)
    testcase2 = ts.BigUInt(testcase)
    assert testcase2.bit_count() == 128
    assert testcase2 == 456

    testcase = ts.BigUInt(8, 23)
    assert testcase.bit_count() == 8
    assert testcase.byte_count() == 1

    testcase = ts.BigUInt(128, 34)
    assert testcase.uint64_count() == 2
    assert testcase.significant_bit_count() == 6
    assert testcase.to_double() == 34
    assert testcase.to_string() == "22"  #hex string
    assert testcase.to_dec_string() == "34"
    assert not testcase.is_zero()
    testcase.set_zero()
    assert testcase.is_zero()

    testcase = ts.BigUInt(128, 555)
    testcase2 = ts.BigUInt(2, 10)
    testcase.duplicate_to(testcase2)
    assert testcase2.bit_count() == 128
    assert testcase2 == 555

    testcase = ts.BigUInt(128, 777)
    testcase2 = ts.BigUInt(2, 10)
    testcase2.duplicate_from(testcase)
    assert testcase2.bit_count() == 128
    assert testcase2 == 777

    left = ts.BigUInt(32, 27)
    right = ts.BigUInt(32, 13)
    assert left - right == 14
    assert left - 13 == 14
    assert left + right == 40
    assert left + 13 == 40
    assert left * right == 351
    assert left * 13 == 351
    assert left / right == 2
    assert left / 13 == 2

    left = ts.BigUInt(32, 555)
    right = ts.BigUInt(32, 777)
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

    left = ts.BigUInt(32, 27)
    right = ts.BigUInt(32, 13)
    left -= right
    assert left == 14

    left = ts.BigUInt(32, 27)
    left -= 13
    assert left == 14

    left = ts.BigUInt(32, 27)
    right = ts.BigUInt(32, 13)
    left += right
    assert left == 40

    left = ts.BigUInt(32, 27)
    left += 13
    assert left == 40

    left = ts.BigUInt(32, 27)
    right = ts.BigUInt(32, 13)
    left *= right
    assert left == 351

    left = ts.BigUInt(32, 27)
    left *= 13
    assert left == 351

    left = ts.BigUInt(32, 27)
    right = ts.BigUInt(32, 13)
    left /= right
    assert left == 2

    left = ts.BigUInt(32, 27)
    left /= 13
    assert left == 2


def test_smallmodulus():
    testcase = ts.SmallModulus(1023)
    assert testcase.bit_count() == 10
    assert testcase.uint64_count() == 1
    assert testcase.value() == 1023
    assert testcase.data() == 1023
    assert not testcase.is_zero()
    assert not testcase.is_prime()

    testcase = ts.SmallModulus(15451)
    assert testcase.is_prime()

    testcase = ts.SmallModulus(0)
    assert testcase.is_zero()

    #operators
    start = 15451
    left = ts.SmallModulus(start)
    right = ts.SmallModulus(start)
    assert left == right
    assert left == start

    right = ts.SmallModulus(start + 1)
    assert left != right
    assert right != start
    assert left < right
    assert left < start + 1
    assert left <= right
    assert left <= start
    assert left <= start + 1

    right = ts.SmallModulus(start - 1)
    assert left > right
    assert left > start - 1
    assert left >= right
    assert left >= start
    assert left >= start - 1


def test_serialization():
    assert int(ts.COMPR_MODE_TYPE.NONE) == 0
    header = ts.Serialization.SEALHeader()
    assert header.magic == 0xA15E
    assert header.zero_byte == 0
    assert header.compr_mode == ts.COMPR_MODE_TYPE.NONE
    assert header.size == 0
    assert header.reserved == 0

    assert ts.Serialization.IsSupportedComprMode(
        ts.COMPR_MODE_TYPE.NONE) == True
    assert ts.Serialization.IsSupportedComprMode(15) == False
    assert ts.Serialization.IsSupportedComprMode(0) == True

    assert ts.Serialization.ComprSizeEstimate(256,
                                              ts.COMPR_MODE_TYPE.NONE) == 256

    header = ts.Serialization.SEALHeader()
    assert ts.Serialization.IsValidHeader(header) == True

    header.magic = 0
    assert ts.Serialization.IsValidHeader(header) == False


def test_plaintext():
    testcase = ts.Plaintext()
    assert testcase.coeff_count() == 0

    testcase = ts.Plaintext(15)
    assert testcase.coeff_count() == 15

    testcase = ts.Plaintext(100, 15)
    assert testcase.coeff_count() == 15
    assert testcase.capacity() == 100

    testcase = ts.Plaintext("7FFx^3 + 1x^1 + 3")
    assert testcase.coeff_count() == 4
    assert testcase.significant_coeff_count() == 4
    assert testcase.capacity() == 4

    testcase2 = testcase
    assert testcase.coeff_count() == 4
    assert testcase.capacity() == 4

    testcase = ts.Plaintext(100, 15)
    testcase.reserve(200)
    assert testcase.capacity() == 200

    testcase = ts.Plaintext("7FFx^3 + 1x^1 + 3")
    assert testcase.capacity() == 4
    testcase.reserve(200)
    assert testcase.capacity() == 200
    testcase.shrink_to_fit()
    assert testcase.capacity() == 4

    testcase.release()
    assert testcase.coeff_count() == 0

    testcase = ts.Plaintext("7FFx^3 + 1x^1 + 3")
    assert testcase.coeff_count() == 4
    assert testcase.nonzero_coeff_count() == 3
    testcase.resize(10)
    assert testcase.coeff_count() == 10

    testcase.set_zero()
    assert testcase.is_zero()
    assert testcase.nonzero_coeff_count() == 0

    testcase = ts.Plaintext("7FFx^3 + 2x^1 + 3")
    assert testcase.to_string() == "7FFx^3 + 2x^1 + 3"

def test_intencoder():
    pass
