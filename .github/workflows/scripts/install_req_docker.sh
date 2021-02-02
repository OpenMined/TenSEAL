#!/bin/sh

set -e

apt update -y
apt install curl git build-essential cmake automake libtool libtool-bin clang -y

export CC=clang
export CXX=clang++

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel
