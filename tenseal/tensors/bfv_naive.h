#ifndef TENSEAL_TENSOR_BFVNAIVE
#define TENSEAL_TENSOR_BFVNAIVE

#include <seal/seal.h>

#include <memory>
#include <vector>

using namespace seal;
using namespace std;

namespace tenseal {

class BFVNaive {
   public:
    BFVNaive(shared_ptr<SEALContext> context, PublicKey pk, vector<int> vec);
    BFVNaive(shared_ptr<SEALContext> context, vector<Ciphertext> ciphertexts);

    vector<int> decrypt(SecretKey sk);
    size_t size();

    BFVNaive add(BFVNaive to_add);
    void add_inplace(BFVNaive to_add);
    
    BFVNaive add_plain(vector<int> to_add);
    void add_plain_inplace(vector<int> to_add);
    
    BFVNaive mul(BFVNaive to_mul);
    void mul_inplace(BFVNaive to_mul);
    
    BFVNaive mul_plain(vector<int> to_mul);
    void mul_plain_inplace(vector<int> to_mul);

   private:
    shared_ptr<SEALContext> context;
    vector<Ciphertext> ciphertexts;

    Ciphertext encrypt(PublicKey pk, int pt);
};

}  // namespace tenseal

#endif