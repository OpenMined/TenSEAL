#!/bin/sh

# fetch third_party libraries
git submodule init && git submodule update
pip wheel . -w wheel/
twine upload wheel/*
