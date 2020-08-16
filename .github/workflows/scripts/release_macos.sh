#!/bin/sh

pip wheel . -w wheel/
twine upload --skip-existing wheel/*
