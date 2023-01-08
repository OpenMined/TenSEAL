workspace(name = "org_openmined_tenseal")

load("//tenseal:preload.bzl", "tenseal_preload")

tenseal_preload()

load("//tenseal:deps.bzl", "tenseal_deps")

tenseal_deps()

# Finish python setup
load("@org_openmined_tenseal_python_deps//:requirements.bzl", "install_deps")

install_deps()
