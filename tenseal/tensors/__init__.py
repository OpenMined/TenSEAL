"""The tensors module provides tensors of different shape implementing
different homomorphic encryption schemes, allowing someone to use the right
one for their specific use case.
"""
from tenseal.tensors.ckkstensor import CKKSTensor
from tenseal.tensors.ckksvector import CKKSVector
from tenseal.tensors.bfvvector import BFVVector
from tenseal.tensors.plaintensor import PlainTensor
