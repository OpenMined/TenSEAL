#include "tenseal/tensors/bfvvector.h"

#include "gmock/gmock.h"
#include "gtest/gtest.h"

namespace tenseal {
namespace {
using namespace ::testing;

BFVVector duplicate(const BFVVector& in) {
    auto vec = in.save();
    return BFVVector(in.tenseal_context(), vec);
}

class BFVVectorTest : public TestWithParam</*serialize=*/bool>  {
   protected:
    void SetUp() {}
};

TEST_P(BFVVectorTest, TestCreateBFV) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector(ctx, vector<int64_t>({1, 2, 3}));

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.size(), 3);
    ASSERT_EQ(l.ciphertext_size(), 2);
}

TEST_P(BFVVectorTest, TestBFVAdd) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector(ctx, vector<int64_t>({2, 3, 4}));

    auto add = l.add(r);
    ASSERT_EQ(add.ciphertext_size(), 2);

    auto decr = add.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({3, 5, 7}));

    l.add_inplace(r);
    l.add_inplace(r);
    l.add_inplace(r);
    l.add_inplace(r);

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.ciphertext_size(), 2);
    decr = l.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({9, 14, 19}));
}

TEST_P(BFVVectorTest, TestBFVMul) {
    bool should_serialize_first = GetParam();

    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector(ctx, vector<int64_t>({2, 3, 4}));

    auto mul = l.mul(r);
    ASSERT_EQ(mul.ciphertext_size(), 2);

    auto decr = mul.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({2, 6, 12}));

    r = BFVVector(ctx, vector<int64_t>({2, 2, 2}));

    l.mul_inplace(r);
    l.mul_inplace(r);
    l.mul_inplace(r);
    l.mul_inplace(r);

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.ciphertext_size(), 2);

    decr = l.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({16, 32, 48}));
}

INSTANTIATE_TEST_CASE_P(TestBFVVector, BFVVectorTest,
                         ::testing::Values(false, true));

}  // namespace
}  // namespace tenseal
