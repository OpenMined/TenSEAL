echo on

git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
./bootstrap-vcpkg.sh
./vcpkg integrate install

vcpkg install protobuf
vcpkg install protobuf:x64-windows-static

python -m pip install --upgrade pip
pip install -r ./requirements_dev.txt
