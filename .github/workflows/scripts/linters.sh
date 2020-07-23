#!/bin/sh
set -e

flake8 --config=.flake8 .
flake8 . --count --exit-zero --max-complexity=10 --max-line-length=100 --statistics

black --check private_set_intersection/python

# Print changes.
git diff
# Already well formated if 'git diff' doesn't output anything.
! ( git diff |  grep -q ^ ) || exit 1