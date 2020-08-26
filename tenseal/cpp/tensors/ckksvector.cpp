#include "tenseal/cpp/tensors/ckksvector.h"

#include <cmath>
#include <memory>
#include <optional>
#include <vector>

#include "seal/seal.h"
#include "tenseal/cpp/context/tensealcontext.h"
#include "tenseal/cpp/tensors/utils/matrix_ops.h"
#include "tenseal/cpp/tensors/utils/utils.h"
#include "tenseal/cpp/utils/proto.h"
#include "tenseal/cpp/utils/serialization.h"

using namespace seal;
using namespace std;

namespace tenseal {

CKKSVector::CKKSVector(shared_ptr<TenSEALContext> ctx, vector<double> vec,
                       std::optional<double> scale) {
    this->link_tenseal_context(ctx);
    if (scale.has_value()) {
        this->init_scale = scale.value();
    } else {
        this->init_scale = ctx->global_scale();
    }

    // Encrypts the whole vector into a single ciphertext using CKKS batching
    this->ciphertext = CKKSVector::encrypt(ctx, init_scale, vec);
    this->_size = vec.size();
}

CKKSVector::CKKSVector(const CKKSVector& vec) {
    this->link_tenseal_context(vec.context);
    this->init_scale = vec.init_scale;
    this->_size = vec._size;
    this->ciphertext = vec.ciphertext;
}

CKKSVector::CKKSVector(shared_ptr<TenSEALContext> ctx, const string& vec) {
    this->link_tenseal_context(ctx);
    this->load(vec);
}

CKKSVector::CKKSVector(const TenSEALContextProto& ctx,
                       const CKKSVectorProto& vec) {
    this->load_context_proto(ctx);
    this->load_proto(vec);
}

CKKSVector::CKKSVector(shared_ptr<TenSEALContext> ctx,
                       const CKKSVectorProto& vec) {
    this->link_tenseal_context(ctx);
    this->load_proto(vec);
}

size_t CKKSVector::size() const { return this->_size; }
size_t CKKSVector::ciphertext_size() const { return this->ciphertext.size(); }

vector<double> CKKSVector::decrypt() const {
    if (this->tenseal_context()->decryptor == NULL) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the vector doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->tenseal_context()->secret_key());
}

vector<double> CKKSVector::decrypt(const shared_ptr<SecretKey>& sk) const {
    Plaintext plaintext;
    Decryptor decryptor =
        Decryptor(this->tenseal_context()->seal_context(), *sk);

    vector<double> result;
    result.reserve(this->size());

    decryptor.decrypt(this->ciphertext, plaintext);
    this->tenseal_context()->decode<CKKSEncoder>(plaintext, result);

    // result contains all slots of ciphertext (n/2), but we may be using less
    // we use the size to delimit the resulting plaintext vector
    vector<double> sub(result.cbegin(), result.cbegin() + this->size());
    return sub;
}

CKKSVector CKKSVector::negate() const {
    CKKSVector new_vector = *this;
    new_vector.negate_inplace();

    return new_vector;
}

CKKSVector& CKKSVector::negate_inplace() {
    this->tenseal_context()->evaluator->negate_inplace(this->ciphertext);

    return *this;
}

CKKSVector CKKSVector::square() const {
    CKKSVector new_vector = *this;
    new_vector.square_inplace();

    return new_vector;
}

CKKSVector& CKKSVector::square_inplace() {
    this->tenseal_context()->evaluator->square_inplace(this->ciphertext);

    if (this->tenseal_context()->auto_relin()) {
        this->tenseal_context()->evaluator->relinearize_inplace(
            this->ciphertext, *this->tenseal_context()->relin_keys());
    }

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
    }

    return *this;
}

CKKSVector CKKSVector::power(unsigned int power) const {
    CKKSVector new_vector = *this;
    new_vector.power_inplace(power);

    return new_vector;
}

CKKSVector& CKKSVector::power_inplace(unsigned int power) {
    // if the power is zero, return a new encrypted vector of ones
    if (power == 0) {
        vector<double> ones(this->size(), 1);
        *this = CKKSVector(this->tenseal_context(), ones, this->init_scale);
        return *this;
    }

    if (power == 1) {
        return *this;
    }

    if (power == 2) {
        this->square_inplace();
        return *this;
    }

    int closest_power_of_2 = 1 << static_cast<int>(floor(log2(power)));
    power -= closest_power_of_2;
    if (power == 0) {
        this->power_inplace(closest_power_of_2 / 2).square_inplace();
    } else {
        CKKSVector closest_pow2_vector = this->power(closest_power_of_2);
        this->power_inplace(power).mul_inplace(closest_pow2_vector);
    }
    return *this;
}

