if(${BUILD_TEST})
  FetchContent_Declare(
      googletest
      GIT_REPOSITORY https://github.com/google/googletest.git
      GIT_TAG        release-1.10.0
  )
  FetchContent_MakeAvailable(googletest)

  enable_testing()
  include_directories(${googletest_SOURCE_DIR}/include ${googletest_SOURCE_DIR}
                      ${googletest_SOURCE_DIR}/googlemock/include ${microsoft_seal_SOURCE_DIR}/SEAL)

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
