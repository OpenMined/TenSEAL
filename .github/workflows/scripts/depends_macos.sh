#!/bin/sh
set -e

brew install protobuf@3.12

cd /usr/local/Cellar/protobuf@3.12/3.12.0
sudo cp bin/protoc /usr/local/bin/
sudo rm -r /usr/local/include/google/protobuf/
sudo cp -r include/google/protobuf/ /usr/local/include/google/protobuf/
sudo cp -r lib /usr/local/

python -m pip install --upgrade pip
pip install -r requirements_dev.txt
