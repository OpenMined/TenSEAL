#ifndef TENSEAL_TENSOR_STORAGE_H
#define TENSEAL_TENSOR_STORAGE_H

#include "gsl/span"
#include "xtensor/xadapt.hpp"
#include "xtensor/xarray.hpp"
#include "xtensor/xjson.hpp"

namespace tenseal {

using namespace seal;
using namespace std;

inline vector<size_t> position_from_strides(const vector<size_t>& strides,
                                            size_t val) {
    vector<size_t> result;

    for (auto& stride : strides) {
        if (stride == 0)
            result.push_back(0);
        else {
            result.push_back(val / stride);
            val = val % stride;
        }
    }

    return result;
}

inline bool can_reshape(const vector<size_t>& old_shape,
                        const vector<size_t>& new_shape) {
    size_t oldprod = std::accumulate(old_shape.begin(), old_shape.end(), 1,
                                     std::multiplies<size_t>());
    size_t newprod = std::accumulate(new_shape.begin(), new_shape.end(), 1,
                                     std::multiplies<size_t>());

    return oldprod == newprod;
}

/**
 * TensorStorage<dtype_t> interface - A generic API for plain tensor operations.
 * @param dtype_t: root plaintext datatype for representing data(double, int64
 *etc).
 **/
template <typename dtype_t>
class TensorStorage {
   public:
    using dtype = dtype_t;
    using iterator = typename vector<dtype_t>::iterator;
    using const_iterator = typename vector<dtype_t>::const_iterator;
    TensorStorage() = default;
    /**
     * Create a new TensorStorage from an 1D vector.
     * @param[in] input vector.
     */
    TensorStorage(const vector<dtype_t>& data)
        : _data(xt::adapt(data, {data.size()})) {}
    /**
     * Create a new TensorStorage from a 2D vector.
     * @param[in] input matrix.
     */
    TensorStorage(const vector<vector<dtype_t>>& data) {
        size_t H = data.size();
        size_t W = data[0].size();

        if (W == 0) {
            throw invalid_argument("tensor with empty columns");
        }

        if (any_of(data.begin(), data.end(),
                   [&](const vector<dtype_t>& i) { return i.size() != W; })) {
            throw invalid_argument("rows sizes are different");
        }

        vector<dtype_t> flat_data;
        flat_data.reserve(H * W);

        for (auto& vec : data) {
            flat_data.insert(flat_data.end(), vec.begin(), vec.end());
        }

        _data = xt::adapt(flat_data, {H, W});
    }
    /**
     * Create a new TensorStorage from an ND vector.
     * @param[in] input vector.
     * @param[in] input shape.
     */
    TensorStorage(const vector<dtype_t>& data, const vector<size_t>& shape)
        : _data(xt::adapt(data, shape)) {
        size_t expected_size = 1;
        for (auto& d : shape) expected_size *= d;
        if (data.size() != expected_size)
            throw invalid_argument("tensor with mismatched shape");
    }
    /**
     * Create a new TensorStorage from a batched tensor.
     * @param[in] input matrix.
     * @param[in] original shape.
     * @param[in] batching axis.
     */
    TensorStorage(const vector<vector<dtype_t>>& data,
                  const vector<size_t>& shape, size_t dim) {
        if (data[0].size() != shape[dim])
            throw invalid_argument("invalid dimension shape");

        vector<dtype_t> flat_data;
        flat_data.resize(data.size() * data[0].size());

        for (size_t batch_idx = 0; batch_idx < data.size(); ++batch_idx) {
            for (size_t idx = 0; idx < data[batch_idx].size(); ++idx) {
                flat_data[idx * data.size() + batch_idx] = data[batch_idx][idx];
            }
        }

        _data = xt::adapt(flat_data, shape);
    }
    /**
     * Create a new TensorStorage from a serialized buffer.
     * @param[in] input buffer.
     */
    TensorStorage(const std::string& data) { this->load(data); }
    /**
     * Reshape the TensorStorage.
     * @param[in] new shape.
     */
    TensorStorage<dtype_t> reshape(const vector<size_t>& new_shape) {
        return this->copy().reshape_inplace(new_shape);
    }

    TensorStorage<dtype_t>& reshape_inplace(const vector<size_t>& new_shape) {
        if (!can_reshape(this->shape(), new_shape))
            throw invalid_argument("invalid reshape input");

        this->_data.reshape(new_shape);
        return *this;
    }
    /**
     * Broadcast the TensorStorage.
     * @param[in] new shape.
     */
    TensorStorage<dtype_t> broadcast(const vector<size_t>& new_shape) {
        return this->copy().broadcast_inplace(new_shape);
    }

