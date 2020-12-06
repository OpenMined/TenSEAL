"""
"""

import tenseal as ts
from tenseal.tensors.abstract_tensor import AbstractTensor


class CKKSTensor(AbstractTensor):
    def __init__(self, context=None, tensor=None, scale=None, batch=False, data=None):
        if data is not None:
            self.data = data
        else:
            if not isinstance(context, ts._ts_cpp.TenSEALContext) or not isinstance(
                tensor, ts._ts_cpp.PlainTensorDouble
            ):
                raise TypeError(
                    "Invalid CKKSTensor input types context: {} and vector: {}".format(
                        type(context), type(tensor)
                    )
                )

            if scale is None:
                self.data = ts._ts_cpp.CKKSTensor(context, tensor, batch)
            else:
                self.data = ts._ts_cpp.CKKSTensor(context, tensor, scale, batch)

    def add(self, other):
        if isinstance(other, (int, float)):
            result = self.data + other
        elif isinstance(other, list):
            # TODO
            pass
        elif isinstance(other, self.__class__):
            result = self.data + other.data
        else:
            raise TypeError(f"can't add with object of type {type(other)}")
        return self._wrap(result)

    def add_(self, other):
        if isinstance(other, (int, float)):
            self.data += other
        elif isinstance(other, list):
            # TODO
            pass
        elif isinstance(other, self.__class__):
            self.data += other.data
        else:
            raise TypeError(f"can't add with object of type {type(other)}")
        return self
