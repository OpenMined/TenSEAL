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

auto duplicate(shared_ptr<CKKSTensor> in) {
    auto vec = in->save();

    return CKKSTensor::Create(in->tenseal_context(), vec);
}

class CKKSTensorTest
    : public TestWithParam<tuple</*serialize_first=*/bool,
                                 /*encryption_type=*/encryption_type>> {
   protected:
    void SetUp() {}
};

TEST_P(CKKSTensorTest, TestCreateCKKSNoBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSTensor::Create(ctx, std::vector<double>{1, 2, 3},
                                std::pow(2, 40), false);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->data().size(), 3);
}

TEST_P(CKKSTensorTest, TestDecryptCKKSNoBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSTensor::Create(ctx, std::vector<double>{1, 2, 3},
                                std::pow(2, 40), false);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    auto decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3}));
}

TEST_P(CKKSTensorTest, TestCreateCKKSWithBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSTensor::Create(ctx, std::vector<double>{1, 2, 3},
                                std::pow(2, 40), true);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->data().size(), 1);
}

TEST_P(CKKSTensorTest, TestDecryptCKKSWithBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSTensor::Create(ctx, std::vector<double>{1, 2, 3},
                                std::pow(2, 40), true);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    auto decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3}));
}

TEST_P(CKKSTensorTest, TestCKKSSumNoBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto data =
        PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({2, 3}));
    auto l = CKKSTensor::Create(ctx, data, std::pow(2, 40), false);

    l->sum_inplace(0);
    ASSERT_THAT(l->shape(), ElementsAreArray({3}));
    auto decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {5, 7, 9}));

    data =
        PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({2, 3}));
    l = CKKSTensor::Create(ctx, data, std::pow(2, 40), false);

    l->sum_inplace(1);
    ASSERT_THAT(l->shape(), ElementsAreArray({2}));
    decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {6, 15}));

    data = PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({6}));
    l = CKKSTensor::Create(ctx, data, std::pow(2, 40), false);

    l->sum_inplace();
    ASSERT_THAT(l->shape(), ElementsAreArray(vector<size_t>({})));
    decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {21}));

    data = PlainTensor(vector<double>({1, 2, 3, 4, 5, 6, 7, 8}),
                       vector<size_t>({2, 2, 2}));
    l = CKKSTensor::Create(ctx, data, std::pow(2, 40), false);

    l->sum_inplace(1);
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {4, 6, 12, 14}));
}

TEST_P(CKKSTensorTest, TestCKKSSumBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data =
        PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({2, 3}));
    auto l = CKKSTensor::Create(ctx, data, std::pow(2, 40), true);

    auto res = l->sum(0);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {5, 7, 9}));

    res = l->sum(1);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2}));
    decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {6, 15}));
}

TEST_P(CKKSTensorTest, TestCKKSPower) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data =
        PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({2, 3}));
    auto l = CKKSTensor::Create(ctx, data, std::pow(2, 40), true);

    auto res = l->power(2);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2, 3}));
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {1, 4, 9, 16, 25, 36}));
}

TEST_P(CKKSTensorTest, TestAddBroadcasting) {
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto ldata =
        PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({2, 3}));
    auto rdata = PlainTensor(vector<double>({11, 22, 33}), vector<size_t>({3}));

    auto l = CKKSTensor::Create(ctx, ldata, std::pow(2, 40));
    auto r = CKKSTensor::Create(ctx, rdata, std::pow(2, 40));

    // CKKS{3, 2} + CKKS{3}
    auto res = l->add(r);
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {12, 24, 36, 15, 27, 39}));

    // CKKS{3, 2} + PLAIN{3}
    res = l->add_plain(rdata);
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {12, 24, 36, 15, 27, 39}));

    // CKKS{3} + CKKS{3, 2}
    res = r->add(l);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2, 3}));
    decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {12, 24, 36, 15, 27, 39}));

    // CKKS{3} + PLAIN{3, 2}
    res = r->add_plain(ldata);
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {12, 24, 36, 15, 27, 39}));
}

