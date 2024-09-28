include(FetchContent)

FetchContent_Declare(
  com_pybind_pybind11
  GIT_REPOSITORY https://github.com/pybind/pybind11
  GIT_TAG        v2.12.0
)
FetchContent_MakeAvailable(com_pybind_pybind11)

include_directories(
  ${com_pybind_pybind11_SOURCE_DIR}/include
)
