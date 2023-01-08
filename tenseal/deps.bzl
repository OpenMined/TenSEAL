load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")
load("@rules_foreign_cc//foreign_cc:repositories.bzl", "rules_foreign_cc_dependencies")

load("@pybind11_bazel//:python_configure.bzl", "python_configure")
load("@rules_python//python:pip.bzl", "pip_parse")


def tenseal_deps():
    if "com_google_googletest" not in native.existing_rules():
        http_archive(
            name = "com_google_googletest",
            sha256 = "24564e3b712d3eb30ac9a85d92f7d720f60cc0173730ac166f27dda7fed76cb2",
            strip_prefix = "googletest-release-1.12.1",
            url = "https://github.com/google/googletest/archive/release-1.12.1.zip",
        )
    if "com_google_benchmark" not in native.existing_rules():
        http_archive(
            name = "com_google_benchmark",
            strip_prefix = "benchmark-1.7.1",
            url = "https://github.com/google/benchmark/archive/refs/tags/v1.7.1.zip",
        )

    if "com_microsoft_seal" not in native.existing_rules():
        http_archive(
            name = "com_microsoft_seal",
            build_file = "//third_party:seal.BUILD",
            sha256 = "cb2d608656c09877e3c9dd260a9887094e4cfa8a9fe4127dac2ade0a4c172122",
            strip_prefix = "SEAL-4.1.1",
            urls = ["https://github.com/microsoft/SEAL/archive/v4.1.1.tar.gz"],
        )

    if "com_xtensorstack_xtensor" not in native.existing_rules():
        http_archive(
            name = "com_xtensorstack_xtensor",
            sha256 = "3acde856b9fb8cf4e2a7b66726da541275d40ab9b002e618ad985ab97f08ca4f",
            build_file = "//third_party:xtensor.BUILD",
            strip_prefix = "xtensor-0.24.3/include",
            urls = ["https://github.com/xtensor-stack/xtensor/archive/0.24.3.tar.gz"],
        )
    if "com_xtensorstack_xtl" not in native.existing_rules():
        http_archive(
            name = "com_xtensorstack_xtl",
            sha256 = "3c88be0e696b64150c4de7a70f9f09c00a335186b0b0b409771ef9f56bca7d9a",
            build_file = "//third_party:xtl.BUILD",
            strip_prefix = "xtl-0.7.4/include",
            urls = ["https://github.com/xtensor-stack/xtl/archive/0.7.4.tar.gz"],
        )
    if "com_nlohmann_json" not in native.existing_rules():
        http_archive(
            name = "com_nlohmann_json",
            build_file = "//third_party:nlohmann_json.BUILD",
            strip_prefix = "json-3.11.2/include",
            urls = ["https://github.com/nlohmann/json/archive/v3.11.2.tar.gz"],
        )
    if "com_microsoft_gsl" not in native.existing_rules():
        http_archive(
            name = "com_microsoft_gsl",
            sha256 = "d3234d7f94cea4389e3ca70619b82e8fb4c2f33bb3a070799f1e18eef500a083",
            build_file = "//third_party:gsl.BUILD",
            strip_prefix = "GSL-3.1.0/include",
            urls = ["https://github.com/microsoft/GSL/archive/v3.1.0.tar.gz"],
        )




    rules_proto_dependencies()

    rules_proto_toolchains()

    rules_foreign_cc_dependencies()

    # Configure python3 for pybind11.
    python_configure(name = "local_config_python", python_version = "3")

    # Install pip requirements for Python tests.
    pip_parse(
        name = "org_openmined_tenseal_python_deps",
        requirements_lock = "@org_openmined_tenseal//:requirements_dev.lock",
    )

