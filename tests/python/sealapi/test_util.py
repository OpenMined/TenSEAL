import os, sys
import pytest
import tenseal.sealapi as sealapi
import tenseal.sealapi.util as util

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


def test_util_rns():
    with pytest.raises(BaseException):
        util.RNSBase([sealapi.Modulus(0)])
    with pytest.raises(BaseException):
        util.RNSBase([sealapi.Modulus(0), sealapi.Modulus(3)])
    with pytest.raises(BaseException):
        util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3), sealapi.Modulus(4)])

    testcase = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3)])
    assert testcase[0] == 2
    assert testcase.size() == 2
    assert testcase.contains(sealapi.Modulus(2)) is True
    assert testcase.contains(sealapi.Modulus(7)) is False

    base1 = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3)])
    base2 = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3), sealapi.Modulus(11)])
    base3 = util.RNSBase([sealapi.Modulus(5), sealapi.Modulus(3), sealapi.Modulus(11)])
    assert base1.is_subbase_of(base2) is True
    assert base1.is_proper_subbase_of(base2) is True
    assert base1.is_subbase_of(base3) is False
    assert base2.is_superbase_of(base1) is True
    assert base2.is_proper_superbase_of(base1) is True
    assert base3.is_superbase_of(base1) is False

    base1 = base1.extend(sealapi.Modulus(11))
    assert base1.size() == 3
    base2 = util.RNSBase([sealapi.Modulus(23), sealapi.Modulus(37), sealapi.Modulus(53)])
    base1 = base1.extend(base2)
    assert base1.size() == 6

    base1 = base1.drop(sealapi.Modulus(11))
    assert base1.size() == 5
    base1 = base1.drop()
    base1 = base1.drop()
    assert base1.size() == 3

    base = util.RNSBase([sealapi.Modulus(3), sealapi.Modulus(5)])
    dec = base.decompose([14, 0])
    assert dec == [2, 4]
    comp = base.compose(dec)
    assert comp == [14, 0]

    base = util.RNSBase([sealapi.Modulus(3), sealapi.Modulus(5)])
    dec = base.decompose_array([14, 0], 1)
    assert dec == [2, 4]
    comp = base.compose_array(dec, 1)
    assert comp == [14, 0]

    assert base.base_prod() == 15


def test_util_baseconverter_sanity():
    base1 = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3)])
    base2 = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3), sealapi.Modulus(11)])

    converter = util.BaseConverter(base1, base2)
    assert converter.ibase_size() == 2
    assert converter.ibase().size() == 2
    assert converter.obase_size() == 3
    assert converter.obase().size() == 3

    base1 = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3)])
    base2 = util.RNSBase([sealapi.Modulus(3), sealapi.Modulus(4), sealapi.Modulus(5)])
    converter = util.BaseConverter(base1, base2)

    conv = converter.fast_convert_array([0, 1, 1, 0, 1, 2], 3)
    assert conv == [0, 1, 2, 0, 3, 1, 0, 2, 0]


@pytest.mark.parametrize(
    "test, out",
    [([0, 0], [0, 0, 0]), ([1, 1], [1, 3, 2]), ([1, 2], [2, 1, 0]), ([3, 3], [0, 3, 3])],
)
def test_util_baseconverter_conversion(test, out):
    base1 = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3)])
    base2 = util.RNSBase([sealapi.Modulus(3), sealapi.Modulus(4), sealapi.Modulus(5)])
    converter = util.BaseConverter(base1, base2)

    conv = converter.fast_convert(test)
    assert conv == out


def test_util_hestdparms():
    assert util.seal_he_std_parms_128_tc(1024) == 27
    assert util.seal_he_std_parms_192_tc(1024) == 19
    assert util.seal_he_std_parms_256_tc(1024) == 14
    assert util.seal_he_std_parms_128_tq(1024) == 25
    assert util.seal_he_std_parms_192_tq(1024) == 17
    assert util.seal_he_std_parms_256_tq(1024) == 13


def test_util_hash():
    out = util.HashFunction.hash([1, 2, 3, 4])
    assert len(out) == 4


def test_util_clipnormal():
    dist = util.ClippedNormalDistribution(50, 10, 20)
    assert dist.mean() == 50
    assert dist.standard_deviation() == 10
    assert dist.max_deviation() == 20
    assert dist.min() == 30
    assert dist.max() == 70

    generator = sealapi.Blake2xbPRNGFactory.DefaultFactory().create()
    adapter = sealapi.RandomToStandardAdapter(generator)

    assert dist(adapter) != dist(adapter)


