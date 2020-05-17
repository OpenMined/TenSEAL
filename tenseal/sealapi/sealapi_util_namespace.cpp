#include <pybind11/complex.h>
#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>
#include <seal/util/clipnormal.h>
#include <seal/util/croots.h>
#include <seal/util/hash.h>
#include <seal/util/hestdparms.h>
#include <seal/util/numth.h>
#include <seal/util/pointer.h>
#include <seal/util/polyarith.h>
#include <seal/util/polyarithmod.h>
#include <seal/util/polyarithsmallmod.h>
#include <seal/util/rlwe.h>
#include <seal/util/scalingvariant.h>

#include <fstream>

#include "tenseal/sealapi/bindings.h"

using namespace seal;
using namespace seal::util;
using namespace std;
namespace py = pybind11;

/***
 *Notes:
 * Some methods, like add_poly_poly, have dedicated lambda implementation
 *because uint64* is not handled as the start of an array by pybind, but as a
 *value. We need to use std::vector explicitly.
 * **/

template <typename T>
void bind_pointer(py::module &m, const std::string &name) {
    /*******************
     * "util/pointer.h" {
     ***/
    using type = Pointer<T>;
    std::string class_name = "Pointer" + name;

    py::class_<type, std::shared_ptr<type>>(m, class_name.c_str())
        .def(py::init<>())
        .def("__getitem__",
             py::overload_cast<std::size_t>(&type::operator[], py::const_))
        .def("is_set", &type::is_set)
        .def("get", py::overload_cast<>(&type::get, py::const_),
             py::return_value_policy::reference);

    using const_type = ConstPointer<T>;
    std::string const_class_name = "ConstPointer" + name;

    py::class_<const_type>(m, const_class_name.c_str())
        .def(py::init<>())
        .def("__getitem__", py::overload_cast<std::size_t>(
                                &const_type::operator[], py::const_))
        .def("is_set", &const_type::is_set)
        .def("get", py::overload_cast<>(&const_type::get, py::const_),
             py::return_value_policy::reference);
    /***
     * } "util/pointer.h"
     *******************/
}

