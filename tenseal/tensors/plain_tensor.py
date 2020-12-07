"""
"""
import tenseal as ts
import numpy as np


class PlainTensor:
    def __init__(self, tensor, dtype="float"):
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
        shape = t.shape
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
    def dtype(self):
        return self._dtype

    @dtype.setter
    def dtype(self, value):
        raise RuntimeError("cannot convert dtype")
