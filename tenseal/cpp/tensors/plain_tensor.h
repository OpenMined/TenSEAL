#ifndef TENSEAL_TENSOR_PLAIN_TENSOR_H
#define TENSEAL_TENSOR_PLAIN_TENSOR_H

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
        _strides = {W, 1};
        _data.reserve(H * W);

        for (auto& vec : data) {
            _data.insert(_data.end(), vec.begin(), vec.end());
        }
    }
    /**
     * Returns element at position {idx1, idx2, ..., idxn} in the current shape
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
     * Returns the horizontal view of the tensor.
     */
    auto horizontal_scan() const { return _data; }
    /**
     * Returns a reference to the internal representation of the tensor.
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
     * Casts the tensor to an 1D vector.
     */
    operator vector<plain_t>() const { return _data; }
    /**
     * Replicates the internal representation for <times> elements.
     */
    void replicate(size_t times) {
        if (_data.empty()) {
            throw invalid_argument("can't replicate an empty vector");
        }
        size_t init_size = _data.size();
        _data.reserve(times);
        for (size_t i = 0; i < times - init_size; i++) {
            _data.push_back(_data[i % init_size]);
        }
    }

   private:
    vector<plain_t> _data;
    vector<size_t> _shape;
    vector<size_t> _strides;
};

}  // namespace tenseal

#endif
