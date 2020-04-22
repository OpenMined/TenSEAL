#include <pybind11/pybind11.h>
#include <pybind11/operators.h>

#include <seal/seal.h>

#include "sealapi.h"

using namespace seal;
using namespace std;
namespace py = pybind11;

void loadSealAPI(py::module &m)
{
    // SEAL objects

    // "seal/biguint.h"
    py::class_<BigUInt>(m, "BigUInt")
        .def(py::init<>())
        .def(py::init<int>())
        .def(py::init<const std::string &>())
        .def(py::init<int, const std::string &>())
        .def(py::init<int, std::uint64_t>())
        .def(py::init<const BigUInt &>())

        .def("bit_count", &BigUInt::bit_count)
        .def("byte_count", &BigUInt::byte_count)
        .def("uint64_count", &BigUInt::uint64_count)
        .def("significant_bit_count", &BigUInt::significant_bit_count)
        .def("to_double", &BigUInt::to_double)
        .def("to_string", &BigUInt::to_string)
        .def("to_dec_string", &BigUInt::to_dec_string)
        .def("is_zero", &BigUInt::is_zero)
        .def("set_zero", &BigUInt::set_zero)
        .def("resize", &BigUInt::resize)
        .def("duplicate_to", &BigUInt::duplicate_to)
        .def("duplicate_from", &BigUInt::duplicate_from)

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
        .def(py::self >>= int())

        .def("__repr__", &BigUInt::to_dec_string);

    // "seal/ciphertext.h"
    // "seal/ckks.h"
    // "seal/modulus.h"
    // "seal/context.h"
    // "seal/decryptor.h"
    // "seal/intencoder.h"
    // "seal/encryptionparams.h"
    // "seal/encryptor.h"
    // "seal/evaluator.h"
    // "seal/intarray.h"
    // "seal/keygenerator.h"
    // "seal/memorymanager.h"
    // "seal/plaintext.h"
    // "seal/batchencoder.h"
    // "seal/publickey.h"
    // "seal/randomgen.h"
    // "seal/randomtostd.h"
    // "seal/relinkeys.h"
    // "seal/secretkey.h"
    // "seal/serialization.h"
    // "seal/smallmodulus.h"
    // "seal/valcheck.h"
}
