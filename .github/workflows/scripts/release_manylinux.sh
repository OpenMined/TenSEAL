#!/bin/sh

python3 -m pip wheel . -w dist/ --no-deps
auditwheel repair dist/*.whl --plat $AUDITWHEEL_PLAT
twine upload --skip-existing wheelhouse/*
