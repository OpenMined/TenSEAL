load("@org_openmined_tenseal_python_deps//:requirements.bzl", "requirement")

py_test(
    name = "tenseal_python_tests",
    srcs = [
        "main.py",
        "tensors/test_bfv_vector.py",
        "tensors/test_bfv_tensor.py",
        "tensors/test_ckks_tensor.py",
        "tensors/test_ckks_vector.py",
        "tensors/test_plain_tensor.py",
        "tensors/test_regression.py",
        "tensors/test_serialization.py",
        "test_enc_dec.py",
        "test_serialization.py",
        "test_tensealcontext.py",
        "utils.py",
    ],
    main = "main.py",
    python_version = "PY3",
    srcs_version = "PY3",
    deps = [
        "//tenseal",
        requirement("pytest"),
        requirement("numpy"),
        requirement("pytest-benchmark"),
        requirement("scikit-image"),
    ],
)
