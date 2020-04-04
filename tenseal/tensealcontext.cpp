#include "tensealcontext.h"

#include <seal/seal.h>

#include <vector>

#include "utils.h"

using namespace seal;
using namespace std;

namespace tenseal {

TenSEALContext::TenSEALContext(EncryptionParameters parms) {
    this->_parms = parms;
    this->_context = SEALContext::Create(parms);
    this->_keygen = shared_ptr<KeyGenerator>(new KeyGenerator(this->_context));
    this->encryptor = shared_ptr<Encryptor>(
        new Encryptor(this->_context, this->public_key()));
    this->decryptor = shared_ptr<Decryptor>(
        new Decryptor(this->_context, this->secret_key()));
    this->evaluator = shared_ptr<Evaluator>(new Evaluator(this->_context));
    this->_is_public = false;
}

TenSEALContext::TenSEALContext(const char* filename) { this->load(filename); }

void TenSEALContext::load(const char* filename) {}

void TenSEALContext::save_public(const char* filename) {}

void TenSEALContext::save_private(const char* filename) {}

}  // namespace tenseal