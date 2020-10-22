#include "tenseal/cpp/tensors/bfvvector.h"

#include <memory>
#include <vector>

#include "seal/seal.h"
#include "tenseal/cpp/context/tensealcontext.h"
#include "tenseal/cpp/utils/proto.h"
#include "tenseal/cpp/utils/serialization.h"

using namespace seal;
using namespace std;

namespace tenseal {

shared_ptr<BFVVector> BFVVector::Create(const shared_ptr<TenSEALContext>& ctx,
                                        const vector<double>& vec) {
    return shared_ptr<BFVVector>(new BFVVector(ctx, vec));
}

shared_ptr<BFVVector> BFVVector::Create(const shared_ptr<TenSEALContext>& ctx,
                                        const string& vec) {
    return shared_ptr<BFVVector>(new BFVVector(ctx, vec));
}
shared_ptr<BFVVector> BFVVector::Create(const TenSEALContextProto& ctx,
                                        const BFVVectorProto& vec) {
    return shared_ptr<BFVVector>(new BFVVector(ctx, vec));
}
shared_ptr<BFVVector> BFVVector::Create(const shared_ptr<TenSEALContext>& ctx,
                                        const BFVVectorProto& vec) {
    return shared_ptr<BFVVector>(new BFVVector(ctx, vec));
}

shared_ptr<BFVVector> BFVVector::Create(
    const shared_ptr<const EncryptedVector>& other) {
    return shared_ptr<BFVVector>(new BFVVector(other));
}

void BFVVector::prepare_context(const shared_ptr<TenSEALContext>& ctx) {
    this->link_tenseal_context(ctx);
    this->tenseal_context()->auto_rescale(false);
    this->tenseal_context()->auto_mod_switch(false);
}

BFVVector::BFVVector(const shared_ptr<TenSEALContext>& ctx,
                     const vector<double>& vec) {
    this->prepare_context(ctx);
    // Encrypts the whole vector into a single ciphertext using BFV batching
    this->_ciphertext = BFVVector::encrypt(ctx, vec);
    this->_size = vec.size();
}

BFVVector::BFVVector(const shared_ptr<const EncryptedVector>& vec) {
    this->prepare_context(vec->tenseal_context());
    this->_size = vec->size();
    this->_ciphertext = vec->ciphertext();
}

BFVVector::BFVVector(const shared_ptr<TenSEALContext>& ctx, const string& vec) {
    this->prepare_context(ctx);
    this->load(vec);
}

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

Ciphertext BFVVector::encrypt(shared_ptr<TenSEALContext> context,
                              vector<double> input) {
    vector<int64_t> pt(input.begin(), input.end());
    if (pt.empty()) {
        throw invalid_argument("Attempting to encrypt an empty vector");
    }
    auto slot_count = context->slot_count<BatchEncoder>();
    if (pt.size() > slot_count)
        // number of slots available is poly_modulus_degree / 2
        throw invalid_argument(
            "can't encrypt vectors of this size, please use a larger "
            "polynomial modulus degree.");

    Ciphertext ciphertext(context->seal_context());
    Plaintext plaintext;
    replicate_vector(pt, slot_count);
    context->encode<BatchEncoder>(pt, plaintext);
    context->encryptor->encrypt(plaintext, ciphertext);

    return ciphertext;
}

vector<double> BFVVector::decrypt() const {
    if (this->tenseal_context()->decryptor == NULL) {
        // this->context was loaded with public keys only
        throw invalid_argument(
            "the current context of the vector doesn't hold a secret_key, "
            "please provide one as argument");
    }

    return this->decrypt(this->tenseal_context()->secret_key());
}
vector<double> BFVVector::decrypt(const shared_ptr<SecretKey>& sk) const {
    Plaintext plaintext;
    Decryptor decryptor =
        Decryptor(this->tenseal_context()->seal_context(), *sk);

    vector<int64_t> result;

    decryptor.decrypt(this->_ciphertext, plaintext);
    this->tenseal_context()->decode<BatchEncoder>(plaintext, result);

    // result contains all slots of ciphertext (poly_modulus_degree)
    // we use the real vector size to delimit the resulting plaintext vector
    vector<double> real_result(result.cbegin(), result.cbegin() + this->size());
    return real_result;
}

SharedEncryptedVector BFVVector::power_inplace(unsigned int power) {
    // if the power is zero, return a new encrypted vector of ones
    if (power == 0) {
        vector<double> ones(this->size(), 1);
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

SharedEncryptedVector BFVVector::add_plain_inplace(double to_add) {
    throw std::logic_error("not implemented");
}

SharedEncryptedVector BFVVector::add_plain_inplace(
    const vector<double>& to_add) {
    if (this->size() != to_add.size()) {
        throw invalid_argument("can't add vectors of different sizes");
    }

    Plaintext plaintext;

    vector<int64_t> to_add_input(to_add.begin(), to_add.end());
    this->tenseal_context()->encode<BatchEncoder>(to_add_input, plaintext);
    this->tenseal_context()->evaluator->add_plain_inplace(this->_ciphertext,
                                                          plaintext);

    return shared_from_this();
}

SharedEncryptedVector BFVVector::sub_plain_inplace(double to_sub) {
    throw std::logic_error("not implemented");
}

SharedEncryptedVector BFVVector::sub_plain_inplace(
    const vector<double>& to_sub) {
    if (this->size() != to_sub.size()) {
        throw invalid_argument("can't sub vectors of different sizes");
    }

    Plaintext plaintext;

    vector<int64_t> to_sub_input(to_sub.begin(), to_sub.end());
    this->tenseal_context()->encode<BatchEncoder>(to_sub_input, plaintext);
    this->tenseal_context()->evaluator->sub_plain_inplace(this->_ciphertext,
                                                          plaintext);

    return shared_from_this();
}

SharedEncryptedVector BFVVector::mul_plain_inplace(double to_sub) {
    throw std::logic_error("not implemented");
}

SharedEncryptedVector BFVVector::mul_plain_inplace(
    const vector<double>& to_mul) {
    if (this->size() != to_mul.size()) {
        throw invalid_argument("can't multiply vectors of different sizes");
    }

    Plaintext plaintext;
    vector<int64_t> to_mul_input(to_mul.begin(), to_mul.end());
    this->tenseal_context()->encode<BatchEncoder>(to_mul_input, plaintext);

    try {
        this->tenseal_context()->evaluator->multiply_plain_inplace(
            this->_ciphertext, plaintext);
    } catch (const std::logic_error& e) {
        if (strcmp(e.what(), "result ciphertext is transparent") == 0) {
            // replace by encryption of zero
            this->tenseal_context()->encryptor->encrypt_zero(this->_ciphertext);
        } else {  // Something else, need to be forwarded
            throw;
        }
    }

    return shared_from_this();
}

SharedEncryptedVector BFVVector::matmul_plain_inplace(
    const vector<vector<double>>& matrix, size_t n_jobs) {
    throw std::logic_error("not implemented");
}

SharedEncryptedVector BFVVector::polyval_inplace(
    const vector<double>& coefficients) {
    throw std::logic_error("not implemented");
}

SharedEncryptedVector BFVVector::conv2d_im2col_inplace(
    const vector<vector<double>>& kernel, const size_t windows_nb) {
    throw std::logic_error("not implemented");
}

SharedEncryptedVector BFVVector::enc_matmul_plain_inplace(
    const vector<double>& plain_vec, const size_t rows_nb) {
    throw std::logic_error("not implemented");
}

void BFVVector::load_proto(const BFVVectorProto& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    this->_size = vec.size();
    this->_ciphertext = SEALDeserialize<Ciphertext>(
        this->tenseal_context()->seal_context(), vec.ciphertext());
}

void BFVVector::load_context_proto(const TenSEALContextProto& ctx) {
    this->link_tenseal_context(TenSEALContext::Create(ctx));
}

BFVVectorProto BFVVector::save_proto() const {
    BFVVectorProto buffer;

    *buffer.mutable_ciphertext() = SEALSerialize<Ciphertext>(this->_ciphertext);
    buffer.set_size(static_cast<int>(this->_size));

    return buffer;
}

void BFVVector::load(const std::string& vec) {
    if (this->tenseal_context() == nullptr) {
        throw invalid_argument("context missing for deserialization");
    }
    BFVVectorProto buffer;
    if (!buffer.ParseFromArray(vec.c_str(), static_cast<int>(vec.size()))) {
        throw invalid_argument("failed to parse BFV stream");
    }
    this->load_proto(buffer);
}

std::string BFVVector::save() const {
    auto buffer = this->save_proto();
    std::string output;
    output.resize(proto_bytes_size(buffer));

    if (!buffer.SerializeToArray((void*)output.c_str(),
                                 static_cast<int>(proto_bytes_size(buffer)))) {
        throw invalid_argument("failed to save proto");
    }

    return output;
}

SharedEncryptedVector BFVVector::copy() const {
    return shared_ptr<BFVVector>(new BFVVector(shared_from_this()));
}

SharedEncryptedVector BFVVector::deepcopy() const {
    TenSEALContextProto ctx = this->tenseal_context()->save_proto();
    BFVVectorProto vec = this->save_proto();
    return BFVVector::Create(ctx, vec);
}
}  // namespace tenseal
