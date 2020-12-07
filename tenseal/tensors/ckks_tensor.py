"""
"""

import tenseal as ts
from tenseal.tensors.abstract_tensor import AbstractTensor


class CKKSTensor(AbstractTensor):
    def __init__(self, context=None, tensor=None, scale=None, batch=False, data=None):
        """Constructor method for the CKKSTensor object, which can store an n-dimensional
        float tensor in encrypted form, using the CKKS homomorphic encryption scheme.

        Args:
            context: a Context object, holding the encryption parameters and keys.
            tensor: a PlainTensorDouble holding data to be encrypted.
            scale: the scale to be used to encode vector values. CKKSTensor will use the global_scale provided by the context if it's set to None.
            batch: 
            data:

        Returns:
            CKKSTensor object.
        """
        # wrapping
        if data is not None:
            self.data = data
        # constructing a new object
        else:
            if not isinstance(context, ts.Context):
                raise TypeError("context must be a tenseal.Context")
            if not isinstance(tensor, ts.PlainTensor):
                tensor = ts.plain_tensor(tensor, dtype="float")

            tensor.dtype = "float"

            if scale is None:
                self.data = ts._ts_cpp.CKKSTensor(context.data, tensor.data, batch)
            else:
                self.data = ts._ts_cpp.CKKSTensor(context.data, tensor.data, scale, batch)

    def decrypt(self, secret_key=None):
        return self._decrypt(secret_key=secret_key)

    def add(self, other):
        if isinstance(other, (int, float)):
            result = self.data + other
        elif isinstance(other, self.__class__):
            result = self.data + other.data
        else:
            try:
                to_add = ts.plain_tensor(other, dtype="float")
            except TypeError:
                raise TypeError(f"can't add with object of type {type(other)}")
            result = self.data + to_add

        return self._wrap(result)

    def add_(self, other):
        if isinstance(other, (int, float)):
            self.data += other
        elif isinstance(other, self.__class__):
            self.data += other.data
        else:
            try:
                to_add = ts.plain_tensor(other, dtype="float")
            except TypeError:
                raise TypeError(f"can't add with object of type {type(other)}")
            self.data += to_add
