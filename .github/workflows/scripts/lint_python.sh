#!/bin/sh
set -e

# stop the build if there are Python syntax errors or undefined names
flake8 --config=.flake8 .
black --check tenseal/ tests/python/
# exit-zero treats all errors as warnings.
flake8 . --count --exit-zero --max-complexity=10 --max-line-length=100 --statistics
