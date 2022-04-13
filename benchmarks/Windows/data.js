window.BENCHMARK_DATA = {
  "lastUpdate": 1649829170806,
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
          "id": "a6b475f94ba1e86adf1dfb3cc59b4fad7c33d490",
          "message": "Windows benchmarks",
          "timestamp": "2021-04-30T07:28:02Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/293/commits/a6b475f94ba1e86adf1dfb3cc59b4fad7c33d490"
        },
        "date": 1619771570816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.4645958694617329,
            "unit": "iter/sec",
            "range": "stddev: 0.04114510573828331",
            "extra": "mean: 2.152408288 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 60.03444536337086,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524451142280738",
            "extra": "mean: 16.65710400000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.0204742241187024,
            "unit": "iter/sec",
            "range": "stddev: 0.005971875752374968",
            "extra": "mean: 331.07384000000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 87.2331494342216,
            "unit": "iter/sec",
            "range": "stddev: 0.00038687093263726965",
            "extra": "mean: 11.463532000000214 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.30014233638012483,
            "unit": "iter/sec",
            "range": "stddev: 0.050805995675000694",
            "extra": "mean: 3.3317525679999975 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 164.95356886939695,
            "unit": "iter/sec",
            "range": "stddev: 0.00015271552809064954",
            "extra": "mean: 6.062312000001384 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.9204999152879734,
            "unit": "iter/sec",
            "range": "stddev: 0.004833678461330867",
            "extra": "mean: 342.40713200000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.252417686640346,
            "unit": "iter/sec",
            "range": "stddev: 0.06234768079956103",
            "extra": "mean: 3.9616875240000002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3371.2486430665685,
            "unit": "iter/sec",
            "range": "stddev: 0.00002766356141185503",
            "extra": "mean: 296.626000000515 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 33.66886376204116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079208325507281",
            "extra": "mean: 29.70103199999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 2457.473422420078,
            "unit": "iter/sec",
            "range": "stddev: 0.0003222226714095044",
            "extra": "mean: 406.9220000008045 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 33.691101385014115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006127391588348394",
            "extra": "mean: 29.681428000000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3512.716032024991,
            "unit": "iter/sec",
            "range": "stddev: 0.000017300137282441837",
            "extra": "mean: 284.6800000008898 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 33.547469064869965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005331917964219008",
            "extra": "mean: 29.80850800000212 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3872.786702400213,
            "unit": "iter/sec",
            "range": "stddev: 0.000009298941876644762",
            "extra": "mean: 258.2119999999577 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 34.49223803921082,
            "unit": "iter/sec",
            "range": "stddev: 0.0004105782343249823",
            "extra": "mean: 28.992030000001705 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1770.3125663869623,
            "unit": "iter/sec",
            "range": "stddev: 0.000046363662172695816",
            "extra": "mean: 564.871999999923 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.810084140858887,
            "unit": "iter/sec",
            "range": "stddev: 0.0017801244584766305",
            "extra": "mean: 59.48810200000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6666.222251857062,
            "unit": "iter/sec",
            "range": "stddev: 0.00001129589305623221",
            "extra": "mean: 150.00999999983833 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 164.51210644595366,
            "unit": "iter/sec",
            "range": "stddev: 0.0001578701594658676",
            "extra": "mean: 6.07857999999851 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14738.393515275096,
            "unit": "iter/sec",
            "range": "stddev: 0.000004070171986613455",
            "extra": "mean: 67.84999999922547 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 177.31961541501383,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903933739132867",
            "extra": "mean: 5.6395340000005945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 6445.707803180449,
            "unit": "iter/sec",
            "range": "stddev: 0.000005074354145345954",
            "extra": "mean: 155.14199999984157 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 35.530395613900616,
            "unit": "iter/sec",
            "range": "stddev: 0.0004954756885884266",
            "extra": "mean: 28.144915999999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 62.182875109796825,
            "unit": "iter/sec",
            "range": "stddev: 0.0010495825990713397",
            "extra": "mean: 16.081598000000668 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6552.650547142234,
            "unit": "iter/sec",
            "range": "stddev: 0.000006413879480554053",
            "extra": "mean: 152.61000000009517 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 157.31413178017104,
            "unit": "iter/sec",
            "range": "stddev: 0.0004918376731910005",
            "extra": "mean: 6.356707999999571 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 13924.085883738238,
            "unit": "iter/sec",
            "range": "stddev: 0.00000409119420096815",
            "extra": "mean: 71.81800000012117 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 177.79731177580902,
            "unit": "iter/sec",
            "range": "stddev: 0.00011376368915486848",
            "extra": "mean: 5.624381999998604 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6424.423086829367,
            "unit": "iter/sec",
            "range": "stddev: 0.000004931321324882285",
            "extra": "mean: 155.65599999945334 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 29.357605105216773,
            "unit": "iter/sec",
            "range": "stddev: 0.00107035144379211",
            "extra": "mean: 34.062724000000344 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 64.62882502469455,
            "unit": "iter/sec",
            "range": "stddev: 0.0008863284888633983",
            "extra": "mean: 15.472972000000027 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6845.84525649257,
            "unit": "iter/sec",
            "range": "stddev: 0.000004423644424346188",
            "extra": "mean: 146.07400000045345 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 151.45631303230957,
            "unit": "iter/sec",
            "range": "stddev: 0.0006279925713151608",
            "extra": "mean: 6.602564000000939 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14699.829481849427,
            "unit": "iter/sec",
            "range": "stddev: 0.000004132277824075621",
            "extra": "mean: 68.02800000059506 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 165.6260931322245,
            "unit": "iter/sec",
            "range": "stddev: 0.00048255148868085133",
            "extra": "mean: 6.037695999999642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 4574.565416320351,
            "unit": "iter/sec",
            "range": "stddev: 0.00009610414403215694",
            "extra": "mean: 218.59999999833235 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 25.868671274843102,
            "unit": "iter/sec",
            "range": "stddev: 0.0008090154354029163",
            "extra": "mean: 38.656797999999526 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 63.30598810075148,
            "unit": "iter/sec",
            "range": "stddev: 0.0007619333973389249",
            "extra": "mean: 15.796294000000444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3167.6243450856045,
            "unit": "iter/sec",
            "range": "stddev: 0.000011071198220518144",
            "extra": "mean: 315.6940000008035 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 81.103000811026,
            "unit": "iter/sec",
            "range": "stddev: 0.00023642442365488556",
            "extra": "mean: 12.33000000000061 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6150.061500662396,
            "unit": "iter/sec",
            "range": "stddev: 0.000006467484055191435",
            "extra": "mean: 162.59999999874708 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 87.92802704103742,
            "unit": "iter/sec",
            "range": "stddev: 0.000026192538440511977",
            "extra": "mean: 11.372937999999522 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 2747.705665762542,
            "unit": "iter/sec",
            "range": "stddev: 0.00004303688359750527",
            "extra": "mean: 363.94000000086635 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 12.523297716907665,
            "unit": "iter/sec",
            "range": "stddev: 0.0028204056587885352",
            "extra": "mean: 79.8511719999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 30.009070541661604,
            "unit": "iter/sec",
            "range": "stddev: 0.0008523221663012435",
            "extra": "mean: 33.32325800000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1393.6660664591493,
            "unit": "iter/sec",
            "range": "stddev: 0.00013177466228358464",
            "extra": "mean: 717.5320000010288 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 39.46266062782899,
            "unit": "iter/sec",
            "range": "stddev: 0.000999003761279636",
            "extra": "mean: 25.340409999998883 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2888.3869514237917,
            "unit": "iter/sec",
            "range": "stddev: 0.00003089586833186239",
            "extra": "mean: 346.2139999999181 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 40.12957679829961,
            "unit": "iter/sec",
            "range": "stddev: 0.0007165452667710764",
            "extra": "mean: 24.9192759999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1382.7777793155942,
            "unit": "iter/sec",
            "range": "stddev: 0.00009039238668128238",
            "extra": "mean: 723.1819999992695 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.139437178147678,
            "unit": "iter/sec",
            "range": "stddev: 0.0022822390409084365",
            "extra": "mean: 162.88138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 15.314863016360702,
            "unit": "iter/sec",
            "range": "stddev: 0.0015201324732495311",
            "extra": "mean: 65.29604600000084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 770.6214445446553,
            "unit": "iter/sec",
            "range": "stddev: 0.000028837992820523644",
            "extra": "mean: 1.2976540000011028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 355.547212047351,
            "unit": "iter/sec",
            "range": "stddev: 0.00032192672641682924",
            "extra": "mean: 2.8125660000023345 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 747.5696510650841,
            "unit": "iter/sec",
            "range": "stddev: 0.00006823261807807787",
            "extra": "mean: 1.3376679999987573 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 40.39301759834912,
            "unit": "iter/sec",
            "range": "stddev: 0.0012520085231450962",
            "extra": "mean: 24.756754 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 735.1978932169684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000317513648513939",
            "extra": "mean: 1.3601779999999053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 370.7339642729342,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231898206833391",
            "extra": "mean: 2.6973520000012736 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 719.1874907406547,
            "unit": "iter/sec",
            "range": "stddev: 0.00007801659067121754",
            "extra": "mean: 1.3904579999996258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 32.55941132063192,
            "unit": "iter/sec",
            "range": "stddev: 0.00041676316983279784",
            "extra": "mean: 30.713086000001795 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 589.4342727737879,
            "unit": "iter/sec",
            "range": "stddev: 0.00008159055686811753",
            "extra": "mean: 1.6965419999996811 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 345.41001896320813,
            "unit": "iter/sec",
            "range": "stddev: 0.00009691484458237259",
            "extra": "mean: 2.8951099999983403 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 568.8320966925537,
            "unit": "iter/sec",
            "range": "stddev: 0.00010614338236451499",
            "extra": "mean: 1.7579879999993864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 27.73245831880798,
            "unit": "iter/sec",
            "range": "stddev: 0.0012294096427142285",
            "extra": "mean: 36.058830000000626 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 276.64736590206627,
            "unit": "iter/sec",
            "range": "stddev: 0.00042387343317242",
            "extra": "mean: 3.614710000000514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 163.43009702520686,
            "unit": "iter/sec",
            "range": "stddev: 0.00038475207774619087",
            "extra": "mean: 6.118823999998995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 292.9225231643255,
            "unit": "iter/sec",
            "range": "stddev: 0.0003167871373169252",
            "extra": "mean: 3.4138719999998557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.649632071437749,
            "unit": "iter/sec",
            "range": "stddev: 0.0010910726762092808",
            "extra": "mean: 73.26204799999914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 147.31654081906186,
            "unit": "iter/sec",
            "range": "stddev: 0.00026936181249292523",
            "extra": "mean: 6.788103999999748 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 83.48278142587696,
            "unit": "iter/sec",
            "range": "stddev: 0.00027620784197854124",
            "extra": "mean: 11.978518000000804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 141.08184948145455,
            "unit": "iter/sec",
            "range": "stddev: 0.0003393012926307707",
            "extra": "mean: 7.088084000000663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.840044372188587,
            "unit": "iter/sec",
            "range": "stddev: 0.002555938313198232",
            "extra": "mean: 146.1978820000013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 46.11971330879224,
            "unit": "iter/sec",
            "range": "stddev: 0.00034610921451364425",
            "extra": "mean: 21.682702000000518 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 30.690483709642763,
            "unit": "iter/sec",
            "range": "stddev: 0.0007007185170593679",
            "extra": "mean: 32.583390000002055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 18.2854280717448,
            "unit": "iter/sec",
            "range": "stddev: 0.0016282658104810831",
            "extra": "mean: 54.68835600000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.790207216001363,
            "unit": "iter/sec",
            "range": "stddev: 0.0019086458054152983",
            "extra": "mean: 102.142884000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 460.24835000947763,
            "unit": "iter/sec",
            "range": "stddev: 0.00002864576059593557",
            "extra": "mean: 2.172740000000885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 200.1966732117401,
            "unit": "iter/sec",
            "range": "stddev: 0.00021899976682589545",
            "extra": "mean: 4.995088000000578 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 52.88015463848952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007807979195547219",
            "extra": "mean: 18.910686000001533 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 74.2177266071215,
            "unit": "iter/sec",
            "range": "stddev: 0.0009319453639307711",
            "extra": "mean: 13.473870000001398 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 120.6752698479667,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632718561492987",
            "extra": "mean: 8.286702000002606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 115.22417901043991,
            "unit": "iter/sec",
            "range": "stddev: 0.0002825320751349221",
            "extra": "mean: 8.678734000000077 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 95.73364907568387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006176595691565188",
            "extra": "mean: 10.445647999998755 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 14.350548423428675,
            "unit": "iter/sec",
            "range": "stddev: 0.0010938863023747002",
            "extra": "mean: 69.68374799999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8528289418240221,
            "unit": "iter/sec",
            "range": "stddev: 0.021270038967397223",
            "extra": "mean: 1.1725680860000012 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 11.490740933317145,
            "unit": "iter/sec",
            "range": "stddev: 0.0009217100443472523",
            "extra": "mean: 87.02658999999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 11.465235548448941,
            "unit": "iter/sec",
            "range": "stddev: 0.0020894184379675815",
            "extra": "mean: 87.22018800000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 11.160467410196306,
            "unit": "iter/sec",
            "range": "stddev: 0.0014558362294825656",
            "extra": "mean: 89.60198200000036 msec\nrounds: 5"
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
        "date": 1619781822480,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.48924272949638176,
            "unit": "iter/sec",
            "range": "stddev: 0.015285927324598991",
            "extra": "mean: 2.0439751879999997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 60.815516616865175,
            "unit": "iter/sec",
            "range": "stddev: 0.000992567009385793",
            "extra": "mean: 16.443172000000455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.155752372958529,
            "unit": "iter/sec",
            "range": "stddev: 0.0012875968380967997",
            "extra": "mean: 316.88164400000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 90.13848877415394,
            "unit": "iter/sec",
            "range": "stddev: 0.00011028377305887961",
            "extra": "mean: 11.094039999999836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.31055189167952,
            "unit": "iter/sec",
            "range": "stddev: 0.003997677598771405",
            "extra": "mean: 3.2200737680000002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 172.92912188663846,
            "unit": "iter/sec",
            "range": "stddev: 0.00020021352022269977",
            "extra": "mean: 5.7827160000010736 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.0023323919419997,
            "unit": "iter/sec",
            "range": "stddev: 0.0016598655612433534",
            "extra": "mean: 333.0743800000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2570604670010512,
            "unit": "iter/sec",
            "range": "stddev: 0.0034853453769915104",
            "extra": "mean: 3.890135312 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3762.963408953038,
            "unit": "iter/sec",
            "range": "stddev: 0.000016037943134103658",
            "extra": "mean: 265.7479999993484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 34.71152914282842,
            "unit": "iter/sec",
            "range": "stddev: 0.00023751811756145697",
            "extra": "mean: 28.80887199999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3154.693553083721,
            "unit": "iter/sec",
            "range": "stddev: 0.00007289726380243295",
            "extra": "mean: 316.987999998446 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 34.81517390109689,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241797553749772",
            "extra": "mean: 28.723108000000366 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3836.9157336331964,
            "unit": "iter/sec",
            "range": "stddev: 0.000007845771472517547",
            "extra": "mean: 260.62600000159364 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 34.62165353155785,
            "unit": "iter/sec",
            "range": "stddev: 0.0003561247582934248",
            "extra": "mean: 28.88365799999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3814.086183125506,
            "unit": "iter/sec",
            "range": "stddev: 0.000008005765424270445",
            "extra": "mean: 262.185999997655 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 34.66473172756171,
            "unit": "iter/sec",
            "range": "stddev: 0.00018960132417573892",
            "extra": "mean: 28.847763999999643 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1873.9224945620624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003343583407271954",
            "extra": "mean: 533.6400000010144 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 17.234197998323552,
            "unit": "iter/sec",
            "range": "stddev: 0.0006361023015763168",
            "extra": "mean: 58.02416800000061 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6535.435129387884,
            "unit": "iter/sec",
            "range": "stddev: 0.000010640003288407949",
            "extra": "mean: 153.01199999726123 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 169.49876503198362,
            "unit": "iter/sec",
            "range": "stddev: 0.000018790214740164654",
            "extra": "mean: 5.8997480000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 14780.218156182627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045185418010248515",
            "extra": "mean: 67.65799999925548 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 174.7741481071324,
            "unit": "iter/sec",
            "range": "stddev: 0.000060147817498205434",
            "extra": "mean: 5.721669999999221 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 6390.511368725075,
            "unit": "iter/sec",
            "range": "stddev: 0.000004860963896345227",
            "extra": "mean: 156.481999999869 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 37.09670227381169,
            "unit": "iter/sec",
            "range": "stddev: 0.00012694735495352813",
            "extra": "mean: 26.956574000000728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 67.40214085375715,
            "unit": "iter/sec",
            "range": "stddev: 0.00023526782276894675",
            "extra": "mean: 14.836324000000332 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6771.214214194209,
            "unit": "iter/sec",
            "range": "stddev: 0.000005371864666333975",
            "extra": "mean: 147.68399999866233 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 166.79710200042405,
            "unit": "iter/sec",
            "range": "stddev: 0.00007919761467536004",
            "extra": "mean: 5.99530800000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14838.556505038974,
            "unit": "iter/sec",
            "range": "stddev: 0.000004002745306364742",
            "extra": "mean: 67.39200000083656 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 178.48346172245888,
            "unit": "iter/sec",
            "range": "stddev: 0.000042328324442617986",
            "extra": "mean: 5.602759999999307 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6397.625201549801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047790239572156985",
            "extra": "mean: 156.30799999939882 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 31.022712099800437,
            "unit": "iter/sec",
            "range": "stddev: 0.00009707421063248446",
            "extra": "mean: 32.23444800000038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 68.45515338609778,
            "unit": "iter/sec",
            "range": "stddev: 0.00008930594314117802",
            "extra": "mean: 14.608103999999003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6624.359093190255,
            "unit": "iter/sec",
            "range": "stddev: 0.000005758321805712266",
            "extra": "mean: 150.95800000153758 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 169.80898187626195,
            "unit": "iter/sec",
            "range": "stddev: 0.000018201543891142655",
            "extra": "mean: 5.8889700000008816 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 14664.906877948011,
            "unit": "iter/sec",
            "range": "stddev: 0.000003860252580511258",
            "extra": "mean: 68.18999999950394 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 177.81343529860118,
            "unit": "iter/sec",
            "range": "stddev: 0.00007219025121114998",
            "extra": "mean: 5.623872000002166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 6354.370536104814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046576141949012665",
            "extra": "mean: 157.37199999875884 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 26.480029767790562,
            "unit": "iter/sec",
            "range": "stddev: 0.00036600985221697953",
            "extra": "mean: 37.76430799999957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 67.90535080582937,
            "unit": "iter/sec",
            "range": "stddev: 0.00012159561505060625",
            "extra": "mean: 14.726380000000745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3233.6506622299958,
            "unit": "iter/sec",
            "range": "stddev: 0.000011866683192694208",
            "extra": "mean: 309.2480000020714 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 83.944505294885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014025120434475128",
            "extra": "mean: 11.912631999999803 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6174.364040403311,
            "unit": "iter/sec",
            "range": "stddev: 0.000006516544329782385",
            "extra": "mean: 161.96000000263666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 88.41156076640873,
            "unit": "iter/sec",
            "range": "stddev: 0.00012708182509721033",
            "extra": "mean: 11.31073800000081 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3079.6710911287178,
            "unit": "iter/sec",
            "range": "stddev: 0.000008187704196171125",
            "extra": "mean: 324.70999999986816 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.344352209764772,
            "unit": "iter/sec",
            "range": "stddev: 0.0003805408613391342",
            "extra": "mean: 74.93806999999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 33.71762206335691,
            "unit": "iter/sec",
            "range": "stddev: 0.00020546319979511068",
            "extra": "mean: 29.658081999998554 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1597.2807891832244,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528101861770814",
            "extra": "mean: 626.0640000004969 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 41.57104287529396,
            "unit": "iter/sec",
            "range": "stddev: 0.00017936982614119205",
            "extra": "mean: 24.055205999999316 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2971.997836390008,
            "unit": "iter/sec",
            "range": "stddev: 0.000012529883478728246",
            "extra": "mean: 336.4739999994981 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 44.07366542958022,
            "unit": "iter/sec",
            "range": "stddev: 0.00007447186871641265",
            "extra": "mean: 22.689285999998674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1514.1879410063536,
            "unit": "iter/sec",
            "range": "stddev: 0.000014969806279553178",
            "extra": "mean: 660.4200000003857 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.645085113639153,
            "unit": "iter/sec",
            "range": "stddev: 0.00039255490268404067",
            "extra": "mean: 150.48716199999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.763415040230097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517336651688945",
            "extra": "mean: 59.65371599999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 786.9492339049469,
            "unit": "iter/sec",
            "range": "stddev: 0.00005802291659148223",
            "extra": "mean: 1.2707299999999577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 405.29772765795224,
            "unit": "iter/sec",
            "range": "stddev: 0.000030085058083833076",
            "extra": "mean: 2.4673219999988305 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 806.1967507033322,
            "unit": "iter/sec",
            "range": "stddev: 0.000007403844946838118",
            "extra": "mean: 1.2403920000019752 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 42.16534566855069,
            "unit": "iter/sec",
            "range": "stddev: 0.00010496328486796246",
            "extra": "mean: 23.71615800000086 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 761.0419577662062,
            "unit": "iter/sec",
            "range": "stddev: 0.00003225606253163347",
            "extra": "mean: 1.3139879999982895 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 395.5389534672897,
            "unit": "iter/sec",
            "range": "stddev: 0.00001791816480573215",
            "extra": "mean: 2.528195999999525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 745.7021456836908,
            "unit": "iter/sec",
            "range": "stddev: 0.00004063963176519213",
            "extra": "mean: 1.3410179999993943 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 34.615172397750264,
            "unit": "iter/sec",
            "range": "stddev: 0.00029173757185133015",
            "extra": "mean: 28.889066000000412 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 642.3242889792426,
            "unit": "iter/sec",
            "range": "stddev: 0.000009953099014831124",
            "extra": "mean: 1.556845999999723 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 359.0785469956241,
            "unit": "iter/sec",
            "range": "stddev: 0.00008402964435256563",
            "extra": "mean: 2.7849060000016834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 645.4919487785802,
            "unit": "iter/sec",
            "range": "stddev: 0.000008552770313784826",
            "extra": "mean: 1.5492060000008223 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 29.10489129235703,
            "unit": "iter/sec",
            "range": "stddev: 0.00022322559459063085",
            "extra": "mean: 34.358486000000994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 319.07208731861107,
            "unit": "iter/sec",
            "range": "stddev: 0.00007173416389807734",
            "extra": "mean: 3.1340879999993376 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 180.45271254710104,
            "unit": "iter/sec",
            "range": "stddev: 0.0001265044638331244",
            "extra": "mean: 5.541618000000881 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 321.36877388153397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000716668392624851",
            "extra": "mean: 3.111690000001772 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.599478348958868,
            "unit": "iter/sec",
            "range": "stddev: 0.00047490690848079936",
            "extra": "mean: 68.49559800000065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 160.95144191562818,
            "unit": "iter/sec",
            "range": "stddev: 0.00008639440161378597",
            "extra": "mean: 6.213054000002103 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 89.80146333280447,
            "unit": "iter/sec",
            "range": "stddev: 0.00014163672309782272",
            "extra": "mean: 11.135676000000103 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 162.0049210615068,
            "unit": "iter/sec",
            "range": "stddev: 0.00006699756055303979",
            "extra": "mean: 6.1726519999990614 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.277134728916074,
            "unit": "iter/sec",
            "range": "stddev: 0.000865483841340322",
            "extra": "mean: 137.41672199999925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.89647979572844,
            "unit": "iter/sec",
            "range": "stddev: 0.00013367519983051323",
            "extra": "mean: 20.45137000000068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 33.394150760698544,
            "unit": "iter/sec",
            "range": "stddev: 0.00008007875017841627",
            "extra": "mean: 29.945364000000154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.79334246175885,
            "unit": "iter/sec",
            "range": "stddev: 0.0001544456620305817",
            "extra": "mean: 50.52203800000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.062581002519185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004779324517328622",
            "extra": "mean: 99.37808200000063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 465.0064077886061,
            "unit": "iter/sec",
            "range": "stddev: 0.000018380488839542915",
            "extra": "mean: 2.1505079999985806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 208.71981285345223,
            "unit": "iter/sec",
            "range": "stddev: 0.000025768084330891525",
            "extra": "mean: 4.791112000000339 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 55.60069096090795,
            "unit": "iter/sec",
            "range": "stddev: 0.0001612806895459103",
            "extra": "mean: 17.985387999999602 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 78.32975888534966,
            "unit": "iter/sec",
            "range": "stddev: 0.00021463723954768523",
            "extra": "mean: 12.766539999997804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 127.05524565370536,
            "unit": "iter/sec",
            "range": "stddev: 0.00018131171024009704",
            "extra": "mean: 7.870591999999306 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 118.56711171227145,
            "unit": "iter/sec",
            "range": "stddev: 0.00008442104488743628",
            "extra": "mean: 8.434042000000089 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 99.42146648651753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000831727067608822",
            "extra": "mean: 10.058189999999742 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 14.711389172058777,
            "unit": "iter/sec",
            "range": "stddev: 0.0002967053503576562",
            "extra": "mean: 67.97454599999924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8927664632920862,
            "unit": "iter/sec",
            "range": "stddev: 0.0016014451403637989",
            "extra": "mean: 1.1201137599999993 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.615876510350436,
            "unit": "iter/sec",
            "range": "stddev: 0.0007559996417128341",
            "extra": "mean: 79.26520200000141 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.53129502964208,
            "unit": "iter/sec",
            "range": "stddev: 0.00036677144132288986",
            "extra": "mean: 79.80021200000122 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.299208654156082,
            "unit": "iter/sec",
            "range": "stddev: 0.0007555010924747976",
            "extra": "mean: 81.30604400000038 msec\nrounds: 5"
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
        "date": 1620580626401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.4812846042066249,
            "unit": "iter/sec",
            "range": "stddev: 0.038463828985727436",
            "extra": "mean: 2.0777726760000004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 63.11526336610897,
            "unit": "iter/sec",
            "range": "stddev: 0.0005165518375921615",
            "extra": "mean: 15.844027999999923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 2.7887866991919537,
            "unit": "iter/sec",
            "range": "stddev: 0.004458991245211702",
            "extra": "mean: 358.5788759999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 76.59217515956334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006455335090291356",
            "extra": "mean: 13.056164000000194 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.2766399977335882,
            "unit": "iter/sec",
            "range": "stddev: 0.015361832336844688",
            "extra": "mean: 3.614806275999998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 148.28760440188543,
            "unit": "iter/sec",
            "range": "stddev: 0.000560790784981873",
            "extra": "mean: 6.743652000000111 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.768488054588641,
            "unit": "iter/sec",
            "range": "stddev: 0.0010267348894031077",
            "extra": "mean: 361.207988000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2288450460653773,
            "unit": "iter/sec",
            "range": "stddev: 0.0081992200209356",
            "extra": "mean: 4.3697690520000005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3354.9391414084457,
            "unit": "iter/sec",
            "range": "stddev: 0.000028284735636545158",
            "extra": "mean: 298.06799999960276 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 29.90197951702537,
            "unit": "iter/sec",
            "range": "stddev: 0.00044008756335314536",
            "extra": "mean: 33.44260199999894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3559.909720698647,
            "unit": "iter/sec",
            "range": "stddev: 0.00002926687684205462",
            "extra": "mean: 280.9059999992769 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 30.224541747586294,
            "unit": "iter/sec",
            "range": "stddev: 0.00038234561084230146",
            "extra": "mean: 33.08569600000169 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3481.3365547261774,
            "unit": "iter/sec",
            "range": "stddev: 0.000007050948872754269",
            "extra": "mean: 287.24600000032297 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 30.502967084614077,
            "unit": "iter/sec",
            "range": "stddev: 0.000404069646075355",
            "extra": "mean: 32.78369600000019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3116.041381026219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000554723818662989",
            "extra": "mean: 320.92000000034204 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 29.82893819837827,
            "unit": "iter/sec",
            "range": "stddev: 0.0012841857520507324",
            "extra": "mean: 33.5244919999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1727.1992427937528,
            "unit": "iter/sec",
            "range": "stddev: 0.00004422073235548099",
            "extra": "mean: 578.9720000007037 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 15.292982188110697,
            "unit": "iter/sec",
            "range": "stddev: 0.0008178567872807749",
            "extra": "mean: 65.38947000000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 5151.558861768662,
            "unit": "iter/sec",
            "range": "stddev: 0.000023924726330810702",
            "extra": "mean: 194.11599999784812 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 149.86464225511784,
            "unit": "iter/sec",
            "range": "stddev: 0.0001522304810818894",
            "extra": "mean: 6.67268799999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 10521.6641064793,
            "unit": "iter/sec",
            "range": "stddev: 0.000006552295018073407",
            "extra": "mean: 95.04199999923912 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 156.11720280434818,
            "unit": "iter/sec",
            "range": "stddev: 0.00021928090632792094",
            "extra": "mean: 6.405444000000671 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 5890.8773872460915,
            "unit": "iter/sec",
            "range": "stddev: 0.000005459718858273825",
            "extra": "mean: 169.75400000092122 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 32.976923144904866,
            "unit": "iter/sec",
            "range": "stddev: 0.00047188973900644113",
            "extra": "mean: 30.324236000001292 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 63.715127118050795,
            "unit": "iter/sec",
            "range": "stddev: 0.0003042946106166051",
            "extra": "mean: 15.694859999999835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 5769.8743322163655,
            "unit": "iter/sec",
            "range": "stddev: 0.000005633514001570461",
            "extra": "mean: 173.31399999761743 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 150.94535566806007,
            "unit": "iter/sec",
            "range": "stddev: 0.00028661433936534906",
            "extra": "mean: 6.624913999997943 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 9871.083647538499,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075414607330250225",
            "extra": "mean: 101.3060000002497 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 159.5288665888628,
            "unit": "iter/sec",
            "range": "stddev: 0.0001420174484688433",
            "extra": "mean: 6.268458000000693 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 5574.633189156504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026231526838057982",
            "extra": "mean: 179.38399999934518 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 27.464399821018834,
            "unit": "iter/sec",
            "range": "stddev: 0.00022905118143938302",
            "extra": "mean: 36.41077200000154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 64.0292916080846,
            "unit": "iter/sec",
            "range": "stddev: 0.0003058543700359818",
            "extra": "mean: 15.617852000001449 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 5678.4627265447,
            "unit": "iter/sec",
            "range": "stddev: 0.000020346270664403587",
            "extra": "mean: 176.10400000080517 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 148.47056021803726,
            "unit": "iter/sec",
            "range": "stddev: 0.00019025052081489882",
            "extra": "mean: 6.735341999999491 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 9876.933409675816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029974122165609117",
            "extra": "mean: 101.24600000040118 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 156.72443424829808,
            "unit": "iter/sec",
            "range": "stddev: 0.0001263251369682722",
            "extra": "mean: 6.38062600000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 5491.970738730943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025189739999873827",
            "extra": "mean: 182.08400000162328 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 23.714940720948174,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135901222263761",
            "extra": "mean: 42.16751000000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 64.07313974531459,
            "unit": "iter/sec",
            "range": "stddev: 0.00012028568297958104",
            "extra": "mean: 15.607163999999328 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3006.5241574386664,
            "unit": "iter/sec",
            "range": "stddev: 0.000007000289280852547",
            "extra": "mean: 332.60999999811247 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 74.50384536697509,
            "unit": "iter/sec",
            "range": "stddev: 0.00019937163898125763",
            "extra": "mean: 13.422125999999253 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5420.759339984522,
            "unit": "iter/sec",
            "range": "stddev: 0.000005353230799621724",
            "extra": "mean: 184.4759999994494 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 77.95555629007447,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935509915751869",
            "extra": "mean: 12.827821999999287 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 2909.1924663433865,
            "unit": "iter/sec",
            "range": "stddev: 0.00001326518073593849",
            "extra": "mean: 343.73800000139454 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 11.760237545508515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002633831905789412",
            "extra": "mean: 85.03229600000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 31.72629295589266,
            "unit": "iter/sec",
            "range": "stddev: 0.0005321259757990599",
            "extra": "mean: 31.519598000000997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1377.2397361219462,
            "unit": "iter/sec",
            "range": "stddev: 0.000023599706567580854",
            "extra": "mean: 726.0899999994308 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 37.4584529569032,
            "unit": "iter/sec",
            "range": "stddev: 0.0001239109847035135",
            "extra": "mean: 26.69624399999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2647.5618602797535,
            "unit": "iter/sec",
            "range": "stddev: 0.000022518873863131532",
            "extra": "mean: 377.7060000004439 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 39.342251067612786,
            "unit": "iter/sec",
            "range": "stddev: 0.0003729711833771376",
            "extra": "mean: 25.41796599999884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1442.1315858528658,
            "unit": "iter/sec",
            "range": "stddev: 0.000011490292424098962",
            "extra": "mean: 693.4180000007474 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 5.8685952279048434,
            "unit": "iter/sec",
            "range": "stddev: 0.0015622824707131337",
            "extra": "mean: 170.39852999999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 15.75704104955025,
            "unit": "iter/sec",
            "range": "stddev: 0.0007841173967065293",
            "extra": "mean: 63.46369199999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 758.8243685829187,
            "unit": "iter/sec",
            "range": "stddev: 0.00003646716701450665",
            "extra": "mean: 1.3178279999988263 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 368.6858855244078,
            "unit": "iter/sec",
            "range": "stddev: 0.00008984060123331878",
            "extra": "mean: 2.7123360000007324 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 765.9524925623322,
            "unit": "iter/sec",
            "range": "stddev: 0.00002250504010090961",
            "extra": "mean: 1.3055640000004587 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 36.59026716456954,
            "unit": "iter/sec",
            "range": "stddev: 0.0011898590835974397",
            "extra": "mean: 27.32967199999848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 710.7229616099221,
            "unit": "iter/sec",
            "range": "stddev: 0.000058679047111825615",
            "extra": "mean: 1.4070180000021537 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 366.6275108487486,
            "unit": "iter/sec",
            "range": "stddev: 0.00010488948793757945",
            "extra": "mean: 2.7275639999982104 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 753.240062127711,
            "unit": "iter/sec",
            "range": "stddev: 0.000030601058313086856",
            "extra": "mean: 1.3275979999991705 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 31.030195669586373,
            "unit": "iter/sec",
            "range": "stddev: 0.0006612950911113836",
            "extra": "mean: 32.22667400000091 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 608.6190191009484,
            "unit": "iter/sec",
            "range": "stddev: 0.000052106463420346584",
            "extra": "mean: 1.6430639999998675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 341.33444016709547,
            "unit": "iter/sec",
            "range": "stddev: 0.00003082860960423162",
            "extra": "mean: 2.929678000000422 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 590.1048852421442,
            "unit": "iter/sec",
            "range": "stddev: 0.00008733054494215007",
            "extra": "mean: 1.6946140000004561 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 25.6881324064994,
            "unit": "iter/sec",
            "range": "stddev: 0.0005032410948741987",
            "extra": "mean: 38.928481999998894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 313.42126262392225,
            "unit": "iter/sec",
            "range": "stddev: 0.00007004415557271891",
            "extra": "mean: 3.1905939999990096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 167.99127789284327,
            "unit": "iter/sec",
            "range": "stddev: 0.00011747479985054839",
            "extra": "mean: 5.9526900000003025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 308.6071141346384,
            "unit": "iter/sec",
            "range": "stddev: 0.00010428081237663375",
            "extra": "mean: 3.2403659999999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 12.729923097261596,
            "unit": "iter/sec",
            "range": "stddev: 0.0009609445563612663",
            "extra": "mean: 78.55506999999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 151.5092288816394,
            "unit": "iter/sec",
            "range": "stddev: 0.00015556439814330678",
            "extra": "mean: 6.600258000000849 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 85.03806303701836,
            "unit": "iter/sec",
            "range": "stddev: 0.0003430314244359105",
            "extra": "mean: 11.759439999999586 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 156.39676859252555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002059429465415643",
            "extra": "mean: 6.393994000000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.465381997849871,
            "unit": "iter/sec",
            "range": "stddev: 0.0011540440148083686",
            "extra": "mean: 154.6699019999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 45.846630002197244,
            "unit": "iter/sec",
            "range": "stddev: 0.00031952111906641674",
            "extra": "mean: 21.811854000001176 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 30.869001281003037,
            "unit": "iter/sec",
            "range": "stddev: 0.0004399335802928143",
            "extra": "mean: 32.394957999998724 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 17.709895198507105,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210491618790749",
            "extra": "mean: 56.465608000000884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 8.998151563713087,
            "unit": "iter/sec",
            "range": "stddev: 0.0005661669724839441",
            "extra": "mean: 111.13393600000109 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 403.4213356637382,
            "unit": "iter/sec",
            "range": "stddev: 0.00022432989250041185",
            "extra": "mean: 2.4787979999985055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 186.38314559583674,
            "unit": "iter/sec",
            "range": "stddev: 0.00012175644672866126",
            "extra": "mean: 5.3652919999990445 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 49.7594627570345,
            "unit": "iter/sec",
            "range": "stddev: 0.00020118268899154548",
            "extra": "mean: 20.096679999999196 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 70.9049786781718,
            "unit": "iter/sec",
            "range": "stddev: 0.00020485490601856386",
            "extra": "mean: 14.103381999998419 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 123.40258439565801,
            "unit": "iter/sec",
            "range": "stddev: 0.00012434973892153035",
            "extra": "mean: 8.103557999999111 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 115.45717577892937,
            "unit": "iter/sec",
            "range": "stddev: 0.00019824732293363217",
            "extra": "mean: 8.661220000000185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 91.36605407556456,
            "unit": "iter/sec",
            "range": "stddev: 0.0007393348627873376",
            "extra": "mean: 10.94498399999793 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 14.352243495340973,
            "unit": "iter/sec",
            "range": "stddev: 0.0004784303691971714",
            "extra": "mean: 69.6755179999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8743504492044503,
            "unit": "iter/sec",
            "range": "stddev: 0.0022630419308264623",
            "extra": "mean: 1.1437061660000005 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 11.249360248882772,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912925216509399",
            "extra": "mean: 88.89394399999902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 11.096694778441377,
            "unit": "iter/sec",
            "range": "stddev: 0.0010709824968833201",
            "extra": "mean: 90.11692400000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 10.871592533059847,
            "unit": "iter/sec",
            "range": "stddev: 0.00038398813650763883",
            "extra": "mean: 91.9828439999992 msec\nrounds: 5"
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
        "date": 1621494049084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.531748967574284,
            "unit": "iter/sec",
            "range": "stddev: 0.08607856073253378",
            "extra": "mean: 1.880586632 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 75.36512897687042,
            "unit": "iter/sec",
            "range": "stddev: 0.00048197362384261083",
            "extra": "mean: 13.268735999999421 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.677864282453388,
            "unit": "iter/sec",
            "range": "stddev: 0.005981818604096808",
            "extra": "mean: 271.8969279999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 102.52208428216895,
            "unit": "iter/sec",
            "range": "stddev: 0.0007229161476133451",
            "extra": "mean: 9.753996000000598 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3522648748243184,
            "unit": "iter/sec",
            "range": "stddev: 0.09813161777334208",
            "extra": "mean: 2.8387729559999992 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 209.43882124489224,
            "unit": "iter/sec",
            "range": "stddev: 0.0004572796403503604",
            "extra": "mean: 4.774663999997984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.502779693876101,
            "unit": "iter/sec",
            "range": "stddev: 0.0035232159484100563",
            "extra": "mean: 285.4875520000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2965681576463132,
            "unit": "iter/sec",
            "range": "stddev: 0.03649034849151342",
            "extra": "mean: 3.371906168 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4217.665269212506,
            "unit": "iter/sec",
            "range": "stddev: 0.000022970580533578402",
            "extra": "mean: 237.09800000005998 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 40.21358237873197,
            "unit": "iter/sec",
            "range": "stddev: 0.0008508512967904596",
            "extra": "mean: 24.867219999998724 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3839.7444265870267,
            "unit": "iter/sec",
            "range": "stddev: 0.00005030906061467766",
            "extra": "mean: 260.43400000162364 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.32119866859721,
            "unit": "iter/sec",
            "range": "stddev: 0.0011330335408968983",
            "extra": "mean: 24.800849999998036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3979.2125933922216,
            "unit": "iter/sec",
            "range": "stddev: 0.00005174074487330402",
            "extra": "mean: 251.30600000125017 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 40.04249630047464,
            "unit": "iter/sec",
            "range": "stddev: 0.0007750300930747411",
            "extra": "mean: 24.973467999999457 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 4497.616263398178,
            "unit": "iter/sec",
            "range": "stddev: 0.00001616165369011501",
            "extra": "mean: 222.33999999912157 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.673884925445044,
            "unit": "iter/sec",
            "range": "stddev: 0.0008432562358815983",
            "extra": "mean: 24.585799999999836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2122.0339270853024,
            "unit": "iter/sec",
            "range": "stddev: 0.000031584960505194154",
            "extra": "mean: 471.24599999847305 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.20397202816615,
            "unit": "iter/sec",
            "range": "stddev: 0.002109291302505738",
            "extra": "mean: 49.49521800000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 7353.914488718529,
            "unit": "iter/sec",
            "range": "stddev: 0.00001797233624261808",
            "extra": "mean: 135.98199999933058 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 200.04112845602498,
            "unit": "iter/sec",
            "range": "stddev: 0.00012074494179832079",
            "extra": "mean: 4.99897199999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12976.901116039313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033683749808868046",
            "extra": "mean: 77.0599999998467 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 206.81411134040343,
            "unit": "iter/sec",
            "range": "stddev: 0.0002874346926716705",
            "extra": "mean: 4.835260000000972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 7838.956478092886,
            "unit": "iter/sec",
            "range": "stddev: 0.000014143126246882562",
            "extra": "mean: 127.56800000033765 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 42.525030871044024,
            "unit": "iter/sec",
            "range": "stddev: 0.0013250655637059335",
            "extra": "mean: 23.515562000001182 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 77.42912989171172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003647456419613736",
            "extra": "mean: 12.915035999998281 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 7171.131891404319,
            "unit": "iter/sec",
            "range": "stddev: 0.000005428210570136407",
            "extra": "mean: 139.44800000103896 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 195.37317252818593,
            "unit": "iter/sec",
            "range": "stddev: 0.00018299755886317734",
            "extra": "mean: 5.11841000000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 10161.56894607496,
            "unit": "iter/sec",
            "range": "stddev: 0.000030212429561406294",
            "extra": "mean: 98.41000000164968 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 193.32637358385503,
            "unit": "iter/sec",
            "range": "stddev: 0.00036628758312093324",
            "extra": "mean: 5.172600000000784 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 5241.41979579747,
            "unit": "iter/sec",
            "range": "stddev: 0.00005952591679309746",
            "extra": "mean: 190.78799999988405 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.76788646087772,
            "unit": "iter/sec",
            "range": "stddev: 0.0013258161358310186",
            "extra": "mean: 28.76217399999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 77.7256722143685,
            "unit": "iter/sec",
            "range": "stddev: 0.00033097954992588854",
            "extra": "mean: 12.865761999998995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 8174.876968212675,
            "unit": "iter/sec",
            "range": "stddev: 0.000007900264551187139",
            "extra": "mean: 122.32599999833838 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 200.71639696407004,
            "unit": "iter/sec",
            "range": "stddev: 0.00010918879397651885",
            "extra": "mean: 4.982153999999355 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 16898.17161777333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032007764675663103",
            "extra": "mean: 59.17800000020179 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 197.4880312378508,
            "unit": "iter/sec",
            "range": "stddev: 0.00019654982846614323",
            "extra": "mean: 5.063598000000411 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 7461.684251307641,
            "unit": "iter/sec",
            "range": "stddev: 0.000014993022377201907",
            "extra": "mean: 134.01800000110597 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 28.931593850185042,
            "unit": "iter/sec",
            "range": "stddev: 0.0014856238625245433",
            "extra": "mean: 34.56428999999957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 78.22238687165554,
            "unit": "iter/sec",
            "range": "stddev: 0.00018888342576723767",
            "extra": "mean: 12.784063999999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3925.5095311535297,
            "unit": "iter/sec",
            "range": "stddev: 0.000020343236713069984",
            "extra": "mean: 254.74399999893652 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 94.69469200266742,
            "unit": "iter/sec",
            "range": "stddev: 0.0007468935366783646",
            "extra": "mean: 10.56025400000067 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5741.978456155517,
            "unit": "iter/sec",
            "range": "stddev: 0.000005173570332917284",
            "extra": "mean: 174.15599999822007 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 103.70653373977352,
            "unit": "iter/sec",
            "range": "stddev: 0.00023339903498397052",
            "extra": "mean: 9.6425940000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3916.0094297456144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002639536455408014",
            "extra": "mean: 255.36200000033207 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.016667299369072,
            "unit": "iter/sec",
            "range": "stddev: 0.003555587625663175",
            "extra": "mean: 66.59267199999931 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 37.890465031191724,
            "unit": "iter/sec",
            "range": "stddev: 0.0009329490390847571",
            "extra": "mean: 26.39186400000085 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1757.7472710953782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004427875562937662",
            "extra": "mean: 568.910000000642 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 48.5139450909454,
            "unit": "iter/sec",
            "range": "stddev: 0.0011266233087639985",
            "extra": "mean: 20.61263000000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2889.7558156289065,
            "unit": "iter/sec",
            "range": "stddev: 0.00002315367033669592",
            "extra": "mean: 346.0500000005595 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 51.464224078526875,
            "unit": "iter/sec",
            "range": "stddev: 0.0004672191885267265",
            "extra": "mean: 19.430973999999424 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1852.11938020544,
            "unit": "iter/sec",
            "range": "stddev: 0.00004072179477931975",
            "extra": "mean: 539.9220000003879 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.397059742722827,
            "unit": "iter/sec",
            "range": "stddev: 0.0020334201809633747",
            "extra": "mean: 135.18885000000068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 18.900201793674427,
            "unit": "iter/sec",
            "range": "stddev: 0.0009387729581322291",
            "extra": "mean: 52.90948800000024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 851.6567278320124,
            "unit": "iter/sec",
            "range": "stddev: 0.00008476606968894513",
            "extra": "mean: 1.174182000000883 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 447.7145515283786,
            "unit": "iter/sec",
            "range": "stddev: 0.00016590166494171747",
            "extra": "mean: 2.2335660000021567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 852.3201860103522,
            "unit": "iter/sec",
            "range": "stddev: 0.00005195141692099027",
            "extra": "mean: 1.1732680000000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 45.32350695529925,
            "unit": "iter/sec",
            "range": "stddev: 0.00046335774832066207",
            "extra": "mean: 22.06360600000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 877.7827908930127,
            "unit": "iter/sec",
            "range": "stddev: 0.00006386951721815506",
            "extra": "mean: 1.1392339999997603 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 433.18960102350536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000649398865846494",
            "extra": "mean: 2.30845800000111 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 866.1068152219198,
            "unit": "iter/sec",
            "range": "stddev: 0.00006488588112886619",
            "extra": "mean: 1.1545919999991838 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 37.94554328834967,
            "unit": "iter/sec",
            "range": "stddev: 0.0007865149313457307",
            "extra": "mean: 26.35355600000139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 675.7861758474888,
            "unit": "iter/sec",
            "range": "stddev: 0.00013136525423091961",
            "extra": "mean: 1.4797580000004018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 379.32755845087314,
            "unit": "iter/sec",
            "range": "stddev: 0.00006438048912334724",
            "extra": "mean: 2.636243999997987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 715.3065589327076,
            "unit": "iter/sec",
            "range": "stddev: 0.00010611868435803732",
            "extra": "mean: 1.3980019999985416 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 31.497807028181388,
            "unit": "iter/sec",
            "range": "stddev: 0.0014930870865512145",
            "extra": "mean: 31.74824199999989 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 354.5475689380231,
            "unit": "iter/sec",
            "range": "stddev: 0.00028424757638430314",
            "extra": "mean: 2.82049600000164 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 197.73873887766277,
            "unit": "iter/sec",
            "range": "stddev: 0.00015602945722077463",
            "extra": "mean: 5.057178000000704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 355.1772050110457,
            "unit": "iter/sec",
            "range": "stddev: 0.0002131389576792913",
            "extra": "mean: 2.8154960000006213 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 15.472486252463714,
            "unit": "iter/sec",
            "range": "stddev: 0.002626763155545412",
            "extra": "mean: 64.63085400000068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 167.42527056762847,
            "unit": "iter/sec",
            "range": "stddev: 0.00022815228144831514",
            "extra": "mean: 5.97281399999929 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 91.89227138214491,
            "unit": "iter/sec",
            "range": "stddev: 0.0005443329780280204",
            "extra": "mean: 10.882307999999057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 163.3187413482124,
            "unit": "iter/sec",
            "range": "stddev: 0.0004397917246038413",
            "extra": "mean: 6.122995999999148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.546867594872048,
            "unit": "iter/sec",
            "range": "stddev: 0.002389922722259348",
            "extra": "mean: 132.50530599999936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 52.910573617281855,
            "unit": "iter/sec",
            "range": "stddev: 0.0001968580188368319",
            "extra": "mean: 18.899814000001243 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 36.11877471246659,
            "unit": "iter/sec",
            "range": "stddev: 0.0003443628009375293",
            "extra": "mean: 27.686431999999286 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 21.37328119278579,
            "unit": "iter/sec",
            "range": "stddev: 0.000908115550174167",
            "extra": "mean: 46.78738800000132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.907318529324497,
            "unit": "iter/sec",
            "range": "stddev: 0.0011189992269738578",
            "extra": "mean: 91.68156199999885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 499.70567335885073,
            "unit": "iter/sec",
            "range": "stddev: 0.000042863475360226143",
            "extra": "mean: 2.0011779999981627 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 222.27873041506936,
            "unit": "iter/sec",
            "range": "stddev: 0.00015217010705229308",
            "extra": "mean: 4.498855999999023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 60.57473062114566,
            "unit": "iter/sec",
            "range": "stddev: 0.00027220746642942265",
            "extra": "mean: 16.5085339999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 82.88891062419921,
            "unit": "iter/sec",
            "range": "stddev: 0.0001509687788914099",
            "extra": "mean: 12.064340000000584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 131.50295250429815,
            "unit": "iter/sec",
            "range": "stddev: 0.0004701623119944331",
            "extra": "mean: 7.604391999999507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 129.91683244055662,
            "unit": "iter/sec",
            "range": "stddev: 0.00010032613303616412",
            "extra": "mean: 7.697231999999303 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 105.23440120994512,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768649100781688",
            "extra": "mean: 9.502595999999812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 16.03110136263415,
            "unit": "iter/sec",
            "range": "stddev: 0.0014615196461671468",
            "extra": "mean: 62.37874599999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.9969588587520044,
            "unit": "iter/sec",
            "range": "stddev: 0.014541517945947676",
            "extra": "mean: 1.003050417999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.598812247101518,
            "unit": "iter/sec",
            "range": "stddev: 0.0009468381724619709",
            "extra": "mean: 73.5358339999982 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 13.959005360564941,
            "unit": "iter/sec",
            "range": "stddev: 0.0022813959507212815",
            "extra": "mean: 71.6383420000011 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.642387618649284,
            "unit": "iter/sec",
            "range": "stddev: 0.0015192134463329358",
            "extra": "mean: 73.3009519999996 msec\nrounds: 5"
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
        "date": 1628772572690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.570117783985286,
            "unit": "iter/sec",
            "range": "stddev: 0.012846234807268592",
            "extra": "mean: 1.754023516 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 75.05625466286965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002585043736573622",
            "extra": "mean: 13.32334000000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.7848303937262244,
            "unit": "iter/sec",
            "range": "stddev: 0.00028369114494443843",
            "extra": "mean: 264.2126319999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 107.25438638264073,
            "unit": "iter/sec",
            "range": "stddev: 0.0001324756842592086",
            "extra": "mean: 9.323627999999928 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3753451809408196,
            "unit": "iter/sec",
            "range": "stddev: 0.022838730094979484",
            "extra": "mean: 2.6642143040000006 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 214.93506381850986,
            "unit": "iter/sec",
            "range": "stddev: 0.00006829689685440399",
            "extra": "mean: 4.652568000000201 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.608695205950889,
            "unit": "iter/sec",
            "range": "stddev: 0.008291686788544281",
            "extra": "mean: 277.10846800000127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.315399705251658,
            "unit": "iter/sec",
            "range": "stddev: 0.09346242811618675",
            "extra": "mean: 3.1705800080000017 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4802.289731761035,
            "unit": "iter/sec",
            "range": "stddev: 0.000012939844666626137",
            "extra": "mean: 208.2339999992655 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.491375925164995,
            "unit": "iter/sec",
            "range": "stddev: 0.0009422765172069033",
            "extra": "mean: 22.476265999999896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 4425.092041904794,
            "unit": "iter/sec",
            "range": "stddev: 0.000007340233646277884",
            "extra": "mean: 225.98400000049423 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 44.878638288768734,
            "unit": "iter/sec",
            "range": "stddev: 0.000773462516952115",
            "extra": "mean: 22.282315999999014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 4440.379030730248,
            "unit": "iter/sec",
            "range": "stddev: 0.000007389619746038019",
            "extra": "mean: 225.20600000120794 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 43.96087482140817,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912871465844431",
            "extra": "mean: 22.7475000000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 4863.907858126512,
            "unit": "iter/sec",
            "range": "stddev: 0.000006626890673945339",
            "extra": "mean: 205.5960000001278 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 43.95203707582879,
            "unit": "iter/sec",
            "range": "stddev: 0.0004680999316710896",
            "extra": "mean: 22.752073999999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2191.876904194129,
            "unit": "iter/sec",
            "range": "stddev: 0.00003243571565313422",
            "extra": "mean: 456.22999999977765 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.28080688070538,
            "unit": "iter/sec",
            "range": "stddev: 0.0013124837436401763",
            "extra": "mean: 44.88167799999985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 8720.220447170524,
            "unit": "iter/sec",
            "range": "stddev: 0.000008557589029477715",
            "extra": "mean: 114.67600000003131 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 210.8339113696358,
            "unit": "iter/sec",
            "range": "stddev: 0.0001406687664344152",
            "extra": "mean: 4.7430700000001025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 17622.387481169448,
            "unit": "iter/sec",
            "range": "stddev: 0.000003986004265577443",
            "extra": "mean: 56.74599999963448 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 224.55389001449063,
            "unit": "iter/sec",
            "range": "stddev: 0.00013383014301664736",
            "extra": "mean: 4.45327399999826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 8518.32291257743,
            "unit": "iter/sec",
            "range": "stddev: 0.000003948174261176797",
            "extra": "mean: 117.39400000010392 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 47.66958646061493,
            "unit": "iter/sec",
            "range": "stddev: 0.0007039897628733657",
            "extra": "mean: 20.977736000000963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.43581562161509,
            "unit": "iter/sec",
            "range": "stddev: 0.000309554856980295",
            "extra": "mean: 11.05756600000177 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 7978.299026600849,
            "unit": "iter/sec",
            "range": "stddev: 0.000003983340306881457",
            "extra": "mean: 125.34000000073321 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 213.30976118258258,
            "unit": "iter/sec",
            "range": "stddev: 0.00022953828976667249",
            "extra": "mean: 4.688018000001648 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 17228.903207515472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065299364441332235",
            "extra": "mean: 58.042000001705674 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 224.4414997719092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002092971853141719",
            "extra": "mean: 4.455504000001156 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 7710.932560170761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032012778694498226",
            "extra": "mean: 129.6860000002198 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 39.29994844632724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987879324340295",
            "extra": "mean: 25.44532600000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 84.94770788998154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006019695021498864",
            "extra": "mean: 11.771947999999385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 7987.475638187356,
            "unit": "iter/sec",
            "range": "stddev: 0.000003933323022727835",
            "extra": "mean: 125.19600000018727 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 203.73951658315497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000688713073059556",
            "extra": "mean: 4.908228000000463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 19918.73157503484,
            "unit": "iter/sec",
            "range": "stddev: 0.000003240714425566465",
            "extra": "mean: 50.20400000034898 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 225.87415556948238,
            "unit": "iter/sec",
            "range": "stddev: 0.0001854304607656814",
            "extra": "mean: 4.427243999999746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 7275.7963359589885,
            "unit": "iter/sec",
            "range": "stddev: 0.00001630657750948741",
            "extra": "mean: 137.44199999905504 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 33.871494935364005,
            "unit": "iter/sec",
            "range": "stddev: 0.0010060273088758408",
            "extra": "mean: 29.52335000000062 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 85.85447871906881,
            "unit": "iter/sec",
            "range": "stddev: 0.0004456149283060341",
            "extra": "mean: 11.647616000001335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3847.337642321713,
            "unit": "iter/sec",
            "range": "stddev: 0.000006046416292728231",
            "extra": "mean: 259.9200000020119 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 105.50867101910667,
            "unit": "iter/sec",
            "range": "stddev: 0.0004673032892329697",
            "extra": "mean: 9.477894000000331 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7863.366149783055,
            "unit": "iter/sec",
            "range": "stddev: 0.000006690472328904798",
            "extra": "mean: 127.17199999997318 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 116.14490889243595,
            "unit": "iter/sec",
            "range": "stddev: 0.0004566643404413493",
            "extra": "mean: 8.609934000000976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 4073.850766671079,
            "unit": "iter/sec",
            "range": "stddev: 0.000005868161551050097",
            "extra": "mean: 245.4680000016651 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.742103235424914,
            "unit": "iter/sec",
            "range": "stddev: 0.0011631649042439256",
            "extra": "mean: 59.72965199999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.17308813787302,
            "unit": "iter/sec",
            "range": "stddev: 0.0007817011711835211",
            "extra": "mean: 23.71180400000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2014.0905776917512,
            "unit": "iter/sec",
            "range": "stddev: 0.000054452250367533556",
            "extra": "mean: 496.50199999746286 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 53.21987707060033,
            "unit": "iter/sec",
            "range": "stddev: 0.0009582405144940404",
            "extra": "mean: 18.78997199999958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3469.3311129494264,
            "unit": "iter/sec",
            "range": "stddev: 0.000011626901996041528",
            "extra": "mean: 288.2400000009966 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 55.68921586130933,
            "unit": "iter/sec",
            "range": "stddev: 0.0008506574551299348",
            "extra": "mean: 17.9567980000013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1995.737105538811,
            "unit": "iter/sec",
            "range": "stddev: 0.000015714880528295126",
            "extra": "mean: 501.06800000094154 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.456560357667941,
            "unit": "iter/sec",
            "range": "stddev: 0.001923184769548112",
            "extra": "mean: 118.25138799999877 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.805026361217113,
            "unit": "iter/sec",
            "range": "stddev: 0.0016162638779813842",
            "extra": "mean: 48.06530799999905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 967.3500027089593,
            "unit": "iter/sec",
            "range": "stddev: 0.000013702557058691938",
            "extra": "mean: 1.0337519999995948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 488.43293132046483,
            "unit": "iter/sec",
            "range": "stddev: 0.000029199047588172873",
            "extra": "mean: 2.047364000000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1073.3898079495664,
            "unit": "iter/sec",
            "range": "stddev: 0.000007787751280568926",
            "extra": "mean: 931.6279999995913 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 53.921680699962025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004524230611186325",
            "extra": "mean: 18.545416000000614 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1021.6863136931277,
            "unit": "iter/sec",
            "range": "stddev: 0.000007287134552999397",
            "extra": "mean: 978.7740000012946 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 478.11203121087703,
            "unit": "iter/sec",
            "range": "stddev: 0.000011112454722275182",
            "extra": "mean: 2.091560000001209 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 910.3935995690114,
            "unit": "iter/sec",
            "range": "stddev: 0.000007178588301774499",
            "extra": "mean: 1.0984259999997903 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 43.48423522536221,
            "unit": "iter/sec",
            "range": "stddev: 0.0009821309265585772",
            "extra": "mean: 22.996839999999565 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 761.2145940058292,
            "unit": "iter/sec",
            "range": "stddev: 0.00002875964794750339",
            "extra": "mean: 1.3136900000006335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 466.99904545396845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001233002533256444",
            "extra": "mean: 2.1413319999999203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 790.8539324413143,
            "unit": "iter/sec",
            "range": "stddev: 0.00009230368968681624",
            "extra": "mean: 1.2644560000012461 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 36.5207339528079,
            "unit": "iter/sec",
            "range": "stddev: 0.0010490239323913252",
            "extra": "mean: 27.381705999999895 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 417.42324630043976,
            "unit": "iter/sec",
            "range": "stddev: 0.0001427400490415252",
            "extra": "mean: 2.395650000000842 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 231.86093908318497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002134363847854875",
            "extra": "mean: 4.312929999999824 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 395.02084129951277,
            "unit": "iter/sec",
            "range": "stddev: 0.00010618700636063998",
            "extra": "mean: 2.5315120000004754 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.32712092806149,
            "unit": "iter/sec",
            "range": "stddev: 0.001531151417209863",
            "extra": "mean: 54.56394400000136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 205.5386077554449,
            "unit": "iter/sec",
            "range": "stddev: 0.0001895416688498414",
            "extra": "mean: 4.865266000000474 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 114.08927211729308,
            "unit": "iter/sec",
            "range": "stddev: 0.0003354965998795595",
            "extra": "mean: 8.765065999999706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 201.05230777895534,
            "unit": "iter/sec",
            "range": "stddev: 0.00025524478505895264",
            "extra": "mean: 4.973829999998998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.255323004664351,
            "unit": "iter/sec",
            "range": "stddev: 0.0013079632428588614",
            "extra": "mean: 108.045932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.56766545017377,
            "unit": "iter/sec",
            "range": "stddev: 0.00008322993794495651",
            "extra": "mean: 16.242291999999455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 42.016044078526846,
            "unit": "iter/sec",
            "range": "stddev: 0.00036715216187769184",
            "extra": "mean: 23.800432000000455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.143481275900985,
            "unit": "iter/sec",
            "range": "stddev: 0.0002961693984017787",
            "extra": "mean: 39.77173999999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.864881818693089,
            "unit": "iter/sec",
            "range": "stddev: 0.0007615567914806981",
            "extra": "mean: 77.73098999999888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 565.7663814825089,
            "unit": "iter/sec",
            "range": "stddev: 0.00012164193902486486",
            "extra": "mean: 1.767514000000574 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 252.19765032493086,
            "unit": "iter/sec",
            "range": "stddev: 0.00004146707766318065",
            "extra": "mean: 3.965144000000009 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 72.2796644777981,
            "unit": "iter/sec",
            "range": "stddev: 0.0004822478264344744",
            "extra": "mean: 13.835149999999885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 100.27923756491597,
            "unit": "iter/sec",
            "range": "stddev: 0.00034596392222430763",
            "extra": "mean: 9.972154000000728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 159.18553041731354,
            "unit": "iter/sec",
            "range": "stddev: 0.00031112468396073595",
            "extra": "mean: 6.281978000000663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 153.74666792537542,
            "unit": "iter/sec",
            "range": "stddev: 0.0004015239199355295",
            "extra": "mean: 6.504205999998476 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 119.95424465290857,
            "unit": "iter/sec",
            "range": "stddev: 0.00010223040139700021",
            "extra": "mean: 8.336512000000766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.666186721674187,
            "unit": "iter/sec",
            "range": "stddev: 0.001557182112063931",
            "extra": "mean: 53.572805999998536 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1289454614598529,
            "unit": "iter/sec",
            "range": "stddev: 0.0017821267290857562",
            "extra": "mean: 885.7823820000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.106437524030675,
            "unit": "iter/sec",
            "range": "stddev: 0.0009655280265646798",
            "extra": "mean: 62.086976000000504 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.77639322748453,
            "unit": "iter/sec",
            "range": "stddev: 0.0009583906865594581",
            "extra": "mean: 63.38584400000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.859471380980972,
            "unit": "iter/sec",
            "range": "stddev: 0.0013072881735044048",
            "extra": "mean: 63.05380400000103 msec\nrounds: 5"
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
        "date": 1631714708112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.47138177779046775,
            "unit": "iter/sec",
            "range": "stddev: 0.02872062005510546",
            "extra": "mean: 2.121422692 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 63.89978877285993,
            "unit": "iter/sec",
            "range": "stddev: 0.00043324724151419704",
            "extra": "mean: 15.649503999999581 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.1034528432885233,
            "unit": "iter/sec",
            "range": "stddev: 0.0023420851191017287",
            "extra": "mean: 322.2217480000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 93.40623004609327,
            "unit": "iter/sec",
            "range": "stddev: 0.00019739458219590934",
            "extra": "mean: 10.705924000000095 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.31578193906066415,
            "unit": "iter/sec",
            "range": "stddev: 0.022635880581878126",
            "extra": "mean: 3.1667422239999996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 179.33861354036978,
            "unit": "iter/sec",
            "range": "stddev: 0.00015152272397206035",
            "extra": "mean: 5.576043999999456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.0271087884172685,
            "unit": "iter/sec",
            "range": "stddev: 0.001470534421290242",
            "extra": "mean: 330.3482199999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.258828352461915,
            "unit": "iter/sec",
            "range": "stddev: 0.008564938007150852",
            "extra": "mean: 3.863564368000001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3822.10399181938,
            "unit": "iter/sec",
            "range": "stddev: 0.000017848215035613975",
            "extra": "mean: 261.63599999904363 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 34.724445551305095,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358771061000214",
            "extra": "mean: 28.79815600000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3831.623152206373,
            "unit": "iter/sec",
            "range": "stddev: 0.000010839390205344767",
            "extra": "mean: 260.98599999954786 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 34.03770042929802,
            "unit": "iter/sec",
            "range": "stddev: 0.0008715910403222799",
            "extra": "mean: 29.379187999999203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3403.0736561286685,
            "unit": "iter/sec",
            "range": "stddev: 0.000053074611352385295",
            "extra": "mean: 293.85199999978795 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 34.52927073904134,
            "unit": "iter/sec",
            "range": "stddev: 0.0007110347318756166",
            "extra": "mean: 28.960935999998583 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3850.241025088087,
            "unit": "iter/sec",
            "range": "stddev: 0.000009091283187627482",
            "extra": "mean: 259.7240000000056 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 32.91460037034041,
            "unit": "iter/sec",
            "range": "stddev: 0.0012346790157899878",
            "extra": "mean: 30.38165400000139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1869.4663795187466,
            "unit": "iter/sec",
            "range": "stddev: 0.00003513399095094424",
            "extra": "mean: 534.9119999993945 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 17.06821345644268,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448941733232839",
            "extra": "mean: 58.5884400000009 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6633.499170801878,
            "unit": "iter/sec",
            "range": "stddev: 0.000010748025399778724",
            "extra": "mean: 150.75000000024377 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 170.04344610048497,
            "unit": "iter/sec",
            "range": "stddev: 0.00020562263433198167",
            "extra": "mean: 5.880849999999782 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12942.638227335876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061905435922934165",
            "extra": "mean: 77.26400000024114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 172.52510153963937,
            "unit": "iter/sec",
            "range": "stddev: 0.00024259348325776363",
            "extra": "mean: 5.796258000000307 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 6055.908144031813,
            "unit": "iter/sec",
            "range": "stddev: 0.00001898895652543133",
            "extra": "mean: 165.12799999873096 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 35.94904065311867,
            "unit": "iter/sec",
            "range": "stddev: 0.0009336646237966506",
            "extra": "mean: 27.817153999998254 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 66.19579391924918,
            "unit": "iter/sec",
            "range": "stddev: 0.0003378276055917726",
            "extra": "mean: 15.106700000001183 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 5056.225224497008,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283355059367416",
            "extra": "mean: 197.77599999997622 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 170.86796827046092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002661475280170724",
            "extra": "mean: 5.8524720000013986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12677.806232696836,
            "unit": "iter/sec",
            "range": "stddev: 0.000004530449204720077",
            "extra": "mean: 78.87799999821254 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 175.65591675881447,
            "unit": "iter/sec",
            "range": "stddev: 0.000436939730422076",
            "extra": "mean: 5.692947999998523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6340.108796270503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035227446685542187",
            "extra": "mean: 157.72599999991144 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 31.311068324885696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003000539837576274",
            "extra": "mean: 31.937587999998414 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 65.67298191195151,
            "unit": "iter/sec",
            "range": "stddev: 0.0006001737772683084",
            "extra": "mean: 15.226962000000412 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6712.310377224405,
            "unit": "iter/sec",
            "range": "stddev: 0.000005097004022983054",
            "extra": "mean: 148.9800000001651 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 177.94873510479385,
            "unit": "iter/sec",
            "range": "stddev: 0.00008507199938897237",
            "extra": "mean: 5.619596000000228 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 12615.749501647846,
            "unit": "iter/sec",
            "range": "stddev: 0.000004646749404018532",
            "extra": "mean: 79.2660000001888 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 177.93049750081983,
            "unit": "iter/sec",
            "range": "stddev: 0.00016336507940694977",
            "extra": "mean: 5.620171999999002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 6479.117803337211,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014490065559865924",
            "extra": "mean: 154.34199999958764 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 26.126448352322463,
            "unit": "iter/sec",
            "range": "stddev: 0.0012548807969290892",
            "extra": "mean: 38.275390000000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 66.71582288496252,
            "unit": "iter/sec",
            "range": "stddev: 0.0005349295023370212",
            "extra": "mean: 14.988948000001301 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3219.429903364634,
            "unit": "iter/sec",
            "range": "stddev: 0.000017891507203597815",
            "extra": "mean: 310.61399999885 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 86.01067358055077,
            "unit": "iter/sec",
            "range": "stddev: 0.0003103029961650499",
            "extra": "mean: 11.626463999999714 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5625.119533790111,
            "unit": "iter/sec",
            "range": "stddev: 0.000010024628669676256",
            "extra": "mean: 177.77399999999943 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 87.05917586301835,
            "unit": "iter/sec",
            "range": "stddev: 0.00033404944372131197",
            "extra": "mean: 11.486439999999902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 2992.1306962608087,
            "unit": "iter/sec",
            "range": "stddev: 0.000041204787344443834",
            "extra": "mean: 334.21000000089407 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.28239340653482,
            "unit": "iter/sec",
            "range": "stddev: 0.001091083512880284",
            "extra": "mean: 75.28763600000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 32.83221307633562,
            "unit": "iter/sec",
            "range": "stddev: 0.0009537602032067776",
            "extra": "mean: 30.45789199999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1612.898022908126,
            "unit": "iter/sec",
            "range": "stddev: 0.000019482057644057785",
            "extra": "mean: 620.0020000005679 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 42.220094704738315,
            "unit": "iter/sec",
            "range": "stddev: 0.0003971450520651003",
            "extra": "mean: 23.685404000000293 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2670.583522496249,
            "unit": "iter/sec",
            "range": "stddev: 0.000015733243468649494",
            "extra": "mean: 374.4500000004791 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 43.98494448132251,
            "unit": "iter/sec",
            "range": "stddev: 0.0007922355274612651",
            "extra": "mean: 22.735052000000454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1463.3104178928095,
            "unit": "iter/sec",
            "range": "stddev: 0.000039994516747126165",
            "extra": "mean: 683.3819999997104 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.689861844853269,
            "unit": "iter/sec",
            "range": "stddev: 0.0014265832023656415",
            "extra": "mean: 149.47991800000068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.613720401119977,
            "unit": "iter/sec",
            "range": "stddev: 0.0003595783955957454",
            "extra": "mean: 60.19121400000131 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 694.6846895659488,
            "unit": "iter/sec",
            "range": "stddev: 0.00020465034490422642",
            "extra": "mean: 1.4395020000006298 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 403.47504990978626,
            "unit": "iter/sec",
            "range": "stddev: 0.00008022151158124987",
            "extra": "mean: 2.4784680000004755 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 739.3824677639111,
            "unit": "iter/sec",
            "range": "stddev: 0.00021488310624702956",
            "extra": "mean: 1.3524799999981951 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 41.890852545876584,
            "unit": "iter/sec",
            "range": "stddev: 0.0005221598071006364",
            "extra": "mean: 23.871559999998908 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 752.3684558988779,
            "unit": "iter/sec",
            "range": "stddev: 0.00005173062468127595",
            "extra": "mean: 1.329136000000517 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 380.3869448155578,
            "unit": "iter/sec",
            "range": "stddev: 0.0001558087371429057",
            "extra": "mean: 2.6289020000012897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 777.3365960749187,
            "unit": "iter/sec",
            "range": "stddev: 0.000020106601651333572",
            "extra": "mean: 1.2864439999987098 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 34.54207570241257,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416686789431833",
            "extra": "mean: 28.95020000000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 582.196207108428,
            "unit": "iter/sec",
            "range": "stddev: 0.00023608555065982045",
            "extra": "mean: 1.7176339999991797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 337.5340571863292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002903620245985879",
            "extra": "mean: 2.962664000000359 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 648.5059072399681,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028093008347156",
            "extra": "mean: 1.5420060000008107 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 28.712080027688604,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861460196489544",
            "extra": "mean: 34.82854599999882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 313.6211957749125,
            "unit": "iter/sec",
            "range": "stddev: 0.00016278521385626362",
            "extra": "mean: 3.188559999999825 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 175.5197666851513,
            "unit": "iter/sec",
            "range": "stddev: 0.000326717900000373",
            "extra": "mean: 5.697363999997833 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 309.54462271463314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002347282506867347",
            "extra": "mean: 3.2305519999999883 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.4353761411524,
            "unit": "iter/sec",
            "range": "stddev: 0.0007593052893277626",
            "extra": "mean: 69.27426000000082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 152.94930617606354,
            "unit": "iter/sec",
            "range": "stddev: 0.0001456185717215369",
            "extra": "mean: 6.5381139999999505 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 86.99649473724493,
            "unit": "iter/sec",
            "range": "stddev: 0.000553495977608555",
            "extra": "mean: 11.494715999998562 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 157.15071916883772,
            "unit": "iter/sec",
            "range": "stddev: 0.00042276658911348427",
            "extra": "mean: 6.363317999999936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.157715435316902,
            "unit": "iter/sec",
            "range": "stddev: 0.0008277501559183154",
            "extra": "mean: 139.70938200000205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.06954162904006,
            "unit": "iter/sec",
            "range": "stddev: 0.00042634190297363814",
            "extra": "mean: 20.803194000000076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 32.97185193000787,
            "unit": "iter/sec",
            "range": "stddev: 0.00035944371958495237",
            "extra": "mean: 30.32889999999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.476266825011557,
            "unit": "iter/sec",
            "range": "stddev: 0.0009034161141578434",
            "extra": "mean: 51.344541999999365 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.093238511259994,
            "unit": "iter/sec",
            "range": "stddev: 0.0005445054033445688",
            "extra": "mean: 99.0762280000024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 453.0113932363778,
            "unit": "iter/sec",
            "range": "stddev: 0.000109814744229367",
            "extra": "mean: 2.20745000000079 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 203.86370651128226,
            "unit": "iter/sec",
            "range": "stddev: 0.00011102799948890073",
            "extra": "mean: 4.905238000000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 55.2177029722702,
            "unit": "iter/sec",
            "range": "stddev: 0.00021521440165444967",
            "extra": "mean: 18.11013399999979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 76.7596379401389,
            "unit": "iter/sec",
            "range": "stddev: 0.0003475019869017861",
            "extra": "mean: 13.027680000000146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 129.20143692670592,
            "unit": "iter/sec",
            "range": "stddev: 0.00022066692303065953",
            "extra": "mean: 7.739851999999701 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 118.15199876553724,
            "unit": "iter/sec",
            "range": "stddev: 0.00012894300709961006",
            "extra": "mean: 8.463674000000765 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 97.68164341160302,
            "unit": "iter/sec",
            "range": "stddev: 0.0005900575213658494",
            "extra": "mean: 10.237337999999454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 14.457687236157971,
            "unit": "iter/sec",
            "range": "stddev: 0.0004272232990249399",
            "extra": "mean: 69.16735600000038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8819912453866513,
            "unit": "iter/sec",
            "range": "stddev: 0.006858667514940563",
            "extra": "mean: 1.1337981019999983 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.448133606515208,
            "unit": "iter/sec",
            "range": "stddev: 0.001037425263174788",
            "extra": "mean: 80.33332799999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.558035390804347,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487274443002183",
            "extra": "mean: 79.63028999999892 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.042460559858098,
            "unit": "iter/sec",
            "range": "stddev: 0.0008683191839829755",
            "extra": "mean: 83.03950799999825 msec\nrounds: 5"
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
        "date": 1631724655199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.4697327169545715,
            "unit": "iter/sec",
            "range": "stddev: 0.03338403187599854",
            "extra": "mean: 2.128870236 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 63.00217458305667,
            "unit": "iter/sec",
            "range": "stddev: 0.000422951141764904",
            "extra": "mean: 15.872468000000309 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.0303133150027666,
            "unit": "iter/sec",
            "range": "stddev: 0.004982412777259841",
            "extra": "mean: 329.99888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 86.6768945402232,
            "unit": "iter/sec",
            "range": "stddev: 0.0004534173093293373",
            "extra": "mean: 11.537099999999896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.305427764002178,
            "unit": "iter/sec",
            "range": "stddev: 0.019775603004965635",
            "extra": "mean: 3.2740965879999995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 172.4228304380012,
            "unit": "iter/sec",
            "range": "stddev: 0.00017714207879553567",
            "extra": "mean: 5.799696000000267 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.967275508872301,
            "unit": "iter/sec",
            "range": "stddev: 0.0034857087887142546",
            "extra": "mean: 337.0094880000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2543375724057994,
            "unit": "iter/sec",
            "range": "stddev: 0.017754921914148018",
            "extra": "mean: 3.9317824359999984 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3737.3676971932855,
            "unit": "iter/sec",
            "range": "stddev: 0.000016129622436643085",
            "extra": "mean: 267.5679999993008 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 34.49208099761638,
            "unit": "iter/sec",
            "range": "stddev: 0.0002479078074000128",
            "extra": "mean: 28.99216199999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3862.0774886960658,
            "unit": "iter/sec",
            "range": "stddev: 0.000008070828333239284",
            "extra": "mean: 258.92800000178795 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 33.59191042300386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357368544063083",
            "extra": "mean: 29.769072000001415 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3760.218393487573,
            "unit": "iter/sec",
            "range": "stddev: 0.000014329950104928071",
            "extra": "mean: 265.9419999997681 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 34.46697987500549,
            "unit": "iter/sec",
            "range": "stddev: 0.0007376587510364975",
            "extra": "mean: 29.013276000000587 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3839.6264811189803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071738218569276064",
            "extra": "mean: 260.4420000011487 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 34.44394148635852,
            "unit": "iter/sec",
            "range": "stddev: 0.00018265481302265135",
            "extra": "mean: 29.032681999998427 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1819.3131001499748,
            "unit": "iter/sec",
            "range": "stddev: 0.00004048827324062045",
            "extra": "mean: 549.6579999987715 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 17.048648454754936,
            "unit": "iter/sec",
            "range": "stddev: 0.0003349109641806979",
            "extra": "mean: 58.65567599999963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6131.508596494501,
            "unit": "iter/sec",
            "range": "stddev: 0.000014836924209214203",
            "extra": "mean: 163.09199999682275 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 168.5680581735144,
            "unit": "iter/sec",
            "range": "stddev: 0.00019459298078442543",
            "extra": "mean: 5.932321999999885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11593.665221132496,
            "unit": "iter/sec",
            "range": "stddev: 0.00001284839017102556",
            "extra": "mean: 86.25400000141781 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 176.13777073698202,
            "unit": "iter/sec",
            "range": "stddev: 0.00007135277065398056",
            "extra": "mean: 5.677373999999418 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 5992.83257221812,
            "unit": "iter/sec",
            "range": "stddev: 0.000025023653411301324",
            "extra": "mean: 166.8660000007094 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 36.50906191425885,
            "unit": "iter/sec",
            "range": "stddev: 0.0003207862006853282",
            "extra": "mean: 27.390459999999166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 66.49071450522035,
            "unit": "iter/sec",
            "range": "stddev: 0.00041591637961224263",
            "extra": "mean: 15.039694000001873 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6415.76738993504,
            "unit": "iter/sec",
            "range": "stddev: 0.000013225968017293856",
            "extra": "mean: 155.86600000006 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 172.8665245703463,
            "unit": "iter/sec",
            "range": "stddev: 0.00010184835369461291",
            "extra": "mean: 5.784810000001244 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12156.281150518738,
            "unit": "iter/sec",
            "range": "stddev: 0.000004613211464668626",
            "extra": "mean: 82.26199999967321 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 177.8656196784625,
            "unit": "iter/sec",
            "range": "stddev: 0.00011873006809577511",
            "extra": "mean: 5.622222000000647 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6271.637148138893,
            "unit": "iter/sec",
            "range": "stddev: 0.000005408698547785175",
            "extra": "mean: 159.44800000056603 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 30.786001088097713,
            "unit": "iter/sec",
            "range": "stddev: 0.0004689436962260044",
            "extra": "mean: 32.48229600000286 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 65.96500134502904,
            "unit": "iter/sec",
            "range": "stddev: 0.000499972503823442",
            "extra": "mean: 15.159553999999389 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6762.239653742757,
            "unit": "iter/sec",
            "range": "stddev: 0.000005667640602810628",
            "extra": "mean: 147.8800000006686 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 166.36272197364428,
            "unit": "iter/sec",
            "range": "stddev: 0.00035637960957509763",
            "extra": "mean: 6.010961999999155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11709.601873482727,
            "unit": "iter/sec",
            "range": "stddev: 0.000018779422247824512",
            "extra": "mean: 85.40000000039072 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 173.9354282115948,
            "unit": "iter/sec",
            "range": "stddev: 0.0001722551472384612",
            "extra": "mean: 5.749260000001185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 6256.725980444361,
            "unit": "iter/sec",
            "range": "stddev: 0.00000933397128552176",
            "extra": "mean: 159.82799999960662 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 26.42648445358886,
            "unit": "iter/sec",
            "range": "stddev: 0.00046621315321556354",
            "extra": "mean: 37.84082600000147 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 65.23657653059095,
            "unit": "iter/sec",
            "range": "stddev: 0.00026943044386209663",
            "extra": "mean: 15.328824000000623 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3102.7956188388134,
            "unit": "iter/sec",
            "range": "stddev: 0.00002215681159340195",
            "extra": "mean: 322.2900000014306 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 81.69395353639892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005173973521588253",
            "extra": "mean: 12.240808000000243 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5486.908236924235,
            "unit": "iter/sec",
            "range": "stddev: 0.000007958782569431778",
            "extra": "mean: 182.25200000074437 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 87.40613891772344,
            "unit": "iter/sec",
            "range": "stddev: 0.0002128868560514141",
            "extra": "mean: 11.44084399999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 2941.591754145394,
            "unit": "iter/sec",
            "range": "stddev: 0.000021831208623008986",
            "extra": "mean: 339.95199999822034 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.1507175596984,
            "unit": "iter/sec",
            "range": "stddev: 0.0008545393522348106",
            "extra": "mean: 76.0414779999985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 33.882865983575904,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378604782148141",
            "extra": "mean: 29.513441999998804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1625.0227503197866,
            "unit": "iter/sec",
            "range": "stddev: 0.00000439065826366992",
            "extra": "mean: 615.3759999995145 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 43.41847551654246,
            "unit": "iter/sec",
            "range": "stddev: 0.00029687778756598283",
            "extra": "mean: 23.03166999999803 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2646.7209773880986,
            "unit": "iter/sec",
            "range": "stddev: 0.000014356222692028164",
            "extra": "mean: 377.8259999990041 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 43.448560944557634,
            "unit": "iter/sec",
            "range": "stddev: 0.0003932219451130255",
            "extra": "mean: 23.015722000000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1487.7410140436032,
            "unit": "iter/sec",
            "range": "stddev: 0.00002397629349854688",
            "extra": "mean: 672.1600000003036 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.592661666106403,
            "unit": "iter/sec",
            "range": "stddev: 0.0018140516417466605",
            "extra": "mean: 151.68380400000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.522247354763387,
            "unit": "iter/sec",
            "range": "stddev: 0.0003035675876628357",
            "extra": "mean: 60.524454000000105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 796.9448322903822,
            "unit": "iter/sec",
            "range": "stddev: 0.00001268979984104446",
            "extra": "mean: 1.2547920000008617 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 406.80702051293116,
            "unit": "iter/sec",
            "range": "stddev: 0.000035247561193301285",
            "extra": "mean: 2.458167999999432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 815.6354044485117,
            "unit": "iter/sec",
            "range": "stddev: 0.000009502027152122466",
            "extra": "mean: 1.2260380000009263 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 42.93519782005489,
            "unit": "iter/sec",
            "range": "stddev: 0.00025746091864569314",
            "extra": "mean: 23.290914000002658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 738.384473842021,
            "unit": "iter/sec",
            "range": "stddev: 0.00005760043029328323",
            "extra": "mean: 1.3543079999999466 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 397.60640941503635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000633505891850778",
            "extra": "mean: 2.515050000001793 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 760.7721533042835,
            "unit": "iter/sec",
            "range": "stddev: 0.000021427826069091742",
            "extra": "mean: 1.314454000000751 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 34.30910015258493,
            "unit": "iter/sec",
            "range": "stddev: 0.0005502115606114031",
            "extra": "mean: 29.146786000001157 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 626.0846917282074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000386070734456149",
            "extra": "mean: 1.5972280000005412 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 361.33668557431025,
            "unit": "iter/sec",
            "range": "stddev: 0.000018734735652486733",
            "extra": "mean: 2.76750199999924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 622.330978018518,
            "unit": "iter/sec",
            "range": "stddev: 0.000023426747960937685",
            "extra": "mean: 1.6068619999987277 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 28.893271548732308,
            "unit": "iter/sec",
            "range": "stddev: 0.0003516300550729806",
            "extra": "mean: 34.61013399999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 317.7298330519202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000455963438218024",
            "extra": "mean: 3.1473280000011528 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 178.61908159069444,
            "unit": "iter/sec",
            "range": "stddev: 0.00008556367003740529",
            "extra": "mean: 5.598506000000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 310.94546700605105,
            "unit": "iter/sec",
            "range": "stddev: 0.00007706320308489515",
            "extra": "mean: 3.215997999998308 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.523269327348787,
            "unit": "iter/sec",
            "range": "stddev: 0.0003069667758882099",
            "extra": "mean: 68.85502000000088 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 162.24779391675526,
            "unit": "iter/sec",
            "range": "stddev: 0.00008746806342667693",
            "extra": "mean: 6.163411999999653 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 88.79518431749149,
            "unit": "iter/sec",
            "range": "stddev: 0.00017479326308438725",
            "extra": "mean: 11.26187200000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 163.21952471123086,
            "unit": "iter/sec",
            "range": "stddev: 0.00004170036594475718",
            "extra": "mean: 6.126718000001574 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.226359899402635,
            "unit": "iter/sec",
            "range": "stddev: 0.0009948545279701646",
            "extra": "mean: 138.38225800000146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 47.18622856706817,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480257434162313",
            "extra": "mean: 21.192624000001388 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 32.08313072836346,
            "unit": "iter/sec",
            "range": "stddev: 0.0007435560421838577",
            "extra": "mean: 31.169027999999347 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.541151104334823,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461626434439413",
            "extra": "mean: 51.17405800000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.874455189278061,
            "unit": "iter/sec",
            "range": "stddev: 0.0011002878818527422",
            "extra": "mean: 101.27140999999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 441.0746342388542,
            "unit": "iter/sec",
            "range": "stddev: 0.00004439804275030717",
            "extra": "mean: 2.267190000000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 198.7142393854554,
            "unit": "iter/sec",
            "range": "stddev: 0.00013860548390763272",
            "extra": "mean: 5.032352000000628 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 55.48301459635654,
            "unit": "iter/sec",
            "range": "stddev: 0.00024294616858655575",
            "extra": "mean: 18.02353400000129 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 76.99226335541675,
            "unit": "iter/sec",
            "range": "stddev: 0.000260006262659104",
            "extra": "mean: 12.9883180000013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 122.06703433259578,
            "unit": "iter/sec",
            "range": "stddev: 0.0001672220946841613",
            "extra": "mean: 8.192219999998542 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 117.23626295814202,
            "unit": "iter/sec",
            "range": "stddev: 0.0001206462404292945",
            "extra": "mean: 8.529783999998699 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 95.84893594263289,
            "unit": "iter/sec",
            "range": "stddev: 0.00008446926174674646",
            "extra": "mean: 10.433083999998871 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 14.298035515691211,
            "unit": "iter/sec",
            "range": "stddev: 0.001088074796679846",
            "extra": "mean: 69.9396779999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.3727476177259906,
            "unit": "iter/sec",
            "range": "stddev: 0.06438310218784363",
            "extra": "mean: 2.682780392000002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.295940566538182,
            "unit": "iter/sec",
            "range": "stddev: 0.0007035957654291527",
            "extra": "mean: 81.32765400000153 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.318594225679098,
            "unit": "iter/sec",
            "range": "stddev: 0.000806050646066927",
            "extra": "mean: 81.17809399999715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.352709991869805,
            "unit": "iter/sec",
            "range": "stddev: 0.000983253842370695",
            "extra": "mean: 80.9538960000009 msec\nrounds: 5"
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
        "date": 1631726567573,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.47078583152941067,
            "unit": "iter/sec",
            "range": "stddev: 0.021795536393694744",
            "extra": "mean: 2.124108104 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 63.51981055851732,
            "unit": "iter/sec",
            "range": "stddev: 0.000477366187951788",
            "extra": "mean: 15.74311999999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.199661951875192,
            "unit": "iter/sec",
            "range": "stddev: 0.0029585867482090343",
            "extra": "mean: 312.5330159999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 92.00563074460304,
            "unit": "iter/sec",
            "range": "stddev: 0.00030114609510938133",
            "extra": "mean: 10.868899999999826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.2888527564131304,
            "unit": "iter/sec",
            "range": "stddev: 0.21251505730168813",
            "extra": "mean: 3.461971463999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 186.0502499398727,
            "unit": "iter/sec",
            "range": "stddev: 0.00007771555133864032",
            "extra": "mean: 5.374892000000955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.0114385397375667,
            "unit": "iter/sec",
            "range": "stddev: 0.002001740861578209",
            "extra": "mean: 332.06721199999834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.25774504663120823,
            "unit": "iter/sec",
            "range": "stddev: 0.018272047844219184",
            "extra": "mean: 3.8798029799999973 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3805.899143664709,
            "unit": "iter/sec",
            "range": "stddev: 0.000017547898732918798",
            "extra": "mean: 262.75000000055115 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 34.005087977282294,
            "unit": "iter/sec",
            "range": "stddev: 0.0003702799244917738",
            "extra": "mean: 29.407364000001053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3774.040638867024,
            "unit": "iter/sec",
            "range": "stddev: 0.000009066706679972479",
            "extra": "mean: 264.96800000018084 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 34.768432849743334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002792908026935568",
            "extra": "mean: 28.761722000000418 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3922.6762066072256,
            "unit": "iter/sec",
            "range": "stddev: 0.000005497551273123218",
            "extra": "mean: 254.92800000051827 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 35.42684996707828,
            "unit": "iter/sec",
            "range": "stddev: 0.0002790565871299002",
            "extra": "mean: 28.22717799999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3865.9594538146976,
            "unit": "iter/sec",
            "range": "stddev: 0.000007651151548823773",
            "extra": "mean: 258.66800000017065 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 34.37136694651257,
            "unit": "iter/sec",
            "range": "stddev: 0.0005349884689233707",
            "extra": "mean: 29.093984000000997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1892.9713972029301,
            "unit": "iter/sec",
            "range": "stddev: 0.000046359801011887103",
            "extra": "mean: 528.2699999997931 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 17.46165324907422,
            "unit": "iter/sec",
            "range": "stddev: 0.00010477683704039215",
            "extra": "mean: 57.26834599999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6574.621959177572,
            "unit": "iter/sec",
            "range": "stddev: 0.000011539278575673237",
            "extra": "mean: 152.1000000013828 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 173.28661988157484,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864301661295344",
            "extra": "mean: 5.7707860000004985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12258.507404132319,
            "unit": "iter/sec",
            "range": "stddev: 0.000007996991934490078",
            "extra": "mean: 81.57600000004095 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 174.68145962434468,
            "unit": "iter/sec",
            "range": "stddev: 0.00012187029018440841",
            "extra": "mean: 5.724705999998605 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 6405.493351167983,
            "unit": "iter/sec",
            "range": "stddev: 0.000004643434073113734",
            "extra": "mean: 156.11599999829195 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 37.28569116858691,
            "unit": "iter/sec",
            "range": "stddev: 0.00024456047575138745",
            "extra": "mean: 26.81993999999918 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 67.6143676744846,
            "unit": "iter/sec",
            "range": "stddev: 0.00017840365111309618",
            "extra": "mean: 14.789756000001262 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6897.40795395975,
            "unit": "iter/sec",
            "range": "stddev: 0.00000758117866777785",
            "extra": "mean: 144.98200000275574 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 175.07720029148558,
            "unit": "iter/sec",
            "range": "stddev: 0.00008122614314417605",
            "extra": "mean: 5.711765999999443 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12833.016785258986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040795502190551366",
            "extra": "mean: 77.9240000019854 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 181.61470730427743,
            "unit": "iter/sec",
            "range": "stddev: 0.00008598138967288335",
            "extra": "mean: 5.506162000000359 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6460.1152483882315,
            "unit": "iter/sec",
            "range": "stddev: 0.000004826590926448189",
            "extra": "mean: 154.79600000162463 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 31.31798743597387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005455393481431897",
            "extra": "mean: 31.930532000001225 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 67.92090311979861,
            "unit": "iter/sec",
            "range": "stddev: 0.0002220210822657556",
            "extra": "mean: 14.723007999999709 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6693.619641736014,
            "unit": "iter/sec",
            "range": "stddev: 0.000004043108953842056",
            "extra": "mean: 149.39600000047903 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 173.39520999198032,
            "unit": "iter/sec",
            "range": "stddev: 0.00014256249759445216",
            "extra": "mean: 5.767172000000755 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 12196.906864669312,
            "unit": "iter/sec",
            "range": "stddev: 0.000007714452022275939",
            "extra": "mean: 81.98799999831863 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 175.48791783232426,
            "unit": "iter/sec",
            "range": "stddev: 0.00016231200069820065",
            "extra": "mean: 5.6983980000006795 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 5954.720306752837,
            "unit": "iter/sec",
            "range": "stddev: 0.000018331291007250586",
            "extra": "mean: 167.9340000009688 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 26.641918810671093,
            "unit": "iter/sec",
            "range": "stddev: 0.00022889604863445573",
            "extra": "mean: 37.534833999999364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 67.27407984868191,
            "unit": "iter/sec",
            "range": "stddev: 0.00011509012307856913",
            "extra": "mean: 14.864565999999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3244.498952023029,
            "unit": "iter/sec",
            "range": "stddev: 0.000006471173000557448",
            "extra": "mean: 308.2140000003619 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 87.6121040677555,
            "unit": "iter/sec",
            "range": "stddev: 0.00030722598843417907",
            "extra": "mean: 11.413948000000573 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5290.4454555320335,
            "unit": "iter/sec",
            "range": "stddev: 0.000006059632828773244",
            "extra": "mean: 189.01999999911823 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 88.6201296370809,
            "unit": "iter/sec",
            "range": "stddev: 0.0001442397062873329",
            "extra": "mean: 11.28411799999867 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3077.9080074674757,
            "unit": "iter/sec",
            "range": "stddev: 0.000008111706356311394",
            "extra": "mean: 324.89600000189967 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.32129443550872,
            "unit": "iter/sec",
            "range": "stddev: 0.0013029033563552346",
            "extra": "mean: 75.06778000000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 34.36463669946523,
            "unit": "iter/sec",
            "range": "stddev: 0.00029190786280846735",
            "extra": "mean: 29.09968200000094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1659.8171545478265,
            "unit": "iter/sec",
            "range": "stddev: 0.000015925510352445438",
            "extra": "mean: 602.4759999979779 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 44.32241007536931,
            "unit": "iter/sec",
            "range": "stddev: 0.00028904920619431823",
            "extra": "mean: 22.56195000000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2664.19429436128,
            "unit": "iter/sec",
            "range": "stddev: 0.00001883799538162972",
            "extra": "mean: 375.3480000000309 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 45.93700511489953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004137039784901984",
            "extra": "mean: 21.76894200000106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1592.9756147261755,
            "unit": "iter/sec",
            "range": "stddev: 0.00001050554520298269",
            "extra": "mean: 627.7560000012272 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.928129373338317,
            "unit": "iter/sec",
            "range": "stddev: 0.0008918868899873844",
            "extra": "mean: 144.33910600000104 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 18.062497324492167,
            "unit": "iter/sec",
            "range": "stddev: 0.0010948647314612554",
            "extra": "mean: 55.36333000000127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 806.8368124143178,
            "unit": "iter/sec",
            "range": "stddev: 0.000041417957698160386",
            "extra": "mean: 1.2394079999990029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 422.78256884368136,
            "unit": "iter/sec",
            "range": "stddev: 0.00018067698005044334",
            "extra": "mean: 2.365282000000662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 822.5388814124115,
            "unit": "iter/sec",
            "range": "stddev: 0.000045091675728114",
            "extra": "mean: 1.2157480000007581 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 42.35738501431146,
            "unit": "iter/sec",
            "range": "stddev: 0.00035793048749884897",
            "extra": "mean: 23.608634000000848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 763.7797320355484,
            "unit": "iter/sec",
            "range": "stddev: 0.00005512094583620581",
            "extra": "mean: 1.3092779999999493 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 399.86084842491755,
            "unit": "iter/sec",
            "range": "stddev: 0.00008461772213824511",
            "extra": "mean: 2.5008699999989403 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 773.5220314547879,
            "unit": "iter/sec",
            "range": "stddev: 0.000017721446612644808",
            "extra": "mean: 1.2927879999995184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 35.09580241568623,
            "unit": "iter/sec",
            "range": "stddev: 0.00053383143353413",
            "extra": "mean: 28.493435999999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 662.092928715009,
            "unit": "iter/sec",
            "range": "stddev: 0.000019353864472489475",
            "extra": "mean: 1.510362000000214 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 375.61958450476305,
            "unit": "iter/sec",
            "range": "stddev: 0.00002772153981983899",
            "extra": "mean: 2.6622679999991306 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 636.4173268437276,
            "unit": "iter/sec",
            "range": "stddev: 0.00006347041381363688",
            "extra": "mean: 1.57129599999962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 29.768351027443657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004921264305339031",
            "extra": "mean: 33.59272399999896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 336.1706133096887,
            "unit": "iter/sec",
            "range": "stddev: 0.00003823783924191789",
            "extra": "mean: 2.9746799999998075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 181.6444636584327,
            "unit": "iter/sec",
            "range": "stddev: 0.00009876716053300059",
            "extra": "mean: 5.505259999998771 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 320.68056111433094,
            "unit": "iter/sec",
            "range": "stddev: 0.00008894458482786068",
            "extra": "mean: 3.1183679999969627 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.369409114378197,
            "unit": "iter/sec",
            "range": "stddev: 0.0009198330054035679",
            "extra": "mean: 69.59228400000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 160.71413647969294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008274420112740014",
            "extra": "mean: 6.222228000001451 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 89.33049119442815,
            "unit": "iter/sec",
            "range": "stddev: 0.0003971235049459447",
            "extra": "mean: 11.194385999999668 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 160.29293855106184,
            "unit": "iter/sec",
            "range": "stddev: 0.00008881833071166804",
            "extra": "mean: 6.238577999999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.412052513265482,
            "unit": "iter/sec",
            "range": "stddev: 0.0023757884187530364",
            "extra": "mean: 134.91539599999896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 49.056231686696876,
            "unit": "iter/sec",
            "range": "stddev: 0.00013168342473770384",
            "extra": "mean: 20.384769999999435 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 33.71659435693514,
            "unit": "iter/sec",
            "range": "stddev: 0.00028111972464090975",
            "extra": "mean: 29.658985999999462 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 20.1504626989548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006562852973504498",
            "extra": "mean: 49.62665199999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.210999272078325,
            "unit": "iter/sec",
            "range": "stddev: 0.00038696312973062564",
            "extra": "mean: 97.9336079999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 450.98635225122035,
            "unit": "iter/sec",
            "range": "stddev: 0.000056978357907111346",
            "extra": "mean: 2.217361999998957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 208.00061900985648,
            "unit": "iter/sec",
            "range": "stddev: 0.00013522354184756198",
            "extra": "mean: 4.807677999999669 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 55.62681969234337,
            "unit": "iter/sec",
            "range": "stddev: 0.0004208084451992177",
            "extra": "mean: 17.97693999999865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 79.83886600707298,
            "unit": "iter/sec",
            "range": "stddev: 0.00015014755632348348",
            "extra": "mean: 12.525227999999515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 127.6693099320732,
            "unit": "iter/sec",
            "range": "stddev: 0.00011960679299287473",
            "extra": "mean: 7.832735999999159 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 119.2849392744232,
            "unit": "iter/sec",
            "range": "stddev: 0.00023520465135714526",
            "extra": "mean: 8.383287999999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 100.0272874440095,
            "unit": "iter/sec",
            "range": "stddev: 0.00017152973727705794",
            "extra": "mean: 9.99727200000052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 14.6723030612322,
            "unit": "iter/sec",
            "range": "stddev: 0.0008482967702580693",
            "extra": "mean: 68.15562600000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.9037933277866089,
            "unit": "iter/sec",
            "range": "stddev: 0.017170126189565",
            "extra": "mean: 1.1064476460000003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.016985864854828,
            "unit": "iter/sec",
            "range": "stddev: 0.001207521809265294",
            "extra": "mean: 76.8227000000013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 13.190144640487928,
            "unit": "iter/sec",
            "range": "stddev: 0.0004378268678936523",
            "extra": "mean: 75.81418000000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.854170972814096,
            "unit": "iter/sec",
            "range": "stddev: 0.0003692320513566322",
            "extra": "mean: 77.79575999999906 msec\nrounds: 5"
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
        "date": 1631728159263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.4673955405974691,
            "unit": "iter/sec",
            "range": "stddev: 0.013854181086413083",
            "extra": "mean: 2.1395154919999997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 63.097883999841436,
            "unit": "iter/sec",
            "range": "stddev: 0.000392917178448601",
            "extra": "mean: 15.848391999999764 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.061820145034991,
            "unit": "iter/sec",
            "range": "stddev: 0.003235919360440596",
            "extra": "mean: 326.603116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 91.5946183398859,
            "unit": "iter/sec",
            "range": "stddev: 0.00006563638107071519",
            "extra": "mean: 10.917671999999357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3072045100335303,
            "unit": "iter/sec",
            "range": "stddev: 0.008701184362492172",
            "extra": "mean: 3.255160544 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 181.6354895403494,
            "unit": "iter/sec",
            "range": "stddev: 0.00005035322551835199",
            "extra": "mean: 5.5055319999996755 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.9805836080467714,
            "unit": "iter/sec",
            "range": "stddev: 0.0012116225630443747",
            "extra": "mean: 335.5047639999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2539163094302028,
            "unit": "iter/sec",
            "range": "stddev: 0.008555922487850845",
            "extra": "mean: 3.9383055079999996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3664.6950607422973,
            "unit": "iter/sec",
            "range": "stddev: 0.00001710645579759259",
            "extra": "mean: 272.8739999986374 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 33.08592122586002,
            "unit": "iter/sec",
            "range": "stddev: 0.0013936853155498542",
            "extra": "mean: 30.224336000002268 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3797.0838396090453,
            "unit": "iter/sec",
            "range": "stddev: 0.000008427505560005024",
            "extra": "mean: 263.3600000001479 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 33.90798092825073,
            "unit": "iter/sec",
            "range": "stddev: 0.0008902494957706707",
            "extra": "mean: 29.4915820000017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3739.26830000311,
            "unit": "iter/sec",
            "range": "stddev: 0.000008916483049425093",
            "extra": "mean: 267.43199999827993 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 34.17290464563441,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535731033923547",
            "extra": "mean: 29.262950000000956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3757.3644343113147,
            "unit": "iter/sec",
            "range": "stddev: 0.000011708009225450575",
            "extra": "mean: 266.14399999857596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 34.08440594118317,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207478145979706",
            "extra": "mean: 29.338930000001255 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1487.5728166911424,
            "unit": "iter/sec",
            "range": "stddev: 0.00018845846858093695",
            "extra": "mean: 672.2359999992022 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.97059128900211,
            "unit": "iter/sec",
            "range": "stddev: 0.0012537616961882316",
            "extra": "mean: 58.9254660000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6416.83778234505,
            "unit": "iter/sec",
            "range": "stddev: 0.000022524939509413894",
            "extra": "mean: 155.83999999989828 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 175.2511699768072,
            "unit": "iter/sec",
            "range": "stddev: 0.00010870155785472586",
            "extra": "mean: 5.706096000000116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12400.79365063374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045084919887675985",
            "extra": "mean: 80.64000000103988 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 175.36445117067728,
            "unit": "iter/sec",
            "range": "stddev: 0.00018271608262565591",
            "extra": "mean: 5.702409999998963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 6434.757988748542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049669839932765324",
            "extra": "mean: 155.40600000008453 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 36.90425280180739,
            "unit": "iter/sec",
            "range": "stddev: 0.000524973693930614",
            "extra": "mean: 27.09714800000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 67.90072154023143,
            "unit": "iter/sec",
            "range": "stddev: 0.00029156087980130744",
            "extra": "mean: 14.72738399999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6667.200042644477,
            "unit": "iter/sec",
            "range": "stddev: 0.000004567813480817388",
            "extra": "mean: 149.988000000576 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 172.6997004351239,
            "unit": "iter/sec",
            "range": "stddev: 0.0001935323698239464",
            "extra": "mean: 5.790397999999186 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12203.456019113808,
            "unit": "iter/sec",
            "range": "stddev: 0.000003636183441092562",
            "extra": "mean: 81.94399999752022 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 178.80918092163785,
            "unit": "iter/sec",
            "range": "stddev: 0.00007346738820863029",
            "extra": "mean: 5.592553999999836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6313.68934125429,
            "unit": "iter/sec",
            "range": "stddev: 0.000004567311024987208",
            "extra": "mean: 158.38599999938197 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 30.45785774657525,
            "unit": "iter/sec",
            "range": "stddev: 0.001293412863222607",
            "extra": "mean: 32.83225000000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 66.83856654801384,
            "unit": "iter/sec",
            "range": "stddev: 0.000346270735075493",
            "extra": "mean: 14.961422000001221 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6780.1206861244755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037813357428282745",
            "extra": "mean: 147.49000000051637 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 172.25591165064023,
            "unit": "iter/sec",
            "range": "stddev: 0.00017063628345022984",
            "extra": "mean: 5.805315999999721 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 12426.373735601843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049315849376774665",
            "extra": "mean: 80.47400000009475 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 177.249024244131,
            "unit": "iter/sec",
            "range": "stddev: 0.0001592183024964825",
            "extra": "mean: 5.641779999999699 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 6456.361452928722,
            "unit": "iter/sec",
            "range": "stddev: 0.000004991060009737728",
            "extra": "mean: 154.88600000026054 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 25.573723469691355,
            "unit": "iter/sec",
            "range": "stddev: 0.0016363374225783383",
            "extra": "mean: 39.102636000000075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 66.7430830472202,
            "unit": "iter/sec",
            "range": "stddev: 0.00047681223702947153",
            "extra": "mean: 14.98282599999925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3292.4628939642625,
            "unit": "iter/sec",
            "range": "stddev: 0.000007846188883848587",
            "extra": "mean: 303.72399999805566 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 85.17093892614093,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590895070827669",
            "extra": "mean: 11.741093999999066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5531.095820680061,
            "unit": "iter/sec",
            "range": "stddev: 0.000007294246364607802",
            "extra": "mean: 180.79600000078244 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 88.55740866852621,
            "unit": "iter/sec",
            "range": "stddev: 0.0001354859684618212",
            "extra": "mean: 11.292110000000548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3108.312248613834,
            "unit": "iter/sec",
            "range": "stddev: 0.000007411327141615879",
            "extra": "mean: 321.7180000001463 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 12.791197691260633,
            "unit": "iter/sec",
            "range": "stddev: 0.0017520905062574084",
            "extra": "mean: 78.17876199999886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 31.923092418054857,
            "unit": "iter/sec",
            "range": "stddev: 0.000830706235428721",
            "extra": "mean: 31.32528600000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1538.7314082752475,
            "unit": "iter/sec",
            "range": "stddev: 0.00008528214309041677",
            "extra": "mean: 649.8860000010609 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 43.32301754521096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001577110532575983",
            "extra": "mean: 23.082418000002463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2052.090259140896,
            "unit": "iter/sec",
            "range": "stddev: 0.000008512612407560777",
            "extra": "mean: 487.3079999993024 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 43.099004619869504,
            "unit": "iter/sec",
            "range": "stddev: 0.0004837718458303652",
            "extra": "mean: 23.20239199999946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1525.4552721244518,
            "unit": "iter/sec",
            "range": "stddev: 0.000017257614841706733",
            "extra": "mean: 655.5420000006507 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.394397893583117,
            "unit": "iter/sec",
            "range": "stddev: 0.004287101221927652",
            "extra": "mean: 156.38688999999772 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.495303011952842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006564354936857559",
            "extra": "mean: 60.62331800000152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 800.7174428291484,
            "unit": "iter/sec",
            "range": "stddev: 0.000008137481182492624",
            "extra": "mean: 1.2488799999994171 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 408.8100194427294,
            "unit": "iter/sec",
            "range": "stddev: 0.000010738760635310064",
            "extra": "mean: 2.446124000001646 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 782.0638351792237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275431681538935",
            "extra": "mean: 1.2786679999987882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 40.23749133083158,
            "unit": "iter/sec",
            "range": "stddev: 0.0010575160673877344",
            "extra": "mean: 24.85244400000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 709.6819063752882,
            "unit": "iter/sec",
            "range": "stddev: 0.00021591860948122415",
            "extra": "mean: 1.4090820000012627 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 394.3226995016789,
            "unit": "iter/sec",
            "range": "stddev: 0.000022402916775430995",
            "extra": "mean: 2.5359939999998464 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 760.0944341321958,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807554784903901",
            "extra": "mean: 1.3156260000005204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 34.54139561745663,
            "unit": "iter/sec",
            "range": "stddev: 0.00025814488276991015",
            "extra": "mean: 28.950770000000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 637.8413407940546,
            "unit": "iter/sec",
            "range": "stddev: 0.000014971600448257133",
            "extra": "mean: 1.5677879999986999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 364.66059579704466,
            "unit": "iter/sec",
            "range": "stddev: 0.000029183176316757406",
            "extra": "mean: 2.7422760000001745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 579.3984453582215,
            "unit": "iter/sec",
            "range": "stddev: 0.00014152801461162807",
            "extra": "mean: 1.7259279999996124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 28.658069284092022,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707509999540364",
            "extra": "mean: 34.89418600000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 321.67000774578673,
            "unit": "iter/sec",
            "range": "stddev: 0.00001945401063853689",
            "extra": "mean: 3.1087760000002618 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 172.84674439696516,
            "unit": "iter/sec",
            "range": "stddev: 0.00040776832009025544",
            "extra": "mean: 5.785472000001164 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 321.7447315908415,
            "unit": "iter/sec",
            "range": "stddev: 0.00001875405102817833",
            "extra": "mean: 3.108054000000493 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.31545156875162,
            "unit": "iter/sec",
            "range": "stddev: 0.00035212100412912114",
            "extra": "mean: 69.85458999999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 161.09228300307095,
            "unit": "iter/sec",
            "range": "stddev: 0.000044479861400056244",
            "extra": "mean: 6.207621999999446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 81.55215276480689,
            "unit": "iter/sec",
            "range": "stddev: 0.0009712901501451894",
            "extra": "mean: 12.262091999998574 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 152.10157221311053,
            "unit": "iter/sec",
            "range": "stddev: 0.00035781514051241175",
            "extra": "mean: 6.574554000000035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.055517197844392,
            "unit": "iter/sec",
            "range": "stddev: 0.002947356464262333",
            "extra": "mean: 141.73305399999887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 46.66819427222092,
            "unit": "iter/sec",
            "range": "stddev: 0.0010067551034626944",
            "extra": "mean: 21.427870000002258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 31.96290257675279,
            "unit": "iter/sec",
            "range": "stddev: 0.0007948584591616665",
            "extra": "mean: 31.28627000000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.285726876538796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007718762653239573",
            "extra": "mean: 51.851818000000094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.829776386152416,
            "unit": "iter/sec",
            "range": "stddev: 0.001506637706823887",
            "extra": "mean: 101.73171399999887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 447.3044094369642,
            "unit": "iter/sec",
            "range": "stddev: 0.000040633935694819615",
            "extra": "mean: 2.235614000002215 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 204.46753382720297,
            "unit": "iter/sec",
            "range": "stddev: 0.00010758904205449613",
            "extra": "mean: 4.890751999997747 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 53.38706777295895,
            "unit": "iter/sec",
            "range": "stddev: 0.0005894448898098626",
            "extra": "mean: 18.731128000000577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 76.41503450521111,
            "unit": "iter/sec",
            "range": "stddev: 0.0004601814214523569",
            "extra": "mean: 13.08642999999961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 120.5808330496015,
            "unit": "iter/sec",
            "range": "stddev: 0.000555178369778951",
            "extra": "mean: 8.293191999997589 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 114.87790661208905,
            "unit": "iter/sec",
            "range": "stddev: 0.0003762372767678553",
            "extra": "mean: 8.70489399999883 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 90.69908130899947,
            "unit": "iter/sec",
            "range": "stddev: 0.0008657808570876799",
            "extra": "mean: 11.025470000000723 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 13.897453966977002,
            "unit": "iter/sec",
            "range": "stddev: 0.0014118779309581604",
            "extra": "mean: 71.95562599999903 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8640859432321983,
            "unit": "iter/sec",
            "range": "stddev: 0.008890795577154623",
            "extra": "mean: 1.1572922899999991 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.312257465457336,
            "unit": "iter/sec",
            "range": "stddev: 0.0009062977010503898",
            "extra": "mean: 81.21987399999966 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.302344989345789,
            "unit": "iter/sec",
            "range": "stddev: 0.0011887999738297839",
            "extra": "mean: 81.28531600000089 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.066448289694367,
            "unit": "iter/sec",
            "range": "stddev: 0.0011599682638188645",
            "extra": "mean: 82.87442800000008 msec\nrounds: 5"
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
        "date": 1631731265551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.5250647260414409,
            "unit": "iter/sec",
            "range": "stddev: 0.05446711309513082",
            "extra": "mean: 1.9045271000000001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 68.71762197446573,
            "unit": "iter/sec",
            "range": "stddev: 0.00044553281531198123",
            "extra": "mean: 14.552308000000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.072230976715073,
            "unit": "iter/sec",
            "range": "stddev: 0.0073650872825382005",
            "extra": "mean: 325.49635999999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 91.66870782323488,
            "unit": "iter/sec",
            "range": "stddev: 0.0003379870531844978",
            "extra": "mean: 10.908847999999125 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3010021552512841,
            "unit": "iter/sec",
            "range": "stddev: 0.021418466842347814",
            "extra": "mean: 3.322235348 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 170.8113470661459,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217986391294714",
            "extra": "mean: 5.854411999998774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.0059901086332372,
            "unit": "iter/sec",
            "range": "stddev: 0.0031200042262326338",
            "extra": "mean: 332.66909199999986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.24611168420841972,
            "unit": "iter/sec",
            "range": "stddev: 0.05763008922317517",
            "extra": "mean: 4.0631959559999995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3642.2972697237874,
            "unit": "iter/sec",
            "range": "stddev: 0.00001544486063403616",
            "extra": "mean: 274.5520000007673 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 32.818765717728844,
            "unit": "iter/sec",
            "range": "stddev: 0.0009297692595053472",
            "extra": "mean: 30.470371999998633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3881.8670227888942,
            "unit": "iter/sec",
            "range": "stddev: 0.000012271316964108441",
            "extra": "mean: 257.6079999982994 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 33.35423532080008,
            "unit": "iter/sec",
            "range": "stddev: 0.0008274185798021242",
            "extra": "mean: 29.981200000000854 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3719.9889888387443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000109800828773023",
            "extra": "mean: 268.81799999955547 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 32.97932229471588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005160571701367986",
            "extra": "mean: 30.322029999998673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3856.53682990734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000130609513431036",
            "extra": "mean: 259.3000000013035 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 33.20964732284254,
            "unit": "iter/sec",
            "range": "stddev: 0.00041302710815262575",
            "extra": "mean: 30.11173200000144 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1965.1925102577225,
            "unit": "iter/sec",
            "range": "stddev: 0.000032315140877799",
            "extra": "mean: 508.85600000015074 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.617904748762182,
            "unit": "iter/sec",
            "range": "stddev: 0.0008699962850619188",
            "extra": "mean: 60.176058000000694 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 5514.199062577244,
            "unit": "iter/sec",
            "range": "stddev: 0.00001315935408967778",
            "extra": "mean: 181.35000000029322 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 161.85661187497197,
            "unit": "iter/sec",
            "range": "stddev: 0.00021539151868006277",
            "extra": "mean: 6.178307999999788 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11335.555102033217,
            "unit": "iter/sec",
            "range": "stddev: 0.00000601037186947448",
            "extra": "mean: 88.21800000077928 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 177.74510427773814,
            "unit": "iter/sec",
            "range": "stddev: 0.000040553987225448074",
            "extra": "mean: 5.626033999999436 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 5871.163194791639,
            "unit": "iter/sec",
            "range": "stddev: 0.00002415741045448848",
            "extra": "mean: 170.32400000175585 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 34.96571960849671,
            "unit": "iter/sec",
            "range": "stddev: 0.0006000201549958243",
            "extra": "mean: 28.599439999999277 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 69.06782335932074,
            "unit": "iter/sec",
            "range": "stddev: 0.000477630533488168",
            "extra": "mean: 14.47852199999943 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6426.32221582307,
            "unit": "iter/sec",
            "range": "stddev: 0.000005262708426591425",
            "extra": "mean: 155.6099999993421 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 172.70447259678696,
            "unit": "iter/sec",
            "range": "stddev: 0.00014844457676263157",
            "extra": "mean: 5.790238000000726 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11221.833198599743,
            "unit": "iter/sec",
            "range": "stddev: 0.00000523517621659537",
            "extra": "mean: 89.11200000056851 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 161.8704977744726,
            "unit": "iter/sec",
            "range": "stddev: 0.0003868927761918419",
            "extra": "mean: 6.1777779999988525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6047.265426550836,
            "unit": "iter/sec",
            "range": "stddev: 0.000007090774287144652",
            "extra": "mean: 165.36400000063622 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 29.876441792266455,
            "unit": "iter/sec",
            "range": "stddev: 0.0009409324694784825",
            "extra": "mean: 33.471187999999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 68.35944709785382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005289460049298141",
            "extra": "mean: 14.628556000000117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 5881.66098104455,
            "unit": "iter/sec",
            "range": "stddev: 0.000004101969039386478",
            "extra": "mean: 170.02000000047698 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 171.84776212974495,
            "unit": "iter/sec",
            "range": "stddev: 0.0001876701837813197",
            "extra": "mean: 5.8191039999985605 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 10753.38193871449,
            "unit": "iter/sec",
            "range": "stddev: 0.000017376225999905125",
            "extra": "mean: 92.99399999918023 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 176.3152234089709,
            "unit": "iter/sec",
            "range": "stddev: 0.00006047905960049011",
            "extra": "mean: 5.671660000001566 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 5713.82860799229,
            "unit": "iter/sec",
            "range": "stddev: 0.000014243680351694545",
            "extra": "mean: 175.01400000014655 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 25.487717672753295,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480541846400098",
            "extra": "mean: 39.234584000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 70.28973710795597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002865613651025285",
            "extra": "mean: 14.226827999998477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 2995.8597218489735,
            "unit": "iter/sec",
            "range": "stddev: 0.00003601885242444735",
            "extra": "mean: 333.794000001717 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 88.32007619549708,
            "unit": "iter/sec",
            "range": "stddev: 0.00019179838484795406",
            "extra": "mean: 11.32245399999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5411.196848519232,
            "unit": "iter/sec",
            "range": "stddev: 0.000012953946116072336",
            "extra": "mean: 184.80199999999058 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 86.40092621793269,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960504287352187",
            "extra": "mean: 11.573949999999513 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3016.573052357881,
            "unit": "iter/sec",
            "range": "stddev: 0.000023744579803742807",
            "extra": "mean: 331.5019999990909 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 12.899226214117542,
            "unit": "iter/sec",
            "range": "stddev: 0.0017251967628793068",
            "extra": "mean: 77.52402999999731 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 34.96673684257666,
            "unit": "iter/sec",
            "range": "stddev: 0.0009862070719011446",
            "extra": "mean: 28.598607999999786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1532.4684081631392,
            "unit": "iter/sec",
            "range": "stddev: 0.000039863795855136914",
            "extra": "mean: 652.5420000002669 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 43.621814571518854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148822771896317",
            "extra": "mean: 22.92430999999965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2987.875202408963,
            "unit": "iter/sec",
            "range": "stddev: 0.000017064440511228953",
            "extra": "mean: 334.6860000021934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 43.81627101450259,
            "unit": "iter/sec",
            "range": "stddev: 0.00013119585576479203",
            "extra": "mean: 22.822572000000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1463.280440624189,
            "unit": "iter/sec",
            "range": "stddev: 0.000026032912438532025",
            "extra": "mean: 683.3959999994477 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.465797528128117,
            "unit": "iter/sec",
            "range": "stddev: 0.0018542956896535408",
            "extra": "mean: 154.65996200000177 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.699608871780693,
            "unit": "iter/sec",
            "range": "stddev: 0.0007497307833288785",
            "extra": "mean: 59.881642000000284 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 847.9103250049633,
            "unit": "iter/sec",
            "range": "stddev: 0.00004261227874840043",
            "extra": "mean: 1.1793699999986984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 413.60700881884077,
            "unit": "iter/sec",
            "range": "stddev: 0.00010060787633217247",
            "extra": "mean: 2.4177540000005138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 843.3708520910176,
            "unit": "iter/sec",
            "range": "stddev: 0.00001949907613242879",
            "extra": "mean: 1.1857180000004064 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 39.96492678025896,
            "unit": "iter/sec",
            "range": "stddev: 0.0011005893785820927",
            "extra": "mean: 25.021939999999177 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 749.3286015730671,
            "unit": "iter/sec",
            "range": "stddev: 0.00007136943582483835",
            "extra": "mean: 1.3345279999998638 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 412.8788473083611,
            "unit": "iter/sec",
            "range": "stddev: 0.00002352703487327431",
            "extra": "mean: 2.4220179999997526 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 806.8615506268187,
            "unit": "iter/sec",
            "range": "stddev: 0.000033711543274562574",
            "extra": "mean: 1.2393699999995533 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 33.09575654814369,
            "unit": "iter/sec",
            "range": "stddev: 0.0010067974675815764",
            "extra": "mean: 30.215354000000616 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 682.3926323437731,
            "unit": "iter/sec",
            "range": "stddev: 0.00004508852315086075",
            "extra": "mean: 1.4654319999988277 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 373.3959842007381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000848916984756769",
            "extra": "mean: 2.67812200000094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 666.7208932994879,
            "unit": "iter/sec",
            "range": "stddev: 0.00008718556141954785",
            "extra": "mean: 1.499877999999626 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 28.09454533726329,
            "unit": "iter/sec",
            "range": "stddev: 0.0009018063505657705",
            "extra": "mean: 35.59409800000025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 328.0680596872347,
            "unit": "iter/sec",
            "range": "stddev: 0.00009496566942773758",
            "extra": "mean: 3.048148000001447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 188.40183247157412,
            "unit": "iter/sec",
            "range": "stddev: 0.0001009183225680184",
            "extra": "mean: 5.30780400000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 342.74722871728363,
            "unit": "iter/sec",
            "range": "stddev: 0.00011044027512746369",
            "extra": "mean: 2.917601999999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.950316783793642,
            "unit": "iter/sec",
            "range": "stddev: 0.0017500925915519018",
            "extra": "mean: 71.68295999999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 160.70866091117716,
            "unit": "iter/sec",
            "range": "stddev: 0.0001746973684697847",
            "extra": "mean: 6.2224399999990965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 89.34461791595785,
            "unit": "iter/sec",
            "range": "stddev: 0.00047724655025607325",
            "extra": "mean: 11.192615999999589 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 170.49292573698483,
            "unit": "iter/sec",
            "range": "stddev: 0.0003197951121103498",
            "extra": "mean: 5.865346000001637 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.987464516607215,
            "unit": "iter/sec",
            "range": "stddev: 0.0010172437925701546",
            "extra": "mean: 143.11342799999693 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 49.90217178243621,
            "unit": "iter/sec",
            "range": "stddev: 0.0006426168339456532",
            "extra": "mean: 20.0392080000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 33.269119496820345,
            "unit": "iter/sec",
            "range": "stddev: 0.000581609919343539",
            "extra": "mean: 30.057904000001372 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.464651997326335,
            "unit": "iter/sec",
            "range": "stddev: 0.00013895788192998877",
            "extra": "mean: 51.37518 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.845586352615326,
            "unit": "iter/sec",
            "range": "stddev: 0.0019361979142597033",
            "extra": "mean: 101.56835399999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 432.2077778382592,
            "unit": "iter/sec",
            "range": "stddev: 0.0001683862171324054",
            "extra": "mean: 2.3137020000001485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 209.5518775010143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001209180892994131",
            "extra": "mean: 4.7720879999997114 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 55.21400783796135,
            "unit": "iter/sec",
            "range": "stddev: 0.0005485436053130121",
            "extra": "mean: 18.111345999999454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 76.54942153132552,
            "unit": "iter/sec",
            "range": "stddev: 0.0003040269120150165",
            "extra": "mean: 13.063456000000997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 137.83236552043542,
            "unit": "iter/sec",
            "range": "stddev: 0.00022143082768527812",
            "extra": "mean: 7.255189999998493 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 127.50541770518903,
            "unit": "iter/sec",
            "range": "stddev: 0.00014408430945045048",
            "extra": "mean: 7.842804000000569 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 101.88950002211429,
            "unit": "iter/sec",
            "range": "stddev: 0.0003086374335381197",
            "extra": "mean: 9.814553999999589 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 15.634243746615786,
            "unit": "iter/sec",
            "range": "stddev: 0.002049100613000426",
            "extra": "mean: 63.96215999999753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.9523123369166304,
            "unit": "iter/sec",
            "range": "stddev: 0.012296264206466782",
            "extra": "mean: 1.050075654000001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.178635939675855,
            "unit": "iter/sec",
            "range": "stddev: 0.0026008553101382033",
            "extra": "mean: 82.11100200000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.167629933313886,
            "unit": "iter/sec",
            "range": "stddev: 0.0017493703130203543",
            "extra": "mean: 82.18527399999971 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.298089959052431,
            "unit": "iter/sec",
            "range": "stddev: 0.0005757118970019602",
            "extra": "mean: 81.31343999999899 msec\nrounds: 5"
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
        "date": 1631771648705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.4612918376058915,
            "unit": "iter/sec",
            "range": "stddev: 0.028335107961663525",
            "extra": "mean: 2.167825048 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 62.89466401670631,
            "unit": "iter/sec",
            "range": "stddev: 0.0003399056695614538",
            "extra": "mean: 15.899599999999621 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.047238065083786,
            "unit": "iter/sec",
            "range": "stddev: 0.0030035558330561807",
            "extra": "mean: 328.1660240000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 86.58518423596124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005805724518094847",
            "extra": "mean: 11.54931999999917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.2690667315801998,
            "unit": "iter/sec",
            "range": "stddev: 0.1966552757653235",
            "extra": "mean: 3.7165501439999975 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 174.37278110639267,
            "unit": "iter/sec",
            "range": "stddev: 0.000184195548807057",
            "extra": "mean: 5.73483999999894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.963363627286046,
            "unit": "iter/sec",
            "range": "stddev: 0.0015711856272015272",
            "extra": "mean: 337.45436799999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.25459244468222736,
            "unit": "iter/sec",
            "range": "stddev: 0.011227002302791465",
            "extra": "mean: 3.9278463320000014 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3752.514184507084,
            "unit": "iter/sec",
            "range": "stddev: 0.000017426999741821025",
            "extra": "mean: 266.4879999997538 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 33.70232208325025,
            "unit": "iter/sec",
            "range": "stddev: 0.00013484686548123655",
            "extra": "mean: 29.671546000000713 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3814.726369690158,
            "unit": "iter/sec",
            "range": "stddev: 0.000013939941534531484",
            "extra": "mean: 262.14199999913035 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 34.09924558147241,
            "unit": "iter/sec",
            "range": "stddev: 0.0007230611421046247",
            "extra": "mean: 29.326161999998703 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3655.4784656086636,
            "unit": "iter/sec",
            "range": "stddev: 0.00001947306524578515",
            "extra": "mean: 273.56199999758246 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 33.807542719717944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006986285692833192",
            "extra": "mean: 29.579198000000133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3828.3373530724775,
            "unit": "iter/sec",
            "range": "stddev: 0.000008336570039337356",
            "extra": "mean: 261.2100000010286 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 33.819273455137406,
            "unit": "iter/sec",
            "range": "stddev: 0.0004614982531603537",
            "extra": "mean: 29.56893799999989 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1809.4438493389825,
            "unit": "iter/sec",
            "range": "stddev: 0.00004557314812400725",
            "extra": "mean: 552.6559999998426 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.847943235100985,
            "unit": "iter/sec",
            "range": "stddev: 0.0012446271833695616",
            "extra": "mean: 59.354425999999876 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6539.281463811547,
            "unit": "iter/sec",
            "range": "stddev: 0.000011229192757632371",
            "extra": "mean: 152.92199999862532 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 168.02588405136106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482633618359898",
            "extra": "mean: 5.951464000000897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12513.765141490001,
            "unit": "iter/sec",
            "range": "stddev: 0.000004804942245757448",
            "extra": "mean: 79.91200000105891 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 173.6414380706683,
            "unit": "iter/sec",
            "range": "stddev: 0.00023204839027719112",
            "extra": "mean: 5.758993999997983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 6527.244719431677,
            "unit": "iter/sec",
            "range": "stddev: 0.000006453512997862825",
            "extra": "mean: 153.20400000064183 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 37.30137947961698,
            "unit": "iter/sec",
            "range": "stddev: 0.00036155214188154396",
            "extra": "mean: 26.808659999999236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 67.38498158569833,
            "unit": "iter/sec",
            "range": "stddev: 0.00014609432798515828",
            "extra": "mean: 14.840102000001707 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6779.569090545359,
            "unit": "iter/sec",
            "range": "stddev: 0.000005088552838300547",
            "extra": "mean: 147.50200000094082 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 172.25063017889815,
            "unit": "iter/sec",
            "range": "stddev: 0.00029957010553494567",
            "extra": "mean: 5.80549400000109 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 10790.978741745606,
            "unit": "iter/sec",
            "range": "stddev: 0.00003170263947942955",
            "extra": "mean: 92.67000000022563 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 174.93435588292178,
            "unit": "iter/sec",
            "range": "stddev: 0.00027113816284510115",
            "extra": "mean: 5.716430000001083 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6014.6758089422365,
            "unit": "iter/sec",
            "range": "stddev: 0.000027365903055551595",
            "extra": "mean: 166.26000000087515 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 30.66081413046567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565522628870686",
            "extra": "mean: 32.614919999999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 67.35330215054536,
            "unit": "iter/sec",
            "range": "stddev: 0.00043285824477684614",
            "extra": "mean: 14.847082000001137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6502.03513704376,
            "unit": "iter/sec",
            "range": "stddev: 0.000009320744068799988",
            "extra": "mean: 153.79799999891475 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 166.73419401522398,
            "unit": "iter/sec",
            "range": "stddev: 0.0001847357998595762",
            "extra": "mean: 5.997570000000678 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 7917.029530413921,
            "unit": "iter/sec",
            "range": "stddev: 0.00003970123549599276",
            "extra": "mean: 126.3100000016948 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 171.89461210086392,
            "unit": "iter/sec",
            "range": "stddev: 0.0004759135373898797",
            "extra": "mean: 5.8175180000012015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 6435.006435011723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057430479741277974",
            "extra": "mean: 155.3999999998723 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 26.629654996839907,
            "unit": "iter/sec",
            "range": "stddev: 0.0006385590958939801",
            "extra": "mean: 37.55212000000256 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 68.15309475024287,
            "unit": "iter/sec",
            "range": "stddev: 0.00026223623151675683",
            "extra": "mean: 14.672848000001295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 2575.7661616401806,
            "unit": "iter/sec",
            "range": "stddev: 0.00011230775142247045",
            "extra": "mean: 388.2340000006934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 86.30398853884132,
            "unit": "iter/sec",
            "range": "stddev: 0.000267072682616864",
            "extra": "mean: 11.586949999998524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5609.909343924786,
            "unit": "iter/sec",
            "range": "stddev: 0.000005386337344601355",
            "extra": "mean: 178.25599999810038 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 88.5835316127971,
            "unit": "iter/sec",
            "range": "stddev: 0.0004281246950967472",
            "extra": "mean: 11.288780000000997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3115.1871604368166,
            "unit": "iter/sec",
            "range": "stddev: 0.00001287705206925869",
            "extra": "mean: 321.008000000802 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.129296710052959,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414075312943535",
            "extra": "mean: 76.16554199999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 33.716687575508125,
            "unit": "iter/sec",
            "range": "stddev: 0.0003485446387932192",
            "extra": "mean: 29.658904000000348 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1564.1961752318814,
            "unit": "iter/sec",
            "range": "stddev: 0.000016918437574537767",
            "extra": "mean: 639.3059999982141 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 42.01672904470128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004945324371874823",
            "extra": "mean: 23.800044000000753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2678.1649213976903,
            "unit": "iter/sec",
            "range": "stddev: 0.000013779704278468731",
            "extra": "mean: 373.38999999974476 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 43.68053593571367,
            "unit": "iter/sec",
            "range": "stddev: 0.000654448822726251",
            "extra": "mean: 22.893492000000606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1537.1088826458595,
            "unit": "iter/sec",
            "range": "stddev: 0.00004067995783905696",
            "extra": "mean: 650.5719999995563 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.500388209684267,
            "unit": "iter/sec",
            "range": "stddev: 0.0017024650808538733",
            "extra": "mean: 153.83696600000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.292671647531925,
            "unit": "iter/sec",
            "range": "stddev: 0.0009311044057311492",
            "extra": "mean: 61.377287999999915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 789.0193751586675,
            "unit": "iter/sec",
            "range": "stddev: 0.000018624649794785768",
            "extra": "mean: 1.2673960000017814 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 403.3393269558491,
            "unit": "iter/sec",
            "range": "stddev: 0.000012707528084205888",
            "extra": "mean: 2.4793019999992794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 770.8709454109351,
            "unit": "iter/sec",
            "range": "stddev: 0.00004703800410338733",
            "extra": "mean: 1.2972340000010263 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 42.146859890352644,
            "unit": "iter/sec",
            "range": "stddev: 0.0004490130200214443",
            "extra": "mean: 23.726559999998926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 754.9152532132771,
            "unit": "iter/sec",
            "range": "stddev: 0.00001552900898108244",
            "extra": "mean: 1.3246520000006967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 371.9607090464329,
            "unit": "iter/sec",
            "range": "stddev: 0.0001692063297582054",
            "extra": "mean: 2.6884559999996327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 753.7749047228764,
            "unit": "iter/sec",
            "range": "stddev: 0.000024104132011202027",
            "extra": "mean: 1.3266559999999572 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 33.673167428780786,
            "unit": "iter/sec",
            "range": "stddev: 0.0007441870095807762",
            "extra": "mean: 29.69723599999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 638.3201456385369,
            "unit": "iter/sec",
            "range": "stddev: 0.000024512016848931774",
            "extra": "mean: 1.5666120000014416 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 357.56989776341334,
            "unit": "iter/sec",
            "range": "stddev: 0.000012771833460610073",
            "extra": "mean: 2.796656000001576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 601.289646032398,
            "unit": "iter/sec",
            "range": "stddev: 0.0001487630904140552",
            "extra": "mean: 1.6630920000011429 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 28.76829577306232,
            "unit": "iter/sec",
            "range": "stddev: 0.000416783043406653",
            "extra": "mean: 34.76048800000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 308.56616707735844,
            "unit": "iter/sec",
            "range": "stddev: 0.00013986246755232946",
            "extra": "mean: 3.240796000001183 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 176.9072995136419,
            "unit": "iter/sec",
            "range": "stddev: 0.0001223168294639709",
            "extra": "mean: 5.652677999999014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 306.19468592995497,
            "unit": "iter/sec",
            "range": "stddev: 0.00012416668365488343",
            "extra": "mean: 3.265896000000339 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.24272729313317,
            "unit": "iter/sec",
            "range": "stddev: 0.0007986357290201456",
            "extra": "mean: 70.21127200000024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 157.87049125829472,
            "unit": "iter/sec",
            "range": "stddev: 0.000386786442537473",
            "extra": "mean: 6.334305999997696 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 83.36829243730189,
            "unit": "iter/sec",
            "range": "stddev: 0.0002663874561974418",
            "extra": "mean: 11.994967999999064 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 154.39976012452294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482454198590702",
            "extra": "mean: 6.476694000000407 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.074477667260532,
            "unit": "iter/sec",
            "range": "stddev: 0.0016829947549905843",
            "extra": "mean: 141.3531920000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.484223185286986,
            "unit": "iter/sec",
            "range": "stddev: 0.0004921942518768366",
            "extra": "mean: 20.62526600000183 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 32.91084800131516,
            "unit": "iter/sec",
            "range": "stddev: 0.00027431728904677707",
            "extra": "mean: 30.38511799999924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.731466578743333,
            "unit": "iter/sec",
            "range": "stddev: 0.0002013306067131663",
            "extra": "mean: 50.68046999999979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.94861599530103,
            "unit": "iter/sec",
            "range": "stddev: 0.0007295116361508427",
            "extra": "mean: 100.51649400000201 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 432.03636018013816,
            "unit": "iter/sec",
            "range": "stddev: 0.0001677966176649965",
            "extra": "mean: 2.3146199999996497 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 208.29948466710317,
            "unit": "iter/sec",
            "range": "stddev: 0.000016762793623144327",
            "extra": "mean: 4.8007799999993495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 53.22285120987794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007280449999275398",
            "extra": "mean: 18.788921999999957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 77.41376107017743,
            "unit": "iter/sec",
            "range": "stddev: 0.00023593112586198876",
            "extra": "mean: 12.917599999998401 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 127.9748063677158,
            "unit": "iter/sec",
            "range": "stddev: 0.00006960233056570102",
            "extra": "mean: 7.8140380000002105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 113.09180091227941,
            "unit": "iter/sec",
            "range": "stddev: 0.0003309237946742113",
            "extra": "mean: 8.842374000000746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 94.70138192043487,
            "unit": "iter/sec",
            "range": "stddev: 0.0003713201441057062",
            "extra": "mean: 10.559508000001188 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 14.298955527074277,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895345659730874",
            "extra": "mean: 69.93517799999836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8735904746546043,
            "unit": "iter/sec",
            "range": "stddev: 0.003407589569671989",
            "extra": "mean: 1.144701126 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.182044378018109,
            "unit": "iter/sec",
            "range": "stddev: 0.001939296020022342",
            "extra": "mean: 82.08802800000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.198839621977495,
            "unit": "iter/sec",
            "range": "stddev: 0.001237116164735448",
            "extra": "mean: 81.97500999999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.155723472558593,
            "unit": "iter/sec",
            "range": "stddev: 0.0010914083849916",
            "extra": "mean: 82.26577399999998 msec\nrounds: 5"
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
        "date": 1634723767930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.36169890333702714,
            "unit": "iter/sec",
            "range": "stddev: 0.19034877249904633",
            "extra": "mean: 2.764730528 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 26.633950232439002,
            "unit": "iter/sec",
            "range": "stddev: 0.000232780463698099",
            "extra": "mean: 37.546064000001145 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 0.9526945249788883,
            "unit": "iter/sec",
            "range": "stddev: 0.00383453943495162",
            "extra": "mean: 1.0496543999999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 26.934274122390487,
            "unit": "iter/sec",
            "range": "stddev: 0.0004337356506907578",
            "extra": "mean: 37.127415999999016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.09721422939249975,
            "unit": "iter/sec",
            "range": "stddev: 0.025251763253073257",
            "extra": "mean: 10.286559964 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 53.9284037882687,
            "unit": "iter/sec",
            "range": "stddev: 0.00018377946751419897",
            "extra": "mean: 18.543104000002586 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 1.0277659734287876,
            "unit": "iter/sec",
            "range": "stddev: 0.0023179177618972433",
            "extra": "mean: 972.9841480000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.08081667332821804,
            "unit": "iter/sec",
            "range": "stddev: 0.03186864660611875",
            "extra": "mean: 12.373684275999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5118.8075225772245,
            "unit": "iter/sec",
            "range": "stddev: 0.000019299411131900862",
            "extra": "mean: 195.35800000085146 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 12.880866616462043,
            "unit": "iter/sec",
            "range": "stddev: 0.0004977734874107839",
            "extra": "mean: 77.63452800000096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5426.465959774128,
            "unit": "iter/sec",
            "range": "stddev: 0.000012403431781396791",
            "extra": "mean: 184.28200000016662 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 12.71054703398133,
            "unit": "iter/sec",
            "range": "stddev: 0.0010076581446604382",
            "extra": "mean: 78.67481999999882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5683.109797709636,
            "unit": "iter/sec",
            "range": "stddev: 0.00001650036666368683",
            "extra": "mean: 175.95999999912237 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 12.68919816525339,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412842722700068",
            "extra": "mean: 78.80718600000137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5496.13621623537,
            "unit": "iter/sec",
            "range": "stddev: 0.000009781668058968383",
            "extra": "mean: 181.9460000001527 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 12.793930313815574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005998553046191082",
            "extra": "mean: 78.16206400000056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2639.929461105674,
            "unit": "iter/sec",
            "range": "stddev: 0.00005772630136702125",
            "extra": "mean: 378.7979999970048 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 6.353874086649563,
            "unit": "iter/sec",
            "range": "stddev: 0.0011846176273072374",
            "extra": "mean: 157.38429600000245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9535.61552397125,
            "unit": "iter/sec",
            "range": "stddev: 0.00001853119396901569",
            "extra": "mean: 104.87000000011903 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 49.301496399016735,
            "unit": "iter/sec",
            "range": "stddev: 0.00023952869233300234",
            "extra": "mean: 20.283360000000812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 7655.092167156969,
            "unit": "iter/sec",
            "range": "stddev: 0.000008700719507285011",
            "extra": "mean: 130.63200000260622 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 53.537185804976794,
            "unit": "iter/sec",
            "range": "stddev: 0.00011712905032621089",
            "extra": "mean: 18.678606000000855 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9658.662854515884,
            "unit": "iter/sec",
            "range": "stddev: 0.000003854248307013983",
            "extra": "mean: 103.53400000212787 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 11.267052627817007,
            "unit": "iter/sec",
            "range": "stddev: 0.0007713001192984116",
            "extra": "mean: 88.75435599999946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 24.667464083555966,
            "unit": "iter/sec",
            "range": "stddev: 0.00048098452948208437",
            "extra": "mean: 40.53922999999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9291.089844644945,
            "unit": "iter/sec",
            "range": "stddev: 0.000009165814205193324",
            "extra": "mean: 107.63000000224565 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 49.85648312767281,
            "unit": "iter/sec",
            "range": "stddev: 0.0001562692396765467",
            "extra": "mean: 20.057571999998345 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 9933.051234877574,
            "unit": "iter/sec",
            "range": "stddev: 0.000003924764961133546",
            "extra": "mean: 100.67399999797999 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 53.67233063615297,
            "unit": "iter/sec",
            "range": "stddev: 0.00010591421660895488",
            "extra": "mean: 18.63157400000091 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 8965.715105665196,
            "unit": "iter/sec",
            "range": "stddev: 0.000004742354899917564",
            "extra": "mean: 111.5359999971588 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 9.479296552778075,
            "unit": "iter/sec",
            "range": "stddev: 0.0010568225179549656",
            "extra": "mean: 105.49305999999888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 24.52556881293257,
            "unit": "iter/sec",
            "range": "stddev: 0.00024550299841412946",
            "extra": "mean: 40.773774000001595 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9668.74867049269,
            "unit": "iter/sec",
            "range": "stddev: 0.000014378158088203905",
            "extra": "mean: 103.42600000058155 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 49.64388455851084,
            "unit": "iter/sec",
            "range": "stddev: 0.00014494844918251884",
            "extra": "mean: 20.143467999998848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 10021.646756629772,
            "unit": "iter/sec",
            "range": "stddev: 0.000004683692990134738",
            "extra": "mean: 99.78400000363763 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 53.61459406406753,
            "unit": "iter/sec",
            "range": "stddev: 0.000313809725264415",
            "extra": "mean: 18.651638000001185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9676.795045214527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074833448414291166",
            "extra": "mean: 103.34000000284504 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 8.16637906312866,
            "unit": "iter/sec",
            "range": "stddev: 0.0008803816534999483",
            "extra": "mean: 122.45329200000242 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 24.575550747921543,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659042155011454",
            "extra": "mean: 40.69084800000155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4933.009727867288,
            "unit": "iter/sec",
            "range": "stddev: 0.000019710241753981518",
            "extra": "mean: 202.7160000011463 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 24.77635990378391,
            "unit": "iter/sec",
            "range": "stddev: 0.0005469932024097419",
            "extra": "mean: 40.36105399999769 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5493.841403883615,
            "unit": "iter/sec",
            "range": "stddev: 0.000019028598741571146",
            "extra": "mean: 182.0219999967776 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 26.7327428783314,
            "unit": "iter/sec",
            "range": "stddev: 0.0003575941945121248",
            "extra": "mean: 37.40730999999869 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 4810.0048099444275,
            "unit": "iter/sec",
            "range": "stddev: 0.000016016769338312058",
            "extra": "mean: 207.9000000026099 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 4.144689794422599,
            "unit": "iter/sec",
            "range": "stddev: 0.001457175552686865",
            "extra": "mean: 241.27257999999756 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 12.38278394800912,
            "unit": "iter/sec",
            "range": "stddev: 0.00045507050303653253",
            "extra": "mean: 80.75728399999889 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2506.6803030086057,
            "unit": "iter/sec",
            "range": "stddev: 0.000026855056880543488",
            "extra": "mean: 398.9339999998265 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 12.461322547078137,
            "unit": "iter/sec",
            "range": "stddev: 0.0005732427715484003",
            "extra": "mean: 80.24830400000155 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2728.617191377147,
            "unit": "iter/sec",
            "range": "stddev: 0.00002452131889056373",
            "extra": "mean: 366.48600000035003 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 13.398688204111354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004680211564863627",
            "extra": "mean: 74.63417199999867 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2549.225545279097,
            "unit": "iter/sec",
            "range": "stddev: 0.000019521714316276293",
            "extra": "mean: 392.27600000003804 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 2.0444381446673265,
            "unit": "iter/sec",
            "range": "stddev: 0.004822144316887235",
            "extra": "mean: 489.1319419999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 6.108202432620958,
            "unit": "iter/sec",
            "range": "stddev: 0.0018461034214800446",
            "extra": "mean: 163.71428599999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 425.55038559162716,
            "unit": "iter/sec",
            "range": "stddev: 0.00003122982660725953",
            "extra": "mean: 2.3498979999976655 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 147.2419665519569,
            "unit": "iter/sec",
            "range": "stddev: 0.000035946850624354256",
            "extra": "mean: 6.7915419999985716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 425.6155891071518,
            "unit": "iter/sec",
            "range": "stddev: 0.000025955864852640334",
            "extra": "mean: 2.349538000000848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 13.432928648447243,
            "unit": "iter/sec",
            "range": "stddev: 0.00078514248964843",
            "extra": "mean: 74.44392999999991 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 409.8528628219661,
            "unit": "iter/sec",
            "range": "stddev: 0.00004682551280935604",
            "extra": "mean: 2.4399000000016713 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 151.582812570553,
            "unit": "iter/sec",
            "range": "stddev: 0.00010330949994982484",
            "extra": "mean: 6.597054000001208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 413.76205702629034,
            "unit": "iter/sec",
            "range": "stddev: 0.00005084448564201971",
            "extra": "mean: 2.4168480000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 10.861939663489482,
            "unit": "iter/sec",
            "range": "stddev: 0.0030448797816549716",
            "extra": "mean: 92.06458799999837 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 355.0748000575029,
            "unit": "iter/sec",
            "range": "stddev: 0.00005093595753818294",
            "extra": "mean: 2.816307999999026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 140.8033053857581,
            "unit": "iter/sec",
            "range": "stddev: 0.00024179953376216116",
            "extra": "mean: 7.1021059999998215 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 348.868932035104,
            "unit": "iter/sec",
            "range": "stddev: 0.0003300971440034678",
            "extra": "mean: 2.8664060000028257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 9.537127895841941,
            "unit": "iter/sec",
            "range": "stddev: 0.0011870598697365444",
            "extra": "mean: 104.85336999999618 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 190.2832975789214,
            "unit": "iter/sec",
            "range": "stddev: 0.00005812430748070938",
            "extra": "mean: 5.2553220000049805 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 72.2110086549079,
            "unit": "iter/sec",
            "range": "stddev: 0.00015854728957091362",
            "extra": "mean: 13.848304000002827 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 189.08359877514613,
            "unit": "iter/sec",
            "range": "stddev: 0.00020806672855256344",
            "extra": "mean: 5.288666000001285 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 4.783859075778165,
            "unit": "iter/sec",
            "range": "stddev: 0.0016412780412419306",
            "extra": "mean: 209.03625799999872 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 94.46121025970648,
            "unit": "iter/sec",
            "range": "stddev: 0.00015363222360463688",
            "extra": "mean: 10.586355999998887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 35.95339893006918,
            "unit": "iter/sec",
            "range": "stddev: 0.0004115834973852075",
            "extra": "mean: 27.81378200000063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 95.36070185476999,
            "unit": "iter/sec",
            "range": "stddev: 0.00016189066603733985",
            "extra": "mean: 10.486499999999523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 2.2917945764965704,
            "unit": "iter/sec",
            "range": "stddev: 0.007372396932178946",
            "extra": "mean: 436.33928199999673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 18.525670799720878,
            "unit": "iter/sec",
            "range": "stddev: 0.001180147587366401",
            "extra": "mean: 53.97915199999488 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 11.621186147508933,
            "unit": "iter/sec",
            "range": "stddev: 0.000975657275650951",
            "extra": "mean: 86.04973599999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 6.861570867998854,
            "unit": "iter/sec",
            "range": "stddev: 0.0014896443680862139",
            "extra": "mean: 145.73922199999743 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 3.424511593759372,
            "unit": "iter/sec",
            "range": "stddev: 0.0010224289295248008",
            "extra": "mean: 292.0124439999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 153.25571850729025,
            "unit": "iter/sec",
            "range": "stddev: 0.00007496612548606452",
            "extra": "mean: 6.525041999998393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 65.88854057276585,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508913107908923",
            "extra": "mean: 15.177146000003177 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 17.677084703679142,
            "unit": "iter/sec",
            "range": "stddev: 0.0009375536854381834",
            "extra": "mean: 56.570413999988894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 25.693563048172603,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437870691630612",
            "extra": "mean: 38.920254000004206 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 57.3745322254233,
            "unit": "iter/sec",
            "range": "stddev: 0.00008838527156892142",
            "extra": "mean: 17.429336000004696 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 54.757321574097645,
            "unit": "iter/sec",
            "range": "stddev: 0.00014133125669867116",
            "extra": "mean: 18.26239799999712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 49.38196983294325,
            "unit": "iter/sec",
            "range": "stddev: 0.0004788390231488368",
            "extra": "mean: 20.250306000002638 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 7.172249533750507,
            "unit": "iter/sec",
            "range": "stddev: 0.0006991195243286888",
            "extra": "mean: 139.42626999998996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.447906302301459,
            "unit": "iter/sec",
            "range": "stddev: 0.01880215809451843",
            "extra": "mean: 2.2326098 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 4.108595132535819,
            "unit": "iter/sec",
            "range": "stddev: 0.0007373137161839973",
            "extra": "mean: 243.39219800000137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 4.077554532663782,
            "unit": "iter/sec",
            "range": "stddev: 0.004295371390649829",
            "extra": "mean: 245.24503400000413 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 4.111459597512988,
            "unit": "iter/sec",
            "range": "stddev: 0.0008537961680180414",
            "extra": "mean: 243.22262599999704 msec\nrounds: 5"
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
        "date": 1640004442565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.6122370073486759,
            "unit": "iter/sec",
            "range": "stddev: 0.057244620991346466",
            "extra": "mean: 1.6333543840000002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 76.31115537836182,
            "unit": "iter/sec",
            "range": "stddev: 0.00046128837128199367",
            "extra": "mean: 13.104244000000449 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.106207955715498,
            "unit": "iter/sec",
            "range": "stddev: 0.008671408626207992",
            "extra": "mean: 243.53369600000008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 124.31298429230743,
            "unit": "iter/sec",
            "range": "stddev: 0.00020618478634438364",
            "extra": "mean: 8.044212000000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.4054862102590224,
            "unit": "iter/sec",
            "range": "stddev: 0.062255063986818064",
            "extra": "mean: 2.466175112 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 244.74028650272191,
            "unit": "iter/sec",
            "range": "stddev: 0.00011035877889719132",
            "extra": "mean: 4.085964000000786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.180671917590585,
            "unit": "iter/sec",
            "range": "stddev: 0.001552587362242626",
            "extra": "mean: 239.1960000000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.32073882748279187,
            "unit": "iter/sec",
            "range": "stddev: 0.06029486397678018",
            "extra": "mean: 3.117801507999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4321.147696826952,
            "unit": "iter/sec",
            "range": "stddev: 0.000016170579767129575",
            "extra": "mean: 231.420000000071 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 45.22824797164727,
            "unit": "iter/sec",
            "range": "stddev: 0.00026619914261762946",
            "extra": "mean: 22.11007600000073 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 4842.568110739129,
            "unit": "iter/sec",
            "range": "stddev: 0.000008567270276380462",
            "extra": "mean: 206.5019999992046 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 41.74841702527072,
            "unit": "iter/sec",
            "range": "stddev: 0.00015698682151655218",
            "extra": "mean: 23.953004000000533 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 4451.210284072197,
            "unit": "iter/sec",
            "range": "stddev: 0.000007637736574499592",
            "extra": "mean: 224.65800000020408 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 41.966017262133086,
            "unit": "iter/sec",
            "range": "stddev: 0.00022428448793859675",
            "extra": "mean: 23.828804000000332 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3989.6269698809137,
            "unit": "iter/sec",
            "range": "stddev: 0.00002894552210705885",
            "extra": "mean: 250.6499999998368 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 43.18194262432727,
            "unit": "iter/sec",
            "range": "stddev: 0.0012797948581199186",
            "extra": "mean: 23.157827999999085 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2413.4652050706204,
            "unit": "iter/sec",
            "range": "stddev: 0.000024801495317898817",
            "extra": "mean: 414.34200000026067 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 23.93137439079642,
            "unit": "iter/sec",
            "range": "stddev: 0.00015069320289974315",
            "extra": "mean: 41.78615000000093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 8744.010352836944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074559761256837216",
            "extra": "mean: 114.36400000093272 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 233.4117752506159,
            "unit": "iter/sec",
            "range": "stddev: 0.0001214921723004772",
            "extra": "mean: 4.284273999999755 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 18479.5062275456,
            "unit": "iter/sec",
            "range": "stddev: 0.00000410229569981352",
            "extra": "mean: 54.11400000014055 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 243.0797622485392,
            "unit": "iter/sec",
            "range": "stddev: 0.00007697572883728547",
            "extra": "mean: 4.113876000000118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 7174.321667906691,
            "unit": "iter/sec",
            "range": "stddev: 0.00001371921754299346",
            "extra": "mean: 139.38599999960388 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 46.02561877992502,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987002875975811",
            "extra": "mean: 21.727030000000127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 87.23999863207088,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438785939296161",
            "extra": "mean: 11.46263200000078 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 7859.4108585175,
            "unit": "iter/sec",
            "range": "stddev: 0.000004179943779331245",
            "extra": "mean: 127.2360000007211 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 220.6197384949833,
            "unit": "iter/sec",
            "range": "stddev: 0.0002506700268869471",
            "extra": "mean: 4.532686000000582 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15371.84492900886,
            "unit": "iter/sec",
            "range": "stddev: 0.000003804934953618638",
            "extra": "mean: 65.05399999923611 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 220.28052284022604,
            "unit": "iter/sec",
            "range": "stddev: 0.00011198782357898265",
            "extra": "mean: 4.539666000000011 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 7488.729462175535,
            "unit": "iter/sec",
            "range": "stddev: 0.000004503346533284031",
            "extra": "mean: 133.53399999971316 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 38.1135936019165,
            "unit": "iter/sec",
            "range": "stddev: 0.0009551820046834996",
            "extra": "mean: 26.2373580000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 82.49146667023705,
            "unit": "iter/sec",
            "range": "stddev: 0.00015290242012464613",
            "extra": "mean: 12.122465999999008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 7579.317558273695,
            "unit": "iter/sec",
            "range": "stddev: 0.000010869883624440784",
            "extra": "mean: 131.93799999953626 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 210.83933452359358,
            "unit": "iter/sec",
            "range": "stddev: 0.00006352223760147697",
            "extra": "mean: 4.742947999999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 15311.590874435886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037553095746247313",
            "extra": "mean: 65.30999999938558 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 216.15321631663312,
            "unit": "iter/sec",
            "range": "stddev: 0.000037459127992754736",
            "extra": "mean: 4.6263479999998935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 8472.422265535592,
            "unit": "iter/sec",
            "range": "stddev: 0.000003577729727219622",
            "extra": "mean: 118.02999999986241 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 35.534142839009625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006003186885062806",
            "extra": "mean: 28.141948000000525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 93.3799585691721,
            "unit": "iter/sec",
            "range": "stddev: 0.00026647578141408986",
            "extra": "mean: 10.708936000000904 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4280.56537703355,
            "unit": "iter/sec",
            "range": "stddev: 0.000009498617268833435",
            "extra": "mean: 233.6140000022624 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 117.84003921717903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002495673538339521",
            "extra": "mean: 8.486079999998992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7175.248263643093,
            "unit": "iter/sec",
            "range": "stddev: 0.000006073608482929586",
            "extra": "mean: 139.3679999989672 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 120.72678490327789,
            "unit": "iter/sec",
            "range": "stddev: 0.00017444361891572098",
            "extra": "mean: 8.2831659999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 4105.899356165854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022438961634910584",
            "extra": "mean: 243.55200000172772 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.02686082645821,
            "unit": "iter/sec",
            "range": "stddev: 0.0010852955729045094",
            "extra": "mean: 58.73073199999908 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.56764019499607,
            "unit": "iter/sec",
            "range": "stddev: 0.0004722846706926449",
            "extra": "mean: 21.945398000000296 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2144.2570363810155,
            "unit": "iter/sec",
            "range": "stddev: 0.000025181492608594268",
            "extra": "mean: 466.36199999966266 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 58.827944968100596,
            "unit": "iter/sec",
            "range": "stddev: 0.00025469282406472005",
            "extra": "mean: 16.998724000001175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3408.293058659622,
            "unit": "iter/sec",
            "range": "stddev: 0.000011310425278729054",
            "extra": "mean: 293.4020000009241 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 59.79003890776793,
            "unit": "iter/sec",
            "range": "stddev: 0.00032754710871886564",
            "extra": "mean: 16.725194000000556 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2007.2501876805916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028248327396406325",
            "extra": "mean: 498.1939999993302 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.829477882952565,
            "unit": "iter/sec",
            "range": "stddev: 0.001758415198539087",
            "extra": "mean: 113.25697999999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.9505344835215,
            "unit": "iter/sec",
            "range": "stddev: 0.0004970471375536202",
            "extra": "mean: 43.571970000001556 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1115.516160484919,
            "unit": "iter/sec",
            "range": "stddev: 0.000013614122448113876",
            "extra": "mean: 896.44599999815 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 552.5197663940888,
            "unit": "iter/sec",
            "range": "stddev: 0.00009756961309741867",
            "extra": "mean: 1.8098900000018148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1106.5961986213995,
            "unit": "iter/sec",
            "range": "stddev: 0.000040434627116515495",
            "extra": "mean: 903.6719999994602 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 57.86695461263544,
            "unit": "iter/sec",
            "range": "stddev: 0.00022108726365382115",
            "extra": "mean: 17.281019999999216 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1031.9193286739637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000635221911620631",
            "extra": "mean: 969.0680000005613 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 550.7693697325028,
            "unit": "iter/sec",
            "range": "stddev: 0.00003119887610209526",
            "extra": "mean: 1.8156420000002527 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1053.8873689499214,
            "unit": "iter/sec",
            "range": "stddev: 0.000005090581498491007",
            "extra": "mean: 948.8679999992655 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 45.47148978514575,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365291954636154",
            "extra": "mean: 21.991802000001144 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 769.3657041389696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003355135124067087",
            "extra": "mean: 1.299771999999848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 473.37188474004654,
            "unit": "iter/sec",
            "range": "stddev: 0.00015924762016931562",
            "extra": "mean: 2.1125039999981254 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 832.7615037666167,
            "unit": "iter/sec",
            "range": "stddev: 0.00007561793755191346",
            "extra": "mean: 1.2008240000011483 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 37.618199203261035,
            "unit": "iter/sec",
            "range": "stddev: 0.0015166021426768728",
            "extra": "mean: 26.58287800000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 455.6173980235878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000501954891397648",
            "extra": "mean: 2.194824000000608 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 236.0262989943341,
            "unit": "iter/sec",
            "range": "stddev: 0.00026191247217463326",
            "extra": "mean: 4.23681600000009 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 403.25442450761835,
            "unit": "iter/sec",
            "range": "stddev: 0.00013150910360061165",
            "extra": "mean: 2.479823999999553 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.928270067157293,
            "unit": "iter/sec",
            "range": "stddev: 0.0019410370473043309",
            "extra": "mean: 55.77783000000068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 196.97811927656107,
            "unit": "iter/sec",
            "range": "stddev: 0.00005931395518928436",
            "extra": "mean: 5.076705999999831 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 111.17944941268784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000951392916729275",
            "extra": "mean: 8.994467999999642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 197.57098330288625,
            "unit": "iter/sec",
            "range": "stddev: 0.000018225898330921728",
            "extra": "mean: 5.061471999999867 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.284296600149926,
            "unit": "iter/sec",
            "range": "stddev: 0.0012968513310032776",
            "extra": "mean: 107.70875200000093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 62.552184159634095,
            "unit": "iter/sec",
            "range": "stddev: 0.00037468027773197984",
            "extra": "mean: 15.986652000000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 42.61387364543131,
            "unit": "iter/sec",
            "range": "stddev: 0.00017224133499310417",
            "extra": "mean: 23.466536000000815 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.215655634027144,
            "unit": "iter/sec",
            "range": "stddev: 0.00034917431580815936",
            "extra": "mean: 39.65790200000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.239520363551035,
            "unit": "iter/sec",
            "range": "stddev: 0.002000769023207011",
            "extra": "mean: 81.70254799999952 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 546.9699505646471,
            "unit": "iter/sec",
            "range": "stddev: 0.00006831178983163523",
            "extra": "mean: 1.8282540000006975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 264.42239044187767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002708382813981627",
            "extra": "mean: 3.781827999999905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 71.79475545054324,
            "unit": "iter/sec",
            "range": "stddev: 0.00038785698121865023",
            "extra": "mean: 13.92859400000134 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 106.29140980461602,
            "unit": "iter/sec",
            "range": "stddev: 0.00014078060189393857",
            "extra": "mean: 9.408098000000109 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 173.33161388371798,
            "unit": "iter/sec",
            "range": "stddev: 0.00010517227804934385",
            "extra": "mean: 5.769288000000188 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.43883247060862,
            "unit": "iter/sec",
            "range": "stddev: 0.00009568174867501636",
            "extra": "mean: 6.311583999998902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 136.33588581378712,
            "unit": "iter/sec",
            "range": "stddev: 0.00009729541063153963",
            "extra": "mean: 7.334826000000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.163026944578586,
            "unit": "iter/sec",
            "range": "stddev: 0.00043641044427146974",
            "extra": "mean: 49.59572800000046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1888648992332151,
            "unit": "iter/sec",
            "range": "stddev: 0.011007618529872865",
            "extra": "mean: 841.1384679999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.064422188436776,
            "unit": "iter/sec",
            "range": "stddev: 0.00385007642377334",
            "extra": "mean: 62.249360000000706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.58712476855161,
            "unit": "iter/sec",
            "range": "stddev: 0.0007583279921512268",
            "extra": "mean: 60.2877239999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.63374268204067,
            "unit": "iter/sec",
            "range": "stddev: 0.0036150583582290202",
            "extra": "mean: 63.96420999999919 msec\nrounds: 5"
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
        "date": 1647590142792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.4845761908555351,
            "unit": "iter/sec",
            "range": "stddev: 0.02142375954495121",
            "extra": "mean: 2.063658964 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 60.40310616933194,
            "unit": "iter/sec",
            "range": "stddev: 0.0009195887544985364",
            "extra": "mean: 16.55543999999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.116005649692178,
            "unit": "iter/sec",
            "range": "stddev: 0.0033276990631964636",
            "extra": "mean: 320.92367999999857 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 87.6842245557895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003164283486034347",
            "extra": "mean: 11.404560000000288 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3105178280755494,
            "unit": "iter/sec",
            "range": "stddev: 0.005039674791641823",
            "extra": "mean: 3.2204270079999997 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 171.30914448208898,
            "unit": "iter/sec",
            "range": "stddev: 0.0004302425092898038",
            "extra": "mean: 5.83740000000148 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.064577262405762,
            "unit": "iter/sec",
            "range": "stddev: 0.0012748696513765305",
            "extra": "mean: 326.30928000000154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.25690076824530583,
            "unit": "iter/sec",
            "range": "stddev: 0.013424566907403568",
            "extra": "mean: 3.89255356 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4249.351973836737,
            "unit": "iter/sec",
            "range": "stddev: 0.000019405048312210706",
            "extra": "mean: 235.32999999929416 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 34.51588911342839,
            "unit": "iter/sec",
            "range": "stddev: 0.0003720068639544645",
            "extra": "mean: 28.9721639999982 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 4328.704505290945,
            "unit": "iter/sec",
            "range": "stddev: 0.000009126953489935909",
            "extra": "mean: 231.0160000013184 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 33.87686275317622,
            "unit": "iter/sec",
            "range": "stddev: 0.0008021163944980939",
            "extra": "mean: 29.518671999999242 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3225.3070492423767,
            "unit": "iter/sec",
            "range": "stddev: 0.00014721075578733183",
            "extra": "mean: 310.04799999891475 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 33.64348137362274,
            "unit": "iter/sec",
            "range": "stddev: 0.0009008042070565957",
            "extra": "mean: 29.72344000000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3722.5646981930117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000586936263130244",
            "extra": "mean: 268.63199999866083 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 33.52805983444286,
            "unit": "iter/sec",
            "range": "stddev: 0.000801150099189289",
            "extra": "mean: 29.825764000000845 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2104.49224915236,
            "unit": "iter/sec",
            "range": "stddev: 0.00003285095325987496",
            "extra": "mean: 475.1740000006066 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.87267357467704,
            "unit": "iter/sec",
            "range": "stddev: 0.001164042454036818",
            "extra": "mean: 59.26742999999874 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 8014.875609092919,
            "unit": "iter/sec",
            "range": "stddev: 0.000011873378625551721",
            "extra": "mean: 124.76800000058574 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 169.31950828257735,
            "unit": "iter/sec",
            "range": "stddev: 0.00026570371436916403",
            "extra": "mean: 5.905994000000874 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12463.23346164028,
            "unit": "iter/sec",
            "range": "stddev: 0.000004615428477552406",
            "extra": "mean: 80.23599999773978 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 166.67033341399886,
            "unit": "iter/sec",
            "range": "stddev: 0.00022109879278207193",
            "extra": "mean: 5.999868000000106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 7901.640380532748,
            "unit": "iter/sec",
            "range": "stddev: 0.000012025282947968147",
            "extra": "mean: 126.5560000001642 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 35.7351601528368,
            "unit": "iter/sec",
            "range": "stddev: 0.0015645955614253639",
            "extra": "mean: 27.983644000000822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 68.06609653596509,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530209239777347",
            "extra": "mean: 14.69160200000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 8001.792401507967,
            "unit": "iter/sec",
            "range": "stddev: 0.000008234547348186307",
            "extra": "mean: 124.97199999984333 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 172.6474625139267,
            "unit": "iter/sec",
            "range": "stddev: 0.00023511708274679706",
            "extra": "mean: 5.792149999999765 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11826.202133317502,
            "unit": "iter/sec",
            "range": "stddev: 0.000010064314186676161",
            "extra": "mean: 84.55800000092495 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 174.43951710951174,
            "unit": "iter/sec",
            "range": "stddev: 0.00015031375961396888",
            "extra": "mean: 5.732646000001296 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 8271.572260399716,
            "unit": "iter/sec",
            "range": "stddev: 0.000004847497291834308",
            "extra": "mean: 120.89600000081191 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 30.272713556436173,
            "unit": "iter/sec",
            "range": "stddev: 0.000727816569384225",
            "extra": "mean: 33.03304799999978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 67.01286405743747,
            "unit": "iter/sec",
            "range": "stddev: 0.000446583860232709",
            "extra": "mean: 14.922507999999652 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 8188.398676710027,
            "unit": "iter/sec",
            "range": "stddev: 0.000005701265650489989",
            "extra": "mean: 122.12400000066737 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 173.0290006986313,
            "unit": "iter/sec",
            "range": "stddev: 0.000290126380685926",
            "extra": "mean: 5.779378000001998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 12305.571962928216,
            "unit": "iter/sec",
            "range": "stddev: 0.000004735444011276265",
            "extra": "mean: 81.26400000037393 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 175.25614561962823,
            "unit": "iter/sec",
            "range": "stddev: 0.0002173298517926772",
            "extra": "mean: 5.70593400000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 8259.957378593816,
            "unit": "iter/sec",
            "range": "stddev: 0.000004858294968344863",
            "extra": "mean: 121.0660000003827 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 25.5409496513304,
            "unit": "iter/sec",
            "range": "stddev: 0.0006573178450105469",
            "extra": "mean: 39.15281199999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 68.38478422137587,
            "unit": "iter/sec",
            "range": "stddev: 0.0003595832752368235",
            "extra": "mean: 14.623136000002432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3960.207831713759,
            "unit": "iter/sec",
            "range": "stddev: 0.000015292353317518775",
            "extra": "mean: 252.51199999956955 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 83.71403686833,
            "unit": "iter/sec",
            "range": "stddev: 0.0004524357870152031",
            "extra": "mean: 11.94542800000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5552.100914936914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071687181565738935",
            "extra": "mean: 180.11200000159988 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 86.63963163601278,
            "unit": "iter/sec",
            "range": "stddev: 0.00019762026153707202",
            "extra": "mean: 11.54206199999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3730.2854414442436,
            "unit": "iter/sec",
            "range": "stddev: 0.000022646919878693264",
            "extra": "mean: 268.0759999998372 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.133147739191704,
            "unit": "iter/sec",
            "range": "stddev: 0.0008401028633859564",
            "extra": "mean: 76.14320799999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 33.631329332100265,
            "unit": "iter/sec",
            "range": "stddev: 0.0003997870291145932",
            "extra": "mean: 29.734180000001516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1877.0812137986538,
            "unit": "iter/sec",
            "range": "stddev: 0.00002297749921141383",
            "extra": "mean: 532.7419999991889 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 43.1366448990523,
            "unit": "iter/sec",
            "range": "stddev: 0.0006196057253448825",
            "extra": "mean: 23.18214600000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2688.909324585873,
            "unit": "iter/sec",
            "range": "stddev: 0.000011470251523838212",
            "extra": "mean: 371.8980000019201 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 44.110817666346584,
            "unit": "iter/sec",
            "range": "stddev: 0.0004224043986872856",
            "extra": "mean: 22.67017600000031 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1893.3226297476244,
            "unit": "iter/sec",
            "range": "stddev: 0.000020281111162295458",
            "extra": "mean: 528.1720000004952 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.554023623899537,
            "unit": "iter/sec",
            "range": "stddev: 0.001595072015276613",
            "extra": "mean: 152.57802799999922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.39017103733543,
            "unit": "iter/sec",
            "range": "stddev: 0.0004251616051918382",
            "extra": "mean: 61.01217599999927 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 829.3042966254882,
            "unit": "iter/sec",
            "range": "stddev: 0.000036487186106736384",
            "extra": "mean: 1.2058300000001057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 392.72916925195614,
            "unit": "iter/sec",
            "range": "stddev: 0.00009428733705885033",
            "extra": "mean: 2.546284000001151 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 839.5854462902922,
            "unit": "iter/sec",
            "range": "stddev: 0.000009403285593875757",
            "extra": "mean: 1.191063999999642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 42.20101236852496,
            "unit": "iter/sec",
            "range": "stddev: 0.00034092813799839624",
            "extra": "mean: 23.696114000000534 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 774.2742727247443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000967795018079029",
            "extra": "mean: 1.2915319999990515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 388.7054630997885,
            "unit": "iter/sec",
            "range": "stddev: 0.00013243909041538583",
            "extra": "mean: 2.572642000000087 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 777.7477048669524,
            "unit": "iter/sec",
            "range": "stddev: 0.00003695593091562473",
            "extra": "mean: 1.2857639999992898 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 34.7563486120168,
            "unit": "iter/sec",
            "range": "stddev: 0.0001894635114469665",
            "extra": "mean: 28.771721999999045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 671.2067088452285,
            "unit": "iter/sec",
            "range": "stddev: 0.000017874303622411283",
            "extra": "mean: 1.4898540000001503 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 359.8414106936569,
            "unit": "iter/sec",
            "range": "stddev: 0.000050277748260720976",
            "extra": "mean: 2.779001999998627 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 604.4209767930926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002266659149053543",
            "extra": "mean: 1.6544759999987946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 28.921091174261317,
            "unit": "iter/sec",
            "range": "stddev: 0.00047210702141670135",
            "extra": "mean: 34.57684199999903 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 319.8059673235067,
            "unit": "iter/sec",
            "range": "stddev: 0.0001848949800025425",
            "extra": "mean: 3.126895999999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 176.2258002325269,
            "unit": "iter/sec",
            "range": "stddev: 0.00022754532377161255",
            "extra": "mean: 5.674538000000666 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 332.85446670707745,
            "unit": "iter/sec",
            "range": "stddev: 0.000033355852258527634",
            "extra": "mean: 3.0043160000013813 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.303103590399344,
            "unit": "iter/sec",
            "range": "stddev: 0.001994785896464476",
            "extra": "mean: 69.91489600000023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 164.07499277251108,
            "unit": "iter/sec",
            "range": "stddev: 0.00019811659882740338",
            "extra": "mean: 6.094773999999461 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 86.31070749922407,
            "unit": "iter/sec",
            "range": "stddev: 0.00019913233343580883",
            "extra": "mean: 11.586048000000346 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 165.4186381811277,
            "unit": "iter/sec",
            "range": "stddev: 0.0001828857188769265",
            "extra": "mean: 6.045268000000306 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.154690285119643,
            "unit": "iter/sec",
            "range": "stddev: 0.0030268697918004275",
            "extra": "mean: 139.76845400000116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.64509781945676,
            "unit": "iter/sec",
            "range": "stddev: 0.0003578658957355513",
            "extra": "mean: 20.557055999998962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 33.530488132823166,
            "unit": "iter/sec",
            "range": "stddev: 0.00036037075738868193",
            "extra": "mean: 29.823603999999477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.870188851044055,
            "unit": "iter/sec",
            "range": "stddev: 0.000687687462709164",
            "extra": "mean: 50.32664799999907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.979082446121355,
            "unit": "iter/sec",
            "range": "stddev: 0.0007097503804359358",
            "extra": "mean: 100.20961400000031 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 448.6224151498145,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462405358486129",
            "extra": "mean: 2.2290459999999257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 197.35162019761452,
            "unit": "iter/sec",
            "range": "stddev: 0.0004567461990732679",
            "extra": "mean: 5.0670979999995325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 55.503739730975305,
            "unit": "iter/sec",
            "range": "stddev: 0.00018087463581384014",
            "extra": "mean: 18.016804000000093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 74.87407304025639,
            "unit": "iter/sec",
            "range": "stddev: 0.0002610177266403383",
            "extra": "mean: 13.35575800000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 127.15088435982102,
            "unit": "iter/sec",
            "range": "stddev: 0.00025585037867960787",
            "extra": "mean: 7.86467200000061 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 115.35728458181424,
            "unit": "iter/sec",
            "range": "stddev: 0.00024862261562377125",
            "extra": "mean: 8.668719999999439 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 91.75970335924386,
            "unit": "iter/sec",
            "range": "stddev: 0.00026795778389267043",
            "extra": "mean: 10.89802999999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 13.950909205864706,
            "unit": "iter/sec",
            "range": "stddev: 0.001991825860155098",
            "extra": "mean: 71.67991599999937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.864542668037982,
            "unit": "iter/sec",
            "range": "stddev: 0.0027987892033955915",
            "extra": "mean: 1.1566809099999988 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.107210022755172,
            "unit": "iter/sec",
            "range": "stddev: 0.0009753414572697168",
            "extra": "mean: 82.59541200000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.119168462161955,
            "unit": "iter/sec",
            "range": "stddev: 0.0018366089669054012",
            "extra": "mean: 82.51391199999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.034146457343596,
            "unit": "iter/sec",
            "range": "stddev: 0.0005485127171443328",
            "extra": "mean: 83.09687799999892 msec\nrounds: 5"
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
        "date": 1648071029225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.4950359409657125,
            "unit": "iter/sec",
            "range": "stddev: 0.07383781965280463",
            "extra": "mean: 2.020055348 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 65.73608906030536,
            "unit": "iter/sec",
            "range": "stddev: 0.0004504644885895755",
            "extra": "mean: 15.212343999999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.1519786918171335,
            "unit": "iter/sec",
            "range": "stddev: 0.004058831438199567",
            "extra": "mean: 317.26102800000035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 93.32143298419838,
            "unit": "iter/sec",
            "range": "stddev: 0.0002867818838784349",
            "extra": "mean: 10.715652000000091 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.2998825626297895,
            "unit": "iter/sec",
            "range": "stddev: 0.0556050334181987",
            "extra": "mean: 3.334638703999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 171.65955652788335,
            "unit": "iter/sec",
            "range": "stddev: 0.0005632721231173016",
            "extra": "mean: 5.825483999998369 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.0080559588890714,
            "unit": "iter/sec",
            "range": "stddev: 0.0034081503672360514",
            "extra": "mean: 332.4406239999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.24895407943319456,
            "unit": "iter/sec",
            "range": "stddev: 0.061031431178137266",
            "extra": "mean: 4.016805036000001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4284.967477106806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001903577500379067",
            "extra": "mean: 233.37399999945774 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 33.003136948168866,
            "unit": "iter/sec",
            "range": "stddev: 0.0011226098414180835",
            "extra": "mean: 30.30014999999821 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3725.4215314450284,
            "unit": "iter/sec",
            "range": "stddev: 0.00002742013183829923",
            "extra": "mean: 268.4260000000904 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 34.10051768677978,
            "unit": "iter/sec",
            "range": "stddev: 0.0009172484930869019",
            "extra": "mean: 29.32506799999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 4009.4944829408055,
            "unit": "iter/sec",
            "range": "stddev: 0.00001759664655408283",
            "extra": "mean: 249.40799999967567 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 33.02937500495455,
            "unit": "iter/sec",
            "range": "stddev: 0.0013257851735861551",
            "extra": "mean: 30.276079999999865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 4129.296533031302,
            "unit": "iter/sec",
            "range": "stddev: 0.000014355642444797389",
            "extra": "mean: 242.1720000006644 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 34.12292414897212,
            "unit": "iter/sec",
            "range": "stddev: 0.0007220165843116555",
            "extra": "mean: 29.305811999998923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2014.4800828364291,
            "unit": "iter/sec",
            "range": "stddev: 0.000053030895522590164",
            "extra": "mean: 496.4059999997516 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.774951213409214,
            "unit": "iter/sec",
            "range": "stddev: 0.001555155255070563",
            "extra": "mean: 59.61269200000061 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 7127.482145552267,
            "unit": "iter/sec",
            "range": "stddev: 0.000011466270971971154",
            "extra": "mean: 140.30200000206605 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 177.36169512383478,
            "unit": "iter/sec",
            "range": "stddev: 0.000029598334077432378",
            "extra": "mean: 5.638195999997606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 9622.046031889615,
            "unit": "iter/sec",
            "range": "stddev: 0.000008334261812488654",
            "extra": "mean: 103.92799999976887 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 184.15873893994674,
            "unit": "iter/sec",
            "range": "stddev: 0.00006818756609483941",
            "extra": "mean: 5.430097999998225 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 7691.361063222786,
            "unit": "iter/sec",
            "range": "stddev: 0.000012689685967809392",
            "extra": "mean: 130.0160000005235 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 36.785503215753764,
            "unit": "iter/sec",
            "range": "stddev: 0.000521169632095498",
            "extra": "mean: 27.184621999998626 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 69.38794145822843,
            "unit": "iter/sec",
            "range": "stddev: 0.00035974056225167046",
            "extra": "mean: 14.41172599999959 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 7019.514249634942,
            "unit": "iter/sec",
            "range": "stddev: 0.00001147229488875962",
            "extra": "mean: 142.45999999957348 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 174.0596774047095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000512403608498558",
            "extra": "mean: 5.745156000001543 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 9712.13239577407,
            "unit": "iter/sec",
            "range": "stddev: 0.000008043632886203904",
            "extra": "mean: 102.96400000015637 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 169.96373653719598,
            "unit": "iter/sec",
            "range": "stddev: 0.0003396523760705077",
            "extra": "mean: 5.883607999999186 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6760.68526304202,
            "unit": "iter/sec",
            "range": "stddev: 0.000006184240457047739",
            "extra": "mean: 147.91400000035537 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 30.2963100306242,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550702415467202",
            "extra": "mean: 33.007319999999254 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 69.03466617183781,
            "unit": "iter/sec",
            "range": "stddev: 0.0003349431154390013",
            "extra": "mean: 14.485475999997561 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 7067.837100547988,
            "unit": "iter/sec",
            "range": "stddev: 0.000016672856083947982",
            "extra": "mean: 141.48599999884937 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 161.68676810465112,
            "unit": "iter/sec",
            "range": "stddev: 0.0002800694033986447",
            "extra": "mean: 6.184797999999319 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 9989.21165149813,
            "unit": "iter/sec",
            "range": "stddev: 0.000009646567783822856",
            "extra": "mean: 100.10799999918163 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 174.2416480750938,
            "unit": "iter/sec",
            "range": "stddev: 0.00011670989474055893",
            "extra": "mean: 5.739155999999639 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 6814.217182704015,
            "unit": "iter/sec",
            "range": "stddev: 0.00001661814429951159",
            "extra": "mean: 146.75200000056066 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 25.33737602991997,
            "unit": "iter/sec",
            "range": "stddev: 0.0007200857649488755",
            "extra": "mean: 39.46738600000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 64.23716567124045,
            "unit": "iter/sec",
            "range": "stddev: 0.0011032870333758762",
            "extra": "mean: 15.56731200000172 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3636.469424584656,
            "unit": "iter/sec",
            "range": "stddev: 0.000028383603013527183",
            "extra": "mean: 274.99199999851953 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 88.7258069124086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002058251799941931",
            "extra": "mean: 11.270678000000771 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5166.997354485358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004323538747411857",
            "extra": "mean: 193.53600000044935 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 88.71854927428198,
            "unit": "iter/sec",
            "range": "stddev: 0.00031402378461143835",
            "extra": "mean: 11.271600000000035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3594.949814488182,
            "unit": "iter/sec",
            "range": "stddev: 0.00001511105952713573",
            "extra": "mean: 278.1680000009601 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 13.061616530217714,
            "unit": "iter/sec",
            "range": "stddev: 0.0008877144560730605",
            "extra": "mean: 76.56020199999944 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 33.92301944182425,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603595988527167",
            "extra": "mean: 29.47850800000083 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1911.4391990290521,
            "unit": "iter/sec",
            "range": "stddev: 0.00003590314582376097",
            "extra": "mean: 523.1660000004013 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 43.49670347183543,
            "unit": "iter/sec",
            "range": "stddev: 0.00039890734333903374",
            "extra": "mean: 22.99024800000097 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2640.528950756591,
            "unit": "iter/sec",
            "range": "stddev: 0.000030046324567259763",
            "extra": "mean: 378.71200000040517 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 44.64691124185162,
            "unit": "iter/sec",
            "range": "stddev: 0.000373444161862779",
            "extra": "mean: 22.39796599999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1822.0445526335918,
            "unit": "iter/sec",
            "range": "stddev: 0.00003262502229698926",
            "extra": "mean: 548.8339999999425 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.385059247411728,
            "unit": "iter/sec",
            "range": "stddev: 0.0011725230180572475",
            "extra": "mean: 156.61561799999959 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 16.229390094651478,
            "unit": "iter/sec",
            "range": "stddev: 0.0018040983180784207",
            "extra": "mean: 61.61660999999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 774.782983286075,
            "unit": "iter/sec",
            "range": "stddev: 0.00006160494809696417",
            "extra": "mean: 1.2906840000005104 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 386.7547332978953,
            "unit": "iter/sec",
            "range": "stddev: 0.000036773864631420845",
            "extra": "mean: 2.5856179999993856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 727.3129278422094,
            "unit": "iter/sec",
            "range": "stddev: 0.00006811436471041824",
            "extra": "mean: 1.3749239999992824 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 39.97388905566751,
            "unit": "iter/sec",
            "range": "stddev: 0.0009759324753024642",
            "extra": "mean: 25.016330000000835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 734.1874380528373,
            "unit": "iter/sec",
            "range": "stddev: 0.00007121751750667784",
            "extra": "mean: 1.3620500000001812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 380.51402879113374,
            "unit": "iter/sec",
            "range": "stddev: 0.00021788471063699893",
            "extra": "mean: 2.628024000000551 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 798.1725042349974,
            "unit": "iter/sec",
            "range": "stddev: 0.000031184425116569705",
            "extra": "mean: 1.2528619999989132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 32.667224666421625,
            "unit": "iter/sec",
            "range": "stddev: 0.0010108338657369106",
            "extra": "mean: 30.611721999998736 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 587.2997601462971,
            "unit": "iter/sec",
            "range": "stddev: 0.00014791427929749322",
            "extra": "mean: 1.7027080000013939 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 356.9409305592775,
            "unit": "iter/sec",
            "range": "stddev: 0.00008851094977616102",
            "extra": "mean: 2.801584000000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 649.244409356483,
            "unit": "iter/sec",
            "range": "stddev: 0.00004565187258023642",
            "extra": "mean: 1.5402519999997824 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 27.438360683067756,
            "unit": "iter/sec",
            "range": "stddev: 0.0005008462746505043",
            "extra": "mean: 36.44532600000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 330.5507570603597,
            "unit": "iter/sec",
            "range": "stddev: 0.00008655316505063994",
            "extra": "mean: 3.025254000000359 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 172.22132093066412,
            "unit": "iter/sec",
            "range": "stddev: 0.00017841537985948514",
            "extra": "mean: 5.806481999999278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 310.3196167924779,
            "unit": "iter/sec",
            "range": "stddev: 0.00010502366937913554",
            "extra": "mean: 3.2224840000003496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 13.694012065903472,
            "unit": "iter/sec",
            "range": "stddev: 0.0007673082945089132",
            "extra": "mean: 73.0246180000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 162.4018321524953,
            "unit": "iter/sec",
            "range": "stddev: 0.00008000005018955818",
            "extra": "mean: 6.157566000000543 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 88.52347970217268,
            "unit": "iter/sec",
            "range": "stddev: 0.0001532935736425927",
            "extra": "mean: 11.296438000001672 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 158.18599889395693,
            "unit": "iter/sec",
            "range": "stddev: 0.00024093778444021787",
            "extra": "mean: 6.321672000000262 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.936165841505801,
            "unit": "iter/sec",
            "range": "stddev: 0.0018541272161847634",
            "extra": "mean: 144.17186999999785 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 48.38889184599271,
            "unit": "iter/sec",
            "range": "stddev: 0.0005988451473890701",
            "extra": "mean: 20.66589999999792 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 32.47639177414852,
            "unit": "iter/sec",
            "range": "stddev: 0.0005306915638772636",
            "extra": "mean: 30.791597999997293 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 19.747070828122183,
            "unit": "iter/sec",
            "range": "stddev: 0.0014494513652303842",
            "extra": "mean: 50.64042200000017 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 10.1170510431125,
            "unit": "iter/sec",
            "range": "stddev: 0.001613162510773928",
            "extra": "mean: 98.84303199999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 448.17645962095463,
            "unit": "iter/sec",
            "range": "stddev: 0.00008008232782702437",
            "extra": "mean: 2.2312640000006922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 213.56414206793838,
            "unit": "iter/sec",
            "range": "stddev: 0.00012143758244381672",
            "extra": "mean: 4.682434000001194 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 54.11038735462234,
            "unit": "iter/sec",
            "range": "stddev: 0.0010350331339402574",
            "extra": "mean: 18.480739999998832 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 77.90060972808007,
            "unit": "iter/sec",
            "range": "stddev: 0.00037303100025278045",
            "extra": "mean: 12.836869999998726 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 132.0287136046265,
            "unit": "iter/sec",
            "range": "stddev: 0.00037758102620429084",
            "extra": "mean: 7.5741100000004735 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 121.6190807689257,
            "unit": "iter/sec",
            "range": "stddev: 0.00014681740847006803",
            "extra": "mean: 8.222394000000577 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 97.49479329055407,
            "unit": "iter/sec",
            "range": "stddev: 0.00038071980874498625",
            "extra": "mean: 10.256958000001077 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 13.918456329618513,
            "unit": "iter/sec",
            "range": "stddev: 0.01081147581262856",
            "extra": "mean: 71.84704799999963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.8974951993161303,
            "unit": "iter/sec",
            "range": "stddev: 0.01573913875430359",
            "extra": "mean: 1.1142120879999982 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 12.305545614725395,
            "unit": "iter/sec",
            "range": "stddev: 0.0005578291531735598",
            "extra": "mean: 81.2641740000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 12.284074832028878,
            "unit": "iter/sec",
            "range": "stddev: 0.0014693545792192123",
            "extra": "mean: 81.40621199999941 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.3168593861023,
            "unit": "iter/sec",
            "range": "stddev: 0.0016119025649420366",
            "extra": "mean: 81.18952799999875 msec\nrounds: 5"
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
        "date": 1648082298194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.5773271593043194,
            "unit": "iter/sec",
            "range": "stddev: 0.01763267062841587",
            "extra": "mean: 1.73212014 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 76.65840493484068,
            "unit": "iter/sec",
            "range": "stddev: 0.0003507450320101951",
            "extra": "mean: 13.044883999999684 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.650779729153614,
            "unit": "iter/sec",
            "range": "stddev: 0.00528089902248843",
            "extra": "mean: 273.9140880000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 102.45800860975163,
            "unit": "iter/sec",
            "range": "stddev: 0.00042735837031598244",
            "extra": "mean: 9.760095999999976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.35910858109188376,
            "unit": "iter/sec",
            "range": "stddev: 0.08321493058257115",
            "extra": "mean: 2.7846730839999996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 209.02503200170085,
            "unit": "iter/sec",
            "range": "stddev: 0.00014903690240885024",
            "extra": "mean: 4.784116000000722 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.4727311702681796,
            "unit": "iter/sec",
            "range": "stddev: 0.007605950232977536",
            "extra": "mean: 287.9577919999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3003798730033546,
            "unit": "iter/sec",
            "range": "stddev: 0.023307150676918187",
            "extra": "mean: 3.329117860000001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4826.6275388011645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000178696734718723",
            "extra": "mean: 207.1840000002112 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.562620982494956,
            "unit": "iter/sec",
            "range": "stddev: 0.001097809526616463",
            "extra": "mean: 25.27638400000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 4630.487127248321,
            "unit": "iter/sec",
            "range": "stddev: 0.000014287692255870522",
            "extra": "mean: 215.9599999998818 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.058254315755164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004063859213614933",
            "extra": "mean: 24.963644000000613 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 4973.887092804953,
            "unit": "iter/sec",
            "range": "stddev: 0.000009551683096537179",
            "extra": "mean: 201.04999999830397 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 40.20901288240884,
            "unit": "iter/sec",
            "range": "stddev: 0.00041363819665209915",
            "extra": "mean: 24.8700459999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 4373.879193451055,
            "unit": "iter/sec",
            "range": "stddev: 0.00006217106360784531",
            "extra": "mean: 228.63000000029388 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.311095233916866,
            "unit": "iter/sec",
            "range": "stddev: 0.0010927553212560768",
            "extra": "mean: 24.807065999998485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2399.1401481673947,
            "unit": "iter/sec",
            "range": "stddev: 0.00002642558003235575",
            "extra": "mean: 416.81600000060826 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.608966095570604,
            "unit": "iter/sec",
            "range": "stddev: 0.001257396317454557",
            "extra": "mean: 48.52257000000236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9301.806410760648,
            "unit": "iter/sec",
            "range": "stddev: 0.00001160222306393071",
            "extra": "mean: 107.50600000051236 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 222.4149818732318,
            "unit": "iter/sec",
            "range": "stddev: 0.00026585495171279754",
            "extra": "mean: 4.496099999998933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12621.800373668599,
            "unit": "iter/sec",
            "range": "stddev: 0.000011191752320755894",
            "extra": "mean: 79.22799999960262 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 212.82563918985423,
            "unit": "iter/sec",
            "range": "stddev: 0.00006830768822024895",
            "extra": "mean: 4.698682000000645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9435.386473285145,
            "unit": "iter/sec",
            "range": "stddev: 0.000006156364996845343",
            "extra": "mean: 105.98400000162655 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 42.050981095646016,
            "unit": "iter/sec",
            "range": "stddev: 0.0011127609802074996",
            "extra": "mean: 23.78065799999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 78.69149267847047,
            "unit": "iter/sec",
            "range": "stddev: 0.0004050151532110433",
            "extra": "mean: 12.707853999999088 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9813.35008144029,
            "unit": "iter/sec",
            "range": "stddev: 0.000004983620169888534",
            "extra": "mean: 101.90200000010918 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 206.58877718868382,
            "unit": "iter/sec",
            "range": "stddev: 0.00006417506587499376",
            "extra": "mean: 4.840533999998797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14920.473874109139,
            "unit": "iter/sec",
            "range": "stddev: 0.000005280622122892834",
            "extra": "mean: 67.02200000063387 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 208.23641663432616,
            "unit": "iter/sec",
            "range": "stddev: 0.0001208290920264367",
            "extra": "mean: 4.802234000002272 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 9350.863084771741,
            "unit": "iter/sec",
            "range": "stddev: 0.000006005170272474325",
            "extra": "mean: 106.94199999875309 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 35.105101866583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006088497787792456",
            "extra": "mean: 28.485887999997885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 77.99491909899056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003481161440114278",
            "extra": "mean: 12.821347999999942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9534.524513213117,
            "unit": "iter/sec",
            "range": "stddev: 0.000005064718155085813",
            "extra": "mean: 104.88200000054348 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 199.68362127042252,
            "unit": "iter/sec",
            "range": "stddev: 0.0001790841938027778",
            "extra": "mean: 5.007922000000917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13622.86461593348,
            "unit": "iter/sec",
            "range": "stddev: 0.000008210001826338262",
            "extra": "mean: 73.40600000020459 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 225.44742295564586,
            "unit": "iter/sec",
            "range": "stddev: 0.0003682777248626863",
            "extra": "mean: 4.435623999999052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9409.462155124867,
            "unit": "iter/sec",
            "range": "stddev: 0.000006329149232334559",
            "extra": "mean: 106.2760000002072 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.983720100012476,
            "unit": "iter/sec",
            "range": "stddev: 0.000511182635788055",
            "extra": "mean: 32.27501400000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 76.67150003803528,
            "unit": "iter/sec",
            "range": "stddev: 0.00015858962239215672",
            "extra": "mean: 13.042655999998942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5021.038149816305,
            "unit": "iter/sec",
            "range": "stddev: 0.000012080416796654459",
            "extra": "mean: 199.16200000125173 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 97.52970901230317,
            "unit": "iter/sec",
            "range": "stddev: 0.0009250264211518919",
            "extra": "mean: 10.253286000000799 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6970.584135038669,
            "unit": "iter/sec",
            "range": "stddev: 0.000010153080813015889",
            "extra": "mean: 143.4599999981856 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 102.37179059318231,
            "unit": "iter/sec",
            "range": "stddev: 0.00045455059578887306",
            "extra": "mean: 9.768315999999684 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 3924.4927593087937,
            "unit": "iter/sec",
            "range": "stddev: 0.00005960194879226896",
            "extra": "mean: 254.81000000013407 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.8105296483162,
            "unit": "iter/sec",
            "range": "stddev: 0.0025649486830481953",
            "extra": "mean: 63.24898800000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.128521649510816,
            "unit": "iter/sec",
            "range": "stddev: 0.0016340431805675303",
            "extra": "mean: 23.73688799999968 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2255.5644775602977,
            "unit": "iter/sec",
            "range": "stddev: 0.000014620043435761441",
            "extra": "mean: 443.3480000011514 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 50.04404877173373,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537462137785443",
            "extra": "mean: 19.98239599999806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3102.94966396047,
            "unit": "iter/sec",
            "range": "stddev: 0.000012291095557979897",
            "extra": "mean: 322.2739999989699 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 53.98536715825927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006071016099212694",
            "extra": "mean: 18.5235380000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2238.729118246123,
            "unit": "iter/sec",
            "range": "stddev: 0.00001857716124893133",
            "extra": "mean: 446.6820000016014 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.819730195848952,
            "unit": "iter/sec",
            "range": "stddev: 0.0010456309905755728",
            "extra": "mean: 127.88165000000163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 19.412408900962475,
            "unit": "iter/sec",
            "range": "stddev: 0.002075776319664858",
            "extra": "mean: 51.51344199999926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 980.1327099687285,
            "unit": "iter/sec",
            "range": "stddev: 0.00004569212787842388",
            "extra": "mean: 1.0202700000002096 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 464.094407940947,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270122512698016",
            "extra": "mean: 2.1547339999995074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 961.2593266185144,
            "unit": "iter/sec",
            "range": "stddev: 0.000034550420694105724",
            "extra": "mean: 1.0403020000001106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 49.839298166992094,
            "unit": "iter/sec",
            "range": "stddev: 0.00036660426984729954",
            "extra": "mean: 20.0644879999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1067.5092873312617,
            "unit": "iter/sec",
            "range": "stddev: 0.000009342555859749476",
            "extra": "mean: 936.7599999995946 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 442.2317134973535,
            "unit": "iter/sec",
            "range": "stddev: 0.00007542174865399545",
            "extra": "mean: 2.2612580000009075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 927.4235432025029,
            "unit": "iter/sec",
            "range": "stddev: 0.000025570751455124716",
            "extra": "mean: 1.0782560000006924 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.853108313166054,
            "unit": "iter/sec",
            "range": "stddev: 0.0009680745367311953",
            "extra": "mean: 23.893087999999807 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 785.6249489346549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000258782808548151",
            "extra": "mean: 1.272871999999552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 431.04377249491625,
            "unit": "iter/sec",
            "range": "stddev: 0.000012988308203046433",
            "extra": "mean: 2.319950000000972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 783.6241362500248,
            "unit": "iter/sec",
            "range": "stddev: 0.00002264898165281683",
            "extra": "mean: 1.2761220000004414 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 30.66140639578628,
            "unit": "iter/sec",
            "range": "stddev: 0.003928193068905859",
            "extra": "mean: 32.61428999999907 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 399.5799615442859,
            "unit": "iter/sec",
            "range": "stddev: 0.00002543208937727773",
            "extra": "mean: 2.502628000000868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 216.00576821803483,
            "unit": "iter/sec",
            "range": "stddev: 0.00005131429752231973",
            "extra": "mean: 4.629505999999992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 359.70084400212204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002696278090635538",
            "extra": "mean: 2.780087999999523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.202648437180205,
            "unit": "iter/sec",
            "range": "stddev: 0.0020056126769981814",
            "extra": "mean: 58.13058400000159 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 192.07660937148844,
            "unit": "iter/sec",
            "range": "stddev: 0.0003182419954677446",
            "extra": "mean: 5.206256000000167 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 105.91041546325022,
            "unit": "iter/sec",
            "range": "stddev: 0.00033832490651775565",
            "extra": "mean: 9.441942000000836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 198.81782918769625,
            "unit": "iter/sec",
            "range": "stddev: 0.00011603417104498987",
            "extra": "mean: 5.029729999998835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.170304173234564,
            "unit": "iter/sec",
            "range": "stddev: 0.00710674023241399",
            "extra": "mean: 122.39446399999906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 52.8731759679635,
            "unit": "iter/sec",
            "range": "stddev: 0.0010133880423461182",
            "extra": "mean: 18.913181999997732 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.30523960297426,
            "unit": "iter/sec",
            "range": "stddev: 0.0005214862314865039",
            "extra": "mean: 26.805885999999646 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 22.75247005365431,
            "unit": "iter/sec",
            "range": "stddev: 0.0010217357280003056",
            "extra": "mean: 43.951271999999335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.421412356775715,
            "unit": "iter/sec",
            "range": "stddev: 0.007972029226541909",
            "extra": "mean: 87.55484600000045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 500.71301533379983,
            "unit": "iter/sec",
            "range": "stddev: 0.00026813550644967676",
            "extra": "mean: 1.9971520000001421 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 237.34962121373064,
            "unit": "iter/sec",
            "range": "stddev: 0.00014822770230351178",
            "extra": "mean: 4.213194000000158 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 64.66944986733895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003805193926315659",
            "extra": "mean: 15.463251999999557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 98.46840276965179,
            "unit": "iter/sec",
            "range": "stddev: 0.0005353399603706367",
            "extra": "mean: 10.155541999998832 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 147.13364531552372,
            "unit": "iter/sec",
            "range": "stddev: 0.00017936474728842697",
            "extra": "mean: 6.796541999999591 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 137.7369488731527,
            "unit": "iter/sec",
            "range": "stddev: 0.00028109857769072503",
            "extra": "mean: 7.260215999999673 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 119.83631318309278,
            "unit": "iter/sec",
            "range": "stddev: 0.00024748110560285087",
            "extra": "mean: 8.34471600000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.388431264172645,
            "unit": "iter/sec",
            "range": "stddev: 0.0019474890598966904",
            "extra": "mean: 54.382018000000016 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.0135977154042661,
            "unit": "iter/sec",
            "range": "stddev: 0.022408029742375518",
            "extra": "mean: 986.5847020000012 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.346125409925948,
            "unit": "iter/sec",
            "range": "stddev: 0.001766719007092537",
            "extra": "mean: 69.70523200000116 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.008611541790232,
            "unit": "iter/sec",
            "range": "stddev: 0.0011775331683746798",
            "extra": "mean: 71.38466200000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.14074378445731,
            "unit": "iter/sec",
            "range": "stddev: 0.0024036845877262515",
            "extra": "mean: 70.71763799999985 msec\nrounds: 5"
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
        "date": 1649760569605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.5898729966866008,
            "unit": "iter/sec",
            "range": "stddev: 0.01380255237520193",
            "extra": "mean: 1.69528018 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 76.19535269304944,
            "unit": "iter/sec",
            "range": "stddev: 0.00010076355094958058",
            "extra": "mean: 13.124159999999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.9098347075151216,
            "unit": "iter/sec",
            "range": "stddev: 0.008557246203617185",
            "extra": "mean: 255.76528799999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 113.4214300264653,
            "unit": "iter/sec",
            "range": "stddev: 0.00024345373416722062",
            "extra": "mean: 8.816675999999859 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.38025230589219094,
            "unit": "iter/sec",
            "range": "stddev: 0.03958763946340977",
            "extra": "mean: 2.629832836 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 213.70206342162479,
            "unit": "iter/sec",
            "range": "stddev: 0.00011928349978124755",
            "extra": "mean: 4.679412000000411 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.6814947457706713,
            "unit": "iter/sec",
            "range": "stddev: 0.0008628290769321094",
            "extra": "mean: 271.628800000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3159597126443477,
            "unit": "iter/sec",
            "range": "stddev: 0.09216040159985309",
            "extra": "mean: 3.1649604679999994 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5413.481734927122,
            "unit": "iter/sec",
            "range": "stddev: 0.00001486031392661338",
            "extra": "mean: 184.7239999995054 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 44.697403939023374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107176824136769",
            "extra": "mean: 22.372663999998963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5034.182096441827,
            "unit": "iter/sec",
            "range": "stddev: 0.000008779309197937155",
            "extra": "mean: 198.64199999972243 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 41.829372468225294,
            "unit": "iter/sec",
            "range": "stddev: 0.00014229471504610073",
            "extra": "mean: 23.906645999999796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5063.188593628828,
            "unit": "iter/sec",
            "range": "stddev: 0.000007744948677063807",
            "extra": "mean: 197.5040000007766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 41.80547827348436,
            "unit": "iter/sec",
            "range": "stddev: 0.00023315415983750647",
            "extra": "mean: 23.920309999999745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5042.406639821541,
            "unit": "iter/sec",
            "range": "stddev: 0.000008820332760100499",
            "extra": "mean: 198.31800000076782 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 41.397047695030764,
            "unit": "iter/sec",
            "range": "stddev: 0.00016069071090201887",
            "extra": "mean: 24.156311999998934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2494.5618551582825,
            "unit": "iter/sec",
            "range": "stddev: 0.00003566746024033462",
            "extra": "mean: 400.87199999959466 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 21.528855296985643,
            "unit": "iter/sec",
            "range": "stddev: 0.001995870921144273",
            "extra": "mean: 46.449287999999456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9481.90851853787,
            "unit": "iter/sec",
            "range": "stddev: 0.000010374000193425689",
            "extra": "mean: 105.46400000009726 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 208.3938543819036,
            "unit": "iter/sec",
            "range": "stddev: 0.00010676458907367186",
            "extra": "mean: 4.798605999999381 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 15241.11443036931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046103275367892395",
            "extra": "mean: 65.61199999964629 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 215.51222514649166,
            "unit": "iter/sec",
            "range": "stddev: 0.00005173930778468671",
            "extra": "mean: 4.640107999999827 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9617.419069451587,
            "unit": "iter/sec",
            "range": "stddev: 0.000005513684792034669",
            "extra": "mean: 103.97799999964263 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.115876971891275,
            "unit": "iter/sec",
            "range": "stddev: 0.00029531490366995725",
            "extra": "mean: 22.165145999999822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 82.19421737378421,
            "unit": "iter/sec",
            "range": "stddev: 0.0001525881505217322",
            "extra": "mean: 12.166306000000304 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9246.930019269212,
            "unit": "iter/sec",
            "range": "stddev: 0.00000735910864164889",
            "extra": "mean: 108.14399999958368 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 209.23242248876483,
            "unit": "iter/sec",
            "range": "stddev: 0.00006975409400234651",
            "extra": "mean: 4.779374000000871 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15378.937007767887,
            "unit": "iter/sec",
            "range": "stddev: 0.000003971974321240421",
            "extra": "mean: 65.02400000044874 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 214.49984641815118,
            "unit": "iter/sec",
            "range": "stddev: 0.00008270138493238499",
            "extra": "mean: 4.662007999999106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 9545.26364016723,
            "unit": "iter/sec",
            "range": "stddev: 0.000004350888413756095",
            "extra": "mean: 104.76400000015929 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 37.60782633909012,
            "unit": "iter/sec",
            "range": "stddev: 0.00015889897435303522",
            "extra": "mean: 26.59021000000166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 83.17424872027449,
            "unit": "iter/sec",
            "range": "stddev: 0.00009887391956396233",
            "extra": "mean: 12.022952000000942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9522.177150441867,
            "unit": "iter/sec",
            "range": "stddev: 0.000004328085025815124",
            "extra": "mean: 105.01800000156436 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 210.16244716507362,
            "unit": "iter/sec",
            "range": "stddev: 0.00008998008740644901",
            "extra": "mean: 4.758224000001974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 15231.36442562641,
            "unit": "iter/sec",
            "range": "stddev: 0.00000464394552161265",
            "extra": "mean: 65.653999999995 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 212.11481011059,
            "unit": "iter/sec",
            "range": "stddev: 0.000057133089974352516",
            "extra": "mean: 4.714427999999771 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9535.615524074623,
            "unit": "iter/sec",
            "range": "stddev: 0.000004557192117306361",
            "extra": "mean: 104.86999999898217 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 32.27421203318218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000453533642633607",
            "extra": "mean: 30.984489999999592 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 82.36737000164786,
            "unit": "iter/sec",
            "range": "stddev: 0.00015706829390672882",
            "extra": "mean: 12.140729999998712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4693.425449614444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001144762333566089",
            "extra": "mean: 213.06400000071335 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 103.91275152861067,
            "unit": "iter/sec",
            "range": "stddev: 0.00011136195207392882",
            "extra": "mean: 9.6234579999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6329.274158870319,
            "unit": "iter/sec",
            "range": "stddev: 0.00000701323962426036",
            "extra": "mean: 157.99599999922975 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 106.78569712375048,
            "unit": "iter/sec",
            "range": "stddev: 0.00006675297484072447",
            "extra": "mean: 9.364549999997962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 4641.663572235287,
            "unit": "iter/sec",
            "range": "stddev: 0.000006189163916009693",
            "extra": "mean: 215.43999999948937 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.0294721722431,
            "unit": "iter/sec",
            "range": "stddev: 0.00009066166847229436",
            "extra": "mean: 62.385086000000456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.16992408595183,
            "unit": "iter/sec",
            "range": "stddev: 0.00024090761181400528",
            "extra": "mean: 24.289576000001034 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2232.4518125343166,
            "unit": "iter/sec",
            "range": "stddev: 0.000015491241718363737",
            "extra": "mean: 447.9379999986577 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 52.07001751114771,
            "unit": "iter/sec",
            "range": "stddev: 0.000037793739557681956",
            "extra": "mean: 19.2049099999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3067.8799109011443,
            "unit": "iter/sec",
            "range": "stddev: 0.000016677366998623328",
            "extra": "mean: 325.95800000081 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 52.89524224222659,
            "unit": "iter/sec",
            "range": "stddev: 0.00023983746344228014",
            "extra": "mean: 18.905291999999463 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2252.2928341029124,
            "unit": "iter/sec",
            "range": "stddev: 0.000015342093078691805",
            "extra": "mean: 443.9920000004349 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.064374482196627,
            "unit": "iter/sec",
            "range": "stddev: 0.00038190204905149273",
            "extra": "mean: 124.0021779999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.378704807776224,
            "unit": "iter/sec",
            "range": "stddev: 0.00030698266444642753",
            "extra": "mean: 49.07083200000101 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1006.4229915331393,
            "unit": "iter/sec",
            "range": "stddev: 0.000009785597582429875",
            "extra": "mean: 993.6179999988327 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 488.16588267238734,
            "unit": "iter/sec",
            "range": "stddev: 0.000013337787671890519",
            "extra": "mean: 2.048483999999462 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1001.9477864972727,
            "unit": "iter/sec",
            "range": "stddev: 0.000009944748866494637",
            "extra": "mean: 998.0559999996786 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.04394567250001,
            "unit": "iter/sec",
            "range": "stddev: 0.00013919369047933687",
            "extra": "mean: 19.590961999999763 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 946.4194114394016,
            "unit": "iter/sec",
            "range": "stddev: 0.00001252672862206984",
            "extra": "mean: 1.0566140000014457 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 477.29461773938186,
            "unit": "iter/sec",
            "range": "stddev: 0.000015275747771643036",
            "extra": "mean: 2.0951420000005783 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 944.0499364646471,
            "unit": "iter/sec",
            "range": "stddev: 0.000012013166943426366",
            "extra": "mean: 1.059266000000889 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.80167912328887,
            "unit": "iter/sec",
            "range": "stddev: 0.0002242608392679706",
            "extra": "mean: 23.922483999999713 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 789.7983328934357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066781457013632985",
            "extra": "mean: 1.26614600000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 426.4625105338498,
            "unit": "iter/sec",
            "range": "stddev: 0.00006058134836640282",
            "extra": "mean: 2.344871999998759 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 784.708849475925,
            "unit": "iter/sec",
            "range": "stddev: 0.00003000736692728799",
            "extra": "mean: 1.274357999999438 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.24582092063817,
            "unit": "iter/sec",
            "range": "stddev: 0.0001665319939845737",
            "extra": "mean: 28.372157999998535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 399.1181086267188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004202048345731811",
            "extra": "mean: 2.505524000002879 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 212.30539026402488,
            "unit": "iter/sec",
            "range": "stddev: 0.00004434542851380525",
            "extra": "mean: 4.710195999999769 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 397.1185081052399,
            "unit": "iter/sec",
            "range": "stddev: 0.00006243308938655692",
            "extra": "mean: 2.518139999999676 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.64465582898957,
            "unit": "iter/sec",
            "range": "stddev: 0.00022745915002608778",
            "extra": "mean: 56.67438400000037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 199.12758223663462,
            "unit": "iter/sec",
            "range": "stddev: 0.0001025477624316993",
            "extra": "mean: 5.0219060000017635 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 107.52137847568625,
            "unit": "iter/sec",
            "range": "stddev: 0.00016293212691116817",
            "extra": "mean: 9.300475999999662 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 199.5167703821749,
            "unit": "iter/sec",
            "range": "stddev: 0.000047926765485221165",
            "extra": "mean: 5.012109999998984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.813182787014998,
            "unit": "iter/sec",
            "range": "stddev: 0.0012417299388081007",
            "extra": "mean: 113.46638600000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.94691570874147,
            "unit": "iter/sec",
            "range": "stddev: 0.00003222744684258165",
            "extra": "mean: 16.964415999999574 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.26462231904969,
            "unit": "iter/sec",
            "range": "stddev: 0.00008238853239438275",
            "extra": "mean: 24.835698000000548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.04812703567471,
            "unit": "iter/sec",
            "range": "stddev: 0.00010983051420420615",
            "extra": "mean: 41.583279999998695 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.2493132116315,
            "unit": "iter/sec",
            "range": "stddev: 0.00038991519930554213",
            "extra": "mean: 81.63723000000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 540.7264335199369,
            "unit": "iter/sec",
            "range": "stddev: 0.00005550269029566013",
            "extra": "mean: 1.8493639999996958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 250.9681094822517,
            "unit": "iter/sec",
            "range": "stddev: 0.000030617342308190685",
            "extra": "mean: 3.9845700000012134 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 66.26124503024207,
            "unit": "iter/sec",
            "range": "stddev: 0.00015976139496370157",
            "extra": "mean: 15.09177799999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 96.99119727290854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001012449373072796",
            "extra": "mean: 10.310214000000997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 166.23594932200876,
            "unit": "iter/sec",
            "range": "stddev: 0.000301654030520236",
            "extra": "mean: 6.0155459999987215 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 151.30071713514567,
            "unit": "iter/sec",
            "range": "stddev: 0.00041321399925619293",
            "extra": "mean: 6.609353999999712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 127.14771563870578,
            "unit": "iter/sec",
            "range": "stddev: 0.00035001551703841617",
            "extra": "mean: 7.864868000000342 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.311109262095748,
            "unit": "iter/sec",
            "range": "stddev: 0.0025682645176995666",
            "extra": "mean: 54.61165600000072 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.086838155613218,
            "unit": "iter/sec",
            "range": "stddev: 0.018099406363422728",
            "extra": "mean: 920.1001959999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.13334962892446,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119444552639475",
            "extra": "mean: 66.07922399999893 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.087950075059045,
            "unit": "iter/sec",
            "range": "stddev: 0.0011873222523296123",
            "extra": "mean: 66.27805600000215 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 11.265446222296996,
            "unit": "iter/sec",
            "range": "stddev: 0.019516710466182027",
            "extra": "mean: 88.7670120000007 msec\nrounds: 5"
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
        "date": 1649770055069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.6328316812469145,
            "unit": "iter/sec",
            "range": "stddev: 0.03742970586711402",
            "extra": "mean: 1.580199016 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 80.08546721060807,
            "unit": "iter/sec",
            "range": "stddev: 0.0007728816083978384",
            "extra": "mean: 12.486659999999858 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.8811428866661575,
            "unit": "iter/sec",
            "range": "stddev: 0.004477358641239081",
            "extra": "mean: 257.65606399999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 120.03211099033484,
            "unit": "iter/sec",
            "range": "stddev: 0.000528554528767307",
            "extra": "mean: 8.331103999999812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.40768235521266744,
            "unit": "iter/sec",
            "range": "stddev: 0.04924097443526055",
            "extra": "mean: 2.452890068 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 213.9379733912079,
            "unit": "iter/sec",
            "range": "stddev: 0.00009826220188687506",
            "extra": "mean: 4.6742520000009335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.93983040574518,
            "unit": "iter/sec",
            "range": "stddev: 0.004693612540645104",
            "extra": "mean: 253.81803199999925 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3370665407709656,
            "unit": "iter/sec",
            "range": "stddev: 0.08257292377550823",
            "extra": "mean: 2.9667732599999987 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4904.894103354696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000179807096625107",
            "extra": "mean: 203.87799999923573 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 45.49593848657908,
            "unit": "iter/sec",
            "range": "stddev: 0.0006863480929747723",
            "extra": "mean: 21.979984000000172 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5460.065083963434,
            "unit": "iter/sec",
            "range": "stddev: 0.000007806021393411224",
            "extra": "mean: 183.14800000041487 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 46.470534985526974,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500518063053165",
            "extra": "mean: 21.519012000000544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5432.184607352391,
            "unit": "iter/sec",
            "range": "stddev: 0.00001153244206514832",
            "extra": "mean: 184.08800000031533 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 46.44266379143085,
            "unit": "iter/sec",
            "range": "stddev: 0.00019476572126466804",
            "extra": "mean: 21.53192600000068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5455.775483932526,
            "unit": "iter/sec",
            "range": "stddev: 0.000008601355708379726",
            "extra": "mean: 183.29199999982396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 46.52865956050013,
            "unit": "iter/sec",
            "range": "stddev: 0.00036016374053998544",
            "extra": "mean: 21.492129999999747 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2664.620238318303,
            "unit": "iter/sec",
            "range": "stddev: 0.00002834509075639785",
            "extra": "mean: 375.2880000007508 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 23.3946650992862,
            "unit": "iter/sec",
            "range": "stddev: 0.00018661435440526448",
            "extra": "mean: 42.74478800000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10000.600035975629,
            "unit": "iter/sec",
            "range": "stddev: 0.000010202275726629635",
            "extra": "mean: 99.99400000026526 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 221.01987410707775,
            "unit": "iter/sec",
            "range": "stddev: 0.0002700925735736939",
            "extra": "mean: 4.524480000000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 17252.682792452346,
            "unit": "iter/sec",
            "range": "stddev: 0.00000484988350305059",
            "extra": "mean: 57.96199999906548 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 243.19456489327337,
            "unit": "iter/sec",
            "range": "stddev: 0.00008230304812106554",
            "extra": "mean: 4.111934000000588 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 10428.398615053888,
            "unit": "iter/sec",
            "range": "stddev: 0.000004843187999920754",
            "extra": "mean: 95.89200000050369 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 48.627247928260324,
            "unit": "iter/sec",
            "range": "stddev: 0.000828571805621168",
            "extra": "mean: 20.564602000000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 91.01266331994997,
            "unit": "iter/sec",
            "range": "stddev: 0.00034936127528643847",
            "extra": "mean: 10.987481999999886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9655.678504560245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044063057089439306",
            "extra": "mean: 103.56599999965965 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 222.9969632273084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002593847633913825",
            "extra": "mean: 4.484366000000932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 17275.334277668477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046708917785681245",
            "extra": "mean: 57.88600000016686 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 239.31620658922841,
            "unit": "iter/sec",
            "range": "stddev: 0.00015006806928863383",
            "extra": "mean: 4.178572000000145 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10670.081092633567,
            "unit": "iter/sec",
            "range": "stddev: 0.000005453975614451938",
            "extra": "mean: 93.71999999984837 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 41.576542581199014,
            "unit": "iter/sec",
            "range": "stddev: 0.0002673163245674607",
            "extra": "mean: 24.052023999999506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.0232411029507,
            "unit": "iter/sec",
            "range": "stddev: 0.0005700044699399223",
            "extra": "mean: 11.761490000000663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9216.759756022519,
            "unit": "iter/sec",
            "range": "stddev: 0.000004348668761223635",
            "extra": "mean: 108.49799999903098 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 220.49433064977669,
            "unit": "iter/sec",
            "range": "stddev: 0.0002716418872891118",
            "extra": "mean: 4.535263999999871 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 15358.152107058218,
            "unit": "iter/sec",
            "range": "stddev: 0.000003940897106094454",
            "extra": "mean: 65.11200000034023 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 231.26734505089337,
            "unit": "iter/sec",
            "range": "stddev: 0.0002569622790416979",
            "extra": "mean: 4.323999999999728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9451.438508958276,
            "unit": "iter/sec",
            "range": "stddev: 0.000004260989323200211",
            "extra": "mean: 105.80399999980727 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 34.12767778557756,
            "unit": "iter/sec",
            "range": "stddev: 0.0004512256768511952",
            "extra": "mean: 29.301730000000248 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 92.64684246590704,
            "unit": "iter/sec",
            "range": "stddev: 0.00018380935933796246",
            "extra": "mean: 10.79367599999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5123.318270770726,
            "unit": "iter/sec",
            "range": "stddev: 0.000006886960867276564",
            "extra": "mean: 195.18600000026254 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 119.77740566931328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675481346892687",
            "extra": "mean: 8.348819999999366 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7050.495649854636,
            "unit": "iter/sec",
            "range": "stddev: 0.000005880070578412414",
            "extra": "mean: 141.83399999978974 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 119.01432337382509,
            "unit": "iter/sec",
            "range": "stddev: 0.00013895816114903943",
            "extra": "mean: 8.402349999999501 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5120.275265978232,
            "unit": "iter/sec",
            "range": "stddev: 0.000006736955544700926",
            "extra": "mean: 195.30200000076547 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.063583827653915,
            "unit": "iter/sec",
            "range": "stddev: 0.00266462309432777",
            "extra": "mean: 58.60433600000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 45.37538191324675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008080753113232219",
            "extra": "mean: 22.0383819999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2481.8083448353996,
            "unit": "iter/sec",
            "range": "stddev: 0.00001702464449034873",
            "extra": "mean: 402.93199999950957 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 58.92370664526171,
            "unit": "iter/sec",
            "range": "stddev: 0.00011145802402682563",
            "extra": "mean: 16.97109800000021 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3187.6573905915984,
            "unit": "iter/sec",
            "range": "stddev: 0.000036362544602624894",
            "extra": "mean: 313.7099999992188 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 56.63924685207621,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551517885751306",
            "extra": "mean: 17.655601999999817 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2477.0133164107797,
            "unit": "iter/sec",
            "range": "stddev: 0.000016740427713568558",
            "extra": "mean: 403.7120000020878 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.822862507157431,
            "unit": "iter/sec",
            "range": "stddev: 0.003124537944006917",
            "extra": "mean: 113.34190000000147 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.0922263502983,
            "unit": "iter/sec",
            "range": "stddev: 0.002202925748857068",
            "extra": "mean: 47.41083200000162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1041.5603407159408,
            "unit": "iter/sec",
            "range": "stddev: 0.00007965308983061477",
            "extra": "mean: 960.0979999993342 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 519.6025248527227,
            "unit": "iter/sec",
            "range": "stddev: 0.00016833148716249017",
            "extra": "mean: 1.924547999999504 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1078.6788341649938,
            "unit": "iter/sec",
            "range": "stddev: 0.00006212367865956953",
            "extra": "mean: 927.0599999990736 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 54.03056098202445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005243146474014241",
            "extra": "mean: 18.508044000000154 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1015.3851152671637,
            "unit": "iter/sec",
            "range": "stddev: 0.00006291154838352859",
            "extra": "mean: 984.8479999993742 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 519.4308699842677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000584894608452824",
            "extra": "mean: 1.9251840000003995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1070.223805199904,
            "unit": "iter/sec",
            "range": "stddev: 0.000010088767517464329",
            "extra": "mean: 934.3840000019554 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 44.11591226545117,
            "unit": "iter/sec",
            "range": "stddev: 0.001212983532295839",
            "extra": "mean: 22.667557999999417 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 873.757734941447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818690870015183",
            "extra": "mean: 1.1444819999985612 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 456.58764656461256,
            "unit": "iter/sec",
            "range": "stddev: 0.00015359307812955403",
            "extra": "mean: 2.1901600000001054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 793.9091291612895,
            "unit": "iter/sec",
            "range": "stddev: 0.000042071140346489866",
            "extra": "mean: 1.2595899999996618 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 38.53368537708242,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258899945301247",
            "extra": "mean: 25.95132000000035 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 453.79257141534043,
            "unit": "iter/sec",
            "range": "stddev: 0.000020280627456453944",
            "extra": "mean: 2.2036500000012893 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 241.78090008259073,
            "unit": "iter/sec",
            "range": "stddev: 0.00010100901311427175",
            "extra": "mean: 4.135976000000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 454.15859399792146,
            "unit": "iter/sec",
            "range": "stddev: 0.000011041040710386537",
            "extra": "mean: 2.2018739999987247 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 19.036516226155747,
            "unit": "iter/sec",
            "range": "stddev: 0.0014008804387793106",
            "extra": "mean: 52.53061999999886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 221.18618612639557,
            "unit": "iter/sec",
            "range": "stddev: 0.00016969339857528468",
            "extra": "mean: 4.521078000000216 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 119.25020242725142,
            "unit": "iter/sec",
            "range": "stddev: 0.00010780764165994982",
            "extra": "mean: 8.385729999997693 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 227.0294961261482,
            "unit": "iter/sec",
            "range": "stddev: 0.000024925100400543408",
            "extra": "mean: 4.404714000000922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.612270609409737,
            "unit": "iter/sec",
            "range": "stddev: 0.0031226205256114402",
            "extra": "mean: 104.03369200000157 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 66.94271163235096,
            "unit": "iter/sec",
            "range": "stddev: 0.00004743718193522749",
            "extra": "mean: 14.938146000000643 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 45.626137060369295,
            "unit": "iter/sec",
            "range": "stddev: 0.00014096436737825313",
            "extra": "mean: 21.917261999999482 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.304814258720963,
            "unit": "iter/sec",
            "range": "stddev: 0.0029099149714411857",
            "extra": "mean: 41.144111999999495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.502369511581636,
            "unit": "iter/sec",
            "range": "stddev: 0.002287573240253369",
            "extra": "mean: 79.98483800000031 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 545.7287989815567,
            "unit": "iter/sec",
            "range": "stddev: 0.000017796092828577765",
            "extra": "mean: 1.8324120000011135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 269.65094763434445,
            "unit": "iter/sec",
            "range": "stddev: 0.00020484254079784357",
            "extra": "mean: 3.7084979999997363 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 68.12457805338994,
            "unit": "iter/sec",
            "range": "stddev: 0.00027988032201231",
            "extra": "mean: 14.67899000000102 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 95.72116806626674,
            "unit": "iter/sec",
            "range": "stddev: 0.00015416394747168",
            "extra": "mean: 10.447010000000319 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 174.56631617243136,
            "unit": "iter/sec",
            "range": "stddev: 0.00007201784966064432",
            "extra": "mean: 5.728481999999531 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 157.08865706791687,
            "unit": "iter/sec",
            "range": "stddev: 0.000233836310952395",
            "extra": "mean: 6.365832000000182 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 128.33734858117168,
            "unit": "iter/sec",
            "range": "stddev: 0.00037316474087331473",
            "extra": "mean: 7.791964000000462 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 18.216234278843945,
            "unit": "iter/sec",
            "range": "stddev: 0.0015345524879636467",
            "extra": "mean: 54.896087999998144 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1286611142408869,
            "unit": "iter/sec",
            "range": "stddev: 0.014437381846332479",
            "extra": "mean: 886.005540000001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.743457215974193,
            "unit": "iter/sec",
            "range": "stddev: 0.0018298256816826363",
            "extra": "mean: 63.51845000000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.890617106803067,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960991394576859",
            "extra": "mean: 59.2044680000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.169473969971865,
            "unit": "iter/sec",
            "range": "stddev: 0.0016320565886422367",
            "extra": "mean: 65.92186399999834 msec\nrounds: 5"
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
        "date": 1649829162444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.6012441376592224,
            "unit": "iter/sec",
            "range": "stddev: 0.02297265451935001",
            "extra": "mean: 1.6632178800000001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 77.35519494282251,
            "unit": "iter/sec",
            "range": "stddev: 0.00033042224350036817",
            "extra": "mean: 12.92738000000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.799735228369709,
            "unit": "iter/sec",
            "range": "stddev: 0.0061691490737478165",
            "extra": "mean: 263.17623200000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 109.60854841453077,
            "unit": "iter/sec",
            "range": "stddev: 0.00012489496579122096",
            "extra": "mean: 9.123376000000292 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3640549039238939,
            "unit": "iter/sec",
            "range": "stddev: 0.046564641849060645",
            "extra": "mean: 2.746838428 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 227.20518536761227,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882340745277634",
            "extra": "mean: 4.401308000000199 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.6296641474667695,
            "unit": "iter/sec",
            "range": "stddev: 0.0005717456153565382",
            "extra": "mean: 275.5075840000029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.313241514710869,
            "unit": "iter/sec",
            "range": "stddev: 0.0863114557238235",
            "extra": "mean: 3.1924248639999995 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 4089.1433244658547,
            "unit": "iter/sec",
            "range": "stddev: 0.000028801162303828096",
            "extra": "mean: 244.55000000045857 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 42.44155034569365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007502803285635916",
            "extra": "mean: 23.561816000000704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 4963.813797425177,
            "unit": "iter/sec",
            "range": "stddev: 0.000008568463689757741",
            "extra": "mean: 201.4579999996613 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 41.6572486570319,
            "unit": "iter/sec",
            "range": "stddev: 0.0002197299527374416",
            "extra": "mean: 24.00542600000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5000.400032011784,
            "unit": "iter/sec",
            "range": "stddev: 0.000008964752087813757",
            "extra": "mean: 199.98399999963112 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 42.44860535107095,
            "unit": "iter/sec",
            "range": "stddev: 0.00038207514960990016",
            "extra": "mean: 23.55790000000013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5027.904872059793,
            "unit": "iter/sec",
            "range": "stddev: 0.000008034506829685472",
            "extra": "mean: 198.88999999920998 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 44.54596172147764,
            "unit": "iter/sec",
            "range": "stddev: 0.0007169953477055596",
            "extra": "mean: 22.44872399999963 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2527.0648647017174,
            "unit": "iter/sec",
            "range": "stddev: 0.000030118101368191048",
            "extra": "mean: 395.7159999998794 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 21.22268020294504,
            "unit": "iter/sec",
            "range": "stddev: 0.0014269170099619238",
            "extra": "mean: 47.11940199999958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9426.66993454728,
            "unit": "iter/sec",
            "range": "stddev: 0.000011872946980419464",
            "extra": "mean: 106.08200000035595 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 209.15636362416933,
            "unit": "iter/sec",
            "range": "stddev: 0.000044921771670663755",
            "extra": "mean: 4.781112000000576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 13850.031854843457,
            "unit": "iter/sec",
            "range": "stddev: 0.00000452967658829295",
            "extra": "mean: 72.20200000119803 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 213.04363943308414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693882715619364",
            "extra": "mean: 4.693873999998459 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9680.916976477292,
            "unit": "iter/sec",
            "range": "stddev: 0.000005287123982386889",
            "extra": "mean: 103.2959999997729 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 43.83000235542889,
            "unit": "iter/sec",
            "range": "stddev: 0.0002199991710685718",
            "extra": "mean: 22.815421999997625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 81.99999967200404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007531244465351988",
            "extra": "mean: 12.195121999999401 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10718.80292414003,
            "unit": "iter/sec",
            "range": "stddev: 0.000004970732339423681",
            "extra": "mean: 93.29399999955967 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 208.8961343352311,
            "unit": "iter/sec",
            "range": "stddev: 0.00002264568104359276",
            "extra": "mean: 4.787068000000545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14880.95238126399,
            "unit": "iter/sec",
            "range": "stddev: 0.000003820641308869306",
            "extra": "mean: 67.19999999859283 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 210.7920469003924,
            "unit": "iter/sec",
            "range": "stddev: 0.00009322337941962767",
            "extra": "mean: 4.744011999999884 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 9121.258003873176,
            "unit": "iter/sec",
            "range": "stddev: 0.000007056516846408675",
            "extra": "mean: 109.63400000036927 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 36.99328357342209,
            "unit": "iter/sec",
            "range": "stddev: 0.00033130871695383185",
            "extra": "mean: 27.031933999999183 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 86.6459825377198,
            "unit": "iter/sec",
            "range": "stddev: 0.0004095872580764247",
            "extra": "mean: 11.541215999999395 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9717.228646448288,
            "unit": "iter/sec",
            "range": "stddev: 0.000005218529486591903",
            "extra": "mean: 102.90999999938322 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 209.29924936912448,
            "unit": "iter/sec",
            "range": "stddev: 0.00002005520555878779",
            "extra": "mean: 4.777848000001086 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11173.683739849996,
            "unit": "iter/sec",
            "range": "stddev: 0.000030843199897089024",
            "extra": "mean: 89.49600000164537 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 209.8664074396687,
            "unit": "iter/sec",
            "range": "stddev: 0.00014718278679933655",
            "extra": "mean: 4.764936000000262 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9705.157320624454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041123071390081546",
            "extra": "mean: 103.03799999974215 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 31.53402300343969,
            "unit": "iter/sec",
            "range": "stddev: 0.0002549275869730844",
            "extra": "mean: 31.711779999999404 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 82.06660788509211,
            "unit": "iter/sec",
            "range": "stddev: 0.00020465890117480977",
            "extra": "mean: 12.185223999999835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4570.759934534155,
            "unit": "iter/sec",
            "range": "stddev: 0.000011581654455837467",
            "extra": "mean: 218.78200000060133 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 103.77679023782443,
            "unit": "iter/sec",
            "range": "stddev: 0.00005306808485324853",
            "extra": "mean: 9.636066000001621 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6474.168069404262,
            "unit": "iter/sec",
            "range": "stddev: 0.000007314673606002679",
            "extra": "mean: 154.45999999997184 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 105.48383006721555,
            "unit": "iter/sec",
            "range": "stddev: 0.00009899326103361228",
            "extra": "mean: 9.480126000001974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5079.958547560811,
            "unit": "iter/sec",
            "range": "stddev: 0.000008710824874867457",
            "extra": "mean: 196.85199999912584 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.736203323076662,
            "unit": "iter/sec",
            "range": "stddev: 0.0001746456699999262",
            "extra": "mean: 63.54773000000137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.41624657616037,
            "unit": "iter/sec",
            "range": "stddev: 0.0012828834688974626",
            "extra": "mean: 23.575872000000118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2115.694646028619,
            "unit": "iter/sec",
            "range": "stddev: 0.00002322117503619736",
            "extra": "mean: 472.65799999877345 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 52.46824254683354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004612340123733817",
            "extra": "mean: 19.05914800000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2824.2364676776433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007045554108867159",
            "extra": "mean: 354.0779999991628 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 53.98937186821224,
            "unit": "iter/sec",
            "range": "stddev: 0.000753374449083322",
            "extra": "mean: 18.522163999999748 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2483.5958494201377,
            "unit": "iter/sec",
            "range": "stddev: 0.00001612062250636522",
            "extra": "mean: 402.6419999991049 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.127950456175515,
            "unit": "iter/sec",
            "range": "stddev: 0.004063635527741417",
            "extra": "mean: 123.0322460000002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.20324694649924,
            "unit": "iter/sec",
            "range": "stddev: 0.0014227037373866652",
            "extra": "mean: 47.162587999999914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 981.7916912919458,
            "unit": "iter/sec",
            "range": "stddev: 0.00002758381192058485",
            "extra": "mean: 1.018546000001379 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 541.7969236767179,
            "unit": "iter/sec",
            "range": "stddev: 0.000013987721402136055",
            "extra": "mean: 1.8457100000011906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 979.694844649383,
            "unit": "iter/sec",
            "range": "stddev: 0.000018165190062726018",
            "extra": "mean: 1.0207260000004226 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 50.28628990568801,
            "unit": "iter/sec",
            "range": "stddev: 0.00023733952995873446",
            "extra": "mean: 19.886136000001216 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 887.0705913038021,
            "unit": "iter/sec",
            "range": "stddev: 0.00006384663092076099",
            "extra": "mean: 1.1273059999996349 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 470.9854145238394,
            "unit": "iter/sec",
            "range": "stddev: 0.000011139305183662509",
            "extra": "mean: 2.1232079999992948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 944.3619701651495,
            "unit": "iter/sec",
            "range": "stddev: 0.000007848718366995328",
            "extra": "mean: 1.058916000000636 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 40.8767139503968,
            "unit": "iter/sec",
            "range": "stddev: 0.00024140869470583838",
            "extra": "mean: 24.463805999999977 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 776.894535012644,
            "unit": "iter/sec",
            "range": "stddev: 0.00003388817684691133",
            "extra": "mean: 1.287176000000727 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 462.49746782635293,
            "unit": "iter/sec",
            "range": "stddev: 0.00015573978980952112",
            "extra": "mean: 2.16217400000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 869.7225237260805,
            "unit": "iter/sec",
            "range": "stddev: 0.00003867508978948427",
            "extra": "mean: 1.149791999999934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.53269082174336,
            "unit": "iter/sec",
            "range": "stddev: 0.0009986626346123522",
            "extra": "mean: 28.143097999999327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 395.0451852681908,
            "unit": "iter/sec",
            "range": "stddev: 0.000054437826279342284",
            "extra": "mean: 2.531356000000642 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 212.47039756184327,
            "unit": "iter/sec",
            "range": "stddev: 0.00013854634141522085",
            "extra": "mean: 4.706538000000364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 397.70982772778996,
            "unit": "iter/sec",
            "range": "stddev: 0.00004430464230842229",
            "extra": "mean: 2.5143960000013976 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.856530633235455,
            "unit": "iter/sec",
            "range": "stddev: 0.002363395693277625",
            "extra": "mean: 56.00191999999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 196.88922893841266,
            "unit": "iter/sec",
            "range": "stddev: 0.0005399587983562531",
            "extra": "mean: 5.07899800000132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 113.70440538620178,
            "unit": "iter/sec",
            "range": "stddev: 0.00037001889050285994",
            "extra": "mean: 8.794734000001654 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 215.52569518888015,
            "unit": "iter/sec",
            "range": "stddev: 0.00022640977909568592",
            "extra": "mean: 4.6398180000005596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.891108899991083,
            "unit": "iter/sec",
            "range": "stddev: 0.002506262108680605",
            "extra": "mean: 112.47191000000043 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 59.05259791275031,
            "unit": "iter/sec",
            "range": "stddev: 0.00009448810020350198",
            "extra": "mean: 16.934056000000055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.171364614025755,
            "unit": "iter/sec",
            "range": "stddev: 0.00020028200650783526",
            "extra": "mean: 24.89335399999959 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.38163659004877,
            "unit": "iter/sec",
            "range": "stddev: 0.0011125913937882047",
            "extra": "mean: 41.01447399999984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.789873203499198,
            "unit": "iter/sec",
            "range": "stddev: 0.0009941420624199246",
            "extra": "mean: 78.18685800000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 538.0046483601109,
            "unit": "iter/sec",
            "range": "stddev: 0.00001963014518550083",
            "extra": "mean: 1.8587200000001758 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 245.36938889276303,
            "unit": "iter/sec",
            "range": "stddev: 0.000030085579100506037",
            "extra": "mean: 4.07548800000086 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 65.67588033591676,
            "unit": "iter/sec",
            "range": "stddev: 0.00012949683934348566",
            "extra": "mean: 15.226290000000517 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 98.55677402390363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005458549094125207",
            "extra": "mean: 10.146435999999994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 162.2166318766104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002636560559325823",
            "extra": "mean: 6.164595999999847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 145.09597373186637,
            "unit": "iter/sec",
            "range": "stddev: 0.00008019890242424914",
            "extra": "mean: 6.891989999998032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 119.92786099303255,
            "unit": "iter/sec",
            "range": "stddev: 0.00013640884366394326",
            "extra": "mean: 8.338346000001593 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 17.429186001588658,
            "unit": "iter/sec",
            "range": "stddev: 0.00022711101653428973",
            "extra": "mean: 57.375026000000844 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.0955184413286143,
            "unit": "iter/sec",
            "range": "stddev: 0.011822026933163891",
            "extra": "mean: 912.8098279999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.497050030757254,
            "unit": "iter/sec",
            "range": "stddev: 0.01552087046727784",
            "extra": "mean: 74.09026399999904 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.863384833277252,
            "unit": "iter/sec",
            "range": "stddev: 0.002090502032737981",
            "extra": "mean: 67.27942600000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.34470833320591,
            "unit": "iter/sec",
            "range": "stddev: 0.00040263288399013786",
            "extra": "mean: 69.71211799999764 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}