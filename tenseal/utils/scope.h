#ifndef TENSEAL_UTILS_SCOPE_H
#define TENSEAL_UTILS_SCOPE_H

#include <functional>

namespace tenseal {

class scope_guard {
   public:
    template <class Callable>
    scope_guard(Callable&& undo_func) try
        : f(std::forward<Callable>(undo_func)) {
    } catch (...) {
        undo_func();
        throw;
    }

    scope_guard(scope_guard&& other) : f(std::move(other.f)) {
        other.f = nullptr;
    }

    ~scope_guard() {
        if (f) f();  // must not throw
    }

    void dismiss() noexcept { f = nullptr; }

    scope_guard(const scope_guard&) = delete;
    void operator=(const scope_guard&) = delete;

   private:
    std::function<void()> f;
};
}  // namespace tenseal
#endif
