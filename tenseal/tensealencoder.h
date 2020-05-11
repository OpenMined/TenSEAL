#ifndef TENSEAL_TENSEALENCODER_H
#define TENSEAL_TENSEALENCODER_H

#include <seal/seal.h>

#include <any>
#include <map>
#include <typeindex>

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
