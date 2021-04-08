"""Vector of values encrypted using CKKS. Less flexible, but more efficient than CKKSTensor.
"""
from typing import List
import tenseal as ts
from tenseal.tensors.abstract_tensor import AbstractTensor


class CKKSVector(AbstractTensor):
    def __init__(
        self,
        context: "ts.Context" = None,
        vector=None,
        scale: float = None,
        data: ts._ts_cpp.CKKSVector = None,
    ):
        """Constructor method for the CKKSVector object, which can store a vector of
        float numbers in encrypted form, using the CKKS homomorphic encryption scheme.

        Args:
            context: a Context object, holding the encryption parameters and keys.
            vector (of float): a vector holding data to be encrypted.
            scale: the scale to be used to encode vector values. CKKSTensor will use the global_scale provided by the context if it's set to None.
            data: A ts._ts_cpp.CKKSVector to wrap. We won't construct a new object if it's passed.

        Returns:
            CKKSVector object.
        """
        # wrapping
        if data is not None:
            self.data = data
        # constructing a new object
        else:
            if not isinstance(context, ts.Context):
                raise TypeError("context must be a tenseal.Context")
            if not isinstance(vector, ts.PlainTensor):
                vector = ts.plain_tensor(vector, dtype="float")
            if len(vector.shape) != 1:
                raise ValueError("can only encrypt a vector")
            vector = vector.raw

            if scale is None:
                self.data = ts._ts_cpp.CKKSVector(context.data, vector)
            else:
                self.data = ts._ts_cpp.CKKSVector(context.data, vector, scale)

    def scale(self) -> float:
        return self.data.scale()

    def decrypt(self, secret_key: "ts.enc_context.SecretKey" = None) -> List[float]:
        return self._decrypt(secret_key=secret_key)

    def size(self) -> int:
        return self.data.size()

    def ciphertext(self) -> List["ts._ts_cpp.Ciphertext"]:
        return self.data.ciphertext()

    @classmethod
    def pack_vectors(cls, vectors: List["CKKSVector"]) -> "CKKSVector":
        to_pack = []
        for v in vectors:
            if not isinstance(v, cls):
                raise TypeError("vectors to pack must be of type tenseal.CKKSVector")
            to_pack.append(v.data)
        return cls(data=ts._ts_cpp.CKKSVector.pack_vectors(to_pack))

    # TODO: remove this when Vectors start operating with PlainTensors
    @classmethod
    def _get_operand(cls, other, dtype="float"):
        if isinstance(other, (int, float)):
            return other
        elif isinstance(other, (cls)):
            return other.data

        if not isinstance(other, ts.PlainTensor):
            try:
                other = ts.plain_tensor(other, dtype="float")
            except TypeError:
                raise TypeError(f"can't operate with object of type {type(other)}")
        if len(other.shape) != 1:
            raise ValueError("can only operate with a vector")
        other = other.raw

        return other

    def add(self, other) -> "CKKSVector":
        other = self._get_operand(other, dtype="float")
        result = self.data + other
        return self._wrap(result)

    def add_(self, other) -> "CKKSVector":
        other = self._get_operand(other, dtype="float")
        self.data += other
        return self

    def mul(self, other) -> "CKKSVector":
        other = self._get_operand(other, dtype="float")
        result = self.data * other
        return self._wrap(result)

    def mul_(self, other) -> "CKKSVector":
        other = self._get_operand(other, dtype="float")
        self.data *= other
        return self

    def sub(self, other) -> "CKKSVector":
        other = self._get_operand(other, dtype="float")
        result = self.data - other
        return self._wrap(result)

    def sub_(self, other) -> "CKKSVector":
        other = self._get_operand(other, dtype="float")
        self.data -= other
        return self

    @classmethod
    def _dot(cls, other):
        if isinstance(other, (cls)):
            return other.data
        if not isinstance(other, ts.PlainTensor):
            try:
                other = ts.plain_tensor(other, dtype="float")
            except TypeError:
                raise TypeError(f"can't operate with object of type {type(other)}")
        if len(other.shape) != 1:
            raise ValueError("can only operate with a vector")
        return other.data

    def dot(self, other) -> "CKKSVector":
        other = self._dot(other)
        return self._wrap(self.data.dot(other))

    def dot_(self, other) -> "CKKSVector":
        other = self._dot(other)
        self.data.dot_(other)
        return self

    @classmethod
    def _mm(cls, other):
        if not isinstance(other, ts.PlainTensor):
            try:
                other = ts.plain_tensor(other, dtype="float")
            except TypeError:
                raise TypeError(f"can't operate with object of type {type(other)}")
        if len(other.shape) != 2:
            raise ValueError("can only operate with a matrix")
        return other.data

    def mm(self, other) -> "CKKSVector":
        other = self._mm(other)
        return self._wrap(self.data.mm(other))

    def mm_(self, other) -> "CKKSVector":
        other = self._mm(other)
        self.data.mm_(other)
        return self

    def matmul(self, *args, **kwargs) -> "CKKSVector":
        return self.mm(*args, **kwargs)

    def matmul_(self, *args, **kwargs) -> "CKKSVector":
        return self.mm_(*args, **kwargs)

    def __matmul__(self, *args, **kwargs) -> "CKKSVector":
        return self.mm(*args, **kwargs)

    def __imatmul__(self, *args, **kwargs) -> "CKKSVector":
        return self.mm_(*args, **kwargs)

    @classmethod
    def _conv2d_im2col(cls, other):
        if not isinstance(other, ts.PlainTensor):
            try:
                other = ts.plain_tensor(other, dtype="float")
            except TypeError:
                raise TypeError(f"can't operate with object of type {type(other)}")
        if len(other.shape) != 2:
            raise ValueError("can only operate with a matrix")
        return other.tolist()

    def conv2d_im2col(self, other, windows_nb) -> "CKKSVector":
        other = self._conv2d_im2col(other)
        return self._wrap(self.data.conv2d_im2col(other, windows_nb))

    def conv2d_im2col_(self, other, windows_nb) -> "CKKSVector":
        other = self._conv2d_im2col(other)
        self.data.conv2d_im2col_(other, windows_nb)
        return self

    @classmethod
    def _enc_matmul_plain(self, other):
        if not isinstance(other, ts.PlainTensor):
            try:
                other = ts.plain_tensor(other, dtype="float")
            except TypeError:
                raise TypeError(f"can't operate with object of type {type(other)}")
        if len(other.shape) != 1:
            raise ValueError("can only operate with a vector")
        other = other.raw
        return other

    def enc_matmul_plain(self, other, row_size) -> "CKKSVector":
        other = self._enc_matmul_plain(other)
        return self._wrap(self.data.enc_matmul_plain(other, row_size))

    def enc_matmul_plain_(self, other, row_size) -> "CKKSVector":
        other = self._enc_matmul_plain(other)
        self.data.enc_matmul_plain_(other, row_size)
        return self
