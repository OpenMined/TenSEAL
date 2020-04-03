#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

#include <memory>
#include <vector>

#include "context.h"
#include "tensors/bfvnaivevector.h"
#include "tensors/ckksvector.h"
#include "utils.h"

using namespace tenseal;
using namespace seal;
using namespace std;
namespace py = pybind11;

PYBIND11_MODULE(_tenseal_cpp, m) {
    m.doc() = "Library for doing homomorphic encryption operations on tensors";

    m.def("bfv_parameters", &create_bfv_parameters,
          R"(Create an EncryptionParameters object for the BFV scheme.
    Args:
        poly_modulus_degree (int): The degree of the polynomial modulus, must be a power of two.
        plain_modulus (int): The plaintext modulus.
        coeff_mod_bit_sizes (list of int): List of bit size for each coeffecient modulus.
    Returns:
        EncryptionParameters object.)",
          py::arg("poly_modulus_degree"), py::arg("plain_modulus"),
          py::arg("coeff_mod_bit_sizes") = vector<int>());

    m.def("ckks_parameters", &create_ckks_parameters,
          R"(Create an EncryptionParameters object for the CKKS scheme.
    Args:
        poly_modulus_degree (int): The degree of the polynomial modulus, must be a power of two.
        coeff_mod_bit_sizes (list of int): List of bit size for each coeffecient modulus.
    Returns:
        EncryptionParameters object.)",
          py::arg("poly_modulus_degree"), py::arg("coeff_mod_bit_sizes"));

    m.def(
        "context", &create_context,
        R"(create a SEALContext object, checking the validity and properties of encryption_parameters.
    Args:
        encryption_parameters (EncryptionParameters): parameters to use to create the SEALContext.
    Returns:
        SEALContext object.)",
        py::arg("encryption_parameters"));

    py::class_<BFVNaiveVector>(m, "BFVNaiveVector")
        .def(py::init<shared_ptr<BFVContext>&, vector<int>>())
        .def("size", &BFVNaiveVector::size)
        .def("save_size", &BFVNaiveVector::save_size)
        .def("decrypt", py::overload_cast<>(&BFVNaiveVector::decrypt))
        .def("decrypt", py::overload_cast<SecretKey>(&BFVNaiveVector::decrypt))
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

    py::class_<CKKSVector>(m, "CKKSVector")
        .def(py::init<shared_ptr<CKKSContext>&, double, vector<double>>())
        .def("size", &CKKSVector::size)
        .def("decrypt", py::overload_cast<>(&CKKSVector::decrypt))
        .def("decrypt", py::overload_cast<SecretKey>(&CKKSVector::decrypt))
        .def("save_size", &CKKSVector::save_size)
        .def("add", &CKKSVector::add)
        .def("add_", &CKKSVector::add_inplace)
        .def("add_plain", &CKKSVector::add_plain)
        .def("add_plain_", &CKKSVector::add_plain_inplace)
        .def("sub", &CKKSVector::sub)
        .def("sub_", &CKKSVector::sub_inplace)
        .def("sub_plain", &CKKSVector::sub_plain)
        .def("sub_plain_", &CKKSVector::sub_plain_inplace)
        .def("mul", &CKKSVector::mul)
        .def("mul_", &CKKSVector::mul_inplace)
        .def("mul_plain", &CKKSVector::mul_plain)
        .def("mul_plain_", &CKKSVector::mul_plain_inplace)
        // python arithmetic
        .def("__add__", &CKKSVector::add)
        .def("__add__", &CKKSVector::add_plain)
        .def("__iadd__", &CKKSVector::add_inplace)
        .def("__iadd__", &CKKSVector::add_plain_inplace)
        .def("__sub__", &CKKSVector::sub)
        .def("__sub__", &CKKSVector::sub_plain)
        .def("__isub__", &CKKSVector::sub_inplace)
        .def("__isub__", &CKKSVector::sub_plain_inplace)
        .def("__mul__", &CKKSVector::mul)
        .def("__mul__", &CKKSVector::mul_plain)
        .def("__imul__", &CKKSVector::mul_inplace)
        .def("__imul__", &CKKSVector::mul_plain_inplace);

    py::class_<KeyGenerator>(m, "KeyGenerator")
        .def(py::init<std::shared_ptr<seal::SEALContext>&>())
        .def("public_key", &KeyGenerator::public_key, "get the public key.")
        .def("secret_key", &KeyGenerator::secret_key, "get the secret key.")
        .def("relin_keys", py::overload_cast<>(&KeyGenerator::relin_keys),
             "get the relinearization keys.");

    py::class_<CKKSContext, std::shared_ptr<CKKSContext>>(m, "CKKSContext")
        .def("new",
             py::overload_cast<size_t, vector<int>>(&CKKSContext::Create))
        .def("load", py::overload_cast<const char*>(&CKKSContext::Create))
        .def("public_key", &CKKSContext::public_key)
        .def("secret_key", &CKKSContext::secret_key)
        .def("relin_keys", &CKKSContext::relin_keys)
        .def("galois_keys", &CKKSContext::galois_keys)
        .def("is_public", &CKKSContext::is_public)
        .def("is_private", &CKKSContext::is_private)
        .def("key_generator", &CKKSContext::key_gen);

    py::class_<BFVContext, std::shared_ptr<BFVContext>>(m, "BFVContext")
        .def("new", py::overload_cast<size_t, uint64_t, vector<int>>(
                        &BFVContext::Create))
        .def("load", py::overload_cast<const char*>(&BFVContext::Create))
        .def("public_key", &BFVContext::public_key)
        .def("secret_key", &BFVContext::secret_key)
        .def("relin_keys", &BFVContext::relin_keys)
        .def("galois_keys", &BFVContext::galois_keys)
        .def("is_public", &BFVContext::is_public)
        .def("is_private", &BFVContext::is_private)
        .def("key_generator", &BFVContext::key_gen);

    py::class_<EncryptionParameters>(m, "EncryptionParameters");
    py::class_<SEALContext, std::shared_ptr<SEALContext>>(m, "SEALContext");
    py::class_<PublicKey>(m, "PublicKey");
    py::class_<SecretKey>(m, "SecretKey");
    py::class_<RelinKeys>(m, "RelinKeys");
    py::class_<GaloisKeys>(m, "GaloisKeys");
}
