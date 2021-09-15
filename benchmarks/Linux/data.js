window.BENCHMARK_DATA = {
  "lastUpdate": 1631714576361,
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
      }
    ]
  }
}