#include "tenseal/tensors/ckksvector.h"

#include "gmock/gmock.h"
#include "gtest/gtest.h"

namespace tenseal {
namespace {

using namespace ::testing;

bool are_close(const std::vector<double>& l, const std::vector<int64_t>& r) {
    if (l.size() != r.size()) {
        return false;
    }
    for (size_t idx = 0; idx < l.size(); ++idx) {
        if (std::abs(l[idx] - r[idx]) > 0.5) return false;
    }
    return true;
}

CKKSVector duplicate(const CKKSVector& in) {
    auto vec = in.save();
    
    return CKKSVector(in.tenseal_context(), vec);
}

class CKKSVectorTest : public TestWithParam</*serialize=*/bool> {
   protected:
    void SetUp() {}
};
TEST_P(CKKSVectorTest, TestCreateCKKS) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSVector(ctx, {1, 2, 3}, 1);

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.ciphertext_size(), 2);
}

TEST_F(CKKSVectorTest, TestCreateCKKSFail) {
    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(auto l = CKKSVector(ctx, std::vector<double>({1, 2, 3})), std::exception);
}

TEST_P(CKKSVectorTest, TestCKKSAdd) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(false);
    ctx->auto_rescale(false);
    ctx->auto_mod_switch(false);

    auto l = CKKSVector(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector(ctx, std::vector<double>({3, 4, 4}));

    auto add = l.add(r);

     if (should_serialize_first) {
         l = duplicate(l);
     }


    ASSERT_EQ(add.ciphertext_size(), 2);

    auto decr = add.decrypt();
    ASSERT_TRUE(are_close(decr, {4, 6, 7}));

    l.add_inplace(r);
    l.add_inplace(r);

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.ciphertext_size(), 2);
    decr = l.decrypt();
    ASSERT_TRUE(are_close(decr, {7, 10, 11}));
}

TEST_P(CKKSVectorTest, TestCKKSMul) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(true);
    ctx->auto_rescale(true);
    ctx->auto_mod_switch(true);

    auto l = CKKSVector(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector(ctx, std::vector<double>({2, 2, 2}));

    auto mul = l.mul(r);
    ASSERT_EQ(mul.ciphertext_size(), 2);

    auto decr = mul.decrypt();
    std::cout << decr[0] << std::endl;
    ASSERT_TRUE(are_close(decr, {2, 4, 6}));

    l.mul_inplace(r);
    l.mul_inplace(r);

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.ciphertext_size(), 2);
    decr = l.decrypt();
    ASSERT_TRUE(are_close(decr, {4, 8, 12}));
}

TEST_P(CKKSVectorTest, TestCKKSMulMany) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(true);
    ctx->auto_rescale(true);
    ctx->auto_mod_switch(true);

    auto l = CKKSVector(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector(ctx, std::vector<double>({2, 2, 2}));

    l.mul_inplace(r);
    l.mul_inplace(r);

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.ciphertext_size(), 2);
    auto decr = l.decrypt();
    ASSERT_TRUE(are_close(decr, {4, 8, 12}));
}

TEST_P(CKKSVectorTest, TestCKKSMulNoRelin) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    ctx->auto_relin(false);
    ctx->auto_rescale(true);
    ctx->auto_mod_switch(true);

    auto l = CKKSVector(ctx, std::vector<double>({1, 2, 3}));
    auto r = CKKSVector(ctx, std::vector<double>({2, 2, 2}));

    l.mul_inplace(r);
    l.mul_inplace(r);

     if (should_serialize_first) {
         l = duplicate(l);
     }

    ASSERT_EQ(l.ciphertext_size(), 4);
    auto decr = l.decrypt();
    ASSERT_TRUE(are_close(decr, {4, 8, 12}));
}

TEST_P(CKKSVectorTest, TestCKKSReplicateFirstSlot) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->generate_galois_keys();
    ctx->global_scale(std::pow(2, 40));

    auto vec = CKKSVector(ctx, std::vector<double>({1}));
    auto replicated_vec = vec.replicate_first_slot(4);

     if (should_serialize_first) {
         replicated_vec = duplicate(replicated_vec);
     }

    auto result = replicated_vec.decrypt();
    ASSERT_EQ(result.size(), 4);
    ASSERT_TRUE(are_close(result, {1, 1, 1, 1}));

    vec.mul_plain_inplace(2);
    vec.replicate_first_slot_inplace(6);
    result = vec.decrypt();
    ASSERT_EQ(result.size(), 6);
    ASSERT_TRUE(are_close(result, {2, 2, 2, 2, 2, 2}));
}

INSTANTIATE_TEST_CASE_P(TestCKKSVector, CKKSVectorTest,
                         ::testing::Values(false, true));



}  // namespace
}  // namespace tenseal
