load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")
load("@rules_foreign_cc//:workspace_definitions.bzl", "rules_foreign_cc_dependencies")

load("@pybind11_bazel//:python_configure.bzl", "python_configure")
load("@rules_python//python:repositories.bzl", "py_repositories")
load("@rules_python_external//:repositories.bzl", "rules_python_external_dependencies")
load("@rules_python_external//:defs.bzl", "pip_install")

def tenseal_deps():
    if "com_google_googletest" not in native.existing_rules():
        http_archive(
            name = "com_google_googletest",
            sha256 = "94c634d499558a76fa649edb13721dce6e98fb1e7018dfaeba3cd7a083945e91",
            strip_prefix = "googletest-release-1.10.0",
            url = "https://github.com/google/googletest/archive/release-1.10.0.zip",
        )

    if "com_microsoft_seal" not in native.existing_rules():
        http_archive(
            name = "com_microsoft_seal",
            build_file = "//third_party:seal.BUILD",
            sha256 = "13674a39a48c0d1c6ff544521cf10ee539ce1af75c02bfbe093f7621869e3406",
            strip_prefix = "SEAL-3.5.6",
            urls = ["https://github.com/microsoft/SEAL/archive/v3.5.6.tar.gz"],
        )

    rules_proto_dependencies()

    rules_proto_toolchains()

    rules_foreign_cc_dependencies()

    #Python
    py_repositories()

    # Configure python3 for pybind11.
    python_configure(name = "local_config_python", python_version = "3")

    # Install pip requirements for Python tests.
    rules_python_external_dependencies()
    pip_install(
        name = "org_openmined_tenseal_python_deps",
        requirements = "@org_openmined_tenseal//:requirements_dev.txt",
    )

