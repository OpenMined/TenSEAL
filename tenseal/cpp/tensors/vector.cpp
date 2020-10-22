#include "tenseal/cpp/tensors/vector.h"

namespace tenseal {

using namespace seal;
using namespace std;

size_t EncryptedVector::size() const { return this->_size; }
void EncryptedVector::size(size_t val) { this->_size = val; }
size_t EncryptedVector::ciphertext_size() const {
    return this->_ciphertext.size();
}
const Ciphertext& EncryptedVector::ciphertext() const {
    return this->_ciphertext;
}

void EncryptedVector::ciphertext(Ciphertext&& other) {
    this->_ciphertext = other;
}

SharedEncryptedVector EncryptedVector::negate() const {
    auto new_vector = this->copy();
    new_vector->negate_inplace();

    return new_vector;
}

SharedEncryptedVector EncryptedVector::negate_inplace() {
    this->tenseal_context()->evaluator->negate_inplace(this->_ciphertext);

    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::square() const {
    auto new_vector = this->copy();
    new_vector->square_inplace();

    return new_vector;
}

SharedEncryptedVector EncryptedVector::square_inplace() {
    this->tenseal_context()->evaluator->square_inplace(this->_ciphertext);

    if (this->tenseal_context()->auto_relin()) {
        this->tenseal_context()->evaluator->relinearize_inplace(
            this->_ciphertext, *this->tenseal_context()->relin_keys());
    }

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->_ciphertext);
        this->_ciphertext.scale() = this->scale();
    }

    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::power(unsigned int power) const {
    auto new_vector = this->copy();
    new_vector->power_inplace(power);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::add(SharedEncryptedVector to_add) const {
    auto new_vector = this->copy();
    new_vector->add_inplace(to_add);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::add_inplace(
    SharedEncryptedVector other) {
    auto to_add = other->copy();
    if (!this->tenseal_context()->equals(to_add->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't add vectors that have different contexts");
    }

    if (this->size() != to_add->size()) {
        if (this->size() == 1) {
            this->replicate_first_slot_inplace(to_add->size());
        } else if (to_add->size() == 1) {
            to_add->replicate_first_slot_inplace(this->size());
        } else {
            throw invalid_argument("can't add vectors of different sizes");
        }
    }

    if (should_set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                               to_add->_ciphertext)) {
        set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                        to_add->_ciphertext);
    }

    this->tenseal_context()->evaluator->add_inplace(this->_ciphertext,
                                                    to_add->_ciphertext);

    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::add_plain(
    const vector<double>& to_add) const {
    auto new_vector = this->copy();
    new_vector->add_plain_inplace(to_add);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::add_plain(double to_add) const {
    auto new_vector = this->copy();
    new_vector->add_plain_inplace(to_add);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::sub(SharedEncryptedVector to_sub) const {
    auto new_vector = this->copy();
    new_vector->sub_inplace(to_sub);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::sub_inplace(
    SharedEncryptedVector other) {
    auto to_sub = other->copy();
    if (!this->tenseal_context()->equals(to_sub->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't sub vectors that have different contexts");
    }

    if (this->size() != to_sub->size()) {
        if (this->size() == 1) {
            this->replicate_first_slot_inplace(to_sub->size());
        } else if (to_sub->size() == 1) {
            to_sub->replicate_first_slot_inplace(this->size());
        } else {
            throw invalid_argument("can't sub vectors of different sizes");
        }
    }

    if (should_set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                               to_sub->_ciphertext)) {
        set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                        to_sub->_ciphertext);
    }

    this->tenseal_context()->evaluator->sub_inplace(this->_ciphertext,
                                                    to_sub->_ciphertext);

    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::sub_plain(
    const vector<double>& to_sub) const {
    auto new_vector = this->copy();
    new_vector->sub_plain_inplace(to_sub);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::sub_plain(double to_sub) const {
    auto new_vector = this->copy();
    new_vector->sub_plain_inplace(to_sub);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::mul(SharedEncryptedVector to_mul) const {
    auto new_vector = this->copy();
    new_vector->mul_inplace(to_mul);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::mul_inplace(
    SharedEncryptedVector other) {
    auto to_mul = other->copy();
    if (!this->tenseal_context()->equals(to_mul->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't multiply vectors that have different contexts");
    }

    if (this->size() != to_mul->size()) {
        if (this->size() == 1) {
            this->replicate_first_slot_inplace(to_mul->size());
        } else if (to_mul->size() == 1) {
            to_mul->replicate_first_slot_inplace(this->size());
        } else {
            throw invalid_argument("can't multiply vectors of different sizes");
        }
    }

    if (should_set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                               to_mul->_ciphertext)) {
        set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                        to_mul->_ciphertext);
    }

    this->tenseal_context()->evaluator->multiply_inplace(this->_ciphertext,
                                                         to_mul->_ciphertext);

    if (this->tenseal_context()->auto_relin()) {
        this->tenseal_context()->evaluator->relinearize_inplace(
            this->_ciphertext, *this->tenseal_context()->relin_keys());
    }

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->_ciphertext);
        this->_ciphertext.scale() = this->scale();
    }

    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::mul_plain(
    const vector<double>& to_mul) const {
    auto new_vector = this->copy();
    new_vector->mul_plain_inplace(to_mul);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::mul_plain(double to_mul) const {
    auto new_vector = this->copy();
    new_vector->mul_plain_inplace(to_mul);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::dot_product(
    SharedEncryptedVector to_mul) const {
    auto new_vector = this->copy();
    new_vector->dot_product_inplace(to_mul);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::dot_product_inplace(
    SharedEncryptedVector to_mul) {
    this->mul_inplace(to_mul);
    this->sum_inplace();
    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::dot_product_plain(
    const vector<double>& to_mul) const {
    auto new_vector = this->copy();
    new_vector->dot_product_plain_inplace(to_mul);

    return new_vector;
}

SharedEncryptedVector EncryptedVector::dot_product_plain_inplace(
    const vector<double>& to_mul) {
    this->mul_plain_inplace(to_mul);
    this->sum_inplace();
    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::sum() const {
    auto new_vector = this->copy();
    new_vector->sum_inplace();
    return new_vector;
}

SharedEncryptedVector EncryptedVector::sum_inplace() {
    sum_vector(this->tenseal_context(), this->_ciphertext, this->size());
    this->_size = 1;
    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::matmul_plain(
    const vector<vector<double>>& matrix, size_t n_jobs) const {
    auto new_vector = this->copy();
    return new_vector->matmul_plain_inplace(matrix, n_jobs);
}

SharedEncryptedVector EncryptedVector::replicate_first_slot(size_t n) const {
    auto new_vector = this->copy();
    return new_vector->replicate_first_slot_inplace(n);
}

SharedEncryptedVector EncryptedVector::replicate_first_slot_inplace(size_t n) {
    // mask
    vector<double> mask(this->_size, 0);
    mask[0] = 1;
    this->mul_plain_inplace(mask);

    // replicate
    Ciphertext tmp = this->_ciphertext;
    auto galois_keys = this->tenseal_context()->galois_keys();
    for (size_t i = 0; i < (size_t)ceil(log2(n)); i++) {
        this->tenseal_context()->evaluator->rotate_vector_inplace(
            tmp, static_cast<int>(-pow(2, i)), *galois_keys);
        this->tenseal_context()->evaluator->add_inplace(this->_ciphertext, tmp);
        tmp = this->_ciphertext;
    }

    this->_size = n;
    return shared_from_this();
}

SharedEncryptedVector EncryptedVector::polyval(
    const vector<double>& coefficients) const {
    auto new_vector = this->copy();
    return new_vector->polyval_inplace(coefficients);
}

SharedEncryptedVector EncryptedVector::conv2d_im2col(
    const vector<vector<double>>& kernel, const size_t windows_nb) const {
    auto new_vector = this->copy();
    new_vector->conv2d_im2col_inplace(kernel, windows_nb);
    return new_vector;
}

SharedEncryptedVector EncryptedVector::enc_matmul_plain(
    const vector<double>& plain_vec, const size_t rows_nb) {
    auto new_vector = this->copy();
    new_vector->enc_matmul_plain_inplace(plain_vec, rows_nb);
    return new_vector;
}

void EncryptedVector::rotate_vector_inplace(int steps,
                                            const GaloisKeys& galois_keys) {
    this->tenseal_context()->evaluator->rotate_vector_inplace(
        this->_ciphertext, steps, galois_keys);
}

shared_ptr<TenSEALContext> EncryptedVector::tenseal_context() const {
    if (_context == nullptr) throw invalid_argument("missing context");
    return _context;
}

void EncryptedVector::link_tenseal_context(shared_ptr<TenSEALContext> ctx) {
    this->_context = ctx;
}

shared_ptr<EncryptedVector> EncryptedVector::as_encrypted_tensor() {
    return shared_from_this();
}

}  // namespace tenseal
