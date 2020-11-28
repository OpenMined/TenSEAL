#ifndef TENSEAL_TENSOR_PLAIN_TENSOR_H
#define TENSEAL_TENSOR_PLAIN_TENSOR_H

#include "tenseal/cpp/utils/nested_vector.h"

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

/**
 * PlainTensor<plain_t> interface - A generic API for plain tensor operations.
 * @param plain_t: root plaintext datatype for representing data(double, int64
 *etc).
 **/
template <typename plain_t>
class PlainTensor {
   public:
    using dtype = plain_t;
    using iterator = typename vector<plain_t>::iterator;
    using const_iterator = typename vector<plain_t>::const_iterator;
    /**
     * Create a new PlainTensor from an 1D vector.
     * @param[in] input vector.
     */
    PlainTensor(const vector<plain_t>& data)
        : _data(data), _shape({data.size()}), _strides({1}) {}
    /**
     * Create a new PlainTensor from a 2D vector.
     * @param[in] input matrix.
     */
    PlainTensor(const vector<vector<plain_t>>& data) {
        size_t H = data.size();
        size_t W = data[0].size();

        if (W == 0) {
            throw invalid_argument("tensor with empty columns");
        }

        if (any_of(data.begin(), data.end(),
                   [&](const vector<plain_t>& i) { return i.size() != W; })) {
            throw invalid_argument("rows sizes are different");
        }

        _shape = {H, W};
        _strides = generate_strides(_shape);
        _data.reserve(H * W);

        for (auto& vec : data) {
            _data.insert(_data.end(), vec.begin(), vec.end());
        }
    }
    /**
     * Create a new PlainTensor from an ND vector.
     * @param[in] input vector.
     * @param[in] input shape.
     */
    PlainTensor(const vector<plain_t>& data, const vector<size_t>& shape)
        : _data(data), _shape(shape), _strides(generate_strides(shape)) {
        size_t expected_size = 1;
        for (auto& d : shape) expected_size *= d;
        if (data.size() != expected_size)
            throw invalid_argument("tensor with mismatched shape");
    }
    /**
     * Returns the element at position {idx1, idx2, ..., idxn} in the current
     * shape
     * @param[in] desired position from the tensor.
     */
    plain_t at(const vector<size_t>& index) const {
        if (_strides.size() != index.size())
            throw invalid_argument(
                "tensor cannot be viewed in the requested format");

        size_t tensor_idx = 0;
        for (size_t d = 0; d < index.size(); ++d)
            tensor_idx += index[d] * _strides[d];

        return _data[tensor_idx];
    }
    /**
     * Returns iterator to row.
     * @param[in] desired row.
     */
    auto row(size_t idx) const { return _data.begin() + idx * _strides[0]; }

