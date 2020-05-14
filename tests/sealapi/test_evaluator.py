import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


@pytest.mark.parametrize(
    "scheme, ctx",
    [
        (sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),
        (sealapi.SCHEME_TYPE.CKKS, helper_context_ckks(8192)),
    ],
)
@pytest.mark.parametrize(
    "left",
    [
        [10, 100, 500, 600],
        [i for i in range(200)],
        [-i for i in range(200)],
        [(-1) ** i * i for i in range(200)],
    ],
)
def test_evaluator_unary(scheme, ctx, left):
    evaluator, encryptor, decryptor, _ = helper_generate_evaluator(ctx)

    # unary in place
    for (op, expected) in [
        (evaluator.negate_inplace, [-v for v in left]),
        (evaluator.square_inplace, [v * v for v in left]),
        (evaluator.mod_switch_to_next_inplace, left),
    ]:
        cleft = sealapi.Ciphertext(ctx)
        pleft = helper_encode(scheme, ctx, left)
        encryptor.encrypt(pleft, cleft)

        op(cleft)

        out = sealapi.Plaintext()
        decryptor.decrypt(cleft, out)
        out = helper_decode(scheme, ctx, out)

        is_close_enough(out[: len(left)], expected)

    # unary
    for (op, expected) in [
        (evaluator.negate, [-v for v in left]),
        (evaluator.square, [v * v for v in left]),
        (evaluator.mod_switch_to_next, left),
    ]:
        cleft = sealapi.Ciphertext(ctx)
        cout = sealapi.Ciphertext(ctx)

        pleft = helper_encode(scheme, ctx, left)
        encryptor.encrypt(pleft, cleft)

        op(cleft, cout)

        out = sealapi.Plaintext()
        decryptor.decrypt(cout, out)
        out = helper_decode(scheme, ctx, out)

        is_close_enough(out[: len(left)], expected)


@pytest.mark.parametrize(
    "scheme, ctx",
    [
        (sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),
        (sealapi.SCHEME_TYPE.CKKS, helper_context_ckks(8192)),
    ],
)
@pytest.mark.parametrize(
    "left, right",
    [
        ([10, 100, 500, 600], [5, 50, 100, 500]),
        ([2 * i for i in range(200)], [5 * i for i in range(200)]),
        ([2 * i for i in range(200)], [-2 * i for i in range(200)]),
        ([2 * i for i in range(200)], [-5 * i for i in range(200)]),
        ([-2 * i for i in range(200)], [5 * i for i in range(200)]),
        ([-2 * i for i in range(200)], [-5 * i for i in range(200)]),
    ],
)
def test_evaluator_binary(scheme, ctx, left, right):
    evaluator, encryptor, decryptor, _ = helper_generate_evaluator(ctx)

    # binary in place
    for (op, expected) in [
        (evaluator.add_inplace, [left[idx] + right[idx] for idx in range(len(left))]),
        (evaluator.sub_inplace, [left[idx] - right[idx] for idx in range(len(left))]),
        (evaluator.multiply_inplace, [left[idx] * right[idx] for idx in range(len(left))]),
    ]:
        cleft = sealapi.Ciphertext(ctx)
        cright = sealapi.Ciphertext(ctx)

        pleft = helper_encode(scheme, ctx, left)
        pright = helper_encode(scheme, ctx, right)

        encryptor.encrypt(pleft, cleft)
        encryptor.encrypt(pright, cright)

        op(cleft, cright)

        out = sealapi.Plaintext()
        decryptor.decrypt(cleft, out)
        out = helper_decode(scheme, ctx, out)

        is_close_enough(out[: len(left)], expected)

    # binary
    for (op, expected) in [
        (evaluator.add, [left[idx] + right[idx] for idx in range(len(left))]),
        (evaluator.sub, [left[idx] - right[idx] for idx in range(len(left))]),
        (evaluator.multiply, [left[idx] * right[idx] for idx in range(len(left))]),
    ]:
        cleft = sealapi.Ciphertext(ctx)
        cright = sealapi.Ciphertext(ctx)
        cout = sealapi.Ciphertext(ctx)

        pleft = helper_encode(scheme, ctx, left)
        pright = helper_encode(scheme, ctx, right)

        encryptor.encrypt(pleft, cleft)
        encryptor.encrypt(pright, cright)

        op(cleft, cright, cout)

        out = sealapi.Plaintext()
        decryptor.decrypt(cout, out)
        out = helper_decode(scheme, ctx, out)

        is_close_enough(out[: len(left)], expected)


