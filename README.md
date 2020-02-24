# TenSEAL

TenSEAL is a library for doing homomorphic encryption operations on tensors, built on top of [Microsoft SEAL](https://github.com/Microsoft/SEAL). It provides ease of use through a Python API, while preserving efficiency by implementing most of its operations using C++.

## Installation

```bash
$ pip install tenseal
```
This installs the last packaged version on [pypi](https://pypi.org/). If your platform doesn't have a ready package, please open an [issue](https://github.com/OpenMined/TenSEAL/issues) to let us know.

If you want to install tenseal from the repository, you should first make sure to have [CMake (3.12 or higher) installed](https://cmake.org/install/), then get the third party libraries (if you didn't already) by running the following command from the root directory of the project

```bash
$ git submodule init
$ git submodule update
```

You can then trigger the build and the installation

```bash
$ pip install .
```

### Use Docker

![Update Docker Image](https://github.com/OpenMined/TenSEAL/workflows/Update%20Docker%20Image/badge.svg)

You can use our [Docker image](https://hub.docker.com/r/openmined/tenseal) for a ready to use environment with TenSEAL installed

```bash
$ docker container run --interactive --tty openmined/tenseal
```

You can also build your custom image, this might be handy for developers working on the project

```bash
$ docker image build --tag tenseal .
```

## Tutorials

TODO

## License

[Apache License 2.0](https://github.com/OpenMined/TenSEAL/blob/master/LICENSE)
