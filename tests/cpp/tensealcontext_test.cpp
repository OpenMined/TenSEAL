#include "gmock/gmock.h"
#include "gtest/gtest.h"
#include "tenseal/cpp/tenseal.h"
#include "tenseal/cpp/utils/threadpool.h"

namespace tenseal {

using namespace ::testing;

class TenSEALContextTest : public TestWithParam<tuple<bool, encryption_type>> {
   protected:
    void SetUp() {}
    void TearDown() {}
};
TEST_P(TenSEALContextTest, TestCreateFail) {
    auto enc_type = get<1>(GetParam());
    EXPECT_THROW(auto ctx = TenSEALContext::Create(scheme_type::none, 8192,
                                                   1032193, {}, enc_type),
                 std::exception);
    EXPECT_THROW(auto ctx = TenSEALContext::Create(scheme_type::bfv, 8191,
                                                   1032193, {}, enc_type),
                 std::exception);
    EXPECT_THROW(auto ctx = TenSEALContext::Create(scheme_type::ckks, 8191, -1,
                                                   {60, 40, 40, 60}, enc_type),
                 std::exception);

    EXPECT_THROW(auto ctx = TenSEALContext::Create("invalid"), std::exception);

    std::stringstream ss;
    EXPECT_THROW(auto ctx = TenSEALContext::Create(ss), std::exception);
}

TEST_P(TenSEALContextTest, TestSerialization) {
    auto enc_type = get<1>(GetParam());
    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ctx->generate_galois_keys();

    auto buff = ctx->save();
    auto recreated_ctx = TenSEALContext::Create(buff);

    ASSERT_TRUE(recreated_ctx != nullptr);
    if (enc_type == encryption_type::asymmetric) {
        auto &orig_pubkey = ctx->public_key()->data().dyn_array();
        auto &serial_pubkey = recreated_ctx->public_key()->data().dyn_array();
        for (size_t idx = 0; idx < orig_pubkey.size(); ++idx) {
            EXPECT_EQ(orig_pubkey[idx], serial_pubkey[idx]);
        }
    }
    auto &orig_privkey = ctx->secret_key()->data().dyn_array();
    auto &serial_privkey = recreated_ctx->secret_key()->data().dyn_array();
    for (size_t idx = 0; idx < orig_privkey.size(); ++idx) {
        EXPECT_EQ(orig_privkey[idx], serial_privkey[idx]);
    }
    ASSERT_EQ(ctx->enc_type(), enc_type);
    ASSERT_EQ(recreated_ctx->enc_type(), enc_type);
    ASSERT_EQ(ctx->is_private(), recreated_ctx->is_private());
    ASSERT_EQ(ctx->is_public(), recreated_ctx->is_public());

    auto &orig_relinkeys = ctx->relin_keys()->data();
    auto &serial_relinkeys = recreated_ctx->relin_keys()->data();
    ASSERT_EQ(orig_relinkeys.size(), serial_relinkeys.size());

    auto &orig_galoiskeys = ctx->galois_keys()->data();
    auto &serial_galoiskeys = recreated_ctx->galois_keys()->data();
    ASSERT_EQ(orig_galoiskeys.size(), serial_galoiskeys.size());
}

TEST_P(TenSEALContextTest, TestDispatcher) {
    auto enc_type = get<1>(GetParam());
    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);
    ASSERT_EQ(ctx->dispatcher_size(), get_concurrency());

    ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1, {60, 40, 40, 60},
                                 enc_type, 8);
    ASSERT_EQ(ctx->dispatcher_size(), 8);
}

TEST_P(TenSEALContextTest, TestCreateBFV) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    ASSERT_TRUE(ctx != nullptr);
    if (enc_type == encryption_type::asymmetric)
        ASSERT_TRUE(ctx->public_key() != nullptr);
    else
        EXPECT_THROW(ctx->public_key(), std::exception);
    ASSERT_TRUE(ctx->secret_key() != nullptr);
    ASSERT_TRUE(ctx->relin_keys() != nullptr);
    ASSERT_TRUE(ctx->is_private());
    EXPECT_THROW(ctx->galois_keys(), std::exception);
    ctx->generate_galois_keys();
    ASSERT_TRUE(ctx->galois_keys() != nullptr);
}

