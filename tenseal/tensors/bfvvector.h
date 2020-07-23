#ifndef TENSEAL_TENSOR_BFVVECTOR_H
#define TENSEAL_TENSOR_BFVVECTOR_H

#include <seal/seal.h>

#include <memory>
#include <vector>

#include "tenseal/proto/tensors.pb.h"
#include "tenseal/tensealcontext.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * Holds a vector of integers in its encrypted form using the BFV homomorphic
 * encryption scheme.
 **/
class BFVVector {
   public:
    BFVVector(shared_ptr<TenSEALContext> ctx, vector<int64_t> vec);

    BFVVector(const BFVVector& vec);

    BFVVector(const string& ctx, const string& vec);
    BFVVector(shared_ptr<TenSEALContext> ctx, const string& vec);
    BFVVector(const TenSEALContextProto& ctx, const BFVVectorProto& vec);
    BFVVector(shared_ptr<TenSEALContext> ctx, const BFVVectorProto& vec);

    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of integers using the secret-key.
     **/
    vector<int64_t> decrypt();
    vector<int64_t> decrypt(const shared_ptr<SecretKey>& sk);

    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size();

    /**
     * Returns the size of the ciphertext.
     **/
    size_t ciphertext_size();

    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     *returns a new BFVVector which is the result of either addition,
     *substraction or multiplication in an element-wise fashion. in_place
     *functions return a reference to the same object.
     **/
    BFVVector add(BFVVector to_add);
    BFVVector& add_inplace(BFVVector to_add);
    BFVVector sub(BFVVector to_sub);
    BFVVector& sub_inplace(BFVVector to_sub);
    BFVVector mul(BFVVector to_mul);
    BFVVector& mul_inplace(BFVVector to_mul);

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new BFVVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    BFVVector add_plain(const vector<int64_t>& to_add);
    BFVVector& add_plain_inplace(const vector<int64_t>& to_add);
    BFVVector sub_plain(const vector<int64_t>& to_sub);
    BFVVector& sub_plain_inplace(const vector<int64_t>& to_sub);
    BFVVector mul_plain(const vector<int64_t>& to_mul);
    BFVVector& mul_plain_inplace(const vector<int64_t>& to_mul);
    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const std::string& vec);
    std::string save() const;
    /**
     * Load/Save the context from/to a serialized protobuffer.
     * This separate step allows us to reuse existing contexts, instead of
     *sending them with every tensor.
     **/
    void load_context(const std::string& ctx);
    std::string save_context() const;
    /**
     *Recreates a new BFVVector from the current one, without any
     *pointer/reference to this one.
     * **/
    BFVVector deepcopy() const;
    /**
     * Get a pointer to the current context.
     **/
    shared_ptr<TenSEALContext> tenseal_context() const { return context; }

   private:
    size_t _size;

    shared_ptr<TenSEALContext> context;

    Ciphertext ciphertext;

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context,
                              vector<int64_t> pt) {
        Ciphertext ciphertext(context->seal_context());
        Plaintext plaintext;
        context->encode<BatchEncoder>(pt, plaintext);
        context->encryptor->encrypt(plaintext, ciphertext);

        return ciphertext;
    }

    void load_proto(const BFVVectorProto& buffer);
    BFVVectorProto save_proto() const;

    void load_context_proto(const TenSEALContextProto& buffer);
    TenSEALContextProto save_context_proto() const;
};

}  // namespace tenseal

#endif
