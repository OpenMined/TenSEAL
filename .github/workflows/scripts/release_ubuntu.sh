#!/bin/sh

# fetch third_party libraries
git submodule init && git submodule update

pip wheel . -w dist/ --no-deps
auditwheel repair dist/*.whl --plat $AUDITWHEEL_PLAT
twine upload --skip-existing wheelhouse/*
