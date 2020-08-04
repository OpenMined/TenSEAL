echo on


vcpkg update
vcpkg install protobuf protobuf:x64-windows


python -m pip install --upgrade pip
pip install setuptools wheel twine auditwheel
