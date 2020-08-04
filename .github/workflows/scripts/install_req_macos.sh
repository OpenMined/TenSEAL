#!/bin/sh

set -e

brew install cmake clang libprotobuf-dev protobuf-compiler

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
