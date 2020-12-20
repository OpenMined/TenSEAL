#ifndef TENSEAL_TENSOR_STORAGE_H
#define TENSEAL_TENSOR_STORAGE_H

namespace tenseal {

using namespace seal;
using namespace std;

inline vector<size_t> generate_strides(const vector<size_t>& shape) {
    vector<size_t> strides;

    size_t current_stride = 1;
    for (auto it = shape.rbegin(); it != shape.rend(); ++it) {
        strides.push_back(current_stride);
        current_stride *= *it;
    }

    std::reverse(begin(strides), end(strides));

    return strides;
}

inline vector<size_t> position_from_strides(const vector<size_t>& strides,
                                            size_t val) {
    vector<size_t> result;

    for (auto& stride : strides) {
        result.push_back(val / stride);
        val = val % stride;
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
        : _data(data), _shape({data.size()}) {}
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

        _shape = {H, W};
        _data.reserve(H * W);

        for (auto& vec : data) {
            _data.insert(_data.end(), vec.begin(), vec.end());
        }
    }
    /**
     * Create a new TensorStorage from an ND vector.
     * @param[in] input vector.
     * @param[in] input shape.
     */
    TensorStorage(const vector<dtype_t>& data, const vector<size_t>& shape)
        : _data(data), _shape(shape) {
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
                  const vector<size_t>& shape, size_t dim)
        : _shape(shape) {
        if (data[0].size() != shape[dim])
            throw invalid_argument("invalid dimension shape");

        _data.resize(data.size() * data[0].size());

        for (size_t batch_idx = 0; batch_idx < data.size(); ++batch_idx) {
            for (size_t idx = 0; idx < data[batch_idx].size(); ++idx) {
                _data[idx * data.size() + batch_idx] = data[batch_idx][idx];
            }
        }
    }
    TensorStorage<dtype_t> reshape(const vector<size_t>& new_shape) {
        return this->copy().reshape_inplace(new_shape);
    }

    TensorStorage<dtype_t>& reshape_inplace(const vector<size_t>& new_shape) {
        if (!can_reshape(this->_shape, new_shape))
            throw invalid_argument("invalid reshape input");

        this->_shape = new_shape;
        return *this;
    }
    /**
     * Returns the element at position {idx1, idx2, ..., idxn} in the current
     * shape
     * @param[in] desired position from the tensor.
     */
    dtype_t& ref_at(const vector<size_t>& index) {
        return _data[position(index)];
    }
    dtype_t at(const vector<size_t>& index) const {
        return _data[position(index)];
    }
    dtype_t& flat_ref_at(size_t index) {
        if (index >= _data.size()) throw invalid_argument("index too big");

        return _data[index];
    }
    dtype_t flat_at(size_t index) const {
        if (index >= _data.size()) throw invalid_argument("index too big");

        return _data[index];
    }
    /**
     * Converts integer to position.
     * @param[in] .
     */
    vector<size_t> position(size_t val) const {
        auto strides = generate_strides(_shape);
        return position_from_strides(strides, val);
    }
    size_t position(const vector<size_t>& index) const {
        if (_shape.size() != index.size())
            throw invalid_argument(
                "tensor cannot be viewed in the requested format");

        auto strides = generate_strides(_shape);
        size_t tensor_idx = 0;
        for (size_t d = 0; d < index.size(); ++d) {
            if (index[d] >= _shape[d])
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
        auto strides = generate_strides(_shape);
        return _data.begin() + idx * strides[0];
    }
    /**
     * Returns the horizontal view of the tensor.
     */
    auto horizontal_scan() const { return _data; }
    /**
     * Returns the vertical view of a 2D tensor.
     */
    auto vertical_scan() const {
        if (_shape.size() != 2)
            throw invalid_argument("tensor cannot be viewed as a matrix");

        size_t in_height = _shape[0];
        size_t in_width = _shape[1];

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
    const vector<dtype_t>& data() const { return _data; }
    /**
     * Returns the current shape of the tensor.
     */
    vector<size_t> shape() const { return _shape; }
    /**
     * Returns the current strides of the tensor.
     */
    vector<size_t> strides() const { return generate_strides(_shape); }
    /**
     * Returns the size of the first dimension of the tensor.
     */
    size_t size() const { return _shape[0]; }
    size_t flat_size() const {
        return std::accumulate(_shape.begin(), _shape.end(), 1,
                               std::multiplies<size_t>());
    }
    /**
     * Checks if the tensor is empty.
     */
    size_t empty() const { return _data.empty(); }
    /**
     * Casts the tensor to an 1D vector.
     */
    operator vector<dtype_t>() const { return _data; }
    /**
     * Iterator utils
     **/
    inline iterator begin() noexcept { return _data.begin(); }
    inline const_iterator cbegin() const noexcept { return _data.cbegin(); }
    inline iterator end() noexcept { return _data.end(); }
    inline const_iterator cend() const noexcept { return _data.cend(); }
    /**
     * Return the vector representation batched by an axis.
     */
    auto batch(size_t dim) const {
        if (dim >= this->_shape.size())
            throw invalid_argument("invalid dimension for batching");

        size_t batch_size = this->_shape[dim];
        size_t batch_count = this->_data.size() / batch_size;

        vector<vector<dtype_t>> batches;
        batches.resize(batch_count);

        auto new_shape = _shape;
        new_shape.erase(new_shape.begin() + dim);
        auto new_strides = generate_strides(new_shape);

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
        if (_shape.size() != 1)
            throw invalid_argument("can't replicate d-dimensional vectors");

        if (_data.empty()) {
            throw invalid_argument("can't replicate an empty vector");
        }
        size_t init_size = _data.size();
        _data.reserve(times);
        for (size_t i = 0; i < times - init_size; i++) {
            _data.push_back(_data[i % init_size]);
        }
        _shape = {_data.size()};
    }
    static TensorStorage<dtype_t> repeat_value(dtype_t value,
                                               vector<size_t> shape) {
        size_t size = 1;
        for (auto& dim : shape) size *= dim;

        vector<dtype_t> repeated(size, value);
        return TensorStorage<dtype_t>(repeated, shape);
    }
    TensorStorage<dtype_t> copy() {
        return TensorStorage<dtype_t>(this->_data, this->_shape);
    }

   private:
    vector<dtype_t> _data;
    vector<size_t> _shape;
};

}  // namespace tenseal

#endif
