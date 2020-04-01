#ifndef TENSEAL_TENSOR_BFVNAIVEVECTOR_H
#define TENSEAL_TENSOR_BFVNAIVEVECTOR_H

#include <seal/seal.h>

#include <memory>
#include <vector>

using namespace seal;
using namespace std;

namespace tenseal {

/*
Holds a vector of integers in its encrypted form using the BFV homomorphic
encryption scheme.
*/
class BFVNaiveVector {
   public:
    BFVNaiveVector(shared_ptr<SEALContext> context, PublicKey pk,
                   vector<int> vec);

    BFVNaiveVector(const BFVNaiveVector& vec);

    /*
    Decrypts and returns the plaintext representation of the encrypted vector of
    integers using the secret-key.
    */
    vector<int> decrypt(SecretKey sk);

    /*
    Returns the size of the encrypted vector.
    */
    size_t size();

    /*
    Encrypted evaluation function operates on two encrypted vectors and returns
    a new BFVNaiveVector which is the result of either addition, substraction or
    multiplication in an element-wise fashion. in_place functions return a
    reference to the same object.
    */
    BFVNaiveVector add(BFVNaiveVector to_add);
    BFVNaiveVector& add_inplace(BFVNaiveVector to_add);
    BFVNaiveVector sub(BFVNaiveVector to_sub);
    BFVNaiveVector& sub_inplace(BFVNaiveVector to_sub);
    BFVNaiveVector mul(BFVNaiveVector to_mul);
    BFVNaiveVector& mul_inplace(BFVNaiveVector to_mul);

    /*
    Plain evaluation function operates on an encrypted vector and plaintext
    vector of integers and returns a new BFVNaiveVector which is the result of
    either addition, substraction or multiplication in an element-wise fashion.
    in_place functions return a reference to the same object.
    */
    BFVNaiveVector add_plain(vector<int> to_add);
    BFVNaiveVector& add_plain_inplace(vector<int> to_add);
    BFVNaiveVector sub_plain(vector<int> to_sub);
    BFVNaiveVector& sub_plain_inplace(vector<int> to_sub);
    BFVNaiveVector mul_plain(vector<int> to_mul);
    BFVNaiveVector& mul_plain_inplace(vector<int> to_mul);

   private:
    shared_ptr<SEALContext> context;

    vector<Ciphertext> ciphertexts;

    Ciphertext encrypt(PublicKey pk, int pt);
};

}  // namespace tenseal

#endif