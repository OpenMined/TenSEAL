window.BENCHMARK_DATA = {
  "lastUpdate": 1631728162652,
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
      }
    ]
  }
}