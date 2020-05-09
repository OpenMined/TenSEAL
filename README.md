# TenSEAL

![Linux Package](https://github.com/OpenMined/TenSEAL/workflows/Linux%20Package/badge.svg)
![MacOS Package](https://github.com/OpenMined/TenSEAL/workflows/MacOS%20Package/badge.svg)
![Tests](https://github.com/OpenMined/TenSEAL/workflows/Tests/badge.svg)
![Update Docker Image](https://github.com/OpenMined/TenSEAL/workflows/Update%20Docker%20Image/badge.svg)

TenSEAL is a library for doing homomorphic encryption operations on tensors, built on top of [Microsoft SEAL](https://github.com/Microsoft/SEAL). It provides ease of use through a Python API, while preserving efficiency by implementing most of its operations using C++.

## Features

- Encryption/Decryption of vectors of integers using BFV
- Encryption/Decryption of vectors of real numbers using CKKS
- Element-wise addition, substraction and multiplication of encrypted-encrypted vectors and encrypted-plain vectors
- Complete SEAL API under `tenseal.sealapi`

## Installation

#### Using pip

```bash
$ pip install tenseal
```
This installs the last packaged version on [pypi](https://pypi.org/project/tenseal/). If your platform doesn't have a ready package, please open an [issue](https://github.com/OpenMined/TenSEAL/issues) to let us know.

#### Build from Source

Supported platforms and their requirements are listed below: (this are only required for building TenSEAL from source)
- **Linux:** A modern version of GNU G++ (>= 6.0) or Clang++ (>= 5.0).
- **macOS:** Xcode toolchain (>= 9.3)
- **Windows:** Not supported yet, please use our [Docker image](#use-docker).

If you want to install tenseal from the repository, you should first make sure to have the requirements for your platform (listed above) and [CMake (3.12 or higher)](https://cmake.org/install/) installed, then get the third party libraries (if you didn't already) by running the following command from the root directory of the project

```bash
$ git submodule init
$ git submodule update
```

You can then trigger the build and the installation

```bash
$ pip install .
```

### Use Docker

You can use our [Docker image](https://hub.docker.com/r/openmined/tenseal) for a ready to use environment with TenSEAL installed

```bash
$ docker container run --interactive --tty openmined/tenseal
```

You can also build your custom image, this might be handy for developers working on the project

```bash
$ docker image build --tag tenseal .
```

## Tutorials

- [Getting Started](tutorials%2FTutorial%200%20-%20Getting%20Started.ipynb)

## License

[Apache License 2.0](https://github.com/OpenMined/TenSEAL/blob/master/LICENSE)
