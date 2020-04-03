import tenseal as ts
import pytest


@pytest.fixture
def context():
    return ts.bfv_context(4096, 1024)


def test_add(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, [4, 3, 2, 1])
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."
    assert first_vec.decrypt() == [
        1, 2, 3, 4], "Something went wrong in memory."
    assert second_vec.decrypt() == [
        4, 3, 2, 1], "Something went wrong in memory."


def test_add_inplace(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, [4, 3, 2, 1])
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."
    assert second_vec.decrypt() == [
        4, 3, 2, 1], "Something went wrong in memory."


def test_add_plain(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec + second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."
    assert first_vec.decrypt() == [
        1, 2, 3, 4], "Something went wrong in memory."


def test_add__plain_inplace(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec += second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == [
        5, 5, 5, 5], "Addition of vectors is incorrect."


def test_sub(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, [4, 3, 2, 1])
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == [
        -3, -1, 1, 3], "Substraction of vectors is incorrect."
    assert first_vec.decrypt() == [
        1, 2, 3, 4], "Something went wrong in memory."
    assert second_vec.decrypt() == [
        4, 3, 2, 1], "Something went wrong in memory."


def test_sub_inplace(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = ts.bfv_naive_vector(context, [4, 3, 2, 1])
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == [
        -3, -1, 1, 3], "Substraction of vectors is incorrect."
    assert second_vec.decrypt() == [
        4, 3, 2, 1], "Something went wrong in memory."


def test_sub_plain(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    result = first_vec - second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == [
        -3, -1, 1, 3], "Substraction of vectors is incorrect."
    assert first_vec.decrypt() == [
        1, 2, 3, 4], "Something went wrong in memory."


def test_sub_plain_inplace(context):
    first_vec = ts.bfv_naive_vector(context, [1, 2, 3, 4])
    second_vec = [4, 3, 2, 1]
    first_vec -= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == [
        -3, -1, 1, 3], "Substraction of vectors is incorrect."


def test_mul(context):
    first_vec = ts.bfv_naive_vector(context, [66, 73, 81, 90])
    second_vec = ts.bfv_naive_vector(context, [2, 3, 4, 5])
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == [
        132, 219, 324, 450], "Multiplication of vectors is incorrect."
    assert first_vec.decrypt() == [66, 73, 81,
                                   90], "Something went wrong in memory."
    assert second_vec.decrypt() == [
        2, 3, 4, 5], "Something went wrong in memory."


def test_mul_inplace(context):
    first_vec = ts.bfv_naive_vector(context, [66, 73, 81, 90])
    second_vec = ts.bfv_naive_vector(context, [2, 3, 4, 5])
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == [
        132, 219, 324, 450], "Multiplication of vectors is incorrect."
    assert second_vec.decrypt() == [
        2, 3, 4, 5], "Something went wrong in memory."


def test_mul_plain(context):
    first_vec = ts.bfv_naive_vector(context, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    result = first_vec * second_vec

    # Decryption
    decrypted_result = result.decrypt()
    assert decrypted_result == [
        132, 219, 324, 450], "Multiplication of vectors is incorrect."
    assert first_vec.decrypt() == [66, 73, 81,
                                   90], "Something went wrong in memory."


def test_mul_plain_inplace(context):
    first_vec = ts.bfv_naive_vector(context, [66, 73, 81, 90])
    second_vec = [2, 3, 4, 5]
    first_vec *= second_vec

    # Decryption
    decrypted_result = first_vec.decrypt()
    assert decrypted_result == [
        132, 219, 324, 450], "Multiplication of vectors is incorrect."


def test_size(context):
    for size in range(10):
        vec = ts.bfv_naive_vector(context, [1] * size)
        assert vec.size() == size, "Size of encrypted vector is incorrect."
