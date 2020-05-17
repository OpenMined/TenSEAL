#ifndef TENSEAL_TENSEALCONTEXT_H
#define TENSEAL_TENSEALCONTEXT_H

#include <seal/seal.h>

#include "tenseal/tensealencoder.h"
#include "tenseal/utils/context.h"

namespace tenseal {

using namespace seal;
using namespace std;

/*
A store for keeping all the keys and parameters required to run an encrypted
computation, it wraps around SEALContext and keeps additional parameters and
objects that are needed during encryption, evaluation and decryption of tensors.
This should be the main object a user is required to create to use encrypted
tenors.
*/
class TenSEALContext {
   public:
    /*
    These are the objects needed for encryption, decryption and evaluation of
    tensors respectively. Keeping them in a single objects reduces memory and
    time for doing operations on encrypted tensors since we only need to
    instantiate them once.
    */
    shared_ptr<Encryptor> encryptor;
    shared_ptr<Decryptor> decryptor;
    shared_ptr<Evaluator> evaluator;

    /*
    The way to instantiate TenSEALContext is through the Create function, it
    makes sure to create an object and only share a pointer to it.
    */
    static shared_ptr<TenSEALContext> Create(scheme_type scheme,
                                             size_t poly_modulus_degree,
                                             uint64_t plain_modulus,
                                             vector<int> coeff_mod_bit_sizes) {
        EncryptionParameters parms;
        switch (scheme) {
            case scheme_type::BFV:
                parms = create_bfv_parameters(
                    poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes);
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

    static shared_ptr<TenSEALContext> Create(const char* filename) {
        return shared_ptr<TenSEALContext>(new TenSEALContext(filename));
    }

    PublicKey public_key() { return *this->_public_key; }
    SecretKey secret_key() {
        if (this->_secret_key == nullptr) {
            throw invalid_argument(
                "the current context is public, it doesn't hold a Secret key");
        }

        return *this->_secret_key;
    }

    RelinKeys relin_keys() {
        if (this->_relin_keys == nullptr) {
            throw invalid_argument(
                "the current context doesn't hold a Relinearization keys");
        }

        return *this->_relin_keys;
    }

    GaloisKeys galois_keys() {
        if (this->_galois_keys == nullptr) {
            throw invalid_argument(
                "the current context doesn't hold a Galois keys");
        }

        return *this->_galois_keys;
    }

    /*
    Generate Galois keys using the secret key
    */
    void generate_galois_keys() {
        if (this->is_public()) {
            throw invalid_argument("you need to provide a secret_key");
        } else {
            this->generate_galois_keys(*this->_secret_key);
        }
    }

    void generate_galois_keys(SecretKey secret_key) {
        KeyGenerator keygen = KeyGenerator(this->_context, secret_key);

        this->_galois_keys =
            shared_ptr<GaloisKeys>(new GaloisKeys(keygen.galois_keys_local()));
    }

    /*
    Generate Relinearization keys using the secret key
    */
    void generate_relin_keys() {
        if (this->is_public()) {
            throw invalid_argument("you need to provide a secret_key");
        } else {
            this->generate_relin_keys(*this->_secret_key);
        }
    }

    void generate_relin_keys(SecretKey secret_key) {
        KeyGenerator keygen = KeyGenerator(this->_context, secret_key);
        this->_relin_keys =
            shared_ptr<RelinKeys>(new RelinKeys(keygen.relin_keys_local()));
    }

    /*
    Generate Galois and Relinearization keys if needed, then destroy the
    _secret_key and set it to nullptr
    */
    void make_context_public(bool generate_galois_keys,
                             bool generate_relin_keys) {
        // create KeyGenerator object only if needed
        if (generate_galois_keys || generate_relin_keys) {
            KeyGenerator keygen =
                KeyGenerator(this->_context, *this->_secret_key);

            // generate Galois Keys
            if (generate_galois_keys) {
                this->_galois_keys = shared_ptr<GaloisKeys>(
                    new GaloisKeys(keygen.galois_keys_local()));
            }

            // generate Relinearization Keys
            if (generate_relin_keys) {
                this->_relin_keys = shared_ptr<RelinKeys>(
                    new RelinKeys(keygen.relin_keys_local()));
            }
        }

        // destory and set _secret_key and decryptor to null
        this->_secret_key = nullptr;
        this->decryptor = nullptr;
    }

    bool is_public() { return this->_secret_key == nullptr; }
    bool is_private() { return this->_secret_key != nullptr; }

    /*
    Save the attributes needed to restore the context later, public is for not
    saving the secret_key.
    */
    void save_public(const char* filename);
    void save_private(const char* filename);

    /*
    Returns the wrapped SEALContext object.
    */
    shared_ptr<SEALContext> seal_context() { return _context; }

    /*
    Template encoding function for the encoders.
    */
    template <typename T, typename... Args>
    void encode(Args&&... args) {
        encoder_factory->encode<T>(std::forward<Args>(args)...);
    }

    /*
    Template decoder function for the encoders.
    */
    template <class T, class R>
    void decode(const Plaintext& pt, R& result) {
        encoder_factory->decode<T>(pt, result);
    }

    /*
    Template slot_count function for the encoders.
    */
    template <class T>
    size_t slot_count() {
        return encoder_factory->slot_count<T>();
    }

    // ciphertext scale setter(CKKS)
    void global_scale(double scale) { encoder_factory->global_scale(scale); }
    // ciphertext scale getter(CKKS)
    double global_scale() { return encoder_factory->global_scale(); }

    /*
    Switch on/off automatic relinearization, rescaling, and mod switching.
    */
    // TODO: take into account possible parellel computation using this
    void auto_relin(bool status) {
        uint8_t flag = uint8_t(status);
        // switch it off
        this->_auto_flags &= ~flag_auto_relin;
        // set it to status
        this->_auto_flags |= flag;
    }

    void auto_rescale(bool status) {
        uint8_t flag = uint8_t(status) << 1;
        // switch it off
        this->_auto_flags &= ~flag_auto_rescale;
        // set it to status
        this->_auto_flags |= flag;
    }

    void auto_mod_switch(bool status) {
        uint8_t flag = uint8_t(status) << 2;
        // switch it off
        this->_auto_flags &= ~flag_auto_mod_switch;
        // set it to status
        this->_auto_flags |= flag;
    }

    bool auto_relin() { return this->_auto_flags & flag_auto_relin; }
    bool auto_rescale() { return this->_auto_flags & flag_auto_rescale; }
    bool auto_mod_switch() { return this->_auto_flags & flag_auto_mod_switch; }

   private:
    EncryptionParameters _parms;
    shared_ptr<SEALContext> _context;
    shared_ptr<PublicKey> _public_key;
    shared_ptr<SecretKey> _secret_key;
    shared_ptr<RelinKeys> _relin_keys;
    shared_ptr<GaloisKeys> _galois_keys;
    shared_ptr<TenSEALEncoder> encoder_factory;

    /*
    Switches for automatic relinearization, rescaling, and modulus switching
    */
    enum {
        flag_auto_relin = 1 << 0,
        flag_auto_rescale = 1 << 1,
        flag_auto_mod_switch = 1 << 2,
    };
    uint8_t _auto_flags =
        flag_auto_relin | flag_auto_rescale | flag_auto_mod_switch;

    TenSEALContext(EncryptionParameters parms);
    TenSEALContext(const char* filename);

    /*
    Load the context's attribute to restore a pre-saved TenSEALContext.
    */
    void load(const char* filename);
};

}  // namespace tenseal
#endif
