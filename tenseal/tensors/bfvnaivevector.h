#ifndef TENSEAL_TENSOR_BFVNAIVEVECTOR_H
#define TENSEAL_TENSOR_BFVNAIVEVECTOR_H

#include <seal/seal.h>

#include <memory>
#include <vector>

using namespace seal;
using namespace std;

namespace tenseal {

class BFVNaiveVector {
   public:
    BFVNaiveVector(shared_ptr<SEALContext> context, PublicKey pk, vector<int> vec);
    BFVNaiveVector(shared_ptr<SEALContext> context, vector<Ciphertext> ciphertexts);

    vector<int> decrypt(SecretKey sk);
    size_t size();

    BFVNaiveVector add(BFVNaiveVector to_add);
    BFVNaiveVector& add_inplace(BFVNaiveVector to_add);
    
    BFVNaiveVector add_plain(vector<int> to_add);
    BFVNaiveVector& add_plain_inplace(vector<int> to_add);

    BFVNaiveVector sub(BFVNaiveVector to_sub);
    BFVNaiveVector& sub_inplace(BFVNaiveVector to_sub);

    BFVNaiveVector sub_plain(vector<int> to_sub);
    BFVNaiveVector& sub_plain_inplace(vector<int> to_sub);
    
    BFVNaiveVector mul(BFVNaiveVector to_mul);
    BFVNaiveVector& mul_inplace(BFVNaiveVector to_mul);
    
    BFVNaiveVector mul_plain(vector<int> to_mul);
    BFVNaiveVector& mul_plain_inplace(vector<int> to_mul);

   private:
    shared_ptr<SEALContext> context;
    vector<Ciphertext> ciphertexts;

    Ciphertext encrypt(PublicKey pk, int pt);
};

}  // namespace tenseal

#endif