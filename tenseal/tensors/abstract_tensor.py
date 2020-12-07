"""
"""

import tenseal as ts
from abc import ABC


class AbstractTensor(ABC):
    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, value):
        native_type = getattr(ts._ts_cpp, self.__class__.__name__)
        if not isinstance(value, native_type):
            raise TypeError(f"value must be of type {native_type}")
        self._data = value

    def copy(self):
        return self._wrap(data=self.data.copy())

    def context(self):
        return ts.Context._wrap(self.data.context())

    @property
    def shape(self):
        return self.data.shape()

    @classmethod
    def load(cls, context, data):
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

    def serialize(self):
        return self.data.serialize()

    @classmethod
    def _wrap(cls, data):
        return cls(data=data)

    def _decrypt(self, secret_key=None):
        if secret_key is None:
            return self.data.decrypt()
        elif isinstance(secret_key, ts.SecretKey):
            return self.data.decrypt(secret_key.data)
        else:
            raise TypeError(f"incorrect type: {type(secret_key)} != SecretKey")

    @classmethod
    def _get_operand(cls, other, dtype="float"):
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

    def __add__(self, other):
        return self.add(other)

    def __iadd__(self, other):
        return self.add_(other)

    def __radd__(self, other):
        return self.add(other)

    def __mul__(self, other):
        return self.mul(other)

    def __imul__(self, other):
        return self.mul_(other)

    def __rmul__(self, other):
        return self.mul(other)

    def __sub__(self, other):
        return self.sub(other)

    def __isub__(self, other):
        return self.sub_(other)

    def __rsub__(self, other):
        copy = self.copy()
        copy.neg_()
        copy.add_(other)
        return copy

    def __pow__(self, power):
        return self.pow(power)

    def __ipow__(self, power):
        return self.pow_(power)

    def __neg__(self):
        return self.neg()

    def neg(self):
        return self._wrap(self.data.neg())

    def neg_(self):
        self.data.neg_()
        return self

    def sum(self, axis=0):
        return self._wrap(self.data.sum(axis))

    def sum_(self, axis=0):
        self.data.sum_(axis)
        return self

    def square(self):
        return self._wrap(self.data.square())

    def square_(self):
        self.data.square_()
        return self

    def pow(self, power):
        return self._wrap(self.data.pow(power))

    def pow_(self, power):
        self.data.pow_(power)
        return self

    def polyval(self, coefficients):
        return self._wrap(self.data.polyval(coefficients))

    def polyval_(self, coefficients):
        self.data.polyval_(coefficients)
        return self
