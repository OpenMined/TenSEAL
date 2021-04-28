window.BENCHMARK_DATA = {
  "lastUpdate": 1619587712289,
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
          "id": "5ab6feec9d1f7486a91ae826ed5e96e7ded7057f",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-22T05:26:16Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/5ab6feec9d1f7486a91ae826ed5e96e7ded7057f"
        },
        "date": 1619188623525,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0124590385741177,
            "unit": "iter/sec",
            "range": "stddev: 0.01708227054482927",
            "extra": "mean: 987.6942788799988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 88.24413752980706,
            "unit": "iter/sec",
            "range": "stddev: 0.00022824285881641897",
            "extra": "mean: 11.332197560004715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.089364874239206,
            "unit": "iter/sec",
            "range": "stddev: 0.005624029486826259",
            "extra": "mean: 244.5367510000051 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.69478108450512,
            "unit": "iter/sec",
            "range": "stddev: 0.00028778363443301774",
            "extra": "mean: 8.56936352000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.4083583616235782,
            "unit": "iter/sec",
            "range": "stddev: 0.014168642462388106",
            "extra": "mean: 2.448829493840003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 215.75269825051402,
            "unit": "iter/sec",
            "range": "stddev: 0.00039176357098083666",
            "extra": "mean: 4.634936240004208 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.826202366443454,
            "unit": "iter/sec",
            "range": "stddev: 0.0012031685714042918",
            "extra": "mean: 261.35575283999515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3357155274896688,
            "unit": "iter/sec",
            "range": "stddev: 0.03263054403086449",
            "extra": "mean: 2.978712386279999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6309.890324128184,
            "unit": "iter/sec",
            "range": "stddev: 0.00000672040765031685",
            "extra": "mean: 158.48135999704027 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 41.669299159359525,
            "unit": "iter/sec",
            "range": "stddev: 0.0004654043728474313",
            "extra": "mean: 23.99848378000343 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6244.245927415485,
            "unit": "iter/sec",
            "range": "stddev: 0.000007549588902236713",
            "extra": "mean: 160.14743999903658 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 41.41883616307708,
            "unit": "iter/sec",
            "range": "stddev: 0.0003686481209250918",
            "extra": "mean: 24.143604519999826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6268.27987121504,
            "unit": "iter/sec",
            "range": "stddev: 0.000006523223211853588",
            "extra": "mean: 159.53339999896343 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 40.32596474158886,
            "unit": "iter/sec",
            "range": "stddev: 0.000520746499293029",
            "extra": "mean: 24.797918819997452 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6041.430924914667,
            "unit": "iter/sec",
            "range": "stddev: 0.000006365082017902315",
            "extra": "mean: 165.52370000226804 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.01872569018465,
            "unit": "iter/sec",
            "range": "stddev: 0.00041803297463071867",
            "extra": "mean: 24.98830192000014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2917.4602644567594,
            "unit": "iter/sec",
            "range": "stddev: 0.000014621667665699611",
            "extra": "mean: 342.76388000307634 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.36882433963666,
            "unit": "iter/sec",
            "range": "stddev: 0.0007157007467635001",
            "extra": "mean: 49.09463518000166 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 13825.644247300457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052964289545797394",
            "extra": "mean: 72.32936000036716 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 212.26121292783327,
            "unit": "iter/sec",
            "range": "stddev: 0.00012884140662977974",
            "extra": "mean: 4.711176319999595 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 16020.788574785429,
            "unit": "iter/sec",
            "range": "stddev: 0.00000418428483177209",
            "extra": "mean: 62.41890000183048 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 217.1793476912579,
            "unit": "iter/sec",
            "range": "stddev: 0.00011834202709026933",
            "extra": "mean: 4.604489380001269 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 13051.84165387235,
            "unit": "iter/sec",
            "range": "stddev: 0.000004315703088250691",
            "extra": "mean: 76.6175400008251 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.8363475200783,
            "unit": "iter/sec",
            "range": "stddev: 0.00035919638308632936",
            "extra": "mean: 21.816747060004218 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 89.55545627954199,
            "unit": "iter/sec",
            "range": "stddev: 0.00016825335106863758",
            "extra": "mean: 11.16626548000113 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11265.561965640367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040013327158914915",
            "extra": "mean: 88.76610000015715 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 214.9434997367282,
            "unit": "iter/sec",
            "range": "stddev: 0.00016066744672069334",
            "extra": "mean: 4.65238539999973 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15362.347071355469,
            "unit": "iter/sec",
            "range": "stddev: 0.000011088650981228481",
            "extra": "mean: 65.094220001356 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 221.22146840910494,
            "unit": "iter/sec",
            "range": "stddev: 0.00011019388414114923",
            "extra": "mean: 4.520356939999601 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12199.168504519947,
            "unit": "iter/sec",
            "range": "stddev: 0.000003902549429773542",
            "extra": "mean: 81.97280000104001 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 39.37624372671268,
            "unit": "iter/sec",
            "range": "stddev: 0.0003099339790745406",
            "extra": "mean: 25.396023220000643 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 87.48653249817922,
            "unit": "iter/sec",
            "range": "stddev: 0.00024806687610471364",
            "extra": "mean: 11.430330719997528 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12791.544890855474,
            "unit": "iter/sec",
            "range": "stddev: 0.000003453274765683957",
            "extra": "mean: 78.17664000185687 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 215.64796215439262,
            "unit": "iter/sec",
            "range": "stddev: 0.00010890030965599863",
            "extra": "mean: 4.637187340003948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 16851.266675717892,
            "unit": "iter/sec",
            "range": "stddev: 0.000005930410743427013",
            "extra": "mean: 59.342720001041016 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 226.38421245758045,
            "unit": "iter/sec",
            "range": "stddev: 0.0002151988149901363",
            "extra": "mean: 4.417269160001069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 13523.861094726528,
            "unit": "iter/sec",
            "range": "stddev: 0.000004625385823033571",
            "extra": "mean: 73.9433800004008 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 33.497422444694415,
            "unit": "iter/sec",
            "range": "stddev: 0.00043410029725045985",
            "extra": "mean: 29.8530432199982 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 86.40037111515267,
            "unit": "iter/sec",
            "range": "stddev: 0.00020615076334608626",
            "extra": "mean: 11.574024360002113 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5698.654468042659,
            "unit": "iter/sec",
            "range": "stddev: 0.000006805762964231755",
            "extra": "mean: 175.48001999557528 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 103.09205739696445,
            "unit": "iter/sec",
            "range": "stddev: 0.00006878067235528622",
            "extra": "mean: 9.70006832000081 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7245.416006589335,
            "unit": "iter/sec",
            "range": "stddev: 0.000012878604814785497",
            "extra": "mean: 138.01829999692927 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 109.38902568996791,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791699959020025",
            "extra": "mean: 9.141684859998804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6475.800645269098,
            "unit": "iter/sec",
            "range": "stddev: 0.00001174655024517433",
            "extra": "mean: 154.42106000136846 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 17.334058964775032,
            "unit": "iter/sec",
            "range": "stddev: 0.0012924787928932527",
            "extra": "mean: 57.68989260000353 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 44.6588564572921,
            "unit": "iter/sec",
            "range": "stddev: 0.00018144205279570423",
            "extra": "mean: 22.39197506000437 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2819.6324011394768,
            "unit": "iter/sec",
            "range": "stddev: 0.000020802263871476595",
            "extra": "mean: 354.65616000010414 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 53.51453869876473,
            "unit": "iter/sec",
            "range": "stddev: 0.0002928835367692057",
            "extra": "mean: 18.686510699999417 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3316.360641731491,
            "unit": "iter/sec",
            "range": "stddev: 0.000009146001085535557",
            "extra": "mean: 301.5353600017079 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 55.89363091471198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005089587774120517",
            "extra": "mean: 17.89112612000281 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3026.280644788353,
            "unit": "iter/sec",
            "range": "stddev: 0.000017069483863144706",
            "extra": "mean: 330.4386200011322 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.444164265798058,
            "unit": "iter/sec",
            "range": "stddev: 0.0014793192373231496",
            "extra": "mean: 118.42498186000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.400195990602604,
            "unit": "iter/sec",
            "range": "stddev: 0.0003163803064644145",
            "extra": "mean: 44.642466540003625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1074.3725594368684,
            "unit": "iter/sec",
            "range": "stddev: 0.00003160746589602447",
            "extra": "mean: 930.7758200043281 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 533.1421869304728,
            "unit": "iter/sec",
            "range": "stddev: 0.000053980744202971866",
            "extra": "mean: 1.8756722400030412 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1050.8719546979103,
            "unit": "iter/sec",
            "range": "stddev: 0.000004155250791359162",
            "extra": "mean: 951.5907200011497 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 55.18607357182069,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912708114500853",
            "extra": "mean: 18.120513660001052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1034.028385152263,
            "unit": "iter/sec",
            "range": "stddev: 0.00004017851610291164",
            "extra": "mean: 967.0914400021502 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 491.266890947407,
            "unit": "iter/sec",
            "range": "stddev: 0.000055402562437046713",
            "extra": "mean: 2.0355534199984504 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1009.2095620439983,
            "unit": "iter/sec",
            "range": "stddev: 0.00002479791964454252",
            "extra": "mean: 990.874479998638 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 44.51502941396198,
            "unit": "iter/sec",
            "range": "stddev: 0.00022080869683858775",
            "extra": "mean: 22.46432301999903 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 825.474295242705,
            "unit": "iter/sec",
            "range": "stddev: 0.00006857150288643278",
            "extra": "mean: 1.2114247599993178 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 448.57236283270515,
            "unit": "iter/sec",
            "range": "stddev: 0.00008325231511067797",
            "extra": "mean: 2.2292947199980517 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 846.3076528060595,
            "unit": "iter/sec",
            "range": "stddev: 0.000025434367339408746",
            "extra": "mean: 1.181603399998039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 37.677403186319616,
            "unit": "iter/sec",
            "range": "stddev: 0.0006167005884491549",
            "extra": "mean: 26.541107280002052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 407.17955606147916,
            "unit": "iter/sec",
            "range": "stddev: 0.0001044291247313988",
            "extra": "mean: 2.45591898000157 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 231.77082159985042,
            "unit": "iter/sec",
            "range": "stddev: 0.0000758183743725239",
            "extra": "mean: 4.3146069600015835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 391.66730012334557,
            "unit": "iter/sec",
            "range": "stddev: 0.00004077707540949133",
            "extra": "mean: 2.553187359999356 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.071879943945067,
            "unit": "iter/sec",
            "range": "stddev: 0.0013524096520482643",
            "extra": "mean: 55.33458627999835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 206.2629236871289,
            "unit": "iter/sec",
            "range": "stddev: 0.00013150390803314376",
            "extra": "mean: 4.848181059999206 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 109.79585557757974,
            "unit": "iter/sec",
            "range": "stddev: 0.00018065626932162646",
            "extra": "mean: 9.107811899998524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 207.29264135656925,
            "unit": "iter/sec",
            "range": "stddev: 0.00012553801842569772",
            "extra": "mean: 4.824097920002259 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.256228927606918,
            "unit": "iter/sec",
            "range": "stddev: 0.0011003566063319831",
            "extra": "mean: 108.03535736000185 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.211343598051336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002860438690785442",
            "extra": "mean: 16.33684119999998 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 41.535126444173024,
            "unit": "iter/sec",
            "range": "stddev: 0.0004267579499211621",
            "extra": "mean: 24.076007119999762 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.295557383668697,
            "unit": "iter/sec",
            "range": "stddev: 0.0006661781000167952",
            "extra": "mean: 41.1597883599984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.387771767669602,
            "unit": "iter/sec",
            "range": "stddev: 0.0004505773421932326",
            "extra": "mean: 80.72476783999718 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 567.5354018077014,
            "unit": "iter/sec",
            "range": "stddev: 0.00008497326180311601",
            "extra": "mean: 1.7620046200022443 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 251.0981665318972,
            "unit": "iter/sec",
            "range": "stddev: 0.00009048621154593478",
            "extra": "mean: 3.982506180000201 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 70.27402452136764,
            "unit": "iter/sec",
            "range": "stddev: 0.0005891962469169676",
            "extra": "mean: 14.230008980002822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 98.53088227724609,
            "unit": "iter/sec",
            "range": "stddev: 0.00020633007447830065",
            "extra": "mean: 10.14910226000211 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 174.42794689037774,
            "unit": "iter/sec",
            "range": "stddev: 0.00035176886355495733",
            "extra": "mean: 5.733026259997587 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.6539603907583,
            "unit": "iter/sec",
            "range": "stddev: 0.0002109608418786316",
            "extra": "mean: 6.148021220003556 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 144.4288439468256,
            "unit": "iter/sec",
            "range": "stddev: 0.00006896576974037023",
            "extra": "mean: 6.9238247199996295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.23008345948763,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039412858184808",
            "extra": "mean: 47.10297073999982 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.365178465731438,
            "unit": "iter/sec",
            "range": "stddev: 0.011923104528319056",
            "extra": "mean: 732.5049618799972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 16.172975944912118,
            "unit": "iter/sec",
            "range": "stddev: 0.001022829753301394",
            "extra": "mean: 61.83153943999969 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 16.07057237839689,
            "unit": "iter/sec",
            "range": "stddev: 0.0008958696961435457",
            "extra": "mean: 62.22553723999681 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.918005685430993,
            "unit": "iter/sec",
            "range": "stddev: 0.0016533781331342652",
            "extra": "mean: 62.82194012000218 msec\nrounds: 5"
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
          "id": "07015aa1abba5114f0abe8e066ef9f162df615a1",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/07015aa1abba5114f0abe8e066ef9f162df615a1"
        },
        "date": 1619587711407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9739485536411728,
            "unit": "iter/sec",
            "range": "stddev: 0.00923005450046318",
            "extra": "mean: 1.0267482776799988 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 87.16723480990716,
            "unit": "iter/sec",
            "range": "stddev: 0.0003883523081642371",
            "extra": "mean: 11.472200560001511 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.5954091678059497,
            "unit": "iter/sec",
            "range": "stddev: 0.0013412014006813934",
            "extra": "mean: 278.132460959996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 97.68253270645106,
            "unit": "iter/sec",
            "range": "stddev: 0.00043013826611896567",
            "extra": "mean: 10.237244800000553 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3606155255906235,
            "unit": "iter/sec",
            "range": "stddev: 0.007755644102333104",
            "extra": "mean: 2.7730364585999996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 194.94327591316662,
            "unit": "iter/sec",
            "range": "stddev: 0.00018833212904366718",
            "extra": "mean: 5.129697319980551 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.4621140139182236,
            "unit": "iter/sec",
            "range": "stddev: 0.0028846932601966145",
            "extra": "mean: 288.84086312000363 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2971762182994513,
            "unit": "iter/sec",
            "range": "stddev: 0.010080778692454762",
            "extra": "mean: 3.36500681556 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5700.532771646466,
            "unit": "iter/sec",
            "range": "stddev: 0.000013762878328314387",
            "extra": "mean: 175.4222000045047 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 37.53865693351785,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315429585539793",
            "extra": "mean: 26.63920560000406 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5806.587224647342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000122938936070983",
            "extra": "mean: 172.21820000486335 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 37.628662944040606,
            "unit": "iter/sec",
            "range": "stddev: 0.0005659911815242178",
            "extra": "mean: 26.57548585999848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5527.590248098785,
            "unit": "iter/sec",
            "range": "stddev: 0.000014137665908109733",
            "extra": "mean: 180.91066000124556 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 37.07027100179711,
            "unit": "iter/sec",
            "range": "stddev: 0.0006505035820591333",
            "extra": "mean: 26.975794160002806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5700.467780335892,
            "unit": "iter/sec",
            "range": "stddev: 0.000008903248285996168",
            "extra": "mean: 175.4242000015438 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 37.3715193325404,
            "unit": "iter/sec",
            "range": "stddev: 0.0009540052280651212",
            "extra": "mean: 26.758344800000486 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3007.4791796435543,
            "unit": "iter/sec",
            "range": "stddev: 0.000020706699198622823",
            "extra": "mean: 332.504380003229 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 18.99935179873625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006372255886451485",
            "extra": "mean: 52.63337457999569 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 8978.424128899342,
            "unit": "iter/sec",
            "range": "stddev: 0.000009250231331303197",
            "extra": "mean: 111.37811999560654 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 183.29842390400992,
            "unit": "iter/sec",
            "range": "stddev: 0.00021529594441282293",
            "extra": "mean: 5.455584280002768 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11045.805851953692,
            "unit": "iter/sec",
            "range": "stddev: 0.000006559788102517865",
            "extra": "mean: 90.53210000274703 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 192.12622908428386,
            "unit": "iter/sec",
            "range": "stddev: 0.00018282647942552348",
            "extra": "mean: 5.204911400001038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9089.233366506154,
            "unit": "iter/sec",
            "range": "stddev: 0.000012030685371994934",
            "extra": "mean: 110.02028000348218 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 41.67047298656787,
            "unit": "iter/sec",
            "range": "stddev: 0.0003149222613616117",
            "extra": "mean: 23.997807760001706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 80.1522757300902,
            "unit": "iter/sec",
            "range": "stddev: 0.00019645123725436898",
            "extra": "mean: 12.476252119995479 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 7951.380804659709,
            "unit": "iter/sec",
            "range": "stddev: 0.00006501645410432919",
            "extra": "mean: 125.76432000514616 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 190.48977874705457,
            "unit": "iter/sec",
            "range": "stddev: 0.00012510563246067566",
            "extra": "mean: 5.249625500000548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11119.977439838218,
            "unit": "iter/sec",
            "range": "stddev: 0.000008944288441042321",
            "extra": "mean: 89.9282399996082 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 193.02882870873418,
            "unit": "iter/sec",
            "range": "stddev: 0.00017754456993956748",
            "extra": "mean: 5.180573320003531 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10004.776279967664,
            "unit": "iter/sec",
            "range": "stddev: 0.000009544483576354358",
            "extra": "mean: 99.95226000228286 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.528622609098704,
            "unit": "iter/sec",
            "range": "stddev: 0.0004643902017011657",
            "extra": "mean: 28.96147961999759 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 80.93815453774965,
            "unit": "iter/sec",
            "range": "stddev: 0.0004157002582385527",
            "extra": "mean: 12.355112440000084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 8862.845515724577,
            "unit": "iter/sec",
            "range": "stddev: 0.00001532310072681186",
            "extra": "mean: 112.83058000117308 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 190.99502391112702,
            "unit": "iter/sec",
            "range": "stddev: 0.00012005591974973822",
            "extra": "mean: 5.23573850000048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11342.441464636364,
            "unit": "iter/sec",
            "range": "stddev: 0.000005787506770943443",
            "extra": "mean: 88.16444000331103 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 201.4801075241499,
            "unit": "iter/sec",
            "range": "stddev: 0.000058415321235622835",
            "extra": "mean: 4.963269140007469 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9944.458211269926,
            "unit": "iter/sec",
            "range": "stddev: 0.000004491659721309478",
            "extra": "mean: 100.55852000732557 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 29.887069871421094,
            "unit": "iter/sec",
            "range": "stddev: 0.000505837789271945",
            "extra": "mean: 33.459285380004076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 81.39480627454957,
            "unit": "iter/sec",
            "range": "stddev: 0.00012194891485979429",
            "extra": "mean: 12.285796180003672 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5377.878226834194,
            "unit": "iter/sec",
            "range": "stddev: 0.000008678493261623362",
            "extra": "mean: 185.9469400051239 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 93.49074309906241,
            "unit": "iter/sec",
            "range": "stddev: 0.0006764815111932874",
            "extra": "mean: 10.696246140009862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5782.389709150265,
            "unit": "iter/sec",
            "range": "stddev: 0.000008300565037129665",
            "extra": "mean: 172.93887999585422 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 98.40160913245694,
            "unit": "iter/sec",
            "range": "stddev: 0.0001833780526239146",
            "extra": "mean: 10.162435439992805 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5358.225218760846,
            "unit": "iter/sec",
            "range": "stddev: 0.000011853280066238606",
            "extra": "mean: 186.62895999568718 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.801921350137055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007010990971033806",
            "extra": "mean: 67.55879702000584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 39.65972404134239,
            "unit": "iter/sec",
            "range": "stddev: 0.0004132323514069395",
            "extra": "mean: 25.214497179999853 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2593.5725980721404,
            "unit": "iter/sec",
            "range": "stddev: 0.00001642566739474746",
            "extra": "mean: 385.56853999125457 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 47.51020964710251,
            "unit": "iter/sec",
            "range": "stddev: 0.00020639871509879547",
            "extra": "mean: 21.048107500005244 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3057.0339201645024,
            "unit": "iter/sec",
            "range": "stddev: 0.000012570067775549145",
            "extra": "mean: 327.11446000121214 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 49.75722415386594,
            "unit": "iter/sec",
            "range": "stddev: 0.00023242214883658323",
            "extra": "mean: 20.097584159993858 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2846.4488302253703,
            "unit": "iter/sec",
            "range": "stddev: 0.00001928202951771635",
            "extra": "mean: 351.3149399987014 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.466592761973249,
            "unit": "iter/sec",
            "range": "stddev: 0.0007615363616798597",
            "extra": "mean: 133.92989705999753 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.059094702793068,
            "unit": "iter/sec",
            "range": "stddev: 0.00032173929658619785",
            "extra": "mean: 49.852698479994615 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1087.1407211977507,
            "unit": "iter/sec",
            "range": "stddev: 0.00002355417747386119",
            "extra": "mean: 919.8441199941954 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 467.1823986605637,
            "unit": "iter/sec",
            "range": "stddev: 0.00004433564211808573",
            "extra": "mean: 2.140491599998313 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1071.4298724482157,
            "unit": "iter/sec",
            "range": "stddev: 0.000017448480235547292",
            "extra": "mean: 933.3322000020416 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 48.27571490459662,
            "unit": "iter/sec",
            "range": "stddev: 0.00038812615560847964",
            "extra": "mean: 20.714348860005888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 952.7868395735343,
            "unit": "iter/sec",
            "range": "stddev: 0.000029479159815505265",
            "extra": "mean: 1.0495527000011862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 452.26932283577236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000734782013758305",
            "extra": "mean: 2.2110719200009044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 973.0971717401518,
            "unit": "iter/sec",
            "range": "stddev: 0.00004057873425320339",
            "extra": "mean: 1.0276465999913853 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 38.64684111645654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006561530815223478",
            "extra": "mean: 25.875336020003488 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 781.3905648347833,
            "unit": "iter/sec",
            "range": "stddev: 0.000016009598815301807",
            "extra": "mean: 1.2797697400037578 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 413.00693307128876,
            "unit": "iter/sec",
            "range": "stddev: 0.000057396477854519094",
            "extra": "mean: 2.4212668600102916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 788.2215113713282,
            "unit": "iter/sec",
            "range": "stddev: 0.000025926724623698812",
            "extra": "mean: 1.2686788999963028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 32.72017976331107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007861611653751279",
            "extra": "mean: 30.56217927999569 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 396.5827542766844,
            "unit": "iter/sec",
            "range": "stddev: 0.000041064161883400455",
            "extra": "mean: 2.521541820001403 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 206.49408364718866,
            "unit": "iter/sec",
            "range": "stddev: 0.00011255426800213481",
            "extra": "mean: 4.842753759999141 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 404.47579322504254,
            "unit": "iter/sec",
            "range": "stddev: 0.000021789882651908307",
            "extra": "mean: 2.4723358399933204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.424172308577024,
            "unit": "iter/sec",
            "range": "stddev: 0.0018822678760678593",
            "extra": "mean: 60.88586877999205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 209.37200078562927,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067013401488142",
            "extra": "mean: 4.776187819993538 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 100.33763674968522,
            "unit": "iter/sec",
            "range": "stddev: 0.00026012346834802157",
            "extra": "mean: 9.966349940000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 195.01826390882084,
            "unit": "iter/sec",
            "range": "stddev: 0.0004019720034039477",
            "extra": "mean: 5.127724860003582 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.076079759628481,
            "unit": "iter/sec",
            "range": "stddev: 0.0023250683184840794",
            "extra": "mean: 123.82245220000186 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.60203962478467,
            "unit": "iter/sec",
            "range": "stddev: 0.0003396633845740853",
            "extra": "mean: 17.064252479995048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.6034849604818,
            "unit": "iter/sec",
            "range": "stddev: 0.00017978152599784392",
            "extra": "mean: 25.904397000003883 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 22.711820905100296,
            "unit": "iter/sec",
            "range": "stddev: 0.00030095004482679074",
            "extra": "mean: 44.02993507999326 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.441062597658643,
            "unit": "iter/sec",
            "range": "stddev: 0.0011205888793696442",
            "extra": "mean: 87.4044688999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 497.2992374620265,
            "unit": "iter/sec",
            "range": "stddev: 0.000025958520943022848",
            "extra": "mean: 2.0108617200048684 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 228.86564569048747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008118795022033512",
            "extra": "mean: 4.369375740002397 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 61.85794614392537,
            "unit": "iter/sec",
            "range": "stddev: 0.00038935293429513755",
            "extra": "mean: 16.166071819993704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 87.43137445844559,
            "unit": "iter/sec",
            "range": "stddev: 0.00039868142290973004",
            "extra": "mean: 11.437541800000872 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 153.2862679700766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004395127764380103",
            "extra": "mean: 6.523741580003843 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 153.86316022300772,
            "unit": "iter/sec",
            "range": "stddev: 0.00011147886700330432",
            "extra": "mean: 6.499281559995325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 143.5031538750436,
            "unit": "iter/sec",
            "range": "stddev: 0.00007853317076450828",
            "extra": "mean: 6.968487959998129 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.1134641452267,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402153332021579",
            "extra": "mean: 47.363141979999455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3211998741245614,
            "unit": "iter/sec",
            "range": "stddev: 0.003458204857145088",
            "extra": "mean: 756.887749980001 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 14.059168057131656,
            "unit": "iter/sec",
            "range": "stddev: 0.0008502778709282656",
            "extra": "mean: 71.12796404000164 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.30758631744448,
            "unit": "iter/sec",
            "range": "stddev: 0.0005092240462502116",
            "extra": "mean: 69.8929908800028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.981987107239705,
            "unit": "iter/sec",
            "range": "stddev: 0.0005236655509658221",
            "extra": "mean: 71.52059233999807 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}