"""The Context manages everything related to the encrypted computation, including keys, which
optimization should be enabled, and how many threads should run for a parallel computation.
"""
import multiprocessing
from enum import Enum
from typing import List, Union
from abc import ABC
import tenseal as ts


class ENCRYPTION_TYPE(Enum):
    ASYMMETRIC = ts._ts_cpp.ENCRYPTION_TYPE.ASYMMETRIC
    SYMMETRIC = ts._ts_cpp.ENCRYPTION_TYPE.SYMMETRIC


class SCHEME_TYPE(Enum):
    NONE = ts._ts_cpp.SCHEME_TYPE.NONE
    BFV = ts._ts_cpp.SCHEME_TYPE.BFV
    CKKS = ts._ts_cpp.SCHEME_TYPE.CKKS


class Key(ABC):
    """Wrapper class for encryption keys"""

    def __init__(self, data):
        self.data = data

    @property
    def data(
        self,
    ) -> Union[
        ts._ts_cpp.PublicKey, ts._ts_cpp.SecretKey, ts._ts_cpp.GaloisKeys, ts._ts_cpp.RelinKeys
    ]:
        """Get the wrapped low level key object"""
        return self._data

    @data.setter
    def data(
        self,
        value: Union[
            ts._ts_cpp.PublicKey, ts._ts_cpp.SecretKey, ts._ts_cpp.GaloisKeys, ts._ts_cpp.RelinKeys
        ],
    ):
        """Set the wrapped low level key object"""
        native_type = getattr(ts._ts_cpp, self.__class__.__name__)
        if not isinstance(value, native_type):
            raise TypeError(f"value must be of type {native_type}")
        self._data = value

    @classmethod
    def _wrap(
        cls,
        data: Union[
            ts._ts_cpp.PublicKey, ts._ts_cpp.SecretKey, ts._ts_cpp.GaloisKeys, ts._ts_cpp.RelinKeys
        ],
    ):
        """Return a new key object wrapping the low level key object"""
        return cls(data)


