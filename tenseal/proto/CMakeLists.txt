cmake_minimum_required(VERSION 3.12)

include(FindProtobuf)
find_package(Protobuf REQUIRED)
include_directories(${PROTOBUF_INCLUDE_DIR})

protobuf_generate_cpp(PROTO_SRC PROTO_HEADER tensealcontext.proto)

add_library(tenseal_proto ${PROTO_HEADER} ${PROTO_SRC})
