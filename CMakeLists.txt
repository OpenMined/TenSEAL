cmake_minimum_required(VERSION 3.12)

project(tenseal)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

include_directories(${CMAKE_CURRENT_SOURCE_DIR})
include_directories(${CMAKE_CURRENT_BINARY_DIR})

include(cmake/seal.cmake)
include(cmake/protobuf.cmake)
include(cmake/pybind11.cmake)
include(cmake/tenseal.cmake)
include(cmake/tests.cmake)
