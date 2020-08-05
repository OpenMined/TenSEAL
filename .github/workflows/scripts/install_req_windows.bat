echo on

python -m pip install --upgrade pip
pip install -r ./requirements_dev.txt || goto :error

git clone https://github.com/google/protobuf.git
cd protobuf
git checkout -b 3.12.x
git submodule init && git submodule update

mkdir tmp && cd tmp

cmake -DCMAKE_BUILD_TYPE=Release ..\cmake || goto :error
cmake -DCMAKE_BUILD_TYPE=Release --build . || goto :error
cmake --build . --target install --config Release || goto :error

goto :EOF

:error
echo Failed with error #%errorlevel%.
exit /b %errorlevel%