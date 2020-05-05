import pytest
import tenseal.sealapi as sealapi
import tenseal.sealapi.util as util


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
    assert dec == [4, 0]
    comp = base.compose_array(dec, 1)
    assert comp == [10, 0]

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
    [([0, 0], [0, 0, 0]), ([1, 1], [1, 3, 2]), ([1, 2], [2, 1, 0]), ([3, 3], [0, 3, 3]),],
)
def test_util_baseconverter_conversion(test, out):
    base1 = util.RNSBase([sealapi.Modulus(2), sealapi.Modulus(3)])
    base2 = util.RNSBase([sealapi.Modulus(3), sealapi.Modulus(4), sealapi.Modulus(5)])
    converter = util.BaseConverter(base1, base2)

    conv = converter.fast_convert(test)
    assert conv == out


def test_util_hestdparms():
    assert util.SEAL_HE_STD_PARMS_128_TC(1024) == 27
    assert util.SEAL_HE_STD_PARMS_192_TC(1024) == 19
    assert util.SEAL_HE_STD_PARMS_256_TC(1024) == 14
    assert util.SEAL_HE_STD_PARMS_128_TQ(1024) == 25
    assert util.SEAL_HE_STD_PARMS_192_TQ(1024) == 17
    assert util.SEAL_HE_STD_PARMS_256_TQ(1024) == 13


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

    generator = sealapi.BlakePRNGFactory.DefaultFactory().create()
    adapter = sealapi.RandomToStandardAdapter(generator)

    assert dist(adapter) != dist(adapter)


def test_util_croots():
    croot = util.ComplexRoots(4)
    assert croot.get_root(5) == complex(0, 1)


def test_util_polyarith():
    assert util.right_shift_poly_coeffs([2, 4, 8], 3, 1, 1) == [1, 2, 4]
    assert util.negate_poly([2, 4, 8], 3, 1) == [(1 << 64) - 2, (1 << 64) - 4, (1 << 64) - 8]
    assert util.add_poly_poly([2, 4, 8], [3, 4, 5], 3, 1) == [5, 8, 13]
    assert util.sub_poly_poly([4, 6, 8], [3, 4, 5], 3, 1) == [1, 2, 3]
    assert util.multiply_poly_poly([1, 2], 2, 1, [1, 2, 3], 3, 1, 4, 1) == [1, 4, 7, 6]
    assert util.poly_infty_norm([1, 2], 2, 1) == [2, 0]
    assert util.poly_eval_poly([1, 0], 2, 1, [2, 1], 2, 1, 4, 1) == [1, 0, 0, 0]
    assert util.exponentiate_poly([2, 3], 2, 1, [2], 1, 4, 1) == [4, 12, 9, 0]


def test_util_polyarithsmallmod():
    assert util.modulo_poly_coeffs([5, 6, 7, 8, 9], 5, sealapi.Modulus(2)) == [1, 0, 1, 0, 1]
    assert util.modulo_poly_coeffs_63([66, 67, 68], 3, sealapi.Modulus(5)) == [1, 2, 3]
    assert util.negate_poly_coeffmod([1, 2], 2, sealapi.Modulus(5)) == [4, 3]
    assert util.add_poly_poly_coeffmod([1, 2], [11, 12], 2, sealapi.Modulus(5)) == [7, 9]
    assert util.sub_poly_poly_coeffmod([11, 12], [1, 2], 2, sealapi.Modulus(5)) == [10, 10]
    assert util.multiply_poly_scalar_coeffmod([1, 2], 2, 3, sealapi.Modulus(5)) == [3, 1]
    assert util.multiply_poly_poly_coeffmod([1, 2], 2, [2, 3], 2, sealapi.Modulus(5), 4) == [
        2,
        2,
        1,
        0,
    ]
    assert util.multiply_poly_poly_coeffmod([1, 2], [2, 3], 2, sealapi.Modulus(5), 4) == [
        2,
        2,
        1,
        0,
    ]
    assert util.multiply_truncate_poly_poly_coeffmod([1, 2], [2, 3], 2, sealapi.Modulus(5), 4) == [
        2,
        2,
        0,
        0,
    ]
    assert util.divide_poly_poly_coeffmod([5, 7], [2, 3], 2, sealapi.Modulus(5)) == [[4, 0], [2, 5]]
    assert util.dyadic_product_coeffmod([5, 7], [2, 3], 2, sealapi.Modulus(5), 4) == [0, 1, 0, 0]
    assert util.poly_infty_norm_coeffmod([5, 7], 2, sealapi.Modulus(5)) == 2
    assert util.try_invert_poly_coeffmod([1, 0], [4, 3], 2, sealapi.Modulus(5)) == [1, 0]
    assert util.negacyclic_shift_poly_coeffmod([4, 3], 2, 1, sealapi.Modulus(5)) == [2, 4]
    assert util.negacyclic_multiply_poly_mono_coeffmod([4, 3], 2, 1, 2, sealapi.Modulus(5)) == [
        1,
        2,
    ]


def test_util_polyarithmod():
    assert util.negate_poly_coeffmod([1, 2], 2, [5], 1) == [4, 3]
    assert util.add_poly_poly_coeffmod([1, 2], [2, 3], 2, [5], 1) == [3, 0]
    assert util.add_poly_poly_coeffmod([7, 5], [2, 3], 2, [5], 1) == [4, 3]
    assert util.poly_infty_norm_coeffmod([0, 1], 2, 1, [5]) == [1, 0]


def test_util_polycore():
    assert util.poly_to_hex_string([1, 2], 2, 1) == "2x^1 + 1"
    assert util.poly_to_dec_string([1, 2], 2, 1) == "2x^1 + 1"


def test_util_pointer():
    assert util.PointerUInt64() is not None
    assert util.PointerComplexDouble() is not None
    assert util.PointerModulus() is not None


def test_util_rlwe():
    pass


def test_util_numth():
    assert util.naf(12) == [-4, 16]
    assert util.gcd(12, 18) == 6
    assert util.xgcd(12, 18) == (6, -1, 1)
    assert util.are_coprime(9, 8) is True
    assert util.are_coprime(9, 12) is False

    assert util.is_prime(sealapi.Modulus(666013), 10) is True

    assert len(util.get_primes(10, 8, 3)) == 3
    assert util.get_prime(2, 4).value() == 13
    # HANG
    # assert util.multiplicative_orders([2], 3) == []


#         .def("conjugate_classes", &conjugate_classes)
#         .def("babystep_giantstep", &babystep_giantstep)
#         .def("decompose_babystep_giantstep", &decompose_babystep_giantstep)
#         .def("try_invert_uint_mod",
#              py::overload_cast<std::uint64_t, std::uint64_t, std::uint64_t &>(
#                  &try_invert_uint_mod))
#         .def("is_primitive_root", &is_primitive_root)
#         .def("try_minimal_primitive_root", &try_minimal_primitive_root);


def test_util_rnstool():
    pass
    # poly_modulus_degree = 2
    # plain = sealapi.Modulus(0)
    # base = util.RNSBase([sealapi.Modulus(3)])
    # rns_tool = util.RNSTool(poly_modulus_degree, base, plain)

    # assert rns_tool.base_q().size() == 1
    # assert rns_tool.base_B().size() == 1
    # assert rns_tool.base_Bsk().size() == 2
    # assert rns_tool.base_Bsk_m_tilde().size() == 1
    # assert rns_tool.base_t_gamma().size() == 1


def test_util_ntt():
    pass


def test_util_galois():
    pass
