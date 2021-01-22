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

class BFVVectorTest
    : public TestWithParam<tuple</*serialize_first=*/bool,
                                 /*encryption_type=*/encryption_type>> {
   protected:
    void SetUp() {}
};

TEST_P(BFVVectorTest, TestCreateBFV) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->size(), 3);
    ASSERT_EQ(l->ciphertext_size(), 2);
}

TEST_P(BFVVectorTest, TestBFVAdd) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
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
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
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
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(BFVVector::Create(ctx, std::vector<int64_t>({})),
                 std::exception);
}

TEST_P(BFVVectorTest, TestBFVLazyLoading) {
    bool should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
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

TEST_F(BFVVectorTest, TestCKKSLazyContextSanityDoubleSerde) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {},
                                      encryption_type::asymmetric);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector::Create(ctx, vector<int64_t>({2, 3, 4}));

    // double serde
    auto buffer = l->save();
    auto newl = BFVVector::Create(buffer);
    buffer = newl->save();
    newl = BFVVector::Create(buffer);

    newl->link_tenseal_context(ctx);
    auto res = newl->add(r);

    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({3, 5, 7}));
}

TEST_F(BFVVectorTest, TestCKKSLazyContextSanityCopy) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {},
                                      encryption_type::asymmetric);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector::Create(ctx, vector<int64_t>({2, 3, 4}));

    auto buffer = l->save();
    auto newl = BFVVector::Create(buffer);

    auto cpy = newl->copy();
    cpy->link_tenseal_context(ctx);
    auto res = cpy->add(r);
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({3, 5, 7}));
}

TEST_F(BFVVectorTest, TestCKKSLazyContextSanityDeepcopy) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {},
                                      encryption_type::asymmetric);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVVector::Create(ctx, vector<int64_t>({1, 2, 3}));
    auto r = BFVVector::Create(ctx, vector<int64_t>({2, 3, 4}));

    auto buffer = l->save();
    auto newl = BFVVector::Create(buffer);

    auto cpy = newl->deepcopy();
    cpy->link_tenseal_context(ctx);
    auto res = cpy->add(r);
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({3, 5, 7}));
}

TEST_F(BFVVectorTest, TestBFVSerializationSize) {
    vector<int64_t> input;
    for (int64_t val = 1; val < 1000; ++val) input.push_back(val);

    auto pk_ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {},
                                         encryption_type::asymmetric);
    auto pk_vector = BFVVector::Create(pk_ctx, input);

    auto sym_ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {},
                                          encryption_type::symmetric);
    auto sym_vector = BFVVector::Create(sym_ctx, input);

    auto pk_buffer = pk_vector->save();
    auto sym_buffer = sym_vector->save();

    fprintf(stderr, "pk_buffer size = %ld sym_buffer size = %ld\n",
            pk_buffer.size(), sym_buffer.size());
    ASSERT_TRUE(pk_buffer.size() != sym_buffer.size());
    ASSERT_TRUE(2 * sym_buffer.size() > pk_buffer.size());
}

INSTANTIATE_TEST_CASE_P(
    TestBFVVector, BFVVectorTest,
    ::testing::Values(make_tuple(false, encryption_type::asymmetric),
                      make_tuple(true, encryption_type::asymmetric),
                      make_tuple(false, encryption_type::symmetric),
                      make_tuple(true, encryption_type::symmetric)));

}  // namespace
}  // namespace tenseal
