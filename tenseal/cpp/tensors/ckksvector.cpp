#include "tenseal/cpp/tensors/ckksvector.h"

using namespace seal;
using namespace std;

namespace tenseal {

CKKSVector::CKKSVector(const shared_ptr<TenSEALContext>& ctx,
                       const CKKSVector::plain_t& vec,
                       std::optional<double> scale) {
    this->link_tenseal_context(ctx);
    if (scale.has_value()) {
        this->_init_scale = scale.value();
    } else {
        this->_init_scale = ctx->global_scale();
    }

    if (vec.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }

    auto slot_count = ctx->slot_count<CKKSEncoder>();
    auto vec_chunks = vec.chunks(slot_count);

    if (vec_chunks.size() > 1) {
        std::cout
            << "WARNING: The input does not fit in a single ciphertext, and "
               "some operations will be disabled.\n"
               "The following operations are disabled in this setup: matmul, "
               "matmul_plain, enc_matmul_plain, conv2d_im2col, "
               "replicate_first_slot.\n"
               "If you need to use those operations, try increasing the "
               "poly_modulus parameter, to fit your input.\n";
    }

    this->_ciphertexts = vector<Ciphertext>();
    this->_sizes = vector<size_t>();

    for (auto& chunk : vec_chunks) {
        // Encrypts the whole vector into a single ciphertext using CKKS
        // batching
        this->_ciphertexts.push_back(
            CKKSVector::encrypt(ctx, this->_init_scale, chunk));
        this->_sizes.push_back(chunk.size());
    }
}

CKKSVector::CKKSVector(const shared_ptr<TenSEALContext>& ctx,
                       const string& vec) {
    this->link_tenseal_context(ctx);
    this->load(vec);
}

CKKSVector::CKKSVector(const string& vec) { this->load(vec); }

CKKSVector::CKKSVector(const TenSEALContextProto& ctx,
                       const CKKSVectorProto& vec) {
    this->load_context_proto(ctx);
    this->load_proto(vec);
}

CKKSVector::CKKSVector(const shared_ptr<TenSEALContext>& ctx,
                       const CKKSVectorProto& vec) {
    this->link_tenseal_context(ctx);
    this->load_proto(vec);
}

CKKSVector::CKKSVector(const shared_ptr<const CKKSVector>& vec) {
    this->link_tenseal_context(vec->tenseal_context());
    this->_init_scale = vec->scale();
    this->_sizes = vec->chunked_size();
    this->_ciphertexts = vec->ciphertext();
}

Ciphertext CKKSVector::encrypt(shared_ptr<TenSEALContext> context, double scale,
                               plain_t pt) {
    if (pt.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }
    auto slot_count = context->slot_count<CKKSEncoder>();
    if (pt.size() > slot_count)
        // number of slots available is poly_modulus_degree / 2
        throw invalid_argument(
            "can't encrypt vectors of this size, please use a larger "
            "polynomial modulus degree.");

    Ciphertext ciphertext(*context->seal_context());
    Plaintext plaintext;
    pt.replicate(slot_count);
    context->encode<CKKSEncoder>(pt.data(), plaintext, scale);
    context->encrypt(plaintext, ciphertext);

    return ciphertext;
}

CKKSVector::plain_t CKKSVector::decrypt(const shared_ptr<SecretKey>& sk) const {
    vector<double> result;
    result.reserve(this->size());

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        vector<double> partial_result;
        partial_result.reserve(this->_sizes[idx]);
        Plaintext plaintext;

        this->tenseal_context()->decrypt(*sk, this->_ciphertexts[idx],
                                         plaintext);
        this->tenseal_context()->decode<CKKSEncoder>(plaintext, partial_result);

        // result contains all slots of ciphertext (n/2), but we may be using
        // less we use the size to delimit the resulting plaintext vector
        auto partial_decr =
            vector<double>(partial_result.cbegin(),
                           partial_result.cbegin() + this->_sizes[idx]);
        result.insert(result.end(), partial_decr.begin(), partial_decr.end());
    }

    return result;
}

