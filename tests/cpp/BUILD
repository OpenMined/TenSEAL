package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]
TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

cc_test(
    name = "tenseal_cpp_test",
    srcs = [
        "tensealcontext_test.cpp",
        "tensors/bfvvector_test.cpp",
        "tensors/ckksvector_test.cpp",
        "tensors/ckkstensor_test.cpp",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    includes = TENSEAL_DEFAULT_INCLUDES,
    linkstatic = True,
    deps = [
        "//tenseal/cpp/context:tenseal_context_cc",
        "//tenseal/cpp:tenseal_cc",
        "//tenseal/cpp/tensors:tenseal_tensors_cc",
        "//tenseal/cpp/utils:tenseal_utils_cc",
        "@com_google_googletest//:gtest",
        "@com_google_googletest//:gtest_main",
    ],
)
