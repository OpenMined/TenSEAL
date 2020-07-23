#!/bin/sh
set -e

python -m pip install --upgrade pip
pip install setuptools wheel twine auditwheel
pip install -r requirements_dev.txt