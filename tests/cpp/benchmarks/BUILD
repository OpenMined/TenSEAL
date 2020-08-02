package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

cc_binary(
    name = "benchmark",
    srcs = [
        "benchmark.cpp",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    includes = TENSEAL_DEFAULT_INCLUDES,
    linkstatic = True,
    deps = [
        "//tenseal/cpp:tenseal_cc",
        "@com_google_benchmark//:benchmark_main",
        "@com_google_googletest//:gtest",
    ],
)
