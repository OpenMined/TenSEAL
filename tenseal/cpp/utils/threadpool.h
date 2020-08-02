#ifndef TENSEAL_UTILS_THREADPOOL_H
#define TENSEAL_UTILS_THREADPOOL_H

#include <cassert>
#include <functional>
#include <future>
#include <memory>
#include <thread>
#include <type_traits>
#include <vector>

#include "queue.h"

namespace tenseal {

/* Compute how many threads can run in parallel */
inline uint get_concurrency() {
    uint concurrency = thread::hardware_concurrency();

    if (concurrency != 0) return concurrency;

    return 1;
}

namespace sync {

/**
 * A ThreadPool class for managing and dispatching tasks to a number of threads.
 **/
class ThreadPool {
   public:
    /**
     * Create "n_threads" workers, each with a dedicated task queue, and execute
     * the task as they arrive in the queues.
     **/
    ThreadPool(unsigned int n_threads = get_concurrency())
        : m_queues(n_threads), m_count(n_threads) {
        assert(n_threads != 0);
        auto worker = [&](unsigned int i) {
            while (true) {
                Proc f;
                if (!m_queues[i].pop(f)) break;
                f();
            }
        };
        for (unsigned int i = 0; i < n_threads; ++i)
            m_workers.emplace_back(worker, i);
    }

    ~ThreadPool() noexcept {
        for (auto& queue : m_queues) queue.done();
        for (auto& worker : m_workers) worker.join();
    }

    /**
     * enqueue_task() assigns tasks to worker queues using round robin
     *scheduling.
     * @returns a std::future object with the result of the task.
     **/
    template <typename F, typename... Args>
    auto enqueue_task(F&& f, Args&&... args)
        -> std::future<typename std::result_of<F(Args...)>::type> {
        using return_type = typename std::result_of<F(Args...)>::type;

        auto task = std::make_shared<std::packaged_task<return_type()>>(
            std::bind(std::forward<F>(f), std::forward<Args>(args)...));
        std::future<return_type> res = task->get_future();
        auto work = [task]() { (*task)(); };

        unsigned int i = m_index++;
        m_queues[i % m_count].push(work);

        return res;
    }

   private:
    using Proc = std::function<void(void)>;

    using Queues = std::vector<blocking_queue<Proc>>;
    Queues m_queues;

    using Threads = std::vector<std::thread>;
    Threads m_workers;

    const unsigned int m_count;
    std::atomic_uint m_index = 0;
};

}  // namespace sync
}  // namespace tenseal

#endif
