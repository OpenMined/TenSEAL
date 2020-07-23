#include "tenseal/tensors/bfvvector.h"

#include <seal/seal.h>

#include <memory>
#include <vector>

#include "tenseal/tensealcontext.h"
#include "tenseal/utils/proto.h"
#include "tenseal/utils/serialization.h"

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

BFVVector::BFVVector(const string& ctx, const string& vec) {
    this->load_context(ctx);
    this->load(vec);
}

BFVVector::BFVVector(const TenSEALContextProto& ctx,
                     const BFVVectorProto& vec) {
    this->load_context_proto(ctx);
    this->load_proto(vec);
}

size_t BFVVector::size() { return this->_size; }
size_t BFVVector::ciphertext_size() { return this->ciphertext.size(); }

vector<int64_t> BFVVector::decrypt() {
    if (this->context->decryptor == NULL) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the vector doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->context->secret_key());
}

vector<int64_t> BFVVector::decrypt(const shared_ptr<SecretKey>& sk) {
    Plaintext plaintext;
    Decryptor decryptor = Decryptor(this->context->seal_context(), *sk);

    vector<int64_t> result;

    decryptor.decrypt(this->ciphertext, plaintext);
    this->context->decode<BatchEncoder>(plaintext, result);

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
    if (!this->context->equals(to_add.context)) {
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

BFVVector BFVVector::add_plain(const vector<int64_t>& to_add) {
    BFVVector new_vector = *this;
    new_vector.add_plain_inplace(to_add);

    return new_vector;
}

BFVVector& BFVVector::add_plain_inplace(const vector<int64_t>& to_add) {
    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    Plaintext plaintext;

    this->context->encode<BatchEncoder>(to_add, plaintext);
    this->context->evaluator->add_plain_inplace(this->ciphertext, plaintext);

    return *this;
}

BFVVector BFVVector::sub(BFVVector to_sub) {
    BFVVector new_vector = *this;
    new_vector.sub_inplace(to_sub);

    return new_vector;
}

BFVVector& BFVVector::sub_inplace(BFVVector to_sub) {
    if (!this->context->equals(to_sub.context)) {
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

BFVVector BFVVector::sub_plain(const vector<int64_t>& to_sub) {
    BFVVector new_vector = *this;
    new_vector.sub_plain_inplace(to_sub);

    return new_vector;
}

BFVVector& BFVVector::sub_plain_inplace(const vector<int64_t>& to_sub) {
    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    Plaintext plaintext;

    this->context->encode<BatchEncoder>(to_sub, plaintext);
    this->context->evaluator->sub_plain_inplace(this->ciphertext, plaintext);

    return *this;
}

BFVVector BFVVector::mul(BFVVector to_mul) {
    BFVVector new_vector = *this;
    new_vector.mul_inplace(to_mul);

    return new_vector;
}

BFVVector& BFVVector::mul_inplace(BFVVector to_mul) {
    if (!this->context->equals(to_mul.context)) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't mul vectors that have different contexts");
    }

    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't mul vectors of different sizes");
    }

    this->context->evaluator->multiply_inplace(this->ciphertext,
                                               to_mul.ciphertext);

    if (this->context->auto_relin()) {
        // relineraization after ciphertext-ciphertext multiplication
        this->context->evaluator->relinearize_inplace(
            this->ciphertext, *this->context->relin_keys());
    }
    return *this;
}

BFVVector BFVVector::mul_plain(const vector<int64_t>& to_mul) {
    BFVVector new_vector = *this;
    new_vector.mul_plain_inplace(to_mul);

    return new_vector;
}

BFVVector& BFVVector::mul_plain_inplace(const vector<int64_t>& to_mul) {
    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    Plaintext plaintext;
    this->context->encode<BatchEncoder>(to_mul, plaintext);

    try {
        this->context->evaluator->multiply_plain_inplace(this->ciphertext,
                                                         plaintext);
    } catch (const std::logic_error& e) {  // result ciphertext is transparent
        // replace by encryption of zero
        this->context->encryptor->encrypt_zero(this->ciphertext);
    }

    return *this;
}

void BFVVector::load_proto(const BFVVectorProto& vec) {
    if (this->context == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->_size = vec.size();
    this->ciphertext = SEALDeserialize<Ciphertext>(
        this->context->seal_context(), vec.ciphertext());
}

void BFVVector::load_context_proto(const TenSEALContextProto& ctx) {
    this->context = TenSEALContext::Create(ctx);
}

BFVVectorProto BFVVector::save_proto() const {
    BFVVectorProto buffer;

    *buffer.mutable_ciphertext() = SEALSerialize<Ciphertext>(this->ciphertext);
    buffer.set_size(this->_size);

    return buffer;
}

TenSEALContextProto BFVVector::save_context_proto() const {
    return this->context->save_proto();
}

void BFVVector::load(const std::string& vec) {
    if (this->context == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    BFVVectorProto buffer;
    if (!buffer.ParseFromArray(vec.c_str(), vec.size())) {
        throw invalid_argument("failed to parse BFV stream");
    }
    this->load_proto(buffer);
}

void BFVVector::load_context(const std::string& ctx) {
    this->context = TenSEALContext::Create(ctx);
}

std::string BFVVector::save() const {
    auto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 proto_bytes_size(buffer))) {
        throw invalid_argument("failed to save proto");
    }

    return output;
}

std::string BFVVector::save_context() const { return this->context->save(); }

BFVVector BFVVector::deepcopy() const {
    TenSEALContextProto ctx = this->save_context_proto();
    BFVVectorProto vec = this->save_proto();
    return BFVVector(ctx, vec);
}
}  // namespace tenseal
