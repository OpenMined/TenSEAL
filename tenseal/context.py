"""
"""
from abc import ABC
import tenseal as ts


class Key(ABC):
    def __init__(self, data):
        self.data = data

    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, value):
        native_type = getattr(ts._ts_cpp, self.__class__.__name__)
        if not isinstance(value, native_type):
            raise TypeError(f"value must be of type {native_type}")
        self._data = value

    @classmethod
    def _wrap(cls, data):
        return cls(data)


class SecretKey(Key):
    pass


class PublicKey(Key):
    pass


class GaloisKeys(Key):
    pass


class RelinKeys(Key):
    pass


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
        return self._wrap(self.data.copy())

    def __copy__(self):
        return self.copy()

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

    @property
    def auto_mod_switch(self):
        return self.data.auto_mod_switch

    @auto_mod_switch.setter
    def auto_mod_switch(self, value):
        self.data.auto_mod_switch = value

    @property
    def auto_relin(self):
        return self.data.auto_relin

    @auto_relin.setter
    def auto_relin(self, value):
        self.data.auto_relin = value

    @property
    def auto_rescale(self):
        return self.data.auto_rescale

    @auto_rescale.setter
    def auto_rescale(self, value):
        self.data.auto_rescale = value

    def has_galois_keys(self):
        return self.data.has_galois_keys()

    def galois_keys(self):
        return GaloisKeys(self.data.galois_keys())

    def generate_galois_keys(self, secret_key=None):
        if secret_key is None:
            self.data.generate_galois_keys()
        elif isinstance(secret_key, SecretKey):
            self.data.generate_galois_keys(secret_key.data)
        else:
            raise TypeError(f"incorrect type: {type(secret_key)} != SecretKey")

    def has_relin_keys(self):
        return self.data.has_relin_keys()

    def relin_keys(self):
        return RelinKeys(self.data.relin_keys())

    def generate_relin_keys(self, secret_key=None):
        if secret_key is None:
            self.data.generate_relin_keys()
        elif isinstance(secret_key, SecretKey):
            self.data.generate_relin_keys(secret_key.data)
        else:
            raise TypeError(f"incorrect type: {type(secret_key)} != SecretKey")

    def has_secret_key(self):
        return self.data.has_secret_key()

    def secret_key(self):
        return SecretKey(self.data.secret_key())

    def has_public_key(self):
        return self.data.has_public_key()

    def public_key(self):
        return PublicKey(self.data.public_key())

    def is_private(self):
        return self.data.is_private()

    def is_public(self):
        return self.data.is_public()

    def make_context_public(self, generate_galois_keys=False, generate_relin_keys=False):
        self.data.make_context_public(
            generate_galois_keys=generate_galois_keys, generate_relin_keys=generate_relin_keys
        )
