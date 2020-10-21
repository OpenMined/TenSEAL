#ifndef TENSEAL_TENSOR_BFVVECTOR_H
#define TENSEAL_TENSOR_BFVVECTOR_H

#include <memory>
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
 * Holds a vector of integers in its encrypted form using the BFV homomorphic
 * encryption scheme.
 **/
class BFVVector : public enable_shared_from_this<BFVVector> {
   public:
    static shared_ptr<BFVVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                        const vector<int64_t>& vec);
    static shared_ptr<BFVVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                        const string& vec);
    static shared_ptr<BFVVector> Create(const TenSEALContextProto& ctx,
                                        const BFVVectorProto& vec);
    static shared_ptr<BFVVector> Create(const shared_ptr<TenSEALContext>& ctx,
                                        const BFVVectorProto& vec);
    static shared_ptr<BFVVector> Create(const shared_ptr<const BFVVector>&);

    /**
     * Decrypts and returns the plaintext representation of the encrypted vector
     *of integers using the secret-key.
     **/
    vector<int64_t> decrypt() const;
    vector<int64_t> decrypt(const shared_ptr<SecretKey>& sk) const;
    /**
     * Returns the size of the encrypted vector.
     **/
    size_t size() const;

    /**
     * Returns the size of the ciphertext.
     **/
    size_t ciphertext_size() const;

    /**
     * Encrypted evaluation function operates on two encrypted vectors and
     *returns a new BFVVector which is the result of either addition,
     *substraction or multiplication in an element-wise fashion. in_place
     *functions return a reference to the same object.
     **/
    shared_ptr<BFVVector> add(shared_ptr<BFVVector> to_add) const;
    shared_ptr<BFVVector> add_inplace(shared_ptr<BFVVector> to_add);
    shared_ptr<BFVVector> sub(shared_ptr<BFVVector> to_sub) const;
    shared_ptr<BFVVector> sub_inplace(shared_ptr<BFVVector> to_sub);
    shared_ptr<BFVVector> mul(shared_ptr<BFVVector> to_mul) const;
    shared_ptr<BFVVector> mul_inplace(shared_ptr<BFVVector> to_mul);

    /**
     * Plain evaluation function operates on an encrypted vector and plaintext
     * vector of integers and returns a new BFVVector which is the result of
     * either addition, substraction or multiplication in an element-wise
     *fashion. in_place functions return a reference to the same object.
     **/
    shared_ptr<BFVVector> add_plain(const vector<int64_t>& to_add) const;
    shared_ptr<BFVVector> add_plain_inplace(const vector<int64_t>& to_add);
    shared_ptr<BFVVector> sub_plain(const vector<int64_t>& to_sub) const;
    shared_ptr<BFVVector> sub_plain_inplace(const vector<int64_t>& to_sub);
    shared_ptr<BFVVector> mul_plain(const vector<int64_t>& to_mul) const;
    shared_ptr<BFVVector> mul_plain_inplace(const vector<int64_t>& to_mul);
    /**
     * Load/Save the vector from/to a serialized protobuffer.
     **/
    void load(const string& vec);
    string save() const;
    /**
     *Recreates a new BFVVector from the current one, without any
     *pointer/reference to this one.
     * **/
    shared_ptr<BFVVector> copy() const;
    shared_ptr<BFVVector> deepcopy() const;
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
    size_t _size;
    shared_ptr<TenSEALContext> _context;
    Ciphertext _ciphertext;

    BFVVector(const shared_ptr<TenSEALContext>& ctx,
              const vector<int64_t>& vec);
    BFVVector(const shared_ptr<const BFVVector>&);
    BFVVector(const shared_ptr<TenSEALContext>& ctx, const string& vec);
    BFVVector(const TenSEALContextProto& ctx, const BFVVectorProto& vec);
    BFVVector(const shared_ptr<TenSEALContext>& ctx, const BFVVectorProto& vec);

    static Ciphertext encrypt(shared_ptr<TenSEALContext> context,
                              vector<int64_t> pt) {
        if (pt.empty()) {
            throw invalid_argument("Attempting to encrypt an empty vector");
        }
        auto slot_count = context->slot_count<BatchEncoder>();
        if (pt.size() > slot_count)
            // number of slots available is poly_modulus_degree / 2
            throw invalid_argument(
                "can't encrypt vectors of this size, please use a larger "
                "polynomial modulus degree.");

        Ciphertext ciphertext(context->seal_context());
        Plaintext plaintext;
        replicate_vector(pt, slot_count);
        context->encode<BatchEncoder>(pt, plaintext);
        context->encryptor->encrypt(plaintext, ciphertext);

        return ciphertext;
    }

    void load_proto(const BFVVectorProto& buffer);
    BFVVectorProto save_proto() const;

    void load_context_proto(const TenSEALContextProto& buffer);

    // make pack_vectors a friend function in order to be able to modify vector
    // size (_size private member)
    friend shared_ptr<BFVVector> pack_vectors<BFVVector, BatchEncoder, int64_t>(
        const vector<shared_ptr<BFVVector>>&);
};

}  // namespace tenseal

#endif
