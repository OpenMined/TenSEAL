#!/bin/sh

cd tenseal/proto && cmake . && make && cd ../../
cmake . -D BUILD_TEST=TRUE
make && CTEST_OUTPUT_ON_FAILURE=1 make test
