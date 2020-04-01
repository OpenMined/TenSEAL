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

CKKSVector::CKKSVector(const CKKSVector& vec) {
    this->context = vec.context;
    this->init_scale = vec.init_scale;
    this->_size = vec._size;
    this->ciphertext = vec.ciphertext;
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

    // result contains all slots of ciphertext (n/2), but we may be using less
    // we use the size to delimit the resulting plaintext vector
    vector<double> sub(result.cbegin(), result.cbegin() + this->size());
    return sub;
}

Ciphertext CKKSVector::encrypt(PublicKey pk, vector<double> pt) {
    CKKSEncoder encoder(this->context);

    if (pt.size() > encoder.slot_count())
        // number of slots available is poly_modulus_degree / 2
        throw invalid_argument(
            "can't encrypt vectors of this size, please use a larger "
            "polynomial modulus degree.");

    Encryptor encryptor(this->context, pk);
    Ciphertext ciphertext(this->context);
    Plaintext plaintext;
    encoder.encode(pt, this->init_scale, plaintext);
    encryptor.encrypt(plaintext, ciphertext);

    return ciphertext;
}

CKKSVector CKKSVector::add(CKKSVector to_add) {
    CKKSVector new_vector = *this;
    new_vector.add_inplace(to_add);

    return new_vector;
}

CKKSVector& CKKSVector::add_inplace(CKKSVector to_add) {
    if (this->context != to_add.context) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't add vectors that have different contexts");
    }

    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    evaluator.add_inplace(this->ciphertext, to_add.ciphertext);

    return *this;
}

CKKSVector CKKSVector::add_plain(vector<double> to_add) {
    CKKSVector new_vector = *this;
    new_vector.add_plain_inplace(to_add);

    return new_vector;
}

CKKSVector& CKKSVector::add_plain_inplace(vector<double> to_add) {
    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    CKKSEncoder encoder(this->context);
    Plaintext plaintext;
    encoder.encode(to_add, this->init_scale, plaintext);
    evaluator.add_plain_inplace(this->ciphertext, plaintext);

    return *this;
}

CKKSVector CKKSVector::sub(CKKSVector to_sub) {
    CKKSVector new_vector = *this;
    new_vector.sub_inplace(to_sub);

    return new_vector;
}

CKKSVector& CKKSVector::sub_inplace(CKKSVector to_sub) {
    if (this->context != to_sub.context) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't sub vectors that have different contexts");
    }

    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    evaluator.sub_inplace(this->ciphertext, to_sub.ciphertext);

    return *this;
}

CKKSVector CKKSVector::sub_plain(vector<double> to_sub) {
    CKKSVector new_vector = *this;
    new_vector.sub_plain_inplace(to_sub);

    return new_vector;
}

CKKSVector& CKKSVector::sub_plain_inplace(vector<double> to_sub) {
    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    CKKSEncoder encoder(this->context);
    Plaintext plaintext;
    encoder.encode(to_sub, this->init_scale, plaintext);
    evaluator.sub_plain_inplace(this->ciphertext, plaintext);

    return *this;
}

CKKSVector CKKSVector::mul(CKKSVector to_mul) {
    CKKSVector new_vector = *this;
    new_vector.mul_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::mul_inplace(CKKSVector to_mul) {
    if (this->context != to_mul.context) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't multiply vectors that have different contexts");
    }

    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    evaluator.multiply_inplace(this->ciphertext, to_mul.ciphertext);

    return *this;
}

CKKSVector CKKSVector::mul_plain(vector<double> to_mul) {
    CKKSVector new_vector = *this;
    new_vector.mul_plain_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::mul_plain_inplace(vector<double> to_mul) {
    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    Evaluator evaluator(this->context);
    CKKSEncoder encoder(this->context);
    Plaintext plaintext;
    encoder.encode(to_mul, this->init_scale, plaintext);
    evaluator.multiply_plain_inplace(this->ciphertext, plaintext);

    return *this;
}

}  // namespace tenseal