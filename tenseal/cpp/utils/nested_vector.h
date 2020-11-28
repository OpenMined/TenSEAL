#ifndef TENSEAL_UTILS_NESTED_VECTOR_H
#define TENSEAL_UTILS_NESTED_VECTOR_H

#include <type_traits>
#include <vector>

namespace tenseal {

/**
 * ref:
 * https://mklimenko.github.io/english/2019/08/17/multidimensional-vector-allocation/
 */
namespace detail {
template <typename T, std::size_t sz>
struct vector_type {
    using type = std::vector<typename vector_type<T, sz - 1>::type>;
};
template <typename T>
struct vector_type<T, 1> {
    using type = T;
};

template <typename T, std::size_t sz>
using vector_type_t = typename vector_type<T, sz>::type;
}  // namespace detail

template <typename T, const size_t dims>
struct NestedVector {
    static auto Generate() {
        using vector = std::vector<typename detail::vector_type_t<T, dims>>;
        return vector();
    }
};

};  // namespace tenseal

#endif