    TensorStorage<dtype_t>& broadcast_inplace(const vector<size_t>& new_shape) {
        this->_data = xt::broadcast(this->_data, new_shape);
        return *this;
    }
    /**
     * Returns the element at position {idx1, idx2, ..., idxn} in the current
     * shape
     * @param[in] desired position from the tensor.
     */
    dtype_t& ref_at(const vector<size_t>& index) {
        auto flat_idx = position(index);
        return flat_ref_at(flat_idx);
    }
    dtype_t at(const vector<size_t>& index) const {
        auto flat_idx = position(index);
        return flat_at(flat_idx);
    }
    dtype_t& flat_ref_at(size_t index) {
        if (index >= _data.size()) throw invalid_argument("index too big");

        return _data.data()[index];
    }
    dtype_t flat_at(size_t index) const {
        if (index >= _data.size()) throw invalid_argument("index too big");

        return _data.data()[index];
    }
    /**
     * Converts integer to position.
     * @param[in] .
     */
    vector<size_t> position(size_t val) const {
        auto strides = this->strides();
        return position_from_strides(strides, val);
    }
    size_t position(const vector<size_t>& index) const {
        if (this->shape().size() != index.size())
            throw invalid_argument(
                "tensor cannot be viewed in the requested format");

        auto strides = this->strides();
        size_t tensor_idx = 0;
        for (size_t d = 0; d < index.size(); ++d) {
            if (index[d] >= this->shape()[d])
                throw invalid_argument("invalid dimension index");
            tensor_idx += index[d] * strides[d];
        }

        return tensor_idx;
    }
    /**
     * Returns iterator to row.
     * @param[in] desired row.
     */
    auto row(size_t idx) const {
        auto strides = this->strides();
        return _data.begin() + idx * strides[0];
    }
    /**
     * Returns the horizontal view of the tensor.
     */
    auto horizontal_scan() const {
        return vector<dtype_t>(_data.begin(), _data.end());
    }
    /**
     * Returns the vertical view of a 2D tensor.
     */
    auto vertical_scan() const {
        if (this->_data.shape().size() != 2)
            throw invalid_argument("tensor cannot be viewed as a matrix");

        size_t in_height = this->_data.shape()[0];
        size_t in_width = this->_data.shape()[1];

        vector<dtype_t> dst;
        dst.resize(in_height * in_width);

        for (size_t i = 0; i < in_height; i++) {
            for (size_t j = 0; j < in_width; j++) {
                dst[i + j * in_height] = this->at({i, j});
            }
        }
        return dst;
    }
    /**
     * Returns a reference to the internal representation of the
     * tensor.
     */
    auto data_ref() const {
        return gsl::span<const dtype_t>(_data.data(), _data.size());
    }
    /**
     * Returns a copy to the internal representation of the
     * tensor.
     */
    auto data() const { return vector<dtype_t>(_data.begin(), _data.end()); }
    /**
     * Returns the current shape of the tensor.
     */
    vector<size_t> shape() const {
        return vector<size_t>(_data.shape().begin(), _data.shape().end());
    }
    /**
     * Returns the current strides of the tensor.
     */
    vector<size_t> strides() const {
        return vector<size_t>(_data.strides().begin(), _data.strides().end());
    }
    /**
     * Returns the size of the first dimension of the tensor.
     */
    size_t size() const { return this->_data.shape()[0]; }
    size_t flat_size() const {
        return std::accumulate(this->_data.shape().begin(),
                               this->_data.shape().end(), 1,
                               std::multiplies<size_t>());
    }
    /**
     * Checks if the tensor is empty.
     */
    size_t empty() const { return _data.size() == 0; }
    /**
     * Casts the tensor to an 1D vector.
     */
    operator vector<dtype_t>() const { return _data; }
    /**
     * Iterator utils
     **/
    inline auto begin() noexcept { return _data.begin(); }
    inline auto cbegin() const noexcept { return _data.cbegin(); }
    inline auto end() noexcept { return _data.end(); }
    inline auto cend() const noexcept { return _data.cend(); }
    /**
     * Return the vector representation batched by an axis.
     */
    auto batch(size_t dim) const {
        if (dim >= this->shape().size())
            throw invalid_argument("invalid dimension for batching");

        size_t batch_size = this->shape()[dim];
        size_t batch_count = this->_data.size() / batch_size;

        vector<vector<dtype_t>> batches;
        batches.resize(batch_count);

        auto new_shape = this->shape();
        new_shape.erase(new_shape.begin() + dim);

        xt::xarray<double> dummy(new_shape);
        auto new_strides = dummy.strides();

        for (size_t idx = 0; idx < _data.size(); ++idx) {
            auto pos = position(idx);
            pos.erase(pos.begin() + dim);

            size_t new_idx = 0;
            for (size_t pidx = 0; pidx < pos.size(); ++pidx)
                new_idx += new_strides[pidx] * pos[pidx];

            batches[new_idx].push_back(_data[idx]);
        }

        for (const auto& it : batches)
            if (it.size() != batch_size)
                throw logic_error("logical error in generating batches");

        return batches;
    }
    /**
     * Replicates the internal representation for <times> elements.
     */
    void replicate(size_t times) {
        if (this->shape().size() != 1)
            throw invalid_argument("can't replicate d-dimensional vectors");

        if (this->empty()) {
            throw invalid_argument("can't replicate an empty vector");
        }
        size_t init_size = _data.size();
        vector<dtype_t> flat_data = vector<dtype_t>(_data.begin(), _data.end());
        flat_data.reserve(times);

        for (size_t i = 0; i < times - init_size; i++) {
            flat_data.push_back(_data[i % init_size]);
        }
        _data = xt::adapt(flat_data, {flat_data.size()});
    }
    static TensorStorage<dtype_t> repeat_value(dtype_t value,
                                               vector<size_t> shape) {
        size_t size = 1;
        for (auto& dim : shape) size *= dim;

        vector<dtype_t> repeated(size, value);
        return TensorStorage<dtype_t>(repeated, shape);
    }
    TensorStorage<dtype_t> copy() {
        return TensorStorage<dtype_t>(this->_data, this->shape());
    }

    std::string save() {
        nlohmann::json buf = _data;
        return buf.dump();
    }

    void load(const std::string& buf) {
        xt::from_json(nlohmann::json::parse(buf), _data);
    }

   private:
    xt::xarray<dtype_t> _data;
};

}  // namespace tenseal

#endif
