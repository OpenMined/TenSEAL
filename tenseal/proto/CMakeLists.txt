set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

set(Protobuf_USE_STATIC_LIBS ON)
set(Protobuf_ROOT ${CMAKE_SOURCE_DIR}/third_party/protobuf/cmake)
set(Protobuf_DIR ${Protobuf_ROOT}/${CMAKE_INSTALL_LIBDIR}/cmake/protobuf)

find_package(Protobuf REQUIRED HINTS ${Protobuf_DIR})

include(${Protobuf_DIR}/protobuf-config.cmake)
include(${Protobuf_DIR}/protobuf-module.cmake)
include(${Protobuf_DIR}/protobuf-options.cmake)
include(${Protobuf_DIR}/protobuf-targets.cmake)

if(Protobuf_FOUND)
  message(STATUS "Protobuf version : ${Protobuf_VERSION}")
  message(STATUS "Protobuf include path : ${Protobuf_INCLUDE_DIRS}")
  message(STATUS "Protobuf libraries : ${Protobuf_LIBRARIES}")
  message(STATUS "Protobuf compiler libraries : ${Protobuf_PROTOC_LIBRARIES}")
  message(STATUS "Protobuf lite libraries : ${Protobuf_LITE_LIBRARIES}")
  message(STATUS "Protobuf protoc : ${Protobuf_PROTOC_EXECUTABLE}")
else()
  message(
    WARNING
      "Protobuf package not found -> specify search path via Protobuf_ROOT variable"
  )
endif()

include_directories(${Protobuf_INCLUDE_DIRS})

file(GLOB PROTOBUF_FILELIST tensealcontext.proto tensors.proto)

protobuf_generate_cpp(PROTO_SRC PROTO_INCL ${PROTOBUF_FILELIST})
add_library(tenseal_proto ${PROTO_HEADER} ${PROTO_SRC})
target_link_libraries(tenseal_proto INTERFACE ${Protobuf_LIBRARIES})

set_property(TARGET tenseal_proto PROPERTY POSITION_INDEPENDENT_CODE ON)