CKKSVector CKKSVector::add(const CKKSVector& to_add) const {
    CKKSVector new_vector = *this;
    new_vector.add_inplace(to_add);

    return new_vector;
}

CKKSVector& CKKSVector::add_inplace(CKKSVector to_add) {
    if (!this->tenseal_context()->equals(to_add.tenseal_context())) {
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

    if (should_set_to_same_mod(this->tenseal_context(), this->ciphertext,
                               to_add.ciphertext)) {
        set_to_same_mod(this->tenseal_context(), this->ciphertext,
                        to_add.ciphertext);
    }

    this->tenseal_context()->evaluator->add_inplace(this->ciphertext,
                                                    to_add.ciphertext);

    return *this;
}

CKKSVector CKKSVector::add_plain(const vector<double>& to_add) const {
    CKKSVector new_vector = *this;
    new_vector.add_plain_inplace(to_add);

    return new_vector;
}

CKKSVector CKKSVector::add_plain(double to_add) const {
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
    this->tenseal_context()->encode<CKKSEncoder>(to_add, plaintext,
                                                 this->init_scale);

    if (should_set_to_same_mod(this->tenseal_context(), this->ciphertext,
                               plaintext)) {
        set_to_same_mod(this->tenseal_context(), this->ciphertext, plaintext);
    }

    this->tenseal_context()->evaluator->add_plain_inplace(this->ciphertext,
                                                          plaintext);

    return *this;
}

CKKSVector CKKSVector::sub(const CKKSVector& to_sub) const {
    CKKSVector new_vector = *this;
    new_vector.sub_inplace(to_sub);

    return new_vector;
}

CKKSVector& CKKSVector::sub_inplace(CKKSVector to_sub) {
    if (!this->tenseal_context()->equals(to_sub.context)) {
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

    if (should_set_to_same_mod(this->tenseal_context(), this->ciphertext,
                               to_sub.ciphertext)) {
        set_to_same_mod(this->tenseal_context(), this->ciphertext,
                        to_sub.ciphertext);
    }

    this->tenseal_context()->evaluator->sub_inplace(this->ciphertext,
                                                    to_sub.ciphertext);

    return *this;
}

CKKSVector CKKSVector::sub_plain(const vector<double>& to_sub) const {
    CKKSVector new_vector = *this;
    new_vector.sub_plain_inplace(to_sub);

    return new_vector;
}

CKKSVector CKKSVector::sub_plain(double to_sub) const {
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
    this->tenseal_context()->encode<CKKSEncoder>(to_sub, plaintext,
                                                 this->init_scale);

    if (should_set_to_same_mod(this->tenseal_context(), this->ciphertext,
                               plaintext)) {
        set_to_same_mod(this->tenseal_context(), this->ciphertext, plaintext);
    }

    this->tenseal_context()->evaluator->sub_plain_inplace(this->ciphertext,
                                                          plaintext);

    return *this;
}

CKKSVector CKKSVector::mul(const CKKSVector& to_mul) const {
    CKKSVector new_vector = *this;
    new_vector.mul_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::mul_inplace(CKKSVector to_mul) {
    if (!this->tenseal_context()->equals(to_mul.context)) {
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

    if (should_set_to_same_mod(this->tenseal_context(), this->ciphertext,
                               to_mul.ciphertext)) {
        set_to_same_mod(this->tenseal_context(), this->ciphertext,
                        to_mul.ciphertext);
    }

    this->tenseal_context()->evaluator->multiply_inplace(this->ciphertext,
                                                         to_mul.ciphertext);

    if (this->tenseal_context()->auto_relin()) {
        this->tenseal_context()->evaluator->relinearize_inplace(
            this->ciphertext, *this->tenseal_context()->relin_keys());
    }

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
    }

    return *this;
}

CKKSVector CKKSVector::mul_plain(const vector<double>& to_mul) const {
    CKKSVector new_vector = *this;
    new_vector.mul_plain_inplace(to_mul);

    return new_vector;
}

CKKSVector CKKSVector::mul_plain(double to_mul) const {
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
    this->tenseal_context()->encode<CKKSEncoder>(to_mul, plaintext,
                                                 this->init_scale);

    if (should_set_to_same_mod(this->tenseal_context(), this->ciphertext,
                               plaintext)) {
        set_to_same_mod(this->tenseal_context(), this->ciphertext, plaintext);
    }

    try {
        this->tenseal_context()->evaluator->multiply_plain_inplace(
            this->ciphertext, plaintext);
    } catch (const std::logic_error& e) {
        if (strcmp(e.what(), "result ciphertext is transparent") == 0) {
            // replace by encryption of zero
            this->tenseal_context()->encryptor->encrypt_zero(this->ciphertext);
            this->ciphertext.scale() = this->init_scale;
            return *this;
        } else {  // Something else, need to be forwarded
            throw;
        }
    }

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
    }

    return *this;
}

CKKSVector CKKSVector::dot_product(const CKKSVector& to_mul) const {
    CKKSVector new_vector = *this;
    new_vector.dot_product_inplace(to_mul);

    return new_vector;
}

CKKSVector& CKKSVector::dot_product_inplace(const CKKSVector& to_mul) {
    this->mul_inplace(to_mul);
    this->sum_inplace();
    return *this;
}

CKKSVector CKKSVector::dot_product_plain(const vector<double>& to_mul) const {
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

CKKSVector CKKSVector::sum() const {
    CKKSVector new_vector = *this;
    new_vector.sum_inplace();
    return new_vector;
}

CKKSVector& CKKSVector::sum_inplace() {
    sum_vector(this->tenseal_context(), this->ciphertext, this->size());
    this->_size = 1;
    return *this;
}

CKKSVector CKKSVector::matmul_plain(const vector<vector<double>>& matrix,
                                    size_t n_jobs) const {
    CKKSVector new_vector = *this;
    return new_vector.matmul_plain_inplace(matrix, n_jobs);
}

CKKSVector& CKKSVector::matmul_plain_inplace(
    const vector<vector<double>>& matrix, size_t n_jobs) {
    this->ciphertext = diagonal_ct_vector_matmul<double, CKKSEncoder>(
        this->tenseal_context(), this->ciphertext, this->size(), matrix,
        n_jobs);

    this->_size = matrix[0].size();

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
    }

    return *this;
}

CKKSVector CKKSVector::replicate_first_slot(size_t n) const {
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
    auto galois_keys = this->tenseal_context()->galois_keys();
    for (size_t i = 0; i < (size_t)ceil(log2(n)); i++) {
        this->tenseal_context()->evaluator->rotate_vector_inplace(
            tmp, static_cast<int>(-pow(2, i)), *galois_keys);
        this->tenseal_context()->evaluator->add_inplace(this->ciphertext, tmp);
        tmp = this->ciphertext;
    }

    this->_size = n;
    return *this;
}

CKKSVector CKKSVector::polyval(const vector<double>& coefficients) const {
    CKKSVector new_vector = *this;
    return new_vector.polyval_inplace(coefficients);
}

CKKSVector& CKKSVector::polyval_inplace(const vector<double>& coefficients) {
    if (coefficients.size() == 0) {
        throw invalid_argument(
            "the coefficients vector need to have at least one element");
    }

    int degree = static_cast<int>(coefficients.size()) - 1;
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
        this->tenseal_context()->encryptor->encrypt_zero(this->ciphertext);
        this->ciphertext.scale() = this->init_scale;
        return *this;
    }

    // set result accumulator to the constant coefficient
    vector<double> cst_coeff(this->size(), coefficients[0]);
    CKKSVector result(this->tenseal_context(), cst_coeff, this->init_scale);

    // pre-compute squares of x
    CKKSVector x = *this;
    int max_square = static_cast<int>(floor(log2(degree)));
    vector<CKKSVector> x_squares;
    x_squares.reserve(max_square + 1);
    x_squares.push_back(x);  // x
    for (int i = 1; i <= max_square; i++) {
        x.square_inplace();
        x_squares.push_back(x);  // x^(2^i)
    }

    // coefficients[1] * x + ... + coefficients[degree] * x^(degree)
    for (int i = 1; i <= degree; i++) {
        if (coefficients[i] == 0.0) continue;
        x = compute_polynomial_term(i, coefficients[i], x_squares);
        result.add_inplace(x);
    }

    this->ciphertext = result.ciphertext;
    return *this;
}

CKKSVector CKKSVector::conv2d_im2col(const vector<vector<double>>& kernel,
                                     const size_t windows_nb) const {
    CKKSVector new_vec = *this;
    new_vec.conv2d_im2col_inplace(kernel, windows_nb);
    return new_vec;
}

CKKSVector& CKKSVector::conv2d_im2col_inplace(
    const vector<vector<double>>& kernel, const size_t windows_nb) {
    if (windows_nb == 0) {
        throw invalid_argument("Windows number can't be zero");
    }

    if (kernel.empty() ||
        (any_of(kernel.begin(), kernel.end(),
                [](const vector<double>& i) { return i.empty(); }))) {
        throw invalid_argument("Kernel matrix can't be empty");
    }

    // flat the kernel
    vector<double> flatten_kernel;
    horizontal_scan(kernel, flatten_kernel);

    this->enc_matmul_plain_inplace(flatten_kernel, windows_nb);
    return *this;
}

CKKSVector CKKSVector::enc_matmul_plain(const vector<double>& plain_vec,
                                        const size_t rows_nb) {
    CKKSVector new_vec = *this;
    new_vec.enc_matmul_plain_inplace(plain_vec, rows_nb);
    return new_vec;
}

CKKSVector& CKKSVector::enc_matmul_plain_inplace(
    const vector<double>& plain_vec, const size_t rows_nb) {
    if (plain_vec.empty()) {
        throw invalid_argument("Plain vector can't be empty");
    }

    // calculate the next power of 2
    size_t plain_vec_size =
        1 << (static_cast<size_t>(ceil(log2(plain_vec.size()))));

    // pad the vector with zeros to the next power of 2
    vector<double> padded_plain_vec(plain_vec);
    padded_plain_vec.resize(plain_vec_size, 0);

    size_t chunks_nb = padded_plain_vec.size();

    if (this->_size / rows_nb != chunks_nb) {
        throw invalid_argument("Matrix shape doesn't match with vector size");
    }

    vector<double> new_plain_vec;
    new_plain_vec.reserve(this->_size);

    for (size_t i = 0; i < chunks_nb; i++) {
        vector<double> tmp(rows_nb, padded_plain_vec[i]);
        new_plain_vec.insert(new_plain_vec.end(), tmp.begin(), tmp.end());
    }

    // replicate the vector in order to be able to do multiple matrix
    // multiplications
    size_t slot_count = this->context->slot_count<CKKSEncoder>();
    replicate_vector(new_plain_vec, slot_count);
    this->_size = slot_count;

    this->mul_plain_inplace(new_plain_vec);

    auto galois_keys = this->context->galois_keys();

    CKKSVector tmp = *this;

    while (chunks_nb > 1) {
        tmp = *this;
        chunks_nb = static_cast<int>(
            1 << (static_cast<size_t>(ceil(log2(chunks_nb))) - 1));
        this->context->evaluator->rotate_vector_inplace(
            tmp.ciphertext, static_cast<int>(rows_nb * chunks_nb),
            *galois_keys);
        this->add_inplace(tmp);
    }

    this->_size = rows_nb;

    return *this;
}

void CKKSVector::load_proto(const CKKSVectorProto& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->_size = vec.size();
    this->ciphertext = SEALDeserialize<Ciphertext>(
        this->tenseal_context()->seal_context(), vec.ciphertext());
    this->init_scale = vec.scale();
}

void CKKSVector::load_context_proto(const TenSEALContextProto& ctx) {
    this->link_tenseal_context(TenSEALContext::Create(ctx));
}

CKKSVectorProto CKKSVector::save_proto() const {
    CKKSVectorProto buffer;

    *buffer.mutable_ciphertext() = SEALSerialize<Ciphertext>(this->ciphertext);
    buffer.set_size(static_cast<int>(this->_size));
    buffer.set_scale(this->init_scale);

    return buffer;
}

void CKKSVector::load(const std::string& vec) {
    CKKSVectorProto buffer;
    if (!buffer.ParseFromArray(vec.c_str(), static_cast<int>(vec.size()))) {
        throw invalid_argument("failed to parse CKKS stream");
    }
    this->load_proto(buffer);
}

std::string CKKSVector::save() const {
    auto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 static_cast<int>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save CKKS proto");
    }

    return output;
}

CKKSVector CKKSVector::deepcopy() const {
    TenSEALContextProto ctx = this->tenseal_context()->save_proto();
    CKKSVectorProto vec = this->save_proto();
    return CKKSVector(ctx, vec);
}

}  // namespace tenseal
