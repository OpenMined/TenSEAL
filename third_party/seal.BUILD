load("@rules_foreign_cc//tools/build_defs:cmake.bzl", "cmake_external")

filegroup(
    name = "src",
    srcs = glob(["**"]),
    visibility = ["//visibility:public"],
)

cmake_external(
    name = "seal_nix",
    cmake_options = [
        "-DSEAL_USE_CXX17=17",
        "-DSEAL_USE_INTRIN=ON",
        "-DSEAL_USE_MSGSL=OFF",
        "-DSEAL_USE_ZLIB=ON",
        "-DSEAL_BUILD_TESTS=OFF",
        "-DBUILD_SHARED_LIBS=OFF",
        "-DCMAKE_BUILD_TYPE=Release",
    ],
    install_prefix = "native/src",
    lib_source = ":src",
    make_commands = [
        "make",
        "make install",
    ],
    out_include_dir = "include/SEAL-3.6",
    static_libraries = ["libseal-3.6.a"],
    visibility = ["//visibility:public"],
)

cmake_external(
    name = "seal_win",
    cmake_options = [
        "-G \"Visual Studio 16 2019\" -A x64",
        "-DSEAL_USE_CXX17=17",
        "-DSEAL_USE_INTRIN=ON",
        "-DSEAL_USE_MSGSL=OFF",
        "-DSEAL_USE_ZLIB=ON",
        "-DSEAL_BUILD_TESTS=OFF",
        "-DBUILD_SHARED_LIBS=OFF",
        "-DCMAKE_BUILD_TYPE=Release",
    ],
    generate_crosstool_file = True,
    install_prefix = "native/src",
    lib_source = ":src",
    make_commands = ["make"],
    out_include_dir = "include/SEAL-3.6",
    static_libraries = ["libseal-3.6.a"],
    visibility = ["//visibility:public"],
)

cc_library(
    name = "seal",
    visibility = ["//visibility:public"],
    deps = select({
        "@bazel_tools//src/conditions:windows": [":seal_win"],
        "//conditions:default": [":seal_nix"],
    }),
)
