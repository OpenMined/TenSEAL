if(WIN32)
  set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} /MT")
  set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} /MTd")

  include_directories(protobuf/src)
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotobuf-lite.lib")
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotobuf.lib")
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotoc.lib")
else()
  add_subdirectory(tenseal/proto)
endif()


