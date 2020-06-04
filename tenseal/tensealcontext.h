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
                                             vector<int> coeff_mod_bit_sizes);
    static shared_ptr<TenSEALContext> Create(const char* filename);

    /*
    Returns a pointer to the public key
    */
    shared_ptr<PublicKey> public_key();
    shared_ptr<SecretKey> secret_key();
    shared_ptr<RelinKeys> relin_keys();
    shared_ptr<GaloisKeys> galois_keys();

    /*
    Generate Galois keys using the secret key
    */
    void generate_galois_keys();
    void generate_galois_keys(SecretKey secret_key);

    /*
    Generate Relinearization keys using the secret key
    */
    void generate_relin_keys();
    void generate_relin_keys(SecretKey secret_key);

    /*
    Generate Galois and Relinearization keys if needed, then destroy the
    _secret_key and set it to nullptr
    */
    void make_context_public(bool generate_galois_keys,
                             bool generate_relin_keys);

    bool is_public();
    bool is_private();

    /*
    Save the attributes needed to restore the context later, public is for not
    saving the secret_key.
    */
    void save_public(const char* filename);
    void save_private(const char* filename);

    /*
    Returns the wrapped SEALContext object.
    */
    shared_ptr<SEALContext> seal_context();

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
    void global_scale(double scale);
    // ciphertext scale getter(CKKS)
    double global_scale();

    /*
    Switch on/off automatic relinearization, rescaling, and mod switching.
    */
    // TODO: take into account possible parellel computation using this
    void auto_relin(bool status);
    void auto_rescale(bool status);
    void auto_mod_switch(bool status);

    bool auto_relin();
    bool auto_rescale();
    bool auto_mod_switch();

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
