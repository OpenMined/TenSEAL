#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

#include <memory>
#include <vector>

#include "keygen.h"
#include "tensors/bfv_naive.h"

using namespace tenseal;
using namespace seal;
using namespace std;
namespace py = pybind11;

PYBIND11_MODULE(_tenseal_cpp, m) {
    m.doc() = "Library for doing homomorphic encryption operations on tensors";

    m.def("create_bfv_parameters", &create_bfv_parameters);

    m.def("create_context", &create_context);

    py::class_<BFVNaive>(m, "BFVNaive")
        .def(py::init<shared_ptr<SEALContext>&, PublicKey, vector<int>>())
        .def("decrypt", &BFVNaive::decrypt)
        .def("add", &BFVNaive::add)
        .def("add_", &BFVNaive::add_inplace)
        .def("add_plain", &BFVNaive::add_plain)
        .def("add_plain_", &BFVNaive::add_plain_inplace)
        .def("mul", &BFVNaive::mul)
        .def("mul_", &BFVNaive::mul_inplace)
        .def("mul_plain", &BFVNaive::mul_plain)
        .def("mul_plain_", &BFVNaive::mul_plain_inplace)
        .def("size", &BFVNaive::size)
        // python arithmetic
        .def("__add__", &BFVNaive::add)
        .def("__add__", &BFVNaive::add_plain)
        .def("__iadd__", &BFVNaive::add_inplace)
        .def("__iadd__", &BFVNaive::add_plain_inplace)
        .def("__mul__", &BFVNaive::mul)
        .def("__mul__", &BFVNaive::mul_plain)
        .def("__imul__", &BFVNaive::mul_inplace)
        .def("__imul__", &BFVNaive::mul_plain_inplace);

    py::class_<KeyGenerator>(m, "KeyGenerator")
        .def(py::init<std::shared_ptr<seal::SEALContext>&>())
        .def("public_key", &KeyGenerator::public_key)
        .def("secret_key", &KeyGenerator::secret_key);

    py::class_<EncryptionParameters>(m, "EncryptionParameters");
    py::class_<SEALContext, std::shared_ptr<SEALContext>>(m, "SEALContext");
    py::class_<PublicKey>(m, "PublicKey");
    py::class_<SecretKey>(m, "SecretKey");
}
