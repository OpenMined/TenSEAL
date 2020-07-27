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

load("@pybind11_bazel//:build_defs.bzl", "pybind_extension")

package(default_visibility = ["//visibility:public"])

TENSEAL_DEFAULT_INCLUDES = ["."]

TENSEAL_DEFAULT_COPTS = ["-std=c++17"]

pybind_extension(
    name = "_tenseal_cpp",
    srcs = [
        "binding.cpp",
    ],
    copts = TENSEAL_DEFAULT_COPTS,
    features = ["-use_header_modules"],
    includes = TENSEAL_DEFAULT_INCLUDES,
    linkstatic = True,
    visibility = ["//visibility:public"],
    deps = [
        "//tenseal/cpp/context:tenseal_context_cc",
        "//tenseal/cpp/tensors:tenseal_tensors_cc",
        "@com_microsoft_seal//:seal",
    ],
)
