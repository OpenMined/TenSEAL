#include <pybind11/complex.h>
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
        .def("data", &SmallModulus::data, py::return_value_policy::reference)
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
     * } "seal/smallmodulus.h"
     *******************/

    /*******************
     * "seal/serialization.h" {
     ***/
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
    /***
     * } "seal/serialization.h"
     *******************/

    /*******************
     * "seal/randomgen.h" {
     ***/
    m.def("random_uint64", &random_uint64);

    py::class_<UniformRandomGenerator, std::shared_ptr<UniformRandomGenerator>>(
        m, "UniformRandomGenerator", py::module_local());
    py::class_<BlakePRNG, UniformRandomGenerator, std::shared_ptr<BlakePRNG>>(
        m, "BlakePRNG", py::module_local())
        .def(py::init<random_seed_type>())
        .def("seed", &BlakePRNG::seed)
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
    /***
     * } "seal/randomgen.h"
     *******************/

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
    /***
     * } "seal/encryptionparams.h"
     *******************/

    /*******************
     * "seal/modulus.h" {
     ***/
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
    /***
     * } "seal/modulus.h"
     *******************/

    /*******************
     * "seal/context.h" {
     ***/
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
    /***
     * } "seal/context.h"
     *******************/

    /*******************
     * "seal/publickey.h" {
     ***/
    py::class_<PublicKey, std::shared_ptr<PublicKey>>(m, "PublicKey",
                                                      py::module_local())
        .def(py::init<>())
        .def("data", py::overload_cast<>(&PublicKey::data, py::const_),
             py::return_value_policy::reference)
        .def("parms_id", py::overload_cast<>(&PublicKey::parms_id, py::const_));
    /***
     * } "seal/publickey.h"
     *******************/

    /*******************
     * "seal/secretkey.h" {
     ***/
    py::class_<SecretKey, std::shared_ptr<SecretKey>>(m, "SecretKey",
                                                      py::module_local())
        .def(py::init<>())
        .def("data", py::overload_cast<>(&SecretKey::data, py::const_),
             py::return_value_policy::reference)
        .def("parms_id", py::overload_cast<>(&SecretKey::parms_id, py::const_));
    /***
     * } "seal/secretkey.h"
     *******************/

    /*******************
     * "seal//kswitchkeys.h" {
     ***/
    py::class_<KSwitchKeys>(m, "KSwitchKeys", py::module_local());
    /***
     * } "seal//kswitchkeys.h"
     *******************/

    /*******************
     * "seal/relinkeys.h" {
     ***/
    py::class_<RelinKeys, KSwitchKeys>(m, "RelinKeys", py::module_local())
        .def(py::init<>())
        // KSwitchKeys
        .def("size", &RelinKeys::size)
        .def("data", py::overload_cast<>(&RelinKeys::data, py::const_),
             py::return_value_policy::reference)
        .def("data",
             py::overload_cast<std::size_t>(&RelinKeys::data, py::const_),
             py::return_value_policy::reference)
        .def("parms_id", py::overload_cast<>(&RelinKeys::parms_id),
             py::return_value_policy::reference)
        // RelinKeys
        .def_static("get_index", &RelinKeys::get_index)
        .def("has_key", &RelinKeys::has_key)
        .def("key", &RelinKeys::key, py::return_value_policy::reference);
    /***
     * } "seal/relinkeys.h"
     *******************/

    /*******************
     * "seal/galoiskeys.h" {
     ***/
    py::class_<GaloisKeys, KSwitchKeys>(m, "GaloisKeys", py::module_local())
        .def(py::init<>())
        // KSwitchKeys
        .def("size", &GaloisKeys::size)
        .def("data", py::overload_cast<>(&GaloisKeys::data, py::const_),
             py::return_value_policy::reference)
        .def("data",
             py::overload_cast<std::size_t>(&GaloisKeys::data, py::const_),
             py::return_value_policy::reference)
        .def("parms_id", py::overload_cast<>(&GaloisKeys::parms_id),
             py::return_value_policy::reference)
        // GaloisKeys
        .def_static("get_index", &GaloisKeys::get_index)
        .def("has_key", &GaloisKeys::has_key)
        .def("key", &GaloisKeys::key);
    /***
     * } "seal/galoiskeys.h"
     *******************/

    /*******************
     * "seal/keygenerator.h" {
     ***/
    py::class_<KeyGenerator, std::shared_ptr<KeyGenerator>>(m, "KeyGenerator",
                                                            py::module_local())
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
    /***
     * } "seal/keygenerator.h"
     *******************/

    /*******************
     * "seal/plaintext.h" {
     ***/
    py::class_<Plaintext>(m, "Plaintext", py::module_local())
        .def(py::init<>())
        .def(py::init<std::size_t>())
        .def(py::init<std::size_t, std::size_t>())
        .def(py::init<const std::string &>())
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
        .def("int_array", &Plaintext::int_array,
             py::return_value_policy::reference)
        .def("data",
             py::overload_cast<std::size_t>(&Plaintext::data, py::const_),
             py::return_value_policy::reference)
        .def("capacity", &Plaintext::capacity)
        .def("coeff_count", &Plaintext::coeff_count)
        .def("significant_coeff_count", &Plaintext::significant_coeff_count)
        .def("nonzero_coeff_count", &Plaintext::nonzero_coeff_count)
        .def("to_string", &Plaintext::to_string)
        .def("is_ntt_form", &Plaintext::is_ntt_form)
        .def("parms_id", py::overload_cast<>(&Plaintext::parms_id, py::const_))
        .def("scale", py::overload_cast<>(&Plaintext::scale, py::const_))

        .def("__getitem__",
             py::overload_cast<std::size_t>(&Plaintext::operator[], py::const_))
        .def(py::self == py::self)
        .def(py::self != py::self);
    /***
     * } "seal/plaintext.h"
     *******************/

    /*******************
     * "seal/ciphertext.h" {
     ***/
    py::class_<Ciphertext>(m, "Ciphertext", py::module_local())
        .def(py::init<>())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def(py::init<std::shared_ptr<SEALContext>, parms_id_type>())
        .def(py::init<std::shared_ptr<SEALContext>, parms_id_type,
                      std::size_t>())
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
        .def("int_array", &Ciphertext::int_array,
             py::return_value_policy::reference)
        .def("data", py::overload_cast<>(&Ciphertext::data, py::const_),
             py::return_value_policy::reference)
        .def("data",
             py::overload_cast<std::size_t>(&Ciphertext::data, py::const_),
             py::return_value_policy::reference)
        .def("coeff_mod_count", &Ciphertext::coeff_mod_count)
        .def("poly_modulus_degree", &Ciphertext::poly_modulus_degree)
        .def("size", &Ciphertext::size)
        .def("size_capacity", &Ciphertext::size_capacity)
        .def("is_transparent", &Ciphertext::is_transparent)
        .def("is_ntt_form", py::overload_cast<>(&Ciphertext::is_ntt_form))
        .def("parms_id", py::overload_cast<>(&Ciphertext::parms_id))
        .def("scale", py::overload_cast<>(&Ciphertext::scale))
        .def("__getitem__", py::overload_cast<std::size_t>(
                                &Ciphertext::operator[], py::const_));
    /***
     * } "seal/ciphertext.h"
     *******************/

    /*******************
     * "seal/decryptor.h" {
     ***/
    py::class_<Decryptor, std::shared_ptr<Decryptor>>(m, "Decryptor",
                                                      py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>, const SecretKey &>())
        .def("decrypt", &Decryptor::decrypt)
        .def("invariant_noise_budget", &Decryptor::invariant_noise_budget);
    /***
     * } "seal/decryptor.h"
     *******************/

    /*******************
     * "seal/encryptor.h" {
     ***/
    py::class_<Encryptor, std::shared_ptr<Encryptor>>(m, "Encryptor",
                                                      py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>, const PublicKey &>())
        .def(py::init<std::shared_ptr<SEALContext>, const SecretKey &>())
        .def(py::init<std::shared_ptr<SEALContext>, const PublicKey &,
                      const SecretKey &>())
        .def("set_public_key", &Encryptor::set_public_key)
        .def("set_secret_key", &Encryptor::set_secret_key)
        .def("encrypt",
             [](Encryptor &e, const Plaintext &plain, Ciphertext &destination) {
                 return e.encrypt(plain, destination);
             })
        .def("encrypt_zero",
             [](Encryptor &e, Ciphertext &dst) { return e.encrypt_zero(dst); })
        .def("encrypt_zero",
             [](Encryptor &e, parms_id_type parms_id, Ciphertext &dst) {
                 return e.encrypt_zero(parms_id, dst);
             })
        .def("encrypt_symmetric",
             [](Encryptor &e, const Plaintext &plain, Ciphertext &dst) {
                 return e.encrypt_symmetric(plain, dst);
             })
        .def("encrypt_zero_symmetric",
             [](Encryptor &e, Ciphertext &dst) {
                 return e.encrypt_zero_symmetric(dst);
             })
        .def("encrypt_zero_symmetric",
             [](Encryptor &e, parms_id_type parms_id, Ciphertext &dst) {
                 return e.encrypt_zero_symmetric(parms_id, dst);
             });
    /***
     * } "seal/encryptor.h"
     *******************/

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
        .def("resize", &IntArray64::resize);
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
     * "seal/valcheck.h" {
     ***/
    m.def("is_metadata_valid_for",
          [](const Plaintext &in, std::shared_ptr<const SEALContext> ctx) {
              return is_metadata_valid_for(in, ctx);
          })
        .def("is_metadata_valid_for",
             [](const Ciphertext &in, std::shared_ptr<const SEALContext> ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const SecretKey &in, std::shared_ptr<const SEALContext> ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const PublicKey &in, std::shared_ptr<const SEALContext> ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const KSwitchKeys &in, std::shared_ptr<const SEALContext> ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const RelinKeys &in, std::shared_ptr<const SEALContext> ctx) {
                 return is_metadata_valid_for(in, ctx);
             })
        .def("is_metadata_valid_for",
             [](const GaloisKeys &in, std::shared_ptr<const SEALContext> ctx) {
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
             py::overload_cast<const Plaintext &,
                               std::shared_ptr<const SEALContext>>(
                 &is_valid_for))
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
    /***
     * } "seal/valcheck.h"
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
        .def("decode",
             [](CKKSEncoder &e, const Plaintext &plain) {
                 std::vector<double> destination;
                 e.decode(plain, destination);
                 return destination;
             })
        .def("decode",
             [](CKKSEncoder &e, const Plaintext &plain) {
                 std::vector<double> destination;
                 e.decode(plain, destination);
                 return destination;
             })

        ;
    /***
     * } "seal/ckks.h"
     *******************/

    /*******************
     * "seal/evaluator.h" {
     ***/
    py::class_<Evaluator, std::shared_ptr<Evaluator>>(m, "Evaluator",
                                                      py::module_local())
        .def(py::init<std::shared_ptr<SEALContext>>())
        .def("add_inplace", &Evaluator::add_inplace)
        .def("sub_inplace", &Evaluator::sub_inplace)
        .def("multiply_inplace",
             [](Evaluator &e, Ciphertext &l, const Ciphertext &r) {
                 return e.multiply_inplace(l, r);
             })
        .def("negate_inplace", &Evaluator::negate_inplace)
        .def("square_inplace",
             [](Evaluator &e, Ciphertext &l) { return e.square_inplace(l); })
        .def("negate", &Evaluator::negate)
        .def("square", [](Evaluator &e, const Ciphertext &src,
                          Ciphertext &dst) { e.square(src, dst); })
        .def("add", &Evaluator::add)
        .def("sub", &Evaluator::sub)
        .def("multiply",
             [](Evaluator &e, const Ciphertext &e1, const Ciphertext &e2,
                Ciphertext &dst) { return e.multiply(e1, e2, dst); })

        // TODO tests
        .def("add_many", &Evaluator::add_many)
        .def("relinearize_inplace", &Evaluator::relinearize_inplace)
        .def("relinearize", &Evaluator::relinearize)
        .def("mod_switch_to_next",
             py::overload_cast<const Plaintext &, Plaintext &>(
                 &Evaluator::mod_switch_to_next))
        .def("mod_switch_to_next",
             [](Evaluator &e, const Ciphertext &enc, Ciphertext &dst) {
                 return e.mod_switch_to_next(enc, dst);
             })
        .def("mod_switch_to_next_inplace",
             [](Evaluator &e, Ciphertext &dst) {
                 return e.mod_switch_to_next_inplace(dst);
             })
        .def("mod_switch_to_next_inplace",
             py::overload_cast<Plaintext &>(
                 &Evaluator::mod_switch_to_next_inplace))
        .def("mod_switch_to_inplace",
             [](Evaluator &e, Ciphertext &dst, parms_id_type parms_id) {
                 return e.mod_switch_to_inplace(dst, parms_id);
             })
        .def("mod_switch_to_inplace",
             py::overload_cast<Plaintext &, parms_id_type>(
                 &Evaluator::mod_switch_to_inplace))
        .def(
            "mod_switch_to",
            [](Evaluator &e, const Ciphertext &enc, parms_id_type parms_id,
               Ciphertext &dst) { return e.mod_switch_to(enc, parms_id, dst); })
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
             [](Evaluator &e, Plaintext &in, parms_id_type parms_id) {
                 e.transform_to_ntt_inplace(in, parms_id);
             })
        .def("transform_to_ntt_inplace",
             py::overload_cast<Ciphertext &>(
                 &Evaluator::transform_to_ntt_inplace))
        .def("transform_to_ntt",
             [](Evaluator &e, const Plaintext &in, parms_id_type parms_id,
                Plaintext &dst) { e.transform_to_ntt(in, parms_id, dst); })
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
    /***
     * } "seal/evaluator.h"
     *******************/
}
