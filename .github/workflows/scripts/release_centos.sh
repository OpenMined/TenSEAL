#!/bin/sh

export PATH=/opt/rh/llvm-toolset-7.0/root/usr/bin:/opt/rh/llvm-toolset-7.0/root/usr/sbin:${PATH}
export LD_LIBRARY_PATH=/opt/rh/llvm-toolset-7.0/root/usr/lib64:${LD_LIBRARY_PATH}

export CC=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang
export CXX=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang

pip wheel . -w dist/ --no-deps
auditwheel repair dist/*.whl --plat $AUDITWHEEL_PLAT
twine upload --skip-existing wheelhouse/*
