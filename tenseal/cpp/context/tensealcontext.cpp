#include "tenseal/cpp/context/tensealcontext.h"

#include "seal/seal.h"
#include "tenseal/cpp/utils/proto.h"
#include "tenseal/cpp/utils/scope.h"
#include "tenseal/cpp/utils/serialization.h"

namespace tenseal {

using namespace seal;
using namespace std;

TenSEALContext::TenSEALContext(EncryptionParameters parms,
                               optional<size_t> n_threads) {
    this->dispatcher_setup(n_threads);
    this->base_setup(parms);
    this->keys_setup();
}

TenSEALContext::TenSEALContext(istream& stream, optional<size_t> n_threads) {
    this->dispatcher_setup(n_threads);
    this->load(stream);
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
    this->_context = SEALContext::Create(this->_parms);

    this->evaluator = make_shared<Evaluator>(this->_context);
    this->encoder_factory = make_shared<TenSEALEncoder>(this->_context);
}

void TenSEALContext::keys_setup(optional<PublicKey> public_key,
                                optional<SecretKey> secret_key,
                                bool generate_relin_keys,
                                bool generate_galois_keys) {
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

    if (!this->_secret_key) return;

    this->decryptor =
        make_shared<Decryptor>(this->_context, *this->_secret_key);

    if (generate_relin_keys) {
        this->generate_relin_keys(*this->_secret_key);
    }

    if (generate_galois_keys) {
        this->generate_galois_keys(*this->_secret_key);
    }
}

shared_ptr<TenSEALContext> TenSEALContext::Create(
    scheme_type scheme, size_t poly_modulus_degree, uint64_t plain_modulus,
    vector<int> coeff_mod_bit_sizes, optional<size_t> n_threads) {
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

    return shared_ptr<TenSEALContext>(new TenSEALContext(parms, n_threads));
}

shared_ptr<TenSEALContext> TenSEALContext::Create(istream& stream,
                                                  optional<size_t> n_threads) {
    return shared_ptr<TenSEALContext>(new TenSEALContext(stream, n_threads));
}

shared_ptr<TenSEALContext> TenSEALContext::Create(const std::string& input,
                                                  optional<size_t> n_threads) {
    return shared_ptr<TenSEALContext>(new TenSEALContext(input, n_threads));
}

shared_ptr<TenSEALContext> TenSEALContext::Create(
    const TenSEALContextProto& input, optional<size_t> n_threads) {
    return shared_ptr<TenSEALContext>(new TenSEALContext(input, n_threads));
}

bool TenSEALContext::has_public_key() const {
    return this->_public_key != nullptr;
}

shared_ptr<PublicKey> TenSEALContext::public_key() const {
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
    KeyGenerator keygen = KeyGenerator(this->_context, secret_key);

    this->_galois_keys =
        shared_ptr<GaloisKeys>(new GaloisKeys(keygen.galois_keys_local()));
}

void TenSEALContext::generate_galois_keys(const std::string& bytes) {
    this->_galois_keys = make_shared<GaloisKeys>(
        SEALDeserialize<GaloisKeys>(this->_context, bytes));
}

void TenSEALContext::generate_relin_keys() {
    if (this->is_public()) {
        throw invalid_argument("you need to provide a secret_key");
    }
    this->generate_relin_keys(*this->_secret_key);
}

void TenSEALContext::generate_relin_keys(const SecretKey& secret_key) {
    KeyGenerator keygen = KeyGenerator(this->_context, secret_key);
    this->_relin_keys =
        shared_ptr<RelinKeys>(new RelinKeys(keygen.relin_keys_local()));
}

void TenSEALContext::generate_relin_keys(const std::string& bytes) {
    this->_relin_keys = make_shared<RelinKeys>(
        SEALDeserialize<RelinKeys>(this->_context, bytes));
}

void TenSEALContext::make_context_public(bool generate_galois_keys,
                                         bool generate_relin_keys) {
    // Check if already public
    if (this->is_public()) {
        return;
    }

    scope_guard guard([&]() {
        // destroy and set _secret_key and decryptor to null
        this->_secret_key = nullptr;
        this->decryptor = nullptr;
    });

    // create KeyGenerator object only if needed
    if (!generate_galois_keys && !generate_relin_keys) {
        return;
    }

    KeyGenerator keygen = KeyGenerator(this->_context, *this->_secret_key);

    // generate Galois Keys
    if (generate_galois_keys && this->_galois_keys == nullptr) {
        this->_galois_keys =
            shared_ptr<GaloisKeys>(new GaloisKeys(keygen.galois_keys_local()));
    }

    // generate Relinearization Keys
    if (generate_relin_keys && this->_relin_keys == nullptr) {
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

bool TenSEALContext::auto_relin() {
    return this->_auto_flags & flag_auto_relin;
}
bool TenSEALContext::auto_rescale() {
    return this->_auto_flags & flag_auto_rescale;
}
bool TenSEALContext::auto_mod_switch() {
    return this->_auto_flags & flag_auto_mod_switch;
}

bool TenSEALContext::equals(const std::shared_ptr<TenSEALContext>& other) {
    // TODO: improve checks
    if (this->safe_global_scale() != other->safe_global_scale()) return false;

    return true;
}

void TenSEALContext::load_proto(const TenSEALContextProto& buffer) {
    this->base_setup(
        SEALDeserialize<EncryptionParameters>(buffer.encryption_parameters()));
    this->_auto_flags = buffer.public_context().auto_flags();
    if (buffer.public_context().scale() >= 0) {
        this->global_scale(buffer.public_context().scale());
    }

    auto public_key = SEALDeserialize<PublicKey>(
        this->_context, buffer.public_context().public_key());

    if (!buffer.has_private_context()) {
        this->keys_setup(public_key);
        if (!buffer.public_context().galois_keys().empty()) {
            this->generate_galois_keys(buffer.public_context().galois_keys());
        }
        if (!buffer.public_context().relin_keys().empty()) {
            this->generate_relin_keys(buffer.public_context().relin_keys());
        }
        return;
    }

    auto secret_key = SEALDeserialize<SecretKey>(
        this->_context, buffer.private_context().secret_key());
    this->keys_setup(public_key, secret_key,
                     buffer.private_context().relin_keys_generated(),
                     buffer.private_context().galois_keys_generated());
}

TenSEALContextProto TenSEALContext::save_proto() const {
    TenSEALContextProto buffer;
    *buffer.mutable_encryption_parameters() =
        SEALSerialize<EncryptionParameters>(this->_parms);

    TenSEALPublicProto public_buffer;
    public_buffer.set_auto_flags(this->_auto_flags);
    *public_buffer.mutable_public_key() =
        SEALSerialize<PublicKey>(*this->public_key());

    public_buffer.set_scale(this->safe_global_scale());

    if (this->is_public()) {
        if (this->_galois_keys)
            *public_buffer.mutable_galois_keys() =
                SEALSerialize<GaloisKeys>(*this->_galois_keys);
        if (this->_relin_keys)
            *public_buffer.mutable_relin_keys() =
                SEALSerialize<RelinKeys>(*this->_relin_keys);
    }

    *buffer.mutable_public_context() = public_buffer;

    if (this->is_public()) {
        return buffer;
    }

    TenSEALPrivateProto private_buffer;
    *private_buffer.mutable_secret_key() =
        SEALSerialize<SecretKey>(*this->secret_key());
    private_buffer.set_galois_keys_generated(this->_galois_keys != nullptr);
    private_buffer.set_relin_keys_generated(this->_relin_keys != nullptr);

    *buffer.mutable_private_context() = private_buffer;
    return buffer;
}

std::shared_ptr<TenSEALContext> TenSEALContext::copy() const {
    TenSEALContextProto buffer = this->save_proto();
    return shared_ptr<TenSEALContext>(
        new TenSEALContext(buffer, this->_threads));
}

void TenSEALContext::load(std::istream& stream) {
    TenSEALContextProto buffer;
    if (!buffer.ParseFromIstream(&stream)) {
        throw invalid_argument("failed to parse stream");
    }

    this->load_proto(buffer);
}

bool TenSEALContext::save(std::ostream& stream) const {
    TenSEALContextProto buffer = this->save_proto();
    return buffer.SerializeToOstream(&stream);
}

void TenSEALContext::load(const std::string& input) {
    TenSEALContextProto buffer;
    if (!buffer.ParseFromArray(input.c_str(), static_cast<int>(input.size()))) {
        throw invalid_argument("failed to parse stream");
    }
    this->load_proto(buffer);
}

std::string TenSEALContext::save() const {
    TenSEALContextProto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 static_cast<int>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save proto");
    }

    return output;
}

}  // namespace tenseal
