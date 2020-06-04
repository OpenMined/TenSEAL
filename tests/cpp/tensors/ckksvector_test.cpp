#include "tenseal/tensors/ckksvector.h"

#include "gtest/gtest.h"

namespace tenseal {

class CKKSVectorTest : public ::testing::Test {
   protected:
    void SetUp() {}
};

TEST_F(CKKSVectorTest, TestCreateCKKS) {
    auto ctx =
        TenSEALContext::Create(scheme_type::CKKS, 8192, -1, {60, 40, 40, 60});
    ASSERT_TRUE(ctx != nullptr);

    ctx->auto_relin(false);
    ctx->auto_rescale(false);
    ctx->auto_mod_switch(false);
}


}  // namespace tenseal
