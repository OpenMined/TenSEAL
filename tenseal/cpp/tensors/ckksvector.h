#ifndef TENSEAL_TENSOR_CKKSVECTOR_H
#define TENSEAL_TENSOR_CKKSVECTOR_H

#include <memory>
#include <optional>
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
class CKKSVector {
   public:
    CKKSVector(shared_ptr<TenSEALContext> ctx, vector<double> vec,
               std::optional<double> scale = {});

    CKKSVector(const CKKSVector& vec);

    CKKSVector(shared_ptr<TenSEALContext> ctx, const string& vec);
    CKKSVector(const TenSEALContextProto& ctx, const CKKSVectorProto& vec);
    CKKSVector(shared_ptr<TenSEALContext> ctx, const CKKSVectorProto& vec);

    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of real numbers using the secret-key.
     **/
    vector<double> decrypt();
    vector<double> decrypt(const std::shared_ptr<SecretKey>& sk);

    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const;
    size_t ciphertext_size() const;

    /**
     * Replicate the first slot of a ciphertext n times. Requires a
     *multiplication.
     **/
    CKKSVector replicate_first_slot(size_t n);
    CKKSVector& replicate_first_slot_inplace(size_t n);

    /**
     * Negates a CKKSVector.
     **/
    CKKSVector negate();
    CKKSVector& negate_inplace();

    /**
     * Compute the square of the CKKSVector.
     **/
    CKKSVector square();
    CKKSVector& square_inplace();

    /**
     * Compute the power of the CKKSVector with minimal multiplication depth.
     **/
    CKKSVector power(unsigned int power);
    CKKSVector& power_inplace(unsigned int power);

    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     * returns a new CKKSVector which is the result of either addition,
     * substraction or multiplication in an element-wise fashion. in_place
     * functions return a reference to the same object.
     **/
    CKKSVector add(CKKSVector to_add);
    CKKSVector& add_inplace(CKKSVector to_add);
    CKKSVector sub(CKKSVector to_sub);
    CKKSVector& sub_inplace(CKKSVector to_sub);
    CKKSVector mul(CKKSVector to_mul);
    CKKSVector& mul_inplace(CKKSVector to_mul);
    CKKSVector dot_product(CKKSVector to_mul);
    CKKSVector& dot_product_inplace(CKKSVector to_mul);

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new CKKSVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    CKKSVector add_plain(double to_add);
    CKKSVector add_plain(const vector<double>& to_add);
    CKKSVector& add_plain_inplace(double to_add);
    CKKSVector& add_plain_inplace(const vector<double>& to_add);
    CKKSVector sub_plain(double to_sub);
    CKKSVector sub_plain(const vector<double>& to_sub);
    CKKSVector& sub_plain_inplace(double to_sub);
    CKKSVector& sub_plain_inplace(const vector<double>& to_sub);
    CKKSVector mul_plain(double to_mul);
    CKKSVector mul_plain(const vector<double>& to_mul);
    CKKSVector& mul_plain_inplace(double to_mul);
    CKKSVector& mul_plain_inplace(const vector<double>& to_mul);
    CKKSVector dot_product_plain(const vector<double>& to_mul);
    CKKSVector& dot_product_plain_inplace(const vector<double>& to_mul);
    CKKSVector sum();
    CKKSVector& sum_inplace();

    /**
     * Matrix multiplication operations.
     **/
    CKKSVector matmul_plain(const vector<vector<double>>& matrix,
                            size_t n_jobs = 0);
    CKKSVector& matmul_plain_inplace(const vector<vector<double>>& matrix,
                                     size_t n_jobs = 0);

    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    CKKSVector polyval(const vector<double>& coefficients);
    CKKSVector& polyval_inplace(const vector<double>& coefficients);

    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const std::string& vec);
    std::string save() const;

    /**
     *Recreates a new CKKSVector from the current one, without any
     *pointer/reference to this one.
     **/
    CKKSVector deepcopy() const;
    /**
     * Get a pointer to the current TenSEAL context.
     **/
    shared_ptr<TenSEALContext> tenseal_context() const {
        if (context == nullptr) throw invalid_argument("missing context");
        return context;
    }
    /**
     * Link to a TenSEAL context.
     **/
    void link_tenseal_context(shared_ptr<TenSEALContext> ctx) {
        this->context = ctx;
    }

   private:
    /*
    Private evaluation functions to process both scalar and vector arguments.
    */
    template <typename T>
    CKKSVector& _add_plain_inplace(const T& to_add);
    template <typename T>
    CKKSVector& _sub_plain_inplace(const T& to_sub);
    template <typename T>
    CKKSVector& _mul_plain_inplace(const T& to_mul);

    size_t _size;
    double init_scale;
    shared_ptr<TenSEALContext> context;
    Ciphertext ciphertext;

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context, double scale,
                              vector<double> pt) {
        auto slot_count = context->slot_count<CKKSEncoder>();
        if (pt.size() > slot_count)
            // number of slots available is poly_modulus_degree / 2
            throw invalid_argument(
                "can't encrypt vectors of this size, please use a larger "
                "polynomial modulus degree.");

        Ciphertext ciphertext(context->seal_context());
        Plaintext plaintext;
        // TODO: get rid of this after fixing # 46
        if (pt.size() != 0) replicate_vector(pt, slot_count);
        context->encode<CKKSEncoder>(pt, plaintext, scale);
        context->encryptor->encrypt(plaintext, ciphertext);

        return ciphertext;
    }

    void load_proto(const CKKSVectorProto& buffer);
    CKKSVectorProto save_proto() const;

    void load_context_proto(const TenSEALContextProto& buffer);
};

}  // namespace tenseal

#endif
