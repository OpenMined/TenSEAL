#!/bin/sh

# fetch third_party libraries
git submodule init && git submodule update
# we need to install tenseal in order to build the cpp library
pip install .
