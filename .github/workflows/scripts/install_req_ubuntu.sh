#!/bin/sh

set -e

sudo apt update -y
sudo apt install curl git build-essential cmake automake libtool libtool-bin clang clang-format -y

python -m pip install --upgrade pip
pip install --group dev
pip install setuptools wheel twine auditwheel
