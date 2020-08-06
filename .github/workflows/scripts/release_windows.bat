@echo off

pip wheel . -w wheel/
twine upload --skip-existing wheel/*
