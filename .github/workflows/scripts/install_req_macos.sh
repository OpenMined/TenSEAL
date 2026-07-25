#!/bin/sh

set -e

python -m pip install --upgrade pip
pip install --group dev

pip install setuptools wheel twine auditwheel
