#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

#include <memory>
#include <vector>

#include "tensors/bfvnaivevector.h"
#include "utils.h"

using namespace tenseal;
using namespace seal;
using namespace std;
namespace py = pybind11;

PYBIND11_MODULE(_tenseal_cpp, m) {
    m.doc() = "Library for doing homomorphic encryption operations on tensors";

    m.def("bfv_parameters", &create_bfv_parameters,
          R"(Create a EncryptionParameters object for the BFV scheme.
    Args:
        poly_modulus_degree (int): The degree of the polynomial modulus, must be a power of two.
        plain_modulus (int): The plaintext modulus.
    Returns:
        EncryptionParameters object.)",
          py::arg("poly_modulus_degree"), py::arg("plain_modulus"));

    m.def("context", &create_context,
          R"(create a SEALContext object, checking the validity and properties of encryption_parameters.
    Args:
        encryption_parameters (EncryptionParameters): parameters to use to create the SEALContext.
    Returns:
        SEALContext object.)",
          py::arg("encryption_parameters"));

    py::class_<BFVNaiveVector>(m, "BFVNaiveVector")
        .def(py::init<shared_ptr<SEALContext>&, PublicKey, vector<int>>())
        .def("decrypt", &BFVNaiveVector::decrypt)
        .def("add", &BFVNaiveVector::add)
        .def("add_", &BFVNaiveVector::add_inplace)
        .def("add_plain", &BFVNaiveVector::add_plain)
        .def("add_plain_", &BFVNaiveVector::add_plain_inplace)
        .def("sub", &BFVNaiveVector::sub)
        .def("sub_", &BFVNaiveVector::sub_inplace)
        .def("sub_plain", &BFVNaiveVector::sub_plain)
        .def("sub_plain_", &BFVNaiveVector::sub_plain_inplace)
        .def("mul", &BFVNaiveVector::mul)
        .def("mul_", &BFVNaiveVector::mul_inplace)
        .def("mul_plain", &BFVNaiveVector::mul_plain)
        .def("mul_plain_", &BFVNaiveVector::mul_plain_inplace)
        .def("size", &BFVNaiveVector::size)
        // python arithmetic
        .def("__add__", &BFVNaiveVector::add)
        .def("__add__", &BFVNaiveVector::add_plain)
        .def("__iadd__", &BFVNaiveVector::add_inplace)
        .def("__iadd__", &BFVNaiveVector::add_plain_inplace)
        .def("__sub__", &BFVNaiveVector::sub)
        .def("__sub__", &BFVNaiveVector::sub_plain)
        .def("__isub__", &BFVNaiveVector::sub_inplace)
        .def("__isub__", &BFVNaiveVector::sub_plain_inplace)
        .def("__mul__", &BFVNaiveVector::mul)
        .def("__mul__", &BFVNaiveVector::mul_plain)
        .def("__imul__", &BFVNaiveVector::mul_inplace)
        .def("__imul__", &BFVNaiveVector::mul_plain_inplace);

    py::class_<KeyGenerator>(m, "KeyGenerator")
        .def(py::init<std::shared_ptr<seal::SEALContext>&>())
        .def("public_key", &KeyGenerator::public_key, "get the public key.")
        .def("secret_key", &KeyGenerator::secret_key, "get the secret key.");

    py::class_<EncryptionParameters>(m, "EncryptionParameters");
    py::class_<SEALContext, std::shared_ptr<SEALContext>>(m, "SEALContext");
    py::class_<PublicKey>(m, "PublicKey");
    py::class_<SecretKey>(m, "SecretKey");
}
