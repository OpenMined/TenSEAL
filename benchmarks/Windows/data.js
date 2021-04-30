window.BENCHMARK_DATA = {
  "lastUpdate": 1619771573244,
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
      }
    ]
  }
}