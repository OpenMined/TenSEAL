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


def test_util_polyarith():
    pass


def test_util_polyarithsmallmod():
    pass


def test_util_polyarithmod():
    pass


def test_util_polycore():
    pass


def test_util_rlwe():
    pass


def test_util_uintcore():
    pass


def test_util_uintarith():
    pass


def test_util_uintarithsmallmod():
    pass


def test_util_uintarithmod():
    pass


def test_util_croots():
    pass


def test_util_numth():
    pass


def test_util_hestdparms():
    pass


def test_util_scalingvariant():
    pass


def test_util_clipnormal():
    pass


def test_util_hash():
    pass


def test_util_pointer():
    pass
