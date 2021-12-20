load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

def tenseal_preload():
    if "rules_proto" not in native.existing_rules():
        ver = "f7a30f6f80006b591fa7c437fe5a951eb10bcbcf"
        http_archive(
            name = "rules_proto",
            sha256 = "9fc210a34f0f9e7cc31598d109b5d069ef44911a82f507d5a88716db171615a8",
            strip_prefix = "rules_proto-" + ver,
            urls = [
                "https://mirror.bazel.build/github.com/bazelbuild/rules_proto/archive/" + ver + ".tar.gz",
                "https://github.com/bazelbuild/rules_proto/archive/" + ver + ".tar.gz",
            ],
        )

    if "rules_foreign_cc" not in native.existing_rules():
        git_repository(
            name = "rules_foreign_cc",
            remote = "https://github.com/bazelbuild/rules_foreign_cc",
            init_submodules = True,
            commit="d54c78ab86b40770ee19f0949db9d74a831ab9f0",
            )

    if "pybind11_bazel" not in native.existing_rules():
        http_archive(
            name = "pybind11_bazel",
            strip_prefix = "pybind11_bazel-203508e14aab7309892a1c5f7dd05debda22d9a5",
            urls = ["https://github.com/pybind/pybind11_bazel/archive/203508e14aab7309892a1c5f7dd05debda22d9a5.zip"],
            sha256 = "75922da3a1bdb417d820398eb03d4e9bd067c4905a4246d35a44c01d62154d91",
        )

    if "pybind11" not in native.existing_rules():
        http_archive(
            name = "pybind11",
            build_file = "@pybind11_bazel//:pybind11.BUILD",
            strip_prefix = "pybind11-2.6.0",
            urls = ["https://github.com/pybind/pybind11/archive/v2.6.0.zip"],
        )

    if "rules_python" not in native.existing_rules():
        http_archive(
           name = "rules_python",
            url = "https://github.com/bazelbuild/rules_python/releases/download/0.5.0/rules_python-0.5.0.tar.gz",
            sha256 = "cd6730ed53a002c56ce4e2f396ba3b3be262fd7cb68339f0377a45e8227fe332",
        )
