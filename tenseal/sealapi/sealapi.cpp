#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

using namespace seal;
using namespace std;
namespace py = pybind11;

PYBIND11_MODULE(_sealapi_cpp, m) {
    m.doc() = "Library for doing homomorphic encryption operations";

    // "seal/biguint.h"
    py::class_<BigUInt>(m, "BigUInt", py::module_local())
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
    py::class_<SmallModulus>(m, "SmallModulus", py::module_local())
        .def(py::init<std::uint64_t>())
        .def(py::init<const SmallModulus &>())

        .def("bit_count", &SmallModulus::bit_count)
        .def("uint64_count", &SmallModulus::uint64_count)
        .def("data", &SmallModulus::data)
        .def("value", &SmallModulus::value)
        .def("const_ratio", &SmallModulus::const_ratio)
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

    // "seal/serialization.h"
    py::enum_<compr_mode_type>(m, "COMPR_MODE_TYPE", py::module_local())
#ifdef SEAL_USE_ZLIB
        .value("DEFLATE", compr_mode_type::deflate)
#endif
        .value("NONE", compr_mode_type::none);

    py::class_<Serialization> serialization(m, "Serialization",
                                            py::module_local());
    py::class_<Serialization::SEALHeader>(serialization, "SEALHeader",
                                          py::module_local())
        .def(py::init<>())
        .def_readwrite("magic", &Serialization::SEALHeader::magic)
        .def_readwrite("zero_byte", &Serialization::SEALHeader::zero_byte)
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
        .def_static("IsValidHeader", &Serialization::IsValidHeader);

    // "seal/plaintext.h"
    py::class_<Plaintext>(m, "Plaintext", py::module_local())
        .def(py::init<>())
        .def(py::init<std::size_t>())
        .def(py::init<std::size_t, std::size_t>())
        .def(py::init<std::string>())
        .def(py::init<Plaintext &>())

        .def("reserve", &Plaintext::reserve)
        .def("shrink_to_fit", &Plaintext::shrink_to_fit)
        .def("release", &Plaintext::release)
        .def("resize", &Plaintext::resize)
        .def("set_zero",
             py::overload_cast<std::size_t, std::size_t>(&Plaintext::set_zero))
        .def("set_zero", py::overload_cast<std::size_t>(&Plaintext::set_zero))
        .def("set_zero", py::overload_cast<>(&Plaintext::set_zero))
        .def("is_zero", &Plaintext::is_zero)
        .def("capacity", &Plaintext::capacity)
        .def("coeff_count", &Plaintext::coeff_count)
        .def("significant_coeff_count", &Plaintext::significant_coeff_count)
        .def("nonzero_coeff_count", &Plaintext::nonzero_coeff_count)
        .def("to_string", &Plaintext::to_string)
        .def("is_ntt_form", &Plaintext::is_ntt_form)
        .def("pool", &Plaintext::pool)

        .def(py::self == py::self)
        .def(py::self != py::self);

    // "seal/randomgen.h"
    m.def("random_uint64", &random_uint64);

    py::class_<BlakePRNG, std::shared_ptr<BlakePRNG>>(m, "BlakePRNG",
                                                      py::module_local())
        .def(py::init<random_seed_type>())
        .def("generate", py::overload_cast<>(&BlakePRNG::generate))
        .def("refresh", &BlakePRNG::refresh);

    py::class_<UniformRandomGeneratorFactory,
               std::shared_ptr<UniformRandomGeneratorFactory>>(
        m, "UniformRandomGeneratorFactory", py::module_local());

    py::class_<BlakePRNGFactory, UniformRandomGeneratorFactory,
               std::shared_ptr<BlakePRNGFactory>>(m, "BlakePRNGFactory",
                                                  py::module_local())
        .def(py::init<>())
        .def(py::init<random_seed_type>())
        .def("create", py::overload_cast<>(&BlakePRNGFactory::create),
             py::return_value_policy::reference)
        .def("create",
             py::overload_cast<random_seed_type>(&BlakePRNGFactory::create),
             py::return_value_policy::reference)
        .def_static("DefaultFactory", &BlakePRNGFactory::DefaultFactory);

    // "seal/encryptionparams.h"
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
        .def("set_plain_modulus", py::overload_cast<const SmallModulus &>(
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
        .def(py::self == py::self)
        .def(py::self != py::self);

    // "seal/modulus.h"
    py::enum_<sec_level_type>(m, "SEC_LEVEL_TYPE", py::module_local())
        .value("NONE", sec_level_type::none)
        .value("TC128", sec_level_type::tc128)
        .value("TC192", sec_level_type::tc192)
        .value("TC256", sec_level_type::tc256);

    py::class_<CoeffModulus>(m, "CoeffModulus")
        .def_static("MaxBitCount", &CoeffModulus::MaxBitCount)
        .def_static("BFVDefault", &CoeffModulus::BFVDefault)
        .def_static("Create", &CoeffModulus::Create);

    py::class_<PlainModulus>(m, "PlainModulus")
        .def_static("Batching", py::overload_cast<std::size_t, int>(
                                    &PlainModulus::Batching))
        .def_static("Batching",
                    py::overload_cast<std::size_t, std::vector<int>>(
                        &PlainModulus::Batching));

    // "seal/context.h"
    py::class_<EncryptionParameterQualifiers>(
        m, "EncryptionParameterQualifiers", py::module_local())
        .def_readwrite("parameters_set",
                       &EncryptionParameterQualifiers::parameters_set)
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
    py::class_<SEALContext::ContextData, std::shared_ptr<SEALContext::ContextData>>(sealContext, "ContextData",
                                         py::module_local())
        .def("parms", &SEALContext::ContextData::parms)
        .def("parms_id", &SEALContext::ContextData::parms_id)
        .def("qualifiers", &SEALContext::ContextData::qualifiers)
        .def("total_coeff_modulus",
             &SEALContext::ContextData::total_coeff_modulus)
        .def("total_coeff_modulus_bit_count",
             &SEALContext::ContextData::total_coeff_modulus_bit_count)
        .def("small_ntt_tables", &SEALContext::ContextData::small_ntt_tables)
        .def("plain_ntt_tables", &SEALContext::ContextData::plain_ntt_tables)
        .def("coeff_div_plain_modulus",
             &SEALContext::ContextData::coeff_div_plain_modulus)
        .def("plain_upper_half_threshold",
             &SEALContext::ContextData::plain_upper_half_threshold)
        .def("upper_half_threshold",
             &SEALContext::ContextData::upper_half_threshold)
        .def("upper_half_increment",
             &SEALContext::ContextData::upper_half_increment)
        .def("coeff_mod_plain_modulus",
             &SEALContext::ContextData::coeff_mod_plain_modulus)
        .def("prev_context_data", &SEALContext::ContextData::prev_context_data)
        .def("next_context_data", &SEALContext::ContextData::next_context_data)
        .def("chain_index", &SEALContext::ContextData::chain_index);

    sealContext.def_static("Create", &SEALContext::Create)
        .def("get_context_data", &SEALContext::get_context_data)
        .def("key_context_data", &SEALContext::key_context_data)
        .def("first_context_data", &SEALContext::first_context_data)
        .def("last_context_data", &SEALContext::last_context_data)
        .def("parameters_set", &SEALContext::parameters_set)
        .def("key_parms_id", &SEALContext::key_parms_id)
        .def("first_parms_id", &SEALContext::first_parms_id)
        .def("last_parms_id", &SEALContext::last_parms_id)
        .def("using_keyswitching", &SEALContext::using_keyswitching);

    // "seal/intencoder.h"
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

    // "seal/ciphertext.h"
    // "seal/ckks.h"
    // "seal/decryptor.h"
    // "seal/encryptor.h"
    // "seal/evaluator.h"
    // "seal/intarray.h"
    // "seal/keygenerator.h"
    // "seal/batchencoder.h"
    // "seal/publickey.h"
    // "seal/relinkeys.h"
    // "seal/secretkey.h"
    // "seal/valcheck.h"

    // "seal/memorymanager.h"
    py::class_<MemoryPoolHandle>(m, "MemoryPoolHandle", py::module_local())
        .def(py::init<>())
        .def(py::init<std::shared_ptr<util::MemoryPool>>())
        .def(py::init<const MemoryPoolHandle &>())

        .def("pool_count", &MemoryPoolHandle::pool_count)
        .def("alloc_byte_count", &MemoryPoolHandle::alloc_byte_count)
        .def("use_count", &MemoryPoolHandle::use_count)

        .def(py::self == py::self)
        .def(py::self != py::self);

    py::enum_<mm_prof_opt>(m, "mm_prof_opt", py::module_local())
        .value("DEFAULT", mm_prof_opt::DEFAULT)
        .value("FORCE_GLOBAL", mm_prof_opt::FORCE_GLOBAL)
        .value("FORCE_NEW", mm_prof_opt::FORCE_NEW)
        .value("FORCE_THREAD_LOCAL", mm_prof_opt::FORCE_THREAD_LOCAL);

    py::class_<MMProfGlobal>(m, "MMProfGlobal", py::module_local())
        .def(py::init<>())
        .def("get_pool", &MMProfGlobal::get_pool);

    py::class_<MMProfNew>(m, "MMProfNew", py::module_local())
        .def(py::init<>())
        .def("get_pool", &MMProfNew::get_pool);

    py::class_<MMProfFixed>(m, "MMProfFixed", py::module_local())
        .def(py::init<MemoryPoolHandle>())
        .def("get_pool", &MMProfFixed::get_pool);

    py::class_<MemoryManager>(m, "MemoryManager", py::module_local())
        .def_static("SwitchProfile", py::overload_cast<MMProf *&&>(
                                         &MemoryManager::SwitchProfile));
    //.def_static("SwitchProfile", py::overload_cast<std::unique_ptr<MMProf>
    //&&>(&MemoryManager::SwitchProfile)); .def_static("GetPool",
    // py::overload_cast<>(&MemoryManager::GetPool));

    py::class_<MMProfGuard>(m, "MMProfGuard", py::module_local())
        //.def(py::init<std::unique_ptr<MMProf> &&, bool>())
        .def(py::init<MMProf *, bool>())
        .def("try_lock", py::overload_cast<>(&MMProfGuard::try_lock))
        .def("lock", py::overload_cast<>(&MMProfGuard::lock))
        .def("unlock", py::overload_cast<>(&MMProfGuard::unlock))
        .def("owns_lock", &MMProfGuard::owns_lock);
}
