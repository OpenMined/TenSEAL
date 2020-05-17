#ifndef TENSEAL_TENSEALENCODER_H
#define TENSEAL_TENSEALENCODER_H

#include <seal/seal.h>

#include <any>
#include <map>
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
    void encode(std::vector<double>& vec, Plaintext& pt, double scale = 0) {
        if (scale == 0) scale = pow(2, 40);  // TODO: get from TenSEALContext
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

   private:
    // Can throw exception in case of invalid parameters
    template <typename T>
    std::shared_ptr<T> create() {
        const std::type_index& tidx = std::type_index(typeid(T));

        _encoders[tidx] = std::make_shared<T>(this->_context);

        return std::any_cast<std::shared_ptr<T>>(_encoders[tidx]);
    }

    std::map<std::type_index, std::any> _encoders;
    std::shared_ptr<SEALContext> _context;
};

}  // namespace tenseal
#endif
