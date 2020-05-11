import pytest
import tenseal as ts


def gen_values(sz):
    return [i for i in range(sz)], [-(i ** 2) for i in range(sz)]


def bfv_naive_test():
    ctx = ts.context(ts.SCHEME_TYPE.BFV, 4096, 1024)
    l, r = gen_values(200)
    return ts.bfv_naive_vector(ctx, l), ts.bfv_naive_vector(ctx, r)


def bfv_test():
    ctx = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    l, r = gen_values(200)
    return ts.bfv_vector(ctx, l), ts.bfv_vector(ctx, r)


def ckks_test():
    ctx = ts.context(ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60])
    l, r = gen_values(200)
    scale = 2 ** 40
    return ts.ckks_vector(ctx, scale, l), ts.ckks_vector(ctx, scale, r)


def helper_perf_add(generator):
    left, right = generator()
    result = left + right
    decrypted_result = result.decrypt()


def helper_perf_multiply(generator):
    left, right = generator()
    result = left * right
    decrypted_result = result.decrypt()


@pytest.mark.parametrize("generator", [bfv_naive_test, bfv_test, ckks_test,])
def test_perf_add(generator, benchmark):
    benchmark(helper_perf_add, generator)


@pytest.mark.parametrize("generator", [bfv_naive_test, bfv_test, ckks_test,])
def test_perf_multiply(generator, benchmark):
    benchmark(helper_perf_multiply, generator)
