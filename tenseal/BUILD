load("@pybind11_bazel//:build_defs.bzl", "pybind_extension")

package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

pybind_extension(
    name = "_tenseal_cpp",
    srcs = [
        "binding.cpp",
        "//tenseal/sealapi:bindings.h",
        "//tenseal/sealapi:sealapi.cpp",
        "//tenseal/sealapi:sealapi_context.cpp",
        "//tenseal/sealapi:sealapi_encode.cpp",
        "//tenseal/sealapi:sealapi_encrypt.cpp",
        "//tenseal/sealapi:sealapi_evaluator.cpp",
        "//tenseal/sealapi:sealapi_helpers.cpp",
        "//tenseal/sealapi:sealapi_modulus.cpp",
        "//tenseal/sealapi:sealapi_util_namespace.cpp",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    features = ["-use_header_modules"],
    includes = TENSEAL_DEFAULT_INCLUDES,
    linkstatic = True,
    visibility = ["//visibility:public"],
    deps = [
        "//tenseal/cpp:tenseal_cc",
    ],
)

py_library(
    name = "tenseal",
    srcs = [
        "__init__.py",
        "enc_context.py",
        "version.py",
    ],
    data = [
        "//tenseal:_tenseal_cpp.so",
    ],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
    deps = ["//tenseal/tensors:tenseal_tensors"],
)
