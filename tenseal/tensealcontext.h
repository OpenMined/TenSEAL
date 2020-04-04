#ifndef TENSEAL_TENSEALCONTEXT_H
#define TENSEAL_TENSEALCONTEXT_H

#include <seal/seal.h>

#include <vector>

#include "utils.h"

using namespace seal;
using namespace std;
// TODO: add docs
namespace tenseal {

class TenSEALContext {
   public:
    shared_ptr<Encryptor> encryptor;
    shared_ptr<Decryptor> decryptor;
    shared_ptr<Evaluator> evaluator;

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

    void save_public(const char* filename);
    void save_private(const char* filename);

    shared_ptr<SEALContext> seal_context() { return _context; }

   private:
    EncryptionParameters _parms;
    shared_ptr<SEALContext> _context;
    shared_ptr<KeyGenerator> _keygen;

    bool _is_public;

    TenSEALContext(EncryptionParameters parms);
    TenSEALContext(const char* filename);

    void load(const char* filename);
};

}  // namespace tenseal

#endif