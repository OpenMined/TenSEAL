#!/bin/sh

set -e

yum makecache -y
yum install centos-release-scl -y
yum-config-manager --enable rhel-server-rhscl-7-rpms
yum install llvm-toolset-7.0 python3 python-devel -y
scl enable llvm-toolset-7.0 bash
export CC=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang
export CPP=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang-cpp
export CXX=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang++
export PATH=/opt/rh/llvm-toolset-7.0/root/usr/bin:/opt/rh/llvm-toolset-7.0/root/usr/sbin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/opt/rh/llvm-toolset-7.0/root/usr/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

clang --version


# install python dependencies
python -m pip install --upgrade pip
pip install setuptools wheel twine auditwheel