TEST_P(TenSEALContextTest, TestCreateBFVPublic) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx =
        TenSEALContext::Create(scheme_type::bfv, 8192, 1032193, {}, enc_type);

    if (enc_type == encryption_type::asymmetric) {
        ctx->make_context_public(false, false);
    } else {
        EXPECT_THROW(ctx->make_context_public(false, false), std::exception);
        return;
    }

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    EXPECT_THROW(ctx->galois_keys(), std::exception);
    ASSERT_TRUE(ctx->relin_keys() != nullptr);
    EXPECT_THROW(ctx->secret_key(), std::exception);

    ctx->make_context_public(false, false);
    EXPECT_THROW(ctx->secret_key(), std::exception);
    EXPECT_THROW(ctx->generate_galois_keys(), std::exception);
    ASSERT_TRUE(ctx->relin_keys() != nullptr);
}

TEST_P(TenSEALContextTest, TestCreateCKKS) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    ASSERT_TRUE(ctx != nullptr);
    if (enc_type == encryption_type::asymmetric)
        ASSERT_TRUE(ctx->public_key() != nullptr);
    else
        EXPECT_THROW(ctx->public_key(), std::exception);
    ASSERT_TRUE(ctx->secret_key() != nullptr);
    ASSERT_TRUE(ctx->relin_keys() != nullptr);
    ASSERT_TRUE(ctx->is_private());
    EXPECT_THROW(ctx->galois_keys(), std::exception);
    ctx->generate_galois_keys();
    ASSERT_TRUE(ctx->galois_keys() != nullptr);
}

TEST_P(TenSEALContextTest, TestCreateCKKSPublic) {
    auto should_serialize_first = get<0>(GetParam());
    auto enc_type = get<1>(GetParam());

    auto ctx = TenSEALContext::Create(scheme_type::ckks, 8192, -1,
                                      {60, 40, 40, 60}, enc_type);

    if (enc_type == encryption_type::asymmetric)
        ctx->make_context_public(false, false);
    else {
        EXPECT_THROW(ctx->make_context_public(false, false), std::exception);
        return;
    }

    if (should_serialize_first) {
        auto buff = ctx->save();
        ctx = TenSEALContext::Create(buff);
    }

    ASSERT_TRUE(ctx != nullptr);
    ASSERT_TRUE(ctx->public_key() != nullptr);
    ASSERT_TRUE(ctx->relin_keys() != nullptr);
    EXPECT_THROW(ctx->galois_keys(), std::exception);
    EXPECT_THROW(ctx->secret_key(), std::exception);
    ASSERT_FALSE(ctx->is_private());
}

TEST_F(TenSEALContextTest, TestContextRegressionRecreateGaloisCrash) {
    EncryptionParameters parameters(scheme_type::ckks);
    parameters.set_poly_modulus_degree(8192);
    parameters.set_coeff_modulus(
        CoeffModulus::Create(8192, {40, 21, 21, 21, 21, 21, 21, 40}));

    auto ctx = SEALContext(parameters);
    auto keygen = KeyGenerator(ctx);
    auto sk = SecretKey(keygen.secret_key());

    GaloisKeys gk;
    keygen.create_galois_keys(gk);

    auto serial = SEALSerialize<GaloisKeys>(gk);
    auto new_gk = SEALDeserialize<GaloisKeys>(ctx, serial);
    SEALSerialize<GaloisKeys>(new_gk);
}

INSTANTIATE_TEST_CASE_P(
    TestContext, TenSEALContextTest,
    ::testing::Values(make_tuple(false, encryption_type::asymmetric),
                      make_tuple(true, encryption_type::asymmetric),
                      make_tuple(false, encryption_type::symmetric),
                      make_tuple(true, encryption_type::symmetric)));

}  // namespace tenseal
