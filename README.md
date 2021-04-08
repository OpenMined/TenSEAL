
![logo](https://github.com/OpenMined/design-assets/blob/master/logos/OM/horizontal-primary-trans.png)

[![Tests](https://github.com/OpenMined/TenSEAL/workflows/Tests/badge.svg)](https://github.com/OpenMined/TenSEAL/actions?query=branch%3Amaster++)
[![Linux Package](https://github.com/OpenMined/TenSEAL/workflows/Linux%20Package/badge.svg)](https://github.com/OpenMined/TenSEAL/actions/workflows/pythonpublish-linux.yml)
[![MacOS Package](https://github.com/OpenMined/TenSEAL/workflows/MacOS%20Package/badge.svg)](https://github.com/OpenMined/TenSEAL/actions/workflows/pythonpublish-macos.yml)
[![Windows Package](https://github.com/OpenMined/TenSEAL/workflows/Windows%20Package/badge.svg)](https://github.com/OpenMined/TenSEAL/actions/workflows/pythonpublish-windows.yml)
[![Docker Image](https://github.com/OpenMined/TenSEAL/workflows/Docker%20Image/badge.svg)](https://github.com/OpenMined/TenSEAL/actions/workflows/docker-image.yml)


[![Downloads](https://img.shields.io/pypi/dd/tenseal)](https://pypi.org/project/tenseal/)
[![Version](https://img.shields.io/pypi/v/tenseal)](https://pypi.org/project/tenseal/)
![OpenCollective](https://img.shields.io/opencollective/all/openmined)
[![Slack](https://img.shields.io/badge/chat-on%20slack-7A5979.svg)](https://openmined.slack.com/messages/support)
# TenSEAL

TenSEAL is a library for doing homomorphic encryption operations on tensors, built on top of [Microsoft SEAL](https://github.com/Microsoft/SEAL). It provides ease of use through a Python API, while preserving efficiency by implementing most of its operations using C++.

## Features

- :key: Encryption/Decryption of vectors of integers using BFV
- :old_key: Encryption/Decryption of vectors of real numbers using CKKS
- :fire: Element-wise addition, substraction and multiplication of encrypted-encrypted vectors and encrypted-plain vectors
- :cyclone: Dot product and vector-matrix multiplication
- :zap: Complete SEAL API under `tenseal.sealapi`

## Usage

We show the basic operations over encrypted data, more advanced usage for machine learning applications can be found on our [tutorial section](#tutorials)

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

#### Using pip

```bash
$ pip install tenseal
```
This installs the last packaged version on [pypi](https://pypi.org/project/tenseal/). If your platform doesn't have a ready package, please open an [issue](https://github.com/OpenMined/TenSEAL/issues) to let us know.

#### Build from Source

Supported platforms and their requirements are listed below: (this are only required for building TenSEAL from source)
- **Linux:** A modern version of GNU G++ (>= 6.0) or Clang++ (>= 5.0).
- **MacOS:** Xcode toolchain (>= 9.3)
- **Windows:** Microsoft Visual Studio (>= 10.0.40219.1, Visual Studio 2010 SP1 or later).

If you want to install tenseal from the repository, you should first make sure to have the requirements for your platform (listed above) and [CMake (3.12 or higher)](https://cmake.org/install/) installed, then get the third party libraries (if you didn't already) by running the following command from the root directory of the project

```bash
$ git submodule init
$ git submodule update
```

TenSEAL uses [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/downloads) for serialization, and you will need the protocol buffer compiler too.


If you are on Windows, you will first need to build SEAL library using Visual Studio, you should use the solution file `SEAL.sln` in `third_party/SEAL` to build the project `native\src\SEAL.vcxproj` with `Configuration=Release` and `Platform=x64`. For more details check the instructions in [Building Microsoft SEAL](https://github.com/microsoft/SEAL#windows)

You can then trigger the build and the installation

```bash
$ pip install .
```

#### Use Docker

You can use our [Docker image](https://hub.docker.com/r/openmined/tenseal) for a ready to use environment with TenSEAL installed

```bash
$ docker container run --interactive --tty openmined/tenseal
```

**Note:** `openmined/tenseal` points to the image from the last release, use `openmined/tenseal:dev` for the image built from the master branch.


You can also build your custom image, this might be handy for developers working on the project

```bash
$ docker build -t tenseal -f docker-images/Dockerfile-py38 .
```

To interactively run this docker image as a container after it has been built you can run

```bash
$ docker container run -it tenseal
```

#### Using Bazel
To use this library in another Bazel project, add the following in your WORKSPACE file:

```load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
   name = "org_openmined_tenseal",
   remote = "https://github.com/OpenMined/TenSEAL",
   branch = "master",
   init_submodules = True,
)

load("@org_openmined_tenseal//tenseal:preload.bzl", "tenseal_preload")

tenseal_preload()

load("@org_openmined_tenseal//tenseal:deps.bzl", "tenseal_deps")

tenseal_deps()
```

## Benchmarks

You can benchmark the implementation at any point by running

```bash
$ bazel run -c opt --spawn_strategy=standalone //tests/cpp/benchmarks:benchmark
```

## Tutorials

- [Getting Started](tutorials%2FTutorial%200%20-%20Getting%20Started.ipynb)
- [Tutorial 1 - Training and Evaluation of Logistic Regression on Encrypted Data](tutorials%2FTutorial%201%20-%20Training%20and%20Evaluation%20of%20Logistic%20Regression%20on%20Encrypted%20Data.ipynb)
- [Tutorial 2 - Working with Approximate Numbers](tutorials%2FTutorial%202%20-%20Working%20with%20Approximate%20Numbers.ipynb)
- [Tutorial 3 - Benchmarks](tutorials%2FTutorial%203%20-%20Benchmarks.ipynb)
- [Tutorial 4 - Encrypted Convolution on MNIST](tutorials%2FTutorial%204%20-%20Encrypted%20Convolution%20on%20MNIST.ipynb)

## Support

For support in using this library, please join the **#support** Slack channel. [Click here to join our Slack community!](https://slack.openmined.org)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache License 2.0](https://github.com/OpenMined/TenSEAL/blob/master/LICENSE)
