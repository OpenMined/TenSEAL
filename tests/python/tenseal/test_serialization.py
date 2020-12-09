import pytest
import copy
import tenseal as ts
from tenseal.enc_context import GaloisKeys, RelinKeys

from tests.python.tenseal.utils import *


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


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate,])
def test_context_recreation(duplicate):
    orig_context = ctx()
    context = duplicate(orig_context)

    assert context.is_private() is True, "TenSEALContext should be private"
    assert context.public_key() is not None, "TenSEALContext shouldn't be None"

    orig_context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)
    context = duplicate(orig_context)
    assert context.is_public() is True, "TenSEALContext should be public"

    orig_context = ctx()
    context = duplicate(orig_context)
    context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)
    assert orig_context.is_private() is True, "original TenSEALContext should stay private"


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate,])
def test_generate_galois_keys(duplicate):
    orig_context = ctx()
    orig_context.generate_galois_keys()

    context = duplicate(orig_context)
    assert isinstance(context.galois_keys(), GaloisKeys), "Galois keys should be set"

    orig_public_context = ctx()
    orig_public_context.make_context_public(generate_galois_keys=True, generate_relin_keys=False)
    context = duplicate(orig_public_context)

    assert isinstance(context.galois_keys(), GaloisKeys), "Galois keys should be set"

    orig_context = ctx()
    context = duplicate(orig_context)
    context.generate_galois_keys()
    with pytest.raises(ValueError) as exc_info:
        orig_context.galois_keys()
    assert exc_info.type is ValueError, "orginal context shouldn't have Galois keys"


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate,])
def test_generate_relin_keys(duplicate):
    # by default, Relin keys will be generated on context creation
    orig_context = ctx()
    context = duplicate(orig_context)
    assert isinstance(context.relin_keys(), RelinKeys), "Relin keys should be set"

    orig_public_context = ctx()
    orig_public_context.make_context_public(generate_galois_keys=False, generate_relin_keys=False)
    context = duplicate(orig_public_context)
    assert isinstance(context.relin_keys(), RelinKeys), "Relin keys should be set"

    orig_public_context = ctx()
    orig_public_context.make_context_public(generate_galois_keys=False, generate_relin_keys=True)
    context = duplicate(orig_public_context)
    assert isinstance(context.relin_keys(), RelinKeys), "Relin keys should be set"


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate,])
def test_generate_galois_relin_keys(duplicate):
    orig_public_context = ctx()
    orig_public_context.make_context_public(generate_galois_keys=True, generate_relin_keys=True)
    context = duplicate(orig_public_context)
    assert isinstance(context.relin_keys(), RelinKeys), "Relin keys should be set"
    assert isinstance(context.galois_keys(), GaloisKeys), "Galois keys should be set"

    orig_context = ctx()
    context = duplicate(orig_context)
    context.make_context_public(generate_galois_keys=True, generate_relin_keys=True)
    with pytest.raises(ValueError) as exc_info:
        orig_context.galois_keys()
    assert exc_info.type is ValueError, "orginal context shouldn't have Galois keys"


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate,])
@pytest.mark.parametrize("scale", [0, 1, 2, 2 ** 40])
def test_global_scale(duplicate, scale):
    orig_context = ctx()
    context = duplicate(orig_context)

    with pytest.raises(ValueError) as e:
        global_scale = context.global_scale

    orig_context.global_scale = scale
    context = duplicate(orig_context)
    assert context.global_scale == scale


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate,])
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


@pytest.mark.parametrize("duplicate", [deep_copy, simple_copy, internal_copy, recreate,])
@pytest.mark.parametrize(
    "vec1, vec2",
    [
        ([0], [0]),
        ([1], [0]),
        ([-1], [0]),
        ([-1], [-1]),
        ([1], [1]),
        ([-1], [1]),
        ([-1, -2], [-73, -10]),
        ([1, 2], [-73, -10]),
        ([1, 2, 3, 4], [4, 3, 2, 1]),
        ([1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1]),
    ],
)
def test_sanity_keys_regeneration(duplicate, vec1, vec2):
    orig_context = ctx()
    orig_context.global_scale = pow(2, 40)
    orig_context.generate_relin_keys()
    orig_context.generate_galois_keys()
    precision = 1

    context = duplicate(orig_context)
    assert isinstance(context.relin_keys(), RelinKeys), "Relin keys should be set"
    assert isinstance(context.galois_keys(), GaloisKeys), "Galois keys should be set"

    first_vec = ts.ckks_vector(context, vec1)
    second_vec = ts.ckks_vector(context, vec2)
    result = first_vec.dot(second_vec)
    expected = [sum([v1 * v2 for v1, v2 in zip(vec1, vec2)])]

    # Decryption
    decrypted_result = result.decrypt()
    assert almost_equal(
        decrypted_result, expected, precision
    ), "Dot product of vectors is incorrect."
    assert almost_equal(first_vec.decrypt(), vec1, precision), "Something went wrong in memory."
    assert almost_equal(second_vec.decrypt(), vec2, precision), "Something went wrong in memory."
