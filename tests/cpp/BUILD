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

package(default_visibility = ["//visibility:public"])

PIR_DEFAULT_INCLUDES = ["."]

PIR_DEFAULT_COPTS = ["-std=c++17"]

cc_test(
    name = "tenseal_cpp_test",
    srcs = [
        "tensealcontext_test.cpp",
        "tensors/bfvvector_test.cpp",
        "tensors/ckksvector_test.cpp",
    ],
    copts = PIR_DEFAULT_COPTS,
    includes = PIR_DEFAULT_INCLUDES,
    linkstatic = True,
    deps = [
        "//tenseal/context:tenseal_context",
        "//tenseal/tensors:tenseal_tensors",
        "@com_google_googletest//:gtest",
        "@com_google_googletest//:gtest_main",
    ],
)
