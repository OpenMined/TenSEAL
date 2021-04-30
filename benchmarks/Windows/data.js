window.BENCHMARK_DATA = {
  "lastUpdate": 1619781824608,
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
      }
    ]
  }
}