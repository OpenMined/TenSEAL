#include <pybind11/complex.h>
#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>
#include <seal/util/polyarith.h>
#include <seal/util/polyarithsmallmod.h>
#include <seal/util/rlwe.h>

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

    /*******************
     * "util/ntt.h" {
     ***/

    py::class_<NTTTables>(m, "NTTTables", py::module_local())
        .def(py::init<NTTTables &>())
        .def(py::init<int, const Modulus &, MemoryPoolHandle>(), py::arg(),
             py::arg(), py::arg() = MemoryManager::GetPool())
        .def("get_root", &NTTTables::get_root)
        .def("get_from_root_powers", &NTTTables::get_from_root_powers)
        .def("get_from_scaled_root_powers",
             &NTTTables::get_from_scaled_root_powers)
        .def("get_from_inv_root_powers", &NTTTables::get_from_inv_root_powers)
        .def("get_from_scaled_inv_root_powers",
             &NTTTables::get_from_scaled_inv_root_powers)
        .def("get_inv_degree_modulo", &NTTTables::get_inv_degree_modulo)
        .def("modulus", &NTTTables::modulus)
        .def("coeff_count_power", &NTTTables::coeff_count_power)
        .def("coeff_count", &NTTTables::coeff_count)
        .def("coeff_count", &NTTTables::coeff_count);
    m.def("CreateNTTTables",
          [](int coeff_count_power, const std::vector<Modulus> &modulus,
             Pointer<NTTTables> &tables) {
              return CreateNTTTables(coeff_count_power, modulus, tables,
                                     MemoryManager::GetPool());
          })
        .def("ntt_negacyclic_harvey_lazy", &ntt_negacyclic_harvey_lazy)
        .def("ntt_negacyclic_harvey", &ntt_negacyclic_harvey)
        .def("inverse_ntt_negacyclic_harvey_lazy",
             &inverse_ntt_negacyclic_harvey_lazy)
        .def("inverse_ntt_negacyclic_harvey", &inverse_ntt_negacyclic_harvey);
    /***
     * } "util/ntt.h"
     *******************/

    /*******************
     * "util/galois.h" {
     ***/
    py::class_<GaloisTool>(m, "GaloisTool", py::module_local())
        .def(py::init<int, MemoryPoolHandle>(), py::arg(),
             py::arg() = MemoryManager::GetPool())
        .def("apply_galois", &GaloisTool::apply_galois)
        .def("apply_galois_ntt", &GaloisTool::apply_galois_ntt)
        .def("get_elts_from_steps", &GaloisTool::get_elts_from_steps)
        .def("get_elts_all", &GaloisTool::get_elts_all)
        .def_static("GetIndexFromElt", &GaloisTool::GetIndexFromElt);
    /***
     * } "util/galois.h"
     *******************/

    /*******************
     * "util/polyarith.h" {
     ***/
    m.def("right_shift_poly_coeffs", &right_shift_poly_coeffs)
        .def("negate_poly", &negate_poly)
        .def("add_poly_poly", &add_poly_poly)
        .def("sub_poly_poly", &sub_poly_poly)
        .def("multiply_poly_poly", &multiply_poly_poly)
        .def("poly_infty_norm", &poly_infty_norm)
        .def("poly_eval_poly", &poly_eval_poly)
        .def("exponentiate_poly", &exponentiate_poly);
    /***
     * } "util/polyarith.h"
     *******************/

    /*******************
     * "util/rlwe.h" {
     ***/
    m.def("sample_poly_ternary", &sample_poly_ternary)
        .def("sample_poly_normal", &sample_poly_normal)
        .def("sample_poly_uniform", &sample_poly_uniform)
        .def("encrypt_zero_asymmetric", &encrypt_zero_asymmetric)
        .def("encrypt_zero_symmetric", &encrypt_zero_symmetric);
    /***
     * } "util/rlwe.h"
     *******************/

    /*******************
     * "util/polyarithsmallmod.h" {
     ***/
    m.def("modulo_poly_coeffs", &modulo_poly_coeffs)
        .def("modulo_poly_coeffs_63", &modulo_poly_coeffs_63)
        .def("negate_poly_coeffmod", &negate_poly_coeffmod)
        .def("add_poly_poly_coeffmod", &add_poly_poly_coeffmod)
        .def("sub_poly_poly_coeffmod", &sub_poly_poly_coeffmod)
        .def("multiply_poly_scalar_coeffmod", &multiply_poly_scalar_coeffmod)
        .def("multiply_poly_poly_coeffmod",
             py::overload_cast<const std::uint64_t *, std::size_t,
                               const std::uint64_t *, std::size_t,
                               const Modulus &, std::size_t, std::uint64_t *>(
                 &multiply_poly_poly_coeffmod))
        .def("multiply_poly_poly_coeffmod",
             py::overload_cast<const std::uint64_t *, const std::uint64_t *,
                               std::size_t, const Modulus &, std::uint64_t *>(
                 &multiply_poly_poly_coeffmod))
        .def("multiply_truncate_poly_poly_coeffmod",
             &multiply_truncate_poly_poly_coeffmod)
        .def("divide_poly_poly_coeffmod_inplace",
             &divide_poly_poly_coeffmod_inplace)
        .def("divide_poly_poly_coeffmod", &divide_poly_poly_coeffmod)
        .def("dyadic_product_coeffmod", &dyadic_product_coeffmod)
        .def("poly_infty_norm_coeffmod", &poly_infty_norm_coeffmod)
        .def("try_invert_poly_coeffmod", &try_invert_poly_coeffmod)
        .def("negacyclic_shift_poly_coeffmod", &negacyclic_shift_poly_coeffmod)
        .def("negacyclic_multiply_poly_mono_coeffmod",
             &negacyclic_multiply_poly_mono_coeffmod);
    /***
     * } "util/polyarithsmallmod.h"
     *******************/

    /*******************
     * "util/pointer.h" {
     ***/

    /***
     * } "util/pointer.h"
     *******************/
}