    /*
    Returns the k-th diagonal of a matrix. Positive values of k represent upper
    diagonals while negative values represent lower diagonal with 0 being the
    main diagonal. It's important to note that diagonals are extended to fit the
    size of the matrix, we do that by rotating whenever we reach the boundaries
    of the matrix.
    */
    vector<plain_t> get_diagonal(int k, size_t max_size) const {
        if (_shape.size() != 2)
            throw invalid_argument("tensor cannot be viewed as a matrix");
        size_t n_rows = _shape[0];
        size_t n_cols = _shape[1];

        vector<plain_t> t_diag;
        t_diag.reserve(n_rows * n_cols);

        size_t r_offset = 0, c_offset = 0;
        if (k > 0) {  // upper diagonals
            c_offset = k;
        } else {  // lower diagonal
            r_offset = -k;
        }

        size_t diag_size = min(max_size, n_rows * n_cols);
        for (size_t i = 0; i < diag_size; i++) {
            t_diag.push_back(
                this->at({(r_offset + i) % n_rows, (c_offset + i) % n_cols}));
        }

        return t_diag;
    }
    /**
     * Image Block to Columns implementation
     **/
    size_t im2col(vector<vector<plain_t>>& dst, const size_t window_height,
                  const size_t window_width, const size_t stride) {
        if (_shape.size() != 2)
            throw invalid_argument("tensor cannot be viewed as a matrix");

        // input shape
        size_t in_height = _shape[0];
        size_t in_width = _shape[1];

        // output shape
        size_t out_height = (in_height - window_height) / stride + 1;
        size_t out_width = (in_width - window_width) / stride + 1;
        dst.reserve(out_height);

        // windows number
        size_t windows_nb = out_height * out_width;

        // kernel_size
        size_t kernel_size = window_width * window_height;
        // calculate the next power of 2
        kernel_size = 1 << (static_cast<size_t>(ceil(log2(kernel_size))));

        for (size_t j = 0; j < in_height - window_height + 1; j += stride) {
            for (size_t i = 0; i < in_width - window_width + 1; i += stride) {
                // pad the window vector to the next power of 2 of kernel size
                vector<plain_t> window_vec(kernel_size, 0);
                auto iter = window_vec.begin();
                for (size_t k = 0; k < window_height; k++) {
                    iter = copy(this->row(j + k) + i,
                                this->row(j + k) + i + window_width, iter);
                }
                dst.push_back(window_vec);
            }
        }

        return windows_nb;
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

        vector<plain_t> dst;
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
    const vector<plain_t>& data() const { return _data; }
    /**
     * Returns the current shape of the tensor.
     */
    vector<size_t> shape() const { return _shape; }
    /**
     * Returns the current strides of the tensor.
     */
    vector<size_t> strides() const { return _strides; }
    /**
     * Returns the size of the first dimension of the tensor.
     */
    size_t size() const { return _shape[0]; }
    /**
     * Checks if the tensor is empty.
     */
    size_t empty() const { return _data.empty(); }
    /**
     * Returns the number of dimensions.
     */
    constexpr size_t dimensions() {
        if (_shape.size() == 2) return 2;

        return 1;
    }
    /**
     * Casts the tensor to an 1D vector.
     */
    operator vector<plain_t>() const { return _data; }
    /**
     * Iterator utils
     **/
    inline iterator begin() noexcept { return _data.begin(); }
    inline const_iterator cbegin() const noexcept { return _data.cbegin(); }
    inline iterator end() noexcept { return _data.end(); }
    inline const_iterator cend() const noexcept { return _data.cend(); }
    /**
     * Return the actual vector representation.
     */
    template <size_t dims>
    auto tolist() {
        auto shaped_vector = NestedVector<plain_t, dims>::Generate();
        tolist_for_dim(shaped_vector, 0, 0);
        return shaped_vector;
    }
    /**
     * Return the vector representation batched by an axis.
     */
    auto batch(size_t dim) {
        size_t batch_size = this->_shape[dim];
        size_t batch_count = this->_data.size() / batch_size;

        vector<vector<plain_t>> batches;

        for (size_t idx = 0; idx < batch_count; ++idx) {
            batches.push_back(vector<plain_t>());
        }

        for (size_t idx = 0; idx < _data.size(); ++idx) {
            batches[idx % batch_count].push_back(_data[idx]);
        }

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

   private:
    vector<plain_t> _data;
    vector<size_t> _shape;
    vector<size_t> _strides;

    /*
     * Helpers for generating to list representation
     * */
    template <typename T>
    void tolist_for_dim(vector<T>& data, size_t dim, size_t off) {
        if (dim >= this->_shape.size())
            throw invalid_argument("invalid dimension");

        data.resize(this->_shape[dim]);

        for (size_t idx = 0; idx < data.size(); ++idx) {
            size_t new_off = off + idx * _strides[dim];
            tolist_for_dim(data[idx], dim + 1, new_off);
        }
    }
    void tolist_for_dim(vector<plain_t>& data, size_t dim, size_t off) {
        if (dim != this->_shape.size() - 1) {
            throw invalid_argument("invalid dimension");
        }

        data = vector<plain_t>(_data.begin() + off,
                               _data.begin() + off + this->_shape[dim]);
    }
};

}  // namespace tenseal

#endif
