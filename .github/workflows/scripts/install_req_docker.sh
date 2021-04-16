#!/bin/sh

set -e

apt update -y
apt install wget curl git build-essential automake libtool libtool-bin clang -y

export CC=clang
export CXX=clang++

cmake_install="cmake-3.17.0-Linux-x86_64.sh"
wget https://github.com/Kitware/CMake/releases/download/v3.17.0/${cmake_install}
sh ${cmake_install} --skip-license --prefix=/usr/local/ --exclude-subdir

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel

cmake --version
