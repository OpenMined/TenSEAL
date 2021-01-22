#!/bin/sh

set -e

# install cmake 3.17.1
curl https://github.com/Kitware/CMake/releases/download/v3.17.1/cmake-3.17.1-Linux-x86_64.tar.gz -L | tar xz -C /opt/
echo "/opt/cmake-3.17.1-Linux-x86_64/bin" >> $GITHUB_PATH

# install python dependencies
python -m pip install --upgrade pip
pip install setuptools wheel twine auditwheel
