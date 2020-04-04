#ifndef TENSEAL_TENSEALCONTEXT_H
#define TENSEAL_TENSEALCONTEXT_H

#include <seal/seal.h>

#include <vector>

#include "utils.h"

using namespace seal;
using namespace std;

namespace tenseal {

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

    shared_ptr<KeyGenerator> key_gen() { return this->_keygen; }
    PublicKey public_key() { return this->_keygen->public_key(); }
    SecretKey secret_key() { return this->_keygen->secret_key(); }
    RelinKeys relin_keys() { return this->_keygen->relin_keys(); }
    GaloisKeys galois_keys() { return this->_keygen->galois_keys(); }

    bool is_public() { return this->_is_public; }
    bool is_private() { return !this->_is_public; }

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

   private:
    EncryptionParameters _parms;
    shared_ptr<SEALContext> _context;
    shared_ptr<KeyGenerator> _keygen;

    /*
    Public is when we don't hold the secret_key and can't decrypt ciphertexts.
    */
    bool _is_public;

    TenSEALContext(EncryptionParameters parms);
    TenSEALContext(const char* filename);

    /*
    Load the context's attribute to restore a pre-saved TenSEALContext.
    */
    void load(const char* filename);
};

}  // namespace tenseal

#endif