@pytest.mark.parametrize(
    "scheme, ctx",
    [
        (sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),
        (sealapi.SCHEME_TYPE.CKKS, helper_context_ckks(8192)),
    ],
)
@pytest.mark.parametrize(
    "left",
    [
        [10, 100, 500, 600],
        [i for i in range(200)],
        [-i for i in range(200)],
        [(-1) ** i * i for i in range(200)],
    ],
)
def test_evaluator_plain(scheme, ctx, left):
    evaluator, encryptor, decryptor, _ = helper_generate_evaluator(ctx)

    # plain op in place
    for (op, plain, expected) in [
        (evaluator.add_plain_inplace, [100] * len(left), [100 + v for v in left]),
        (evaluator.sub_plain_inplace, [5] * len(left), [v - 5 for v in left]),
        (evaluator.multiply_plain_inplace, [2] * len(left), [2 * v for v in left]),
    ]:
        cleft = sealapi.Ciphertext(ctx)

        pleft = helper_encode(scheme, ctx, left)

        encryptor.encrypt(pleft, cleft)

        op(cleft, helper_encode(scheme, ctx, plain))

        out = sealapi.Plaintext()
        decryptor.decrypt(cleft, out)
        out = helper_decode(scheme, ctx, out)

        is_close_enough(out[: len(left)], expected)

    # plain op
    for (op, plain, expected) in [
        (evaluator.add_plain, [100] * len(left), [100 + v for v in left]),
        (evaluator.sub_plain, [5] * len(left), [v - 5 for v in left]),
        (evaluator.multiply_plain, [2] * len(left), [2 * v for v in left]),
    ]:
        cleft = sealapi.Ciphertext(ctx)
        cout = sealapi.Ciphertext(ctx)

        pleft = helper_encode(scheme, ctx, left)

        encryptor.encrypt(pleft, cleft)

        op(cleft, helper_encode(scheme, ctx, plain), cout)

        out = sealapi.Plaintext()
        decryptor.decrypt(cout, out)
        out = helper_decode(scheme, ctx, out)

        is_close_enough(out[: len(left)], expected)


@pytest.mark.parametrize(
    "scheme, ctx", [(sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),],
)
@pytest.mark.parametrize(
    "exp, left", [(2, [2, 3, 4, 5]), (3, [i for i in range(50)]),],
)
def test_evaluator_exp(scheme, ctx, exp, left):
    evaluator, encryptor, decryptor, relin_keys = helper_generate_evaluator(ctx)
    expected = [i ** exp for i in left]

    # exponentiate in place
    cleft = sealapi.Ciphertext(ctx)
    pleft = helper_encode(scheme, ctx, left)

    encryptor.encrypt(pleft, cleft)

    evaluator.exponentiate_inplace(cleft, exp, relin_keys)

    out = sealapi.Plaintext()
    decryptor.decrypt(cleft, out)
    out = helper_decode(scheme, ctx, out)

    is_close_enough(out[: len(left)], expected)

    # exponentiate
    cleft = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)

    encryptor.encrypt(pleft, cleft)

    evaluator.exponentiate(cleft, exp, relin_keys, cout)

    out = sealapi.Plaintext()
    decryptor.decrypt(cout, out)
    out = helper_decode(scheme, ctx, out)

    is_close_enough(out[: len(left)], expected)


