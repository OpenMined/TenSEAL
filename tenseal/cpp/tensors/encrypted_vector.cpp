#include "tenseal/cpp/tensors/encrypted_vector.h"

namespace tenseal {

using namespace seal;
using namespace std;

template <typename plain_t>
size_t EncryptedVector<plain_t>::size() const {
    return this->_size;
}

template <typename plain_t>
void EncryptedVector<plain_t>::size(size_t val) {
    this->_size = val;
}

template <typename plain_t>
size_t EncryptedVector<plain_t>::ciphertext_size() const {
    return this->_ciphertext.size();
}

template <typename plain_t>
const Ciphertext& EncryptedVector<plain_t>::ciphertext() const {
    return this->_ciphertext;
}

template <typename plain_t>
void EncryptedVector<plain_t>::ciphertext(Ciphertext&& other) {
    this->_ciphertext = other;
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>>
EncryptedVector<plain_t>::negate_inplace() {
    this->tenseal_context()->evaluator->negate_inplace(this->_ciphertext);

    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>>
EncryptedVector<plain_t>::square_inplace() {
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

    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>> EncryptedVector<plain_t>::add_inplace(
    shared_ptr<EncryptedVector<plain_t>> other) {
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

    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>> EncryptedVector<plain_t>::sub_inplace(
    shared_ptr<EncryptedVector<plain_t>> other) {
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

    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>> EncryptedVector<plain_t>::mul_inplace(
    shared_ptr<EncryptedVector<plain_t>> other) {
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

    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>>
EncryptedVector<plain_t>::dot_product_inplace(
    shared_ptr<EncryptedVector<plain_t>> to_mul) {
    this->mul_inplace(to_mul);
    this->sum_inplace();
    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>>
EncryptedVector<plain_t>::dot_product_plain_inplace(
    const vector<plain_t>& to_mul) {
    this->mul_plain_inplace(to_mul);
    this->sum_inplace();
    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>> EncryptedVector<plain_t>::sum_inplace() {
    sum_vector(this->tenseal_context(), this->_ciphertext, this->size());
    this->_size = 1;
    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>> EncryptedVector<plain_t>::matmul_plain(
    const vector<vector<plain_t>>& matrix, size_t n_jobs) const {
    auto new_vector = this->copy();
    return new_vector->matmul_plain_inplace(matrix, n_jobs);
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>>
EncryptedVector<plain_t>::replicate_first_slot(size_t n) const {
    auto new_vector = this->copy();
    return new_vector->replicate_first_slot_inplace(n);
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>>
EncryptedVector<plain_t>::replicate_first_slot_inplace(size_t n) {
    // mask
    vector<plain_t> mask(this->_size, 0);
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
    return std::enable_shared_from_this<
        EncryptedVector<plain_t>>::shared_from_this();
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>> EncryptedVector<plain_t>::conv2d_im2col(
    const vector<vector<plain_t>>& kernel, const size_t windows_nb) const {
    auto new_vector = this->copy();
    new_vector->conv2d_im2col_inplace(kernel, windows_nb);
    return new_vector;
}

template <typename plain_t>
shared_ptr<EncryptedVector<plain_t>> EncryptedVector<plain_t>::enc_matmul_plain(
    const vector<plain_t>& plain_vec, const size_t rows_nb) {
    auto new_vector = this->copy();
    new_vector->enc_matmul_plain_inplace(plain_vec, rows_nb);
    return new_vector;
}

template <typename plain_t>
void EncryptedVector<plain_t>::rotate_vector_inplace(
    int steps, const GaloisKeys& galois_keys) {
    this->tenseal_context()->evaluator->rotate_vector_inplace(
        this->_ciphertext, steps, galois_keys);
}

template class EncryptedVector<int64_t>;
template class EncryptedVector<double>;

}  // namespace tenseal
