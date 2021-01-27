#include "tenseal/cpp/tensors/bfvvector.h"

using namespace seal;
using namespace std;

namespace tenseal {

void BFVVector::prepare_context(const shared_ptr<TenSEALContext>& ctx) {
    this->link_tenseal_context(ctx);
    this->tenseal_context()->auto_rescale(false);
    this->tenseal_context()->auto_mod_switch(false);
}

BFVVector::BFVVector(const shared_ptr<TenSEALContext>& ctx,
                     const plain_t& vec) {
    this->prepare_context(ctx);

    if (vec.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }

    auto slot_count = ctx->slot_count<BatchEncoder>();
    auto vec_chunks = vec.chunks(slot_count);

    if (vec_chunks.size() > 1) {
        std::cout
            << "WARNING: The input does not fit in a single ciphertext, and "
               "some operations will be disabled.\n"
               "The following operations are disabled in this setup: matmul, "
               "matmul_plain, conv2d_im2col, replicate_first_slot.\n"
               "If you need to use those operations, try increasing the "
               "poly_modulus parameter, to fit your input.\n";
    }
    this->_ciphertexts = vector<Ciphertext>();
    this->_sizes = vector<size_t>();

    for (auto& chunk : vec_chunks) {
        this->_ciphertexts.push_back(BFVVector::encrypt(ctx, chunk));
        this->_sizes.push_back(chunk.size());
    }
}

BFVVector::BFVVector(const shared_ptr<TenSEALContext>& ctx, const string& vec) {
    this->prepare_context(ctx);
    this->load(vec);
}

BFVVector::BFVVector(const string& vec) { this->load(vec); }

BFVVector::BFVVector(const shared_ptr<TenSEALContext>& ctx,
                     const BFVVectorProto& vec) {
    this->prepare_context(ctx);
    this->load_proto(vec);
}

BFVVector::BFVVector(const TenSEALContextProto& ctx,
                     const BFVVectorProto& vec) {
    this->load_context_proto(ctx);
    this->load_proto(vec);
}
BFVVector::BFVVector(const shared_ptr<const BFVVector>& vec) {
    this->prepare_context(vec->tenseal_context());
    this->_sizes = vec->chunked_size();
    this->_ciphertexts = vec->ciphertext();
}

Ciphertext BFVVector::encrypt(shared_ptr<TenSEALContext> context,
                              BFVVector::plain_t pt) {
    if (pt.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }
    auto slot_count = context->slot_count<BatchEncoder>();
    if (pt.size() > slot_count)
        // number of slots available is poly_modulus_degree / 2
        throw invalid_argument(
            "can't encrypt vectors of this size, please use a larger "
            "polynomial modulus degree.");

    Ciphertext ciphertext(*context->seal_context());
    Plaintext plaintext;
    pt.replicate(slot_count);
    context->encode<BatchEncoder>(pt.data(), plaintext);
    context->encrypt(plaintext, ciphertext);

    return ciphertext;
}

BFVVector::plain_t BFVVector::decrypt(const shared_ptr<SecretKey>& sk) const {
    vector<int64_t> result;
    result.reserve(this->size());

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        vector<int64_t> partial_result;

        Plaintext plaintext;
        this->tenseal_context()->decrypt(*sk, this->_ciphertexts[idx],
                                         plaintext);
        this->tenseal_context()->decode<BatchEncoder>(plaintext,
                                                      partial_result);

        // result contains all slots of ciphertext (poly_modulus_degree)
        // we use the real vector size to delimit the resulting plaintext vector
        auto partial_decr =
            vector<int64_t>(partial_result.cbegin(),
                            partial_result.cbegin() + this->_sizes[idx]);
        result.insert(result.end(), partial_decr.begin(), partial_decr.end());
    }

    return result;
}

