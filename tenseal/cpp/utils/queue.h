#ifndef TENSEAL_UTILS_QUEUE_H
#define TENSEAL_UTILS_QUEUE_H

#include <atomic>
#include <cassert>
#include <chrono>
#include <condition_variable>
#include <mutex>
#include <queue>
#include <type_traits>
#include <utility>

namespace tenseal {
namespace sync {

template <class T>
class blocking_queue {
   public:
    template <class... Args>
    void push(Args&&... args) {
        {
            std::scoped_lock lock{mutex_};
            queue_.emplace(std::forward<Args>(args)...);
        }
        ready_.notify_one();
    }

    template <class... Args>
    [[nodiscard]] bool try_push(Args&&... args) {
        {
            std::unique_lock lock{mutex_, std::try_to_lock};
            if (!lock) return false;
            queue_.emplace(std::forward<Args>(args)...);
        }
        ready_.notify_one();
        return true;
    }

    [[nodiscard]] bool pop(T& out) {
        std::unique_lock lock{mutex_};
        ready_.wait(lock, [this] { return !queue_.empty() || done_; });
        if (queue_.empty()) return false;

        out = std::move(queue_.front());
        queue_.pop();

        return true;
    }

    [[nodiscard]] bool try_pop(T& out) {
        std::unique_lock lock{mutex_, std::try_to_lock};
        if (!lock || queue_.empty()) return false;

        out = std::move(queue_.front());
        queue_.pop();

        return true;
    }

    void done() noexcept {
        {
            std::scoped_lock lock{mutex_};
            done_ = true;
        }
        ready_.notify_all();
    }

    [[nodiscard]] bool empty() const noexcept {
        std::scoped_lock lock{mutex_};
        return queue_.empty();
    }

    [[nodiscard]] unsigned int size() const noexcept {
        std::scoped_lock lock{mutex_};
        return queue_.size();
    }

   private:
    std::queue<T> queue_;
    std::condition_variable ready_;
    std::mutex mutex_;
    bool done_{false};
};

}  // namespace sync
}  // namespace tenseal

#endif
