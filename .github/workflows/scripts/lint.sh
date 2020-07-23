#!/bin/sh
set -e

# stop the build if there are Python syntax errors or undefined names
flake8 --config=.flake8 --exclude=tenseal/sealapi,tests/sealapi .
black --check --exclude "sealapi" tenseal/ tests/
# exit-zero treats all errors as warnings.
flake8 . --count --exit-zero --max-complexity=10 --max-line-length=100 --statistics

# lint files (all .cpp and .h files) inplace
find ./tenseal/  \( -iname *.h -o -iname *.cpp \) -a -not -path "*sealapi*" | xargs clang-format -i -style='file'
# print changes
git diff
# already well formated if 'git diff' doesn't output
! ( git diff |  grep -q ^ ) || exit 1