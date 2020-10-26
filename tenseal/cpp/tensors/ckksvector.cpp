#include "tenseal/cpp/tensors/ckksvector.h"

using namespace seal;
using namespace std;

namespace tenseal {

CKKSVector::CKKSVector(const shared_ptr<TenSEALContext>& ctx,
                       vector<double> vec, std::optional<double> scale) {
    this->link_tenseal_context(ctx);
    if (scale.has_value()) {
        this->_init_scale = scale.value();
    } else {
        this->_init_scale = ctx->global_scale();
    }

    // Encrypts the whole vector into a single ciphertext using CKKS batching
    this->_ciphertext = CKKSVector::encrypt(ctx, this->_init_scale, vec);
    this->_size = vec.size();
}

CKKSVector::CKKSVector(const shared_ptr<TenSEALContext>& ctx,
                       const string& vec) {
    this->link_tenseal_context(ctx);
    this->load(vec);
}

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

CKKSVector::CKKSVector(const shared_ptr<const EncryptedVector>& vec) {
    this->link_tenseal_context(vec->tenseal_context());
    this->_init_scale = vec->scale();
    this->_size = vec->size();
    this->_ciphertext = vec->ciphertext();
}

Ciphertext CKKSVector::encrypt(shared_ptr<TenSEALContext> context, double scale,
                               vector<double> pt) {
    if (pt.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }
    auto slot_count = context->slot_count<CKKSEncoder>();
    if (pt.size() > slot_count)
        // number of slots available is poly_modulus_degree / 2
        throw invalid_argument(
            "can't encrypt vectors of this size, please use a larger "
            "polynomial modulus degree.");

    Ciphertext ciphertext(context->seal_context());
    Plaintext plaintext;
    replicate_vector(pt, slot_count);
    context->encode<CKKSEncoder>(pt, plaintext, scale);
    context->encryptor->encrypt(plaintext, ciphertext);

    return ciphertext;
}
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

    decryptor.decrypt(this->_ciphertext, plaintext);
    this->tenseal_context()->decode<CKKSEncoder>(plaintext, result);

    // result contains all slots of ciphertext (n/2), but we may be using less
    // we use the size to delimit the resulting plaintext vector
    return vector<double>(result.cbegin(), result.cbegin() + this->size());
}

SharedCKKSVector CKKSVector::power_inplace(unsigned int power) {
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

SharedCKKSVector CKKSVector::add_plain_inplace(const vector<double>& to_add) {
    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    return this->_add_plain_inplace(to_add);
}

SharedCKKSVector CKKSVector::add_plain_inplace(double to_add) {
    return this->_add_plain_inplace(to_add);
}

template <typename T>
SharedCKKSVector CKKSVector::_add_plain_inplace(const T& to_add) {
    Plaintext plaintext;
    this->tenseal_context()->encode<CKKSEncoder>(to_add, plaintext,
                                                 this->_init_scale);

    if (should_set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                               plaintext)) {
        set_to_same_mod(this->tenseal_context(), this->_ciphertext, plaintext);
    }

    this->tenseal_context()->evaluator->add_plain_inplace(this->_ciphertext,
                                                          plaintext);

    return shared_from_this();
}

SharedCKKSVector CKKSVector::sub_plain_inplace(const vector<double>& to_sub) {
    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    return this->_sub_plain_inplace(to_sub);
}

SharedCKKSVector CKKSVector::sub_plain_inplace(double to_sub) {
    return this->_sub_plain_inplace(to_sub);
}

template <typename T>
SharedCKKSVector CKKSVector::_sub_plain_inplace(const T& to_sub) {
    Plaintext plaintext;
    this->tenseal_context()->encode<CKKSEncoder>(to_sub, plaintext,
                                                 this->_init_scale);

    if (should_set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                               plaintext)) {
        set_to_same_mod(this->tenseal_context(), this->_ciphertext, plaintext);
    }

    this->tenseal_context()->evaluator->sub_plain_inplace(this->_ciphertext,
                                                          plaintext);

    return shared_from_this();
}

SharedCKKSVector CKKSVector::mul_plain_inplace(const vector<double>& to_mul) {
    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    return this->_mul_plain_inplace(to_mul);
}

