include_directories(third_party/SEAL/native/src)
include_directories(third_party/SEAL/thirdparty/msgsl/src/include)

set(SEAL_BUILD_DEPS ON)
add_subdirectory(third_party/SEAL)