def test_util_croots():
    croot = util.ComplexRoots(16)
    assert croot.get_root(5) != 0


def test_util_polyarithsmallmod():
    assert util.modulo_poly_coeffs([5, 6, 7, 8, 9], 5, sealapi.Modulus(2)) == [1, 0, 1, 0, 1]
    assert util.negate_poly_coeffmod([1, 2], 2, sealapi.Modulus(5)) == [4, 3]
    assert util.add_poly_coeffmod([1, 2], [1, 2], 2, sealapi.Modulus(5)) == [2, 4]
    assert util.sub_poly_coeffmod([1, 2], [1, 2], 2, sealapi.Modulus(5)) == [0, 0]
    assert util.multiply_poly_scalar_coeffmod([1, 2], 2, 3, sealapi.Modulus(5)) == [3, 1]
    assert util.dyadic_product_coeffmod([5, 7], [2, 3], 2, sealapi.Modulus(5), 4) == [0, 1, 0, 0]
    assert util.poly_infty_norm_coeffmod([5, 7], 2, sealapi.Modulus(5)) == 2
    assert util.negacyclic_shift_poly_coeffmod([4, 3], 2, 1, sealapi.Modulus(5)) == [2, 4]
    assert util.negacyclic_multiply_poly_mono_coeffmod([4, 3], 2, 2, 1, sealapi.Modulus(5)) == [
        4,
        3,
    ]


def test_util_polycore():
    assert util.poly_to_hex_string([1, 2], 2, 1) == "2x^1 + 1"
    assert util.poly_to_dec_string([1, 2], 2, 1) == "2x^1 + 1"


def test_util_pointer():
    assert util.PointerUInt64() is not None
    assert util.PointerComplexDouble() is not None
    assert util.PointerModulus() is not None


@pytest.mark.parametrize("params", [helper_params_bfv(), helper_params_ckks()])
def test_util_rlwe(params):
    generator = sealapi.Blake2xbPRNGFactory.DefaultFactory().create()
    assert (
        len(util.sample_poly_ternary(generator, params))
        == len(params.coeff_modulus()) * params.poly_modulus_degree()
    )
    assert (
        len(util.sample_poly_normal(generator, params))
        == len(params.coeff_modulus()) * params.poly_modulus_degree()
    )
    assert (
        len(util.sample_poly_uniform(generator, params))
        == len(params.coeff_modulus()) * params.poly_modulus_degree()
    )


def test_util_galois():
    with pytest.raises(BaseException):
        util.GaloisTool(0)

    gtool = util.GaloisTool(3)
    assert gtool.get_elt_from_step(0) == 15
    assert gtool.get_elts_from_steps([0, 1, -3, 2, -2, 3, -1]) == [15, 3, 3, 9, 9, 11, 11]
    assert gtool.get_elts_all() == [15, 3, 11, 9, 9]

    poly_modulus_degree = 8
    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.CKKS)
    parms.set_poly_modulus_degree(poly_modulus_degree)
    coeff = sealapi.CoeffModulus.Create(poly_modulus_degree, [17])
    parms.set_coeff_modulus(coeff)

    ctx = sealapi.SEALContext(parms, False, sealapi.SEC_LEVEL_TYPE.NONE)

    gtool = ctx.key_context_data().galois_tool()
    assert gtool.apply_galois(
        [0, 1, 2, 3, 4, 5, 6, 7], 3, sealapi.Modulus(17), poly_modulus_degree - 1
    )[:8] == [0, 14, 6, 1, 13, 7, 2, 12]

    assert gtool.apply_galois_ntt([0, 1, 2, 3, 4, 5, 6, 7], 3, poly_modulus_degree - 1)[:8] == [
        4,
        5,
        7,
        6,
        1,
        0,
        2,
        3,
    ]
    assert 7 == util.GaloisTool.GetIndexFromElt(15)


def test_util_ntt():
    coeff_count_power = 10
    tables = util.NTTTables(
        coeff_count_power, sealapi.Modulus(util.get_prime(1 << coeff_count_power, 40))
    )
    assert tables.get_root() > 0
    assert tables.get_from_root_powers(1).operand > 0
    assert tables.get_from_inv_root_powers(1).operand > 0
    assert tables.modulus() > 0
    assert tables.coeff_count_power() == coeff_count_power
    assert tables.coeff_count() == 1 << coeff_count_power

    tables = util.CreateNTTTables(
        coeff_count_power, [sealapi.Modulus(util.get_prime(1 << coeff_count_power, 40))]
    )
    assert tables.get().coeff_count_power() == coeff_count_power

    data = [0] * ((1 << coeff_count_power) * 1)
    data[0] = 1
    assert util.ntt_negacyclic_harvey_lazy(data, tables.get()) != data
    assert util.ntt_negacyclic_harvey(data, tables.get()) != data
    assert util.inverse_ntt_negacyclic_harvey_lazy(data, tables.get()) != data
    assert util.inverse_ntt_negacyclic_harvey(data, tables.get()) != data


