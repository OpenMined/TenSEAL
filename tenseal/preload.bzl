#
# Copyright 2020 the authors listed in CONTRIBUTORS.md
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

def tenseal_preload():
    if "rules_proto" not in native.existing_rules():
        http_archive(
            name = "rules_proto",
            sha256 = "602e7161d9195e50246177e7c55b2f39950a9cf7366f74ed5f22fd45750cd208",
            strip_prefix = "rules_proto-97d8af4dc474595af3900dd85cb3a29ad28cc313",
            urls = [
                "https://mirror.bazel.build/github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
                "https://github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
            ],
        )

    if "rules_foreign_cc" not in native.existing_rules():
        git_repository(
            name = "rules_foreign_cc",
            remote = "https://github.com/bazelbuild/rules_foreign_cc",
            init_submodules = True,
            commit="04c04fe7d2fa09e46c630c37d8f32e56598527ca",
            )

    if "pybind11_bazel" not in native.existing_rules():
        http_archive(
            name = "pybind11_bazel",
            strip_prefix = "pybind11_bazel-py3",
            urls = ["https://github.com/kerrick-lyft/pybind11_bazel/archive/py3.zip"],
            sha256 = "7b45a217ad57a50698ff83ca36fce37ebbd17502d429bd1e78bfacb66bab17dc",
        )

    if "pybind11" not in native.existing_rules():
        http_archive(
            name = "pybind11",
            build_file = "@pybind11_bazel//:pybind11.BUILD",
            strip_prefix = "pybind11-2.5.0",
            urls = ["https://github.com/pybind/pybind11/archive/v2.5.0.zip"],
            sha256 = "1859f121837f6c41b0c6223d617b85a63f2f72132bae3135a2aa290582d61520",
        )

    if "rules_python" not in native.existing_rules():
        http_archive(
            name = "rules_python",
            url = "https://github.com/bazelbuild/rules_python/archive/a0fbf98d4e3a232144df4d0d80b577c7a693b570.zip",
            strip_prefix = "rules_python-a0fbf98d4e3a232144df4d0d80b577c7a693b570",
            sha256 = "98c9b903f6e8fe20b7e56d19c4822c8c49a11b475bd4ec0ca6a564e8bc5d5fa2",
        )
 
    RULES_PYTHON_EXTERNAL_VERSION = "3aacabb928a710b10bff13d0bde49ceaade58f15"
    if "rules_python_external" not in native.existing_rules():
        http_archive(
            name = "rules_python_external",
            sha256 = "5a1d7e6e4bab49dcdd787694f0f5d52ac5debdfc1852981a89cc414e338d60dc",
            strip_prefix = "rules_python_external-{version}".format(version = RULES_PYTHON_EXTERNAL_VERSION),
            url = "https://github.com/dillon-giacoppo/rules_python_external/archive/{version}.zip".format(version =   RULES_PYTHON_EXTERNAL_VERSION),
        )
