cmake_minimum_required(VERSION 3.12)

project(TenSEAL)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

add_subdirectory(third_party/SEAL/native/src)
add_subdirectory(third_party/pybind11)

pybind11_add_module(_tenseal_cpp tenseal/binding.cpp)
target_link_libraries(_tenseal_cpp PUBLIC seal)
