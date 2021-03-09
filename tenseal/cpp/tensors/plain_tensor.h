#ifndef TENSEAL_TENSOR_PLAIN_TENSOR_H
#define TENSEAL_TENSOR_PLAIN_TENSOR_H

#include "tenseal/cpp/tensors/tensor_storage.h"

namespace tenseal {

using namespace seal;
using namespace std;

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
    PlainTensor(const vector<plain_t>& data) : _data(data) {}
    /**
     * Create a new PlainTensor from a 2D vector.
     * @param[in] input matrix.
     */
    PlainTensor(const vector<vector<plain_t>>& data) : _data(data) {}
    /**
     * Create a new PlainTensor from an ND vector.
     * @param[in] input vector.
     * @param[in] input shape.
     */
    PlainTensor(const vector<plain_t>& data, const vector<size_t>& shape)
        : _data(data, shape) {}
    /**
     * Create a new PlainTensor from a batched tensor.
     * @param[in] input matrix.
     * @param[in] original shape.
     * @param[in] batching axis.
     */
    PlainTensor(const vector<vector<plain_t>>& data,
                const vector<size_t>& shape, size_t dim)
        : _data(data, shape, dim) {}
    /**
     * Create a new PlainTensor from an existing storage.
     * @param[in] existing storage.
     */
    PlainTensor(const TensorStorage<plain_t>& data) : _data(data) {}
    /**
     * Create a new PlainTensor from a serialized buffer.
     * @param[in] serialized buffer.
     */
    PlainTensor(const std::string& data) { this->load(data); }
    /**
     * Reshape the tensor
     * **/
    PlainTensor<plain_t> reshape(const vector<size_t>& new_shape) {
        return this->copy().reshape_inplace(new_shape);
    }
    PlainTensor<plain_t>& reshape_inplace(const vector<size_t>& new_shape) {
        this->_data.reshape_inplace(new_shape);
        return *this;
    }
    /**
     * Broadcast
     * **/
    PlainTensor<plain_t> broadcast(const vector<size_t>& new_shape) const {
        return this->copy().broadcast_inplace(new_shape);
    }
    PlainTensor<plain_t>& broadcast_inplace(const vector<size_t>& new_shape) {
        this->_data.broadcast_inplace(new_shape);
        return *this;
    }
    /**
     * Returns the element at position {idx1, idx2, ..., idxn} in the current
     * shape
     * @param[in] desired position from the tensor.
     */
    plain_t at(const vector<size_t>& index) const { return _data.at(index); }
    plain_t& ref_at(const vector<size_t>& index) { return _data.ref_at(index); }
    plain_t flat_at(size_t index) const { return _data.flat_at(index); }
    plain_t& flat_ref_at(size_t index) { return _data.flat_ref_at(index); }
    /**
     * Converts integer to position.
     * @param[in] .
     */
    vector<size_t> position(size_t val) const {
        return this->_data.position(val);
    }
    /**
     * Returns iterator to row.
     * @param[in] desired row.
     */
    auto row(size_t idx) const { return this->_data.row(idx); }

    /*
    Returns the k-th diagonal of a matrix. Positive values of k represent upper
    diagonals while negative values represent lower diagonal with 0 being the
    main diagonal. It's important to note that diagonals are extended to fit the
    size of the matrix, we do that by rotating whenever we reach the boundaries
    of the matrix.
    */
    vector<plain_t> get_diagonal(int k, size_t max_size) const {
        if (_data.shape().size() != 2)
            throw invalid_argument("tensor cannot be viewed as a matrix");
        size_t n_rows = _data.shape()[0];
        size_t n_cols = _data.shape()[1];

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
        if (_data.shape().size() != 2)
            throw invalid_argument("tensor cannot be viewed as a matrix");

        // input shape
        size_t in_height = _data.shape()[0];
        size_t in_width = _data.shape()[1];

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
                    iter = std::copy(this->row(j + k) + i,
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
    auto horizontal_scan() const { return _data.horizontal_scan(); }
    /**
     * Returns the vertical view of a 2D tensor.
     */
    auto vertical_scan() const { return _data.vertical_scan(); }
    /**
     * Returns a reference to the internal representation of the
     * tensor.
     */
    auto data_ref() const { return _data.data_ref(); }
    auto data() const { return _data.data(); }
    /**
     * Returns the current shape of the tensor.
     */
    vector<size_t> shape() const { return _data.shape(); }
    /**
     * Returns the current strides of the tensor.
     */
    vector<size_t> strides() const { return _data.strides(); }
    /**
     * Returns the size of the first dimension of the tensor.
     */
    size_t size() const { return _data.size(); }
    size_t flat_size() const { return _data.flat_size(); }
    /**
     * Checks if the tensor is empty.
     */
    size_t empty() const { return _data.empty(); }
    /**
     * Casts the tensor to an 1D vector.
     */
    operator vector<plain_t>() const { return _data.data(); }
    /**
     * Split the tensor in chunks
     * */
    vector<PlainTensor<plain_t>> chunks(size_t max_size) const {
        auto storage_chunks = _data.chunks(max_size);

        vector<PlainTensor<plain_t>> result;
        result.reserve(storage_chunks.size());

        for (auto& chunk : storage_chunks)
            result.push_back(PlainTensor<plain_t>(chunk));
        return result;
    }
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
    auto batch(size_t dim) const { return _data.batch(dim); }
    /**
     * Replicates the internal representation for <times> elements.
     */
    void replicate(size_t times) { return _data.replicate(times); }

    static PlainTensor<plain_t> repeat_value(plain_t value,
                                             vector<size_t> shape) {
        size_t size = 1;
        for (auto& dim : shape) size *= dim;

        vector<plain_t> repeated(size, value);
        return PlainTensor<plain_t>(repeated, shape);
    }
    PlainTensor<plain_t> copy() const {
        return PlainTensor<plain_t>(this->_data);
    }

    std::string save() const { return _data.save(); }

    void load(const std::string& buf) { _data = TensorStorage<plain_t>(buf); }

   private:
    TensorStorage<plain_t> _data;
};

}  // namespace tenseal

#endif
