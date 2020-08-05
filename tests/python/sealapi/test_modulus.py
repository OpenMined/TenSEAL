import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


def test_modulus():
    testcase = sealapi.Modulus(1023)
    assert testcase.bit_count() == 10
    assert testcase.uint64_count() == 1
    assert testcase.value() == 1023
    assert testcase.data() == 1023
    assert testcase.const_ratio()[2] == (2 ** 128) % 1023
    assert not testcase.is_zero()
    assert not testcase.is_prime()

    def save_load(path):
        testcase.save(path)
        save_test = sealapi.Modulus(0)
        save_test.load(path)
        assert save_test.value() == 1023

    tmp_file(save_load)

    testcase = sealapi.Modulus(15451)
    assert testcase.is_prime()

    testcase = sealapi.Modulus(0)
    assert testcase.is_zero()

    # operators
    start = 15451
    left = sealapi.Modulus(start)
    right = sealapi.Modulus(start)
    assert left == right
    assert left == start

    right = sealapi.Modulus(start + 1)
    assert left != right
    assert right != start
    assert left < right
    assert left < start + 1
    assert left <= right
    assert left <= start
    assert left <= start + 1

    right = sealapi.Modulus(start - 1)
    assert left > right
    assert left > start - 1
    assert left >= right
    assert left >= start
    assert left >= start - 1


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
        assert small_mod.is_prime() is True

    small_mod = sealapi.PlainModulus.Batching(1024, 40)
    assert small_mod.is_prime() is True
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
