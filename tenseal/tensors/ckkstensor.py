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
            tensor: a tensor holding data to be encrypted.
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

    def scale(self):
        return self.data.scale()

    def decrypt(self, secret_key=None):
        pt = self._decrypt(secret_key=secret_key)
        return ts.PlainTensor(pt.data(), shape=pt.shape(), dtype="float")

    def add(self, other):
        other = self._get_operand(other, dtype="float")
        result = self.data + other
        return self._wrap(result)

    def add_(self, other):
        other = self._get_operand(other, dtype="float")
        self.data += other
        return self

    def mul(self, other):
        other = self._get_operand(other, dtype="float")
        result = self.data * other
        return self._wrap(result)

    def mul_(self, other):
        other = self._get_operand(other, dtype="float")
        self.data *= other
        return self

    def sub(self, other):
        other = self._get_operand(other, dtype="float")
        result = self.data - other
        return self._wrap(result)

    def sub_(self, other):
        other = self._get_operand(other, dtype="float")
        self.data -= other
        return self

    def sum_batch(self):
        return self._wrap(self.data.sum_batch())

    def sum_batch_(self):
        self.data.sum_batch_()
        return self
