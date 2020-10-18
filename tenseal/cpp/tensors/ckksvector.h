#ifndef TENSEAL_TENSOR_CKKSVECTOR_H
#define TENSEAL_TENSOR_CKKSVECTOR_H

#include <memory>
#include <optional>
#include <stdexcept>
#include <vector>

#include "seal/seal.h"
#include "tenseal/cpp/context/tensealcontext.h"
#include "tenseal/cpp/tensors/utils/utils.h"
#include "tenseal/proto/tensors.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * Holds a vector of real numbers in its encrypted form using the CKKS
 *homomorphic encryption scheme.
 **/
class CKKSVector : public enable_shared_from_this<CKKSVector> {
   public:
    static shared_ptr<CKKSVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                         const vector<double>& vec,
                                         optional<double> scale = {});
    static shared_ptr<CKKSVector> Create(
        const shared_ptr<const CKKSVector>& vec);
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
    vector<double> decrypt() const;
    vector<double> decrypt(const shared_ptr<SecretKey>& sk) const;

    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const;
    size_t ciphertext_size() const;

    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    shared_ptr<CKKSVector> replicate_first_slot(size_t n) const;
    shared_ptr<CKKSVector> replicate_first_slot_inplace(size_t n);

    /**
     * Negates a CKKSVector.
     **/
    shared_ptr<CKKSVector> negate() const;
    shared_ptr<CKKSVector> negate_inplace();

    /**
     * Compute the square of the CKKSVector.
     **/
    shared_ptr<CKKSVector> square() const;
    shared_ptr<CKKSVector> square_inplace();

    /**
     * Compute the power of the CKKSVector with minimal multiplication depth.
     **/
    shared_ptr<CKKSVector> power(unsigned int power) const;
    shared_ptr<CKKSVector> power_inplace(unsigned int power);

    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new CKKSVector which is the result of either addition,
     * substraction or multiplication in an element-wise fashion. in_place
     * functions return a reference to the same object.
     **/
    shared_ptr<CKKSVector> add(shared_ptr<CKKSVector> to_add) const;
    shared_ptr<CKKSVector> add_inplace(shared_ptr<CKKSVector> to_add);
    shared_ptr<CKKSVector> sub(shared_ptr<CKKSVector> to_sub) const;
    shared_ptr<CKKSVector> sub_inplace(shared_ptr<CKKSVector> to_sub);
    shared_ptr<CKKSVector> mul(shared_ptr<CKKSVector> to_mul) const;
    shared_ptr<CKKSVector> mul_inplace(shared_ptr<CKKSVector> to_mul);
    shared_ptr<CKKSVector> dot_product(shared_ptr<CKKSVector> to_mul) const;
    shared_ptr<CKKSVector> dot_product_inplace(shared_ptr<CKKSVector> to_mul);

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new CKKSVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    shared_ptr<CKKSVector> add_plain(double to_add) const;
    shared_ptr<CKKSVector> add_plain(const vector<double>& to_add) const;
    shared_ptr<CKKSVector> add_plain_inplace(double to_add);
    shared_ptr<CKKSVector> add_plain_inplace(const vector<double>& to_add);
    shared_ptr<CKKSVector> sub_plain(double to_sub) const;
    shared_ptr<CKKSVector> sub_plain(const vector<double>& to_sub) const;
    shared_ptr<CKKSVector> sub_plain_inplace(double to_sub);
    shared_ptr<CKKSVector> sub_plain_inplace(const vector<double>& to_sub);
    shared_ptr<CKKSVector> mul_plain(double to_mul) const;
    shared_ptr<CKKSVector> mul_plain(const vector<double>& to_mul) const;
    shared_ptr<CKKSVector> mul_plain_inplace(double to_mul);
    shared_ptr<CKKSVector> mul_plain_inplace(const vector<double>& to_mul);
    shared_ptr<CKKSVector> dot_product_plain(
        const vector<double>& to_mul) const;
    shared_ptr<CKKSVector> dot_product_plain_inplace(
        const vector<double>& to_mul);
    shared_ptr<CKKSVector> sum() const;
    shared_ptr<CKKSVector> sum_inplace();

    /**
     * Encrypted Vector multiplication with plain matrix.
     **/
    shared_ptr<CKKSVector> matmul_plain(const vector<vector<double>>& matrix,
                                        size_t n_jobs = 0) const;
    shared_ptr<CKKSVector> matmul_plain_inplace(
        const vector<vector<double>>& matrix, size_t n_jobs = 0);

    /**
     * Encrypted Matrix multiplication with plain vector.
     **/
    shared_ptr<CKKSVector> enc_matmul_plain(const vector<double>& plain_vec,
                                            size_t row_size);
    shared_ptr<CKKSVector> enc_matmul_plain_inplace(
        const vector<double>& plain_vec, size_t row_size);

    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    shared_ptr<CKKSVector> polyval(const vector<double>& coefficients) const;
    shared_ptr<CKKSVector> polyval_inplace(const vector<double>& coefficients);

    /*
     * Image Block to Columns.
     * The input matrix should be encoded in a vertical scan (column-major).
     * The kernel vector should be padded with zeros to the next power of 2
     */
    shared_ptr<CKKSVector> conv2d_im2col(const vector<vector<double>>& kernel,
                                         const size_t windows_nb) const;
    shared_ptr<CKKSVector> conv2d_im2col_inplace(
        const vector<vector<double>>& kernel, const size_t windows_nb);

    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const string& vec);
    string save() const;

    /**
     *Recreates a new CKKSVector from the current one, without any
     *pointer/reference to this one.
     **/
    shared_ptr<CKKSVector> deepcopy() const;
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
    shared_ptr<CKKSVector> _add_plain_inplace(const T& to_add);
    template <typename T>
    shared_ptr<CKKSVector> _sub_plain_inplace(const T& to_sub);
    template <typename T>
    shared_ptr<CKKSVector> _mul_plain_inplace(const T& to_mul);

    CKKSVector(const shared_ptr<TenSEALContext>& ctx, vector<double> vec,
               optional<double> scale = {});
    CKKSVector(const shared_ptr<const CKKSVector>& vec);
    CKKSVector(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    CKKSVector(const TenSEALContextProto& ctx, const CKKSVectorProto& vec);
    CKKSVector(const shared_ptr<TenSEALContext>& ctx,
               const CKKSVectorProto& vec);

    size_t _size;
    double _init_scale;
    shared_ptr<TenSEALContext> _context;
    Ciphertext _ciphertext;

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
    friend shared_ptr<CKKSVector> pack_vectors<CKKSVector, CKKSEncoder, double>(
        const vector<shared_ptr<CKKSVector>>&);
};

}  // namespace tenseal

#endif