shared_ptr<CKKSVector> CKKSVector::power_inplace(unsigned int power) {
    // if the power is zero, return a new encrypted vector of ones
    if (power == 0) {
        vector<double> ones(this->size(), 1);
        *this = CKKSVector(this->tenseal_context(), ones, this->_init_scale);
        return shared_from_this();
    }

    if (power == 1) {
        return shared_from_this();
    }

    if (power == 2) {
        this->square_inplace();
        return shared_from_this();
    }

    int closest_power_of_2 = 1 << static_cast<int>(floor(log2(power)));
    power -= closest_power_of_2;
    if (power == 0) {
        this->power_inplace(closest_power_of_2 / 2)->square_inplace();
    } else {
        auto closest_pow2_vector = this->power(closest_power_of_2);
        this->power_inplace(power)->mul_inplace(closest_pow2_vector);
    }

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::negate_inplace() {
    for (auto& ct : this->_ciphertexts)
        this->tenseal_context()->evaluator->negate_inplace(ct);

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::square_inplace() {
    for (auto& ct : this->_ciphertexts) {
        this->tenseal_context()->evaluator->square_inplace(ct);
        this->auto_relin(ct);
        this->auto_rescale(ct);
    }

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::add_inplace(
    const shared_ptr<CKKSVector>& other) {
    auto to_add = other;
    if (!this->tenseal_context()->equals(to_add->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't add vectors that have different contexts");
    }

    to_add = this->broadcast_or_throw(to_add);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        this->auto_same_mod(to_add->_ciphertexts[idx], _ciphertexts[idx]);

        this->tenseal_context()->evaluator->add_inplace(
            this->_ciphertexts[idx], to_add->_ciphertexts[idx]);
    }
    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::sub_inplace(
    const shared_ptr<CKKSVector>& other) {
    auto to_sub = other;
    if (!this->tenseal_context()->equals(to_sub->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't sub vectors that have different contexts");
    }

    to_sub = this->broadcast_or_throw(to_sub);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        this->auto_same_mod(to_sub->_ciphertexts[idx], _ciphertexts[idx]);

        this->tenseal_context()->evaluator->sub_inplace(
            this->_ciphertexts[idx], to_sub->_ciphertexts[idx]);
    }

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::mul_inplace(
    const shared_ptr<CKKSVector>& other) {
    auto to_mul = other;
    if (!this->tenseal_context()->equals(to_mul->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't multiply vectors that have different contexts");
    }

    to_mul = this->broadcast_or_throw(to_mul);
    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        this->auto_same_mod(to_mul->_ciphertexts[idx], _ciphertexts[idx]);

        this->tenseal_context()->evaluator->multiply_inplace(
            this->_ciphertexts[idx], to_mul->_ciphertexts[idx]);

        this->auto_relin(_ciphertexts[idx]);
        this->auto_rescale(_ciphertexts[idx]);
    }

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::dot_inplace(
    const shared_ptr<CKKSVector>& to_mul) {
    this->mul_inplace(to_mul);
    this->sum_inplace();

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::dot_plain_inplace(const plain_t& to_mul) {
    this->mul_plain_inplace(to_mul);
    this->sum_inplace();

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::sum_inplace(size_t /*axis = 0*/) {
    vector<Ciphertext> interm_sum;
    // TODO use multithreading for the sum
    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        Ciphertext out = this->_ciphertexts[idx];
        sum_vector(this->tenseal_context(), out, this->_sizes[idx]);
        interm_sum.push_back(out);
    }
    Ciphertext result;
    tenseal_context()->evaluator->add_many(interm_sum, result);

    this->_ciphertexts = {result};
    this->_sizes = {1};

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::add_plain_inplace(
    const plain_t& vector_to_add) {
    if (this->size() != vector_to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }
    auto slot_count = tenseal_context()->slot_count<CKKSEncoder>();
    auto to_add = vector_to_add.chunks(slot_count);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        this->_add_plain_inplace(this->_ciphertexts[idx],
                                 to_add[idx].data_ref());
    }
    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::add_plain_inplace(const double& to_add) {
    for (auto& ct : this->_ciphertexts) this->_add_plain_inplace(ct, to_add);
    return shared_from_this();
}

template <typename T>
void CKKSVector::_add_plain_inplace(Ciphertext& ct, const T& to_add) {
    Plaintext plaintext;
    this->tenseal_context()->encode<CKKSEncoder>(to_add, plaintext,
                                                 this->_init_scale);
    this->auto_same_mod(plaintext, ct);
    this->tenseal_context()->evaluator->add_plain_inplace(ct, plaintext);
}

shared_ptr<CKKSVector> CKKSVector::sub_plain_inplace(
    const plain_t& vector_to_sub) {
    if (this->size() != vector_to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }
    auto slot_count = tenseal_context()->slot_count<CKKSEncoder>();
    auto to_sub = vector_to_sub.chunks(slot_count);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        this->_sub_plain_inplace(this->_ciphertexts[idx],
                                 to_sub[idx].data_ref());
    }

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::sub_plain_inplace(const double& to_sub) {
    for (auto& ct : this->_ciphertexts) this->_sub_plain_inplace(ct, to_sub);
    return shared_from_this();
}

template <typename T>
void CKKSVector::_sub_plain_inplace(Ciphertext& ct, const T& to_sub) {
    Plaintext plaintext;
    this->tenseal_context()->encode<CKKSEncoder>(to_sub, plaintext,
                                                 this->_init_scale);

    this->auto_same_mod(plaintext, ct);
    this->tenseal_context()->evaluator->sub_plain_inplace(ct, plaintext);
}

shared_ptr<CKKSVector> CKKSVector::mul_plain_inplace(
    const plain_t& vector_to_mul) {
    if (this->size() != vector_to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }
    auto slot_count = tenseal_context()->slot_count<CKKSEncoder>();
    auto to_mul = vector_to_mul.chunks(slot_count);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        this->_mul_plain_inplace(this->_ciphertexts[idx],
                                 to_mul[idx].data_ref());
    }

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::mul_plain_inplace(const double& to_mul) {
    for (auto& ct : this->_ciphertexts) this->_mul_plain_inplace(ct, to_mul);
    return shared_from_this();
}

template <typename T>
void CKKSVector::_mul_plain_inplace(Ciphertext& ct, const T& to_mul) {
    Plaintext plaintext;
    this->tenseal_context()->encode<CKKSEncoder>(to_mul, plaintext,
                                                 this->_init_scale);

    this->auto_same_mod(plaintext, ct);
    try {
        this->tenseal_context()->evaluator->multiply_plain_inplace(ct,
                                                                   plaintext);
    } catch (const std::logic_error& e) {
        if (strcmp(e.what(), "result ciphertext is transparent") == 0) {
            // replace by encryption of zero
            this->tenseal_context()->encrypt_zero(ct);
            ct.scale() = this->_init_scale;
            return;
        } else {  // Something else, need to be forwarded
            throw;
        }
    }

    this->auto_rescale(ct);
}

shared_ptr<CKKSVector> CKKSVector::matmul_plain_inplace(
    const CKKSVector::plain_t& matrix) {
    if (this->_ciphertexts.size() != 1)
        throw invalid_argument("can't execute matmul_plain on chunked vectors");

    this->_ciphertexts = {this->diagonal_ct_vector_matmul(matrix)};

    this->_sizes = {matrix.shape()[1]};
    this->auto_rescale(_ciphertexts[0]);

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::polyval_inplace(
    const vector<double>& coefficients) {
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
        for (auto& ct : this->_ciphertexts) {
            this->tenseal_context()->encrypt_zero(ct);
            ct.scale() = this->_init_scale;
        }
        return shared_from_this();
    }

    // set result accumulator to the constant coefficient
    vector<double> cst_coeff(this->size(), coefficients[0]);
    auto result = CKKSVector::Create(this->tenseal_context(), cst_coeff,
                                     this->_init_scale);

    // pre-compute squares of x
    auto x = this->copy();

    int max_square = static_cast<int>(floor(log2(degree)));
    vector<shared_ptr<CKKSVector>> x_squares;
    x_squares.reserve(max_square + 1);
    x_squares.push_back(x->copy());  // x
    for (int i = 1; i <= max_square; i++) {
        x->square_inplace();
        x_squares.push_back(x->copy());  // x^(2^i)
    }

    // coefficients[1] * x + ... + coefficients[degree] * x^(degree)
    for (int i = 1; i <= degree; i++) {
        if (coefficients[i] == 0.0) continue;
        x = compute_polynomial_term(i, coefficients[i], x_squares);
        result->add_inplace(x);
    }

    this->_ciphertexts = result->ciphertext();
    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::conv2d_im2col_inplace(
    const CKKSVector::plain_t& kernel, const size_t windows_nb) {
    if (this->_ciphertexts.size() != 1)
        throw invalid_argument(
            "can't execute conv2d_im2col on chunked vectors");

    if (windows_nb == 0) {
        throw invalid_argument("Windows number can't be zero");
    }

    if (kernel.empty()) {
        throw invalid_argument("Kernel matrix can't be empty");
    }

    // flat the kernel
    auto flatten_kernel = kernel.horizontal_scan();
    this->enc_matmul_plain_inplace(flatten_kernel, windows_nb);
    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::enc_matmul_plain_inplace(
    const CKKSVector::plain_t& plain_vec, const size_t rows_nb) {
    if (plain_vec.empty()) {
        throw invalid_argument("Plain vector can't be empty");
    }

    if (this->_ciphertexts.size() != 1)
        throw invalid_argument(
            "can't execute enc_matmul_plain on chunked vectors");

    // calculate the next power of 2
    size_t plain_vec_size =
        1 << (static_cast<size_t>(ceil(log2(plain_vec.size()))));

    // pad the vector with zeros to the next power of 2
    vector<double> padded_plain_vec(plain_vec.data());
    padded_plain_vec.resize(plain_vec_size, 0);

    size_t chunks_nb = padded_plain_vec.size();

    if (this->size() / rows_nb != chunks_nb) {
        throw invalid_argument("Matrix shape doesn't match with vector size");
    }

    vector<double> new_plain_vec;
    new_plain_vec.reserve(this->size());

    for (size_t i = 0; i < chunks_nb; i++) {
        vector<double> tmp(rows_nb, padded_plain_vec[i]);
        new_plain_vec.insert(new_plain_vec.end(), tmp.begin(), tmp.end());
    }

    // replicate the vector in order to be able to do multiple matrix
    // multiplications
    size_t slot_count = this->tenseal_context()->slot_count<CKKSEncoder>();
    replicate_vector(new_plain_vec, slot_count);
    this->_sizes = {slot_count};

    this->mul_plain_inplace(new_plain_vec);

    auto galois_keys = this->tenseal_context()->galois_keys();

    auto tmp = this->copy();

    while (chunks_nb > 1) {
        tmp = this->copy();
        chunks_nb = static_cast<int>(
            1 << (static_cast<size_t>(ceil(log2(chunks_nb))) - 1));
        tmp->rotate_vector_inplace(static_cast<int>(rows_nb * chunks_nb),
                                   *galois_keys);
        this->add_inplace(tmp);
    }

    this->_sizes = {rows_nb};

    return shared_from_this();
}

shared_ptr<CKKSVector> CKKSVector::replicate_first_slot_inplace(size_t n) {
    if (this->_ciphertexts.size() != 1)
        throw invalid_argument(
            "can't execute replicate_first_slot on chunked vectors");

    // mask
    vector<double> mask(this->size(), 0);
    mask[0] = 1;
    this->mul_plain_inplace(mask);

    // replicate
    Ciphertext tmp = this->_ciphertexts[0];
    auto galois_keys = this->tenseal_context()->galois_keys();
    for (size_t i = 0; i < (size_t)ceil(log2(n)); i++) {
        this->tenseal_context()->evaluator->rotate_vector_inplace(
            tmp, static_cast<int>(-pow(2, i)), *galois_keys);
        this->tenseal_context()->evaluator->add_inplace(this->_ciphertexts[0],
                                                        tmp);
        tmp = this->_ciphertexts[0];
    }

    this->_sizes = {n};
    return shared_from_this();
}

void CKKSVector::load_proto(const CKKSVectorProto& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }

    this->_sizes = vector<size_t>();
    this->_ciphertexts = vector<Ciphertext>();

    for (auto& sz : vec.sizes()) this->_sizes.push_back(sz);
    for (auto& ct : vec.ciphertexts())
        this->_ciphertexts.push_back(SEALDeserialize<Ciphertext>(
            *this->tenseal_context()->seal_context(), ct));

    this->_init_scale = vec.scale();
}

CKKSVectorProto CKKSVector::save_proto() const {
    CKKSVectorProto buffer;

    for (auto& ct : this->_ciphertexts) {
        buffer.add_ciphertexts(SEALSerialize<Ciphertext>(ct));
    }
    for (auto& sz : this->_sizes) {
        buffer.add_sizes(sz);
    }
    buffer.set_scale(this->_init_scale);

    return buffer;
}

void CKKSVector::load(const std::string& vec) {
    if (!this->has_context()) {
        _lazy_buffer = vec;
        return;
    }

    CKKSVectorProto buffer;
    if (!buffer.ParseFromArray(vec.c_str(), static_cast<int>(vec.size()))) {
        throw invalid_argument("failed to parse CKKS stream");
    }
    this->load_proto(buffer);
}

std::string CKKSVector::save() const {
    if (_lazy_buffer) return _lazy_buffer.value();

    auto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 static_cast<int>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save CKKS proto");
    }

    return output;
}

shared_ptr<CKKSVector> CKKSVector::copy() const {
    if (_lazy_buffer)
        return shared_ptr<CKKSVector>(new CKKSVector(_lazy_buffer.value()));

    return shared_ptr<CKKSVector>(new CKKSVector(shared_from_this()));
}

shared_ptr<CKKSVector> CKKSVector::deepcopy() const {
    if (_lazy_buffer) return this->copy();

    TenSEALContextProto ctx = this->tenseal_context()->save_proto(
        /*save_public_key=*/true, /*save_secret_key=*/true,
        /*save_galois_keys=*/true, /*save_relin_keys=*/true);
    CKKSVectorProto vec = this->save_proto();
    return CKKSVector::Create(ctx, vec);
}

}  // namespace tenseal
