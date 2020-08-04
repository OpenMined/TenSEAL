cmake_minimum_required(VERSION 3.14)

include(FindProtobuf)
find_package(Protobuf REQUIRED)

set(Protobuf_USE_STATIC_LIBS YES)
include_directories(${Protobuf_INCLUDE_DIRS})

file(GLOB PROTOBUF_FILELIST tensealcontext.proto tensors.proto)

protobuf_generate_cpp(PROTO_SRC PROTO_INCL ${PROTOBUF_FILELIST})
add_library(tenseal_proto ${PROTO_HEADER} ${PROTO_SRC})
target_link_libraries(tenseal_proto INTERFACE ${Protobuf_LIBRARIES})
set_property(TARGET tenseal_proto PROPERTY POSITION_INDEPENDENT_CODE ON)
