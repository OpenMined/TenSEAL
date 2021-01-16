if(WIN32)
  include_directories(protobuf/src)
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotobuf-lite.lib")
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotobuf.lib")
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotoc.lib")
else()
  set(Protobuf_USE_STATIC_LIBS ON)
  set(Protobuf_DEBUG ON)
  set(Protobuf_MSVC_STATIC_RUNTIME OFF)

  set(Protobuf_ROOT ${CMAKE_SOURCE_DIR}/third_party/protobuf/cmake)
  set(Protobuf_DIR
      ${CMAKE_SOURCE_DIR}/third_party/protobuf/cmake/lib/cmake/protobuf/)

  message(STATUS "Setting up protobuf ...")
  execute_process(
    COMMAND
      ${CMAKE_COMMAND} -D protobuf_BUILD_TESTS=OFF -D
      protobuf_MSVC_STATIC_RUNTIME=OFF -D protobuf_BUILD_LIBPROTOC=ON -D
      protobuf_BUILD_PROTOC_BINARIES=ON -D CMAKE_POSITION_INDEPENDENT_CODE=ON -G
      "${CMAKE_GENERATOR}" .
    OUTPUT_QUIET
    RESULT_VARIABLE result
    WORKING_DIRECTORY ${Protobuf_ROOT})
  if(result)
    message(FATAL_ERROR "Failed to download protobuf (${result})!")
  endif()

  message(STATUS "Building protobuf ...")
  execute_process(
    COMMAND ${CMAKE_COMMAND} --build .
    OUTPUT_QUIET
    RESULT_VARIABLE result
    WORKING_DIRECTORY ${Protobuf_ROOT})
  if(result)
    message(FATAL_ERROR "Failed to build protobuf (${result})!")
  endif()

  find_package(Protobuf REQUIRED HINTS ${Protobuf_ROOT}/lib/cmake/protobuf)

  include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-config.cmake)
  include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-module.cmake)
  include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-options.cmake)
  include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-targets.cmake)

  if(Protobuf_FOUND)
    message(STATUS "Protobuf version : ${Protobuf_VERSION}")
    message(STATUS "Protobuf include path : ${Protobuf_INCLUDE_DIRS}")
    message(STATUS "Protobuf libraries : ${Protobuf_LIBRARIES}")
    message(STATUS "Protobuf compiler libraries : ${Protobuf_PROTOC_LIBRARIES}")
    message(STATUS "Protobuf lite libraries : ${Protobuf_LITE_LIBRARIES}")
  else()
    message(
      WARNING
        "Protobuf package not found -> specify search path via Protobuf_ROOT variable"
    )
  endif()

  include_directories(${Protobuf_INCLUDE_DIRS})
  add_subdirectory(tenseal/proto)
endif()
