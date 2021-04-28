window.BENCHMARK_DATA = {
  "lastUpdate": 1619594252954,
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
      }
    ]
  }
}