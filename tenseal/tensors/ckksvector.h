#ifndef TENSEAL_TENSOR_CKKSVECTOR_H
#define TENSEAL_TENSOR_CKKSVECTOR_H

#include <seal/seal.h>

#include <memory>
#include <vector>

using namespace seal;
using namespace std;

namespace tenseal {

/*
Holds a vector of real numbers in its encrypted form using the CKKS homomorphic
encryption scheme.
*/
class CKKSVector {
   public:
    CKKSVector(shared_ptr<SEALContext> context, PublicKey pk, double scale,
               vector<double> vec);

    CKKSVector(shared_ptr<SEALContext> context, Ciphertext ciphertext);

    /*
    Decrypts and returns the plaintext representation of the encrypted vector of
    real numbers using the secret-key.
    */
    vector<double> decrypt(SecretKey sk);

    /*
    Returns the size of the encrypted vector.
    */
    size_t size();

    /*
    Encrypted evaluation function operates on two encrypted vectors and returns
    a new CKKSVector which is the result of either addition, substraction or
    multiplication in an element-wise fashion. in_place functions return a
    reference to the same object.
    */
    CKKSVector add(CKKSVector to_add);
    CKKSVector& add_inplace(CKKSVector to_add);
    CKKSVector sub(CKKSVector to_sub);
    CKKSVector& sub_inplace(CKKSVector to_sub);
    CKKSVector mul(CKKSVector to_mul);
    CKKSVector& mul_inplace(CKKSVector to_mul);

    /*
    Plain evaluation function operates on an encrypted vector and plaintext
    vector of integers and returns a new CKKSVector which is the result of
    either addition, substraction or multiplication in an element-wise fashion.
    in_place functions return a reference to the same object.
    */
    CKKSVector add_plain(vector<double> to_add);
    CKKSVector& add_plain_inplace(vector<double> to_add);
    CKKSVector sub_plain(vector<double> to_sub);
    CKKSVector& sub_plain_inplace(vector<double> to_sub);
    CKKSVector mul_plain(vector<double> to_mul);
    CKKSVector& mul_plain_inplace(vector<double> to_mul);

   private:
    size_t _size;

    double init_scale;

    shared_ptr<SEALContext> context;

    Ciphertext ciphertext;

    Ciphertext encrypt(PublicKey pk, vector<double> pt);
};

}  // namespace tenseal

#endif