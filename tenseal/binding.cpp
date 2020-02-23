#include "pybind11/pybind11.h"

namespace py = pybind11;

// sample code just to test
// remove this later
int adder(int i, int j) {
    return i + j;
}

PYBIND11_MODULE(_tenseal_cpp, m) {

    m.doc() = "Library for doing homomorphic encryption operations on tensors";

    m.def("adder", &adder);

}

