echo on

@REM
@REM Set Environment Variables
@REM
IF NOT DEFINED PYTHON_DIRECTORY (
  SET PYTHON_DIRECTORY=Python38
)
SET PY_EXE=C:\%PYTHON_DIRECTORY%\python.exe
SET PIP_EXE=C:\%PYTHON_DIRECTORY%\Scripts\pip.exe
SET PATH=%PATH%;C:\%PYTHON_DIRECTORY%
SET VC_ExecutablePath_x64=%VC_ExecutablePath_x64_x64%


bazel test --test_output=all --test_timeout=900 //...
