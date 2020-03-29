cmake_minimum_required(VERSION 3.12)

project(tenseal)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

add_subdirectory(third_party/SEAL/native/src)
add_subdirectory(third_party/pybind11)

pybind11_add_module(_tenseal_cpp tenseal/binding.cpp tenseal/tensors/bfv_naive.cpp tenseal/keygen.cpp)
target_link_libraries(_tenseal_cpp PRIVATE seal)
