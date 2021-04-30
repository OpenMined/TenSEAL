window.BENCHMARK_DATA = {
  "lastUpdate": 1619768829532,
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
        "date": 1619594664441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9103705038898668,
            "unit": "iter/sec",
            "range": "stddev: 0.014359479988606974",
            "extra": "mean: 1.09845386656 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 81.45429408955285,
            "unit": "iter/sec",
            "range": "stddev: 0.00042645500670744277",
            "extra": "mean: 12.276823600000455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.225176952312093,
            "unit": "iter/sec",
            "range": "stddev: 0.0018954149051011934",
            "extra": "mean: 236.67647799999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.90776383336967,
            "unit": "iter/sec",
            "range": "stddev: 0.00006460861648068364",
            "extra": "mean: 8.553751840000245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5506733152020826,
            "unit": "iter/sec",
            "range": "stddev: 0.023613127262258202",
            "extra": "mean: 1.8159587043600003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 231.63154011420596,
            "unit": "iter/sec",
            "range": "stddev: 0.00015757479206500265",
            "extra": "mean: 4.31720136000024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.477750513608708,
            "unit": "iter/sec",
            "range": "stddev: 0.006108569374032951",
            "extra": "mean: 182.5566895600008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.43278577216675646,
            "unit": "iter/sec",
            "range": "stddev: 0.15483049509508273",
            "extra": "mean: 2.3106120032400015 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6712.504119791988,
            "unit": "iter/sec",
            "range": "stddev: 0.000010418318626858202",
            "extra": "mean: 148.97570000016458 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.76273506459808,
            "unit": "iter/sec",
            "range": "stddev: 0.00016429953211519882",
            "extra": "mean: 22.34001114000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6803.35236546245,
            "unit": "iter/sec",
            "range": "stddev: 0.000004326391612734775",
            "extra": "mean: 146.98636000048282 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.98397593404694,
            "unit": "iter/sec",
            "range": "stddev: 0.00006674567551280525",
            "extra": "mean: 22.23013816000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6781.750255827233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024551871441877882",
            "extra": "mean: 147.45455999957358 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.871095613296966,
            "unit": "iter/sec",
            "range": "stddev: 0.00019351173278346772",
            "extra": "mean: 22.28606157999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7005.339329548778,
            "unit": "iter/sec",
            "range": "stddev: 0.000004904945185028378",
            "extra": "mean: 142.74825999962104 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.851485388938386,
            "unit": "iter/sec",
            "range": "stddev: 0.00011631831408512201",
            "extra": "mean: 22.2958056199991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3608.786210743513,
            "unit": "iter/sec",
            "range": "stddev: 0.00000936650083439165",
            "extra": "mean: 277.10147999982837 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.470885046129997,
            "unit": "iter/sec",
            "range": "stddev: 0.00010425161214158681",
            "extra": "mean: 44.50202997999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11952.04362016528,
            "unit": "iter/sec",
            "range": "stddev: 0.00000234229610819434",
            "extra": "mean: 83.66770000009183 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 225.1263704106194,
            "unit": "iter/sec",
            "range": "stddev: 0.000016671104211511057",
            "extra": "mean: 4.441949640000189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14253.176320331642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019979031952656992",
            "extra": "mean: 70.15980000005584 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 234.93330210657686,
            "unit": "iter/sec",
            "range": "stddev: 0.000021650239832606934",
            "extra": "mean: 4.256527240000878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12306.480592655616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018895532029797176",
            "extra": "mean: 81.2580000001617 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.88830308269684,
            "unit": "iter/sec",
            "range": "stddev: 0.00004694760330436281",
            "extra": "mean: 20.044778799999676 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.21721557494324,
            "unit": "iter/sec",
            "range": "stddev: 0.0002340729259952421",
            "extra": "mean: 11.084358939999674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12085.485959781241,
            "unit": "iter/sec",
            "range": "stddev: 0.000001647320864387002",
            "extra": "mean: 82.74388000018007 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 225.42834530334216,
            "unit": "iter/sec",
            "range": "stddev: 0.000014376296270536291",
            "extra": "mean: 4.435999379999771 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13729.033363649149,
            "unit": "iter/sec",
            "range": "stddev: 0.000008926049624760775",
            "extra": "mean: 72.83833999906619 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 236.20577188652572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001983405333052421",
            "extra": "mean: 4.233596799998622 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12401.128899619567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015706618511654997",
            "extra": "mean: 80.63781999965157 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.948263788417776,
            "unit": "iter/sec",
            "range": "stddev: 0.00004746085625187215",
            "extra": "mean: 23.838888900000374 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 90.46302758874839,
            "unit": "iter/sec",
            "range": "stddev: 0.000328506773714913",
            "extra": "mean: 11.05423979999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11455.102755727929,
            "unit": "iter/sec",
            "range": "stddev: 0.000005886165752856628",
            "extra": "mean: 87.29733999985001 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 218.42676020331876,
            "unit": "iter/sec",
            "range": "stddev: 0.00013332593694318293",
            "extra": "mean: 4.578193619999524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14502.750011534066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020835422057252704",
            "extra": "mean: 68.95243999963441 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 236.1179459385295,
            "unit": "iter/sec",
            "range": "stddev: 0.000029427817663826635",
            "extra": "mean: 4.235171520001018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12219.420716329567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016873064224360101",
            "extra": "mean: 81.83694000024389 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.11783038800055,
            "unit": "iter/sec",
            "range": "stddev: 0.00005544380996236805",
            "extra": "mean: 27.687155880000777 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.9598497337056,
            "unit": "iter/sec",
            "range": "stddev: 0.00005469331570222004",
            "extra": "mean: 10.8743109400001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6396.1373470602775,
            "unit": "iter/sec",
            "range": "stddev: 0.000002508342247048435",
            "extra": "mean: 156.34436000027563 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 112.61518094892867,
            "unit": "iter/sec",
            "range": "stddev: 0.00004343754295389405",
            "extra": "mean: 8.879797479999636 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7716.149406820061,
            "unit": "iter/sec",
            "range": "stddev: 0.000003972283746702868",
            "extra": "mean: 129.5983200009232 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 118.17235412324132,
            "unit": "iter/sec",
            "range": "stddev: 0.00005377018376706201",
            "extra": "mean: 8.462216119999653 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6563.359389878109,
            "unit": "iter/sec",
            "range": "stddev: 0.000003353607740655246",
            "extra": "mean: 152.36099999981434 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.992206586475948,
            "unit": "iter/sec",
            "range": "stddev: 0.0007002945909633111",
            "extra": "mean: 55.5796197199993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.83155356425271,
            "unit": "iter/sec",
            "range": "stddev: 0.00006803825663129509",
            "extra": "mean: 21.819029079999837 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3203.662940051171,
            "unit": "iter/sec",
            "range": "stddev: 0.000022370590400471985",
            "extra": "mean: 312.14270000077704 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.98513371654991,
            "unit": "iter/sec",
            "range": "stddev: 0.00012056016181694447",
            "extra": "mean: 17.861884640000195 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3936.8398608398006,
            "unit": "iter/sec",
            "range": "stddev: 0.000008245795540837455",
            "extra": "mean: 254.0108400006602 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.49334227082042,
            "unit": "iter/sec",
            "range": "stddev: 0.00014806549509807827",
            "extra": "mean: 17.095962739999777 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3407.330558217052,
            "unit": "iter/sec",
            "range": "stddev: 0.000005305865602357662",
            "extra": "mean: 293.48488000039197 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.015269275344373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005741591595219699",
            "extra": "mean: 110.92292081999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.908008679282098,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564410017567134",
            "extra": "mean: 43.65285581999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1245.7659840063482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043400051147267565",
            "extra": "mean: 802.7189799997814 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 550.4504457097518,
            "unit": "iter/sec",
            "range": "stddev: 0.000013568106250522118",
            "extra": "mean: 1.8166939599996113 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1254.2252654299846,
            "unit": "iter/sec",
            "range": "stddev: 0.000006725637644477442",
            "extra": "mean: 797.3049399998899 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.599000346767276,
            "unit": "iter/sec",
            "range": "stddev: 0.00005696281194664335",
            "extra": "mean: 17.361412420000875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1166.035938394465,
            "unit": "iter/sec",
            "range": "stddev: 0.000011440280919125651",
            "extra": "mean: 857.606499999406 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 534.7840784680881,
            "unit": "iter/sec",
            "range": "stddev: 0.000015530046540468797",
            "extra": "mean: 1.8699135600007821 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1151.9246460662189,
            "unit": "iter/sec",
            "range": "stddev: 0.000013387947115921764",
            "extra": "mean: 868.1123399998114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.13211612142235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005332968702162619",
            "extra": "mean: 21.21695528000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 885.8826834066216,
            "unit": "iter/sec",
            "range": "stddev: 0.000018852614689999945",
            "extra": "mean: 1.1288176400000796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 470.83200440997484,
            "unit": "iter/sec",
            "range": "stddev: 0.000010676471939679337",
            "extra": "mean: 2.123899800000117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 891.0204474052852,
            "unit": "iter/sec",
            "range": "stddev: 0.000006635451736026832",
            "extra": "mean: 1.1223086999990528 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.37011913327954,
            "unit": "iter/sec",
            "range": "stddev: 0.00034080273460511173",
            "extra": "mean: 25.39997394000011 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 459.7588482085872,
            "unit": "iter/sec",
            "range": "stddev: 0.000016494911464293538",
            "extra": "mean: 2.1750532999993766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 238.58303474314403,
            "unit": "iter/sec",
            "range": "stddev: 0.00001643775917958292",
            "extra": "mean: 4.191412859998991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 456.63033316930563,
            "unit": "iter/sec",
            "range": "stddev: 0.00001352024564706923",
            "extra": "mean: 2.1899552600007155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.743783889785337,
            "unit": "iter/sec",
            "range": "stddev: 0.00043496727136723665",
            "extra": "mean: 50.648852600000396 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 231.7428509393199,
            "unit": "iter/sec",
            "range": "stddev: 0.000014007464937778313",
            "extra": "mean: 4.315127719999623 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 117.93914302008552,
            "unit": "iter/sec",
            "range": "stddev: 0.00014623509349590664",
            "extra": "mean: 8.478949179999518 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 231.8696817819052,
            "unit": "iter/sec",
            "range": "stddev: 0.000030453747832114686",
            "extra": "mean: 4.312767380000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.922629040286466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005179842064678094",
            "extra": "mean: 100.77974254000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.78384973468487,
            "unit": "iter/sec",
            "range": "stddev: 0.0009790151955788072",
            "extra": "mean: 18.253554739999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.285431256630154,
            "unit": "iter/sec",
            "range": "stddev: 0.0017799252519670385",
            "extra": "mean: 25.454728840000485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.320215395628978,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935179247979373",
            "extra": "mean: 39.494134799999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.121212544352668,
            "unit": "iter/sec",
            "range": "stddev: 0.0023577576682369057",
            "extra": "mean: 82.49999711999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 574.360151591165,
            "unit": "iter/sec",
            "range": "stddev: 0.000012710607408282826",
            "extra": "mean: 1.7410678599998164 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 273.32598684104545,
            "unit": "iter/sec",
            "range": "stddev: 0.000023365926319970752",
            "extra": "mean: 3.6586349199995993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 75.61427056090209,
            "unit": "iter/sec",
            "range": "stddev: 0.000025895675178204414",
            "extra": "mean: 13.22501682000052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.84564699075543,
            "unit": "iter/sec",
            "range": "stddev: 0.000020812437675303277",
            "extra": "mean: 9.447719660000189 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 176.65973303123178,
            "unit": "iter/sec",
            "range": "stddev: 0.000025733450116949297",
            "extra": "mean: 5.66059952000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 161.31602386588835,
            "unit": "iter/sec",
            "range": "stddev: 0.000035645216105439955",
            "extra": "mean: 6.199012199999174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 124.62887018006958,
            "unit": "iter/sec",
            "range": "stddev: 0.00009342703714086836",
            "extra": "mean: 8.023823039999911 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.59109824870838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005645015683047429",
            "extra": "mean: 53.78918376000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1350057155771123,
            "unit": "iter/sec",
            "range": "stddev: 0.0019477479862052285",
            "extra": "mean: 881.052831959999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.89941921864013,
            "unit": "iter/sec",
            "range": "stddev: 0.00014661177041853054",
            "extra": "mean: 59.17363117999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.890904019380994,
            "unit": "iter/sec",
            "range": "stddev: 0.0001351831643979066",
            "extra": "mean: 59.20346234000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.7659938014184,
            "unit": "iter/sec",
            "range": "stddev: 0.00015828046478761262",
            "extra": "mean: 59.64454072000194 msec\nrounds: 5"
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
        "date": 1619594794854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9119285999937682,
            "unit": "iter/sec",
            "range": "stddev: 0.017792144887910064",
            "extra": "mean: 1.09657707852 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 82.83095530630423,
            "unit": "iter/sec",
            "range": "stddev: 0.00017507289728149966",
            "extra": "mean: 12.072781200000122 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.271713856566734,
            "unit": "iter/sec",
            "range": "stddev: 0.0013496246911500354",
            "extra": "mean: 234.0980771599999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 117.9506532588429,
            "unit": "iter/sec",
            "range": "stddev: 0.00018722378760459974",
            "extra": "mean: 8.478121759999908 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5281351841286587,
            "unit": "iter/sec",
            "range": "stddev: 0.020224814926236716",
            "extra": "mean: 1.8934546117199997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 225.60710895586234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414027984586573",
            "extra": "mean: 4.432484439998916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.455938684635142,
            "unit": "iter/sec",
            "range": "stddev: 0.004645095320371254",
            "extra": "mean: 183.2865172800001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4316448247453129,
            "unit": "iter/sec",
            "range": "stddev: 0.019264120619697078",
            "extra": "mean: 2.3167195404 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 1047.753788756521,
            "unit": "iter/sec",
            "range": "stddev: 0.0018000341412670621",
            "extra": "mean: 954.4226999997818 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 43.91711802330996,
            "unit": "iter/sec",
            "range": "stddev: 0.00017063026022809112",
            "extra": "mean: 22.770164460000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6827.480225575898,
            "unit": "iter/sec",
            "range": "stddev: 0.000002823718205675177",
            "extra": "mean: 146.4669199998525 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 43.53606559673095,
            "unit": "iter/sec",
            "range": "stddev: 0.00012955549523071004",
            "extra": "mean: 22.969461899999715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6553.857305512013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031703753254148724",
            "extra": "mean: 152.5818999994044 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.144299231420064,
            "unit": "iter/sec",
            "range": "stddev: 0.00014538507917281188",
            "extra": "mean: 22.65298163999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6855.433307980505,
            "unit": "iter/sec",
            "range": "stddev: 0.000002931881660985463",
            "extra": "mean: 145.8696999992526 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.458413949924186,
            "unit": "iter/sec",
            "range": "stddev: 0.00011561427183139638",
            "extra": "mean: 22.492930159999673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3634.864486076864,
            "unit": "iter/sec",
            "range": "stddev: 0.000006188083762491854",
            "extra": "mean: 275.1134199996841 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 21.88134677352467,
            "unit": "iter/sec",
            "range": "stddev: 0.00021918347265303357",
            "extra": "mean: 45.70102609999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11810.85157420943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015592216649104675",
            "extra": "mean: 84.66789999999946 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 224.0220632699336,
            "unit": "iter/sec",
            "range": "stddev: 0.00003649651767963305",
            "extra": "mean: 4.463846039999453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14383.166402444882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015844896689080109",
            "extra": "mean: 69.52571999931934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 230.34232458169416,
            "unit": "iter/sec",
            "range": "stddev: 0.00021871894828535016",
            "extra": "mean: 4.341364539999404 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12059.668344754244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016769799092861443",
            "extra": "mean: 82.92101999927581 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.184407094567405,
            "unit": "iter/sec",
            "range": "stddev: 0.00009229814132160671",
            "extra": "mean: 20.331646940000496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.52846922733931,
            "unit": "iter/sec",
            "range": "stddev: 0.00018892969017598758",
            "extra": "mean: 11.046248859999537 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12042.693757973291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012454104082691399",
            "extra": "mean: 83.03789999956734 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 222.86850522844168,
            "unit": "iter/sec",
            "range": "stddev: 0.00010081185247848987",
            "extra": "mean: 4.486950719999641 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14003.272284684313,
            "unit": "iter/sec",
            "range": "stddev: 0.000007186394578612375",
            "extra": "mean: 71.41187999991416 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 223.39901775296417,
            "unit": "iter/sec",
            "range": "stddev: 0.00023736251682425648",
            "extra": "mean: 4.476295419999588 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12249.68083460825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012186781554080009",
            "extra": "mean: 81.63477999971747 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 40.708705142830155,
            "unit": "iter/sec",
            "range": "stddev: 0.0004697462049010004",
            "extra": "mean: 24.56477052000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 88.08871915250184,
            "unit": "iter/sec",
            "range": "stddev: 0.00018562600028045346",
            "extra": "mean: 11.352191399999471 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11736.171796768682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030729265572843154",
            "extra": "mean: 85.20666000094934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 214.45809110383462,
            "unit": "iter/sec",
            "range": "stddev: 0.00006293360900907193",
            "extra": "mean: 4.66291569999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13579.84555369184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025390779686929976",
            "extra": "mean: 73.63854000004721 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 225.72873452032826,
            "unit": "iter/sec",
            "range": "stddev: 0.00007418002069809294",
            "extra": "mean: 4.430096159999266 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12152.449070923427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016382592497557577",
            "extra": "mean: 82.28793999990103 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 34.98750132043724,
            "unit": "iter/sec",
            "range": "stddev: 0.00033474287729592836",
            "extra": "mean: 28.58163521999984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 89.828238993048,
            "unit": "iter/sec",
            "range": "stddev: 0.00015212095036527717",
            "extra": "mean: 11.132356719999734 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6161.803791662961,
            "unit": "iter/sec",
            "range": "stddev: 0.000005274127498185506",
            "extra": "mean: 162.29013999975447 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 109.29766274992636,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914638982798335",
            "extra": "mean: 9.149326479999898 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7701.442788244862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032342532982288216",
            "extra": "mean: 129.84580000079407 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 114.61178284312562,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453011626390978",
            "extra": "mean: 8.7251064000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6497.920015850507,
            "unit": "iter/sec",
            "range": "stddev: 0.000003155736317330578",
            "extra": "mean: 153.89539999887347 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.447621653556,
            "unit": "iter/sec",
            "range": "stddev: 0.001085147865388221",
            "extra": "mean: 57.3144019199998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.15192979153872,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712689904030411",
            "extra": "mean: 22.147447619999525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3074.180529523028,
            "unit": "iter/sec",
            "range": "stddev: 0.000011390467646763122",
            "extra": "mean: 325.2899400007436 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 54.80805336206546,
            "unit": "iter/sec",
            "range": "stddev: 0.00013694211244696442",
            "extra": "mean: 18.245493840000794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4020.125714153626,
            "unit": "iter/sec",
            "range": "stddev: 0.000005481496085618894",
            "extra": "mean: 248.74844000009944 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.86118405785298,
            "unit": "iter/sec",
            "range": "stddev: 0.00021274815345902364",
            "extra": "mean: 17.58668969999917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3321.4368323059584,
            "unit": "iter/sec",
            "range": "stddev: 0.000007548788582490561",
            "extra": "mean: 301.07452000095236 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.746166228891205,
            "unit": "iter/sec",
            "range": "stddev: 0.0016787126155752806",
            "extra": "mean: 114.33580998000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.54126124093995,
            "unit": "iter/sec",
            "range": "stddev: 0.0016764882784444462",
            "extra": "mean: 46.422537140001054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1220.440265526902,
            "unit": "iter/sec",
            "range": "stddev: 0.000006326743988929627",
            "extra": "mean: 819.3764399999282 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 491.15333628370024,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590685364508952",
            "extra": "mean: 2.0360240400003704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1175.6269030445326,
            "unit": "iter/sec",
            "range": "stddev: 0.00003994052047998075",
            "extra": "mean: 850.6100000010974 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 55.67809648828462,
            "unit": "iter/sec",
            "range": "stddev: 0.00015375882367368358",
            "extra": "mean: 17.96038411999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1128.932718974606,
            "unit": "iter/sec",
            "range": "stddev: 0.000007323921797726562",
            "extra": "mean: 885.792379999657 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 501.68123415200284,
            "unit": "iter/sec",
            "range": "stddev: 0.000007099776376533025",
            "extra": "mean: 1.9932975999995506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1136.25889395272,
            "unit": "iter/sec",
            "range": "stddev: 0.000013161645263123042",
            "extra": "mean: 880.0811200001135 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 45.317367393982636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002563873507557467",
            "extra": "mean: 22.066595160000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 868.0137371850919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042599638423029665",
            "extra": "mean: 1.1520555000004151 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 449.5794651665807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005295733989603098",
            "extra": "mean: 2.2243008800001007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 864.0961947832067,
            "unit": "iter/sec",
            "range": "stddev: 0.000018692689690495798",
            "extra": "mean: 1.1572785599997815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 38.624562936999084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631086672005026",
            "extra": "mean: 25.890260599999806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 450.6162853626213,
            "unit": "iter/sec",
            "range": "stddev: 0.000024746766367363846",
            "extra": "mean: 2.219183000000271 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 221.2480826475041,
            "unit": "iter/sec",
            "range": "stddev: 0.00032042793933367554",
            "extra": "mean: 4.519813180000369 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 428.8553504183352,
            "unit": "iter/sec",
            "range": "stddev: 0.00006540248348649926",
            "extra": "mean: 2.3317885599993815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.257677071905476,
            "unit": "iter/sec",
            "range": "stddev: 0.0008940715004249259",
            "extra": "mean: 51.927342860000174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 208.11229119888984,
            "unit": "iter/sec",
            "range": "stddev: 0.0003141055310729758",
            "extra": "mean: 4.8050982200004455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 113.17120862071557,
            "unit": "iter/sec",
            "range": "stddev: 0.0003541375512680738",
            "extra": "mean: 8.836169660000905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 213.04336892329707,
            "unit": "iter/sec",
            "range": "stddev: 0.000207212954513153",
            "extra": "mean: 4.693879960000231 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.602256793986108,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889825584132857",
            "extra": "mean: 104.14218464000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 59.825595896375994,
            "unit": "iter/sec",
            "range": "stddev: 0.0003018785578201904",
            "extra": "mean: 16.715253480000456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.57313068845261,
            "unit": "iter/sec",
            "range": "stddev: 0.0003860614876580299",
            "extra": "mean: 24.64685329999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 30.89117842001782,
            "unit": "iter/sec",
            "range": "stddev: 0.001043126070693358",
            "extra": "mean: 32.371701280000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.281852321866827,
            "unit": "iter/sec",
            "range": "stddev: 0.0029747366209167984",
            "extra": "mean: 70.0189287400002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 529.4862976887349,
            "unit": "iter/sec",
            "range": "stddev: 0.00024411276246260604",
            "extra": "mean: 1.8886230000003934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 263.97566913028186,
            "unit": "iter/sec",
            "range": "stddev: 0.00010582245383195023",
            "extra": "mean: 3.7882279199999402 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.64566122631749,
            "unit": "iter/sec",
            "range": "stddev: 0.00011505394375500864",
            "extra": "mean: 13.396625919999678 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.09173535347428,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308534277284611",
            "extra": "mean: 9.515496119999511 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 176.07617201694705,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757390904192057",
            "extra": "mean: 5.679360180000685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 161.39574107239392,
            "unit": "iter/sec",
            "range": "stddev: 0.000039505104541300715",
            "extra": "mean: 6.195950360000211 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.05023705696948,
            "unit": "iter/sec",
            "range": "stddev: 0.00013862629192290814",
            "extra": "mean: 7.996786120000933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.785114243866293,
            "unit": "iter/sec",
            "range": "stddev: 0.0004009252115933517",
            "extra": "mean: 53.233639520000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.13358192902778,
            "unit": "iter/sec",
            "range": "stddev: 0.0051375028378453326",
            "extra": "mean: 882.1594402600022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.97086371925197,
            "unit": "iter/sec",
            "range": "stddev: 0.0004330608357595924",
            "extra": "mean: 58.92452007999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.97876838359948,
            "unit": "iter/sec",
            "range": "stddev: 0.00022715142150682292",
            "extra": "mean: 58.89708707999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.783023131072387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006561255228037207",
            "extra": "mean: 59.58402083999886 msec\nrounds: 5"
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
        "date": 1619594862363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9046841539879423,
            "unit": "iter/sec",
            "range": "stddev: 0.017796885670374702",
            "extra": "mean: 1.10535814692 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 83.98638599495878,
            "unit": "iter/sec",
            "range": "stddev: 0.00007094692239019079",
            "extra": "mean: 11.906691640000133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.264536656382207,
            "unit": "iter/sec",
            "range": "stddev: 0.002272680416418413",
            "extra": "mean: 234.4920633999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 113.67163336075122,
            "unit": "iter/sec",
            "range": "stddev: 0.00045667045766735465",
            "extra": "mean: 8.797269559999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.541994434693613,
            "unit": "iter/sec",
            "range": "stddev: 0.013347074918219046",
            "extra": "mean: 1.8450373951999994 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 228.7065489232898,
            "unit": "iter/sec",
            "range": "stddev: 0.00010638144684667495",
            "extra": "mean: 4.372415240000009 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.7667316833062525,
            "unit": "iter/sec",
            "range": "stddev: 0.001270361478560086",
            "extra": "mean: 173.40844952000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.39658533977855526,
            "unit": "iter/sec",
            "range": "stddev: 0.18278141658204725",
            "extra": "mean: 2.5215253810400013 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6522.854254894556,
            "unit": "iter/sec",
            "range": "stddev: 0.000021739768306465235",
            "extra": "mean: 153.30712000036328 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.68918782040653,
            "unit": "iter/sec",
            "range": "stddev: 0.000025609281756339375",
            "extra": "mean: 22.376777220000577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6771.505828480618,
            "unit": "iter/sec",
            "range": "stddev: 0.000005947146849291218",
            "extra": "mean: 147.67764000055195 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.354527841668016,
            "unit": "iter/sec",
            "range": "stddev: 0.00044874035834693897",
            "extra": "mean: 22.54561256000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6797.51151257626,
            "unit": "iter/sec",
            "range": "stddev: 0.000006408506969502943",
            "extra": "mean: 147.11266000063006 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.75518907102652,
            "unit": "iter/sec",
            "range": "stddev: 0.00005129268869854933",
            "extra": "mean: 22.343777799999884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6868.058281785624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027038123200457005",
            "extra": "mean: 145.60156000015922 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.232971444108955,
            "unit": "iter/sec",
            "range": "stddev: 0.000440121972727302",
            "extra": "mean: 22.6075700399997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3611.148105327879,
            "unit": "iter/sec",
            "range": "stddev: 0.000009083159219055322",
            "extra": "mean: 276.92023999918547 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.30719428104735,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104116255713386",
            "extra": "mean: 44.82858702000101 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12260.800968703432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018034207120375186",
            "extra": "mean: 81.56073999998625 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 225.62899033614272,
            "unit": "iter/sec",
            "range": "stddev: 0.000013975272948669776",
            "extra": "mean: 4.432054579999658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14245.07106279899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031482966236184676",
            "extra": "mean: 70.19972000080088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 233.74205609507288,
            "unit": "iter/sec",
            "range": "stddev: 0.00003147062860251315",
            "extra": "mean: 4.278220260000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12503.672953763464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013390430473489898",
            "extra": "mean: 79.9765000010666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.45589778524716,
            "unit": "iter/sec",
            "range": "stddev: 0.0001445792959664265",
            "extra": "mean: 20.22003531999985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.19211192901196,
            "unit": "iter/sec",
            "range": "stddev: 0.00009737289805920457",
            "extra": "mean: 10.965860739999584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11101.620459143829,
            "unit": "iter/sec",
            "range": "stddev: 0.000007990614602802551",
            "extra": "mean: 90.07693999990352 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 223.92005273086028,
            "unit": "iter/sec",
            "range": "stddev: 0.00004132650587318178",
            "extra": "mean: 4.465879619999669 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13987.344250928907,
            "unit": "iter/sec",
            "range": "stddev: 0.00000760460148158483",
            "extra": "mean: 71.49319999996351 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 235.08155966647217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002183004652025086",
            "extra": "mean: 4.2538428000000295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12561.198157607801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012735791324320756",
            "extra": "mean: 79.61023999882855 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.741316942239344,
            "unit": "iter/sec",
            "range": "stddev: 0.00004213698806524616",
            "extra": "mean: 23.957078340000066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.88375620611717,
            "unit": "iter/sec",
            "range": "stddev: 0.00002752537448789118",
            "extra": "mean: 10.883316499999863 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12109.997529461414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011099468743867423",
            "extra": "mean: 82.57640000067568 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 225.3653882844892,
            "unit": "iter/sec",
            "range": "stddev: 0.000015061986340904889",
            "extra": "mean: 4.437238600000342 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14609.745927603506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015537981126909106",
            "extra": "mean: 68.4474600006979 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 234.17476447683504,
            "unit": "iter/sec",
            "range": "stddev: 0.000022721892043683124",
            "extra": "mean: 4.270314960000405 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12461.556099513064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013582933515624094",
            "extra": "mean: 80.24679999948603 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.85643676501821,
            "unit": "iter/sec",
            "range": "stddev: 0.00013111548383451003",
            "extra": "mean: 27.888995400000454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.10321911457592,
            "unit": "iter/sec",
            "range": "stddev: 0.00004577790433058563",
            "extra": "mean: 10.976560539999696 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6351.343626779015,
            "unit": "iter/sec",
            "range": "stddev: 0.00000760474094804924",
            "extra": "mean: 157.44699999913792 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.43344671828882,
            "unit": "iter/sec",
            "range": "stddev: 0.000024144122410180704",
            "extra": "mean: 8.973966339999038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7861.9553846822055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032693639538482044",
            "extra": "mean: 127.19481999965866 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.95124596570815,
            "unit": "iter/sec",
            "range": "stddev: 0.000038259592468416586",
            "extra": "mean: 8.550571580000224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6559.088863869441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025557141481060185",
            "extra": "mean: 152.46019999949567 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.86646680465058,
            "unit": "iter/sec",
            "range": "stddev: 0.0005312936373069336",
            "extra": "mean: 55.97077536000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.18391712231474,
            "unit": "iter/sec",
            "range": "stddev: 0.0004693358254076468",
            "extra": "mean: 22.131768639999905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3229.9825064161437,
            "unit": "iter/sec",
            "range": "stddev: 0.000009080606561289512",
            "extra": "mean: 309.59919999986596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.59035839356478,
            "unit": "iter/sec",
            "range": "stddev: 0.000038425112367247606",
            "extra": "mean: 17.98873093999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4053.1195361386626,
            "unit": "iter/sec",
            "range": "stddev: 0.00000471698917067815",
            "extra": "mean: 246.72354000017552 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.16911780315884,
            "unit": "iter/sec",
            "range": "stddev: 0.00007085116750577694",
            "extra": "mean: 17.19125263999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3367.446917595957,
            "unit": "iter/sec",
            "range": "stddev: 0.000006665940790294275",
            "extra": "mean: 296.96087999923293 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.99966054594376,
            "unit": "iter/sec",
            "range": "stddev: 0.0001899667225373214",
            "extra": "mean: 111.11530205999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.76075301902908,
            "unit": "iter/sec",
            "range": "stddev: 0.00015075482752125715",
            "extra": "mean: 43.935277499999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1237.286571160136,
            "unit": "iter/sec",
            "range": "stddev: 0.000006604705235535426",
            "extra": "mean: 808.2201999997096 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 551.2258237037673,
            "unit": "iter/sec",
            "range": "stddev: 0.00001593100579933391",
            "extra": "mean: 1.8141385200004834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1239.428357794319,
            "unit": "iter/sec",
            "range": "stddev: 0.000024513338373164",
            "extra": "mean: 806.8235599995432 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.11561358265167,
            "unit": "iter/sec",
            "range": "stddev: 0.00018727319776349512",
            "extra": "mean: 17.50834732000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1144.9630373866275,
            "unit": "iter/sec",
            "range": "stddev: 0.000013452071250958339",
            "extra": "mean: 873.3906400004798 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 534.7979152166279,
            "unit": "iter/sec",
            "range": "stddev: 0.000005243579392689074",
            "extra": "mean: 1.8698651799996924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1144.819088017644,
            "unit": "iter/sec",
            "range": "stddev: 0.000011358461701604735",
            "extra": "mean: 873.500459999832 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.90535463901756,
            "unit": "iter/sec",
            "range": "stddev: 0.00006669760453758773",
            "extra": "mean: 21.319527539999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 894.9420061473916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073411058881984895",
            "extra": "mean: 1.1173908399996437 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 469.61252852609636,
            "unit": "iter/sec",
            "range": "stddev: 0.000015163632815894152",
            "extra": "mean: 2.1294150799991485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 897.0251059387006,
            "unit": "iter/sec",
            "range": "stddev: 0.000004177918563687732",
            "extra": "mean: 1.1147959999999557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.272488986114666,
            "unit": "iter/sec",
            "range": "stddev: 0.00013279358843316702",
            "extra": "mean: 25.46311746000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 456.02763972593954,
            "unit": "iter/sec",
            "range": "stddev: 0.000024547288473156133",
            "extra": "mean: 2.1928495399993153 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 233.60179084735623,
            "unit": "iter/sec",
            "range": "stddev: 0.00009357695283330794",
            "extra": "mean: 4.280789100000675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 455.9554844458735,
            "unit": "iter/sec",
            "range": "stddev: 0.000026465338700867163",
            "extra": "mean: 2.1931965600003878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.644585615221427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005201993219695944",
            "extra": "mean: 50.904611559999466 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 230.1719766290592,
            "unit": "iter/sec",
            "range": "stddev: 0.000022547321494611063",
            "extra": "mean: 4.344577539999931 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 118.69029794930333,
            "unit": "iter/sec",
            "range": "stddev: 0.000032326419686086816",
            "extra": "mean: 8.425288479999722 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 229.5550248926497,
            "unit": "iter/sec",
            "range": "stddev: 0.00005391746804048641",
            "extra": "mean: 4.356254020000847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.815517869713533,
            "unit": "iter/sec",
            "range": "stddev: 0.0014976741090572442",
            "extra": "mean: 101.87949462000064 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 54.170006563565394,
            "unit": "iter/sec",
            "range": "stddev: 0.001320810649272183",
            "extra": "mean: 18.460400199999185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.27490923358367,
            "unit": "iter/sec",
            "range": "stddev: 0.0017987038714706342",
            "extra": "mean: 25.461548339999922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.486035712975355,
            "unit": "iter/sec",
            "range": "stddev: 0.0003327372190527742",
            "extra": "mean: 39.23717329999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.03365753072908,
            "unit": "iter/sec",
            "range": "stddev: 0.004538105085233859",
            "extra": "mean: 83.10025421999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 569.2114051842549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071105981774219",
            "extra": "mean: 1.756816519999802 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 270.7599359555761,
            "unit": "iter/sec",
            "range": "stddev: 0.00001548417833343211",
            "extra": "mean: 3.693308599999341 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.98211076801074,
            "unit": "iter/sec",
            "range": "stddev: 0.00008018636576460583",
            "extra": "mean: 13.336514400000397 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 105.50955246454359,
            "unit": "iter/sec",
            "range": "stddev: 0.000028971187276120265",
            "extra": "mean: 9.477814819999821 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 175.95233099446412,
            "unit": "iter/sec",
            "range": "stddev: 0.000012002761238833368",
            "extra": "mean: 5.683357500000739 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.4144397575685,
            "unit": "iter/sec",
            "range": "stddev: 0.00010681465361633698",
            "extra": "mean: 6.312555859998383 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.42121555098721,
            "unit": "iter/sec",
            "range": "stddev: 0.00003058642170609829",
            "extra": "mean: 7.9731327399986185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.65026986862164,
            "unit": "iter/sec",
            "range": "stddev: 0.00046062283483581945",
            "extra": "mean: 53.61852708000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1204167142293702,
            "unit": "iter/sec",
            "range": "stddev: 0.004398785339625954",
            "extra": "mean: 892.525064380003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.713883521325513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003331208236630587",
            "extra": "mean: 59.830499519999876 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.6474432923353,
            "unit": "iter/sec",
            "range": "stddev: 0.00023122744059717536",
            "extra": "mean: 60.069284059998154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.61222647901414,
            "unit": "iter/sec",
            "range": "stddev: 0.00032493526929894213",
            "extra": "mean: 60.19662693999976 msec\nrounds: 5"
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
        "date": 1619594995301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9077988557820061,
            "unit": "iter/sec",
            "range": "stddev: 0.014430067202396334",
            "extra": "mean: 1.10156560964 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 83.20929379380316,
            "unit": "iter/sec",
            "range": "stddev: 0.00020530056107238235",
            "extra": "mean: 12.017888320000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.273609448128596,
            "unit": "iter/sec",
            "range": "stddev: 0.0014706680360431202",
            "extra": "mean: 233.99424119999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.94329445665805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001254745581008546",
            "extra": "mean: 8.337273079999932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5500374690353237,
            "unit": "iter/sec",
            "range": "stddev: 0.022824626665043698",
            "extra": "mean: 1.8180579620399997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 234.38182637075286,
            "unit": "iter/sec",
            "range": "stddev: 0.00006035221979608238",
            "extra": "mean: 4.266542399998912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.37944823704786,
            "unit": "iter/sec",
            "range": "stddev: 0.006872394060609982",
            "extra": "mean: 185.89267076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4428698153205502,
            "unit": "iter/sec",
            "range": "stddev: 0.06013474170879709",
            "extra": "mean: 2.2579999029199986 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6699.156683357032,
            "unit": "iter/sec",
            "range": "stddev: 0.000009101881116760452",
            "extra": "mean: 149.27252000006774 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.4197184944049,
            "unit": "iter/sec",
            "range": "stddev: 0.00023076210108028693",
            "extra": "mean: 22.512524480000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6832.831097453785,
            "unit": "iter/sec",
            "range": "stddev: 0.00000232996974082127",
            "extra": "mean: 146.35222000038084 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.16691696941828,
            "unit": "iter/sec",
            "range": "stddev: 0.00017057750681538167",
            "extra": "mean: 22.64138112000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6652.895173630002,
            "unit": "iter/sec",
            "range": "stddev: 0.000003658499727859068",
            "extra": "mean: 150.3105000006144 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 43.92066640946697,
            "unit": "iter/sec",
            "range": "stddev: 0.0002381478842421237",
            "extra": "mean: 22.768324839999536 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6882.328561486849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030244395980057243",
            "extra": "mean: 145.29966000111472 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.16159863008618,
            "unit": "iter/sec",
            "range": "stddev: 0.0003841964873866421",
            "extra": "mean: 22.644107799999915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3382.922695014626,
            "unit": "iter/sec",
            "range": "stddev: 0.000008054965712114372",
            "extra": "mean: 295.60237999930905 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.081599852115854,
            "unit": "iter/sec",
            "range": "stddev: 0.0004859451017539467",
            "extra": "mean: 45.2865737399992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12269.432818518111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015068454632257785",
            "extra": "mean: 81.50335999971503 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 224.7664788667858,
            "unit": "iter/sec",
            "range": "stddev: 0.00003138466635768817",
            "extra": "mean: 4.449061999999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14422.251803833413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012827395757985931",
            "extra": "mean: 69.33730000014293 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 230.29843416041334,
            "unit": "iter/sec",
            "range": "stddev: 0.00005720152042764964",
            "extra": "mean: 4.342191920000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12391.153014084372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027336388686993624",
            "extra": "mean: 80.7027400003335 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.60797924423542,
            "unit": "iter/sec",
            "range": "stddev: 0.00014931343216643224",
            "extra": "mean: 20.158047460000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.98945351955015,
            "unit": "iter/sec",
            "range": "stddev: 0.000050889244421952784",
            "extra": "mean: 10.870811399998956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12092.070962991367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016171735572665152",
            "extra": "mean: 82.69882000035977 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 225.92003516980162,
            "unit": "iter/sec",
            "range": "stddev: 0.00001690807149279824",
            "extra": "mean: 4.4263449199996785 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14237.891243035167,
            "unit": "iter/sec",
            "range": "stddev: 0.000008871562613714055",
            "extra": "mean: 70.23511999989296 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 234.0192052448138,
            "unit": "iter/sec",
            "range": "stddev: 0.00005202240108570042",
            "extra": "mean: 4.273153559998946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12502.609919877079,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012949843549858044",
            "extra": "mean: 79.98329999963971 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.781468947353666,
            "unit": "iter/sec",
            "range": "stddev: 0.00009389894018031346",
            "extra": "mean: 23.934055579999836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 92.23633980775739,
            "unit": "iter/sec",
            "range": "stddev: 0.00004705959763222347",
            "extra": "mean: 10.841713820000223 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12307.253033501902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012268702765341513",
            "extra": "mean: 81.25289999952656 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 224.69917308411078,
            "unit": "iter/sec",
            "range": "stddev: 0.000020044384109238367",
            "extra": "mean: 4.450394660000256 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14209.070559069862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035664222324630336",
            "extra": "mean: 70.37758000024041 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 234.0186466431646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000669906011996721",
            "extra": "mean: 4.273163760000784 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12545.899172137313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014450724689180478",
            "extra": "mean: 79.70731999989766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.09879491623908,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215635352154013",
            "extra": "mean: 27.70175576000042 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 92.4619766948925,
            "unit": "iter/sec",
            "range": "stddev: 0.000076714507630131",
            "extra": "mean: 10.815256559999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6412.76725531752,
            "unit": "iter/sec",
            "range": "stddev: 0.000008398545573917655",
            "extra": "mean: 155.93891999913012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 112.27700476021265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003861549695939804",
            "extra": "mean: 8.906543259999468 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7790.279445079701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018070527316511504",
            "extra": "mean: 128.36510000056478 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 118.06545613114824,
            "unit": "iter/sec",
            "range": "stddev: 0.00002968588927999301",
            "extra": "mean: 8.4698779200005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6606.47550873364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036604349943925865",
            "extra": "mean: 151.36664000010566 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 18.009053429218696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002496468433716348",
            "extra": "mean: 55.52762691999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 46.122682533185404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000679899154352066",
            "extra": "mean: 21.681306139999492 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3335.4426672814648,
            "unit": "iter/sec",
            "range": "stddev: 0.000010352871470050832",
            "extra": "mean: 299.8102799995195 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 56.10035866765698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000978822695528094",
            "extra": "mean: 17.825197980000098 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3978.4166124784556,
            "unit": "iter/sec",
            "range": "stddev: 0.000003076515316567189",
            "extra": "mean: 251.3562799992997 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.691742420940244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006728564957042469",
            "extra": "mean: 17.038171959999886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3349.066129669361,
            "unit": "iter/sec",
            "range": "stddev: 0.000007092280694973792",
            "extra": "mean: 298.59069999872645 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.993697063126069,
            "unit": "iter/sec",
            "range": "stddev: 0.0003760320531308481",
            "extra": "mean: 111.18897967999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.867894279963345,
            "unit": "iter/sec",
            "range": "stddev: 0.00018225892800714075",
            "extra": "mean: 43.72943077999935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1231.46327589368,
            "unit": "iter/sec",
            "range": "stddev: 0.000008409343494640006",
            "extra": "mean: 812.0420799997419 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 551.2627196291307,
            "unit": "iter/sec",
            "range": "stddev: 0.00000699949166828259",
            "extra": "mean: 1.8140171000004557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1246.023875512438,
            "unit": "iter/sec",
            "range": "stddev: 0.000002865736098314657",
            "extra": "mean: 802.5528399997484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.27823611956051,
            "unit": "iter/sec",
            "range": "stddev: 0.00010994014055407133",
            "extra": "mean: 17.458638179999753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1153.2628689722912,
            "unit": "iter/sec",
            "range": "stddev: 0.000005527956990096774",
            "extra": "mean: 867.1049999998104 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 519.9848102036395,
            "unit": "iter/sec",
            "range": "stddev: 0.000028478242767798852",
            "extra": "mean: 1.9231331000003138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1120.25696364635,
            "unit": "iter/sec",
            "range": "stddev: 0.00002835572271464325",
            "extra": "mean: 892.6523399998132 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.72639947781174,
            "unit": "iter/sec",
            "range": "stddev: 0.00010308285636109426",
            "extra": "mean: 21.401178160000427 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 890.9708938336466,
            "unit": "iter/sec",
            "range": "stddev: 0.000021111161529841716",
            "extra": "mean: 1.1223711200005937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 468.87987532969265,
            "unit": "iter/sec",
            "range": "stddev: 0.000007495534246176688",
            "extra": "mean: 2.1327424200001133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 890.6962183997143,
            "unit": "iter/sec",
            "range": "stddev: 0.000010238294700058536",
            "extra": "mean: 1.1227172399998155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.302465718083575,
            "unit": "iter/sec",
            "range": "stddev: 0.000046127288235124964",
            "extra": "mean: 25.44369626000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 427.9559740804477,
            "unit": "iter/sec",
            "range": "stddev: 0.00015359315806491968",
            "extra": "mean: 2.3366889600004015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 233.935865097676,
            "unit": "iter/sec",
            "range": "stddev: 0.00005007557344272442",
            "extra": "mean: 4.274675880000132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 449.52138693750635,
            "unit": "iter/sec",
            "range": "stddev: 0.00002710706849236628",
            "extra": "mean: 2.2245882599997913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.7108384752697,
            "unit": "iter/sec",
            "range": "stddev: 0.00014269558168305912",
            "extra": "mean: 50.73350894000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 225.81120224354925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000532648398154373",
            "extra": "mean: 4.428478259999906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 117.26200983843566,
            "unit": "iter/sec",
            "range": "stddev: 0.000012778793298982884",
            "extra": "mean: 8.527911140000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 229.16791257623376,
            "unit": "iter/sec",
            "range": "stddev: 0.000057404594502104136",
            "extra": "mean: 4.363612639999701 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.859837138097083,
            "unit": "iter/sec",
            "range": "stddev: 0.0006286305695047819",
            "extra": "mean: 101.42155352000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 55.16743286636102,
            "unit": "iter/sec",
            "range": "stddev: 0.0009780844407847168",
            "extra": "mean: 18.126636460000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.59250086803072,
            "unit": "iter/sec",
            "range": "stddev: 0.0011634757879729872",
            "extra": "mean: 25.257308279999506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.592599376981994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007186453484282288",
            "extra": "mean: 39.07379572000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.729212154665447,
            "unit": "iter/sec",
            "range": "stddev: 0.004449125060535224",
            "extra": "mean: 78.55945739999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 573.5213409699849,
            "unit": "iter/sec",
            "range": "stddev: 0.000011574853689472992",
            "extra": "mean: 1.7436142799999743 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 257.98870140553,
            "unit": "iter/sec",
            "range": "stddev: 0.0002838898375520543",
            "extra": "mean: 3.8761387399989644 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.08479478731877,
            "unit": "iter/sec",
            "range": "stddev: 0.000041170600969550464",
            "extra": "mean: 13.143230559999779 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.12670932181432,
            "unit": "iter/sec",
            "range": "stddev: 0.000042021699328547284",
            "extra": "mean: 9.334740199999487 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 177.74620246840485,
            "unit": "iter/sec",
            "range": "stddev: 0.000045304421661204744",
            "extra": "mean: 5.62599923999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 161.93177036592243,
            "unit": "iter/sec",
            "range": "stddev: 0.00002216938752579792",
            "extra": "mean: 6.175440420000768 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.50771699509595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000792504858574867",
            "extra": "mean: 7.967637560000185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.388940326085372,
            "unit": "iter/sec",
            "range": "stddev: 0.001008735485323696",
            "extra": "mean: 54.380512540000154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.137320397998191,
            "unit": "iter/sec",
            "range": "stddev: 0.0028238306058611415",
            "extra": "mean: 879.2597070800014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.822067202021103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004865547039979695",
            "extra": "mean: 59.44572613999867 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.790348583110763,
            "unit": "iter/sec",
            "range": "stddev: 0.000885853749430099",
            "extra": "mean: 59.55802495999933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.87881488180249,
            "unit": "iter/sec",
            "range": "stddev: 0.00017910731262876824",
            "extra": "mean: 59.24586571999953 msec\nrounds: 5"
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
        "date": 1619611424231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9087068612197037,
            "unit": "iter/sec",
            "range": "stddev: 0.015488063932873232",
            "extra": "mean: 1.10046489432 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 84.22097780224982,
            "unit": "iter/sec",
            "range": "stddev: 0.000040284274832906395",
            "extra": "mean: 11.873526360000142 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.348499086387994,
            "unit": "iter/sec",
            "range": "stddev: 0.0008013492823473131",
            "extra": "mean: 229.9644038400001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 120.63489566541598,
            "unit": "iter/sec",
            "range": "stddev: 0.00004961200630245536",
            "extra": "mean: 8.28947539999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.42401480957922966,
            "unit": "iter/sec",
            "range": "stddev: 0.006072260544723851",
            "extra": "mean: 2.35840819096 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 237.01194228282134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293374361976859",
            "extra": "mean: 4.219196679999868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.0426004075826905,
            "unit": "iter/sec",
            "range": "stddev: 0.014626375302035607",
            "extra": "mean: 247.36553188000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.34830575359249594,
            "unit": "iter/sec",
            "range": "stddev: 0.025185295354369013",
            "extra": "mean: 2.87104071548 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6475.622841581458,
            "unit": "iter/sec",
            "range": "stddev: 0.000012741832390102699",
            "extra": "mean: 154.42530000029817 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.15941699677959,
            "unit": "iter/sec",
            "range": "stddev: 0.0002326320652208001",
            "extra": "mean: 22.645226499999467 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6736.248521203019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036016494374257035",
            "extra": "mean: 148.4505800004854 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.36395187038233,
            "unit": "iter/sec",
            "range": "stddev: 0.00004879971718859802",
            "extra": "mean: 22.540823300000174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6826.137060379402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025358160352432905",
            "extra": "mean: 146.49573999975019 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.39543929843059,
            "unit": "iter/sec",
            "range": "stddev: 0.000052530053998735815",
            "extra": "mean: 22.524836239999786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6878.686115907973,
            "unit": "iter/sec",
            "range": "stddev: 0.000003518613407531045",
            "extra": "mean: 145.37660000030428 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.48942297424729,
            "unit": "iter/sec",
            "range": "stddev: 0.00009066619491524099",
            "extra": "mean: 22.47725264000053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3691.911737608577,
            "unit": "iter/sec",
            "range": "stddev: 0.000006718719831834643",
            "extra": "mean: 270.8623800003807 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.475534774682362,
            "unit": "iter/sec",
            "range": "stddev: 0.00006184521154605005",
            "extra": "mean: 44.49282341999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12204.352609162728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019838679086338418",
            "extra": "mean: 81.93797999979324 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 227.22903113005947,
            "unit": "iter/sec",
            "range": "stddev: 0.000014212372362267919",
            "extra": "mean: 4.400846119999642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14809.369354799945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016079719500106311",
            "extra": "mean: 67.52482000024429 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 235.06282909742947,
            "unit": "iter/sec",
            "range": "stddev: 0.00004482103491917427",
            "extra": "mean: 4.254181759998801 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12347.560109877948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019198576732229324",
            "extra": "mean: 80.98765999932311 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 50.14499515610299,
            "unit": "iter/sec",
            "range": "stddev: 0.00004555837492701799",
            "extra": "mean: 19.942169640000316 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.27266045051775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007058460104354883",
            "extra": "mean: 10.95618332000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11899.34203777334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019761534569008966",
            "extra": "mean: 84.03826000005665 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 222.51349139359496,
            "unit": "iter/sec",
            "range": "stddev: 0.000032885222564822225",
            "extra": "mean: 4.494109519998233 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13549.22487605476,
            "unit": "iter/sec",
            "range": "stddev: 0.000008949209318745325",
            "extra": "mean: 73.80495999939285 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 234.60668693342407,
            "unit": "iter/sec",
            "range": "stddev: 0.000017930154522156422",
            "extra": "mean: 4.262453099999561 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12308.486110399585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017438175313288693",
            "extra": "mean: 81.24475999977676 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.81286412654335,
            "unit": "iter/sec",
            "range": "stddev: 0.0001198954575387711",
            "extra": "mean: 23.916084699999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.18687680779382,
            "unit": "iter/sec",
            "range": "stddev: 0.000013906091959084447",
            "extra": "mean: 10.966490300000373 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12240.309591810996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024759814875808316",
            "extra": "mean: 81.69727999927545 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 223.71400887907313,
            "unit": "iter/sec",
            "range": "stddev: 0.00001935671595041589",
            "extra": "mean: 4.469992759999855 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14707.616986692627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017593528772202928",
            "extra": "mean: 67.99197999953321 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 233.0022070621615,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682202360396533",
            "extra": "mean: 4.291804839999713 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12356.873424394144,
            "unit": "iter/sec",
            "range": "stddev: 0.000001354764039628816",
            "extra": "mean: 80.92661999967277 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.917458694459434,
            "unit": "iter/sec",
            "range": "stddev: 0.00006518137105000493",
            "extra": "mean: 27.84161342000118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.99175559553812,
            "unit": "iter/sec",
            "range": "stddev: 0.000029083688381067104",
            "extra": "mean: 10.99000665999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6338.375172685219,
            "unit": "iter/sec",
            "range": "stddev: 0.000003363820554904151",
            "extra": "mean: 157.76914000127817 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 111.58739089263447,
            "unit": "iter/sec",
            "range": "stddev: 0.000036472737920286296",
            "extra": "mean: 8.961586000000352 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7824.716338369838,
            "unit": "iter/sec",
            "range": "stddev: 0.000003321210230773509",
            "extra": "mean: 127.80016000021988 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.75109471489355,
            "unit": "iter/sec",
            "range": "stddev: 0.00004497497125313565",
            "extra": "mean: 8.565230179999617 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6545.87519531056,
            "unit": "iter/sec",
            "range": "stddev: 0.000003100538198768017",
            "extra": "mean: 152.76795999966453 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.98690235571997,
            "unit": "iter/sec",
            "range": "stddev: 0.00014283645462506784",
            "extra": "mean: 55.59600982000063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.10822358235765,
            "unit": "iter/sec",
            "range": "stddev: 0.00030463984730801574",
            "extra": "mean: 22.16890669999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3236.9478171699384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010883108928447309",
            "extra": "mean: 308.9329999994561 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.30066239067163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000492001995135646",
            "extra": "mean: 18.08296603999963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3980.2538016774165,
            "unit": "iter/sec",
            "range": "stddev: 0.000006155845462513111",
            "extra": "mean: 251.24026000014513 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 57.78460210333089,
            "unit": "iter/sec",
            "range": "stddev: 0.00004076529309041138",
            "extra": "mean: 17.305648280000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3346.584917182043,
            "unit": "iter/sec",
            "range": "stddev: 0.000008483596613989698",
            "extra": "mean: 298.81208000006154 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.017369720868775,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801026722303047",
            "extra": "mean: 110.89708318000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.84534368359367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001858190075317846",
            "extra": "mean: 43.77259601999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1243.8728997735252,
            "unit": "iter/sec",
            "range": "stddev: 0.000008157351901171543",
            "extra": "mean: 803.9406599999666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 547.3212951913928,
            "unit": "iter/sec",
            "range": "stddev: 0.000014494164234522824",
            "extra": "mean: 1.8270803799993018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1246.6437545172457,
            "unit": "iter/sec",
            "range": "stddev: 0.00000590506043321062",
            "extra": "mean: 802.1537800004808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.46593225588483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000132426270957382",
            "extra": "mean: 17.401614499999596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1140.9620244948076,
            "unit": "iter/sec",
            "range": "stddev: 0.000004465945177483149",
            "extra": "mean: 876.4533599992319 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 534.4024745997248,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662267377681253",
            "extra": "mean: 1.8712488200003463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1145.0986571196884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000153542957040669",
            "extra": "mean: 873.2872000001635 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.78932021563281,
            "unit": "iter/sec",
            "range": "stddev: 0.0001436318613966046",
            "extra": "mean: 21.372398560000647 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 893.065944864951,
            "unit": "iter/sec",
            "range": "stddev: 0.000012434343211396108",
            "extra": "mean: 1.1197381399995265 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 473.80223316648716,
            "unit": "iter/sec",
            "range": "stddev: 0.000021460152516742946",
            "extra": "mean: 2.110585239999523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 891.7230463035459,
            "unit": "iter/sec",
            "range": "stddev: 0.000006983420720828607",
            "extra": "mean: 1.1214244199982204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.56767409657797,
            "unit": "iter/sec",
            "range": "stddev: 0.000054448146639579465",
            "extra": "mean: 25.273156000000654 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 458.8228935372306,
            "unit": "iter/sec",
            "range": "stddev: 0.00001200577722092712",
            "extra": "mean: 2.1794901999999183 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 238.0515477011114,
            "unit": "iter/sec",
            "range": "stddev: 0.000013257238773424381",
            "extra": "mean: 4.20077084000127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 457.5507225631959,
            "unit": "iter/sec",
            "range": "stddev: 0.000019411124994800708",
            "extra": "mean: 2.185550039999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.726547676577805,
            "unit": "iter/sec",
            "range": "stddev: 0.00010633277171141798",
            "extra": "mean: 50.693107400001054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 227.40077561584562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000325285511786369",
            "extra": "mean: 4.3975223799998275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 116.78076864017879,
            "unit": "iter/sec",
            "range": "stddev: 0.00003927668692933205",
            "extra": "mean: 8.56305376000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 225.98170611204662,
            "unit": "iter/sec",
            "range": "stddev: 0.00003443486458515835",
            "extra": "mean: 4.42513695999878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.86552900395833,
            "unit": "iter/sec",
            "range": "stddev: 0.0001280626628846857",
            "extra": "mean: 101.36303888000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.70053783498543,
            "unit": "iter/sec",
            "range": "stddev: 0.000411382923928197",
            "extra": "mean: 17.035619040001393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.99480781649617,
            "unit": "iter/sec",
            "range": "stddev: 0.0009814778755036615",
            "extra": "mean: 26.319385660001444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.687830737158855,
            "unit": "iter/sec",
            "range": "stddev: 0.0005749590469233281",
            "extra": "mean: 40.50578646000076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.932455443414838,
            "unit": "iter/sec",
            "range": "stddev: 0.002869635232629332",
            "extra": "mean: 83.80504790000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 576.2934563730863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000202423354532194",
            "extra": "mean: 1.7352270600008524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 274.3335189236031,
            "unit": "iter/sec",
            "range": "stddev: 0.000029254415017525305",
            "extra": "mean: 3.64519802000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.4263722880917,
            "unit": "iter/sec",
            "range": "stddev: 0.000045579101674498185",
            "extra": "mean: 13.0844886400007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.52679731766663,
            "unit": "iter/sec",
            "range": "stddev: 0.000040057015419216345",
            "extra": "mean: 9.300007300000743 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 179.22964303440892,
            "unit": "iter/sec",
            "range": "stddev: 0.000028204728085793027",
            "extra": "mean: 5.579434200000151 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.62715927356578,
            "unit": "iter/sec",
            "range": "stddev: 0.000027349756719330967",
            "extra": "mean: 6.149034420000135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 125.97340659058663,
            "unit": "iter/sec",
            "range": "stddev: 0.00004868190277097331",
            "extra": "mean: 7.938183360000721 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.858045502771894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913930071695496",
            "extra": "mean: 53.027764719997776 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.122529147072662,
            "unit": "iter/sec",
            "range": "stddev: 0.009237338970938902",
            "extra": "mean: 890.845465000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.776663070593504,
            "unit": "iter/sec",
            "range": "stddev: 0.00013223656415085544",
            "extra": "mean: 59.60660923999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.719813190036074,
            "unit": "iter/sec",
            "range": "stddev: 0.00019915766289367806",
            "extra": "mean: 59.80928067999798 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.44577501479661,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319731361400181",
            "extra": "mean: 60.805890819999604 msec\nrounds: 5"
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
        "date": 1619633662376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.921302350799335,
            "unit": "iter/sec",
            "range": "stddev: 0.013637908501107722",
            "extra": "mean: 1.0854200025999998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 84.9969329706684,
            "unit": "iter/sec",
            "range": "stddev: 0.0001153279720951771",
            "extra": "mean: 11.765130400000317 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.316805260093925,
            "unit": "iter/sec",
            "range": "stddev: 0.0026981110143689327",
            "extra": "mean: 231.65279408000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.14593202975334,
            "unit": "iter/sec",
            "range": "stddev: 0.00006106063688614272",
            "extra": "mean: 8.393068759999949 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.42927755961696645,
            "unit": "iter/sec",
            "range": "stddev: 0.007372662645795681",
            "extra": "mean: 2.3294951659999996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 233.18012311073073,
            "unit": "iter/sec",
            "range": "stddev: 0.000041166688518810554",
            "extra": "mean: 4.288530199999627 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.115982001255233,
            "unit": "iter/sec",
            "range": "stddev: 0.013451191347614922",
            "extra": "mean: 242.95538700000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3484810522919324,
            "unit": "iter/sec",
            "range": "stddev: 0.03803196836634862",
            "extra": "mean: 2.869596477120001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4988.7115435185615,
            "unit": "iter/sec",
            "range": "stddev: 0.00007101506370261452",
            "extra": "mean: 200.45256000003064 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 43.73304414665579,
            "unit": "iter/sec",
            "range": "stddev: 0.00024447304649930564",
            "extra": "mean: 22.866004859999407 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6367.925219186307,
            "unit": "iter/sec",
            "range": "stddev: 0.000016191629188506093",
            "extra": "mean: 157.03701999939312 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.56767894947197,
            "unit": "iter/sec",
            "range": "stddev: 0.00027384336326888797",
            "extra": "mean: 22.437785040000335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6822.460741542574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052554210416223305",
            "extra": "mean: 146.57467999938945 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.292395815136295,
            "unit": "iter/sec",
            "range": "stddev: 0.00014776424621514318",
            "extra": "mean: 22.57723886000008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6868.46680022487,
            "unit": "iter/sec",
            "range": "stddev: 0.000003166988898303195",
            "extra": "mean: 145.5929000002243 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.02213261317521,
            "unit": "iter/sec",
            "range": "stddev: 0.00020581043018757066",
            "extra": "mean: 22.715846340000212 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3651.2639799655244,
            "unit": "iter/sec",
            "range": "stddev: 0.000007964705492813207",
            "extra": "mean: 273.8777599995501 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.153443999991442,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362945915145494",
            "extra": "mean: 45.13970830000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12183.054784052038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018132678521623736",
            "extra": "mean: 82.08121999984996 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 228.74915542379168,
            "unit": "iter/sec",
            "range": "stddev: 0.00004498105378765929",
            "extra": "mean: 4.371600840000269 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14937.242668662926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018047014522804463",
            "extra": "mean: 66.9467599999507 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 227.61390810567505,
            "unit": "iter/sec",
            "range": "stddev: 0.00013431282877016712",
            "extra": "mean: 4.3934046399999716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12441.787984465074,
            "unit": "iter/sec",
            "range": "stddev: 0.000001858725462237376",
            "extra": "mean: 80.37430000001677 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.60192043239489,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177100580037456",
            "extra": "mean: 20.160509739999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.56960589122615,
            "unit": "iter/sec",
            "range": "stddev: 0.00014860004675576618",
            "extra": "mean: 11.04123166000079 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12207.278614201288,
            "unit": "iter/sec",
            "range": "stddev: 0.000001493227956994431",
            "extra": "mean: 81.91834000058407 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 225.1537551352799,
            "unit": "iter/sec",
            "range": "stddev: 0.00002265886075163186",
            "extra": "mean: 4.4414093799997545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14147.985666361204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008213615254960788",
            "extra": "mean: 70.68144000015764 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 232.6146778847433,
            "unit": "iter/sec",
            "range": "stddev: 0.00002468556633916908",
            "extra": "mean: 4.298954860000208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12375.468751928694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018402047132883398",
            "extra": "mean: 80.80501999927492 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.391926512680314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530421770578404",
            "extra": "mean: 24.159300720000374 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 88.5517742521297,
            "unit": "iter/sec",
            "range": "stddev: 0.00043217876383931626",
            "extra": "mean: 11.292828499999814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12127.486074040718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017802611951399951",
            "extra": "mean: 82.45731999977579 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 219.8506434980429,
            "unit": "iter/sec",
            "range": "stddev: 0.00006853581127912905",
            "extra": "mean: 4.548542519999046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14723.19076263877,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016886176305716433",
            "extra": "mean: 67.92006000068795 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 230.89831038450214,
            "unit": "iter/sec",
            "range": "stddev: 0.00005600967081348944",
            "extra": "mean: 4.330910860000472 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12410.215195544086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013650880006389527",
            "extra": "mean: 80.57878000045093 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.28612137191699,
            "unit": "iter/sec",
            "range": "stddev: 0.000638617044223779",
            "extra": "mean: 28.339754020000214 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.83915153406005,
            "unit": "iter/sec",
            "range": "stddev: 0.00006284787222997126",
            "extra": "mean: 11.008469179999452 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6445.633850106306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032474739854579854",
            "extra": "mean: 155.1437799997757 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 110.93004640564772,
            "unit": "iter/sec",
            "range": "stddev: 0.000022548867511501218",
            "extra": "mean: 9.01469018000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7501.625602289412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029626826198096756",
            "extra": "mean: 133.30443999961972 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 113.9841047889333,
            "unit": "iter/sec",
            "range": "stddev: 0.000017320812226495517",
            "extra": "mean: 8.77315307999936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6636.577309988682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024315739287266984",
            "extra": "mean: 150.6800800007113 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.8548545917317,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902519256854187",
            "extra": "mean: 56.007176920000454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 44.78734339199563,
            "unit": "iter/sec",
            "range": "stddev: 0.00020290302161839047",
            "extra": "mean: 22.327736459999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3090.8081282494095,
            "unit": "iter/sec",
            "range": "stddev: 0.000013631660507802487",
            "extra": "mean: 323.5399800007599 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 53.56506770050849,
            "unit": "iter/sec",
            "range": "stddev: 0.0005001780260288811",
            "extra": "mean: 18.668883340000093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3946.328355832582,
            "unit": "iter/sec",
            "range": "stddev: 0.000005083443370144343",
            "extra": "mean: 253.4000999997943 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.035927529074954,
            "unit": "iter/sec",
            "range": "stddev: 0.00045707409695530546",
            "extra": "mean: 17.845693720000213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3213.9013316908386,
            "unit": "iter/sec",
            "range": "stddev: 0.000009841606108471058",
            "extra": "mean: 311.1483199995746 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.849566999775174,
            "unit": "iter/sec",
            "range": "stddev: 0.0011198697841574338",
            "extra": "mean: 112.9998789800004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.400743453794465,
            "unit": "iter/sec",
            "range": "stddev: 0.00010358945165377523",
            "extra": "mean: 44.641375499999754 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1251.7798745097157,
            "unit": "iter/sec",
            "range": "stddev: 0.000004334414851416726",
            "extra": "mean: 798.8624999995864 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 550.841296607401,
            "unit": "iter/sec",
            "range": "stddev: 0.000010019562040815784",
            "extra": "mean: 1.815404919999537 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1245.920668842345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035510702993544732",
            "extra": "mean: 802.6193199998488 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.377007266894694,
            "unit": "iter/sec",
            "range": "stddev: 0.00013199536436535805",
            "extra": "mean: 17.4285841599999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1129.525948349988,
            "unit": "iter/sec",
            "range": "stddev: 0.000010221735063883086",
            "extra": "mean: 885.3271600008839 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 533.7474416417217,
            "unit": "iter/sec",
            "range": "stddev: 0.000023676924414603277",
            "extra": "mean: 1.8735452800001438 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1154.9018051678636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032958652593373766",
            "extra": "mean: 865.8744799993201 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.752338956404635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000644732391163182",
            "extra": "mean: 21.389304199998946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 890.7240813637205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010713496531446676",
            "extra": "mean: 1.1226821199994674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 468.41758599618964,
            "unit": "iter/sec",
            "range": "stddev: 0.00001835955797140612",
            "extra": "mean: 2.1348472600004698 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 890.7721474865389,
            "unit": "iter/sec",
            "range": "stddev: 0.000013490299191262607",
            "extra": "mean: 1.1226215399994999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 38.475117218293164,
            "unit": "iter/sec",
            "range": "stddev: 0.0009464479212627971",
            "extra": "mean: 25.990823999999293 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 456.44612942457553,
            "unit": "iter/sec",
            "range": "stddev: 0.000006584437709766913",
            "extra": "mean: 2.190839039999446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 238.3714436273767,
            "unit": "iter/sec",
            "range": "stddev: 0.000060163724871378064",
            "extra": "mean: 4.195133380000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 457.4936015403408,
            "unit": "iter/sec",
            "range": "stddev: 0.000009061667309707917",
            "extra": "mean: 2.1858229199995094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.708143948827644,
            "unit": "iter/sec",
            "range": "stddev: 0.0001786048667285308",
            "extra": "mean: 50.74044529999924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 228.69764457975478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002025904467268367",
            "extra": "mean: 4.3725854800015895 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 116.96555283762385,
            "unit": "iter/sec",
            "range": "stddev: 0.00008347345574717271",
            "extra": "mean: 8.549525700000231 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 225.18687346630804,
            "unit": "iter/sec",
            "range": "stddev: 0.00007614771855242408",
            "extra": "mean: 4.440756179998289 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.872905920173956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004351324339828781",
            "extra": "mean: 101.2873016399999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 55.39472669145533,
            "unit": "iter/sec",
            "range": "stddev: 0.0009535733181232182",
            "extra": "mean: 18.05225984000117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.07364046370547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005812497239180246",
            "extra": "mean: 26.264890559999685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.995209580600022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009661784434974025",
            "extra": "mean: 40.00766614000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.97736119961376,
            "unit": "iter/sec",
            "range": "stddev: 0.0044561845438099235",
            "extra": "mean: 83.49084437999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 568.3383695693996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070620715482725975",
            "extra": "mean: 1.7595151999989866 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 262.6313741225591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000910239057622363",
            "extra": "mean: 3.8076181999997516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 75.02905455119387,
            "unit": "iter/sec",
            "range": "stddev: 0.0001154657923951593",
            "extra": "mean: 13.3281700800012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 104.33687227588045,
            "unit": "iter/sec",
            "range": "stddev: 0.00005115527354700273",
            "extra": "mean: 9.584339440000349 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 172.67276891313583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004764531618565242",
            "extra": "mean: 5.7913011199991615 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 157.79529424769052,
            "unit": "iter/sec",
            "range": "stddev: 0.00005706645127355196",
            "extra": "mean: 6.337324599999193 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 117.88461101561697,
            "unit": "iter/sec",
            "range": "stddev: 0.00008849195851026288",
            "extra": "mean: 8.482871440000963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.024214229748193,
            "unit": "iter/sec",
            "range": "stddev: 0.002334701755326618",
            "extra": "mean: 55.48092068000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1071142317910259,
            "unit": "iter/sec",
            "range": "stddev: 0.008299989386864399",
            "extra": "mean: 903.2491600999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.63732910483634,
            "unit": "iter/sec",
            "range": "stddev: 0.00030929749126922977",
            "extra": "mean: 60.10580146000166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.69219987351036,
            "unit": "iter/sec",
            "range": "stddev: 0.0003003446280243963",
            "extra": "mean: 59.908221060002234 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.341957398684457,
            "unit": "iter/sec",
            "range": "stddev: 0.0007755811291921956",
            "extra": "mean: 61.19218008000075 msec\nrounds: 5"
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
        "date": 1619725100998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9035501053163584,
            "unit": "iter/sec",
            "range": "stddev: 0.016168151234928284",
            "extra": "mean: 1.1067454855199998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 81.60363147911085,
            "unit": "iter/sec",
            "range": "stddev: 0.00027829058279168356",
            "extra": "mean: 12.25435659999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.2620894341117985,
            "unit": "iter/sec",
            "range": "stddev: 0.0008357273997295317",
            "extra": "mean: 234.6267049200003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.83904982858026,
            "unit": "iter/sec",
            "range": "stddev: 0.00009195464849244133",
            "extra": "mean: 8.34452543999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5500893008028798,
            "unit": "iter/sec",
            "range": "stddev: 0.03785907461519337",
            "extra": "mean: 1.81788665684 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 225.71262418561915,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474370429244805",
            "extra": "mean: 4.430412359999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 5.646691098250198,
            "unit": "iter/sec",
            "range": "stddev: 0.004471732850856159",
            "extra": "mean: 177.09486540000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3866049678462302,
            "unit": "iter/sec",
            "range": "stddev: 0.16164256944111055",
            "extra": "mean: 2.5866196328799993 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6695.642730154635,
            "unit": "iter/sec",
            "range": "stddev: 0.000013456051049872513",
            "extra": "mean: 149.35085999979947 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.46016057768667,
            "unit": "iter/sec",
            "range": "stddev: 0.00009259847914824229",
            "extra": "mean: 22.49204652000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6906.9168627880035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024087850552741204",
            "extra": "mean: 144.78240000073583 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.23913099142624,
            "unit": "iter/sec",
            "range": "stddev: 0.0003286483767771911",
            "extra": "mean: 22.604422320000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6905.53844898528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028763514413851294",
            "extra": "mean: 144.8113000003559 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.56577470666256,
            "unit": "iter/sec",
            "range": "stddev: 0.00009810108571782356",
            "extra": "mean: 22.438743779999868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6869.5671169692405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036229683906595216",
            "extra": "mean: 145.5695800001422 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.715093578048254,
            "unit": "iter/sec",
            "range": "stddev: 0.000048569335762167",
            "extra": "mean: 22.36381320000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3596.3468883790692,
            "unit": "iter/sec",
            "range": "stddev: 0.000007339356968792489",
            "extra": "mean: 278.05993999947987 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.31169433776957,
            "unit": "iter/sec",
            "range": "stddev: 0.00011350883330296512",
            "extra": "mean: 44.819545520000474 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12318.465848309132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013566802530228313",
            "extra": "mean: 81.17894000065462 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 224.94583945277714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001411704680896002",
            "extra": "mean: 4.445514540000772 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14697.547978603918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016626659459888663",
            "extra": "mean: 68.03856000033193 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 232.55857220199616,
            "unit": "iter/sec",
            "range": "stddev: 0.00006372699985187375",
            "extra": "mean: 4.299991999999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12375.891466395726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019316411951327757",
            "extra": "mean: 80.80226000004131 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 49.66589444875865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008535884595821147",
            "extra": "mean: 20.13454123999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.86284353899477,
            "unit": "iter/sec",
            "range": "stddev: 0.00006471164489634775",
            "extra": "mean: 11.00559877999899 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11552.229129711484,
            "unit": "iter/sec",
            "range": "stddev: 0.000003044292316801204",
            "extra": "mean: 86.56337999980224 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 223.00680575738397,
            "unit": "iter/sec",
            "range": "stddev: 0.000034168648746574",
            "extra": "mean: 4.484168079999905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13247.644039034656,
            "unit": "iter/sec",
            "range": "stddev: 0.000010719987199556895",
            "extra": "mean: 75.48511999971197 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 232.0078503660858,
            "unit": "iter/sec",
            "range": "stddev: 0.000036514539143843376",
            "extra": "mean: 4.31019898000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12252.733707424517,
            "unit": "iter/sec",
            "range": "stddev: 0.000004759377834609728",
            "extra": "mean: 81.61443999995298 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.61519356201333,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523527968419668",
            "extra": "mean: 24.029685180001366 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 91.20982329505397,
            "unit": "iter/sec",
            "range": "stddev: 0.000055898716140367364",
            "extra": "mean: 10.963731359999544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12335.992973419448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013358081117522325",
            "extra": "mean: 81.06359999999313 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 225.1456940300612,
            "unit": "iter/sec",
            "range": "stddev: 0.000010257044581925627",
            "extra": "mean: 4.441568400000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14521.24050893796,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010898369576523713",
            "extra": "mean: 68.86463999990156 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 234.36214377165882,
            "unit": "iter/sec",
            "range": "stddev: 0.000015083753948594447",
            "extra": "mean: 4.266900719999853 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11966.002194487068,
            "unit": "iter/sec",
            "range": "stddev: 0.000005457871014310958",
            "extra": "mean: 83.57010000054288 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.88957684206994,
            "unit": "iter/sec",
            "range": "stddev: 0.00003892452490968354",
            "extra": "mean: 27.863242980000678 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 91.10146606528407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009462210585378582",
            "extra": "mean: 10.976771759999906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6409.321306719547,
            "unit": "iter/sec",
            "range": "stddev: 0.000003632674866816859",
            "extra": "mean: 156.0227599998143 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 110.70717311052618,
            "unit": "iter/sec",
            "range": "stddev: 0.00011983461797930155",
            "extra": "mean: 9.03283836000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7615.679892893822,
            "unit": "iter/sec",
            "range": "stddev: 0.000004229318745206738",
            "extra": "mean: 131.30803999956697 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.01907991314974,
            "unit": "iter/sec",
            "range": "stddev: 0.000016493309790197732",
            "extra": "mean: 8.619271939999749 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6645.841258475729,
            "unit": "iter/sec",
            "range": "stddev: 0.000002416600322908291",
            "extra": "mean: 150.47004000052766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.911794216964683,
            "unit": "iter/sec",
            "range": "stddev: 0.00007951639243085062",
            "extra": "mean: 55.82913625999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.437036581644044,
            "unit": "iter/sec",
            "range": "stddev: 0.0001267179069905344",
            "extra": "mean: 22.008477559999733 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3219.1339139127285,
            "unit": "iter/sec",
            "range": "stddev: 0.00000980553066024366",
            "extra": "mean: 310.64255999979196 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 55.5957082586149,
            "unit": "iter/sec",
            "range": "stddev: 0.00008678752561771203",
            "extra": "mean: 17.986999919999107 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4045.337881590962,
            "unit": "iter/sec",
            "range": "stddev: 0.000005001288295291766",
            "extra": "mean: 247.19813999979579 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 57.67083861357919,
            "unit": "iter/sec",
            "range": "stddev: 0.00018600734340439384",
            "extra": "mean: 17.339786000000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3376.158098192884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000080634170147937",
            "extra": "mean: 296.1946599998555 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.992924589777397,
            "unit": "iter/sec",
            "range": "stddev: 0.00006370974305185659",
            "extra": "mean: 111.19853058000047 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.717489760418072,
            "unit": "iter/sec",
            "range": "stddev: 0.00015653479723222013",
            "extra": "mean: 44.01894797999887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1237.3331422227254,
            "unit": "iter/sec",
            "range": "stddev: 0.000003973467208762697",
            "extra": "mean: 808.189780000248 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 548.7168908480844,
            "unit": "iter/sec",
            "range": "stddev: 0.000014372586664440515",
            "extra": "mean: 1.8224334199999248 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1230.6165585866872,
            "unit": "iter/sec",
            "range": "stddev: 0.000010228701370050097",
            "extra": "mean: 812.600799999359 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.49331107008242,
            "unit": "iter/sec",
            "range": "stddev: 0.000014375703046817644",
            "extra": "mean: 17.393327700000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1154.8346923430809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025662165543309",
            "extra": "mean: 865.9247999997888 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 530.5593089386205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001418993508632632",
            "extra": "mean: 1.8848034199993435 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1154.648492436523,
            "unit": "iter/sec",
            "range": "stddev: 0.000003175511775282088",
            "extra": "mean: 866.0644400009687 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 46.75987180362274,
            "unit": "iter/sec",
            "range": "stddev: 0.00009230838279051234",
            "extra": "mean: 21.385858459999554 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 895.4511689524511,
            "unit": "iter/sec",
            "range": "stddev: 0.000005110787482920347",
            "extra": "mean: 1.116755479999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 470.79206942856916,
            "unit": "iter/sec",
            "range": "stddev: 0.000004243377385413494",
            "extra": "mean: 2.1240799599996762 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 895.1730674792243,
            "unit": "iter/sec",
            "range": "stddev: 0.000008660434066540209",
            "extra": "mean: 1.1171024200001511 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.30991791320293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001239701411001763",
            "extra": "mean: 25.43887275999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 454.7413943442081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000146019700748368",
            "extra": "mean: 2.199052060000213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 237.74111251925498,
            "unit": "iter/sec",
            "range": "stddev: 0.000025351147272856103",
            "extra": "mean: 4.206256079999662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 458.07355371324763,
            "unit": "iter/sec",
            "range": "stddev: 0.000014819448747154814",
            "extra": "mean: 2.1830555200006074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.674002587690985,
            "unit": "iter/sec",
            "range": "stddev: 0.00021518683305425142",
            "extra": "mean: 50.82849793999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 229.54591946985735,
            "unit": "iter/sec",
            "range": "stddev: 0.000028019075409758364",
            "extra": "mean: 4.356426819999796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 118.634989605908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000874889715483929",
            "extra": "mean: 8.429216400000428 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 227.93190426779051,
            "unit": "iter/sec",
            "range": "stddev: 0.00008297792636845815",
            "extra": "mean: 4.38727523999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.874215161535604,
            "unit": "iter/sec",
            "range": "stddev: 0.00040638052831254467",
            "extra": "mean: 101.27387175999957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 53.77498872101902,
            "unit": "iter/sec",
            "range": "stddev: 0.0011473796007737621",
            "extra": "mean: 18.596005759999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.57749548124803,
            "unit": "iter/sec",
            "range": "stddev: 0.0018432766735997058",
            "extra": "mean: 25.266884319999576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.776163369359534,
            "unit": "iter/sec",
            "range": "stddev: 0.0008121776911387932",
            "extra": "mean: 40.36137415999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.126381349174263,
            "unit": "iter/sec",
            "range": "stddev: 0.004567413494931888",
            "extra": "mean: 82.4648319399995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 566.3307083410047,
            "unit": "iter/sec",
            "range": "stddev: 0.000012306167556073744",
            "extra": "mean: 1.7657527400012896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 271.8702546405747,
            "unit": "iter/sec",
            "range": "stddev: 0.000016076949198327753",
            "extra": "mean: 3.6782251200008886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.72891369162058,
            "unit": "iter/sec",
            "range": "stddev: 0.00008770002616335912",
            "extra": "mean: 13.381701279997742 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 104.58729191525538,
            "unit": "iter/sec",
            "range": "stddev: 0.00006776400226577941",
            "extra": "mean: 9.56139108000116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 174.0184429687682,
            "unit": "iter/sec",
            "range": "stddev: 0.00002952467004484567",
            "extra": "mean: 5.746517340000992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.96766601168147,
            "unit": "iter/sec",
            "range": "stddev: 0.00005327133516451111",
            "extra": "mean: 6.290587420000974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 122.41038204949764,
            "unit": "iter/sec",
            "range": "stddev: 0.00008334307094584331",
            "extra": "mean: 8.169241720000855 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.516840385281082,
            "unit": "iter/sec",
            "range": "stddev: 0.0003059633325899602",
            "extra": "mean: 54.00489387999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1047639192637713,
            "unit": "iter/sec",
            "range": "stddev: 0.005068407273542369",
            "extra": "mean: 905.1707632399985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.450171806301753,
            "unit": "iter/sec",
            "range": "stddev: 0.0002876131523064459",
            "extra": "mean: 60.78963865999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.500961797170557,
            "unit": "iter/sec",
            "range": "stddev: 0.00018638347258473947",
            "extra": "mean: 60.60252804000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.313301039137674,
            "unit": "iter/sec",
            "range": "stddev: 0.00021923466081888988",
            "extra": "mean: 61.29967181999973 msec\nrounds: 5"
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
        "date": 1619768828670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9342382026195285,
            "unit": "iter/sec",
            "range": "stddev: 0.01529572050762856",
            "extra": "mean: 1.07039082452 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 82.93713930140355,
            "unit": "iter/sec",
            "range": "stddev: 0.00026419722056096633",
            "extra": "mean: 12.057324480000204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.35157845154169,
            "unit": "iter/sec",
            "range": "stddev: 0.00287112664667687",
            "extra": "mean: 229.80167108000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 119.32270105700663,
            "unit": "iter/sec",
            "range": "stddev: 0.00016266679249320927",
            "extra": "mean: 8.38063496000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5923801412804324,
            "unit": "iter/sec",
            "range": "stddev: 0.011029598011778266",
            "extra": "mean: 1.6881052052800005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 239.37039611139863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000940970865043846",
            "extra": "mean: 4.177626039999609 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 6.14395337110193,
            "unit": "iter/sec",
            "range": "stddev: 0.0008681708679430896",
            "extra": "mean: 162.7616519199995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4761992397893964,
            "unit": "iter/sec",
            "range": "stddev: 0.0181418139577177",
            "extra": "mean: 2.0999613532399994 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6320.291117623525,
            "unit": "iter/sec",
            "range": "stddev: 0.000015889850252609926",
            "extra": "mean: 158.2205600010411 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 45.277709244935885,
            "unit": "iter/sec",
            "range": "stddev: 0.00027067085362096085",
            "extra": "mean: 22.08592299999907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6808.952901516197,
            "unit": "iter/sec",
            "range": "stddev: 0.000007822929565062044",
            "extra": "mean: 146.86546000007183 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 45.14216418174561,
            "unit": "iter/sec",
            "range": "stddev: 0.00032795399873062334",
            "extra": "mean: 22.152238780000175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7071.595663130965,
            "unit": "iter/sec",
            "range": "stddev: 0.000004619269045629637",
            "extra": "mean: 141.41080000001693 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 44.75087024063694,
            "unit": "iter/sec",
            "range": "stddev: 0.00016727350503166938",
            "extra": "mean: 22.345934160000525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6949.374639673844,
            "unit": "iter/sec",
            "range": "stddev: 0.000004216751131931372",
            "extra": "mean: 143.89784000002237 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.835403785203866,
            "unit": "iter/sec",
            "range": "stddev: 0.0001989099767518728",
            "extra": "mean: 22.30380269999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3802.8094243246405,
            "unit": "iter/sec",
            "range": "stddev: 0.000007514740802495593",
            "extra": "mean: 262.96348000073516 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.644884389932812,
            "unit": "iter/sec",
            "range": "stddev: 0.0004889171426225006",
            "extra": "mean: 44.16008413999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12765.88791363418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034183678760871645",
            "extra": "mean: 78.33375999894088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 231.7244316745123,
            "unit": "iter/sec",
            "range": "stddev: 0.00007455646071074628",
            "extra": "mean: 4.3154707200000075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 15371.292021906109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018506901515062245",
            "extra": "mean: 65.05633999893234 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 236.07811473539326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001506747371375534",
            "extra": "mean: 4.23588607999875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12541.20098049521,
            "unit": "iter/sec",
            "range": "stddev: 0.000002719708429921066",
            "extra": "mean: 79.73718000016561 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 51.01798808855839,
            "unit": "iter/sec",
            "range": "stddev: 0.00031007558568084734",
            "extra": "mean: 19.600929740000197 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 92.41997313398934,
            "unit": "iter/sec",
            "range": "stddev: 0.00032573800572667863",
            "extra": "mean: 10.820171940000591 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11878.583768654738,
            "unit": "iter/sec",
            "range": "stddev: 0.000006397867832361788",
            "extra": "mean: 84.18512000048395 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 227.33364959080737,
            "unit": "iter/sec",
            "range": "stddev: 0.000059837074542862",
            "extra": "mean: 4.398820860000114 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14748.274968093125,
            "unit": "iter/sec",
            "range": "stddev: 0.000007557532535740305",
            "extra": "mean: 67.8045399996563 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 228.8953120372633,
            "unit": "iter/sec",
            "range": "stddev: 0.00011164903818524143",
            "extra": "mean: 4.3688094399993815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12440.890220329718,
            "unit": "iter/sec",
            "range": "stddev: 0.000003722218454975976",
            "extra": "mean: 80.38010000007034 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 42.04755730270256,
            "unit": "iter/sec",
            "range": "stddev: 0.0005467878168748577",
            "extra": "mean: 23.782594380000432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 94.7948203935718,
            "unit": "iter/sec",
            "range": "stddev: 0.00018324081771800958",
            "extra": "mean: 10.549099579999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11034.173497425425,
            "unit": "iter/sec",
            "range": "stddev: 0.000012363414627758404",
            "extra": "mean: 90.6275399995593 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 228.2782358319851,
            "unit": "iter/sec",
            "range": "stddev: 0.00014219004992122597",
            "extra": "mean: 4.380619100000445 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14649.756550084325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034511466677190813",
            "extra": "mean: 68.26052000121763 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 241.63770320640117,
            "unit": "iter/sec",
            "range": "stddev: 0.00004478781469442693",
            "extra": "mean: 4.13842701999954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12858.031898212479,
            "unit": "iter/sec",
            "range": "stddev: 0.000001055575231361746",
            "extra": "mean: 77.772399999958 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.3515837647106,
            "unit": "iter/sec",
            "range": "stddev: 0.0001955297216177144",
            "extra": "mean: 27.50911780000024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 93.67518087191976,
            "unit": "iter/sec",
            "range": "stddev: 0.00016744876406312971",
            "extra": "mean: 10.675186220000796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6397.9870397394425,
            "unit": "iter/sec",
            "range": "stddev: 0.000008100648066427405",
            "extra": "mean: 156.29915999966215 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 114.98200060265037,
            "unit": "iter/sec",
            "range": "stddev: 0.00008109352782878444",
            "extra": "mean: 8.697013399999491 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 8275.042554419044,
            "unit": "iter/sec",
            "range": "stddev: 0.000004160712803111184",
            "extra": "mean: 120.84529999981442 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.97945295682094,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733900993810705",
            "extra": "mean: 8.548509799999808 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6794.083820480675,
            "unit": "iter/sec",
            "range": "stddev: 0.000003471623781002249",
            "extra": "mean: 147.18688000073143 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 18.192442369698796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006509854405857701",
            "extra": "mean: 54.96788060000085 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 46.77467037842888,
            "unit": "iter/sec",
            "range": "stddev: 0.00023428942920003496",
            "extra": "mean: 21.37909240000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3396.9842117714825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064211276358169995",
            "extra": "mean: 294.37875999974494 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 56.52735691747222,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676568830024701",
            "extra": "mean: 17.690549400000464 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4135.145144416135,
            "unit": "iter/sec",
            "range": "stddev: 0.000003639211327259195",
            "extra": "mean: 241.82948000031956 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 59.35528918798425,
            "unit": "iter/sec",
            "range": "stddev: 0.00029282260767562606",
            "extra": "mean: 16.84769822000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3409.4358045227827,
            "unit": "iter/sec",
            "range": "stddev: 0.000008931859580553325",
            "extra": "mean: 293.30365999953756 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.052879999503922,
            "unit": "iter/sec",
            "range": "stddev: 0.0004743527845944208",
            "extra": "mean: 110.46208499999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 23.029961891524938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277856050064892",
            "extra": "mean: 43.42169582000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1307.2675684139704,
            "unit": "iter/sec",
            "range": "stddev: 0.000011418761773587535",
            "extra": "mean: 764.9543400003722 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 539.5621422998372,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519895252745397",
            "extra": "mean: 1.8533546400004752 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1263.8653613328318,
            "unit": "iter/sec",
            "range": "stddev: 0.000011071066830366339",
            "extra": "mean: 791.2235200001305 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.23469285669335,
            "unit": "iter/sec",
            "range": "stddev: 0.00005515213897271443",
            "extra": "mean: 17.471920440000304 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1148.0048754387635,
            "unit": "iter/sec",
            "range": "stddev: 0.000014731727534035885",
            "extra": "mean: 871.0764400001381 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 530.8875978763172,
            "unit": "iter/sec",
            "range": "stddev: 0.00007096707642934804",
            "extra": "mean: 1.8836379000003944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1189.798571860422,
            "unit": "iter/sec",
            "range": "stddev: 0.000021063339098230454",
            "extra": "mean: 840.4784000003928 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 47.840697168472424,
            "unit": "iter/sec",
            "range": "stddev: 0.00024979596309719453",
            "extra": "mean: 20.902705419999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 900.5321370470647,
            "unit": "iter/sec",
            "range": "stddev: 0.00003734521838907838",
            "extra": "mean: 1.1104545400002053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 477.55469531849377,
            "unit": "iter/sec",
            "range": "stddev: 0.00003332519732824243",
            "extra": "mean: 2.0940009799988957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 903.5641195119053,
            "unit": "iter/sec",
            "range": "stddev: 0.000014993340668017784",
            "extra": "mean: 1.106728320000343 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 39.82730913805804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337218227702683",
            "extra": "mean: 25.108399779999786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 466.291154938915,
            "unit": "iter/sec",
            "range": "stddev: 0.000009993329145507281",
            "extra": "mean: 2.144582820000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 241.83891486189043,
            "unit": "iter/sec",
            "range": "stddev: 0.00006242724733952933",
            "extra": "mean: 4.134983819998865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 465.98257318366467,
            "unit": "iter/sec",
            "range": "stddev: 0.000033853434101391975",
            "extra": "mean: 2.1460030000002916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 20.02346735155785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437243581844824",
            "extra": "mean: 49.94140037999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 231.90371480208816,
            "unit": "iter/sec",
            "range": "stddev: 0.00025140871428069444",
            "extra": "mean: 4.312134459999584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 121.19702461692286,
            "unit": "iter/sec",
            "range": "stddev: 0.00042070286470887553",
            "extra": "mean: 8.251027640000075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 235.67489730134224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946859685203054",
            "extra": "mean: 4.243133280000393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.936116975930684,
            "unit": "iter/sec",
            "range": "stddev: 0.0005710238345596609",
            "extra": "mean: 100.64293751999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 65.88571841467606,
            "unit": "iter/sec",
            "range": "stddev: 0.00015937479088225413",
            "extra": "mean: 15.177796100000478 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 45.167959228972514,
            "unit": "iter/sec",
            "range": "stddev: 0.00033418662555462366",
            "extra": "mean: 22.139587819999633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 33.5080820019434,
            "unit": "iter/sec",
            "range": "stddev: 0.00026491128702647225",
            "extra": "mean: 29.843546399999923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 18.2824281322953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005314487106510751",
            "extra": "mean: 54.69732973999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 571.0834086163514,
            "unit": "iter/sec",
            "range": "stddev: 0.00005211450141400577",
            "extra": "mean: 1.7510577000001604 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 280.4090883704408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000542943061553762",
            "extra": "mean: 3.5662182199990866 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 74.87712928897078,
            "unit": "iter/sec",
            "range": "stddev: 0.00041517759681260506",
            "extra": "mean: 13.355212860000734 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 108.09250632789302,
            "unit": "iter/sec",
            "range": "stddev: 0.00011030093921251525",
            "extra": "mean: 9.251335119999455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 178.31711970063296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001400161850750471",
            "extra": "mean: 5.60798649999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.75038453710258,
            "unit": "iter/sec",
            "range": "stddev: 0.00019081665249292838",
            "extra": "mean: 6.2991973399994095 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 122.78042851581931,
            "unit": "iter/sec",
            "range": "stddev: 0.00032356750655503417",
            "extra": "mean: 8.14462054000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.81621308724907,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140773682268042",
            "extra": "mean: 53.14565663999929 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.141845648637398,
            "unit": "iter/sec",
            "range": "stddev: 0.005174869009050464",
            "extra": "mean: 875.7751112799992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.926177958245574,
            "unit": "iter/sec",
            "range": "stddev: 0.0010668551961405801",
            "extra": "mean: 59.08008307999921 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 17.004647723239113,
            "unit": "iter/sec",
            "range": "stddev: 0.00027983367607317217",
            "extra": "mean: 58.80745172000047 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.033955831640473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006731275211095833",
            "extra": "mean: 58.70626940000079 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}