# We have a class for every key type, to differentiate between them only


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
        scheme: SCHEME_TYPE = None,
        poly_modulus_degree: int = None,
        plain_modulus: int = None,
        coeff_mod_bit_sizes: List[int] = [],
        encryption_type: ENCRYPTION_TYPE = ENCRYPTION_TYPE.ASYMMETRIC,
        n_threads: int = None,
        data: ts._ts_cpp.TenSEALContext = None,
    ):
        """Construct a context that holds keys and parameters needed for operating
        encrypted tensors using either BFV or CKKS scheme.

        Args:
            scheme : define the scheme to be used, either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS.
            poly_modulus_degree: The degree of the polynomial modulus, must be a power of two.
            plain_modulus: The plaintext modulus. Should not be passed when the scheme is CKKS.
            coeff_mod_bit_sizes: List of bit size for each coeffecient modulus.
                Can be an empty list for BFV, a default value will be given.
            encryption_type : define the encryption type to be used, either ENCRYPTION_TYPE.ASYMMETRIC, or ENCRYPTION_TYPE.SYMMETRIC.
            n_threads: define number of threads that shall be later used for parallel computation.
            data: A TenSEALContext to wrap. We won't construct a new object if it's passed.

        Returns:
            A Context object.
        """
        # wrapping
        if data is not None:
            self.data = data
            return

        # constructing a new object

        if scheme == SCHEME_TYPE.BFV:
            if plain_modulus is None:
                raise ValueError("plain_modulus must be provided")

        elif scheme == SCHEME_TYPE.CKKS:
            # must be int, but the value doesn't matter for ckks
            plain_modulus = 0

        else:
            raise ValueError("Invalid scheme type, use either SCHEME_TYPE.BFV or SCHEME_TYPE.CKKS")

        # We can't pass None here, everything should be set prior to this call
        if not (isinstance(n_threads, int) and n_threads > 0):
            n_threads = multiprocessing.cpu_count()

        self.data = ts._ts_cpp.TenSEALContext.new(
            scheme.value,
            poly_modulus_degree,
            plain_modulus,
            coeff_mod_bit_sizes,
            encryption_type.value,
            n_threads,
        )

    @property
    def data(self) -> ts._ts_cpp.TenSEALContext:
        """Get the wrapped low level TenSEALContext object"""
        return self._data

    @data.setter
    def data(self, value: ts._ts_cpp.TenSEALContext):
        """Set the wrapped low level TenSEALContext object"""
        native_type = ts._ts_cpp.TenSEALContext
        if not isinstance(value, native_type):
            raise TypeError(f"value must be of type {native_type}")
        self._data = value

    def copy(self) -> "Context":
        return self._wrap(self.data.copy())

    def __copy__(self) -> "Context":
        return self.copy()

    @classmethod
    def load(cls, data: bytes, n_threads: int = None) -> "Context":
        """Construct a context from a serialized buffer.

        Args:
            data : bytes buffer from the original context.
            n_threads: define number of threads that shall be later used for parallel computation.

        Returns:
            A Context object.
        """
        if n_threads:
            return cls._wrap(ts._ts_cpp.TenSEALContext.deserialize(data, n_threads))
        return cls._wrap(ts._ts_cpp.TenSEALContext.deserialize(data))

    def serialize(
        self,
        save_public_key: bool = True,
        save_secret_key: bool = False,
        save_galois_keys: bool = True,
        save_relin_keys: bool = True,
    ) -> bytes:
        """Serialize the context into a stream of bytes."""
        return self.data.serialize(
            save_public_key, save_secret_key, save_galois_keys, save_relin_keys
        )

    @property
    def global_scale(self) -> float:
        return self.data.global_scale

    @global_scale.setter
    def global_scale(self, value: float):
        self.data.global_scale = value

    @classmethod
    def _wrap(cls, data: ts._ts_cpp.TenSEALContext) -> "Context":
        """Return a new Context object wrapping the low level TenSEALContext object"""
        return cls(data=data)

    @property
    def auto_mod_switch(self) -> bool:
        return self.data.auto_mod_switch

    @auto_mod_switch.setter
    def auto_mod_switch(self, value: bool):
        self.data.auto_mod_switch = value

    @property
    def auto_relin(self) -> bool:
        return self.data.auto_relin

    @auto_relin.setter
    def auto_relin(self, value: bool):
        self.data.auto_relin = value

    @property
    def auto_rescale(self) -> bool:
        return self.data.auto_rescale

    @auto_rescale.setter
    def auto_rescale(self, value: bool):
        self.data.auto_rescale = value

    def has_galois_keys(self) -> bool:
        return self.data.has_galois_keys()

    def galois_keys(self) -> GaloisKeys:
        return GaloisKeys(self.data.galois_keys())

    def generate_galois_keys(self, secret_key: SecretKey = None):
        if secret_key is None:
            self.data.generate_galois_keys()
        elif isinstance(secret_key, SecretKey):
            self.data.generate_galois_keys(secret_key.data)
        else:
            raise TypeError(f"incorrect type: {type(secret_key)} != SecretKey")

    def has_relin_keys(self) -> bool:
        return self.data.has_relin_keys()

    def relin_keys(self) -> RelinKeys:
        return RelinKeys(self.data.relin_keys())

    def generate_relin_keys(self, secret_key: SecretKey = None):
        if secret_key is None:
            self.data.generate_relin_keys()
        elif isinstance(secret_key, SecretKey):
            self.data.generate_relin_keys(secret_key.data)
        else:
            raise TypeError(f"incorrect type: {type(secret_key)} != SecretKey")

    def has_secret_key(self) -> bool:
        return self.data.has_secret_key()

    def secret_key(self) -> SecretKey:
        return SecretKey(self.data.secret_key())

    def has_public_key(self) -> bool:
        return self.data.has_public_key()

    def public_key(self) -> PublicKey:
        return PublicKey(self.data.public_key())

    def is_private(self) -> bool:
        return self.data.is_private()

    def is_public(self) -> bool:
        return self.data.is_public()

    def make_context_public(
        self, generate_galois_keys: bool = False, generate_relin_keys: bool = False
    ):
        """Drop secret part from the context. This is useful before sending the context for remote
        computation, as we don't want to send the secret-key that can be used to decrypt values.

        Args:
            generate_galois_keys: should we generate galois-keys before dropping the secret-key?
            generate_relin_keys: should we generate relin-keys before dropping the secret-key?
        """
        self.data.make_context_public(
            generate_galois_keys=generate_galois_keys, generate_relin_keys=generate_relin_keys
        )
