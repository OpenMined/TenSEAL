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

void bind_encrypt_decrypt(pybind11::module &m) {
    /*******************
     * "seal/publickey.h" {
     ***/
    py::class_<PublicKey, std::shared_ptr<PublicKey>>(m, "PublicKey",
                                                      py::module_local())
        .def(py::init<>())
        .def("data", py::overload_cast<>(&PublicKey::data, py::const_),
             py::return_value_policy::reference)
        .def("parms_id", py::overload_cast<>(&PublicKey::parms_id, py::const_))
        .def("save",
             [](const PublicKey &c, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 c.save(out);
                 out.close();
             })
        .def("load",
             [](PublicKey &c, const SEALContext &context, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 c.load(context, in);
                 in.close();
             });
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
        .def("parms_id", py::overload_cast<>(&SecretKey::parms_id, py::const_))
        .def("save",
             [](const SecretKey &s, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 s.save(out);
                 out.close();
             })
        .def("load",
             [](SecretKey &s, const SEALContext &context, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 s.load(context, in);
                 in.close();
             });
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
        .def("save",
             [](const RelinKeys &obj, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 obj.save(out);
                 out.close();
             })
        .def("load",
             [](RelinKeys &obj, const SEALContext &context, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 obj.load(context, in);
                 in.close();
             })
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
        .def("save",
             [](const GaloisKeys &obj, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 obj.save(out);
                 out.close();
             })
        .def(
            "load",
            [](GaloisKeys &obj, const SEALContext &context, std::string &path) {
                std::ifstream in(path, std::ifstream::binary);
                obj.load(context, in);
                in.close();
            })
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
        .def(py::init<const SEALContext &>())
        .def(py::init<const SEALContext &, const SecretKey &>())
        .def("secret_key", &KeyGenerator::secret_key)
        .def("create_public_key",
             py::overload_cast<>(&KeyGenerator::create_public_key, py::const_))
        .def("create_public_key",
             py::overload_cast<PublicKey &>(&KeyGenerator::create_public_key,
                                            py::const_))
        .def("create_relin_keys",
             py::overload_cast<>(&KeyGenerator::create_relin_keys))
        .def("create_relin_keys",
             py::overload_cast<RelinKeys &>(&KeyGenerator::create_relin_keys))
        .def(
            "create_galois_keys",
            py::overload_cast<const std::vector<std::uint32_t> &, GaloisKeys &>(
                &KeyGenerator::create_galois_keys))
        .def("create_galois_keys",
             py::overload_cast<const std::vector<std::uint32_t> &>(
                 &KeyGenerator::create_galois_keys))
        .def("create_galois_keys",
             py::overload_cast<const std::vector<int> &, GaloisKeys &>(
                 &KeyGenerator::create_galois_keys))
        .def("create_galois_keys", py::overload_cast<const std::vector<int> &>(
                                       &KeyGenerator::create_galois_keys))
        .def("create_galois_keys",
             py::overload_cast<GaloisKeys &>(&KeyGenerator::create_galois_keys))
        .def("create_galois_keys",
             py::overload_cast<>(&KeyGenerator::create_galois_keys));
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
        .def("dyn_array", &Plaintext::dyn_array,
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
        .def_property("scale",
                      py::overload_cast<>(&Plaintext::scale, py::const_),
                      [](Plaintext &obj, double scale) { obj.scale() = scale; })
        .def("save",
             [](const Plaintext &p, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 p.save(out);
                 out.close();
             })
        .def("load",
             [](Plaintext &p, const SEALContext &context, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 p.load(context, in);
                 in.close();
             })

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
        .def(py::init<const SEALContext &>())
        .def(py::init<const SEALContext &, parms_id_type>())
        .def(py::init<const SEALContext &, parms_id_type, std::size_t>())
        .def("reserve",
             py::overload_cast<const SEALContext &, parms_id_type, std::size_t>(
                 &Ciphertext::reserve))
        .def("reserve", py::overload_cast<const SEALContext &, std::size_t>(
                            &Ciphertext::reserve))
        .def("reserve", py::overload_cast<std::size_t>(&Ciphertext::reserve))
        .def("resize",
             py::overload_cast<const SEALContext &, parms_id_type, std::size_t>(
                 &Ciphertext::resize))
        .def("resize", py::overload_cast<const SEALContext &, std::size_t>(
                           &Ciphertext::resize))
        .def("resize", py::overload_cast<std::size_t>(&Ciphertext::resize))
        .def("release", &Ciphertext::release)
        .def("dyn_array", &Ciphertext::dyn_array,
             py::return_value_policy::reference)
        .def("data", py::overload_cast<>(&Ciphertext::data, py::const_),
             py::return_value_policy::reference)
        .def("data",
             py::overload_cast<std::size_t>(&Ciphertext::data, py::const_),
             py::return_value_policy::reference)
        .def("coeff_modulus_size", &Ciphertext::coeff_modulus_size)
        .def("poly_modulus_degree", &Ciphertext::poly_modulus_degree)
        .def("size", &Ciphertext::size)
        .def("size_capacity", &Ciphertext::size_capacity)
        .def("is_transparent", &Ciphertext::is_transparent)
        .def("is_ntt_form", py::overload_cast<>(&Ciphertext::is_ntt_form))
        .def("parms_id", py::overload_cast<>(&Ciphertext::parms_id))
        .def_property(
            "scale", py::overload_cast<>(&Ciphertext::scale, py::const_),
            [](Ciphertext &obj, double scale) { obj.scale() = scale; })
        .def("save",
             [](const Ciphertext &c, std::string &path) {
                 std::ofstream out(path, std::ofstream::binary);
                 c.save(out);
                 out.close();
             })
        .def("load",
             [](Ciphertext &c, const SEALContext &ctx, std::string &path) {
                 std::ifstream in(path, std::ifstream::binary);
                 c.load(ctx, in);
                 in.close();
             })
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
        .def(py::init<const SEALContext &, const SecretKey &>())
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
        .def(py::init<const SEALContext &, const PublicKey &>())
        .def(py::init<const SEALContext &, const SecretKey &>())
        .def(py::init<const SEALContext &, const PublicKey &,
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
        .def("encrypt_symmetric",
             [](Encryptor &e, const Plaintext &plain) {
                 return e.encrypt_symmetric(plain);
             })
        .def("encrypt_zero_symmetric",
             [](Encryptor &e, Ciphertext &dst) {
                 return e.encrypt_zero_symmetric(dst);
             })
        .def("encrypt_zero_symmetric",
             [](Encryptor &e) { return e.encrypt_zero_symmetric(); })
        .def("encrypt_zero_symmetric",
             [](Encryptor &e, parms_id_type parms_id, Ciphertext &dst) {
                 return e.encrypt_zero_symmetric(parms_id, dst);
             })
        .def("encrypt_zero_symmetric",
             [](Encryptor &e, parms_id_type parms_id) {
                 return e.encrypt_zero_symmetric(parms_id);
             });
    /***
     * } "seal/encryptor.h"
     *******************/
}
