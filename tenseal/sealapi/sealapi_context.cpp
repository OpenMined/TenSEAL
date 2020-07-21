#include <pybind11/complex.h>
#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

#include <fstream>

using namespace seal;
using namespace std;
namespace py = pybind11;

void bind_context(pybind11::module &m) {
    /*******************
     * "seal/encryptionparams.h" {
     ***/
    py::enum_<scheme_type>(m, "SCHEME_TYPE", py::module_local())
        .value("NONE", scheme_type::none)
        .value("BFV", scheme_type::BFV)
        .value("CKKS", scheme_type::CKKS);

    py::class_<EncryptionParameters>(m, "EncryptionParameters",
                                     py::module_local())
        .def(py::init<scheme_type>())
        .def(py::init<std::uint8_t>())
        .def(py::init<EncryptionParameters &>())
        .def("set_poly_modulus_degree",
             &EncryptionParameters::set_poly_modulus_degree)
        .def("set_coeff_modulus", &EncryptionParameters::set_coeff_modulus)
        .def("set_plain_modulus", py::overload_cast<const Modulus &>(
                                      &EncryptionParameters::set_plain_modulus))
        .def("set_plain_modulus", py::overload_cast<std::uint64_t>(
                                      &EncryptionParameters::set_plain_modulus))
        .def("set_random_generator",
             &EncryptionParameters::set_random_generator)
        .def("scheme", &EncryptionParameters::scheme)
        .def("poly_modulus_degree", &EncryptionParameters::poly_modulus_degree)
        .def("coeff_modulus", &EncryptionParameters::coeff_modulus)
        .def("plain_modulus", &EncryptionParameters::plain_modulus)
        .def("random_generator", &EncryptionParameters::random_generator)
        .def("save",
             [](const EncryptionParameters &e, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 e.save(out);
                 out.close();
             })
        .def("load",
             [](EncryptionParameters &e, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 e.load(in);
                 in.close();
             })
        .def(py::self == py::self)
        .def(py::self != py::self);
    /***
     * } "seal/encryptionparams.h"
     *******************/

    /*******************
     * "seal/context.h" {
     ***/
    py::class_<EncryptionParameterQualifiers> epq(
        m, "EncryptionParameterQualifiers", py::module_local());

    py::enum_<EncryptionParameterQualifiers::error_type>(epq, "ERROR_TYPE",
                                                         py::module_local())
        .value("NONE", EncryptionParameterQualifiers::error_type::none)
        .value("SUCCESS", EncryptionParameterQualifiers::error_type::success)
        .value("INVALID_SCHEME",
               EncryptionParameterQualifiers::error_type::invalid_scheme)
        .value("INVALID_COEFF_MODULUS_SIZE",
               EncryptionParameterQualifiers::error_type::
                   invalid_coeff_modulus_size)
        .value("INVALID_COEFF_MODULUS_BIT_COUNT",
               EncryptionParameterQualifiers::error_type::
                   invalid_coeff_modulus_bit_count)
        .value("INVALID_COEFF_MODULUS_NO_NTT",
               EncryptionParameterQualifiers::error_type::
                   invalid_coeff_modulus_no_ntt)
        .value("INVALID_POLY_MODULUS_DEGREE",
               EncryptionParameterQualifiers::error_type::
                   invalid_poly_modulus_degree)
        .value("INVALID_POLY_MODULUS_NON_POWER_OF_TWO",
               EncryptionParameterQualifiers::error_type::
                   invalid_poly_modulus_degree_non_power_of_two)
        .value("INVALID_PARAMETERS_TOO_LARGE",
               EncryptionParameterQualifiers::error_type::
                   invalid_parameters_too_large)
        .value("INVALID_PARAMETERS_INSECURE",
               EncryptionParameterQualifiers::error_type::
                   invalid_parameters_insecure)
        .value(
            "FAILED_CREATING_RNS_BASE",
            EncryptionParameterQualifiers::error_type::failed_creating_rns_base)
        .value("INVALID_PLAIN_MODULUS_BIT_COUNT",
               EncryptionParameterQualifiers::error_type::
                   invalid_plain_modulus_bit_count)
        .value("INVALID_PLAIN_MODULUS_COPRIMALITY",
               EncryptionParameterQualifiers::error_type::
                   invalid_plain_modulus_coprimality)
        .value("INVALID_PLAIN_MODULUS_TOO_LARGE",
               EncryptionParameterQualifiers::error_type::
                   invalid_plain_modulus_too_large)
        .value("INVALID_PLAIN_MODULUS_NONZERO",
               EncryptionParameterQualifiers::error_type::
                   invalid_plain_modulus_nonzero)
        .value("FAILED_CREATING_RNS_TOOL",
               EncryptionParameterQualifiers::error_type::
                   failed_creating_rns_tool);

    epq.def("parameter_error_name",
            &EncryptionParameterQualifiers::parameter_error_name)
        .def("parameter_error_message",
             &EncryptionParameterQualifiers::parameter_error_message)
        .def("parameters_set", &EncryptionParameterQualifiers::parameters_set)
        .def_readwrite("using_fft", &EncryptionParameterQualifiers::using_fft)
        .def_readwrite("using_ntt", &EncryptionParameterQualifiers::using_ntt)
        .def_readwrite("using_batching",
                       &EncryptionParameterQualifiers::using_batching)
        .def_readwrite("using_fast_plain_lift",
                       &EncryptionParameterQualifiers::using_fast_plain_lift)
        .def_readwrite(
            "using_descending_modulus_chain",
            &EncryptionParameterQualifiers::using_descending_modulus_chain)
        .def_readwrite("sec_level", &EncryptionParameterQualifiers::sec_level);

    py::class_<SEALContext, std::shared_ptr<SEALContext>> sealContext(
        m, "SEALContext", py::module_local());
    py::class_<SEALContext::ContextData,
               std::shared_ptr<SEALContext::ContextData>>(
        sealContext, "ContextData", py::module_local())
        .def("parms", &SEALContext::ContextData::parms)
        .def("parms_id", &SEALContext::ContextData::parms_id)
        .def("qualifiers", &SEALContext::ContextData::qualifiers)
        .def("total_coeff_modulus",
             &SEALContext::ContextData::total_coeff_modulus)
        .def("total_coeff_modulus_bit_count",
             &SEALContext::ContextData::total_coeff_modulus_bit_count)
        .def("coeff_div_plain_modulus",
             &SEALContext::ContextData::coeff_div_plain_modulus,
             py::return_value_policy::reference)
        .def("plain_upper_half_threshold",
             &SEALContext::ContextData::plain_upper_half_threshold)
        .def("upper_half_threshold",
             &SEALContext::ContextData::upper_half_threshold)
        .def("upper_half_increment",
             &SEALContext::ContextData::upper_half_increment)
        .def("coeff_modulus_mod_plain_modulus",
             &SEALContext::ContextData::coeff_modulus_mod_plain_modulus)
        .def("prev_context_data", &SEALContext::ContextData::prev_context_data)
        .def("next_context_data", &SEALContext::ContextData::next_context_data)
        .def("chain_index", &SEALContext::ContextData::chain_index)

        .def("rns_tool", &SEALContext::ContextData::rns_tool,
             py::return_value_policy::reference)
        .def("small_ntt_tables", &SEALContext::ContextData::small_ntt_tables,
             py::return_value_policy::reference)
        .def("plain_ntt_tables", &SEALContext::ContextData::plain_ntt_tables,
             py::return_value_policy::reference)
        .def("galois_tool", &SEALContext::ContextData::galois_tool,
             py::return_value_policy::reference);

    sealContext.def_static("Create", &SEALContext::Create)
        .def("get_context_data", &SEALContext::get_context_data)
        .def("key_context_data", &SEALContext::key_context_data)
        .def("first_context_data", &SEALContext::first_context_data)
        .def("last_context_data", &SEALContext::last_context_data)
        .def("parameters_set", &SEALContext::parameters_set)
        .def("parameters_error_name", &SEALContext::parameter_error_name)
        .def("parameters_error_message", &SEALContext::parameter_error_message)
        .def("key_parms_id", &SEALContext::key_parms_id)
        .def("first_parms_id", &SEALContext::first_parms_id)
        .def("last_parms_id", &SEALContext::last_parms_id)
        .def("using_keyswitching", &SEALContext::using_keyswitching);
    /***
     * } "seal/context.h"
     *******************/
}