void bind_util_namespace(pybind11::module &m) {
    m.doc() = "SEAL::util bindings for Python";

    py::class_<MemoryPoolHandle>(m, "MemoryPoolHandle", py::module_local());

    /*******************
     * "util/rns.h" {
     ***/
    py::class_<RNSBase, std::shared_ptr<RNSBase>>(m, "RNSBase",
                                                  py::module_local())
        .def(py::init<const RNSBase &>())
        .def(py::init<const std::vector<Modulus> &, MemoryPoolHandle>(),
             py::arg(), py::arg() = MemoryManager::GetPool())
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
             [](const RNSBase &obj, std::vector<std::uint64_t> &value) {
                 std::vector<std::uint64_t> out = value;
                 obj.decompose(out.data(), MemoryManager::GetPool());
                 return out;
             })
        .def("decompose_array",
             [](const RNSBase &obj, std::vector<std::uint64_t> &value,
                std::size_t count) {
                 std::vector<std::uint64_t> out = value;
                 obj.decompose_array(out.data(), count,
                                     MemoryManager::GetPool());
                 return out;
             })
        .def("compose",
             [](const RNSBase &obj, std::vector<std::uint64_t> &value) {
                 std::vector<std::uint64_t> out = value;
                 obj.compose(out.data(), MemoryManager::GetPool());
                 return out;
             })
        .def("compose_array",
             [](const RNSBase &obj, std::vector<std::uint64_t> &value,
                std::size_t count) {
                 std::vector<std::uint64_t> out = value;
                 obj.compose_array(out.data(), count, MemoryManager::GetPool());
                 return out;
             })
        .def("base_prod", &RNSBase::base_prod,
             py::return_value_policy::reference);

    py::class_<BaseConverter>(m, "BaseConverter", py::module_local())
        .def(py::init<const RNSBase &, const RNSBase &, MemoryPoolHandle>(),
             py::arg(), py::arg(), py::arg() = MemoryManager::GetPool())
        .def("ibase_size", &BaseConverter::ibase_size)
        .def("obase_size", &BaseConverter::obase_size)
        .def("ibase", &BaseConverter::ibase)
        .def("obase", &BaseConverter::obase)
        .def(
            "fast_convert",
            [](const BaseConverter &obj, const std::vector<std::uint64_t> &in) {
                std::vector<std::uint64_t> out(obj.obase_size());
                obj.fast_convert(in.data(), out.data(),
                                 MemoryManager::GetPool());
                return out;
            })
        .def("fast_convert_array",
             [](const BaseConverter &obj, const std::vector<std::uint64_t> &in,
                std::size_t count) {
                 std::vector<std::uint64_t> out(obj.obase_size() * count);
                 obj.fast_convert_array(in.data(), count, out.data(),
                                        MemoryManager::GetPool());

                 return out;
             });

    py::class_<RNSTool, std::shared_ptr<RNSTool>>(m, "RNSTool",
                                                  py::module_local())
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
        .def("coeff_count", &NTTTables::coeff_count);
    m.def("CreateNTTTables",
          [](int coeff_count_power, const std::vector<Modulus> &modulus) {
              Pointer<NTTTables> tables;
              CreateNTTTables(coeff_count_power, modulus, tables,
                              MemoryManager::GetPool());
              return tables;
          })
        .def("ntt_negacyclic_harvey_lazy",
             [](std::vector<uint64_t> &op, const NTTTables &tables) {
                 ntt_negacyclic_harvey_lazy(op.data(), tables);
                 return op;
             })
        .def("ntt_negacyclic_harvey",
             [](std::vector<uint64_t> &op, const NTTTables &tables) {
                 ntt_negacyclic_harvey(op.data(), tables);
                 return op;
             })
        .def("inverse_ntt_negacyclic_harvey_lazy",
             [](std::vector<uint64_t> &op, const NTTTables &tables) {
                 inverse_ntt_negacyclic_harvey_lazy(op.data(), tables);
                 return op;
             })
        .def("inverse_ntt_negacyclic_harvey",
             [](std::vector<uint64_t> &op, const NTTTables &tables) {
                 inverse_ntt_negacyclic_harvey_lazy(op.data(), tables);
                 return op;
             });
    /***
     * } "util/ntt.h"
     *******************/

    /*******************
     * "util/galois.h" {
     ***/
    py::class_<GaloisTool>(m, "GaloisTool")
        .def(py::init<int, MemoryPoolHandle>(), py::arg(),
             py::arg() = MemoryManager::GetPool())
        .def(
            "apply_galois",
            [](const GaloisTool &obj, const std::vector<std::uint64_t> &operand,
               std::uint32_t galois_elt, const Modulus &modulus,
               std::size_t coeff_count) {
                std::vector<uint64_t> out(galois_elt * coeff_count);
                obj.apply_galois(operand.data(), galois_elt, modulus,
                                 out.data());
                return out;
            })
        .def("apply_galois_ntt",
             [](GaloisTool &obj, const std::vector<std::uint64_t> &operand,
                std::uint32_t galois_elt, std::size_t coeff_count) {
                 std::vector<uint64_t> out(coeff_count * galois_elt);
                 obj.apply_galois_ntt(operand.data(), galois_elt, out.data());
                 return out;
             })
        .def("get_elt_from_step", &GaloisTool::get_elt_from_step)
        .def("get_elts_from_steps", &GaloisTool::get_elts_from_steps)
        .def("get_elts_all", &GaloisTool::get_elts_all)
        .def_static("GetIndexFromElt", &GaloisTool::GetIndexFromElt);
    /***
     * } "util/galois.h"
     *******************/

    /*******************
     * "util/polyarith.h" {
     ***/
    m.def("right_shift_poly_coeffs",
          [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
             std::size_t uint64_cnt, int shift) {
              std::vector<uint64_t> out(poly.size());
              right_shift_poly_coeffs(poly.data(), coeff_count, uint64_cnt,
                                      shift, out.data());
              return out;
          })
        .def("negate_poly",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                std::size_t uint64_cnt) {
                 std::vector<uint64_t> out(coeff_count);
                 negate_poly(poly.data(), coeff_count, uint64_cnt, out.data());
                 return out;
             })
        .def("add_poly_poly",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> &operand2,
                std::size_t coeff_count, std::size_t coeff_uint64_count) {
                 std::vector<uint64_t> out(coeff_count);
                 add_poly_poly(operand1.data(), operand2.data(), coeff_count,
                               coeff_uint64_count, out.data());
                 return out;
             })
        .def("sub_poly_poly",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> &operand2,
                std::size_t coeff_count, std::size_t coeff_uint64_count) {
                 std::vector<uint64_t> out(coeff_count);
                 sub_poly_poly(operand1.data(), operand2.data(), coeff_count,
                               coeff_uint64_count, out.data());
                 return out;
             })
        .def("multiply_poly_poly",
             [](const std::vector<std::uint64_t> &operand1,
                std::size_t operand1_coeff_count,
                std::size_t operand1_coeff_uint64_count,
                const std::vector<std::uint64_t> &operand2,
                std::size_t operand2_coeff_count,
                std::size_t operand2_coeff_uint64_count,
                std::size_t result_coeff_count,
                std::size_t result_coeff_uint64_count) {
                 std::vector<uint64_t> out(result_coeff_count);
                 multiply_poly_poly(
                     operand1.data(), operand1_coeff_count,
                     operand1_coeff_uint64_count, operand2.data(),
                     operand2_coeff_count, operand2_coeff_uint64_count,
                     result_coeff_count, result_coeff_uint64_count, out.data(),
                     MemoryManager::GetPool());
                 return out;
             })
        .def("poly_infty_norm",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                std::size_t coeff_uint64_count) {
                 std::vector<uint64_t> out(coeff_count);
                 poly_infty_norm(poly.data(), coeff_count, coeff_uint64_count,
                                 out.data());
                 return out;
             })
        .def("poly_eval_poly",
             [](const std::vector<std::uint64_t> &poly_to_eval,
                std::size_t poly_to_eval_coeff_count,
                std::size_t poly_to_eval_coeff_uint64_count,
                const std::vector<std::uint64_t> &value,
                std::size_t value_coeff_count,
                std::size_t value_coeff_uint64_count,
                std::size_t result_coeff_count,
                std::size_t result_coeff_uint64_count

             ) {
                 std::vector<uint64_t> out(result_coeff_count);
                 poly_eval_poly(poly_to_eval.data(), poly_to_eval_coeff_count,
                                poly_to_eval_coeff_uint64_count, value.data(),
                                value_coeff_count, value_coeff_uint64_count,
                                result_coeff_count, result_coeff_uint64_count,
                                out.data(), MemoryManager::GetPool());
                 return out;
             })
        .def("exponentiate_poly", [](const std::vector<std::uint64_t> poly,
                                     std::size_t poly_coeff_count,
                                     std::size_t poly_coeff_uint64_count,
                                     const std::vector<std::uint64_t> &exponent,
                                     std::size_t exponent_uint64_count,
                                     std::size_t result_coeff_count,
                                     std::size_t result_coeff_uint64_count) {
            std::vector<uint64_t> out(result_coeff_count);
            exponentiate_poly(poly.data(), poly_coeff_count,
                              poly_coeff_uint64_count, exponent.data(),
                              exponent_uint64_count, result_coeff_count,
                              result_coeff_uint64_count, out.data(),
                              MemoryManager::GetPool());
            return out;
        });
    /***
     * } "util/polyarith.h"
     *******************/

    /*******************
     * "util/rlwe.h" {
     ***/
    m.def("sample_poly_ternary",
          [](std::shared_ptr<UniformRandomGenerator> rng,
             const EncryptionParameters &parms) {
              auto coeff_modulus = parms.coeff_modulus();
              std::vector<uint64_t> out(coeff_modulus.size() *
                                        parms.poly_modulus_degree());
              sample_poly_ternary(rng, parms, out.data());
              return out;
          })
        .def("sample_poly_normal",
             [](std::shared_ptr<UniformRandomGenerator> rng,
                const EncryptionParameters &parms) {
                 auto coeff_modulus = parms.coeff_modulus();
                 std::vector<uint64_t> out(coeff_modulus.size() *
                                           parms.poly_modulus_degree());
                 sample_poly_normal(rng, parms, out.data());
                 return out;
             })
        .def("sample_poly_uniform",
             [](std::shared_ptr<UniformRandomGenerator> rng,
                const EncryptionParameters &parms) {
                 auto coeff_modulus = parms.coeff_modulus();
                 std::vector<uint64_t> out(coeff_modulus.size() *
                                           parms.poly_modulus_degree());
                 sample_poly_uniform(rng, parms, out.data());
                 return out;
             });
    /***
     * } "util/rlwe.h"
     *******************/

    /*******************
     * "util/polyarithsmallmod.h" {
     ***/
    m.def("modulo_poly_coeffs",
          [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
             const Modulus &modulus) {
              std::vector<uint64_t> out(coeff_count);
              modulo_poly_coeffs(poly.data(), coeff_count, modulus, out.data());
              return out;
          })
        .def("modulo_poly_coeffs_63",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 modulo_poly_coeffs_63(poly.data(), coeff_count, modulus,
                                       out.data());
                 return out;
             })
        .def("negate_poly_coeffmod",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 negate_poly_coeffmod(poly.data(), coeff_count, modulus,
                                      out.data());
                 return out;
             })
        .def("add_poly_poly_coeffmod",
             [](const std::vector<uint64_t> &operand1,
                const std::vector<uint64_t> &operand2, std::size_t coeff_count,
                const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 add_poly_poly_coeffmod(operand1.data(), operand2.data(),
                                        coeff_count, modulus, out.data());
                 return out;
             })
        .def("sub_poly_poly_coeffmod",
             [](const std::vector<uint64_t> &operand1,
                const std::vector<uint64_t> &operand2, std::size_t coeff_count,
                const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 sub_poly_poly_coeffmod(operand1.data(), operand2.data(),
                                        coeff_count, modulus, out.data());
                 return out;
             })
        .def("multiply_poly_scalar_coeffmod",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                std::uint64_t scalar, const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 multiply_poly_scalar_coeffmod(poly.data(), coeff_count, scalar,
                                               modulus, out.data());
                 return out;
             })
        .def("multiply_poly_poly_coeffmod",
             [](const std::vector<std::uint64_t> &operand1,
                std::size_t operand1_coeff_count,
                const std::vector<std::uint64_t> &operand2,
                std::size_t operand2_coeff_count, const Modulus &modulus,
                std::size_t result_coeff_count) {
                 std::vector<uint64_t> out(result_coeff_count);
                 multiply_poly_poly_coeffmod(
                     operand1.data(), operand1_coeff_count, operand2.data(),
                     operand2_coeff_count, modulus, result_coeff_count,
                     out.data());
                 return out;
             })
        .def("multiply_poly_poly_coeffmod",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> &operand2,
                std::size_t coeff_count, const Modulus &modulus,
                std::size_t result_coeff_count) {
                 std::vector<uint64_t> out(coeff_count * coeff_count);
                 multiply_poly_poly_coeffmod(operand1.data(), operand2.data(),
                                             coeff_count, modulus, out.data());
                 return out;
             })
        .def("multiply_truncate_poly_poly_coeffmod",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> &operand2,
                std::size_t coeff_count, const Modulus &modulus,
                std::size_t result_coeff_count) {
                 std::vector<uint64_t> out(coeff_count * coeff_count);
                 multiply_truncate_poly_poly_coeffmod(
                     operand1.data(), operand2.data(), coeff_count, modulus,
                     out.data());
                 return out;
             })
        .def("divide_poly_poly_coeffmod",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> &operand2,
                std::size_t coeff_count, const Modulus &modulus) {
                 std::vector<uint64_t> q(coeff_count);
                 std::vector<uint64_t> r(coeff_count);
                 divide_poly_poly_coeffmod(operand1.data(), operand2.data(),
                                           coeff_count, modulus, q.data(),
                                           r.data());
                 return std::vector<std::vector<uint64_t>>{q, r};
             })
        .def("dyadic_product_coeffmod",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> &operand2,
                std::size_t coeff_count, const Modulus &modulus,
                std::size_t result_coeff_count) {
                 std::vector<uint64_t> out(coeff_count * coeff_count);
                 dyadic_product_coeffmod(operand1.data(), operand2.data(),
                                         coeff_count, modulus, out.data());
                 return out;
             })
        .def("poly_infty_norm_coeffmod",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                const Modulus &modulus) {
                 return poly_infty_norm_coeffmod(poly.data(), coeff_count,
                                                 modulus);
             })
        .def("try_invert_poly_coeffmod",
             [](const std::vector<uint64_t> &poly,
                const std::vector<uint64_t> &poly_modulus,
                std::size_t coeff_count, const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 try_invert_poly_coeffmod(poly.data(), poly_modulus.data(),
                                          coeff_count, modulus, out.data(),
                                          MemoryManager::GetPool());
                 return out;
             })
        .def("negacyclic_shift_poly_coeffmod",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                std::size_t shift, const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 negacyclic_shift_poly_coeffmod(poly.data(), coeff_count, shift,
                                                modulus, out.data());
                 return out;
             })
        .def("negacyclic_multiply_poly_mono_coeffmod",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                std::uint64_t mono_coeff, std::size_t mono_exponent,
                const Modulus &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 negacyclic_multiply_poly_mono_coeffmod(
                     poly.data(), coeff_count, mono_coeff, mono_exponent,
                     modulus, out.data(), MemoryManager::GetPool());
                 return out;
             });
    /***
     * } "util/polyarithsmallmod.h"
     *******************/

    /*******************
     * "util/polyarithmod.h" {
     ***/
    m.def("negate_poly_coeffmod",
          [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
             const std::vector<uint64_t> &coeff_modulus,
             std::size_t coeff_uint64_count) {
              std::vector<uint64_t> out(coeff_count);
              negate_poly_coeffmod(poly.data(), coeff_count,
                                   coeff_modulus.data(), coeff_uint64_count,
                                   out.data());
              return out;
          })
        .def("add_poly_poly_coeffmod",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> operand2,
                std::size_t coeff_count,
                const std::vector<std::uint64_t> &coeff_modulus,
                std::size_t coeff_uint64_count) {
                 std::vector<uint64_t> out(coeff_count);
                 add_poly_poly_coeffmod(operand1.data(), operand2.data(),
                                        coeff_count, coeff_modulus.data(),
                                        coeff_uint64_count, out.data());
                 return out;
             })
        .def("sub_poly_poly_coeffmod",
             [](const std::vector<std::uint64_t> &operand1,
                const std::vector<std::uint64_t> operand2,
                std::size_t coeff_count,
                const std::vector<std::uint64_t> &coeff_modulus,
                std::size_t coeff_uint64_count) {
                 std::vector<uint64_t> out(coeff_count);
                 sub_poly_poly_coeffmod(operand1.data(), operand2.data(),
                                        coeff_count, coeff_modulus.data(),
                                        coeff_uint64_count, out.data());
                 return out;
             })
        .def("poly_infty_norm_coeffmod",
             [](const std::vector<std::uint64_t> &poly, std::size_t coeff_count,
                std::size_t coeff_uint64_count,
                const std::vector<std::uint64_t> &modulus) {
                 std::vector<uint64_t> out(coeff_count);
                 poly_infty_norm_coeffmod(poly.data(), coeff_count,
                                          coeff_uint64_count, modulus.data(),
                                          out.data(), MemoryManager::GetPool());
                 return out;
             });

    /***
     * } "util/polyarithmod.h"
     *******************/

    /*******************
     * "util/polycore.h" {
     ***/
    m.def("poly_to_hex_string",
          [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
             std::size_t coeff_uint64_count) {
              return poly_to_hex_string(poly.data(), coeff_count,
                                        coeff_uint64_count);
          })
        .def("poly_to_dec_string",
             [](const std::vector<uint64_t> &poly, std::size_t coeff_count,
                std::size_t coeff_uint64_count) {
                 return poly_to_dec_string(poly.data(), coeff_count,
                                           coeff_uint64_count,
                                           MemoryManager::GetPool());
             });
    /***
     * } "util/polycore.h"
     *******************/

    /*******************
     * "util/croots.h" {
     ***/
    py::class_<ComplexRoots>(m, "ComplexRoots", py::module_local())
        .def(py::init<std::size_t, MemoryPoolHandle>(), py::arg(),
             py::arg() = MemoryManager::GetPool())
        .def("get_root", &ComplexRoots::get_root);

    /***
     * } "util/croots.h"
     *******************/

    /*******************
     * "util/numth.h" {
     ***/
    m.def("naf", &naf)
        .def("gcd",
             [](std::uint64_t a, std::uint64_t b) -> uint64_t {
                 return gcd(a, b);
             })
        .def("xgcd", &xgcd)
        .def("are_coprime", &are_coprime)
        .def("is_prime", &is_prime)
        .def("get_primes", &get_primes)
        .def("get_prime", &get_prime)
        .def("is_primitive_root", &is_primitive_root)
        .def("try_minimal_primitive_root", &try_minimal_primitive_root);

    /***
     * } "util/numth.h"
     *******************/

    /*******************
     * "util/hestdparms.h" {
     ***/
    m.def("SEAL_HE_STD_PARMS_128_TC", &SEAL_HE_STD_PARMS_128_TC)
        .def("SEAL_HE_STD_PARMS_192_TC", &SEAL_HE_STD_PARMS_192_TC)
        .def("SEAL_HE_STD_PARMS_256_TC", &SEAL_HE_STD_PARMS_256_TC)
        .def("SEAL_HE_STD_PARMS_128_TQ", &SEAL_HE_STD_PARMS_128_TQ)
        .def("SEAL_HE_STD_PARMS_192_TQ", &SEAL_HE_STD_PARMS_192_TQ)
        .def("SEAL_HE_STD_PARMS_256_TQ", &SEAL_HE_STD_PARMS_256_TQ);
    /***
     * } "util/hestdparms.h"
     *******************/

    /*******************
     * "util/clipnormal.h" {
     ***/
    py::class_<ClippedNormalDistribution>(m, "ClippedNormalDistribution",
                                          py::module_local())
        .def(py::init<double /*mean*/, double /*standard_deviation*/,
                      double /*max_deviation*/>())
        .def("mean", &ClippedNormalDistribution::mean)
        .def("standard_deviation",
             &ClippedNormalDistribution::standard_deviation)
        .def("max_deviation", &ClippedNormalDistribution::max_deviation)
        .def("min", &ClippedNormalDistribution::min)
        .def("max", &ClippedNormalDistribution::max)
        .def("reset", &ClippedNormalDistribution::reset)
        .def("__call__", py::overload_cast<RandomToStandardAdapter &>(
                             &ClippedNormalDistribution::operator()<
                                 RandomToStandardAdapter>));
    /***
     * } "util/clipnormal.h"
     *******************/

    /*******************
     * "util/hash.h" {
     ***/
    py::class_<HashFunction>(m, "HashFunction", py::module_local())
        .def_static("hash", [](const std::vector<uint64_t> &in) {
            HashFunction::hash_block_type out;
            HashFunction::hash(in.data(), in.size(), out);
            return out;
        });

    /***
     * } "util/hash.h"
     *******************/

    /*******************
     * "util/pointer.h" {
     ***/
    bind_pointer<Modulus>(m, "Modulus");
    bind_pointer<std::complex<double>>(m, "ComplexDouble");
    bind_pointer<std::uint64_t>(m, "UInt64");
    bind_pointer<GaloisTool>(m, "GaloisTool");
    bind_pointer<NTTTables>(m, "NTTTables");
    bind_pointer<RNSTool>(m, "RNSTool");
    bind_pointer<RNSBase>(m, "RNSBase");

    /***
     * } "util/pointer.h"
     *******************/
}
