#include "tenseal/tensealcontext.h"

#include "seal/seal.h"
#include "tenseal/serialization.h"

namespace tenseal {

using namespace seal;
using namespace std;

TenSEALContext::TenSEALContext(EncryptionParameters parms) {
    this->base_setup(parms);
    this->keys_setup();
}

void TenSEALContext::base_setup(EncryptionParameters parms) {
    this->_parms = parms;
    this->_context = SEALContext::Create(this->_parms);

    this->evaluator = make_shared<Evaluator>(this->_context);
    this->encoder_factory = make_shared<TenSEALEncoder>(this->_context);

    this->_auto_flags = 0;
}

void TenSEALContext::keys_setup(optional<PublicKey> public_key,
                                optional<SecretKey> secret_key) {
    if (!public_key && !secret_key) {
        KeyGenerator keygen = KeyGenerator(this->_context);

        this->_public_key = make_shared<PublicKey>(keygen.public_key());
        this->_secret_key = make_shared<SecretKey>(keygen.secret_key());
    }

    if (public_key)
        this->_public_key = make_shared<PublicKey>(public_key.value());

    if (secret_key)
        this->_secret_key = make_shared<SecretKey>(secret_key.value());

    this->encryptor =
        make_shared<Encryptor>(this->_context, *this->_public_key);

    if (this->_secret_key) {
        this->decryptor =
            make_shared<Decryptor>(this->_context, *this->_secret_key);

        this->generate_relin_keys();
    }
}

shared_ptr<TenSEALContext> TenSEALContext::Create(
    scheme_type scheme, size_t poly_modulus_degree, uint64_t plain_modulus,
    vector<int> coeff_mod_bit_sizes) {
    EncryptionParameters parms;
    switch (scheme) {
        case scheme_type::BFV:
            parms = create_bfv_parameters(poly_modulus_degree, plain_modulus,
                                          coeff_mod_bit_sizes);
            break;

        case scheme_type::CKKS:
            parms = create_ckks_parameters(poly_modulus_degree,
                                           coeff_mod_bit_sizes);
            break;

        default:
            throw invalid_argument("invalid scheme_type");
    }

    return shared_ptr<TenSEALContext>(new TenSEALContext(parms));
}

shared_ptr<PublicKey> TenSEALContext::public_key() { return this->_public_key; }
shared_ptr<SecretKey> TenSEALContext::secret_key() {
    if (is_public()) {
        throw invalid_argument(
            "the current context is public, it doesn't hold a Secret key");
    }

    return this->_secret_key;
}

shared_ptr<RelinKeys> TenSEALContext::relin_keys() {
    if (this->_relin_keys == nullptr) {
        throw invalid_argument(
            "the current context doesn't hold Relinearization keys");
    }

    return this->_relin_keys;
}

shared_ptr<GaloisKeys> TenSEALContext::galois_keys() {
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

void TenSEALContext::generate_galois_keys(SecretKey secret_key) {
    KeyGenerator keygen = KeyGenerator(this->_context, secret_key);

    this->_galois_keys =
        shared_ptr<GaloisKeys>(new GaloisKeys(keygen.galois_keys_local()));
}

void TenSEALContext::generate_relin_keys() {
    if (this->is_public()) {
        throw invalid_argument("you need to provide a secret_key");
    }
    this->generate_relin_keys(*this->_secret_key);
}

void TenSEALContext::generate_relin_keys(SecretKey secret_key) {
    KeyGenerator keygen = KeyGenerator(this->_context, secret_key);
    this->_relin_keys =
        shared_ptr<RelinKeys>(new RelinKeys(keygen.relin_keys_local()));
}

void TenSEALContext::make_context_public(bool generate_galois_keys,
                                         bool generate_relin_keys) {
    // Check if already public
    if (this->is_public()) {
        return;
    }

    // destroy and set _secret_key and decryptor to null
    this->_secret_key = nullptr;
    this->decryptor = nullptr;

    this->_galois_keys = nullptr;
    this->_relin_keys = nullptr;

    // create KeyGenerator object only if needed
    if (!generate_galois_keys && !generate_relin_keys) {
        return;
    }

    KeyGenerator keygen = KeyGenerator(this->_context, *this->_secret_key);

    // generate Galois Keys
    if (generate_galois_keys) {
        this->_galois_keys =
            shared_ptr<GaloisKeys>(new GaloisKeys(keygen.galois_keys_local()));
    }

    // generate Relinearization Keys
    if (generate_relin_keys) {
        this->_relin_keys =
            shared_ptr<RelinKeys>(new RelinKeys(keygen.relin_keys_local()));
    }
}

bool TenSEALContext::is_public() const { return this->_secret_key == nullptr; }
bool TenSEALContext::is_private() const { return !is_public(); }

shared_ptr<SEALContext> TenSEALContext::seal_context() { return _context; }

void TenSEALContext::global_scale(double scale) {
    encoder_factory->global_scale(scale);
}
double TenSEALContext::global_scale() {
    return encoder_factory->global_scale();
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

bool TenSEALContext::auto_relin() {
    return this->_auto_flags & flag_auto_relin;
}
bool TenSEALContext::auto_rescale() {
    return this->_auto_flags & flag_auto_rescale;
}
bool TenSEALContext::auto_mod_switch() {
    return this->_auto_flags & flag_auto_mod_switch;
}

inline void TenSEALContext::load(std::istream &stream) {
    TenSEALContextProto buffer;
    if (!buffer.ParseFromIstream(&stream)) {
        throw invalid_argument("failed to parse stream");
    }

    this->base_setup(
        SEALDeserialize<EncryptionParameters>(buffer.encryption_parameters()));
    this->_auto_flags = buffer.auto_flags();

    auto public_key =
        SEALDeserialize<PublicKey>(this->_context, buffer.public_key());
    if (!buffer.has_private_context()) {
        this->keys_setup(public_key);
        return;
    }

    auto secret_key = SEALDeserialize<SecretKey>(
        this->_context, buffer.private_context().secret_key());
    this->keys_setup(public_key, secret_key);
}

inline bool TenSEALContext::save(std::ostream &stream) const {
    TenSEALContextProto buffer;
    *buffer.mutable_encryption_parameters() =
        SEALSerialize<EncryptionParameters>(this->_parms);
    buffer.set_auto_flags(this->_auto_flags);
    *buffer.mutable_public_key() = SEALSerialize<PublicKey>(*this->_public_key);

    if (this->is_public()) {
        return buffer.SerializeToOstream(&stream);
    }

    TenSEALPrivateProto private_buffer;
    *private_buffer.mutable_secret_key() =
        SEALSerialize<SecretKey>(*this->_secret_key);

    *buffer.mutable_private_context() = private_buffer;
    return buffer.SerializeToOstream(&stream);
}

}  // namespace tenseal