@pytest.mark.parametrize(
    "scheme, ctx",
    [
        (sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),
        (sealapi.SCHEME_TYPE.CKKS, helper_context_ckks(8192)),
    ],
)
@pytest.mark.parametrize(
    "many", [[[7, 3], [2, 5]], [[2 * i for i in range(100)], [7 * i for i in range(100)]],],
)
def test_evaluator_add_many(scheme, ctx, many):
    evaluator, encryptor, decryptor, _ = helper_generate_evaluator(ctx)

    expected = [0] * len(many[0])
    for idx in range(len(many)):
        for jdx in range(len(many[idx])):
            expected[jdx] += many[idx][jdx]

    cmany = []
    pmany = [helper_encode(scheme, ctx, left) for left in many]
    cout = sealapi.Ciphertext(ctx)

    for idx in range(len(many)):
        c = sealapi.Ciphertext(ctx)
        encryptor.encrypt(pmany[idx], c)
        cmany.append(c)

    evaluator.add_many(cmany, cout)

    out = sealapi.Plaintext()
    decryptor.decrypt(cout, out)
    out = helper_decode(scheme, ctx, out)

    is_close_enough(out[: len(many[0])], expected)


@pytest.mark.parametrize(
    "scheme, ctx", [(sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),],
)
@pytest.mark.parametrize(
    "many", [[[7, 3], [2, 5]], [[2 * i for i in range(100)], [7 * i for i in range(100)]],],
)
def test_evaluator_multiply_many(scheme, ctx, many):
    evaluator, encryptor, decryptor, relin_keys = helper_generate_evaluator(ctx)

    expected = [1] * len(many[0])
    for idx in range(len(many)):
        for jdx in range(len(many[idx])):
            expected[jdx] *= many[idx][jdx]

    cmany = []
    pmany = [helper_encode(scheme, ctx, left) for left in many]
    cout = sealapi.Ciphertext(ctx)

    for idx in range(len(many)):
        c = sealapi.Ciphertext(ctx)
        encryptor.encrypt(pmany[idx], c)
        cmany.append(c)

    evaluator.multiply_many(cmany, relin_keys, cout)

    out = sealapi.Plaintext()
    decryptor.decrypt(cout, out)
    out = helper_decode(scheme, ctx, out)

    is_close_enough(out[: len(many[0])], expected)


@pytest.mark.parametrize(
    "scheme, ctx", [(sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),],
)
@pytest.mark.parametrize(
    "left, right",
    [
        ([10, 100, 500, 600], [5, 50, 100, 500]),
        ([2 * i for i in range(200)], [5 * i for i in range(200)]),
    ],
)
def test_evaluator_relin(scheme, ctx, left, right):
    evaluator, encryptor, decryptor, relin_keys = helper_generate_evaluator(ctx)

    expected = [left[idx] * right[idx] for idx in range(len(left))]

    # relin inplace
    cleft = sealapi.Ciphertext(ctx)
    cright = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    pright = helper_encode(scheme, ctx, right)

    encryptor.encrypt(pleft, cleft)
    encryptor.encrypt(pright, cright)

    evaluator.multiply_inplace(cleft, cright)
    assert cleft.size() > 2
    evaluator.relinearize_inplace(cleft, relin_keys)
    assert cleft.size() == 2

    out = sealapi.Plaintext()
    decryptor.decrypt(cleft, out)
    out = helper_decode(scheme, ctx, out)

    is_close_enough(out[: len(left)], expected)

    # relin
    cleft = sealapi.Ciphertext(ctx)
    cright = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    pright = helper_encode(scheme, ctx, right)

    encryptor.encrypt(pleft, cleft)
    encryptor.encrypt(pright, cright)

    evaluator.multiply_inplace(cleft, cright)
    assert cleft.size() > 2
    evaluator.relinearize(cleft, relin_keys, cout)
    assert cout.size() == 2

    out = sealapi.Plaintext()
    decryptor.decrypt(cout, out)
    out = helper_decode(scheme, ctx, out)

    is_close_enough(out[: len(left)], expected)


