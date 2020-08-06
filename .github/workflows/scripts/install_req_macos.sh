#!/bin/sh

set -e

brew install protobuf

python -m pip install --upgrade pip
pip install -r requirements_dev.txt

pip install setuptools wheel twine auditwheel
