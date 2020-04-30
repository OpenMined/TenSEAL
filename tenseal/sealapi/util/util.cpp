#include <pybind11/complex.h>
#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

#include <fstream>

using namespace seal;
using namespace seal::util;
using namespace std;
namespace py = pybind11;

PYBIND11_MODULE(_sealapi_util_cpp, m) {
    m.doc() = "SEAL util bindings for Python";
    /*******************
     * "util/rns.h" {
     ***/
    py::class_<RNSBase>(m, "RNSBase", py::module_local())
        .def(py::init<const RNSBase &>())
        .def("__getitem__",
             py::overload_cast<std::size_t>(&RNSBase::operator[], py::const_))
        .def("size", &RNSBase::size)
        .def("contains", &RNSBase::contains)
        .def("is_subbase_of", &RNSBase::is_subbase_of)
        .def("is_superbase_of", &RNSBase::is_superbase_of)
        .def("is_superbase_of", &RNSBase::is_superbase_of)
        .def("is_proper_subbase_of", &RNSBase::is_proper_subbase_of)
        .def("is_proper_superbase_of", &RNSBase::is_proper_superbase_of)
        .def("extend", py::overload_cast<Modulus>(&RNSBase::extend, py::const_))
        .def("extend",
             py::overload_cast<const RNSBase &>(&RNSBase::extend, py::const_))
        .def("drop", py::overload_cast<>(&RNSBase::drop, py::const_))
        .def("drop", py::overload_cast<Modulus>(&RNSBase::drop, py::const_))
        .def("decompose",
             [](const RNSBase &obj, std::uint64_t *value) {
                 return obj.decompose(value, MemoryManager::GetPool());
             })
        .def("decompose_array",
             [](const RNSBase &obj, std::uint64_t *value, std::size_t count) {
                 return obj.decompose_array(value, count,
                                            MemoryManager::GetPool());
             })
        .def("compose",
             [](const RNSBase &obj, std::uint64_t *value) {
                 return obj.compose(value, MemoryManager::GetPool());
             })
        .def("compose_array",
             [](const RNSBase &obj, std::uint64_t *value, std::size_t count) {
                 return obj.compose_array(value, count,
                                          MemoryManager::GetPool());
             })
        .def("base", &RNSBase::base, py::return_value_policy::reference)
        .def("base_prod", &RNSBase::base_prod,
             py::return_value_policy::reference)
        .def("punctured_prod_array", &RNSBase::punctured_prod_array,
             py::return_value_policy::reference)
        .def("inv_punctured_prod_mod_base_array",
             &RNSBase::inv_punctured_prod_mod_base_array,
             py::return_value_policy::reference);

    py::class_<MemoryPoolHandle>(m, "MemoryPoolHandle", py::module_local());

    py::class_<BaseConverter>(m, "BaseConverter", py::module_local())
        .def(py::init<const RNSBase &, const RNSBase &, MemoryPoolHandle>(),
             py::arg(), py::arg(), py::arg() = MemoryManager::GetPool())
        .def("ibase_size", &BaseConverter::ibase_size)
        .def("obase_size", &BaseConverter::obase_size)
        .def("ibase", &BaseConverter::ibase)
        .def("obase", &BaseConverter::obase)
        .def("fast_convert",
             [](const BaseConverter &obj, const std::uint64_t *in,
                std::uint64_t *out) {
                 return obj.fast_convert(in, out, MemoryManager::GetPool());
             })
        .def("fast_convert_array",
             [](const BaseConverter &obj, const std::uint64_t *in,
                std::size_t count, std::uint64_t *out) {
                 return obj.fast_convert_array(in, count, out,
                                               MemoryManager::GetPool());
             });

    py::class_<RNSTool>(m, "RNSTool", py::module_local())
        .def(py::init<std::size_t, const RNSBase &, const Modulus &,
                      MemoryPoolHandle>(),
             py::arg(), py::arg(), py::arg(),
             py::arg() = MemoryManager::GetPool())
        .def("divide_and_round_q_last_inplace",
             [](const RNSTool &obj, std::uint64_t *input) {
                 obj.divide_and_round_q_last_inplace(input,
                                                     MemoryManager::GetPool());
             })
        .def("divide_and_round_q_last_ntt_inplace",
             [](const RNSTool &obj, std::uint64_t *input,
                const NTTTables *rns_ntt_tables) {
                 obj.divide_and_round_q_last_ntt_inplace(
                     input, rns_ntt_tables, MemoryManager::GetPool());
             })
        .def("fastbconv_sk",
             [](const RNSTool &obj, const std::uint64_t *input,
                std::uint64_t *destination) {
                 obj.fastbconv_sk(input, destination, MemoryManager::GetPool());
             })
        .def("sm_mrq",
             [](const RNSTool &obj, const std::uint64_t *input,
                std::uint64_t *destination) {
                 obj.sm_mrq(input, destination, MemoryManager::GetPool());
             })
        .def("fast_floor",
             [](const RNSTool &obj, const std::uint64_t *input,
                std::uint64_t *destination) {
                 obj.fast_floor(input, destination, MemoryManager::GetPool());
             })
        .def("fastbconv_m_tilde",
             [](const RNSTool &obj, const std::uint64_t *input,
                std::uint64_t *destination) {
                 obj.fastbconv_m_tilde(input, destination,
                                       MemoryManager::GetPool());
             })
        .def("decrypt_scale_and_round",
             [](const RNSTool &obj, const std::uint64_t *input,
                std::uint64_t *destination) {
                 obj.decrypt_scale_and_round(input, destination,
                                             MemoryManager::GetPool());
             })

        .def("inv_q_last_mod_q", &RNSTool::inv_q_last_mod_q)
        .def("base_Bsk_small_ntt_tables", &RNSTool::base_Bsk_small_ntt_tables)
        .def("base_q", &RNSTool::base_q)
        .def("base_B", &RNSTool::base_B)
        .def("base_Bsk", &RNSTool::base_Bsk)
        .def("base_Bsk_m_tilde", &RNSTool::base_Bsk_m_tilde)
        .def("base_t_gamma", &RNSTool::base_t_gamma)
        .def("m_tilde", &RNSTool::m_tilde)
        .def("m_sk", &RNSTool::m_sk)
        .def("t", &RNSTool::t)
        .def("gamma", &RNSTool::gamma);

    /***
     * } "util/rns.h"
     *******************/
}
