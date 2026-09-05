# Releasing TenSEAL

Releases are built and published by the **Build and Publish** workflow
([`.github/workflows/publish_wheels.yml`](.github/workflows/publish_wheels.yml)).
It produces 12 wheels — Python 3.11–3.14 for Linux, macOS (arm64) and Windows —
plus a source distribution, and uploads them in a single step so a partial
failure cannot leave a half-published release on the index.

## 1. Bump the version

The version lives in one place, [`tenseal/version.py`](tenseal/version.py), and
is read from there by the build backend:

```python
__version__ = "0.3.18"
```

Commit that through a pull request as usual.

## 2. Rehearse on TestPyPI

Do this before every release. It exercises the whole pipeline — build, sdist,
rebuilding a wheel *from* the sdist, upload, and installing the result back on
all three platforms.

1. **Actions** → **Build and Publish** → **Run workflow**
2. Leave `Index to publish to` set to `testpypi`
3. Wait for all jobs to go green (roughly 30 minutes)

The rehearsal automatically stamps a unique version — `0.3.18.dev<run_number>` —
because PyPI and TestPyPI both refuse to overwrite an existing version. Without
that, only the first rehearsal of a given version would upload anything.

Check the run for:

- **Build a wheel from the sdist** — proves `MANIFEST.in` is complete. If the
  sdist is missing `CMakeLists.txt`, `cmake/` or the `.proto` files it unpacks
  fine and then fails to build, and `twine check` will not catch it.
- **Install from TestPyPI** — proves a real `pip install` selects the right wheel
  per platform and that the package imports.

## 3. Tag and publish the release

Tags are lightweight and named `vMAJOR.MINOR.PATCH`:

```bash
git tag v0.3.18 <commit>
git push upstream v0.3.18
```

Then create the GitHub Release for that tag. **Publishing the release is what
triggers the real upload** — pushing the tag alone does nothing.

```bash
gh release create v0.3.18 --title "v0.3.18" --notes "..."
```

The workflow runs again on the `release: published` event, this time targeting
PyPI. If the `pypi` environment has a required reviewer, the publish job waits
for approval; the build jobs run first regardless.

## 4. Verify

```bash
pip index versions tenseal
```

Or check [the project page](https://pypi.org/project/tenseal/) for 12 wheels and
one `.tar.gz`. Update [`CHANGELOG.md`](CHANGELOG.md) if it was not part of the
version bump.

## Notes

- **A failed publish does not require a rebuild.** The wheels and sdist are kept
  as workflow artifacts, so the publish job can be re-run on its own.
- **`--skip-existing` is used**, so re-running a publish will not error on files
  that are already uploaded — but it also means a silently skipped upload looks
  like success. Always verify the file count on the index.
- **TestPyPI is not durable.** It is pruned periodically; never treat it as a
  record of what was released.
- **Publishing to PyPI uses the `PYPI_USERNAME` / `PYPI_PASSWORD` secrets**, and
  the TestPyPI rehearsal uses `TEST_PYPI_API_TOKEN`. These are separate accounts
  and separate credentials.
