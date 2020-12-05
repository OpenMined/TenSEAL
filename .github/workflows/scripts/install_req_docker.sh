#!/bin/sh

set -e

apt update -y
apt install curl git build-essential cmake automake libtool libtool-bin -y

curl https://github.com/protocolbuffers/protobuf/releases/download/v3.14.0/protobuf-cpp-3.14.0.tar.gz -L | tar xz -C /opt/ && \
    cd /opt/protobuf-3.14.0 && \
    autoreconf --install && \
    ./configure CXXFLAGS=-fPIC && \
    make && make install && ldconfig && cd -

if [ $? -ne 0 ]
then
    exit 1
fi

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel
