"""The tensors module provides different tensors that serves different purposes
and have different functionalities.

- CKKSTensor: N-dimensional tensor storing value in encrypted form using CKKS.
- CKKSValue: Vector of values encrypted using CKKS. Less flexible, but more efficient than CKKSTensor.
- BFVVectpr: Vector of values encrypted using BFV.
- PlainTensor: N-dimensonal tensor, serving as the main type to interact with encrypted tensors.
"""
from tenseal.tensors.ckkstensor import CKKSTensor
from tenseal.tensors.ckksvector import CKKSVector
from tenseal.tensors.bfvvector import BFVVector
from tenseal.tensors.bfvtensor import BFVTensor
from tenseal.tensors.plaintensor import PlainTensor