SharedCKKSVector CKKSVector::mul_plain_inplace(double to_mul) {
    return this->_mul_plain_inplace(to_mul);
}

template <typename T>
SharedCKKSVector CKKSVector::_mul_plain_inplace(const T& to_mul) {
    Plaintext plaintext;
    this->tenseal_context()->encode<CKKSEncoder>(to_mul, plaintext,
                                                 this->_init_scale);

    if (should_set_to_same_mod(this->tenseal_context(), this->_ciphertext,
                               plaintext)) {
        set_to_same_mod(this->tenseal_context(), this->_ciphertext, plaintext);
    }

    try {
        this->tenseal_context()->evaluator->multiply_plain_inplace(
            this->_ciphertext, plaintext);
    } catch (const std::logic_error& e) {
        if (strcmp(e.what(), "result ciphertext is transparent") == 0) {
            // replace by encryption of zero
            this->tenseal_context()->encryptor->encrypt_zero(this->_ciphertext);
            this->_ciphertext.scale() = this->_init_scale;
            return this->copy();
        } else {  // Something else, need to be forwarded
            throw;
        }
    }

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->_ciphertext);
        this->_ciphertext.scale() = this->_init_scale;
    }

    return this->copy();
}

SharedCKKSVector CKKSVector::matmul_plain_inplace(
    const vector<vector<double>>& matrix, size_t n_jobs) {
    this->_ciphertext = diagonal_ct_vector_matmul<double, CKKSEncoder>(
        this->tenseal_context(), this->_ciphertext, this->size(), matrix,
        n_jobs);

    this->_size = matrix[0].size();

    if (this->tenseal_context()->auto_rescale()) {
        this->tenseal_context()->evaluator->rescale_to_next_inplace(
            this->_ciphertext);
        this->_ciphertext.scale() = this->_init_scale;
    }

    return shared_from_this();
}

SharedCKKSVector CKKSVector::polyval_inplace(
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
        this->tenseal_context()->encryptor->encrypt_zero(this->_ciphertext);
        this->_ciphertext.scale() = this->_init_scale;
        return shared_from_this();
    }

    // set result accumulator to the constant coefficient
    vector<double> cst_coeff(this->size(), coefficients[0]);
    auto result = CKKSVector::Create(this->tenseal_context(), cst_coeff,
                                     this->_init_scale);

    // pre-compute squares of x
    auto x = this->copy();

    int max_square = static_cast<int>(floor(log2(degree)));
    vector<SharedCKKSVector> x_squares;
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

    this->_ciphertext = result->ciphertext();
    return shared_from_this();
}

SharedCKKSVector CKKSVector::conv2d_im2col_inplace(
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
    return shared_from_this();
}

SharedCKKSVector CKKSVector::enc_matmul_plain_inplace(
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
    size_t slot_count = this->tenseal_context()->slot_count<CKKSEncoder>();
    replicate_vector(new_plain_vec, slot_count);
    this->_size = slot_count;

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

    this->_size = rows_nb;

    return shared_from_this();
}

void CKKSVector::load_proto(const CKKSVectorProto& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->_size = vec.size();
    this->_ciphertext = SEALDeserialize<Ciphertext>(
        this->tenseal_context()->seal_context(), vec.ciphertext());
    this->_init_scale = vec.scale();
}

void CKKSVector::load_context_proto(const TenSEALContextProto& ctx) {
    this->link_tenseal_context(TenSEALContext::Create(ctx));
}

CKKSVectorProto CKKSVector::save_proto() const {
    CKKSVectorProto buffer;

    *buffer.mutable_ciphertext() = SEALSerialize<Ciphertext>(this->_ciphertext);
    buffer.set_size(static_cast<int>(this->_size));
    buffer.set_scale(this->_init_scale);

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

SharedCKKSVector CKKSVector::copy() const {
    return SharedCKKSVector(new CKKSVector(shared_from_this()));
}

SharedCKKSVector CKKSVector::deepcopy() const {
    TenSEALContextProto ctx = this->tenseal_context()->save_proto();
    CKKSVectorProto vec = this->save_proto();
    return CKKSVector::Create(ctx, vec);
}

}  // namespace tenseal
