package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

cc_library(
    name = "tenseal_context_cc",
    srcs = [
        "sealcontext.cpp",
        "sealcontext.h",
        "tensealcontext.cpp",
    ],
    hdrs = [
        "tensealcontext.h",
        "tensealencoder.h",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    includes = TENSEAL_DEFAULT_INCLUDES,
    deps = [
        "//tenseal/cpp/utils:tenseal_utils_cc",
        "//tenseal/proto:tenseal_proto_cc",
        "@com_microsoft_seal//:seal",
    ],
)
