#include "context.h"

#include <seal/seal.h>

#include <vector>

#include "utils.h"

using namespace seal;
using namespace std;

namespace tenseal {

// class BFVContext

BFVContext::BFVContext(size_t poly_modulus_degree, uint64_t plain_modulus,
                       vector<int> coeff_mod_bit_sizes) {
    this->_parms = create_bfv_parameters(poly_modulus_degree, plain_modulus,
                                         coeff_mod_bit_sizes);
    this->_context = create_context(this->_parms);
    this->_keygen = shared_ptr<KeyGenerator>(new KeyGenerator(this->_context));
    this->encryptor = shared_ptr<Encryptor>(
        new Encryptor(this->_context, this->public_key()));
    this->decryptor = shared_ptr<Decryptor>(
        new Decryptor(this->_context, this->secret_key()));
    this->evaluator = shared_ptr<Evaluator>(new Evaluator(this->_context));
    this->_is_public = false;
}

BFVContext::BFVContext(const char* filename) { this->load(filename); }

void BFVContext::load(const char* filename) {}

void BFVContext::save_public(const char* filename) {}

void BFVContext::save_private(const char* filename) {}

// class CKKSContext

CKKSContext::CKKSContext(size_t poly_modulus_degree,
                         vector<int> coeff_mod_bit_sizes) {
    this->_parms =
        create_ckks_parameters(poly_modulus_degree, coeff_mod_bit_sizes);
    this->_context = create_context(this->_parms);
    this->_keygen = shared_ptr<KeyGenerator>(new KeyGenerator(this->_context));
    this->encryptor = shared_ptr<Encryptor>(
        new Encryptor(this->_context, this->public_key()));
    this->decryptor = shared_ptr<Decryptor>(
        new Decryptor(this->_context, this->secret_key()));
    this->evaluator = shared_ptr<Evaluator>(new Evaluator(this->_context));
    this->encoder = shared_ptr<CKKSEncoder>(new CKKSEncoder(this->_context));
    this->_is_public = false;
}

CKKSContext::CKKSContext(const char* filename) { this->load(filename); }

void CKKSContext::load(const char* filename) {}

void CKKSContext::save_public(const char* filename) {}

void CKKSContext::save_private(const char* filename) {}

}  // namespace tenseal