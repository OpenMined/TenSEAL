#ifndef TENSEAL_CONTEXT_H
#define TENSEAL_CONTEXT_H

#include <seal/seal.h>

#include <vector>

using namespace seal;
using namespace std;
// TODO: add docs
namespace tenseal {
class TenSEALContext {
   public:
    shared_ptr<KeyGenerator> key_gen() { return this->_keygen; }
    PublicKey public_key() { return this->_keygen->public_key(); }
    SecretKey secret_key() { return this->_keygen->secret_key(); }
    RelinKeys relin_keys() { return this->_keygen->relin_keys(); }
    GaloisKeys galois_keys() { return this->_keygen->galois_keys(); }

    bool is_public() { return this->_is_public; }
    bool is_private() { return !this->_is_public; }

   protected:
    EncryptionParameters _parms;
    shared_ptr<SEALContext> _context;
    shared_ptr<KeyGenerator> _keygen;
    shared_ptr<Encryptor> encryptor;
    shared_ptr<Decryptor> decryptor;
    shared_ptr<Evaluator> evaluator;
    // TODO: can we put a parent class here?
    // Encoder* encoder
    bool _is_public;

    virtual void load(const char* filename) = 0;
    virtual void save_public(const char* filename) = 0;
    virtual void save_private(const char* filename) = 0;
};

class BFVContext : public TenSEALContext {
   public:
    static shared_ptr<BFVContext> Create(
        size_t poly_modulus_degree, uint64_t plain_modulus,
        vector<int> coeff_mod_bit_sizes = vector<int>()) {
        return shared_ptr<BFVContext>(new BFVContext(
            poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes));
    }

    static shared_ptr<BFVContext> Create(const char* filename) {
        return shared_ptr<BFVContext>(new BFVContext(filename));
    }

   private:
    BFVContext(size_t poly_modulus_degree, uint64_t plain_modulus,
               vector<int> coeff_mod_bit_sizes = vector<int>());
    BFVContext(const char* filename);

    void load(const char* filename);
    void save_public(const char* filename);
    void save_private(const char* filename);
};

class CKKSContext : public TenSEALContext {
   public:
    static shared_ptr<CKKSContext> Create(size_t poly_modulus_degree,
                                          vector<int> coeff_mod_bit_sizes) {
        return shared_ptr<CKKSContext>(
            new CKKSContext(poly_modulus_degree, coeff_mod_bit_sizes));
    }

    static shared_ptr<CKKSContext> Create(const char* filename) {
        return shared_ptr<CKKSContext>(new CKKSContext(filename));
    }

   private:
    shared_ptr<CKKSEncoder> encoder;

    CKKSContext(size_t poly_modulus_degree, vector<int> coeff_mod_bit_sizes);
    CKKSContext(const char* filename);

    void load(const char* filename);
    void save_public(const char* filename);
    void save_private(const char* filename);
};

}  // namespace tenseal

#endif