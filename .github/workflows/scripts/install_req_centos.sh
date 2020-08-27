#!/bin/sh

set -e

# install cmake 3.17.1
curl https://github.com/Kitware/CMake/releases/download/v3.17.1/cmake-3.17.1-Linux-x86_64.tar.gz -L | tar xz -C /opt/
echo "::add-path::/opt/cmake-3.17.1-Linux-x86_64/bin"

# install latest protobuf release
mkdir /opt/protobuf/
pushd /opt/protobuf/
curl https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip -LO
unzip protoc-3.13.0-linux-x86_64.zip
rm protoc-3.13.0-linux-x86_64.zip
popd
echo "::add-path::/opt/protobuf/bin"

# install python dependencies
python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel
