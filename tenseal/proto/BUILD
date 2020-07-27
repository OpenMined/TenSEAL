package(default_visibility = ["//visibility:public"])

load("@rules_proto//proto:defs.bzl", "proto_library")

proto_library(
    name = "tenseal_proto",
    srcs = [
        "tensealcontext.proto",
        "tensors.proto",
    ],
)

cc_proto_library(
    name = "tenseal_proto_cc",
    deps = [":tenseal_proto"],
)
