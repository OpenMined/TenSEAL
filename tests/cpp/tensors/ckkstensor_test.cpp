#include "gmock/gmock.h"
#include "gtest/gtest.h"
#include "tenseal/cpp/tenseal.h"

namespace tenseal {
namespace {

using namespace ::testing;
using namespace std;

bool are_close(const std::vector<double>& l, const std::vector<int64_t>& r) {
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

class CKKSTensorTest : public TestWithParam</*serialize=*/bool> {
   protected:
    void SetUp() {}
};
TEST_P(CKKSTensorTest, TestCreateCKKSNoBatching) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSTensor::Create(ctx, std::vector<double>{1, 2, 3},
                                std::pow(2, 40), false);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->data().size(), 3);
}

TEST_P(CKKSTensorTest, TestDecryptCKKSNoBatching) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
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
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSTensor::Create(ctx, std::vector<double>{1, 2, 3},
                                std::pow(2, 40), true);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    ASSERT_EQ(l->data().size(), 1);
}

TEST_P(CKKSTensorTest, TestDecryptCKKSWithBatching) {
    bool should_serialize_first = GetParam();

    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    auto l = CKKSTensor::Create(ctx, std::vector<double>{1, 2, 3},
                                std::pow(2, 40), true);

    if (should_serialize_first) {
        l = duplicate(l);
    }

    auto decr = l->decrypt();
    ASSERT_TRUE(are_close(decr.data(), {1, 2, 3}));
}

TEST_F(CKKSTensorTest, TestCreateCKKSFail) {
    auto ctx =
        TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(
        auto l = CKKSTensor::Create(ctx, std::vector<double>({1, 2, 3})),
        std::exception);
}

TEST_P(CKKSTensorTest, TestEmptyPlaintext) {
    auto ctx = TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {});
    ASSERT_TRUE(ctx != nullptr);

    EXPECT_THROW(CKKSTensor::Create(ctx, std::vector<double>({})),
                 std::exception);
}

INSTANTIATE_TEST_CASE_P(TestCKKSTensor, CKKSTensorTest,
                        ::testing::Values(false, true));

}  // namespace
}  // namespace tenseal
