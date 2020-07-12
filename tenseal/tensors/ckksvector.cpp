#include "tenseal/tensors/ckksvector.h"

#include <seal/seal.h>

#include <cmath>
#include <map>
#include <memory>
#include <optional>
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

CKKSVector CKKSVector::negate() {
    CKKSVector new_vector = *this;
    new_vector.negate_inplace();

    return new_vector;
}

CKKSVector& CKKSVector::negate_inplace() {
    this->context->evaluator->negate_inplace(this->ciphertext);

    return *this;
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
        if (this->size() == 1) {
            this->replicate_first_slot_inplace(to_add.size());
        } else if (to_add.size() == 1) {
            to_add.replicate_first_slot_inplace(this->size());
        } else {
            throw invalid_argument("can't add vectors of different sizes");
        }
    }

    if (should_set_to_same_mod(this->context, this->ciphertext,
                               to_add.ciphertext)) {
        set_to_same_mod(this->context, this->ciphertext, to_add.ciphertext);
    }

    this->context->evaluator->add_inplace(this->ciphertext, to_add.ciphertext);

    return *this;
}

CKKSVector CKKSVector::add_plain(const vector<double>& to_add) {
    CKKSVector new_vector = *this;
    new_vector.add_plain_inplace(to_add);

    return new_vector;
}

CKKSVector CKKSVector::add_plain(double to_add) {
    CKKSVector new_vector = *this;
    new_vector.add_plain_inplace(to_add);

    return new_vector;
}

CKKSVector& CKKSVector::add_plain_inplace(const vector<double>& to_add) {
    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    return this->_add_plain_inplace(to_add);
}

CKKSVector& CKKSVector::add_plain_inplace(double to_add) {
    return this->_add_plain_inplace(to_add);
}

template <typename T>
CKKSVector& CKKSVector::_add_plain_inplace(const T& to_add) {
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
        if (this->size() == 1) {
            this->replicate_first_slot_inplace(to_sub.size());
        } else if (to_sub.size() == 1) {
            to_sub.replicate_first_slot_inplace(this->size());
        } else {
            throw invalid_argument("can't sub vectors of different sizes");
        }
    }

    if (should_set_to_same_mod(this->context, this->ciphertext,
                               to_sub.ciphertext)) {
        set_to_same_mod(this->context, this->ciphertext, to_sub.ciphertext);
    }

    this->context->evaluator->sub_inplace(this->ciphertext, to_sub.ciphertext);

    return *this;
}

CKKSVector CKKSVector::sub_plain(const vector<double>& to_sub) {
    CKKSVector new_vector = *this;
    new_vector.sub_plain_inplace(to_sub);

    return new_vector;
}

CKKSVector CKKSVector::sub_plain(double to_sub) {
    CKKSVector new_vector = *this;
    new_vector.sub_plain_inplace(to_sub);

    return new_vector;
}

CKKSVector& CKKSVector::sub_plain_inplace(const vector<double>& to_sub) {
    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    return this->_sub_plain_inplace(to_sub);
}

CKKSVector& CKKSVector::sub_plain_inplace(double to_sub) {
    return this->_sub_plain_inplace(to_sub);
}

