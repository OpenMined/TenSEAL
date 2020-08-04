#!/bin/sh

set -e

python -m pip install --upgrade pip
pip install -r requirements_dev.txt

protoc --version

cd tenseal/proto && cmake . && make && cd ../../
