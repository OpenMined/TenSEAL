#ifndef TENSEAL_TENSOR_ENCRYPTED_TENSOR_H
#define TENSEAL_TENSOR_ENCRYPTED_TENSOR_H

#include "tenseal/cpp/context/tensealcontext.h"
#include "tenseal/cpp/tensors/plain_tensor.h"
#include "tenseal/cpp/tensors/utils/utils.h"
#include "tenseal/cpp/utils/proto.h"
#include "tenseal/cpp/utils/serialization.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * EncryptedTensor<plain_data_t, encrypted_t> interface - A
 *generic API for encrypted tensor operations.
 * @param plain_data_t: root plaintext datatype for representing data(double,
 *int64 etc).
 * @param encrypted_t: encrypted operation return type, useful for forwarding a
 *derived class as a return type.
 **/
template <typename plain_data_t, typename encrypted_t>
class EncryptedTensor {
   public:
    /**
     * Decrypts and returns the plaintext representation of the encrypted tensor
     *of real numbers using the secret-key.
     **/
    PlainTensor<plain_data_t> decrypt() const {
        if (this->tenseal_context()->decryptor == nullptr) {
            // this->context was loaded with public keys only
            throw invalid_argument(
                "the current context of the tensor doesn't hold a secret_key, "
                "please provide one as argument");
        }
        return this->decrypt(this->tenseal_context()->secret_key());
    };
    virtual PlainTensor<plain_data_t> decrypt(
        const shared_ptr<SecretKey>& sk) const = 0;

    /**
     * Negates a EncryptedTensor<plain_data_t, encrypted_t>.
     **/
    encrypted_t negate() const { return this->copy()->negate_inplace(); };
    virtual encrypted_t negate_inplace() = 0;
    /**
     * Compute the square of the EncryptedTensor<plain_data_t, encrypted_t>.
     **/
    encrypted_t square() const { return this->copy()->square_inplace(); };
    virtual encrypted_t square_inplace() = 0;
    /**
     * Compute the power of the EncryptedTensor<plain_data_t, encrypted_t> with
     *minimal multiplication depth.
     **/
    encrypted_t power(unsigned int power) const {
        return this->copy()->power_inplace(power);
    };
    virtual encrypted_t power_inplace(unsigned int power) = 0;
    /**
     * Encrypted evaluation function operates on two encrypted tensors and
     * returns a new EncryptedTensor<plain_data_t, encrypted_t>
     *which is the result of either addition, substraction or multiplication in
     *an element-wise fashion. in_place functions return a reference to the same
     *object.
     **/
    encrypted_t add(const encrypted_t& to_add) const {
        return this->copy()->add_inplace(to_add);
    };
    virtual encrypted_t add_inplace(const encrypted_t& to_add) = 0;
    encrypted_t sub(encrypted_t to_sub) const {
        return this->copy()->sub_inplace(to_sub);
    };
    virtual encrypted_t sub_inplace(const encrypted_t& to_sub) = 0;
    encrypted_t mul(encrypted_t to_mul) const {
        return this->copy()->mul_inplace(to_mul);
    };
    virtual encrypted_t mul_inplace(const encrypted_t& to_mul) = 0;
    encrypted_t dot_product(encrypted_t to_mul) const {
        return this->copy()->dot_product_inplace(to_mul);
    };
    virtual encrypted_t dot_product_inplace(const encrypted_t& to_mul) = 0;
    /**
     * Plain evaluation function operates on an encrypted tensors and plaintext
     * tensors and returns a new EncryptedTensor<plain_data_t, encrypted_t>
     *which is the result of either addition, substraction or multiplication in
     *an element-wise fashion. in_place functions return a reference to the same
     *object.
     **/
    encrypted_t add_plain(const plain_data_t& to_add) const {
        return this->copy()->add_plain_inplace(to_add);
    };
    encrypted_t add_plain(const PlainTensor<plain_data_t>& to_add) const {
        return this->copy()->add_plain_inplace(to_add);
    };
    virtual encrypted_t add_plain_inplace(const plain_data_t& to_add) = 0;
    virtual encrypted_t add_plain_inplace(
        const PlainTensor<plain_data_t>& to_add) = 0;

    encrypted_t sub_plain(const plain_data_t& to_sub) const {
        return this->copy()->sub_plain_inplace(to_sub);
    };
    encrypted_t sub_plain(const PlainTensor<plain_data_t>& to_sub) const {
        return this->copy()->sub_plain_inplace(to_sub);
    };
    virtual encrypted_t sub_plain_inplace(const plain_data_t& to_sub) = 0;
    virtual encrypted_t sub_plain_inplace(
        const PlainTensor<plain_data_t>& to_sub) = 0;

    encrypted_t mul_plain(const plain_data_t& to_mul) const {
        return this->copy()->mul_plain_inplace(to_mul);
    };
    encrypted_t mul_plain(const PlainTensor<plain_data_t>& to_mul) const {
        return this->copy()->mul_plain_inplace(to_mul);
    };
    virtual encrypted_t mul_plain_inplace(const plain_data_t& to_mul) = 0;
    virtual encrypted_t mul_plain_inplace(
        const PlainTensor<plain_data_t>& to_mul) = 0;

    encrypted_t dot_product_plain(
        const PlainTensor<plain_data_t>& to_mul) const {
        return this->copy()->dot_product_plain_inplace(to_mul);
    };
    virtual encrypted_t dot_product_plain_inplace(
        const PlainTensor<plain_data_t>& to_mul) = 0;
    encrypted_t sum() const { return this->copy()->sum_inplace(); };
    virtual encrypted_t sum_inplace() = 0;
    /**
     * Polynomial evaluation with `this` as variable.
     * p(x) = coefficients[0] + coefficients[1] * x + ... + coefficients[i] *
     *x^i
     **/
    encrypted_t polyval(const vector<double>& coefficients) const {
        return this->copy()->polyval_inplace(coefficients);
    };
    virtual encrypted_t polyval_inplace(const vector<double>& coefficients) = 0;
    /**
     * Load/Save the Tensor from/to a serialized protobuffer.
     **/
    virtual void load(const string& vec) = 0;
    virtual string save() const = 0;

    /**
     *Recreates a new EncryptedTensor<plain_data_t, encrypted_t>
     *from the current one, without any pointer/reference to this one.
     **/
    virtual encrypted_t copy() const = 0;
    virtual encrypted_t deepcopy() const = 0;
    /**
     * Get a pointer to the current TenSEAL context.
     **/
    shared_ptr<TenSEALContext> tenseal_context() const {
        if (_context == nullptr) throw invalid_argument("missing context");
        return _context;
    };

    /**
     * Link to a TenSEAL context.
     **/
    void link_tenseal_context(shared_ptr<TenSEALContext> ctx) {
        this->_context = ctx;
    };

    virtual ~EncryptedTensor(){};

   protected:
    shared_ptr<TenSEALContext> _context;

   private:
};

}  // namespace tenseal

#endif
