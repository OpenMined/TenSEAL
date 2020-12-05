#!/bin/sh

set -e

apt update -y
apt install git build-essential cmake automake libtool libtool-bin -y

cd third_party/protobuf/ && \
    git submodule update --init --recursive && \
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
