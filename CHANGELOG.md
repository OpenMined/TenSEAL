# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.17] - 2026-08-04

Minimum supported Python is now **3.11**. No library API changes.

### Added

- Source distribution is now published, so `pip install tenseal` works on
  platforms without a prebuilt wheel by building from source ([#522])
- Wheels for Python 3.13 and 3.14 ([#519])

### Changed

- Build and test on Python 3.11–3.14 across Linux, macOS (arm64) and Windows via
  cibuildwheel ([#519])
- Packaging modernized to PEP 517/621, with metadata in `pyproject.toml`; dev
  dependencies moved to a PEP 735 group ([#521])
- Linting moved from flake8 and black to ruff, run through pre-commit ([#521])
- Microsoft SEAL updated to v4.3.3 ([#519])
- Releases are published in a single upload rather than once per matrix job, so a
  partial failure can no longer leave a half-published release ([#522])

### Fixed

- `numpy` is now declared as a runtime dependency. It was previously undeclared,
  so a bare `pip install tenseal` could produce an unimportable package ([#521])
- Benchmarks workflow, which had been failing since February 2025 ([#520])

### Removed

- Support for Python 3.9 and 3.10

## [0.3.16] - 2025-02-28

### Added

- Support for Python 3.13, with wheels built by cibuildwheel ([#509])

### Removed

- Support for Python 3.8

## Earlier releases

Release notes for v0.3.15 and earlier are on the
[GitHub releases page](https://github.com/OpenMined/TenSEAL/releases).

[Unreleased]: https://github.com/OpenMined/TenSEAL/compare/v0.3.17...HEAD
[0.3.17]: https://github.com/OpenMined/TenSEAL/compare/v0.3.16...v0.3.17
[0.3.16]: https://github.com/OpenMined/TenSEAL/compare/v0.3.15...v0.3.16
[#509]: https://github.com/OpenMined/TenSEAL/pull/509
[#519]: https://github.com/OpenMined/TenSEAL/pull/519
[#520]: https://github.com/OpenMined/TenSEAL/pull/520
[#521]: https://github.com/OpenMined/TenSEAL/pull/521
[#522]: https://github.com/OpenMined/TenSEAL/pull/522
