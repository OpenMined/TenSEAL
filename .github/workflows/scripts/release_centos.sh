#!/bin/sh

export CC=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang
export CPP=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang-cpp
export CXX=/opt/rh/llvm-toolset-7.0/root/usr/bin/clang++
export PATH=/opt/rh/llvm-toolset-7.0/root/usr/bin:/opt/rh/llvm-toolset-7.0/root/usr/sbin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/opt/rh/llvm-toolset-7.0/root/usr/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

pip wheel . -w dist/ --no-deps
auditwheel repair dist/*.whl --plat $AUDITWHEEL_PLAT
twine upload --skip-existing wheelhouse/*
