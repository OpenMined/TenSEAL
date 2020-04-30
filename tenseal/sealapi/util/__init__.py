"""SEAL API util bindings.
"""

import _sealapi_util_cpp

## util/rns.h ##
RNSBase = _sealapi_util_cpp.RNSBase
BaseConverter = _sealapi_util_cpp.BaseConverter
RNSTool = _sealapi_util_cpp.RNSTool

## util/ntt.h ##
NTTTables = _sealapi_util_cpp.NTTTables
CreateNTTTables = _sealapi_util_cpp.CreateNTTTables
ntt_negacyclic_harvey_lazy = _sealapi_util_cpp.ntt_negacyclic_harvey_lazy
ntt_negacyclic_harvey = _sealapi_util_cpp.ntt_negacyclic_harvey
inverse_ntt_negacyclic_harvey_lazy = _sealapi_util_cpp.inverse_ntt_negacyclic_harvey_lazy
inverse_ntt_negacyclic_harvey = _sealapi_util_cpp.inverse_ntt_negacyclic_harvey

## util/galois.h ##
GaloisTool = _sealapi_util_cpp.GaloisTool

## util/polyarith.h ##
right_shift_poly_coeffs = _sealapi_util_cpp.right_shift_poly_coeffs
negate_poly = _sealapi_util_cpp.negate_poly
add_poly_poly = _sealapi_util_cpp.add_poly_poly
sub_poly_poly = _sealapi_util_cpp.sub_poly_poly
multiply_poly_poly = _sealapi_util_cpp.multiply_poly_poly
poly_infty_norm = _sealapi_util_cpp.poly_infty_norm
poly_eval_poly = _sealapi_util_cpp.poly_eval_poly
exponentiate_poly = _sealapi_util_cpp.exponentiate_poly

## util/rlwe.h ##
sample_poly_ternary = _sealapi_util_cpp.sample_poly_ternary
sample_poly_normal = _sealapi_util_cpp.sample_poly_normal
sample_poly_uniform = _sealapi_util_cpp.sample_poly_uniform
encrypt_zero_asymmetric = _sealapi_util_cpp.encrypt_zero_asymmetric
encrypt_zero_symmetric = _sealapi_util_cpp.encrypt_zero_symmetric

## util/polyarithsmallmod.h ##
modulo_poly_coeffs = _sealapi_util_cpp.modulo_poly_coeffs
modulo_poly_coeffs_63 = _sealapi_util_cpp.modulo_poly_coeffs_63
negate_poly_coeffmod = _sealapi_util_cpp.negate_poly_coeffmod
add_poly_poly_coeffmod = _sealapi_util_cpp.add_poly_poly_coeffmod
sub_poly_poly_coeffmod = _sealapi_util_cpp.sub_poly_poly_coeffmod
multiply_poly_scalar_coeffmod = _sealapi_util_cpp.multiply_poly_scalar_coeffmod
multiply_poly_poly_coeffmod = _sealapi_util_cpp.multiply_poly_poly_coeffmod
multiply_truncate_poly_poly_coeffmod = _sealapi_util_cpp.multiply_truncate_poly_poly_coeffmod
divide_poly_poly_coeffmod_inplace = _sealapi_util_cpp.divide_poly_poly_coeffmod_inplace
divide_poly_poly_coeffmod = _sealapi_util_cpp.divide_poly_poly_coeffmod
dyadic_product_coeffmod = _sealapi_util_cpp.dyadic_product_coeffmod
poly_infty_norm_coeffmod = _sealapi_util_cpp.poly_infty_norm_coeffmod
try_invert_poly_coeffmod = _sealapi_util_cpp.try_invert_poly_coeffmod
negacyclic_shift_poly_coeffmod = _sealapi_util_cpp.negacyclic_shift_poly_coeffmod
negacyclic_multiply_poly_mono_coeffmod = _sealapi_util_cpp.negacyclic_multiply_poly_mono_coeffmod