def test_evaluator_mod_switch():
    scheme = sealapi.SCHEME_TYPE.BFV
    parms = sealapi.EncryptionParameters(scheme)
    parms.set_poly_modulus_degree(128)
    parms.set_plain_modulus(1 << 6)
    coeff = sealapi.CoeffModulus.Create(128, [30, 30, 30])
    parms.set_coeff_modulus(coeff)
    ctx = sealapi.SEALContext.Create(parms, True, sealapi.SEC_LEVEL_TYPE.NONE)

    intenc = sealapi.IntegerEncoder(ctx)
    keygen = sealapi.KeyGenerator(ctx)
    public_key = keygen.public_key()
    secret_key = keygen.secret_key()

    decryptor = sealapi.Decryptor(ctx, secret_key)
    encryptor = sealapi.Encryptor(ctx, public_key)

    evaluator = sealapi.Evaluator(ctx)

    # cphertext mod switch to next
    expected_value = 1234
    plain = intenc.encode(expected_value)
    out = sealapi.Plaintext()
    enc = sealapi.Ciphertext(ctx)

    encryptor.encrypt(plain, enc)

    before = decryptor.invariant_noise_budget(enc)
    evaluator.mod_switch_to_next_inplace(enc)
    after = decryptor.invariant_noise_budget(enc)
    assert before > after
    decryptor.decrypt(enc, out)
    assert intenc.decode_int64(out) == expected_value

    # ciphertext mod switch to next
    plain = intenc.encode(expected_value)
    out = sealapi.Plaintext()
    enc = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    encryptor.encrypt(plain, enc)

    before = decryptor.invariant_noise_budget(enc)
    evaluator.mod_switch_to_next(enc, cout)
    after = decryptor.invariant_noise_budget(cout)
    assert before > after
    decryptor.decrypt(cout, out)
    assert intenc.decode_int64(out) == expected_value

    # cphertext mod switch to inplace
    parms_id = ctx.last_parms_id()
    plain = intenc.encode(expected_value)
    out = sealapi.Plaintext()
    enc = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    encryptor.encrypt(plain, enc)

    before = decryptor.invariant_noise_budget(enc)
    evaluator.mod_switch_to_inplace(enc, parms_id)
    after = decryptor.invariant_noise_budget(enc)
    assert before > after
    decryptor.decrypt(enc, out)
    assert intenc.decode_int64(out) == expected_value
    assert enc.parms_id() == parms_id

    # ciphertext mod switch to
    parms_id = ctx.last_parms_id()
    plain = intenc.encode(expected_value)
    out = sealapi.Plaintext()
    enc = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    encryptor.encrypt(plain, enc)

    before = decryptor.invariant_noise_budget(enc)
    evaluator.mod_switch_to(enc, parms_id, cout)
    after = decryptor.invariant_noise_budget(cout)
    assert before > after
    decryptor.decrypt(cout, out)
    assert intenc.decode_int64(out) == expected_value
    assert cout.parms_id() == parms_id

    pol_str = "1x^3 + 1x^1 + 3"
    # plaintext mod switch to next inplace
    plain = sealapi.Plaintext(pol_str)
    evaluator.transform_to_ntt_inplace(plain, ctx.first_parms_id())
    assert plain.is_ntt_form() is True
    evaluator.mod_switch_to_next_inplace(plain)
    assert plain.parms_id() != ctx.first_parms_id()

    # plaintext mod switch to next inplace failure
    plain = sealapi.Plaintext(pol_str)
    evaluator.transform_to_ntt_inplace(plain, ctx.last_parms_id())
    assert plain.is_ntt_form() is True
    with pytest.raises(BaseException):
        evaluator.mod_switch_to_next_inplace(plain)

    # plaintext mod switch to inplace
    plain = sealapi.Plaintext(pol_str)
    evaluator.transform_to_ntt_inplace(plain, ctx.first_parms_id())
    assert plain.is_ntt_form() is True
    evaluator.mod_switch_to_inplace(plain, ctx.last_parms_id())
    assert plain.parms_id() == ctx.last_parms_id()

    # plaintext mod switch to next
    plain = sealapi.Plaintext(pol_str)
    plain_out = sealapi.Plaintext()

    evaluator.transform_to_ntt(plain, ctx.first_parms_id(), plain_out)
    assert plain_out.is_ntt_form() is True

    plain_next = sealapi.Plaintext()
    evaluator.mod_switch_to_next(plain_out, plain_next)
    assert plain_out.parms_id() == ctx.first_parms_id()
    assert plain_next.parms_id() != ctx.first_parms_id()

    # plaintext mod switch to
    plain = sealapi.Plaintext(pol_str)
    plain_out = sealapi.Plaintext()

    evaluator.transform_to_ntt(plain, ctx.first_parms_id(), plain_out)
    assert plain_out.is_ntt_form() is True

    plain_next = sealapi.Plaintext()
    evaluator.mod_switch_to(plain_out, ctx.last_parms_id(), plain_next)
    assert plain_out.parms_id() == ctx.first_parms_id()
    assert plain_next.parms_id() == ctx.last_parms_id()


