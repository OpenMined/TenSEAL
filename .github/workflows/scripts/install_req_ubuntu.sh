#!/bin/sh

set -e

sudo apt update -y
sudo apt install curl git build-essential cmake automake libtool libtool-bin -y

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
pip install setuptools wheel twine auditwheel
