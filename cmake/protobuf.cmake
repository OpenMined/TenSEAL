set(Protobuf_USE_STATIC_LIBS ON)
set(Protobuf_DEBUG ON)
set(Protobuf_MSVC_STATIC_RUNTIME OFF)

set(Protobuf_ROOT ${CMAKE_SOURCE_DIR}/third_party/protobuf/cmake)
set(Protobuf_DIR ${Protobuf_ROOT}/${CMAKE_INSTALL_LIBDIR}/cmake/protobuf)

message(STATUS "Setting up protobuf ...")
execute_process(
  COMMAND
    ${CMAKE_COMMAND} -D protobuf_BUILD_TESTS=OFF -D
    protobuf_MSVC_STATIC_RUNTIME=OFF -D protobuf_VERBOSE=ON -D
    protobuf_BUILD_LIBPROTOC=ON -D protobuf_BUILD_PROTOC_BINARIES=ON -D
    CMAKE_POSITION_INDEPENDENT_CODE=ON -G "${CMAKE_GENERATOR}" .
  RESULT_VARIABLE result
  WORKING_DIRECTORY ${Protobuf_ROOT})
if(result)
  message(FATAL_ERROR "Failed to download protobuf (${result})!")
endif()

message(STATUS "Building protobuf ...")
execute_process(
  COMMAND ${CMAKE_COMMAND} --build .
  RESULT_VARIABLE result
  WORKING_DIRECTORY ${Protobuf_ROOT})
if(result)
  message(FATAL_ERROR "Failed to build protobuf (${result})!")
endif()


add_subdirectory(tenseal/proto)
