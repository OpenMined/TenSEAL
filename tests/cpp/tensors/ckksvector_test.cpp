#include "gmock/gmock.h"
#include "gtest/gtest.h"
#include "tenseal/cpp/tenseal.h"

namespace tenseal {
namespace {

using namespace ::testing;
using namespace std;

template <class Iterable>
bool are_close(const Iterable& l, const std::vector<int64_t>& r) {
    if (l.size() != r.size()) {
        return false;
    }
    for (size_t idx = 0; idx < l.size(); ++idx) {
        if (std::abs(l[idx] - r[idx]) > 0.5) return false;
    }
    return true;
}

auto duplicate(shared_ptr<CKKSVector> in) {
    auto vec = in->save();

    return CKKSVector::Create(in->tenseal_context(), vec);
}

class CKKSVectorTest
    : public TestWithParam<tuple</*serialize_first=*/bool,
                                 /*encryption_type=*/encryption_type>> {
   protected:
    void SetUp() {}
};
TEST_P(CKKSVectorTest, TestCreateCKKS) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSVector::Create(ctx, std::vector<double>{1, 2, 3}, 1);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->ciphertext_size(), 2);
}

TEST_P(CKKSVectorTest, TestCreateCKKSFail) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(
        auto l = CKKSVector::Create(ctx, std::vector<double>({1, 2, 3})),
        std::exception);
}

TEST_P(CKKSVectorTest, TestCKKSAdd) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(false);
    ctx->auto_rescale(false);
    ctx->auto_mod_switch(false);

    auto l = CKKSVector::Create(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector::Create(ctx, std::vector<double>({3, 4, 4}));

    auto add = l->add(r);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(add->ciphertext_size(), 2);

    auto decr = add->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {4, 6, 7}));

    l->add_inplace(r);
    l->add_inplace(r);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->ciphertext_size(), 2);
    decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {7, 10, 11}));
}

TEST_P(CKKSVectorTest, TestCKKSMul) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(true);
    ctx->auto_rescale(true);
    ctx->auto_mod_switch(true);

    auto l = CKKSVector::Create(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector::Create(ctx, std::vector<double>({2, 2, 2}));

    auto mul = l->mul(r);
    ASSERT_EQ(mul->ciphertext_size(), 2);

    auto decr = mul->decrypt();
    std::cout << decr.at({0}) << std::endl;
    ASSERT_TRUE(are_close(decr.data(), {2, 4, 6}));

    l->mul_inplace(r);
    l->mul_inplace(r);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->ciphertext_size(), 2);
    decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {4, 8, 12}));
}

TEST_P(CKKSVectorTest, TestCKKSMulMany) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(true);
    ctx->auto_rescale(true);
    ctx->auto_mod_switch(true);

    auto l = CKKSVector::Create(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector::Create(ctx, std::vector<double>({2, 2, 2}));

    l->mul_inplace(r);
    l->mul_inplace(r);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->ciphertext_size(), 2);
    auto decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {4, 8, 12}));
}

TEST_P(CKKSVectorTest, TestCKKSMulNoRelin) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(false);
    ctx->auto_rescale(true);
    ctx->auto_mod_switch(true);

    auto l = CKKSVector::Create(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector::Create(ctx, std::vector<double>({2, 2, 2}));

    l->mul_inplace(r);
    l->mul_inplace(r);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->ciphertext_size(), 4);
    auto decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {4, 8, 12}));
}

TEST_P(CKKSVectorTest, TestCKKSReplicateFirstSlot) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    ctx->generate_galois_keys();
    ctx->global_scale(std::pow(2, 40));

    auto vec = CKKSVector::Create(ctx, std::vector<double>({1}));
    auto replicated_vec = vec->replicate_first_slot(4);

    if (should_serialize_first) {
        replicated_vec = duplicate(replicated_vec);
    }

    auto result = replicated_vec->decrypt();
    ASSERT_EQ(result.size(), 4);
    ASSERT_TRUE(are_close(result.data(), {1, 1, 1, 1}));

    vec->mul_plain_inplace(2);
    vec->replicate_first_slot_inplace(6);
    result = vec->decrypt();
    ASSERT_EQ(result.size(), 6);
    ASSERT_TRUE(are_close(result.data(), {2, 2, 2, 2, 2, 2}));
}

TEST_P(CKKSVectorTest, TestCKKSPlainMatMul) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    ctx->generate_galois_keys();
    ctx->global_scale(std::pow(2, 40));

    auto vec = CKKSVector::Create(ctx, std::vector<double>({1, 2, 3}));
    auto matrix = PlainTensor<double>(
        vector<vector<double>>{{1, 2, 3}, {1, 2, 3}, {1, 2, 3}});
    auto expected_result = vector<int64_t>{6, 12, 18};

    auto result = vec->matmul_plain(matrix);

    if (should_serialize_first) {
        result = duplicate(result);
    }

    auto decrypted_result = result->decrypt();

    ASSERT_EQ(decrypted_result.size(), 3);
    ASSERT_TRUE(are_close(decrypted_result.data(), expected_result));
}

TEST_P(CKKSVectorTest, TestEmptyPlaintext) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(CKKSVector::Create(ctx, std::vector<double>({})),
                 std::exception);
}

TEST_F(CKKSVectorTest, TestCKKSVectorSerializationSize) {
    vector<double> input;
    for (double val = 0.5; val < 1000; ++val) input.push_back(val);

    auto pk_ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60},
                               encryption_type::asymmetric);
    pk_ctx->global_scale(std::pow(2, 40));
    auto pk_vector = CKKSVector::Create(pk_ctx, input);

    auto sym_ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60},
                               encryption_type::symmetric);
    sym_ctx->global_scale(std::pow(2, 40));
    auto sym_vector = CKKSVector::Create(sym_ctx, input);

    auto pk_buffer = pk_vector->save();
    auto sym_buffer = sym_vector->save();

    fprintf(stderr, "pk_buffer size = %ld sym_buffer size = %ld\n",
            pk_buffer.size(), sym_buffer.size());
    ASSERT_TRUE(pk_buffer.size() != sym_buffer.size());
    ASSERT_TRUE(2 * sym_buffer.size() > pk_buffer.size());
}
INSTANTIATE_TEST_CASE_P(
    TestCKKSVector, CKKSVectorTest,
    ::testing::Values(make_tuple(false, encryption_type::asymmetric),
                      make_tuple(true, encryption_type::asymmetric),
                      make_tuple(false, encryption_type::symmetric),
                      make_tuple(true, encryption_type::symmetric)));

TEST_F(CKKSVectorTest, TestCKKSLazyContext) {
    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    auto l = CKKSVector::Create(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector::Create(ctx, std::vector<double>({3, 4, 4}));

    auto buffer = l->save();
    auto newl = CKKSVector::Create(buffer);

    EXPECT_THROW(newl->add(r), std::exception);

    newl->link_tenseal_context(ctx);
    auto res = newl->add(r);

    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {4, 6, 7}));
}

}  // namespace
}  // namespace tenseal
