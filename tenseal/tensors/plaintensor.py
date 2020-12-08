"""N-dimensonal tensor, serving as the main type to interact with encrypted tensors.
"""
from typing import List, Union
import tenseal as ts
import numpy as np


class PlainTensor:
    def __init__(self, tensor, shape: List[int] = None, dtype: str = "float"):
        """Constructor method for the PlainTensor object.
        Args:
            tensor: tensor-like object.
            shape: replace the shape learned from the input tensor.
            dtype: 'float' or 'int'.
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
    def data(self) -> Union[ts._ts_cpp.PlainTensorDouble, ts._ts_cpp.PlainTensorInt64]:
        """Get the wrapped low level PlainTensor object"""
        return self._data

    @data.setter
    def data(self, value: Union[ts._ts_cpp.PlainTensorDouble, ts._ts_cpp.PlainTensorInt64]):
        """Set the wrapped low level PlainTensor object"""
        if not isinstance(value, (ts._ts_cpp.PlainTensorDouble, ts._ts_cpp.PlainTensorInt64)):
            raise TypeError(f"wrong data type")
        self._data = value

    @property
    def raw(self) -> List[Union[float, int]]:
        """Returns the internal representation of the tensor"""
        return self.data.data()

    @property
    def dtype(self) -> str:
        return self._dtype

    @dtype.setter
    def dtype(self, value: str):
        """Converts tensor data type."""
        if value not in ("float", "int"):
            raise ValueError("wrong dtype, must be either 'float' or 'int'")
        if self.dtype == value:  # nothing to do
            return
        raw = self.raw
        shape = self.shape
        del self._data
        self._dtype = value
        if self.dtype == "float":
            data = [float(r) for r in raw]
            self.data = ts._ts_cpp.PlainTensorDouble(data, shape)
        elif self.dtype == "int":
            data = [int(r) for r in raw]
            self.data = ts._ts_cpp.PlainTensorInt64(data, shape)

    def at(self, index: List[int]) -> Union[int, float]:
        return self.data.at(index)

    @property
    def shape(self) -> List[int]:
        return self.data.shape()

    def strides(self) -> List[int]:
        return self.data.strides()

    def empty(self) -> bool:
        return bool(self.data.empty())

    def size(self) -> int:
        """Returns shape[0]"""
        return self.data.size()

    def __len__(self):
        return len(self.data)

    def tolist(self):
        """Converts a plain tensor to a Python list.

        Returns:
            Python list.
        """
        return np.array(self.raw).reshape(self.shape).tolist()

    def batch(self, dim: int) -> List[List[Union[int, float]]]:
        "Returns a list of batches constructed from dimension `dim`"
        return self.data.batch(dim)
