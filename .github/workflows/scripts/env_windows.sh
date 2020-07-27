#!/bin/bash
set -e

# Use a temporary directory with a short name.
export TMPDIR="C:/tmp"
mkdir -p "$TMPDIR"

# Set bash path
export BAZEL_SH=${BAZEL_SH:-"C:/tools/msys64/usr/bin/bash"}

export PYTHON_BASE_PATH="${PYTHON_DIRECTORY:-Program Files/Anaconda3}"

# Set the path to find bazel.
export PATH="/c/tools/bazel/:$PATH"

# Set Python path for ./configure
export PYTHON_BIN_PATH="C:/${PYTHON_BASE_PATH}/python.exe"
export PYTHON_LIB_PATH="C:/${PYTHON_BASE_PATH}/lib/site-packages"

# Add python into PATH, it's needed because gen_git_source.py uses
# '/usr/bin/env python' as a shebang
export PATH="/c/${PYTHON_BASE_PATH}:$PATH"
# Add git into PATH needed for gen_git_source.py
export PATH="/c/Program Files/Git/cmd:$PATH"

# Make sure we have pip in PATH
export PATH="/c/${PYTHON_BASE_PATH}/Scripts:$PATH"

#VS env
export VS160COMNTOOLS="/c/Program Files (x86)/Microsoft Visual Studio/2019/Enterprise/Common7/Tools"
