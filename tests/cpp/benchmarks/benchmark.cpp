#include "benchmark/benchmark.h"

#include "tenseal/cpp/tenseal.h"

namespace tenseal {
namespace {

void BM_matmul_plain(benchmark::State& state) {
    int threads = state.range(0);

    auto ctx = TenSEALContext::Create(scheme_type::CKKS, 8192, -1,
                                      {60, 40, 40, 60}, threads);
    ctx->generate_galois_keys();
    ctx->global_scale(std::pow(2, 40));

    std::vector<double> data;
    size_t N =

        1024;

    for (size_t idx = 0; idx < N; ++idx) {
        data.push_back(idx + 1);
    }
    vector<vector<double>> matrix;
    for (size_t idx = 0; idx < N; ++idx) {
        matrix.push_back(data);
    }

    auto vec = CKKSVector::Create(ctx, data);

    for (auto _ : state) {
        auto res = vec->matmul_plain(matrix);
        ::benchmark::DoNotOptimize(res);
    }
}
// Range is for the number of inputs, and the captured argument is the false
// positive rate for 10k client queries.
BENCHMARK(BM_matmul_plain)->RangeMultiplier(2)->Iterations(3)->Range(2, 8);

}  // namespace
}  // namespace tenseal
