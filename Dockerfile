FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt install -y python3.8 python3-pip git cmake
COPY ./ ./TenSEAL
WORKDIR /TenSEAL
# Get third party libraries if not present
RUN git submodule init && git submodule update
RUN pip3 install .
