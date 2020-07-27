package(default_visibility = ["//visibility:public"])

PIR_DEFAULT_INCLUDES = ["."]

PIR_DEFAULT_COPTS = ["-std=c++17"]

cc_test(
    name = "tenseal_cpp_test",
    srcs = [
        "tensealcontext_test.cpp",
        "tensors/bfvvector_test.cpp",
        "tensors/ckksvector_test.cpp",
    ],
    copts = PIR_DEFAULT_COPTS,
    includes = PIR_DEFAULT_INCLUDES,
    linkstatic = True,
    deps = [
        "//tenseal/cpp/context:tenseal_context_cc",
        "//tenseal/cpp/tensors:tenseal_tensors_cc",
        "@com_google_googletest//:gtest",
        "@com_google_googletest//:gtest_main",
    ],
)
