#ifndef TENSEAL_TENSOR_CKKSVECTOR_H
#define TENSEAL_TENSOR_CKKSVECTOR_H

#include "tenseal/cpp/tensors/vector.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

using SharedCKKSVector = shared_ptr<EncryptedVector<double>>;

/**
 * Holds a vector of real numbers in its encrypted form using the CKKS
 *homomorphic encryption scheme.
 **/
class CKKSVector : public EncryptedVector<double> {
   public:
    static SharedCKKSVector Create(const shared_ptr<TenSEALContext>& ctx,
                                   const vector<double>& vec,
                                   optional<double> scale = {});
    static SharedCKKSVector Create(const shared_ptr<TenSEALContext>& ctx,
                                   const string& vec);
    static SharedCKKSVector Create(const TenSEALContextProto& ctx,
                                   const CKKSVectorProto& vec);
    static SharedCKKSVector Create(const shared_ptr<TenSEALContext>& ctx,
                                   const CKKSVectorProto& vec);

    static shared_ptr<CKKSVector> Create(const SharedCKKSVector& vec);
    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of real numbers using the secret-key.
     **/
    vector<double> decrypt() const override;
    vector<double> decrypt(const shared_ptr<SecretKey>& sk) const override;

    /**
     * Compute the power of the CKKSVector with minimal multiplication depth.
     **/
    SharedCKKSVector power_inplace(unsigned int power) override;

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new CKKSVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    SharedCKKSVector add_plain_inplace(double to_add) override;
    SharedCKKSVector add_plain_inplace(const vector<double>& to_add) override;
    SharedCKKSVector sub_plain_inplace(double to_sub) override;
    SharedCKKSVector sub_plain_inplace(const vector<double>& to_sub) override;
    SharedCKKSVector mul_plain_inplace(double to_mul) override;
    SharedCKKSVector mul_plain_inplace(const vector<double>& to_mul) override;

    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    SharedCKKSVector matmul_plain_inplace(const vector<vector<double>>& matrix,
                                          size_t n_jobs = 0) override;

    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    SharedCKKSVector enc_matmul_plain_inplace(const vector<double>& plain_vec,
                                              size_t row_size) override;

    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    SharedCKKSVector polyval_inplace(
        const vector<double>& coefficients) override;

    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    SharedCKKSVector conv2d_im2col_inplace(const vector<vector<double>>& kernel,
                                           const size_t windows_nb) override;

    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const string& vec) override;
    string save() const override;

    /**
     *Recreates a new CKKSVector from the current one, without any
     *pointer/reference to this one.
     **/
    SharedCKKSVector copy() const override;
    SharedCKKSVector deepcopy() const override;

    double scale() const override { return _init_scale; }

   private:
    double _init_scale;
    /*
    Private evaluation functions to process both scalar and vector arguments.
    */
    template <typename T>
    SharedCKKSVector _add_plain_inplace(const T& to_add);
    template <typename T>
    SharedCKKSVector _sub_plain_inplace(const T& to_sub);
    template <typename T>
    SharedCKKSVector _mul_plain_inplace(const T& to_mul);

    CKKSVector(const shared_ptr<TenSEALContext>& ctx, vector<double> vec,
               optional<double> scale = {});
    CKKSVector(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    CKKSVector(const TenSEALContextProto& ctx, const CKKSVectorProto& vec);
    CKKSVector(const shared_ptr<TenSEALContext>& ctx,
               const CKKSVectorProto& vec);
    CKKSVector(const shared_ptr<const EncryptedVector>& vec);

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context, double scale,
                              vector<double> pt);

    void load_proto(const CKKSVectorProto& buffer);
    CKKSVectorProto save_proto() const;

    void load_context_proto(const TenSEALContextProto& buffer);

    // make pack_vectors a friend function in order to be able to modify vector
    // size (_size private member)
    friend SharedCKKSVector
    pack_vectors<EncryptedVector<double>, CKKSEncoder, double>(
        const vector<SharedCKKSVector>&);
};

}  // namespace tenseal

#endif
