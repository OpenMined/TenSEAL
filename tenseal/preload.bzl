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
        pybind11_bazel_rev = "3946bd0164dc97a154b3136df180f3743cd2cbae"
        http_archive(
            name = "pybind11_bazel",
            strip_prefix = "pybind11_bazel-" + pybind11_bazel_rev,
            urls = ["https://github.com/pybind/pybind11_bazel/archive/" + pybind11_bazel_rev + ".zip"],
            sha256 = "2e92ae0484dedeb12f6d207487c1ae8a8eb1fccd34b4ec00f1bcee1559824d75",
        )

    if "pybind11" not in native.existing_rules():
        http_archive(
            name = "pybind11",
            build_file = "@pybind11_bazel//:pybind11.BUILD",
            strip_prefix = "pybind11-2.12.0",
            urls = ["https://github.com/pybind/pybind11/archive/v2.10.1.zip"],
            sha256 = "411f77380c43798506b39ec594fc7f2b532a13c4db674fcf2b1ca344efaefb68",
        )

    if "rules_python" not in native.existing_rules():
        http_archive(
            name = "rules_python",
            sha256 = "ca77768989a7f311186a29747e3e95c936a41dffac779aff6b443db22290d913",
            strip_prefix = "rules_python-0.36.0",
            url = "https://github.com/bazelbuild/rules_python/releases/download/0.36.0/rules_python-0.36.0.tar.gz",
        )
