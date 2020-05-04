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

## util/polyarithmod.h ##
negate_poly_coeffmod = _sealapi_util_cpp.negate_poly_coeffmod
add_poly_poly_coeffmod = _sealapi_util_cpp.add_poly_poly_coeffmod
sub_poly_poly_coeffmod = _sealapi_util_cpp.sub_poly_poly_coeffmod
poly_infty_norm_coeffmod = _sealapi_util_cpp.poly_infty_norm_coeffmod

## util/polycore.h ##
poly_to_hex_string = _sealapi_util_cpp.poly_to_hex_string
poly_to_dec_string = _sealapi_util_cpp.poly_to_dec_string
allocate_poly = _sealapi_util_cpp.allocate_poly
set_zero_poly = _sealapi_util_cpp.set_zero_poly
allocate_zero_poly = _sealapi_util_cpp.allocate_zero_poly
get_poly_coeff = _sealapi_util_cpp.get_poly_coeff
set_poly_poly = _sealapi_util_cpp.set_poly_poly
is_zero_poly = _sealapi_util_cpp.is_zero_poly
is_equal_poly_poly = _sealapi_util_cpp.is_equal_poly_poly
set_poly_poly = _sealapi_util_cpp.set_poly_poly
is_one_zero_one_poly = _sealapi_util_cpp.is_one_zero_one_poly
get_significant_coeff_count_poly = _sealapi_util_cpp.get_significant_coeff_count_poly
duplicate_poly_if_needed = _sealapi_util_cpp.duplicate_poly_if_needed
are_poly_coefficients_less_than = _sealapi_util_cpp.are_poly_coefficients_less_than


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

## util/croots.h  ##
ComplexRoots = _sealapi_util_cpp.ComplexRoots

## util/numth.h ##
naf = _sealapi_util_cpp.naf
gcd = _sealapi_util_cpp.gcd
xgcd = _sealapi_util_cpp.xgcd
are_coprime = _sealapi_util_cpp.are_coprime
multiplicative_orders = _sealapi_util_cpp.multiplicative_orders
conjugate_classes = _sealapi_util_cpp.conjugate_classes
babystep_giantstep = _sealapi_util_cpp.babystep_giantstep
decompose_babystep_giantstep = _sealapi_util_cpp.decompose_babystep_giantstep
is_prime = _sealapi_util_cpp.is_prime
get_primes = _sealapi_util_cpp.get_primes
get_prime = _sealapi_util_cpp.get_prime
try_invert_uint_mod = _sealapi_util_cpp.try_invert_uint_mod
is_primitive_root = _sealapi_util_cpp.is_primitive_root
try_minimal_primitive_root = _sealapi_util_cpp.try_minimal_primitive_root

## util/hestdparms.h ##
SEAL_HE_STD_PARMS_128_TC = _sealapi_util_cpp.SEAL_HE_STD_PARMS_128_TC
SEAL_HE_STD_PARMS_192_TC = _sealapi_util_cpp.SEAL_HE_STD_PARMS_192_TC
SEAL_HE_STD_PARMS_256_TC = _sealapi_util_cpp.SEAL_HE_STD_PARMS_256_TC
SEAL_HE_STD_PARMS_128_TQ = _sealapi_util_cpp.SEAL_HE_STD_PARMS_128_TQ
SEAL_HE_STD_PARMS_192_TQ = _sealapi_util_cpp.SEAL_HE_STD_PARMS_192_TQ
SEAL_HE_STD_PARMS_256_TQ = _sealapi_util_cpp.SEAL_HE_STD_PARMS_256_TQ

## util/hestdparms.h ##

multiply_add_plain_with_scaling_variant = _sealapi_util_cpp.multiply_add_plain_with_scaling_variant
multiply_sub_plain_with_scaling_variant = _sealapi_util_cpp.multiply_sub_plain_with_scaling_variant

## util/clipnormal.h ##
ClippedNormalDistribution = _sealapi_util_cpp.ClippedNormalDistribution

## util/hash.h ##
HashFunction = _sealapi_util_cpp.HashFunction

## util/pointer.h ##
PointerComplexDouble = _sealapi_util_cpp.PointerComplexDouble
PointerUInt64 = _sealapi_util_cpp.PointerUInt64
PointerGaloisTool = _sealapi_util_cpp.PointerGaloisTool
PointerNTTTables = _sealapi_util_cpp.PointerNTTTables
PointerRNSTool = _sealapi_util_cpp.PointerRNSTool
