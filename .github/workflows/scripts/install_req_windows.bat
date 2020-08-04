echo on


git clone https://github.com/Microsoft/vcpkg.git
.\vcpkg\bootstrap-vcpkg.bat
setx VCPKG "%cd%\vcpkg" /M

.\vcpkg\vcpkg update
.\vcpkg\vcpkg install protobuf protobuf:x64-windows
.\vcpkg\vcpkg integrate install


python -m pip install --upgrade pip
pip install setuptools wheel twine auditwheel
