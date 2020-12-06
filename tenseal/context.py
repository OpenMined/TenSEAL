"""
"""
import tenseal as ts


class Context:
    def __init__(
        self,
        scheme=None,
        poly_modulus_degree=None,
        plain_modulus=None,
        coeff_mod_bit_sizes=None,
        n_threads=None,
        data=None,
    ):
        """Construct a context that holds keys and parameters needed for operating
        encrypted tensors using either BFV or CKKS scheme.

        Args:
            scheme : define the scheme to be used, either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS.
            poly_modulus_degree (int): The degree of the polynomial modulus, must be a power of two.
            plain_modulus (int): The plaintext modulus. Should not be passed when the scheme is CKKS.
            coeff_mod_bit_sizes (list of int): List of bit size for each coeffecient modulus.
                Can be an empty list for BFV, a default value will be given.

        Returns:
            A Context object.
        """
        # wrapping
        if data is not None:
            self.data = data
        # constructing a new object
        else:
            if scheme == ts.SCHEME_TYPE.BFV:
                if plain_modulus is None:
                    raise ValueError("plain_modulus must be provided")
                if coeff_mod_bit_sizes is None:
                    coeff_mod_bit_sizes = []

            elif scheme == ts.SCHEME_TYPE.CKKS:
                # must be int, but the value doesn't matter for ckks
                plain_modulus = 0
                if coeff_mod_bit_sizes is None:
                    raise ValueError("coeff_mod_bit_sizes must be provided")

            else:
                raise ValueError(
                    "Invalid scheme type, use either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS"
                )

            # We can't pass None here, everything should be set prior to this call
            if isinstance(n_threads, int) and n_threads > 0:
                self.data = ts._ts_cpp.TenSEALContext.new(
                    scheme, poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes, n_threads
                )

            self.data = ts._ts_cpp.TenSEALContext.new(
                scheme, poly_modulus_degree, plain_modulus, coeff_mod_bit_sizes
            )

    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, value):
        native_type = ts._ts_cpp.TenSEALContext
        if not isinstance(value, native_type):
            raise TypeError(f"value must be of type {native_type}")
        self._data = value

    def copy(self):
        return self.__init__(data=self.data.copy())

    @classmethod
    def load(cls, data, n_threads=None):
        """Construct a context from a serialized buffer.

        Args:
            data : bytes buffer from the original context.

        Returns:
            A Context object.
        """
        if n_threads:
            return cls._wrap(ts._ts_cpp.TenSEALContext.deserialize(data, n_threads))
        return cls._wrap(ts._ts_cpp.TenSEALContext.deserialize(data))

    def serialize(self):
        return self.data.serialize()

    @property
    def global_scale(self):
        return self.data.global_scale

    @global_scale.setter
    def global_scale(self, value):
        self.data.global_scale = value

    @classmethod
    def _wrap(cls, data):
        return cls(data=data)

    # TODO
    # ctx.data.auto_mod_switch        ctx.data.generate_galois_keys(  ctx.data.has_secret_key(        ctx.data.relin_keys(
    # ctx.data.auto_relin             ctx.data.generate_relin_keys(   ctx.data.is_private(            ctx.data.secret_key(
    # ctx.data.auto_rescale           ctx.data.global_scale           ctx.data.is_public(             ctx.data.serialize(
    # ctx.data.copy(                  ctx.data.has_galois_keys(       ctx.data.make_context_public(   
    # ctx.data.deserialize(           ctx.data.has_public_key(        ctx.data.new(                   
    # ctx.data.galois_keys(           ctx.data.has_relin_keys(        ctx.data.public_key(
