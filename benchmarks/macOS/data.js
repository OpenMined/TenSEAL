window.BENCHMARK_DATA = {
  "lastUpdate": 1619592214593,
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
          "id": "28764765a9052e49266a4d49593f738200f23a00",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/28764765a9052e49266a4d49593f738200f23a00"
        },
        "date": 1619592147883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9280125260012638,
            "unit": "iter/sec",
            "range": "stddev: 0.019499193759236",
            "extra": "mean: 1.077571662 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.65589521628014,
            "unit": "iter/sec",
            "range": "stddev: 0.00011751735869382439",
            "extra": "mean: 11.674619679999978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.354839062981293,
            "unit": "iter/sec",
            "range": "stddev: 0.0015738980564207479",
            "extra": "mean: 229.6296110000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.61214680106245,
            "unit": "iter/sec",
            "range": "stddev: 0.00012024392179479018",
            "extra": "mean: 8.360354919999793 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.4307214941504188,
            "unit": "iter/sec",
            "range": "stddev: 0.012195626214430415",
            "extra": "mean: 2.3216858540400005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 231.64444764011114,
            "unit": "iter/sec",
            "range": "stddev: 0.00007075372136006893",
            "extra": "mean: 4.316960799999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.0261130510249785,
            "unit": "iter/sec",
            "range": "stddev: 0.012762184202676156",
            "extra": "mean: 248.37851975999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3605111897145858,
            "unit": "iter/sec",
            "range": "stddev: 0.0468272608340555",
            "extra": "mean: 2.7738390056399997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6682.900769193757,
            "unit": "iter/sec",
            "range": "stddev: 0.000011837992926198158",
            "extra": "mean: 149.63562000048114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 42.30008706440816,
            "unit": "iter/sec",
            "range": "stddev: 0.001604437421496773",
            "extra": "mean: 23.64061327999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6777.881765559077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034898450658364293",
            "extra": "mean: 147.5387199997158 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.33834660397142,
            "unit": "iter/sec",
            "range": "stddev: 0.00006479962545239986",
            "extra": "mean: 22.553840560000253 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6863.707228291215,
            "unit": "iter/sec",
            "range": "stddev: 0.000003104512721495016",
            "extra": "mean: 145.69386000005125 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.175381306848486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002013316340618465",
            "extra": "mean: 22.637042860000633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6823.720508040974,
            "unit": "iter/sec",
            "range": "stddev: 0.000003069747016837464",
            "extra": "mean: 146.54762000020582 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.582642432780105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001188525195714935",
            "extra": "mean: 22.430254139999878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3633.3206312475204,
            "unit": "iter/sec",
            "range": "stddev: 0.000007947532087822459",
            "extra": "mean: 275.2303199997641 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.30320793583515,
            "unit": "iter/sec",
            "range": "stddev: 0.00010291238863149414",
            "extra": "mean: 44.83659941999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12085.892017469128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013481548736460316",
            "extra": "mean: 82.74109999945267 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 221.74007946302953,
            "unit": "iter/sec",
            "range": "stddev: 0.00006338013732829704",
            "extra": "mean: 4.509784620000232 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14480.388630538991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018437195319116324",
            "extra": "mean: 69.05891999963387 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 233.22507538431003,
            "unit": "iter/sec",
            "range": "stddev: 0.00004645357480450992",
            "extra": "mean: 4.287703619999661 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12158.87072288009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018313028813285284",
            "extra": "mean: 82.24448000078155 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.94713739824473,
            "unit": "iter/sec",
            "range": "stddev: 0.0001355992795491839",
            "extra": "mean: 20.021167419999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.59641089136555,
            "unit": "iter/sec",
            "range": "stddev: 0.00009786569031945695",
            "extra": "mean: 10.91745833999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11901.599479865625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014754559728716546",
            "extra": "mean: 84.02231999923515 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 221.1262742163548,
            "unit": "iter/sec",
            "range": "stddev: 0.00007789959422497999",
            "extra": "mean: 4.5223029400006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13765.523036243389,
            "unit": "iter/sec",
            "range": "stddev: 0.000008577009952113631",
            "extra": "mean: 72.64525999971738 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 231.32117590660695,
            "unit": "iter/sec",
            "range": "stddev: 0.000029244913351607074",
            "extra": "mean: 4.322993759999463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11955.678863733281,
            "unit": "iter/sec",
            "range": "stddev: 0.00000620711861566541",
            "extra": "mean: 83.64226000026065 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.59278706271885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014652391219212402",
            "extra": "mean: 24.04263023999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 90.2628571018372,
            "unit": "iter/sec",
            "range": "stddev: 0.00009786064740713649",
            "extra": "mean: 11.078754120000552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12028.237490372141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011304089162001195",
            "extra": "mean: 83.13769999972465 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 225.94795027771093,
            "unit": "iter/sec",
            "range": "stddev: 0.00003941765919818386",
            "extra": "mean: 4.425798059999693 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14287.073598601393,
            "unit": "iter/sec",
            "range": "stddev: 0.000001966349108714219",
            "extra": "mean: 69.99334000056479 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 226.924189253114,
            "unit": "iter/sec",
            "range": "stddev: 0.00009290419071167507",
            "extra": "mean: 4.406758059999447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12318.31410562965,
            "unit": "iter/sec",
            "range": "stddev: 0.000001212324561625838",
            "extra": "mean: 81.17994000031103 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.88828630215216,
            "unit": "iter/sec",
            "range": "stddev: 0.00009373256679800782",
            "extra": "mean: 27.864244939999594 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.92164503920168,
            "unit": "iter/sec",
            "range": "stddev: 0.00009886890015437318",
            "extra": "mean: 10.998481160001461 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6442.978480685115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031020424607252986",
            "extra": "mean: 155.2077200005897 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 112.64257401511422,
            "unit": "iter/sec",
            "range": "stddev: 0.00008282412633992986",
            "extra": "mean: 8.87763803999917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7791.1862360856485,
            "unit": "iter/sec",
            "range": "stddev: 0.000002288549149747782",
            "extra": "mean: 128.350160001105 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 117.29989446785719,
            "unit": "iter/sec",
            "range": "stddev: 0.00009956751007289457",
            "extra": "mean: 8.525156860000607 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6619.646873626758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043340006698343665",
            "extra": "mean: 151.0654599996997 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.915638292755204,
            "unit": "iter/sec",
            "range": "stddev: 0.000554247927297471",
            "extra": "mean: 55.81715726000027 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.85523945882008,
            "unit": "iter/sec",
            "range": "stddev: 0.00048547753612803596",
            "extra": "mean: 21.80775876000041 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3285.3039418750836,
            "unit": "iter/sec",
            "range": "stddev: 0.000009429125649056922",
            "extra": "mean: 304.3858399990995 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 56.27709855553249,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250917912810312",
            "extra": "mean: 17.769217419999563 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4120.273418043082,
            "unit": "iter/sec",
            "range": "stddev: 0.000004618023180000299",
            "extra": "mean: 242.70234000027813 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.18974510944755,
            "unit": "iter/sec",
            "range": "stddev: 0.0009289497954791403",
            "extra": "mean: 17.796841720000316 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3419.8273794172273,
            "unit": "iter/sec",
            "range": "stddev: 0.000005260612148364459",
            "extra": "mean: 292.4124200006872 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.16898142064869,
            "unit": "iter/sec",
            "range": "stddev: 0.0005830783973734489",
            "extra": "mean: 109.06336855999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 23.434559189844332,
            "unit": "iter/sec",
            "range": "stddev: 0.00014377267769948796",
            "extra": "mean: 42.67202091999934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1262.8996038525534,
            "unit": "iter/sec",
            "range": "stddev: 0.000007916035495759001",
            "extra": "mean: 791.8285799991054 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 561.9114799044639,
            "unit": "iter/sec",
            "range": "stddev: 0.000009667885584001041",
            "extra": "mean: 1.7796397399996522 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1255.8101942363128,
            "unit": "iter/sec",
            "range": "stddev: 0.000009461375677792358",
            "extra": "mean: 796.2986799992677 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 58.83791237405403,
            "unit": "iter/sec",
            "range": "stddev: 0.00005009832513421497",
            "extra": "mean: 16.995844340000303 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1166.3777704446347,
            "unit": "iter/sec",
            "range": "stddev: 0.000016136667119548076",
            "extra": "mean: 857.3551599999973 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 545.0525384862032,
            "unit": "iter/sec",
            "range": "stddev: 0.000010705235127895293",
            "extra": "mean: 1.834685520000221 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1181.4123666704431,
            "unit": "iter/sec",
            "range": "stddev: 0.000011691968990962857",
            "extra": "mean: 846.4444999998477 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.83923471323574,
            "unit": "iter/sec",
            "range": "stddev: 0.00005092912345103454",
            "extra": "mean: 20.90334442000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 912.4551478111495,
            "unit": "iter/sec",
            "range": "stddev: 0.00001014094714662507",
            "extra": "mean: 1.0959442799997987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 479.91853824329985,
            "unit": "iter/sec",
            "range": "stddev: 0.00001000112369575867",
            "extra": "mean: 2.083686960000364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 916.8593920381462,
            "unit": "iter/sec",
            "range": "stddev: 0.000005847335182304753",
            "extra": "mean: 1.0906797800009826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 40.2826123022063,
            "unit": "iter/sec",
            "range": "stddev: 0.0001434492603007395",
            "extra": "mean: 24.82460652000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 466.19748862223815,
            "unit": "iter/sec",
            "range": "stddev: 0.000028286509744213707",
            "extra": "mean: 2.1450136999993674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 242.45351670268943,
            "unit": "iter/sec",
            "range": "stddev: 0.000017142261702303555",
            "extra": "mean: 4.124501939999732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 466.1127327017204,
            "unit": "iter/sec",
            "range": "stddev: 0.000014867952432430712",
            "extra": "mean: 2.1454037400002335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 20.17074676719996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001014539318767636",
            "extra": "mean: 49.57674654000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 237.08296046298145,
            "unit": "iter/sec",
            "range": "stddev: 0.000024894175397160923",
            "extra": "mean: 4.217932820001805 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 122.38867784104646,
            "unit": "iter/sec",
            "range": "stddev: 0.00004218265908863689",
            "extra": "mean: 8.170690439999362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 236.5726475234245,
            "unit": "iter/sec",
            "range": "stddev: 0.000024252071493875525",
            "extra": "mean: 4.227031360001092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.027594228609619,
            "unit": "iter/sec",
            "range": "stddev: 0.0008855104638529949",
            "extra": "mean: 99.72481705999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.8081122390162,
            "unit": "iter/sec",
            "range": "stddev: 0.001341030918399373",
            "extra": "mean: 18.24547424000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.375734391694444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476043260704821",
            "extra": "mean: 26.755327119999492 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.403958686485016,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894005493338462",
            "extra": "mean: 39.36394371999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.800834880284187,
            "unit": "iter/sec",
            "range": "stddev: 0.005202425131975575",
            "extra": "mean: 67.5637562399993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 568.6907641039658,
            "unit": "iter/sec",
            "range": "stddev: 0.000008152399736834099",
            "extra": "mean: 1.758424899999227 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 272.6307143635528,
            "unit": "iter/sec",
            "range": "stddev: 0.00007093059375772148",
            "extra": "mean: 3.667965300001015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.34794701599598,
            "unit": "iter/sec",
            "range": "stddev: 0.00010747383470489076",
            "extra": "mean: 13.097929140000133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.0663926195147,
            "unit": "iter/sec",
            "range": "stddev: 0.00014118315761813615",
            "extra": "mean: 9.339999000001171 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 180.14344649710355,
            "unit": "iter/sec",
            "range": "stddev: 0.000025542736767414578",
            "extra": "mean: 5.551131719998921 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.65411912890414,
            "unit": "iter/sec",
            "range": "stddev: 0.00008792563701425731",
            "extra": "mean: 6.148015219998797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 122.96670707145005,
            "unit": "iter/sec",
            "range": "stddev: 0.00005037629199734442",
            "extra": "mean: 8.132282500001793 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.785705817278693,
            "unit": "iter/sec",
            "range": "stddev: 0.000506660923681349",
            "extra": "mean: 53.231963160001214 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1356084443080992,
            "unit": "iter/sec",
            "range": "stddev: 0.008671977766029394",
            "extra": "mean: 880.5852096399985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 17.057287191394412,
            "unit": "iter/sec",
            "range": "stddev: 0.0007796806603137885",
            "extra": "mean: 58.625969579999264 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.794010430421302,
            "unit": "iter/sec",
            "range": "stddev: 0.0007142763809619941",
            "extra": "mean: 59.54503864000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.6992607513808,
            "unit": "iter/sec",
            "range": "stddev: 0.00010518578382531801",
            "extra": "mean: 59.88289031999898 msec\nrounds: 5"
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
          "id": "a4ccaaddd93460c404d6f55651b46ed6a6f89dc2",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/a4ccaaddd93460c404d6f55651b46ed6a6f89dc2"
        },
        "date": 1619592213192,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.8943692288282372,
            "unit": "iter/sec",
            "range": "stddev: 0.01359865497928011",
            "extra": "mean: 1.1181064461599999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 80.47721106212222,
            "unit": "iter/sec",
            "range": "stddev: 0.0002049025705657274",
            "extra": "mean: 12.425877919999948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.204857046723152,
            "unit": "iter/sec",
            "range": "stddev: 0.002097632113854052",
            "extra": "mean: 237.82021336000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.4225359046894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598565221241121",
            "extra": "mean: 8.589402319999806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5240045588482974,
            "unit": "iter/sec",
            "range": "stddev: 0.027672198964850157",
            "extra": "mean: 1.9083803434800004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 228.10221267454506,
            "unit": "iter/sec",
            "range": "stddev: 0.00006927279738905578",
            "extra": "mean: 4.383999559998983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.4103979896508765,
            "unit": "iter/sec",
            "range": "stddev: 0.005599132418842894",
            "extra": "mean: 184.8292864800004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4065266871601094,
            "unit": "iter/sec",
            "range": "stddev: 0.18782186702091955",
            "extra": "mean: 2.4598631076000004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6665.935191390181,
            "unit": "iter/sec",
            "range": "stddev: 0.000011529327420595757",
            "extra": "mean: 150.01645999973334 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.48364370806838,
            "unit": "iter/sec",
            "range": "stddev: 0.00008722051538139852",
            "extra": "mean: 22.480172859999357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6887.7752733931675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034204145125254713",
            "extra": "mean: 145.1847599997791 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.30810863050029,
            "unit": "iter/sec",
            "range": "stddev: 0.00036236323253309937",
            "extra": "mean: 22.569232379998994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6299.277674440998,
            "unit": "iter/sec",
            "range": "stddev: 0.000005644260456691741",
            "extra": "mean: 158.74835999966308 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.64757986020644,
            "unit": "iter/sec",
            "range": "stddev: 0.00002918618700442032",
            "extra": "mean: 22.397630580001078 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6613.739991914339,
            "unit": "iter/sec",
            "range": "stddev: 0.000011385703171595541",
            "extra": "mean: 151.20038000020486 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.42891667628868,
            "unit": "iter/sec",
            "range": "stddev: 0.00042216664580058697",
            "extra": "mean: 22.507863680000355 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3706.7116315498893,
            "unit": "iter/sec",
            "range": "stddev: 0.000004827995762949254",
            "extra": "mean: 269.78090000000066 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.39156870093324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414502589524608",
            "extra": "mean: 44.65966692000108 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12028.032050367321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017645470122712888",
            "extra": "mean: 83.13912000005531 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 221.51952389569394,
            "unit": "iter/sec",
            "range": "stddev: 0.00015199832453359727",
            "extra": "mean: 4.514274780000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14478.05315367305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018753898107430732",
            "extra": "mean: 69.07005999948979 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 231.15268177379224,
            "unit": "iter/sec",
            "range": "stddev: 0.000047961760830071285",
            "extra": "mean: 4.326144919999706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12142.49165382499,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016218607707735682",
            "extra": "mean: 82.35542000022633 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.99576595857315,
            "unit": "iter/sec",
            "range": "stddev: 0.00007308184643551417",
            "extra": "mean: 20.00169375999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 89.4586040606336,
            "unit": "iter/sec",
            "range": "stddev: 0.000564766129472936",
            "extra": "mean: 11.178354620000732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11794.27482318886,
            "unit": "iter/sec",
            "range": "stddev: 0.000006158605699906268",
            "extra": "mean: 84.78689999947164 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 224.31180431854642,
            "unit": "iter/sec",
            "range": "stddev: 0.00002104708001626912",
            "extra": "mean: 4.458080139999652 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14444.963821202007,
            "unit": "iter/sec",
            "range": "stddev: 0.00000764478143293822",
            "extra": "mean: 69.22827999972014 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 229.81682670452346,
            "unit": "iter/sec",
            "range": "stddev: 0.00017064581490444604",
            "extra": "mean: 4.3512914799998725 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12327.72315095934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024213961235213694",
            "extra": "mean: 81.1179799995898 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.81235820509446,
            "unit": "iter/sec",
            "range": "stddev: 0.00010063928217936257",
            "extra": "mean: 23.916374080000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.60701695606281,
            "unit": "iter/sec",
            "range": "stddev: 0.00006028926195977398",
            "extra": "mean: 10.916194339999379 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11916.939882462959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019359484175661095",
            "extra": "mean: 83.9141599993809 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 224.78919696207944,
            "unit": "iter/sec",
            "range": "stddev: 0.00004270607356097068",
            "extra": "mean: 4.448612360000084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14729.553611908761,
            "unit": "iter/sec",
            "range": "stddev: 0.000001885067769746487",
            "extra": "mean: 67.89072000060514 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 232.94198892842118,
            "unit": "iter/sec",
            "range": "stddev: 0.00003706768409881703",
            "extra": "mean: 4.292914319999568 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12251.484757426802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016758407292684387",
            "extra": "mean: 81.62276000007296 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.65376413727163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005464436852595801",
            "extra": "mean: 28.04752945999951 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.58143149257346,
            "unit": "iter/sec",
            "range": "stddev: 0.00013688628852340758",
            "extra": "mean: 10.919244040000535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6410.721598475985,
            "unit": "iter/sec",
            "range": "stddev: 0.000004453443810457104",
            "extra": "mean: 155.98868000097355 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.15939998957535,
            "unit": "iter/sec",
            "range": "stddev: 0.00011171921014253016",
            "extra": "mean: 8.99609029999965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6807.868207302051,
            "unit": "iter/sec",
            "range": "stddev: 0.000007091699681183125",
            "extra": "mean: 146.88885999987633 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 111.9350418207139,
            "unit": "iter/sec",
            "range": "stddev: 0.0006844924662041088",
            "extra": "mean: 8.9337528599998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6515.53237759967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030643539629347435",
            "extra": "mean: 153.47940000083324 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.784334591620077,
            "unit": "iter/sec",
            "range": "stddev: 0.001025880469106779",
            "extra": "mean: 56.229261479999195 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.320204790296096,
            "unit": "iter/sec",
            "range": "stddev: 0.00006898762318026514",
            "extra": "mean: 22.065213619999327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3288.0933339732514,
            "unit": "iter/sec",
            "range": "stddev: 0.000004068319466329126",
            "extra": "mean: 304.1276200002585 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 54.52933135241803,
            "unit": "iter/sec",
            "range": "stddev: 0.0005106113946044907",
            "extra": "mean: 18.338754119999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4062.3627936828516,
            "unit": "iter/sec",
            "range": "stddev: 0.000003922221559121655",
            "extra": "mean: 246.16216000083568 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.05467272331044,
            "unit": "iter/sec",
            "range": "stddev: 0.000110254391070095",
            "extra": "mean: 17.225142319999236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3377.11926053451,
            "unit": "iter/sec",
            "range": "stddev: 0.000011598731071852044",
            "extra": "mean: 296.11036000005697 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.995090859541468,
            "unit": "iter/sec",
            "range": "stddev: 0.0007784651498495539",
            "extra": "mean: 111.17175085999918 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.785346703614866,
            "unit": "iter/sec",
            "range": "stddev: 0.00013289033581532407",
            "extra": "mean: 43.88785534000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1244.6110519515073,
            "unit": "iter/sec",
            "range": "stddev: 9.025546975100514e-7",
            "extra": "mean: 803.4638600003063 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 555.4333663865843,
            "unit": "iter/sec",
            "range": "stddev: 0.00003158499660094711",
            "extra": "mean: 1.8003959799995073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1252.5565932620261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032411511685580523",
            "extra": "mean: 798.3671200003073 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.39851695961921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000883872827745225",
            "extra": "mean: 17.422052919999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1156.5896289294292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073859420980836326",
            "extra": "mean: 864.6109000005708 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 531.4104550690895,
            "unit": "iter/sec",
            "range": "stddev: 0.000033434622406759194",
            "extra": "mean: 1.8817845800003852 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1148.81229696091,
            "unit": "iter/sec",
            "range": "stddev: 0.000008204646743633227",
            "extra": "mean: 870.464219999576 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.911212113325945,
            "unit": "iter/sec",
            "range": "stddev: 0.00014645278319876527",
            "extra": "mean: 21.31686552000076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 884.6861812871738,
            "unit": "iter/sec",
            "range": "stddev: 0.000005715436225133101",
            "extra": "mean: 1.1303443199994945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 472.9553266262239,
            "unit": "iter/sec",
            "range": "stddev: 0.000013512574248330233",
            "extra": "mean: 2.114364600000158 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 894.2530719024163,
            "unit": "iter/sec",
            "range": "stddev: 0.000017062683790271262",
            "extra": "mean: 1.1182516799999576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.01533652380989,
            "unit": "iter/sec",
            "range": "stddev: 0.00029575931255341613",
            "extra": "mean: 25.630946419998963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 457.61860057808076,
            "unit": "iter/sec",
            "range": "stddev: 0.00002495403859686466",
            "extra": "mean: 2.185225859999491 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 234.74675119065273,
            "unit": "iter/sec",
            "range": "stddev: 0.00001346927001981163",
            "extra": "mean: 4.25990985999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 451.8580166679741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000124860098560557",
            "extra": "mean: 2.213084559999743 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.428877521543704,
            "unit": "iter/sec",
            "range": "stddev: 0.0005896110637960506",
            "extra": "mean: 51.469777340000746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 228.91196062020506,
            "unit": "iter/sec",
            "range": "stddev: 0.00006168215610240182",
            "extra": "mean: 4.368491699999595 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 118.73454009499044,
            "unit": "iter/sec",
            "range": "stddev: 0.000012805782622815656",
            "extra": "mean: 8.422149100000524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 227.2023688955,
            "unit": "iter/sec",
            "range": "stddev: 0.00002912898212004709",
            "extra": "mean: 4.401362560000166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.739616723174345,
            "unit": "iter/sec",
            "range": "stddev: 0.0016517414869430332",
            "extra": "mean: 102.6734448000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 57.694022314266995,
            "unit": "iter/sec",
            "range": "stddev: 0.0012270294969298874",
            "extra": "mean: 17.332818200001157 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.21189270828463,
            "unit": "iter/sec",
            "range": "stddev: 0.0010479505859418024",
            "extra": "mean: 24.868264899999986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.48054282142294,
            "unit": "iter/sec",
            "range": "stddev: 0.001662231418652509",
            "extra": "mean: 42.58845324000049 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.970569153890096,
            "unit": "iter/sec",
            "range": "stddev: 0.0029504440356936273",
            "extra": "mean: 83.53821669999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 565.2339816588639,
            "unit": "iter/sec",
            "range": "stddev: 0.000006002160487433397",
            "extra": "mean: 1.769178840000336 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 263.5390387652011,
            "unit": "iter/sec",
            "range": "stddev: 0.000018506819360877695",
            "extra": "mean: 3.7945042399996964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 73.92082896781177,
            "unit": "iter/sec",
            "range": "stddev: 0.000060434644601550134",
            "extra": "mean: 13.527986819999569 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 100.97661125000926,
            "unit": "iter/sec",
            "range": "stddev: 0.00035636935776332254",
            "extra": "mean: 9.90328341999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 170.61778149649416,
            "unit": "iter/sec",
            "range": "stddev: 0.00004589952563143842",
            "extra": "mean: 5.861053820000279 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 153.59643015351864,
            "unit": "iter/sec",
            "range": "stddev: 0.000025023197536509974",
            "extra": "mean: 6.5105679800012695 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 120.13071067041265,
            "unit": "iter/sec",
            "range": "stddev: 0.000016790382959979365",
            "extra": "mean: 8.324266079999916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 17.9873586785845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207425368683186",
            "extra": "mean: 55.59459939999897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.0937723697060384,
            "unit": "iter/sec",
            "range": "stddev: 0.006490475478036003",
            "extra": "mean: 914.2670154199993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.406047432225144,
            "unit": "iter/sec",
            "range": "stddev: 0.0008309487072761956",
            "extra": "mean: 60.953133540000415 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.466701883651055,
            "unit": "iter/sec",
            "range": "stddev: 0.00048789648255146377",
            "extra": "mean: 60.728615059998674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.278744727853155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007225477378763179",
            "extra": "mean: 61.42979797999942 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}