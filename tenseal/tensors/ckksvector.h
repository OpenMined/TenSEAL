#ifndef TENSEAL_TENSOR_CKKSVECTOR_H
#define TENSEAL_TENSOR_CKKSVECTOR_H

#include <seal/seal.h>

#include <memory>
#include <optional>
#include <vector>

#include "tenseal/tensealcontext.h"
#include "tenseal/utils/utils.h"

namespace tenseal {

using namespace seal;
using namespace std;

/*
Holds a vector of real numbers in its encrypted form using the CKKS homomorphic
encryption scheme.
*/
class CKKSVector {
   public:
    CKKSVector(shared_ptr<TenSEALContext> context, vector<double> vec,
               std::optional<double> scale = {});

    CKKSVector(const CKKSVector& vec);

    /*
    Decrypts and returns the plaintext representation of the encrypted vector of
    real numbers using the secret-key.
    */
    vector<double> decrypt();
    vector<double> decrypt(const std::shared_ptr<SecretKey>& sk);

    /*
    Returns the size of the encrypted vector.
    */
    size_t size();
    size_t ciphertext_size();

    /*
    Returns an upper bound on the size of the CKKSVector, as if it was written
    to an output stream.
    */
    streamoff save_size();

    /*
    Replicate the first slot of a ciphertext n times. Requires a multiplication.
    */
    CKKSVector replicate_first_slot(size_t n);
    CKKSVector& replicate_first_slot_inplace(size_t n);

    /*
    Negates a CKKSVector.
    */
    CKKSVector negate();
    CKKSVector& negate_inplace();

    /*
    Encrypted evaluation function operates on two encrypted vectors and
    returns a new CKKSVector which is the result of either addition,
    substraction or multiplication in an element-wise fashion. in_place
    functions return a reference to the same object.
    */
    CKKSVector add(CKKSVector to_add);
    CKKSVector& add_inplace(CKKSVector to_add);
    CKKSVector sub(CKKSVector to_sub);
    CKKSVector& sub_inplace(CKKSVector to_sub);
    CKKSVector mul(CKKSVector to_mul);
    CKKSVector& mul_inplace(CKKSVector to_mul);
    CKKSVector dot_product(CKKSVector to_mul);
    CKKSVector& dot_product_inplace(CKKSVector to_mul);

    /*
    Plain evaluation function operates on an encrypted vector and plaintext
    vector of integers and returns a new CKKSVector which is the result of
    either addition, substraction or multiplication in an element-wise fashion.
    in_place functions return a reference to the same object.
    */
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

    /*
    Matrix multiplication operations.
    */
    CKKSVector matmul_plain(const vector<vector<double>>& matrix);
    CKKSVector& matmul_plain_inplace(const vector<vector<double>>& matrix);

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
};

}  // namespace tenseal

#endif
