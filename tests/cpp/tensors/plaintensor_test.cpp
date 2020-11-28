#include "gmock/gmock.h"
#include "gtest/gtest.h"
#include "tenseal/cpp/tenseal.h"

namespace tenseal {
namespace {

using namespace ::testing;
using namespace std;

class PlainTensorTest : public Test {
   protected:
    void SetUp() {}
};
TEST_F(PlainTensorTest, TestGenerateStrides) {
    ASSERT_THAT(generate_strides({}), ElementsAre());
    ASSERT_THAT(generate_strides({2}), ElementsAre(1));
    ASSERT_THAT(generate_strides({3, 2}), ElementsAre(2, 1));
    ASSERT_THAT(generate_strides({5, 3, 2}), ElementsAre(6, 2, 1));
    ASSERT_THAT(generate_strides({7, 5, 3, 2}), ElementsAre(30, 6, 2, 1));
}

TEST_F(PlainTensorTest, TestCreateFrom1D) {
    vector<double> data = {1.1, 2.2, 3.3};

    PlainTensor<double> tensor(data);

    ASSERT_THAT(tensor.data(), ElementsAreArray(data));
    ASSERT_THAT(tensor.shape(), ElementsAre(data.size()));
    ASSERT_THAT(tensor.strides(), ElementsAre(1));
}

TEST_F(PlainTensorTest, TestCreateFrom2DVector) {
    vector<vector<double>> data = {{1.1, 2.2}, {3.3, 4.4}};
    PlainTensor<double> tensor(data);

    ASSERT_THAT(tensor.data(), ElementsAreArray({1.1, 2.2, 3.3, 4.4}));
    ASSERT_THAT(tensor.shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(tensor.strides(), ElementsAreArray({2, 1}));
}

TEST_F(PlainTensorTest, TestCreateFrom2DVectorFail) {
    vector<vector<double>> data = {{1.1, 2.2}, {3.3}};
    EXPECT_THROW(PlainTensor<double> tensor(data), std::exception);

    data = {{}, {3.3}};
    EXPECT_THROW(PlainTensor<double> tensor(data), std::exception);
}

TEST_F(PlainTensorTest, TestCreateFrom2DTensor) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    PlainTensor<double> tensor(data, {2, 2});

    ASSERT_THAT(tensor.data(), ElementsAreArray({1.1, 2.2, 3.3, 4.4}));
    ASSERT_THAT(tensor.shape(), ElementsAreArray({2, 2}));
    ASSERT_THAT(tensor.strides(), ElementsAreArray({2, 1}));
}

TEST_F(PlainTensorTest, TestCreateFrom2DTensorFail) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    EXPECT_THROW(PlainTensor<double> tensor(data, {2, 5}), std::exception);
}

TEST_F(PlainTensorTest, TestCreateFrom3DTensor) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    PlainTensor<double> tensor(data, {2, 2, 1});

    ASSERT_THAT(tensor.data(), ElementsAreArray({1.1, 2.2, 3.3, 4.4}));
    ASSERT_THAT(tensor.shape(), ElementsAreArray({2, 2, 1}));
    ASSERT_THAT(tensor.strides(), ElementsAreArray({2, 1, 1}));
}

TEST_F(PlainTensorTest, TestTensorAccess) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8};
    PlainTensor<double> tensor(data, {2, 2, 2});

    ASSERT_EQ(tensor.at({0, 0, 0}), 1.1);
    ASSERT_EQ(tensor.at({1, 0, 0}), 5.5);
    ASSERT_EQ(tensor.at({1, 1, 1}), 8.8);
    ASSERT_THAT(*tensor.row(1), 5.5);
    ASSERT_EQ(tensor.size(), 2);
    ASSERT_EQ(tensor.empty(), false);
}

TEST_F(PlainTensorTest, TestGetDiagonal) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    PlainTensor<double> tensor(data, {2, 2});

    ASSERT_THAT(tensor.get_diagonal(0, 2), ElementsAreArray({1.1, 4.4}));
    ASSERT_THAT(tensor.get_diagonal(1, 2), ElementsAreArray({2.2, 3.3}));
}

TEST_F(PlainTensorTest, TestScan) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    PlainTensor<double> tensor(data, {2, 2});

    ASSERT_THAT(tensor.horizontal_scan(),
                ElementsAreArray({1.1, 2.2, 3.3, 4.4}));
    ASSERT_THAT(tensor.vertical_scan(), ElementsAreArray({1.1, 3.3, 2.2, 4.4}));
}

TEST_F(PlainTensorTest, TestReplicate) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    PlainTensor<double> tensor(data);

    tensor.replicate(12);

    ASSERT_THAT(tensor.data(), ElementsAreArray({
                                   1.1,
                                   2.2,
                                   3.3,
                                   4.4,
                                   1.1,
                                   2.2,
                                   3.3,
                                   4.4,
                                   1.1,
                                   2.2,
                                   3.3,
                                   4.4,
                               }));
    ASSERT_THAT(tensor.shape(), ElementsAreArray({12}));
}

}  // namespace
}  // namespace tenseal
