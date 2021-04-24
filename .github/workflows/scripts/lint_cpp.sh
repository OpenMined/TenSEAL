#!/bin/sh
set -e

# Lint files (all .cpp and .h files) inplace.
find ./tenseal/  \( -iname *.h -o -iname *.cpp \) | xargs clang-format -i -style='file'
if [ $? -ne 0 ]
then
    exit 1
fi

find ./tests/  \( -iname *.h -o -iname *.cpp \) | xargs clang-format -i -style='file'
if [ $? -ne 0 ]
then
    exit 1
fi

# Print changes.
git diff
# Already well formated if 'git diff' doesn't output anything.
! ( git diff |  grep -q ^ ) || exit 1
