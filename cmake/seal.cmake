include(FetchContent)

set(SEAL_BUILD_DEPS ON)
set(SEAL_USE_MSGSL ON)
set(SEAL_USE_INTEL_HEXL ON)

FetchContent_Declare(
  com_microsoft_seal
  GIT_REPOSITORY https://github.com/microsoft/SEAL
  GIT_TAG        97e4b8ddbc1105fe8338f8c18ff3cafcba686266 #v3.6.5
)
FetchContent_MakeAvailable(com_microsoft_seal)

include_directories(${com_microsoft_seal_SOURCE_DIR}/native/src)
include_directories(${com_microsoft_seal_SOURCE_DIR}/thirdparty/msgsl-src/include/)
include_directories(${com_microsoft_seal_SOURCE_DIR}/thirdparty/hexl-src/hexl/include/)
include_directories(${com_microsoft_seal_BINARY_DIR}/native/src)
