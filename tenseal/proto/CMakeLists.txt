cmake_minimum_required(VERSION 3.14)

include(FindProtobuf)
find_package(Protobuf REQUIRED)

file(GLOB PROTOBUF_FILELIST tensealcontext.proto)
protobuf_generate_cpp(PROTO_SRC PROTO_INCL ${PROTOBUF_FILELIST})
protobuf_generate_python(PROTO_PY ${PROTOBUF_FILELIST})

add_library(tenseal_proto ${PROTO_HEADER} ${PROTO_SRC})
target_link_libraries(tenseal_proto PRIVATE protobuf)

set_property(TARGET tenseal_proto PROPERTY POSITION_INDEPENDENT_CODE ON)
