#include "bfvvector.h"

#include <seal/seal.h>

#include <memory>
#include <vector>

#include "../tensealcontext.h"

using namespace seal;
using namespace std;

namespace tenseal {

BFVVector::BFVVector(shared_ptr<TenSEALContext> context, vector<int64_t> vec) {
    this->context = context;

    // Encrypts the whole vector into a single ciphertext using BFV batching
    this->ciphertext = BFVVector::encrypt(context, vec);
    this->_size = vec.size();
}

BFVVector::BFVVector(const BFVVector& vec) {
    this->context = vec.context;
    this->_size = vec._size;
    this->ciphertext = vec.ciphertext;
}

size_t BFVVector::size() { return this->_size; }

streamoff BFVVector::save_size() {
    return this->ciphertext.save_size(compr_mode_type::none);
}

vector<int64_t> BFVVector::decrypt() {
    if (this->context->decryptor == NULL) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the vector doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->context->secret_key());
}

vector<int64_t> BFVVector::decrypt(SecretKey sk) {
    Plaintext plaintext;
    auto batch_encoder = this->context->get_encoder<BatchEncoder>();
    Decryptor decryptor = Decryptor(this->context->seal_context(), sk);

    vector<int64_t> result;

    decryptor.decrypt(this->ciphertext, plaintext);
    batch_encoder->decode(plaintext, result);

    // result contains all slots of ciphertext (poly_modulus_degree)
    // we use the real vector size to delimit the resulting plaintext vector
    vector<int64_t> real_result(result.cbegin(),
                                result.cbegin() + this->size());
    return real_result;
}

BFVVector BFVVector::add(BFVVector to_add) {
    BFVVector new_vector = *this;
    new_vector.add_inplace(to_add);

    return new_vector;
}

BFVVector& BFVVector::add_inplace(BFVVector to_add) {
    // TODO: check the context parameters properly
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

BFVVector BFVVector::add_plain(vector<int64_t> to_add) {
    BFVVector new_vector = *this;
    new_vector.add_plain_inplace(to_add);

    return new_vector;
}

BFVVector& BFVVector::add_plain_inplace(vector<int64_t> to_add) {
    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    auto batch_encoder = this->context->get_encoder<BatchEncoder>();
    Plaintext plaintext;

    batch_encoder->encode(to_add, plaintext);
    this->context->evaluator->add_plain_inplace(this->ciphertext, plaintext);

    return *this;
}

BFVVector BFVVector::sub(BFVVector to_sub) {
    BFVVector new_vector = *this;
    new_vector.sub_inplace(to_sub);

    return new_vector;
}

BFVVector& BFVVector::sub_inplace(BFVVector to_sub) {
    // TODO: check the context parameters properly
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

BFVVector BFVVector::sub_plain(vector<int64_t> to_sub) {
    BFVVector new_vector = *this;
    new_vector.sub_plain_inplace(to_sub);

    return new_vector;
}

BFVVector& BFVVector::sub_plain_inplace(vector<int64_t> to_sub) {
    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    auto batch_encoder = this->context->get_encoder<BatchEncoder>();
    Plaintext plaintext;

    batch_encoder->encode(to_sub, plaintext);
    this->context->evaluator->sub_plain_inplace(this->ciphertext, plaintext);

    return *this;
}

BFVVector BFVVector::mul(BFVVector to_mul) {
    BFVVector new_vector = *this;
    new_vector.mul_inplace(to_mul);

    return new_vector;
}

BFVVector& BFVVector::mul_inplace(BFVVector to_mul) {
    // TODO: check the context parameters properly
    if (this->context != to_mul.context) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't mul vectors that have different contexts");
    }

    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't mul vectors of different sizes");
    }

    this->context->evaluator->multiply_inplace(this->ciphertext,
                                               to_mul.ciphertext);

    // TODO: make this optional
    // relineraization after ciphertext-ciphertext multiplication
    this->context->evaluator->relinearize_inplace(this->ciphertext,
                                                  this->context->relin_keys());

    return *this;
}

BFVVector BFVVector::mul_plain(vector<int64_t> to_mul) {
    BFVVector new_vector = *this;
    new_vector.mul_plain_inplace(to_mul);

    return new_vector;
}

BFVVector& BFVVector::mul_plain_inplace(vector<int64_t> to_mul) {
    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    auto batch_encoder = this->context->get_encoder<BatchEncoder>();
    Plaintext plaintext;
    // prevent transparent ciphertext by adding a non-zero value
    if (to_mul.size() + 1 <= batch_encoder->slot_count()) to_mul.push_back(1);
    batch_encoder->encode(to_mul, plaintext);

    this->context->evaluator->multiply_plain_inplace(this->ciphertext,
                                                     plaintext);

    return *this;
}

}  // namespace tenseal
