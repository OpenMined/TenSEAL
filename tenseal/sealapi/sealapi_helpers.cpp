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
     * "seal/serialization.h" {
     ***/
    py::enum_<compr_mode_type>(m, "COMPR_MODE_TYPE", py::module_local())
        .value("NONE", compr_mode_type::none)
        .value("ZLIB", compr_mode_type::zlib)
        .value("ZSTD", compr_mode_type::zstd);

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

    py::class_<prng_seed_type>(m, "prng_seed_type");

    py::enum_<prng_type>(m, "prng_type", py::module_local())
        .value("unknown", prng_type::unknown)
        .value("blake2xb", prng_type::blake2xb)
        .value("shake256", prng_type::shake256);

    py::class_<UniformRandomGenerator, std::shared_ptr<UniformRandomGenerator>>(
        m, "UniformRandomGenerator");

    py::class_<UniformRandomGeneratorInfo,
               std::shared_ptr<UniformRandomGeneratorInfo>>(
        m, "UniformRandomGeneratorInfo")
        .def(py::init<>())
        .def(py::init<prng_type, prng_seed_type>())
        .def(py::self == py::self)
        .def(py::self != py::self)
        .def("clear", &UniformRandomGeneratorInfo::clear)
        .def("make_prng", &UniformRandomGeneratorInfo::make_prng)
        .def("has_valid_prng_type",
             &UniformRandomGeneratorInfo::has_valid_prng_type)
        .def("type",
             py::overload_cast<>(&UniformRandomGeneratorInfo::type, py::const_))
        .def("seed", py::overload_cast<>(&UniformRandomGeneratorInfo::seed))
        .def("save",
             [](const UniformRandomGeneratorInfo &p, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 p.save(out);
                 out.close();
             })
        .def("load", [](UniformRandomGeneratorInfo &p, std::string &path) {
            std::ifstream in(path, std::ifstream::binary);
            p.load(in);
            in.close();
        });

    py::class_<UniformRandomGeneratorFactory,
               std::shared_ptr<UniformRandomGeneratorFactory>>(
        m, "UniformRandomGeneratorFactory");

    py::class_<Blake2xbPRNG, UniformRandomGenerator,
               std::shared_ptr<Blake2xbPRNG>>(m, "Blake2xbPRNG")
        .def(py::init<prng_seed_type>())
        .def("seed", &Blake2xbPRNG::seed)
        .def("generate", py::overload_cast<>(&Blake2xbPRNG::generate))
        .def("info", &Blake2xbPRNG::info)
        .def("refresh", &Blake2xbPRNG::refresh);

    py::class_<Blake2xbPRNGFactory, UniformRandomGeneratorFactory,
               std::shared_ptr<Blake2xbPRNGFactory>>(m, "Blake2xbPRNGFactory")
        .def(py::init<>())
        .def(py::init<prng_seed_type>())
        .def("create", py::overload_cast<>(&Blake2xbPRNGFactory::create),
             py::return_value_policy::reference)
        .def("create",
             py::overload_cast<prng_seed_type>(&Blake2xbPRNGFactory::create),
             py::return_value_policy::reference)
        .def("use_random_seed", &Blake2xbPRNGFactory::use_random_seed)
        .def("default_seed", &Blake2xbPRNGFactory::default_seed)
        .def_static("DefaultFactory", &Blake2xbPRNGFactory::DefaultFactory);

    py::class_<Shake256PRNG, UniformRandomGenerator,
               std::shared_ptr<Shake256PRNG>>(m, "Shake256PRNG")
        .def(py::init<prng_seed_type>())
        .def("seed", &Shake256PRNG::seed)
        .def("generate", py::overload_cast<>(&Shake256PRNG::generate))
        .def("info", &Shake256PRNG::info)
        .def("refresh", &Shake256PRNG::refresh);

    py::class_<Shake256PRNGFactory, UniformRandomGeneratorFactory,
               std::shared_ptr<Shake256PRNGFactory>>(m, "Shake256PRNGFactory")
        .def(py::init<>())
        .def(py::init<prng_seed_type>())
        .def("create", py::overload_cast<>(&Shake256PRNGFactory::create),
             py::return_value_policy::reference)
        .def("create",
             py::overload_cast<prng_seed_type>(&Shake256PRNGFactory::create),
             py::return_value_policy::reference)
        .def("use_random_seed", &Shake256PRNGFactory::use_random_seed)
        .def("default_seed", &Shake256PRNGFactory::default_seed)
        .def_static("DefaultFactory", &Shake256PRNGFactory::DefaultFactory);

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
