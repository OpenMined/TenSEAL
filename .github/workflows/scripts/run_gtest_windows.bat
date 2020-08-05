echo on

set _CL_=/MT

cmake -DCMAKE_BUILD_TYPE=Release -D BUILD_TEST=TRUE .
cmake -DCMAKE_BUILD_TYPE=Release -D BUILD_TEST=TRUE --build .
cmake --build . --target install

.\tenseal_tests.exe
