"""
"""

from abc import ABC
from tenseal import _ts_cpp


class AbstractTensor(ABC):
    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, value):
        native_type = getattr(_ts_cpp, self.__class__.__name__)
        if not isinstance(value, native_type):
            raise TypeError(f"value must be of type {native_type}")
        self._data = value

    def copy(self):
        return self.__init__(data=self.data.copy())

    @classmethod
    def _wrap(cls, data):
        return cls(data=data)

    def __add__(self, other):
        return self.add(other)

    def __iadd__(self, other):
        return self.add_(other)

    def __radd__(self, other):
        return self.add(other)
