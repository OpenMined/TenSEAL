#ifndef TENSEAL_UTILS_QUEUE_H
#define TENSEAL_UTILS_QUEUE_H

#include <cassert>
#include <chrono>
#include <condition_variable>
#include <mutex>
#include <queue>
#include <type_traits>
#include <utility>

namespace tenseal {
namespace sync {

/**
 * Thread-safe queue.
 **/
template <class T>
class blocking_queue {
   public:
    /**
     * push() appends a new item to the queue and notifies the "pop" listener
     *about the event.
     **/
    template <class... Args>
    void push(Args&&... args) {
        {
            std::scoped_lock lock{mutex_};
            queue_.emplace(std::forward<Args>(args)...);
        }
        ready_.notify_one();
    }
    /**
     * pop() waits until an item is available in the queue, pops it out and
     *assigns it to the "out" parameter.
     **/
    [[nodiscard]] bool pop(T& out) {
        std::unique_lock lock{mutex_};
        ready_.wait(lock, [this] { return !queue_.empty() || done_; });
        if (queue_.empty()) return false;

        out = std::move(queue_.front());
        queue_.pop();

        return true;
    }
    /**
     * done() notifies all listeners to shutdown.
     **/
    void done() noexcept {
        {
            std::scoped_lock lock{mutex_};
            done_ = true;
        }
        ready_.notify_all();
    }
    /**
     * empty() returns if the queue is empty or not.
     **/
    [[nodiscard]] bool empty() const noexcept {
        std::scoped_lock lock{mutex_};
        return queue_.empty();
    }
    /**
     * size() returns the size of the queue.
     **/
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
