@echo off

set PATH=%PATH%;%programfiles%/protobuf/bin/;%programfiles(x86)%/protobuf/bin/
set _CL_=/MT

git submodule init && git submodule update
 
msbuild .\third_party\SEAL\native\src\SEAL.vcxproj /p:configuration=Release /p:platform=x64 /p:SolutionDir=..\..\

protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensealcontext.proto
protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensors.proto

pip install .
