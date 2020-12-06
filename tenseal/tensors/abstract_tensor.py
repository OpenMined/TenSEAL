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
        return self.__init__(data=self.data.copy())

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

    def __add__(self, other):
        return self.add(other)

    def __iadd__(self, other):
        return self.add_(other)

    def __radd__(self, other):
        return self.add(other)
