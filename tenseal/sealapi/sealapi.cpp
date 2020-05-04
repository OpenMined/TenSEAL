#include <pybind11/complex.h>
#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

#include <fstream>

#include "bindings.h"

using namespace seal;
using namespace std;
namespace py = pybind11;

template <typename T>
void bind_serializable(py::module &m, const std::string &name) {
    /*******************
     * "seal/serializable.h" {
     ***/
    using type = Serializable<T>;
    std::string class_name = "Serializable" + name;

    py::class_<type>(m, class_name.c_str(), py::module_local())
        .def(py::init<const type &>())
        .def("save", [](const type &obj, std::string &path) {
            std::ofstream out(path, std::ofstream::binary);
            obj.save(out);
            out.close();
        });

    /***
     * } "seal/serializable.h"
     *******************/
}

PYBIND11_MODULE(_sealapi_cpp, m) {
    m.doc() = "SEAL library bindings for Python";

    bind_evaluator(m);
    bind_encrypt_decrypt(m);
    bind_context(m);
    bind_encoder_decoder(m);
    bind_utils(m);
    bind_modulus(m);

    bind_serializable<RelinKeys>(m, "RelinKeys");
    bind_serializable<GaloisKeys>(m, "GaloisKeys");
    bind_serializable<Ciphertext>(m, "Ciphertext");
}
