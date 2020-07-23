#!/bin/sh
set -e

brew install protobuf@3.12

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
