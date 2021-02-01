#!/bin/sh

yum install centos-release-scl llvm-toolset-7
scl enable llvm-toolset-7 bash

clang --version

export CC=clang
export CXX=clang++

pip wheel . -w dist/ --no-deps
auditwheel repair dist/*.whl --plat $AUDITWHEEL_PLAT
twine upload --skip-existing wheelhouse/*
