#include <pybind11/complex.h>
#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>

#include <fstream>

#include "seal/seal.h"
#include "tenseal/sealapi/bindings.h"

using namespace seal;
using namespace std;
namespace py = pybind11;

void bind_helpers(pybind11::module &m) {
    /*******************
     * "seal/biguint.h" {
     ***/
    py::class_<BigUInt>(m, "BigUInt", py::module_local())
        .def(py::init<>())
        .def(py::init<int>())
        .def(py::init<const std::string &>())
        .def(py::init<int, const std::string &>())
        .def(py::init<int, std::uint64_t>())
        .def(py::init<const BigUInt &>())

        .def("bit_count", &BigUInt::bit_count)
        .def("data", py::overload_cast<>(&BigUInt::data),
             py::return_value_policy::reference)
        .def("data", py::overload_cast<>(&BigUInt::data, py::const_),
             py::return_value_policy::reference)
        .def("byte_count", &BigUInt::byte_count)
        .def("uint64_count", &BigUInt::uint64_count)
        .def("significant_bit_count", &BigUInt::significant_bit_count)
        .def("to_double", &BigUInt::to_double)
        .def("to_string", &BigUInt::to_string)
        .def("to_dec_string", &BigUInt::to_dec_string)
        .def("is_zero", &BigUInt::is_zero)
        .def("set_zero", &BigUInt::set_zero)
        .def("resize", &BigUInt::resize)

        .def("divrem", py::overload_cast<const BigUInt &, BigUInt &>(
                           &BigUInt::divrem, py::const_))
        .def("divrem", py::overload_cast<std::uint64_t, BigUInt &>(
                           &BigUInt::divrem, py::const_))
        .def("modinv",
             py::overload_cast<const BigUInt &>(&BigUInt::modinv, py::const_))
        .def("modinv",
             py::overload_cast<std::uint64_t>(&BigUInt::modinv, py::const_))
        .def("trymodinv", py::overload_cast<const BigUInt &, BigUInt &>(
                              &BigUInt::trymodinv, py::const_))
        .def("trymodinv", py::overload_cast<std::uint64_t, BigUInt &>(
                              &BigUInt::trymodinv, py::const_))
        .def_static("of", &BigUInt::of)
        .def("duplicate_to", &BigUInt::duplicate_to)
        .def("duplicate_from", &BigUInt::duplicate_from)
        .def("save_size", &BigUInt::save_size)
        .def("save",
             [](const BigUInt &b, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 b.save(out);
                 out.close();
             })
        .def("load",
             [](BigUInt &p, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 p.load(in);
                 in.close();
             })

        .def(py::self + py::self)
        .def(py::self + std::uint64_t())
        .def(py::self - py::self)
        .def(py::self - std::uint64_t())
        .def(py::self * py::self)
        .def(py::self * std::uint64_t())
        .def(py::self / py::self)
        .def(py::self / std::uint64_t())
        .def(py::self ^ py::self)
        .def(py::self ^ std::uint64_t())
        .def(py::self & py::self)
        .def(py::self & std::uint64_t())
        .def(py::self | py::self)
        .def(py::self | std::uint64_t())
        .def(py::self < py::self)
        .def(py::self < std::uint64_t())
        .def(py::self > py::self)
        .def(py::self > std::uint64_t())
        .def(py::self <= py::self)
        .def(py::self <= std::uint64_t())
        .def(py::self >= py::self)
        .def(py::self >= std::uint64_t())
        .def(py::self == py::self)
        .def(py::self == std::uint64_t())
        .def(py::self != py::self)
        .def(py::self != std::uint64_t())
        .def(py::self >> int())
        .def(py::self << int())
        .def(py::self += py::self)
        .def(py::self += std::uint64_t())
        .def(py::self -= py::self)
        .def(py::self -= std::uint64_t())
        .def(py::self *= py::self)
        .def(py::self *= std::uint64_t())
        .def(py::self /= py::self)
        .def(py::self /= std::uint64_t())
        .def(py::self ^= py::self)
        .def(py::self ^= std::uint64_t())
        .def(py::self &= py::self)
        .def(py::self &= std::uint64_t())
        .def(py::self |= py::self)
        .def(py::self |= std::uint64_t())
        .def(py::self <<= int())
        .def(py::self >>= int());
    /***
     * } "seal/biguint.h"
     *******************/

    /*******************
     * "seal/serialization.h" {
     ***/
    py::enum_<compr_mode_type>(m, "COMPR_MODE_TYPE", py::module_local())
        .value("NONE", compr_mode_type::none)
        .value("DEFLATE", compr_mode_type::deflate);

    py::class_<Serialization> serialization(m, "Serialization",
                                            py::module_local());
    py::class_<Serialization::SEALHeader>(serialization, "SEALHeader",
                                          py::module_local())
        .def(py::init<>())
        .def_readonly("magic", &Serialization::SEALHeader::magic)
        .def_readonly("header_size", &Serialization::SEALHeader::header_size)
        .def_readonly("version_major",
                      &Serialization::SEALHeader::version_major)
        .def_readonly("version_minor",
                      &Serialization::SEALHeader::version_minor)
        .def_readwrite("compr_mode", &Serialization::SEALHeader::compr_mode)
        .def_readwrite("size", &Serialization::SEALHeader::size)
        .def_readwrite("reserved", &Serialization::SEALHeader::reserved);

    serialization
        .def_static("IsSupportedComprMode",
                    py::overload_cast<compr_mode_type>(
                        &Serialization::IsSupportedComprMode))
        .def_static("IsSupportedComprMode",
                    py::overload_cast<std::uint8_t>(
                        &Serialization::IsSupportedComprMode))
        .def_static("ComprSizeEstimate", &Serialization::ComprSizeEstimate)
        .def_static("IsValidHeader", &Serialization::IsValidHeader)
        .def_static(
            "SaveHeader",
            [](const Serialization::SEALHeader &header, std::string &path) {
                std::ofstream out(path, std::ofstream::binary);
                Serialization::SaveHeader(header, out);
                out.close();
            })
        .def_static("LoadHeader", [](std::string &path,
                                     Serialization::SEALHeader &header,
                                     bool try_upgrade_if_invalid) {
            std::ifstream in(path, std::ifstream::binary);
            Serialization::LoadHeader(in, header, try_upgrade_if_invalid);
            in.close();
        });
    /***
     * } "seal/serialization.h"
     *******************/

    /*******************
     * "seal/randomgen.h" {
     ***/
    m.def("random_uint64", &random_uint64);

    py::class_<UniformRandomGenerator, std::shared_ptr<UniformRandomGenerator>>(
        m, "UniformRandomGenerator");
    py::class_<BlakePRNG, UniformRandomGenerator, std::shared_ptr<BlakePRNG>>(
        m, "BlakePRNG")
        .def(py::init<random_seed_type>())
        .def("seed", &BlakePRNG::seed)
        .def("generate", py::overload_cast<>(&BlakePRNG::generate))
        .def("refresh", &BlakePRNG::refresh);

    py::class_<UniformRandomGeneratorFactory,
               std::shared_ptr<UniformRandomGeneratorFactory>>(
        m, "UniformRandomGeneratorFactory");

    py::class_<BlakePRNGFactory, UniformRandomGeneratorFactory,
               std::shared_ptr<BlakePRNGFactory>>(m, "BlakePRNGFactory")
        .def(py::init<>())
        .def(py::init<random_seed_type>())
        .def("create", py::overload_cast<>(&BlakePRNGFactory::create),
             py::return_value_policy::reference)
        .def("create",
             py::overload_cast<random_seed_type>(&BlakePRNGFactory::create),
             py::return_value_policy::reference)
        .def_static("DefaultFactory", &BlakePRNGFactory::DefaultFactory);

    py::class_<RandomToStandardAdapter,
               std::shared_ptr<RandomToStandardAdapter>>(
        m, "RandomToStandardAdapter")
        .def(py::init<std::shared_ptr<UniformRandomGenerator>>())
        .def("__call__", &RandomToStandardAdapter::operator())
        .def("min", &RandomToStandardAdapter::min)
        .def("max", &RandomToStandardAdapter::max);
    /***
     * } "seal/randomgen.h"
     *******************/
}
