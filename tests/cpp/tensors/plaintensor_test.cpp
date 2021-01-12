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
    ASSERT_THAT(tensor.strides(), ElementsAreArray({2, 1, 0}));
}

TEST_F(PlainTensorTest, TestTensorAccess) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8};
    PlainTensor<double> tensor(data, {2, 2, 2});

    ASSERT_EQ(tensor.at({0, 0, 0}), 1.1);
    ASSERT_EQ(tensor.at({1, 0, 0}), 5.5);
    ASSERT_EQ(tensor.at({1, 1, 1}), 8.8);
    ASSERT_THAT(tensor.position(0), ElementsAre(0, 0, 0));
    ASSERT_THAT(tensor.position(1), ElementsAre(0, 0, 1));
    ASSERT_THAT(tensor.position(3), ElementsAre(0, 1, 1));
    ASSERT_THAT(*tensor.row(1), 5.5);
    ASSERT_EQ(tensor.size(), 2);
    ASSERT_EQ(tensor.empty(), false);

    tensor.reshape_inplace({4, 2});
    ASSERT_THAT(tensor.shape(), ElementsAreArray({4, 2}));
    ASSERT_THAT(tensor.strides(), ElementsAreArray({2, 1}));
    ASSERT_EQ(tensor.at({0, 0}), 1.1);
    ASSERT_EQ(tensor.at({3, 0}), 7.7);
    ASSERT_THAT(tensor.position(0), ElementsAre(0, 0));
    ASSERT_THAT(tensor.position(1), ElementsAre(0, 1));
    ASSERT_THAT(tensor.position(3), ElementsAre(1, 1));
    ASSERT_THAT(*tensor.row(1), 3.3);
    ASSERT_EQ(tensor.size(), 4);
    ASSERT_EQ(tensor.empty(), false);

    EXPECT_THROW(tensor.reshape({5, 5}), std::exception);

    auto new_tensor = tensor.reshape({2, 2, 2});
    ASSERT_THAT(tensor.shape(), ElementsAreArray({4, 2}));
    ASSERT_THAT(new_tensor.shape(), ElementsAreArray({2, 2, 2}));
}

TEST_F(PlainTensorTest, TestTensorBroadcast) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    PlainTensor<double> tensor(data, {2, 2});

    auto res = tensor.broadcast({2, 2, 2});
    ASSERT_THAT(res.shape(), ElementsAreArray({2, 2, 2}));
    ASSERT_THAT(res.strides(), ElementsAreArray({4, 2, 1}));
    ASSERT_THAT(res.data(),
                ElementsAreArray({1.1, 2.2, 3.3, 4.4, 1.1, 2.2, 3.3, 4.4}));

    EXPECT_THROW(tensor.broadcast({3, 3}), std::exception);

    tensor.broadcast_inplace({3, 2, 2, 1});
    ASSERT_THAT(tensor.shape(), ElementsAreArray({3, 2, 2, 2}));
    ASSERT_THAT(tensor.strides(), ElementsAreArray({8, 4, 2, 1}));
    ASSERT_THAT(tensor.data(),
                ElementsAreArray({1.1, 2.2, 3.3, 4.4, 1.1, 2.2, 3.3, 4.4,
                                  1.1, 2.2, 3.3, 4.4, 1.1, 2.2, 3.3, 4.4,
                                  1.1, 2.2, 3.3, 4.4, 1.1, 2.2, 3.3, 4.4}));
}

TEST_F(PlainTensorTest, TestTensorBroadcastMemory) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4};
    PlainTensor<double> tensor(data, {2, 2});

    auto res = tensor.broadcast({2, 2, 2});

    res.ref_at({1, 1, 1}) = 999;
    ASSERT_THAT(res.data(), ElementsAreArray(vector<double>(
                                {1.1, 2.2, 3.3, 4.4, 1.1, 2.2, 3.3, 999})));
}

