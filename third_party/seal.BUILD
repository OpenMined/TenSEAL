load("@rules_foreign_cc//foreign_cc:defs.bzl", "cmake")

filegroup(
    name = "src",
    srcs = glob(["**"]),
    visibility = ["//visibility:public"],
)

cmake(
    name = "seal_lib",
    lib_source = ":src",
    out_include_dir = "include/SEAL-4.1",
    visibility = ["//visibility:public"],
    copts = [
        "-DSEAL_USE_CXX17=17",
        "-DSEAL_USE_INTRIN=ON",
        "-DSEAL_USE_MSGSL=ON",
        "-DSEAL_USE_ZLIB=ON",
        "-DSEAL_BUILD_TESTS=OFF",
        "-DBUILD_SHARED_LIBS=OFF",
        "-DCMAKE_BUILD_TYPE=Release",
    ],
    install = True,
    out_static_libs = ["libseal-4.1.a"],

)

cc_library(
    name = "seal",
    visibility = ["//visibility:public"],
    deps = select({
        "//conditions:default": [":seal_lib"],
    }),
)
