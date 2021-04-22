#include "gmock/gmock.h"
#include "gtest/gtest.h"
#include "tenseal/cpp/tenseal.h"

namespace tenseal {
namespace {

using namespace ::testing;
using namespace std;

auto duplicate(shared_ptr<BFVTensor> in) {
    auto vec = in->save();

    return BFVTensor::Create(in->tenseal_context(), vec);
}

class BFVTensorTest
    : public TestWithParam<tuple</*serialize_first=*/bool,
                                 /*encryption_type=*/encryption_type>> {
   protected:
    void SetUp() {}
};

TEST_P(BFVTensorTest, TestCreateBFVNoBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(ctx, std::vector<int64_t>{1, 2, 3}, false);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->data().size(), 3);
}

TEST_P(BFVTensorTest, TestDecryptBFVNoBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(ctx, std::vector<int64_t>{1, 2, 3}, false);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    auto decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3}));
}

TEST_P(BFVTensorTest, TestCreateBFVWithBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(ctx, std::vector<int64_t>{1, 2, 3}, true);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->data().size(), 1);
}

TEST_P(BFVTensorTest, TestDecryptBFVWithBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(ctx, std::vector<int64_t>{1, 2, 3}, true);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    auto decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3}));
}

TEST_P(BFVTensorTest, TestBFVSumNoBatching) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}),
                            vector<size_t>({2, 3}));
    auto l = BFVTensor::Create(ctx, data, false);

    l->sum_inplace(0);
    ASSERT_THAT(l->shape(), ElementsAreArray({3}));
    auto decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({5, 7, 9}));

    data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}),
                       vector<size_t>({2, 3}));
    l = BFVTensor::Create(ctx, data, false);

    l->sum_inplace(1);
    ASSERT_THAT(l->shape(), ElementsAreArray({2}));
    decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({6, 15}));

    data =
        PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}), vector<size_t>({6}));
    l = BFVTensor::Create(ctx, data, false);

    l->sum_inplace();
    ASSERT_THAT(l->shape(), ElementsAreArray(vector<size_t>({})));
    decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({21}));

    data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6, 7, 8}),
                       vector<size_t>({2, 2, 2}));
    l = BFVTensor::Create(ctx, data, false);

    l->sum_inplace(1);
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({4, 6, 12, 14}));
}

TEST_P(BFVTensorTest, TestBFVSumBatching) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}),
                            vector<size_t>({2, 3}));
    auto l = BFVTensor::Create(ctx, data, true);

    auto res = l->sum(0);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({5, 7, 9}));

    res = l->sum(1);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2}));
    decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({6, 15}));
}

TEST_P(BFVTensorTest, TestBFVPower) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}),
                            vector<size_t>({2, 3}));
    auto l = BFVTensor::Create(ctx, data, true);

    auto res = l->power(2);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2, 3}));
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 4, 9, 16, 25, 36}));
}

TEST_P(BFVTensorTest, TestAddBroadcasting) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto ldata = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}),
                             vector<size_t>({2, 3}));
    auto rdata =
        PlainTensor(vector<int64_t>({11, 22, 33}), vector<size_t>({3}));

    auto l = BFVTensor::Create(ctx, ldata);
    auto r = BFVTensor::Create(ctx, rdata);

    // BFV{3, 2} + BFV{3}
    auto res = l->add(r);
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({12, 24, 36, 15, 27, 39}));

    // BFV{3, 2} + PLAIN{3}
    res = l->add_plain(rdata);
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({12, 24, 36, 15, 27, 39}));

    // BFV{3} + BFV{3, 2}
    res = r->add(l);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2, 3}));
    decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({12, 24, 36, 15, 27, 39}));

    // BFV{3} + PLAIN{3, 2}
    res = r->add_plain(ldata);
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({12, 24, 36, 15, 27, 39}));
}

TEST_P(BFVTensorTest, TestDotBroadcasting) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto ldata = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6, 7, 8, 9}),
                             vector<size_t>({3, 3}));
    auto rdata =
        PlainTensor(vector<int64_t>({11, 22, 33}), vector<size_t>({3}));

    auto l = BFVTensor::Create(ctx, ldata);
    auto r = BFVTensor::Create(ctx, rdata);

    // BFV 2D @ BFV 1D
    auto res = l->dot(r);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({154, 352, 550}));

    // BFV 2D @ PLAIN 1D
    res = l->dot_plain(rdata);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({154, 352, 550}));

    // BFV 1D @ BFV 2D
    res = r->dot(l);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({3}));
    decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({330, 396, 462}));

    // BFV 1D @ PLAIN 2D
    res = r->dot_plain(ldata);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({330, 396, 462}));
}

TEST_P(BFVTensorTest, TestTranspose) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto ldata = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}),
                             vector<size_t>({3, 2}));

    auto l = BFVTensor::Create(ctx, ldata);

    // Transpose
    auto res = l->transpose();
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    ASSERT_THAT(l->shape(), ElementsAreArray({3, 2}));
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 3, 5, 2, 4, 6}));

    // Transpose inplace
    l->transpose_inplace();
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 3}));
    decr = l->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 3, 5, 2, 4, 6}));
}

