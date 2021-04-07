load("@org_openmined_tenseal_python_deps//:requirements.bzl", "requirement")

py_test(
    name = "sealapi_tests",
    srcs = [
        "main.py",
        "test_context.py",
        "test_encode_decode.py",
        "test_encrypt_decrypt.py",
        "test_evaluator.py",
        "test_keygen.py",
        "test_modulus.py",
        "test_regression.py",
        "test_sanity.py",
        "test_util.py",
        "test_valcheck.py",
        "utils.py",
    ],
    main = "main.py",
    python_version = "PY3",
    srcs_version = "PY3",
    deps = [
        "//tenseal/sealapi",
        requirement("pytest"),
        requirement("numpy"),
    ],
)