TEST_P(CKKSTensorTest, TestDotBroadcasting) {
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto ldata = PlainTensor(vector<double>({1, 2, 3, 4, 5, 6, 7, 8, 9}),
                             vector<size_t>({3, 3}));
    auto rdata = PlainTensor(vector<double>({11, 22, 33}), vector<size_t>({3}));

    auto l = CKKSTensor::Create(ctx, ldata, std::pow(2, 40));
    auto r = CKKSTensor::Create(ctx, rdata, std::pow(2, 40));

    // CKKS 2D @ CKKS 1D
    auto res = l->dot(r);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {154, 352, 550}));

    // CKKS 2D @ PLAIN 1D
    res = l->dot_plain(rdata);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {154, 352, 550}));

    // CKKS 1D @ CKKS 2D
    res = r->dot(l);
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({3}));
    decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {330, 396, 462}));

    // CKKS 1D @ PLAIN 2D
    res = r->dot_plain(ldata);
    ASSERT_THAT(res->shape(), ElementsAreArray({3}));
    decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {330, 396, 462}));
}

TEST_P(CKKSTensorTest, TestTranspose) {
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto ldata =
        PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({3, 2}));

    auto l = CKKSTensor::Create(ctx, ldata, std::pow(2, 40));

    // Transpose
    auto res = l->transpose();
    ASSERT_THAT(res->shape(), ElementsAreArray({2, 3}));
    ASSERT_THAT(l->shape(), ElementsAreArray({3, 2}));
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {1, 3, 5, 2, 4, 6}));

    // Transpose inplace
    l->transpose_inplace();
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 3}));
    decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {1, 3, 5, 2, 4, 6}));
}

TEST_P(CKKSTensorTest, TestCKKSTensorPolyval) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    auto data =
        PlainTensor(vector<double>({1, 2, 3, 4, 5, 6}), vector<size_t>({2, 3}));
    auto l = CKKSTensor::Create(ctx, data, std::pow(2, 40), true);

    auto res = l->polyval({1, 1, 1});
    ASSERT_THAT(res->shape_with_batch(), ElementsAreArray({2, 3}));
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {3, 7, 13, 21, 31, 43}));
}

TEST_P(CKKSTensorTest, TestCreateCKKSFail) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(
        auto l = CKKSTensor::Create(ctx, std::vector<double>({1, 2, 3})),
        std::exception);
}

TEST_P(CKKSTensorTest, TestCKKSReshapeNoBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data = PlainTensor(vector<double>({1, 2, 3, 4, 5, 6, 7, 8}),
                            vector<size_t>({2, 2, 2}));
    auto l = CKKSTensor::Create(ctx, data, std::pow(2, 40), false);

    auto decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({4, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({4, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({4, 2}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({4, 2}));
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({2, 2, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 2, 2}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3, 4, 5, 6, 7, 8}));

    auto newt = l->reshape({4, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_THAT(newt->shape(), ElementsAreArray({4, 2}));
}

TEST_P(CKKSTensorTest, TestCKKSReshapeBatching) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_TRUE(ctx != nullptr);
    ctx->generate_galois_keys();

    auto data = PlainTensor(vector<double>({1, 2, 3, 4, 5, 6, 7, 8}),
                            vector<size_t>({2, 2, 2}));
    auto l = CKKSTensor::Create(ctx, data, std::pow(2, 40), true);

    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 2, 2}));
    auto decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({4});
    ASSERT_THAT(l->shape(), ElementsAreArray({4}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 4}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 4}));
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3, 4, 5, 6, 7, 8}));

    l->reshape_inplace({2, 2});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(l->shape_with_batch(), ElementsAreArray({2, 2, 2}));
    decr = l->decrypt();
    ASSERT_THAT(decr.shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3, 4, 5, 6, 7, 8}));

    auto newt = l->reshape({4});
    ASSERT_THAT(l->shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(newt->shape(), ElementsAreArray({4}));
}

