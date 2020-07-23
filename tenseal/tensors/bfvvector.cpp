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

BFVVector::BFVVector(shared_ptr<TenSEALContext> ctx, vector<int64_t> vec) {
    this->link_tenseal_context(ctx);
    // Encrypts the whole vector into a single ciphertext using BFV batching
    this->ciphertext = BFVVector::encrypt(context, vec);
    this->_size = vec.size();
}

BFVVector::BFVVector(const BFVVector& vec) {
    this->link_tenseal_context(vec.context);
    this->_size = vec._size;
    this->ciphertext = vec.ciphertext;
}

BFVVector::BFVVector(shared_ptr<TenSEALContext> ctx, const string& vec) {
    this->link_tenseal_context(ctx);
    this->load(vec);
}

BFVVector::BFVVector(shared_ptr<TenSEALContext> ctx,
                     const BFVVectorProto& vec) {
    this->link_tenseal_context(ctx);
    this->load_proto(vec);
}

BFVVector::BFVVector(const TenSEALContextProto& ctx,
                     const BFVVectorProto& vec) {
    this->load_context_proto(ctx);
    this->load_proto(vec);
}

size_t BFVVector::size() { return this->_size; }
size_t BFVVector::ciphertext_size() { return this->ciphertext.size(); }

vector<int64_t> BFVVector::decrypt() {
    if (this->tenseal_context()->decryptor == nullptr) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the vector doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->tenseal_context()->secret_key());
}

vector<int64_t> BFVVector::decrypt(const shared_ptr<SecretKey>& sk) {
    Plaintext plaintext;
    Decryptor decryptor =
        Decryptor(this->tenseal_context()->seal_context(), *sk);

    vector<int64_t> result;

    decryptor.decrypt(this->ciphertext, plaintext);
    this->tenseal_context()->decode<BatchEncoder>(plaintext, result);

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
    if (!this->tenseal_context()->equals(to_add.context)) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't add vectors that have different contexts");
    }

    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    this->tenseal_context()->evaluator->add_inplace(this->ciphertext,
                                                    to_add.ciphertext);

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

    this->tenseal_context()->encode<BatchEncoder>(to_add, plaintext);
    this->tenseal_context()->evaluator->add_plain_inplace(this->ciphertext,
                                                          plaintext);

    return *this;
}

BFVVector BFVVector::sub(BFVVector to_sub) {
    BFVVector new_vector = *this;
    new_vector.sub_inplace(to_sub);

    return new_vector;
}

BFVVector& BFVVector::sub_inplace(BFVVector to_sub) {
    if (!this->tenseal_context()->equals(to_sub.context)) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't sub vectors that have different contexts");
    }

    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    this->tenseal_context()->evaluator->sub_inplace(this->ciphertext,
                                                    to_sub.ciphertext);

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

    this->tenseal_context()->encode<BatchEncoder>(to_sub, plaintext);
    this->tenseal_context()->evaluator->sub_plain_inplace(this->ciphertext,
                                                          plaintext);

    return *this;
}

BFVVector BFVVector::mul(BFVVector to_mul) {
    BFVVector new_vector = *this;
    new_vector.mul_inplace(to_mul);

    return new_vector;
}

BFVVector& BFVVector::mul_inplace(BFVVector to_mul) {
    if (!this->tenseal_context()->equals(to_mul.context)) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't mul vectors that have different contexts");
    }

    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't mul vectors of different sizes");
    }

    this->tenseal_context()->evaluator->multiply_inplace(this->ciphertext,
                                                         to_mul.ciphertext);

    if (this->tenseal_context()->auto_relin()) {
        // relineraization after ciphertext-ciphertext multiplication
        this->tenseal_context()->evaluator->relinearize_inplace(
            this->ciphertext, *this->tenseal_context()->relin_keys());
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
    this->tenseal_context()->encode<BatchEncoder>(to_mul, plaintext);

    try {
        this->tenseal_context()->evaluator->multiply_plain_inplace(
            this->ciphertext, plaintext);
    } catch (const std::logic_error& e) {  // result ciphertext is transparent
        // replace by encryption of zero
        this->tenseal_context()->encryptor->encrypt_zero(this->ciphertext);
    }

    return *this;
}

void BFVVector::load_proto(const BFVVectorProto& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->_size = vec.size();
    this->ciphertext = SEALDeserialize<Ciphertext>(
        this->tenseal_context()->seal_context(), vec.ciphertext());
}

void BFVVector::load_context_proto(const TenSEALContextProto& ctx) {
    this->link_tenseal_context(TenSEALContext::Create(ctx));
}

BFVVectorProto BFVVector::save_proto() const {
    BFVVectorProto buffer;

    *buffer.mutable_ciphertext() = SEALSerialize<Ciphertext>(this->ciphertext);
    buffer.set_size(this->_size);

    return buffer;
}

void BFVVector::load(const std::string& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    BFVVectorProto buffer;
    if (!buffer.ParseFromArray(vec.c_str(), vec.size())) {
        throw invalid_argument("failed to parse BFV stream");
    }
    this->load_proto(buffer);
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

BFVVector BFVVector::deepcopy() const {
    TenSEALContextProto ctx = this->tenseal_context()->save_proto();
    BFVVectorProto vec = this->save_proto();
    return BFVVector(ctx, vec);
}
}  // namespace tenseal