shared_ptr<BFVVector> BFVVector::power_inplace(unsigned int power) {
    // if the power is zero, return a new encrypted vector of ones
    if (power == 0) {
        vector<int64_t> ones(this->size(), 1);
        *this = BFVVector(this->tenseal_context(), ones);
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

shared_ptr<BFVVector> BFVVector::negate_inplace() {
    for (auto& ct : this->_ciphertexts)
        this->tenseal_context()->evaluator->negate_inplace(ct);

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::square_inplace() {
    for (auto& ct : this->_ciphertexts) {
        this->tenseal_context()->evaluator->square_inplace(ct);
        this->auto_relin(ct);
    }

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::add_inplace(
    const shared_ptr<BFVVector>& other) {
    auto to_add = other->copy();
    if (!this->tenseal_context()->equals(to_add->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't add vectors that have different contexts");
    }

    this->broadcast_or_throw(to_add);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx)
        this->tenseal_context()->evaluator->add_inplace(
            this->_ciphertexts[idx], to_add->_ciphertexts[idx]);

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::sub_inplace(
    const shared_ptr<BFVVector>& other) {
    auto to_sub = other->copy();
    if (!this->tenseal_context()->equals(to_sub->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't sub vectors that have different contexts");
    }

    this->broadcast_or_throw(to_sub);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx)
        this->tenseal_context()->evaluator->sub_inplace(
            this->_ciphertexts[idx], to_sub->_ciphertexts[idx]);

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::mul_inplace(
    const shared_ptr<BFVVector>& other) {
    auto to_mul = other->copy();
    if (!this->tenseal_context()->equals(to_mul->tenseal_context())) {
        // Different contexts means different parameters
        throw invalid_argument(
            "can't multiply vectors that have different contexts");
    }

    this->broadcast_or_throw(to_mul);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        this->tenseal_context()->evaluator->multiply_inplace(
            this->_ciphertexts[idx], to_mul->_ciphertexts[idx]);
        this->auto_relin(_ciphertexts[idx]);
    }

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::dot_inplace(
    const shared_ptr<BFVVector>& to_mul) {
    this->mul_inplace(to_mul);
    this->sum_inplace();

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::dot_plain_inplace(
    const BFVVector::plain_t& to_mul) {
    this->mul_plain_inplace(to_mul);
    this->sum_inplace();

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::sum_inplace(size_t /*axis=0*/) {
    vector<Ciphertext> interm_sum;
    // TODO use multithreading for sum
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

shared_ptr<BFVVector> BFVVector::add_plain_inplace(
    const plain_t::dtype& to_add) {
    throw std::logic_error("not implemented");
}

shared_ptr<BFVVector> BFVVector::add_plain_inplace(
    const BFVVector::plain_t& vector_to_add) {
    if (this->size() != vector_to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }
    auto slot_count = tenseal_context()->slot_count<BatchEncoder>();
    auto to_add = vector_to_add.chunks(slot_count);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        Plaintext plaintext;
        this->tenseal_context()->encode<BatchEncoder>(to_add[idx].data_ref(),
                                                      plaintext);
        this->tenseal_context()->evaluator->add_plain_inplace(
            this->_ciphertexts[idx], plaintext);
    }
    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::sub_plain_inplace(
    const plain_t::dtype& to_sub) {
    throw std::logic_error("not implemented");
}

shared_ptr<BFVVector> BFVVector::sub_plain_inplace(
    const BFVVector::plain_t& vector_to_sub) {
    if (this->size() != vector_to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    auto slot_count = tenseal_context()->slot_count<BatchEncoder>();
    auto to_sub = vector_to_sub.chunks(slot_count);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        Plaintext plaintext;

        this->tenseal_context()->encode<BatchEncoder>(to_sub[idx].data_ref(),
                                                      plaintext);
        this->tenseal_context()->evaluator->sub_plain_inplace(
            this->_ciphertexts[idx], plaintext);
    }
    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::mul_plain_inplace(
    const plain_t::dtype& to_sub) {
    throw std::logic_error("not implemented");
}

shared_ptr<BFVVector> BFVVector::mul_plain_inplace(
    const BFVVector::plain_t& vector_to_mul) {
    if (this->size() != vector_to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    auto slot_count = tenseal_context()->slot_count<BatchEncoder>();
    auto to_mul = vector_to_mul.chunks(slot_count);

    for (size_t idx = 0; idx < this->_ciphertexts.size(); ++idx) {
        Plaintext plaintext;
        this->tenseal_context()->encode<BatchEncoder>(to_mul[idx].data_ref(),
                                                      plaintext);

        try {
            this->tenseal_context()->evaluator->multiply_plain_inplace(
                this->_ciphertexts[idx], plaintext);
        } catch (const std::logic_error& e) {
            if (strcmp(e.what(), "result ciphertext is transparent") == 0) {
                // replace by encryption of zero
                this->tenseal_context()->encrypt_zero(this->_ciphertexts[idx]);
            } else {  // Something else, need to be forwarded
                throw;
            }
        }
    }

    return shared_from_this();
}

shared_ptr<BFVVector> BFVVector::matmul_plain_inplace(
    const BFVVector::plain_t& matrix) {
    throw std::logic_error("not implemented");
}

shared_ptr<BFVVector> BFVVector::polyval_inplace(
    const vector<double>& coefficients) {
    throw std::logic_error("not implemented");
}

shared_ptr<BFVVector> BFVVector::conv2d_im2col_inplace(
    const BFVVector::plain_t& kernel, const size_t windows_nb) {
    throw std::logic_error("not implemented");
}

shared_ptr<BFVVector> BFVVector::enc_matmul_plain_inplace(
    const BFVVector::plain_t& plain_vec, const size_t rows_nb) {
    throw std::logic_error("not implemented");
}

shared_ptr<BFVVector> BFVVector::replicate_first_slot_inplace(size_t n) {
    if (this->_ciphertexts.size() != 1)
        throw invalid_argument(
            "can't execute replicate_first_slot on chunked vectors");

    // mask
    vector<int64_t> mask(this->size(), 0);
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

void BFVVector::load_proto(const BFVVectorProto& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->_sizes = vector<size_t>();
    this->_ciphertexts = vector<Ciphertext>();

    for (auto& sz : vec.sizes()) this->_sizes.push_back(sz);
    for (auto& ct : vec.ciphertexts())
        this->_ciphertexts.push_back(SEALDeserialize<Ciphertext>(
            *this->tenseal_context()->seal_context(), ct));
}

BFVVectorProto BFVVector::save_proto() const {
    BFVVectorProto buffer;

    for (auto& ct : this->_ciphertexts) {
        buffer.add_ciphertexts(SEALSerialize<Ciphertext>(ct));
    }
    for (auto& sz : this->_sizes) {
        buffer.add_sizes(sz);
    }
    return buffer;
}

void BFVVector::load(const std::string& vec) {
    if (!this->has_context()) {
        _lazy_buffer = vec;
        return;
    }
    BFVVectorProto buffer;
    if (!buffer.ParseFromArray(vec.c_str(), static_cast<int>(vec.size()))) {
        throw invalid_argument("failed to parse BFV stream");
    }
    this->load_proto(buffer);
}

std::string BFVVector::save() const {
    if (_lazy_buffer) return _lazy_buffer.value();

    auto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 static_cast<int>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save proto");
    }

    return output;
}

shared_ptr<BFVVector> BFVVector::copy() const {
    if (_lazy_buffer)
        return shared_ptr<BFVVector>(new BFVVector(_lazy_buffer.value()));

    return shared_ptr<BFVVector>(new BFVVector(shared_from_this()));
}

shared_ptr<BFVVector> BFVVector::deepcopy() const {
    if (_lazy_buffer) return this->copy();

    TenSEALContextProto ctx = this->tenseal_context()->save_proto(
        /*save_public_key=*/true, /*save_secret_key=*/true,
        /*save_galois_keys=*/true, /*save_relin_keys=*/true);
    BFVVectorProto vec = this->save_proto();
    return BFVVector::Create(ctx, vec);
}
}  // namespace tenseal
