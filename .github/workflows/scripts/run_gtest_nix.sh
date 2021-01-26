#!/bin/sh

cmake . -D BUILD_TEST=TRUE && make -j && CTEST_OUTPUT_ON_FAILURE=1 make test
