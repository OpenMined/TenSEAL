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

/***
 *Notes:
 * Some methods, like multiply_inplace, have dedicated lambda implementation to
 *prevent exposing the MemoryPool parameters to python.
 * **/

void bind_seal_evaluator(pybind11::module &m) {
    /*******************
     * "seal/evaluator.h" {
     ***/
    py::class_<Evaluator, std::shared_ptr<Evaluator>>(m, "Evaluator",
                                                      py::module_local())
        .def(py::init<const SEALContext &>())
        .def("add_inplace", &Evaluator::add_inplace)
        .def("sub_inplace", &Evaluator::sub_inplace)
        .def("multiply_inplace",
             [](Evaluator &e, Ciphertext &l, const Ciphertext &r) {
                 e.multiply_inplace(l, r);
             })
        .def("negate_inplace", &Evaluator::negate_inplace)
        .def("square_inplace",
             [](Evaluator &e, Ciphertext &l) { e.square_inplace(l); })
        .def("negate", &Evaluator::negate)
        .def("square", [](Evaluator &e, const Ciphertext &src,
                          Ciphertext &dst) { e.square(src, dst); })
        .def("add", &Evaluator::add)
        .def("sub", &Evaluator::sub)
        .def("multiply",
             [](Evaluator &e, const Ciphertext &e1, const Ciphertext &e2,
                Ciphertext &dst) { e.multiply(e1, e2, dst); })
        .def("add_plain_inplace", &Evaluator::add_plain_inplace)
        .def("sub_plain_inplace", &Evaluator::sub_plain_inplace)
        .def("multiply_plain_inplace",
             [](Evaluator &e, Ciphertext &enc, const Plaintext &p) {
                 e.multiply_plain_inplace(enc, p);
             })
        .def("add_plain", &Evaluator::add_plain)
        .def("sub_plain", &Evaluator::sub_plain)
        .def("multiply_plain",
             [](Evaluator &e, const Ciphertext &enc, const Plaintext &p,
                Ciphertext &out) { e.multiply_plain(enc, p, out); })
        .def("mod_switch_to_next_inplace",
             [](Evaluator &e, Ciphertext &dst) {
                 e.mod_switch_to_next_inplace(dst);
             })
        .def("mod_switch_to_next",
             [](Evaluator &e, const Ciphertext &enc, Ciphertext &dst) {
                 e.mod_switch_to_next(enc, dst);
             })
        .def("exponentiate_inplace",
             [](Evaluator &e, Ciphertext &enc, std::uint64_t exponent,
                const RelinKeys &relin_keys) {
                 e.exponentiate_inplace(enc, exponent, relin_keys);
             })
        .def("exponentiate",
             [](Evaluator &e, const Ciphertext &enc, std::uint64_t exponent,
                const RelinKeys &relin_keys, Ciphertext &out) {
                 e.exponentiate(enc, exponent, relin_keys, out);
             })
        .def("add_many", &Evaluator::add_many)
        .def("multiply_many",
             [](Evaluator &e, const std::vector<Ciphertext> &enc,
                const RelinKeys &relin_keys,
                Ciphertext &dst) { e.multiply_many(enc, relin_keys, dst); })
        .def("relinearize_inplace",
             [](Evaluator &e, Ciphertext &enc, const RelinKeys &relin_keys) {
                 e.relinearize_inplace(enc, relin_keys);
             })
        .def(
            "relinearize",
            [](Evaluator &e, const Ciphertext &enc, const RelinKeys &relin_keys,
               Ciphertext &out) { e.relinearize(enc, relin_keys, out); })
        .def("transform_to_ntt_inplace",
             [](Evaluator &e, Plaintext &in, parms_id_type parms_id) {
                 e.transform_to_ntt_inplace(in, parms_id);
             })
        .def("transform_to_ntt",
             [](Evaluator &e, const Plaintext &in, parms_id_type parms_id,
                Plaintext &dst) { e.transform_to_ntt(in, parms_id, dst); })
        .def("mod_switch_to_next",
             py::overload_cast<const Plaintext &, Plaintext &>(
                 &Evaluator::mod_switch_to_next, py::const_))
        .def("mod_switch_to_next_inplace",
             py::overload_cast<Plaintext &>(
                 &Evaluator::mod_switch_to_next_inplace, py::const_))
        .def("mod_switch_to_inplace",
             py::overload_cast<Plaintext &, parms_id_type>(
                 &Evaluator::mod_switch_to_inplace, py::const_))
        .def("mod_switch_to_inplace",
             [](Evaluator &e, Ciphertext &enc, parms_id_type parms_id) {
                 e.mod_switch_to_inplace(enc, parms_id);
             })
        .def("mod_switch_to",
             [](Evaluator &e, const Ciphertext &enc, parms_id_type parms_id,
                Ciphertext &dst) { e.mod_switch_to(enc, parms_id, dst); })
        .def("mod_switch_to",
             py::overload_cast<const Plaintext &, parms_id_type, Plaintext &>(
                 &Evaluator::mod_switch_to, py::const_))

        .def("rescale_to_next",
             [](Evaluator &e, const Ciphertext &enc, Ciphertext &dst) {
                 e.rescale_to_next(enc, dst);
             })
        .def("rescale_to_next_inplace",
             [](Evaluator &e, Ciphertext &enc) {
                 e.rescale_to_next_inplace(enc);
             })
        .def("rescale_to_inplace",
             [](Evaluator &e, Ciphertext &enc, parms_id_type parms_id) {
                 e.rescale_to_inplace(enc, parms_id);
             })

        .def("rescale_to",
             [](Evaluator &e, const Ciphertext &enc, parms_id_type parms_id,
                Ciphertext &dst) { e.rescale_to(enc, parms_id, dst); })

        .def("transform_to_ntt_inplace",
             py::overload_cast<Ciphertext &>(
                 &Evaluator::transform_to_ntt_inplace, py::const_))
        .def("transform_to_ntt",
             py::overload_cast<const Ciphertext &, Ciphertext &>(
                 &Evaluator::transform_to_ntt, py::const_))
        .def("transform_from_ntt_inplace",
             py::overload_cast<Ciphertext &>(
                 &Evaluator::transform_from_ntt_inplace, py::const_))
        .def("transform_from_ntt",
             py::overload_cast<const Ciphertext &, Ciphertext &>(
                 &Evaluator::transform_from_ntt, py::const_))

        .def("apply_galois_inplace",
             [](Evaluator &e, Ciphertext &encrypted, std::uint32_t galois_elt,
                const GaloisKeys &galois_keys) {
                 e.apply_galois_inplace(encrypted, galois_elt, galois_keys);
             })
        .def("apply_galois",
             [](Evaluator &e, const Ciphertext &encrypted,
                std::uint64_t galois_elt, const GaloisKeys &galois_keys,
                Ciphertext &destination) {
                 e.apply_galois(encrypted, galois_elt, galois_keys,
                                destination);
             })

        .def("rotate_rows_inplace",
             [](Evaluator &e, Ciphertext &enc, int steps,
                const GaloisKeys &galois_keys) {
                 e.rotate_rows_inplace(enc, steps, galois_keys);
             })
        .def("rotate_rows",
             [](Evaluator &e, const Ciphertext &enc, int steps,
                const GaloisKeys &galois_keys, Ciphertext &dst) {
                 e.rotate_rows(enc, steps, galois_keys, dst);
             })
        .def("rotate_columns",
             [](Evaluator &e, const Ciphertext &enc,
                const GaloisKeys &galois_keys,
                Ciphertext &dst) { e.rotate_columns(enc, galois_keys, dst); })
        .def("rotate_columns_inplace",
             [](Evaluator &e, Ciphertext &enc, const GaloisKeys &galois_key) {
                 e.rotate_columns_inplace(enc, galois_key);
             })
        .def("rotate_vector_inplace",
             [](Evaluator &e, Ciphertext &enc, int steps,
                const GaloisKeys &galois_keys) {
                 e.rotate_vector_inplace(enc, steps, galois_keys);
             })
        .def("rotate_vector",
             [](Evaluator &e, const Ciphertext &enc, int steps,
                const GaloisKeys &galois_keys, Ciphertext &dst) {
                 e.rotate_vector(enc, steps, galois_keys, dst);
             })

        .def("complex_conjugate_inplace",
             [](Evaluator &e, Ciphertext &enc, const GaloisKeys &galois_keys) {
                 e.complex_conjugate_inplace(enc, galois_keys);
             })
        .def("complex_conjugate",
             [](Evaluator &e, const Ciphertext &enc,
                const GaloisKeys &galois_keys, Ciphertext &dst) {
                 e.complex_conjugate(enc, galois_keys, dst);
             });
    /***
     * } "seal/evaluator.h"
     *******************/

    /*******************
     * "seal/valcheck.h" {
     ***/
    m.def("is_metadata_valid_for",
          [](const Plaintext &in, const SEALContext &ctx) {
              return is_metadata_valid_for(in, ctx);
          })
        .def("is_metadata_valid_for",
             [](const Ciphertext &in, const SEALContext &ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const SecretKey &in, const SEALContext &ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const PublicKey &in, const SEALContext &ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const KSwitchKeys &in, const SEALContext &ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const RelinKeys &in, const SEALContext &ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const GaloisKeys &in, const SEALContext &ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_buffer_valid",
             py::overload_cast<const Plaintext &>(&is_buffer_valid))
        .def("is_buffer_valid",
             py::overload_cast<const Ciphertext &>(&is_buffer_valid))
        .def("is_buffer_valid",
             py::overload_cast<const SecretKey &>(&is_buffer_valid))
        .def("is_buffer_valid",
             py::overload_cast<const PublicKey &>(&is_buffer_valid))
        .def("is_buffer_valid",
             py::overload_cast<const KSwitchKeys &>(&is_buffer_valid))
        .def("is_buffer_valid",
             py::overload_cast<const RelinKeys &>(&is_buffer_valid))
        .def("is_buffer_valid",
             py::overload_cast<const GaloisKeys &>(&is_buffer_valid))
        .def("is_data_valid_for",
             py::overload_cast<const Plaintext &, const SEALContext &>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const Ciphertext &, const SEALContext &>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const SecretKey &, const SEALContext &>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const PublicKey &, const SEALContext &>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const KSwitchKeys &, const SEALContext &>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const RelinKeys &, const SEALContext &>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const GaloisKeys &, const SEALContext &>(
                 &is_data_valid_for))
        .def("is_valid_for",
             py::overload_cast<const Plaintext &, const SEALContext &>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const Ciphertext &, const SEALContext &>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const SecretKey &, const SEALContext &>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const PublicKey &, const SEALContext &>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const KSwitchKeys &, const SEALContext &>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const RelinKeys &, const SEALContext &>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const GaloisKeys &, const SEALContext &>(
                 &is_valid_for));
    /***
     * } "seal/valcheck.h"
     *******************/
}
