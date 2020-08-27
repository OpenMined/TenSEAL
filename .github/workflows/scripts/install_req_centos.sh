#!/bin/sh

set -e

# install cmake 3.17.1
curl https://github.com/Kitware/CMake/releases/download/v3.17.1/cmake-3.17.1-Linux-x86_64.tar.gz -L | tar xz -C /opt/
echo "::add-path::/opt/cmake-3.17.1-Linux-x86_64/bin"

# install latest protobuf release
curl https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protobuf-cpp-3.13.0.tar.gz -L | tar xz -C /opt/
pushd /opt/protobuf-3.13.0
./configure
make
make install
ldconfig
popd

# install python dependencies
python -m pip install --upgrade pip
pip install setuptools wheel twine auditwheel