TEST_P(CKKSTensorTest, TestEmptyPlaintext) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(CKKSTensor::Create(ctx, std::vector<double>({})),
                 std::exception);
}

TEST_F(CKKSTensorTest, TestCKKSTensorSerializationSize) {
    vector<double> raw_input;
    for (double val = 0.5; val < 1000; ++val) raw_input.push_back(val);

    auto input = PlainTensor(raw_input);
    auto pk_ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60},
                               encryption_type::asymmetric);
    pk_ctx->global_scale(std::pow(2, 40));
    auto pk_vector = CKKSTensor::Create(pk_ctx, input);

    auto sym_ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60},
                               encryption_type::symmetric);
    sym_ctx->global_scale(std::pow(2, 40));
    auto sym_vector = CKKSTensor::Create(sym_ctx, input);

    auto pk_buffer = pk_vector->save();
    auto sym_buffer = sym_vector->save();

    fprintf(stderr, "pk_buffer size = %ld sym_buffer size = %ld\n",
            pk_buffer.size(), sym_buffer.size());
    ASSERT_TRUE(pk_buffer.size() != sym_buffer.size());
    ASSERT_TRUE(2 * sym_buffer.size() > pk_buffer.size());
}
INSTANTIATE_TEST_CASE_P(
    TestCKKSTensor, CKKSTensorTest,
    ::testing::Values(make_tuple(false, encryption_type::asymmetric),
                      make_tuple(true, encryption_type::asymmetric),
                      make_tuple(false, encryption_type::symmetric),
                      make_tuple(true, encryption_type::symmetric)));

TEST_F(CKKSTensorTest, TestCKKSLazyContext) {
    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    auto l = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({1, 2, 3, 4}), {2, 2}));
    auto r = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({5, 6, 7, 8}), {2, 2}));

    auto buffer = l->save();
    auto newl = CKKSTensor::Create(buffer);

    EXPECT_THROW(newl->add(r), std::exception);

    newl->link_tenseal_context(ctx);
    auto res = newl->add(r);

    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {6, 8, 10, 12}));
}

TEST_F(CKKSTensorTest, TestCKKSLazyContextSanityDoubleSerde) {
    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    auto l = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({1, 2, 3, 4}), {2, 2}));
    auto r = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({5, 6, 7, 8}), {2, 2}));

    // double serde
    auto buffer = l->save();
    auto newl = CKKSTensor::Create(buffer);
    buffer = newl->save();
    newl = CKKSTensor::Create(buffer);

    newl->link_tenseal_context(ctx);
    auto res = newl->add(r);

    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {6, 8, 10, 12}));
}

TEST_F(CKKSTensorTest, TestCKKSLazyContextSanityCopy) {
    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    auto l = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({1, 2, 3, 4}), {2, 2}));
    auto r = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({5, 6, 7, 8}), {2, 2}));

    auto buffer = l->save();
    auto newl = CKKSTensor::Create(buffer);

    auto cpy = newl->copy();
    cpy->link_tenseal_context(ctx);
    auto res = cpy->add(r);
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {6, 8, 10, 12}));
}

TEST_F(CKKSTensorTest, TestCKKSLazyContextSanityDeepcopy) {
    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->global_scale(std::pow(2, 40));

    auto l = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({1, 2, 3, 4}), {2, 2}));
    auto r = CKKSTensor::Create(
        ctx, PlainTensor(std::vector<double>({5, 6, 7, 8}), {2, 2}));

    auto buffer = l->save();
    auto newl = CKKSTensor::Create(buffer);

    auto cpy = newl->deepcopy();
    cpy->link_tenseal_context(ctx);
    auto res = cpy->add(r);
    auto decr = res->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {6, 8, 10, 12}));
}

}  // namespace
}  // namespace tenseal
