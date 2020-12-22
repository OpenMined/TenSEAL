#include <pybind11/pybind11.h>
#include <pybind11/stl.h>

#include <memory>
#include <vector>

#include "tenseal/cpp/tenseal.h"

using namespace tenseal;
using namespace seal;
using namespace std;
namespace py = pybind11;

template <typename plain_t>
void bind_plain_tensor(py::module &m, const std::string &name) {
    using type = PlainTensor<plain_t>;
    std::string class_name = "PlainTensor" + name;

    py::class_<type>(m, class_name.c_str(), py::module_local())
        .def(py::init<const vector<plain_t> &>())
        .def(py::init<const vector<vector<plain_t>> &>())
        .def(py::init<const vector<plain_t> &, const vector<size_t> &>())
        .def("at", &type::at)
        .def("get_diagonal", &type::get_diagonal)
        .def("horizontal_scan", &type::horizontal_scan)
        .def("vertical_scan", &type::vertical_scan)
        .def("data", &type::data)
        .def("shape", &type::shape)
        .def("strides", &type::strides)
        .def("size", &type::size)
        .def("batch", &type::batch)
        .def("reshape", &type::reshape)
        .def("reshape_", &type::reshape_inplace)
        .def("__len__", &type::size)
        .def("empty", &type::empty)
        .def("replicate", &type::replicate);
}

