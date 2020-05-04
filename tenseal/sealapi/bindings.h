#ifndef SEALAPI_H
#define SEALAPI_H

#include <pybind11/pybind11.h>

void bind_evaluator(pybind11::module &m);
void bind_encrypt_decrypt(pybind11::module &m);
void bind_context(pybind11::module &m);
void bind_encoder_decoder(pybind11::module &m);
void bind_utils(pybind11::module &m);
void bind_modulus(pybind11::module &m);

#endif  // SEALAPI_H
