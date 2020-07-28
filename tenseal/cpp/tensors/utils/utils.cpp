#include <memory>
#include <thread>

#include "seal/seal.h"
#include "tenseal/cpp/context/tensealcontext.h"

using namespace seal;
using namespace std;

namespace tenseal {

inline size_t below_power2(size_t n) {
    if (n == 0) throw invalid_argument("n must be absolutely positive.");
    if (n && !(n & (n - 1))) return n;

    size_t count = 0;
    while (n != 1) {
        n >>= 1;
        count += 1;
    }
    return 1 << count;
}

Ciphertext& sum_vector(shared_ptr<TenSEALContext> tenseal_context,
                       Ciphertext& vector, size_t size) {
    // Nothing to do
    if (size == 1) return vector;

    auto galois_keys = tenseal_context->galois_keys();
    Ciphertext rest, tmp;
    size_t bp2 = below_power2(size);

    if (bp2 != size) {
        tenseal_context->evaluator->rotate_vector(vector, bp2, *galois_keys,
                                                  rest);
        sum_vector(tenseal_context, rest, size - bp2);
    }

    for (size_t i = bp2 / 2; i > 0; i /= 2) {
        tenseal_context->evaluator->rotate_vector(vector, i, *galois_keys, tmp);
        tenseal_context->evaluator->add_inplace(vector, tmp);
        tmp = vector;
    }

    if (bp2 != size) {
        tenseal_context->evaluator->add_inplace(vector, rest);
    }

    return vector;
}

uint get_concurrency() {
    uint concurrency = thread::hardware_concurrency();
    if (concurrency != 0) return concurrency;
    // TODO: need to find it another way
    else
        return 1;
}

}  // namespace tenseal
