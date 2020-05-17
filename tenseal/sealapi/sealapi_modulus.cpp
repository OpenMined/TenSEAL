#include <pybind11/complex.h>
#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

#include <fstream>

#include "tenseal/sealapi/bindings.h"

using namespace seal;
using namespace std;
namespace py = pybind11;

void bind_modulus(pybind11::module &m) {
    /*******************
     * "seal/modulus.h" {
     ***/
    py::class_<Modulus>(m, "Modulus")
        .def(py::init<std::uint64_t>())
        .def(py::init<const Modulus &>())

        .def("bit_count", &Modulus::bit_count)
        .def("uint64_count", &Modulus::uint64_count)
        .def("data", &Modulus::data, py::return_value_policy::reference)
        .def("value", &Modulus::value)
        .def("const_ratio", &Modulus::const_ratio)
        .def("is_zero", &Modulus::is_zero)
        .def("is_prime", &Modulus::is_prime)

        .def("save",
             [](const Modulus &s, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 s.save(out);
                 out.close();
             })
        .def("load",
             [](Modulus &s, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 s.load(in);
                 in.close();
             })

        .def(py::self == py::self)
        .def(py::self == std::uint64_t())
        .def(py::self != py::self)
        .def(py::self != std::uint64_t())
        .def(py::self < py::self)
        .def(py::self < std::uint64_t())
        .def(py::self <= py::self)
        .def(py::self <= std::uint64_t())
        .def(py::self > py::self)
        .def(py::self > std::uint64_t())
        .def(py::self >= py::self)
        .def(py::self >= std::uint64_t());

    py::enum_<sec_level_type>(m, "SEC_LEVEL_TYPE", py::module_local())
        .value("NONE", sec_level_type::none)
        .value("TC128", sec_level_type::tc128)
        .value("TC192", sec_level_type::tc192)
        .value("TC256", sec_level_type::tc256);

    py::class_<CoeffModulus>(m, "CoeffModulus")
        .def_static("MaxBitCount", &CoeffModulus::MaxBitCount)
        .def_static("BFVDefault", &CoeffModulus::BFVDefault)
        .def_static("Create", &CoeffModulus::Create);

    py::class_<PlainModulus>(m, "PlainModulus")
        .def_static("Batching", py::overload_cast<std::size_t, int>(
                                    &PlainModulus::Batching))
        .def_static("Batching",
                    py::overload_cast<std::size_t, std::vector<int>>(
                        &PlainModulus::Batching));
    /***
     * } "seal/modulus.h"
     *******************/
}
