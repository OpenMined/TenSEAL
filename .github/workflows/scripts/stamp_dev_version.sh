#!/bin/sh
#
# Appends a PEP 440 dev segment to tenseal/version.py, e.g. 0.3.17 -> 0.3.17.dev42.
#
# Both PyPI and TestPyPI refuse to overwrite an existing version, so without a
# unique version each rehearsal after the first would either fail outright or,
# with --skip-existing, silently upload nothing and prove nothing. Used only for
# TestPyPI rehearsals; real releases publish the version as committed.

set -e

python - <<'PY'
import os
import pathlib
import re

path = pathlib.Path("tenseal/version.py")
current = re.search(r'__version__ = "([^"]+)"', path.read_text()).group(1)
stamped = "{}.dev{}".format(current, os.environ["GITHUB_RUN_NUMBER"])
path.write_text('__version__ = "{}"\n'.format(stamped))
print("stamped {} -> {}".format(current, stamped))
PY
