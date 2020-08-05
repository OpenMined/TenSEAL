echo on

cmake -D BUILD_TEST=TRUE .
cmake -D BUILD_TEST=TRUE --build .
cmake --build . --target install

.\tenseal_tests.exe
