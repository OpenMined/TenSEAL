import sys, os
import pytest
import tenseal.sealapi as sealapi

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from utils import *


def test_scale_manually():
    scheme = sealapi.SCHEME_TYPE.CKKS
    ctx = helper_context_ckks(8192)

    evaluator, encryptor, decryptor, _ = helper_generate_evaluator(ctx)

    cleft = sealapi.Ciphertext(ctx)
    cright = sealapi.Ciphertext(ctx)
    cout = sealapi.Ciphertext(ctx)

    pleft = helper_encode(scheme, ctx, [2, 3])
    pright = helper_encode(scheme, ctx, [5, 7])

    encryptor.encrypt(pleft, cleft)
    encryptor.encrypt(pright, cright)

    evaluator.multiply(cleft, cright, cout)
    evaluator.rescale_to_next_inplace(cout)
    evaluator.mod_switch_to_inplace(pright, cout.parms_id())

    cout.scale = pright.scale

    evaluator.add_plain_inplace(cout, pright)

    out = sealapi.Plaintext()
    decryptor.decrypt(cout, out)
    out = helper_decode(scheme, ctx, out)

    is_close_enough(out[:2], [15, 28])
