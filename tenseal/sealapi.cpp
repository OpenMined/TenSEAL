#include "sealapi.h"

#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <seal/seal.h>

using namespace seal;
using namespace std;
namespace py = pybind11;

void loadSEALAPI(py::module &m) {
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
        .def(py::self >>= int());

    // "seal/smallmodulus.h"
    py::class_<SmallModulus>(m, "SmallModulus")
        .def(py::init<std::uint64_t>())
        .def(py::init<const SmallModulus &>())

        .def("bit_count", &SmallModulus::bit_count)
        .def("uint64_count", &SmallModulus::uint64_count)
        .def("data", &SmallModulus::data)
        .def("value", &SmallModulus::value)
        .def("is_zero", &SmallModulus::is_zero)
        .def("is_prime", &SmallModulus::is_prime)

        .def(py::self == py::self)
        .def(py::self == std::uint64_t())
        .def(py::self != py::self)
        .def(py::self != std::uint64_t())
        .def(py::self < py::self)
        .def(py::self < std::uint64_t())
        .def(py::self <= py::self)
        .def(py::self <= std::uint64_t())
        .def(py::self > py::self)
        .def(py::self > std::uint64_t())
        .def(py::self >= py::self)
        .def(py::self >= std::uint64_t());

    // "seal/modulus.h"
    // "seal/ciphertext.h"
    // "seal/ckks.h"
    // "seal/context.h"
    // "seal/decryptor.h"
    // "seal/intencoder.h"
    // "seal/encryptionparams.h"
    // "seal/encryptor.h"
    // "seal/evaluator.h"
    // "seal/intarray.h"
    // "seal/keygenerator.h"
    // "seal/plaintext.h"
    // "seal/batchencoder.h"
    // "seal/publickey.h"
    // "seal/randomgen.h"
    // "seal/randomtostd.h"
    // "seal/relinkeys.h"
    // "seal/secretkey.h"
    // "seal/serialization.h"
    // "seal/valcheck.h"

    // "seal/memorymanager.h"
    py::class_<MemoryPoolHandle>(m, "MemoryPoolHandle")
        .def(py::init<>())
        .def(py::init<std::shared_ptr<util::MemoryPool>>())
        .def(py::init<const MemoryPoolHandle &>())

        .def("pool_count", &MemoryPoolHandle::pool_count)
        .def("alloc_byte_count", &MemoryPoolHandle::alloc_byte_count)
        .def("use_count", &MemoryPoolHandle::use_count)

        .def(py::self == py::self)
        .def(py::self != py::self);

    py::enum_<mm_prof_opt>(m, "mm_prof_opt")
        .value("DEFAULT", mm_prof_opt::DEFAULT)
        .value("FORCE_GLOBAL", mm_prof_opt::FORCE_GLOBAL)
        .value("FORCE_NEW", mm_prof_opt::FORCE_NEW)
        .value("FORCE_THREAD_LOCAL", mm_prof_opt::FORCE_THREAD_LOCAL);

    py::class_<MMProfGlobal>(m, "MMProfGlobal")
        .def(py::init<>())
        .def("get_pool", &MMProfGlobal::get_pool);

    py::class_<MMProfNew>(m, "MMProfNew")
        .def(py::init<>())
        .def("get_pool", &MMProfNew::get_pool);

    py::class_<MMProfFixed>(m, "MMProfFixed")
        .def(py::init<MemoryPoolHandle>())
        .def("get_pool", &MMProfFixed::get_pool);

    py::class_<MemoryManager>(m, "MemoryManager")
        .def_static("SwitchProfile", py::overload_cast<MMProf *&&>(
                                         &MemoryManager::SwitchProfile));
    //.def_static("SwitchProfile", py::overload_cast<std::unique_ptr<MMProf>
    //&&>(&MemoryManager::SwitchProfile)); .def_static("GetPool",
    //py::overload_cast<>(&MemoryManager::GetPool));

    py::class_<MMProfGuard>(m, "MMProfGuard")
        //.def(py::init<std::unique_ptr<MMProf> &&, bool>())
        .def(py::init<MMProf *, bool>())
        .def("try_lock", py::overload_cast<>(&MMProfGuard::try_lock))
        .def("lock", py::overload_cast<>(&MMProfGuard::lock))
        .def("unlock", py::overload_cast<>(&MMProfGuard::unlock))
        .def("owns_lock", &MMProfGuard::owns_lock);
}