TEST_F(PlainTensorTest, TestTensorAccess1D) {
    vector<vector<double>> data = {{1.1}, {2.2}, {3.3}, {4.4},
                                   {5.5}, {6.6}, {7.7}, {8.8}};
    PlainTensor<double> tensor(data);

    ASSERT_EQ(tensor.at({0, 0}), 1.1);
    ASSERT_EQ(tensor.at({4, 0}), 5.5);
    ASSERT_EQ(tensor.at({7, 0}), 8.8);

    ASSERT_THAT(tensor.vertical_scan(),
                ElementsAreArray({1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8}));
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

    tensor.replicate(8);

    ASSERT_THAT(tensor.data(), ElementsAreArray({
                                   1.1,
                                   2.2,
                                   3.3,
                                   4.4,
                                   1.1,
                                   2.2,
                                   3.3,
                                   4.4,
                               }));
    ASSERT_THAT(tensor.shape(), ElementsAreArray({8}));
}

TEST_F(PlainTensorTest, TestBatch) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4, 5.5, 6.6};
    PlainTensor<double> tensor(data, {2, 3});

    auto out = tensor.batch(0);

    size_t cnt = out.size();
    size_t size = out[0].size();

    ASSERT_EQ(cnt, 3);
    ASSERT_EQ(size, 2);

    ASSERT_THAT(out[0], ElementsAreArray({1.1, 4.4}));
    ASSERT_THAT(out[1], ElementsAreArray({2.2, 5.5}));
    ASSERT_THAT(out[2], ElementsAreArray({3.3, 6.6}));

    out = tensor.batch(1);

    cnt = out.size();
    size = out[0].size();

    ASSERT_EQ(cnt, 2);
    ASSERT_EQ(size, 3);

    ASSERT_THAT(out[0], ElementsAreArray({1.1, 2.2, 3.3}));
    ASSERT_THAT(out[1], ElementsAreArray({4.4, 5.5, 6.6}));
}

TEST_F(PlainTensorTest, TestBatch3D) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4,   5.5,   6.6,
                           7.7, 8.8, 9.9, 10.10, 11.11, 12.12};
    PlainTensor<double> tensor(data, {
                                         2,
                                         3,
                                         2,
                                     });

    auto out = tensor.batch(0);

    size_t cnt = out.size();
    size_t size = out[0].size();

    ASSERT_EQ(cnt, 6);
    ASSERT_EQ(size, 2);

    ASSERT_THAT(out[0], ElementsAreArray({1.1, 7.7}));
    ASSERT_THAT(out[1], ElementsAreArray({2.2, 8.8}));

    out = tensor.batch(1);

    cnt = out.size();
    size = out[0].size();

    ASSERT_EQ(cnt, 4);
    ASSERT_EQ(size, 3);

    ASSERT_THAT(out[0], ElementsAreArray({1.1, 3.3, 5.5}));
    ASSERT_THAT(out[1], ElementsAreArray({2.2, 4.4, 6.6}));
    ASSERT_THAT(out[2], ElementsAreArray({7.7, 9.9, 11.11}));
    ASSERT_THAT(out[3], ElementsAreArray({8.8, 10.10, 12.12}));

    out = tensor.batch(2);

    cnt = out.size();
    size = out[0].size();

    ASSERT_EQ(cnt, 6);
    ASSERT_EQ(size, 2);

    ASSERT_THAT(out[0], ElementsAreArray({1.1, 2.2}));
    ASSERT_THAT(out[1], ElementsAreArray({3.3, 4.4}));
}

TEST_F(PlainTensorTest, TestUnbatch) {
    vector<double> data = {1.1, 2.2, 3.3, 4.4,   5.5,   6.6,
                           7.7, 8.8, 9.9, 10.10, 11.11, 12.12};
    PlainTensor<double> tensor(data, {
                                         2,
                                         3,
                                         2,
                                     });

    auto out = tensor.batch(0);

    PlainTensor<double> unbatch(out, {2, 3, 2}, 0);

    ASSERT_THAT(unbatch.shape(), ElementsAreArray({2, 3, 2}));
    ASSERT_THAT(unbatch.data(), ElementsAreArray(data));
}

}  // namespace
}  // namespace tenseal
