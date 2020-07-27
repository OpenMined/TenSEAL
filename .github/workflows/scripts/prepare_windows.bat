echo on

@REM
@REM Set Environment Variables
@REM
IF NOT DEFINED PYTHON_DIRECTORY (
  SET PYTHON_DIRECTORY=C:\hostedtoolcache\windows\Python\3.8.3\x64
)
SET PY_EXE=%PYTHON_DIRECTORY%\python.exe
SET PIP_EXE=%PYTHON_DIRECTORY%\Scripts\pip.exe
SET PATH=%PATH%;%PYTHON_DIRECTORY%
SET VC_ExecutablePath_x64=%VC_ExecutablePath_x64_x64%


bazel test --test_output=all --test_timeout=900 //...
