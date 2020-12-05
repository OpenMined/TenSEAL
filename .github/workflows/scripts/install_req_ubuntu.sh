#!/bin/sh

set -e

sudo apt update -y
sudo apt install curl git build-essential cmake automake libtool libtool-bin -y

proto_version="3.14.0"
curl https://github.com/protocolbuffers/protobuf/releases/download/v${proto_version}/protobuf-cpp-${proto_version}.tar.gz -L | tar xz -C /opt/ && \
    cd /opt/protobuf-${proto_version} && \
    autoreconf --install && \
    ./configure CXXFLAGS=-fPIC && \
    make && sudo make install && sudo ldconfig && cd -

if [ $? -ne 0 ]
then
    exit 1
fi

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel
