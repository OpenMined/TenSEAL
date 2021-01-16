cmake_minimum_required( VERSION 3.15 )

include( FetchContent )

FetchContent_Declare(
  protobuf
  GIT_REPOSITORY  https://github.com/protocolbuffers/protobuf.git
  GIT_TAG         v3.14.0
)

FetchContent_GetProperties( protobuf )
if( NOT protobuf_POPULATED )
  option(protobuf_BUILD_TESTS OFF)
  option(Protobuf_USE_STATIC_LIBS ON)
  option(Protobuf_DEBUG ON)
  option(CMAKE_POSITION_INDEPENDENT_CODE ON)

  FetchContent_Populate(protobuf)
  include_directories(${Protobuf_INCLUDE_DIRS})
  add_subdirectory(${protobuf_SOURCE_DIR}/cmake ${protobuf_BINARY_DIR})
endif()

add_subdirectory(tenseal/proto)
