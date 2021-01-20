set(Protobuf_USE_STATIC_LIBS ON)
set(Protobuf_DEBUG ON)
set(Protobuf_MSVC_STATIC_RUNTIME OFF)

set(Protobuf_ROOT ${CMAKE_SOURCE_DIR}/third_party/protobuf/cmake)
set(Protobuf_DIR ${Protobuf_ROOT}/${CMAKE_INSTALL_LIBDIR}/cmake/protobuf)

set(CMAKE_BUILDTYPE "")
if(WIN32)
    set(CMAKE_BUILDTYPE -DCMAKE_BUILD_TYPE=Release)
endif()

message(STATUS "Setting up protobuf ...")
execute_process(
  COMMAND
    ${CMAKE_COMMAND} ${CMAKE_BUILDTYPE} -D protobuf_BUILD_TESTS=OFF -D
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
  COMMAND ${CMAKE_COMMAND} ${CMAKE_BUILDTYPE} --build .
  RESULT_VARIABLE result
  WORKING_DIRECTORY ${Protobuf_ROOT})
if(result)
  message(FATAL_ERROR "Failed to build protobuf (${result})!")
endif()

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

set(PROTO_ROOT ${CMAKE_SOURCE_DIR}/tenseal/proto)

execute_process(
  COMMAND ${Protobuf_PROTOC_EXECUTABLE} --proto_path=${PROTO_ROOT}/
          --cpp_out=${PROTO_ROOT}/ ${PROTO_ROOT}/tensealcontext.proto
  COMMAND ${Protobuf_PROTOC_EXECUTABLE} --proto_path=${PROTO_ROOT}/
          --cpp_out=${PROTO_ROOT}/ ${PROTO_ROOT}/tensors.proto
  RESULT_VARIABLE result
  WORKING_DIRECTORY ${Protobuf_ROOT})
if(result)
  message(FATAL_ERROR "Failed to install protobuf (${result})!")
endif()

include_directories(${PROTO_ROOT})
set(PROTO_SOURCES ${PROTO_ROOT}/tensealcontext.pb.cc
                  ${PROTO_ROOT}/tensors.pb.cc)

add_library(tenseal_proto ${PROTO_SOURCES})
target_link_libraries(tenseal_proto INTERFACE ${Protobuf_LIBRARIES})
