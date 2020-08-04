echo on

python -m pip install --upgrade pip
pip install -r ./requirements_dev.txt

git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
./bootstrap-vcpkg.sh
./vcpkg integrate install

vcpkg install protobuf protobuf:x64-windows protobuf:x64-windows-static
