@echo off

set PATH=%PATH%;%programfiles%/protobuf/bin/;%programfiles(x86)%/protobuf/bin/

cd third_party\SEAL
cmakei --build -DSEAL_THROW_ON_TRANSPARENT_CIPHERTEXT=OFF -DALLOW_COMMAND_LINE_BUILD=ON -DSEAL_USE_MSGSL=OFF -DSEAL_USE_ZLIB=OFF -DSEAL_USE_ZSTD=OFF .

cd ..\..

:: MT vs MD: static runtime library linking vs dynamic runtime library linking.
:: Protubf library enforces the MT flag on the static .lib build. If we want to link it, we need to use MT everywhere, otherwise the build will fail.
:: The general recommendation is to use MD, but for that we need to build and use protobufs as DLL.
set _CL_=/MT
 
protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensealcontext.proto
protoc --proto_path=tenseal\proto --cpp_out=tenseal\proto tenseal\proto\tensors.proto

pip install .
