echo on

python -m pip install --upgrade pip
pip install -r ./requirements_dev.txt || goto :error
pip install setuptools wheel twine auditwheel
