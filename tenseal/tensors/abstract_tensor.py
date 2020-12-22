"""Abstract tensor class that implements common tensor methods"""
from typing import List, Union
import tenseal as ts
from abc import ABC


class AbstractTensor(ABC):
    @property
    def data(self):
        """Get the wrapped low level tensor object"""
        return self._data

    @data.setter
    def data(self, value):
        """Set the wrapped low level tensor object"""
        native_type = getattr(ts._ts_cpp, self.__class__.__name__)
        if not isinstance(value, native_type):
            raise TypeError(f"value must be of type {native_type}")
        self._data = value

    def copy(self):
        return self._wrap(data=self.data.copy())

    def __copy__(self):
        return self.copy()

    def context(self) -> "ts.Context":
        """Get the context linked to this tensor"""
        return ts.Context._wrap(self.data.context())

    def link_context(self, ctx: "ts.Context"):
        """Set the context linked to this tensor"""
        return self.data.link_context(ctx.data)

    @property
    def shape(self) -> List[int]:
        return self.data.shape()

    @classmethod
    def load(cls, context: "ts.Context", data: bytes) -> "AbstractTensor":
        """
        Constructor method for the tensor object from a serialized protobuffer.
        Args:
            context: a context, holding the encryption parameters and keys.
            data: the serialized protobuffer.
        Returns:
            Tensor object.
        """
        if isinstance(context, ts.Context) and isinstance(data, bytes):
            native_type = getattr(ts._ts_cpp, cls.__name__)
            return cls._wrap(native_type(context.data, data))

        raise TypeError(
            "Invalid input types context: {} and vector: {}".format(type(context), type(data))
        )

    @classmethod
    def lazy_load(cls, data: bytes) -> "AbstractTensor":
        """
        Constructor method for the tensor object from a serialized protobuffer, without a context.
        Args:
            data: the serialized protobuffer.
        Returns:
            Tensor object.
        """
        if isinstance(data, bytes):
            native_type = getattr(ts._ts_cpp, cls.__name__)
            return cls._wrap(native_type(data))

        raise TypeError("Invalid input types vector: {}".format(type(data)))

    def serialize(self) -> bytes:
        """Serialize the tensor into a stream of bytes"""
        return self.data.serialize()

    @classmethod
    def _wrap(cls, data) -> "AbstractTensor":
        """Return a new tensor object wrapping the low level tensor object"""
        return cls(data=data)

    def _decrypt(
        self, secret_key: "ts.enc_context.SecretKey" = None
    ) -> Union[ts._ts_cpp.PlainTensorDouble, ts._ts_cpp.PlainTensorInt64, List[float], List[int]]:
        if secret_key is None:
            return self.data.decrypt()
        elif isinstance(secret_key, ts.enc_context.SecretKey):
            return self.data.decrypt(secret_key.data)
        else:
            raise TypeError(f"incorrect type: {type(secret_key)} != SecretKey")

    @classmethod
    def _get_operand(cls, other, dtype: str = "float") -> Union[int, float, "ts._ts_cpp.Tensor"]:
        """Extract the appropriate operand the tensor can operate with"""
        if isinstance(other, (int, float)):
            return other
        elif isinstance(other, (cls, ts.PlainTensor)):
            return other.data
        else:
            try:
                other = ts.plain_tensor(other, dtype=dtype)
                other = other.data
            except TypeError:
                raise TypeError(f"can't operate with object of type {type(other)}")
            return other

    def __add__(self, other) -> "AbstractTensor":
        return self.add(other)

    def __iadd__(self, other) -> "AbstractTensor":
        return self.add_(other)

    def __radd__(self, other) -> "AbstractTensor":
        return self.add(other)

    def __mul__(self, other) -> "AbstractTensor":
        return self.mul(other)

    def __imul__(self, other) -> "AbstractTensor":
        return self.mul_(other)

    def __rmul__(self, other) -> "AbstractTensor":
        return self.mul(other)

    def __sub__(self, other) -> "AbstractTensor":
        return self.sub(other)

    def __isub__(self, other) -> "AbstractTensor":
        return self.sub_(other)

    def __rsub__(self, other) -> "AbstractTensor":
        copy = self.copy()
        copy.neg_()
        copy.add_(other)
        return copy

    def __pow__(self, power) -> "AbstractTensor":
        return self.pow(power)

    def __ipow__(self, power) -> "AbstractTensor":
        return self.pow_(power)

    def __neg__(self) -> "AbstractTensor":
        return self.neg()

    def neg(self) -> "AbstractTensor":
        return self._wrap(self.data.neg())

    def neg_(self) -> "AbstractTensor":
        self.data.neg_()
        return self

    def sum(self, axis=0) -> "AbstractTensor":
        return self._wrap(self.data.sum(axis))

    def sum_(self, axis=0) -> "AbstractTensor":
        self.data.sum_(axis)
        return self

    def square(self) -> "AbstractTensor":
        return self._wrap(self.data.square())

    def square_(self) -> "AbstractTensor":
        self.data.square_()
        return self

    def pow(self, power) -> "AbstractTensor":
        return self._wrap(self.data.pow(power))

    def pow_(self, power) -> "AbstractTensor":
        self.data.pow_(power)
        return self

    def polyval(self, coefficients: Union[List[float], List[int]]) -> "AbstractTensor":
        """Evaluate polynomial
        `coefficients[0] + coefficients[1] * self + .... coefficients[n] * self ^ n`
        """
        return self._wrap(self.data.polyval(coefficients))

    def polyval_(self, coefficients: Union[List[float], List[int]]) -> "AbstractTensor":
        self.data.polyval_(coefficients)
        return self
