#ifndef TENSEAL_SEALAPI_BINDINGS_H
#define TENSEAL_SEALAPI_BINDINGS_H

#include <pybind11/pybind11.h>

void bind_seal_evaluator(pybind11::module &m);
void bind_seal_encrypt_decrypt(pybind11::module &m);
void bind_seal_context(pybind11::module &m);
void bind_seal_encoder_decoder(pybind11::module &m);
void bind_seal_helpers(pybind11::module &m);
void bind_seal_modulus(pybind11::module &m);
void bind_seal_util_namespace(pybind11::module &m);

#endif  // TENSEAL_SEALAPI_BINDINGS_H
