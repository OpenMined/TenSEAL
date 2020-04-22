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
