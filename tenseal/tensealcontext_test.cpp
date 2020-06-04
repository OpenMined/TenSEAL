#include "tenseal/tensealcontext.h"

#include "gtest/gtest.h"

namespace tenseal {
namespace {

class TenSEALContextTest : public ::testing::Test {
   protected:
    void SetUp() {}
};

TEST_F(TenSEALContextTest, TestCreateBFV) {
    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});

    ASSERT_TRUE(ctx != nullptr);
    // ASSERT_TRUE(ctx->public_key() != nullptr);
}

TEST_F(TenSEALContextTest, TestCreateCKKS) {
    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});

    ASSERT_TRUE(ctx != nullptr);
    ASSERT_TRUE(ctx->public_key() != nullptr);
    ASSERT_TRUE(ctx->secret_key() != nullptr);
}

TEST_F(TenSEALContextTest, TestCreateFail) {
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
}

}  // namespace
}  // namespace tenseal
