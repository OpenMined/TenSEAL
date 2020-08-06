#!/bin/sh

set -e

sudo apt update
sudo apt install cmake clang libprotobuf-dev protobuf-compiler

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel
