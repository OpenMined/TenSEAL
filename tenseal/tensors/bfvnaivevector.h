#ifndef TENSEAL_TENSOR_BFVNAIVEVECTOR_H
#define TENSEAL_TENSOR_BFVNAIVEVECTOR_H

#include <seal/seal.h>

#include <memory>
#include <vector>

#include "../tensealcontext.h"

using namespace seal;
using namespace std;

namespace tenseal {

/*
Holds a vector of integers in its encrypted form using the BFV homomorphic
encryption scheme.
*/
class BFVNaiveVector {
   public:
    BFVNaiveVector(shared_ptr<TenSEALContext> context, vector<int> vec);

    BFVNaiveVector(const BFVNaiveVector& vec);

    /*
    Decrypts and returns the plaintext representation of the encrypted vector of
    integers using the secret-key.
    */
    vector<int> decrypt();
    vector<int> decrypt(SecretKey sk);

    /*
    Returns the size of the encrypted vector.
    */
    size_t size();

    /*
    Returns an upper bound on the size of the CKKSVector, as if it was written
    to an output stream.
    */
    streamoff save_size();

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
    shared_ptr<TenSEALContext> context;

    vector<Ciphertext> ciphertexts;

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context, int pt) {
        IntegerEncoder encoder(context->seal_context());
        Ciphertext ciphertext(context->seal_context());
        Plaintext plaintext = encoder.encode(pt);
        context->encryptor->encrypt(plaintext, ciphertext);

        return ciphertext;
    }
};

}  // namespace tenseal

#endif