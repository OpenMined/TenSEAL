echo on

python -m pip install --upgrade pip
pip install -r ./requirements_dev.txt

git clone https://github.com/google/protobuf.git
cd protobuf
git checkout -b 3.12.x
git submodule init && git submodule update

mkdir tmp && cd tmp

cmake ..\cmake
cmake --build .
cmake --build . --target install
