#include "pybind11/pybind11.h"
#include "pybind11/embed.h"

using namespace std;
namespace py = pybind11;

// sample code just to test
// remove this later
int adder(int i, int j) {
    return i + j;
}

PYBIND11_MODULE(_tenseal_cpp, m) {

    m.doc() = "HE python extension";

    m.def("adder", &adder);

}

