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

    # TODO specific parameters
    def neg(self, *args, **kwargs):
        return self._wrap(self.data.neg(*args, **kwargs))

    def neg_(self, *args, **kwargs):
        self.data.neg_(*args, **kwargs)
        return self

    def sum(self, *args, **kwargs):
        return self._wrap(self.data.sum(*args, **kwargs))

    def sum_(self, *args, **kwargs):
        self.data.sum_(*args, **kwargs)
        return self

    def sum_batch(self, *args, **kwargs):
        return self._wrap(self.data.sum_batch(*args, **kwargs))

    def sum_batch_(self, *args, **kwargs):
        self.data.sum_batch_(*args, **kwargs)
        return self

    def square(self, *args, **kwargs):
        return self._wrap(self.data.square(*args, **kwargs))

    def square_(self, *args, **kwargs):
        self.data.square_(*args, **kwargs)
        return self

    def pow(self, *args, **kwargs):
        return self._wrap(self.data.pow(*args, **kwargs))

    def pow_(self, *args, **kwargs):
        self.data.pow_(*args, **kwargs)
        return self

    def polyval(self, *args, **kwargs):
        return self._wrap(self.data.polyval(*args, **kwargs))

    def polyval_(self, *args, **kwargs):
        self.data.polyval_(*args, **kwargs)
        return self
