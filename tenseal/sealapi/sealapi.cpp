#include <pybind11/iostream.h>
#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <seal/seal.h>

using namespace seal;
using namespace std;
namespace py = pybind11;

/***
 *pybind11 issues:
 *  - rvalue arguments issues https://github.com/pybind/pybind11/pull/2046
 *  - variadic templates issues https://github.com/pybind/pybind11/issues/1469
 *  - no support for ostream/istream. BigUInt save/load
 *  - no support for std::byte. BigUInt::operator []
 ***/

PYBIND11_MODULE(_sealapi_cpp, m) {
    m.doc() = "SEAL library bindings for Python";

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
     * "seal/smallmodulus.h" {
     ***/
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
    /***
     * "seal/smallmodulus.h" {
     *******************/

    // "seal/serialization.h"
    py::enum_<compr_mode_type>(m, "COMPR_MODE_TYPE", py::module_local())
        .value("DEFLATE", compr_mode_type::deflate)
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

    // "seal/publickey.h"
    py::class_<PublicKey>(m, "PublicKey", py::module_local())
        .def(py::init<>())
        .def("data", py::overload_cast<>(&PublicKey::data))
        .def("parms_id", py::overload_cast<>(&PublicKey::parms_id));

    // "seal/secretkey.h"
    py::class_<SecretKey>(m, "SecretKey", py::module_local())
        .def(py::init<>())
        .def("data", py::overload_cast<>(&SecretKey::data))
        .def("parms_id", py::overload_cast<>(&SecretKey::parms_id));

    // "seal//kswitchkeys.h"
    py::class_<KSwitchKeys>(m, "KSwitchKeys", py::module_local());

    // "seal/relinkeys.h"
    py::class_<RelinKeys, KSwitchKeys>(m, "RelinKeys", py::module_local())
        .def(py::init<>())
        .def("size", &RelinKeys::size)
        .def("data", py::overload_cast<>(&RelinKeys::data))
        .def("data", py::overload_cast<std::size_t>(&RelinKeys::data))
        .def("parms_id", py::overload_cast<>(&RelinKeys::parms_id))
        .def_static("get_index", &RelinKeys::get_index)
        .def("has_key", &RelinKeys::has_key)
        .def("key", &RelinKeys::key);

    // "seal/galoiskeys.h"
    py::class_<GaloisKeys, KSwitchKeys>(m, "GaloisKeys", py::module_local())
        .def(py::init<>())
        .def("size", &GaloisKeys::size)
        .def("data", py::overload_cast<>(&GaloisKeys::data))
        .def("data", py::overload_cast<std::size_t>(&GaloisKeys::data))
        .def("parms_id", py::overload_cast<>(&GaloisKeys::parms_id))
        .def_static("get_index", &GaloisKeys::get_index)
        .def("has_key", &GaloisKeys::has_key)
        .def("key", &GaloisKeys::key);

    // "seal/keygenerator.h"
    py::class_<KeyGenerator>(m, "KeyGenerator", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def(py::init<std::shared_ptr<SEALContext>, const SecretKey &>())
        .def(py::init<std::shared_ptr<SEALContext>, const SecretKey &,
                      const PublicKey &>())
        .def("secret_key", &KeyGenerator::secret_key)
        .def("public_key", &KeyGenerator::public_key)
        .def("relin_keys", py::overload_cast<>(&KeyGenerator::relin_keys))
        .def("galois_keys",
             py::overload_cast<const std::vector<std::uint64_t> &>(
                 &KeyGenerator::galois_keys))
        .def("galois_keys", py::overload_cast<const std::vector<int> &>(
                                &KeyGenerator::galois_keys))
        .def("galois_keys", py::overload_cast<>(&KeyGenerator::galois_keys));

    // "seal/ciphertext.h"
    py::class_<Ciphertext>(m, "Ciphertext", py::module_local())
        .def(py::init<>())
        .def(py::init<MemoryPoolHandle>())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def(py::init<std::shared_ptr<SEALContext>, MemoryPoolHandle>())
        .def(py::init<std::shared_ptr<SEALContext>, parms_id_type>())
        .def(py::init<std::shared_ptr<SEALContext>, parms_id_type,
                      MemoryPoolHandle>())
        .def(py::init<std::shared_ptr<SEALContext>, parms_id_type,
                      std::size_t>())
        .def(py::init<std::shared_ptr<SEALContext>, parms_id_type, std::size_t,
                      MemoryPoolHandle>())
        .def("reserve",
             py::overload_cast<std::shared_ptr<SEALContext>, parms_id_type,
                               std::size_t>(&Ciphertext::reserve))
        .def("reserve",
             py::overload_cast<std::shared_ptr<SEALContext>, std::size_t>(
                 &Ciphertext::reserve))
        .def("reserve", py::overload_cast<std::size_t>(&Ciphertext::reserve))
        .def("resize",
             py::overload_cast<std::shared_ptr<SEALContext>, parms_id_type,
                               std::size_t>(&Ciphertext::resize))
        .def("resize",
             py::overload_cast<std::shared_ptr<SEALContext>, std::size_t>(
                 &Ciphertext::resize))
        .def("resize", py::overload_cast<std::size_t>(&Ciphertext::resize))
        .def("release", &Ciphertext::release)
        .def("int_array", &Ciphertext::int_array)
        .def("data", py::overload_cast<>(&Ciphertext::data))
        .def("data", py::overload_cast<std::size_t>(&Ciphertext::data))
        .def("coeff_mod_count", &Ciphertext::coeff_mod_count)
        .def("poly_modulus_degree", &Ciphertext::poly_modulus_degree)
        .def("size", &Ciphertext::size)
        .def("size_capacity", &Ciphertext::size_capacity)
        .def("is_transparent", &Ciphertext::is_transparent)
        .def("is_ntt_form", py::overload_cast<>(&Ciphertext::is_ntt_form))
        .def("parms_id", py::overload_cast<>(&Ciphertext::parms_id))
        .def("scale", py::overload_cast<>(&Ciphertext::scale))
        .def("pool", &Ciphertext::pool);

    // "seal/decryptor.h"
    py::class_<Decryptor>(m, "Decryptor", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>, const SecretKey &>())
        .def("decrypt", &Decryptor::decrypt)
        .def("invariant_noise_budget", &Decryptor::invariant_noise_budget);

    // "seal/encryptor.h"
    py::class_<Encryptor>(m, "Encryptor", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>, const PublicKey &>())
        .def(py::init<std::shared_ptr<SEALContext>, const SecretKey &>())
        .def(py::init<std::shared_ptr<SEALContext>, const PublicKey &,
                      const SecretKey &>())
        .def("set_public_key", &Encryptor::set_public_key)
        .def("set_secret_key", &Encryptor::set_secret_key)
        .def("encrypt", &Encryptor::encrypt)
        .def("encrypt_zero", py::overload_cast<Ciphertext &, MemoryPoolHandle>(
                                 &Encryptor::encrypt_zero, py::const_))
        .def("encrypt_zero",
             py::overload_cast<parms_id_type, Ciphertext &, MemoryPoolHandle>(
                 &Encryptor::encrypt_zero, py::const_))
        .def("encrypt_symmetric", &Encryptor::encrypt_symmetric)
        .def("encrypt_zero_symmetric",
             py::overload_cast<Ciphertext &, MemoryPoolHandle>(
                 &Encryptor::encrypt_zero_symmetric, py::const_))
        .def("encrypt_zero_symmetric",
             py::overload_cast<parms_id_type, Ciphertext &, MemoryPoolHandle>(
                 &Encryptor::encrypt_zero_symmetric, py::const_));

    // "seal/intarray.h"
    //
    // headers use template for ct_coeff_type and pt_coeff_type

    using IntArray64 = IntArray<std::uint64_t>;
    py::class_<IntArray64>(m, "IntArray", py::module_local())
        .def(py::init<MemoryPoolHandle>())
        .def(py::init<>())
        .def(py::init<std::size_t, MemoryPoolHandle>())
        .def(py::init<std::size_t, std::size_t, MemoryPoolHandle>())
        .def("begin", &IntArray64::begin)
        .def("cbegin", &IntArray64::cbegin)
        .def("end", &IntArray64::end)
        .def("cend", &IntArray64::cend)
        .def("at", py::overload_cast<std::size_t>(&IntArray64::at, py::const_))
        .def("at", py::overload_cast<std::size_t>(&IntArray64::at))
        .def("__getitem__", py::overload_cast<std::size_t>(
                                &IntArray64::operator[], py::const_))
        .def("empty", &IntArray64::empty)
        .def("max_size", &IntArray64::max_size)
        .def("size", &IntArray64::size)
        .def("capacity", &IntArray64::capacity)
        .def("pool", &IntArray64::pool)
        .def("release", &IntArray64::release)
        .def("clear", &IntArray64::clear)
        .def("reserve", &IntArray64::reserve)
        .def("shrink_to_fit", &IntArray64::shrink_to_fit)
        .def("resize", &IntArray64::resize);

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

    // "seal/batchencoder.h"
    py::class_<BatchEncoder>(m, "BatchEncoder", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def("encode",
             py::overload_cast<const std::vector<std::uint64_t> &, Plaintext &>(
                 &BatchEncoder::encode))
        .def("encode",
             py::overload_cast<const std::vector<std::int64_t> &, Plaintext &>(
                 &BatchEncoder::encode))
        .def("encode", py::overload_cast<Plaintext &, MemoryPoolHandle>(
                           &BatchEncoder::encode))
        .def("decode",
             py::overload_cast<const Plaintext &, std::vector<std::uint64_t> &,
                               MemoryPoolHandle>(&BatchEncoder::decode))
        .def("decode",
             py::overload_cast<const Plaintext &, std::vector<std::int64_t> &,
                               MemoryPoolHandle>(&BatchEncoder::decode))
        .def("decode", py::overload_cast<Plaintext &, MemoryPoolHandle>(
                           &BatchEncoder::decode))
        .def("slot_count", &BatchEncoder::slot_count);

    // "seal/valcheck.h"
    m.def("is_metadata_valid_for",
          py::overload_cast<const Plaintext &,
                            std::shared_ptr<const SEALContext>, bool>(
              &is_metadata_valid_for))
        .def("is_metadata_valid_for",
             py::overload_cast<const Ciphertext &,
                               std::shared_ptr<const SEALContext>, bool>(
                 &is_metadata_valid_for))
        .def("is_metadata_valid_for",
             py::overload_cast<const SecretKey &,
                               std::shared_ptr<const SEALContext>>(
                 &is_metadata_valid_for))
        .def("is_metadata_valid_for",
             py::overload_cast<const PublicKey &,
                               std::shared_ptr<const SEALContext>>(
                 &is_metadata_valid_for))
        .def("is_metadata_valid_for",
             py::overload_cast<const KSwitchKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_metadata_valid_for))
        .def("is_metadata_valid_for",
             py::overload_cast<const RelinKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_metadata_valid_for))
        .def("is_metadata_valid_for",
             py::overload_cast<const GaloisKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_metadata_valid_for))
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
             py::overload_cast<const Plaintext &,
                               std::shared_ptr<const SEALContext>>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const Ciphertext &,
                               std::shared_ptr<const SEALContext>>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const SecretKey &,
                               std::shared_ptr<const SEALContext>>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const PublicKey &,
                               std::shared_ptr<const SEALContext>>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const KSwitchKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const RelinKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_data_valid_for))
        .def("is_data_valid_for",
             py::overload_cast<const GaloisKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_data_valid_for))
        .def("is_valid_for",
             py::overload_cast<const Ciphertext &,
                               std::shared_ptr<const SEALContext>>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const SecretKey &,
                               std::shared_ptr<const SEALContext>>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const PublicKey &,
                               std::shared_ptr<const SEALContext>>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const KSwitchKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const RelinKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_valid_for))
        .def("is_valid_for",
             py::overload_cast<const GaloisKeys &,
                               std::shared_ptr<const SEALContext>>(
                 &is_valid_for));

    // "seal/ckks.h"
    py::class_<CKKSEncoder> ckksEncoder(m, "CKKSEncoder", py::module_local());
    ckksEncoder.def(py::init<std::shared_ptr<SEALContext>>())
        .def("slot_count", &CKKSEncoder::slot_count);
    // using sig = void(std::complex<double>, double, Plaintext &,
    // MemoryPoolHandle); ckksEncoder.def("encode",
    // py::overload_cast<std::complex<double>, double, Plaintext &,
    // MemoryPoolHandle>((sig*)&CKKSEncoder::encode))
    ;
    //.def("encode", py::overload_cast<const double, parms_id_type, double,
    // Plaintext &, MemoryPoolHandle>(&CKKSEncoder::encode));
    /*
        .def("encode", py::overload_cast<double, double, Plaintext &,
       MemoryPoolHandle>(&CKKSEncoder::encode)) .def("encode",
       py::overload_cast<std::complex<double>, parms_id_type, double, Plaintext
       &, MemoryPoolHandle>(&CKKSEncoder::encode)) .def("encode",
       py::overload_cast<std::int64_t, parms_id_type, Plaintext
       &>(&CKKSEncoder::encode)) .def("encode", py::overload_cast<std::int64_t,
       Plaintext &>(&CKKSEncoder::encode))
*/
    auto encoder_template = [&]<typename T>() {
        ckksEncoder
            .def("encode",
                 py::overload_cast<const std::vector<T> &, parms_id_type,
                                   double, Plaintext &, MemoryPoolHandle>(
                     &CKKSEncoder::encode))
            .def("encode",
                 py::overload_cast<const std::vector<T> &, double, Plaintext &,
                                   MemoryPoolHandle>(&CKKSEncoder::encode))
            .def("decode",
                 py::overload_cast<const Plaintext &, std::vector<T> &,
                                   MemoryPoolHandle>(&CKKSEncoder::decode));
    };

    // "seal/evaluator.h"
    py::class_<Evaluator>(m, "Evaluator", py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def("negate_inplace", &Evaluator::negate_inplace)
        .def("negate", &Evaluator::negate)
        .def("add_inplace", &Evaluator::add_inplace)
        .def("add", &Evaluator::add)
        .def("add_many", &Evaluator::add_many)
        .def("sub_inplace", &Evaluator::sub_inplace)
        .def("sub", &Evaluator::sub)
        .def("multiply_inplace", &Evaluator::multiply_inplace)
        .def("multiply", &Evaluator::multiply)
        .def("square_inplace", &Evaluator::square_inplace)
        .def("square", &Evaluator::square)
        .def("relinearize_inplace", &Evaluator::relinearize_inplace)
        .def("relinearize", &Evaluator::relinearize)
        .def("mod_switch_to_next",
             py::overload_cast<const Plaintext &, Plaintext &>(
                 &Evaluator::mod_switch_to_next))
        .def(
            "mod_switch_to_next",
            py::overload_cast<const Ciphertext &, Ciphertext &,
                              MemoryPoolHandle>(&Evaluator::mod_switch_to_next))
        .def("mod_switch_to_next_inplace",
             py::overload_cast<Ciphertext &, MemoryPoolHandle>(
                 &Evaluator::mod_switch_to_next_inplace))
        .def("mod_switch_to_next_inplace",
             py::overload_cast<Plaintext &>(
                 &Evaluator::mod_switch_to_next_inplace))
        .def("mod_switch_to_inplace",
             py::overload_cast<Ciphertext &, parms_id_type, MemoryPoolHandle>(
                 &Evaluator::mod_switch_to_inplace))
        .def("mod_switch_to_inplace",
             py::overload_cast<Plaintext &, parms_id_type>(
                 &Evaluator::mod_switch_to_inplace))
        .def("mod_switch_to",
             py::overload_cast<const Ciphertext &, parms_id_type, Ciphertext &,
                               MemoryPoolHandle>(&Evaluator::mod_switch_to))
        .def("mod_switch_to",
             py::overload_cast<const Plaintext &, parms_id_type, Plaintext &>(
                 &Evaluator::mod_switch_to))
        .def("rescale_to_next", &Evaluator::rescale_to_next)
        .def("rescale_to_next_inplace", &Evaluator::rescale_to_next_inplace)
        .def("rescale_to_inplace", &Evaluator::rescale_to_inplace)
        .def("rescale_to", &Evaluator::rescale_to)
        .def("multiply_many", &Evaluator::multiply_many)
        .def("exponentiate_inplace", &Evaluator::exponentiate_inplace)
        .def("exponentiate", &Evaluator::exponentiate)
        .def("add_plain_inplace", &Evaluator::add_plain_inplace)
        .def("add_plain", &Evaluator::add_plain)
        .def("sub_plain_inplace", &Evaluator::sub_plain_inplace)
        .def("sub_plain", &Evaluator::sub_plain)
        .def("multiply_plain_inplace", &Evaluator::multiply_plain_inplace)
        .def("multiply_plain", &Evaluator::multiply_plain)
        .def("transform_to_ntt_inplace",
             py::overload_cast<Plaintext &, parms_id_type, MemoryPoolHandle>(
                 &Evaluator::transform_to_ntt_inplace))
        .def("transform_to_ntt_inplace",
             py::overload_cast<Ciphertext &>(
                 &Evaluator::transform_to_ntt_inplace))
        .def("transform_to_ntt",
             py::overload_cast<const Plaintext &, parms_id_type, Plaintext &,
                               MemoryPoolHandle>(&Evaluator::transform_to_ntt))
        .def("transform_to_ntt",
             py::overload_cast<const Ciphertext &, Ciphertext &>(
                 &Evaluator::transform_to_ntt))
        .def("transform_from_ntt_inplace",
             py::overload_cast<Ciphertext &>(
                 &Evaluator::transform_from_ntt_inplace))
        .def("transform_from_ntt",
             py::overload_cast<const Ciphertext &, Ciphertext &>(
                 &Evaluator::transform_from_ntt))
        .def("apply_galois_inplace", &Evaluator::apply_galois_inplace)
        .def("apply_galois", &Evaluator::apply_galois)
        .def("rotate_rows", &Evaluator::rotate_rows)
        .def("rotate_columns_inplace", &Evaluator::rotate_columns_inplace)
        .def("rotate_columns", &Evaluator::rotate_columns)
        .def("rotate_vector_inplace", &Evaluator::rotate_vector_inplace)
        .def("rotate_vector", &Evaluator::rotate_vector)
        .def("complex_conjugate_inplace", &Evaluator::complex_conjugate_inplace)
        .def("complex_conjugate", &Evaluator::complex_conjugate);

    // "seal/memorymanager.h"
    py::class_<MemoryPoolHandle>(m, "MemoryPoolHandle", py::module_local())
        .def(py::init<>())
        .def(py::init<const MemoryPoolHandle &>())

        .def_static("Global", &MemoryPoolHandle::Global)
        .def_static("ThreadLocal", &MemoryPoolHandle::ThreadLocal)
        .def_static("New", &MemoryPoolHandle::New)

        .def("pool_count", &MemoryPoolHandle::pool_count)
        .def("alloc_byte_count", &MemoryPoolHandle::alloc_byte_count)
        .def("use_count", &MemoryPoolHandle::use_count)

        .def("__bool__",
             py::overload_cast<>(&MemoryPoolHandle::operator bool, py::const_))
        .def(py::self == py::self)
        .def(py::self != py::self);

    py::enum_<mm_prof_opt>(m, "MM_PROF_OPT", py::module_local())
        .value("DEFAULT", mm_prof_opt::DEFAULT)
        .value("FORCE_GLOBAL", mm_prof_opt::FORCE_GLOBAL)
        .value("FORCE_NEW", mm_prof_opt::FORCE_NEW)
        .value("FORCE_THREAD_LOCAL", mm_prof_opt::FORCE_THREAD_LOCAL);

    py::class_<MMProf>(m, "MMProf", py::module_local());

    py::class_<MMProfGlobal, MMProf>(m, "MMProfGlobal", py::module_local())
        .def(py::init<>())
        .def("get_pool", &MMProfGlobal::get_pool);

    py::class_<MMProfNew, MMProf>(m, "MMProfNew", py::module_local())
        .def(py::init<>())
        .def("get_pool", &MMProfNew::get_pool);

    py::class_<MMProfFixed, MMProf>(m, "MMProfFixed", py::module_local())
        .def(py::init<MemoryPoolHandle>())
        .def("get_pool", &MMProfFixed::get_pool);

    py::class_<MMProfThreadLocal, MMProf>(m, "MMProfThreadLocal",
                                          py::module_local())
        .def(py::init<>())
        .def("get_pool", &MMProfThreadLocal::get_pool);

    py::class_<MemoryManager>(m, "MemoryManager", py::module_local())
        .def_static("SwitchProfile", py::overload_cast<MMProf *&&>(
                                         &MemoryManager::SwitchProfile));
    // pybind11 rvalue issue for SwitchProfile overload
    // pybind11 variadic template issue for GetPool method

    py::class_<MMProfGuard>(m, "MMProfGuard", py::module_local())
        .def(py::init<MMProf *&&, bool>())
        .def("try_lock", py::overload_cast<>(&MMProfGuard::try_lock))
        .def("lock", py::overload_cast<>(&MMProfGuard::lock))
        .def("unlock", &MMProfGuard::unlock)
        .def("owns_lock", &MMProfGuard::owns_lock);
    // pybind11 rvalue issue for constructor, try_lock and lock overloads
    //
    //
}
