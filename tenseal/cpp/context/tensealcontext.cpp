#include "tenseal/cpp/context/tensealcontext.h"

#include "seal/seal.h"
#include "tenseal/cpp/utils/proto.h"
#include "tenseal/cpp/utils/scope.h"
#include "tenseal/cpp/utils/serialization.h"

namespace tenseal {

using namespace seal;
using namespace std;

TenSEALContext::TenSEALContext(EncryptionParameters parms,
                               encryption_type encryption_type,
                               optional<size_t> n_threads) {
    this->dispatcher_setup(n_threads);
    this->base_setup(parms);
    this->keys_setup(encryption_type);
}

TenSEALContext::TenSEALContext(const std::string& input,
                               optional<size_t> n_threads) {
    this->dispatcher_setup(n_threads);
    this->load(input);
}
TenSEALContext::TenSEALContext(const TenSEALContextProto& input,
                               optional<size_t> n_threads) {
    this->dispatcher_setup(n_threads);
    this->load_proto(input);
}

void TenSEALContext::dispatcher_setup(optional<size_t> n_threads) {
    this->_threads = n_threads.value_or(get_concurrency());
    if (this->_threads == 0) this->_threads = get_concurrency();

    this->_dispatcher = make_shared<sync::ThreadPool>(this->_threads);
}

void TenSEALContext::base_setup(EncryptionParameters parms) {
    this->_parms = parms;
    this->_context = make_shared<SEALContext>(this->_parms);

    this->evaluator = make_shared<Evaluator>(*this->_context);
    this->encoder_factory = make_shared<TenSEALEncoder>(this->_context);
}

void TenSEALContext::keys_setup_public_key(optional<PublicKey> public_key,
                                           optional<SecretKey> secret_key,
                                           bool generate_key) {
    if (!public_key && !secret_key && generate_key) {
        KeyGenerator keygen = KeyGenerator(*this->_context);

        PublicKey pk;
        keygen.create_public_key(pk);

        this->_public_key = make_shared<PublicKey>(pk);
        this->_secret_key = make_shared<SecretKey>(keygen.secret_key());
    }

    if (public_key) {
        this->_public_key = make_shared<PublicKey>(public_key.value());
    }

    if (secret_key)
        this->_secret_key = make_shared<SecretKey>(secret_key.value());

    if (this->_public_key)
        this->encryptor =
            make_shared<Encryptor>(*this->_context, *this->_public_key);
}

void TenSEALContext::keys_setup_symmetric(optional<SecretKey> secret_key,
                                          bool generate_secret) {
    if (secret_key)
        this->_secret_key = make_shared<SecretKey>(secret_key.value());
    else if (generate_secret) {
        KeyGenerator keygen = KeyGenerator(*this->_context);
        this->_secret_key = make_shared<SecretKey>(keygen.secret_key());
    }

    if (this->_secret_key)
        this->encryptor =
            make_shared<Encryptor>(*this->_context, *this->_secret_key);
}

void TenSEALContext::keys_setup(encryption_type enc_type,
                                optional<PublicKey> public_key,
                                optional<SecretKey> secret_key,
                                bool generate_relin_keys,
                                bool generate_galois_keys,
                                bool generate_secret) {
    this->_encryption_type = enc_type;
    switch (enc_type) {
        case encryption_type::asymmetric: {
            this->keys_setup_public_key(public_key, secret_key,
                                        generate_secret);
            break;
        }
        case encryption_type::symmetric: {
            this->keys_setup_symmetric(secret_key, generate_secret);
            break;
        }
        default:
            throw invalid_argument("invalid encryption type");
    }

    if (!this->_secret_key) return;

    if (generate_relin_keys) {
        this->generate_relin_keys(*this->_secret_key);
    }

    if (generate_galois_keys) {
        this->generate_galois_keys(*this->_secret_key);
    }
}

shared_ptr<TenSEALContext> TenSEALContext::Create(
    scheme_type scheme, size_t poly_modulus_degree, uint64_t plain_modulus,
    vector<int> coeff_mod_bit_sizes, encryption_type encryption_type,
    optional<size_t> n_threads) {
    EncryptionParameters parms;
    switch (scheme) {
        case scheme_type::bfv:
            parms = create_bfv_parameters(poly_modulus_degree, plain_modulus,
                                          coeff_mod_bit_sizes);
            break;

        case scheme_type::ckks:
            parms = create_ckks_parameters(poly_modulus_degree,
                                           coeff_mod_bit_sizes);
            break;

        default:
            throw invalid_argument("invalid scheme_type");
    }

    return shared_ptr<TenSEALContext>(
        new TenSEALContext(parms, encryption_type, n_threads));
}

shared_ptr<TenSEALContext> TenSEALContext::Create(const std::string& input,
                                                  optional<size_t> n_threads) {
    return shared_ptr<TenSEALContext>(new TenSEALContext(input, n_threads));
}

shared_ptr<TenSEALContext> TenSEALContext::Create(
    const TenSEALContextProto& input, optional<size_t> n_threads) {
    return shared_ptr<TenSEALContext>(new TenSEALContext(input, n_threads));
}

void TenSEALContext::encrypt(const Plaintext& plain,
                             Ciphertext& destination) const {
    if (this->encryptor == nullptr)
        throw invalid_argument("this context doesn't support encryption");

    switch (this->_encryption_type) {
        case encryption_type::asymmetric:
            return this->encryptor->encrypt(plain, destination);
        case encryption_type::symmetric:
            return this->encryptor->encrypt_symmetric(plain, destination);
        default:
            throw invalid_argument("invalid encryption type");
    }
}
void TenSEALContext::encrypt_zero(Ciphertext& destination) const {
    switch (this->_encryption_type) {
        case encryption_type::asymmetric:
            return this->encryptor->encrypt_zero(destination);
        case encryption_type::symmetric:
            return this->encryptor->encrypt_zero_symmetric(destination);
        default:
            throw invalid_argument("invalid encryption type");
    }
}
void TenSEALContext::encrypt_zero(parms_id_type parms_id,
                                  Ciphertext& destination) const {
    if (this->encryptor == nullptr)
        throw invalid_argument("this context doesn't support encryption");

    switch (this->_encryption_type) {
        case encryption_type::asymmetric:
            return this->encryptor->encrypt_zero(parms_id, destination);
        case encryption_type::symmetric:
            return this->encryptor->encrypt_zero_symmetric(parms_id,
                                                           destination);
        default:
            throw invalid_argument("invalid encryption type");
    }
}
void TenSEALContext::decrypt(const Ciphertext& encrypted,
                             Plaintext& destination) const {
    if (this->_secret_key == nullptr) {
        throw invalid_argument("this context doesn't support decryption");
    }
    return this->decrypt(*this->_secret_key, encrypted, destination);
}

void TenSEALContext::decrypt(const SecretKey& sk, const Ciphertext& encrypted,
                             Plaintext& destination) const {
    Decryptor decryptor = Decryptor(*this->seal_context(), sk);

    return decryptor.decrypt(encrypted, destination);
}

bool TenSEALContext::has_public_key() const {
    if (this->_encryption_type == encryption_type::symmetric)
        throw invalid_argument(
            "has_public_key is not supported for symmetric encryption");

    return this->_public_key != nullptr;
}

shared_ptr<PublicKey> TenSEALContext::public_key() const {
    if (this->_encryption_type == encryption_type::symmetric)
        throw invalid_argument(
            "public_key is not supported for symmetric encryption");

    return this->_public_key;
}
bool TenSEALContext::has_secret_key() const {
    return this->_secret_key != nullptr;
}
shared_ptr<SecretKey> TenSEALContext::secret_key() const {
    if (is_public()) {
        throw invalid_argument(
            "the current context is public, it doesn't hold a Secret key");
    }

    return this->_secret_key;
}

bool TenSEALContext::has_relin_keys() const {
    return this->_relin_keys != nullptr;
}

shared_ptr<RelinKeys> TenSEALContext::relin_keys() const {
    if (this->_relin_keys == nullptr) {
        throw invalid_argument(
            "the current context doesn't hold Relinearization keys");
    }

    return this->_relin_keys;
}

bool TenSEALContext::has_galois_key() const {
    return this->_galois_keys != nullptr;
}

shared_ptr<GaloisKeys> TenSEALContext::galois_keys() const {
    if (this->_galois_keys == nullptr) {
        throw invalid_argument(
            "the current context doesn't hold a Galois keys");
    }
    return this->_galois_keys;
}

void TenSEALContext::generate_galois_keys() {
    if (this->is_public()) {
        throw invalid_argument("you need to provide a secret_key");
    }
    this->generate_galois_keys(*this->_secret_key);
}

void TenSEALContext::generate_galois_keys(const SecretKey& secret_key) {
    KeyGenerator keygen = KeyGenerator(*this->_context, secret_key);

    GaloisKeys gk;
    keygen.create_galois_keys(gk);
    this->_galois_keys = make_shared<GaloisKeys>(gk);
}

void TenSEALContext::generate_galois_keys(const std::string& bytes) {
    this->_galois_keys = make_shared<GaloisKeys>(
        SEALDeserialize<GaloisKeys>(*this->_context, bytes));
}

void TenSEALContext::generate_relin_keys() {
    if (this->is_public()) {
        throw invalid_argument("you need to provide a secret_key");
    }
    this->generate_relin_keys(*this->_secret_key);
}

void TenSEALContext::generate_relin_keys(const SecretKey& secret_key) {
    KeyGenerator keygen = KeyGenerator(*this->_context, secret_key);

    RelinKeys rk;
    keygen.create_relin_keys(rk);

    this->_relin_keys = make_shared<RelinKeys>(rk);
}

void TenSEALContext::generate_relin_keys(const std::string& bytes) {
    this->_relin_keys = make_shared<RelinKeys>(
        SEALDeserialize<RelinKeys>(*this->_context, bytes));
}

void TenSEALContext::make_context_public(bool generate_galois_keys,
                                         bool generate_relin_keys) {
    // Check if already public
    if (this->is_public()) {
        return;
    }
    if (this->_encryption_type == encryption_type::symmetric)
        throw invalid_argument(
            "make_context_public is not supported for symmetric encryption");

    scope_guard guard([&]() {
        // destroy and set _secret_key to null
        this->_secret_key = nullptr;
    });

    // create KeyGenerator object only if needed
    if (!generate_galois_keys && !generate_relin_keys) {
        return;
    }

    // generate Galois Keys
    if (generate_galois_keys && this->_galois_keys == nullptr) {
        this->generate_galois_keys();
    }

    // generate Relinearization Keys
    if (generate_relin_keys && this->_relin_keys == nullptr) {
        this->generate_relin_keys();
    }
}

bool TenSEALContext::is_public() const { return this->_secret_key == nullptr; }
bool TenSEALContext::is_private() const { return !is_public(); }

shared_ptr<SEALContext> TenSEALContext::seal_context() const {
    return _context;
}

void TenSEALContext::global_scale(double scale) {
    encoder_factory->global_scale(scale);
}
double TenSEALContext::global_scale() const {
    return encoder_factory->global_scale();
}
double TenSEALContext::safe_global_scale() const {
    double scale = -1;
    try {
        scale = this->global_scale();
    } catch (std::exception&) {
    }

    return scale;
}

void TenSEALContext::auto_relin(bool status) {
    if (is_public()) return;

    uint8_t flag = uint8_t(status);
    // switch it off
    this->_auto_flags &= ~flag_auto_relin;
    // set it to status
    this->_auto_flags |= flag;
}

void TenSEALContext::auto_rescale(bool status) {
    uint8_t flag = uint8_t(status) << 1;
    // switch it off
    this->_auto_flags &= ~flag_auto_rescale;
    // set it to status
    this->_auto_flags |= flag;
}

void TenSEALContext::auto_mod_switch(bool status) {
    uint8_t flag = uint8_t(status) << 2;
    // switch it off
    this->_auto_flags &= ~flag_auto_mod_switch;
    // set it to status
    this->_auto_flags |= flag;
}

bool TenSEALContext::auto_relin() const {
    return this->_auto_flags & flag_auto_relin;
}
bool TenSEALContext::auto_rescale() const {
    return this->_auto_flags & flag_auto_rescale;
}
bool TenSEALContext::auto_mod_switch() const {
    return this->_auto_flags & flag_auto_mod_switch;
}

bool TenSEALContext::equals(
    const std::shared_ptr<TenSEALContext>& other) const {
    // TODO: improve checks
    if (this->safe_global_scale() != other->safe_global_scale()) return false;

    return true;
}

void TenSEALContext::load_proto_public_key(const TenSEALContextProto& buffer) {
    this->base_setup(
        SEALDeserialize<EncryptionParameters>(buffer.encryption_parameters()));
    this->_auto_flags = buffer.public_context().auto_flags();
    if (buffer.public_context().scale() >= 0) {
        this->global_scale(buffer.public_context().scale());
    }

    optional<PublicKey> public_key = {};
    if (!buffer.public_context().public_key().empty()) {
        public_key = SEALDeserialize<PublicKey>(
            *this->_context, buffer.public_context().public_key());
    }

    if (!buffer.has_private_context()) {
        this->keys_setup(encryption_type::asymmetric, public_key, {},
                         /*generate_relin_keys=*/false,
                         /*generate_galois_keys=*/false,
                         /*generate_secret_key=*/false);
        if (!buffer.public_context().galois_keys().empty()) {
            this->generate_galois_keys(buffer.public_context().galois_keys());
        }
        if (!buffer.public_context().relin_keys().empty()) {
            this->generate_relin_keys(buffer.public_context().relin_keys());
        }
        return;
    }

    optional<SecretKey> secret_key = {};
    if (!buffer.private_context().secret_key().empty()) {
        secret_key = SEALDeserialize<SecretKey>(
            *this->_context, buffer.private_context().secret_key());
    }
    this->keys_setup(encryption_type::asymmetric, public_key, secret_key,
                     buffer.private_context().relin_keys_generated(),
                     buffer.private_context().galois_keys_generated(), false);
}

void TenSEALContext::load_proto_symmetric(const TenSEALContextProto& buffer) {
    this->base_setup(
        SEALDeserialize<EncryptionParameters>(buffer.encryption_parameters()));
    this->_auto_flags = buffer.public_context().auto_flags();
    if (buffer.public_context().scale() >= 0) {
        this->global_scale(buffer.public_context().scale());
    }

    if (!buffer.private_context().secret_key().empty()) {
        auto secret_key = SEALDeserialize<SecretKey>(
            *this->_context, buffer.private_context().secret_key());
        this->keys_setup(encryption_type::symmetric, {}, secret_key,
                         buffer.private_context().relin_keys_generated(),
                         buffer.private_context().galois_keys_generated(),
                         false);
    } else {
        this->keys_setup(encryption_type::symmetric, {}, {},
                         /*generate_relin_keys=*/false,
                         /*               generate_galois_keys=*/false,
                         /*generate_secret_key=*/false);
        if (!buffer.public_context().galois_keys().empty()) {
            this->generate_galois_keys(buffer.public_context().galois_keys());
        }
        if (!buffer.public_context().relin_keys().empty()) {
            this->generate_relin_keys(buffer.public_context().relin_keys());
        }
    }
}

void TenSEALContext::load_proto(const TenSEALContextProto& buffer) {
    switch (buffer.encryption_type()) {
        case to_underlying(encryption_type::asymmetric):
            return this->load_proto_public_key(buffer);
        case to_underlying(encryption_type::symmetric):
            return this->load_proto_symmetric(buffer);
        default:
            throw invalid_argument(
                "encryption type not support for deserialize");
    }
}

TenSEALContextProto TenSEALContext::save_proto_public_key(
    bool save_public_key, bool save_secret_key, bool save_galois_keys,
    bool save_relin_keys) const {
    TenSEALContextProto buffer;
    buffer.set_encryption_type(to_underlying(this->_encryption_type));

    *buffer.mutable_encryption_parameters() =
        SEALSerialize<EncryptionParameters>(this->_parms);

    TenSEALPublicProto public_buffer;
    public_buffer.set_auto_flags(this->_auto_flags);
    public_buffer.set_scale(this->safe_global_scale());

    if (save_public_key) {
        *public_buffer.mutable_public_key() =
            SEALSerialize<PublicKey>(*this->public_key());
    }

    if (this->is_public() || !save_secret_key) {
        if (save_galois_keys && this->_galois_keys)
            *public_buffer.mutable_galois_keys() =
                SEALSerialize<GaloisKeys>(*this->_galois_keys);
        if (save_relin_keys && this->_relin_keys)
            *public_buffer.mutable_relin_keys() =
                SEALSerialize<RelinKeys>(*this->_relin_keys);
    }

    *buffer.mutable_public_context() = public_buffer;

    if (this->is_public() || !save_secret_key) {
        return buffer;
    }

    TenSEALPrivateProto private_buffer;

    *private_buffer.mutable_secret_key() =
        SEALSerialize<SecretKey>(*this->secret_key());

    if (save_galois_keys)
        private_buffer.set_galois_keys_generated(this->_galois_keys != nullptr);
    if (save_relin_keys)
        private_buffer.set_relin_keys_generated(this->_relin_keys != nullptr);

    *buffer.mutable_private_context() = private_buffer;
    return buffer;
}

TenSEALContextProto TenSEALContext::save_proto_symmetric(
    bool save_public_key, bool save_secret_key, bool save_galois_keys,
    bool save_relin_keys) const {
    TenSEALContextProto buffer;
    buffer.set_encryption_type(to_underlying(this->_encryption_type));

    *buffer.mutable_encryption_parameters() =
        SEALSerialize<EncryptionParameters>(this->_parms);

    TenSEALPublicProto public_buffer;
    public_buffer.set_auto_flags(this->_auto_flags);
    public_buffer.set_scale(this->safe_global_scale());

    if (!save_secret_key) {
        if (save_galois_keys && this->_galois_keys)
            *public_buffer.mutable_galois_keys() =
                SEALSerialize<GaloisKeys>(*this->_galois_keys);
        if (save_relin_keys && this->_relin_keys)
            *public_buffer.mutable_relin_keys() =
                SEALSerialize<RelinKeys>(*this->_relin_keys);
    }

    *buffer.mutable_public_context() = public_buffer;

    if (!save_secret_key) {
        return buffer;
    }

    TenSEALPrivateProto private_buffer;
    *private_buffer.mutable_secret_key() =
        SEALSerialize<SecretKey>(*this->secret_key());
    if (save_galois_keys)
        private_buffer.set_galois_keys_generated(this->_galois_keys != nullptr);
    if (save_relin_keys)
        private_buffer.set_relin_keys_generated(this->_relin_keys != nullptr);

    *buffer.mutable_private_context() = private_buffer;
    return buffer;
}

TenSEALContextProto TenSEALContext::save_proto(bool save_public_key,
                                               bool save_secret_key,
                                               bool save_galois_keys,
                                               bool save_relin_keys) const {
    switch (this->_encryption_type) {
        case encryption_type::asymmetric:
            return this->save_proto_public_key(save_public_key, save_secret_key,
                                               save_galois_keys,
                                               save_relin_keys);
        case encryption_type::symmetric:
            return this->save_proto_symmetric(save_public_key, save_secret_key,
                                              save_galois_keys,
                                              save_relin_keys);
        default:
            throw invalid_argument("encryption type not support for serialize");
    }
}

std::shared_ptr<TenSEALContext> TenSEALContext::copy() const {
    TenSEALContextProto buffer =
        this->save_proto(/*save_public_key=*/true, /*save_secret_key=*/true,
                         /*save_galois_keys=*/true, /*save_relin_keys=*/true);
    return shared_ptr<TenSEALContext>(
        new TenSEALContext(buffer, this->_threads));
}

void TenSEALContext::load(const std::string& input) {
    TenSEALContextProto buffer;
    if (!buffer.ParseFromArray(input.c_str(), static_cast<int>(input.size()))) {
        throw invalid_argument("failed to parse stream");
    }
    this->load_proto(buffer);
}

std::string TenSEALContext::save(bool save_public_key, bool save_secret_key,
                                 bool save_galois_keys,
                                 bool save_relin_keys) const {
    TenSEALContextProto buffer = this->save_proto(
        save_public_key, save_secret_key, save_galois_keys, save_relin_keys);
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 static_cast<int>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save proto");
    }

    return output;
}

}  // namespace tenseal