@pytest.mark.parametrize(
    "scheme, ctx", [(sealapi.SCHEME_TYPE.CKKS, helper_context_ckks(8192)),],
)
@pytest.mark.parametrize(
    "left", [[10, 100, 500, 600], [i for i in range(200)],],
)
def test_evaluator_rescale(scheme, ctx, left):
    evaluator, encryptor, _, relin_keys = helper_generate_evaluator(ctx)

    # cipher rescale to next in place
    cleft = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    encryptor.encrypt(pleft, cleft)
    evaluator.square(cleft, cout)
    evaluator.relinearize_inplace(cout, relin_keys)

    before = cout.scale
    evaluator.rescale_to_next_inplace(cout)
    after = cout.scale

    assert after < before

    # cipher rescale to next
    cleft = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)
    cfinal = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    encryptor.encrypt(pleft, cleft)
    evaluator.square(cleft, cout)
    evaluator.relinearize_inplace(cout, relin_keys)

    before = cout.scale
    evaluator.rescale_to_next(cout, cfinal)
    after = cfinal.scale

    assert after < before

    # cipher rescale to last in place
    cleft = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    encryptor.encrypt(pleft, cleft)
    evaluator.square(cleft, cout)
    evaluator.relinearize_inplace(cout, relin_keys)

    before = cout.scale
    evaluator.rescale_to_inplace(cout, ctx.last_parms_id())
    after = cout.scale

    assert after < before

    # cipher rescale to last
    cleft = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)
    cfinal = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    encryptor.encrypt(pleft, cleft)
    evaluator.square(cleft, cout)
    evaluator.relinearize_inplace(cout, relin_keys)

    before = cout.scale
    evaluator.rescale_to(cout, ctx.last_parms_id(), cfinal)
    after = cfinal.scale

    assert after < before


@pytest.mark.parametrize(
    "scheme, ctx",
    [
        (sealapi.SCHEME_TYPE.BFV, helper_context_bfv(8192)),
        # CKKS already in NTT form
    ],
)
@pytest.mark.parametrize(
    "left", [[10, 100, 500, 600], [i for i in range(200)],],
)
def test_evaluator_transform_ntt(scheme, ctx, left):
    evaluator, encryptor, _, _ = helper_generate_evaluator(ctx)

    # cipher transform ntt inplace
    cleft = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    encryptor.encrypt(pleft, cleft)

    assert cleft.is_ntt_form() is False
    evaluator.transform_to_ntt_inplace(cleft)
    assert cleft.is_ntt_form() is True
    evaluator.transform_from_ntt_inplace(cleft)
    assert cleft.is_ntt_form() is False

    # cipher transform ntt
    cleft = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)
    cfinal = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, left)
    encryptor.encrypt(pleft, cleft)

    assert cleft.is_ntt_form() is False
    evaluator.transform_to_ntt(cleft, cout)
    assert cout.is_ntt_form() is True
    evaluator.transform_from_ntt(cout, cfinal)
    assert cfinal.is_ntt_form() is False


