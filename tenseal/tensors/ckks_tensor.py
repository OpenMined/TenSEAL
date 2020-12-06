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
            if not isinstance(context, ts.Context) or not isinstance(
                tensor, ts._ts_cpp.PlainTensorDouble
            ):
                raise TypeError(
                    "Invalid CKKSTensor input types context: {} and vector: {}".format(
                        type(context), type(tensor)
                    )
                )

            if scale is None:
                self.data = ts._ts_cpp.CKKSTensor(context.data, tensor, batch)
            else:
                self.data = ts._ts_cpp.CKKSTensor(context.data, tensor, scale, batch)

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
