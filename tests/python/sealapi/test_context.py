import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


def test_context_encryptionparamsqualifiers():
    error_type = sealapi.EncryptionParameterQualifiers.ERROR_TYPE

    assert int(error_type.NONE) == -1
    assert int(error_type.SUCCESS) == 0
    assert int(error_type.INVALID_SCHEME) == 1
    assert int(error_type.INVALID_COEFF_MODULUS_SIZE) == 2
    assert int(error_type.INVALID_COEFF_MODULUS_BIT_COUNT) == 3
    assert int(error_type.INVALID_COEFF_MODULUS_NO_NTT) == 4
    assert int(error_type.INVALID_POLY_MODULUS_DEGREE) == 5
    assert int(error_type.INVALID_POLY_MODULUS_NON_POWER_OF_TWO) == 6
    assert int(error_type.INVALID_PARAMETERS_TOO_LARGE) == 7
    assert int(error_type.INVALID_PARAMETERS_INSECURE) == 8
    assert int(error_type.FAILED_CREATING_RNS_BASE) == 9
    assert int(error_type.INVALID_PLAIN_MODULUS_BIT_COUNT) == 10
    assert int(error_type.INVALID_PLAIN_MODULUS_COPRIMALITY) == 11
    assert int(error_type.INVALID_PLAIN_MODULUS_TOO_LARGE) == 12
    assert int(error_type.INVALID_PLAIN_MODULUS_NONZERO) == 13
    assert int(error_type.FAILED_CREATING_RNS_TOOL) == 14


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
    testcase.set_plain_modulus(sealapi.Modulus(1023))
    assert testcase.plain_modulus().value() == 1023

    testcase.set_random_generator(sealapi.Blake2xbPRNGFactory())
    generator = testcase.random_generator().create()
    assert generator.generate() != generator.generate()


@pytest.mark.parametrize("scheme", [sealapi.SCHEME_TYPE.BFV, sealapi.SCHEME_TYPE.CKKS])
def test_encryptionparams_scheme_settings(scheme):
    testcase = sealapi.EncryptionParameters(scheme)
    testcase.set_poly_modulus_degree(32768)
    assert testcase.poly_modulus_degree() == 32768

    testcase = sealapi.EncryptionParameters(scheme)
    testcase.set_coeff_modulus([sealapi.Modulus(1023), sealapi.Modulus(234)])
    assert len(testcase.coeff_modulus()) == 2
    assert testcase.coeff_modulus()[0].value() == 1023
    assert testcase.coeff_modulus()[1].value() == 234

    left = sealapi.EncryptionParameters(scheme)
    left.set_poly_modulus_degree(32768)
    left.set_coeff_modulus([sealapi.Modulus(1023), sealapi.Modulus(234)])

    right = sealapi.EncryptionParameters(scheme)
    right.set_poly_modulus_degree(32768)
    assert left != right

    right.set_coeff_modulus([sealapi.Modulus(1023), sealapi.Modulus(234)])
    assert left == right

    testcase = sealapi.EncryptionParameters(scheme)
    testcase.set_poly_modulus_degree(32768)
    testcase.set_coeff_modulus([sealapi.Modulus(1023), sealapi.Modulus(234)])

    def save_load(path):
        testcase.save(path)

        saved = sealapi.EncryptionParameters(scheme)
        saved.load(path)
        assert saved.poly_modulus_degree() == 32768
        assert saved.coeff_modulus()[0].value() == 1023

    tmp_file(save_load)


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

    sealctx = sealapi.SEALContext(parms, True, sec_level)
    assert sealctx.parameters_set() is False


@pytest.mark.parametrize(
    "sealctx", [helper_context_bfv(), helper_context_ckks()],
)
def test_context_sanity(sealctx):
    assert sealctx.parameters_set() is True


