cmake_minimum_required(VERSION 3.12)

project(tenseal)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

add_subdirectory(third_party/SEAL)
add_subdirectory(third_party/pybind11)

set(TENSEAL_BASEDIR tenseal)
set(SOURCES
    ${TENSEAL_BASEDIR}/binding.cpp
    ${TENSEAL_BASEDIR}/tensealcontext.cpp
    ${TENSEAL_BASEDIR}/utils.cpp
    ${TENSEAL_BASEDIR}/tensors/bfvvector.cpp
    ${TENSEAL_BASEDIR}/tensors/ckksvector.cpp
)
pybind11_add_module(_tenseal_cpp ${SOURCES})
target_link_libraries(_tenseal_cpp PRIVATE seal)

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
target_link_libraries(_sealapi_cpp PRIVATE seal)
