import pytest
import copy
import pickle
import tenseal as ts


def ctx():
    return ts.context(ts.SCHEME_TYPE.CKKS, 8192, 0, [60, 40, 40, 60])


def deep_copy(ctx):
    return copy.deepcopy(ctx)


def simple_copy(ctx):
    return copy.copy(ctx)


def internal_copy(ctx):
    return ctx.copy()


def recreate(ctx):
    proto = ctx.serialize()
    return ts.context_from(proto)


def pickled(ctx):
    out = pickle.dumps(ctx)
    return pickle.loads(out)


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate, pickled,])
def test_context_recreation(duplicate):
    orig_context = ctx()
    context = duplicate(orig_context)

    assert context.is_private() is True, "TenSEALContext should be private"
    assert context.public_key() is not None, "TenSEALContext shouldn't be None"

    orig_context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)
    context = duplicate(orig_context)
    assert context.is_public() is True, "TenSEALContext should be public"


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate, pickled,])
def test_generate_galois_keys(duplicate):
    orig_context = ctx()
    orig_context.generate_galois_keys()

    context = duplicate(orig_context)
    assert isinstance(context.galois_keys(), ts.GaloisKeys), "Galois keys should be set"

    orig_public_context = ctx()
    orig_public_context.make_context_public(generate_galois_keys=True, generate_relin_keys=False)
    context = duplicate(orig_public_context)

    assert isinstance(context.galois_keys(), ts.GaloisKeys), "Galois keys should be set"


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate, pickled,])
def test_generate_relin_keys(duplicate):
    orig_context = ctx()
    orig_context.generate_relin_keys()

    context = duplicate(orig_context)
    assert isinstance(context.relin_keys(), ts.RelinKeys), "Relin keys should be set"

    orig_public_context = ctx()
    orig_public_context.make_context_public(generate_galois_keys=False, generate_relin_keys=True)
    context = duplicate(orig_public_context)
    assert isinstance(context.relin_keys(), ts.RelinKeys), "Relin keys should be set"

    orig_public_context = ctx()
    orig_public_context.make_context_public(generate_galois_keys=True, generate_relin_keys=True)
    context = duplicate(orig_public_context)
    assert isinstance(context.relin_keys(), ts.RelinKeys), "Relin keys should be set"
    assert isinstance(context.galois_keys(), ts.GaloisKeys), "Galois keys should be set"


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate, pickled,])
@pytest.mark.parametrize("scale", [0, 1, 2, 2 ** 40])
def test_global_scale(duplicate, scale):
    orig_context = ctx()
    context = duplicate(orig_context)

    with pytest.raises(ValueError) as e:
        global_scale = context.global_scale

    orig_context.global_scale = scale
    context = duplicate(orig_context)
    assert context.global_scale == scale


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate, pickled,])
def test_auto_flags(duplicate):
    orig_context = ctx()
    context = duplicate(orig_context)

    # default values
    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    # switch on/off and check
    orig_context.auto_relin = False
    context = duplicate(orig_context)

    assert context.auto_relin == False
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    orig_context.auto_relin = True
    context = duplicate(orig_context)

    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    orig_context.auto_rescale = False
    context = duplicate(orig_context)

    assert context.auto_relin == True
    assert context.auto_rescale == False
    assert context.auto_mod_switch == True

    orig_context.auto_rescale = True
    context = duplicate(orig_context)

    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True

    orig_context.auto_mod_switch = False
    context = duplicate(orig_context)

    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == False

    orig_context.auto_mod_switch = True
    context = duplicate(orig_context)

    assert context.auto_relin == True
    assert context.auto_rescale == True
    assert context.auto_mod_switch == True
