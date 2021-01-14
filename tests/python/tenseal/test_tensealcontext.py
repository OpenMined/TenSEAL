import pytest
import tenseal as ts
from tenseal.enc_context import GaloisKeys, RelinKeys


@pytest.mark.parametrize(
    "encryption_type", [ts.ENCRYPTION_TYPE.PUBLIC_KEY, ts.ENCRYPTION_TYPE.SYMMETRIC]
)
def test_context_creation(encryption_type):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193, [], encryption_type)

    assert context.is_private() is True, "TenSEALContext should be private"
    if encryption_type is ts.ENCRYPTION_TYPE.PUBLIC_KEY:
        assert context.public_key() is not None, "TenSEALContext shouldn't be None"
    else:
        with pytest.raises(ValueError) as e:
            context.public_key()


@pytest.mark.parametrize(
    "encryption_type", [ts.ENCRYPTION_TYPE.PUBLIC_KEY, ts.ENCRYPTION_TYPE.SYMMETRIC]
)
def test_make_context_public(encryption_type):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193, [], encryption_type)
    if encryption_type is ts.ENCRYPTION_TYPE.PUBLIC_KEY:
        context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)
        assert context.is_public() is True, "TenSEALContext should be public"
    else:
        with pytest.raises(ValueError) as e:
            context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)


@pytest.mark.parametrize(
    "encryption_type", [ts.ENCRYPTION_TYPE.PUBLIC_KEY, ts.ENCRYPTION_TYPE.SYMMETRIC]
)
def test_generate_galois_keys(encryption_type):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193, [], encryption_type)
    secret_key = context.secret_key()
    if encryption_type is ts.ENCRYPTION_TYPE.PUBLIC_KEY:
        context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)

    context.generate_galois_keys(secret_key)
    assert isinstance(context.galois_keys(), GaloisKeys), "Galois keys should be set"


@pytest.mark.parametrize(
    "encryption_type", [ts.ENCRYPTION_TYPE.PUBLIC_KEY, ts.ENCRYPTION_TYPE.SYMMETRIC]
)
def test_generate_relin_keys(encryption_type):
    context = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193, [], encryption_type)
    secret_key = context.secret_key()
    if encryption_type is ts.ENCRYPTION_TYPE.PUBLIC_KEY:
        context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)

    context.generate_relin_keys(secret_key)
    assert isinstance(context.relin_keys(), RelinKeys), "Relin keys should be set"


@pytest.mark.parametrize(
    "encryption_type", [ts.ENCRYPTION_TYPE.PUBLIC_KEY, ts.ENCRYPTION_TYPE.SYMMETRIC]
)
def test_global_scale(encryption_type):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60], encryption_type)
    # global scale shouldn't be set at first
    with pytest.raises(ValueError) as e:
        scale = context.global_scale
    for scale in [0, 1, 2, 2 ** 40]:
        context.global_scale = scale
        assert context.global_scale == scale


@pytest.mark.parametrize(
    "encryption_type", [ts.ENCRYPTION_TYPE.PUBLIC_KEY, ts.ENCRYPTION_TYPE.SYMMETRIC]
)
def test_auto_flags(encryption_type):
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60], encryption_type)
    # default values
    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    # switch on/off and check
    context.auto_relin = False
    assert context.auto_relin == False
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    context.auto_relin = True
    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    context.auto_rescale = False
    assert context.auto_relin == True
    assert context.auto_rescale == False
    assert context.auto_mod_switch == True

    context.auto_rescale = True
    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    context.auto_mod_switch = False
    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == False

    context.auto_mod_switch = True
    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True