PYBIND11_MODULE(_tenseal_cpp, m) {
    m.doc() = "Library for doing homomorphic encryption operations on tensors";

    m.def("bfv_parameters", &create_bfv_parameters,
          R"(Create an EncryptionParameters object for the BFV scheme.
    Args:
        poly_modulus_degree : The degree of the polynomial modulus, must be a power of two.
        plain_modulus : The plaintext modulus.
        coeff_mod_bit_sizes : List of bit size for each coeffecient modulus.)",
          py::arg("poly_modulus_degree"), py::arg("plain_modulus"),
          py::arg("coeff_mod_bit_sizes") = vector<int>());

    m.def("ckks_parameters", &create_ckks_parameters,
          R"(Create an EncryptionParameters object for the CKKS scheme.
    Args:
        poly_modulus_degree : The degree of the polynomial modulus, must be a power of two.
        coeff_mod_bit_sizes : List of bit size for each coeffecient modulus.)",
          py::arg("poly_modulus_degree"), py::arg("coeff_mod_bit_sizes"));

    m.def(
        "context", &create_context,
        R"(create a SEALContext object, checking the validity and properties of encryption_parameters.
    Args:
        encryption_parameters : parameters to use to create the SEALContext.)",
        py::arg("encryption_parameters"));

    bind_plain_tensor<double>(m, "Double");
    bind_plain_tensor<int64_t>(m, "Int64");

    py::class_<BFVVector, std::shared_ptr<BFVVector>>(m, "BFVVector",
                                                      py::module_local())
        .def(py::init([](const shared_ptr<TenSEALContext> &ctx,
                         const vector<int64_t> &data) {
            return BFVVector::Create(ctx, data);
        }))
        .def(py::init(
            [](const shared_ptr<TenSEALContext> &ctx, const std::string &data) {
                return BFVVector::Create(ctx, data);
            }))
        .def(py::init(
            [](const std::string &data) { return BFVVector::Create(data); }))
        .def("size", py::overload_cast<>(&BFVVector::size, py::const_))
        .def("decrypt",
             [](shared_ptr<BFVVector> obj) { return obj->decrypt().data(); })
        .def("decrypt",
             [](shared_ptr<BFVVector> obj,
                const std::shared_ptr<SecretKey> &sk) {
                 return obj->decrypt(sk).data();
             })
        .def("add", &BFVVector::add)
        .def("add_", &BFVVector::add_inplace)
        .def("add_plain",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->add_plain(other);
             })
        .def("add_plain_",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->add_plain_inplace(other);
             })
        .def("sub", &BFVVector::sub)
        .def("sub_", &BFVVector::sub_inplace)
        .def("sub_plain",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->sub_plain(other);
             })
        .def("sub_plain_",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->sub_plain_inplace(other);
             })
        .def("mul", &BFVVector::mul)
        .def("mul_", &BFVVector::mul_inplace)
        .def("mul_plain",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->mul_plain(other);
             })
        .def("mul_plain_",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->mul_plain_inplace(other);
             })
        // python arithmetic
        .def("__add__", &BFVVector::add)
        .def("__add__",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->add_plain(other);
             })
        .def("__iadd__", &BFVVector::add_inplace)
        .def("__iadd__",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->add_plain_inplace(other);
             })
        .def("__sub__", &BFVVector::sub)
        .def("__sub__",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->sub_plain(other);
             })
        .def("__isub__", &BFVVector::sub_inplace)
        .def("__isub__",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->sub_plain_inplace(other);
             })
        .def("__mul__", &BFVVector::mul)
        .def("__mul__",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->mul_plain(other);
             })
        .def("__imul__", &BFVVector::mul_inplace)
        .def("__imul__",
             [](shared_ptr<BFVVector> obj, const vector<int64_t> &other) {
                 return obj->mul_plain_inplace(other);
             })
        .def("context", &BFVVector::tenseal_context)
        .def("link_context", &BFVVector::link_tenseal_context)
        .def("serialize",
             [](shared_ptr<BFVVector> &obj) { return py::bytes(obj->save()); })
        .def("copy", &BFVVector::deepcopy)
        .def("__copy__",
             [](shared_ptr<BFVVector> &obj) { return obj->deepcopy(); })
        .def("__deepcopy__", [](const shared_ptr<BFVVector> &obj,
                                py::dict) { return obj->deepcopy(); })
        .def_static(
            "pack_vectors", [](const vector<shared_ptr<BFVVector>> &vectors) {
                return pack_vectors<BFVVector, BatchEncoder, int64_t>(vectors);
            });

    // CKKSVector utils
    m.def("im2col_encoding",
          [](shared_ptr<TenSEALContext> ctx, vector<vector<double>> &raw_input,
             const size_t kernel_n_rows, const size_t kernel_n_cols,
             const size_t stride) {
              vector<vector<double>> view_as_window;

              PlainTensor<double> input(raw_input);
              size_t windows_nb = input.im2col(view_as_window, kernel_n_rows,
                                               kernel_n_cols, stride);

              PlainTensor<double> view_as_window_tensor(view_as_window);
              auto final_vector = view_as_window_tensor.vertical_scan();

              auto ckks_vector = CKKSVector::Create(ctx, final_vector);
              return make_pair(ckks_vector, windows_nb);
          });

    m.def("enc_matmul_encoding", [](shared_ptr<TenSEALContext> ctx,
                                    const vector<vector<double>> &input) {
        vector<vector<double>> padded_matrix;
        padded_matrix.reserve(input.size());
        // calculate the next power of 2
        size_t plain_vec_size =
            1 << (static_cast<size_t>(ceil(log2(input[0].size()))));

        for (size_t i = 0; i < input.size(); i++) {
            // pad the row to the next power of 2
            vector<double> row(plain_vec_size, 0);
            copy(input[i].begin(), input[i].end(), row.begin());
            padded_matrix.push_back(row);
        }

        PlainTensor<double> padded_tensor(padded_matrix);
        auto final_vector = padded_tensor.vertical_scan();

        auto ckks_vector = CKKSVector::Create(ctx, final_vector);
        return ckks_vector;
    });

    py::class_<CKKSVector, std::shared_ptr<CKKSVector>>(m, "CKKSVector",
                                                        py::module_local())
        // specifying scale
        .def(py::init([](const shared_ptr<TenSEALContext> &ctx,
                         const vector<double> &data, double scale) {
            return CKKSVector::Create(ctx, data, scale);
        }))
        // using global_scale if set
        .def(py::init([](const shared_ptr<TenSEALContext> &ctx,
                         const vector<double> &data) {
            return CKKSVector::Create(ctx, data);
        }))
        .def(py::init(
            [](const shared_ptr<TenSEALContext> &ctx, const std::string &data) {
                return CKKSVector::Create(ctx, data);
            }))
        .def(py::init(
            [](const std::string &data) { return CKKSVector::Create(data); }))
        .def("size", py::overload_cast<>(&CKKSVector::size, py::const_))
        .def("decrypt",
             [](shared_ptr<CKKSVector> obj) { return obj->decrypt().data(); })
        .def("decrypt",
             [](shared_ptr<CKKSVector> obj, const shared_ptr<SecretKey> &sk) {
                 return obj->decrypt(sk).data();
             })
        .def("neg", &CKKSVector::negate)
        .def("neg_", &CKKSVector::negate_inplace)
        .def("square", &CKKSVector::square)
        .def("square_", &CKKSVector::square_inplace)
        .def("pow", &CKKSVector::power)
        .def("pow_", &CKKSVector::power_inplace)
        .def("add", &CKKSVector::add)
        .def("add_", &CKKSVector::add_inplace)
        .def("add_plain", py::overload_cast<const double &>(
                              &CKKSVector::add_plain, py::const_))
        .def("add_plain",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->add_plain(other);
             })
        .def("add_plain_",
             py::overload_cast<const double &>(&CKKSVector::add_plain_inplace))
        .def("add_plain_",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->add_plain_inplace(other);
             })
        .def("sub", &CKKSVector::sub)
        .def("sub_", &CKKSVector::sub_inplace)
        .def("sub_plain", py::overload_cast<const double &>(
                              &CKKSVector::sub_plain, py::const_))
        .def("sub_plain",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->sub_plain(other);
             })
        .def("sub_plain_",
             py::overload_cast<const double &>(&CKKSVector::sub_plain_inplace))
        .def("sub_plain_",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->sub_plain_inplace(other);
             })
        .def("mul", &CKKSVector::mul)
        .def("mul_", &CKKSVector::mul_inplace)
        .def("mul_plain", py::overload_cast<const double &>(
                              &CKKSVector::mul_plain, py::const_))
        .def("mul_plain",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->mul_plain(other);
             })
        .def("mul_plain_",
             py::overload_cast<const double &>(&CKKSVector::mul_plain_inplace))
        .def("mul_plain_",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->mul_plain_inplace(other);
             })
        .def("polyval", &CKKSVector::polyval)
        .def("polyval_", &CKKSVector::polyval_inplace)
        // because dot doesn't have a magic function like __add__
        // we prefer to overload it instead of having dot_plain functions
        .def("dot", &CKKSVector::dot_product)
        .def("dot", &CKKSVector::dot_product_plain)
        .def("dot_", &CKKSVector::dot_product_inplace)
        .def("dot_", &CKKSVector::dot_product_plain_inplace)
        .def("sum", &CKKSVector::sum, py::arg("axis") = 0)
        .def("sum_", &CKKSVector::sum_inplace, py::arg("axis") = 0)
        .def(
            "matmul",
            [](shared_ptr<CKKSVector> obj, const vector<vector<double>> &matrix,
               size_t n_jobs) { return obj->matmul_plain(matrix, n_jobs); },
            py::arg("matrix"), py::arg("n_jobs") = 0)
        .def(
            "matmul_",
            [](shared_ptr<CKKSVector> obj, const vector<vector<double>> &matrix,
               size_t n_jobs) {
                return obj->matmul_plain_inplace(matrix, n_jobs);
            },
            py::arg("matrix"), py::arg("n_jobs") = 0)
        .def(
            "mm",
            [](shared_ptr<CKKSVector> obj, const vector<vector<double>> &matrix,
               size_t n_jobs) { return obj->matmul_plain(matrix, n_jobs); },
            py::arg("matrix"), py::arg("n_jobs") = 0)
        .def(
            "mm_",
            [](shared_ptr<CKKSVector> obj, const vector<vector<double>> &matrix,
               size_t n_jobs) {
                return obj->matmul_plain_inplace(matrix, n_jobs);
            },
            py::arg("matrix"), py::arg("n_jobs") = 0)
        .def("conv2d_im2col",
             [](shared_ptr<CKKSVector> obj,
                const vector<vector<double>> &matrix, const size_t windows_nb) {
                 return obj->conv2d_im2col(matrix, windows_nb);
             })
        .def("conv2d_im2col_",
             [](shared_ptr<CKKSVector> obj,
                const vector<vector<double>> &matrix, const size_t windows_nb) {
                 return obj->conv2d_im2col_inplace(matrix, windows_nb);
             })
        .def("enc_matmul_plain",
             [](shared_ptr<CKKSVector> obj, const vector<double> &matrix,
                size_t row_size) {
                 return obj->enc_matmul_plain(matrix, row_size);
             })
        .def("enc_matmul_plain_",
             [](shared_ptr<CKKSVector> obj, const vector<double> &matrix,
                size_t row_size) {
                 return obj->enc_matmul_plain_inplace(matrix, row_size);
             })
        // python arithmetic
        .def("__neg__", &CKKSVector::negate)
        .def("__pow__", &CKKSVector::power)
        .def("__ipow__", &CKKSVector::power_inplace)
        .def("__add__", &CKKSVector::add)
        .def("__add__", py::overload_cast<const double &>(
                            &CKKSVector::add_plain, py::const_))
        .def("__add__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->add_plain(other);
             })
        .def("__radd__", py::overload_cast<const double &>(
                             &CKKSVector::add_plain, py::const_))
        .def("__radd__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->add_plain(other);
             })
        .def("__iadd__", &CKKSVector::add_inplace)
        .def("__iadd__",
             py::overload_cast<const double &>(&CKKSVector::add_plain_inplace))
        .def("__iadd__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->add_plain_inplace(other);
             })
        .def("__sub__", &CKKSVector::sub)
        .def("__sub__", py::overload_cast<const double &>(
                            &CKKSVector::sub_plain, py::const_))
        .def("__sub__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->sub_plain(other);
             })
        /*
        Since subtraction operation is anticommutative, right subtraction
        operator need to negate the vector then do an addition with left
        operand.
        */
        .def("__rsub__",
             [](shared_ptr<CKKSVector> other, const double left_operand) {
                 // vec should be a copy so it might be safe to do inplace
                 auto vec = other->copy();
                 vec->negate_inplace();
                 vec->add_plain_inplace(left_operand);
                 return vec;
             })
        .def("__rsub__",
             [](shared_ptr<CKKSVector> other,
                const vector<double> &left_operand) {
                 // vec should be a copy so it might be safe to do inplace
                 auto vec = other->copy();
                 vec->negate_inplace();
                 vec->add_plain_inplace(left_operand);
                 return vec;
             })
        .def("__isub__", &CKKSVector::sub_inplace)
        .def("__isub__",
             py::overload_cast<const double &>(&CKKSVector::sub_plain_inplace))
        .def("__isub__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->sub_plain_inplace(other);
             })
        .def("__mul__", &CKKSVector::mul)
        .def("__mul__", py::overload_cast<const double &>(
                            &CKKSVector::mul_plain, py::const_))
        .def("__mul__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->mul_plain(other);
             })
        .def("__rmul__", py::overload_cast<const double &>(
                             &CKKSVector::mul_plain, py::const_))
        .def("__rmul__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->mul_plain(other);
             })
        .def("__imul__", &CKKSVector::mul_inplace)
        .def("__imul__",
             py::overload_cast<const double &>(&CKKSVector::mul_plain_inplace))
        .def("__imul__",
             [](shared_ptr<CKKSVector> obj, const vector<double> &other) {
                 return obj->mul_plain_inplace(other);
             })
        .def(
            "__matmul__",
            [](shared_ptr<CKKSVector> obj, const vector<vector<double>> &matrix,
               size_t n_jobs) { return obj->matmul_plain(matrix, n_jobs); },
            py::arg("matrix"), py::arg("n_jobs") = 0)
        .def(
            "__imatmul__",
            [](shared_ptr<CKKSVector> obj, const vector<vector<double>> &matrix,
               size_t n_jobs) {
                return obj->matmul_plain_inplace(matrix, n_jobs);
            },
            py::arg("matrix"), py::arg("n_jobs") = 0)
        .def("context", &CKKSVector::tenseal_context)
        .def("link_context", &CKKSVector::link_tenseal_context)
        .def("serialize",
             [](shared_ptr<CKKSVector> obj) { return py::bytes(obj->save()); })
        .def("copy", &CKKSVector::deepcopy)
        .def("__copy__",
             [](shared_ptr<CKKSVector> obj) { return obj->deepcopy(); })
        .def("__deepcopy__", [](shared_ptr<CKKSVector> obj,
                                py::dict) { return obj->deepcopy(); })
        .def_static(
            "pack_vectors", [](const vector<shared_ptr<CKKSVector>> &vectors) {
                return pack_vectors<CKKSVector, CKKSEncoder, double>(vectors);
            });

    py::class_<CKKSTensor, std::shared_ptr<CKKSTensor>>(m, "CKKSTensor",
                                                        py::module_local())
        .def(py::init([](const shared_ptr<TenSEALContext> &ctx,
                         const PlainTensor<double> &tensor, double scale,
                         bool batch) {
                 return CKKSTensor::Create(ctx, tensor, scale, batch);
             }),
             py::arg("ctx"), py::arg("tensor"), py::arg("scale"),
             py::arg("batch") = true)
        .def(py::init([](const shared_ptr<TenSEALContext> &ctx,
                         const PlainTensor<double> &tensor, bool batch) {
                 return CKKSTensor::Create(ctx, tensor, optional<double>(),
                                           batch);
             }),
             py::arg("ctx"), py::arg("tensor"), py::arg("batch") = true)
        .def(py::init(
            [](const shared_ptr<TenSEALContext> &ctx, const std::string &data) {
                return CKKSTensor::Create(ctx, data);
            }))
        .def(py::init(
            [](const std::string &data) { return CKKSTensor::Create(data); }))
        .def("decrypt",
             [](shared_ptr<CKKSTensor> obj) { return obj->decrypt(); })
        .def("decrypt",
             [](shared_ptr<CKKSTensor> obj, const shared_ptr<SecretKey> &sk) {
                 return obj->decrypt(sk);
             })
        .def("sum", &CKKSTensor::sum, py::arg("axis") = 0)
        .def("sum_", &CKKSTensor::sum_inplace, py::arg("axis") = 0)
        .def("sum_batch", &CKKSTensor::sum_batch)
        .def("sum_batch_", &CKKSTensor::sum_batch_inplace)
        .def("neg", &CKKSTensor::negate)
        .def("neg_", &CKKSTensor::negate_inplace)
        .def("square", &CKKSTensor::square)
        .def("square_", &CKKSTensor::square_inplace)
        .def("pow", &CKKSTensor::power)
        .def("pow_", &CKKSTensor::power_inplace)
        .def("add", &CKKSTensor::add)
        .def("add_", &CKKSTensor::add_inplace)
        .def("sub", &CKKSTensor::sub)
        .def("sub_", &CKKSTensor::sub_inplace)
        .def("mul", &CKKSTensor::mul)
        .def("mul_", &CKKSTensor::mul_inplace)
        .def("add_plain", py::overload_cast<const double &>(
                              &CKKSTensor::add_plain, py::const_))
        .def("add_plain", py::overload_cast<const PlainTensor<double> &>(
                              &CKKSTensor::add_plain, py::const_))
        .def("sub_plain", py::overload_cast<const double &>(
                              &CKKSTensor::sub_plain, py::const_))
        .def("sub_plain", py::overload_cast<const PlainTensor<double> &>(
                              &CKKSTensor::sub_plain, py::const_))
        .def("mul_plain", py::overload_cast<const double &>(
                              &CKKSTensor::mul_plain, py::const_))
        .def("mul_plain", py::overload_cast<const PlainTensor<double> &>(
                              &CKKSTensor::mul_plain, py::const_))
        .def("add_plain_",
             py::overload_cast<const double &>(&CKKSTensor::add_plain_inplace))
        .def("add_plain_", py::overload_cast<const PlainTensor<double> &>(
                               &CKKSTensor::add_plain_inplace))
        .def("sub_plain_",
             py::overload_cast<const double &>(&CKKSTensor::sub_plain_inplace))
        .def("sub_plain_", py::overload_cast<const PlainTensor<double> &>(
                               &CKKSTensor::sub_plain_inplace))
        .def("mul_plain_",
             py::overload_cast<const double &>(&CKKSTensor::mul_plain_inplace))
        .def("mul_plain_", py::overload_cast<const PlainTensor<double> &>(
                               &CKKSTensor::mul_plain_inplace))
        .def("polyval", &CKKSTensor::polyval)
        .def("polyval_", &CKKSTensor::polyval_inplace)
        // python arithmetic
        .def("__add__", &CKKSTensor::add)
        .def("__add__", py::overload_cast<const double &>(
                            &CKKSTensor::add_plain, py::const_))
        .def("__add__", py::overload_cast<const PlainTensor<double> &>(
                            &CKKSTensor::add_plain, py::const_))
        .def("__radd__", py::overload_cast<const double &>(
                             &CKKSTensor::add_plain, py::const_))
        .def("__radd__", py::overload_cast<const PlainTensor<double> &>(
                             &CKKSTensor::add_plain, py::const_))
        .def("__iadd__", &CKKSTensor::add_inplace)
        .def("__iadd__",
             py::overload_cast<const double &>(&CKKSTensor::add_plain_inplace))
        .def("__iadd__", py::overload_cast<const PlainTensor<double> &>(
                             &CKKSTensor::add_plain_inplace))
        .def("__mul__", &CKKSTensor::mul)
        .def("__mul__", py::overload_cast<const double &>(
                            &CKKSTensor::mul_plain, py::const_))
        .def("__mul__", py::overload_cast<const PlainTensor<double> &>(
                            &CKKSTensor::mul_plain, py::const_))
        .def("__rmul__", py::overload_cast<const double &>(
                             &CKKSTensor::mul_plain, py::const_))
        .def("__rmul__", py::overload_cast<const PlainTensor<double> &>(
                             &CKKSTensor::mul_plain, py::const_))
        .def("__imul__", &CKKSTensor::mul_inplace)
        .def("__imul__",
             py::overload_cast<const double &>(&CKKSTensor::mul_plain_inplace))
        .def("__imul__", py::overload_cast<const PlainTensor<double> &>(
                             &CKKSTensor::mul_plain_inplace))
        .def("__sub__", &CKKSTensor::sub)
        .def("__sub__", py::overload_cast<const double &>(
                            &CKKSTensor::sub_plain, py::const_))
        .def("__sub__", py::overload_cast<const PlainTensor<double> &>(
                            &CKKSTensor::sub_plain, py::const_))
        /*
        Since subtraction operation is anticommutative, right subtraction
        operator need to negate the vector then do an addition with left
        operand.
        */
        .def("__rsub__",
             [](shared_ptr<CKKSTensor> other, const double left_operand) {
                 // vec should be a copy so it might be safe to do inplace
                 auto vec = other->copy();
                 vec->negate_inplace();
                 vec->add_plain_inplace(left_operand);
                 return vec;
             })
        .def("__rsub__",
             [](shared_ptr<CKKSTensor> other,
                const vector<double> &left_operand) {
                 // vec should be a copy so it might be safe to do inplace
                 auto vec = other->copy();
                 vec->negate_inplace();
                 vec->add_plain_inplace(left_operand);
                 return vec;
             })
        .def("__isub__", &CKKSTensor::sub_inplace)
        .def("__isub__",
             py::overload_cast<const double &>(&CKKSTensor::sub_plain_inplace))
        .def("__isub__", py::overload_cast<const PlainTensor<double> &>(
                             &CKKSTensor::sub_plain_inplace))
        .def("__neg__", &CKKSTensor::negate)
        .def("__pow__", &CKKSTensor::power)
        .def("__ipow__", &CKKSTensor::power_inplace)
        .def("context", &CKKSTensor::tenseal_context)
        .def("link_context", &CKKSTensor::link_tenseal_context)
        .def("serialize",
             [](shared_ptr<CKKSTensor> &obj) { return py::bytes(obj->save()); })
        .def("copy", &CKKSTensor::deepcopy)
        .def("__copy__",
             [](shared_ptr<CKKSTensor> &obj) { return obj->deepcopy(); })
        .def("__deepcopy__", [](const shared_ptr<CKKSTensor> &obj,
                                py::dict) { return obj->deepcopy(); })
        .def("shape", &CKKSTensor::shape)
        .def("reshape", &CKKSTensor::reshape)
        .def("reshape_", &CKKSTensor::reshape_inplace)
        .def("scale", &CKKSTensor::scale);

    py::class_<TenSEALContext, std::shared_ptr<TenSEALContext>>(
        m, "TenSEALContext")
        .def_property(
            "global_scale",
            py::overload_cast<>(&TenSEALContext::global_scale, py::const_),
            py::overload_cast<double>(&TenSEALContext::global_scale))
        .def_property(
            "auto_relin",
            py::overload_cast<>(&TenSEALContext::auto_relin, py::const_),
            py::overload_cast<bool>(&TenSEALContext::auto_relin))
        .def_property(
            "auto_rescale",
            py::overload_cast<>(&TenSEALContext::auto_rescale, py::const_),
            py::overload_cast<bool>(&TenSEALContext::auto_rescale))
        .def_property(
            "auto_mod_switch",
            py::overload_cast<>(&TenSEALContext::auto_mod_switch, py::const_),
            py::overload_cast<bool>(&TenSEALContext::auto_mod_switch))
        .def("new",
             py::overload_cast<scheme_type, size_t, uint64_t, vector<int>,
                               optional<size_t>>(&TenSEALContext::Create),
             R"(Create a new TenSEALContext object to hold keys and parameters.
    Args:
        scheme : define the scheme to be used, either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS.
        poly_modulus_degree : The degree of the polynomial modulus, must be a power of two.
        plain_modulus : The plaintext modulus. Is not used if scheme is CKKS.
        coeff_mod_bit_sizes : List of bit size for each coeffecient modulus.
        n_threads : Optional: number of threads to use for multiplications.
            Can be an empty list for BFV, a default value will be given.
        )",
             py::arg("poly_modulus_degree"), py::arg("plain_modulus"),
             py::arg("coeff_mod_bit_sizes") = vector<int>(),
             py::arg("n_threads") = get_concurrency())
        .def("public_key", &TenSEALContext::public_key)
        .def("has_public_key", &TenSEALContext::has_public_key)
        .def("secret_key", &TenSEALContext::secret_key)
        .def("has_secret_key", &TenSEALContext::has_secret_key)
        .def("relin_keys", &TenSEALContext::relin_keys)
        .def("has_relin_keys", &TenSEALContext::has_relin_keys)
        .def("galois_keys", &TenSEALContext::galois_keys)
        .def("has_galois_keys", &TenSEALContext::has_galois_key)
        .def("is_public", &TenSEALContext::is_public)
        .def("is_private", &TenSEALContext::is_private)
        .def("make_context_public", &TenSEALContext::make_context_public,
             "Generate Galois and Relinearization keys if needed, then make "
             "then context public",
             py::arg("generate_galois_keys") = false,
             py::arg("generate_relin_keys") = false)
        .def("generate_galois_keys",
             py::overload_cast<>(&TenSEALContext::generate_galois_keys),
             "Generate Galois keys using the secret key")
        .def("generate_galois_keys",
             py::overload_cast<const SecretKey &>(
                 &TenSEALContext::generate_galois_keys),
             "Generate Galois keys using the secret key")
        .def("generate_relin_keys",
             py::overload_cast<>(&TenSEALContext::generate_relin_keys),
             "Generate Relinearization keys using the secret key")
        .def("generate_relin_keys",
             py::overload_cast<const SecretKey &>(
                 &TenSEALContext::generate_relin_keys),
             "Generate Relinearization keys using the secret key")
        .def("serialize",
             [](const TenSEALContext &obj) { return py::bytes(obj.save()); })
        .def_static("deserialize",
                    py::overload_cast<const std::string &, optional<size_t>>(
                        &TenSEALContext::Create),
                    py::arg("buffer"), py::arg("n_threads") = get_concurrency())
        .def("copy", &TenSEALContext::copy)
        .def("__copy__",
             [](const std::shared_ptr<TenSEALContext> &self) {
                 return self->copy();
             })
        .def("__deepcopy__", [](const std::shared_ptr<TenSEALContext> &self,
                                py::dict) { return self->copy(); });
    // SEAL objects

    py::class_<KeyGenerator>(m, "KeyGenerator")
        .def(py::init<const seal::SEALContext &>())
        .def(
            "public_key",
            [](const KeyGenerator &keygen) {
                PublicKey pk;
                keygen.create_public_key(pk);

                return pk;
            },
            "get the public key.")
        .def("secret_key", &KeyGenerator::secret_key, "get the secret key.")
        .def(
            "relin_keys",
            [](KeyGenerator &keygen) {
                RelinKeys rk;
                keygen.create_relin_keys(rk);
                return rk;
            },
            "get the relinearization keys.");

    py::class_<EncryptionParameters>(m, "EncryptionParameters");
    py::class_<SEALContext, shared_ptr<SEALContext>>(m, "SEALContext");
    py::class_<PublicKey, std::shared_ptr<PublicKey>>(m, "PublicKey");
    py::class_<SecretKey, std::shared_ptr<SecretKey>>(m, "SecretKey");
    py::class_<RelinKeys, std::shared_ptr<RelinKeys>>(m, "RelinKeys");
    py::class_<GaloisKeys, std::shared_ptr<GaloisKeys>>(m, "GaloisKeys");

    // globals
    py::enum_<scheme_type>(m, "SCHEME_TYPE")
        .value("NONE", scheme_type::none)
        .value("BFV", scheme_type::bfv)
        .value("CKKS", scheme_type::ckks);
}
