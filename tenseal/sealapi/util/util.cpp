#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

using namespace seal;
using namespace seal::util;
using namespace std;
namespace py = pybind11;

PYBIND11_MODULE(_sealapi_util_cpp, m) {
    m.doc() = "SEAL exported helpers";

    // "seal/util/baseconverter.h"
    py::class_<util::BaseConverter>(m, "BaseConverter", py::module_local())
        .def(py::init<MemoryPoolHandle>())
        .def(py::init<const std::vector<SmallModulus> &, std::size_t,
                      const SmallModulus &, MemoryPoolHandle>())
        .def("generate", &util::BaseConverter::generate)
        .def("floor_last_coeff_modulus_inplace",
             &util::BaseConverter::floor_last_coeff_modulus_inplace)
        .def("floor_last_coeff_modulus_ntt_inplace",
             &util::BaseConverter::floor_last_coeff_modulus_ntt_inplace)
        .def("round_last_coeff_modulus_inplace",
             &util::BaseConverter::round_last_coeff_modulus_inplace)
        .def("round_last_coeff_modulus_ntt_inplace",
             &util::BaseConverter::round_last_coeff_modulus_ntt_inplace)
        .def("fastbconv", &util::BaseConverter::fastbconv)
        .def("fastbconv_sk", &util::BaseConverter::fastbconv_sk)
        .def("mont_rq", &util::BaseConverter::mont_rq)
        .def("fast_floor", &util::BaseConverter::fast_floor)
        .def("fastbconv_mtilde", &util::BaseConverter::fastbconv_mtilde)
        .def("fastbconv_plain_gamma",
             &util::BaseConverter::fastbconv_plain_gamma)
        .def("reset", &util::BaseConverter::reset)
        .def("is_generated", &util::BaseConverter::is_generated)
        .def("coeff_base_mod_count", &util::BaseConverter::coeff_base_mod_count)
        .def("aux_base_mod_count", &util::BaseConverter::aux_base_mod_count)
        .def("get_plain_gamma_product",
             &util::BaseConverter::get_plain_gamma_product)
        .def("get_neg_inv_coeff", &util::BaseConverter::get_neg_inv_coeff)
        .def("get_plain_gamma_array",
             &util::BaseConverter::get_plain_gamma_array)
        .def("get_coeff_products_array",
             &util::BaseConverter::get_coeff_products_array)
        .def("get_inv_gamma", &util::BaseConverter::get_inv_gamma)
        .def("get_bsk_small_ntt_tables",
             &util::BaseConverter::get_bsk_small_ntt_tables)
        .def("bsk_base_mod_count", &util::BaseConverter::bsk_base_mod_count)
        .def("get_bsk_mod_array", &util::BaseConverter::get_bsk_mod_array)
        .def("get_msk", &util::BaseConverter::get_msk)
        .def("get_m_tilde", &util::BaseConverter::get_m_tilde)
        .def("get_mtilde_inv_coeff_products_mod_coeff",
             &util::BaseConverter::get_mtilde_inv_coeff_products_mod_coeff)
        .def("get_inv_coeff_mod_mtilde",
             &util::BaseConverter::get_inv_coeff_mod_mtilde)
        .def("get_inv_coeff_mod_coeff_array",
             &util::BaseConverter::get_inv_coeff_mod_coeff_array)
        .def("get_inv_last_coeff_mod_array",
             &util::BaseConverter::get_inv_last_coeff_mod_array)
        .def("get_coeff_base_products_mod_msk",
             &util::BaseConverter::get_coeff_base_products_mod_msk);

    // "seal/util/smallntt.h"
    py::class_<util::SmallNTTTables>(m, "SmallNTTTables", py::module_local())
        .def(py::init<MemoryPoolHandle>())
        .def(py::init<int, const SmallModulus &, MemoryPoolHandle>())
        .def("generate", &util::SmallNTTTables::generate)
        .def("reset", &util::SmallNTTTables::reset)
        .def("get_root", &util::SmallNTTTables::get_root)
        .def("get_from_root_powers",
             &util::SmallNTTTables::get_from_root_powers)
        .def("get_from_inv_root_powers",
             &util::SmallNTTTables::get_from_inv_root_powers)
        .def("get_from_scaled_inv_root_powers",
             &util::SmallNTTTables::get_from_scaled_inv_root_powers)
        .def("get_from_inv_root_powers_div_two",
             &util::SmallNTTTables::get_from_inv_root_powers_div_two)
        .def("get_from_scaled_inv_root_powers_div_two",
             &util::SmallNTTTables::get_from_scaled_inv_root_powers_div_two)
        .def("get_inv_degree_modulo",
             &util::SmallNTTTables::get_inv_degree_modulo)
        .def("modulus", &util::SmallNTTTables::modulus)
        .def("coeff_count_power", &util::SmallNTTTables::coeff_count_power)
        .def("coeff_count", &util::SmallNTTTables::coeff_count);
    m.def("ntt_negacyclic_harvey_lazy", &util::ntt_negacyclic_harvey_lazy);
    m.def("ntt_negacyclic_harvey", &util::ntt_negacyclic_harvey);
    m.def("inverse_ntt_negacyclic_harvey_lazy",
          &util::inverse_ntt_negacyclic_harvey_lazy);
}
