#include "tenseal/tensealcontext.h"

#include "gmock/gmock.h"
#include "gtest/gtest.h"

namespace tenseal {

using namespace ::testing;

class TenSEALContextSanityTest : public ::testing::Test {
   protected:
    void SetUp() {}
    void TearDown() {}
};

TEST_F(TenSEALContextSanityTest, TestCreateFail) {
    EXPECT_THROW(
        auto ctx = TenSEALContext::Create(scheme_type::none, 8192, 1032193, {}),
        std::exception);
    EXPECT_THROW(
        auto ctx = TenSEALContext::Create(scheme_type::BFV, 8191, 1032193, {}),
        std::exception);
    EXPECT_THROW(auto ctx = TenSEALContext::Create(scheme_type::CKKS, 8191, -1,
                                                   {60, 40, 40, 60}),
                 std::exception);
    EXPECT_THROW(
        auto ctx = TenSEALContext::Create(scheme_type::CKKS, 8192, 1032193, {}),
        std::exception);

    EXPECT_THROW(auto ctx = TenSEALContext::Create("invalid"), std::exception);

    std::stringstream ss;
    EXPECT_THROW(auto ctx = TenSEALContext::Create(ss), std::exception);
}

TEST_F(TenSEALContextSanityTest, TestSerialization) {
    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ctx->generate_galois_keys();

    auto buff = ctx->save();
    auto recreated_ctx = TenSEALContext::Create(buff);

    ASSERT_TRUE(recreated_ctx != nullptr);
    auto &orig_pubkey = ctx->public_key()->data().int_array();
    auto &serial_pubkey = recreated_ctx->public_key()->data().int_array();
    for (size_t idx = 0; idx < orig_pubkey.size(); ++idx) {
        EXPECT_EQ(orig_pubkey[idx], serial_pubkey[idx]);
    }
    auto &orig_privkey = ctx->secret_key()->data().int_array();
    auto &serial_privkey = recreated_ctx->secret_key()->data().int_array();
    for (size_t idx = 0; idx < orig_privkey.size(); ++idx) {
        EXPECT_EQ(orig_privkey[idx], serial_privkey[idx]);
    }
    ASSERT_EQ(ctx->is_private(), recreated_ctx->is_private());
    ASSERT_EQ(ctx->is_public(), recreated_ctx->is_public());

    auto &orig_relinkeys = ctx->relin_keys()->data();
    auto &serial_relinkeys = recreated_ctx->relin_keys()->data();
    ASSERT_EQ(orig_relinkeys.size(), serial_relinkeys.size());

    auto &orig_galoiskeys = ctx->galois_keys()->data();
    auto &serial_galoiskeys = recreated_ctx->galois_keys()->data();
    ASSERT_EQ(orig_galoiskeys.size(), serial_galoiskeys.size());
}

class TenSEALContextTest : public ::testing::TestWithParam</*serialize=*/bool> {
   protected:
    void SetUp() {}
    void TearDown() {}
};

TEST_P(TenSEALContextTest, TestCreateBFV) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    ASSERT_TRUE(ctx != nullptr);
    ASSERT_TRUE(ctx != nullptr);
    ASSERT_TRUE(ctx->public_key() != nullptr);
    ASSERT_TRUE(ctx->secret_key() != nullptr);
    ASSERT_TRUE(ctx->relin_keys() != nullptr);
    ASSERT_TRUE(ctx->is_private());
    EXPECT_THROW(ctx->galois_keys(), std::exception);
    ctx->generate_galois_keys();
    ASSERT_TRUE(ctx->galois_keys() != nullptr);
}

TEST_P(TenSEALContextTest, TestCreateBFVPublic) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});
    ctx->make_context_public(false, false);

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    EXPECT_THROW(ctx->galois_keys(), std::exception);
    EXPECT_THROW(ctx->relin_keys(), std::exception);
    EXPECT_THROW(ctx->secret_key(), std::exception);

    ctx->make_context_public(false, false);
    EXPECT_THROW(ctx->secret_key(), std::exception);
    EXPECT_THROW(ctx->generate_galois_keys(), std::exception);
    EXPECT_THROW(ctx->generate_relin_keys(), std::exception);
}

TEST_P(TenSEALContextTest, TestCreateCKKS) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    ASSERT_TRUE(ctx != nullptr);
    ASSERT_TRUE(ctx->public_key() != nullptr);
    ASSERT_TRUE(ctx->secret_key() != nullptr);
    ASSERT_TRUE(ctx->relin_keys() != nullptr);
    ASSERT_TRUE(ctx->is_private());
    EXPECT_THROW(ctx->galois_keys(), std::exception);
    ctx->generate_galois_keys();
    ASSERT_TRUE(ctx->galois_keys() != nullptr);
}

TEST_P(TenSEALContextTest, TestCreateCKKSPublic) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ctx->make_context_public(false, false);

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    ASSERT_TRUE(ctx != nullptr);
    ASSERT_TRUE(ctx->public_key() != nullptr);
    EXPECT_THROW(ctx->galois_keys(), std::exception);
    EXPECT_THROW(ctx->relin_keys(), std::exception);
    EXPECT_THROW(ctx->secret_key(), std::exception);
    ASSERT_FALSE(ctx->is_private());
}

INSTANTIATE_TEST_CASE_P(TestContext, TenSEALContextTest,
                        ::testing::Values(false, true));

}  // namespace tenseal
