#!/bin/sh

set -e

# install cmake 3.17.1
curl https://github.com/Kitware/CMake/releases/download/v3.17.1/cmake-3.17.1-Linux-x86_64.tar.gz -L | tar xz -C /opt/
echo "/opt/cmake-3.17.1-Linux-x86_64/bin" >> $GITHUB_PATH

yum makecache -y
yum install centos-release-scl -y
yum-config-manager --enable rhel-server-rhscl-7-rpms
yum install llvm-toolset-7.0 -y
scl enable llvm-toolset-7.0 bash

echo $PATH

export PATH=${PATH}:/opt/rh/llvm-toolset-7.0/root/usr/bin/
clang --version


# install python dependencies
python -m pip install --upgrade pip
pip install setuptools wheel twine auditwheel
