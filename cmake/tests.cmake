if(${BUILD_TEST})
  add_subdirectory(third_party/googletest)
  enable_testing()
  include_directories(${gtest_SOURCE_DIR}/include ${gtest_SOURCE_DIR}
                      ${gmock_SOURCE_DIR}/include third_party/SEAL)

  set(TENSEAL_TESTS_BASEDIR tests/cpp)
  set(TESTING_SOURCES
      ${TENSEAL_TESTS_BASEDIR}/tensealcontext_test.cpp
      ${TENSEAL_TESTS_BASEDIR}/tensors/ckksvector_test.cpp
      ${TENSEAL_TESTS_BASEDIR}/tensors/ckkstensor_test.cpp
      ${TENSEAL_TESTS_BASEDIR}/tensors/plaintensor_test.cpp
      ${TENSEAL_TESTS_BASEDIR}/tensors/bfvvector_test.cpp)
  add_executable(tenseal_tests ${TESTING_SOURCES} ${SOURCES})
  target_link_libraries(tenseal_tests PRIVATE gtest gtest_main seal)
  target_link_libraries(tenseal_tests PRIVATE tenseal tenseal_proto)
  add_test(tenseal_tests tenseal_tests)
endif()
