
<h1 align="center">
  <br>
  <a href="https://www.openmined.org/"><img src="https://github.com/OpenMined/design-assets/raw/master/logos/OM/mark-primary-trans.png" alt="TenSEAL" width="200"></a>
  <br>
  TenSEAL
  <br>
</h1>

<h3 align="center">
  <br>
  A library for doing homomorphic encryption operations on tensors
  <br>
</h3>

<div align="center">

[![Tests](https://github.com/OpenMined/TenSEAL/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/OpenMined/TenSEAL/actions/workflows/tests.yml?query=branch%3Amain)
[![Benchmarks](https://github.com/OpenMined/TenSEAL/actions/workflows/benchmarks.yml/badge.svg?branch=main)](https://github.com/OpenMined/TenSEAL/actions/workflows/benchmarks.yml?query=branch%3Amain)

[![Downloads](https://img.shields.io/pypi/dd/tenseal)](https://pypi.org/project/tenseal/)
[![Version](https://img.shields.io/pypi/v/tenseal)](https://pypi.org/project/tenseal/)
[![Python versions](https://img.shields.io/pypi/pyversions/tenseal)](https://pypi.org/project/tenseal/)
[![OpenCollective](https://img.shields.io/opencollective/all/openmined)](https://opencollective.com/openmined)
[![Slack](https://img.shields.io/badge/chat-on%20slack-7A5979.svg)](https://openmined.slack.com/messages/support)


</div>

TenSEAL is a library for doing homomorphic encryption operations on tensors, built on top of [Microsoft SEAL](https://github.com/Microsoft/SEAL). It provides ease of use through a Python API, while preserving efficiency by implementing most of its operations using C++.

## Features

- :key: Encryption/Decryption of vectors of integers using BFV
- :old_key: Encryption/Decryption of vectors of real numbers using CKKS
- :fire: Element-wise addition, subtraction and multiplication of encrypted-encrypted vectors and encrypted-plain vectors
- :cyclone: Dot product and vector-matrix multiplication
- :bar_chart: N-dimensional encrypted tensors (`CKKSTensor`, `BFVTensor`) with reshape, broadcast and transpose
- :floppy_disk: Serialization of contexts, keys and encrypted tensors
- :zap: Complete SEAL API under `tenseal.sealapi`

## Usage

We show the basic operations over encrypted data, more advanced usage for machine learning applications can be found on our [tutorial section](#tutorials)

TenSEAL is a binding over Microsoft SEAL plus a tensor layer on top, so the encryption parameters below (`poly_modulus_degree`, `coeff_mod_bit_sizes`, `global_scale`) carry exactly their SEAL meaning. Choosing them determines both the security level and how many operations you can chain before the noise budget is exhausted — see the [SEAL documentation](https://github.com/microsoft/SEAL#getting-started) and its [CKKS examples](https://github.com/microsoft/SEAL/blob/main/native/examples/5_ckks_basics.cpp) for what the values mean and how to pick them.

```python
import tenseal as ts

# Setup TenSEAL context
context = ts.context(
            ts.SCHEME_TYPE.CKKS,
            poly_modulus_degree=8192,
            coeff_mod_bit_sizes=[60, 40, 40, 60]
          )
context.generate_galois_keys()
context.global_scale = 2**40

v1 = [0, 1, 2, 3, 4]
v2 = [4, 3, 2, 1, 0]

# encrypted vectors
enc_v1 = ts.ckks_vector(context, v1)
enc_v2 = ts.ckks_vector(context, v2)

result = enc_v1 + enc_v2
result.decrypt() # ~ [4, 4, 4, 4, 4]

result = enc_v1.dot(enc_v2)
result.decrypt() # ~ [10]

matrix = [
  [73, 0.5, 8],
  [81, -5, 66],
  [-100, -78, -2],
  [0, 9, 17],
  [69, 11 , 10],
]
result = enc_v1.matmul(matrix)
result.decrypt() # ~ [157, -90, 153]
```

## Installation

TenSEAL requires **Python 3.11 or newer** and depends on [NumPy](https://numpy.org/).

#### Using pip

```bash
pip install tenseal
```

Prebuilt wheels are published for every supported Python version on:

| Platform | Wheel |
| --- | --- |
| Linux (x86-64) | `manylinux_2_28_x86_64` |
| macOS (Apple Silicon) | `macosx_14_0_arm64` |
| Windows (x64) | `win_amd64` |

A source distribution is published as well, so `pip install tenseal` also works on platforms without a prebuilt wheel — it will compile from source, which needs the build requirements listed below. If your platform is missing a wheel you would like us to publish, please open an [issue](https://github.com/OpenMined/TenSEAL/issues).

To check that the installation worked:

```python
import tenseal as ts
print(ts.__version__)
```

#### Using a specific Python version

If your Python is older than 3.11, or you would rather leave your system Python alone, [uv](https://docs.astral.sh/uv/getting-started/installation/) can download a Python for you and keep TenSEAL in its own environment.

Create an environment and install into it:

```bash
uv venv --python 3.13
source .venv/bin/activate        # Windows: .venv\Scripts\activate
uv pip install tenseal
```

Or start a one-off Python session without setting anything up — uv fetches Python 3.13 and TenSEAL, and discards the environment afterwards:

```bash
uv run --python 3.13 --with tenseal python
```

Replace `3.13` with any version from 3.11 to 3.14.

#### Using conda

TenSEAL is not published on conda-forge, so install it with pip inside the environment:

```bash
conda create -n tenseal python=3.13
conda activate tenseal
pip install tenseal
```

#### Build from Source

Building requires a C++17 toolchain and [CMake](https://cmake.org/install/) 3.14 or newer:

- **Linux:** GCC >= 7 or Clang >= 5
- **macOS:** Xcode 15.x command line tools
- **Windows:** Visual Studio 2017 or newer

All third-party dependencies — including Microsoft SEAL and Protocol Buffers — are fetched and built automatically by CMake. There is nothing to install by hand and no submodules to initialise.

```bash
pip install .
```

> **Note:** with CMake 4.0 or newer the build fails with `Compatibility with CMake < 3.5 has been removed`, because some vendored dependencies still declare a pre-3.5 minimum. Until those are upgraded, set `CMAKE_POLICY_VERSION_MINIMUM=3.5` in your environment before building.

> **Note:** on macOS, AppleClang 17 and newer (Xcode 16+) currently fail to compile the vendored xtensor. Use Xcode 15.x, or install the published wheel instead.

#### Use Docker

> **TODO:** the images on [Docker Hub](https://hub.docker.com/r/openmined/tenseal) are unmaintained — the newest was published in 2021 for v0.3.4, and both `openmined/tenseal` and `openmined/tenseal:dev` are far behind the current release. The `docker-images/` directory targets Python 3.6–3.9, all of which are end-of-life and below the supported minimum. Do not rely on these images. Refreshing or retiring them is tracked as future work.

#### Using Bazel

> **TODO:** the Bazel build is currently broken and its workflow runs on demand only. Its dependency pins have drifted from the CMake build, and it has not been migrated to bzlmod. Use the CMake build (`pip install .`) in the meantime. Restoring Bazel support is tracked as future work.

## Benchmarks

Benchmark results from every merge to `main` are published [on GitHub Pages](https://openmined.github.io/TenSEAL/benchmarks/), for Linux, macOS and Windows.

The benchmark suite runs with pytest:

```bash
pytest tests/python/benchmarks/
```

> **TODO:** the C++ microbenchmarks under `tests/cpp/benchmarks/` are only wired up through Bazel, so they cannot currently be run. See the Bazel note above.

## Tutorials

- [Getting Started](tutorials%2FTutorial%200%20-%20Getting%20Started.ipynb)
- [Tutorial 1 - Training and Evaluation of Logistic Regression on Encrypted Data](tutorials%2FTutorial%201%20-%20Training%20and%20Evaluation%20of%20Logistic%20Regression%20on%20Encrypted%20Data.ipynb)
- [Tutorial 2 - Working with Approximate Numbers](tutorials%2FTutorial%202%20-%20Working%20with%20Approximate%20Numbers.ipynb)
- [Tutorial 3 - Benchmarks](tutorials%2FTutorial%203%20-%20Benchmarks.ipynb)
- [Tutorial 4 - Encrypted Convolution on MNIST](tutorials%2FTutorial%204%20-%20Encrypted%20Convolution%20on%20MNIST.ipynb)

## Publications

A. Benaissa, B. Retiat, B. Cebere, A.E. Belfedhal, ["TenSEAL: A Library for Encrypted Tensor Operations Using Homomorphic Encryption"](https://arxiv.org/abs/2104.03152), ICLR 2021 Workshop on Distributed and Private Machine Learning (DPML 2021).

```
@misc{tenseal2021,
    title={TenSEAL: A Library for Encrypted Tensor Operations Using Homomorphic Encryption},
    author={Ayoub Benaissa and Bilal Retiat and Bogdan Cebere and Alaa Eddine Belfedhal},
    year={2021},
    eprint={2104.03152},
    archivePrefix={arXiv},
    primaryClass={cs.CR}
}
```

## Support

For support in using this library, please join the **#support** Slack channel. [Click here to join our Slack community!](https://slack.openmined.org)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to set up a development environment, build the library, and run the tests. Please make sure to update tests as appropriate.

## License

[Apache License 2.0](LICENSE)
