package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

cc_library(
    name = "tenseal_tensors_cc",
    srcs = [
        "vector.cpp",
        "bfvvector.cpp",
        "ckksvector.cpp",
        "utils/matrix_ops.h",
        "utils/utils.cpp",
        "utils/utils.h",
    ],
    hdrs = [
        "vector.h",
        "bfvvector.h",
        "ckksvector.h",
        "api.h",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    includes = TENSEAL_DEFAULT_INCLUDES,
    deps = [
        "//tenseal/cpp/context:tenseal_context_cc",
        "//tenseal/proto:tenseal_proto_cc",
        "@com_microsoft_seal//:seal",
    ],
)
