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

    KeyGenerator keygen = KeyGenerator(this->_context);

    this->_public_key =
        shared_ptr<PublicKey>(new PublicKey(keygen.public_key()));
    this->_secret_key =
        shared_ptr<SecretKey>(new SecretKey(keygen.secret_key()));
    this->encryptor = shared_ptr<Encryptor>(
        new Encryptor(this->_context, *this->_public_key));
    this->decryptor = shared_ptr<Decryptor>(
        new Decryptor(this->_context, *this->_secret_key));
    this->evaluator = shared_ptr<Evaluator>(new Evaluator(this->_context));
    // TODO: can make this optional
    this->generate_relin_keys();
}

TenSEALContext::TenSEALContext(const char* filename) { this->load(filename); }

void TenSEALContext::load(const char* filename) {}

void TenSEALContext::save_public(const char* filename) {}

void TenSEALContext::save_private(const char* filename) {}

}  // namespace tenseal