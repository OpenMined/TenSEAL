#include "tenseal/tensors/ckksvector.h"

#include <seal/seal.h>

#include <memory>
#include <vector>

#include "tenseal/tensealcontext.h"
#include "tenseal/utils/matrix_ops.h"
#include "tenseal/utils/utils.h"

using namespace seal;
using namespace std;

namespace tenseal {

CKKSVector::CKKSVector(shared_ptr<TenSEALContext> context, vector<double> vec,
                       std::optional<double> scale) {
    this->context = context;
    if (scale.has_value()) {
        this->init_scale = scale.value();
    } else {
        this->init_scale = context->global_scale();
    }

    // Encrypts the whole vector into a single ciphertext using CKKS batching
    this->ciphertext = CKKSVector::encrypt(context, init_scale, vec);
    this->_size = vec.size();
}

CKKSVector::CKKSVector(const CKKSVector& vec) {
    this->context = vec.context;
    this->init_scale = vec.init_scale;
    this->_size = vec._size;
    this->ciphertext = vec.ciphertext;
}

size_t CKKSVector::size() { return this->_size; }
size_t CKKSVector::ciphertext_size() { return this->ciphertext.size(); }

vector<double> CKKSVector::decrypt() {
    if (this->context->decryptor == NULL) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the vector doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->context->secret_key());
}

vector<double> CKKSVector::decrypt(const shared_ptr<SecretKey>& sk) {
    Plaintext plaintext;
    Decryptor decryptor = Decryptor(this->context->seal_context(), *sk);

    vector<double> result;
    result.reserve(this->size());

    decryptor.decrypt(this->ciphertext, plaintext);
    this->context->decode<CKKSEncoder>(plaintext, result);

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

    if (should_set_to_same_mod(this->context, this->ciphertext,
                               to_add.ciphertext)) {
        set_to_same_mod(this->context, this->ciphertext, to_add.ciphertext);
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

    Plaintext plaintext;
    this->context->encode<CKKSEncoder>(to_add, plaintext, this->init_scale);

    if (should_set_to_same_mod(this->context, this->ciphertext, plaintext)) {
        set_to_same_mod(this->context, this->ciphertext, plaintext);
    }

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

    if (should_set_to_same_mod(this->context, this->ciphertext,
                               to_sub.ciphertext)) {
        set_to_same_mod(this->context, this->ciphertext, to_sub.ciphertext);
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

    Plaintext plaintext;
    this->context->encode<CKKSEncoder>(to_sub, plaintext, this->init_scale);

    if (should_set_to_same_mod(this->context, this->ciphertext, plaintext)) {
        set_to_same_mod(this->context, this->ciphertext, plaintext);
    }

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

    if (should_set_to_same_mod(this->context, this->ciphertext,
                               to_mul.ciphertext)) {
        set_to_same_mod(this->context, this->ciphertext, to_mul.ciphertext);
    }

    this->context->evaluator->multiply_inplace(this->ciphertext,
                                               to_mul.ciphertext);

    if (this->context->auto_relin()) {
        this->context->evaluator->relinearize_inplace(
            this->ciphertext, *this->context->relin_keys());
    }

    if (this->context->auto_rescale()) {
        this->context->evaluator->rescale_to_next_inplace(this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
    }

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

    Plaintext plaintext;
    // prevent transparent ciphertext by adding a non-zero value
    if (to_mul.size() + 1 <= this->context->slot_count<CKKSEncoder>())
        to_mul.push_back(1);
    this->context->encode<CKKSEncoder>(to_mul, plaintext, this->init_scale);

    if (should_set_to_same_mod(this->context, this->ciphertext, plaintext)) {
        set_to_same_mod(this->context, this->ciphertext, plaintext);
    }

    this->context->evaluator->multiply_plain_inplace(this->ciphertext,
                                                     plaintext);

    if (this->context->auto_rescale()) {
        this->context->evaluator->rescale_to_next_inplace(this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
    }

    return *this;
}

CKKSVector CKKSVector::dot_product(CKKSVector to_mul) {
    CKKSVector new_vector = *this;
    new_vector.dot_product_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::dot_product_inplace(CKKSVector to_mul) {
    this->mul_inplace(to_mul);
    this->sum_inplace();
    return *this;
}

CKKSVector CKKSVector::dot_product_plain(vector<double> to_mul) {
    CKKSVector new_vector = *this;
    new_vector.dot_product_plain_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::dot_product_plain_inplace(vector<double> to_mul) {
    this->mul_plain_inplace(to_mul);
    this->sum_inplace();
    return *this;
}

CKKSVector CKKSVector::sum() {
    CKKSVector new_vector = *this;
    new_vector.sum_inplace();
    return new_vector;
}

CKKSVector& CKKSVector::sum_inplace() {
    sum_vector(this->context, this->ciphertext, this->size());
    this->_size = 1;
    return *this;
}

CKKSVector CKKSVector::matmul_plain(const vector<vector<double>>& matrix) {
    CKKSVector new_vector = *this;
    return new_vector.matmul_plain_inplace(matrix);
}

CKKSVector& CKKSVector::matmul_plain_inplace(
    const vector<vector<double>>& matrix) {
    this->ciphertext = diagonal_ct_vector_matmul<double, CKKSEncoder>(
        this->context, this->ciphertext, this->size(), matrix);

    this->_size = matrix[0].size();

    if (this->context->auto_rescale()) {
        this->context->evaluator->rescale_to_next_inplace(this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
    }

    return *this;
}

}  // namespace tenseal
