import os
import re
import setuptools


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()


def find_version():
    version_file = read("tenseal/version.py")
    version_re = r"__version__ = '(?P<version>.+)'"
    version = re.match(version_re, version_file).group('version')
    return version


setuptools.setup(
    name="tenseal",
    version=find_version(),
    author="Ayoub Benaissa",
    author_email="ayouben9@gmail.com",
    description="A Library for Homomorphic Encryption Operations on Tensors",
    license="Apache-2.0",
    keywords="homomorphic encryption tensor deep learning privacy secure",
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    url="https://github.com/OpenMined/TenSEAL",
    packages=setuptools.find_packages(include=['tenseal', 'tenseal.*']),
    classifiers=[
        "Programming Language :: C++",
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
        "Topic :: Security :: Cryptography",
    ],
)