def test_evaluator_galois():
    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    parms.set_poly_modulus_degree(8)
    parms.set_plain_modulus(257)
    coeff = sealapi.CoeffModulus.Create(8, [40, 40])
    parms.set_coeff_modulus(coeff)
    ctx = sealapi.SEALContext.Create(parms, False, sealapi.SEC_LEVEL_TYPE.NONE)

    keygen = sealapi.KeyGenerator(ctx)
    public_key = keygen.public_key()
    secret_key = keygen.secret_key()
    galois_keys = keygen.galois_keys_local([1, 3, 5])

    decryptor = sealapi.Decryptor(ctx, secret_key)
    encryptor = sealapi.Encryptor(ctx, public_key)

    evaluator = sealapi.Evaluator(ctx)

    plain = sealapi.Plaintext("1x^2")
    encrypted = sealapi.Ciphertext(ctx)
    encryptor.encrypt(plain, encrypted)
    evaluator.apply_galois_inplace(encrypted, 1, galois_keys)
    decryptor.decrypt(encrypted, plain)
    assert plain.to_string() == "1x^2"

    out = sealapi.Ciphertext(ctx)
    evaluator.apply_galois(encrypted, 3, galois_keys, out)
    decryptor.decrypt(out, plain)
    assert plain.to_string() == "1x^6"


def test_evaluator_rotate_bfv():
    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.BFV)
    parms.set_poly_modulus_degree(8)
    parms.set_plain_modulus(257)

    coeff = sealapi.CoeffModulus.Create(8, [40, 40])
    parms.set_coeff_modulus(coeff)
    ctx = sealapi.SEALContext.Create(parms, False, sealapi.SEC_LEVEL_TYPE.NONE)

    keygen = sealapi.KeyGenerator(ctx)
    galois_keys = keygen.galois_keys_local()

    decryptor = sealapi.Decryptor(ctx, keygen.secret_key())
    encryptor = sealapi.Encryptor(ctx, keygen.public_key())

    evaluator = sealapi.Evaluator(ctx)
    encoder = sealapi.BatchEncoder(ctx)

    testcase = [1, 2, 3, 4, 5, 6, 7, 8]
    # Input
    # 1, 2, 3, 4,
    # 5, 6, 7, 8

    plain = sealapi.Plaintext()
    encoder.encode(testcase, plain)

    encrypted = sealapi.Ciphertext(ctx)
    encryptor.encrypt(plain, encrypted)

    evaluator.rotate_columns_inplace(encrypted, galois_keys)
    decryptor.decrypt(encrypted, plain)
    # Rotate columns
    # 5, 6, 7, 8,
    # 1, 2, 3, 4

    assert encoder.decode_int64(plain) == [5, 6, 7, 8, 1, 2, 3, 4]

    evaluator.rotate_rows_inplace(encrypted, -1, galois_keys)
    decryptor.decrypt(encrypted, plain)
    # Shift rows -1
    # 8, 5, 6, 7,
    # 4, 1, 2, 3,
    assert encoder.decode_int64(plain) == [8, 5, 6, 7, 4, 1, 2, 3]

    cout = sealapi.Ciphertext(ctx)
    evaluator.rotate_rows(encrypted, 2, galois_keys, cout)
    decryptor.decrypt(cout, plain)
    # Shift rows +2
    # 6, 7, 8, 5,
    # 2, 3, 4, 1,
    assert encoder.decode_int64(plain) == [6, 7, 8, 5, 2, 3, 4, 1]

    evaluator.rotate_columns(cout, galois_keys, encrypted)
    decryptor.decrypt(encrypted, plain)
    # Rotate columns
    # 2, 3, 4, 1,
    # 6, 7, 8, 5,
    assert encoder.decode_int64(plain) == [2, 3, 4, 1, 6, 7, 8, 5]


