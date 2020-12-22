set(TENSEAL_BASEDIR tenseal)
set(SEALAPI_BASEDIR tenseal/sealapi)

set(SOURCES
    ${TENSEAL_BASEDIR}/cpp/context/tensealcontext.cpp
    ${TENSEAL_BASEDIR}/cpp/context/sealcontext.cpp
    ${TENSEAL_BASEDIR}/cpp/tensors/bfvvector.cpp
    ${TENSEAL_BASEDIR}/cpp/tensors/ckkstensor.cpp
    ${TENSEAL_BASEDIR}/cpp/tensors/ckksvector.cpp
    ${TENSEAL_BASEDIR}/cpp/tensors/utils/utils.cpp)
if(WIN32)
  set(SOURCES ${SOURCES} ${TENSEAL_BASEDIR}/proto/tensealcontext.pb.cc
              ${TENSEAL_BASEDIR}/proto/tensors.pb.cc)
endif()

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
    ${SEALAPI_BASEDIR}/sealapi_util_namespace.cpp)
pybind11_add_module(_sealapi_cpp ${SEALAPI_SOURCES})

find_package(xtensor REQUIRED)
target_include_directories(_tenseal_cpp PUBLIC ${xtensor_INCLUDE_DIRS})

target_link_libraries(_sealapi_cpp PRIVATE seal)
target_link_libraries(_tenseal_cpp PRIVATE seal xtensor)
target_link_libraries(tenseal PRIVATE seal xtensor)
if(NOT WIN32)
  target_link_libraries(tenseal PRIVATE tenseal_proto)
  target_link_libraries(_tenseal_cpp PRIVATE tenseal_proto)
endif()


