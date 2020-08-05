echo on

cmake.exe -D BUILD_TEST=TRUE --build . --target RUN_TESTS --config release
