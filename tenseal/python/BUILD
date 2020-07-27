package(default_visibility = ["//visibility:public"])

py_library(
    name = "tenseal_internal",
    srcs = [
        "__init__.py",
        "version.py",
    ],
    data = ["//tenseal/cpp:_tenseal_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
    deps = ["//tenseal/python/tensors:tenseal_tensors"],
)
