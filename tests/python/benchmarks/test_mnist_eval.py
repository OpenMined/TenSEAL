import pytest
import tenseal as ts
import pickle
import os
from torchvision import transforms
from random import randint
from PIL import Image
from typing import Dict
from pathlib import Path

rounds = 5
iterations = 10


root_path = Path(os.path.dirname(os.path.realpath(__file__))).parents[2] / "tutorials"


def create_ctx():
    poly_mod_degree = 8192
    coeff_mod_bit_sizes = [40, 21, 21, 21, 21, 21, 21, 40]
    ctx = ts.context(ts.SCHEME_TYPE.CKKS, poly_mod_degree, -1, coeff_mod_bit_sizes)
    ctx.global_scale = 2 ** 21
    ctx.generate_galois_keys()
    return ctx


# Sample an image
def load_input():
    transform = transforms.Compose(
        [transforms.ToTensor(), transforms.Normalize((0.1307,), (0.3081,))]
    )
    idx = randint(1, 5)
    img_name = root_path / "data/mnist-samples/img_{}.jpg".format(idx)
    img = Image.open(img_name)
    return transform(img).view(28, 28).tolist(), img


# Helper for encoding the image
def prepare_input(ctx, plain_input):
    enc_input, windows_nb = ts.im2col_encoding(ctx, plain_input, 7, 7, 3)
    assert windows_nb == 64
    return enc_input


class ConvMNIST:
    """CNN for classifying MNIST data.
    Input should be an encoded 28x28 matrix representing the image.
    TenSEAL can be used for encoding `tenseal.im2col_encoding(ctx, input_matrix, 7, 7, 3)`
    The input should also be normalized with a mean=0.1307 and an std=0.3081 before encryption.
    """

    def __init__(self, parameters: Dict[str, list]):
        self.conv1_weight = parameters["conv1_weight"]
        self.conv1_bias = parameters["conv1_bias"]
        self.fc1_weight = parameters["fc1_weight"]
        self.fc1_bias = parameters["fc1_bias"]
        self.fc2_weight = parameters["fc2_weight"]
        self.fc2_bias = parameters["fc2_bias"]
        self.windows_nb = parameters["windows_nb"]

    def forward(self, enc_x: ts.CKKSVector) -> ts.CKKSVector:
        # conv layer
        channels = []
        for kernel, bias in zip(self.conv1_weight, self.conv1_bias):
            y = enc_x.conv2d_im2col(kernel, self.windows_nb) + bias
            channels.append(y)
        out = ts.CKKSVector.pack_vectors(channels)
        # squaring
        out.square_()
        # no need to flat
        # fc1 layer
        out = out.mm_(self.fc1_weight) + self.fc1_bias
        # squaring
        out.square_()
        # output layer
        out = out.mm_(self.fc2_weight) + self.fc2_bias
        return out

    def __call__(self, *args, **kwargs):
        return self.forward(*args, **kwargs)


def load_parameters(file_path: str) -> dict:
    try:
        parameters = pickle.load(open(file_path, "rb"))
        print(f"Model loaded from '{file_path}'")
    except OSError as ose:
        print("error", ose)
        raise ose
    return parameters


@pytest.mark.parametrize("batch_size", [1])
def test_perf_mnist_prepare(benchmark, batch_size):
    context = create_ctx()
    image, orig = load_input()

    def op():
        return prepare_input(context, image)

    benchmark.pedantic(
        op, rounds=rounds, iterations=iterations,
    )


@pytest.mark.parametrize("batch_size", [1])
def test_perf_mnist_eval(benchmark, batch_size):

    parameters = load_parameters(root_path / "parameters/ConvMNIST-0.1.pickle")
    model = ConvMNIST(parameters)

    context = create_ctx()
    image, orig = load_input()
    encrypted_image = prepare_input(context, image)

    def op():
        model(encrypted_image)

    benchmark.pedantic(
        op, rounds=rounds, iterations=iterations,
    )
