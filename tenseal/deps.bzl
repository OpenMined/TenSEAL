load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")
load("@rules_foreign_cc//:workspace_definitions.bzl", "rules_foreign_cc_dependencies")

load("@pybind11_bazel//:python_configure.bzl", "python_configure")
load("@rules_python//python:repositories.bzl", "py_repositories")
load("@rules_python//python:pip.bzl", "pip_install")

def tenseal_deps():
    if "com_google_googletest" not in native.existing_rules():
        http_archive(
            name = "com_google_googletest",
            sha256 = "94c634d499558a76fa649edb13721dce6e98fb1e7018dfaeba3cd7a083945e91",
            strip_prefix = "googletest-release-1.10.0",
            url = "https://github.com/google/googletest/archive/release-1.10.0.zip",
        )
    if "com_google_benchmark" not in native.existing_rules():
        http_archive(
            name = "com_google_benchmark",
            sha256 = "a9d41abe1bd45a707d39fdfd46c01b92e340923bc5972c0b54a48002a9a7cfa3",
            strip_prefix = "benchmark-8cead007830bdbe94b7cc259e873179d0ef84da6",
            url = "https://github.com/google/benchmark/archive/8cead007830bdbe94b7cc259e873179d0ef84da6.zip",
        )

    if "com_microsoft_seal" not in native.existing_rules():
        http_archive(
            name = "com_microsoft_seal",
            build_file = "//third_party:seal.BUILD",
            strip_prefix = "SEAL-3.7.1",
            sha256 = "27446ea4fcea334faabc7439b1e312603ed700e3d26a45ec8408fd1d114374ec",
            urls = ["https://github.com/microsoft/SEAL/archive/v3.7.1.tar.gz"],
        )

    if "com_xtensorstack_xtensor" not in native.existing_rules():
        http_archive(
            name = "com_xtensorstack_xtensor",
            sha256 = "c8377f8ec995762c89dea2fdf4ac06b53ba491a6f0df3421c4719355e42425d2",
            build_file = "//third_party:xtensor.BUILD",
            strip_prefix = "xtensor-0.23.4/include",
            urls = ["https://github.com/xtensor-stack/xtensor/archive/0.23.4.tar.gz"],
        )
    if "com_xtensorstack_xtl" not in native.existing_rules():
        http_archive(
            name = "com_xtensorstack_xtl",
            sha256 = "95c221bdc6eaba592878090916383e5b9390a076828552256693d5d97f78357c",
            build_file = "//third_party:xtl.BUILD",
            strip_prefix = "xtl-0.7.2/include",
            urls = ["https://github.com/xtensor-stack/xtl/archive/0.7.2.tar.gz"],
        )
    if "com_nlohmann_json" not in native.existing_rules():
        http_archive(
            name = "com_nlohmann_json",
            build_file = "//third_party:nlohmann_json.BUILD",
            sha256 = "4cf0df69731494668bdd6460ed8cb269b68de9c19ad8c27abc24cd72605b2d5b",
            strip_prefix = "json-3.9.1/include",
            urls = ["https://github.com/nlohmann/json/archive/v3.9.1.tar.gz"],
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

    #Python
    py_repositories()

    # Configure python3 for pybind11.
    python_configure(name = "local_config_python", python_version = "3")

    # Install pip requirements for Python tests.
    pip_install(
        name = "org_openmined_tenseal_python_deps",
        requirements = "@org_openmined_tenseal//:requirements_dev.txt",
    )

