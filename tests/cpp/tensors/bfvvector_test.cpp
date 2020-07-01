#include "tenseal/tensors/bfvvector.h"

#include "gtest/gtest.h"
#include "gmock/gmock.h"

namespace tenseal {
namespace{
using namespace ::testing;

class BFVVectorTest : public Test {
   protected:
    void SetUp() {}
};

TEST_F(BFVVectorTest, TestCreateBFV) {
    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector(ctx, {1,2,3});
    ASSERT_EQ(l.size(), 3);
    ASSERT_EQ(l.ciphertext_size(), 2);
}

TEST_F(BFVVectorTest, TestBFVAdd) {
    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector(ctx, {1,2,3});
    auto r = BFVVector(ctx, {2,3,4});

    auto add = l.add(r);
    ASSERT_EQ(add.ciphertext_size(), 2);

    auto decr = add.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({3,5,7}));

    l.add_inplace(r);
    l.add_inplace(r);
    l.add_inplace(r);
    l.add_inplace(r);

    ASSERT_EQ(l.ciphertext_size(), 2);
    decr = l.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({9, 14, 19}));
}

TEST_F(BFVVectorTest, TestBFVMul) {
    auto ctx = TenSEALContext::Create(scheme_type::BFV, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector(ctx, {1,2,3});
    auto r = BFVVector(ctx, {2,3,4});

    auto mul = l.mul(r);
    ASSERT_EQ(mul.ciphertext_size(), 2);

    auto decr = mul.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({2,6,12}));
    
    r = BFVVector(ctx, {2,2,2});

    l.mul_inplace(r);
    l.mul_inplace(r);
    l.mul_inplace(r);
    l.mul_inplace(r);
    ASSERT_EQ(l.ciphertext_size(), 2);

    decr = l.decrypt();
    EXPECT_THAT(decr, ElementsAreArray({16,32,48}));
}

}
}  // namespace tenseal
