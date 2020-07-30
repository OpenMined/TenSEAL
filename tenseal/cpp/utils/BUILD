package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

cc_library(
    name = "tenseal_utils_cc",
    hdrs = [
        "proto.h",
        "queue.h",
        "scope.h",
        "serialization.h",
        "threadpool.h",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    includes = TENSEAL_DEFAULT_INCLUDES,
    deps = [
        "//tenseal/proto:tenseal_proto_cc",
        "@com_microsoft_seal//:seal",
    ],
)