def test_util_numth():
    assert util.naf(12) == [-4, 16]
    assert util.gcd(12, 18) == 6
    assert util.xgcd(12, 18) == (6, -1, 1)
    assert util.are_coprime(9, 8) is True
    assert util.are_coprime(9, 12) is False

    assert util.is_prime(sealapi.Modulus(666013), 10) is True

    assert len(util.get_primes(16, 20, 4)) == 4
    assert util.get_prime(2, 4).value() == 13
    assert util.is_primitive_root(16, 4, sealapi.Modulus(71)) == False
    out = 10
    assert util.try_minimal_primitive_root(4, sealapi.Modulus(71), out) == False


def test_util_rnstool_sanity():
    poly_modulus_degree = 4
    coeff_base_count = 4
    prime_bit_count = 20
    plain = sealapi.Modulus(65537)
    coeff_base = util.RNSBase(
        util.get_primes(poly_modulus_degree, prime_bit_count, coeff_base_count)
    )
    rns_tool = util.RNSTool(poly_modulus_degree, coeff_base, plain)

    poly_modulus_degree = 2
    plain = sealapi.Modulus(0)
    coeff_base = util.RNSBase([sealapi.Modulus(3)])
    rns_tool = util.RNSTool(poly_modulus_degree, coeff_base, plain)

    input = [1, 2, 1, 2]
    dest = rns_tool.fastbconv_sk(input, poly_modulus_degree)
    assert dest == [1, 2]

    input = [
        rns_tool.m_tilde().value(),
        2 * rns_tool.m_tilde().value(),
        rns_tool.m_tilde().value(),
        2 * rns_tool.m_tilde().value(),
        0,
        0,
    ]
    dest = rns_tool.sm_mrq(input, poly_modulus_degree)
    assert dest == [1, 2, 1, 2]

    input = [15, 3, 15, 3, 15, 3]
    dest = rns_tool.fast_floor(input, poly_modulus_degree)
    assert dest == [5, 1, 5, 1]

    input = [1, 2]
    dest = rns_tool.fastbconv_m_tilde(input, poly_modulus_degree)
    assert dest == [1, 2, 1, 2, 1, 2]

    poly_modulus_degree = 2
    plain = sealapi.Modulus(3)
    coeff_base = util.RNSBase([sealapi.Modulus(5), sealapi.Modulus(7)])
    rns_tool = util.RNSTool(poly_modulus_degree, coeff_base, plain)

    input = [35, 70, 35, 70]
    dest = rns_tool.decrypt_scale_and_round(input, poly_modulus_degree)
    assert dest == [0, 0, 0, 0]
    input = [29, 30 + 35, 29, 30 + 35]
    dest = rns_tool.decrypt_scale_and_round(input, poly_modulus_degree)
    assert dest == [2, 0, 0, 0]

    poly_modulus_degree = 2
    plain = sealapi.Modulus(0)
    coeff_base = util.RNSBase([sealapi.Modulus(13), sealapi.Modulus(7)])
    rns_tool = util.RNSTool(poly_modulus_degree, coeff_base, plain)

    input = [12, 11, 4, 3]
    dest = rns_tool.divide_and_round_q_last_inplace(input, poly_modulus_degree)
    assert dest == [4, 3, 0, 6]

    poly_modulus_degree = 2
    plain = sealapi.Modulus(0)
    coeff_base = util.RNSBase([sealapi.Modulus(53), sealapi.Modulus(13)])
    rns_tool = util.RNSTool(poly_modulus_degree, coeff_base, plain)

    input = [4, 12, 4, 12]
    dest = rns_tool.divide_and_round_q_last_inplace(input, poly_modulus_degree)
    assert dest == [0, 1, 10, 5]


def test_util_multiplyuintmodoperand_sanity():
    mod = sealapi.Modulus(2147483647)
    op = util.MultiplyUIntModOperand()
    op.set(2147483646, mod)
    op.set_quotient(mod)
    assert op.operand == 2147483646
    assert op.quotient == 18446744065119617019
