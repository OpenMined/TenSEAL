#include "benchmark/benchmark.h"
#include "tenseal/cpp/tensors/ckksvector.h"

namespace tenseal {
namespace {

void BM_matmul_plain(benchmark::State& state) {
  int threads = state.range(0);

  auto ctx = TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ctx->generate_galois_keys();
    ctx->global_scale(std::pow(2, 40));

  auto vec = CKKSVector(ctx, std::vector<double>({1, 2, 3}));
  auto matrix = vector<vector<double>>{{1, 2, 3}, {1, 2, 3}, {1, 2, 3}};


  for (auto _ : state) {
      auto res = vec.matmul_plain(matrix, threads);
     ::benchmark::DoNotOptimize(res);
  }
}
// Range is for the number of inputs, and the captured argument is the false
// positive rate for 10k client queries.
BENCHMARK(BM_matmul_plain)
    ->RangeMultiplier(2)
    ->Range(1, 8);

}  // namespace
}  // namespace tenseal
