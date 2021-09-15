"""Test runner required by Bazel py_test rule.
"""
import sys
import os
import pytest

if __name__ == "__main__":
    sys.exit(
        pytest.main(
            ["-m", "not slow", "-s", "-v", "-x", os.path.dirname(os.path.abspath(__file__))]
        )
    )