template <typename T>
CKKSVector& CKKSVector::_sub_plain_inplace(const T& to_sub) {
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
        if (this->size() == 1) {
            this->replicate_first_slot_inplace(to_mul.size());
        } else if (to_mul.size() == 1) {
            to_mul.replicate_first_slot_inplace(this->size());
        } else {
            throw invalid_argument("can't multiply vectors of different sizes");
        }
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

CKKSVector CKKSVector::mul_plain(const vector<double>& to_mul) {
    CKKSVector new_vector = *this;
    new_vector.mul_plain_inplace(to_mul);

    return new_vector;
}

CKKSVector CKKSVector::mul_plain(double to_mul) {
    CKKSVector new_vector = *this;
    new_vector.mul_plain_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::mul_plain_inplace(const vector<double>& to_mul) {
    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    return this->_mul_plain_inplace(to_mul);
}

CKKSVector& CKKSVector::mul_plain_inplace(double to_mul) {
    return this->_mul_plain_inplace(to_mul);
}

template <typename T>
CKKSVector& CKKSVector::_mul_plain_inplace(const T& to_mul) {
    Plaintext plaintext;
    this->context->encode<CKKSEncoder>(to_mul, plaintext, this->init_scale);

    if (should_set_to_same_mod(this->context, this->ciphertext, plaintext)) {
        set_to_same_mod(this->context, this->ciphertext, plaintext);
    }

    try {
        this->context->evaluator->multiply_plain_inplace(this->ciphertext,
                                                         plaintext);
    } catch (const std::logic_error& e) {  // result ciphertext is transparent
        // TODO: chech if error e is exactly a "ciphertext is transparent" error
        // replace by encryption of zero
        this->context->encryptor->encrypt_zero(this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
        return *this;
    }

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

CKKSVector CKKSVector::dot_product_plain(const vector<double>& to_mul) {
    CKKSVector new_vector = *this;
    new_vector.dot_product_plain_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::dot_product_plain_inplace(
    const vector<double>& to_mul) {
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

CKKSVector CKKSVector::replicate_first_slot(size_t n) {
    CKKSVector new_vector = *this;
    return new_vector.replicate_first_slot_inplace(n);
}

CKKSVector& CKKSVector::replicate_first_slot_inplace(size_t n) {
    // mask
    vector<double> mask(this->_size, 0);
    mask[0] = 1;
    this->mul_plain_inplace(mask);

    // replicate
    Ciphertext tmp = this->ciphertext;
    auto galois_keys = this->context->galois_keys();
    for (size_t i = 0; i < (size_t)ceil(log2(n)); i++) {
        this->context->evaluator->rotate_vector_inplace(tmp, -pow(2, i),
                                                        *galois_keys);
        this->context->evaluator->add_inplace(this->ciphertext, tmp);
        tmp = this->ciphertext;
    }

    this->_size = n;
    return *this;
}

CKKSVector CKKSVector::polyval(const vector<double>& coefficients) {
    CKKSVector new_vector = *this;
    return new_vector.polyval_inplace(coefficients);
}

CKKSVector get_x_degree(int degree, map<int, CKKSVector>& terms) {
    // check if degree is power of two
    if ((degree & (degree - 1)) == 0) {
        return terms.find(degree)->second;
    }
    // check if the term is already computed
    auto term = terms.find(degree);
    if (term != terms.end()) {
        return term->second;
    }

    int closest_power_of_2 = static_cast<int>(floor(log2(degree)));
    CKKSVector x = terms.find(closest_power_of_2)->second;
    x.mul_inplace(get_x_degree(degree - closest_power_of_2, terms));
    terms.insert(make_pair(degree, x));
    return x;
}

CKKSVector& CKKSVector::polyval_inplace(const vector<double>& coefficients) {
    if (coefficients.size() == 0) {
        throw invalid_argument(
            "the coefficients vector need to have at least one element");
    }

    int degree = coefficients.size() - 1;

    while (degree >= 0) {
        if (coefficients[degree] == 0.0)
            degree--;
        else
            break;
    }

    // null polynomial: output should be an encrypted 0
    // we can multiply by 0, or return the encryption of zero
    if (degree == -1) {
        // we set the vector to the encryption of zero
        this->context->encryptor->encrypt_zero(this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
        return *this;
    }

    // set accumulator to the constant coefficient
    CKKSVector acc = *this;
    Plaintext const_coeff;

    this->context->encode<CKKSEncoder>(coefficients[0], const_coeff,
                                       this->init_scale);
    this->context->encryptor->encrypt(const_coeff, acc.ciphertext);

    // coefficients[1] * x
    if (degree >= 1 && coefficients[1] != 0.0) {
        if (coefficients[1] == 1.0)
            acc.add_inplace(*this);
        else
            acc.add_inplace(this->mul_plain(coefficients[1]));
    }

    // doesn't need to continue
    if (degree < 2) {
        this->ciphertext = acc.ciphertext;
        return *this;
    }

    // coefficients[2] * x^2 + ... + coefficients[degree] * x^(degree)
    map<int, CKKSVector> power_x;
    CKKSVector x = *this;
    power_x.insert(make_pair(1, x));
    for (int i = 1; i <= static_cast<int>(floor(log2(degree))); i++) {
        // TODO: use square
        x.mul_inplace(x);
        power_x.insert(make_pair(1 << i, x));
    }

    for (int i = 2; i <= degree; i++) {
        if (coefficients[i] == 0.0) continue;

        if (coefficients[i] == 1.0) {
            x = get_x_degree(i, power_x);
            acc.add_inplace(x);
        } else {
            // check if the degree is power of two
            if ((i & (i - 1)) == 0) {
                x = get_x_degree(i, power_x);
                x.mul_plain_inplace(coefficients[i]);
            } else {  // first multiply x (this) with coeff to reduce depth
                x = get_x_degree(i - 1, power_x);
                x.mul_inplace(this->mul_plain(coefficients[i]));
            }
            acc.add_inplace(x);
        }
    }

    this->ciphertext = acc.ciphertext;
    return *this;
}

}  // namespace tenseal