def test_evaluator_rotate_vector():
    testcase = [complex(i, i) for i in range(4)]

    slot_size = len(testcase)
    delta = 1 << 30

    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.CKKS)
    poly_modulus = 2 * slot_size
    parms.set_poly_modulus_degree(poly_modulus)
    parms.set_plain_modulus(0)

    coeff = sealapi.CoeffModulus.Create(poly_modulus, [40, 40, 40, 40])
    parms.set_coeff_modulus(coeff)
    ctx = sealapi.SEALContext.Create(parms, False, sealapi.SEC_LEVEL_TYPE.NONE)

    ctx = helper_context_ckks()

    keygen = sealapi.KeyGenerator(ctx)
    galois_keys = keygen.galois_keys_local()

    decryptor = sealapi.Decryptor(ctx, keygen.secret_key())
    encryptor = sealapi.Encryptor(ctx, keygen.public_key())

    evaluator = sealapi.Evaluator(ctx)
    encoder = sealapi.CKKSEncoder(ctx)

    plain = sealapi.Plaintext()
    encoder.encode(testcase, ctx.first_parms_id(), delta, plain)

    encrypted = sealapi.Ciphertext(ctx)
    encryptor.encrypt(plain, encrypted)

    # inplace
    steps = 1
    evaluator.rotate_vector_inplace(encrypted, steps, galois_keys)
    decryptor.decrypt(encrypted, plain)

    decoded = encoder.decode_complex(plain)[:slot_size]

    for idx in range(slot_size):
        off = (idx + steps) % slot_size
        assert abs(testcase[off].real - decoded[idx].real) < 0.1
        assert abs(testcase[off].imag - decoded[idx].imag) < 0.1

    # to another ciphertext
    steps = -steps
    out = sealapi.Ciphertext(ctx)
    evaluator.rotate_vector(encrypted, steps, galois_keys, out)
    decryptor.decrypt(out, plain)

    decoded = encoder.decode_complex(plain)[:slot_size]

    for idx in range(slot_size):
        assert abs(testcase[idx].real - decoded[idx].real) < 0.1
        assert abs(testcase[idx].imag - decoded[idx].imag) < 0.1


def test_evaluator_conjugate():
    testcase = [complex(i, i) for i in range(32)]

    slot_size = len(testcase)
    delta = 1 << 30

    parms = sealapi.EncryptionParameters(sealapi.SCHEME_TYPE.CKKS)
    poly_modulus = 2 * slot_size
    parms.set_poly_modulus_degree(poly_modulus)
    parms.set_plain_modulus(0)

    coeff = sealapi.CoeffModulus.Create(poly_modulus, [40, 40, 40, 40])
    parms.set_coeff_modulus(coeff)
    ctx = sealapi.SEALContext.Create(parms, False, sealapi.SEC_LEVEL_TYPE.NONE)

    ctx = helper_context_ckks()

    keygen = sealapi.KeyGenerator(ctx)
    galois_keys = keygen.galois_keys_local()

    decryptor = sealapi.Decryptor(ctx, keygen.secret_key())
    encryptor = sealapi.Encryptor(ctx, keygen.public_key())

    evaluator = sealapi.Evaluator(ctx)
    encoder = sealapi.CKKSEncoder(ctx)

    plain = sealapi.Plaintext()
    encoder.encode(testcase, ctx.first_parms_id(), delta, plain)

    encrypted = sealapi.Ciphertext(ctx)
    encryptor.encrypt(plain, encrypted)

    evaluator.complex_conjugate_inplace(encrypted, galois_keys)
    decryptor.decrypt(encrypted, plain)

    decoded = encoder.decode_complex(plain)[:slot_size]

    for idx in range(slot_size):
        assert abs(testcase[idx].real - decoded[idx].real) < 0.1
        assert abs(testcase[idx].imag + decoded[idx].imag) < 0.1

    out = sealapi.Ciphertext(ctx)
    evaluator.complex_conjugate(encrypted, galois_keys, out)
    decryptor.decrypt(out, plain)

    decoded = encoder.decode_complex(plain)[:slot_size]

    for idx in range(slot_size):
        assert abs(testcase[idx].real - decoded[idx].real) < 0.1
        assert abs(testcase[idx].imag - decoded[idx].imag) < 0.1
