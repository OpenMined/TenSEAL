@echo off

set PATH=%PATH%;%programfiles%/protobuf/bin/;%programfiles(x86)%/protobuf/bin/

:: MT vs MD: static runtime library linking vs dynamic runtime library linking.
:: Protubf library enforces the MT flag on the static .lib build. If we want to link it, we need to use MT everywhere, otherwise the build will fail.
:: The general recommendation is to use MD, but for that we need to build and use protobufs as DLL.
set _CL_=/MT
 
msbuild .\third_party\SEAL\native\src\SEAL.vcxproj /p:configuration=Release /p:platform=x64 /p:SolutionDir=..\..\

protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensealcontext.proto
protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensors.proto

pip install .
