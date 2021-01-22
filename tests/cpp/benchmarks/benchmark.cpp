#include "benchmark/benchmark.h"

#include "tenseal/cpp/tenseal.h"

namespace tenseal {
namespace {

void BM_matmul_plain(benchmark::State& state) {
    int threads = state.range(0);

    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60},
                               encryption_type::asymmetric, threads);
    ctx->generate_galois_keys();
    ctx->global_scale(std::pow(2, 40));

    std::vector<double> data;
    size_t N = 1024;

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
BENCHMARK(BM_matmul_plain)->RangeMultiplier(2)->Range(2, 8);

void BM_ckkstensor_create(benchmark::State& state) {
    size_t input_cnt = state.range(0);

    size_t poly_mod = 8192;
    while (input_cnt > poly_mod / 2) poly_mod *= 2;
    auto ctx = TenSEALContext::Create(scheme_type::ckks, poly_mod, -1,
                                      {60, 40, 40, 60});
    ctx->global_scale(std::pow(2, 40));

    std::vector<double> data;
    for (size_t idx = 0; idx < input_cnt; ++idx) {
        data.push_back(idx + 1);
    }

    for (auto _ : state) {
        auto res = CKKSTensor::Create(ctx, data, std::pow(2, 40), true);
        ::benchmark::DoNotOptimize(res);
    }
}
BENCHMARK(BM_ckkstensor_create)->RangeMultiplier(10)->Range(10, 10000);

void BM_ckkstensor_reshape(benchmark::State& state) {
    size_t input_cnt = state.range(0);

    size_t poly_mod = 8192;
    while (input_cnt > poly_mod / 2) poly_mod *= 2;

    auto ctx = TenSEALContext::Create(scheme_type::ckks, poly_mod, -1,
                                      {60, 40, 40, 60});
    ctx->global_scale(std::pow(2, 40));

    std::vector<double> data;
    for (size_t idx = 0; idx < input_cnt; ++idx) {
        data.push_back(idx + 1);
    }

    auto t = CKKSTensor::Create(ctx, data, std::pow(2, 40), false);
    auto new_shape = input_cnt / 10;

    for (auto _ : state) {
        auto res = t->reshape({10, new_shape});
        ::benchmark::DoNotOptimize(res);
    }
}
BENCHMARK(BM_ckkstensor_reshape)->RangeMultiplier(10)->Range(10, 1000);

void BM_ckkstensor_add(benchmark::State& state) {
    size_t input_cnt = state.range(0);

    size_t poly_mod = 8192;
    while (input_cnt > poly_mod / 2) poly_mod *= 2;

    auto ctx = TenSEALContext::Create(scheme_type::ckks, poly_mod, -1,
                                      {60, 40, 40, 60});
    ctx->global_scale(std::pow(2, 40));

    std::vector<double> data;
    for (size_t idx = 0; idx < input_cnt; ++idx) {
        data.push_back(idx + 1);
    }

    auto t = CKKSTensor::Create(ctx, data, std::pow(2, 40), false);

    for (auto _ : state) {
        auto r = t->add(t);
        ::benchmark::DoNotOptimize(r);
    }
}
BENCHMARK(BM_ckkstensor_add)->RangeMultiplier(10)->Range(10, 1000);

}  // namespace
}  // namespace tenseal
