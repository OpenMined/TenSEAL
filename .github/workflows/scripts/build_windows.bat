@echo off

set PATH=%PATH%;C:/Program Files (x86)/protobuf/bin/;C:/Program Files/protobuf/bin/
set _CL_=/MT

git submodule init && git submodule update
 
msbuild .\third_party\SEAL\native\src\SEAL.vcxproj /p:configuration=Release /p:platform=x64 /p:SolutionDir=..\..\

mkdir proto_out
protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensealcontext.proto
protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensors.proto

pip install .
