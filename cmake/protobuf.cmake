if(WIN32)
  include_directories(protobuf/src)
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotobuf-lite.lib")
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotobuf.lib")
  link_libraries("$ENV{PROGRAMFILES\(x86\)}/protobuf/lib/libprotoc.lib")
else()
  # building protobuf using cmake
  add_subdirectory(tenseal/proto)

  set(Protobuf_USE_STATIC_LIBS ON)
  set(Protobuf_DEBUG ON)

  find_package(Protobuf REQUIRED)
  include(FindProtobuf)
  include_directories(${Protobuf_INCLUDE_DIRS})
endif()


