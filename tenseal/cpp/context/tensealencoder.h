#ifndef TENSEAL_CONTEXT_TENSEALENCODER_H
#define TENSEAL_CONTEXT_TENSEALENCODER_H

#include <any>
#include <map>
#include <optional>
#include <shared_mutex>
#include <typeindex>
#include <vector>

#include "gsl/span"
#include "seal/seal.h"

namespace tenseal {

using namespace seal;
using namespace std;

class TenSEALEncoder {
   public:
    TenSEALEncoder() = delete;
    TenSEALEncoder(TenSEALEncoder&) = delete;
    TenSEALEncoder(const shared_ptr<SEALContext>& context)
        : _context(context){};

    template <typename T>
    shared_ptr<T> get() {
        const type_index& tidx = type_index(typeid(T));

        if (!has_encoder(tidx)) return create_encoder<T>();

        return get_encoder<T>(tidx);
    }

    double unwrap_scale(optional<double> optscale = {}) {
        double scale = 1.0;
        if (optscale.has_value())
            scale = optscale.value();
        else
            scale = global_scale();
        return scale;
    }
    /*
    Template encoding functions to choose between the use of
    Integer/BatchEncoder or CKKSEncoder.
    */
    template <class T>
    void encode(const gsl::span<const int64_t>& vec, Plaintext& pt) {
        auto encoder = this->get<T>();
        encoder->encode(vec, pt);
    }
    template <class T>
    void encode(const vector<int64_t>& vec, Plaintext& pt) {
        auto encoder = this->get<T>();
        encoder->encode(vec, pt);
    }
    // encode a single int64_t value using BatchEncoder
    // BatchEncoder doesn't support single value encoding
    // we have to create a vector of repeated values then encode it
    template <class T>
    void encode(int64_t value, Plaintext& pt) {
        auto encoder = this->get<T>();
        size_t slot_count = encoder->slot_count();
        vector<int64_t> vec(slot_count, value);
        encoder->encode(vec, pt);
    }

    template <class CKKSEncoder>
    void encode(const gsl::span<const double>& vec, Plaintext& pt,
                optional<double> optscale = {}) {
        auto encoder = this->get<CKKSEncoder>();
        encoder->encode(vec, unwrap_scale(optscale), pt);
    }
    template <class CKKSEncoder>
    void encode(const vector<double>& vec, Plaintext& pt,
                optional<double> optscale = {}) {
        auto encoder = this->get<CKKSEncoder>();
        encoder->encode(vec, unwrap_scale(optscale), pt);
    }

    template <class CKKSEncoder>
    void encode(double value, Plaintext& pt, optional<double> optscale = {}) {
        auto encoder = this->get<CKKSEncoder>();
        encoder->encode(value, unwrap_scale(optscale), pt);
    }

    /*
    Template decoding functions Integer/BatchEncoder/CKKSEncoder.
    */
    template <class T, class R>
    void decode(const Plaintext& pt, R& result) {
        auto encoder = this->get<T>();
        encoder->decode(pt, result);
    }

    /*
    Template for slot count.
    */
    template <class T>
    size_t slot_count() {
        auto encoder = this->get<T>();
        return encoder->slot_count();
    }

    // TODO: check set scale if possible with current primes used and warn the
    // user if it doesn't.
    // Example: if using coeff_mod_bit_size of [60,40,40,60],
    // the global scale should be set for 2**40
    void global_scale(double scale) {
        if (scale < 0) throw invalid_argument("invalid scale value");

        this->_scale = scale;
    }
    double global_scale() {
        if (!this->_scale.has_value())
            throw invalid_argument("no global scale");
        return this->_scale.value();
    }

   private:
    // Can throw exception in case of invalid parameters
    template <typename T>
    shared_ptr<T> create_encoder() {
        std::unique_lock lock(mutex_);

        const type_index& tidx = type_index(typeid(T));

        _encoders[tidx] = make_shared<T>(*this->_context);

        return any_cast<shared_ptr<T>>(_encoders[tidx]);
    }

    bool has_encoder(const type_index& tidx) {
        std::shared_lock lock(mutex_);

        return _encoders.find(tidx) != _encoders.end();
    }

    template <typename T>
    shared_ptr<T> get_encoder(const type_index& tidx) {
        std::shared_lock lock(mutex_);

        return any_cast<shared_ptr<T>>(_encoders[tidx]);
    }

    /*
    Stores a map of available encoders.
    */
    map<type_index, any> _encoders;

    /*
    Stores a shared_pointer to the SEAL Context.
    */
    shared_ptr<SEALContext> _context;

    /*
    Stores a global scale used across ciphertext encrypted using CKKS.
    */
    optional<double> _scale;
    /*
    Read/write lock
    */
    std::shared_mutex mutex_;
};

}  // namespace tenseal
#endif
