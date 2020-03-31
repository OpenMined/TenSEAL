#include "ckksvector.h"

#include <seal/seal.h>

#include <memory>
#include <vector>

using namespace seal;
using namespace std;

namespace tenseal {

CKKSVector::CKKSVector(shared_ptr<SEALContext> context, PublicKey pk,
                       double scale, vector<double> vec) {
    this->context = context;
    this->init_scale = scale;
    // Encrypts the whole vector into a single ciphertext using CKKS batching
    this->ciphertext = encrypt(pk, vec);
    this->_size = vec.size();
}

CKKSVector::CKKSVector(shared_ptr<SEALContext> context,
                       Ciphertext ciphertexts) {
    this->context = context;
}

size_t CKKSVector::size() { return this->_size; }

vector<double> CKKSVector::decrypt(SecretKey sk) {
    Decryptor decryptor(this->context, sk);
    Plaintext plaintext;
    CKKSEncoder encoder(this->context);

    vector<double> result;
    result.reserve(this->size());
    decryptor.decrypt(this->ciphertext, plaintext);
    encoder.decode(plaintext, result);

    // result contains all slots of ciphertext, but we may be using less
    vector<double> sub(result.cbegin(), result.cbegin() + this->size());
    return sub;
}

Ciphertext CKKSVector::encrypt(PublicKey pk, vector<double> pt) {
    CKKSEncoder encoder(this->context);
    cout << "Can encode " << encoder.slot_count() << endl;
    Encryptor encryptor(this->context, pk);
    Ciphertext ciphertext(this->context);
    Plaintext plaintext;
    encoder.encode(pt, this->init_scale, plaintext);
    encryptor.encrypt(plaintext, ciphertext);

    return ciphertext;
}

}  // namespace tenseal