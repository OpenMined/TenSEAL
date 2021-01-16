#ifndef TENSEAL_UTILS_HELPERS_H
#define TENSEAL_UTILS_HELPERS_H

#include <algorithm>
#include <iterator>
#include <vector>

namespace tenseal {

template <typename E>
constexpr typename std::underlying_type<E>::type to_underlying(E e) noexcept {
    return static_cast<typename std::underlying_type<E>::type>(e);
}

template <typename Vector>
auto split_vector(const Vector& v, unsigned number_lines) {
    using Iterator = typename Vector::const_iterator;
    std::vector<Vector> rtn;
    Iterator it = v.cbegin();
    const Iterator end = v.cend();

    while (it != end) {
        Vector v;
        std::back_insert_iterator<Vector> inserter(v);
        const auto num_to_copy = std::min(
            static_cast<unsigned>(std::distance(it, end)), number_lines);
        std::copy(it, it + num_to_copy, inserter);
        rtn.push_back(std::move(v));
        std::advance(it, num_to_copy);
    }

    return rtn;
}

}  // namespace tenseal
#endif
