package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

cc_library(
    name = "tenseal_tensors_cc",
    srcs = [
        "bfvvector.cpp",
        "ckkstensor.cpp",
        "ckksvector.cpp",
        "utils/utils.cpp",
        "utils/utils.h",
    ],
    hdrs = [
        "api.h",
        "bfvvector.h",
        "ckkstensor.h",
        "ckksvector.h",
        "encrypted_tensor.h",
        "encrypted_vector.h",
        "plain_tensor.h",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    includes = TENSEAL_DEFAULT_INCLUDES,
    deps = [
        "//tenseal/cpp/context:tenseal_context_cc",
        "//tenseal/proto:tenseal_proto_cc",
        "@com_microsoft_gsl//:gsl",
        "@com_microsoft_seal//:seal",
        "@com_xtensorstack_xtensor//:xtensor",
    ],
)
