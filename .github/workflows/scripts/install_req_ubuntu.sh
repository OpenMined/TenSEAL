#!/bin/sh

set -e

sudo apt update
sudo apt install cmake automake

cd third_party/protobuf/ && \
    git submodule update --init --recursive && \
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
