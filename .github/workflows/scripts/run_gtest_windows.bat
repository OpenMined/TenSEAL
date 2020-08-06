echo on

set _CL_=/MT

cmake -D BUILD_TEST=TRUE .
cmake -D BUILD_TEST=TRUE --build .
cmake --build . --target install

.\Debug\tenseal_tests.exe
