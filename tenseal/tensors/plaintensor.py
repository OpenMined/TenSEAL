"""
"""
import tenseal as ts
import numpy as np


class PlainTensor:
    def __init__(self, tensor, shape=None, dtype="float"):
        """Constructor method for the PlainTensor object.
        Args:
            tensor:
            dtype:
        Returns:
            PlainTensor object.
        """
        if dtype not in ("float", "int"):
            raise ValueError("wrong dtype, must be either 'float' or 'int'")
        try:
            t = np.array(tensor, dtype=dtype)
        except:
            raise TypeError("input isn't a well structured tensor")
        shape = t.shape if shape is None else shape
        data = t.flatten().tolist()
        if dtype == "float":
            self._dtype = "float"
            self.data = ts._ts_cpp.PlainTensorDouble(data, shape)
        elif dtype == "int":
            self._dtype = "int"
            self.data = ts._ts_cpp.PlainTensorInt64(data, shape)

    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, value):
        if not isinstance(value, (ts._ts_cpp.PlainTensorDouble, ts._ts_cpp.PlainTensorInt64)):
            raise TypeError(f"wrong data type")
        self._data = value

    @property
    def raw(self):
        return self.data.data()

    @property
    def dtype(self):
        return self._dtype

    @dtype.setter
    def dtype(self, value):
        """Convert tensor data type."""
        if value not in ("float", "int"):
            raise ValueError("wrong dtype, must be either 'float' or 'int'")
        if self.dtype == value:  # nothing to do
            return
        raw = self.raw
        shape = self.shape
        del self._data
        self._dtype = value
        if self.dtype == "float":
            self._dtype = "float"
            data = [float(r) for r in raw]
            self.data = ts._ts_cpp.PlainTensorDouble(data, shape)
        elif self.dtype == "int":
            self._dtype = "int"
            data = [int(r) for r in raw]
            self.data = ts._ts_cpp.PlainTensorInt64(data, shape)

    def at(self, index):
        return self.data.at(index)

    @property
    def shape(self):
        return self.data.shape()

    def empty(self):
        return bool(self.data.empty())

    def __len__(self):
        return len(self.data)

    def tolist(self):
        """
        Converts a plain tensor to a Python list.
        Returns:
            Python list.
        """
        return np.array(self.raw).reshape(self.shape).tolist()
