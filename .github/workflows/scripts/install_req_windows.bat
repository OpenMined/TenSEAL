echo on

python -m pip install --upgrade pip
pip install --group dev || goto :error
pip install setuptools wheel twine auditwheel
