window.BENCHMARK_DATA = {
  "lastUpdate": 1619592149120,
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
      }
    ]
  }
}