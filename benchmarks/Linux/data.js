window.BENCHMARK_DATA = {
  "lastUpdate": 1649829073027,
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
          "id": "caf696ac3efe91c5020f5e55921fd422a6a9f728",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/caf696ac3efe91c5020f5e55921fd422a6a9f728"
        },
        "date": 1619594061185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0015357132388532,
            "unit": "iter/sec",
            "range": "stddev: 0.021408841086326694",
            "extra": "mean: 998.4666415600032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 94.45586644659096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415724828703475",
            "extra": "mean: 10.586954920004246 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.8265859372585567,
            "unit": "iter/sec",
            "range": "stddev: 0.003857979143616644",
            "extra": "mean: 261.32955496000704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 101.91180554796215,
            "unit": "iter/sec",
            "range": "stddev: 0.00011497406333795413",
            "extra": "mean: 9.812405879997641 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.37908098525101885,
            "unit": "iter/sec",
            "range": "stddev: 0.051667023567538876",
            "extra": "mean: 2.6379587447200037 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 208.11176367550377,
            "unit": "iter/sec",
            "range": "stddev: 0.00028097892781062963",
            "extra": "mean: 4.805110400002377 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.686624818908578,
            "unit": "iter/sec",
            "range": "stddev: 0.0044169734938536995",
            "extra": "mean: 271.2508185999923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3068571701767659,
            "unit": "iter/sec",
            "range": "stddev: 0.1376989739477466",
            "extra": "mean: 3.258845147480006 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6134.017987934285,
            "unit": "iter/sec",
            "range": "stddev: 0.00001676163214347771",
            "extra": "mean: 163.02527999869199 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 41.28518839510366,
            "unit": "iter/sec",
            "range": "stddev: 0.00024410709094962763",
            "extra": "mean: 24.2217618199993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6114.739665498203,
            "unit": "iter/sec",
            "range": "stddev: 0.00001144528249495881",
            "extra": "mean: 163.53926000192587 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.49377205057293,
            "unit": "iter/sec",
            "range": "stddev: 0.0008466602297019895",
            "extra": "mean: 24.695155559998053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6171.267737766983,
            "unit": "iter/sec",
            "range": "stddev: 0.00001327394717211253",
            "extra": "mean: 162.0412599959309 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 39.999173489080796,
            "unit": "iter/sec",
            "range": "stddev: 0.0009736257617653926",
            "extra": "mean: 25.000516579998475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5817.708616234611,
            "unit": "iter/sec",
            "range": "stddev: 0.000015319953015361902",
            "extra": "mean: 171.88898000313202 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 38.37098815385991,
            "unit": "iter/sec",
            "range": "stddev: 0.0018187260405744155",
            "extra": "mean: 26.061356459995295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3038.4623144549455,
            "unit": "iter/sec",
            "range": "stddev: 0.000030948453359268504",
            "extra": "mean: 329.1138399981719 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.212762538051408,
            "unit": "iter/sec",
            "range": "stddev: 0.0007539264142302021",
            "extra": "mean: 49.47369257999526 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9678.220462362575,
            "unit": "iter/sec",
            "range": "stddev: 0.000006334426278531786",
            "extra": "mean: 103.32477999327239 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 201.2754738215403,
            "unit": "iter/sec",
            "range": "stddev: 0.00018354753694183268",
            "extra": "mean: 4.968315219998658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12723.19667678533,
            "unit": "iter/sec",
            "range": "stddev: 0.000003124993525346474",
            "extra": "mean: 78.59660000576696 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 213.04921408285662,
            "unit": "iter/sec",
            "range": "stddev: 0.00005698235304692782",
            "extra": "mean: 4.693751180002437 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9723.201835178543,
            "unit": "iter/sec",
            "range": "stddev: 0.000018373105222408913",
            "extra": "mean: 102.84677999607084 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.1196378666476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956287755745592",
            "extra": "mean: 22.66564388000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 84.37110324676163,
            "unit": "iter/sec",
            "range": "stddev: 0.0003571128357322722",
            "extra": "mean: 11.852399240001432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10259.29127534892,
            "unit": "iter/sec",
            "range": "stddev: 0.000011210031164520665",
            "extra": "mean: 97.47262000473711 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 189.39003824600556,
            "unit": "iter/sec",
            "range": "stddev: 0.0003473785262658813",
            "extra": "mean: 5.280108760002804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11659.833227150952,
            "unit": "iter/sec",
            "range": "stddev: 0.000011394735106704864",
            "extra": "mean: 85.76451999942947 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 207.73998120532673,
            "unit": "iter/sec",
            "range": "stddev: 0.00013531442928331635",
            "extra": "mean: 4.813709880004353 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10506.786439126507,
            "unit": "iter/sec",
            "range": "stddev: 0.000010593158175697194",
            "extra": "mean: 95.17657999367657 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 35.014612326025585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005108564904599185",
            "extra": "mean: 28.55950512000163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 77.8133381274447,
            "unit": "iter/sec",
            "range": "stddev: 0.00040870101431790914",
            "extra": "mean: 12.851267200003349 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9123.852835327845,
            "unit": "iter/sec",
            "range": "stddev: 0.000012296684225952718",
            "extra": "mean: 109.6028199981447 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 184.80572564200904,
            "unit": "iter/sec",
            "range": "stddev: 0.00007676657111944577",
            "extra": "mean: 5.411087760003284 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 9879.98778805628,
            "unit": "iter/sec",
            "range": "stddev: 0.000015816162504351266",
            "extra": "mean: 101.21470000285626 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 201.6698904206139,
            "unit": "iter/sec",
            "range": "stddev: 0.0001483766117542641",
            "extra": "mean: 4.958598419993905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9512.324071997817,
            "unit": "iter/sec",
            "range": "stddev: 0.000014476331028189575",
            "extra": "mean: 105.12677999940934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.023508365007817,
            "unit": "iter/sec",
            "range": "stddev: 0.0005584117921268892",
            "extra": "mean: 33.307233380010075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 77.51393007488937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498769389290146",
            "extra": "mean: 12.900906959998792 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4989.34873819561,
            "unit": "iter/sec",
            "range": "stddev: 0.000013164492216740217",
            "extra": "mean: 200.42696000473373 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 91.74023071122235,
            "unit": "iter/sec",
            "range": "stddev: 0.00014231112999528212",
            "extra": "mean: 10.900343200005409 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6050.675618667366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074728040182800585",
            "extra": "mean: 165.2707999937775 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 94.88694918368519,
            "unit": "iter/sec",
            "range": "stddev: 0.0008239939769040465",
            "extra": "mean: 10.538857120004648 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5419.31047725863,
            "unit": "iter/sec",
            "range": "stddev: 0.000011918806350306696",
            "extra": "mean: 184.5253200008301 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.124875383040342,
            "unit": "iter/sec",
            "range": "stddev: 0.00048120902312639107",
            "extra": "mean: 70.79708477999702 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 37.48687138538451,
            "unit": "iter/sec",
            "range": "stddev: 0.0011097532669462338",
            "extra": "mean: 26.67600584000411 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2734.07151806704,
            "unit": "iter/sec",
            "range": "stddev: 0.000015677718168554037",
            "extra": "mean: 365.75487999925826 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 46.54721023987842,
            "unit": "iter/sec",
            "range": "stddev: 0.00046794445453043556",
            "extra": "mean: 21.483564639997894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3262.850966990006,
            "unit": "iter/sec",
            "range": "stddev: 0.00002092116929494049",
            "extra": "mean: 306.4804399946297 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 48.20983676248296,
            "unit": "iter/sec",
            "range": "stddev: 0.00030021896344171567",
            "extra": "mean: 20.742654759997095 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2381.8523808907853,
            "unit": "iter/sec",
            "range": "stddev: 0.00012382744435611337",
            "extra": "mean: 419.8412999994616 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.430357056993165,
            "unit": "iter/sec",
            "range": "stddev: 0.0006787916015355164",
            "extra": "mean: 134.58303447999697 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 19.797343769875496,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346965957457391",
            "extra": "mean: 50.51182682000217 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1003.3761399646638,
            "unit": "iter/sec",
            "range": "stddev: 0.00005722878706229986",
            "extra": "mean: 996.6352200035545 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 441.4242511090494,
            "unit": "iter/sec",
            "range": "stddev: 0.00015884716125653142",
            "extra": "mean: 2.2653943399973286 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1059.30989223334,
            "unit": "iter/sec",
            "range": "stddev: 0.00001418066344625229",
            "extra": "mean: 944.0108199987662 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 46.58778715116914,
            "unit": "iter/sec",
            "range": "stddev: 0.0009326133663357287",
            "extra": "mean: 21.464852940002856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 981.2759208938955,
            "unit": "iter/sec",
            "range": "stddev: 0.000011310979720585522",
            "extra": "mean: 1.0190813600002002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 421.0644852083298,
            "unit": "iter/sec",
            "range": "stddev: 0.0003336409809441405",
            "extra": "mean: 2.374933140004032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 983.4492183985361,
            "unit": "iter/sec",
            "range": "stddev: 0.00004472435273713774",
            "extra": "mean: 1.0168293200013068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 39.083197759256194,
            "unit": "iter/sec",
            "range": "stddev: 0.0011431172585354198",
            "extra": "mean: 25.58644270000059 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 753.7330892442037,
            "unit": "iter/sec",
            "range": "stddev: 0.00004965497905575593",
            "extra": "mean: 1.3267296000003626 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 400.4706266719236,
            "unit": "iter/sec",
            "range": "stddev: 0.00005366005326055513",
            "extra": "mean: 2.4970620400063126 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 718.3856231386168,
            "unit": "iter/sec",
            "range": "stddev: 0.000223097042353476",
            "extra": "mean: 1.3920100399991497 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 32.88834795596685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893808765131707",
            "extra": "mean: 30.405905499992514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 413.1934656914641,
            "unit": "iter/sec",
            "range": "stddev: 0.00000871420658684747",
            "extra": "mean: 2.4201738000056143 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 196.17915744527485,
            "unit": "iter/sec",
            "range": "stddev: 0.000214519677361287",
            "extra": "mean: 5.09738146000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 390.40130615196244,
            "unit": "iter/sec",
            "range": "stddev: 0.00015802237364725142",
            "extra": "mean: 2.5614668399975926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 15.80785519634379,
            "unit": "iter/sec",
            "range": "stddev: 0.0017734922705202971",
            "extra": "mean: 63.25968877999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 201.42356182903944,
            "unit": "iter/sec",
            "range": "stddev: 0.000087021580564003",
            "extra": "mean: 4.96466247999706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 99.64105565175113,
            "unit": "iter/sec",
            "range": "stddev: 0.00024104995544622007",
            "extra": "mean: 10.036023740003657 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 196.23151349992156,
            "unit": "iter/sec",
            "range": "stddev: 0.00006510736110642177",
            "extra": "mean: 5.096021440003824 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.97309599818904,
            "unit": "iter/sec",
            "range": "stddev: 0.003825989454676001",
            "extra": "mean: 125.4217935199995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 55.52188363061441,
            "unit": "iter/sec",
            "range": "stddev: 0.00058748375177741",
            "extra": "mean: 18.01091632000407 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.7376604073524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002880931159651063",
            "extra": "mean: 26.498728039991875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 22.26854922707573,
            "unit": "iter/sec",
            "range": "stddev: 0.0002373665379822191",
            "extra": "mean: 44.90638297999794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.54874291166527,
            "unit": "iter/sec",
            "range": "stddev: 0.0009213666361465537",
            "extra": "mean: 86.58951088000322 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 500.8101856768153,
            "unit": "iter/sec",
            "range": "stddev: 0.00011819956919665042",
            "extra": "mean: 1.9967645000042467 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 227.81669762762206,
            "unit": "iter/sec",
            "range": "stddev: 0.00004060996901657261",
            "extra": "mean: 4.389493880007649 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 62.2257577846819,
            "unit": "iter/sec",
            "range": "stddev: 0.0005359323999363773",
            "extra": "mean: 16.070515420001357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 92.91463419854239,
            "unit": "iter/sec",
            "range": "stddev: 0.0003789762716722442",
            "extra": "mean: 10.762567259998832 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 171.2920739626393,
            "unit": "iter/sec",
            "range": "stddev: 0.00007217193567054168",
            "extra": "mean: 5.837981739996394 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 167.9214727457212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000444039651775132",
            "extra": "mean: 5.955164540000624 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 145.4149752373071,
            "unit": "iter/sec",
            "range": "stddev: 0.0004196991947421051",
            "extra": "mean: 6.876870819996839 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 22.219226872934946,
            "unit": "iter/sec",
            "range": "stddev: 0.0007359827597957493",
            "extra": "mean: 45.006066400001146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2229394470095338,
            "unit": "iter/sec",
            "range": "stddev: 0.03290096543309879",
            "extra": "mean: 817.7019740800006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.947345896088374,
            "unit": "iter/sec",
            "range": "stddev: 0.004219970744933765",
            "extra": "mean: 71.69822900000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 9.762798307599446,
            "unit": "iter/sec",
            "range": "stddev: 0.007734059550666615",
            "extra": "mean: 102.4296485999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.894088602726562,
            "unit": "iter/sec",
            "range": "stddev: 0.003601677085280978",
            "extra": "mean: 77.55491922000147 msec\nrounds: 5"
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
          "id": "0c270aff072afb2431a76be54e50f310f3164232",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/0c270aff072afb2431a76be54e50f310f3164232"
        },
        "date": 1619594252419,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.007496920395247,
            "unit": "iter/sec",
            "range": "stddev: 0.015295504337333015",
            "extra": "mean: 992.5588651999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 88.31010337242739,
            "unit": "iter/sec",
            "range": "stddev: 0.00016851888483488428",
            "extra": "mean: 11.323732639998525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.9896509577641437,
            "unit": "iter/sec",
            "range": "stddev: 0.0031936505509443857",
            "extra": "mean: 250.6484929599992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.09774075599462,
            "unit": "iter/sec",
            "range": "stddev: 0.00015521478358470047",
            "extra": "mean: 8.613432040006046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.39595356539897664,
            "unit": "iter/sec",
            "range": "stddev: 0.029805537320169297",
            "extra": "mean: 2.5255486688000017 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 209.2399263426154,
            "unit": "iter/sec",
            "range": "stddev: 0.00015805008097113832",
            "extra": "mean: 4.779202599997916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.647825894315136,
            "unit": "iter/sec",
            "range": "stddev: 0.005689232763657784",
            "extra": "mean: 274.1358905200014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.322919332273723,
            "unit": "iter/sec",
            "range": "stddev: 0.03025003141504588",
            "extra": "mean: 3.096748630559996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5581.955102129375,
            "unit": "iter/sec",
            "range": "stddev: 0.00001049278308159385",
            "extra": "mean: 179.14869999913208 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 40.12843117237692,
            "unit": "iter/sec",
            "range": "stddev: 0.00046531262428240074",
            "extra": "mean: 24.91998742000078 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5113.989810045622,
            "unit": "iter/sec",
            "range": "stddev: 0.000003536501727588125",
            "extra": "mean: 195.54204000087338 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.29636822163238,
            "unit": "iter/sec",
            "range": "stddev: 0.00046352775243909094",
            "extra": "mean: 25.447644280000077 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5655.4541255764125,
            "unit": "iter/sec",
            "range": "stddev: 0.000009691149093774449",
            "extra": "mean: 176.82046000118135 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 40.22783420086776,
            "unit": "iter/sec",
            "range": "stddev: 0.0003985216760519071",
            "extra": "mean: 24.858410100000583 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5107.2001307276305,
            "unit": "iter/sec",
            "range": "stddev: 0.000007525177303065637",
            "extra": "mean: 195.80200000063996 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 39.4702257047094,
            "unit": "iter/sec",
            "range": "stddev: 0.0007039967492555652",
            "extra": "mean: 25.33555311999862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2626.677153081768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008782289719335715",
            "extra": "mean: 380.7091399971796 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.875404673624594,
            "unit": "iter/sec",
            "range": "stddev: 0.000637002271746528",
            "extra": "mean: 50.31344097999863 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11396.380236338999,
            "unit": "iter/sec",
            "range": "stddev: 0.00000337773053945639",
            "extra": "mean: 87.7471599983437 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 210.10049472236616,
            "unit": "iter/sec",
            "range": "stddev: 0.00011830789536244851",
            "extra": "mean: 4.759627060000184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 17252.456577424586,
            "unit": "iter/sec",
            "range": "stddev: 0.00000478070689749755",
            "extra": "mean: 57.96275999955469 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 205.4631070425062,
            "unit": "iter/sec",
            "range": "stddev: 0.000205181875472625",
            "extra": "mean: 4.867053819998546 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11253.751156957986,
            "unit": "iter/sec",
            "range": "stddev: 0.000006491152633024582",
            "extra": "mean: 88.8592599972071 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.11417569120847,
            "unit": "iter/sec",
            "range": "stddev: 0.00042626986032427597",
            "extra": "mean: 22.16598185999601 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.85427241040196,
            "unit": "iter/sec",
            "range": "stddev: 0.0004894135738726952",
            "extra": "mean: 11.925450799999453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 13310.595287163524,
            "unit": "iter/sec",
            "range": "stddev: 0.000005993673054606705",
            "extra": "mean: 75.12811999959013 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 203.75374879388283,
            "unit": "iter/sec",
            "range": "stddev: 0.00008487982767308549",
            "extra": "mean: 4.90788516000066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15375.314502089133,
            "unit": "iter/sec",
            "range": "stddev: 0.000011042468750291955",
            "extra": "mean: 65.03931999986888 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 211.32504526931075,
            "unit": "iter/sec",
            "range": "stddev: 0.000078804519628281",
            "extra": "mean: 4.732046780000019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11249.44680855853,
            "unit": "iter/sec",
            "range": "stddev: 0.000007448744659497742",
            "extra": "mean: 88.89325999916764 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 37.95576395085114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001573813469941507",
            "extra": "mean: 26.346459559999857 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.81779806344703,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812520104275206",
            "extra": "mean: 11.652594480001426 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12096.175237718495,
            "unit": "iter/sec",
            "range": "stddev: 0.000003290354381451422",
            "extra": "mean: 82.67076000038288 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 208.73020947478295,
            "unit": "iter/sec",
            "range": "stddev: 0.000056316893672036805",
            "extra": "mean: 4.790873360000205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 16676.4334980016,
            "unit": "iter/sec",
            "range": "stddev: 0.00000468437494902236",
            "extra": "mean: 59.96485999958168 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 209.96215499343074,
            "unit": "iter/sec",
            "range": "stddev: 0.00021029933071649786",
            "extra": "mean: 4.762763080000241 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11865.644829378783,
            "unit": "iter/sec",
            "range": "stddev: 0.000007156295293287762",
            "extra": "mean: 84.27691999713716 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 32.072685387803574,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402845389037753",
            "extra": "mean: 31.17917904000251 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 84.78100028211458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002701998610586964",
            "extra": "mean: 11.795095560000844 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5752.806506740721,
            "unit": "iter/sec",
            "range": "stddev: 0.000009627268597305943",
            "extra": "mean: 173.82819999738786 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 103.29282166143643,
            "unit": "iter/sec",
            "range": "stddev: 0.000251224281283392",
            "extra": "mean: 9.681214859999727 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6192.0585858093955,
            "unit": "iter/sec",
            "range": "stddev: 0.00004773098885828179",
            "extra": "mean: 161.49717999951463 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 104.3671962755866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922409457541178",
            "extra": "mean: 9.581554699998378 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5541.740612023019,
            "unit": "iter/sec",
            "range": "stddev: 0.000010428120993287598",
            "extra": "mean: 180.44871999791212 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.795116584381173,
            "unit": "iter/sec",
            "range": "stddev: 0.0010477157737193933",
            "extra": "mean: 63.31070711999928 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 40.968861964693275,
            "unit": "iter/sec",
            "range": "stddev: 0.00011346755189889599",
            "extra": "mean: 24.408781500003442 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2764.6336343359644,
            "unit": "iter/sec",
            "range": "stddev: 0.000038164665847291734",
            "extra": "mean: 361.7115800011561 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 49.489921581864344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007123065932574568",
            "extra": "mean: 20.206134259999544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3339.9415189449364,
            "unit": "iter/sec",
            "range": "stddev: 0.00002212671908317455",
            "extra": "mean: 299.4064400013485 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 52.22634162365729,
            "unit": "iter/sec",
            "range": "stddev: 0.00026175696804607964",
            "extra": "mean: 19.147425780001868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2615.8751603962924,
            "unit": "iter/sec",
            "range": "stddev: 0.000021377456129282086",
            "extra": "mean: 382.2812399994291 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.878726818464062,
            "unit": "iter/sec",
            "range": "stddev: 0.0019113299262247258",
            "extra": "mean: 126.9240605799996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.77991057293978,
            "unit": "iter/sec",
            "range": "stddev: 0.0004355281430689568",
            "extra": "mean: 48.12340248000055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1070.9065427368846,
            "unit": "iter/sec",
            "range": "stddev: 0.00002782470442026913",
            "extra": "mean: 933.7882999989233 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 503.80570801420816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003371525977064719",
            "extra": "mean: 1.9848921599987082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1133.1289138535515,
            "unit": "iter/sec",
            "range": "stddev: 0.00001631504637533491",
            "extra": "mean: 882.5121200015928 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.91857449636706,
            "unit": "iter/sec",
            "range": "stddev: 0.00016840892316891828",
            "extra": "mean: 19.260929440001746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1014.9806062565107,
            "unit": "iter/sec",
            "range": "stddev: 0.00003367684417368624",
            "extra": "mean: 985.2405000015096 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 489.06235517613993,
            "unit": "iter/sec",
            "range": "stddev: 0.00003373007800579191",
            "extra": "mean: 2.0447290400011298 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 993.2910736986436,
            "unit": "iter/sec",
            "range": "stddev: 0.000014412609212144187",
            "extra": "mean: 1.0067542399997362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 43.09411687640289,
            "unit": "iter/sec",
            "range": "stddev: 0.00022202170856382023",
            "extra": "mean: 23.205023620000702 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 795.6293470311911,
            "unit": "iter/sec",
            "range": "stddev: 0.000027130034220958396",
            "extra": "mean: 1.25686665999865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 434.51018969838185,
            "unit": "iter/sec",
            "range": "stddev: 0.000031076476260579665",
            "extra": "mean: 2.3014420000004066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 808.9338786982971,
            "unit": "iter/sec",
            "range": "stddev: 0.000039460196146911916",
            "extra": "mean: 1.2361949800015282 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.81519130635674,
            "unit": "iter/sec",
            "range": "stddev: 0.0001586715793960822",
            "extra": "mean: 27.92111290000321 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 403.6235025482543,
            "unit": "iter/sec",
            "range": "stddev: 0.00007997403640185618",
            "extra": "mean: 2.477556419996745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 213.49735942611127,
            "unit": "iter/sec",
            "range": "stddev: 0.00010460385400019291",
            "extra": "mean: 4.683898680002585 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 412.0411171217404,
            "unit": "iter/sec",
            "range": "stddev: 0.00002603211183704994",
            "extra": "mean: 2.426942259999123 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.09352776024071,
            "unit": "iter/sec",
            "range": "stddev: 0.0004578785277443265",
            "extra": "mean: 55.268381779999345 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 199.32842665150702,
            "unit": "iter/sec",
            "range": "stddev: 0.00009818999928943429",
            "extra": "mean: 5.016845899999679 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 107.69789300446473,
            "unit": "iter/sec",
            "range": "stddev: 0.00012209539140737915",
            "extra": "mean: 9.28523271999893 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 204.7531787858622,
            "unit": "iter/sec",
            "range": "stddev: 0.00011796173746916534",
            "extra": "mean: 4.883929060001719 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.058514812563041,
            "unit": "iter/sec",
            "range": "stddev: 0.00078468088292733",
            "extra": "mean: 110.39337249999562 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.122192476317814,
            "unit": "iter/sec",
            "range": "stddev: 0.00041220165166397073",
            "extra": "mean: 16.36066966000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 41.0658106160038,
            "unit": "iter/sec",
            "range": "stddev: 0.000702914529438421",
            "extra": "mean: 24.35115696000139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.458837662723763,
            "unit": "iter/sec",
            "range": "stddev: 0.00008987041288201335",
            "extra": "mean: 40.88501726000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.270637182300113,
            "unit": "iter/sec",
            "range": "stddev: 0.0005608523228431395",
            "extra": "mean: 81.49536043999888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 533.9133654226478,
            "unit": "iter/sec",
            "range": "stddev: 0.00001461187710073785",
            "extra": "mean: 1.8729630400025599 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 251.48002912833462,
            "unit": "iter/sec",
            "range": "stddev: 0.000045249398047464686",
            "extra": "mean: 3.9764589000014894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.34257402567636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000917413055669284",
            "extra": "mean: 14.84944723999888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 95.8438976790404,
            "unit": "iter/sec",
            "range": "stddev: 0.00021370613864065162",
            "extra": "mean: 10.4336324399992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 165.74097734209207,
            "unit": "iter/sec",
            "range": "stddev: 0.00004572440739749144",
            "extra": "mean: 6.033510940001179 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 159.79267194839395,
            "unit": "iter/sec",
            "range": "stddev: 0.00007242270173059585",
            "extra": "mean: 6.258109259997582 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 146.2474375840937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008867023907232325",
            "extra": "mean: 6.8377266399966175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.315768312621024,
            "unit": "iter/sec",
            "range": "stddev: 0.000473670663389591",
            "extra": "mean: 46.91362682000545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3291796131923284,
            "unit": "iter/sec",
            "range": "stddev: 0.003706068302340305",
            "extra": "mean: 752.3437691000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.532346929480854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006321974850106823",
            "extra": "mean: 64.38177080000514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.529199282579194,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564857575710892",
            "extra": "mean: 64.39482048001082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.348261242740694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003598982154857383",
            "extra": "mean: 65.15396006000174 msec\nrounds: 5"
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
          "id": "f9b89d4c512096e2f178054f1b8c8635dca51c41",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/f9b89d4c512096e2f178054f1b8c8635dca51c41"
        },
        "date": 1619594433993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0282550322981199,
            "unit": "iter/sec",
            "range": "stddev: 0.010578511084131688",
            "extra": "mean: 972.5213770799928 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 90.54279558479278,
            "unit": "iter/sec",
            "range": "stddev: 0.00045948246726090807",
            "extra": "mean: 11.044501039991701 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.688828977938661,
            "unit": "iter/sec",
            "range": "stddev: 0.006238385546385338",
            "extra": "mean: 271.08874008000384 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 103.71068492311338,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258087407355361",
            "extra": "mean: 9.642208040004334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.36850775169004224,
            "unit": "iter/sec",
            "range": "stddev: 0.10150280141735622",
            "extra": "mean: 2.7136471225200056 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 199.81288881701227,
            "unit": "iter/sec",
            "range": "stddev: 0.00023056509337084384",
            "extra": "mean: 5.004682159997174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.651322656506577,
            "unit": "iter/sec",
            "range": "stddev: 0.0016512470691339072",
            "extra": "mean: 273.87335880000137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.31664680777010834,
            "unit": "iter/sec",
            "range": "stddev: 0.02203430931235889",
            "extra": "mean: 3.158092788120002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6182.737228816194,
            "unit": "iter/sec",
            "range": "stddev: 0.000011910531745695806",
            "extra": "mean: 161.74066000075985 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 40.35482766723973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006082373897102193",
            "extra": "mean: 24.78018264000184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6394.57330928236,
            "unit": "iter/sec",
            "range": "stddev: 0.000006773973721838649",
            "extra": "mean: 156.38260000059745 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.30450414005843,
            "unit": "iter/sec",
            "range": "stddev: 0.0004965551282069932",
            "extra": "mean: 24.811122760002036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6356.445028507441,
            "unit": "iter/sec",
            "range": "stddev: 0.000009968064177664898",
            "extra": "mean: 157.32063999848833 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 41.01230673431375,
            "unit": "iter/sec",
            "range": "stddev: 0.00041300500154599655",
            "extra": "mean: 24.382925019999675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5581.7046012177125,
            "unit": "iter/sec",
            "range": "stddev: 0.000009318775612183262",
            "extra": "mean: 179.15674000050788 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.35719888763745,
            "unit": "iter/sec",
            "range": "stddev: 0.0004368584207357041",
            "extra": "mean: 24.778726659999393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3132.1324528714445,
            "unit": "iter/sec",
            "range": "stddev: 0.00001906477557784403",
            "extra": "mean: 319.2712999998548 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.34347516600795,
            "unit": "iter/sec",
            "range": "stddev: 0.0011792907993421712",
            "extra": "mean: 49.15580999999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10704.302423220646,
            "unit": "iter/sec",
            "range": "stddev: 0.000008752574964943093",
            "extra": "mean: 93.42037999886088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 194.5230472092721,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519617826206889",
            "extra": "mean: 5.1407790200005365 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11520.42409857317,
            "unit": "iter/sec",
            "range": "stddev: 0.000005455404448986617",
            "extra": "mean: 86.80236000373043 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 212.15120374387348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000648061705348669",
            "extra": "mean: 4.71361926000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11511.673873129117,
            "unit": "iter/sec",
            "range": "stddev: 0.00000270648715041323",
            "extra": "mean: 86.86834000172894 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.76051875884041,
            "unit": "iter/sec",
            "range": "stddev: 0.00041528753627582954",
            "extra": "mean: 22.341117299997677 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.71754930514408,
            "unit": "iter/sec",
            "range": "stddev: 0.0004668497429753969",
            "extra": "mean: 11.94492682000373 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10153.065586426166,
            "unit": "iter/sec",
            "range": "stddev: 0.000006222648114623646",
            "extra": "mean: 98.49241999745573 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 200.79384489140318,
            "unit": "iter/sec",
            "range": "stddev: 0.0001924497144640654",
            "extra": "mean: 4.980232339994473 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11260.961983898385,
            "unit": "iter/sec",
            "range": "stddev: 0.000017440364734893108",
            "extra": "mean: 88.80235999640718 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 213.79951342325657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000940908532784524",
            "extra": "mean: 4.677279119996456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10503.056494467597,
            "unit": "iter/sec",
            "range": "stddev: 0.000008212625518088771",
            "extra": "mean: 95.2103800000259 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 37.41444141301618,
            "unit": "iter/sec",
            "range": "stddev: 0.00032823919965174845",
            "extra": "mean: 26.727647460002117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 87.44974101599885,
            "unit": "iter/sec",
            "range": "stddev: 0.000153116724688151",
            "extra": "mean: 11.43513964000249 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10883.716414160825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028375405631817316",
            "extra": "mean: 91.88038000502274 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 199.56069267848497,
            "unit": "iter/sec",
            "range": "stddev: 0.00018361174840334903",
            "extra": "mean: 5.01100686000882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 10758.196832007674,
            "unit": "iter/sec",
            "range": "stddev: 0.000026525868965399705",
            "extra": "mean: 92.95237999594973 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 212.20196795903342,
            "unit": "iter/sec",
            "range": "stddev: 0.00007749752095285261",
            "extra": "mean: 4.7124916400071015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 10986.067688799449,
            "unit": "iter/sec",
            "range": "stddev: 0.000016616441124007176",
            "extra": "mean: 91.02437999899848 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 31.644852964473554,
            "unit": "iter/sec",
            "range": "stddev: 0.001085071368410296",
            "extra": "mean: 31.60071564000191 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 82.32409088283387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006597449705619973",
            "extra": "mean: 12.147112580000794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5501.737558711838,
            "unit": "iter/sec",
            "range": "stddev: 0.000003895234917519937",
            "extra": "mean: 181.76076000145258 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 102.15422022822413,
            "unit": "iter/sec",
            "range": "stddev: 0.00016774156796218754",
            "extra": "mean: 9.789120779992118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6108.411600338557,
            "unit": "iter/sec",
            "range": "stddev: 0.000011537566073394763",
            "extra": "mean: 163.70868000194608 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 100.37927808323064,
            "unit": "iter/sec",
            "range": "stddev: 0.00030278245887704067",
            "extra": "mean: 9.962215500004275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5691.107621522316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000139331263721494",
            "extra": "mean: 175.71272000168392 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.09927398092539,
            "unit": "iter/sec",
            "range": "stddev: 0.00026043479339246304",
            "extra": "mean: 62.11460226000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.16439436903604,
            "unit": "iter/sec",
            "range": "stddev: 0.0015293624232277422",
            "extra": "mean: 24.292838880005547 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2877.0045457312713,
            "unit": "iter/sec",
            "range": "stddev: 0.000006105263126328049",
            "extra": "mean: 347.5837399992088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 49.88254799908315,
            "unit": "iter/sec",
            "range": "stddev: 0.00041748014992413416",
            "extra": "mean: 20.047091419996832 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3346.6807887712075,
            "unit": "iter/sec",
            "range": "stddev: 0.000015118646819643536",
            "extra": "mean: 298.8035199996375 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 51.76283698817097,
            "unit": "iter/sec",
            "range": "stddev: 0.0007141060727066182",
            "extra": "mean: 19.318879299999026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2998.3612157246866,
            "unit": "iter/sec",
            "range": "stddev: 0.000008658114676207197",
            "extra": "mean: 333.51551999658113 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.971129078080578,
            "unit": "iter/sec",
            "range": "stddev: 0.0015434550877138162",
            "extra": "mean: 125.45274204000178 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.588224931721218,
            "unit": "iter/sec",
            "range": "stddev: 0.001132329386083841",
            "extra": "mean: 46.321548119994986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1152.2364263837553,
            "unit": "iter/sec",
            "range": "stddev: 0.000017950535163176357",
            "extra": "mean: 867.8774399959366 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 513.9718783588312,
            "unit": "iter/sec",
            "range": "stddev: 0.000020538140491011442",
            "extra": "mean: 1.945631739995406 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1132.3162234955116,
            "unit": "iter/sec",
            "range": "stddev: 0.00003130394430407908",
            "extra": "mean: 883.1455199970151 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.37024107758252,
            "unit": "iter/sec",
            "range": "stddev: 0.00030568164546094666",
            "extra": "mean: 19.466523399992184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 972.5525253704322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000718600259807717",
            "extra": "mean: 1.028222100003404 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 499.7995903618502,
            "unit": "iter/sec",
            "range": "stddev: 0.000052827143491440715",
            "extra": "mean: 2.0008019599936233 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1080.6024851625089,
            "unit": "iter/sec",
            "range": "stddev: 0.000019290556083160337",
            "extra": "mean: 925.4096799986655 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.85799436151778,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193435617305034",
            "extra": "mean: 23.890298980004445 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 824.6410531279239,
            "unit": "iter/sec",
            "range": "stddev: 0.00003557677494364122",
            "extra": "mean: 1.21264882000105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 435.6127122787327,
            "unit": "iter/sec",
            "range": "stddev: 0.00003082366953259704",
            "extra": "mean: 2.2956171200075914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 820.2067042291429,
            "unit": "iter/sec",
            "range": "stddev: 0.00004346921665608222",
            "extra": "mean: 1.2192048599990812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.650052923553524,
            "unit": "iter/sec",
            "range": "stddev: 0.0005602998961409337",
            "extra": "mean: 28.85998478000147 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 415.5945504764442,
            "unit": "iter/sec",
            "range": "stddev: 0.000059126040854882265",
            "extra": "mean: 2.4061913200102936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 217.78806496301775,
            "unit": "iter/sec",
            "range": "stddev: 0.00022877539993370127",
            "extra": "mean: 4.59161984000275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 427.36337609569284,
            "unit": "iter/sec",
            "range": "stddev: 0.00009940970248694578",
            "extra": "mean: 2.339929099998699 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.74920334635433,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438551588563006",
            "extra": "mean: 56.34055684000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 214.73355276702986,
            "unit": "iter/sec",
            "range": "stddev: 0.00005272104600001497",
            "extra": "mean: 4.656934079998791 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 110.35043832002044,
            "unit": "iter/sec",
            "range": "stddev: 0.00021595142000297647",
            "extra": "mean: 9.062039219998042 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 211.46323682666434,
            "unit": "iter/sec",
            "range": "stddev: 0.00016153065455619354",
            "extra": "mean: 4.728954379997958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.779911683861926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940391089716905",
            "extra": "mean: 113.89636206000432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.398670255091595,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559539833185937",
            "extra": "mean: 16.28699768000388 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.7480278795974,
            "unit": "iter/sec",
            "range": "stddev: 0.0003969019055582317",
            "extra": "mean: 24.541064979998737 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.922575739561577,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111411012461554",
            "extra": "mean: 41.80151881999336 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.09919396111114,
            "unit": "iter/sec",
            "range": "stddev: 0.0012804761282740045",
            "extra": "mean: 82.65013382000232 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 518.1347955660176,
            "unit": "iter/sec",
            "range": "stddev: 0.00004090018149636386",
            "extra": "mean: 1.9299996999961877 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 237.36850502879997,
            "unit": "iter/sec",
            "range": "stddev: 0.00022601916672044864",
            "extra": "mean: 4.2128588199966535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.77915614070939,
            "unit": "iter/sec",
            "range": "stddev: 0.0002008985487754108",
            "extra": "mean: 14.753798320002716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 93.39377367436458,
            "unit": "iter/sec",
            "range": "stddev: 0.00040810980896296186",
            "extra": "mean: 10.707351899995956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 176.26726104649987,
            "unit": "iter/sec",
            "range": "stddev: 0.00018318579481802142",
            "extra": "mean: 5.673203259998446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 169.53410491957993,
            "unit": "iter/sec",
            "range": "stddev: 0.00012206946524016634",
            "extra": "mean: 5.898518180010797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 152.31919144576574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005694045131559764",
            "extra": "mean: 6.56516090000423 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 22.401947089783828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006590978671117639",
            "extra": "mean: 44.638976960000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.4073224845127579,
            "unit": "iter/sec",
            "range": "stddev: 0.0038563360216013155",
            "extra": "mean: 710.5691914999989 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.035404368848294,
            "unit": "iter/sec",
            "range": "stddev: 0.001263368543914345",
            "extra": "mean: 66.50968444000682 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.863826267056503,
            "unit": "iter/sec",
            "range": "stddev: 0.0017122434874871461",
            "extra": "mean: 67.27742789999866 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.847843298913077,
            "unit": "iter/sec",
            "range": "stddev: 0.0014463809350094452",
            "extra": "mean: 67.34984871999586 msec\nrounds: 5"
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
          "id": "00cca183f0621e778488429b052431e8f8aacfbd",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/00cca183f0621e778488429b052431e8f8aacfbd"
        },
        "date": 1619594540005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9596884280033304,
            "unit": "iter/sec",
            "range": "stddev: 0.018036320081098633",
            "extra": "mean: 1.0420048536800004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.02395532931564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008865832299219701",
            "extra": "mean: 11.761391200006983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.824857796441837,
            "unit": "iter/sec",
            "range": "stddev: 0.0009564578918867983",
            "extra": "mean: 261.4476284400098 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 108.4479217572334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000706348165824581",
            "extra": "mean: 9.221015799994348 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3718042325338555,
            "unit": "iter/sec",
            "range": "stddev: 0.018444165297894402",
            "extra": "mean: 2.6895874562400057 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 211.1949046135696,
            "unit": "iter/sec",
            "range": "stddev: 0.00005660135250026174",
            "extra": "mean: 4.734962720003751 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.557294603496563,
            "unit": "iter/sec",
            "range": "stddev: 0.004485395780593768",
            "extra": "mean: 281.1125058399921 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.30959688012479103,
            "unit": "iter/sec",
            "range": "stddev: 0.05403551590436483",
            "extra": "mean: 3.2300067093600044 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5674.5792244002405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067508821667844465",
            "extra": "mean: 176.22451999613986 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 36.95783259649986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068153315436135",
            "extra": "mean: 27.057863779996296 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5829.193440111767,
            "unit": "iter/sec",
            "range": "stddev: 0.000008104791785960114",
            "extra": "mean: 171.55032000118808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 37.09388944006682,
            "unit": "iter/sec",
            "range": "stddev: 0.0007015491223102591",
            "extra": "mean: 26.958618119992934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5789.436571238145,
            "unit": "iter/sec",
            "range": "stddev: 0.000008570032368379518",
            "extra": "mean: 172.72837998916657 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 37.334376724621876,
            "unit": "iter/sec",
            "range": "stddev: 0.0002958563681154281",
            "extra": "mean: 26.78496570000334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5116.575545453318,
            "unit": "iter/sec",
            "range": "stddev: 0.00002504584171048743",
            "extra": "mean: 195.44322000456305 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 37.25803830738126,
            "unit": "iter/sec",
            "range": "stddev: 0.0007001540081173538",
            "extra": "mean: 26.839845720000994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2866.455890426084,
            "unit": "iter/sec",
            "range": "stddev: 0.00001917805223458209",
            "extra": "mean: 348.86286000073596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.575364245613827,
            "unit": "iter/sec",
            "range": "stddev: 0.00032080499092211807",
            "extra": "mean: 51.0846177600024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12325.137118477565,
            "unit": "iter/sec",
            "range": "stddev: 0.000003743337216028961",
            "extra": "mean: 81.13499999126361 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 202.135422477385,
            "unit": "iter/sec",
            "range": "stddev: 0.000021898360236320103",
            "extra": "mean: 4.947178420011369 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 15992.24695712101,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036747436035104958",
            "extra": "mean: 62.530300006073965 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 211.18215241197018,
            "unit": "iter/sec",
            "range": "stddev: 0.000021269156315323484",
            "extra": "mean: 4.735248639995007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11240.34005099509,
            "unit": "iter/sec",
            "range": "stddev: 0.00000486194853660269",
            "extra": "mean: 88.9652800060503 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.58745519945658,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241712694285228",
            "extra": "mean: 22.427833019996797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.97208702657589,
            "unit": "iter/sec",
            "range": "stddev: 0.00006044680522061859",
            "extra": "mean: 11.908719140010362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12611.46326672902,
            "unit": "iter/sec",
            "range": "stddev: 0.000003877696096725537",
            "extra": "mean: 79.29293999040965 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 202.12422617190978,
            "unit": "iter/sec",
            "range": "stddev: 0.000013148711727234875",
            "extra": "mean: 4.947452460000932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14952.49293800632,
            "unit": "iter/sec",
            "range": "stddev: 0.000011007584043502847",
            "extra": "mean: 66.87848000638041 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 211.29889036898223,
            "unit": "iter/sec",
            "range": "stddev: 0.000022176161347410014",
            "extra": "mean: 4.7326325199992425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11345.426952977585,
            "unit": "iter/sec",
            "range": "stddev: 0.000004428849201853913",
            "extra": "mean: 88.14124000309675 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.79685468530997,
            "unit": "iter/sec",
            "range": "stddev: 0.000670868719020948",
            "extra": "mean: 28.738229619993945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 76.51507570264481,
            "unit": "iter/sec",
            "range": "stddev: 0.00027269742610115563",
            "extra": "mean: 13.069319879996328 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12042.522628421242,
            "unit": "iter/sec",
            "range": "stddev: 0.000004809352072411773",
            "extra": "mean: 83.03908000470983 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 191.07025592545324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007767899982301114",
            "extra": "mean: 5.233676980001292 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13095.38151999257,
            "unit": "iter/sec",
            "range": "stddev: 0.000004878429724030398",
            "extra": "mean: 76.36280000497209 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 203.1074819163278,
            "unit": "iter/sec",
            "range": "stddev: 0.000027816832970354668",
            "extra": "mean: 4.923501539997233 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 10570.656913987226,
            "unit": "iter/sec",
            "range": "stddev: 0.000008638093972651252",
            "extra": "mean: 94.6014999954059 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.18947823431466,
            "unit": "iter/sec",
            "range": "stddev: 0.0007004775344854876",
            "extra": "mean: 33.124123320003484 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 79.36227901036173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001730316716461236",
            "extra": "mean: 12.600444600002447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5107.42967590689,
            "unit": "iter/sec",
            "range": "stddev: 0.000030304068407791147",
            "extra": "mean: 195.7931999959328 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 93.54792373887148,
            "unit": "iter/sec",
            "range": "stddev: 0.0002234447922743969",
            "extra": "mean: 10.689708119994066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6584.8564102631635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073922303196246755",
            "extra": "mean: 151.86360000825516 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 100.01873831063591,
            "unit": "iter/sec",
            "range": "stddev: 0.0002001477731104529",
            "extra": "mean: 9.998126519994914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5252.127873275876,
            "unit": "iter/sec",
            "range": "stddev: 0.000007931937722856307",
            "extra": "mean: 190.39902000258735 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.148347049166544,
            "unit": "iter/sec",
            "range": "stddev: 0.00045280043155016935",
            "extra": "mean: 66.0138031399947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.00657438005726,
            "unit": "iter/sec",
            "range": "stddev: 0.00014243987862615993",
            "extra": "mean: 23.805797420004637 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2733.065584016077,
            "unit": "iter/sec",
            "range": "stddev: 0.000012218740247510503",
            "extra": "mean: 365.88949999895704 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 50.3177435180141,
            "unit": "iter/sec",
            "range": "stddev: 0.00007406239915891875",
            "extra": "mean: 19.873705180002617 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3219.0000317786016,
            "unit": "iter/sec",
            "range": "stddev: 0.000011105433215586239",
            "extra": "mean: 310.65548000242416 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 52.60132537813252,
            "unit": "iter/sec",
            "range": "stddev: 0.000066028180582447",
            "extra": "mean: 19.01092781999978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2682.6788973917896,
            "unit": "iter/sec",
            "range": "stddev: 0.000013539547330578152",
            "extra": "mean: 372.7617200001987 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.020980464484367,
            "unit": "iter/sec",
            "range": "stddev: 0.00019529948480011662",
            "extra": "mean: 124.67303771999468 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.695583512227028,
            "unit": "iter/sec",
            "range": "stddev: 0.00023456368278717337",
            "extra": "mean: 48.319488040006036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1039.4821732272303,
            "unit": "iter/sec",
            "range": "stddev: 0.000009694699037764662",
            "extra": "mean: 962.0174599967868 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 490.4934472973814,
            "unit": "iter/sec",
            "range": "stddev: 0.000011738481517064165",
            "extra": "mean: 2.0387632199981454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1053.269083920454,
            "unit": "iter/sec",
            "range": "stddev: 0.000006246063612457104",
            "extra": "mean: 949.4249999988824 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.43817812853043,
            "unit": "iter/sec",
            "range": "stddev: 0.00006339696497021958",
            "extra": "mean: 19.440812960001495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 969.3021805539597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048611710863502385",
            "extra": "mean: 1.0316700200019113 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 472.9187790378089,
            "unit": "iter/sec",
            "range": "stddev: 0.000014685779399274597",
            "extra": "mean: 2.1145279999973354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 971.0698670902441,
            "unit": "iter/sec",
            "range": "stddev: 0.000008322662793096547",
            "extra": "mean: 1.0297920200082444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.981104474470726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000700926868993282",
            "extra": "mean: 23.82024038000509 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 764.8509970844558,
            "unit": "iter/sec",
            "range": "stddev: 0.000008181209051570146",
            "extra": "mean: 1.3074441999970077 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 420.5880155252921,
            "unit": "iter/sec",
            "range": "stddev: 0.000010738268652256526",
            "extra": "mean: 2.3776236199955747 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 769.0817211922885,
            "unit": "iter/sec",
            "range": "stddev: 0.000005205362438819207",
            "extra": "mean: 1.3002519400015444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.22836735591493,
            "unit": "iter/sec",
            "range": "stddev: 0.00006276773552102088",
            "extra": "mean: 28.38621471999886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 387.3868094483745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064059418951847895",
            "extra": "mean: 2.5813991999984864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 211.7379857443068,
            "unit": "iter/sec",
            "range": "stddev: 0.00006007183510347803",
            "extra": "mean: 4.722818139998708 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 385.9004926250874,
            "unit": "iter/sec",
            "range": "stddev: 0.000011845713093092764",
            "extra": "mean: 2.5913416000003053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.598989205293577,
            "unit": "iter/sec",
            "range": "stddev: 0.00008409569664861858",
            "extra": "mean: 56.8214451599988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 191.28136551985867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000299547560470641",
            "extra": "mean: 5.227900779996162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 105.10502660775454,
            "unit": "iter/sec",
            "range": "stddev: 0.000035862263362711234",
            "extra": "mean: 9.514292819999355 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 194.95171899819863,
            "unit": "iter/sec",
            "range": "stddev: 0.00002215608101788086",
            "extra": "mean: 5.129475159997127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.79893663076974,
            "unit": "iter/sec",
            "range": "stddev: 0.0001575825487009064",
            "extra": "mean: 113.65009681999709 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.47461352544552,
            "unit": "iter/sec",
            "range": "stddev: 0.000594705555200583",
            "extra": "mean: 17.10143838000477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.43492167502543,
            "unit": "iter/sec",
            "range": "stddev: 0.0011234749179398803",
            "extra": "mean: 25.3582347199972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.559889614001968,
            "unit": "iter/sec",
            "range": "stddev: 0.0008406093333493117",
            "extra": "mean: 42.445020599998315 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.755549310735322,
            "unit": "iter/sec",
            "range": "stddev: 0.0014199939687761824",
            "extra": "mean: 85.06620776000545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 528.3876586640417,
            "unit": "iter/sec",
            "range": "stddev: 0.000019298310867318958",
            "extra": "mean: 1.8925498800035712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 245.29845647144788,
            "unit": "iter/sec",
            "range": "stddev: 0.00001075359989047451",
            "extra": "mean: 4.076666500004649 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 66.51154825641841,
            "unit": "iter/sec",
            "range": "stddev: 0.0000568182418766815",
            "extra": "mean: 15.034983040009138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 93.56525050073972,
            "unit": "iter/sec",
            "range": "stddev: 0.00004502970683769851",
            "extra": "mean: 10.687728559996685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 161.1646905454875,
            "unit": "iter/sec",
            "range": "stddev: 0.00003233863564932064",
            "extra": "mean: 6.20483305999187 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 155.75632448881004,
            "unit": "iter/sec",
            "range": "stddev: 0.000052002703026133695",
            "extra": "mean: 6.42028503999427 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 140.99301737440229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000390089415048191",
            "extra": "mean: 7.092549819999476 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.845735625345085,
            "unit": "iter/sec",
            "range": "stddev: 0.00010870417555910794",
            "extra": "mean: 47.97144211999694 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2773121235112435,
            "unit": "iter/sec",
            "range": "stddev: 0.014324910068492108",
            "extra": "mean: 782.8940018599906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.008579678586146,
            "unit": "iter/sec",
            "range": "stddev: 0.00018561327966223572",
            "extra": "mean: 66.62855656000374 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.948149107051865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782336522523704",
            "extra": "mean: 66.89791444000548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.818011145435651,
            "unit": "iter/sec",
            "range": "stddev: 0.00011292436274916181",
            "extra": "mean: 67.48543985999277 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7902a18bb18adc30a5047c90c952aab20e63fd4c",
          "message": "Add benchmarks action (#286)\n\n* add benchmarks action\r\n\r\n* add code security workflows",
          "timestamp": "2021-04-28T14:43:23+03:00",
          "tree_id": "51186b7269a0017fc40dc11518c53fd1e40c6d60",
          "url": "https://github.com/OpenMined/TenSEAL/commit/7902a18bb18adc30a5047c90c952aab20e63fd4c"
        },
        "date": 1619611201193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0232256761823366,
            "unit": "iter/sec",
            "range": "stddev: 0.010945404624190606",
            "extra": "mean: 977.3015115599992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 92.10724777821916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194885564548154",
            "extra": "mean: 10.856908920000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.9706726303760345,
            "unit": "iter/sec",
            "range": "stddev: 0.001282497006635627",
            "extra": "mean: 251.84649883999555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 112.19720901628125,
            "unit": "iter/sec",
            "range": "stddev: 0.00005460040038032135",
            "extra": "mean: 8.912877680004385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.40022588369781925,
            "unit": "iter/sec",
            "range": "stddev: 0.016744052137889733",
            "extra": "mean: 2.4985890236800015 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 217.28357703989693,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679600360348726",
            "extra": "mean: 4.602280639996934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.776107094408943,
            "unit": "iter/sec",
            "range": "stddev: 0.0021382446185277946",
            "extra": "mean: 264.8229975999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3274581362771508,
            "unit": "iter/sec",
            "range": "stddev: 0.013223375384987671",
            "extra": "mean: 3.0538254793999977 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5784.857002868225,
            "unit": "iter/sec",
            "range": "stddev: 0.000009750417655793859",
            "extra": "mean: 172.86512000282528 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.04408656475279,
            "unit": "iter/sec",
            "range": "stddev: 0.00006374955227327303",
            "extra": "mean: 25.612073119998513 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5804.332469920304,
            "unit": "iter/sec",
            "range": "stddev: 0.000007377926337162311",
            "extra": "mean: 172.28509999767994 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.08229628226256,
            "unit": "iter/sec",
            "range": "stddev: 0.00012640067901311354",
            "extra": "mean: 25.58703287999606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5832.231430319801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068557968417811875",
            "extra": "mean: 171.46096000260513 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 38.439397871029925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006909204845688805",
            "extra": "mean: 26.01497566000262 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5809.8669901193025,
            "unit": "iter/sec",
            "range": "stddev: 0.000007150958988845715",
            "extra": "mean: 172.12097999845355 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 39.542810673226334,
            "unit": "iter/sec",
            "range": "stddev: 0.00024674034036600113",
            "extra": "mean: 25.28904706000276 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3033.6886268214544,
            "unit": "iter/sec",
            "range": "stddev: 0.000013566379207679863",
            "extra": "mean: 329.6317199988153 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.160586677458856,
            "unit": "iter/sec",
            "range": "stddev: 0.0006852918125020616",
            "extra": "mean: 49.60173114000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 13117.96778592231,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029049165207745817",
            "extra": "mean: 76.23131999707766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 204.30950195934685,
            "unit": "iter/sec",
            "range": "stddev: 0.00005726117653194971",
            "extra": "mean: 4.894534959998964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 16755.74579593964,
            "unit": "iter/sec",
            "range": "stddev: 0.000004838685101579095",
            "extra": "mean: 59.68102000224462 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 214.39701788505783,
            "unit": "iter/sec",
            "range": "stddev: 0.00002793564339431432",
            "extra": "mean: 4.664243979998447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11621.21801977602,
            "unit": "iter/sec",
            "range": "stddev: 0.000004638071202331756",
            "extra": "mean: 86.04950000062672 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.945775886967745,
            "unit": "iter/sec",
            "range": "stddev: 0.0002279543738434789",
            "extra": "mean: 21.76478644000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 86.22533271713631,
            "unit": "iter/sec",
            "range": "stddev: 0.00008433646832048726",
            "extra": "mean: 11.59751976000507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11778.077463958707,
            "unit": "iter/sec",
            "range": "stddev: 0.000005854339118706611",
            "extra": "mean: 84.90350000329272 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 206.2163829660793,
            "unit": "iter/sec",
            "range": "stddev: 0.00007074589796841801",
            "extra": "mean: 4.849275240001135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15642.318980317168,
            "unit": "iter/sec",
            "range": "stddev: 0.000010537796057706103",
            "extra": "mean: 63.929139998890605 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 218.19347463257975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004044202683031916",
            "extra": "mean: 4.583088480001152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11459.802336463557,
            "unit": "iter/sec",
            "range": "stddev: 0.000003966238457924346",
            "extra": "mean: 87.26154000214592 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 38.43171063533469,
            "unit": "iter/sec",
            "range": "stddev: 0.00028382161244162104",
            "extra": "mean: 26.020179260003715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.65208384952595,
            "unit": "iter/sec",
            "range": "stddev: 0.0003607989286028686",
            "extra": "mean: 11.675139179997132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 13570.119249393247,
            "unit": "iter/sec",
            "range": "stddev: 0.000005528972151110243",
            "extra": "mean: 73.69131999666934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 204.57929223945152,
            "unit": "iter/sec",
            "range": "stddev: 0.00004485713148279579",
            "extra": "mean: 4.888080259997878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 17171.827487057555,
            "unit": "iter/sec",
            "range": "stddev: 0.000006601270390719112",
            "extra": "mean: 58.234920002178114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 212.77832484743018,
            "unit": "iter/sec",
            "range": "stddev: 0.00006460440958749533",
            "extra": "mean: 4.699726819999341 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11594.286243103857,
            "unit": "iter/sec",
            "range": "stddev: 0.000006370115807245559",
            "extra": "mean: 86.24937999911708 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 33.0336607281419,
            "unit": "iter/sec",
            "range": "stddev: 0.00022370425040439128",
            "extra": "mean: 30.27215203999731 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 86.72697730046711,
            "unit": "iter/sec",
            "range": "stddev: 0.00011039443730008356",
            "extra": "mean: 11.530437600004007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5819.2740641479195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064883023984859434",
            "extra": "mean: 171.8427400010114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 104.7673109746868,
            "unit": "iter/sec",
            "range": "stddev: 0.000045522152570056004",
            "extra": "mean: 9.544961979997879 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6895.680490706767,
            "unit": "iter/sec",
            "range": "stddev: 0.000006225246474597218",
            "extra": "mean: 145.01831999723436 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 107.98702908181973,
            "unit": "iter/sec",
            "range": "stddev: 0.00006522824702942866",
            "extra": "mean: 9.260371440002473 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5454.854695232835,
            "unit": "iter/sec",
            "range": "stddev: 0.000008497315107533301",
            "extra": "mean: 183.3229399994707 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.5588090150797,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852384109767762",
            "extra": "mean: 60.39081670000087 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.32919181868046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751842375775418",
            "extra": "mean: 23.62435843999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2865.0348001732787,
            "unit": "iter/sec",
            "range": "stddev: 0.000011166927872312727",
            "extra": "mean: 349.03589999657925 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 51.61985494826374,
            "unit": "iter/sec",
            "range": "stddev: 0.00037895576695249884",
            "extra": "mean: 19.372390740002174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3160.982650879438,
            "unit": "iter/sec",
            "range": "stddev: 0.000012128761130615057",
            "extra": "mean: 316.3573200004066 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 54.31164231305773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000988940655475163",
            "extra": "mean: 18.412258539999584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2724.8088560420506,
            "unit": "iter/sec",
            "range": "stddev: 0.000012525968000638828",
            "extra": "mean: 366.9982199971855 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.178489415286847,
            "unit": "iter/sec",
            "range": "stddev: 0.0009130620593194647",
            "extra": "mean: 122.27196848000403 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.438285179901126,
            "unit": "iter/sec",
            "range": "stddev: 0.00041812718760297094",
            "extra": "mean: 46.64552186000037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1075.7188378133542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040590959748795275",
            "extra": "mean: 929.6109400042951 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 510.1937111637861,
            "unit": "iter/sec",
            "range": "stddev: 0.00002316919726790136",
            "extra": "mean: 1.960039840002992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1083.5114030150996,
            "unit": "iter/sec",
            "range": "stddev: 0.000007450138746521635",
            "extra": "mean: 922.9252199997973 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 52.532592778148334,
            "unit": "iter/sec",
            "range": "stddev: 0.00026075393489086347",
            "extra": "mean: 19.03580134000094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1011.3636823289532,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662817329330424",
            "extra": "mean: 988.7640000056307 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 479.12469055178804,
            "unit": "iter/sec",
            "range": "stddev: 0.00001178229418852933",
            "extra": "mean: 2.0871393600032206 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1012.2850713820113,
            "unit": "iter/sec",
            "range": "stddev: 0.000015217464505821704",
            "extra": "mean: 987.8640199985967 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 42.57295356454621,
            "unit": "iter/sec",
            "range": "stddev: 0.00032268494221136297",
            "extra": "mean: 23.489091460000964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 784.9929814553777,
            "unit": "iter/sec",
            "range": "stddev: 0.00002356397987599014",
            "extra": "mean: 1.273896740001419 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 434.54994687517814,
            "unit": "iter/sec",
            "range": "stddev: 0.00001991911011499941",
            "extra": "mean: 2.3012314400011746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 790.3685311422684,
            "unit": "iter/sec",
            "range": "stddev: 0.000010587449869124031",
            "extra": "mean: 1.2652325599992764 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 36.19524667848511,
            "unit": "iter/sec",
            "range": "stddev: 0.0002457996760865699",
            "extra": "mean: 27.62793714000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 399.7073055325792,
            "unit": "iter/sec",
            "range": "stddev: 0.00003724222487515925",
            "extra": "mean: 2.5018306799961465 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 216.12877588745948,
            "unit": "iter/sec",
            "range": "stddev: 0.00007071816140854293",
            "extra": "mean: 4.626871160000974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 400.25321619498624,
            "unit": "iter/sec",
            "range": "stddev: 0.000013272332862319087",
            "extra": "mean: 2.4984183999981724 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.200496590357037,
            "unit": "iter/sec",
            "range": "stddev: 0.00038186608252558404",
            "extra": "mean: 54.94355580000047 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 199.00611569681547,
            "unit": "iter/sec",
            "range": "stddev: 0.000053039049757910836",
            "extra": "mean: 5.024971199998163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 106.07211588161759,
            "unit": "iter/sec",
            "range": "stddev: 0.000026633773319764423",
            "extra": "mean: 9.427548339999703 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 201.5957464523118,
            "unit": "iter/sec",
            "range": "stddev: 0.000020709234695036068",
            "extra": "mean: 4.960422120000202 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.060161815783822,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193633140609338",
            "extra": "mean: 110.37330462 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 62.029641402550276,
            "unit": "iter/sec",
            "range": "stddev: 0.00040689201007580803",
            "extra": "mean: 16.121324860002915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 42.011792668194175,
            "unit": "iter/sec",
            "range": "stddev: 0.00039261462237538463",
            "extra": "mean: 23.80284049999773 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.94391776653734,
            "unit": "iter/sec",
            "range": "stddev: 0.00020279172157656837",
            "extra": "mean: 40.08993331999818 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.316481900955111,
            "unit": "iter/sec",
            "range": "stddev: 0.0006613120034075309",
            "extra": "mean: 81.19201636000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 544.90281451282,
            "unit": "iter/sec",
            "range": "stddev: 0.00003133822809885951",
            "extra": "mean: 1.835189639998589 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 249.49006227200476,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818033380060981",
            "extra": "mean: 4.008175679998658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 69.43345264670852,
            "unit": "iter/sec",
            "range": "stddev: 0.00019760882708358957",
            "extra": "mean: 14.402279620001082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 98.65331691559201,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047834762551037",
            "extra": "mean: 10.136506620001455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 166.39518072694483,
            "unit": "iter/sec",
            "range": "stddev: 0.00005153581464929726",
            "extra": "mean: 6.009789440001896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.5084402414451,
            "unit": "iter/sec",
            "range": "stddev: 0.00008028216974508664",
            "extra": "mean: 6.153526540001621 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 147.69307057022215,
            "unit": "iter/sec",
            "range": "stddev: 0.00007577859711781371",
            "extra": "mean: 6.77079835999848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.767118330539617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003144090559212798",
            "extra": "mean: 45.94085376000294 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.34233490203587,
            "unit": "iter/sec",
            "range": "stddev: 0.002765332613375601",
            "extra": "mean: 744.9705721600003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.68498081750738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809003697377424",
            "extra": "mean: 63.75525807999794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.557426444641488,
            "unit": "iter/sec",
            "range": "stddev: 0.00038601201454084236",
            "extra": "mean: 64.27798348000124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.541266130124065,
            "unit": "iter/sec",
            "range": "stddev: 0.00038723876339192626",
            "extra": "mean: 64.34482181999783 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cd83fe4b8e858d5fef8b200a7addc753c7697ed",
          "message": "Update codeql-analysis.yml (#290)",
          "timestamp": "2021-04-28T20:53:27+03:00",
          "tree_id": "0a1889416121abb330c28a484af03ba1b0ec6bb5",
          "url": "https://github.com/OpenMined/TenSEAL/commit/4cd83fe4b8e858d5fef8b200a7addc753c7697ed"
        },
        "date": 1619633562031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9517591439122248,
            "unit": "iter/sec",
            "range": "stddev: 0.006763391939229945",
            "extra": "mean: 1.0506859917200064 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 86.0626273952689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000774318056081819",
            "extra": "mean: 11.619445400001496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.534171997682675,
            "unit": "iter/sec",
            "range": "stddev: 0.0023309723072630966",
            "extra": "mean: 282.9517071199962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 100.10725731808498,
            "unit": "iter/sec",
            "range": "stddev: 0.00023360195167961839",
            "extra": "mean: 9.989285759997983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3605931310152422,
            "unit": "iter/sec",
            "range": "stddev: 0.007059899772665137",
            "extra": "mean: 2.773208677560001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 192.52084991159768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008148241578336103",
            "extra": "mean: 5.1942426000050546 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.508814450746188,
            "unit": "iter/sec",
            "range": "stddev: 0.0010850308612091661",
            "extra": "mean: 284.9965462799946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2971994136307026,
            "unit": "iter/sec",
            "range": "stddev: 0.018466662047501702",
            "extra": "mean: 3.3647441890399934 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5811.31947384864,
            "unit": "iter/sec",
            "range": "stddev: 0.000008873283771774509",
            "extra": "mean: 172.07796000548115 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 36.57973598248154,
            "unit": "iter/sec",
            "range": "stddev: 0.0007600326348942372",
            "extra": "mean: 27.337540119997357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5496.07701015506,
            "unit": "iter/sec",
            "range": "stddev: 0.000005229281150175812",
            "extra": "mean: 181.94795999988855 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 36.94301981549321,
            "unit": "iter/sec",
            "range": "stddev: 0.00028841249161395586",
            "extra": "mean: 27.068712979998967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5941.841964078082,
            "unit": "iter/sec",
            "range": "stddev: 0.000011796201195626933",
            "extra": "mean: 168.2979799943496 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 37.130753656554056,
            "unit": "iter/sec",
            "range": "stddev: 0.000280888169884636",
            "extra": "mean: 26.931853019996197 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5416.4731632437115,
            "unit": "iter/sec",
            "range": "stddev: 0.000008543138891113726",
            "extra": "mean: 184.62197999724594 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 36.306769558963396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501578691707153",
            "extra": "mean: 27.54307288000291 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3101.333530066162,
            "unit": "iter/sec",
            "range": "stddev: 0.000014019457728413123",
            "extra": "mean: 322.44193999304116 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 18.45245804894692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005359828857629126",
            "extra": "mean: 54.19332196000141 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10398.255255264288,
            "unit": "iter/sec",
            "range": "stddev: 0.000004945121076243492",
            "extra": "mean: 96.16998000637977 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 183.6866119774347,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047401618852235",
            "extra": "mean: 5.444054899999173 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11546.5441187592,
            "unit": "iter/sec",
            "range": "stddev: 0.000003802726658017775",
            "extra": "mean: 86.60600000439445 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 194.54938989769283,
            "unit": "iter/sec",
            "range": "stddev: 0.00003997441031583593",
            "extra": "mean: 5.140082939997228 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11129.415289873605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055555984483535915",
            "extra": "mean: 89.85197999663797 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 40.408907563081065,
            "unit": "iter/sec",
            "range": "stddev: 0.00038281316287662367",
            "extra": "mean: 24.747018919997572 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 77.65125840822704,
            "unit": "iter/sec",
            "range": "stddev: 0.000668814852700817",
            "extra": "mean: 12.878091359998509 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9488.209760980171,
            "unit": "iter/sec",
            "range": "stddev: 0.000002609957071689432",
            "extra": "mean: 105.39395999785484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 184.03480136387145,
            "unit": "iter/sec",
            "range": "stddev: 0.00007740890049361745",
            "extra": "mean: 5.433754879995831 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11184.683961755369,
            "unit": "iter/sec",
            "range": "stddev: 0.000008967438562012453",
            "extra": "mean: 89.40798000367067 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 193.37942562896234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006750112530764969",
            "extra": "mean: 5.171180939996702 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10081.256946819149,
            "unit": "iter/sec",
            "range": "stddev: 0.000004787579219323734",
            "extra": "mean: 99.19398000420188 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.268838304522696,
            "unit": "iter/sec",
            "range": "stddev: 0.00013953963358279245",
            "extra": "mean: 29.181030039994763 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 80.37151469051412,
            "unit": "iter/sec",
            "range": "stddev: 0.00010013655695208268",
            "extra": "mean: 12.442219159993329 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10289.549994936504,
            "unit": "iter/sec",
            "range": "stddev: 0.000002416253256280129",
            "extra": "mean: 97.18597999835765 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 185.70320289386524,
            "unit": "iter/sec",
            "range": "stddev: 0.000053407777625191865",
            "extra": "mean: 5.3849367400061965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11636.84028147337,
            "unit": "iter/sec",
            "range": "stddev: 0.000002897338639004075",
            "extra": "mean: 85.93397999902663 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 196.1523985186363,
            "unit": "iter/sec",
            "range": "stddev: 0.000016348705110770963",
            "extra": "mean: 5.098076840008616 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11292.547212543825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025069301272112464",
            "extra": "mean: 88.55397999923298 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 29.179279602367412,
            "unit": "iter/sec",
            "range": "stddev: 0.00023247820801429128",
            "extra": "mean: 34.27089406000505 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 78.68156722024979,
            "unit": "iter/sec",
            "range": "stddev: 0.00016930398077221603",
            "extra": "mean: 12.7094570600093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5163.743334020252,
            "unit": "iter/sec",
            "range": "stddev: 0.000006378241585362912",
            "extra": "mean: 193.65795999419788 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 91.97923181055265,
            "unit": "iter/sec",
            "range": "stddev: 0.00013690813696814726",
            "extra": "mean: 10.872019480002564 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6071.130826062481,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050685875736068345",
            "extra": "mean: 164.71395999360536 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 97.66285330593037,
            "unit": "iter/sec",
            "range": "stddev: 0.00005931259425877261",
            "extra": "mean: 10.239307640003972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5530.179405621585,
            "unit": "iter/sec",
            "range": "stddev: 0.000010235932280001973",
            "extra": "mean: 180.82596000112972 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.68180674192791,
            "unit": "iter/sec",
            "range": "stddev: 0.0003865572590286677",
            "extra": "mean: 68.11150817999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 40.04071512890105,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917726654306861",
            "extra": "mean: 24.974578920000567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2585.9978766267423,
            "unit": "iter/sec",
            "range": "stddev: 0.000009297732660938064",
            "extra": "mean: 386.6979199938214 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 46.137098529046895,
            "unit": "iter/sec",
            "range": "stddev: 0.00008947888204066907",
            "extra": "mean: 21.674531599996953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3074.388645541893,
            "unit": "iter/sec",
            "range": "stddev: 0.00000927622258731302",
            "extra": "mean: 325.26791999771376 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 48.62991133354017,
            "unit": "iter/sec",
            "range": "stddev: 0.00023924588767354588",
            "extra": "mean: 20.563475699991614 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2725.6721630309385,
            "unit": "iter/sec",
            "range": "stddev: 0.000015906896028198893",
            "extra": "mean: 366.88197999865224 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.3087887663358275,
            "unit": "iter/sec",
            "range": "stddev: 0.0009729223957597668",
            "extra": "mean: 136.8215763200033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 19.868064701745006,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107818452029112",
            "extra": "mean: 50.33202855999207 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1006.0344359951889,
            "unit": "iter/sec",
            "range": "stddev: 0.000014548683704379396",
            "extra": "mean: 994.0017600001739 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 466.8709538347213,
            "unit": "iter/sec",
            "range": "stddev: 0.000020546144408042205",
            "extra": "mean: 2.1419194999953106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1048.8009383979802,
            "unit": "iter/sec",
            "range": "stddev: 0.00002863468844842281",
            "extra": "mean: 953.4697800017966 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 47.06106660377327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002566233517178572",
            "extra": "mean: 21.248987160010984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 895.3034315764082,
            "unit": "iter/sec",
            "range": "stddev: 0.0001714781840050869",
            "extra": "mean: 1.1169397600087905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 448.71833703041943,
            "unit": "iter/sec",
            "range": "stddev: 0.000048338009374676434",
            "extra": "mean: 2.2285695000073247 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 987.9980174415849,
            "unit": "iter/sec",
            "range": "stddev: 0.000009556768821154863",
            "extra": "mean: 1.012147780002124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 38.42268721358319,
            "unit": "iter/sec",
            "range": "stddev: 0.00041906369338800663",
            "extra": "mean: 26.02628999999979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 781.4272252514702,
            "unit": "iter/sec",
            "range": "stddev: 0.00001019683528881051",
            "extra": "mean: 1.2797097000020585 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 404.7574510811516,
            "unit": "iter/sec",
            "range": "stddev: 0.000022660043535432583",
            "extra": "mean: 2.470615419997557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 769.3398497911601,
            "unit": "iter/sec",
            "range": "stddev: 0.000013672005678131082",
            "extra": "mean: 1.2998156799903882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 32.37381800050458,
            "unit": "iter/sec",
            "range": "stddev: 0.000221851460288406",
            "extra": "mean: 30.88915863999773 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 385.8790792340988,
            "unit": "iter/sec",
            "range": "stddev: 0.00005386019894600124",
            "extra": "mean: 2.5914853999984184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 197.13488883805582,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033859894360186",
            "extra": "mean: 5.07266879999861 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 393.30448203744027,
            "unit": "iter/sec",
            "range": "stddev: 0.000021205366596930107",
            "extra": "mean: 2.5425593799991475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.131893009916222,
            "unit": "iter/sec",
            "range": "stddev: 0.0006618522293174252",
            "extra": "mean: 61.98900521998894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 198.68909465447763,
            "unit": "iter/sec",
            "range": "stddev: 0.00003853213750783862",
            "extra": "mean: 5.032988860002661 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 101.5934347087294,
            "unit": "iter/sec",
            "range": "stddev: 0.00009735630986978701",
            "extra": "mean: 9.843155740004477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 195.25183388237664,
            "unit": "iter/sec",
            "range": "stddev: 0.00011466599042113971",
            "extra": "mean: 5.1215908199992555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.039950210292657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004807970528593822",
            "extra": "mean: 124.37887970000247 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.273427773679614,
            "unit": "iter/sec",
            "range": "stddev: 0.00025138713486882325",
            "extra": "mean: 17.1604801400008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.66642862479824,
            "unit": "iter/sec",
            "range": "stddev: 0.0003798659192445386",
            "extra": "mean: 25.862228179994418 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 22.5289036721212,
            "unit": "iter/sec",
            "range": "stddev: 0.0016130811094583516",
            "extra": "mean: 44.38742401999207 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.562201924844887,
            "unit": "iter/sec",
            "range": "stddev: 0.0007800394337398856",
            "extra": "mean: 86.48871611999766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 487.8430678329971,
            "unit": "iter/sec",
            "range": "stddev: 0.00003372255257814883",
            "extra": "mean: 2.0498395199956576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 226.92517177471626,
            "unit": "iter/sec",
            "range": "stddev: 0.00005493172940514597",
            "extra": "mean: 4.4067389799874945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 61.561395639711016,
            "unit": "iter/sec",
            "range": "stddev: 0.00043422432933612487",
            "extra": "mean: 16.243946220006364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 87.81554593271532,
            "unit": "iter/sec",
            "range": "stddev: 0.000055934004231645914",
            "extra": "mean: 11.387505359998613 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 160.90952396355257,
            "unit": "iter/sec",
            "range": "stddev: 0.000013912215274059722",
            "extra": "mean: 6.214672539995263 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 152.52010928852425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001558598784378578",
            "extra": "mean: 6.556512479992307 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 140.31589491420684,
            "unit": "iter/sec",
            "range": "stddev: 0.00019717678832873055",
            "extra": "mean: 7.126776339996468 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.649000284248253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005619896667887686",
            "extra": "mean: 48.428494659997334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2778936124229767,
            "unit": "iter/sec",
            "range": "stddev: 0.004461692785849501",
            "extra": "mean: 782.5377561000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.895326110998875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006877799760759653",
            "extra": "mean: 71.9666449000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 13.849997468900359,
            "unit": "iter/sec",
            "range": "stddev: 0.0007194369816337113",
            "extra": "mean: 72.2021792599935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.79686330095426,
            "unit": "iter/sec",
            "range": "stddev: 0.0007243678628329258",
            "extra": "mean: 72.48024265999902 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hc_bensadi@esi.dz",
            "name": "BENSADI Cérine",
            "username": "CerineBnsd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9877b11dd15a47567b5e8dfbe73d72eed639917b",
          "message": "Parallel encryption -  ckkstensor (#289)\n\n* Parallel encryption ckkstensor\r\n\r\n* threadsafe encoder\r\n\r\n* drop duplicate worker_func code\r\n\r\n* update n_jobs\r\n\r\nCo-authored-by: Bogdan Cebere <bogdan.cebere@gmail.com>",
          "timestamp": "2021-04-29T22:16:15+03:00",
          "tree_id": "6416155ff46aa0647ec2645f59fe78c04b3941b9",
          "url": "https://github.com/OpenMined/TenSEAL/commit/9877b11dd15a47567b5e8dfbe73d72eed639917b"
        },
        "date": 1619724858906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.965021017248514,
            "unit": "iter/sec",
            "range": "stddev: 0.014933555247773308",
            "extra": "mean: 1.0362468610799989 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 86.9979203425716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002068564972244008",
            "extra": "mean: 11.494527639997614 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.867108923494821,
            "unit": "iter/sec",
            "range": "stddev: 0.0022825047886724367",
            "extra": "mean: 258.5911128399948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 114.89468077979035,
            "unit": "iter/sec",
            "range": "stddev: 0.0002215034141156804",
            "extra": "mean: 8.703623119999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3817421870567157,
            "unit": "iter/sec",
            "range": "stddev: 0.021276659482409706",
            "extra": "mean: 2.6195690020800066 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 225.0778458739592,
            "unit": "iter/sec",
            "range": "stddev: 0.00021670897955838463",
            "extra": "mean: 4.442907279999417 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.7214097894169935,
            "unit": "iter/sec",
            "range": "stddev: 0.0010659189620330293",
            "extra": "mean: 268.71536772000127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.31557958957472115,
            "unit": "iter/sec",
            "range": "stddev: 0.05225431777633006",
            "extra": "mean: 3.168772737640011 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5916.433687378461,
            "unit": "iter/sec",
            "range": "stddev: 0.000014481298497693339",
            "extra": "mean: 169.02073999972345 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.78019763673889,
            "unit": "iter/sec",
            "range": "stddev: 0.0010539399129274715",
            "extra": "mean: 25.13813553999171 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6049.150802271119,
            "unit": "iter/sec",
            "range": "stddev: 0.00000691038010495341",
            "extra": "mean: 165.3124599943112 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.90682624444196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007586153108832331",
            "extra": "mean: 25.058369560001662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6119.491142498902,
            "unit": "iter/sec",
            "range": "stddev: 0.000013641632824527208",
            "extra": "mean: 163.4122799941906 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 40.71753936503338,
            "unit": "iter/sec",
            "range": "stddev: 0.0004926376780494407",
            "extra": "mean: 24.559440859993625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6287.568220223276,
            "unit": "iter/sec",
            "range": "stddev: 0.000013983335749646723",
            "extra": "mean: 159.04399999726596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.13339196489339,
            "unit": "iter/sec",
            "range": "stddev: 0.0003758278579041145",
            "extra": "mean: 24.916907120004907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3191.649827005405,
            "unit": "iter/sec",
            "range": "stddev: 0.000012877777357434664",
            "extra": "mean: 313.31757999851106 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.177878051938983,
            "unit": "iter/sec",
            "range": "stddev: 0.00041097387958036056",
            "extra": "mean: 52.14341217999846 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11727.121149351491,
            "unit": "iter/sec",
            "range": "stddev: 0.000005995016377547241",
            "extra": "mean: 85.27241999672697 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 203.81012346157624,
            "unit": "iter/sec",
            "range": "stddev: 0.00014087020005526041",
            "extra": "mean: 4.906527620000816 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 17354.994678212668,
            "unit": "iter/sec",
            "range": "stddev: 0.000003959631943651797",
            "extra": "mean: 57.6203000082387 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 206.93411040796133,
            "unit": "iter/sec",
            "range": "stddev: 0.0001174488855325942",
            "extra": "mean: 4.832456079998337 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11753.864671027606,
            "unit": "iter/sec",
            "range": "stddev: 0.000003815104531057887",
            "extra": "mean: 85.07839999765565 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.60840758318654,
            "unit": "iter/sec",
            "range": "stddev: 0.001077390456592493",
            "extra": "mean: 22.41729875999681 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 84.60368530538953,
            "unit": "iter/sec",
            "range": "stddev: 0.0002944581386928605",
            "extra": "mean: 11.819816080001146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12934.639456597193,
            "unit": "iter/sec",
            "range": "stddev: 0.000014900463214837286",
            "extra": "mean: 77.31177999630745 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 199.13772726881615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000929906152043132",
            "extra": "mean: 5.021650159992532 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15675.75515557895,
            "unit": "iter/sec",
            "range": "stddev: 0.000011698221051708902",
            "extra": "mean: 63.79278000167687 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 205.74260530179876,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482945712442656",
            "extra": "mean: 4.860442000008334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 9544.363538532343,
            "unit": "iter/sec",
            "range": "stddev: 0.00003766172944341624",
            "extra": "mean: 104.77387999344501 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.67784245863423,
            "unit": "iter/sec",
            "range": "stddev: 0.0009394452755708517",
            "extra": "mean: 28.83685746000083 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 76.47387689989367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783127225125869",
            "extra": "mean: 13.076360720001503 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12512.822514706208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056045573003614605",
            "extra": "mean: 79.91802000105963 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 191.39629920174946,
            "unit": "iter/sec",
            "range": "stddev: 0.00009953431313815938",
            "extra": "mean: 5.224761419999594 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14353.948856528916,
            "unit": "iter/sec",
            "range": "stddev: 0.000018761946178938512",
            "extra": "mean: 69.66724000449176 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 205.9824046534701,
            "unit": "iter/sec",
            "range": "stddev: 0.00015621628246729119",
            "extra": "mean: 4.854783599998882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 8107.587031868873,
            "unit": "iter/sec",
            "range": "stddev: 0.00007408789205681795",
            "extra": "mean: 123.34125999132085 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 29.9352134327742,
            "unit": "iter/sec",
            "range": "stddev: 0.0007233856646950932",
            "extra": "mean: 33.405474199998935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 79.22974552760041,
            "unit": "iter/sec",
            "range": "stddev: 0.0004341191614637697",
            "extra": "mean: 12.621522300000835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5680.679463763289,
            "unit": "iter/sec",
            "range": "stddev: 0.000010686367842214673",
            "extra": "mean: 176.0352800010878 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 92.30939625396242,
            "unit": "iter/sec",
            "range": "stddev: 0.000698978803763651",
            "extra": "mean: 10.833133359997191 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6594.503455098906,
            "unit": "iter/sec",
            "range": "stddev: 0.000005638119921750828",
            "extra": "mean: 151.64143999754742 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 95.18031009338458,
            "unit": "iter/sec",
            "range": "stddev: 0.0005806601318605474",
            "extra": "mean: 10.506374680003319 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5179.239495316314,
            "unit": "iter/sec",
            "range": "stddev: 0.000010829095425632026",
            "extra": "mean: 193.07853998725477 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.735435559913256,
            "unit": "iter/sec",
            "range": "stddev: 0.0010315450943386001",
            "extra": "mean: 63.55083062000176 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.37540806744352,
            "unit": "iter/sec",
            "range": "stddev: 0.001392821721881654",
            "extra": "mean: 24.168945920000624 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2823.5294648815134,
            "unit": "iter/sec",
            "range": "stddev: 0.000021448478260113796",
            "extra": "mean: 354.16666000401165 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 50.86787130045381,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801386789469258",
            "extra": "mean: 19.658774280005673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3195.219542543245,
            "unit": "iter/sec",
            "range": "stddev: 0.000014346116514685637",
            "extra": "mean: 312.9675400032283 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 52.36251822623751,
            "unit": "iter/sec",
            "range": "stddev: 0.0004293249380499253",
            "extra": "mean: 19.09763001999636 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2735.742037464629,
            "unit": "iter/sec",
            "range": "stddev: 0.000024467915831900542",
            "extra": "mean: 365.5315400010295 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.678440688310453,
            "unit": "iter/sec",
            "range": "stddev: 0.004820357061492106",
            "extra": "mean: 130.2347755999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.056372092047237,
            "unit": "iter/sec",
            "range": "stddev: 0.0011027426004560344",
            "extra": "mean: 49.859465879999334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1020.9500585508507,
            "unit": "iter/sec",
            "range": "stddev: 0.000017813528320082033",
            "extra": "mean: 979.4798400025683 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 466.03278564951955,
            "unit": "iter/sec",
            "range": "stddev: 0.00011899522095879157",
            "extra": "mean: 2.1457717799967213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1059.0671397704614,
            "unit": "iter/sec",
            "range": "stddev: 0.00002872839518445324",
            "extra": "mean: 944.2272000023877 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 49.831531899032704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002547307009859526",
            "extra": "mean: 20.067615060002026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 784.4551612184036,
            "unit": "iter/sec",
            "range": "stddev: 0.0003230267552184879",
            "extra": "mean: 1.2747701199987205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 455.89045988045905,
            "unit": "iter/sec",
            "range": "stddev: 0.00004084851685113662",
            "extra": "mean: 2.193509379999341 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 919.1463534825907,
            "unit": "iter/sec",
            "range": "stddev: 0.00003072865370552993",
            "extra": "mean: 1.0879660200043875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 40.223691186956714,
            "unit": "iter/sec",
            "range": "stddev: 0.0008182799360371625",
            "extra": "mean: 24.860970499998984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 701.5665827454003,
            "unit": "iter/sec",
            "range": "stddev: 0.0001114266217503671",
            "extra": "mean: 1.425381459998789 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 414.07111707820945,
            "unit": "iter/sec",
            "range": "stddev: 0.00005008284559469851",
            "extra": "mean: 2.4150440800030992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 760.8050869862975,
            "unit": "iter/sec",
            "range": "stddev: 0.000029674782360229987",
            "extra": "mean: 1.314397099999951 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 33.69148062294744,
            "unit": "iter/sec",
            "range": "stddev: 0.0005853547955702482",
            "extra": "mean: 29.68109390000791 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 381.2827388424747,
            "unit": "iter/sec",
            "range": "stddev: 0.000050006301433812835",
            "extra": "mean: 2.622725599999285 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 207.4773561084981,
            "unit": "iter/sec",
            "range": "stddev: 0.00030322958625418666",
            "extra": "mean: 4.819803079990379 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 391.1648992396648,
            "unit": "iter/sec",
            "range": "stddev: 0.00007580204583213822",
            "extra": "mean: 2.5564666000036596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.401193988077743,
            "unit": "iter/sec",
            "range": "stddev: 0.0007430599512262999",
            "extra": "mean: 57.46732095999505 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 193.20827023826672,
            "unit": "iter/sec",
            "range": "stddev: 0.00006181917498342681",
            "extra": "mean: 5.175761880000209 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 100.85699316701371,
            "unit": "iter/sec",
            "range": "stddev: 0.000237127104947427",
            "extra": "mean: 9.915028879991041 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 185.20429689677053,
            "unit": "iter/sec",
            "range": "stddev: 0.00013413909093500486",
            "extra": "mean: 5.399442759999147 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.521830032484734,
            "unit": "iter/sec",
            "range": "stddev: 0.0010220085154796846",
            "extra": "mean: 117.34568703999685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.0448583203007,
            "unit": "iter/sec",
            "range": "stddev: 0.0005704583252319459",
            "extra": "mean: 17.228054799993515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.062770669591195,
            "unit": "iter/sec",
            "range": "stddev: 0.00045149763250285297",
            "extra": "mean: 24.960829799997555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.29827920685079,
            "unit": "iter/sec",
            "range": "stddev: 0.0008893824577802822",
            "extra": "mean: 42.92162486000052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.647213823636756,
            "unit": "iter/sec",
            "range": "stddev: 0.000975912842783907",
            "extra": "mean: 85.85744326000167 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 518.78059955857,
            "unit": "iter/sec",
            "range": "stddev: 0.00006690566069080294",
            "extra": "mean: 1.9275971400065828 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 243.64612923893083,
            "unit": "iter/sec",
            "range": "stddev: 0.00007877235704231497",
            "extra": "mean: 4.104313100001491 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 66.06513140121099,
            "unit": "iter/sec",
            "range": "stddev: 0.00038708085708354144",
            "extra": "mean: 15.136577779994695 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 97.78051872653691,
            "unit": "iter/sec",
            "range": "stddev: 0.00036925309635147",
            "extra": "mean: 10.226986039997428 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 167.47020041117128,
            "unit": "iter/sec",
            "range": "stddev: 0.0003451243911718886",
            "extra": "mean: 5.971211579999363 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 156.19347650929683,
            "unit": "iter/sec",
            "range": "stddev: 0.0003643194283346336",
            "extra": "mean: 6.402316040007463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 141.74972957477746,
            "unit": "iter/sec",
            "range": "stddev: 0.0002192357366001039",
            "extra": "mean: 7.054687180002475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.00174762514911,
            "unit": "iter/sec",
            "range": "stddev: 0.00045696457545976434",
            "extra": "mean: 47.61508507999224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2457743761085802,
            "unit": "iter/sec",
            "range": "stddev: 0.00408626101828714",
            "extra": "mean: 802.713572520006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.456042783282,
            "unit": "iter/sec",
            "range": "stddev: 0.0011874926073057093",
            "extra": "mean: 69.17522415999429 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.517452586068735,
            "unit": "iter/sec",
            "range": "stddev: 0.0011830322540615078",
            "extra": "mean: 68.88260830000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.962631499348321,
            "unit": "iter/sec",
            "range": "stddev: 0.0011556881934986728",
            "extra": "mean: 71.61973729999772 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8bfbb7ddb7b50d3b816172cb27dfab38710102",
          "message": "Update benchmarks.yml (#292)",
          "timestamp": "2021-04-30T10:27:59+03:00",
          "tree_id": "72fe126a7398b640b1d305d806f9caf0118aec36",
          "url": "https://github.com/OpenMined/TenSEAL/commit/cf8bfbb7ddb7b50d3b816172cb27dfab38710102"
        },
        "date": 1619768555524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.1391832991106003,
            "unit": "iter/sec",
            "range": "stddev: 0.008039347892032537",
            "extra": "mean: 877.8218577999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 103.22981267413617,
            "unit": "iter/sec",
            "range": "stddev: 0.0001225438475860899",
            "extra": "mean: 9.687124039996888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.4916702971491205,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067432811054175",
            "extra": "mean: 222.63432839999496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 129.65436480112655,
            "unit": "iter/sec",
            "range": "stddev: 0.00008243301660424528",
            "extra": "mean: 7.712814000005892 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.45940579918193153,
            "unit": "iter/sec",
            "range": "stddev: 0.017924397563042115",
            "extra": "mean: 2.1767248079599995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 250.54933944851757,
            "unit": "iter/sec",
            "range": "stddev: 0.00008696055246928836",
            "extra": "mean: 3.991229840003143 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.425266837448104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006431708293928381",
            "extra": "mean: 225.97507375999612 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.377882846776201,
            "unit": "iter/sec",
            "range": "stddev: 0.007133415190494532",
            "extra": "mean: 2.6463228181199883 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6792.189036987289,
            "unit": "iter/sec",
            "range": "stddev: 0.000008454235327379368",
            "extra": "mean: 147.2279399990839 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 46.60708928429278,
            "unit": "iter/sec",
            "range": "stddev: 0.00014087447474326435",
            "extra": "mean: 21.45596335999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6138.354835040973,
            "unit": "iter/sec",
            "range": "stddev: 0.000006535441224789967",
            "extra": "mean: 162.91009999804376 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 46.50103440899808,
            "unit": "iter/sec",
            "range": "stddev: 0.00009415257185637133",
            "extra": "mean: 21.504897960001017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6811.621607319117,
            "unit": "iter/sec",
            "range": "stddev: 0.000006987112183277453",
            "extra": "mean: 146.8079200003558 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 46.51178825366189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000896810358397164",
            "extra": "mean: 21.49992588000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6075.845016406801,
            "unit": "iter/sec",
            "range": "stddev: 0.000006836589823289116",
            "extra": "mean: 164.58615999908943 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 46.31425782315568,
            "unit": "iter/sec",
            "range": "stddev: 0.00015138602581865734",
            "extra": "mean: 21.591623119998076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3448.016904064263,
            "unit": "iter/sec",
            "range": "stddev: 0.000012333866807670712",
            "extra": "mean: 290.0217800038263 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 23.088615617195188,
            "unit": "iter/sec",
            "range": "stddev: 0.00024927558656717913",
            "extra": "mean: 43.31138846000158 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 13358.814827684626,
            "unit": "iter/sec",
            "range": "stddev: 0.000004968336283495363",
            "extra": "mean: 74.8569399979715 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 240.08676812612222,
            "unit": "iter/sec",
            "range": "stddev: 0.000018430494937595575",
            "extra": "mean: 4.165160820002711 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 19177.433837215824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036944269247015224",
            "extra": "mean: 52.14461999912601 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 251.50965779725723,
            "unit": "iter/sec",
            "range": "stddev: 0.000019034409275925048",
            "extra": "mean: 3.9759904600009577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12956.899134497791,
            "unit": "iter/sec",
            "range": "stddev: 0.00000365524640745135",
            "extra": "mean: 77.17895999803659 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 52.767543855635,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232695806109606",
            "extra": "mean: 18.951043140000365 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 100.16738209950154,
            "unit": "iter/sec",
            "range": "stddev: 0.00006968555013173659",
            "extra": "mean: 9.983289760000389 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 14412.370195248039,
            "unit": "iter/sec",
            "range": "stddev: 0.000003563168617057763",
            "extra": "mean: 69.38483999874734 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 241.56267007243252,
            "unit": "iter/sec",
            "range": "stddev: 0.00002524193118071441",
            "extra": "mean: 4.139712479995978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 18271.955398229387,
            "unit": "iter/sec",
            "range": "stddev: 0.000010991675367512739",
            "extra": "mean: 54.72868000197195 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 251.65675202823795,
            "unit": "iter/sec",
            "range": "stddev: 0.000025421392100244145",
            "extra": "mean: 3.9736664799988834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 13112.872723983475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035108524597050416",
            "extra": "mean: 76.26093999760997 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 43.84907499529469,
            "unit": "iter/sec",
            "range": "stddev: 0.00013961312593889394",
            "extra": "mean: 22.805498180002814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 100.37035154163597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005260493908295737",
            "extra": "mean: 9.963101499999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 13453.35157979529,
            "unit": "iter/sec",
            "range": "stddev: 0.000003608243060271571",
            "extra": "mean: 74.33091999928365 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 241.86181081297792,
            "unit": "iter/sec",
            "range": "stddev: 0.000025800217048881076",
            "extra": "mean: 4.134592379998594 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 19288.397026314156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034362279576972685",
            "extra": "mean: 51.84463999967193 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 252.4101165430476,
            "unit": "iter/sec",
            "range": "stddev: 0.00002363611096788928",
            "extra": "mean: 3.961806339998475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 13062.85900044241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034799684555900285",
            "extra": "mean: 76.55291999753901 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 38.12590145787178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000739051546929015",
            "extra": "mean: 26.228888019998067 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 100.06948905373929,
            "unit": "iter/sec",
            "range": "stddev: 0.00005398504451441799",
            "extra": "mean: 9.993055920001552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6649.6524225327585,
            "unit": "iter/sec",
            "range": "stddev: 0.000005716838552858278",
            "extra": "mean: 150.3838000030555 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 120.4677151330363,
            "unit": "iter/sec",
            "range": "stddev: 0.000028360146333837683",
            "extra": "mean: 8.300979219998226 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7726.925507535491,
            "unit": "iter/sec",
            "range": "stddev: 0.000005715197354268518",
            "extra": "mean: 129.41757999669792 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 125.3546386144407,
            "unit": "iter/sec",
            "range": "stddev: 0.000014920225301541722",
            "extra": "mean: 7.977367339997272 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6149.3815135848245,
            "unit": "iter/sec",
            "range": "stddev: 0.000004979793701327493",
            "extra": "mean: 162.617980001869 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 18.7425745644658,
            "unit": "iter/sec",
            "range": "stddev: 0.00019575900290458103",
            "extra": "mean: 53.35446294000121 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 48.847787665623855,
            "unit": "iter/sec",
            "range": "stddev: 0.00006338062730351009",
            "extra": "mean: 20.471756199999618 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3013.6799370764734,
            "unit": "iter/sec",
            "range": "stddev: 0.000018871561024540178",
            "extra": "mean: 331.8202399987058 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 59.05922128452005,
            "unit": "iter/sec",
            "range": "stddev: 0.00003222865004795502",
            "extra": "mean: 16.932156879997823 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3671.7796197654457,
            "unit": "iter/sec",
            "range": "stddev: 0.000014167317718946318",
            "extra": "mean: 272.3475000016151 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 62.48794388854757,
            "unit": "iter/sec",
            "range": "stddev: 0.00005223477213525479",
            "extra": "mean: 16.00308695999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3002.18907620043,
            "unit": "iter/sec",
            "range": "stddev: 0.000017398377330195025",
            "extra": "mean: 333.09027999848695 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.38035445347645,
            "unit": "iter/sec",
            "range": "stddev: 0.00021428006948629927",
            "extra": "mean: 106.60577965999892 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 24.340859776912723,
            "unit": "iter/sec",
            "range": "stddev: 0.00008941266686563242",
            "extra": "mean: 41.08318314000144 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1244.087783828986,
            "unit": "iter/sec",
            "range": "stddev: 0.000006562054180094198",
            "extra": "mean: 803.8018000002012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 581.6878972678054,
            "unit": "iter/sec",
            "range": "stddev: 0.000007638668171112088",
            "extra": "mean: 1.7191349599966088 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1244.2921209679657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063472789835774485",
            "extra": "mean: 803.6698000000797 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 61.13197513496838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000555886060366515",
            "extra": "mean: 16.35805154000309 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1160.285991002868,
            "unit": "iter/sec",
            "range": "stddev: 0.000008358660378412483",
            "extra": "mean: 861.8564800008244 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 563.1405392786478,
            "unit": "iter/sec",
            "range": "stddev: 0.000008578027888268361",
            "extra": "mean: 1.7757556600008684 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1161.4368134840508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067865876150672985",
            "extra": "mean: 861.0024999984489 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 49.32706581398405,
            "unit": "iter/sec",
            "range": "stddev: 0.000045523920507794024",
            "extra": "mean: 20.272845820002203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 913.1478089698617,
            "unit": "iter/sec",
            "range": "stddev: 0.000005121388483764121",
            "extra": "mean: 1.095112960001643 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 499.658822962245,
            "unit": "iter/sec",
            "range": "stddev: 0.000008500552144898557",
            "extra": "mean: 2.0013656400010404 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 916.186473488984,
            "unit": "iter/sec",
            "range": "stddev: 0.000008821733125795146",
            "extra": "mean: 1.0914808599954995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 41.40272210509931,
            "unit": "iter/sec",
            "range": "stddev: 0.00005358240337483099",
            "extra": "mean: 24.153001280001263 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 462.57202535545514,
            "unit": "iter/sec",
            "range": "stddev: 0.000012469924274523493",
            "extra": "mean: 2.16182549999985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 251.2595023264548,
            "unit": "iter/sec",
            "range": "stddev: 0.000014594847779371721",
            "extra": "mean: 3.9799489800020633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 462.6563460385675,
            "unit": "iter/sec",
            "range": "stddev: 0.000010671643430578129",
            "extra": "mean: 2.1614314999942503 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 20.69954414979492,
            "unit": "iter/sec",
            "range": "stddev: 0.000029927233563846933",
            "extra": "mean: 48.31024262000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 231.1966012434095,
            "unit": "iter/sec",
            "range": "stddev: 0.000016599808193241295",
            "extra": "mean: 4.325323100001697 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 125.9409711141355,
            "unit": "iter/sec",
            "range": "stddev: 0.000017861867847535423",
            "extra": "mean: 7.9402278000043225 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 231.67140806150556,
            "unit": "iter/sec",
            "range": "stddev: 0.00003185941378733952",
            "extra": "mean: 4.316458419998526 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.39574841750323,
            "unit": "iter/sec",
            "range": "stddev: 0.00010008755933657987",
            "extra": "mean: 96.19317050000063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 72.5423059909482,
            "unit": "iter/sec",
            "range": "stddev: 0.00016108136216109797",
            "extra": "mean: 13.785059440001532 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 48.915311909897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000948295242911196",
            "extra": "mean: 20.443496340001275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 28.73541793989774,
            "unit": "iter/sec",
            "range": "stddev: 0.00009548114748021131",
            "extra": "mean: 34.80025946000069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.54576936033438,
            "unit": "iter/sec",
            "range": "stddev: 0.0002144883862590057",
            "extra": "mean: 68.74851203999924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 627.7437029433677,
            "unit": "iter/sec",
            "range": "stddev: 0.000016823809946159103",
            "extra": "mean: 1.5930068199986636 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 291.26253916546943,
            "unit": "iter/sec",
            "range": "stddev: 0.000020259314470910985",
            "extra": "mean: 3.4333285799993973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 79.01196173940629,
            "unit": "iter/sec",
            "range": "stddev: 0.00006706072652992635",
            "extra": "mean: 12.656311499999902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 112.07154658292893,
            "unit": "iter/sec",
            "range": "stddev: 0.00003643594412517964",
            "extra": "mean: 8.922871419999865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 193.55130709933354,
            "unit": "iter/sec",
            "range": "stddev: 0.000029861622649733816",
            "extra": "mean: 5.1665887199965255 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 187.20279169979648,
            "unit": "iter/sec",
            "range": "stddev: 0.000031640964713808636",
            "extra": "mean: 5.341800680000688 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 169.77181754346793,
            "unit": "iter/sec",
            "range": "stddev: 0.00004335501094462268",
            "extra": "mean: 5.890259140001035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 25.039609695343977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000830418476640806",
            "extra": "mean: 39.9367247400005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.5412781885460307,
            "unit": "iter/sec",
            "range": "stddev: 0.0016015534881951017",
            "extra": "mean: 648.8121400999989 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 17.70783085740143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005499253670338902",
            "extra": "mean: 56.47219063999728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 17.60636149729446,
            "unit": "iter/sec",
            "range": "stddev: 0.00028749956965370635",
            "extra": "mean: 56.797652380003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.68551335069405,
            "unit": "iter/sec",
            "range": "stddev: 0.00035730361134547685",
            "extra": "mean: 56.54345339999736 msec\nrounds: 5"
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
          "id": "a6b475f94ba1e86adf1dfb3cc59b4fad7c33d490",
          "message": "Windows benchmarks",
          "timestamp": "2021-04-30T07:28:02Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/293/commits/a6b475f94ba1e86adf1dfb3cc59b4fad7c33d490"
        },
        "date": 1619771073120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.1415913244258837,
            "unit": "iter/sec",
            "range": "stddev: 0.0076677814607179874",
            "extra": "mean: 875.9702168399963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 102.31837182396218,
            "unit": "iter/sec",
            "range": "stddev: 0.0001439139673200244",
            "extra": "mean: 9.773415879999447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.550969157507749,
            "unit": "iter/sec",
            "range": "stddev: 0.0004397299198466314",
            "extra": "mean: 219.733416199997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 129.53356264609923,
            "unit": "iter/sec",
            "range": "stddev: 0.000042306224141321204",
            "extra": "mean: 7.720006919998923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.46521758060906737,
            "unit": "iter/sec",
            "range": "stddev: 0.0021478899772317556",
            "extra": "mean: 2.149531835600001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 252.88537662828728,
            "unit": "iter/sec",
            "range": "stddev: 0.000056479719212387954",
            "extra": "mean: 3.9543607199948387 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.447641630642348,
            "unit": "iter/sec",
            "range": "stddev: 0.0006704518800656481",
            "extra": "mean: 224.83825879999586 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3828709884844409,
            "unit": "iter/sec",
            "range": "stddev: 0.008259246275026617",
            "extra": "mean: 2.611845843840001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6408.448899016457,
            "unit": "iter/sec",
            "range": "stddev: 0.000008302669570172052",
            "extra": "mean: 156.04400000029273 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 47.35759051126312,
            "unit": "iter/sec",
            "range": "stddev: 0.000041901832154913795",
            "extra": "mean: 21.11593915999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6381.457221043887,
            "unit": "iter/sec",
            "range": "stddev: 0.000007427898725910951",
            "extra": "mean: 156.70402000068862 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 47.47560234730171,
            "unit": "iter/sec",
            "range": "stddev: 0.00003089561077457386",
            "extra": "mean: 21.063450499998453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6458.779231229965,
            "unit": "iter/sec",
            "range": "stddev: 0.00000470037149327996",
            "extra": "mean: 154.82802000178708 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 47.403391802180934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326241738405709",
            "extra": "mean: 21.095536880000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6475.593488178908,
            "unit": "iter/sec",
            "range": "stddev: 0.000005200844068422563",
            "extra": "mean: 154.4259999991482 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 47.32477912269277,
            "unit": "iter/sec",
            "range": "stddev: 0.00005927414630123228",
            "extra": "mean: 21.130579339999258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3461.9831665783954,
            "unit": "iter/sec",
            "range": "stddev: 0.000012805713505284114",
            "extra": "mean: 288.8517800010959 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 23.557553396273235,
            "unit": "iter/sec",
            "range": "stddev: 0.00010857677622093067",
            "extra": "mean: 42.44922990000305 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 13477.009031394244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034039015859388575",
            "extra": "mean: 74.20043999900372 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 243.30356095800036,
            "unit": "iter/sec",
            "range": "stddev: 0.000018883213249179486",
            "extra": "mean: 4.110091919997103 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 19325.80013767309,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033467043528984366",
            "extra": "mean: 51.74429999669883 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 253.18923489987765,
            "unit": "iter/sec",
            "range": "stddev: 0.000024577156312682055",
            "extra": "mean: 3.9496150000036327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12896.493004405558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037950100120029087",
            "extra": "mean: 77.54046000400194 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 53.36664260004865,
            "unit": "iter/sec",
            "range": "stddev: 0.00005057148702696017",
            "extra": "mean: 18.738297020001937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 100.05070069256453,
            "unit": "iter/sec",
            "range": "stddev: 0.00005422602234541979",
            "extra": "mean: 9.994932500001141 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 14444.421333116969,
            "unit": "iter/sec",
            "range": "stddev: 0.000003790426890629049",
            "extra": "mean: 69.23088000121425 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 242.80443119443754,
            "unit": "iter/sec",
            "range": "stddev: 0.000020020614737276194",
            "extra": "mean: 4.118540980000489 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 18190.840839017,
            "unit": "iter/sec",
            "range": "stddev: 0.000010136004456688956",
            "extra": "mean: 54.97271999956865 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 253.9345495176406,
            "unit": "iter/sec",
            "range": "stddev: 0.00001717270952152565",
            "extra": "mean: 3.9380226200000834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12962.602891008804,
            "unit": "iter/sec",
            "range": "stddev: 0.000004050595695001618",
            "extra": "mean: 77.14499999792679 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 44.799256467106396,
            "unit": "iter/sec",
            "range": "stddev: 0.00005099777590935566",
            "extra": "mean: 22.321799039996222 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 100.24656384202653,
            "unit": "iter/sec",
            "range": "stddev: 0.00003740402375871181",
            "extra": "mean: 9.975404259998868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 13547.760053634085,
            "unit": "iter/sec",
            "range": "stddev: 0.000003282083227327802",
            "extra": "mean: 73.81294000197158 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 243.30673157014905,
            "unit": "iter/sec",
            "range": "stddev: 0.000015513412780185336",
            "extra": "mean: 4.110038360001909 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 19412.89202286452,
            "unit": "iter/sec",
            "range": "stddev: 0.00000355490874509024",
            "extra": "mean: 51.51216000285785 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 254.13116769784858,
            "unit": "iter/sec",
            "range": "stddev: 0.000014918651407677934",
            "extra": "mean: 3.934975820002364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 13084.172312303552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031522976669632608",
            "extra": "mean: 76.42821999979788 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 38.51254595865299,
            "unit": "iter/sec",
            "range": "stddev: 0.00004002126884955302",
            "extra": "mean: 25.96556460000329 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 100.42305017502508,
            "unit": "iter/sec",
            "range": "stddev: 0.00002514451168672694",
            "extra": "mean: 9.95787319999863 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6662.23139715321,
            "unit": "iter/sec",
            "range": "stddev: 0.000004369828864256887",
            "extra": "mean: 150.0998599999548 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 121.22020167729717,
            "unit": "iter/sec",
            "range": "stddev: 0.000018221459392241604",
            "extra": "mean: 8.24945006000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7710.122820748496,
            "unit": "iter/sec",
            "range": "stddev: 0.000004588384749347379",
            "extra": "mean: 129.69961999942825 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 126.23247009058339,
            "unit": "iter/sec",
            "range": "stddev: 0.000019295154618008014",
            "extra": "mean: 7.921892039998966 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6158.620695730193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059380634407225745",
            "extra": "mean: 162.37401999660506 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 19.143454594322606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000575784735399563",
            "extra": "mean: 52.23717564000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 49.96679651408323,
            "unit": "iter/sec",
            "range": "stddev: 0.00009822115200488919",
            "extra": "mean: 20.013290219999362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3040.256831174145,
            "unit": "iter/sec",
            "range": "stddev: 0.000013524071957227062",
            "extra": "mean: 328.91957999936494 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 60.18873446470793,
            "unit": "iter/sec",
            "range": "stddev: 0.00005881225394270916",
            "extra": "mean: 16.614404819997617 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3697.7191507260263,
            "unit": "iter/sec",
            "range": "stddev: 0.000009899162502719034",
            "extra": "mean: 270.4369799971573 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 62.90772493853134,
            "unit": "iter/sec",
            "range": "stddev: 0.000024396233132568797",
            "extra": "mean: 15.896298919999479 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3038.667468923501,
            "unit": "iter/sec",
            "range": "stddev: 0.000009937112412491755",
            "extra": "mean: 329.0916200035099 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.583323101139465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006117909067616057",
            "extra": "mean: 104.34793749999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 24.84803361331505,
            "unit": "iter/sec",
            "range": "stddev: 0.00014160250876245074",
            "extra": "mean: 40.24463325999932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1247.4880269175214,
            "unit": "iter/sec",
            "range": "stddev: 0.000004934144754723916",
            "extra": "mean: 801.6109000027427 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 584.5072450196334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071248591280559916",
            "extra": "mean: 1.710842780000803 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1246.3237499917911,
            "unit": "iter/sec",
            "range": "stddev: 0.000006844842364762565",
            "extra": "mean: 802.359740000611 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 61.56929801935743,
            "unit": "iter/sec",
            "range": "stddev: 0.00001589434999536382",
            "extra": "mean: 16.241861319997497 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1161.097008161683,
            "unit": "iter/sec",
            "range": "stddev: 0.000007610194032284126",
            "extra": "mean: 861.2544800053001 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 565.9625119561314,
            "unit": "iter/sec",
            "range": "stddev: 0.000008463804049147521",
            "extra": "mean: 1.7669014800003424 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1162.892869981337,
            "unit": "iter/sec",
            "range": "stddev: 0.000005471876561763805",
            "extra": "mean: 859.924440001123 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 50.190900135035356,
            "unit": "iter/sec",
            "range": "stddev: 0.00004767381211224439",
            "extra": "mean: 19.923930380000456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 916.481851990974,
            "unit": "iter/sec",
            "range": "stddev: 0.000006149631879094892",
            "extra": "mean: 1.091129080000428 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 501.45573100128917,
            "unit": "iter/sec",
            "range": "stddev: 0.000009238665330431738",
            "extra": "mean: 1.994193980001455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 919.5815962629231,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067208570046557185",
            "extra": "mean: 1.0874510799953896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 42.1351585052475,
            "unit": "iter/sec",
            "range": "stddev: 0.000044140965737932814",
            "extra": "mean: 23.733149120002963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 462.9681156259629,
            "unit": "iter/sec",
            "range": "stddev: 0.000008350147273730076",
            "extra": "mean: 2.159975960003067 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 251.0296054578053,
            "unit": "iter/sec",
            "range": "stddev: 0.00001617166532483955",
            "extra": "mean: 3.983593879997898 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 463.6520271505692,
            "unit": "iter/sec",
            "range": "stddev: 0.00000792697355421439",
            "extra": "mean: 2.1567898800003604 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 21.07867329909645,
            "unit": "iter/sec",
            "range": "stddev: 0.000050080226663305714",
            "extra": "mean: 47.44131595999761 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 232.53328226786417,
            "unit": "iter/sec",
            "range": "stddev: 0.000014275099768115845",
            "extra": "mean: 4.300459659998523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 126.43198414028485,
            "unit": "iter/sec",
            "range": "stddev: 0.000016064766740270942",
            "extra": "mean: 7.909391020000385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 232.83980639015516,
            "unit": "iter/sec",
            "range": "stddev: 0.000014816851229178116",
            "extra": "mean: 4.294798280000123 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.523477702802511,
            "unit": "iter/sec",
            "range": "stddev: 0.00010471014319544791",
            "extra": "mean: 95.02562063999903 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 72.30866738674456,
            "unit": "iter/sec",
            "range": "stddev: 0.0002924952741441393",
            "extra": "mean: 13.829600739998114 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 49.17858755956321,
            "unit": "iter/sec",
            "range": "stddev: 0.00013296928298185248",
            "extra": "mean: 20.334052880002673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 28.951448946455688,
            "unit": "iter/sec",
            "range": "stddev: 0.000074728709499722",
            "extra": "mean: 34.54058557999815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.681616697770412,
            "unit": "iter/sec",
            "range": "stddev: 0.00010483806468129481",
            "extra": "mean: 68.11238984000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 631.9438383926887,
            "unit": "iter/sec",
            "range": "stddev: 0.000012868583316822668",
            "extra": "mean: 1.582419100000152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 293.37250505607904,
            "unit": "iter/sec",
            "range": "stddev: 0.000016231616390389614",
            "extra": "mean: 3.4086357199998933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 79.91324222055512,
            "unit": "iter/sec",
            "range": "stddev: 0.00003382862562002561",
            "extra": "mean: 12.513570619998973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 113.11560740167941,
            "unit": "iter/sec",
            "range": "stddev: 0.000014886458723201224",
            "extra": "mean: 8.840513020002163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 194.48905310195843,
            "unit": "iter/sec",
            "range": "stddev: 0.00002582603939867318",
            "extra": "mean: 5.141677560000062 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 187.51592127376705,
            "unit": "iter/sec",
            "range": "stddev: 0.00003027673205826157",
            "extra": "mean: 5.332880499997827 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 170.70439927640427,
            "unit": "iter/sec",
            "range": "stddev: 0.00003926262277824581",
            "extra": "mean: 5.858079839997572 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 25.120703775848476,
            "unit": "iter/sec",
            "range": "stddev: 0.000028278795911701244",
            "extra": "mean: 39.80780192000111 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.553659515726377,
            "unit": "iter/sec",
            "range": "stddev: 0.0014597736448811063",
            "extra": "mean: 643.6416665799993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 18.06701261811181,
            "unit": "iter/sec",
            "range": "stddev: 0.00004461448329088157",
            "extra": "mean: 55.34949364000113 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 18.052369758587595,
            "unit": "iter/sec",
            "range": "stddev: 0.00010474983278606134",
            "extra": "mean: 55.39438940000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.89497117091438,
            "unit": "iter/sec",
            "range": "stddev: 0.00005801085140095125",
            "extra": "mean: 55.881621179996735 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26a70959169d83c86b98983a3330c7537c3651bb",
          "message": "Windows benchmarks (#293)\n\n* Update benchmarks.yml",
          "timestamp": "2021-04-30T14:00:36+03:00",
          "tree_id": "da4ced2f6c4dc254d46d0e7da1c583bd1e06fae1",
          "url": "https://github.com/OpenMined/TenSEAL/commit/26a70959169d83c86b98983a3330c7537c3651bb"
        },
        "date": 1619781526344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0159393247091586,
            "unit": "iter/sec",
            "range": "stddev: 0.009209834116368056",
            "extra": "mean: 984.3107513199948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 86.47938803390839,
            "unit": "iter/sec",
            "range": "stddev: 0.00034511602849973623",
            "extra": "mean: 11.56344908000392 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.7604768415319554,
            "unit": "iter/sec",
            "range": "stddev: 0.00820521124472131",
            "extra": "mean: 265.9237224799972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 112.0561056494021,
            "unit": "iter/sec",
            "range": "stddev: 0.00011495299902146974",
            "extra": "mean: 8.924100960002761 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3737029044876242,
            "unit": "iter/sec",
            "range": "stddev: 0.03864924916452283",
            "extra": "mean: 2.6759224720800012 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 181.2626572542118,
            "unit": "iter/sec",
            "range": "stddev: 0.00034579922209912776",
            "extra": "mean: 5.51685611999801 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.6523095193196604,
            "unit": "iter/sec",
            "range": "stddev: 0.00514839916922833",
            "extra": "mean: 273.7993575600012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3101886050425881,
            "unit": "iter/sec",
            "range": "stddev: 0.03085775988960971",
            "extra": "mean: 3.2238450534399954 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6185.661389302397,
            "unit": "iter/sec",
            "range": "stddev: 0.000010940997708764288",
            "extra": "mean: 161.66420000445214 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 40.05501639816021,
            "unit": "iter/sec",
            "range": "stddev: 0.000529770162250914",
            "extra": "mean: 24.96566198000437 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5883.162048994356,
            "unit": "iter/sec",
            "range": "stddev: 0.000027024077485937142",
            "extra": "mean: 169.97661999994307 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.521604794619925,
            "unit": "iter/sec",
            "range": "stddev: 0.0004152785810088131",
            "extra": "mean: 24.678193400000055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5994.038090125495,
            "unit": "iter/sec",
            "range": "stddev: 0.000015305586407193728",
            "extra": "mean: 166.83243999523256 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 40.11175104962329,
            "unit": "iter/sec",
            "range": "stddev: 0.0009563359066238371",
            "extra": "mean: 24.93035017999773 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6294.056823949906,
            "unit": "iter/sec",
            "range": "stddev: 0.000011878502899529351",
            "extra": "mean: 158.88004000771616 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.78810249552662,
            "unit": "iter/sec",
            "range": "stddev: 0.0003688109200937074",
            "extra": "mean: 24.516953200009084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3071.2866516811473,
            "unit": "iter/sec",
            "range": "stddev: 0.000024886997891226436",
            "extra": "mean: 325.5964399977529 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.13396007924061,
            "unit": "iter/sec",
            "range": "stddev: 0.0004939852971584976",
            "extra": "mean: 49.66732804000458 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9906.963704057427,
            "unit": "iter/sec",
            "range": "stddev: 0.000008307454430446381",
            "extra": "mean: 100.93909999795869 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 197.586121961538,
            "unit": "iter/sec",
            "range": "stddev: 0.0002351535558374068",
            "extra": "mean: 5.0610842000060074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11116.968519251423,
            "unit": "iter/sec",
            "range": "stddev: 0.000005201513531322236",
            "extra": "mean: 89.95257999231399 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 210.0799317588218,
            "unit": "iter/sec",
            "range": "stddev: 0.00015900387926847732",
            "extra": "mean: 4.760092939995957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 10705.1801941027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040471004611410865",
            "extra": "mean: 93.41271999801393 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.38343899329546,
            "unit": "iter/sec",
            "range": "stddev: 0.00039027607101745364",
            "extra": "mean: 22.530926460003684 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 84.74480538284574,
            "unit": "iter/sec",
            "range": "stddev: 0.0003432826683332528",
            "extra": "mean: 11.800133299998379 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10707.014122242135,
            "unit": "iter/sec",
            "range": "stddev: 0.000010345125103396618",
            "extra": "mean: 93.39671999896382 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 203.21770359789244,
            "unit": "iter/sec",
            "range": "stddev: 0.00009415350339148192",
            "extra": "mean: 4.92083112000273 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12013.423319156145,
            "unit": "iter/sec",
            "range": "stddev: 0.00000872703474068768",
            "extra": "mean: 83.2402199966964 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 212.88743010868237,
            "unit": "iter/sec",
            "range": "stddev: 0.00007924260559800944",
            "extra": "mean: 4.697318199996516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11851.95298918526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028472240073302526",
            "extra": "mean: 84.37427999524516 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 36.312344134386656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006679183499355213",
            "extra": "mean: 27.538844540003993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.76069474667699,
            "unit": "iter/sec",
            "range": "stddev: 0.0005070428687078849",
            "extra": "mean: 11.660353300003408 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10373.349289205484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026357680695014235",
            "extra": "mean: 96.40087999741809 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 184.21860856798912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003372031423488984",
            "extra": "mean: 5.428333259997089 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11329.07496015628,
            "unit": "iter/sec",
            "range": "stddev: 0.000013844748190009852",
            "extra": "mean: 88.26846000374644 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 184.05354423853043,
            "unit": "iter/sec",
            "range": "stddev: 0.00024147521736305196",
            "extra": "mean: 5.43320154000412 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9910.887248180243,
            "unit": "iter/sec",
            "range": "stddev: 0.000023515926321321865",
            "extra": "mean: 100.89914000218414 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.745930651557373,
            "unit": "iter/sec",
            "range": "stddev: 0.0013030474240447087",
            "extra": "mean: 32.52462939999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 86.813678211051,
            "unit": "iter/sec",
            "range": "stddev: 0.00021402666164473078",
            "extra": "mean: 11.518922139998722 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4955.051734721487,
            "unit": "iter/sec",
            "range": "stddev: 0.00002565115475721212",
            "extra": "mean: 201.81423999929393 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 101.00348946453859,
            "unit": "iter/sec",
            "range": "stddev: 0.00035229658880671204",
            "extra": "mean: 9.900648039997575 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6145.591773217483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001148502923531117",
            "extra": "mean: 162.71825999865544 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 105.4271692773431,
            "unit": "iter/sec",
            "range": "stddev: 0.00018781022844911987",
            "extra": "mean: 9.48522099999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5499.363063796104,
            "unit": "iter/sec",
            "range": "stddev: 0.00002226825215244345",
            "extra": "mean: 181.83923999913532 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.659638572436897,
            "unit": "iter/sec",
            "range": "stddev: 0.0009764644181281728",
            "extra": "mean: 63.858434239991766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.58176497708887,
            "unit": "iter/sec",
            "range": "stddev: 0.00033909488857127013",
            "extra": "mean: 23.48423088000345 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2628.194938827157,
            "unit": "iter/sec",
            "range": "stddev: 0.00003440185749451402",
            "extra": "mean: 380.4892800098969 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 49.67373096366309,
            "unit": "iter/sec",
            "range": "stddev: 0.0005048691033723192",
            "extra": "mean: 20.131364819999362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3140.8996265911587,
            "unit": "iter/sec",
            "range": "stddev: 0.000022021118361463332",
            "extra": "mean: 318.3801199929803 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 51.93421618724017,
            "unit": "iter/sec",
            "range": "stddev: 0.0006073981781074939",
            "extra": "mean: 19.255128380000315 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2278.879210765553,
            "unit": "iter/sec",
            "range": "stddev: 0.00016435347846800315",
            "extra": "mean: 438.81219999548193 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.770996356675548,
            "unit": "iter/sec",
            "range": "stddev: 0.0013405354542262299",
            "extra": "mean: 128.6836274399957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.360335467687552,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190052495278976",
            "extra": "mean: 46.815744140008064 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1166.0971797901439,
            "unit": "iter/sec",
            "range": "stddev: 0.000020439050455095738",
            "extra": "mean: 857.561459997669 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 476.48898065437095,
            "unit": "iter/sec",
            "range": "stddev: 0.00009771787144009238",
            "extra": "mean: 2.0986844199978805 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1138.4250654291614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000501569754840649",
            "extra": "mean: 878.4065199961333 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.585397013509066,
            "unit": "iter/sec",
            "range": "stddev: 0.00021073411728772165",
            "extra": "mean: 19.38533107999774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1010.5356016520725,
            "unit": "iter/sec",
            "range": "stddev: 0.00007635443032789465",
            "extra": "mean: 989.5742400021846 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 495.92542217894385,
            "unit": "iter/sec",
            "range": "stddev: 0.000029302879861209615",
            "extra": "mean: 2.016432220002571 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1049.8111011947133,
            "unit": "iter/sec",
            "range": "stddev: 0.00003105315984840529",
            "extra": "mean: 952.5523199954478 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.39387434271989,
            "unit": "iter/sec",
            "range": "stddev: 0.0005293216960954517",
            "extra": "mean: 24.15816388001076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 861.0247355036383,
            "unit": "iter/sec",
            "range": "stddev: 0.000011303822033164281",
            "extra": "mean: 1.1614068199969552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 375.90639395460227,
            "unit": "iter/sec",
            "range": "stddev: 0.0004067508049035106",
            "extra": "mean: 2.6602367400028015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 814.7076366967906,
            "unit": "iter/sec",
            "range": "stddev: 0.000020043134091315567",
            "extra": "mean: 1.2274341800139155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.97871565439717,
            "unit": "iter/sec",
            "range": "stddev: 0.00033313197923738906",
            "extra": "mean: 28.588814120003008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 419.15947091447987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008773366669637645",
            "extra": "mean: 2.385726839997915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 215.8345423448629,
            "unit": "iter/sec",
            "range": "stddev: 0.00014770022944985559",
            "extra": "mean: 4.633178680001038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 402.16041216851687,
            "unit": "iter/sec",
            "range": "stddev: 0.00007462184334982313",
            "extra": "mean: 2.4865699600013613 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.336344145002506,
            "unit": "iter/sec",
            "range": "stddev: 0.0012182877605128209",
            "extra": "mean: 57.68228824000744 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 216.57002467528122,
            "unit": "iter/sec",
            "range": "stddev: 0.00012704247091705173",
            "extra": "mean: 4.617444180003076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 112.45189985246108,
            "unit": "iter/sec",
            "range": "stddev: 0.00013423930789831925",
            "extra": "mean: 8.892691020000711 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 214.15317610865702,
            "unit": "iter/sec",
            "range": "stddev: 0.00008075681327884464",
            "extra": "mean: 4.6695548400020925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.633959877335645,
            "unit": "iter/sec",
            "range": "stddev: 0.001183455285683127",
            "extra": "mean: 115.82171034000567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 60.778596528409565,
            "unit": "iter/sec",
            "range": "stddev: 0.000710483489356557",
            "extra": "mean: 16.45316044000083 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.76175535803752,
            "unit": "iter/sec",
            "range": "stddev: 0.0005443374380523051",
            "extra": "mean: 24.532800199999656 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.104201099950274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006585456422519254",
            "extra": "mean: 41.486544019999194 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.037596915701291,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476764071634476",
            "extra": "mean: 83.07305909999741 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 522.6569050501748,
            "unit": "iter/sec",
            "range": "stddev: 0.00007476106079567047",
            "extra": "mean: 1.913301040008264 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 248.91524354846703,
            "unit": "iter/sec",
            "range": "stddev: 0.00009246917089581944",
            "extra": "mean: 4.017431739994208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.05132500931008,
            "unit": "iter/sec",
            "range": "stddev: 0.0003466726918063574",
            "extra": "mean: 14.913948380008149 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 95.99189361517769,
            "unit": "iter/sec",
            "range": "stddev: 0.00007032674885007851",
            "extra": "mean: 10.417546339995171 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 170.36495826666223,
            "unit": "iter/sec",
            "range": "stddev: 0.00018544460122245533",
            "extra": "mean: 5.86975168000663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 169.81046170607914,
            "unit": "iter/sec",
            "range": "stddev: 0.00021750642842622458",
            "extra": "mean: 5.888918679997914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 156.4722365395236,
            "unit": "iter/sec",
            "range": "stddev: 0.00009689222543848982",
            "extra": "mean: 6.390910120003354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 22.192383280674655,
            "unit": "iter/sec",
            "range": "stddev: 0.0008329494679987559",
            "extra": "mean: 45.06050510000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.391929182211893,
            "unit": "iter/sec",
            "range": "stddev: 0.004458645677998234",
            "extra": "mean: 718.4273544799998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.8045458203585,
            "unit": "iter/sec",
            "range": "stddev: 0.002050704513746823",
            "extra": "mean: 67.54682055999638 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.08415141564972,
            "unit": "iter/sec",
            "range": "stddev: 0.0011259092469641857",
            "extra": "mean: 66.29474687999391 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.05637297710154,
            "unit": "iter/sec",
            "range": "stddev: 0.0010737506081349795",
            "extra": "mean: 66.41705818000446 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "soumiazohra1996@gmail.com",
            "name": "Soumia  Zohra El Mestari",
            "username": "ZSoumia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cf17a0a86926b93bed535b48ac8613747bebfda",
          "message": "update SEAL sha256 for Bazel (#296)",
          "timestamp": "2021-05-09T19:52:08+03:00",
          "tree_id": "b3ff498fa06766d70a1c59c934520cd70b2cea42",
          "url": "https://github.com/OpenMined/TenSEAL/commit/7cf17a0a86926b93bed535b48ac8613747bebfda"
        },
        "date": 1620580316569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9288480566612676,
            "unit": "iter/sec",
            "range": "stddev: 0.022057674516519965",
            "extra": "mean: 1.0766023493600096 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 84.3680990690931,
            "unit": "iter/sec",
            "range": "stddev: 0.0003395271490767814",
            "extra": "mean: 11.852821280008357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.6357207515620265,
            "unit": "iter/sec",
            "range": "stddev: 0.0028247801078316813",
            "extra": "mean: 275.0486267600081 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 101.53389076378525,
            "unit": "iter/sec",
            "range": "stddev: 0.0003086554985192966",
            "extra": "mean: 9.848928200008231 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.37321573891557724,
            "unit": "iter/sec",
            "range": "stddev: 0.03143083159069201",
            "extra": "mean: 2.6794154043600065 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 203.27018967124792,
            "unit": "iter/sec",
            "range": "stddev: 0.00025036948867127674",
            "extra": "mean: 4.919560520002051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.6178766895772108,
            "unit": "iter/sec",
            "range": "stddev: 0.007200586525196238",
            "extra": "mean: 276.4052193599946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.30461645284863526,
            "unit": "iter/sec",
            "range": "stddev: 0.052039869948506345",
            "extra": "mean: 3.2828167705600024 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5401.4305362451905,
            "unit": "iter/sec",
            "range": "stddev: 0.00001864501109113782",
            "extra": "mean: 185.1361400076712 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 38.451950822538244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005333539391341614",
            "extra": "mean: 26.006482860002507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5757.2472803381615,
            "unit": "iter/sec",
            "range": "stddev: 0.00002108011571870403",
            "extra": "mean: 173.69412000334705 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.099970999005535,
            "unit": "iter/sec",
            "range": "stddev: 0.0002662675411893969",
            "extra": "mean: 25.57546653999907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 4835.212570970969,
            "unit": "iter/sec",
            "range": "stddev: 0.00006436048024103636",
            "extra": "mean: 206.8161399984092 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 37.95474752009303,
            "unit": "iter/sec",
            "range": "stddev: 0.0005060531594429294",
            "extra": "mean: 26.34716512000523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5245.650123221832,
            "unit": "iter/sec",
            "range": "stddev: 0.000010735177523476969",
            "extra": "mean: 190.63414000356715 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 38.082063790236624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006848278490245397",
            "extra": "mean: 26.259081060002245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2826.2298777069836,
            "unit": "iter/sec",
            "range": "stddev: 0.00005322673355897822",
            "extra": "mean: 353.8282600038656 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.052931542041552,
            "unit": "iter/sec",
            "range": "stddev: 0.0011946151985483759",
            "extra": "mean: 52.485361520007245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9635.39287908527,
            "unit": "iter/sec",
            "range": "stddev: 0.000022944930262957492",
            "extra": "mean: 103.78404000221053 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 196.5777295550487,
            "unit": "iter/sec",
            "range": "stddev: 0.00007279943655854882",
            "extra": "mean: 5.087046239996198 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11227.119692166978,
            "unit": "iter/sec",
            "range": "stddev: 0.000010979409451849263",
            "extra": "mean: 89.07003999411245 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 200.6078337117061,
            "unit": "iter/sec",
            "range": "stddev: 0.000056686346856427775",
            "extra": "mean: 4.984850200003166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9963.13242480626,
            "unit": "iter/sec",
            "range": "stddev: 0.000015980570967757082",
            "extra": "mean: 100.37003999968874 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 43.02585293046883,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564262360777417",
            "extra": "mean: 23.24184024000715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.9836380993027,
            "unit": "iter/sec",
            "range": "stddev: 0.0005518394705401928",
            "extra": "mean: 11.907081220006148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9856.097040732257,
            "unit": "iter/sec",
            "range": "stddev: 0.000013250239898541121",
            "extra": "mean: 101.46004000034736 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 200.50896393341986,
            "unit": "iter/sec",
            "range": "stddev: 0.00007648197029282989",
            "extra": "mean: 4.987308200006737 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11020.007483835954,
            "unit": "iter/sec",
            "range": "stddev: 0.000014755153098938426",
            "extra": "mean: 90.74404000784853 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 205.74426634532293,
            "unit": "iter/sec",
            "range": "stddev: 0.00023293246647822664",
            "extra": "mean: 4.860402760004945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11069.038923772023,
            "unit": "iter/sec",
            "range": "stddev: 0.000009628147885852508",
            "extra": "mean: 90.34208000230137 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 36.67999195753061,
            "unit": "iter/sec",
            "range": "stddev: 0.0006141629293952048",
            "extra": "mean: 27.262819500010664 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.95472096120294,
            "unit": "iter/sec",
            "range": "stddev: 0.00044828461738549605",
            "extra": "mean: 11.63403229999858 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9758.184383727841,
            "unit": "iter/sec",
            "range": "stddev: 0.00001243800747447851",
            "extra": "mean: 102.47808000713121 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 192.72628936074992,
            "unit": "iter/sec",
            "range": "stddev: 0.00023370612195400552",
            "extra": "mean: 5.188705719997415 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 8418.493409464008,
            "unit": "iter/sec",
            "range": "stddev: 0.00004541734227932748",
            "extra": "mean: 118.786100001671 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 206.51942759441974,
            "unit": "iter/sec",
            "range": "stddev: 0.00022065667810803845",
            "extra": "mean: 4.842159459999493 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9693.860141984796,
            "unit": "iter/sec",
            "range": "stddev: 0.000009100078374500621",
            "extra": "mean: 103.15807999631943 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 31.372788387824663,
            "unit": "iter/sec",
            "range": "stddev: 0.0006567097346613996",
            "extra": "mean: 31.874756800007162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 83.50822349237731,
            "unit": "iter/sec",
            "range": "stddev: 0.0002373525315327091",
            "extra": "mean: 11.974868559996139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5360.374205572655,
            "unit": "iter/sec",
            "range": "stddev: 0.000007539287865597308",
            "extra": "mean: 186.55414000022574 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 98.08357196227689,
            "unit": "iter/sec",
            "range": "stddev: 0.0001860408223112443",
            "extra": "mean: 10.195387260005191 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5903.0455467266,
            "unit": "iter/sec",
            "range": "stddev: 0.000008766896690984064",
            "extra": "mean: 169.40407999300078 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 100.0941004657294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002478296117858142",
            "extra": "mean: 9.990598800000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5002.548798620396,
            "unit": "iter/sec",
            "range": "stddev: 0.00003590745159905264",
            "extra": "mean: 199.8980999997002 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.933117368759198,
            "unit": "iter/sec",
            "range": "stddev: 0.0011087784395093457",
            "extra": "mean: 66.96525415999531 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.23860030444504,
            "unit": "iter/sec",
            "range": "stddev: 0.0006964533402529458",
            "extra": "mean: 24.249125639994418 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2618.7869998789693,
            "unit": "iter/sec",
            "range": "stddev: 0.00003207522682280327",
            "extra": "mean: 381.8561799971576 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 48.63416435346901,
            "unit": "iter/sec",
            "range": "stddev: 0.00042009564681092263",
            "extra": "mean: 20.561677440000494 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3334.959681971102,
            "unit": "iter/sec",
            "range": "stddev: 0.000020906266499098115",
            "extra": "mean: 299.853700003041 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 50.67181056347414,
            "unit": "iter/sec",
            "range": "stddev: 0.0006461860465589034",
            "extra": "mean: 19.73483854000733 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3011.363561073746,
            "unit": "iter/sec",
            "range": "stddev: 0.000027150572693435585",
            "extra": "mean: 332.0754800006398 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.3694609220436496,
            "unit": "iter/sec",
            "range": "stddev: 0.0010810366509816712",
            "extra": "mean: 135.69513572000687 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.038397754115305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006640434784972293",
            "extra": "mean: 49.904189559997576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1093.9792980567431,
            "unit": "iter/sec",
            "range": "stddev: 0.000015685546247525782",
            "extra": "mean: 914.0940800034514 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 446.8965838744621,
            "unit": "iter/sec",
            "range": "stddev: 0.0004049647220789395",
            "extra": "mean: 2.237654160007878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1109.2548839888364,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133637700653009",
            "extra": "mean: 901.5060599995195 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 48.60215946412603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707412840258172",
            "extra": "mean: 20.575217460000204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 935.334630184894,
            "unit": "iter/sec",
            "range": "stddev: 0.000038147422521200345",
            "extra": "mean: 1.0691360799955874 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 462.102049729075,
            "unit": "iter/sec",
            "range": "stddev: 0.000055954493505308884",
            "extra": "mean: 2.164024160001645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1029.0923798269905,
            "unit": "iter/sec",
            "range": "stddev: 0.00005423689296097423",
            "extra": "mean: 971.7300600050294 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 38.8776453917744,
            "unit": "iter/sec",
            "range": "stddev: 0.0004024479061953009",
            "extra": "mean: 25.721722339994813 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 745.7285933878318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007047632701517057",
            "extra": "mean: 1.3409704400055489 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 395.10124710526736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000452809854460222",
            "extra": "mean: 2.5309968199962896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 801.2689536145099,
            "unit": "iter/sec",
            "range": "stddev: 0.00010829222350731118",
            "extra": "mean: 1.2480204000030426 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.44415335231352,
            "unit": "iter/sec",
            "range": "stddev: 0.0010138610761334591",
            "extra": "mean: 29.032503419998648 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 396.4719043635765,
            "unit": "iter/sec",
            "range": "stddev: 0.00008927333651201173",
            "extra": "mean: 2.5222468199990544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 204.31289817538539,
            "unit": "iter/sec",
            "range": "stddev: 0.00005719130458760471",
            "extra": "mean: 4.894453599995359 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 395.58107144844143,
            "unit": "iter/sec",
            "range": "stddev: 0.00010064742376392337",
            "extra": "mean: 2.5279268200029033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.849655509366148,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240016360442715",
            "extra": "mean: 59.348394359999475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 196.94768663342927,
            "unit": "iter/sec",
            "range": "stddev: 0.000243797976537669",
            "extra": "mean: 5.077490459998444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 104.56142022830147,
            "unit": "iter/sec",
            "range": "stddev: 0.00041986087604598644",
            "extra": "mean: 9.563756860002286 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 203.0734583064899,
            "unit": "iter/sec",
            "range": "stddev: 0.00016068434592905411",
            "extra": "mean: 4.924326439995639 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.24411972229048,
            "unit": "iter/sec",
            "range": "stddev: 0.001330197844930534",
            "extra": "mean: 121.29857809999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 56.08222340398341,
            "unit": "iter/sec",
            "range": "stddev: 0.0008289999226665797",
            "extra": "mean: 17.830962099997123 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.92873741117258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005460723554164159",
            "extra": "mean: 26.365233020001142 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 22.92496567905078,
            "unit": "iter/sec",
            "range": "stddev: 0.00036307102759180847",
            "extra": "mean: 43.62056693998966 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.629984581531772,
            "unit": "iter/sec",
            "range": "stddev: 0.0024210671318044713",
            "extra": "mean: 85.98463677999916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 474.6406659271403,
            "unit": "iter/sec",
            "range": "stddev: 0.00025565741878532517",
            "extra": "mean: 2.1068569799990655 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 230.38820412354954,
            "unit": "iter/sec",
            "range": "stddev: 0.000050741252706356255",
            "extra": "mean: 4.340500000007523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 65.45525124779806,
            "unit": "iter/sec",
            "range": "stddev: 0.0005634404281859993",
            "extra": "mean: 15.277613040002507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 91.70459458655128,
            "unit": "iter/sec",
            "range": "stddev: 0.000299825656730349",
            "extra": "mean: 10.90457903999777 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 162.80125423779998,
            "unit": "iter/sec",
            "range": "stddev: 0.00020903588432145495",
            "extra": "mean: 6.142458819999774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 156.02233026556885,
            "unit": "iter/sec",
            "range": "stddev: 0.00033387854062891925",
            "extra": "mean: 6.409338959992965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 146.72248682593596,
            "unit": "iter/sec",
            "range": "stddev: 0.00015885053423441234",
            "extra": "mean: 6.81558786000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.186068575192504,
            "unit": "iter/sec",
            "range": "stddev: 0.0007621299797967739",
            "extra": "mean: 47.20082900000307 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3068513508445045,
            "unit": "iter/sec",
            "range": "stddev: 0.014808001888018715",
            "extra": "mean: 765.1979694200008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.097593385482526,
            "unit": "iter/sec",
            "range": "stddev: 0.00024674431761826",
            "extra": "mean: 70.93409297999642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.021506722071178,
            "unit": "iter/sec",
            "range": "stddev: 0.0005567219052873319",
            "extra": "mean: 71.31901155999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.978988541303124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005926047772909826",
            "extra": "mean: 71.53593388000445 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02697d41f92b834daa1559cc12162ffc8b2bc44d",
          "message": "SEAL 3.6.5 (#297)\n\n* SEAL 3.6.5",
          "timestamp": "2021-05-20T09:40:45+03:00",
          "tree_id": "dbad30bb57c92b3f0e3b12a52fe8f1339b94e10b",
          "url": "https://github.com/OpenMined/TenSEAL/commit/02697d41f92b834daa1559cc12162ffc8b2bc44d"
        },
        "date": 1621493995553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9848575302575568,
            "unit": "iter/sec",
            "range": "stddev: 0.014844226353612381",
            "extra": "mean: 1.0153752895999923 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 91.7699022699637,
            "unit": "iter/sec",
            "range": "stddev: 0.0002144786436819737",
            "extra": "mean: 10.89681883999674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.7823922193599553,
            "unit": "iter/sec",
            "range": "stddev: 0.0032002281155568127",
            "extra": "mean: 264.38294655999925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 108.60424753387483,
            "unit": "iter/sec",
            "range": "stddev: 0.0002569501123259545",
            "extra": "mean: 9.207742999997208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.37108866447685895,
            "unit": "iter/sec",
            "range": "stddev: 0.026320963116163026",
            "extra": "mean: 2.694773771680002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 205.65401456322374,
            "unit": "iter/sec",
            "range": "stddev: 0.00015570541574388546",
            "extra": "mean: 4.862535759993989 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.5676718206464595,
            "unit": "iter/sec",
            "range": "stddev: 0.005768048351265514",
            "extra": "mean: 280.29483939999864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3083755424338868,
            "unit": "iter/sec",
            "range": "stddev: 0.01344683981663301",
            "extra": "mean: 3.242799322239998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5372.265208193349,
            "unit": "iter/sec",
            "range": "stddev: 0.00004484426453827907",
            "extra": "mean: 186.14121999689814 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.22973599676378,
            "unit": "iter/sec",
            "range": "stddev: 0.0008187885607005254",
            "extra": "mean: 25.49086744000761 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5316.340324804619,
            "unit": "iter/sec",
            "range": "stddev: 0.00003352213515669102",
            "extra": "mean: 188.09932000294793 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.414503465893674,
            "unit": "iter/sec",
            "range": "stddev: 0.00026110054745818697",
            "extra": "mean: 24.74359237999579 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6370.314537970238,
            "unit": "iter/sec",
            "range": "stddev: 0.000013140238436345139",
            "extra": "mean: 156.9781200032594 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 36.28570796328717,
            "unit": "iter/sec",
            "range": "stddev: 0.0016006246226132116",
            "extra": "mean: 27.559059920004074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6599.183416934879,
            "unit": "iter/sec",
            "range": "stddev: 0.000007188069012521877",
            "extra": "mean: 151.5339000025051 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.149905679285304,
            "unit": "iter/sec",
            "range": "stddev: 0.0002282049273660573",
            "extra": "mean: 24.90665875999639 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3260.5372738893147,
            "unit": "iter/sec",
            "range": "stddev: 0.000010312071441184503",
            "extra": "mean: 306.6979200048081 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.731426431038,
            "unit": "iter/sec",
            "range": "stddev: 0.0012690042661589655",
            "extra": "mean: 50.680573119993824 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11203.788852863545,
            "unit": "iter/sec",
            "range": "stddev: 0.000004601956257459018",
            "extra": "mean: 89.25551999709569 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 196.9980491678302,
            "unit": "iter/sec",
            "range": "stddev: 0.00017097958220912025",
            "extra": "mean: 5.076192399997126 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12138.685942958404,
            "unit": "iter/sec",
            "range": "stddev: 0.000018456608806726282",
            "extra": "mean: 82.38124000399694 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 206.60170544328508,
            "unit": "iter/sec",
            "range": "stddev: 0.00012718379703052432",
            "extra": "mean: 4.840231100001802 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 10600.663262949563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058074915469627465",
            "extra": "mean: 94.3337199942107 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 43.426230430180716,
            "unit": "iter/sec",
            "range": "stddev: 0.00038009140288833634",
            "extra": "mean: 23.02755707999495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 87.44599529896131,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852289585828822",
            "extra": "mean: 11.435629460002021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10173.782447567492,
            "unit": "iter/sec",
            "range": "stddev: 0.00003465424187794079",
            "extra": "mean: 98.29185999933543 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 198.1226193807309,
            "unit": "iter/sec",
            "range": "stddev: 0.00018659838147989659",
            "extra": "mean: 5.047379260004163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 9425.230588759481,
            "unit": "iter/sec",
            "range": "stddev: 0.000050479231814363565",
            "extra": "mean: 106.0981999944488 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 209.35478492476713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086265925507838",
            "extra": "mean: 4.776580579991787 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10942.877740860333,
            "unit": "iter/sec",
            "range": "stddev: 0.000024481838319565135",
            "extra": "mean: 91.38363999682042 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 36.2973852936793,
            "unit": "iter/sec",
            "range": "stddev: 0.0004521819224479689",
            "extra": "mean: 27.55019381999773 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 87.26103924350963,
            "unit": "iter/sec",
            "range": "stddev: 0.0001820408634409592",
            "extra": "mean: 11.459868100005224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10763.609184646984,
            "unit": "iter/sec",
            "range": "stddev: 0.000011311679237788289",
            "extra": "mean: 92.90563999911683 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 199.94334965095146,
            "unit": "iter/sec",
            "range": "stddev: 0.00013298674473960186",
            "extra": "mean: 5.001416659997631 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13003.728689600292,
            "unit": "iter/sec",
            "range": "stddev: 0.000004658918928846614",
            "extra": "mean: 76.90101999742183 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 207.31078326029316,
            "unit": "iter/sec",
            "range": "stddev: 0.0001445111710550375",
            "extra": "mean: 4.823675760003425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12119.56092247935,
            "unit": "iter/sec",
            "range": "stddev: 0.00000387767955686583",
            "extra": "mean: 82.51124000253185 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.914715305307617,
            "unit": "iter/sec",
            "range": "stddev: 0.0009169858662685196",
            "extra": "mean: 32.34705512000346 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 87.07017436201302,
            "unit": "iter/sec",
            "range": "stddev: 0.0001723566446495541",
            "extra": "mean: 11.484989059999862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5577.152147860519,
            "unit": "iter/sec",
            "range": "stddev: 0.00003155023814301212",
            "extra": "mean: 179.30297999555478 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 100.35499697047631,
            "unit": "iter/sec",
            "range": "stddev: 0.0002019864954560509",
            "extra": "mean: 9.96462588000668 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6013.574803151592,
            "unit": "iter/sec",
            "range": "stddev: 0.00004109199412716546",
            "extra": "mean: 166.29044000183058 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 101.70517244498309,
            "unit": "iter/sec",
            "range": "stddev: 0.0004262721208582822",
            "extra": "mean: 9.83234161999917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5306.663598709751,
            "unit": "iter/sec",
            "range": "stddev: 0.00003102588763856327",
            "extra": "mean: 188.4423199999219 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.345444484980025,
            "unit": "iter/sec",
            "range": "stddev: 0.0015295071021764882",
            "extra": "mean: 65.16591950000475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.78084808405417,
            "unit": "iter/sec",
            "range": "stddev: 0.0006564238384895988",
            "extra": "mean: 23.93441124000674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2599.1380114409058,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504296062563358",
            "extra": "mean: 384.7429400047986 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 48.5143384753326,
            "unit": "iter/sec",
            "range": "stddev: 0.0007840054661037099",
            "extra": "mean: 20.612462859994594 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3030.6077440967056,
            "unit": "iter/sec",
            "range": "stddev: 0.000015316436021430757",
            "extra": "mean: 329.96682000430155 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 51.71539489069581,
            "unit": "iter/sec",
            "range": "stddev: 0.00028550851513068487",
            "extra": "mean: 19.336601840004732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3044.429181762031,
            "unit": "iter/sec",
            "range": "stddev: 0.000015412459557257965",
            "extra": "mean: 328.4687999939706 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.554833968583363,
            "unit": "iter/sec",
            "range": "stddev: 0.004520047706657397",
            "extra": "mean: 132.36558263999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.575573631962648,
            "unit": "iter/sec",
            "range": "stddev: 0.0006142110347808323",
            "extra": "mean: 48.60131813999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1092.9686571995503,
            "unit": "iter/sec",
            "range": "stddev: 0.00004258910880917794",
            "extra": "mean: 914.9393200004852 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 489.8736311207401,
            "unit": "iter/sec",
            "range": "stddev: 0.00008247253709097566",
            "extra": "mean: 2.0413427799985584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1083.4052371325408,
            "unit": "iter/sec",
            "range": "stddev: 0.000050435265554062674",
            "extra": "mean: 923.0156600006012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 49.132821231254255,
            "unit": "iter/sec",
            "range": "stddev: 0.0010330994624676154",
            "extra": "mean: 20.35299367999414 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 958.2561945025443,
            "unit": "iter/sec",
            "range": "stddev: 0.00005636896848504092",
            "extra": "mean: 1.0435622600061834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 480.9476716034835,
            "unit": "iter/sec",
            "range": "stddev: 0.00007940889700218983",
            "extra": "mean: 2.0792282800039175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1035.2682130445994,
            "unit": "iter/sec",
            "range": "stddev: 0.000048919370909609",
            "extra": "mean: 965.9332599994741 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 40.77744179458283,
            "unit": "iter/sec",
            "range": "stddev: 0.00037471570553490043",
            "extra": "mean: 24.523362820000333 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 817.6271518191941,
            "unit": "iter/sec",
            "range": "stddev: 0.00003785068176034731",
            "extra": "mean: 1.2230513599934056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 399.9688216305648,
            "unit": "iter/sec",
            "range": "stddev: 0.00016901291258216626",
            "extra": "mean: 2.5001948799990714 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 817.5709737446812,
            "unit": "iter/sec",
            "range": "stddev: 0.000050470262709293396",
            "extra": "mean: 1.2231354000005012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.698633561009764,
            "unit": "iter/sec",
            "range": "stddev: 0.00025404412655304927",
            "extra": "mean: 28.819578679999722 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 429.63960223276007,
            "unit": "iter/sec",
            "range": "stddev: 0.00004111846532274152",
            "extra": "mean: 2.327532180001981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 218.81315699902598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009467283560162258",
            "extra": "mean: 4.570109099995534 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 425.2508656921744,
            "unit": "iter/sec",
            "range": "stddev: 0.00004559599445469201",
            "extra": "mean: 2.351553119997334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.997588293784403,
            "unit": "iter/sec",
            "range": "stddev: 0.003164268234930489",
            "extra": "mean: 58.831875600003514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 205.61432124808562,
            "unit": "iter/sec",
            "range": "stddev: 0.00020482634060525049",
            "extra": "mean: 4.863474459998542 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 110.90259869925569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004513215718996543",
            "extra": "mean: 9.016921259994888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 214.59961987975737,
            "unit": "iter/sec",
            "range": "stddev: 0.00007799318084524791",
            "extra": "mean: 4.659840499998609 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.568823569250899,
            "unit": "iter/sec",
            "range": "stddev: 0.0015219951854744673",
            "extra": "mean: 116.70213442000204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 62.32664863282741,
            "unit": "iter/sec",
            "range": "stddev: 0.0005399247411249337",
            "extra": "mean: 16.0445013799972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.48074722173314,
            "unit": "iter/sec",
            "range": "stddev: 0.00091360841806503",
            "extra": "mean: 25.987021360001563 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.122091763662954,
            "unit": "iter/sec",
            "range": "stddev: 0.0009534498606817864",
            "extra": "mean: 41.4557746400078 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.033259759583567,
            "unit": "iter/sec",
            "range": "stddev: 0.0020445891782842987",
            "extra": "mean: 83.10300118000669 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 486.8347233140937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007432875931975627",
            "extra": "mean: 2.054085199988549 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 241.70472408253795,
            "unit": "iter/sec",
            "range": "stddev: 0.00020951568689320276",
            "extra": "mean: 4.13727950000066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 65.67921435745575,
            "unit": "iter/sec",
            "range": "stddev: 0.00032709375916454767",
            "extra": "mean: 15.225517079993551 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 92.95020248860409,
            "unit": "iter/sec",
            "range": "stddev: 0.0002930851449750174",
            "extra": "mean: 10.75844885999686 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 175.22893599170757,
            "unit": "iter/sec",
            "range": "stddev: 0.00004924257095258051",
            "extra": "mean: 5.706820019995576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 163.0340889149965,
            "unit": "iter/sec",
            "range": "stddev: 0.00022220878368763868",
            "extra": "mean: 6.13368656000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 156.30703399424092,
            "unit": "iter/sec",
            "range": "stddev: 0.00008670202122957938",
            "extra": "mean: 6.397664740006803 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 22.695312033470124,
            "unit": "iter/sec",
            "range": "stddev: 0.0006153961852165142",
            "extra": "mean: 44.06196303999878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3638840334830222,
            "unit": "iter/sec",
            "range": "stddev: 0.008447756012271492",
            "extra": "mean: 733.2001661799995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.60622807549286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006160512169533447",
            "extra": "mean: 68.46394530000907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.950976994841263,
            "unit": "iter/sec",
            "range": "stddev: 0.0016673608935535915",
            "extra": "mean: 66.88526109999657 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.496924716185694,
            "unit": "iter/sec",
            "range": "stddev: 0.003282816684979094",
            "extra": "mean: 68.98014714000055 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45686061+shangsuru@users.noreply.github.com",
            "name": "shangsuru",
            "username": "shangsuru"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6516f215a0171fd9ad70f60f2f9b3d0c83d0d7c4",
          "message": "Fix typos in the tutorials (#308)",
          "timestamp": "2021-08-12T13:29:46+01:00",
          "tree_id": "734e80227dde44c5b3f2f61da84b07834b70e639",
          "url": "https://github.com/OpenMined/TenSEAL/commit/6516f215a0171fd9ad70f60f2f9b3d0c83d0d7c4"
        },
        "date": 1628772529157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9967313106086289,
            "unit": "iter/sec",
            "range": "stddev: 0.011254409837296656",
            "extra": "mean: 1.003279408759995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 88.04969189315028,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750746791343228",
            "extra": "mean: 11.357223160002832 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.6941758025927443,
            "unit": "iter/sec",
            "range": "stddev: 0.0030824602906361948",
            "extra": "mean: 270.6963754399976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 103.81819440851137,
            "unit": "iter/sec",
            "range": "stddev: 0.0004082396330692631",
            "extra": "mean: 9.632222999998703 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.36342729916716954,
            "unit": "iter/sec",
            "range": "stddev: 0.017137826439548788",
            "extra": "mean: 2.7515819595600033 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 205.00429422515774,
            "unit": "iter/sec",
            "range": "stddev: 0.00010934537972257878",
            "extra": "mean: 4.877946599995084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.4467970387590054,
            "unit": "iter/sec",
            "range": "stddev: 0.00311231307570485",
            "extra": "mean: 290.1244224000038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2977778465074991,
            "unit": "iter/sec",
            "range": "stddev: 0.039333877263971695",
            "extra": "mean: 3.3582081801199957 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5673.830975344516,
            "unit": "iter/sec",
            "range": "stddev: 0.000012829993845607376",
            "extra": "mean: 176.24775999593112 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 37.075022182362964,
            "unit": "iter/sec",
            "range": "stddev: 0.0007810013264229706",
            "extra": "mean: 26.97233719999531 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5209.7312779898875,
            "unit": "iter/sec",
            "range": "stddev: 0.000023213793541472817",
            "extra": "mean: 191.9484799964266 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 37.62727551052249,
            "unit": "iter/sec",
            "range": "stddev: 0.0011247902480085782",
            "extra": "mean: 26.576465779999126 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5304.187178351823,
            "unit": "iter/sec",
            "range": "stddev: 0.000023953045696650893",
            "extra": "mean: 188.5303000017302 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 37.568695863145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006708487896396501",
            "extra": "mean: 26.6179055999919 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5482.996023141886,
            "unit": "iter/sec",
            "range": "stddev: 0.00002468400034673863",
            "extra": "mean: 182.3820399977194 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 37.9961754797589,
            "unit": "iter/sec",
            "range": "stddev: 0.00027280801704476527",
            "extra": "mean: 26.318438299999798 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3113.8669525757973,
            "unit": "iter/sec",
            "range": "stddev: 0.000021284051136205325",
            "extra": "mean: 321.1440999984916 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.03324691598648,
            "unit": "iter/sec",
            "range": "stddev: 0.0002274361294182949",
            "extra": "mean: 52.539643099994464 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10497.12273823426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036708996124169263",
            "extra": "mean: 95.2642000038395 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 184.23078986082183,
            "unit": "iter/sec",
            "range": "stddev: 0.00012946914719463788",
            "extra": "mean: 5.4279743399865765 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 10902.267279824926,
            "unit": "iter/sec",
            "range": "stddev: 0.000004801636237360139",
            "extra": "mean: 91.72403999400558 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 200.27520536994402,
            "unit": "iter/sec",
            "range": "stddev: 0.00017736413606502186",
            "extra": "mean: 4.993129319991567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9975.619586133273,
            "unit": "iter/sec",
            "range": "stddev: 0.000022430387263970692",
            "extra": "mean: 100.24439999597234 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 40.729026538697354,
            "unit": "iter/sec",
            "range": "stddev: 0.0005633096654526147",
            "extra": "mean: 24.55251414000486 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 79.70403062342807,
            "unit": "iter/sec",
            "range": "stddev: 0.0005317284418779182",
            "extra": "mean: 12.54641693999929 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 7904.790904240324,
            "unit": "iter/sec",
            "range": "stddev: 0.000028293253401096552",
            "extra": "mean: 126.50555999698554 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 192.79599413709175,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389461751721718",
            "extra": "mean: 5.186829760004912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 10576.3944604207,
            "unit": "iter/sec",
            "range": "stddev: 0.000022922383018148358",
            "extra": "mean: 94.55018000153359 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 199.5002884852957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000704452963872869",
            "extra": "mean: 5.0125240800025495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10731.44683121006,
            "unit": "iter/sec",
            "range": "stddev: 0.000003777050438634848",
            "extra": "mean: 93.18407999671763 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 35.07823495585904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005412311682771793",
            "extra": "mean: 28.50770573999398 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 80.64380543383528,
            "unit": "iter/sec",
            "range": "stddev: 0.0001824320157264002",
            "extra": "mean: 12.400208479998582 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9479.875267575882,
            "unit": "iter/sec",
            "range": "stddev: 0.00002780239513641621",
            "extra": "mean: 105.48662000019249 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 192.81710992086627,
            "unit": "iter/sec",
            "range": "stddev: 0.000058984936642139415",
            "extra": "mean: 5.186261740000191 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 10495.802832911926,
            "unit": "iter/sec",
            "range": "stddev: 0.000016850686220695718",
            "extra": "mean: 95.27618000447546 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 200.35827505752394,
            "unit": "iter/sec",
            "range": "stddev: 0.00011813138534674483",
            "extra": "mean: 4.99105913999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11157.48409448864,
            "unit": "iter/sec",
            "range": "stddev: 0.000004260557987700825",
            "extra": "mean: 89.62593999967794 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 29.881643495553032,
            "unit": "iter/sec",
            "range": "stddev: 0.00047367200716631123",
            "extra": "mean: 33.46536144000311 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 81.29995149303653,
            "unit": "iter/sec",
            "range": "stddev: 0.00014308022279997066",
            "extra": "mean: 12.300130339999669 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5320.8969076350595,
            "unit": "iter/sec",
            "range": "stddev: 0.000010362911234329907",
            "extra": "mean: 187.93823999203596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 95.3671527903646,
            "unit": "iter/sec",
            "range": "stddev: 0.00026346575120045015",
            "extra": "mean: 10.48579066000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5758.788977374355,
            "unit": "iter/sec",
            "range": "stddev: 0.00001744441587984845",
            "extra": "mean: 173.64761999942857 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 96.54713648438181,
            "unit": "iter/sec",
            "range": "stddev: 0.00031416150871620314",
            "extra": "mean: 10.357634999995753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5499.159233526134,
            "unit": "iter/sec",
            "range": "stddev: 0.000005966501862608739",
            "extra": "mean: 181.8459800006167 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.823106601517784,
            "unit": "iter/sec",
            "range": "stddev: 0.0008901228405817884",
            "extra": "mean: 67.46224168000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 39.69076345122752,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390366545702704",
            "extra": "mean: 25.19477865999761 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2404.8513354729,
            "unit": "iter/sec",
            "range": "stddev: 0.000042263482594140856",
            "extra": "mean: 415.82611999729124 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 46.66280258220533,
            "unit": "iter/sec",
            "range": "stddev: 0.0007169249243977798",
            "extra": "mean: 21.43034589999843 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2533.754936599637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000687782233596488",
            "extra": "mean: 394.67116000651004 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 48.56758348693673,
            "unit": "iter/sec",
            "range": "stddev: 0.0005054560670634838",
            "extra": "mean: 20.589865260003535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2800.699950855266,
            "unit": "iter/sec",
            "range": "stddev: 0.000024221820723894198",
            "extra": "mean: 357.05360000974906 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.422794598889119,
            "unit": "iter/sec",
            "range": "stddev: 0.0010739180539943549",
            "extra": "mean: 134.72014975999173 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.096805887910687,
            "unit": "iter/sec",
            "range": "stddev: 0.0007578702835847957",
            "extra": "mean: 49.75915105999775 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1078.08477463137,
            "unit": "iter/sec",
            "range": "stddev: 0.00006517711966091018",
            "extra": "mean: 927.570840003682 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 466.33516640675043,
            "unit": "iter/sec",
            "range": "stddev: 0.000024951682676671482",
            "extra": "mean: 2.144380419999834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1056.0222775072555,
            "unit": "iter/sec",
            "range": "stddev: 0.000028136316472575806",
            "extra": "mean: 946.9497200007027 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 47.70181221675263,
            "unit": "iter/sec",
            "range": "stddev: 0.00038293117409050816",
            "extra": "mean: 20.96356413999729 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1002.6089891052502,
            "unit": "iter/sec",
            "range": "stddev: 0.00002055209296733769",
            "extra": "mean: 997.3978000061834 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 460.3099113810875,
            "unit": "iter/sec",
            "range": "stddev: 0.000048584654063633645",
            "extra": "mean: 2.1724494199997935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 948.8311131307972,
            "unit": "iter/sec",
            "range": "stddev: 0.00007257708567681859",
            "extra": "mean: 1.053928339997583 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 38.91520119029117,
            "unit": "iter/sec",
            "range": "stddev: 0.0005309166952053297",
            "extra": "mean: 25.69689914000719 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 795.7290358070458,
            "unit": "iter/sec",
            "range": "stddev: 0.00004658237028898565",
            "extra": "mean: 1.256709199992656 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 412.9391373391872,
            "unit": "iter/sec",
            "range": "stddev: 0.000065374945749947",
            "extra": "mean: 2.4216643799945814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 796.6190468023133,
            "unit": "iter/sec",
            "range": "stddev: 0.000058201397298279556",
            "extra": "mean: 1.2553051599934406 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 32.572019911803345,
            "unit": "iter/sec",
            "range": "stddev: 0.0010538066847494327",
            "extra": "mean: 30.701196999993954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 398.8500101243898,
            "unit": "iter/sec",
            "range": "stddev: 0.000028260331695479355",
            "extra": "mean: 2.5072081600001184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 204.84614773995094,
            "unit": "iter/sec",
            "range": "stddev: 0.00007136838382811728",
            "extra": "mean: 4.881712500005051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 386.4107470344537,
            "unit": "iter/sec",
            "range": "stddev: 0.00006672870386306789",
            "extra": "mean: 2.587919740003599 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.274036977605896,
            "unit": "iter/sec",
            "range": "stddev: 0.000942491386195069",
            "extra": "mean: 61.447568379994664 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 199.42373003340228,
            "unit": "iter/sec",
            "range": "stddev: 0.00008449250741699105",
            "extra": "mean: 5.01444838000225 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 102.97213837538978,
            "unit": "iter/sec",
            "range": "stddev: 0.00021145740680898208",
            "extra": "mean: 9.711364800004958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 197.47982097856126,
            "unit": "iter/sec",
            "range": "stddev: 0.00014516308665275828",
            "extra": "mean: 5.063808520003477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.088731103715645,
            "unit": "iter/sec",
            "range": "stddev: 0.0012498915596825682",
            "extra": "mean: 123.62878517999434 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 52.236802556234316,
            "unit": "iter/sec",
            "range": "stddev: 0.0009251633343282247",
            "extra": "mean: 19.14359131999845 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 34.805413565811925,
            "unit": "iter/sec",
            "range": "stddev: 0.0013085230095731658",
            "extra": "mean: 28.731162699996275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 20.337097759144452,
            "unit": "iter/sec",
            "range": "stddev: 0.000624655505617136",
            "extra": "mean: 49.17122451999603 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.63729565350246,
            "unit": "iter/sec",
            "range": "stddev: 0.0007064161665235315",
            "extra": "mean: 94.00885644000482 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 503.3556557142264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006384932953153038",
            "extra": "mean: 1.9866668599979675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 232.33702924702803,
            "unit": "iter/sec",
            "range": "stddev: 0.00006384370420840072",
            "extra": "mean: 4.304092219999802 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 62.92759719189682,
            "unit": "iter/sec",
            "range": "stddev: 0.00010804482525374117",
            "extra": "mean: 15.891278939993756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 88.25002756357422,
            "unit": "iter/sec",
            "range": "stddev: 0.0005163845011265552",
            "extra": "mean: 11.33144121999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 163.84871777109063,
            "unit": "iter/sec",
            "range": "stddev: 0.00006014476885534784",
            "extra": "mean: 6.103190879998692 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 153.93571601386645,
            "unit": "iter/sec",
            "range": "stddev: 0.00022766276916256435",
            "extra": "mean: 6.496218200004478 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 141.5267657839433,
            "unit": "iter/sec",
            "range": "stddev: 0.00015564507326786388",
            "extra": "mean: 7.065801260000626 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.346170699528813,
            "unit": "iter/sec",
            "range": "stddev: 0.0011655706521526107",
            "extra": "mean: 46.846809860003304 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3266726897088497,
            "unit": "iter/sec",
            "range": "stddev: 0.006227108282581617",
            "extra": "mean: 753.7654221399998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.381443298806898,
            "unit": "iter/sec",
            "range": "stddev: 0.000583939857629753",
            "extra": "mean: 69.53405017999557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.318930264176373,
            "unit": "iter/sec",
            "range": "stddev: 0.0010366402137801168",
            "extra": "mean: 69.83761925999715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.318562430237126,
            "unit": "iter/sec",
            "range": "stddev: 0.0013799820064715317",
            "extra": "mean: 69.8394133400052 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80d2e8b45f2700f0b06866da5be208b01f6b2cb5",
          "message": "SEAL 3.7.0 (#319)\n\n* SEAL 3.7.0\r\n\r\n* bbreak\r\n\r\n* SEAL 3.7\r\n\r\n* master -> main\r\n\r\n* update version minor\r\n\r\n* debug long paths - windows\r\n\r\n* disable windows for now\r\n\r\n* disable windows for now\r\n\r\n* add pytest slow mark\r\n\r\n* pytest slow flag\r\n\r\n* re-enable windows flows\r\n\r\n* debug long paths for windows\r\n\r\n* long paths for windows\r\n\r\n* HEXL off\r\n\r\n* enable HEXL only for unix\r\n\r\n* bump version",
          "timestamp": "2021-09-15T14:42:19+01:00",
          "tree_id": "077b75ae8445d2c325d6a6718a6f5bf55d4e5bc6",
          "url": "https://github.com/OpenMined/TenSEAL/commit/80d2e8b45f2700f0b06866da5be208b01f6b2cb5"
        },
        "date": 1631714575257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9978329662737341,
            "unit": "iter/sec",
            "range": "stddev: 0.030050924942136525",
            "extra": "mean: 1.0021717399600039 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.30163733767841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002766176648570217",
            "extra": "mean: 11.723104399993645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.070783858120263,
            "unit": "iter/sec",
            "range": "stddev: 0.0013885876102250944",
            "extra": "mean: 325.64975140000115 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 82.06372112704081,
            "unit": "iter/sec",
            "range": "stddev: 0.00021163166382730142",
            "extra": "mean: 12.185652640000628 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.30372733376568484,
            "unit": "iter/sec",
            "range": "stddev: 0.011147418133499253",
            "extra": "mean: 3.292426755280003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 151.78135854023313,
            "unit": "iter/sec",
            "range": "stddev: 0.00021655777064140394",
            "extra": "mean: 6.588424359997589 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.964382140842905,
            "unit": "iter/sec",
            "range": "stddev: 0.004558940743527921",
            "extra": "mean: 337.33842416000243 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2524046970154187,
            "unit": "iter/sec",
            "range": "stddev: 0.01269204960967962",
            "extra": "mean: 3.961891406240006 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5502.423542584682,
            "unit": "iter/sec",
            "range": "stddev: 0.00003626866626451576",
            "extra": "mean: 181.7380999955276 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 32.192421945462854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005105229750244519",
            "extra": "mean: 31.063211140003663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6139.232890613806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528466830573548",
            "extra": "mean: 162.886799998887 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 31.490448448492447,
            "unit": "iter/sec",
            "range": "stddev: 0.0006722443314416959",
            "extra": "mean: 31.755660819999324 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5070.6575850583595,
            "unit": "iter/sec",
            "range": "stddev: 0.00006436720425221809",
            "extra": "mean: 197.2130800049854 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 31.58607738344333,
            "unit": "iter/sec",
            "range": "stddev: 0.0013483610713711314",
            "extra": "mean: 31.659518459996434 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 4598.917801005208,
            "unit": "iter/sec",
            "range": "stddev: 0.00004106978158002922",
            "extra": "mean: 217.44246000253042 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 32.27204374526712,
            "unit": "iter/sec",
            "range": "stddev: 0.00015662995200458208",
            "extra": "mean: 30.986571779999394 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3001.8484182122506,
            "unit": "iter/sec",
            "range": "stddev: 0.00005041154685624537",
            "extra": "mean: 333.12807999664074 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 15.943721657418354,
            "unit": "iter/sec",
            "range": "stddev: 0.0005353610295112428",
            "extra": "mean: 62.72061325999857 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11518.401798786706,
            "unit": "iter/sec",
            "range": "stddev: 0.00001428038727652952",
            "extra": "mean: 86.81759999944916 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 153.7228227347899,
            "unit": "iter/sec",
            "range": "stddev: 0.000125412597992117",
            "extra": "mean: 6.505214920007348 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11960.380522046975,
            "unit": "iter/sec",
            "range": "stddev: 0.000009046490783066449",
            "extra": "mean: 83.60937999896123 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 160.90259352481237,
            "unit": "iter/sec",
            "range": "stddev: 0.00012774339628268322",
            "extra": "mean: 6.214940220002063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11396.058149443481,
            "unit": "iter/sec",
            "range": "stddev: 0.000020157816503829128",
            "extra": "mean: 87.74963999712782 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 33.30137103263231,
            "unit": "iter/sec",
            "range": "stddev: 0.0009538997406584874",
            "extra": "mean: 30.02879367999867 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 70.1218884048395,
            "unit": "iter/sec",
            "range": "stddev: 0.00036755669316057847",
            "extra": "mean: 14.260882339999625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10420.552664946797,
            "unit": "iter/sec",
            "range": "stddev: 0.000007543939673716182",
            "extra": "mean: 95.96419999525097 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 149.92356476887772,
            "unit": "iter/sec",
            "range": "stddev: 0.0003291687782630325",
            "extra": "mean: 6.670065519997479 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12584.771017733414,
            "unit": "iter/sec",
            "range": "stddev: 0.000005805189174431715",
            "extra": "mean: 79.46111999899585 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 159.51757648083665,
            "unit": "iter/sec",
            "range": "stddev: 0.00006832697543003241",
            "extra": "mean: 6.268901660000665 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11509.39235482491,
            "unit": "iter/sec",
            "range": "stddev: 0.00001153910616562534",
            "extra": "mean: 86.88555999924574 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 28.132890074747195,
            "unit": "iter/sec",
            "range": "stddev: 0.00023903324845633037",
            "extra": "mean: 35.54558373999498 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 71.77574651042877,
            "unit": "iter/sec",
            "range": "stddev: 0.00024541806286683415",
            "extra": "mean: 13.932282820001092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12033.76095741382,
            "unit": "iter/sec",
            "range": "stddev: 0.000010662239984454623",
            "extra": "mean: 83.09953999741992 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 149.83964909968148,
            "unit": "iter/sec",
            "range": "stddev: 0.00030390786532649006",
            "extra": "mean: 6.673800999992636 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 7893.1320440769205,
            "unit": "iter/sec",
            "range": "stddev: 0.00007970039792948889",
            "extra": "mean: 126.69241999446967 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 160.0545271202511,
            "unit": "iter/sec",
            "range": "stddev: 0.00007711478053442436",
            "extra": "mean: 6.247870759998477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11941.21673244049,
            "unit": "iter/sec",
            "range": "stddev: 0.000014964303150510324",
            "extra": "mean: 83.74356000786065 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 24.255260031948573,
            "unit": "iter/sec",
            "range": "stddev: 0.0004443875633404078",
            "extra": "mean: 41.22817066000607 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 71.09105486477954,
            "unit": "iter/sec",
            "range": "stddev: 0.0003115914122926564",
            "extra": "mean: 14.06646732000354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5630.704818994467,
            "unit": "iter/sec",
            "range": "stddev: 0.000022921139728572486",
            "extra": "mean: 177.59765999926458 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 75.20930923745664,
            "unit": "iter/sec",
            "range": "stddev: 0.0003332290722714648",
            "extra": "mean: 13.296226359993852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5859.9060539526545,
            "unit": "iter/sec",
            "range": "stddev: 0.00001810796794144138",
            "extra": "mean: 170.65120000097522 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 79.89702117684122,
            "unit": "iter/sec",
            "range": "stddev: 0.00010468299531772323",
            "extra": "mean: 12.516111179998006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5982.472074739363,
            "unit": "iter/sec",
            "range": "stddev: 0.000016108179348428634",
            "extra": "mean: 167.15497999939544 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 11.979300965861244,
            "unit": "iter/sec",
            "range": "stddev: 0.0010484647702764486",
            "extra": "mean: 83.47732499999893 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 35.17209663977271,
            "unit": "iter/sec",
            "range": "stddev: 0.0003099217842440422",
            "extra": "mean: 28.431628919988725 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3011.3055250827488,
            "unit": "iter/sec",
            "range": "stddev: 0.000029137971172395818",
            "extra": "mean: 332.0818799920744 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 37.280840728535395,
            "unit": "iter/sec",
            "range": "stddev: 0.00041378131491215424",
            "extra": "mean: 26.8234294199965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2986.554174761214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000308224036671414",
            "extra": "mean: 334.8340399952576 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 38.476632430074716,
            "unit": "iter/sec",
            "range": "stddev: 0.0005574825189309469",
            "extra": "mean: 25.989800480001577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3012.3940737088956,
            "unit": "iter/sec",
            "range": "stddev: 0.000020640259739071226",
            "extra": "mean: 331.96187999692484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.024025219304925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005068107699906946",
            "extra": "mean: 166.0019610800009 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 17.42552578332522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005073735740256047",
            "extra": "mean: 57.38707758000146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1353.05418833237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003605928073530758",
            "extra": "mean: 739.0686999997342 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 393.33571610771247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000750935266085936",
            "extra": "mean: 2.5423574800061033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1274.0481687946371,
            "unit": "iter/sec",
            "range": "stddev: 0.00009916563054592024",
            "extra": "mean: 784.8996800066744 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 39.29385475713104,
            "unit": "iter/sec",
            "range": "stddev: 0.0004433406549295899",
            "extra": "mean: 25.449272059991017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1208.373759470946,
            "unit": "iter/sec",
            "range": "stddev: 0.00012337949477094108",
            "extra": "mean: 827.5585200044588 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 375.8732635339138,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270541924127344",
            "extra": "mean: 2.6604712200014546 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1176.592400156076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000668921938925084",
            "extra": "mean: 849.911999998767 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 31.29718416298374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008291195577050645",
            "extra": "mean: 31.951756260000366 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 928.5733056160352,
            "unit": "iter/sec",
            "range": "stddev: 0.000018691072460692738",
            "extra": "mean: 1.0769209000000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 353.09655723401295,
            "unit": "iter/sec",
            "range": "stddev: 0.00006875278992676438",
            "extra": "mean: 2.832086519997574 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 946.5613489765803,
            "unit": "iter/sec",
            "range": "stddev: 0.00003598080652016443",
            "extra": "mean: 1.0564555599921732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 26.897861460777232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003297283626449278",
            "extra": "mean: 37.17767680000179 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 452.9293367910244,
            "unit": "iter/sec",
            "range": "stddev: 0.00009234709539168586",
            "extra": "mean: 2.2078499200006263 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 173.46285578137827,
            "unit": "iter/sec",
            "range": "stddev: 0.00010779711140077051",
            "extra": "mean: 5.764922959992873 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 452.83785650587174,
            "unit": "iter/sec",
            "range": "stddev: 0.00012100243077907236",
            "extra": "mean: 2.208295939999516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.286861991415448,
            "unit": "iter/sec",
            "range": "stddev: 0.00113295815755505",
            "extra": "mean: 75.26231555999402 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 211.82249375013618,
            "unit": "iter/sec",
            "range": "stddev: 0.0004981524037495621",
            "extra": "mean: 4.720933939997849 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 84.68951236837067,
            "unit": "iter/sec",
            "range": "stddev: 0.0006873944194581088",
            "extra": "mean: 11.80783750000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 229.70784235931862,
            "unit": "iter/sec",
            "range": "stddev: 0.000189556654479846",
            "extra": "mean: 4.353355940002075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.68356090585722,
            "unit": "iter/sec",
            "range": "stddev: 0.001485440017430789",
            "extra": "mean: 149.62084046000655 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.400189806181466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589106938943277",
            "extra": "mean: 20.661076000001227 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 31.031576221346164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480157243236482",
            "extra": "mean: 32.225240279999525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 18.020905921769153,
            "unit": "iter/sec",
            "range": "stddev: 0.0005852995363786505",
            "extra": "mean: 55.491105959995366 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.300502404341977,
            "unit": "iter/sec",
            "range": "stddev: 0.0015615965327346129",
            "extra": "mean: 107.52107321999574 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 393.1377182258644,
            "unit": "iter/sec",
            "range": "stddev: 0.00013064779645997519",
            "extra": "mean: 2.5436379000029774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 185.7771489328691,
            "unit": "iter/sec",
            "range": "stddev: 0.00014847934126502592",
            "extra": "mean: 5.382793339999807 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 51.336963878622,
            "unit": "iter/sec",
            "range": "stddev: 0.0003427793417272725",
            "extra": "mean: 19.47914182000204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 70.44413626073353,
            "unit": "iter/sec",
            "range": "stddev: 0.0005836539648936427",
            "extra": "mean: 14.195645700001478 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 163.25281201834747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008304488839222374",
            "extra": "mean: 6.125468759996693 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 157.46078436816637,
            "unit": "iter/sec",
            "range": "stddev: 0.0001986803670529458",
            "extra": "mean: 6.350787619994662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 144.04359413695119,
            "unit": "iter/sec",
            "range": "stddev: 0.00015714799807693342",
            "extra": "mean: 6.942342739998821 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.84253172443861,
            "unit": "iter/sec",
            "range": "stddev: 0.0010361690781291355",
            "extra": "mean: 47.978816259997075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2821056101916561,
            "unit": "iter/sec",
            "range": "stddev: 0.012116340303885177",
            "extra": "mean: 779.9669481599994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 11.357786589860883,
            "unit": "iter/sec",
            "range": "stddev: 0.0024817075841022263",
            "extra": "mean: 88.04532397999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 11.514446298024213,
            "unit": "iter/sec",
            "range": "stddev: 0.00038572595527198577",
            "extra": "mean: 86.84742401999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 11.436327038450537,
            "unit": "iter/sec",
            "range": "stddev: 0.0011776986817228835",
            "extra": "mean: 87.44066137999198 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7872ac3a1c98c916295c29d995ee6a326b0b94f4",
          "message": "Disable docker action (#320)\n\n* master -> main\r\n\r\n* disable docker action\r\n\r\n* update README",
          "timestamp": "2021-09-15T17:26:10+01:00",
          "tree_id": "56a31b824d12e80e8f68e3b6f997d01cb6f5c29c",
          "url": "https://github.com/OpenMined/TenSEAL/commit/7872ac3a1c98c916295c29d995ee6a326b0b94f4"
        },
        "date": 1631724379093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.005541518877935,
            "unit": "iter/sec",
            "range": "stddev: 0.01192309872348047",
            "extra": "mean: 994.4890203199975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 82.17918178520496,
            "unit": "iter/sec",
            "range": "stddev: 0.000412658498039904",
            "extra": "mean: 12.168531960001017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.1728599191423803,
            "unit": "iter/sec",
            "range": "stddev: 0.0031337580277020142",
            "extra": "mean: 315.17306956000084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 84.89130698722148,
            "unit": "iter/sec",
            "range": "stddev: 0.000286841935527031",
            "extra": "mean: 11.779769159998068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.31134049931440666,
            "unit": "iter/sec",
            "range": "stddev: 0.009988278488664312",
            "extra": "mean: 3.211917505759993 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 156.39094636302968,
            "unit": "iter/sec",
            "range": "stddev: 0.00004890970300677507",
            "extra": "mean: 6.394232039997405 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.0009198401489083,
            "unit": "iter/sec",
            "range": "stddev: 0.0012307081793670985",
            "extra": "mean: 333.2311601999936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2576457413474243,
            "unit": "iter/sec",
            "range": "stddev: 0.01211638623639358",
            "extra": "mean: 3.8812983857999916 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5938.196439023977,
            "unit": "iter/sec",
            "range": "stddev: 0.000014097956896903553",
            "extra": "mean: 168.40130000218778 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 32.392395424677034,
            "unit": "iter/sec",
            "range": "stddev: 0.00041290293912683466",
            "extra": "mean: 30.87144334000641 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6165.941263957943,
            "unit": "iter/sec",
            "range": "stddev: 0.000014172939684046145",
            "extra": "mean: 162.1812400071576 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 32.90221376194898,
            "unit": "iter/sec",
            "range": "stddev: 0.0002608283867010782",
            "extra": "mean: 30.393091700002515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6093.205076834118,
            "unit": "iter/sec",
            "range": "stddev: 0.000013555990812426757",
            "extra": "mean: 164.11724000590766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 33.59673748908849,
            "unit": "iter/sec",
            "range": "stddev: 0.0003774781550697416",
            "extra": "mean: 29.764794880002228 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5420.776970634504,
            "unit": "iter/sec",
            "range": "stddev: 0.000035722780427137365",
            "extra": "mean: 184.47540000579465 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 33.37794805660708,
            "unit": "iter/sec",
            "range": "stddev: 0.0004896223486534937",
            "extra": "mean: 29.959900420003578 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3317.64859659592,
            "unit": "iter/sec",
            "range": "stddev: 0.000025188032846159844",
            "extra": "mean: 301.41830000502523 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.079972205806143,
            "unit": "iter/sec",
            "range": "stddev: 0.001979039341043464",
            "extra": "mean: 62.18916222000189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10777.866659454063,
            "unit": "iter/sec",
            "range": "stddev: 0.000007889270956086395",
            "extra": "mean: 92.78273999825615 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 153.37359375845134,
            "unit": "iter/sec",
            "range": "stddev: 0.00008654162606933687",
            "extra": "mean: 6.5200271800040355 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 10317.068268638957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064243000037268675",
            "extra": "mean: 96.92676000213396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 156.37044922506527,
            "unit": "iter/sec",
            "range": "stddev: 0.0003710178558215052",
            "extra": "mean: 6.395070200001101 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 10125.887052248077,
            "unit": "iter/sec",
            "range": "stddev: 0.000013457030697660973",
            "extra": "mean: 98.75678000753396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 32.790104675134074,
            "unit": "iter/sec",
            "range": "stddev: 0.001079848094058838",
            "extra": "mean: 30.497005420002097 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 68.77178891433098,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601053740859161",
            "extra": "mean: 14.540846119994058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11876.961332271201,
            "unit": "iter/sec",
            "range": "stddev: 0.000005352562023024518",
            "extra": "mean: 84.19661999596428 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 152.55084462430796,
            "unit": "iter/sec",
            "range": "stddev: 0.00004162276050572762",
            "extra": "mean: 6.5551915000060035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11272.602413593924,
            "unit": "iter/sec",
            "range": "stddev: 0.000005743820681698632",
            "extra": "mean: 88.71065999755956 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 152.235928665595,
            "unit": "iter/sec",
            "range": "stddev: 0.00009739576048836466",
            "extra": "mean: 6.5687516000025425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10396.443418082683,
            "unit": "iter/sec",
            "range": "stddev: 0.000007439299109023007",
            "extra": "mean: 96.18674000194005 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 28.252669634450463,
            "unit": "iter/sec",
            "range": "stddev: 0.00047022680020398133",
            "extra": "mean: 35.394885259997864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 71.53862051487698,
            "unit": "iter/sec",
            "range": "stddev: 0.00021566897239937242",
            "extra": "mean: 13.978463560001728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10171.412716308503,
            "unit": "iter/sec",
            "range": "stddev: 0.000006995618368299779",
            "extra": "mean: 98.31475999362738 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 153.37467490427267,
            "unit": "iter/sec",
            "range": "stddev: 0.000092698797037115",
            "extra": "mean: 6.519981220003502 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11727.91609834941,
            "unit": "iter/sec",
            "range": "stddev: 0.000011318725787561916",
            "extra": "mean: 85.26664000783057 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 160.83792855062657,
            "unit": "iter/sec",
            "range": "stddev: 0.00014192448989490148",
            "extra": "mean: 6.217438940002466 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9310.049024379608,
            "unit": "iter/sec",
            "range": "stddev: 0.000019958922079656418",
            "extra": "mean: 107.41082000549795 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 24.574684848049912,
            "unit": "iter/sec",
            "range": "stddev: 0.00022618200811477793",
            "extra": "mean: 40.69228175999797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 73.13267153863235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459817183554208",
            "extra": "mean: 13.673779159998958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5604.712621656795,
            "unit": "iter/sec",
            "range": "stddev: 0.000023702417612751025",
            "extra": "mean: 178.42128000211233 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 78.90506359576084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002062471588958547",
            "extra": "mean: 12.673457880005117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5961.777138914531,
            "unit": "iter/sec",
            "range": "stddev: 0.000020010770389678503",
            "extra": "mean: 167.7352200022142 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 82.27260538435645,
            "unit": "iter/sec",
            "range": "stddev: 0.0001477451778679412",
            "extra": "mean: 12.154714140001488 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5779.903806199685,
            "unit": "iter/sec",
            "range": "stddev: 0.000016449518479540552",
            "extra": "mean: 173.0132600005163 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 12.187735502775578,
            "unit": "iter/sec",
            "range": "stddev: 0.00116856510826951",
            "extra": "mean: 82.04969657999754 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 34.7888442844141,
            "unit": "iter/sec",
            "range": "stddev: 0.00030114486491484085",
            "extra": "mean: 28.744846819990926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2893.6980348951865,
            "unit": "iter/sec",
            "range": "stddev: 0.00003517899487573322",
            "extra": "mean: 345.5785600090166 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 37.845510407502104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005083515163215489",
            "extra": "mean: 26.423213459997896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3200.508599199831,
            "unit": "iter/sec",
            "range": "stddev: 0.00003911113052442976",
            "extra": "mean: 312.45034000221494 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 39.096658995309326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005808911476420029",
            "extra": "mean: 25.577633120005885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3036.445299067829,
            "unit": "iter/sec",
            "range": "stddev: 0.000024833044612604654",
            "extra": "mean: 329.33246000084176 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.0791042819757655,
            "unit": "iter/sec",
            "range": "stddev: 0.0017063180055912224",
            "extra": "mean: 164.49791838000692 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 17.63293713938613,
            "unit": "iter/sec",
            "range": "stddev: 0.0006757667000540379",
            "extra": "mean: 56.71204927999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1438.2792794899333,
            "unit": "iter/sec",
            "range": "stddev: 0.00003135844822778928",
            "extra": "mean: 695.2752600000167 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 408.980127157671,
            "unit": "iter/sec",
            "range": "stddev: 0.000054244790668506265",
            "extra": "mean: 2.4451065799939897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1428.2993987736888,
            "unit": "iter/sec",
            "range": "stddev: 0.000025795681827616156",
            "extra": "mean: 700.1333199877989 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 39.207088482887166,
            "unit": "iter/sec",
            "range": "stddev: 0.00032351141931643147",
            "extra": "mean: 25.50559194000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1262.5943151663837,
            "unit": "iter/sec",
            "range": "stddev: 0.00003951142256768108",
            "extra": "mean: 792.0200399985333 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 390.1791136728359,
            "unit": "iter/sec",
            "range": "stddev: 0.000025472047231970914",
            "extra": "mean: 2.5629255000012563 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1217.406586502307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004985542180645168",
            "extra": "mean: 821.4182600022468 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 31.847108259989213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006859926475826175",
            "extra": "mean: 31.400025140001162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 926.3373912755167,
            "unit": "iter/sec",
            "range": "stddev: 0.00008243858054462211",
            "extra": "mean: 1.0795202799954495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 325.2737459936459,
            "unit": "iter/sec",
            "range": "stddev: 0.00044258698415084634",
            "extra": "mean: 3.074333579997983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 883.2106998204705,
            "unit": "iter/sec",
            "range": "stddev: 0.00006166474261347464",
            "extra": "mean: 1.132232660002046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 27.24943448090304,
            "unit": "iter/sec",
            "range": "stddev: 0.0003149960206884994",
            "extra": "mean: 36.69800930000292 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 478.75111528583466,
            "unit": "iter/sec",
            "range": "stddev: 0.00007033895874132073",
            "extra": "mean: 2.0887679800034675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 176.99643527403109,
            "unit": "iter/sec",
            "range": "stddev: 0.00007395044769270063",
            "extra": "mean: 5.649831300002006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 475.7989389775856,
            "unit": "iter/sec",
            "range": "stddev: 0.00010986952695307922",
            "extra": "mean: 2.10172810000131 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.472493720851016,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954872401457319",
            "extra": "mean: 74.22530830000142 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 224.67693759329043,
            "unit": "iter/sec",
            "range": "stddev: 0.000052182747555722446",
            "extra": "mean: 4.450835099996766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 88.06878019549679,
            "unit": "iter/sec",
            "range": "stddev: 0.0001801751880280665",
            "extra": "mean: 11.354761560000952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 222.19252150082824,
            "unit": "iter/sec",
            "range": "stddev: 0.00012635156531476586",
            "extra": "mean: 4.500601520003329 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.722067164888842,
            "unit": "iter/sec",
            "range": "stddev: 0.001052849096691669",
            "extra": "mean: 148.763762020003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.95964528555837,
            "unit": "iter/sec",
            "range": "stddev: 0.0008644372831102102",
            "extra": "mean: 20.424984580004093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 30.63377081734241,
            "unit": "iter/sec",
            "range": "stddev: 0.001092916403357176",
            "extra": "mean: 32.64371225999639 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 18.591365105724048,
            "unit": "iter/sec",
            "range": "stddev: 0.001016983471294792",
            "extra": "mean: 53.7884116800069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.543030565199505,
            "unit": "iter/sec",
            "range": "stddev: 0.0015061688752920123",
            "extra": "mean: 104.78851484000188 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 404.3117617583943,
            "unit": "iter/sec",
            "range": "stddev: 0.00011223437653013269",
            "extra": "mean: 2.473338880004121 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 192.01591378751363,
            "unit": "iter/sec",
            "range": "stddev: 0.00007990248013959849",
            "extra": "mean: 5.207901679996212 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 51.54987386684531,
            "unit": "iter/sec",
            "range": "stddev: 0.00038481353315478444",
            "extra": "mean: 19.398689559998274 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 73.79591856206973,
            "unit": "iter/sec",
            "range": "stddev: 0.00017660702749999806",
            "extra": "mean: 13.550884919995951 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 164.94703717226326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001783378759721765",
            "extra": "mean: 6.062552060002417 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.9491609026164,
            "unit": "iter/sec",
            "range": "stddev: 0.0001001777328058447",
            "extra": "mean: 6.291319779993501 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 150.54517435846617,
            "unit": "iter/sec",
            "range": "stddev: 0.00005775967788622562",
            "extra": "mean: 6.6425244399988514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.63874875910135,
            "unit": "iter/sec",
            "range": "stddev: 0.0005495025862032314",
            "extra": "mean: 46.213392980007484 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3220079543910381,
            "unit": "iter/sec",
            "range": "stddev: 0.007882516111080444",
            "extra": "mean: 756.4251006799986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 11.451192630123483,
            "unit": "iter/sec",
            "range": "stddev: 0.0008502766474462216",
            "extra": "mean: 87.32714856000257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 11.578051362525112,
            "unit": "iter/sec",
            "range": "stddev: 0.0011176769626907142",
            "extra": "mean: 86.3703199000065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 11.568216906440005,
            "unit": "iter/sec",
            "range": "stddev: 0.0009446586025125295",
            "extra": "mean: 86.44374565999898 msec\nrounds: 5"
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
          "id": "79421836217c1b7c060f66ce06eff69318a789dc",
          "message": "Benchmarks review",
          "timestamp": "2021-09-15T16:26:14Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/321/commits/79421836217c1b7c060f66ce06eff69318a789dc"
        },
        "date": 1631726305397,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0030721922173569,
            "unit": "iter/sec",
            "range": "stddev: 0.016076065579517337",
            "extra": "mean: 996.9372172400017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 93.320084867613,
            "unit": "iter/sec",
            "range": "stddev: 0.00026562673589825014",
            "extra": "mean: 10.715806799989878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.764352673619813,
            "unit": "iter/sec",
            "range": "stddev: 0.0057970223066836106",
            "extra": "mean: 265.64992356000397 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 106.62464961708137,
            "unit": "iter/sec",
            "range": "stddev: 0.00033221853218417684",
            "extra": "mean: 9.37869435999346 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.37397256701960807,
            "unit": "iter/sec",
            "range": "stddev: 0.03180538730167953",
            "extra": "mean: 2.673992929400001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 213.30932437321704,
            "unit": "iter/sec",
            "range": "stddev: 0.00020681480277257765",
            "extra": "mean: 4.688027600004716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.6654813119326177,
            "unit": "iter/sec",
            "range": "stddev: 0.002063059854113066",
            "extra": "mean: 272.81546811999755 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3092751103364227,
            "unit": "iter/sec",
            "range": "stddev: 0.0314215184719061",
            "extra": "mean: 3.23336720796 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5912.164159501897,
            "unit": "iter/sec",
            "range": "stddev: 0.000038849335760287487",
            "extra": "mean: 169.14280000037252 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 40.29400446215379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936878678608922",
            "extra": "mean: 24.817587959996672 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6109.8372778809035,
            "unit": "iter/sec",
            "range": "stddev: 0.000026396734103278816",
            "extra": "mean: 163.6704800012012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.756550982694925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535331051478432",
            "extra": "mean: 25.153087359999518 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6050.830851437496,
            "unit": "iter/sec",
            "range": "stddev: 0.000024001611386391332",
            "extra": "mean: 165.26656000678486 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 39.99386075040862,
            "unit": "iter/sec",
            "range": "stddev: 0.0007343502229553284",
            "extra": "mean: 25.003837619997284 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6415.186234293558,
            "unit": "iter/sec",
            "range": "stddev: 0.000007586793036496778",
            "extra": "mean: 155.8801199962545 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 39.617796342639,
            "unit": "iter/sec",
            "range": "stddev: 0.0005185249772649481",
            "extra": "mean: 25.24118180000187 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3369.6200983262534,
            "unit": "iter/sec",
            "range": "stddev: 0.000010122914159405118",
            "extra": "mean: 296.7693599930499 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.125381359321544,
            "unit": "iter/sec",
            "range": "stddev: 0.00111244234283619",
            "extra": "mean: 49.6884994200036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 8033.904362014521,
            "unit": "iter/sec",
            "range": "stddev: 0.00005109678563486605",
            "extra": "mean: 124.47247999716637 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 206.89606430573212,
            "unit": "iter/sec",
            "range": "stddev: 0.00007162036020488497",
            "extra": "mean: 4.833344719995693 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11772.409192835144,
            "unit": "iter/sec",
            "range": "stddev: 0.000007679360070339927",
            "extra": "mean: 84.94438000070659 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 212.06494293791238,
            "unit": "iter/sec",
            "range": "stddev: 0.00012760932587919854",
            "extra": "mean: 4.7155365999969945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9771.419146476801,
            "unit": "iter/sec",
            "range": "stddev: 0.000022370376219205516",
            "extra": "mean: 102.33927999706795 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 43.08542311766032,
            "unit": "iter/sec",
            "range": "stddev: 0.0010562162149660471",
            "extra": "mean: 23.209705920007764 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 84.1772793031033,
            "unit": "iter/sec",
            "range": "stddev: 0.0003679402617388295",
            "extra": "mean: 11.879690200003097 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10428.07672111763,
            "unit": "iter/sec",
            "range": "stddev: 0.000027385821830422528",
            "extra": "mean: 95.89495999534847 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 202.00613259932166,
            "unit": "iter/sec",
            "range": "stddev: 0.00023301892915906906",
            "extra": "mean: 4.95034475999546 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12319.482621514475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072304675058728656",
            "extra": "mean: 81.17223999761336 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 199.76349360739488,
            "unit": "iter/sec",
            "range": "stddev: 0.000520510911485942",
            "extra": "mean: 5.0059196600022915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10359.795704763686,
            "unit": "iter/sec",
            "range": "stddev: 0.000006348521069341995",
            "extra": "mean: 96.52700000060577 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 37.00045876721404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006983479884932363",
            "extra": "mean: 27.026691919995756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 87.4966969777812,
            "unit": "iter/sec",
            "range": "stddev: 0.00041197679657915674",
            "extra": "mean: 11.429002860004402 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10258.613489950152,
            "unit": "iter/sec",
            "range": "stddev: 0.000004016746060598842",
            "extra": "mean: 97.4790600093911 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 207.1581261468048,
            "unit": "iter/sec",
            "range": "stddev: 0.00027930140672242145",
            "extra": "mean: 4.8272303800013106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11774.898789536917,
            "unit": "iter/sec",
            "range": "stddev: 0.000006501380813721953",
            "extra": "mean: 84.92641999509942 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 208.08262411632927,
            "unit": "iter/sec",
            "range": "stddev: 0.00015109729627726048",
            "extra": "mean: 4.805783300007533 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 10929.112248085808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027422004127035998",
            "extra": "mean: 91.4987399983147 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 31.783550400984897,
            "unit": "iter/sec",
            "range": "stddev: 0.000726838372213202",
            "extra": "mean: 31.4628160600023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 87.26400655849856,
            "unit": "iter/sec",
            "range": "stddev: 0.0003383537285240071",
            "extra": "mean: 11.459478420001687 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5042.75601537054,
            "unit": "iter/sec",
            "range": "stddev: 0.000040075868763088106",
            "extra": "mean: 198.30426000225998 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 104.75709226100595,
            "unit": "iter/sec",
            "range": "stddev: 0.00029636616512720743",
            "extra": "mean: 9.545893059998889 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6568.0633960284595,
            "unit": "iter/sec",
            "range": "stddev: 0.000006770374393748154",
            "extra": "mean: 152.25187999931222 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 104.65887386184139,
            "unit": "iter/sec",
            "range": "stddev: 0.00035947673502362016",
            "extra": "mean: 9.5548515199971 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5781.251102221231,
            "unit": "iter/sec",
            "range": "stddev: 0.00001571310568311444",
            "extra": "mean: 172.97293999490648 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.495137907581015,
            "unit": "iter/sec",
            "range": "stddev: 0.0016430489521185182",
            "extra": "mean: 64.53637302000061 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.85381397292189,
            "unit": "iter/sec",
            "range": "stddev: 0.0019409575089626993",
            "extra": "mean: 23.892685159994468 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2849.6344773836286,
            "unit": "iter/sec",
            "range": "stddev: 0.000013430595069377326",
            "extra": "mean: 350.922200000241 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 51.33264758255451,
            "unit": "iter/sec",
            "range": "stddev: 0.00018121608630603797",
            "extra": "mean: 19.480779719997372 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3206.339009137063,
            "unit": "iter/sec",
            "range": "stddev: 0.00002899706468027403",
            "extra": "mean: 311.882180003522 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 51.9991038308189,
            "unit": "iter/sec",
            "range": "stddev: 0.0007065991330550182",
            "extra": "mean: 19.23110065999481 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2922.389631017836,
            "unit": "iter/sec",
            "range": "stddev: 0.000010310036607389804",
            "extra": "mean: 342.18571999645064 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.890287599873398,
            "unit": "iter/sec",
            "range": "stddev: 0.0013526540665326327",
            "extra": "mean: 126.7380925400039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.230114604039176,
            "unit": "iter/sec",
            "range": "stddev: 0.0014404460362927645",
            "extra": "mean: 47.10290164000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1121.3902224427545,
            "unit": "iter/sec",
            "range": "stddev: 0.00003756413361919661",
            "extra": "mean: 891.7502400026933 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 504.719959360629,
            "unit": "iter/sec",
            "range": "stddev: 0.00007573007261395071",
            "extra": "mean: 1.9812967200005007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1024.205436275761,
            "unit": "iter/sec",
            "range": "stddev: 0.00007945953187998675",
            "extra": "mean: 976.3666199978616 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 50.75996489530092,
            "unit": "iter/sec",
            "range": "stddev: 0.0006203459758194292",
            "extra": "mean: 19.700565240000287 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 972.0786543009646,
            "unit": "iter/sec",
            "range": "stddev: 0.00006422807489509204",
            "extra": "mean: 1.0287233400049445 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 476.61427252474215,
            "unit": "iter/sec",
            "range": "stddev: 0.00009710296762297156",
            "extra": "mean: 2.098132719993373 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1080.6885282748508,
            "unit": "iter/sec",
            "range": "stddev: 0.000038344590116266736",
            "extra": "mean: 925.3360000002431 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 39.49296461348135,
            "unit": "iter/sec",
            "range": "stddev: 0.001084214804242544",
            "extra": "mean: 25.32096564000767 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 798.7060961221008,
            "unit": "iter/sec",
            "range": "stddev: 0.000058075305919594346",
            "extra": "mean: 1.2520250000034139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 427.3147374389241,
            "unit": "iter/sec",
            "range": "stddev: 0.00012786811311195522",
            "extra": "mean: 2.34019544000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 815.9711002560135,
            "unit": "iter/sec",
            "range": "stddev: 0.00005200261004223139",
            "extra": "mean: 1.22553360000893 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 33.507996198433254,
            "unit": "iter/sec",
            "range": "stddev: 0.0014869519841504248",
            "extra": "mean: 29.843622819998927 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 384.7647147601368,
            "unit": "iter/sec",
            "range": "stddev: 0.00026602620745215267",
            "extra": "mean: 2.5989909200052352 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 220.10743972404867,
            "unit": "iter/sec",
            "range": "stddev: 0.00010187733481272298",
            "extra": "mean: 4.543235799997092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 426.8685474864394,
            "unit": "iter/sec",
            "range": "stddev: 0.00005235572322916848",
            "extra": "mean: 2.342641560003358 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.384811631644336,
            "unit": "iter/sec",
            "range": "stddev: 0.001097338325413211",
            "extra": "mean: 57.52147455999875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 210.02766148290357,
            "unit": "iter/sec",
            "range": "stddev: 0.0001543188132760341",
            "extra": "mean: 4.761277600005087 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 109.2880449328566,
            "unit": "iter/sec",
            "range": "stddev: 0.0001492992888440439",
            "extra": "mean: 9.150131660003353 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 214.1674913827773,
            "unit": "iter/sec",
            "range": "stddev: 0.00007747523880439381",
            "extra": "mean: 4.669242720001421 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.610696868710756,
            "unit": "iter/sec",
            "range": "stddev: 0.0027847312115720185",
            "extra": "mean: 116.13461897999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 53.797955372324395,
            "unit": "iter/sec",
            "range": "stddev: 0.000517530009679809",
            "extra": "mean: 18.588067020004928 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 36.45648782996793,
            "unit": "iter/sec",
            "range": "stddev: 0.0008969876402350294",
            "extra": "mean: 27.42995992000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 20.967579026863827,
            "unit": "iter/sec",
            "range": "stddev: 0.0005845014184918184",
            "extra": "mean: 47.692678240000525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.130914246797982,
            "unit": "iter/sec",
            "range": "stddev: 0.001956983731280073",
            "extra": "mean: 89.83987997999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 545.7128660821546,
            "unit": "iter/sec",
            "range": "stddev: 0.000041143631383854646",
            "extra": "mean: 1.8324654999969425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 249.21863478301975,
            "unit": "iter/sec",
            "range": "stddev: 0.00012471737400970154",
            "extra": "mean: 4.012541040001452 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 66.0519745735502,
            "unit": "iter/sec",
            "range": "stddev: 0.0005172209555802054",
            "extra": "mean: 15.139592819991776 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 89.38834423619619,
            "unit": "iter/sec",
            "range": "stddev: 0.00042400364849113503",
            "extra": "mean: 11.18714087999706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 176.94679035203353,
            "unit": "iter/sec",
            "range": "stddev: 0.00009291446076934392",
            "extra": "mean: 5.651416439995955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 167.12923191292498,
            "unit": "iter/sec",
            "range": "stddev: 0.00012815850330700313",
            "extra": "mean: 5.983393740007159 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 156.39072232681954,
            "unit": "iter/sec",
            "range": "stddev: 0.00013964149548398145",
            "extra": "mean: 6.394241200000579 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.892119236344538,
            "unit": "iter/sec",
            "range": "stddev: 0.002164835734807737",
            "extra": "mean: 45.6785379799976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3591451516500737,
            "unit": "iter/sec",
            "range": "stddev: 0.013330948494542735",
            "extra": "mean: 735.7565884599944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.02334970776544,
            "unit": "iter/sec",
            "range": "stddev: 0.000622883042404101",
            "extra": "mean: 66.56305147999774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.773868069855174,
            "unit": "iter/sec",
            "range": "stddev: 0.001707760409980796",
            "extra": "mean: 67.68708068000251 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.0940534940682,
            "unit": "iter/sec",
            "range": "stddev: 0.0013367807760216314",
            "extra": "mean: 66.2512558599974 msec\nrounds: 5"
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
          "id": "ea53463accae286b53ad2921e821ad235273e266",
          "message": "Benchmarks review",
          "timestamp": "2021-09-15T16:26:14Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/321/commits/ea53463accae286b53ad2921e821ad235273e266"
        },
        "date": 1631727943085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0175139715678858,
            "unit": "iter/sec",
            "range": "stddev: 0.021748311395525285",
            "extra": "mean: 982.7874878799959 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 80.21493109491986,
            "unit": "iter/sec",
            "range": "stddev: 0.0015331322150955115",
            "extra": "mean: 12.466507000008278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.009991926940475,
            "unit": "iter/sec",
            "range": "stddev: 0.01172098437921506",
            "extra": "mean: 332.22680467999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 73.9789183342258,
            "unit": "iter/sec",
            "range": "stddev: 0.0015160372143573485",
            "extra": "mean: 13.51736443999016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.300022534183704,
            "unit": "iter/sec",
            "range": "stddev: 0.021666288953695045",
            "extra": "mean: 3.3330829723200033 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 162.75506884870254,
            "unit": "iter/sec",
            "range": "stddev: 0.00015061147162630863",
            "extra": "mean: 6.144201880001674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.986065245721294,
            "unit": "iter/sec",
            "range": "stddev: 0.008833223753057081",
            "extra": "mean: 334.8888646799969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.24957181872002754,
            "unit": "iter/sec",
            "range": "stddev: 0.07450999073502101",
            "extra": "mean: 4.0068626543200025 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5921.548716879795,
            "unit": "iter/sec",
            "range": "stddev: 0.00001045926362424656",
            "extra": "mean: 168.8747400066859 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 32.462941490890465,
            "unit": "iter/sec",
            "range": "stddev: 0.002089222358055497",
            "extra": "mean: 30.80435580000085 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 7192.450114078876,
            "unit": "iter/sec",
            "range": "stddev: 0.000008895458851198665",
            "extra": "mean: 139.03467999625718 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 29.47909853911844,
            "unit": "iter/sec",
            "range": "stddev: 0.003209810140465804",
            "extra": "mean: 33.922339880000436 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7054.043709369643,
            "unit": "iter/sec",
            "range": "stddev: 0.000005192118565654314",
            "extra": "mean: 141.7626600004951 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 34.033279687577945,
            "unit": "iter/sec",
            "range": "stddev: 0.0011238578900526958",
            "extra": "mean: 29.383004200003597 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5955.9687146371425,
            "unit": "iter/sec",
            "range": "stddev: 0.00001846907041620841",
            "extra": "mean: 167.8987999957826 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 34.743952465377305,
            "unit": "iter/sec",
            "range": "stddev: 0.0010601740530302671",
            "extra": "mean: 28.78198733999852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3090.8505446563977,
            "unit": "iter/sec",
            "range": "stddev: 0.00002750011583019321",
            "extra": "mean: 323.5355399920081 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.90715530614314,
            "unit": "iter/sec",
            "range": "stddev: 0.0021827087020451497",
            "extra": "mean: 59.14655551999658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 13008.938961502694,
            "unit": "iter/sec",
            "range": "stddev: 0.000010005112521045492",
            "extra": "mean: 76.87022000482102 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 145.37977394077217,
            "unit": "iter/sec",
            "range": "stddev: 0.00036593841470354137",
            "extra": "mean: 6.878535939995344 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11228.350056607012,
            "unit": "iter/sec",
            "range": "stddev: 0.000023197210332060683",
            "extra": "mean: 89.06028000183142 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 152.4506222573025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002794762676500443",
            "extra": "mean: 6.559500939997633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11518.311581206375,
            "unit": "iter/sec",
            "range": "stddev: 0.000011549680641651226",
            "extra": "mean: 86.81828000135283 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 32.083557307846625,
            "unit": "iter/sec",
            "range": "stddev: 0.0007479205889566804",
            "extra": "mean: 31.168613579998237 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 66.11901476880595,
            "unit": "iter/sec",
            "range": "stddev: 0.0006696143910618237",
            "extra": "mean: 15.12424229998942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10371.475124574103,
            "unit": "iter/sec",
            "range": "stddev: 0.000006675119478777864",
            "extra": "mean: 96.41829999964102 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 153.07941766623986,
            "unit": "iter/sec",
            "range": "stddev: 0.00008965844325698349",
            "extra": "mean: 6.532556859997385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 10855.139680895627,
            "unit": "iter/sec",
            "range": "stddev: 0.00001802273462193758",
            "extra": "mean: 92.12225999817747 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 155.860507028262,
            "unit": "iter/sec",
            "range": "stddev: 0.000423918918721724",
            "extra": "mean: 6.415993499999786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11129.920676633437,
            "unit": "iter/sec",
            "range": "stddev: 0.000014765881967201818",
            "extra": "mean: 89.84790000340581 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 27.89903815723017,
            "unit": "iter/sec",
            "range": "stddev: 0.0008147387749725765",
            "extra": "mean: 35.84352959999251 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 70.57352657555141,
            "unit": "iter/sec",
            "range": "stddev: 0.0006554538033651145",
            "extra": "mean: 14.169619240005886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9586.451966218767,
            "unit": "iter/sec",
            "range": "stddev: 0.00002616970714286191",
            "extra": "mean: 104.31387999688012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 144.66546488830042,
            "unit": "iter/sec",
            "range": "stddev: 0.000303537384745292",
            "extra": "mean: 6.912499819995901 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 9655.5032312352,
            "unit": "iter/sec",
            "range": "stddev: 0.000011819455525171355",
            "extra": "mean: 103.56788000080996 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 151.58037287514978,
            "unit": "iter/sec",
            "range": "stddev: 0.00016357073738082684",
            "extra": "mean: 6.597160179990169 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11470.270778874261,
            "unit": "iter/sec",
            "range": "stddev: 0.000013641855438841218",
            "extra": "mean: 87.18189999854076 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 23.64295135873583,
            "unit": "iter/sec",
            "range": "stddev: 0.0008817401016171778",
            "extra": "mean: 42.295903959998206 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 69.65525539771912,
            "unit": "iter/sec",
            "range": "stddev: 0.00039551539046319827",
            "extra": "mean: 14.356418539996412 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6103.7011501608295,
            "unit": "iter/sec",
            "range": "stddev: 0.00001877847674732168",
            "extra": "mean: 163.83501999825967 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 75.66359526688379,
            "unit": "iter/sec",
            "range": "stddev: 0.00024189322705060973",
            "extra": "mean: 13.216395500012368 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 4406.618035273945,
            "unit": "iter/sec",
            "range": "stddev: 0.000025229368018079585",
            "extra": "mean: 226.93139999773848 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 76.74632223221515,
            "unit": "iter/sec",
            "range": "stddev: 0.00011624266015248354",
            "extra": "mean: 13.029940339997665 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5523.851105188828,
            "unit": "iter/sec",
            "range": "stddev: 0.00003768084026719426",
            "extra": "mean: 181.03312000221192 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 11.531677408290161,
            "unit": "iter/sec",
            "range": "stddev: 0.002170082090233135",
            "extra": "mean: 86.71765299999606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 34.52046432396675,
            "unit": "iter/sec",
            "range": "stddev: 0.00133947242996294",
            "extra": "mean: 28.96832414000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2817.791354285037,
            "unit": "iter/sec",
            "range": "stddev: 0.000054147987434297667",
            "extra": "mean: 354.8878799983868 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 37.23513704043514,
            "unit": "iter/sec",
            "range": "stddev: 0.0009461338748898072",
            "extra": "mean: 26.856353419998413 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3165.8938508772303,
            "unit": "iter/sec",
            "range": "stddev: 0.000036283045073103464",
            "extra": "mean: 315.86655999944924 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 39.32019822033334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008069080090038386",
            "extra": "mean: 25.43222173999311 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2987.527966924413,
            "unit": "iter/sec",
            "range": "stddev: 0.000020419489969907616",
            "extra": "mean: 334.724900008041 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.025583790011023,
            "unit": "iter/sec",
            "range": "stddev: 0.003492670244794332",
            "extra": "mean: 165.95902320000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 17.53228661748753,
            "unit": "iter/sec",
            "range": "stddev: 0.0015512031052708664",
            "extra": "mean: 57.03762559999177 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1331.4388201613685,
            "unit": "iter/sec",
            "range": "stddev: 0.00009583428287176292",
            "extra": "mean: 751.0671799991542 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 408.99045768798356,
            "unit": "iter/sec",
            "range": "stddev: 0.00015246761772158554",
            "extra": "mean: 2.4450448200013852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1303.6292203129503,
            "unit": "iter/sec",
            "range": "stddev: 0.00013025677557934907",
            "extra": "mean: 767.0892800024376 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 39.756718841348,
            "unit": "iter/sec",
            "range": "stddev: 0.0009933007072592931",
            "extra": "mean: 25.152981160003947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1139.9986256126992,
            "unit": "iter/sec",
            "range": "stddev: 0.000035442409437994004",
            "extra": "mean: 877.1940400038147 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 371.3644524905249,
            "unit": "iter/sec",
            "range": "stddev: 0.00013188750364196054",
            "extra": "mean: 2.692772540003716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1307.5839371638208,
            "unit": "iter/sec",
            "range": "stddev: 0.00007962993332380047",
            "extra": "mean: 764.7692599903166 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 32.81458307794299,
            "unit": "iter/sec",
            "range": "stddev: 0.0005918988378594999",
            "extra": "mean: 30.47425583999484 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 920.5869817240142,
            "unit": "iter/sec",
            "range": "stddev: 0.00006007052218820731",
            "extra": "mean: 1.0862634600016463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 318.50418002672933,
            "unit": "iter/sec",
            "range": "stddev: 0.00021208220541321917",
            "extra": "mean: 3.139676219998364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 849.2054358393796,
            "unit": "iter/sec",
            "range": "stddev: 0.00012278863699961728",
            "extra": "mean: 1.1775713599990922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 24.685997676679424,
            "unit": "iter/sec",
            "range": "stddev: 0.002701278659110957",
            "extra": "mean: 40.5087942199998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 408.9909996542058,
            "unit": "iter/sec",
            "range": "stddev: 0.0002682214659360022",
            "extra": "mean: 2.4450415799992697 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 168.29715078114492,
            "unit": "iter/sec",
            "range": "stddev: 0.00019326660339481872",
            "extra": "mean: 5.941871239997454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 454.35892368404535,
            "unit": "iter/sec",
            "range": "stddev: 0.00015074059207272273",
            "extra": "mean: 2.200903180005298 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.170181573542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722169496339427",
            "extra": "mean: 75.9290974400028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 220.83871478620796,
            "unit": "iter/sec",
            "range": "stddev: 0.00009991871763740722",
            "extra": "mean: 4.528191540002808 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 86.86138737112925,
            "unit": "iter/sec",
            "range": "stddev: 0.00023128929707822845",
            "extra": "mean: 11.512595299996065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 240.88336206934807,
            "unit": "iter/sec",
            "range": "stddev: 0.00012488080730899118",
            "extra": "mean: 4.151386760004242 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.541220879580229,
            "unit": "iter/sec",
            "range": "stddev: 0.003146051172056955",
            "extra": "mean: 152.8766599399978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.58624285004696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002296298803324443",
            "extra": "mean: 20.581957799995507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 31.10817379161556,
            "unit": "iter/sec",
            "range": "stddev: 0.000902989538172533",
            "extra": "mean: 32.145892160006035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 17.535215784478652,
            "unit": "iter/sec",
            "range": "stddev: 0.002145714863806659",
            "extra": "mean: 57.02809776000322 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.181507946093426,
            "unit": "iter/sec",
            "range": "stddev: 0.003997129866988344",
            "extra": "mean: 108.9145710999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 419.82419240755985,
            "unit": "iter/sec",
            "range": "stddev: 0.00005239762510644525",
            "extra": "mean: 2.381949439991331 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 187.58822438329972,
            "unit": "iter/sec",
            "range": "stddev: 0.0001885617589898498",
            "extra": "mean: 5.330825020000702 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 51.03637499734914,
            "unit": "iter/sec",
            "range": "stddev: 0.00047003468525629223",
            "extra": "mean: 19.593868099996143 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 70.93184997088791,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801284152560367",
            "extra": "mean: 14.098039180007618 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 162.38846251014544,
            "unit": "iter/sec",
            "range": "stddev: 0.00024115847392131595",
            "extra": "mean: 6.158072960001846 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 159.73864661639132,
            "unit": "iter/sec",
            "range": "stddev: 0.00015849590232650776",
            "extra": "mean: 6.260225820001324 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 146.7591206862636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002393246277772056",
            "extra": "mean: 6.813886559989442 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.532578130523202,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013441845409318",
            "extra": "mean: 46.44125723999878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.316187775969782,
            "unit": "iter/sec",
            "range": "stddev: 0.017926648308058978",
            "extra": "mean: 759.7700102199997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 11.098236458863141,
            "unit": "iter/sec",
            "range": "stddev: 0.0017904079789539903",
            "extra": "mean: 90.10440565999943 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 10.927678323269646,
            "unit": "iter/sec",
            "range": "stddev: 0.0022069951551452033",
            "extra": "mean: 91.51074641999458 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 11.125316909602995,
            "unit": "iter/sec",
            "range": "stddev: 0.0032548963709316653",
            "extra": "mean: 89.88507995999953 msec\nrounds: 5"
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
          "id": "065e3683f85d859b346da2238a0d744549a90cff",
          "message": "Benchmarks review",
          "timestamp": "2021-09-15T16:26:14Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/321/commits/065e3683f85d859b346da2238a0d744549a90cff"
        },
        "date": 1631730677302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.4062082442193908,
            "unit": "iter/sec",
            "range": "stddev: 0.01814097167295756",
            "extra": "mean: 711.1322267599962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 199.303215231999,
            "unit": "iter/sec",
            "range": "stddev: 0.00024802650162764577",
            "extra": "mean: 5.01748052000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 8.319114973096328,
            "unit": "iter/sec",
            "range": "stddev: 0.004607154518452458",
            "extra": "mean: 120.20509432000381 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 271.28999510434915,
            "unit": "iter/sec",
            "range": "stddev: 0.00013346323118293722",
            "extra": "mean: 3.6860924399934447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.7957711511202684,
            "unit": "iter/sec",
            "range": "stddev: 0.005621737320180745",
            "extra": "mean: 1.2566426900399983 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 439.38277054968194,
            "unit": "iter/sec",
            "range": "stddev: 0.0003326155458244655",
            "extra": "mean: 2.275919920002707 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 7.081753804329204,
            "unit": "iter/sec",
            "range": "stddev: 0.0057233540403674454",
            "extra": "mean: 141.20795887999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.6574754143350989,
            "unit": "iter/sec",
            "range": "stddev: 0.006890922214057941",
            "extra": "mean: 1.5209694205999995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 7356.9626222225,
            "unit": "iter/sec",
            "range": "stddev: 0.000011094203301753227",
            "extra": "mean: 135.9256599971559 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 59.608078102499306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005663365982745417",
            "extra": "mean: 16.776249659994846 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 7302.805270364506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072991712958823755",
            "extra": "mean: 136.9336800007659 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 58.13450286931326,
            "unit": "iter/sec",
            "range": "stddev: 0.00009783837382529713",
            "extra": "mean: 17.20148879999897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7316.590632739178,
            "unit": "iter/sec",
            "range": "stddev: 0.000006986875318074697",
            "extra": "mean: 136.6756799984614 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 60.13517015168003,
            "unit": "iter/sec",
            "range": "stddev: 0.0004216564710227823",
            "extra": "mean: 16.629203800000596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7361.186788011626,
            "unit": "iter/sec",
            "range": "stddev: 0.000003917079916909399",
            "extra": "mean: 135.8476600034919 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 61.78324355570902,
            "unit": "iter/sec",
            "range": "stddev: 0.0002057283920172796",
            "extra": "mean: 16.185618340000474 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3552.9600313857527,
            "unit": "iter/sec",
            "range": "stddev: 0.000010512169909112359",
            "extra": "mean: 281.45546000132526 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 30.36905306612775,
            "unit": "iter/sec",
            "range": "stddev: 0.0008031127254250337",
            "extra": "mean: 32.92825751999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 21393.769877382332,
            "unit": "iter/sec",
            "range": "stddev: 0.000007564221116317837",
            "extra": "mean: 46.74258000022746 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 431.92395940715187,
            "unit": "iter/sec",
            "range": "stddev: 0.00008010818861288917",
            "extra": "mean: 2.3152223399983995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 16138.20500433469,
            "unit": "iter/sec",
            "range": "stddev: 0.000006726644248733987",
            "extra": "mean: 61.96476000468465 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 410.43155129210334,
            "unit": "iter/sec",
            "range": "stddev: 0.00005385415980102515",
            "extra": "mean: 2.4364598599981946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 22887.202253267216,
            "unit": "iter/sec",
            "range": "stddev: 0.000004834178245056031",
            "extra": "mean: 43.69254000266665 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 80.34825814763131,
            "unit": "iter/sec",
            "range": "stddev: 0.00008479227172058043",
            "extra": "mean: 12.445820519999415 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 163.35136895804473,
            "unit": "iter/sec",
            "range": "stddev: 0.00016437194947692586",
            "extra": "mean: 6.1217729999975745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 24283.33798770927,
            "unit": "iter/sec",
            "range": "stddev: 0.000005988585264763048",
            "extra": "mean: 41.18049999988216 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 451.17835559574854,
            "unit": "iter/sec",
            "range": "stddev: 0.000054083079533869356",
            "extra": "mean: 2.2164183799986863 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 18986.637584665117,
            "unit": "iter/sec",
            "range": "stddev: 0.000009466021876891222",
            "extra": "mean: 52.66861999871253 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 434.45895566283065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009526959744916906",
            "extra": "mean: 2.3017134000019723 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 22678.544781952063,
            "unit": "iter/sec",
            "range": "stddev: 0.000005855349057121877",
            "extra": "mean: 44.094539998695836 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 70.54400572960367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006452039273392698",
            "extra": "mean: 14.175548859998344 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 163.069116270893,
            "unit": "iter/sec",
            "range": "stddev: 0.0001311528836474803",
            "extra": "mean: 6.132369040001322 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 23562.399124047985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029835479742109032",
            "extra": "mean: 42.4404999989747 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 439.20114020851383,
            "unit": "iter/sec",
            "range": "stddev: 0.000033840670251807493",
            "extra": "mean: 2.276861119999012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 17479.25998482708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039078742930362345",
            "extra": "mean: 57.21065999750863 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 449.5193137143322,
            "unit": "iter/sec",
            "range": "stddev: 0.000017591450111188117",
            "extra": "mean: 2.22459851999929 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 23076.31244273943,
            "unit": "iter/sec",
            "range": "stddev: 0.000004331765545311308",
            "extra": "mean: 43.33447999897544 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 59.387760083825164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004962672202653188",
            "extra": "mean: 16.838486560000092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 159.99855412504832,
            "unit": "iter/sec",
            "range": "stddev: 0.00008407289309933436",
            "extra": "mean: 6.250056480000694 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 8003.873875014882,
            "unit": "iter/sec",
            "range": "stddev: 0.000005425857029086867",
            "extra": "mean: 124.93949999907271 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 211.65605560775626,
            "unit": "iter/sec",
            "range": "stddev: 0.00010462101458943966",
            "extra": "mean: 4.724646300001041 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7184.2352588829535,
            "unit": "iter/sec",
            "range": "stddev: 0.000010081828243188105",
            "extra": "mean: 139.19366000209266 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 203.36758168134082,
            "unit": "iter/sec",
            "range": "stddev: 0.00012700004464038213",
            "extra": "mean: 4.9172045600016645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 7695.531527926403,
            "unit": "iter/sec",
            "range": "stddev: 0.000006837063963109687",
            "extra": "mean: 129.9455400021543 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 28.622162630424434,
            "unit": "iter/sec",
            "range": "stddev: 0.0011752243290719501",
            "extra": "mean: 34.93796093999663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 81.8466519230707,
            "unit": "iter/sec",
            "range": "stddev: 0.0001973670941235156",
            "extra": "mean: 12.217970760000298 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3587.19429031281,
            "unit": "iter/sec",
            "range": "stddev: 0.000010504430800648835",
            "extra": "mean: 278.7694000016927 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 107.57378365875046,
            "unit": "iter/sec",
            "range": "stddev: 0.00027562274071078454",
            "extra": "mean: 9.295945220001158 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3470.179635910466,
            "unit": "iter/sec",
            "range": "stddev: 0.000013421429685709506",
            "extra": "mean: 288.16952000170204 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 112.34990084140827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681417031836295",
            "extra": "mean: 8.90076442000236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3624.1685070287376,
            "unit": "iter/sec",
            "range": "stddev: 0.000012503962097758792",
            "extra": "mean: 275.9253599992917 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 15.41938543930599,
            "unit": "iter/sec",
            "range": "stddev: 0.0014264570754082442",
            "extra": "mean: 64.85342777999904 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 41.31842154694364,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424858108430559",
            "extra": "mean: 24.202279820003696 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1797.9766793003485,
            "unit": "iter/sec",
            "range": "stddev: 0.000012245841525249994",
            "extra": "mean: 556.180740002219 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 1073.3353132783625,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864335546174572",
            "extra": "mean: 931.6753000007338 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1885.0054676421403,
            "unit": "iter/sec",
            "range": "stddev: 0.00001697567340006947",
            "extra": "mean: 530.5024400013281 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 102.19600262506103,
            "unit": "iter/sec",
            "range": "stddev: 0.00023965501772713334",
            "extra": "mean: 9.785118539996347 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1692.015483843633,
            "unit": "iter/sec",
            "range": "stddev: 0.00004196581935079643",
            "extra": "mean: 591.0111399975904 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 964.1039235390449,
            "unit": "iter/sec",
            "range": "stddev: 0.00006209066645780222",
            "extra": "mean: 1.0372325799994542 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1632.1429266166006,
            "unit": "iter/sec",
            "range": "stddev: 0.000022722450192711337",
            "extra": "mean: 612.6914400033456 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 76.02098039180609,
            "unit": "iter/sec",
            "range": "stddev: 0.0001855645791373511",
            "extra": "mean: 13.154263399999309 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 1069.8490310343993,
            "unit": "iter/sec",
            "range": "stddev: 0.000041649499182369635",
            "extra": "mean: 934.7113200010426 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 734.7600767356424,
            "unit": "iter/sec",
            "range": "stddev: 0.000027005990414214627",
            "extra": "mean: 1.3609884799984684 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 1130.1188053221554,
            "unit": "iter/sec",
            "range": "stddev: 0.000059126069020766895",
            "extra": "mean: 884.8627199995462 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 65.59079932567747,
            "unit": "iter/sec",
            "range": "stddev: 0.0004517056594413045",
            "extra": "mean: 15.246040759996049 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 601.1529464271016,
            "unit": "iter/sec",
            "range": "stddev: 0.00010758480825919886",
            "extra": "mean: 1.663470179998967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 407.1717969946564,
            "unit": "iter/sec",
            "range": "stddev: 0.00015417514887621146",
            "extra": "mean: 2.4559657800000423 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 627.2788649105158,
            "unit": "iter/sec",
            "range": "stddev: 0.00008668890071716239",
            "extra": "mean: 1.5941873000019768 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 33.15711924836001,
            "unit": "iter/sec",
            "range": "stddev: 0.000781340000662249",
            "extra": "mean: 30.15943552000408 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 306.3554967318957,
            "unit": "iter/sec",
            "range": "stddev: 0.00020408648541193647",
            "extra": "mean: 3.2641816800014567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 202.6005818796529,
            "unit": "iter/sec",
            "range": "stddev: 0.0001543039539099669",
            "extra": "mean: 4.935819979993994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 321.4849208464546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001254402381514302",
            "extra": "mean: 3.1105657999978575 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 17.800544620549154,
            "unit": "iter/sec",
            "range": "stddev: 0.00041622790416976534",
            "extra": "mean: 56.178056420003486 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 106.47556625111497,
            "unit": "iter/sec",
            "range": "stddev: 0.00032513407338539426",
            "extra": "mean: 9.3918260800001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 66.55049364040894,
            "unit": "iter/sec",
            "range": "stddev: 0.00031538255517451444",
            "extra": "mean: 15.026184560001639 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 41.769739032223264,
            "unit": "iter/sec",
            "range": "stddev: 0.00033596546057820185",
            "extra": "mean: 23.94077681999761 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 21.41447317650444,
            "unit": "iter/sec",
            "range": "stddev: 0.001170072734948482",
            "extra": "mean: 46.69738973999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 1078.7449044657317,
            "unit": "iter/sec",
            "range": "stddev: 0.000032673687112392724",
            "extra": "mean: 927.0032200015521 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 463.2902432026861,
            "unit": "iter/sec",
            "range": "stddev: 0.00008516437835588884",
            "extra": "mean: 2.158474119996754 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 128.43564911874728,
            "unit": "iter/sec",
            "range": "stddev: 0.00015588072070745412",
            "extra": "mean: 7.786000279995733 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 193.24311309656693,
            "unit": "iter/sec",
            "range": "stddev: 0.00025556495618285117",
            "extra": "mean: 5.174828660001367 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 314.02532305230056,
            "unit": "iter/sec",
            "range": "stddev: 0.00011161313147887877",
            "extra": "mean: 3.184456559999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 286.39358839469105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333080558515863",
            "extra": "mean: 3.4916982799973084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 258.9788806657247,
            "unit": "iter/sec",
            "range": "stddev: 0.00015622544681701193",
            "extra": "mean: 3.8613187200030548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 38.75967129380137,
            "unit": "iter/sec",
            "range": "stddev: 0.0006575452794446363",
            "extra": "mean: 25.800012400000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 2.353243347201939,
            "unit": "iter/sec",
            "range": "stddev: 0.004439876499329461",
            "extra": "mean: 424.9454274200002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 30.272222775623984,
            "unit": "iter/sec",
            "range": "stddev: 0.00035798714720334157",
            "extra": "mean: 33.033583539997835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 29.23577404805873,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351732685102954",
            "extra": "mean: 34.20466987999589 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 29.64252109618195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940614560460997",
            "extra": "mean: 33.735322200000155 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e34535a5417c30163fa5a89b4350bd0ab4c3889",
          "message": "Benchmarks review (#321)\n\n* master -> main\r\n\r\n* debug benchmarks: disable HEXL\r\n\r\n* enable hexl\r\n\r\n* don't fail on benchmarks perf degradation\r\n\r\n* disable benchmarks on PRs\r\n\r\n* update SEAL\r\n\r\n* update version for hotfix",
          "timestamp": "2021-09-16T06:30:14+01:00",
          "tree_id": "cff839d0532e4c4d633a51ba144407105856bd7e",
          "url": "https://github.com/OpenMined/TenSEAL/commit/9e34535a5417c30163fa5a89b4350bd0ab4c3889"
        },
        "date": 1631771425319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0185472518685263,
            "unit": "iter/sec",
            "range": "stddev: 0.015595375080848635",
            "extra": "mean: 981.790484600001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.14777653763568,
            "unit": "iter/sec",
            "range": "stddev: 0.00028933056269093743",
            "extra": "mean: 11.744287880001139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.1578882032712254,
            "unit": "iter/sec",
            "range": "stddev: 0.004404492426956689",
            "extra": "mean: 316.667321839991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 80.64421645228688,
            "unit": "iter/sec",
            "range": "stddev: 0.0007781489140115312",
            "extra": "mean: 12.400145279998469 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3126181295362425,
            "unit": "iter/sec",
            "range": "stddev: 0.026278658531324845",
            "extra": "mean: 3.1987908106400074 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 155.29932547289675,
            "unit": "iter/sec",
            "range": "stddev: 0.0004132747082323143",
            "extra": "mean: 6.439178000000538 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.0327637346588467,
            "unit": "iter/sec",
            "range": "stddev: 0.0012603166225338643",
            "extra": "mean: 329.73224672000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.25694958070368523,
            "unit": "iter/sec",
            "range": "stddev: 0.03224808042177798",
            "extra": "mean: 3.8918140954399996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5512.645126077711,
            "unit": "iter/sec",
            "range": "stddev: 0.00003292891324147031",
            "extra": "mean: 181.40111999400688 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 32.50382258442865,
            "unit": "iter/sec",
            "range": "stddev: 0.001327166494363283",
            "extra": "mean: 30.765612179998243 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6349.248274497626,
            "unit": "iter/sec",
            "range": "stddev: 0.00002276771100693002",
            "extra": "mean: 157.49895999761065 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 33.05710708866008,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378672785806401",
            "extra": "mean: 30.250680960011778 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5792.029310535499,
            "unit": "iter/sec",
            "range": "stddev: 0.000031972907897268695",
            "extra": "mean: 172.65105999740626 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 33.820890007628414,
            "unit": "iter/sec",
            "range": "stddev: 0.0007803474491698053",
            "extra": "mean: 29.567524679996495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3185.0383713769334,
            "unit": "iter/sec",
            "range": "stddev: 0.00033019006730207814",
            "extra": "mean: 313.9679600053569 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 33.715553958946245,
            "unit": "iter/sec",
            "range": "stddev: 0.0005712471485874708",
            "extra": "mean: 29.659901220002208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3147.6039274061923,
            "unit": "iter/sec",
            "range": "stddev: 0.000026833497156163258",
            "extra": "mean: 317.70198000231176 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.543792210596035,
            "unit": "iter/sec",
            "range": "stddev: 0.000833730669974106",
            "extra": "mean: 60.4456334599945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11431.113708155977,
            "unit": "iter/sec",
            "range": "stddev: 0.000012667262828551177",
            "extra": "mean: 87.48054000079719 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 154.43471738407143,
            "unit": "iter/sec",
            "range": "stddev: 0.0002031780920540711",
            "extra": "mean: 6.4752279599997555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11837.608842048112,
            "unit": "iter/sec",
            "range": "stddev: 0.000008361853605124024",
            "extra": "mean: 84.47651999176743 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 162.58164089955466,
            "unit": "iter/sec",
            "range": "stddev: 0.00014596869338369113",
            "extra": "mean: 6.150755979992937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 10817.060147822243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033006673009816337",
            "extra": "mean: 92.44656000191753 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 33.762756293545785,
            "unit": "iter/sec",
            "range": "stddev: 0.00026614157477594257",
            "extra": "mean: 29.618434919993888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 72.36465308229518,
            "unit": "iter/sec",
            "range": "stddev: 0.00020107675125906682",
            "extra": "mean: 13.818901319996257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11057.477430671901,
            "unit": "iter/sec",
            "range": "stddev: 0.000008101026906737156",
            "extra": "mean: 90.4365400037932 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 158.09484231017638,
            "unit": "iter/sec",
            "range": "stddev: 0.00013125215813267747",
            "extra": "mean: 6.325317039995753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12809.923282631084,
            "unit": "iter/sec",
            "range": "stddev: 0.000008055701411225867",
            "extra": "mean: 78.06448000792443 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 167.39150256103542,
            "unit": "iter/sec",
            "range": "stddev: 0.0001057729350147569",
            "extra": "mean: 5.974018900005831 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12027.543073292089,
            "unit": "iter/sec",
            "range": "stddev: 0.000013150612710235197",
            "extra": "mean: 83.14250000239554 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 28.95243492192899,
            "unit": "iter/sec",
            "range": "stddev: 0.0004061113719166529",
            "extra": "mean: 34.539409299995896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 74.76526734049312,
            "unit": "iter/sec",
            "range": "stddev: 0.0002761589035080148",
            "extra": "mean: 13.375194599998395 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 13006.526154641984,
            "unit": "iter/sec",
            "range": "stddev: 0.000009614826450400428",
            "extra": "mean: 76.88447999953496 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 149.50965482972765,
            "unit": "iter/sec",
            "range": "stddev: 0.00037642433501297953",
            "extra": "mean: 6.688531259997035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11434.248042719833,
            "unit": "iter/sec",
            "range": "stddev: 0.00000791301536364026",
            "extra": "mean: 87.4565599997368 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 157.57105603748437,
            "unit": "iter/sec",
            "range": "stddev: 0.00017845851781460683",
            "extra": "mean: 6.346343199998046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11152.93212711004,
            "unit": "iter/sec",
            "range": "stddev: 0.000017609590355176152",
            "extra": "mean: 89.66252000845998 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 24.389126083359745,
            "unit": "iter/sec",
            "range": "stddev: 0.0009120567291529517",
            "extra": "mean: 41.00187913999435 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 73.90521150521964,
            "unit": "iter/sec",
            "range": "stddev: 0.0001680180375902071",
            "extra": "mean: 13.530845519999275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5975.606855698612,
            "unit": "iter/sec",
            "range": "stddev: 0.000018441503824674372",
            "extra": "mean: 167.34702000121615 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 78.07445240365942,
            "unit": "iter/sec",
            "range": "stddev: 0.00008818178491017425",
            "extra": "mean: 12.808287080001719 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6134.404056828161,
            "unit": "iter/sec",
            "range": "stddev: 0.000010633485658296391",
            "extra": "mean: 163.01501999805623 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 80.98920723081561,
            "unit": "iter/sec",
            "range": "stddev: 0.0003710835931254051",
            "extra": "mean: 12.347324220004339 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6360.475091690608,
            "unit": "iter/sec",
            "range": "stddev: 0.000015325552765636195",
            "extra": "mean: 157.22096000445163 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 12.251419656897708,
            "unit": "iter/sec",
            "range": "stddev: 0.00011178271158408373",
            "extra": "mean: 81.62319372000184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 36.71999920232819,
            "unit": "iter/sec",
            "range": "stddev: 0.0004970801183821694",
            "extra": "mean: 27.233116059996973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3120.767653913298,
            "unit": "iter/sec",
            "range": "stddev: 0.00002835581425026578",
            "extra": "mean: 320.43398000041634 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 37.95800718874814,
            "unit": "iter/sec",
            "range": "stddev: 0.00047026006507623294",
            "extra": "mean: 26.34490253999502 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3119.6577809853047,
            "unit": "iter/sec",
            "range": "stddev: 0.000047557422895348947",
            "extra": "mean: 320.5479800044486 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 39.55485848292814,
            "unit": "iter/sec",
            "range": "stddev: 0.00029045514634830225",
            "extra": "mean: 25.28134439999576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3095.285261566796,
            "unit": "iter/sec",
            "range": "stddev: 0.000026288749203391125",
            "extra": "mean: 323.0719999919529 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.250125350169965,
            "unit": "iter/sec",
            "range": "stddev: 0.0008856273935574171",
            "extra": "mean: 159.9967911000067 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 17.773712075105415,
            "unit": "iter/sec",
            "range": "stddev: 0.0013654077570916653",
            "extra": "mean: 56.26286708000862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1285.2730661526268,
            "unit": "iter/sec",
            "range": "stddev: 0.00006548769949449097",
            "extra": "mean: 778.0447800041657 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 395.41233123344,
            "unit": "iter/sec",
            "range": "stddev: 0.0001271176083629993",
            "extra": "mean: 2.529005600003984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1364.2778470992253,
            "unit": "iter/sec",
            "range": "stddev: 0.00004499895440108347",
            "extra": "mean: 732.9885199897035 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 40.003952070435446,
            "unit": "iter/sec",
            "range": "stddev: 0.000315997931938542",
            "extra": "mean: 24.997530199998433 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1230.9800654594137,
            "unit": "iter/sec",
            "range": "stddev: 0.000021708694922769017",
            "extra": "mean: 812.3608400001103 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 389.2282180485042,
            "unit": "iter/sec",
            "range": "stddev: 0.00004950259997007936",
            "extra": "mean: 2.5691868000058093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1065.5398653655122,
            "unit": "iter/sec",
            "range": "stddev: 0.00011589980232903292",
            "extra": "mean: 938.4913999974742 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 31.92737699725453,
            "unit": "iter/sec",
            "range": "stddev: 0.000704851413347921",
            "extra": "mean: 31.3210822200017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 904.754372031351,
            "unit": "iter/sec",
            "range": "stddev: 0.00011097311099014752",
            "extra": "mean: 1.105272360005074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 355.15498366828814,
            "unit": "iter/sec",
            "range": "stddev: 0.00003375097588229876",
            "extra": "mean: 2.8156721599998487 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 1060.6642685652373,
            "unit": "iter/sec",
            "range": "stddev: 0.00005586932432094337",
            "extra": "mean: 942.8054000090924 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 27.35665678946186,
            "unit": "iter/sec",
            "range": "stddev: 0.000924756801001341",
            "extra": "mean: 36.554174279995095 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 493.9277363771,
            "unit": "iter/sec",
            "range": "stddev: 0.00004122143464199131",
            "extra": "mean: 2.0245876599983603 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 178.6808635809083,
            "unit": "iter/sec",
            "range": "stddev: 0.00012534674804750128",
            "extra": "mean: 5.596570219995556 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 469.33323601260315,
            "unit": "iter/sec",
            "range": "stddev: 0.00010381745168233788",
            "extra": "mean: 2.1306822599990483 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.735130950205884,
            "unit": "iter/sec",
            "range": "stddev: 0.0006829933179748716",
            "extra": "mean: 72.80600407999827 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 234.3539843066176,
            "unit": "iter/sec",
            "range": "stddev: 0.0001871585758286002",
            "extra": "mean: 4.2670492799970825 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 91.4423088013893,
            "unit": "iter/sec",
            "range": "stddev: 0.0001928155571454672",
            "extra": "mean: 10.935856860000968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 237.46330414220824,
            "unit": "iter/sec",
            "range": "stddev: 0.0006613331257437547",
            "extra": "mean: 4.211176980006712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.844097229083223,
            "unit": "iter/sec",
            "range": "stddev: 0.0005611768100186972",
            "extra": "mean: 146.11130826000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 49.024627868895365,
            "unit": "iter/sec",
            "range": "stddev: 0.0006843600373359554",
            "extra": "mean: 20.397911080003723 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 30.601562810432057,
            "unit": "iter/sec",
            "range": "stddev: 0.0007652464852967122",
            "extra": "mean: 32.67806961999668 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 18.228812564387255,
            "unit": "iter/sec",
            "range": "stddev: 0.0009552721283100528",
            "extra": "mean: 54.85820848000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.411868138105367,
            "unit": "iter/sec",
            "range": "stddev: 0.0023506472265570092",
            "extra": "mean: 106.24883236000186 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 404.2220965655759,
            "unit": "iter/sec",
            "range": "stddev: 0.000010842040504580437",
            "extra": "mean: 2.4738875199955146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 189.94866432204418,
            "unit": "iter/sec",
            "range": "stddev: 0.000050922263633916474",
            "extra": "mean: 5.264580319999368 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 52.37975105385813,
            "unit": "iter/sec",
            "range": "stddev: 0.0004508872619166956",
            "extra": "mean: 19.091346939999312 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 72.89364252630321,
            "unit": "iter/sec",
            "range": "stddev: 0.0005056624508218272",
            "extra": "mean: 13.7186174999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 166.2766912914509,
            "unit": "iter/sec",
            "range": "stddev: 0.00010209645902408764",
            "extra": "mean: 6.0140720400022465 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 157.75410105353552,
            "unit": "iter/sec",
            "range": "stddev: 0.00017553124999286778",
            "extra": "mean: 6.338979420006581 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 141.87269390882753,
            "unit": "iter/sec",
            "range": "stddev: 0.0005001867930761733",
            "extra": "mean: 7.048572720009361 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.05291389187581,
            "unit": "iter/sec",
            "range": "stddev: 0.00165600112222393",
            "extra": "mean: 47.49936303999675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3217426823081497,
            "unit": "iter/sec",
            "range": "stddev: 0.005537637892606017",
            "extra": "mean: 756.5769142399995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 11.557251451224495,
            "unit": "iter/sec",
            "range": "stddev: 0.0015152438083166728",
            "extra": "mean: 86.5257629999951 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 11.827716933903755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003977570705781109",
            "extra": "mean: 84.54717048000475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 11.572361003009895,
            "unit": "iter/sec",
            "range": "stddev: 0.0006448192882678495",
            "extra": "mean: 86.41278989999591 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af35c0f325687dd85c98fbdb01fabbab4504f004",
          "message": "SEAL 3.7.1 (#322)\n\n* master -> main\r\n\r\n* SEAL 3.7.1\r\n\r\n* debug windows\r\n\r\n* debug windows\r\n\r\n* debug windows\r\n\r\n* Revert \"debug windows\"\r\n\r\nThis reverts commit 410229d01670201cdfe734f24fe9a3ca05ae2a33.\r\n\r\n* debug windows\r\n\r\n* cleanup\r\n\r\n* update msbuild\r\n\r\n* debug windows\r\n\r\n* bbreak\r\n\r\n* debug\r\n\r\n* add /p:TrackFileAccess=false to setup\r\n\r\n* add seal hash\r\n\r\n* update seal hash",
          "timestamp": "2021-10-20T10:19:21+01:00",
          "tree_id": "2edbb2af1806835f39024c903d3bff5bdf1b6474",
          "url": "https://github.com/OpenMined/TenSEAL/commit/af35c0f325687dd85c98fbdb01fabbab4504f004"
        },
        "date": 1634722371618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.4910952475335326,
            "unit": "iter/sec",
            "range": "stddev: 0.015018928493387587",
            "extra": "mean: 670.6479694400014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 209.08739307741703,
            "unit": "iter/sec",
            "range": "stddev: 0.00022541398144545818",
            "extra": "mean: 4.782689119997485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 8.71382665217101,
            "unit": "iter/sec",
            "range": "stddev: 0.00029266020945265453",
            "extra": "mean: 114.76014384000337 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 276.1475560217584,
            "unit": "iter/sec",
            "range": "stddev: 0.00006186892682107817",
            "extra": "mean: 3.6212524000075064 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.857408340916583,
            "unit": "iter/sec",
            "range": "stddev: 0.006544595880842634",
            "extra": "mean: 1.1663054256399983 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 530.9374265180059,
            "unit": "iter/sec",
            "range": "stddev: 0.00010576095098332314",
            "extra": "mean: 1.8834611200009022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 8.027629616348994,
            "unit": "iter/sec",
            "range": "stddev: 0.0005103320274115597",
            "extra": "mean: 124.56977312000163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.7110024609555899,
            "unit": "iter/sec",
            "range": "stddev: 0.0015971726089440191",
            "extra": "mean: 1.40646489276 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 7998.999165012532,
            "unit": "iter/sec",
            "range": "stddev: 0.000009232422465925824",
            "extra": "mean: 125.015640003312 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 67.67051160770333,
            "unit": "iter/sec",
            "range": "stddev: 0.00004570307991604261",
            "extra": "mean: 14.777485439997236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 8210.477225744831,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023588196168058673",
            "extra": "mean: 121.79560000049605 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 67.68284141599169,
            "unit": "iter/sec",
            "range": "stddev: 0.000027140371334816104",
            "extra": "mean: 14.774793420001515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 8204.413285096325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033159413165082073",
            "extra": "mean: 121.88562000119418 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 67.6161433704519,
            "unit": "iter/sec",
            "range": "stddev: 0.00005728673510057026",
            "extra": "mean: 14.789367600001242 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 8191.64249301963,
            "unit": "iter/sec",
            "range": "stddev: 0.000006126713443859932",
            "extra": "mean: 122.07564000163984 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 67.79279024111783,
            "unit": "iter/sec",
            "range": "stddev: 0.000036693617366973735",
            "extra": "mean: 14.750831119995382 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3941.797312926271,
            "unit": "iter/sec",
            "range": "stddev: 0.000008651782642348225",
            "extra": "mean: 253.69138000087332 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 33.812548278530834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000491857990885282",
            "extra": "mean: 29.574819139998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 25395.845034446724,
            "unit": "iter/sec",
            "range": "stddev: 0.000004139824116573687",
            "extra": "mean: 39.37652000331582 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 474.8203120868709,
            "unit": "iter/sec",
            "range": "stddev: 0.00001821691263460659",
            "extra": "mean: 2.1060598600024605 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 19354.841208217356,
            "unit": "iter/sec",
            "range": "stddev: 0.000003939852357473931",
            "extra": "mean: 51.66665999695397 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 483.60861318956694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000175836114256571",
            "extra": "mean: 2.067787819999012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 24962.26952907064,
            "unit": "iter/sec",
            "range": "stddev: 0.000005062484913667655",
            "extra": "mean: 40.060460000859166 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 94.96432935615901,
            "unit": "iter/sec",
            "range": "stddev: 0.0000801091816131155",
            "extra": "mean: 10.53026970000019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 183.54608600668925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004433202816794318",
            "extra": "mean: 5.448222960001203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 25273.93150514391,
            "unit": "iter/sec",
            "range": "stddev: 0.000004945541789589944",
            "extra": "mean: 39.56646000233377 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 474.52143516799856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000177451881867243",
            "extra": "mean: 2.1073863599986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 18884.093587881798,
            "unit": "iter/sec",
            "range": "stddev: 0.000004104424053712619",
            "extra": "mean: 52.95462000049156 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 483.94983282975755,
            "unit": "iter/sec",
            "range": "stddev: 0.000020240633125991168",
            "extra": "mean: 2.0663298800059238 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 24721.585504954113,
            "unit": "iter/sec",
            "range": "stddev: 0.000006433347497136693",
            "extra": "mean: 40.450479998526134 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 80.16765879355522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000831549600073805",
            "extra": "mean: 12.473858099999688 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 183.727649246592,
            "unit": "iter/sec",
            "range": "stddev: 0.00003246201800627107",
            "extra": "mean: 5.4428389200029414 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 25486.499037023477,
            "unit": "iter/sec",
            "range": "stddev: 0.000005039108314936465",
            "extra": "mean: 39.236459999756335 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 473.8437312660409,
            "unit": "iter/sec",
            "range": "stddev: 0.000017855060940805907",
            "extra": "mean: 2.110400399997161 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 19195.847554035747,
            "unit": "iter/sec",
            "range": "stddev: 0.000005157868407617295",
            "extra": "mean: 52.09460000060062 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 482.6469222115578,
            "unit": "iter/sec",
            "range": "stddev: 0.000021325642252902594",
            "extra": "mean: 2.0719079600007717 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 24939.845093853546,
            "unit": "iter/sec",
            "range": "stddev: 0.000005677078898169966",
            "extra": "mean: 40.09647999964727 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 67.87371378803658,
            "unit": "iter/sec",
            "range": "stddev: 0.00009449503629374813",
            "extra": "mean: 14.733244199999262 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 183.34928099255865,
            "unit": "iter/sec",
            "range": "stddev: 0.000028824748114944123",
            "extra": "mean: 5.454071020003539 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 8858.863248276559,
            "unit": "iter/sec",
            "range": "stddev: 0.000006061444545579948",
            "extra": "mean: 112.88130000139063 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 237.09926649703507,
            "unit": "iter/sec",
            "range": "stddev: 0.000021875274926759465",
            "extra": "mean: 4.2176427399977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7780.436093524512,
            "unit": "iter/sec",
            "range": "stddev: 0.000005268634830127151",
            "extra": "mean: 128.5274999986541 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 241.4714796755604,
            "unit": "iter/sec",
            "range": "stddev: 0.000019964653546185357",
            "extra": "mean: 4.141275819999919 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 8851.64901800556,
            "unit": "iter/sec",
            "range": "stddev: 0.000005811302736259223",
            "extra": "mean: 112.97329999933936 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 34.024485662584226,
            "unit": "iter/sec",
            "range": "stddev: 0.00015810657997417045",
            "extra": "mean: 29.390598580000642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 91.71504571126468,
            "unit": "iter/sec",
            "range": "stddev: 0.0000744557506692233",
            "extra": "mean: 10.903336440001114 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 4027.1847860223306,
            "unit": "iter/sec",
            "range": "stddev: 0.000009532047208034714",
            "extra": "mean: 248.31241999891063 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 117.80870761621269,
            "unit": "iter/sec",
            "range": "stddev: 0.00003087060610917518",
            "extra": "mean: 8.488336899999922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3711.172231661835,
            "unit": "iter/sec",
            "range": "stddev: 0.000010759397313685766",
            "extra": "mean: 269.45663999867975 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 120.39206707199756,
            "unit": "iter/sec",
            "range": "stddev: 0.000026489796765365958",
            "extra": "mean: 8.306195119998847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 4025.4984734979116,
            "unit": "iter/sec",
            "range": "stddev: 0.000008513644554167218",
            "extra": "mean: 248.4164399970723 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 16.9678345711249,
            "unit": "iter/sec",
            "range": "stddev: 0.0002199536774079637",
            "extra": "mean: 58.9350394600001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 45.68237679858821,
            "unit": "iter/sec",
            "range": "stddev: 0.0001560726236303125",
            "extra": "mean: 21.89027957999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 2067.706982441043,
            "unit": "iter/sec",
            "range": "stddev: 0.000009311327558581809",
            "extra": "mean: 483.62751999775355 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 1137.092357507078,
            "unit": "iter/sec",
            "range": "stddev: 0.000010703521869803201",
            "extra": "mean: 879.4360399997458 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 2095.2524387471203,
            "unit": "iter/sec",
            "range": "stddev: 0.00001073183061800824",
            "extra": "mean: 477.2694599978422 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 107.94042539951973,
            "unit": "iter/sec",
            "range": "stddev: 0.000051239288352462915",
            "extra": "mean: 9.26436964000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1845.937400053052,
            "unit": "iter/sec",
            "range": "stddev: 0.00000894233815749073",
            "extra": "mean: 541.730180000286 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 1068.2429032218868,
            "unit": "iter/sec",
            "range": "stddev: 0.000011399030741816255",
            "extra": "mean: 936.1166800022147 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1827.6515788513022,
            "unit": "iter/sec",
            "range": "stddev: 0.000008568198444893939",
            "extra": "mean: 547.150239997336 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 88.59983527343765,
            "unit": "iter/sec",
            "range": "stddev: 0.00010527104609940674",
            "extra": "mean: 11.286702699997022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 1238.6336473695815,
            "unit": "iter/sec",
            "range": "stddev: 0.000004379959006555067",
            "extra": "mean: 807.341219999671 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 830.8796626059627,
            "unit": "iter/sec",
            "range": "stddev: 0.000013599576407816996",
            "extra": "mean: 1.2035437199938315 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 1255.6707976737357,
            "unit": "iter/sec",
            "range": "stddev: 0.000015036153327672371",
            "extra": "mean: 796.3870799994766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 73.52877898468199,
            "unit": "iter/sec",
            "range": "stddev: 0.000044043570566926596",
            "extra": "mean: 13.600117040000441 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 651.2979880427991,
            "unit": "iter/sec",
            "range": "stddev: 0.000010463493350945105",
            "extra": "mean: 1.5353955000000497 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 433.88761550548344,
            "unit": "iter/sec",
            "range": "stddev: 0.000020875810629104826",
            "extra": "mean: 2.304744280002069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 653.5292303743653,
            "unit": "iter/sec",
            "range": "stddev: 0.000010403444018281163",
            "extra": "mean: 1.5301534400032324 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 36.82925793090166,
            "unit": "iter/sec",
            "range": "stddev: 0.00010448035931991448",
            "extra": "mean: 27.15232552000316 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 326.35531921004787,
            "unit": "iter/sec",
            "range": "stddev: 0.000007100477659488822",
            "extra": "mean: 3.06414494000137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 216.9906942413145,
            "unit": "iter/sec",
            "range": "stddev: 0.000014861423129983981",
            "extra": "mean: 4.608492559998467 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 326.9475165015443,
            "unit": "iter/sec",
            "range": "stddev: 0.00000845724723479265",
            "extra": "mean: 3.0585948799989637 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 18.442885563149332,
            "unit": "iter/sec",
            "range": "stddev: 0.000049335568242008977",
            "extra": "mean: 54.221450139998524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 120.0922979443468,
            "unit": "iter/sec",
            "range": "stddev: 0.00019498328586790034",
            "extra": "mean: 8.326928680000947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 79.65540066826851,
            "unit": "iter/sec",
            "range": "stddev: 0.00032892964394359495",
            "extra": "mean: 12.554076579999673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 46.80271953267025,
            "unit": "iter/sec",
            "range": "stddev: 0.00032208240586064746",
            "extra": "mean: 21.36627978000206 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 23.562732340115343,
            "unit": "iter/sec",
            "range": "stddev: 0.0003262826364905934",
            "extra": "mean: 42.4398998200013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 1181.4472610757148,
            "unit": "iter/sec",
            "range": "stddev: 0.000014575306672304562",
            "extra": "mean: 846.4195000033214 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 525.3918353917763,
            "unit": "iter/sec",
            "range": "stddev: 0.000025137853408371586",
            "extra": "mean: 1.9033413400006793 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 142.11887994178807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005070884116631694",
            "extra": "mean: 7.0363627999995515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 202.10131037960443,
            "unit": "iter/sec",
            "range": "stddev: 0.000027253759397124158",
            "extra": "mean: 4.948013440000523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 343.65907188999006,
            "unit": "iter/sec",
            "range": "stddev: 0.000043055169839902396",
            "extra": "mean: 2.909860620004565 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 325.21843312318265,
            "unit": "iter/sec",
            "range": "stddev: 0.00005545845362569719",
            "extra": "mean: 3.074856460000319 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 277.22437324298664,
            "unit": "iter/sec",
            "range": "stddev: 0.00004710397206894136",
            "extra": "mean: 3.607186440001442 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 41.936469767609466,
            "unit": "iter/sec",
            "range": "stddev: 0.00007454423153616247",
            "extra": "mean: 23.845593240000653 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 2.5460245521532054,
            "unit": "iter/sec",
            "range": "stddev: 0.0015827461813790146",
            "extra": "mean: 392.76918958000124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 31.850609957879566,
            "unit": "iter/sec",
            "range": "stddev: 0.00006344107645179401",
            "extra": "mean: 31.39657297999747 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 31.84617938678799,
            "unit": "iter/sec",
            "range": "stddev: 0.000047911231756732806",
            "extra": "mean: 31.400941000001694 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 31.72723679283334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003591156288148738",
            "extra": "mean: 31.51866033999795 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "937c2600f123718f4beba6bccb8d741fd49478f9",
          "message": "SEAL 3.7.2 (#362)\n\n* master -> main\r\n\r\n* SEAL 3.7.2\r\n\r\n* bump version\r\n\r\n* update SEAL tests\r\n\r\n* drop python 3.6\r\n\r\n* disable HEXL\r\n\r\n* update tag\r\n\r\n* update publish workflow\r\n\r\n* drop test\r\n\r\n* drop python 3.6\r\n\r\n* debug HEXL crash\r\n\r\n* bump version again",
          "timestamp": "2021-12-20T12:28:20Z",
          "tree_id": "ae4ed60594e3790abe273d51bd840d61618a2870",
          "url": "https://github.com/OpenMined/TenSEAL/commit/937c2600f123718f4beba6bccb8d741fd49478f9"
        },
        "date": 1640004230897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.1887976359528296,
            "unit": "iter/sec",
            "range": "stddev: 0.014025944178222546",
            "extra": "mean: 841.1860604000049 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 108.31505051105547,
            "unit": "iter/sec",
            "range": "stddev: 0.00010508591620421609",
            "extra": "mean: 9.23232731999633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.696797283803704,
            "unit": "iter/sec",
            "range": "stddev: 0.004879753264771819",
            "extra": "mean: 212.91104120000458 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 118.65722322245308,
            "unit": "iter/sec",
            "range": "stddev: 0.00044763163472738647",
            "extra": "mean: 8.427636959995652 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.41788464250883145,
            "unit": "iter/sec",
            "range": "stddev: 0.0879320963226636",
            "extra": "mean: 2.393004906800006 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 233.1327216934137,
            "unit": "iter/sec",
            "range": "stddev: 0.00022919922997682122",
            "extra": "mean: 4.28940216000683 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.8734349334635416,
            "unit": "iter/sec",
            "range": "stddev: 0.000736560123310463",
            "extra": "mean: 258.16878743999496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.37589880651086716,
            "unit": "iter/sec",
            "range": "stddev: 0.05939932698197704",
            "extra": "mean: 2.6602904363600053 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6321.746289022979,
            "unit": "iter/sec",
            "range": "stddev: 0.000015525984082323508",
            "extra": "mean: 158.18413999568293 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 48.97279604373763,
            "unit": "iter/sec",
            "range": "stddev: 0.0009767048027592357",
            "extra": "mean: 20.419499820000055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6079.374009292818,
            "unit": "iter/sec",
            "range": "stddev: 0.000004590818144146911",
            "extra": "mean: 164.4906199999241 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 49.981266171759025,
            "unit": "iter/sec",
            "range": "stddev: 0.000579865746024266",
            "extra": "mean: 20.007496339999307 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6694.179745435672,
            "unit": "iter/sec",
            "range": "stddev: 0.00001641309083100324",
            "extra": "mean: 149.38349999965794 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 45.50016586493002,
            "unit": "iter/sec",
            "range": "stddev: 0.0010365307425575544",
            "extra": "mean: 21.97794186000465 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6428.3877604186555,
            "unit": "iter/sec",
            "range": "stddev: 0.000012632749382489592",
            "extra": "mean: 155.55999999833148 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 45.087099204138084,
            "unit": "iter/sec",
            "range": "stddev: 0.0011294475801406458",
            "extra": "mean: 22.179293359999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3293.532095756604,
            "unit": "iter/sec",
            "range": "stddev: 0.000021305009987807534",
            "extra": "mean: 303.6254000039662 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.516608951030676,
            "unit": "iter/sec",
            "range": "stddev: 0.000452226344702509",
            "extra": "mean: 44.41166083999633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 15195.014333197472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041832351966777486",
            "extra": "mean: 65.81106000112413 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 260.44610792862676,
            "unit": "iter/sec",
            "range": "stddev: 0.00008338919041423363",
            "extra": "mean: 3.8395659200023147 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 21025.329636750856,
            "unit": "iter/sec",
            "range": "stddev: 0.000006001095621716651",
            "extra": "mean: 47.56167999630633 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 249.82633821767175,
            "unit": "iter/sec",
            "range": "stddev: 0.00011470144395629505",
            "extra": "mean: 4.002780519997486 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 13226.848386174504,
            "unit": "iter/sec",
            "range": "stddev: 0.000009055980754718956",
            "extra": "mean: 75.60379999858924 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 54.38052497840772,
            "unit": "iter/sec",
            "range": "stddev: 0.001411779566401964",
            "extra": "mean: 18.388936119999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 101.18973957736083,
            "unit": "iter/sec",
            "range": "stddev: 0.0007089993233900322",
            "extra": "mean: 9.88242487999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12774.67140331334,
            "unit": "iter/sec",
            "range": "stddev: 0.000005031036882348689",
            "extra": "mean: 78.27990000123464 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 257.3803811424049,
            "unit": "iter/sec",
            "range": "stddev: 0.00019127870746933907",
            "extra": "mean: 3.88530001999925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 16917.48530324836,
            "unit": "iter/sec",
            "range": "stddev: 0.000007195367413876084",
            "extra": "mean: 59.110440001859395 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 236.56266461941905,
            "unit": "iter/sec",
            "range": "stddev: 0.0003293481580065922",
            "extra": "mean: 4.227209740001854 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12245.87363022354,
            "unit": "iter/sec",
            "range": "stddev: 0.000007004665457519263",
            "extra": "mean: 81.66016000132004 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 45.430693101661866,
            "unit": "iter/sec",
            "range": "stddev: 0.000441983757741094",
            "extra": "mean: 22.01155059999337 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 99.92187827774268,
            "unit": "iter/sec",
            "range": "stddev: 0.00030927708123566837",
            "extra": "mean: 10.00781828000072 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 15895.046912538191,
            "unit": "iter/sec",
            "range": "stddev: 0.000004613127031386389",
            "extra": "mean: 62.91268000040872 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 262.6099921599176,
            "unit": "iter/sec",
            "range": "stddev: 0.00009746954740651435",
            "extra": "mean: 3.807928220001031 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 22983.62370997106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034422847752042514",
            "extra": "mean: 43.50923999709266 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 267.8287793110482,
            "unit": "iter/sec",
            "range": "stddev: 0.00014033298672137777",
            "extra": "mean: 3.733728700001393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 15105.060225058161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034697469585664104",
            "extra": "mean: 66.20298000143521 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 40.34371030554855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336733340272087",
            "extra": "mean: 24.787011219998476 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 104.91136094712151,
            "unit": "iter/sec",
            "range": "stddev: 0.00041532840656689974",
            "extra": "mean: 9.531856140004038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6698.619079645149,
            "unit": "iter/sec",
            "range": "stddev: 0.000011028848430225354",
            "extra": "mean: 149.2845000007037 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 127.33731655666786,
            "unit": "iter/sec",
            "range": "stddev: 0.00016081240444638443",
            "extra": "mean: 7.853157479999026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 8529.061069951813,
            "unit": "iter/sec",
            "range": "stddev: 0.000004914328805525078",
            "extra": "mean: 117.24619999768038 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 130.79060835336853,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896199506639537",
            "extra": "mean: 7.645808919996853 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6356.0248503513485,
            "unit": "iter/sec",
            "range": "stddev: 0.000016023396856941497",
            "extra": "mean: 157.33104000446474 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 19.72033918871359,
            "unit": "iter/sec",
            "range": "stddev: 0.002882634079566958",
            "extra": "mean: 50.70906694000087 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 50.37296500940423,
            "unit": "iter/sec",
            "range": "stddev: 0.0012753371243810008",
            "extra": "mean: 19.851918580002348 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3233.5910612981675,
            "unit": "iter/sec",
            "range": "stddev: 0.000018704674137965986",
            "extra": "mean: 309.25370000204566 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 62.00052577935191,
            "unit": "iter/sec",
            "range": "stddev: 0.0007099220940634521",
            "extra": "mean: 16.128895479996572 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3458.841310239867,
            "unit": "iter/sec",
            "range": "stddev: 0.000009982080533426343",
            "extra": "mean: 289.1141600048286 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.3650041884797,
            "unit": "iter/sec",
            "range": "stddev: 0.001128010101041142",
            "extra": "mean: 17.133554839997487 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2924.060397036292,
            "unit": "iter/sec",
            "range": "stddev: 0.000016752487376812277",
            "extra": "mean: 341.99020000187375 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.272059679339163,
            "unit": "iter/sec",
            "range": "stddev: 0.00823325644615723",
            "extra": "mean: 107.85090201999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 23.457053246146153,
            "unit": "iter/sec",
            "range": "stddev: 0.003259212862972812",
            "extra": "mean: 42.631100739999965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1159.7996552752686,
            "unit": "iter/sec",
            "range": "stddev: 0.00006816318136652167",
            "extra": "mean: 862.2178800032998 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 606.094356332017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000766426322182131",
            "extra": "mean: 1.6499081200026922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1207.7392705381394,
            "unit": "iter/sec",
            "range": "stddev: 0.00004084241114751268",
            "extra": "mean: 827.9932800019196 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.76802241735913,
            "unit": "iter/sec",
            "range": "stddev: 0.000573777247181714",
            "extra": "mean: 17.310615080004936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1052.7328629321173,
            "unit": "iter/sec",
            "range": "stddev: 0.00004080671061290909",
            "extra": "mean: 949.9085999982526 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 545.0089540606446,
            "unit": "iter/sec",
            "range": "stddev: 0.00004121260717468099",
            "extra": "mean: 1.8348322400015602 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1071.6329854187666,
            "unit": "iter/sec",
            "range": "stddev: 0.00001819487487131222",
            "extra": "mean: 933.1553000015447 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 50.91331569231841,
            "unit": "iter/sec",
            "range": "stddev: 0.0003122400490348056",
            "extra": "mean: 19.64122718000226 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 798.5245055828276,
            "unit": "iter/sec",
            "range": "stddev: 0.00005490312475053809",
            "extra": "mean: 1.2523097200005395 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 484.48726523737764,
            "unit": "iter/sec",
            "range": "stddev: 0.00023418808609635701",
            "extra": "mean: 2.0640377400013676 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 925.9752083820672,
            "unit": "iter/sec",
            "range": "stddev: 0.00004113765374547539",
            "extra": "mean: 1.0799425200025325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 41.0506501427039,
            "unit": "iter/sec",
            "range": "stddev: 0.0009059482874636363",
            "extra": "mean: 24.360150120003254 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 478.77487561115606,
            "unit": "iter/sec",
            "range": "stddev: 0.00007754580914468412",
            "extra": "mean: 2.0886643199969512 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 245.7137484856171,
            "unit": "iter/sec",
            "range": "stddev: 0.0003050878564589054",
            "extra": "mean: 4.069776340002136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 472.6705749462528,
            "unit": "iter/sec",
            "range": "stddev: 0.000043712337666765",
            "extra": "mean: 2.1156383600009576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 20.899995689627048,
            "unit": "iter/sec",
            "range": "stddev: 0.0016367903781279805",
            "extra": "mean: 47.84689981999918 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 222.68964184220425,
            "unit": "iter/sec",
            "range": "stddev: 0.00012624945439900049",
            "extra": "mean: 4.490554619997055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 126.88718098852459,
            "unit": "iter/sec",
            "range": "stddev: 0.0002978583045674237",
            "extra": "mean: 7.88101676000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 235.46476588824603,
            "unit": "iter/sec",
            "range": "stddev: 0.00009444711533423366",
            "extra": "mean: 4.246919900001558 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.418490547156551,
            "unit": "iter/sec",
            "range": "stddev: 0.002219789869138283",
            "extra": "mean: 95.98319405999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 68.67295095772054,
            "unit": "iter/sec",
            "range": "stddev: 0.0004036025486079375",
            "extra": "mean: 14.561774119997608 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 45.97349806214023,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587165566915902",
            "extra": "mean: 21.751662199999373 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 26.593408308475787,
            "unit": "iter/sec",
            "range": "stddev: 0.0010087639777438039",
            "extra": "mean: 37.60330336000152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.919736683136453,
            "unit": "iter/sec",
            "range": "stddev: 0.0016604947995832579",
            "extra": "mean: 77.40095827999767 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 628.7480694142332,
            "unit": "iter/sec",
            "range": "stddev: 0.000029555393135453856",
            "extra": "mean: 1.590462139997726 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 263.61982882560034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000653612862730246",
            "extra": "mean: 3.7933413599989763 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.59308609897968,
            "unit": "iter/sec",
            "range": "stddev: 0.0008789800201877871",
            "extra": "mean: 13.056008720000136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 108.66368142901483,
            "unit": "iter/sec",
            "range": "stddev: 0.00043520005344559263",
            "extra": "mean: 9.202706800001579 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 172.30239841456566,
            "unit": "iter/sec",
            "range": "stddev: 0.00022568387922779",
            "extra": "mean: 5.803749740000511 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 168.51823947731071,
            "unit": "iter/sec",
            "range": "stddev: 0.00019715783661293143",
            "extra": "mean: 5.934075759998905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 148.7887071180452,
            "unit": "iter/sec",
            "range": "stddev: 0.0002940959490908386",
            "extra": "mean: 6.720940180000525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 23.001307270098277,
            "unit": "iter/sec",
            "range": "stddev: 0.002491075358791292",
            "extra": "mean: 43.4757897999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.455029113630245,
            "unit": "iter/sec",
            "range": "stddev: 0.03358323650014777",
            "extra": "mean: 687.2714715000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 18.217202348238636,
            "unit": "iter/sec",
            "range": "stddev: 0.002013786610232491",
            "extra": "mean: 54.89317079999864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 18.989436809410474,
            "unit": "iter/sec",
            "range": "stddev: 0.000873729605559713",
            "extra": "mean: 52.66085614000076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.921876476554583,
            "unit": "iter/sec",
            "range": "stddev: 0.0010698224638430642",
            "extra": "mean: 55.797728620002545 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "691373b36de367a8805ed6b5370e790bd62e3319",
          "message": "SEAL 4.0 (#381)\n\n* master -> main\r\n\r\n* SEAL 4.0\r\n\r\n* linting\r\n\r\n* update tests",
          "timestamp": "2022-03-18T07:31:34Z",
          "tree_id": "d721087e08a985c428cf2d44800122ca5523a53f",
          "url": "https://github.com/OpenMined/TenSEAL/commit/691373b36de367a8805ed6b5370e790bd62e3319"
        },
        "date": 1647589680559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.1085619104750866,
            "unit": "iter/sec",
            "range": "stddev: 0.009701697032215496",
            "extra": "mean: 902.0696007599963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 96.36326465365073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000856162907370684",
            "extra": "mean: 10.377398520008683 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.272169579080722,
            "unit": "iter/sec",
            "range": "stddev: 0.005168492439871498",
            "extra": "mean: 234.07310536001205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 121.68707782420827,
            "unit": "iter/sec",
            "range": "stddev: 0.00040690130038065057",
            "extra": "mean: 8.217799440008093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.42124714510693473,
            "unit": "iter/sec",
            "range": "stddev: 0.02395734972833854",
            "extra": "mean: 2.373903328760002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 217.127745250964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005011595825888017",
            "extra": "mean: 4.605583679986012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.109911587858099,
            "unit": "iter/sec",
            "range": "stddev: 0.004336100729539348",
            "extra": "mean: 243.31423648000052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3507373843746998,
            "unit": "iter/sec",
            "range": "stddev: 0.054416159251717444",
            "extra": "mean: 2.8511360480800065 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6621.330856062173,
            "unit": "iter/sec",
            "range": "stddev: 0.000008880866655003089",
            "extra": "mean: 151.02703999218647 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 41.47609706561638,
            "unit": "iter/sec",
            "range": "stddev: 0.000818656740625252",
            "extra": "mean: 24.110272440002518 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6315.876964984306,
            "unit": "iter/sec",
            "range": "stddev: 0.000009580977484210798",
            "extra": "mean: 158.33114000542992 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 43.07321897094264,
            "unit": "iter/sec",
            "range": "stddev: 0.0010538245140679955",
            "extra": "mean: 23.216282039998077 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6618.965985373907,
            "unit": "iter/sec",
            "range": "stddev: 0.000008568065094596434",
            "extra": "mean: 151.08099999451952 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 43.623800870051525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006532646676824268",
            "extra": "mean: 22.9232662000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5805.399299990258,
            "unit": "iter/sec",
            "range": "stddev: 0.00000880250041107421",
            "extra": "mean: 172.25344000053155 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.39534477162441,
            "unit": "iter/sec",
            "range": "stddev: 0.0004663641807395995",
            "extra": "mean: 22.524884200001907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3285.387915326894,
            "unit": "iter/sec",
            "range": "stddev: 0.000016303987728913155",
            "extra": "mean: 304.37805999554257 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.263187546045316,
            "unit": "iter/sec",
            "range": "stddev: 0.00035741287718562317",
            "extra": "mean: 44.91719785999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 14665.0488185536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056186722409285245",
            "extra": "mean: 68.18933999966248 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 237.43224698681874,
            "unit": "iter/sec",
            "range": "stddev: 0.00014582131905987555",
            "extra": "mean: 4.211727820002125 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 18219.217264449377,
            "unit": "iter/sec",
            "range": "stddev: 0.000005569159405257404",
            "extra": "mean: 54.8871000046347 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 237.82651112584736,
            "unit": "iter/sec",
            "range": "stddev: 0.000027841268499219907",
            "extra": "mean: 4.204745699989872 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11382.81381795812,
            "unit": "iter/sec",
            "range": "stddev: 0.00001139483270834511",
            "extra": "mean: 87.8517399996781 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 50.34460727609843,
            "unit": "iter/sec",
            "range": "stddev: 0.0003127151256322476",
            "extra": "mean: 19.86310062000939 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 93.56945475452281,
            "unit": "iter/sec",
            "range": "stddev: 0.00027090163382379736",
            "extra": "mean: 10.687248340000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9613.898158880183,
            "unit": "iter/sec",
            "range": "stddev: 0.000027962738303079003",
            "extra": "mean: 104.01607999938278 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 226.7464898959663,
            "unit": "iter/sec",
            "range": "stddev: 0.00016328515027835285",
            "extra": "mean: 4.410211600006733 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 19193.474830812316,
            "unit": "iter/sec",
            "range": "stddev: 0.000006664893546192371",
            "extra": "mean: 52.10104000525462 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 244.51257303731117,
            "unit": "iter/sec",
            "range": "stddev: 0.00005569703996423833",
            "extra": "mean: 4.089769239994894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12813.360336734824,
            "unit": "iter/sec",
            "range": "stddev: 0.000006238917593739301",
            "extra": "mean: 78.04354000199965 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.34422905364233,
            "unit": "iter/sec",
            "range": "stddev: 0.0005042734393437093",
            "extra": "mean: 24.187172500000997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 95.14511743580798,
            "unit": "iter/sec",
            "range": "stddev: 0.000052532425946229654",
            "extra": "mean: 10.51026082000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 13803.876183796987,
            "unit": "iter/sec",
            "range": "stddev: 0.00001002640094801549",
            "extra": "mean: 72.44341999921744 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 234.4115872535924,
            "unit": "iter/sec",
            "range": "stddev: 0.00007865985535095004",
            "extra": "mean: 4.266000719999283 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 17749.656011284656,
            "unit": "iter/sec",
            "range": "stddev: 0.00000833645033256824",
            "extra": "mean: 56.339120001211995 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 238.84822532342216,
            "unit": "iter/sec",
            "range": "stddev: 0.0001180817354946832",
            "extra": "mean: 4.1867591800019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12656.369444368074,
            "unit": "iter/sec",
            "range": "stddev: 0.000005907816089822448",
            "extra": "mean: 79.01160000074015 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.301713376180466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688352694351106",
            "extra": "mean: 27.546909140000935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 93.18225351656676,
            "unit": "iter/sec",
            "range": "stddev: 0.000124990936278194",
            "extra": "mean: 10.731657180003822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6325.2259118741,
            "unit": "iter/sec",
            "range": "stddev: 0.000018235733360358196",
            "extra": "mean: 158.09711999736464 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 114.53581574018449,
            "unit": "iter/sec",
            "range": "stddev: 0.00031027952825537895",
            "extra": "mean: 8.730893419997301 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7365.4678878144005,
            "unit": "iter/sec",
            "range": "stddev: 0.000014275667727947883",
            "extra": "mean: 135.76869999724295 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 118.21004403225909,
            "unit": "iter/sec",
            "range": "stddev: 0.00022569922781660312",
            "extra": "mean: 8.459518039999239 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5574.8967305667875,
            "unit": "iter/sec",
            "range": "stddev: 0.000020145775880829217",
            "extra": "mean: 179.3755200014857 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.883522784120032,
            "unit": "iter/sec",
            "range": "stddev: 0.0010024339698736177",
            "extra": "mean: 55.91739457999665 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.446831474636745,
            "unit": "iter/sec",
            "range": "stddev: 0.0011111213902766312",
            "extra": "mean: 22.00373419999778 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2839.691411886639,
            "unit": "iter/sec",
            "range": "stddev: 0.000040659973382776737",
            "extra": "mean: 352.150939997955 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.21959957310448,
            "unit": "iter/sec",
            "range": "stddev: 0.0010665852030488435",
            "extra": "mean: 18.109511980001116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3271.9082724529694,
            "unit": "iter/sec",
            "range": "stddev: 0.000015613704928155234",
            "extra": "mean: 305.6320399991818 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.63574622699255,
            "unit": "iter/sec",
            "range": "stddev: 0.0005855004213615629",
            "extra": "mean: 17.054443140004878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2770.3968250047724,
            "unit": "iter/sec",
            "range": "stddev: 0.000012089315964738933",
            "extra": "mean: 360.9591199983697 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.834291759638655,
            "unit": "iter/sec",
            "range": "stddev: 0.0022485383828985263",
            "extra": "mean: 113.19526536000467 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.71884155863616,
            "unit": "iter/sec",
            "range": "stddev: 0.0014690520573918174",
            "extra": "mean: 44.01632879999852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1164.7801964221428,
            "unit": "iter/sec",
            "range": "stddev: 0.000045737482268832365",
            "extra": "mean: 858.5310800026491 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 560.3328726913412,
            "unit": "iter/sec",
            "range": "stddev: 0.00004810663410553161",
            "extra": "mean: 1.7846534599993902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1191.2097771662727,
            "unit": "iter/sec",
            "range": "stddev: 0.000023084722038237008",
            "extra": "mean: 839.4826999983707 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 55.97585618025351,
            "unit": "iter/sec",
            "range": "stddev: 0.0009038573877362267",
            "extra": "mean: 17.864845099998092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1078.092236436121,
            "unit": "iter/sec",
            "range": "stddev: 0.000029402753504137612",
            "extra": "mean: 927.5644200033639 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 535.0188166630335,
            "unit": "iter/sec",
            "range": "stddev: 0.00001765357359640513",
            "extra": "mean: 1.8690931400078625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1088.423219348338,
            "unit": "iter/sec",
            "range": "stddev: 0.000009685390970207758",
            "extra": "mean: 918.7602600013633 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.481746932197666,
            "unit": "iter/sec",
            "range": "stddev: 0.000504216362390411",
            "extra": "mean: 21.513821359999383 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 820.2771056863502,
            "unit": "iter/sec",
            "range": "stddev: 0.00004455257961127757",
            "extra": "mean: 1.2191002199961076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 469.6329951513652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000701930781060449",
            "extra": "mean: 2.1293222800022704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 760.8102964415758,
            "unit": "iter/sec",
            "range": "stddev: 0.000025103424665260686",
            "extra": "mean: 1.3143880999996327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 38.140770648949726,
            "unit": "iter/sec",
            "range": "stddev: 0.0008711662445920067",
            "extra": "mean: 26.218662679998488 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 423.34978634215514,
            "unit": "iter/sec",
            "range": "stddev: 0.00005385364914810181",
            "extra": "mean: 2.36211292000462 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 234.8029331150705,
            "unit": "iter/sec",
            "range": "stddev: 0.00013334054815346654",
            "extra": "mean: 4.258890579999388 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 429.06811536914097,
            "unit": "iter/sec",
            "range": "stddev: 0.000042447387568542637",
            "extra": "mean: 2.3306322800044654 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.66381951536491,
            "unit": "iter/sec",
            "range": "stddev: 0.0003934553790914689",
            "extra": "mean: 50.85481990000062 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 209.9666737118245,
            "unit": "iter/sec",
            "range": "stddev: 0.00023005559743169142",
            "extra": "mean: 4.762660579995099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 112.93006895595761,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757919831930491",
            "extra": "mean: 8.855037540001831 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 217.70257454207294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008420377033148589",
            "extra": "mean: 4.593422940006349 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.318602385047722,
            "unit": "iter/sec",
            "range": "stddev: 0.004078123937886225",
            "extra": "mean: 107.31222974000502 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 65.61087776706775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162557126284505",
            "extra": "mean: 15.2413751199947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 43.39571128344487,
            "unit": "iter/sec",
            "range": "stddev: 0.000748149207129781",
            "extra": "mean: 23.043751799996244 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.11818294719361,
            "unit": "iter/sec",
            "range": "stddev: 0.0012327636001448255",
            "extra": "mean: 39.811796979993225 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.66361823101372,
            "unit": "iter/sec",
            "range": "stddev: 0.0010406740257193619",
            "extra": "mean: 78.96637293999902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 536.9839593537256,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256237325457892",
            "extra": "mean: 1.8622530200036636 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 266.48925020470523,
            "unit": "iter/sec",
            "range": "stddev: 0.000057917558301148586",
            "extra": "mean: 3.7524965800002974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 73.33746755220838,
            "unit": "iter/sec",
            "range": "stddev: 0.00037409835618730297",
            "extra": "mean: 13.6355949199924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 106.58121570276263,
            "unit": "iter/sec",
            "range": "stddev: 0.00009978856941923588",
            "extra": "mean: 9.382516360001318 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 181.71849105406434,
            "unit": "iter/sec",
            "range": "stddev: 0.0001558896913516008",
            "extra": "mean: 5.503017299997737 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 174.8750209322575,
            "unit": "iter/sec",
            "range": "stddev: 0.00010710542559619704",
            "extra": "mean: 5.718369579994942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 152.63218507383615,
            "unit": "iter/sec",
            "range": "stddev: 0.00036074294203474117",
            "extra": "mean: 6.551698120001674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 23.67199447022578,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021021337392739",
            "extra": "mean: 42.244011220000175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.422009798338553,
            "unit": "iter/sec",
            "range": "stddev: 0.004490716072548572",
            "extra": "mean: 703.2300348199988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.974559735401655,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562848958487592",
            "extra": "mean: 58.91168994000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.559827835178137,
            "unit": "iter/sec",
            "range": "stddev: 0.0016194092452353342",
            "extra": "mean: 60.38710124000772 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.89065770979379,
            "unit": "iter/sec",
            "range": "stddev: 0.0007050134352344024",
            "extra": "mean: 59.204325679997964 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2926a7c38034049536d576979e53843951932c3e",
          "message": "Python 3.10 support (#384)\n\n* master -> main\r\n\r\n* add py 3.10\r\n\r\n* update workflows\r\n\r\n* debug workflows\r\n\r\n* bump version",
          "timestamp": "2022-03-23T21:04:18Z",
          "tree_id": "7b4ddac1436669ac0d8165a07cae3aa7840b96e2",
          "url": "https://github.com/OpenMined/TenSEAL/commit/2926a7c38034049536d576979e53843951932c3e"
        },
        "date": 1648070765232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9005888625351521,
            "unit": "iter/sec",
            "range": "stddev: 0.009987131007461328",
            "extra": "mean: 1.1103845956799934 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 81.97520368135652,
            "unit": "iter/sec",
            "range": "stddev: 0.00020102130463829835",
            "extra": "mean: 12.198810799995954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.42839375831434,
            "unit": "iter/sec",
            "range": "stddev: 0.004109357715050936",
            "extra": "mean: 291.6817817600031 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 100.83346725697064,
            "unit": "iter/sec",
            "range": "stddev: 0.00017164138393845242",
            "extra": "mean: 9.917342200001258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.34665995808540867,
            "unit": "iter/sec",
            "range": "stddev: 0.020110715086909665",
            "extra": "mean: 2.8846712078400016 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 188.97781025602634,
            "unit": "iter/sec",
            "range": "stddev: 0.00012966003641762976",
            "extra": "mean: 5.291626559992436 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.3816061346863187,
            "unit": "iter/sec",
            "range": "stddev: 0.004621572316512335",
            "extra": "mean: 295.71746683998754 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2845159306403203,
            "unit": "iter/sec",
            "range": "stddev: 0.014117997935110543",
            "extra": "mean: 3.514741679839999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5339.708518386773,
            "unit": "iter/sec",
            "range": "stddev: 0.000011973144029769138",
            "extra": "mean: 187.27613999089954 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 36.36725899225462,
            "unit": "iter/sec",
            "range": "stddev: 0.0004407787677579078",
            "extra": "mean: 27.49726066000676 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5457.676970516837,
            "unit": "iter/sec",
            "range": "stddev: 0.000013423935694544616",
            "extra": "mean: 183.2281399947533 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 37.211488658032934,
            "unit": "iter/sec",
            "range": "stddev: 0.000531091670287001",
            "extra": "mean: 26.873420980004994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5374.724733287721,
            "unit": "iter/sec",
            "range": "stddev: 0.000015402793560028967",
            "extra": "mean: 186.05604000640596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 36.07832487726148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008503265354093691",
            "extra": "mean: 27.717473119996612 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5398.575769332841,
            "unit": "iter/sec",
            "range": "stddev: 0.000013178491271113542",
            "extra": "mean: 185.2340400000685 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 36.560599534111894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005513351163251361",
            "extra": "mean: 27.35184905999631 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2859.9042172104155,
            "unit": "iter/sec",
            "range": "stddev: 0.00001848794867776445",
            "extra": "mean: 349.662060002629 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 18.057298916037084,
            "unit": "iter/sec",
            "range": "stddev: 0.0015875635734839643",
            "extra": "mean: 55.37926822000372 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 8950.146075089668,
            "unit": "iter/sec",
            "range": "stddev: 0.000011608477447397635",
            "extra": "mean: 111.73002000305132 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 184.41339259756907,
            "unit": "iter/sec",
            "range": "stddev: 0.00017494488125447424",
            "extra": "mean: 5.4225996600052895 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11426.748372217917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026559218599560207",
            "extra": "mean: 87.51396000207023 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 190.57856855771507,
            "unit": "iter/sec",
            "range": "stddev: 0.00020319174905064608",
            "extra": "mean: 5.247179719985979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 10447.578439745696,
            "unit": "iter/sec",
            "range": "stddev: 0.000007272149867746375",
            "extra": "mean: 95.71595999659621 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 38.29448507426569,
            "unit": "iter/sec",
            "range": "stddev: 0.0006506303480527457",
            "extra": "mean: 26.11342071999843 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 75.65606892696248,
            "unit": "iter/sec",
            "range": "stddev: 0.0005321099457334034",
            "extra": "mean: 13.217710279996027 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10203.461095285671,
            "unit": "iter/sec",
            "range": "stddev: 0.000012684014517714546",
            "extra": "mean: 98.00596000332007 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 182.23010003746452,
            "unit": "iter/sec",
            "range": "stddev: 0.00010239714193133913",
            "extra": "mean: 5.487567640002453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11188.941387445955,
            "unit": "iter/sec",
            "range": "stddev: 0.000006417682401197135",
            "extra": "mean: 89.37395999964792 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 179.37008669455548,
            "unit": "iter/sec",
            "range": "stddev: 0.00047310181336213",
            "extra": "mean: 5.575065600000927 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10891.352656504789,
            "unit": "iter/sec",
            "range": "stddev: 0.000008161095097869082",
            "extra": "mean: 91.81596001326398 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 31.89170210695443,
            "unit": "iter/sec",
            "range": "stddev: 0.0008436695394115865",
            "extra": "mean: 31.35611880000397 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 77.2545283251346,
            "unit": "iter/sec",
            "range": "stddev: 0.00023152793756802648",
            "extra": "mean: 12.944225040005222 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9953.217886006181,
            "unit": "iter/sec",
            "range": "stddev: 0.000005752160034621972",
            "extra": "mean: 100.47001999282656 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 190.10039205496386,
            "unit": "iter/sec",
            "range": "stddev: 0.00008947070386696633",
            "extra": "mean: 5.26037842000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11365.95863507787,
            "unit": "iter/sec",
            "range": "stddev: 0.000005860297510400939",
            "extra": "mean: 87.98202000434685 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 191.93517492336173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001648420422611149",
            "extra": "mean: 5.210092420002184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 10763.567476294216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037457883003688885",
            "extra": "mean: 92.90600000440463 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 28.099153367841343,
            "unit": "iter/sec",
            "range": "stddev: 0.0004348907204869286",
            "extra": "mean: 35.588260860004084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 72.70263790104893,
            "unit": "iter/sec",
            "range": "stddev: 0.0009002759689409503",
            "extra": "mean: 13.754659100004575 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4959.087527917915,
            "unit": "iter/sec",
            "range": "stddev: 0.00002432275785771094",
            "extra": "mean: 201.64999999906286 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 92.85467611960938,
            "unit": "iter/sec",
            "range": "stddev: 0.0003491141918443011",
            "extra": "mean: 10.769516860000294 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5130.573085128993,
            "unit": "iter/sec",
            "range": "stddev: 0.000021353177752874533",
            "extra": "mean: 194.9099999956161 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 91.93953128933066,
            "unit": "iter/sec",
            "range": "stddev: 0.00034485640867203414",
            "extra": "mean: 10.876714140003969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 4637.444582480624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003220806777984835",
            "extra": "mean: 215.6360000026325 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.249807015361698,
            "unit": "iter/sec",
            "range": "stddev: 0.0007378219475190442",
            "extra": "mean: 70.17638898000314 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 37.18663423890436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005978451757583175",
            "extra": "mean: 26.891382360004172 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2380.861681469881,
            "unit": "iter/sec",
            "range": "stddev: 0.000020210707054546752",
            "extra": "mean: 420.0159999982134 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 46.193582555810806,
            "unit": "iter/sec",
            "range": "stddev: 0.00019440806693358655",
            "extra": "mean: 21.64802867999697 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2678.610985930594,
            "unit": "iter/sec",
            "range": "stddev: 0.00004359484127447982",
            "extra": "mean: 373.3278199979395 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 47.26266176256532,
            "unit": "iter/sec",
            "range": "stddev: 0.0001928619023965132",
            "extra": "mean: 21.158351279996168 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2493.766829785423,
            "unit": "iter/sec",
            "range": "stddev: 0.00003423009713529141",
            "extra": "mean: 400.999800003774 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.034546758034586,
            "unit": "iter/sec",
            "range": "stddev: 0.0013924771150005493",
            "extra": "mean: 142.15556941999694 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 18.395934876316744,
            "unit": "iter/sec",
            "range": "stddev: 0.000942243161262268",
            "extra": "mean: 54.35983584000496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 989.0159884272027,
            "unit": "iter/sec",
            "range": "stddev: 0.00002772349238177717",
            "extra": "mean: 1.011106000005384 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 403.95357442383266,
            "unit": "iter/sec",
            "range": "stddev: 0.00012237572744929504",
            "extra": "mean: 2.4755319999985663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 933.1108796968373,
            "unit": "iter/sec",
            "range": "stddev: 0.000039904015214669506",
            "extra": "mean: 1.071684000003188 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 44.452955861775635,
            "unit": "iter/sec",
            "range": "stddev: 0.0007986486786246024",
            "extra": "mean: 22.495691920003082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 958.4290963773517,
            "unit": "iter/sec",
            "range": "stddev: 0.000009451945828658233",
            "extra": "mean: 1.04337399999622 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 432.40475852838165,
            "unit": "iter/sec",
            "range": "stddev: 0.00007643534273289524",
            "extra": "mean: 2.3126479999973526 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 892.2596475610248,
            "unit": "iter/sec",
            "range": "stddev: 0.00002854966637775073",
            "extra": "mean: 1.1207499999954962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 34.45554354131039,
            "unit": "iter/sec",
            "range": "stddev: 0.0010865040954254823",
            "extra": "mean: 29.02290595999602 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 731.6113153928173,
            "unit": "iter/sec",
            "range": "stddev: 0.00004294290139856986",
            "extra": "mean: 1.3668460000008054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 394.9718503563101,
            "unit": "iter/sec",
            "range": "stddev: 0.000053543688515790374",
            "extra": "mean: 2.5318259999994552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 729.5978894212035,
            "unit": "iter/sec",
            "range": "stddev: 0.00003684807213089519",
            "extra": "mean: 1.3706179999962842 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 29.91931601801223,
            "unit": "iter/sec",
            "range": "stddev: 0.0008242871634465631",
            "extra": "mean: 33.42322395999872 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 372.94590718019754,
            "unit": "iter/sec",
            "range": "stddev: 0.00004558648462077827",
            "extra": "mean: 2.681353999996645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 187.59114584795336,
            "unit": "iter/sec",
            "range": "stddev: 0.00026005245849340333",
            "extra": "mean: 5.33074200000101 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 359.2470182494285,
            "unit": "iter/sec",
            "range": "stddev: 0.00005601083779686435",
            "extra": "mean: 2.7836000000024796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 15.528807684002432,
            "unit": "iter/sec",
            "range": "stddev: 0.0011891740006957415",
            "extra": "mean: 64.3964443599998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 176.93201944857884,
            "unit": "iter/sec",
            "range": "stddev: 0.00029753392262303255",
            "extra": "mean: 5.65188823999506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 96.06105099383585,
            "unit": "iter/sec",
            "range": "stddev: 0.0002660338615326925",
            "extra": "mean: 10.41004642000189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 180.11546128750157,
            "unit": "iter/sec",
            "range": "stddev: 0.00019190145777566746",
            "extra": "mean: 5.551994219995322 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.690348793648809,
            "unit": "iter/sec",
            "range": "stddev: 0.0010928886443618403",
            "extra": "mean: 130.03311381999538 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 53.030491216232654,
            "unit": "iter/sec",
            "range": "stddev: 0.0004217617325349426",
            "extra": "mean: 18.857075939999962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 35.871312512917406,
            "unit": "iter/sec",
            "range": "stddev: 0.0003748927477876311",
            "extra": "mean: 27.87742990000425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 21.510330085215053,
            "unit": "iter/sec",
            "range": "stddev: 0.0008743604319768036",
            "extra": "mean: 46.48929123999551 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.748102652378556,
            "unit": "iter/sec",
            "range": "stddev: 0.0009816019086341073",
            "extra": "mean: 93.03967708000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 469.55953090112286,
            "unit": "iter/sec",
            "range": "stddev: 0.0001078839089732808",
            "extra": "mean: 2.129655420008021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 225.31825527623292,
            "unit": "iter/sec",
            "range": "stddev: 0.000048225824720894814",
            "extra": "mean: 4.438166799995997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 59.16601327171962,
            "unit": "iter/sec",
            "range": "stddev: 0.00027075527326233476",
            "extra": "mean: 16.90159510000285 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 85.83563022040657,
            "unit": "iter/sec",
            "range": "stddev: 0.00021861138534646704",
            "extra": "mean: 11.65017368000008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 149.83159333455265,
            "unit": "iter/sec",
            "range": "stddev: 0.00032255581758148583",
            "extra": "mean: 6.674159819999659 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 152.44204952849972,
            "unit": "iter/sec",
            "range": "stddev: 0.000136477489931843",
            "extra": "mean: 6.559869819993764 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 139.42171608660374,
            "unit": "iter/sec",
            "range": "stddev: 0.00006407792310426102",
            "extra": "mean: 7.1724838000045565 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 19.71891685740636,
            "unit": "iter/sec",
            "range": "stddev: 0.0010339960306732095",
            "extra": "mean: 50.71272460000273 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2141833933235455,
            "unit": "iter/sec",
            "range": "stddev: 0.010614705542404568",
            "extra": "mean: 823.5988117600027 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.506871396339541,
            "unit": "iter/sec",
            "range": "stddev: 0.0010359886198067294",
            "extra": "mean: 74.0363901199953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 13.437577378777977,
            "unit": "iter/sec",
            "range": "stddev: 0.0013935098444203791",
            "extra": "mean: 74.41817611999795 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.46154647219522,
            "unit": "iter/sec",
            "range": "stddev: 0.0009031676710550521",
            "extra": "mean: 74.2856700799939 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "136981addb175c07666d053c7a79768b227022b7",
          "message": "Linux deploy (#385)\n\n* master -> main\r\n\r\n* debug linux release\r\n\r\n* debug linux\r\n\r\n* debug\r\n\r\n* update workflows",
          "timestamp": "2022-03-24T00:16:13Z",
          "tree_id": "f45273fc30284c0a55aa598dbd0aa694ffc5a949",
          "url": "https://github.com/OpenMined/TenSEAL/commit/136981addb175c07666d053c7a79768b227022b7"
        },
        "date": 1648081916757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.1809380169005124,
            "unit": "iter/sec",
            "range": "stddev: 0.007933296645978364",
            "extra": "mean: 846.7844930799993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 102.71985198749894,
            "unit": "iter/sec",
            "range": "stddev: 0.00011392931517814464",
            "extra": "mean: 9.735216519993628 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.457610924303721,
            "unit": "iter/sec",
            "range": "stddev: 0.0009050816192098601",
            "extra": "mean: 224.33541576000152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 130.95905955249447,
            "unit": "iter/sec",
            "range": "stddev: 0.00007021832075863207",
            "extra": "mean: 7.635974200006785 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.45831196879168784,
            "unit": "iter/sec",
            "range": "stddev: 0.006422935619889591",
            "extra": "mean: 2.1819198888399978 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 255.48328966567905,
            "unit": "iter/sec",
            "range": "stddev: 0.000041967895831751593",
            "extra": "mean: 3.9141503200016814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.446544060653767,
            "unit": "iter/sec",
            "range": "stddev: 0.00032400419613852146",
            "extra": "mean: 224.89375711998946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3788133029517594,
            "unit": "iter/sec",
            "range": "stddev: 0.006769628386097123",
            "extra": "mean: 2.639822815639995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6699.903548145217,
            "unit": "iter/sec",
            "range": "stddev: 0.000011190882723353256",
            "extra": "mean: 149.2558800009647 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 47.1155435487789,
            "unit": "iter/sec",
            "range": "stddev: 0.00010287038570718353",
            "extra": "mean: 21.224418200008586 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6775.075094843729,
            "unit": "iter/sec",
            "range": "stddev: 0.000006270716817898749",
            "extra": "mean: 147.59984000193072 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 46.93428458690553,
            "unit": "iter/sec",
            "range": "stddev: 0.00018370146995195244",
            "extra": "mean: 21.306386339997516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6746.461109972245,
            "unit": "iter/sec",
            "range": "stddev: 0.000005767500471599914",
            "extra": "mean: 148.22586000263982 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 47.145096260150055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000358452050993762",
            "extra": "mean: 21.211113759995897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6786.477861389395,
            "unit": "iter/sec",
            "range": "stddev: 0.000004105695338332159",
            "extra": "mean: 147.35184000073787 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 47.10490591527677,
            "unit": "iter/sec",
            "range": "stddev: 0.00003228551720514259",
            "extra": "mean: 21.229211280001437 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3465.6817107855404,
            "unit": "iter/sec",
            "range": "stddev: 0.000011386620939311093",
            "extra": "mean: 288.54351999143546 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 23.442179399652446,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870111272508634",
            "extra": "mean: 42.6581497799998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 14731.493487477415,
            "unit": "iter/sec",
            "range": "stddev: 0.000003830939773640871",
            "extra": "mean: 67.88178000078915 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 248.72758429705985,
            "unit": "iter/sec",
            "range": "stddev: 0.000020857335550484388",
            "extra": "mean: 4.020462799999223 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 18168.122722013166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033156026638045505",
            "extra": "mean: 55.0414599956639 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 254.94775579969556,
            "unit": "iter/sec",
            "range": "stddev: 0.000019510704243961684",
            "extra": "mean: 3.9223722400038246 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 13433.652265446406,
            "unit": "iter/sec",
            "range": "stddev: 0.000003789002650868368",
            "extra": "mean: 74.43992000389699 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 53.42140639966135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000692504665340007",
            "extra": "mean: 18.71908785999949 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 100.67787541105386,
            "unit": "iter/sec",
            "range": "stddev: 0.00005532358751034816",
            "extra": "mean: 9.932668880001074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 14860.660503566354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036784482452543316",
            "extra": "mean: 67.29175999680592 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 248.64149497703718,
            "unit": "iter/sec",
            "range": "stddev: 0.000018613118567870338",
            "extra": "mean: 4.021854840007109 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 18518.724283034706,
            "unit": "iter/sec",
            "range": "stddev: 0.000003373957244330674",
            "extra": "mean: 53.999399997337605 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 255.24046058321625,
            "unit": "iter/sec",
            "range": "stddev: 0.000018072772091227865",
            "extra": "mean: 3.917874139997366 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 13337.971392194415,
            "unit": "iter/sec",
            "range": "stddev: 0.00000402923565138239",
            "extra": "mean: 74.97391999095271 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 44.795261501337194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008062419773593432",
            "extra": "mean: 22.323789759998363 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 101.05979507169367,
            "unit": "iter/sec",
            "range": "stddev: 0.000029506205423138652",
            "extra": "mean: 9.895131879998189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 14713.28226766676,
            "unit": "iter/sec",
            "range": "stddev: 0.000003872856502772655",
            "extra": "mean: 67.9658000035488 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 248.60267768646878,
            "unit": "iter/sec",
            "range": "stddev: 0.00002139909852453595",
            "extra": "mean: 4.022482820000732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 18103.68268670813,
            "unit": "iter/sec",
            "range": "stddev: 0.000003446552379168473",
            "extra": "mean: 55.237380001926795 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 255.35674222935958,
            "unit": "iter/sec",
            "range": "stddev: 0.000020765823928532943",
            "extra": "mean: 3.9160900600063546 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 13496.38040619246,
            "unit": "iter/sec",
            "range": "stddev: 0.000003537927900303122",
            "extra": "mean: 74.09393999751046 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 38.362617030394006,
            "unit": "iter/sec",
            "range": "stddev: 0.0001354980292199576",
            "extra": "mean: 26.067043320003904 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 101.06357384906202,
            "unit": "iter/sec",
            "range": "stddev: 0.000032094412623802423",
            "extra": "mean: 9.894761900004596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6603.452258553356,
            "unit": "iter/sec",
            "range": "stddev: 0.000006360594608576181",
            "extra": "mean: 151.43593999709992 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 123.80533331722414,
            "unit": "iter/sec",
            "range": "stddev: 0.00003605008041779906",
            "extra": "mean: 8.077196460008054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7844.039165655978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051605267948797635",
            "extra": "mean: 127.48533999911159 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 127.20441628095755,
            "unit": "iter/sec",
            "range": "stddev: 0.00002282191818108288",
            "extra": "mean: 7.861362279995773 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6176.876590650282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048625050091712195",
            "extra": "mean: 161.89412000130687 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 19.180823031544964,
            "unit": "iter/sec",
            "range": "stddev: 0.00015279450571878544",
            "extra": "mean: 52.135406200004574 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 50.14134197478465,
            "unit": "iter/sec",
            "range": "stddev: 0.00009131206908915827",
            "extra": "mean: 19.943622580003648 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3222.149208291977,
            "unit": "iter/sec",
            "range": "stddev: 0.000009729992567135458",
            "extra": "mean: 310.351860002811 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 61.744290938847705,
            "unit": "iter/sec",
            "range": "stddev: 0.00005983824262326356",
            "extra": "mean: 16.1958293600037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3708.1966646627143,
            "unit": "iter/sec",
            "range": "stddev: 0.000010831670933952066",
            "extra": "mean: 269.6728599994458 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 63.42914805969888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000462279379375798",
            "extra": "mean: 15.765622439998877 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3055.111461177063,
            "unit": "iter/sec",
            "range": "stddev: 0.00001097509251212058",
            "extra": "mean: 327.320299998064 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.5714855362887,
            "unit": "iter/sec",
            "range": "stddev: 0.00021515829077331085",
            "extra": "mean: 104.47699014000136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 25.036788054896025,
            "unit": "iter/sec",
            "range": "stddev: 0.00015582226216115958",
            "extra": "mean: 39.94122560000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1235.350106613527,
            "unit": "iter/sec",
            "range": "stddev: 0.000007071115801229467",
            "extra": "mean: 809.4871200046327 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 581.330334476898,
            "unit": "iter/sec",
            "range": "stddev: 0.000013370016413109997",
            "extra": "mean: 1.7201923599941438 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1228.0591573668166,
            "unit": "iter/sec",
            "range": "stddev: 0.00000874500828003978",
            "extra": "mean: 814.2930200074261 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 61.19907878936051,
            "unit": "iter/sec",
            "range": "stddev: 0.00006791905090695073",
            "extra": "mean: 16.340115240000156 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1149.0469735407921,
            "unit": "iter/sec",
            "range": "stddev: 0.000007854431079307904",
            "extra": "mean: 870.2864400038379 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 559.9894085853012,
            "unit": "iter/sec",
            "range": "stddev: 0.000012614584624650682",
            "extra": "mean: 1.7857480599968767 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1142.3211788123733,
            "unit": "iter/sec",
            "range": "stddev: 0.000007043561893493146",
            "extra": "mean: 875.4105400021217 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 49.96106529187005,
            "unit": "iter/sec",
            "range": "stddev: 0.00005284773343467224",
            "extra": "mean: 20.01558601999477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 901.082237615742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069435141745267305",
            "extra": "mean: 1.1097766199964099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 494.82558902172957,
            "unit": "iter/sec",
            "range": "stddev: 0.000011630617920595714",
            "extra": "mean: 2.0209140800034224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 898.7691984992989,
            "unit": "iter/sec",
            "range": "stddev: 0.000008780751048946117",
            "extra": "mean: 1.1126326999965386 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 41.98078424645962,
            "unit": "iter/sec",
            "range": "stddev: 0.00009303688870169754",
            "extra": "mean: 23.820422079998025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 454.8194460495144,
            "unit": "iter/sec",
            "range": "stddev: 0.000007801057396681766",
            "extra": "mean: 2.1986746799984758 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 248.70018836129393,
            "unit": "iter/sec",
            "range": "stddev: 0.000015192279458538981",
            "extra": "mean: 4.020905680004035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 452.4757973414665,
            "unit": "iter/sec",
            "range": "stddev: 0.000011060968382190787",
            "extra": "mean: 2.2100629599981403 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 21.027516569912702,
            "unit": "iter/sec",
            "range": "stddev: 0.00020412153466370397",
            "extra": "mean: 47.556733420001365 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 228.83380549001367,
            "unit": "iter/sec",
            "range": "stddev: 0.000013728580785447362",
            "extra": "mean: 4.369983699998556 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 124.57625914898283,
            "unit": "iter/sec",
            "range": "stddev: 0.000015652678377156646",
            "extra": "mean: 8.027211660000829 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 227.77971833432872,
            "unit": "iter/sec",
            "range": "stddev: 0.000015248599538584465",
            "extra": "mean: 4.390206500002023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.501730365386136,
            "unit": "iter/sec",
            "range": "stddev: 0.00015331140188783445",
            "extra": "mean: 95.22240290000354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 72.36473131778489,
            "unit": "iter/sec",
            "range": "stddev: 0.00021058266928372882",
            "extra": "mean: 13.818886380004187 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 48.94834313456953,
            "unit": "iter/sec",
            "range": "stddev: 0.000038005424133668825",
            "extra": "mean: 20.42970069999683 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 28.98309634001462,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605606669710925",
            "extra": "mean: 34.50286981999852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.652905437024511,
            "unit": "iter/sec",
            "range": "stddev: 0.00029444634704197303",
            "extra": "mean: 68.24585091999779 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 634.6332246420656,
            "unit": "iter/sec",
            "range": "stddev: 0.000019708660010691135",
            "extra": "mean: 1.5757132800035833 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 293.08173587128385,
            "unit": "iter/sec",
            "range": "stddev: 0.00002731047999561407",
            "extra": "mean: 3.412017460000243 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 79.87039131292099,
            "unit": "iter/sec",
            "range": "stddev: 0.00005139078940860406",
            "extra": "mean: 12.52028421999512 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 112.96358717047858,
            "unit": "iter/sec",
            "range": "stddev: 0.000027416408884940554",
            "extra": "mean: 8.852410099998451 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 194.54530981087083,
            "unit": "iter/sec",
            "range": "stddev: 0.000037747994988788026",
            "extra": "mean: 5.140190739998616 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 187.6135394928082,
            "unit": "iter/sec",
            "range": "stddev: 0.00003948064187592383",
            "extra": "mean: 5.330105719999665 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 170.44945715105666,
            "unit": "iter/sec",
            "range": "stddev: 0.000040735139056910764",
            "extra": "mean: 5.866841799993381 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 25.115005452557607,
            "unit": "iter/sec",
            "range": "stddev: 0.00008937423626697783",
            "extra": "mean: 39.816833880008744 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.54627327813897,
            "unit": "iter/sec",
            "range": "stddev: 0.0014065025037031922",
            "extra": "mean: 646.7162138399999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 18.13661496412533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005282536703102497",
            "extra": "mean: 55.1370805400029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 18.10795927291391,
            "unit": "iter/sec",
            "range": "stddev: 0.000039831441617382507",
            "extra": "mean: 55.224334500012446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.879345268460792,
            "unit": "iter/sec",
            "range": "stddev: 0.00014456687202695737",
            "extra": "mean: 55.93045969999821 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c44b434b374a987aa5d7ab129666bf2dd4acbdb9",
          "message": "Update pre-commit depends (#389)\n\n* master -> main\r\n\r\n* update depends\r\n\r\n* update black",
          "timestamp": "2022-04-12T11:28:27+01:00",
          "tree_id": "92ea2b4130e8164089ca84f24b4e23b86fd832fb",
          "url": "https://github.com/OpenMined/TenSEAL/commit/c44b434b374a987aa5d7ab129666bf2dd4acbdb9"
        },
        "date": 1649760213785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.2872918091135856,
            "unit": "iter/sec",
            "range": "stddev: 0.008908689854474598",
            "extra": "mean: 776.8246429600049 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 109.73420531942246,
            "unit": "iter/sec",
            "range": "stddev: 0.00013020285102514263",
            "extra": "mean: 9.112928799995643 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.76730636973773,
            "unit": "iter/sec",
            "range": "stddev: 0.000575064352110334",
            "extra": "mean: 209.76205899999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 141.307612830638,
            "unit": "iter/sec",
            "range": "stddev: 0.00009650675932117297",
            "extra": "mean: 7.076759560000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.49793579592456333,
            "unit": "iter/sec",
            "range": "stddev: 0.003651729692821765",
            "extra": "mean: 2.0082910451199996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 278.6201238061151,
            "unit": "iter/sec",
            "range": "stddev: 0.0001734596163361241",
            "extra": "mean: 3.5891162000052645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.873604292061236,
            "unit": "iter/sec",
            "range": "stddev: 0.0007160482764419239",
            "extra": "mean: 205.18694995999795 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4102035879154647,
            "unit": "iter/sec",
            "range": "stddev: 0.014720815249325935",
            "extra": "mean: 2.437813879400005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 7325.4309513819,
            "unit": "iter/sec",
            "range": "stddev: 0.000012240426004251934",
            "extra": "mean: 136.51074000108565 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 50.661909961839974,
            "unit": "iter/sec",
            "range": "stddev: 0.00006754067565677945",
            "extra": "mean: 19.738695220003137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 7369.591033378518,
            "unit": "iter/sec",
            "range": "stddev: 0.000010555382942761555",
            "extra": "mean: 135.69274000019504 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 50.51301416235588,
            "unit": "iter/sec",
            "range": "stddev: 0.00010751615988408303",
            "extra": "mean: 19.79687842000203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7477.602710424448,
            "unit": "iter/sec",
            "range": "stddev: 0.000009104667704856345",
            "extra": "mean: 133.7327000010191 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 50.56930432283827,
            "unit": "iter/sec",
            "range": "stddev: 0.00006897190837265143",
            "extra": "mean: 19.77484194000226 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7421.1095240939985,
            "unit": "iter/sec",
            "range": "stddev: 0.000008099723714510292",
            "extra": "mean: 134.75074000098175 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 50.49163569346896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000936003654553012",
            "extra": "mean: 19.80526054000165 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3497.0439487499916,
            "unit": "iter/sec",
            "range": "stddev: 0.00001901203608755223",
            "extra": "mean: 285.95580000001064 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 25.227763985568494,
            "unit": "iter/sec",
            "range": "stddev: 0.00016663519859729816",
            "extra": "mean: 39.63886774000457 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 15775.533095059996,
            "unit": "iter/sec",
            "range": "stddev: 0.000005001150919535552",
            "extra": "mean: 63.38929999856191 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 274.98420861934187,
            "unit": "iter/sec",
            "range": "stddev: 0.00004997867576829777",
            "extra": "mean: 3.636572460000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 19950.992381198324,
            "unit": "iter/sec",
            "range": "stddev: 0.000003891094242269681",
            "extra": "mean: 50.12282000279811 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 283.2486707774245,
            "unit": "iter/sec",
            "range": "stddev: 0.00002428361827023177",
            "extra": "mean: 3.5304667000036716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 14286.297983229491,
            "unit": "iter/sec",
            "range": "stddev: 0.000004880080061842",
            "extra": "mean: 69.99713999903179 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 57.770563297397715,
            "unit": "iter/sec",
            "range": "stddev: 0.000015985690082616207",
            "extra": "mean: 17.309853720000774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 108.96678356165474,
            "unit": "iter/sec",
            "range": "stddev: 0.00007946513015275237",
            "extra": "mean: 9.177108540000063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 16306.558073347127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046428736565159136",
            "extra": "mean: 61.32502000127715 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 274.5804003729548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000407520492082465",
            "extra": "mean: 3.641920540001138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 20148.770461047567,
            "unit": "iter/sec",
            "range": "stddev: 0.000005328661038849316",
            "extra": "mean: 49.630820001311804 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 281.6194567413385,
            "unit": "iter/sec",
            "range": "stddev: 0.000025689260293935542",
            "extra": "mean: 3.5508910199996535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 14692.671912281523,
            "unit": "iter/sec",
            "range": "stddev: 0.00000433264872793592",
            "extra": "mean: 68.06114000028174 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 48.42784971580421,
            "unit": "iter/sec",
            "range": "stddev: 0.00005620863006078505",
            "extra": "mean: 20.64927527999771 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 110.21655898386025,
            "unit": "iter/sec",
            "range": "stddev: 0.00004832843221265954",
            "extra": "mean: 9.07304682000131 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 15537.823100815824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048696817551940545",
            "extra": "mean: 64.35908000185009 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 272.1459383247224,
            "unit": "iter/sec",
            "range": "stddev: 0.00004602493342693849",
            "extra": "mean: 3.6744990800002597 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 19801.580245148827,
            "unit": "iter/sec",
            "range": "stddev: 0.000004300730407135383",
            "extra": "mean: 50.50102000041079 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 282.5263456104038,
            "unit": "iter/sec",
            "range": "stddev: 0.00003318626386308051",
            "extra": "mean: 3.5394929199947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 14469.397081270212,
            "unit": "iter/sec",
            "range": "stddev: 0.000004754267292313982",
            "extra": "mean: 69.11137999622952 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 41.645163256027374,
            "unit": "iter/sec",
            "range": "stddev: 0.000029284880651892257",
            "extra": "mean: 24.012392360000376 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 108.76998179617782,
            "unit": "iter/sec",
            "range": "stddev: 0.00005965475642404511",
            "extra": "mean: 9.193713039999238 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 7185.036385730366,
            "unit": "iter/sec",
            "range": "stddev: 0.000010339019266306356",
            "extra": "mean: 139.1781400002401 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 135.22742822035156,
            "unit": "iter/sec",
            "range": "stddev: 0.00006072587533740276",
            "extra": "mean: 7.394949480001287 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 8470.712765120694,
            "unit": "iter/sec",
            "range": "stddev: 0.000008563153037663279",
            "extra": "mean: 118.0538199946568 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 138.72568197747114,
            "unit": "iter/sec",
            "range": "stddev: 0.000017614611835259883",
            "extra": "mean: 7.208470600003238 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6787.010313907522,
            "unit": "iter/sec",
            "range": "stddev: 0.000007730505186981956",
            "extra": "mean: 147.34027999793398 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 20.865473761436782,
            "unit": "iter/sec",
            "range": "stddev: 0.00014344719980971275",
            "extra": "mean: 47.92606251999814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 53.44877436220386,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214757094240747",
            "extra": "mean: 18.709502919998613 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3321.5308271076306,
            "unit": "iter/sec",
            "range": "stddev: 0.00002696459398476781",
            "extra": "mean: 301.0660000018106 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 66.55632931769284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001534273859841984",
            "extra": "mean: 15.02486706000127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3960.9811667189074,
            "unit": "iter/sec",
            "range": "stddev: 0.00001821741163360602",
            "extra": "mean: 252.4627000002511 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 68.23031424226981,
            "unit": "iter/sec",
            "range": "stddev: 0.000027498387539053928",
            "extra": "mean: 14.656242040000507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3158.440980873134,
            "unit": "iter/sec",
            "range": "stddev: 0.000024350471394530973",
            "extra": "mean: 316.61190000249917 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 10.426654045777527,
            "unit": "iter/sec",
            "range": "stddev: 0.00019931419357865503",
            "extra": "mean: 95.90804447999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 26.743248204331483,
            "unit": "iter/sec",
            "range": "stddev: 0.00009904743790491894",
            "extra": "mean: 37.39261560000159 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1389.8825004385913,
            "unit": "iter/sec",
            "range": "stddev: 0.000013937851721146057",
            "extra": "mean: 719.4852800034823 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 651.396923960745,
            "unit": "iter/sec",
            "range": "stddev: 0.000014013364782352605",
            "extra": "mean: 1.5351622999992287 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1380.9535080765743,
            "unit": "iter/sec",
            "range": "stddev: 0.000010006156240090471",
            "extra": "mean: 724.1373399983786 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 66.33381164832404,
            "unit": "iter/sec",
            "range": "stddev: 0.000047560347446904633",
            "extra": "mean: 15.075268179998602 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1295.514333437757,
            "unit": "iter/sec",
            "range": "stddev: 0.000009464691571575358",
            "extra": "mean: 771.8942000019524 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 631.5048233269624,
            "unit": "iter/sec",
            "range": "stddev: 0.000011055959031029134",
            "extra": "mean: 1.5835191799988024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1288.2773613754216,
            "unit": "iter/sec",
            "range": "stddev: 0.000006992908059450185",
            "extra": "mean: 776.2303599997722 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 53.98748351805925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004091568384768562",
            "extra": "mean: 18.522811860002548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 1017.9959906041312,
            "unit": "iter/sec",
            "range": "stddev: 0.000011989181820183656",
            "extra": "mean: 982.3221399983596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 555.8831560287169,
            "unit": "iter/sec",
            "range": "stddev: 0.000016117102103040295",
            "extra": "mean: 1.7989392000004045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 1012.4447276028118,
            "unit": "iter/sec",
            "range": "stddev: 0.000011535652301116027",
            "extra": "mean: 987.708240002121 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 45.628134664830284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001659278617561813",
            "extra": "mean: 21.916302459999315 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 506.23517718006656,
            "unit": "iter/sec",
            "range": "stddev: 0.000022333130149168113",
            "extra": "mean: 1.975366480003231 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 276.838933901301,
            "unit": "iter/sec",
            "range": "stddev: 0.000029077656175917173",
            "extra": "mean: 3.6122086799991844 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 507.31899989307715,
            "unit": "iter/sec",
            "range": "stddev: 0.000024724637050131413",
            "extra": "mean: 1.971146360003786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 22.696418761678963,
            "unit": "iter/sec",
            "range": "stddev: 0.00003019488078543986",
            "extra": "mean: 44.05981448000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 247.66687893367651,
            "unit": "iter/sec",
            "range": "stddev: 0.000027726704104858292",
            "extra": "mean: 4.037681600000269 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 134.670665473302,
            "unit": "iter/sec",
            "range": "stddev: 0.00004901730976909897",
            "extra": "mean: 7.425522079997791 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 248.25086166656726,
            "unit": "iter/sec",
            "range": "stddev: 0.00004070516496998266",
            "extra": "mean: 4.028183399996124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 11.3502615301611,
            "unit": "iter/sec",
            "range": "stddev: 0.00009905131833879948",
            "extra": "mean: 88.10369675999937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 78.30936140475285,
            "unit": "iter/sec",
            "range": "stddev: 0.00009911406057406408",
            "extra": "mean: 12.769865339998887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 52.958023128011675,
            "unit": "iter/sec",
            "range": "stddev: 0.00013982371440297042",
            "extra": "mean: 18.882880079997904 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 31.268031296524946,
            "unit": "iter/sec",
            "range": "stddev: 0.00011523905491860855",
            "extra": "mean: 31.981546599997724 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 15.792800598908405,
            "unit": "iter/sec",
            "range": "stddev: 0.00020774558324821016",
            "extra": "mean: 63.31999152000435 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 701.4522643215627,
            "unit": "iter/sec",
            "range": "stddev: 0.00003194768277670608",
            "extra": "mean: 1.425613760000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 321.9314983342768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000340172447622277",
            "extra": "mean: 3.1062508799982425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 85.45182405009125,
            "unit": "iter/sec",
            "range": "stddev: 0.000019675633991772886",
            "extra": "mean: 11.702500340002189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 122.01902727125416,
            "unit": "iter/sec",
            "range": "stddev: 0.00014099016130045668",
            "extra": "mean: 8.195443140002682 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 213.85838063649078,
            "unit": "iter/sec",
            "range": "stddev: 0.000047627637669575004",
            "extra": "mean: 4.675991639999211 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 207.6196166786966,
            "unit": "iter/sec",
            "range": "stddev: 0.00003794160100608507",
            "extra": "mean: 4.81650056000035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 187.3759072606587,
            "unit": "iter/sec",
            "range": "stddev: 0.00003641363713179387",
            "extra": "mean: 5.336865419997139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 27.14657675051514,
            "unit": "iter/sec",
            "range": "stddev: 0.00004117388161626853",
            "extra": "mean: 36.837057180000556 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.6932732053589463,
            "unit": "iter/sec",
            "range": "stddev: 0.002360300644318374",
            "extra": "mean: 590.5721515200001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 19.331975879361856,
            "unit": "iter/sec",
            "range": "stddev: 0.00010487208172307706",
            "extra": "mean: 51.727769900001014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 19.254579362147236,
            "unit": "iter/sec",
            "range": "stddev: 0.00012975679165197124",
            "extra": "mean: 51.93569701999877 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 19.09059665698233,
            "unit": "iter/sec",
            "range": "stddev: 0.00022176241200937092",
            "extra": "mean: 52.38180963999639 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vishnu98dasu@gmail.com",
            "name": "Vishnu Asutosh Dasu",
            "username": "vdasu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9c8efd783847be6878a61f859328dc78a03ef22",
          "message": "Change minimum required CMake version to 3.14 (#388)\n\n* Change minimum CMake version to 3.14\r\n\r\n* Update CMake version in README\r\n\r\nCo-authored-by: Bogdan Cebere <bogdan.cebere@gmail.com>",
          "timestamp": "2022-04-12T14:05:33+01:00",
          "tree_id": "9b8c8763fef2eadfec106c48dcdfd9799932ca7b",
          "url": "https://github.com/OpenMined/TenSEAL/commit/e9c8efd783847be6878a61f859328dc78a03ef22"
        },
        "date": 1649769805811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.011384327068819,
            "unit": "iter/sec",
            "range": "stddev: 0.021450166235601132",
            "extra": "mean: 988.7438169999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 84.39106363854508,
            "unit": "iter/sec",
            "range": "stddev: 0.00017388479486674089",
            "extra": "mean: 11.849595879998562 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.8047457515421126,
            "unit": "iter/sec",
            "range": "stddev: 0.001478392664306691",
            "extra": "mean: 262.82965151999633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 107.3090222511386,
            "unit": "iter/sec",
            "range": "stddev: 0.00009520113382852094",
            "extra": "mean: 9.318880920000083 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.38996458040815296,
            "unit": "iter/sec",
            "range": "stddev: 0.0475799088953525",
            "extra": "mean: 2.5643354556799975 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 221.53502255163116,
            "unit": "iter/sec",
            "range": "stddev: 0.00019320297916393755",
            "extra": "mean: 4.513958959996671 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.8526216665266015,
            "unit": "iter/sec",
            "range": "stddev: 0.0020307454683735284",
            "extra": "mean: 259.5635093599958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3231848769742356,
            "unit": "iter/sec",
            "range": "stddev: 0.0626295587728671",
            "extra": "mean: 3.094204188519998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5718.813707574451,
            "unit": "iter/sec",
            "range": "stddev: 0.000010547406520053201",
            "extra": "mean: 174.86144000031345 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.348243780026245,
            "unit": "iter/sec",
            "range": "stddev: 0.0004356333261282011",
            "extra": "mean: 25.414094860000205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5906.013822205073,
            "unit": "iter/sec",
            "range": "stddev: 0.000005464537382801604",
            "extra": "mean: 169.31893999981182 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.169375599789625,
            "unit": "iter/sec",
            "range": "stddev: 0.00014981908267912956",
            "extra": "mean: 25.53014912000208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5774.766993894625,
            "unit": "iter/sec",
            "range": "stddev: 0.000006859022018548502",
            "extra": "mean: 173.16716000095767 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 38.50098805471002,
            "unit": "iter/sec",
            "range": "stddev: 0.0001505975196250349",
            "extra": "mean: 25.973359399997662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5847.168122819824,
            "unit": "iter/sec",
            "range": "stddev: 0.00000900517312145062",
            "extra": "mean: 171.02296000302886 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.073215046235305,
            "unit": "iter/sec",
            "range": "stddev: 0.0004159137142175128",
            "extra": "mean: 24.954324199998155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3024.007962062037,
            "unit": "iter/sec",
            "range": "stddev: 0.000013410481592635595",
            "extra": "mean: 330.6869600032769 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.425933455188606,
            "unit": "iter/sec",
            "range": "stddev: 0.00021327384994147366",
            "extra": "mean: 51.477577759997075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12642.074797162759,
            "unit": "iter/sec",
            "range": "stddev: 0.00000635412023016963",
            "extra": "mean: 79.1009399995346 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 208.0804869306718,
            "unit": "iter/sec",
            "range": "stddev: 0.000055976629384107244",
            "extra": "mean: 4.805832659999396 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 15845.46990654333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018851289904684036",
            "extra": "mean: 63.10952000148973 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 222.56609970561348,
            "unit": "iter/sec",
            "range": "stddev: 0.00006597085588969747",
            "extra": "mean: 4.493047240000578 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11334.817590017607,
            "unit": "iter/sec",
            "range": "stddev: 0.000003851884995841167",
            "extra": "mean: 88.22373999919365 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.58606806700862,
            "unit": "iter/sec",
            "range": "stddev: 0.00023505938707633672",
            "extra": "mean: 22.428530779998255 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.60814746145786,
            "unit": "iter/sec",
            "range": "stddev: 0.00010669453417635664",
            "extra": "mean: 11.960556840001573 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12352.599518403964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041285873169207704",
            "extra": "mean: 80.95461999801046 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 207.376609983855,
            "unit": "iter/sec",
            "range": "stddev: 0.000012631757318952405",
            "extra": "mean: 4.822144600000229 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15637.407304737366,
            "unit": "iter/sec",
            "range": "stddev: 0.000004035250784625718",
            "extra": "mean: 63.94922000254156 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 212.99462122152812,
            "unit": "iter/sec",
            "range": "stddev: 0.00005432280707620847",
            "extra": "mean: 4.694954239994331 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11436.267056436058,
            "unit": "iter/sec",
            "range": "stddev: 0.000004451796984262206",
            "extra": "mean: 87.44111999703819 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 38.3575312189769,
            "unit": "iter/sec",
            "range": "stddev: 0.00038714714883538224",
            "extra": "mean: 26.07049954000331 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 84.35972303940365,
            "unit": "iter/sec",
            "range": "stddev: 0.00008534109172491311",
            "extra": "mean: 11.85399813999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12549.173938721566,
            "unit": "iter/sec",
            "range": "stddev: 0.000003840452206185054",
            "extra": "mean: 79.68651999590293 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 222.40192495451132,
            "unit": "iter/sec",
            "range": "stddev: 0.00005232211201839202",
            "extra": "mean: 4.496363959999599 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 16409.32469729647,
            "unit": "iter/sec",
            "range": "stddev: 0.000002921359384322946",
            "extra": "mean: 60.94095999969796 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 230.1667837312299,
            "unit": "iter/sec",
            "range": "stddev: 0.00005872991297932992",
            "extra": "mean: 4.344675559996176 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11472.736876295383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038083171712935716",
            "extra": "mean: 87.1631600011824 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 34.00556571678241,
            "unit": "iter/sec",
            "range": "stddev: 0.00019788847023904444",
            "extra": "mean: 29.406950860002325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 86.27292345122252,
            "unit": "iter/sec",
            "range": "stddev: 0.00027844418310449514",
            "extra": "mean: 11.591122220002035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6002.181913109392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051251673947335066",
            "extra": "mean: 166.60608000165666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 109.91168905737602,
            "unit": "iter/sec",
            "range": "stddev: 0.00011082809435059585",
            "extra": "mean: 9.098213379998015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7372.267358618481,
            "unit": "iter/sec",
            "range": "stddev: 0.000008774754278147768",
            "extra": "mean: 135.64347999817983 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 114.11784966767048,
            "unit": "iter/sec",
            "range": "stddev: 0.00017124752569572604",
            "extra": "mean: 8.762871040000844 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5650.645241484439,
            "unit": "iter/sec",
            "range": "stddev: 0.000006336854796921298",
            "extra": "mean: 176.97094000141078 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.182120611477337,
            "unit": "iter/sec",
            "range": "stddev: 0.00039124865852899627",
            "extra": "mean: 58.2000337799991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 44.37854506636028,
            "unit": "iter/sec",
            "range": "stddev: 0.00026231041847664583",
            "extra": "mean: 22.5334110999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2816.9207698188015,
            "unit": "iter/sec",
            "range": "stddev: 0.000016673886504751475",
            "extra": "mean: 354.9975600003563 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.10050430615614,
            "unit": "iter/sec",
            "range": "stddev: 0.0002099921254460789",
            "extra": "mean: 18.148654219999116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3358.9874882913377,
            "unit": "iter/sec",
            "range": "stddev: 0.000008416130640383896",
            "extra": "mean: 297.7087600015693 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.733453178057836,
            "unit": "iter/sec",
            "range": "stddev: 0.00014140619831179904",
            "extra": "mean: 17.626284740001665 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2716.294157690295,
            "unit": "iter/sec",
            "range": "stddev: 0.000015405103541639325",
            "extra": "mean: 368.1486400023459 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.582666368522304,
            "unit": "iter/sec",
            "range": "stddev: 0.0013685047092167524",
            "extra": "mean: 116.51390803999904 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.92883150272728,
            "unit": "iter/sec",
            "range": "stddev: 0.0005944590131415778",
            "extra": "mean: 45.60206502000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1081.5367529752577,
            "unit": "iter/sec",
            "range": "stddev: 0.000017933541675435096",
            "extra": "mean: 924.6102800011613 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 517.8665245640051,
            "unit": "iter/sec",
            "range": "stddev: 0.000043470504839053545",
            "extra": "mean: 1.9309995000003255 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1092.7320142739793,
            "unit": "iter/sec",
            "range": "stddev: 0.000028252567242582105",
            "extra": "mean: 915.1374599969131 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 54.30418470599503,
            "unit": "iter/sec",
            "range": "stddev: 0.0004346353217149622",
            "extra": "mean: 18.414787100000467 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1080.4732360390435,
            "unit": "iter/sec",
            "range": "stddev: 0.000030001787026603413",
            "extra": "mean: 925.5203800012168 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 499.36901728379087,
            "unit": "iter/sec",
            "range": "stddev: 0.00005220533545253551",
            "extra": "mean: 2.0025271200029238 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1012.9791191159776,
            "unit": "iter/sec",
            "range": "stddev: 0.00002451678591140025",
            "extra": "mean: 987.1871800010011 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 42.57424642894093,
            "unit": "iter/sec",
            "range": "stddev: 0.0005733052220432633",
            "extra": "mean: 23.48837816000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 757.3531531217164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001657622962388431",
            "extra": "mean: 1.320387980003943 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 416.2416596516718,
            "unit": "iter/sec",
            "range": "stddev: 0.000012490169775112155",
            "extra": "mean: 2.4024505399984264 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 767.8025383856831,
            "unit": "iter/sec",
            "range": "stddev: 0.000022631814849053233",
            "extra": "mean: 1.3024182000003748 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.87783262741808,
            "unit": "iter/sec",
            "range": "stddev: 0.00002461577903717469",
            "extra": "mean: 28.671506359999057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 382.17512003909223,
            "unit": "iter/sec",
            "range": "stddev: 0.00003619840052611367",
            "extra": "mean: 2.616601519998767 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 210.99630539563717,
            "unit": "iter/sec",
            "range": "stddev: 0.00004824688389486656",
            "extra": "mean: 4.73941947999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 394.56231265786323,
            "unit": "iter/sec",
            "range": "stddev: 0.00003109561828454677",
            "extra": "mean: 2.5344539200000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.618709577759855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002950444208118389",
            "extra": "mean: 56.757845720001114 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 190.59737846127578,
            "unit": "iter/sec",
            "range": "stddev: 0.00003956868146096848",
            "extra": "mean: 5.246661879996282 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 103.86624631607508,
            "unit": "iter/sec",
            "range": "stddev: 0.0001749882886369057",
            "extra": "mean: 9.627766820001398 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 199.33613094951207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000603392595646754",
            "extra": "mean: 5.01665199999934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.80310554253032,
            "unit": "iter/sec",
            "range": "stddev: 0.0008369103405154463",
            "extra": "mean: 113.5962752200021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.018313497212525,
            "unit": "iter/sec",
            "range": "stddev: 0.00033108892937227884",
            "extra": "mean: 16.388522439999633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.1863207900339,
            "unit": "iter/sec",
            "range": "stddev: 0.0003836492814321702",
            "extra": "mean: 24.884089419999782 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.92421730475739,
            "unit": "iter/sec",
            "range": "stddev: 0.0002641704052428124",
            "extra": "mean: 41.79865059999884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.200452453876565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004355976244974012",
            "extra": "mean: 81.96417336000195 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 531.2199731231689,
            "unit": "iter/sec",
            "range": "stddev: 0.000007748483743629966",
            "extra": "mean: 1.8824593399995138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 251.70738404449088,
            "unit": "iter/sec",
            "range": "stddev: 0.000028491197812377876",
            "extra": "mean: 3.9728671600005323 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.14378169545698,
            "unit": "iter/sec",
            "range": "stddev: 0.0004034150902429286",
            "extra": "mean: 14.893411940001897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 94.1700992280435,
            "unit": "iter/sec",
            "range": "stddev: 0.00009017888771338525",
            "extra": "mean: 10.61908193999443 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 163.51909737237213,
            "unit": "iter/sec",
            "range": "stddev: 0.00006891031324319587",
            "extra": "mean: 6.115493640004389 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 157.30232502639822,
            "unit": "iter/sec",
            "range": "stddev: 0.00003696203051770523",
            "extra": "mean: 6.357185120004942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 141.7885244745683,
            "unit": "iter/sec",
            "range": "stddev: 0.00005088503726580052",
            "extra": "mean: 7.05275693999738 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.994319110660395,
            "unit": "iter/sec",
            "range": "stddev: 0.0010956088144667574",
            "extra": "mean: 47.63193294000302 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3387515374091474,
            "unit": "iter/sec",
            "range": "stddev: 0.016576332480164973",
            "extra": "mean: 746.964595039999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.912735178869637,
            "unit": "iter/sec",
            "range": "stddev: 0.00025134161482554424",
            "extra": "mean: 67.0567798600041 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.170608152584894,
            "unit": "iter/sec",
            "range": "stddev: 0.0011994659153962777",
            "extra": "mean: 65.91693556000337 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.876586439325946,
            "unit": "iter/sec",
            "range": "stddev: 0.0009259592339417245",
            "extra": "mean: 67.2197216800032 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "h.tsai@hotmail.com",
            "name": "Hongyu Cai",
            "username": "standbyme"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49f59eaac2af7b9a854bd517183dd333252d71cd",
          "message": "Update Tutorial 2 - Working with Approximate Numbers.ipynb (#378)\n\nCo-authored-by: Bogdan Cebere <bogdan.cebere@gmail.com>",
          "timestamp": "2022-04-13T06:26:44+01:00",
          "tree_id": "6ca55bcca1264aaa4ed06a1582c537b41578ceeb",
          "url": "https://github.com/OpenMined/TenSEAL/commit/49f59eaac2af7b9a854bd517183dd333252d71cd"
        },
        "date": 1649829072180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.052563969417577,
            "unit": "iter/sec",
            "range": "stddev: 0.012379753931302986",
            "extra": "mean: 950.0610215199913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 89.53701334420303,
            "unit": "iter/sec",
            "range": "stddev: 0.00023801161743844054",
            "extra": "mean: 11.16856552000172 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.154111430519408,
            "unit": "iter/sec",
            "range": "stddev: 0.004617453215175992",
            "extra": "mean: 240.72536732000117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 134.15386775718932,
            "unit": "iter/sec",
            "range": "stddev: 0.00025182955201034766",
            "extra": "mean: 7.454127239998343 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.40768912485076475,
            "unit": "iter/sec",
            "range": "stddev: 0.027350778094146534",
            "extra": "mean: 2.4528493380000054 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 222.71184580244716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002058955565294472",
            "extra": "mean: 4.4901069199841 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.9833174814398187,
            "unit": "iter/sec",
            "range": "stddev: 0.0034202481639022926",
            "extra": "mean: 251.0470241600069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.33673851229875995,
            "unit": "iter/sec",
            "range": "stddev: 0.021063521983654358",
            "extra": "mean: 2.969663295039991 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6179.433190419169,
            "unit": "iter/sec",
            "range": "stddev: 0.000013581682803423263",
            "extra": "mean: 161.82713999569387 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.45114005053633,
            "unit": "iter/sec",
            "range": "stddev: 0.00035982762502922825",
            "extra": "mean: 22.49661085999378 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6591.483328778109,
            "unit": "iter/sec",
            "range": "stddev: 0.000006392851061585008",
            "extra": "mean: 151.71092000400677 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.176382938117094,
            "unit": "iter/sec",
            "range": "stddev: 0.0004908465133070056",
            "extra": "mean: 22.636529600008544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6673.032739797877,
            "unit": "iter/sec",
            "range": "stddev: 0.00000890202822579936",
            "extra": "mean: 149.85690000230534 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.75881460312924,
            "unit": "iter/sec",
            "range": "stddev: 0.0005023269155274784",
            "extra": "mean: 22.341967919992385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6470.021993895733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066641416029146925",
            "extra": "mean: 154.55898000709567 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 43.87499274658519,
            "unit": "iter/sec",
            "range": "stddev: 0.0006434014347658964",
            "extra": "mean: 22.792026560000522 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3285.8216663928256,
            "unit": "iter/sec",
            "range": "stddev: 0.000012996504407214733",
            "extra": "mean: 304.33787999754713 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 21.928023251234663,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044742151483774",
            "extra": "mean: 45.603745879998314 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 13566.41887969098,
            "unit": "iter/sec",
            "range": "stddev: 0.000003932585150324459",
            "extra": "mean: 73.71142000465625 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 240.06557285483285,
            "unit": "iter/sec",
            "range": "stddev: 0.00003979856609318403",
            "extra": "mean: 4.165528560001803 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 16649.14067149802,
            "unit": "iter/sec",
            "range": "stddev: 0.000004258868368573864",
            "extra": "mean: 60.06315999911749 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 223.05363332645948,
            "unit": "iter/sec",
            "range": "stddev: 0.00007467195575708786",
            "extra": "mean: 4.483226679999461 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11842.49855729789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057721194571736815",
            "extra": "mean: 84.44164001048193 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 47.28496135377281,
            "unit": "iter/sec",
            "range": "stddev: 0.0003610222356253528",
            "extra": "mean: 21.148372999996354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.24084677391474,
            "unit": "iter/sec",
            "range": "stddev: 0.00022981433817542829",
            "extra": "mean: 11.081456299998534 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 13049.80798441724,
            "unit": "iter/sec",
            "range": "stddev: 0.000006257123177755673",
            "extra": "mean: 76.62948000415781 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 218.56153602661135,
            "unit": "iter/sec",
            "range": "stddev: 0.00003978072011143032",
            "extra": "mean: 4.575370480001765 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 16714.816481805166,
            "unit": "iter/sec",
            "range": "stddev: 0.000004533149139912275",
            "extra": "mean: 59.82715999834909 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 220.26723887526188,
            "unit": "iter/sec",
            "range": "stddev: 0.000013229473312273769",
            "extra": "mean: 4.5399397799974395 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11538.59290140195,
            "unit": "iter/sec",
            "range": "stddev: 0.000005841862055238814",
            "extra": "mean: 86.66567999625839 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 40.08784352942265,
            "unit": "iter/sec",
            "range": "stddev: 0.00024587138583272367",
            "extra": "mean: 24.945218099996964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 88.64189286381786,
            "unit": "iter/sec",
            "range": "stddev: 0.00012614105075638675",
            "extra": "mean: 11.281347539998023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12725.320895315794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029192338205607737",
            "extra": "mean: 78.58347999444959 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 217.8582930711773,
            "unit": "iter/sec",
            "range": "stddev: 0.00003346456960793547",
            "extra": "mean: 4.590139699998872 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 15662.398873079428,
            "unit": "iter/sec",
            "range": "stddev: 0.000004844226220669338",
            "extra": "mean: 63.847179994809274 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 224.97628592425085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001437644194185667",
            "extra": "mean: 4.444912920007482 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12553.427386680103,
            "unit": "iter/sec",
            "range": "stddev: 0.000006239116855765229",
            "extra": "mean: 79.65952000176912 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 33.8728671356472,
            "unit": "iter/sec",
            "range": "stddev: 0.00017234291741380784",
            "extra": "mean: 29.52215399999659 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 89.44941006050273,
            "unit": "iter/sec",
            "range": "stddev: 0.0003130817397720395",
            "extra": "mean: 11.17950357999689 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6178.747456797017,
            "unit": "iter/sec",
            "range": "stddev: 0.000008250830265753675",
            "extra": "mean: 161.84509999675356 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 109.32026610995116,
            "unit": "iter/sec",
            "range": "stddev: 0.00011153471769365663",
            "extra": "mean: 9.147434739998062 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7105.266224428614,
            "unit": "iter/sec",
            "range": "stddev: 0.000005146579875388865",
            "extra": "mean: 140.74067999899853 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 111.56190599837656,
            "unit": "iter/sec",
            "range": "stddev: 0.00022675013996315875",
            "extra": "mean: 8.963633160001335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5959.788827776549,
            "unit": "iter/sec",
            "range": "stddev: 0.000010373528714326838",
            "extra": "mean: 167.7911800061338 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.362509124672474,
            "unit": "iter/sec",
            "range": "stddev: 0.0007647928415683114",
            "extra": "mean: 57.59536209999624 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.88985347575449,
            "unit": "iter/sec",
            "range": "stddev: 0.0008247762506150565",
            "extra": "mean: 21.79130950000399 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2859.719382562357,
            "unit": "iter/sec",
            "range": "stddev: 0.000013528795509862046",
            "extra": "mean: 349.68466000464105 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 57.077540801530105,
            "unit": "iter/sec",
            "range": "stddev: 0.00052994144870251",
            "extra": "mean: 17.52002601999266 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3346.9700047912397,
            "unit": "iter/sec",
            "range": "stddev: 0.000007505092840758831",
            "extra": "mean: 298.77769999984594 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.63559474248539,
            "unit": "iter/sec",
            "range": "stddev: 0.00044029609333734216",
            "extra": "mean: 17.05448719999822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2723.140979676264,
            "unit": "iter/sec",
            "range": "stddev: 0.00001125162090347185",
            "extra": "mean: 367.22300000747055 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.811607887341248,
            "unit": "iter/sec",
            "range": "stddev: 0.0017174385854541452",
            "extra": "mean: 113.48666585999581 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.320697688153217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006512129900143449",
            "extra": "mean: 44.80146696000247 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1096.3572368641771,
            "unit": "iter/sec",
            "range": "stddev: 0.000007998032004589241",
            "extra": "mean: 912.1114600020519 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 540.8611337861919,
            "unit": "iter/sec",
            "range": "stddev: 0.00008021627274964231",
            "extra": "mean: 1.8489034199956222 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1096.0543686791652,
            "unit": "iter/sec",
            "range": "stddev: 0.000012930098517756458",
            "extra": "mean: 912.3635000014474 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 54.745343211093044,
            "unit": "iter/sec",
            "range": "stddev: 0.0002961819079237582",
            "extra": "mean: 18.26639384000373 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1038.9497481321093,
            "unit": "iter/sec",
            "range": "stddev: 0.00003670857201314915",
            "extra": "mean: 962.5104600081613 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 513.4273259946797,
            "unit": "iter/sec",
            "range": "stddev: 0.00004449447192480213",
            "extra": "mean: 1.9476953200000935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 980.4540984985795,
            "unit": "iter/sec",
            "range": "stddev: 0.000021011261435516894",
            "extra": "mean: 1.0199355599934277 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 43.35067448170576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007062111531654567",
            "extra": "mean: 23.06769183999677 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 786.6197119745513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000232749911308126",
            "extra": "mean: 1.271262319996822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 427.7798891108285,
            "unit": "iter/sec",
            "range": "stddev: 0.000009380831816640427",
            "extra": "mean: 2.3376507999910245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 818.853693592953,
            "unit": "iter/sec",
            "range": "stddev: 0.00004909909378538352",
            "extra": "mean: 1.2212193799996385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 37.155898094500415,
            "unit": "iter/sec",
            "range": "stddev: 0.0009113479451847859",
            "extra": "mean: 26.91362747999392 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 408.2650949528503,
            "unit": "iter/sec",
            "range": "stddev: 0.000053483052131224694",
            "extra": "mean: 2.4493889199993646 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 239.7322716023869,
            "unit": "iter/sec",
            "range": "stddev: 0.00007773271848436713",
            "extra": "mean: 4.171319919992129 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 399.77390387100127,
            "unit": "iter/sec",
            "range": "stddev: 0.00003134418024863566",
            "extra": "mean: 2.501413899999534 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.906275301322843,
            "unit": "iter/sec",
            "range": "stddev: 0.001086378119358042",
            "extra": "mean: 52.89249120000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 201.09592129058714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004847519586621229",
            "extra": "mean: 4.972751279997283 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 110.84603169395346,
            "unit": "iter/sec",
            "range": "stddev: 0.00016012973621267997",
            "extra": "mean: 9.021522780003579 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 200.65471788415564,
            "unit": "iter/sec",
            "range": "stddev: 0.000037132775721580445",
            "extra": "mean: 4.983685460001652 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.45049576384107,
            "unit": "iter/sec",
            "range": "stddev: 0.0010203669938105423",
            "extra": "mean: 105.81455459999688 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 66.09528220535067,
            "unit": "iter/sec",
            "range": "stddev: 0.0006396712698090983",
            "extra": "mean: 15.129672899997784 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 44.81687675367858,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150483511361809",
            "extra": "mean: 22.31302295999285 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.695702709834148,
            "unit": "iter/sec",
            "range": "stddev: 0.0003667453969383724",
            "extra": "mean: 38.9170131399942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 13.012507311029083,
            "unit": "iter/sec",
            "range": "stddev: 0.0007515486442355081",
            "extra": "mean: 76.84914029999618 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 572.1012448022343,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133372041337519",
            "extra": "mean: 1.7479423600025257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 253.79722525501398,
            "unit": "iter/sec",
            "range": "stddev: 0.00010594748781668205",
            "extra": "mean: 3.9401534000035094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 72.18397549471369,
            "unit": "iter/sec",
            "range": "stddev: 0.00029916476632734363",
            "extra": "mean: 13.853490239994244 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 102.3764443366706,
            "unit": "iter/sec",
            "range": "stddev: 0.0001784598412371345",
            "extra": "mean: 9.7678719599935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 172.33356826179298,
            "unit": "iter/sec",
            "range": "stddev: 0.00019672254490792957",
            "extra": "mean: 5.802700020003613 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 167.08455516408904,
            "unit": "iter/sec",
            "range": "stddev: 0.00009521229316199827",
            "extra": "mean: 5.984993640004177 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 144.25848836052234,
            "unit": "iter/sec",
            "range": "stddev: 0.00014110272864460317",
            "extra": "mean: 6.9320011000036175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 22.073463081860908,
            "unit": "iter/sec",
            "range": "stddev: 0.0008968740797247216",
            "extra": "mean: 45.303267379995305 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3987156204185796,
            "unit": "iter/sec",
            "range": "stddev: 0.006869621020383599",
            "extra": "mean: 714.9416117200008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.172532175190952,
            "unit": "iter/sec",
            "range": "stddev: 0.0012562548900762562",
            "extra": "mean: 61.83323608000136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.161334161679918,
            "unit": "iter/sec",
            "range": "stddev: 0.0012828957909141292",
            "extra": "mean: 61.87607966000087 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.978374448749348,
            "unit": "iter/sec",
            "range": "stddev: 0.000685339600393869",
            "extra": "mean: 62.584589139996744 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}