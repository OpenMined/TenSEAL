#!/bin/sh

set -e

sudo apt update
sudo apt install cmake clang libprotobuf-dev protobuf-compiler

PROTOBUF_VERSION=3.14.0 && \
    curl -L https://github.com/google/protobuf/releases/download/v${PROTOBUF_VERSION}/protobuf-all-${PROTOBUF_VERSION}.tar.gz | tar -xzf - && \
    cd /protobuf-${PROTOBUF_VERSION} && \
    ./autogen.sh && \
    ./configure CXXFLAGS="-fPIC" --prefix=/usr/local --disable-shared 2>&1 > /dev/null && \
    make -j"$(grep ^processor /proc/cpuinfo | wc -l)" install 2>&1 > /dev/null && \
    rm -rf /protobuf-${PROTOBUF_VERSION}

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel
