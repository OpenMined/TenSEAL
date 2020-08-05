echo on

git submodule init && git submodule update
 
msbuild .\third_party\SEAL\native\src\SEAL.vcxproj /p:configuration=Release /p:platform=x64 /p:SolutionDir=..\..\

mkdir proto_out
protoc --proto_path=tenseal\proto --cpp_out=proto_out tenseal\proto\tensealcontext.proto
protoc --proto_path=tenseal\proto --cpp_out=proto_out tenseal\proto\tensors.proto

pip install .
