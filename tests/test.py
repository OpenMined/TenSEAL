import tenseal as ts

context = ts.context(
    ts.SCHEME_TYPE.CKKS, poly_modulus_degree=8192, coeff_mod_bit_sizes=[60, 40, 40, 60]
)
public_context = ts.context(
    ts.SCHEME_TYPE.CKKS, poly_modulus_degree=8192, coeff_mod_bit_sizes=[60, 40, 40, 60]
)
context.global_scale = pow(2, 41)
public_context.global_scale = pow(2, 40)

plain_vector = [2]
encrypted_vector = ts.ckks_vector(context, plain_vector)
mul_result = encrypted_vector

print(mul_result.decrypt())
for i in range(5):
    mul_result = mul_result * encrypted_vector
    print(mul_result.decrypt())
