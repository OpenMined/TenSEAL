load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

def tenseal_preload():
    if "platforms" not in native.existing_rules():
        http_archive(
            name = "platforms",
            urls = [
                "https://mirror.bazel.build/github.com/bazelbuild/platforms/releases/download/0.0.6/platforms-0.0.6.tar.gz",
                "https://github.com/bazelbuild/platforms/releases/download/0.0.6/platforms-0.0.6.tar.gz",
            ],
            sha256 = "5308fc1d8865406a49427ba24a9ab53087f17f5266a7aabbfc28823f3916e1ca",
        )
    if "rules_proto" not in native.existing_rules():
        http_archive(
            name = "rules_proto",
            sha256 = "80d3a4ec17354cccc898bfe32118edd934f851b03029d63ef3fc7c8663a7415c",
            strip_prefix = "rules_proto-5.3.0-21.5",
            urls = [
                "https://github.com/bazelbuild/rules_proto/archive/refs/tags/5.3.0-21.5.tar.gz",
            ],
        )

    if "rules_foreign_cc" not in native.existing_rules():
        http_archive(
            name = "rules_foreign_cc",
            sha256 = "2a4d07cd64b0719b39a7c12218a3e507672b82a97b98c6a89d38565894cf7c51",
            strip_prefix = "rules_foreign_cc-0.9.0",
            url = "https://github.com/bazelbuild/rules_foreign_cc/archive/refs/tags/0.9.0.tar.gz",
        )


    if "pybind11_bazel" not in native.existing_rules():
        pybind11_bazel_rev = "faf56fb3df11287f26dbc66fdedf60a2fc2c6631"
        http_archive(
            name = "pybind11_bazel",
            strip_prefix = "pybind11_bazel-" + pybind11_bazel_rev,
            urls = ["https://github.com/pybind/pybind11_bazel/archive/" + pybind11_bazel_rev + ".zip"],
            sha256 = "a185aa68c93b9f62c80fcb3aadc3c83c763854750dc3f38be1dadcb7be223837",
        )

    if "pybind11" not in native.existing_rules():
        http_archive(
            name = "pybind11",
            build_file = "@pybind11_bazel//:pybind11.BUILD",
            strip_prefix = "pybind11-2.10.1",
            urls = ["https://github.com/pybind/pybind11/archive/v2.10.1.zip"],
            sha256 = "fcf94065efcfd0a7a828bacf118fa11c43f6390d0c805e3e6342ac119f2e9976",
        )

    if "rules_python" not in native.existing_rules():
        http_archive(
            name = "rules_python",
            sha256 = "497ca47374f48c8b067d786b512ac10a276211810f4a580178ee9b9ad139323a",
            strip_prefix = "rules_python-0.16.1",
            url = "https://github.com/bazelbuild/rules_python/archive/refs/tags/0.16.1.tar.gz",
        )
