#include "gmock/gmock.h"
#include "gtest/gtest.h"
#include "tenseal/cpp/tenseal.h"

namespace tenseal {
namespace {
using namespace ::testing;
using namespace std;

auto duplicate(shared_ptr<BFVVector> in) {
    auto vec = in->save();
    return BFVVector::Create(in->tenseal_context(), vec);
}

class BFVVectorTest : public TestWithParam</*serialize=*/bool> {
   protected:
    void SetUp() {}
};

TEST_P(BFVVectorTest, TestCreateBFV) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->size(), 3);
    ASSERT_EQ(l->ciphertext_size(), 2);
}

TEST_P(BFVVectorTest, TestBFVAdd) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector::Create(ctx, vector<int64_t>({2, 3, 4}));

    auto add = l->add(r);
    ASSERT_EQ(add->ciphertext_size(), 2);

    auto decr = add->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({3, 5, 7}));

    l->add_inplace(r);
    l->add_inplace(r);
    l->add_inplace(r);
    l->add_inplace(r);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->ciphertext_size(), 2);
    decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({9, 14, 19}));
}

TEST_P(BFVVectorTest, TestBFVMul) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector::Create(ctx, vector<int64_t>({2, 3, 4}));

    auto mul = l->mul(r);
    ASSERT_EQ(mul->ciphertext_size(), 2);

    auto decr = mul->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({2, 6, 12}));

    r = BFVVector::Create(ctx, vector<int64_t>({2, 2, 2}));

    l->mul_inplace(r);
    l->mul_inplace(r);
    l->mul_inplace(r);
    l->mul_inplace(r);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->ciphertext_size(), 2);

    decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({16, 32, 48}));
}

TEST_P(BFVVectorTest, TestEmptyPlaintext) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(BFVVector::Create(ctx, std::vector<int64_t>({})),
                 std::exception);
}

TEST_F(BFVVectorTest, TestBFVLazyLoading) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector::Create(ctx, vector<int64_t>({2, 3, 4}));

    auto buffer = l->save();
    auto newl = BFVVector::Create(buffer);

    EXPECT_THROW(newl->add(r), std::exception);

    newl->link_tenseal_context(ctx);
    auto res = newl->add(r);

    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({3, 5, 7}));
}

INSTANTIATE_TEST_CASE_P(TestBFVVector, BFVVectorTest,
                        ::testing::Values(false, true));

}  // namespace
}  // namespace tenseal
