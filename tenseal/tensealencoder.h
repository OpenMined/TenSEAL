#ifndef TENSEAL_TENSEALENCODER_H
#define TENSEAL_TENSEALENCODER_H

#include <seal/seal.h>

#include <any>
#include <map>
#include <optional>
#include <typeindex>
#include <vector>

namespace tenseal {

using namespace seal;

class TenSEALEncoder {
   public:
    TenSEALEncoder() = delete;
    TenSEALEncoder(TenSEALEncoder&) = delete;
    TenSEALEncoder(std::shared_ptr<SEALContext> context) : _context(context){};

    template <typename T>
    std::shared_ptr<T> get() {
        const std::type_index& tidx = std::type_index(typeid(T));
        if (_encoders.find(tidx) == _encoders.end()) return create<T>();

        return std::any_cast<std::shared_ptr<T>>(_encoders[tidx]);
    }

    /*
    Template encoding functions to choose between the use of
    Integer/BatchEncoder or CKKSEncoder.
    */
    template <class T>
    void encode(std::vector<int64_t>& vec, Plaintext& pt) {
        auto encoder = this->get<T>();
        encoder->encode(vec, pt);
    }

    template <class CKKSEncoder>
    void encode(std::vector<double>& vec, Plaintext& pt,
                std::optional<double> optscale = {}) {
        double scale = 1.0;
        if (optscale.has_value())
            scale = optscale.value();
        else
            scale = global_scale();

        auto encoder = this->get<CKKSEncoder>();
        encoder->encode(vec, scale, pt);
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
        if (scale < 0) throw std::invalid_argument("invalid scale value");

        this->_scale = scale;
    }
    double global_scale() {
        if (!this->_scale.has_value())
            throw std::invalid_argument("no global scale");
        return this->_scale.value();
    }

   private:
    // Can throw exception in case of invalid parameters
    template <typename T>
    std::shared_ptr<T> create() {
        const std::type_index& tidx = std::type_index(typeid(T));

        _encoders[tidx] = std::make_shared<T>(this->_context);

        return std::any_cast<std::shared_ptr<T>>(_encoders[tidx]);
    }

    /*
    Stores a map of available encoders.
    */
    std::map<std::type_index, std::any> _encoders;

    /*
    Stores a shared_pointer to the SEAL Context.
    */
    std::shared_ptr<SEALContext> _context;

    /*
    Stores a global scale used across ciphertext encrypted using CKKS.
    */
    std::optional<double> _scale;
};

}  // namespace tenseal
#endif
