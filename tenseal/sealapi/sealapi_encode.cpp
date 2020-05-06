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

/***
 *Notes:
 * Some methods, like BatchEncoder::decode_uint64, have dedicated lambda
 *implementation because pybind can't handle the std::vector references
 *correctly, and we need to return the new value instead.
 * **/

void bind_encoder_decoder(pybind11::module &m) {
    /*******************
     * "seal/intencoder.h" {
     ***/
    py::class_<IntegerEncoder>(m, "IntegerEncoder", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def("encode",
             py::overload_cast<std::uint64_t>(&IntegerEncoder::encode))
        .def("encode", py::overload_cast<std::uint64_t, Plaintext &>(
                           &IntegerEncoder::encode))
        .def("encode",
             py::overload_cast<std::uint32_t>(&IntegerEncoder::encode))
        .def("encode", py::overload_cast<std::uint32_t, Plaintext &>(
                           &IntegerEncoder::encode))
        .def("decode_uint32", &IntegerEncoder::decode_uint32)
        .def("decode_uint64", &IntegerEncoder::decode_uint64)
        .def("encode", py::overload_cast<std::int64_t>(&IntegerEncoder::encode))
        .def("encode", py::overload_cast<std::int64_t, Plaintext &>(
                           &IntegerEncoder::encode))
        .def("encode", py::overload_cast<std::int32_t>(&IntegerEncoder::encode))
        .def("encode", py::overload_cast<std::int32_t, Plaintext &>(
                           &IntegerEncoder::encode))
        .def("encode",
             py::overload_cast<const BigUInt &>(&IntegerEncoder::encode))
        .def("encode", py::overload_cast<const BigUInt &, Plaintext &>(
                           &IntegerEncoder::encode))
        .def("decode_int32", &IntegerEncoder::decode_int32)
        .def("decode_int64", &IntegerEncoder::decode_int64)
        .def("decode_biguint", &IntegerEncoder::decode_biguint)
        .def("plain_modulus", &IntegerEncoder::plain_modulus);
    /***
     * } "seal/intencoder.h"
     *******************/

    /*******************
     * "seal/intarray.h" {
     ***/
    using IntArray64 = IntArray<std::uint64_t>;
    py::class_<IntArray64>(m, "IntArray", py::module_local())
        .def(py::init<>())
        .def(py::init<std::size_t>())
        .def(py::init<std::size_t, std::size_t>())
        .def("at", py::overload_cast<std::size_t>(&IntArray64::at, py::const_),
             py::return_value_policy::reference)
        .def("at", py::overload_cast<std::size_t>(&IntArray64::at))
        .def("__getitem__", py::overload_cast<std::size_t>(
                                &IntArray64::operator[], py::const_))
        .def("empty", &IntArray64::empty)
        .def("max_size", &IntArray64::max_size)
        .def("size", &IntArray64::size)
        .def("capacity", &IntArray64::capacity)
        .def("release", &IntArray64::release)
        .def("clear", &IntArray64::clear)
        .def("reserve", &IntArray64::reserve)
        .def("shrink_to_fit", &IntArray64::shrink_to_fit)
        .def("resize", &IntArray64::resize)
        .def("save",
             [](const IntArray64 &a, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 a.save(out);
                 out.close();
             })
        .def("load", [](IntArray64 &a, std::string &path) {
            std::ifstream in(path, std::ifstream::binary);
            a.load(in);
            in.close();
        });
    /***
     * } "seal/intarray.h"
     *******************/

    /*******************
     * "seal/batchencoder.h" {
     ***/
    py::class_<BatchEncoder>(m, "BatchEncoder", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def("encode",
             py::overload_cast<const std::vector<std::uint64_t> &, Plaintext &>(
                 &BatchEncoder::encode))
        .def("encode",
             py::overload_cast<const std::vector<std::int64_t> &, Plaintext &>(
                 &BatchEncoder::encode))
        .def("encode",
             [](BatchEncoder &b, Plaintext &plain) { return b.encode(plain); })
        .def("decode_uint64",
             [](BatchEncoder &b, const Plaintext &plain) {
                 std::vector<std::uint64_t> destination;
                 b.decode(plain, destination);
                 return destination;
             })
        .def("decode_int64",
             [](BatchEncoder &b, const Plaintext &plain) {
                 std::vector<std::int64_t> destination;
                 b.decode(plain, destination);
                 return destination;
             })
        .def("decode",
             [](BatchEncoder &b, Plaintext &plain) { return b.decode(plain); })
        .def("slot_count", &BatchEncoder::slot_count);
    /***
     * } "seal/batchencoder.h"
     *******************/

    /*******************
     * "seal/ckks.h" {
     ***/
    py::class_<CKKSEncoder>(m, "CKKSEncoder", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def("slot_count", &CKKSEncoder::slot_count)
        .def("encode",
             [](CKKSEncoder &e, const std::vector<double> &values,
                parms_id_type parms_id, double scale, Plaintext &destination) {
                 return e.encode(values, parms_id, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, const std::vector<std::complex<double>> &values,
                parms_id_type parms_id, double scale, Plaintext &destination) {
                 return e.encode(values, parms_id, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, const std::vector<double> &values, double scale,
                Plaintext &destination) {
                 return e.encode(values, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, const std::vector<std::complex<double>> &values,
                double scale, Plaintext &destination) {
                 return e.encode(values, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, double value, parms_id_type parms_id,
                double scale, Plaintext &destination) {
                 return e.encode(value, parms_id, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, double value, double scale,
                Plaintext &destination) {
                 return e.encode(value, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, std::complex<double> value,
                parms_id_type parms_id, double scale, Plaintext &destination) {
                 return e.encode(value, parms_id, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, std::complex<double> value, double scale,
                Plaintext &destination) {
                 return e.encode(value, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, std::int64_t value, parms_id_type parms_id,
                double scale, Plaintext &destination) {
                 return e.encode(value, parms_id, scale, destination);
             })
        .def("encode",
             [](CKKSEncoder &e, std::int64_t value, double scale,
                Plaintext &destination) {
                 return e.encode(value, scale, destination);
             })
        .def("decode_double",
             [](CKKSEncoder &e, const Plaintext &plain) {
                 std::vector<double> destination;
                 e.decode(plain, destination);
                 return destination;
             })
        .def("decode_complex", [](CKKSEncoder &e, const Plaintext &plain) {
            std::vector<std::complex<double>> destination;
            e.decode(plain, destination);
            return destination;
        });
    /***
     * } "seal/ckks.h"
     *******************/
}
