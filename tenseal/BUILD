load("@pybind11_bazel//:build_defs.bzl", "pybind_extension")

py_library(
    name = "sealapi",
    srcs = ["sealapi/__init__.py"],
    data = ["//tenseal/interface:_sealapi_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
)

py_library(
    name = "tenseal",
    srcs = ["__init__.py"],
    data = ["//tenseal/interface:_tenseal_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
)
