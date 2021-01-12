add_definitions(-DXTENSOR_USE_XSIMD)
set(XTENSOR_USE_XSIMD ON)

include_directories(third_party/xtl/include)
add_subdirectory(third_party/xtl)
set(xtl_DIR "${CMAKE_CURRENT_BINARY_DIR}/third_party/xtl" CACHE STRING "" FORCE)

include_directories(third_party/xsimd/include)
add_subdirectory(third_party/xsimd)
set(xsimd_DIR "${CMAKE_CURRENT_BINARY_DIR}/third_party/xsimd" CACHE STRING "" FORCE)

include_directories(third_party/xtensor/include)
add_subdirectory(third_party/xtensor)
set(xtensor_DIR "${CMAKE_CURRENT_BINARY_DIR}/third_party/xtensor" CACHE STRING "" FORCE)
