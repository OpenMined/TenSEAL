window.BENCHMARK_DATA = {
  "lastUpdate": 1619591962204,
  "repoUrl": "https://github.com/OpenMined/TenSEAL",
  "entries": {
    "Python-Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "a4ccaaddd93460c404d6f55651b46ed6a6f89dc2",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/a4ccaaddd93460c404d6f55651b46ed6a6f89dc2"
        },
        "date": 1619591724524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.175606880979702,
            "unit": "iter/sec",
            "range": "stddev: 0.0380990806818788",
            "extra": "mean: 850.6244869599959 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 102.34098787437016,
            "unit": "iter/sec",
            "range": "stddev: 0.00010841213433252199",
            "extra": "mean: 9.771256079993691 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.415092752415025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002986260099905226",
            "extra": "mean: 226.49580792000506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 127.66326768493684,
            "unit": "iter/sec",
            "range": "stddev: 0.00009810094612679351",
            "extra": "mean: 7.833106719999705 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.47405387864507914,
            "unit": "iter/sec",
            "range": "stddev: 0.07279315891288224",
            "extra": "mean: 2.1094648626399977 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 280.47700117803197,
            "unit": "iter/sec",
            "range": "stddev: 0.00010668119643284509",
            "extra": "mean: 3.5653547199945024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.681059315274635,
            "unit": "iter/sec",
            "range": "stddev: 0.0019208475521162534",
            "extra": "mean: 213.62685936000162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.39735413866443176,
            "unit": "iter/sec",
            "range": "stddev: 0.0608718557467081",
            "extra": "mean: 2.51664674579999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 7557.108692355562,
            "unit": "iter/sec",
            "range": "stddev: 0.000010979050833215425",
            "extra": "mean: 132.32574000312525 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 52.72175406903807,
            "unit": "iter/sec",
            "range": "stddev: 0.00019794048953973386",
            "extra": "mean: 18.967502460000105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 7700.9742502381805,
            "unit": "iter/sec",
            "range": "stddev: 0.000005239277812468991",
            "extra": "mean: 129.85370000023977 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 53.230789313671636,
            "unit": "iter/sec",
            "range": "stddev: 0.00016396044636967066",
            "extra": "mean: 18.786120080003457 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7626.8493776075975,
            "unit": "iter/sec",
            "range": "stddev: 0.000007097215762602499",
            "extra": "mean: 131.11573999822212 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 52.71386106738817,
            "unit": "iter/sec",
            "range": "stddev: 0.0001859090220791586",
            "extra": "mean: 18.97034251999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7557.794073624866,
            "unit": "iter/sec",
            "range": "stddev: 0.000009031106182710762",
            "extra": "mean: 132.3137399958796 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 52.97489721137412,
            "unit": "iter/sec",
            "range": "stddev: 0.00016586505985844832",
            "extra": "mean: 18.876865320000885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3751.676530444723,
            "unit": "iter/sec",
            "range": "stddev: 0.00001100374413320284",
            "extra": "mean: 266.54750000034255 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 26.417623921819086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002754580926477401",
            "extra": "mean: 37.853517899998224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 16171.071827855165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036179652589512132",
            "extra": "mean: 61.838820001867134 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 270.2737370790892,
            "unit": "iter/sec",
            "range": "stddev: 0.000024240225112307774",
            "extra": "mean: 3.6999525399960476 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 20533.61948981636,
            "unit": "iter/sec",
            "range": "stddev: 0.000003855501264640142",
            "extra": "mean: 48.70062000009057 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 286.76501567296077,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592024942709808",
            "extra": "mean: 3.4871757199994136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 14822.091912884911,
            "unit": "iter/sec",
            "range": "stddev: 0.000003432397066397542",
            "extra": "mean: 67.46686000042246 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 59.303148579455424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453112006294829",
            "extra": "mean: 16.862511080000786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 113.09233910775744,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279245839240472",
            "extra": "mean: 8.842331920000106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 16205.138908552248,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035474468436247286",
            "extra": "mean: 61.708820001058484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 270.0786939634744,
            "unit": "iter/sec",
            "range": "stddev: 0.00002666765169331157",
            "extra": "mean: 3.702624539998851 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 19315.21385943424,
            "unit": "iter/sec",
            "range": "stddev: 0.000010229037815771019",
            "extra": "mean: 51.77266000146119 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 282.270869824861,
            "unit": "iter/sec",
            "range": "stddev: 0.000023205062307113654",
            "extra": "mean: 3.5426964200041766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 14375.061452975602,
            "unit": "iter/sec",
            "range": "stddev: 0.000003860458494952696",
            "extra": "mean: 69.56492000199432 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 49.13093555671769,
            "unit": "iter/sec",
            "range": "stddev: 0.00019539928964632314",
            "extra": "mean: 20.35377484000037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 112.68224770382626,
            "unit": "iter/sec",
            "range": "stddev: 0.00006180013072116707",
            "extra": "mean: 8.874512359998334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 15814.06705499728,
            "unit": "iter/sec",
            "range": "stddev: 0.000004019577291797257",
            "extra": "mean: 63.234840001769044 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 270.5863106930276,
            "unit": "iter/sec",
            "range": "stddev: 0.00003074346371624345",
            "extra": "mean: 3.6956784600033643 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 21289.904200244753,
            "unit": "iter/sec",
            "range": "stddev: 0.000004187301274986009",
            "extra": "mean: 46.970619998774055 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 281.3295144465344,
            "unit": "iter/sec",
            "range": "stddev: 0.000027381912716518762",
            "extra": "mean: 3.5545506199991905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 14702.228417307146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041888616632069905",
            "extra": "mean: 68.01689999747396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 42.07007390585679,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463955435834107",
            "extra": "mean: 23.769865539998136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 112.50876398268164,
            "unit": "iter/sec",
            "range": "stddev: 0.000049775369309552744",
            "extra": "mean: 8.888196479999806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 7333.863425163205,
            "unit": "iter/sec",
            "range": "stddev: 0.000005698328009287543",
            "extra": "mean: 136.35377999662524 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 134.06907366306004,
            "unit": "iter/sec",
            "range": "stddev: 0.00007232640585080019",
            "extra": "mean: 7.458841720001602 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 8547.191179512818,
            "unit": "iter/sec",
            "range": "stddev: 0.000005376276641229736",
            "extra": "mean: 116.9974999970691 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 141.20941417969456,
            "unit": "iter/sec",
            "range": "stddev: 0.00002354867758842779",
            "extra": "mean: 7.081680820001566 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6878.055920199001,
            "unit": "iter/sec",
            "range": "stddev: 0.00000644622270102732",
            "extra": "mean: 145.38992000098006 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 21.001801030448423,
            "unit": "iter/sec",
            "range": "stddev: 0.00016779011795692414",
            "extra": "mean: 47.61496400000169 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 55.006141199147045,
            "unit": "iter/sec",
            "range": "stddev: 0.00013841518436794847",
            "extra": "mean: 18.179788259997167 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3530.603197876367,
            "unit": "iter/sec",
            "range": "stddev: 0.000017208849565953234",
            "extra": "mean: 283.23772000248937 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 65.63998966293205,
            "unit": "iter/sec",
            "range": "stddev: 0.000054308361584122726",
            "extra": "mean: 15.23461543999474 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4025.1002028427038,
            "unit": "iter/sec",
            "range": "stddev: 0.000014683268872650843",
            "extra": "mean: 248.44102000088242 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 67.54989249920578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011939248597618053",
            "extra": "mean: 14.803872560000856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3353.9307161923384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010599407618426171",
            "extra": "mean: 298.15762000453105 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 10.496625864444185,
            "unit": "iter/sec",
            "range": "stddev: 0.00023430152133594663",
            "extra": "mean: 95.26870948000123 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 27.580947662538332,
            "unit": "iter/sec",
            "range": "stddev: 0.00009059828667734253",
            "extra": "mean: 36.25691228000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1391.4139186532977,
            "unit": "iter/sec",
            "range": "stddev: 0.000009800643452478333",
            "extra": "mean: 718.6933999969369 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 657.2790134289916,
            "unit": "iter/sec",
            "range": "stddev: 0.00002133594949085157",
            "extra": "mean: 1.521423900001082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1411.9362378735163,
            "unit": "iter/sec",
            "range": "stddev: 0.000004115052112571249",
            "extra": "mean: 708.2472799947935 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 68.4129150809632,
            "unit": "iter/sec",
            "range": "stddev: 0.00012706261611866832",
            "extra": "mean: 14.6171230799996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1301.0227964677376,
            "unit": "iter/sec",
            "range": "stddev: 0.000006655047210744768",
            "extra": "mean: 768.6260400009814 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 632.5228152244367,
            "unit": "iter/sec",
            "range": "stddev: 0.000011043965255229923",
            "extra": "mean: 1.5809706400000323 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1302.5684043819535,
            "unit": "iter/sec",
            "range": "stddev: 0.000006630367413072087",
            "extra": "mean: 767.7139999987048 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 55.16363338616606,
            "unit": "iter/sec",
            "range": "stddev: 0.00005970499715861162",
            "extra": "mean: 18.127884959999392 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 1046.425176156486,
            "unit": "iter/sec",
            "range": "stddev: 0.000025320051957559127",
            "extra": "mean: 955.6344999964494 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 561.6641840168799,
            "unit": "iter/sec",
            "range": "stddev: 0.000017979126147723667",
            "extra": "mean: 1.7804233000015302 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 1070.15025401532,
            "unit": "iter/sec",
            "range": "stddev: 0.00002000563373975275",
            "extra": "mean: 934.4482200026505 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 46.53688583423156,
            "unit": "iter/sec",
            "range": "stddev: 0.00016678040410913824",
            "extra": "mean: 21.488330859999678 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 520.3370781055021,
            "unit": "iter/sec",
            "range": "stddev: 0.000014859528157796028",
            "extra": "mean: 1.9218311400004495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 285.11376606656023,
            "unit": "iter/sec",
            "range": "stddev: 0.000042132306605494244",
            "extra": "mean: 3.5073718599983295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 520.7164162249242,
            "unit": "iter/sec",
            "range": "stddev: 0.000006245556340336007",
            "extra": "mean: 1.9204311000021335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 23.195676744861704,
            "unit": "iter/sec",
            "range": "stddev: 0.00036857126458830276",
            "extra": "mean: 43.11148197999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 260.1850545386874,
            "unit": "iter/sec",
            "range": "stddev: 0.00002764411495525679",
            "extra": "mean: 3.8434182999981203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 141.23718024369643,
            "unit": "iter/sec",
            "range": "stddev: 0.00005291824664345764",
            "extra": "mean: 7.080288619997646 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 261.600819124537,
            "unit": "iter/sec",
            "range": "stddev: 0.000040882268935016874",
            "extra": "mean: 3.8226179999992382 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 11.598601082702826,
            "unit": "iter/sec",
            "range": "stddev: 0.00028220520352603484",
            "extra": "mean: 86.21729403999552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 73.95706282495918,
            "unit": "iter/sec",
            "range": "stddev: 0.0002844496142690123",
            "extra": "mean: 13.521359039998515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 52.1178853740567,
            "unit": "iter/sec",
            "range": "stddev: 0.0012032944729649551",
            "extra": "mean: 19.187271179996515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 30.350834357093202,
            "unit": "iter/sec",
            "range": "stddev: 0.0016959465550996154",
            "extra": "mean: 32.94802337999954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.558140532408126,
            "unit": "iter/sec",
            "range": "stddev: 0.0032565675934787316",
            "extra": "mean: 68.6900911399971 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 627.0139845951768,
            "unit": "iter/sec",
            "range": "stddev: 0.00001976114155709786",
            "extra": "mean: 1.5948607599966635 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 288.83026584390814,
            "unit": "iter/sec",
            "range": "stddev: 0.00004538673175595625",
            "extra": "mean: 3.462241040003846 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.48148389546513,
            "unit": "iter/sec",
            "range": "stddev: 0.00003479964603411508",
            "extra": "mean: 13.075060119999762 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.96617029479313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003171856414727445",
            "extra": "mean: 9.262160519999725 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 189.06290600082977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006827780343114123",
            "extra": "mean: 5.289244839998446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 182.53433770242367,
            "unit": "iter/sec",
            "range": "stddev: 0.000060466836537952556",
            "extra": "mean: 5.4784212800018395 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 164.54298982616712,
            "unit": "iter/sec",
            "range": "stddev: 0.00005159099387338586",
            "extra": "mean: 6.077439099997264 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 24.680235903803677,
            "unit": "iter/sec",
            "range": "stddev: 0.00007639511582976404",
            "extra": "mean: 40.518251280000186 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.536309599777091,
            "unit": "iter/sec",
            "range": "stddev: 0.002567075244774029",
            "extra": "mean: 650.910467619999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 17.52208720156164,
            "unit": "iter/sec",
            "range": "stddev: 0.00016519845676891078",
            "extra": "mean: 57.070826580002176 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 17.507908259130993,
            "unit": "iter/sec",
            "range": "stddev: 0.00027401672118164823",
            "extra": "mean: 57.117045920003875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.367283021376466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670932634316099",
            "extra": "mean: 57.579530359996625 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "28764765a9052e49266a4d49593f738200f23a00",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/28764765a9052e49266a4d49593f738200f23a00"
        },
        "date": 1619591961257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0542006196790532,
            "unit": "iter/sec",
            "range": "stddev: 0.008900495714879025",
            "extra": "mean: 948.5860483599845 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 92.16786633779478,
            "unit": "iter/sec",
            "range": "stddev: 0.00030569989216199396",
            "extra": "mean: 10.849768359994414 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.967776959588841,
            "unit": "iter/sec",
            "range": "stddev: 0.0013261378159950335",
            "extra": "mean: 252.03029559998868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 111.29846253376967,
            "unit": "iter/sec",
            "range": "stddev: 0.0003510153257443505",
            "extra": "mean: 8.98485007999625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.400669725555678,
            "unit": "iter/sec",
            "range": "stddev: 0.00776418989619867",
            "extra": "mean: 2.495821211880002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 219.39015469242895,
            "unit": "iter/sec",
            "range": "stddev: 0.00006404831256414138",
            "extra": "mean: 4.558089680012927 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.905830546144505,
            "unit": "iter/sec",
            "range": "stddev: 0.001784578649815354",
            "extra": "mean: 256.02749227999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3287857369461145,
            "unit": "iter/sec",
            "range": "stddev: 0.023116651831654993",
            "extra": "mean: 3.0414944677599944 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6460.233772420845,
            "unit": "iter/sec",
            "range": "stddev: 0.000008711089527471813",
            "extra": "mean: 154.79316000437396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 42.33554312901933,
            "unit": "iter/sec",
            "range": "stddev: 0.0002051319461899269",
            "extra": "mean: 23.620814239998253 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6233.280005706578,
            "unit": "iter/sec",
            "range": "stddev: 0.000015374027361417428",
            "extra": "mean: 160.4291799958446 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 41.09180012190677,
            "unit": "iter/sec",
            "range": "stddev: 0.00046296038457765303",
            "extra": "mean: 24.3357554800059 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6668.484050896055,
            "unit": "iter/sec",
            "range": "stddev: 0.000006131538805633464",
            "extra": "mean: 149.9591199990391 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 41.83878739359714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831214305631524",
            "extra": "mean: 23.901266319994647 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6611.346445686822,
            "unit": "iter/sec",
            "range": "stddev: 0.000005841457248596566",
            "extra": "mean: 151.255119999405 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 41.46952768554092,
            "unit": "iter/sec",
            "range": "stddev: 0.000401974670632355",
            "extra": "mean: 24.11409186000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3369.4745419190594,
            "unit": "iter/sec",
            "range": "stddev: 0.000012842639896406857",
            "extra": "mean: 296.7821799984449 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.80727984466196,
            "unit": "iter/sec",
            "range": "stddev: 0.0010247723357764593",
            "extra": "mean: 48.060102400004325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11440.252253173498,
            "unit": "iter/sec",
            "range": "stddev: 0.000006824456683062628",
            "extra": "mean: 87.41065999856801 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 208.82136539594086,
            "unit": "iter/sec",
            "range": "stddev: 0.00014290565280449048",
            "extra": "mean: 4.788782020000326 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12770.645089165817,
            "unit": "iter/sec",
            "range": "stddev: 0.000002096712956381711",
            "extra": "mean: 78.304579997166 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 217.4030904307992,
            "unit": "iter/sec",
            "range": "stddev: 0.00007702499332597166",
            "extra": "mean: 4.599750620004671 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12206.94184292692,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042304471987750145",
            "extra": "mean: 81.92060000510537 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.61378962151084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002968169511534991",
            "extra": "mean: 21.923194900000453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.47765119047115,
            "unit": "iter/sec",
            "range": "stddev: 0.0001835663020589449",
            "extra": "mean: 11.05245314000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10782.287290217966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023575474501798516",
            "extra": "mean: 92.74469999581925 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 212.07470940730593,
            "unit": "iter/sec",
            "range": "stddev: 0.000018490383049596224",
            "extra": "mean: 4.715319439997074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12585.486918973762,
            "unit": "iter/sec",
            "range": "stddev: 0.000008793337252538171",
            "extra": "mean: 79.4566000058694 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 215.54730186622712,
            "unit": "iter/sec",
            "range": "stddev: 0.0001962135484995031",
            "extra": "mean: 4.639352899998812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11112.01488829111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035823879786378107",
            "extra": "mean: 89.9926800002504 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 38.833490382048545,
            "unit": "iter/sec",
            "range": "stddev: 0.00020672722135723026",
            "extra": "mean: 25.750968820002527 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 89.7421247839545,
            "unit": "iter/sec",
            "range": "stddev: 0.0002190581073901683",
            "extra": "mean: 11.143039039998257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11070.43587073416,
            "unit": "iter/sec",
            "range": "stddev: 0.000009402749649263109",
            "extra": "mean: 90.33067999098421 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 212.72631431366386,
            "unit": "iter/sec",
            "range": "stddev: 0.000044328707413181595",
            "extra": "mean: 4.700875880007516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 12587.067895759878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027310868128771365",
            "extra": "mean: 79.44661999772507 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 219.22801572708465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007386849386688016",
            "extra": "mean: 4.561460799995984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11308.804084993959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023833140369229866",
            "extra": "mean: 88.42667999942933 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 33.13505506356941,
            "unit": "iter/sec",
            "range": "stddev: 0.0003623762390025381",
            "extra": "mean: 30.179518280006054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.62870070400248,
            "unit": "iter/sec",
            "range": "stddev: 0.00023951122311594543",
            "extra": "mean: 11.034032180004942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6005.1670859728965,
            "unit": "iter/sec",
            "range": "stddev: 0.00000962450495260117",
            "extra": "mean: 166.52325999984896 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 106.54138967530298,
            "unit": "iter/sec",
            "range": "stddev: 0.00004714035252070766",
            "extra": "mean: 9.386023619999833 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6741.945431358148,
            "unit": "iter/sec",
            "range": "stddev: 0.000011607297389501038",
            "extra": "mean: 148.32514000318042 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 110.24792838572604,
            "unit": "iter/sec",
            "range": "stddev: 0.00007239994512933583",
            "extra": "mean: 9.070465220002006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6251.9834418867495,
            "unit": "iter/sec",
            "range": "stddev: 0.000005027409739113276",
            "extra": "mean: 159.94923999642197 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.38757413593882,
            "unit": "iter/sec",
            "range": "stddev: 0.001019478748146442",
            "extra": "mean: 61.021844460001375 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 44.02949502409333,
            "unit": "iter/sec",
            "range": "stddev: 0.0008618115124006519",
            "extra": "mean: 22.71204789999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2955.1478883682685,
            "unit": "iter/sec",
            "range": "stddev: 0.000009688352110773984",
            "extra": "mean: 338.39253999303764 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 51.94738810091893,
            "unit": "iter/sec",
            "range": "stddev: 0.000598207924210662",
            "extra": "mean: 19.25024599999688 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3485.5333287252215,
            "unit": "iter/sec",
            "range": "stddev: 0.000012724730164903492",
            "extra": "mean: 286.9001400040361 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 55.392053538626435,
            "unit": "iter/sec",
            "range": "stddev: 0.00007751277014495515",
            "extra": "mean: 18.053131020005825 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3167.660667998265,
            "unit": "iter/sec",
            "range": "stddev: 0.00000830239531375084",
            "extra": "mean: 315.69038000270666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.255632301777666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005993871769719659",
            "extra": "mean: 121.12942575999567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.408728837367846,
            "unit": "iter/sec",
            "range": "stddev: 0.0006781228759716363",
            "extra": "mean: 44.62546747999568 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1165.8294185010004,
            "unit": "iter/sec",
            "range": "stddev: 0.00004524728467607622",
            "extra": "mean: 857.7584199974808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 533.057559204504,
            "unit": "iter/sec",
            "range": "stddev: 0.000014647900238987116",
            "extra": "mean: 1.8759700199962026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1189.4930461519896,
            "unit": "iter/sec",
            "range": "stddev: 0.00002296149651848117",
            "extra": "mean: 840.6942800002071 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 53.53045244392377,
            "unit": "iter/sec",
            "range": "stddev: 0.00028497340220972825",
            "extra": "mean: 18.68095550000362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1104.8249517572187,
            "unit": "iter/sec",
            "range": "stddev: 0.000022455317884771983",
            "extra": "mean: 905.120759998681 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 505.4797083832505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000510513789700645",
            "extra": "mean: 1.9783187799930604 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1123.4103827408615,
            "unit": "iter/sec",
            "range": "stddev: 0.000013571544731638758",
            "extra": "mean: 890.1466599945707 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 42.18321948812246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005646406200319808",
            "extra": "mean: 23.70610901999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 841.3153972983833,
            "unit": "iter/sec",
            "range": "stddev: 0.00007566892694527136",
            "extra": "mean: 1.1886148799976581 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 433.2411667624303,
            "unit": "iter/sec",
            "range": "stddev: 0.00008556631795492309",
            "extra": "mean: 2.3081832400021085 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 851.1023792944042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003307481083709713",
            "extra": "mean: 1.174946779997299 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.911088663526066,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801566012372324",
            "extra": "mean: 27.8465520599957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 443.26615631618955,
            "unit": "iter/sec",
            "range": "stddev: 0.00002081658347723207",
            "extra": "mean: 2.2559809400081576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 227.63451301251425,
            "unit": "iter/sec",
            "range": "stddev: 0.00009241028888846585",
            "extra": "mean: 4.393006959999184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 438.5162658302573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006700685023436387",
            "extra": "mean: 2.2804171200050405 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.1774737259388,
            "unit": "iter/sec",
            "range": "stddev: 0.0007096193598597042",
            "extra": "mean: 55.01314511999681 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 217.0146141546467,
            "unit": "iter/sec",
            "range": "stddev: 0.00020360443714887924",
            "extra": "mean: 4.607984600002056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 115.43434458906152,
            "unit": "iter/sec",
            "range": "stddev: 0.00013446226974102987",
            "extra": "mean: 8.662933059999887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 226.19454015243076,
            "unit": "iter/sec",
            "range": "stddev: 0.000038755050883370194",
            "extra": "mean: 4.420973199999025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.044562717341602,
            "unit": "iter/sec",
            "range": "stddev: 0.001786791875195791",
            "extra": "mean: 110.56366473999334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 64.1699328242895,
            "unit": "iter/sec",
            "range": "stddev: 0.0005723207528403756",
            "extra": "mean: 15.583622359995388 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 41.682396422070646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008647030262127483",
            "extra": "mean: 23.99094308000258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.118166606293368,
            "unit": "iter/sec",
            "range": "stddev: 0.001015491015128311",
            "extra": "mean: 39.811822879996726 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.59727536675426,
            "unit": "iter/sec",
            "range": "stddev: 0.0009856497000222389",
            "extra": "mean: 79.38224503999663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 552.0325208087075,
            "unit": "iter/sec",
            "range": "stddev: 0.000030490674788258742",
            "extra": "mean: 1.8114874800039615 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 258.2353286366096,
            "unit": "iter/sec",
            "range": "stddev: 0.00005866752135556241",
            "extra": "mean: 3.872436839992588 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 69.41877270735013,
            "unit": "iter/sec",
            "range": "stddev: 0.00014499396919145823",
            "extra": "mean: 14.405325260008794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 98.44684701746233,
            "unit": "iter/sec",
            "range": "stddev: 0.00009540032793417153",
            "extra": "mean: 10.157765639996796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 178.49099988932065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009225829648647317",
            "extra": "mean: 5.602523380002822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 172.20130856445564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008850252037999151",
            "extra": "mean: 5.8071568000059415 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 160.86600424566822,
            "unit": "iter/sec",
            "range": "stddev: 0.00004717205551870166",
            "extra": "mean: 6.216353819995675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 23.04060300819208,
            "unit": "iter/sec",
            "range": "stddev: 0.0012810057488704303",
            "extra": "mean: 43.40164186000038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.458748305913402,
            "unit": "iter/sec",
            "range": "stddev: 0.004029220608852669",
            "extra": "mean: 685.5192194199981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.72715822838651,
            "unit": "iter/sec",
            "range": "stddev: 0.0005110107881521528",
            "extra": "mean: 63.584277939994536 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.709525208386925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005542127925653272",
            "extra": "mean: 63.655647559999124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.500054126654476,
            "unit": "iter/sec",
            "range": "stddev: 0.0009174337776832452",
            "extra": "mean: 64.51590373999807 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}