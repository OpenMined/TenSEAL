include(FetchContent)

add_definitions(-DXTENSOR_USE_XSIMD)
set(XTENSOR_USE_XSIMD ON)
set(JSON_BuildTests OFF)
set(JSON_Install OFF)

FetchContent_Declare(
  com_nlohmann_json
  GIT_REPOSITORY https://github.com/nlohmann/json
  GIT_TAG        v3.9.1
)
FetchContent_Declare(
  com_xtensorstack_xtl
  GIT_REPOSITORY https://github.com/xtensor-stack/xtl
  GIT_TAG        0.7.2
)
FetchContent_Declare(
  com_xtensorstack_xsimd
  GIT_REPOSITORY https://github.com/xtensor-stack/xsimd
  GIT_TAG        7.4.10
)
FetchContent_Declare(
  com_xtensorstack_xtensor
  GIT_REPOSITORY https://github.com/xtensor-stack/xtensor
  GIT_TAG        0.23.5
)
FetchContent_MakeAvailable(com_nlohmann_json com_xtensorstack_xtl com_xtensorstack_xsimd com_xtensorstack_xtensor)

include_directories(${com_nlohmann_json_SOURCE_DIR}/include/)
include_directories(${com_xtensorstack_xtl_SOURCE_DIR}/include)
include_directories(${com_xtensorstack_xsimd_SOURCE_DIR}/include)
include_directories(${com_xtensorstack_xtensor_SOURCE_DIR}/include)
