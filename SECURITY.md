# Security Policy

## Supported versions

[![Supported version](https://img.shields.io/pypi/v/tenseal?label=supported%20version)](https://pypi.org/project/tenseal/)

Only the latest release receives fixes. Older versions are not patched — if you
hit a problem, please upgrade first and check whether it still reproduces.

## Scope

TenSEAL is a Python binding over [Microsoft SEAL](https://github.com/microsoft/SEAL),
plus a tensor layer built on top of it. That split decides where an issue belongs.

Issues in the underlying homomorphic encryption schemes, their security
guarantees, or SEAL's own implementation belong to SEAL — see its
[security policy](https://github.com/microsoft/SEAL/blob/main/SECURITY.md).

Everything in this repository belongs here:

- Memory safety in the C++ layer (`tenseal/cpp/`) or the pybind11 bindings
- Deserialization of untrusted contexts, keys or encrypted tensors
- Incorrect handling or propagation of encryption parameters in the TenSEAL layer
- Leakage of secret key material through the Python API or serialization
- Supply chain issues in the build or release workflow

## Reporting a vulnerability

Open a [GitHub issue](https://github.com/OpenMined/TenSEAL/issues/new/choose).

Please include a minimal reproduction, the TenSEAL version, and how you installed it.

## A note on the threat model

Homomorphic encryption protects data in use, but it does not by itself make an
application secure. TenSEAL does not protect against:

- **Parameter misconfiguration.** The security level of a context follows from the
  parameters you choose. See the
  [SEAL documentation](https://github.com/microsoft/SEAL#getting-started) for what
  they mean.
- **Sharing a secret key.** A serialized context includes the secret key unless you
  explicitly drop it before sharing.
- **Side channels.** Timing and memory access patterns are not hardened.

These are usually application design questions rather than vulnerabilities in
TenSEAL. If you believe the library makes an unsafe choice easy to reach by
accident, that is still worth reporting.
