#ifndef SEALAPI_H
#define SEALAPI_H

#include <pybind11/pybind11.h>
namespace py = pybind11;

void loadSEALAPI(py::module &m);
#endif
