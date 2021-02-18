import pytest
import tenseal as ts
import numpy as np
import torch

rounds = 5
iterations = 10


def bfv_test(input_size):
    ctx = ts.context(ts.SCHEME_TYPE.BFV, 8192, 1032193)
    l, r = [i for i in range(input_size)], [i ** 2 for i in range(input_size)]
    return ts.bfv_vector(ctx, l), ts.bfv_vector(ctx, r)


def ckks_context(n_threads=None):
    ctx = ts.context(
        ts.SCHEME_TYPE.CKKS, 8192, coeff_mod_bit_sizes=[60, 40, 40, 60], n_threads=n_threads
    )
    ctx.generate_galois_keys()
    ctx.global_scale = 2 ** 40

    return ctx


def ckks_test(input_size, n_threads=None):
    ctx = ckks_context(n_threads)

    l, r = [np.random.randn(input_size), np.random.randn(input_size)]
    scale = 2 ** 40

    return ts.ckks_vector(ctx, l, scale), ts.ckks_vector(ctx, r, scale)


def helper_perf(op, left, right, opt=None):
    if op == "add":
        return left + right
    elif op == "multiply":
        return left * right
    elif op == "negate":
        return -left
    elif op == "square":
        return left ** 2
    elif op == "sub":
        return left - right
    elif op == "dot":
        return left.dot(right)
    elif op == "polyval":
        poly = [0, 1, 2]
        return left.polyval(poly)
    elif op == "matmul":
        return left @ right
    elif op == "enc_matmul":
        return left.enc_matmul_plain(right.tolist(), opt)
    else:
        raise Exception("unsupported op")


@pytest.mark.parametrize("op", ["add", "multiply"])
@pytest.mark.parametrize("generator", [bfv_test])
@pytest.mark.parametrize("input_size", [256, 1024, 4096, 8192, 16384])
def test_perf_bfv(op, generator, benchmark, input_size):
    left, right = generator(input_size)

    benchmark.pedantic(helper_perf, args=(op, left, right), rounds=rounds, iterations=iterations)


@pytest.mark.parametrize("op", ["add", "multiply", "negate", "square", "sub", "dot", "polyval"])
@pytest.mark.parametrize("generator", [ckks_test])
@pytest.mark.parametrize("input_size", [256, 1024, 4096, 8192, 16384])
def test_perf_ckks_ops(op, generator, benchmark, input_size):
    left, right = generator(input_size)

    benchmark.pedantic(helper_perf, args=(op, left, right), rounds=rounds, iterations=iterations)


@pytest.mark.parametrize("op", ["add", "multiply", "sub", "dot"])
@pytest.mark.parametrize("generator", [ckks_test])
@pytest.mark.parametrize("input_size", [256, 1024, 4096, 8192, 16384])
def test_perf_ckks_plain_ops(op, generator, benchmark, input_size):
    left, _ = generator(input_size)
    right = np.random.randn(input_size)

    benchmark.pedantic(helper_perf, args=(op, left, right), rounds=rounds, iterations=iterations)


def generate_input(matrix_shape, vector_size):
    # generated random values
    matrix = np.random.randn(*matrix_shape)
    vector = np.random.randn(vector_size)

    return matrix, vector


@pytest.mark.parametrize("matrix_shape", [[2, 1], [4, 2], [9, 7], [16, 12]])
def test_perf_ckks_matmul(benchmark, matrix_shape):
    ctx = ckks_context()
    vector_shape = matrix_shape[0]
    matrix, vec = generate_input(matrix_shape, vector_shape)
    ct = ts.ckks_vector(ctx, vec)

    benchmark.pedantic(
        helper_perf, args=("matmul", ct, matrix), rounds=rounds, iterations=iterations
    )


@pytest.mark.parametrize("matrix_shape", [[2, 1], [4, 2], [9, 7], [16, 12]])
def test_perf_ckks_enc_matmul(benchmark, matrix_shape):
    ctx = ckks_context()
    vector_shape = matrix_shape[-1]

    matrix, vec = generate_input(matrix_shape, vector_shape)

    ckks_vector = ts.enc_matmul_encoding(ctx, matrix.tolist())

    benchmark.pedantic(
        helper_perf,
        args=("enc_matmul", ckks_vector, vec, matrix_shape[0]),
        rounds=rounds,
        iterations=iterations,
    )


@pytest.mark.parametrize("image_shape", [[8, 8], [16, 16], [28, 28], [64, 64], [256, 256]])
def test_perf_ckks_im2col_encoding(benchmark, image_shape):
    ctx = ckks_context()
    img = np.random.randn(*image_shape)

    kernel_shape = [7, 7]
    stride = 3

    def op():
        x_enc, windows_nb = ts.im2col_encoding(
            ctx, img.reshape(image_shape).tolist(), kernel_shape[0], kernel_shape[1], stride
        )

    benchmark.pedantic(
        op, rounds=rounds, iterations=iterations,
    )


@pytest.mark.parametrize("image_shape", [[8, 8], [16, 16], [28, 28]])
def test_perf_ckks_conv_eval(benchmark, image_shape):
    ctx = ckks_context()
    img = np.random.randn(*image_shape)

    kernel_shape = [7, 7]
    stride = 3

    conv1 = torch.nn.Conv2d(1, 4, kernel_size=7, padding=0, stride=3)
    conv1_weight = conv1.weight.data.view(
        conv1.out_channels, conv1.kernel_size[0], conv1.kernel_size[1]
    ).tolist()
    conv1_bias = conv1.bias.data.tolist()

    x_enc, windows_nb = ts.im2col_encoding(
        ctx, img.reshape(image_shape).tolist(), kernel_shape[0], kernel_shape[1], stride
    )

    def op():
        enc_channels = []
        for kernel, bias in zip(conv1_weight, conv1_bias):
            y = x_enc.conv2d_im2col(kernel, windows_nb) + bias
            enc_channels.append(y)
        ts.CKKSVector.pack_vectors(enc_channels)

    benchmark.pedantic(
        op, rounds=rounds, iterations=iterations,
    )
