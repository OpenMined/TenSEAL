#ifndef TENSEAL_UTILS_HELPERS_H
#define TENSEAL_UTILS_HELPERS_H

namespace tenseal {

template <typename E>
constexpr typename std::underlying_type<E>::type to_underlying(E e) noexcept {
    return static_cast<typename std::underlying_type<E>::type>(e);
}
}  // namespace tenseal
#endif
