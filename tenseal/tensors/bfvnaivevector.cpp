#include "bfvnaivevector.h"

#include <seal/seal.h>

#include <memory>
#include <vector>

using namespace seal;
using namespace std;

namespace tenseal {

BFVNaiveVector::BFVNaiveVector(shared_ptr<SEALContext> context, PublicKey pk,
                               vector<int> vec) {
    this->ciphertexts.reserve(vec.size());
    this->context = context;

    // Encrypts each integer separately as a Ciphertext
    for (int i = 0; i < vec.size(); i++) {
        Ciphertext ct = encrypt(pk, vec[i]);
        this->ciphertexts.push_back(ct);
    }
}

BFVNaiveVector::BFVNaiveVector(const BFVNaiveVector& vec) {
    this->ciphertexts = vec.ciphertexts;
    this->context = vec.context;
}

size_t BFVNaiveVector::size() { return this->ciphertexts.size(); }

streamoff BFVNaiveVector::save_size() {
    streamoff sum_save_size = 0;
    for (int i = 0; i < this->ciphertexts.size(); i++)
        sum_save_size += this->ciphertexts[i].save_size(compr_mode_type::none);

    return sum_save_size;
}

BFVNaiveVector BFVNaiveVector::add(BFVNaiveVector to_add) {
    BFVNaiveVector new_vector = *this;
    new_vector.add_inplace(to_add);

    return new_vector;
}

BFVNaiveVector& BFVNaiveVector::add_inplace(BFVNaiveVector to_add) {
    if (this->context != to_add.context) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't add vectors that have different contexts");
    }

    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    for (int i = 0; i < this->size(); i++) {
        evaluator.add_inplace(this->ciphertexts[i], to_add.ciphertexts[i]);
    }

    return *this;
}

BFVNaiveVector BFVNaiveVector::add_plain(vector<int> to_add) {
    BFVNaiveVector new_vector = *this;
    new_vector.add_plain_inplace(to_add);

    return new_vector;
}

BFVNaiveVector& BFVNaiveVector::add_plain_inplace(vector<int> to_add) {
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

    return *this;
}

BFVNaiveVector BFVNaiveVector::sub(BFVNaiveVector to_sub) {
    BFVNaiveVector new_vector = *this;
    new_vector.sub_inplace(to_sub);

    return new_vector;
}

BFVNaiveVector& BFVNaiveVector::sub_inplace(BFVNaiveVector to_sub) {
    if (this->context != to_sub.context) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't sub vectors that have different contexts");
    }

    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    for (int i = 0; i < this->size(); i++) {
        evaluator.sub_inplace(this->ciphertexts[i], to_sub.ciphertexts[i]);
    }

    return *this;
}

BFVNaiveVector BFVNaiveVector::sub_plain(vector<int> to_sub) {
    BFVNaiveVector new_vector = *this;
    new_vector.sub_plain_inplace(to_sub);

    return new_vector;
}

BFVNaiveVector& BFVNaiveVector::sub_plain_inplace(vector<int> to_sub) {
    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    IntegerEncoder encoder(this->context);
    Plaintext pt;
    for (int i = 0; i < this->size(); i++) {
        pt = encoder.encode(to_sub[i]);
        evaluator.sub_plain_inplace(this->ciphertexts[i], pt);
    }

    return *this;
}

BFVNaiveVector BFVNaiveVector::mul(BFVNaiveVector to_mul) {
    BFVNaiveVector new_vector = *this;
    new_vector.mul_inplace(to_mul);

    return new_vector;
}

BFVNaiveVector& BFVNaiveVector::mul_inplace(BFVNaiveVector to_mul) {
    if (this->context != to_mul.context) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't mul vectors that have different contexts");
    }

    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't mul vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    for (int i = 0; i < this->size(); i++) {
        evaluator.multiply_inplace(this->ciphertexts[i], to_mul.ciphertexts[i]);
    }

    return *this;
}

BFVNaiveVector BFVNaiveVector::mul_plain(vector<int> to_mul) {
    BFVNaiveVector new_vector = *this;
    new_vector.mul_plain_inplace(to_mul);

    return new_vector;
}

BFVNaiveVector& BFVNaiveVector::mul_plain_inplace(vector<int> to_mul) {
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

    return *this;
}

vector<int> BFVNaiveVector::decrypt(SecretKey sk) {
    Decryptor decryptor(this->context, sk);
    Plaintext plaintext;
    IntegerEncoder encoder(this->context);

    vector<int> result;
    result.reserve(this->ciphertexts.size());
    for (int i = 0; i < this->ciphertexts.size(); i++) {
        decryptor.decrypt(this->ciphertexts[i], plaintext);
        result.push_back(encoder.decode_int64(plaintext));
    }

    return result;
}

Ciphertext BFVNaiveVector::encrypt(PublicKey pk, int pt) {
    IntegerEncoder encoder(this->context);
    Encryptor encryptor(this->context, pk);
    Ciphertext ciphertext(this->context);
    Plaintext plaintext = encoder.encode(pt);
    encryptor.encrypt(plaintext, ciphertext);

    return ciphertext;
}

}  // namespace tenseal