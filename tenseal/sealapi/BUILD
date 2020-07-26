load("@pybind11_bazel//:build_defs.bzl", "pybind_extension")

package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

pybind_extension(
    name = "_sealapi_cpp",
    srcs = [
        "bindings.h",
        "sealapi.cpp",
        "sealapi_context.cpp",
        "sealapi_encode.cpp",
        "sealapi_encrypt.cpp",
        "sealapi_evaluator.cpp",
        "sealapi_helpers.cpp",
        "sealapi_modulus.cpp",
        "sealapi_util_namespace.cpp",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    features = ["-use_header_modules"],
    includes = TENSEAL_DEFAULT_INCLUDES,
    linkstatic = True,
    visibility = ["//visibility:public"],
    deps = [
        "@com_microsoft_seal//:seal",
    ],
)

py_library(
    name = "sealapi_cpp",
    data = ["//tenseal/sealapi:_sealapi_cpp.so"],
    visibility = ["//visibility:public"],
)

py_library(
    name = "sealapi",
    srcs = [
        "__init__.py",
        "util/__init__.py",
    ],
    data = ["//tenseal/sealapi:_sealapi_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
)
