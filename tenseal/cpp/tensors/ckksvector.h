#ifndef TENSEAL_TENSOR_CKKSVECTOR_H
#define TENSEAL_TENSOR_CKKSVECTOR_H

#include <memory>
#include <optional>
#include <stdexcept>
#include <vector>

#include "tenseal/cpp/tensors/tensor.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * Holds a vector of real numbers in its encrypted form using the CKKS
 *homomorphic encryption scheme.
 **/
class CKKSVector : public EncryptedTensor {
   public:
    static shared_ptr<CKKSVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                         const vector<double>& vec,
                                         optional<double> scale = {});

    static shared_ptr<CKKSVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                         const string& vec);
    static shared_ptr<CKKSVector> Create(const TenSEALContextProto& ctx,
                                         const CKKSVectorProto& vec);
    static shared_ptr<CKKSVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                         const CKKSVectorProto& vec);

    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of real numbers using the secret-key.
     **/
    vector<double> decrypt() const override;
    vector<double> decrypt(const shared_ptr<SecretKey>& sk) const override;

    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const override;
    size_t ciphertext_size() const override;

    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    SharedEncryptedTensor replicate_first_slot(size_t n) const override;
    SharedEncryptedTensor replicate_first_slot_inplace(size_t n) override;

    /**
     * Negates a CKKSVector.
     **/
    SharedEncryptedTensor negate() const override;
    SharedEncryptedTensor negate_inplace() override;

    /**
     * Compute the square of the CKKSVector.
     **/
    SharedEncryptedTensor square() const override;
    SharedEncryptedTensor square_inplace() override;

    /**
     * Compute the power of the CKKSVector with minimal multiplication depth.
     **/
    SharedEncryptedTensor power(unsigned int power) const override;
    SharedEncryptedTensor power_inplace(unsigned int power) override;

    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new CKKSVector which is the result of either addition,
     * substraction or multiplication in an element-wise fashion. in_place
     * functions return a reference to the same object.
     **/
    SharedEncryptedTensor add(SharedEncryptedTensor to_add) const override;
    SharedEncryptedTensor add_inplace(SharedEncryptedTensor to_add) override;
    SharedEncryptedTensor sub(SharedEncryptedTensor to_sub) const override;
    SharedEncryptedTensor sub_inplace(SharedEncryptedTensor to_sub) override;
    SharedEncryptedTensor mul(SharedEncryptedTensor to_mul) const override;
    SharedEncryptedTensor mul_inplace(SharedEncryptedTensor to_mul) override;
    SharedEncryptedTensor dot_product(
        SharedEncryptedTensor to_mul) const override;
    SharedEncryptedTensor dot_product_inplace(
        SharedEncryptedTensor to_mul) override;

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new CKKSVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    SharedEncryptedTensor add_plain(double to_add) const override;
    SharedEncryptedTensor add_plain(
        const vector<double>& to_add) const override;
    SharedEncryptedTensor add_plain_inplace(double to_add) override;
    SharedEncryptedTensor add_plain_inplace(
        const vector<double>& to_add) override;
    SharedEncryptedTensor sub_plain(double to_sub) const override;
    SharedEncryptedTensor sub_plain(
        const vector<double>& to_sub) const override;
    SharedEncryptedTensor sub_plain_inplace(double to_sub) override;
    SharedEncryptedTensor sub_plain_inplace(
        const vector<double>& to_sub) override;
    SharedEncryptedTensor mul_plain(double to_mul) const override;
    SharedEncryptedTensor mul_plain(
        const vector<double>& to_mul) const override;
    SharedEncryptedTensor mul_plain_inplace(double to_mul) override;
    SharedEncryptedTensor mul_plain_inplace(
        const vector<double>& to_mul) override;
    SharedEncryptedTensor dot_product_plain(
        const vector<double>& to_mul) const override;
    SharedEncryptedTensor dot_product_plain_inplace(
        const vector<double>& to_mul);
    SharedEncryptedTensor sum() const override;
    SharedEncryptedTensor sum_inplace() override;

    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    SharedEncryptedTensor matmul_plain(const vector<vector<double>>& matrix,
                                       size_t n_jobs = 0) const override;
    SharedEncryptedTensor matmul_plain_inplace(
        const vector<vector<double>>& matrix, size_t n_jobs = 0) override;

    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    SharedEncryptedTensor enc_matmul_plain(const vector<double>& plain_vec,
                                           size_t row_size) override;
    SharedEncryptedTensor enc_matmul_plain_inplace(
        const vector<double>& plain_vec, size_t row_size) override;

    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    SharedEncryptedTensor polyval(
        const vector<double>& coefficients) const override;
    SharedEncryptedTensor polyval_inplace(
        const vector<double>& coefficients) override;

    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    SharedEncryptedTensor conv2d_im2col(const vector<vector<double>>& kernel,
                                        const size_t windows_nb) const override;
    SharedEncryptedTensor conv2d_im2col_inplace(
        const vector<vector<double>>& kernel, const size_t windows_nb) override;

    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const string& vec) override;
    string save() const override;

    /**
     *Recreates a new CKKSVector from the current one, without any
     *pointer/reference to this one.
     **/
    SharedEncryptedTensor copy() const override;
    SharedEncryptedTensor deepcopy() const override;
    /**
     * Get a pointer to the current TenSEAL context.
     **/
    shared_ptr<TenSEALContext> tenseal_context() const {
        if (_context == nullptr) throw invalid_argument("missing context");
        return _context;
    }
    /**
     * Link to a TenSEAL context.
     **/
    void link_tenseal_context(shared_ptr<TenSEALContext> ctx) {
        this->_context = ctx;
    }

   private:
    /*
    Private evaluation functions to process both scalar and vector arguments.
    */
    template <typename T>
    SharedEncryptedTensor _add_plain_inplace(const T& to_add);
    template <typename T>
    SharedEncryptedTensor _sub_plain_inplace(const T& to_sub);
    template <typename T>
    SharedEncryptedTensor _mul_plain_inplace(const T& to_mul);

    CKKSVector(const shared_ptr<TenSEALContext>& ctx, vector<double> vec,
               optional<double> scale = {});
    CKKSVector(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    CKKSVector(const TenSEALContextProto& ctx, const CKKSVectorProto& vec);
    CKKSVector(const shared_ptr<TenSEALContext>& ctx,
               const CKKSVectorProto& vec);
    CKKSVector(const shared_ptr<const EncryptedTensor>& vec);

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context, double scale,
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

    void load_proto(const CKKSVectorProto& buffer);
    CKKSVectorProto save_proto() const;

    void load_context_proto(const TenSEALContextProto& buffer);

    // make pack_vectors a friend function in order to be able to modify vector
    // size (_size private member)
    friend SharedEncryptedTensor
    pack_vectors<EncryptedTensor, CKKSEncoder, double>(
        const vector<SharedEncryptedTensor>&);
};

}  // namespace tenseal

#endif
