"""Vector of values encrypted using BFV.
"""
from typing import List
import tenseal as ts
from tenseal.tensors.abstract_tensor import AbstractTensor


class BFVVector(AbstractTensor):
    def __init__(
        self, context: "ts.Context" = None, vector=None, data: ts._ts_cpp.BFVVector = None
    ):
        """Constructor method for the BFVVector object, which can store a vector of
        integers in encrypted form, using the BFV homomorphic encryption scheme.

        Args:
            context: a Context object, holding the encryption parameters and keys.
            vector (of int): a vector holding data to be encrypted.
            data: A ts._ts_cpp.BFVVector to wrap. We won't construct a new object if it's passed.

        Returns:
            BFVVector object.
        """
        # wrapping
        if data is not None:
            self.data = data
        # constructing a new object
        else:
            if not isinstance(context, ts.Context):
                raise TypeError("context must be a tenseal.Context")
            if not isinstance(vector, ts.PlainTensor):
                vector = ts.plain_tensor(vector, dtype="int")
            if len(vector.shape) != 1:
                raise ValueError("can only encrypt a vector")
            vector = vector.raw

            self.data = ts._ts_cpp.BFVVector(context.data, vector)

    def decrypt(self, secret_key: "ts.enc_context.SecretKey" = None) -> List[int]:
        return self._decrypt(secret_key=secret_key)

    def size(self) -> int:
        return self.data.size()

    @classmethod
    def pack_vectors(cls, vectors: List["BFVVector"]) -> "BFVVector":
        to_pack = []
        for v in vectors:
            if not isinstance(v, cls):
                raise TypeError("vectors to pack must be of type tenseal.BFVVector")
            to_pack.append(v.data)
        return cls(data=ts._ts_cpp.BFVVector.pack_vectors(to_pack))

    # TODO: remove this when Vectors start operating with PlainTensors
    @classmethod
    def _get_operand(cls, other, dtype="int"):
        if isinstance(other, (int, float)):
            return other
        elif isinstance(other, (cls)):
            return other.data

        if not isinstance(other, ts.PlainTensor):
            try:
                other = ts.plain_tensor(other, dtype="int")
            except TypeError:
                raise TypeError(f"can't operate with object of type {type(other)}")
        if len(other.shape) != 1:
            raise ValueError("can only operate with a vector")
        other = other.raw

        return other

    def add(self, other) -> "BFVVector":
        other = self._get_operand(other, dtype="int")
        result = self.data + other
        return self._wrap(result)

    def add_(self, other) -> "BFVVector":
        other = self._get_operand(other, dtype="int")
        self.data += other
        return self

    def mul(self, other) -> "BFVVector":
        other = self._get_operand(other, dtype="int")
        result = self.data * other
        return self._wrap(result)

    def mul_(self, other) -> "BFVVector":
        other = self._get_operand(other, dtype="int")
        self.data *= other
        return self

    def sub(self, other) -> "BFVVector":
        other = self._get_operand(other, dtype="int")
        result = self.data - other
        return self._wrap(result)

    def sub_(self, other) -> "BFVVector":
        other = self._get_operand(other, dtype="int")
        self.data -= other
        return self
