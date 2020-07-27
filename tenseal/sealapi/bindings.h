#ifndef TENSEAL_SEALAPI_BINDINGS_H
#define TENSEAL_SEALAPI_BINDINGS_H

#include <pybind11/pybind11.h>

void bind_evaluator(pybind11::module &m);
void bind_encrypt_decrypt(pybind11::module &m);
void bind_context(pybind11::module &m);
void bind_encoder_decoder(pybind11::module &m);
void bind_helpers(pybind11::module &m);
void bind_modulus(pybind11::module &m);
void bind_util_namespace(pybind11::module &m);

#endif  // TENSEAL_SEALAPI_BINDINGS_H
