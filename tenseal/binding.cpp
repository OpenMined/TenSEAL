#include <pybind11/pybind11.h>
#include <pybind11/stl.h>

#include <memory>
#include <vector>

#include "seal/seal.h"
#include "tenseal/cpp/context/tensealcontext.h"
#include "tenseal/cpp/tensors/bfvvector.h"
#include "tenseal/cpp/tensors/ckksvector.h"
#include "tenseal/cpp/tensors/utils/utils.h"

using namespace tenseal;
using namespace seal;
using namespace std;
namespace py = pybind11;

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

    py::class_<BFVVector>(m, "BFVVector")
        .def(py::init<shared_ptr<TenSEALContext> &, vector<int64_t>>())
        .def(py::init<shared_ptr<TenSEALContext> &, const std::string &>())
        .def("size", &BFVVector::size)
        .def("decrypt", py::overload_cast<>(&BFVVector::decrypt))
        .def("decrypt", py::overload_cast<const std::shared_ptr<SecretKey> &>(
                            &BFVVector::decrypt))
        .def("add", &BFVVector::add)
        .def("add_", &BFVVector::add_inplace)
        .def("add_plain", &BFVVector::add_plain)
        .def("add_plain_", &BFVVector::add_plain_inplace)
        .def("sub", &BFVVector::sub)
        .def("sub_", &BFVVector::sub_inplace)
        .def("sub_plain", &BFVVector::sub_plain)
        .def("sub_plain_", &BFVVector::sub_plain_inplace)
        .def("mul", &BFVVector::mul)
        .def("mul_", &BFVVector::mul_inplace)
        .def("mul_plain", &BFVVector::mul_plain)
        .def("mul_plain_", &BFVVector::mul_plain_inplace)
        // python arithmetic
        .def("__add__", &BFVVector::add)
        .def("__add__", &BFVVector::add_plain)
        .def("__iadd__", &BFVVector::add_inplace)
        .def("__iadd__", &BFVVector::add_plain_inplace)
        .def("__sub__", &BFVVector::sub)
        .def("__sub__", &BFVVector::sub_plain)
        .def("__isub__", &BFVVector::sub_inplace)
        .def("__isub__", &BFVVector::sub_plain_inplace)
        .def("__mul__", &BFVVector::mul)
        .def("__mul__", &BFVVector::mul_plain)
        .def("__imul__", &BFVVector::mul_inplace)
        .def("__imul__", &BFVVector::mul_plain_inplace)
        .def("context",
             [](const BFVVector &obj) { return obj.tenseal_context(); })
        .def("serialize",
             [](const BFVVector &obj) { return py::bytes(obj.save()); })
        .def("copy", &BFVVector::deepcopy)
        .def("__copy__", [](const BFVVector &self) { return self.deepcopy(); })
        .def("__deepcopy__",
             [](const BFVVector &self, py::dict) { return self.deepcopy(); });

    // CKKSVector utils
    m.def("im2col_encoding",
          [](shared_ptr<TenSEALContext> ctx, vector<vector<double>> &input,
             const size_t kernel_n_rows, const size_t kernel_n_cols,
             const size_t stride) {
              vector<vector<double>> view_as_window;
              vector<double> final_vector;
              size_t windows_nb = im2col(input, view_as_window, kernel_n_rows,
                                         kernel_n_cols, stride);
              vertical_scan(view_as_window, final_vector);
              CKKSVector ckks_vector = CKKSVector(ctx, final_vector);
              return make_pair(ckks_vector, windows_nb);
          });

    m.def("enc_matmul_encoding", [](shared_ptr<TenSEALContext> ctx,
                                    const vector<vector<double>> &input) {
        vector<double> final_vector;
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

        vertical_scan(padded_matrix, final_vector);
        CKKSVector ckks_vector = CKKSVector(ctx, final_vector);
        return ckks_vector;
    });

    py::class_<CKKSVector>(m, "CKKSVector")
        // specifying scale
        .def(py::init<shared_ptr<TenSEALContext> &, vector<double>, double>())
        // using global_scale if set
        .def(py::init<shared_ptr<TenSEALContext> &, vector<double>>())
        .def(py::init<shared_ptr<TenSEALContext> &, const std::string &>())
        .def("size", &CKKSVector::size)
        .def("decrypt", py::overload_cast<>(&CKKSVector::decrypt))
        .def("decrypt", py::overload_cast<const shared_ptr<SecretKey> &>(
                            &CKKSVector::decrypt))
        .def("neg", &CKKSVector::negate)
        .def("neg_", &CKKSVector::negate_inplace)
        .def("square", &CKKSVector::square)
        .def("square_", &CKKSVector::square_inplace)
        .def("pow", &CKKSVector::power)
        .def("pow_", &CKKSVector::power_inplace)
        .def("add", &CKKSVector::add)
        .def("add_", &CKKSVector::add_inplace)
        .def("add_plain", py::overload_cast<double>(&CKKSVector::add_plain))
        .def("add_plain",
             py::overload_cast<const vector<double> &>(&CKKSVector::add_plain))
        .def("add_plain_",
             py::overload_cast<double>(&CKKSVector::add_plain_inplace))
        .def("add_plain_", py::overload_cast<const vector<double> &>(
                               &CKKSVector::add_plain_inplace))
        .def("sub", &CKKSVector::sub)
        .def("sub_", &CKKSVector::sub_inplace)
        .def("sub_plain", py::overload_cast<double>(&CKKSVector::sub_plain))
        .def("sub_plain",
             py::overload_cast<const vector<double> &>(&CKKSVector::sub_plain))
        .def("sub_plain_",
             py::overload_cast<double>(&CKKSVector::sub_plain_inplace))
        .def("sub_plain_", py::overload_cast<const vector<double> &>(
                               &CKKSVector::sub_plain_inplace))
        .def("mul", &CKKSVector::mul)
        .def("mul_", &CKKSVector::mul_inplace)
        .def("mul_plain", py::overload_cast<double>(&CKKSVector::mul_plain))
        .def("mul_plain",
             py::overload_cast<const vector<double> &>(&CKKSVector::mul_plain))
        .def("mul_plain_",
             py::overload_cast<double>(&CKKSVector::mul_plain_inplace))
        .def("mul_plain_", py::overload_cast<const vector<double> &>(
                               &CKKSVector::mul_plain_inplace))
        .def("polyval", &CKKSVector::polyval)
        .def("polyval_", &CKKSVector::polyval_inplace)
        // because dot doesn't have a magic function like __add__
        // we prefer to overload it instead of having dot_plain functions
        .def("dot", &CKKSVector::dot_product)
        .def("dot", &CKKSVector::dot_product_plain)
        .def("dot_", &CKKSVector::dot_product_inplace)
        .def("dot_", &CKKSVector::dot_product_plain_inplace)
        .def("sum", &CKKSVector::sum)
        .def("sum_", &CKKSVector::sum_inplace)
        .def("matmul", &CKKSVector::matmul_plain, py::arg("matrix"),
             py::arg("n_jobs") = 0)
        .def("matmul_", &CKKSVector::matmul_plain_inplace, py::arg("matrix"),
             py::arg("n_jobs") = 0)
        .def("mm", &CKKSVector::matmul_plain, py::arg("matrix"),
             py::arg("n_jobs") = 0)
        .def("mm_", &CKKSVector::matmul_plain_inplace, py::arg("matrix"),
             py::arg("n_jobs") = 0)
        .def("conv2d_im2col", &CKKSVector::conv2d_im2col)
        .def("conv2d_im2col_inplace", &CKKSVector::conv2d_im2col_inplace)
        .def("enc_matmul_plain", &CKKSVector::enc_matmul_plain)
        .def("enc_matmul_plain_inplace", &CKKSVector::enc_matmul_plain)
        // python arithmetic
        .def("__neg__", &CKKSVector::negate)
        .def("__pow__", &CKKSVector::power)
        .def("__ipow__", &CKKSVector::power_inplace)
        .def("__add__", &CKKSVector::add)
        .def("__add__", py::overload_cast<double>(&CKKSVector::add_plain))
        .def("__add__",
             py::overload_cast<const vector<double> &>(&CKKSVector::add_plain))
        .def("__radd__", py::overload_cast<double>(&CKKSVector::add_plain))
        .def("__radd__",
             py::overload_cast<const vector<double> &>(&CKKSVector::add_plain))
        .def("__iadd__", &CKKSVector::add_inplace)
        .def("__iadd__",
             py::overload_cast<double>(&CKKSVector::add_plain_inplace))
        .def("__iadd__", py::overload_cast<const vector<double> &>(
                             &CKKSVector::add_plain_inplace))
        .def("__sub__", &CKKSVector::sub)
        .def("__sub__", py::overload_cast<double>(&CKKSVector::sub_plain))
        .def("__sub__",
             py::overload_cast<const vector<double> &>(&CKKSVector::sub_plain))
        /*
        Since subtraction operation is anticommutative, right subtraction
        operator need to negate the vector then do an addition with left
        operand.
        */
        .def("__rsub__",
             [](CKKSVector vec, double left_operand) {
                 // vec should be a copy so it might be safe to do inplace
                 vec.negate_inplace();
                 vec.add_plain_inplace(left_operand);
                 return vec;
             })
        .def("__rsub__",
             [](CKKSVector vec, const vector<double> &left_operand) {
                 // vec should be a copy so it might be safe to do inplace
                 vec.negate_inplace();
                 vec.add_plain_inplace(left_operand);
                 return vec;
             })
        .def("__isub__", &CKKSVector::sub_inplace)
        .def("__isub__",
             py::overload_cast<double>(&CKKSVector::sub_plain_inplace))
        .def("__isub__", py::overload_cast<const vector<double> &>(
                             &CKKSVector::sub_plain_inplace))
        .def("__mul__", &CKKSVector::mul)
        .def("__mul__", py::overload_cast<double>(&CKKSVector::mul_plain))
        .def("__mul__",
             py::overload_cast<const vector<double> &>(&CKKSVector::mul_plain))
        .def("__rmul__", py::overload_cast<double>(&CKKSVector::mul_plain))
        .def("__rmul__",
             py::overload_cast<const vector<double> &>(&CKKSVector::mul_plain))
        .def("__imul__", &CKKSVector::mul_inplace)
        .def("__imul__",
             py::overload_cast<double>(&CKKSVector::mul_plain_inplace))
        .def("__imul__", py::overload_cast<const vector<double> &>(
                             &CKKSVector::mul_plain_inplace))
        .def("__matmul__", &CKKSVector::matmul_plain, py::arg("matrix"),
             py::arg("n_jobs") = 0)
        .def("__imatmul__", &CKKSVector::matmul_plain_inplace,
             py::arg("matrix"), py::arg("n_jobs") = 0)
        .def("context",
             [](const CKKSVector &obj) { return obj.tenseal_context(); })
        .def("serialize",
             [](const CKKSVector &obj) { return py::bytes(obj.save()); })
        .def("copy", &CKKSVector::deepcopy)
        .def("__copy__", [](const CKKSVector &self) { return self.deepcopy(); })
        .def("__deepcopy__",
             [](const CKKSVector &self, py::dict) { return self.deepcopy(); });

    py::class_<TenSEALContext, std::shared_ptr<TenSEALContext>>(
        m, "TenSEALContext")
        .def_property(
            "global_scale",
            py::overload_cast<>(&TenSEALContext::global_scale, py::const_),
            py::overload_cast<double>(&TenSEALContext::global_scale))
        .def_property("auto_relin",
                      py::overload_cast<>(&TenSEALContext::auto_relin),
                      py::overload_cast<bool>(&TenSEALContext::auto_relin))
        .def_property("auto_rescale",
                      py::overload_cast<>(&TenSEALContext::auto_rescale),
                      py::overload_cast<bool>(&TenSEALContext::auto_rescale))
        .def_property("auto_mod_switch",
                      py::overload_cast<>(&TenSEALContext::auto_mod_switch),
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
        .def(py::init<std::shared_ptr<seal::SEALContext> &>())
        .def("public_key", &KeyGenerator::public_key, "get the public key.")
        .def("secret_key", &KeyGenerator::secret_key, "get the secret key.")
        .def("relin_keys", py::overload_cast<>(&KeyGenerator::relin_keys),
             "get the relinearization keys.");

    py::class_<EncryptionParameters>(m, "EncryptionParameters");
    py::class_<SEALContext, std::shared_ptr<SEALContext>>(m, "SEALContext");
    py::class_<PublicKey, std::shared_ptr<PublicKey>>(m, "PublicKey");
    py::class_<SecretKey, std::shared_ptr<SecretKey>>(m, "SecretKey");
    py::class_<RelinKeys, std::shared_ptr<RelinKeys>>(m, "RelinKeys");
    py::class_<GaloisKeys, std::shared_ptr<GaloisKeys>>(m, "GaloisKeys");

    // globals
    py::enum_<scheme_type>(m, "SCHEME_TYPE")
        .value("NONE", scheme_type::none)
        .value("BFV", scheme_type::BFV)
        .value("CKKS", scheme_type::CKKS);
}
