#!/bin/sh

pip wheel . -w wheel/
twine upload wheel/*
