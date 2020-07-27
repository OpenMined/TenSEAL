load("@rules_foreign_cc//tools/build_defs:cmake.bzl", "cmake_external")

filegroup(
    name = "src", 
    srcs = glob(["**"]), 
    visibility = ["//visibility:public"]
)

cmake_external(
   name = "seal",
   cmake_options = [
        "-DSEAL_USE_CXX17=17",
        "-DSEAL_USE_INTRIN=ON",
        "-DSEAL_USE_MSGSL=OFF",
        "-DSEAL_USE_ZLIB=OFF",
        "-DSEAL_BUILD_TESTS=OFF",
        "-DBUILD_SHARED_LIBS=OFF",
        "-DCMAKE_BUILD_TYPE=Release",
   ],
   make_commands = [
        "make",
        "make install"
   ],
   lib_source = ":src",
   install_prefix = "native/src",
   out_include_dir = "include/SEAL-3.5",
   static_libraries = ["libseal-3.5.a"],
   visibility = ["//visibility:public"],
)
