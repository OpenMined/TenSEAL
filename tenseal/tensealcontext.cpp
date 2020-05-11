#include "tensealcontext.h"

#include <seal/seal.h>

#include "utils.h"

namespace tenseal {

using namespace seal;
using namespace std;

TenSEALContext::TenSEALContext(EncryptionParameters parms) {
    this->_parms = parms;
    this->_context = SEALContext::Create(parms);

    KeyGenerator keygen = KeyGenerator(this->_context);

    this->_public_key = make_shared<PublicKey>(keygen.public_key());
    this->_secret_key = make_shared<SecretKey>(keygen.secret_key());
    this->encryptor =
        make_shared<Encryptor>(this->_context, *this->_public_key);
    this->decryptor =
        make_shared<Decryptor>(this->_context, *this->_secret_key);
    this->evaluator = make_shared<Evaluator>(this->_context);
    this->encoder_factory = make_shared<TenSEALEncoder>(this->_context);
    // TODO: can make this optional
    this->generate_relin_keys();
}

TenSEALContext::TenSEALContext(const char* filename) { this->load(filename); }

void TenSEALContext::load(const char* filename) {}

void TenSEALContext::save_public(const char* filename) {}

void TenSEALContext::save_private(const char* filename) {}

}  // namespace tenseal
