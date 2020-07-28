cmake_minimum_required(VERSION 3.12)

project(tenseal)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

include_directories(${CMAKE_CURRENT_SOURCE_DIR})

# For windows we should build SEAL using Microsoft Visual Studio
# then link the library
if (WIN32)
    # including SEAL headers only
    include_directories(third_party/SEAL/native/src)
    # linking with the already build seal.lib via MSVC
    LINK_LIBRARIES(${PROJECT_SOURCE_DIR}/third_party/SEAL/lib/x64/Release/seal.lib)
else()
    # building SEAL using cmake
    add_subdirectory(third_party/SEAL)
endif()

add_subdirectory(third_party/pybind11)
add_subdirectory(tenseal/proto)
include_directories(${CMAKE_CURRENT_BINARY_DIR})

################################
# Core
################################
set(TENSEAL_BASEDIR tenseal)
set(SEALAPI_BASEDIR tenseal/sealapi)

set(SOURCES
    ${TENSEAL_BASEDIR}/cpp/context/tensealcontext.cpp
    ${TENSEAL_BASEDIR}/cpp/context/sealcontext.cpp
    ${TENSEAL_BASEDIR}/cpp/tensors/bfvvector.cpp
    ${TENSEAL_BASEDIR}/cpp/tensors/ckksvector.cpp
    ${TENSEAL_BASEDIR}/cpp/tensors/utils/utils.cpp
)
add_library(tenseal SHARED ${SOURCES})
pybind11_add_module(_tenseal_cpp ${SOURCES} ${TENSEAL_BASEDIR}/binding.cpp)

set(SEALAPI_SOURCES
    ${SEALAPI_BASEDIR}/sealapi.cpp
    ${SEALAPI_BASEDIR}/sealapi_evaluator.cpp
    ${SEALAPI_BASEDIR}/sealapi_encrypt.cpp
    ${SEALAPI_BASEDIR}/sealapi_helpers.cpp
    ${SEALAPI_BASEDIR}/sealapi_modulus.cpp
    ${SEALAPI_BASEDIR}/sealapi_encode.cpp
    ${SEALAPI_BASEDIR}/sealapi_context.cpp
    ${SEALAPI_BASEDIR}/sealapi_util_namespace.cpp
)
pybind11_add_module(_sealapi_cpp ${SEALAPI_SOURCES})

if(NOT WIN32)
    target_link_libraries(tenseal PRIVATE seal)
    target_link_libraries(_tenseal_cpp PRIVATE seal tenseal_proto)
    target_link_libraries(_sealapi_cpp PRIVATE seal)
endif()

################################
# Unit Tests
################################
if(${BUILD_TEST})
    add_subdirectory(third_party/googletest)
    enable_testing()
    include_directories(${gtest_SOURCE_DIR}/include ${gtest_SOURCE_DIR} ${gmock_SOURCE_DIR}/include third_party/SEAL)

    set(TENSEAL_TESTS_BASEDIR tests/cpp)
    set(TESTING_SOURCES
        ${TENSEAL_TESTS_BASEDIR}/tensealcontext_test.cpp
        ${TENSEAL_TESTS_BASEDIR}/tensors/ckksvector_test.cpp
        ${TENSEAL_TESTS_BASEDIR}/tensors/bfvvector_test.cpp
    )
    add_executable(tenseal_tests ${TESTING_SOURCES} ${SOURCES} )
    target_link_libraries(tenseal_tests PRIVATE gtest gtest_main seal tenseal tenseal_proto)
    add_test( tenseal_tests tenseal_tests )
endif()
