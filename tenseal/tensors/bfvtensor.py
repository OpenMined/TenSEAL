"""N-dimensional tensor storing value in encrypted form using BFV.
"""

from typing import List
import tenseal as ts
from tenseal.tensors.abstract_tensor import AbstractTensor


class BFVTensor(AbstractTensor):
    def __init__(
        self,
        context: "ts.Context" = None,
        tensor=None,
        batch: bool = False,
        data: ts._ts_cpp.BFVTensor = None,
    ):
        """Constructor method for the BFVTensor object, which can store an n-dimensional
        int tensor in encrypted form, using the BFV homomorphic encryption scheme.

        Args:
            context: a Context object, holding the encryption parameters and keys.
            tensor: tensor-like object.
            batch: should we use ciphertext-level batching?
            data: A ts._ts_cpp.BFVTensor to wrap. We won't construct a new object if it's passed.

        Returns:
            BFVTensor object.
        """
        # wrapping
        if data is not None:
            self.data = data
        # constructing a new object
        else:
            if not isinstance(context, ts.Context):
                raise TypeError("context must be a tenseal.Context")
            if not isinstance(tensor, ts.PlainTensor):
                tensor = ts.plain_tensor(tensor, dtype="int")

            tensor.dtype = "int"

            self.data = ts._ts_cpp.BFVTensor(context.data, tensor.data, batch)

    def ciphertext(self) -> List["ts._ts_cpp.Ciphertext"]:
        return self.data.ciphertext()

    def decrypt(self, secret_key: "ts.enc_context.SecretKey" = None) -> "ts.PlainTensor":
        pt = self._decrypt(secret_key=secret_key)
        return ts.PlainTensor(pt.data(), shape=pt.shape(), dtype="int")

    def add(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        result = self.data + other
        return self._wrap(result)

    def add_(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        self.data += other
        return self

    def mul(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        result = self.data * other
        return self._wrap(result)

    def mul_(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        self.data *= other
        return self

    def sub(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        result = self.data - other
        return self._wrap(result)

    def sub_(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        self.data -= other
        return self

    def dot(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        result = self.data.dot(other)
        return self._wrap(result)

    def dot_(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        self.data.dot_(other)
        return self

    def mm(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        result = self.data.mm(other)
        return self._wrap(result)

    def mm_(self, other) -> "BFVTensor":
        other = self._get_operand(other, dtype="int")
        self.data.mm_(other)
        return self

    def __matmul__(self, other) -> "BFVTensor":
        return self.mm(other)

    def __imatmul__(self, other) -> "BFVTensor":
        return self.mm_(other)

    def sum_batch(self) -> "BFVTensor":
        return self._wrap(self.data.sum_batch())

    def sum_batch_(self) -> "BFVTensor":
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
