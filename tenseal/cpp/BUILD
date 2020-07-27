package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

cc_library(
    name = "tenseal_cc",
    copts = TENSEAL_DEFAULT_COPTS,
    features = ["-use_header_modules"],
    includes = TENSEAL_DEFAULT_INCLUDES,
    linkstatic = True,
    visibility = ["//visibility:public"],
    deps = [
        "//tenseal/cpp/context:tenseal_context_cc",
        "//tenseal/cpp/tensors:tenseal_tensors_cc",
        "@com_microsoft_seal//:seal",
    ],
)
