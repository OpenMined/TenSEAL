FROM ubuntu:19.04

RUN apt update
RUN apt install -y python3.7 python3-pip git cmake
COPY ./ ./TenSEAL
WORKDIR /TenSEAL
# Get third party libraries if not present
RUN git submodule init && git submodule update
RUN pip3 install .