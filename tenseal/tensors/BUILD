package(default_visibility = ["//visibility:public"])

py_library(
    name = "tenseal_tensors",
    srcs = [
        "__init__.py",
        "abstract_tensor.py",
        "bfvvector.py",
        "ckkstensor.py",
        "ckksvector.py",
        "plaintensor.py",
    ],
    data = ["//tenseal:_tenseal_cpp.so"],
    srcs_version = "PY3",
    visibility = ["//visibility:public"],
)