TEST_P(BFVTensorTest, TestBFVTensorPolyval) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6}),
                            vector<size_t>({2, 3}));
    auto l = BFVTensor::Create(ctx, data, true);

    auto res = l->polyval({1, 1, 1});
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2, 3}));
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({3, 7, 13, 21, 31, 43}));
}

TEST_P(BFVTensorTest, TestBFVReshapeNoBatching) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6, 7, 8}),
                            vector<size_t>({2, 2, 2}));
    auto l = BFVTensor::Create(ctx, data, false);

    auto decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({4, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({4, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({4, 2}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({4, 2}));
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({2, 2, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 2, 2}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3, 4, 5, 6, 7, 8}));

    auto newt = l->reshape({4, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_THAT(newt->shape(), ElementsAreArray({4, 2}));
}

TEST_P(BFVTensorTest, TestBFVReshapeBatching) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data = PlainTensor(vector<int64_t>({1, 2, 3, 4, 5, 6, 7, 8}),
                            vector<size_t>({2, 2, 2}));
    auto l = BFVTensor::Create(ctx, data, true);

    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 2, 2}));
    auto decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({4});
    ASSERT_THAT(l->shape(), ElementsAreArray({4}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 4}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 4}));
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({2, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 2, 2}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    EXPECT_THAT(decr.data(), ElementsAreArray({1, 2, 3, 4, 5, 6, 7, 8}));

    auto newt = l->reshape({4});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(newt->shape(), ElementsAreArray({4}));
}

TEST_P(BFVTensorTest, TestEmptyPlaintext) {
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(BFVTensor::Create(ctx, std::vector<int64_t>({})),
                 std::exception);
}

TEST_F(BFVTensorTest, TestBFVTensorSerializationSize) {
    vector<int64_t> raw_input;
    for (int val = 0.5; val < 1000; ++val) raw_input.push_back(val);

    auto input = PlainTensor(raw_input);
    auto pk_ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {},
                                         encryption_type::asymmetric);
    auto pk_vector = BFVTensor::Create(pk_ctx, input);

    auto sym_ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {},
                                          encryption_type::symmetric);
    auto sym_vector = BFVTensor::Create(sym_ctx, input);

    auto pk_buffer = pk_vector->save();
    auto sym_buffer = sym_vector->save();

    fprintf(stderr, "pk_buffer size = %ld sym_buffer size = %ld\n",
            pk_buffer.size(), sym_buffer.size());
    ASSERT_TRUE(pk_buffer.size() != sym_buffer.size());
    ASSERT_TRUE(2 * sym_buffer.size() > pk_buffer.size());
}
INSTANTIATE_TEST_CASE_P(
    TestBFVTensor, BFVTensorTest,
    ::testing::Values(make_tuple(false, encryption_type::asymmetric),
                      make_tuple(true, encryption_type::asymmetric),
                      make_tuple(false, encryption_type::symmetric),
                      make_tuple(true, encryption_type::symmetric)));

TEST_F(BFVTensorTest, TestBFVLazyContext) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({1, 2, 3, 4}), {2, 2}));
    auto r = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({5, 6, 7, 8}), {2, 2}));

    auto buffer = l->save();
    auto newl = BFVTensor::Create(buffer);

    EXPECT_THROW(newl->add(r), std::exception);

    newl->link_tenseal_context(ctx);
    auto res = newl->add(r);

    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({6, 8, 10, 12}));
}

TEST_F(BFVTensorTest, TestBFVLazyContextSanityintSerde) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({1, 2, 3, 4}), {2, 2}));
    auto r = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({5, 6, 7, 8}), {2, 2}));

    // int serde
    auto buffer = l->save();
    auto newl = BFVTensor::Create(buffer);
    buffer = newl->save();
    newl = BFVTensor::Create(buffer);

    newl->link_tenseal_context(ctx);
    auto res = newl->add(r);

    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({6, 8, 10, 12}));
}

TEST_F(BFVTensorTest, TestBFVLazyContextSanityCopy) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({1, 2, 3, 4}), {2, 2}));
    auto r = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({5, 6, 7, 8}), {2, 2}));

    auto buffer = l->save();
    auto newl = BFVTensor::Create(buffer);

    auto cpy = newl->copy();
    cpy->link_tenseal_context(ctx);
    auto res = cpy->add(r);
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({6, 8, 10, 12}));
}

TEST_F(BFVTensorTest, TestBFVLazyContextSanityDeepcopy) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    auto l = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({1, 2, 3, 4}), {2, 2}));
    auto r = BFVTensor::Create(
        ctx, PlainTensor(std::vector<int64_t>({5, 6, 7, 8}), {2, 2}));

    auto buffer = l->save();
    auto newl = BFVTensor::Create(buffer);

    auto cpy = newl->deepcopy();
    cpy->link_tenseal_context(ctx);
    auto res = cpy->add(r);
    auto decr = res->decrypt();
    EXPECT_THAT(decr.data(), ElementsAreArray({6, 8, 10, 12}));
}

}  // namespace
}  // namespace tenseal
