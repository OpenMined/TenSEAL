include(FetchContent)

set(Protobuf_USE_STATIC_LIBS ON)
set(Protobuf_MSVC_STATIC_RUNTIME OFF)

FetchContent_Declare(
  protocolbuffers_protobuf
  GIT_REPOSITORY https://github.com/protocolbuffers/protobuf
  GIT_TAG        v3.15.8
)
FetchContent_MakeAvailable(protocolbuffers_protobuf)

set(Protobuf_ROOT ${protocolbuffers_protobuf_SOURCE_DIR}/cmake)
set(Protobuf_DIR ${Protobuf_ROOT}/${CMAKE_INSTALL_LIBDIR}/cmake/protobuf)

message(STATUS "Setting up protobuf ...")
execute_process(
  COMMAND
    ${CMAKE_COMMAND} -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE} -D protobuf_BUILD_TESTS=OFF -D protobuf_BUILD_PROTOC_BINARIES=ON -D CMAKE_POSITION_INDEPENDENT_CODE=ON -G "${CMAKE_GENERATOR}" .
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

message(STATUS "Installing protobuf ...")
if(WIN32)
    execute_process(
        COMMAND ${CMAKE_COMMAND} --build . --target install --config ${CMAKE_BUILD_TYPE}
    RESULT_VARIABLE result
    WORKING_DIRECTORY ${Protobuf_ROOT})
    if(result)
        message(FATAL_ERROR "Failed to build protobuf (${result})!")
    endif()
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
