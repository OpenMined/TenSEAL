echo on

cmake -D BUILD_TEST=TRUE .
cmake -D BUILD_TEST=TRUE --build .

.\tenseal_tests.exe
