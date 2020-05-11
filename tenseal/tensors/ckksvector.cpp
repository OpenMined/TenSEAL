#include "ckksvector.h"

#include <seal/seal.h>

#include <memory>
#include <vector>

#include "../tensealcontext.h"

using namespace seal;
using namespace std;

namespace tenseal {

CKKSVector::CKKSVector(shared_ptr<TenSEALContext> context, double scale,
                       vector<double> vec) {
    this->context = context;
    this->init_scale = scale;
    // Encrypts the whole vector into a single ciphertext using CKKS batching
    this->ciphertext = CKKSVector::encrypt(context, scale, vec);
    this->_size = vec.size();
}

CKKSVector::CKKSVector(const CKKSVector& vec) {
    this->context = vec.context;
    this->init_scale = vec.init_scale;
    this->_size = vec._size;
    this->ciphertext = vec.ciphertext;
}

size_t CKKSVector::size() { return this->_size; }

vector<double> CKKSVector::decrypt() {
    if (this->context->decryptor == NULL) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the vector doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->context->secret_key());
}

vector<double> CKKSVector::decrypt(SecretKey sk) {
    Plaintext plaintext;
    auto encoder = this->context->get_encoder<CKKSEncoder>();
    Decryptor decryptor = Decryptor(this->context->seal_context(), sk);

    vector<double> result;
    result.reserve(this->size());

    decryptor.decrypt(this->ciphertext, plaintext);
    encoder->decode(plaintext, result);

    // result contains all slots of ciphertext (n/2), but we may be using less
    // we use the size to delimit the resulting plaintext vector
    vector<double> sub(result.cbegin(), result.cbegin() + this->size());
    return sub;
}

streamoff CKKSVector::save_size() {
    return this->ciphertext.save_size(compr_mode_type::none);
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

    this->context->evaluator->add_inplace(this->ciphertext, to_add.ciphertext);

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

    auto encoder = this->context->get_encoder<CKKSEncoder>();
    Plaintext plaintext;
    encoder->encode(to_add, this->init_scale, plaintext);
    this->context->evaluator->add_plain_inplace(this->ciphertext, plaintext);

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

    this->context->evaluator->sub_inplace(this->ciphertext, to_sub.ciphertext);

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

    auto encoder = this->context->get_encoder<CKKSEncoder>();
    Plaintext plaintext;
    encoder->encode(to_sub, this->init_scale, plaintext);
    this->context->evaluator->sub_plain_inplace(this->ciphertext, plaintext);

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

    this->context->evaluator->multiply_inplace(this->ciphertext,
                                               to_mul.ciphertext);

    // TODO: can make this optional
    // relineraize after ciphertext-ciphertext multiplication
    this->context->evaluator->relinearize_inplace(this->ciphertext,
                                                  this->context->relin_keys());

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

    auto encoder = this->context->get_encoder<CKKSEncoder>();
    Plaintext plaintext;
    // prevent transparent ciphertext by adding a non-zero value
    if (to_mul.size() + 1 <= encoder->slot_count()) to_mul.push_back(1);
    encoder->encode(to_mul, this->init_scale, plaintext);
    this->context->evaluator->multiply_plain_inplace(this->ciphertext,
                                                     plaintext);

    return *this;
}

}  // namespace tenseal
