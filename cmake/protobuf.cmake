set(protobuf_BUILD_TESTS OFF)
set(protobuf_BUILD_EXPORT OFF)
set(protobuf_USE_STATIC_LIBS ON)
set(protobuf_DEBUG ON)
set(protobuf_MSVC_STATIC_RUNTIME OFF)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)
    
#add_subdirectory(third_party/protobuf/cmake)

set(Protobuf_ROOT third_party/protobuf/cmake)

find_package( Protobuf REQUIRED HINTS ${Protobuf_ROOT}/lib/cmake/protobuf )
include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-config.cmake)
include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-module.cmake)
include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-options.cmake)
include(${Protobuf_ROOT}/lib/cmake/protobuf/protobuf-targets.cmake)

if ( Protobuf_FOUND )
    message( STATUS "Protobuf version : ${Protobuf_VERSION}" )
    message( STATUS "Protobuf include path : ${Protobuf_INCLUDE_DIRS}" )
    message( STATUS "Protobuf libraries : ${Protobuf_LIBRARIES}" )
    message( STATUS "Protobuf compiler libraries : ${Protobuf_PROTOC_LIBRARIES}")
    message( STATUS "Protobuf lite libraries : ${Protobuf_LITE_LIBRARIES}")
else()
    message( WARNING "Protobuf package not found -> specify search path via Protobuf_ROOT variable")
endif()

include_directories(${Protobuf_INCLUDE_DIRS})
add_subdirectory(tenseal/proto)
