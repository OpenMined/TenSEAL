#!/bin/sh

cmake .
find ./ -name protobuf-config.cmake

echo "TESTING #############"

pip wheel . -w dist/ --no-deps
auditwheel repair dist/*.whl --plat $AUDITWHEEL_PLAT
twine upload --skip-existing wheelhouse/*
