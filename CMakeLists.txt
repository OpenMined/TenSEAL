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

set(TENSEAL_BASEDIR tenseal)
set(SOURCES
    ${TENSEAL_BASEDIR}/binding.cpp
    ${TENSEAL_BASEDIR}/tensealcontext.cpp
    ${TENSEAL_BASEDIR}/tensors/bfvvector.cpp
    ${TENSEAL_BASEDIR}/tensors/ckksvector.cpp
    ${TENSEAL_BASEDIR}/utils/utils.cpp
)
pybind11_add_module(_tenseal_cpp ${SOURCES})

set(SEALAPI_SOURCES
    ${TENSEAL_BASEDIR}/sealapi/sealapi.cpp
    ${TENSEAL_BASEDIR}/sealapi/sealapi_evaluator.cpp
    ${TENSEAL_BASEDIR}/sealapi/sealapi_encrypt.cpp
    ${TENSEAL_BASEDIR}/sealapi/sealapi_helpers.cpp
    ${TENSEAL_BASEDIR}/sealapi/sealapi_modulus.cpp
    ${TENSEAL_BASEDIR}/sealapi/sealapi_encode.cpp
    ${TENSEAL_BASEDIR}/sealapi/sealapi_context.cpp
    ${TENSEAL_BASEDIR}/sealapi/sealapi_util_namespace.cpp
)
pybind11_add_module(_sealapi_cpp ${SEALAPI_SOURCES})

if(NOT WIN32)
    target_link_libraries(_tenseal_cpp PRIVATE seal)
    target_link_libraries(_sealapi_cpp PRIVATE seal)
endif()