def context_asserts(sealctx, sec_level, scheme):
    assert sealctx.parameters_set() is True
    assert sealctx.parameters_error_name() == "success"
    assert sealctx.parameters_error_message() == "valid"

    orig_ctx_data = sealctx.key_context_data()
    parms = orig_ctx_data.parms()
    poly_modulus_degree = parms.poly_modulus_degree()
    coeff_mod_count = len(parms.coeff_modulus())

    def context_data_sanity(ctx_data, ctx_alias, index):
        assert ctx_data.parms().poly_modulus_degree() == poly_modulus_degree
        assert len(ctx_data.parms_id()) == 4
        assert ctx_data.chain_index() == ctx_alias.chain_index()
        assert ctx_data.chain_index() == index
        assert (
            ctx_data.total_coeff_modulus() != 0
            and ctx_data.total_coeff_modulus() == ctx_alias.total_coeff_modulus()
        )
        assert ctx_data.total_coeff_modulus_bit_count() == ctx_alias.total_coeff_modulus_bit_count()

        assert ctx_data.plain_upper_half_threshold() == ctx_alias.plain_upper_half_threshold()
        if scheme == sealapi.SCHEME_TYPE.BFV:
            assert (
                ctx_data.coeff_div_plain_modulus().operand
                == ctx_alias.coeff_div_plain_modulus().operand
            )
        assert ctx_data.upper_half_increment() == ctx_alias.upper_half_increment()
        assert ctx_data.upper_half_threshold() == ctx_alias.upper_half_threshold()

        assert ctx_data.rns_tool() != None
        assert ctx_data.small_ntt_tables().coeff_count_power() > 0
        if scheme == sealapi.SCHEME_TYPE.BFV:
            assert ctx_data.plain_ntt_tables().coeff_count_power() > 0
        assert len(ctx_data.galois_tool().get_elts_all()) > 0

        qualifiers = ctx_data.qualifiers()
        assert qualifiers.parameters_set() is True
        assert qualifiers.using_fft is True
        assert qualifiers.using_ntt is True
        assert qualifiers.using_batching is True
        assert qualifiers.using_fast_plain_lift == (scheme == sealapi.SCHEME_TYPE.BFV)
        assert qualifiers.sec_level == sec_level

    for (parms_id, ctx_data, index) in [
        (sealctx.first_parms_id(), sealctx.first_context_data(), coeff_mod_count - 2),
        (sealctx.last_parms_id(), sealctx.last_context_data(), 0),
        (sealctx.key_parms_id(), sealctx.key_context_data(), coeff_mod_count - 1),
    ]:
        should_be_same_ctx = sealctx.get_context_data(parms_id)
        context_data_sanity(ctx_data, should_be_same_ctx, index)

    assert sealctx.last_context_data().next_context_data() is None
    assert (
        sealctx.first_context_data().prev_context_data().chain_index()
        == sealctx.key_context_data().chain_index()
    )

    assert sealctx.using_keyswitching() is True


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
    sealctx = sealapi.SEALContext(parms, True, sec_level)
    assert sealctx.parameters_set() is True

    coeff = sealapi.CoeffModulus.BFVDefault(poly_modulus_degree, sec_level)
    parms.set_coeff_modulus(coeff)
    sealctx = sealapi.SEALContext(parms, True, sec_level)
    context_asserts(sealctx, sec_level, sealapi.SCHEME_TYPE.BFV)


@pytest.mark.parametrize(
    "sec_level", [sealapi.SEC_LEVEL_TYPE.TC128],
)
def test_context_scheme_ckks_sanity(sec_level):
    poly_modulus_degree = 8192
    plaintext_modulus = 1032193

    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.CKKS)
    parms.set_poly_modulus_degree(poly_modulus_degree)

    coeff = sealapi.CoeffModulus.Create(poly_modulus_degree, [60, 40, 40, 60])
    parms.set_coeff_modulus(coeff)
    sealctx = sealapi.SEALContext(parms, True, sealapi.SEC_LEVEL_TYPE.TC128)
    assert sealctx.parameters_set() is True

    context_asserts(sealctx, sec_level, sealapi.SCHEME_TYPE.CKKS)
