"""N-dimensional tensor storing value in encrypted form using CKKS.
"""

from typing import List
import tenseal as ts
from tenseal.tensors.abstract_tensor import AbstractTensor


class CKKSTensor(AbstractTensor):
    def __init__(
        self,
        context: "ts.Context" = None,
        tensor=None,
        scale: float = None,
        batch: bool = False,
        data: ts._ts_cpp.CKKSTensor = None,
    ):
        """Constructor method for the CKKSTensor object, which can store an n-dimensional
        float tensor in encrypted form, using the CKKS homomorphic encryption scheme.

        Args:
            context: a Context object, holding the encryption parameters and keys.
            tensor: tensor-like object.
            scale: the scale to be used to encode tensor values. CKKSTensor will use the global_scale provided by the context if it's set to None.
            batch: should we use ciphertext-level batching?
            data: A ts._ts_cpp.CKKSTensor to wrap. We won't construct a new object if it's passed.

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

    def scale(self) -> float:
        return self.data.scale()

    def ciphertext(self) -> List["ts._ts_cpp.Ciphertext"]:
        return self.data.ciphertext()

    def decrypt(self, secret_key: "ts.enc_context.SecretKey" = None) -> "ts.PlainTensor":
        pt = self._decrypt(secret_key=secret_key)
        return ts.PlainTensor(pt.data(), shape=pt.shape(), dtype="float")

    def __getitem__(self, item) -> "CKKSTensor":
        slices = []
        if isinstance(item, int):
            start = item
            stop = item + 1
            slices = [(start, stop)]
        elif isinstance(item, slice):
            start = 0 if item.start is None else item.start
            stop = self.data.shape()[0] if item.stop is None else item.stop
            slices = [(start, stop)]
        else:
            for i, slice_ in enumerate(item):
                start = 0 if slice_.start is None else slice_.start
                stop = self.data.shape()[i] if slice_.stop is None else slice_.stop
                slices.append((start, stop))

        return self._wrap(self.data.subscript(slices))

    def add(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        result = self.data + other
        return self._wrap(result)

    def add_(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        self.data += other
        return self

    def mul(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        result = self.data * other
        return self._wrap(result)

    def mul_(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        self.data *= other
        return self

    def sub(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        result = self.data - other
        return self._wrap(result)

    def sub_(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        self.data -= other
        return self

    def dot(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        result = self.data.dot(other)
        return self._wrap(result)

    def dot_(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        self.data.dot_(other)
        return self

    def mm(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        result = self.data.mm(other)
        return self._wrap(result)

    def mm_(self, other) -> "CKKSTensor":
        other = self._get_operand(other, dtype="float")
        self.data.mm_(other)
        return self

    def __matmul__(self, other) -> "CKKSTensor":
        return self.mm(other)

    def __imatmul__(self, other) -> "CKKSTensor":
        return self.mm_(other)

    def sum_batch(self) -> "CKKSTensor":
        return self._wrap(self.data.sum_batch())

    def sum_batch_(self) -> "CKKSTensor":
        self.data.sum_batch_()
        return self

    def reshape(self, shape: List[int]):
        "Copies and changes the internal representation to a new tensor"
        result = self.data.reshape(shape)
        return self._wrap(result)

    def reshape_(self, shape: List[int]):
        "Changes the internal representation to a new shape"
        self.data.reshape_(shape)
        return self

    def broadcast(self, shape: List[int]):
        "Copies and tries to broadcast the internal representation to a new shape"
        result = self.data.broadcast(shape)
        return self._wrap(result)

    def broadcast_(self, shape: List[int]):
        "Tries to broadcast the internal representation to a new shape"
        self.data.broadcast_(shape)
        return self

    def transpose(self):
        "Copies the transpose to a new tensor"
        result = self.data.transpose()
        return self._wrap(result)

    def transpose_(self):
        "Tries to transpose the tensor"
        self.data.transpose_()
        return self
