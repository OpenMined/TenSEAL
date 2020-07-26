load("@pybind11_bazel//:build_defs.bzl", "pybind_extension")

package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

pybind_extension(
    name = "_tenseal_cpp",
    srcs = [
        "binding.cpp",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    features = ["-use_header_modules"],
    includes = TENSEAL_DEFAULT_INCLUDES,
    linkstatic = True,
    visibility = ["//visibility:public"],
    deps = [
        "//tenseal/context:tenseal_context",
        "//tenseal/tensors:tenseal_tensors",
        "@com_microsoft_seal//:seal",
    ],
)

py_library(
    name = "tenseal_cpp",
    data = ["//tenseal:_tenseal_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
)

py_library(
    name = "tenseal",
    srcs = [
        "__init__.py",
        "version.py",
    ],
    data = ["//tenseal:_tenseal_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
    deps = ["//tenseal/tensors:tenseal_tensors_py"],
)

pybind_extension(
    name = "_sealapi_cpp",
    srcs = [
        "sealapi/bindings.h",
        "sealapi/sealapi.cpp",
        "sealapi/sealapi_context.cpp",
        "sealapi/sealapi_encode.cpp",
        "sealapi/sealapi_encrypt.cpp",
        "sealapi/sealapi_evaluator.cpp",
        "sealapi/sealapi_helpers.cpp",
        "sealapi/sealapi_modulus.cpp",
        "sealapi/sealapi_util_namespace.cpp",
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
        "sealapi/__init__.py",
        "sealapi/util/__init__.py",
    ],
    data = ["//tenseal/sealapi:_sealapi_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
)
