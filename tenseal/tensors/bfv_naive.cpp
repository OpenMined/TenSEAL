#include "bfv_naive.h"

#include <seal/seal.h>

#include <memory>
#include <vector>

using namespace seal;
using namespace std;

namespace tenseal {

BFVNaive::BFVNaive(shared_ptr<SEALContext> context, PublicKey pk,
                   vector<int> vec) {
    this->ciphertexts.reserve(vec.size());
    this->context = context;

    for (int i; i < vec.size(); i++) {
        Ciphertext ct = encrypt(pk, vec[i]);
        this->ciphertexts.push_back(ct);
    }
}

BFVNaive::BFVNaive(shared_ptr<SEALContext> context,
                   vector<Ciphertext> ciphertexts) {
    this->ciphertexts = ciphertexts;
    this->context = context;
}

size_t BFVNaive::size() { return this->ciphertexts.size(); }

BFVNaive BFVNaive::add(BFVNaive to_add) {
    BFVNaive new_vector(this->context, this->ciphertexts);
    new_vector.add_inplace(to_add);
    
    return new_vector;
}

void BFVNaive::add_inplace(BFVNaive to_add) {
    if (this->context != to_add.context) {
        throw invalid_argument("can't add vectors that have different contexts");
    }

    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    for (int i = 0; i < this->size(); i++) {
        evaluator.add_inplace(this->ciphertexts[i], to_add.ciphertexts[i]);
    }
}

BFVNaive BFVNaive::add_plain(vector<int> to_add) {
    BFVNaive new_vector(this->context, this->ciphertexts);
    new_vector.add_plain_inplace(to_add);
    
    return new_vector;
}

void BFVNaive::add_plain_inplace(vector<int> to_add) {
    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    IntegerEncoder encoder(this->context);
    Plaintext pt;
    for (int i = 0; i < this->size(); i++) {
        pt = encoder.encode(to_add[i]);
        evaluator.add_plain_inplace(this->ciphertexts[i], pt);
    }
}

BFVNaive BFVNaive::mul(BFVNaive to_mul) {
    BFVNaive new_vector(this->context, this->ciphertexts);
    new_vector.mul_inplace(to_mul);
    
    return new_vector;
}

void BFVNaive::mul_inplace(BFVNaive to_mul) {
    if (this->context != to_mul.context) {
        throw invalid_argument("can't mul vectors that have different contexts");
    }

    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't mul vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    for (int i = 0; i < this->size(); i++) {
        evaluator.multiply_inplace(this->ciphertexts[i], to_mul.ciphertexts[i]);
    }
}

BFVNaive BFVNaive::mul_plain(vector<int> to_mul) {
    BFVNaive new_vector(this->context, this->ciphertexts);
    new_vector.mul_plain_inplace(to_mul);
    
    return new_vector;
}

void BFVNaive::mul_plain_inplace(vector<int> to_mul) {
    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    IntegerEncoder encoder(this->context);
    Plaintext pt;
    for (int i = 0; i < this->size(); i++) {
        pt = encoder.encode(to_mul[i]);
        evaluator.multiply_plain_inplace(this->ciphertexts[i], pt);
    }
}

vector<int> BFVNaive::decrypt(SecretKey sk) {
    Decryptor decryptor(this->context, sk);
    Plaintext plaintext;
    IntegerEncoder encoder(this->context);

    vector<int> result;
    result.reserve(this->ciphertexts.size());
    for (int i; i < this->ciphertexts.size(); i++) {
        decryptor.decrypt(this->ciphertexts[i], plaintext);
        result.push_back(encoder.decode_int64(plaintext));
    }

    return result;
}

Ciphertext BFVNaive::encrypt(PublicKey pk, int pt) {
    IntegerEncoder encoder(this->context);
    Encryptor encryptor(this->context, pk);
    Ciphertext ciphertext(this->context);
    Plaintext plaintext = encoder.encode(pt);
    encryptor.encrypt(plaintext, ciphertext);

    return ciphertext;
}

}  // namespace tenseal