include(FetchContent)

set(SEAL_BUILD_DEPS ON)
set(SEAL_USE_MSGSL ON)
set(SEAL_USE_INTEL_HEXL ON)

FetchContent_Declare(
  com_microsoft_seal
  GIT_REPOSITORY https://github.com/microsoft/SEAL
  GIT_TAG        7ba34a956015efdd09321f6a4b3c7b09695c9bc4 #v3.7
)
FetchContent_MakeAvailable(com_microsoft_seal)

include_directories(${com_microsoft_seal_SOURCE_DIR}/native/src)
include_directories(${com_microsoft_seal_SOURCE_DIR}/thirdparty/msgsl-src/include/)
include_directories(${com_microsoft_seal_SOURCE_DIR}/thirdparty/hexl-src/hexl/include/)
include_directories(${com_microsoft_seal_BINARY_DIR}/native/src)
