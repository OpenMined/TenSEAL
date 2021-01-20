echo on

set _CL_=/MT

cmake -D BUILD_TEST=TRUE -DCMAKE_BUILD_TYPE=Release .
cmake -D BUILD_TEST=TRUE --build .
cmake --build . --target install --config Release

.\Release\tenseal_tests.exe
