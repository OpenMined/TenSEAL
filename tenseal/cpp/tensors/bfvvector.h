#ifndef TENSEAL_TENSOR_BFVVECTOR_H
#define TENSEAL_TENSOR_BFVVECTOR_H

#include "tenseal/cpp/tensors/tensor.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * Holds a vector of integers in its encrypted form using the BFV homomorphic
 * encryption scheme.
 **/
class BFVVector : public EncryptedTensor {
   public:
    static shared_ptr<BFVVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                        const vector<double>& vec);
    static shared_ptr<BFVVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                        const string& vec);
    static shared_ptr<BFVVector> Create(const TenSEALContextProto& ctx,
                                        const BFVVectorProto& vec);
    static shared_ptr<BFVVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                        const BFVVectorProto& vec);
    static shared_ptr<BFVVector> Create(const shared_ptr<const BFVVector>&);

    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of integers using the secret-key.
     **/
    vector<double> decrypt() const override;
    vector<double> decrypt(const shared_ptr<SecretKey>& sk) const override;
    /**
     * Compute the power of the BFVVector with minimal multiplication depth.
     **/
    SharedEncryptedTensor power_inplace(unsigned int power) override;
    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new BFVVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    SharedEncryptedTensor add_plain_inplace(double to_add) override;
    SharedEncryptedTensor add_plain_inplace(
        const vector<double>& to_add) override;
    SharedEncryptedTensor sub_plain_inplace(double to_sub) override;
    SharedEncryptedTensor sub_plain_inplace(
        const vector<double>& to_sub) override;
    SharedEncryptedTensor mul_plain_inplace(double to_mul) override;
    SharedEncryptedTensor mul_plain_inplace(
        const vector<double>& to_mul) override;
    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    SharedEncryptedTensor matmul_plain_inplace(
        const vector<vector<double>>& matrix, size_t n_jobs = 0) override;

    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    SharedEncryptedTensor enc_matmul_plain_inplace(
        const vector<double>& plain_vec, size_t row_size) override;

    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    SharedEncryptedTensor polyval_inplace(
        const vector<double>& coefficients) override;

    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    SharedEncryptedTensor conv2d_im2col_inplace(
        const vector<vector<double>>& kernel, const size_t windows_nb) override;

    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const string& vec) override;
    string save() const override;
    /**
     *Recreates a new BFVVector from the current one, without any
     *pointer/reference to this one.
     * **/
    SharedEncryptedTensor copy() const override;
    SharedEncryptedTensor deepcopy() const override;

   private:
    BFVVector(const shared_ptr<TenSEALContext>& ctx, const vector<double>& vec);
    BFVVector(const shared_ptr<const BFVVector>&);
    BFVVector(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    BFVVector(const TenSEALContextProto& ctx, const BFVVectorProto& vec);
    BFVVector(const shared_ptr<TenSEALContext>& ctx, const BFVVectorProto& vec);
    BFVVector(const shared_ptr<const EncryptedTensor>& vec);

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context,
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

    void load_proto(const BFVVectorProto& buffer);
    BFVVectorProto save_proto() const;

    void load_context_proto(const TenSEALContextProto& buffer);

    // make pack_vectors a friend function in order to be able to modify vector
    // size (_size private member)
    friend SharedEncryptedTensor
    pack_vectors<EncryptedTensor, BatchEncoder, double>(
        const vector<SharedEncryptedTensor>&);
};

}  // namespace tenseal

#endif
