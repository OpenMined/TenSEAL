window.BENCHMARK_DATA = {
  "lastUpdate": 1619588494612,
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
          "id": "d3891cc573a8ec769bcbd1787df8cd88d1f62515",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/d3891cc573a8ec769bcbd1787df8cd88d1f62515"
        },
        "date": 1619587900287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.2616486801360982,
            "unit": "iter/sec",
            "range": "stddev: 0.007988784384899724",
            "extra": "mean: 792.6136774400039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 110.70109295891844,
            "unit": "iter/sec",
            "range": "stddev: 0.00004961594099180965",
            "extra": "mean: 9.033334480004669 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.724064158563069,
            "unit": "iter/sec",
            "range": "stddev: 0.009791016937582522",
            "extra": "mean: 211.68213775999448 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 123.90201319313225,
            "unit": "iter/sec",
            "range": "stddev: 0.00009921234071946696",
            "extra": "mean: 8.070893879998948 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.5031601270454933,
            "unit": "iter/sec",
            "range": "stddev: 0.0021942161817555933",
            "extra": "mean: 1.9874388812800043 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 277.9318323036652,
            "unit": "iter/sec",
            "range": "stddev: 0.00012346806527975792",
            "extra": "mean: 3.598004560008121 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.817128234654863,
            "unit": "iter/sec",
            "range": "stddev: 0.00464029911251294",
            "extra": "mean: 207.59256371999982 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.4142007151361339,
            "unit": "iter/sec",
            "range": "stddev: 0.0031831923403898995",
            "extra": "mean: 2.4142884438800003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 7254.774476055811,
            "unit": "iter/sec",
            "range": "stddev: 0.00000964000198573802",
            "extra": "mean: 137.84025999711957 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 51.15910781299194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000928100715792974",
            "extra": "mean: 19.546861599999374 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 7482.888131320221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068668865890264586",
            "extra": "mean: 133.63824000180102 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 51.063175709238614,
            "unit": "iter/sec",
            "range": "stddev: 0.00012593731046593105",
            "extra": "mean: 19.583584179999892 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7419.265041592013,
            "unit": "iter/sec",
            "range": "stddev: 0.000007067292257707009",
            "extra": "mean: 134.78424000140876 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 50.97372881506978,
            "unit": "iter/sec",
            "range": "stddev: 0.00012111977218141904",
            "extra": "mean: 19.61794875999658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7460.112271561507,
            "unit": "iter/sec",
            "range": "stddev: 0.000007033035198826407",
            "extra": "mean: 134.0462400025899 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 50.94845412940273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000615037294043343",
            "extra": "mean: 19.627680899995994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3660.449125371971,
            "unit": "iter/sec",
            "range": "stddev: 0.000011908921248277354",
            "extra": "mean: 273.1905200016627 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 25.525347528001397,
            "unit": "iter/sec",
            "range": "stddev: 0.00016885769954069128",
            "extra": "mean: 39.17674378000129 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 15902.539062974716,
            "unit": "iter/sec",
            "range": "stddev: 0.000003994298789410342",
            "extra": "mean: 62.88304000008793 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 266.767685542324,
            "unit": "iter/sec",
            "range": "stddev: 0.00002114823273819933",
            "extra": "mean: 3.7485799600017344 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 21863.304498472964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032173696855469363",
            "extra": "mean: 45.73874000016076 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 281.11644157865715,
            "unit": "iter/sec",
            "range": "stddev: 0.000021624867515929252",
            "extra": "mean: 3.557244799999353 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 14685.340152577382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041093305206682145",
            "extra": "mean: 68.0951200047275 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 57.83361617017471,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693606833730288",
            "extra": "mean: 17.290981720000218 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 110.29824004379486,
            "unit": "iter/sec",
            "range": "stddev: 0.00004252865117537967",
            "extra": "mean: 9.066327799998817 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 14835.232490778253,
            "unit": "iter/sec",
            "range": "stddev: 0.000003798300474456241",
            "extra": "mean: 67.40709999803585 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 268.2720380194333,
            "unit": "iter/sec",
            "range": "stddev: 0.00002181765905217044",
            "extra": "mean: 3.7275595599999174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 20421.991872259958,
            "unit": "iter/sec",
            "range": "stddev: 0.000010315129216031552",
            "extra": "mean: 48.966819997531275 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 276.83794065316573,
            "unit": "iter/sec",
            "range": "stddev: 0.000028766352849807222",
            "extra": "mean: 3.6122216399985523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 14375.015991804104,
            "unit": "iter/sec",
            "range": "stddev: 0.000004339344895497815",
            "extra": "mean: 69.56514000194147 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 48.70304464219606,
            "unit": "iter/sec",
            "range": "stddev: 0.00005350296303387628",
            "extra": "mean: 20.532597240000996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 109.59984181498496,
            "unit": "iter/sec",
            "range": "stddev: 0.000056076420927627514",
            "extra": "mean: 9.124100760000145 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 15926.853694333317,
            "unit": "iter/sec",
            "range": "stddev: 0.000003672891696456728",
            "extra": "mean: 62.78704000123981 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 269.22360746853315,
            "unit": "iter/sec",
            "range": "stddev: 0.000027369627265534428",
            "extra": "mean: 3.714384520001204 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 21869.969908109866,
            "unit": "iter/sec",
            "range": "stddev: 0.000003522419625264631",
            "extra": "mean: 45.72479999751522 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 281.5632644724569,
            "unit": "iter/sec",
            "range": "stddev: 0.000034081133382238984",
            "extra": "mean: 3.5515996799995264 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 14667.660156515818,
            "unit": "iter/sec",
            "range": "stddev: 0.000003282144729837976",
            "extra": "mean: 68.17719999844486 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 41.904874225791666,
            "unit": "iter/sec",
            "range": "stddev: 0.000029033640396461586",
            "extra": "mean: 23.863572399998247 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 109.11061478539612,
            "unit": "iter/sec",
            "range": "stddev: 0.00008765110432104951",
            "extra": "mean: 9.165011139996295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 7100.33425546528,
            "unit": "iter/sec",
            "range": "stddev: 0.00000957045983990445",
            "extra": "mean: 140.83843999742385 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 133.22653254997377,
            "unit": "iter/sec",
            "range": "stddev: 0.00007346409011556421",
            "extra": "mean: 7.506012359999659 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 8377.450383457097,
            "unit": "iter/sec",
            "range": "stddev: 0.000007504244940946716",
            "extra": "mean: 119.36805999766875 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 138.54166153777967,
            "unit": "iter/sec",
            "range": "stddev: 0.00006868076315722388",
            "extra": "mean: 7.218045379997875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6833.5623032802505,
            "unit": "iter/sec",
            "range": "stddev: 0.000006725981446371905",
            "extra": "mean: 146.33655999887196 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 20.953326600356313,
            "unit": "iter/sec",
            "range": "stddev: 0.00013392543074487888",
            "extra": "mean: 47.72511873999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 54.49821901673976,
            "unit": "iter/sec",
            "range": "stddev: 0.00021499288430593572",
            "extra": "mean: 18.349223479997363 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3431.72265199671,
            "unit": "iter/sec",
            "range": "stddev: 0.000016007494140343475",
            "extra": "mean: 291.3988400018752 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 65.24423422904634,
            "unit": "iter/sec",
            "range": "stddev: 0.0001891600956679133",
            "extra": "mean: 15.327024859996072 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4026.508275624626,
            "unit": "iter/sec",
            "range": "stddev: 0.000012617101890326149",
            "extra": "mean: 248.35414000108358 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 69.21226498033502,
            "unit": "iter/sec",
            "range": "stddev: 0.00014597581392736874",
            "extra": "mean: 14.44830624000133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3285.053126517472,
            "unit": "iter/sec",
            "range": "stddev: 0.000020065724928877508",
            "extra": "mean: 304.40908000173295 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 10.477307605243778,
            "unit": "iter/sec",
            "range": "stddev: 0.00014650176498683413",
            "extra": "mean: 95.44436774000133 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 26.93294001846606,
            "unit": "iter/sec",
            "range": "stddev: 0.00015459405630461535",
            "extra": "mean: 37.12925508000126 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1406.4621648101624,
            "unit": "iter/sec",
            "range": "stddev: 0.000008102523978560623",
            "extra": "mean: 711.0038400037411 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 656.9484717219932,
            "unit": "iter/sec",
            "range": "stddev: 0.000014333814010944951",
            "extra": "mean: 1.522189399997842 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1399.1220676936284,
            "unit": "iter/sec",
            "range": "stddev: 0.000010266398833968411",
            "extra": "mean: 714.733919999162 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 66.77665360246264,
            "unit": "iter/sec",
            "range": "stddev: 0.000026869563597167552",
            "extra": "mean: 14.975293699999384 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1305.2839984744128,
            "unit": "iter/sec",
            "range": "stddev: 0.000009210854655932547",
            "extra": "mean: 766.1167999981444 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 635.9162091886491,
            "unit": "iter/sec",
            "range": "stddev: 0.000010560509059453476",
            "extra": "mean: 1.5725342199971237 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1308.4471568945023,
            "unit": "iter/sec",
            "range": "stddev: 0.000010467078287493518",
            "extra": "mean: 764.2647200009378 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 54.832828113711926,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519535253340056",
            "extra": "mean: 18.23725009999862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 1030.3370376698263,
            "unit": "iter/sec",
            "range": "stddev: 0.000009216354758066549",
            "extra": "mean: 970.556199999919 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 563.0568428069597,
            "unit": "iter/sec",
            "range": "stddev: 0.000009012262979380605",
            "extra": "mean: 1.7760196199992606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 1034.7723878461823,
            "unit": "iter/sec",
            "range": "stddev: 0.000006950279528889912",
            "extra": "mean: 966.3960999978372 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 46.105535199378856,
            "unit": "iter/sec",
            "range": "stddev: 0.00004081327924951943",
            "extra": "mean: 21.689369740001894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 520.1050886893576,
            "unit": "iter/sec",
            "range": "stddev: 0.00000890171587826759",
            "extra": "mean: 1.922688360000393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 282.9520720159527,
            "unit": "iter/sec",
            "range": "stddev: 0.00002751344316652462",
            "extra": "mean: 3.5341674400024203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 521.5656168924068,
            "unit": "iter/sec",
            "range": "stddev: 0.000018112543295796805",
            "extra": "mean: 1.917304300000069 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 23.00103001418475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191348910805254",
            "extra": "mean: 43.47631386000102 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 258.2778596398578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000438134717477983",
            "extra": "mean: 3.8717991599992274 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 137.72248995945685,
            "unit": "iter/sec",
            "range": "stddev: 0.000030589627633953823",
            "extra": "mean: 7.260978220001562 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 252.7643177829653,
            "unit": "iter/sec",
            "range": "stddev: 0.0002690442616938093",
            "extra": "mean: 3.956254619999981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 11.515634433820205,
            "unit": "iter/sec",
            "range": "stddev: 0.000030430104655157443",
            "extra": "mean: 86.83846345999882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 77.88527326654439,
            "unit": "iter/sec",
            "range": "stddev: 0.000533512747436198",
            "extra": "mean: 12.839397719999397 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 52.31199626189562,
            "unit": "iter/sec",
            "range": "stddev: 0.0004127988476650901",
            "extra": "mean: 19.116074159999243 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 31.57278513844981,
            "unit": "iter/sec",
            "range": "stddev: 0.00008163036994968096",
            "extra": "mean: 31.672847219999767 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 16.099784205962717,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935104439100301",
            "extra": "mean: 62.112633760000335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 710.9645045422469,
            "unit": "iter/sec",
            "range": "stddev: 0.000016735721283479753",
            "extra": "mean: 1.4065399800006162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 328.5049737985376,
            "unit": "iter/sec",
            "range": "stddev: 0.000026679023631145512",
            "extra": "mean: 3.044093940000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 87.47056785961277,
            "unit": "iter/sec",
            "range": "stddev: 0.00007028707181402136",
            "extra": "mean: 11.432416919997195 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 123.99533523593374,
            "unit": "iter/sec",
            "range": "stddev: 0.00006801570293694572",
            "extra": "mean: 8.064819520002402 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 217.89177997730084,
            "unit": "iter/sec",
            "range": "stddev: 0.00004255777676672093",
            "extra": "mean: 4.589434259999052 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 210.88633828245236,
            "unit": "iter/sec",
            "range": "stddev: 0.000043501058881363275",
            "extra": "mean: 4.741890859997966 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 191.5644575779036,
            "unit": "iter/sec",
            "range": "stddev: 0.000050836342531624855",
            "extra": "mean: 5.220175040003596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 28.02331301780735,
            "unit": "iter/sec",
            "range": "stddev: 0.00008948947911017396",
            "extra": "mean: 35.68457446000593 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.7248696550611298,
            "unit": "iter/sec",
            "range": "stddev: 0.0009433899676539409",
            "extra": "mean: 579.7539524599961 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 19.59030701605541,
            "unit": "iter/sec",
            "range": "stddev: 0.00017237283284461538",
            "extra": "mean: 51.04565227999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 19.558388570581517,
            "unit": "iter/sec",
            "range": "stddev: 0.0002645875596104418",
            "extra": "mean: 51.12895657999843 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 19.389873772213857,
            "unit": "iter/sec",
            "range": "stddev: 0.00039043845561074786",
            "extra": "mean: 51.57331149999663 msec\nrounds: 5"
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
          "id": "d3e9a60f662ef88a17f345099efb391f16bf177f",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/d3e9a60f662ef88a17f345099efb391f16bf177f"
        },
        "date": 1619587977410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9835583111782226,
            "unit": "iter/sec",
            "range": "stddev: 0.014110260772971544",
            "extra": "mean: 1.0167165369199938 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.67252657502347,
            "unit": "iter/sec",
            "range": "stddev: 0.000136294447110695",
            "extra": "mean: 11.672353319991089 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.8231249255523223,
            "unit": "iter/sec",
            "range": "stddev: 0.001483422985921091",
            "extra": "mean: 261.56613228000424 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 107.57923880088572,
            "unit": "iter/sec",
            "range": "stddev: 0.00007354527175358521",
            "extra": "mean: 9.295473839993065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3816117426481535,
            "unit": "iter/sec",
            "range": "stddev: 0.006878487260710277",
            "extra": "mean: 2.620464436080001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 204.11096798100266,
            "unit": "iter/sec",
            "range": "stddev: 0.000143708843451715",
            "extra": "mean: 4.899295760005771 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.6702361717875602,
            "unit": "iter/sec",
            "range": "stddev: 0.003355725120088392",
            "extra": "mean: 272.46203056000013 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3159654135941568,
            "unit": "iter/sec",
            "range": "stddev: 0.021623317537097144",
            "extra": "mean: 3.1649033627599965 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5845.469404935186,
            "unit": "iter/sec",
            "range": "stddev: 0.00001332851177777604",
            "extra": "mean: 171.07265999129595 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.00725974721602,
            "unit": "iter/sec",
            "range": "stddev: 0.0003327877775810309",
            "extra": "mean: 25.636253519996902 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6116.047849231652,
            "unit": "iter/sec",
            "range": "stddev: 0.000009722190648974243",
            "extra": "mean: 163.50427999441308 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 38.18846846891287,
            "unit": "iter/sec",
            "range": "stddev: 0.00037369777997482413",
            "extra": "mean: 26.18591528000252 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5979.41431157187,
            "unit": "iter/sec",
            "range": "stddev: 0.000006572372874929761",
            "extra": "mean: 167.24046000035742 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 38.44240224769967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535938373940195",
            "extra": "mean: 26.012942519996614 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6016.036346380956,
            "unit": "iter/sec",
            "range": "stddev: 0.000011977774725761478",
            "extra": "mean: 166.22240000288002 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 39.035086116478766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267557848913781",
            "extra": "mean: 25.617978579989543 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3070.9093859189893,
            "unit": "iter/sec",
            "range": "stddev: 0.000021703530556333037",
            "extra": "mean: 325.6364400021994 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.353883556816395,
            "unit": "iter/sec",
            "range": "stddev: 0.0008977118259196299",
            "extra": "mean: 51.66921651999928 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11472.041945467729,
            "unit": "iter/sec",
            "range": "stddev: 0.00000852969511727792",
            "extra": "mean: 87.16843999991397 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 199.4517828407096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001817923111149784",
            "extra": "mean: 5.0137430999984645 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 16040.262340957914,
            "unit": "iter/sec",
            "range": "stddev: 0.000005572829273633372",
            "extra": "mean: 62.34312000287901 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 211.32771944038788,
            "unit": "iter/sec",
            "range": "stddev: 0.00007270574729550844",
            "extra": "mean: 4.731986900005722 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11387.648774720292,
            "unit": "iter/sec",
            "range": "stddev: 0.000005219467550290749",
            "extra": "mean: 87.81443999396288 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.65492501674636,
            "unit": "iter/sec",
            "range": "stddev: 0.00013939257215012083",
            "extra": "mean: 22.39394645999255 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 82.01252490031726,
            "unit": "iter/sec",
            "range": "stddev: 0.00007226649463157325",
            "extra": "mean: 12.193259519999629 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 13285.893837025027,
            "unit": "iter/sec",
            "range": "stddev: 0.00000441849924397598",
            "extra": "mean: 75.26779998897837 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 202.2213759303264,
            "unit": "iter/sec",
            "range": "stddev: 0.00008339208356626066",
            "extra": "mean: 4.945075639998322 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15437.03480473016,
            "unit": "iter/sec",
            "range": "stddev: 0.000011271580196248902",
            "extra": "mean: 64.77928000094835 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 217.10857800629702,
            "unit": "iter/sec",
            "range": "stddev: 0.000084005485979571",
            "extra": "mean: 4.605990279992511 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11299.631654638586,
            "unit": "iter/sec",
            "range": "stddev: 0.000004061988668104961",
            "extra": "mean: 88.49845999975514 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 38.04235637937649,
            "unit": "iter/sec",
            "range": "stddev: 0.00021182856778789196",
            "extra": "mean: 26.286489459998847 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.96407353676905,
            "unit": "iter/sec",
            "range": "stddev: 0.00007684146184931838",
            "extra": "mean: 11.632766560001075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11567.864380713043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037717038075287694",
            "extra": "mean: 86.44637999623228 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 210.9721100736821,
            "unit": "iter/sec",
            "range": "stddev: 0.00003240434155666388",
            "extra": "mean: 4.739963019997049 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 16240.858427584126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034200342199220246",
            "extra": "mean: 61.5730999970765 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 216.2723694076302,
            "unit": "iter/sec",
            "range": "stddev: 0.000053075152545248266",
            "extra": "mean: 4.623799160008275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11400.893966350648,
            "unit": "iter/sec",
            "range": "stddev: 0.000004793707662775871",
            "extra": "mean: 87.71242000420898 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 32.579700037847864,
            "unit": "iter/sec",
            "range": "stddev: 0.0002275543771794124",
            "extra": "mean: 30.693959700006417 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 85.44754703635701,
            "unit": "iter/sec",
            "range": "stddev: 0.00014322667581220087",
            "extra": "mean: 11.703086099996654 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5856.6319914452515,
            "unit": "iter/sec",
            "range": "stddev: 0.000003533961231432079",
            "extra": "mean: 170.74660000162112 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 103.38644855548593,
            "unit": "iter/sec",
            "range": "stddev: 0.00013136691138468617",
            "extra": "mean: 9.672447540001485 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6982.888153330345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049802300282140065",
            "extra": "mean: 143.20721999865782 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 107.70706544930763,
            "unit": "iter/sec",
            "range": "stddev: 0.00007480829618805191",
            "extra": "mean: 9.284441979998519 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5555.5222226253945,
            "unit": "iter/sec",
            "range": "stddev: 0.000008891653849119404",
            "extra": "mean: 180.00107999341708 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.220271920734145,
            "unit": "iter/sec",
            "range": "stddev: 0.00032777331912810096",
            "extra": "mean: 61.65124757999365 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.86331603535653,
            "unit": "iter/sec",
            "range": "stddev: 0.00025659961829322254",
            "extra": "mean: 23.887262040002497 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2832.5097339505273,
            "unit": "iter/sec",
            "range": "stddev: 0.000013303255161926842",
            "extra": "mean: 353.04379999615776 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 50.709036928379646,
            "unit": "iter/sec",
            "range": "stddev: 0.00023515880007396312",
            "extra": "mean: 19.720350859993232 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3201.1909454992283,
            "unit": "iter/sec",
            "range": "stddev: 0.000015820481515069463",
            "extra": "mean: 312.38373999713076 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 53.00741165107606,
            "unit": "iter/sec",
            "range": "stddev: 0.0001386877238887218",
            "extra": "mean: 18.865286360000937 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2609.0084155641166,
            "unit": "iter/sec",
            "range": "stddev: 0.000013797989811921941",
            "extra": "mean: 383.2873800001835 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.078912258123818,
            "unit": "iter/sec",
            "range": "stddev: 0.0006798443913171107",
            "extra": "mean: 123.77903955999045 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.882305524341653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006564148077697337",
            "extra": "mean: 47.88743267999507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1053.2283935859643,
            "unit": "iter/sec",
            "range": "stddev: 0.000009102124366687698",
            "extra": "mean: 949.4616800020594 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 498.5908028995778,
            "unit": "iter/sec",
            "range": "stddev: 0.000023052963245848067",
            "extra": "mean: 2.0056527199949414 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1046.8617617785046,
            "unit": "iter/sec",
            "range": "stddev: 0.000006972239666238373",
            "extra": "mean: 955.2359600002093 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 52.402024213060336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002643172611628779",
            "extra": "mean: 19.08323227999972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 970.3238671334532,
            "unit": "iter/sec",
            "range": "stddev: 0.00001017529324373843",
            "extra": "mean: 1.030583739998292 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 476.52508756827774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057073149669593544",
            "extra": "mean: 2.098525400001563 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 971.8157305992222,
            "unit": "iter/sec",
            "range": "stddev: 0.00000952557018795978",
            "extra": "mean: 1.0290016599992668 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 43.04835914222791,
            "unit": "iter/sec",
            "range": "stddev: 0.00025674641564275423",
            "extra": "mean: 23.229689119998508 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 791.9062493225271,
            "unit": "iter/sec",
            "range": "stddev: 0.000021814312321990225",
            "extra": "mean: 1.2627757400014161 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 440.8031207177852,
            "unit": "iter/sec",
            "range": "stddev: 0.000028025725185228403",
            "extra": "mean: 2.268586479995065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 795.2416050528154,
            "unit": "iter/sec",
            "range": "stddev: 0.000024529769847256342",
            "extra": "mean: 1.257479480004804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 36.260990623765466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002945798874011508",
            "extra": "mean: 27.57784557999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 386.2204783012279,
            "unit": "iter/sec",
            "range": "stddev: 0.000013845245159429284",
            "extra": "mean: 2.589194659999521 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 210.80647270983204,
            "unit": "iter/sec",
            "range": "stddev: 0.00004259467842338857",
            "extra": "mean: 4.7436873600008775 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 393.5699796157476,
            "unit": "iter/sec",
            "range": "stddev: 0.00004059007138711647",
            "extra": "mean: 2.5408441999979914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.98606908803701,
            "unit": "iter/sec",
            "range": "stddev: 0.0003976309772320242",
            "extra": "mean: 55.59858549999262 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 200.50184730193212,
            "unit": "iter/sec",
            "range": "stddev: 0.00010172294278143801",
            "extra": "mean: 4.987485219994596 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 107.17169467277907,
            "unit": "iter/sec",
            "range": "stddev: 0.00006600609731591775",
            "extra": "mean: 9.330821940002352 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 199.79404989584802,
            "unit": "iter/sec",
            "range": "stddev: 0.000020443519429724937",
            "extra": "mean: 5.005154059999768 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.890907425189608,
            "unit": "iter/sec",
            "range": "stddev: 0.00048029884605205696",
            "extra": "mean: 112.47445869999865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 57.984842919783176,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814112284123692",
            "extra": "mean: 17.245886159998918 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.695557084386664,
            "unit": "iter/sec",
            "range": "stddev: 0.0003258485187135326",
            "extra": "mean: 25.191736139995555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.549919921560832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005946828926098596",
            "extra": "mean: 42.46298939999633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.181071747489785,
            "unit": "iter/sec",
            "range": "stddev: 0.0013668828096463353",
            "extra": "mean: 82.09458254000312 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 539.2988006781566,
            "unit": "iter/sec",
            "range": "stddev: 0.00002026588848223799",
            "extra": "mean: 1.8542596400038747 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 247.4397361023352,
            "unit": "iter/sec",
            "range": "stddev: 0.00004260166723313061",
            "extra": "mean: 4.041388079990611 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.10684056600728,
            "unit": "iter/sec",
            "range": "stddev: 0.00014585293934094013",
            "extra": "mean: 14.901610499996425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 94.5018059275992,
            "unit": "iter/sec",
            "range": "stddev: 0.000028914598974453147",
            "extra": "mean: 10.581808360002471 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 163.90411471611836,
            "unit": "iter/sec",
            "range": "stddev: 0.00005916635299216483",
            "extra": "mean: 6.101128099999187 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 157.5506167749573,
            "unit": "iter/sec",
            "range": "stddev: 0.000080055799193603",
            "extra": "mean: 6.347166520004066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 141.8758902853665,
            "unit": "iter/sec",
            "range": "stddev: 0.000037145583007268484",
            "extra": "mean: 7.048413920001622 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.78370280362647,
            "unit": "iter/sec",
            "range": "stddev: 0.00014813288535509974",
            "extra": "mean: 48.1146217999958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3068781226862125,
            "unit": "iter/sec",
            "range": "stddev: 0.008727079655827898",
            "extra": "mean: 765.1822940800002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.121991570886426,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161318144209346",
            "extra": "mean: 66.12885580000238 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.119298528703325,
            "unit": "iter/sec",
            "range": "stddev: 0.00043906005982903464",
            "extra": "mean: 66.14063463999628 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.995311414481293,
            "unit": "iter/sec",
            "range": "stddev: 0.0003911948472858253",
            "extra": "mean: 66.68751133999649 msec\nrounds: 5"
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
          "id": "d3891cc573a8ec769bcbd1787df8cd88d1f62515",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/d3891cc573a8ec769bcbd1787df8cd88d1f62515"
        },
        "date": 1619588337028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9121769102532393,
            "unit": "iter/sec",
            "range": "stddev: 0.010159188928774742",
            "extra": "mean: 1.0962785713599998 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 79.53927897121618,
            "unit": "iter/sec",
            "range": "stddev: 0.00047087287853507395",
            "extra": "mean: 12.572404640000343 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.362325014599794,
            "unit": "iter/sec",
            "range": "stddev: 0.001985225927703981",
            "extra": "mean: 229.23555596000028 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 121.08513651421285,
            "unit": "iter/sec",
            "range": "stddev: 0.00008196111641299643",
            "extra": "mean: 8.258651960000236 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.42701238199820646,
            "unit": "iter/sec",
            "range": "stddev: 0.018893838752301877",
            "extra": "mean: 2.3418524664800007 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 240.33541826230882,
            "unit": "iter/sec",
            "range": "stddev: 0.000047608118326546704",
            "extra": "mean: 4.160851560000083 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.163899383551277,
            "unit": "iter/sec",
            "range": "stddev: 0.015385066058137683",
            "extra": "mean: 240.15950144000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.35595336480385387,
            "unit": "iter/sec",
            "range": "stddev: 0.02285897086323694",
            "extra": "mean: 2.8093567834400006 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6751.810599275115,
            "unit": "iter/sec",
            "range": "stddev: 0.000011250947850279016",
            "extra": "mean: 148.10842000031244 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 45.71814739818349,
            "unit": "iter/sec",
            "range": "stddev: 0.0001756867540100293",
            "extra": "mean: 21.873152280001023 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 7110.413342558238,
            "unit": "iter/sec",
            "range": "stddev: 0.000002583259760795994",
            "extra": "mean: 140.638799999806 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 45.915071450665536,
            "unit": "iter/sec",
            "range": "stddev: 0.00004309739735962741",
            "extra": "mean: 21.779341039999736 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7012.79189341945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034335623607078966",
            "extra": "mean: 142.59656000035648 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 45.89321234534046,
            "unit": "iter/sec",
            "range": "stddev: 0.00010197686306921637",
            "extra": "mean: 21.78971461999936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7124.401888676722,
            "unit": "iter/sec",
            "range": "stddev: 0.000002911848085217657",
            "extra": "mean: 140.36265999948228 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 45.878806127320054,
            "unit": "iter/sec",
            "range": "stddev: 0.0001295287583638551",
            "extra": "mean: 21.79655671999967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3776.3517602162387,
            "unit": "iter/sec",
            "range": "stddev: 0.000004891041505271105",
            "extra": "mean: 264.80584000012186 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 22.967960953573595,
            "unit": "iter/sec",
            "range": "stddev: 0.00011782109001300329",
            "extra": "mean: 43.5389106599996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12204.394314145191,
            "unit": "iter/sec",
            "range": "stddev: 0.000001695201061111459",
            "extra": "mean: 81.93770000048062 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 231.79180456404444,
            "unit": "iter/sec",
            "range": "stddev: 0.00000945548255461885",
            "extra": "mean: 4.314216380000175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 15229.25356863561,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010746637420224598",
            "extra": "mean: 65.66309999982423 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 241.52563706960566,
            "unit": "iter/sec",
            "range": "stddev: 0.000012131582604868713",
            "extra": "mean: 4.140347220000535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12550.963185914849,
            "unit": "iter/sec",
            "range": "stddev: 0.000002153947229110009",
            "extra": "mean: 79.67516000064734 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 51.03263089495669,
            "unit": "iter/sec",
            "range": "stddev: 0.00005797395081830694",
            "extra": "mean: 19.595305640000333 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 94.88660002799878,
            "unit": "iter/sec",
            "range": "stddev: 0.00003159843033268931",
            "extra": "mean: 10.53889589999983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12356.974202036778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034224231675759887",
            "extra": "mean: 80.92596000039975 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 230.23083030537222,
            "unit": "iter/sec",
            "range": "stddev: 0.000015165949904706386",
            "extra": "mean: 4.343466939999416 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14615.207883778188,
            "unit": "iter/sec",
            "range": "stddev: 0.000007778883891672564",
            "extra": "mean: 68.42188000007354 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 241.39643667286475,
            "unit": "iter/sec",
            "range": "stddev: 0.000019444075920967042",
            "extra": "mean: 4.142563219999715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 12740.700499089662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015890780062260377",
            "extra": "mean: 78.48861999946166 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 42.766578188404296,
            "unit": "iter/sec",
            "range": "stddev: 0.00007702996955761907",
            "extra": "mean: 23.382745179999915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 94.17785511672035,
            "unit": "iter/sec",
            "range": "stddev: 0.00004809214651989569",
            "extra": "mean: 10.618207419999521 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12025.882585565876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072512211149478115",
            "extra": "mean: 83.15397999979268 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 230.50979199833353,
            "unit": "iter/sec",
            "range": "stddev: 0.000022348056643595596",
            "extra": "mean: 4.338210500000059 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 15046.359337836679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011384269002538428",
            "extra": "mean: 66.46125999964168 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 241.40230366460477,
            "unit": "iter/sec",
            "range": "stddev: 0.000005974100809899913",
            "extra": "mean: 4.142462539998633 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 12324.67229315186,
            "unit": "iter/sec",
            "range": "stddev: 0.000002938966583068582",
            "extra": "mean: 81.13805999983015 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 36.83365235868221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000340664599259875",
            "extra": "mean: 27.14908611999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 94.87845096977694,
            "unit": "iter/sec",
            "range": "stddev: 0.000045872614483194434",
            "extra": "mean: 10.539801080000188 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6628.129836062858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028248438726774522",
            "extra": "mean: 150.87211999968986 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 115.52905407370307,
            "unit": "iter/sec",
            "range": "stddev: 0.000022952603813408083",
            "extra": "mean: 8.655831280000257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 7976.174846603734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011696965070606075",
            "extra": "mean: 125.37338000129239 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 120.12740914828701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000205046446751796",
            "extra": "mean: 8.324494859999731 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6766.439165457066,
            "unit": "iter/sec",
            "range": "stddev: 0.000002399500070457274",
            "extra": "mean: 147.78821999982483 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 18.43175376828463,
            "unit": "iter/sec",
            "range": "stddev: 0.00011311196794036345",
            "extra": "mean: 54.254196999999635 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 46.71908393399743,
            "unit": "iter/sec",
            "range": "stddev: 0.00021452401990164742",
            "extra": "mean: 21.40452927999945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3373.4565508594,
            "unit": "iter/sec",
            "range": "stddev: 0.000005451849563124859",
            "extra": "mean: 296.4318599998706 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 57.365111086931115,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954839605936982",
            "extra": "mean: 17.432198439999524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4148.556833251839,
            "unit": "iter/sec",
            "range": "stddev: 0.000005047787758246338",
            "extra": "mean: 241.04767999915566 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 58.42929322232558,
            "unit": "iter/sec",
            "range": "stddev: 0.0010506783068570237",
            "extra": "mean: 17.114702999999736 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3511.559985240512,
            "unit": "iter/sec",
            "range": "stddev: 0.000005835986441756249",
            "extra": "mean: 284.7737199999756 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 9.212439695876308,
            "unit": "iter/sec",
            "range": "stddev: 0.0003310309109798927",
            "extra": "mean: 108.54887880000149 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 23.46371875161729,
            "unit": "iter/sec",
            "range": "stddev: 0.0001395266398572773",
            "extra": "mean: 42.61899021999966 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1274.267273381367,
            "unit": "iter/sec",
            "range": "stddev: 0.000009752090248002492",
            "extra": "mean: 784.7647199997709 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 562.7494759876278,
            "unit": "iter/sec",
            "range": "stddev: 0.000014262747638437808",
            "extra": "mean: 1.7769896599992308 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1265.0706282609774,
            "unit": "iter/sec",
            "range": "stddev: 0.000005428104008332217",
            "extra": "mean: 790.4696999997896 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 58.93145425850004,
            "unit": "iter/sec",
            "range": "stddev: 0.00000953877670818847",
            "extra": "mean: 16.96886683999935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1177.37087526459,
            "unit": "iter/sec",
            "range": "stddev: 0.00000722685167826265",
            "extra": "mean: 849.3500399993081 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 545.101258391474,
            "unit": "iter/sec",
            "range": "stddev: 0.000016377817915088684",
            "extra": "mean: 1.834521539999514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1172.9067731008245,
            "unit": "iter/sec",
            "range": "stddev: 0.000011649514665443558",
            "extra": "mean: 852.5826799996139 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 48.05312943127141,
            "unit": "iter/sec",
            "range": "stddev: 0.00005054595808928645",
            "extra": "mean: 20.81029917999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 915.6863481236945,
            "unit": "iter/sec",
            "range": "stddev: 0.000009001995285867578",
            "extra": "mean: 1.092077000000131 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 478.1317640105244,
            "unit": "iter/sec",
            "range": "stddev: 0.000011095503745623143",
            "extra": "mean: 2.0914736800000355 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 918.9104530219918,
            "unit": "iter/sec",
            "range": "stddev: 0.000006158099960942232",
            "extra": "mean: 1.0882453199997142 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 40.39106059392189,
            "unit": "iter/sec",
            "range": "stddev: 0.00009218138767582198",
            "extra": "mean: 24.757953499999985 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 467.14876730896765,
            "unit": "iter/sec",
            "range": "stddev: 0.000016599900758807503",
            "extra": "mean: 2.1406456999994816 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 242.55344196976284,
            "unit": "iter/sec",
            "range": "stddev: 0.000022083655698167117",
            "extra": "mean: 4.122802759998194 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 467.9168681676432,
            "unit": "iter/sec",
            "range": "stddev: 0.000006888263911734961",
            "extra": "mean: 2.137131759998283 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 20.18153390656623,
            "unit": "iter/sec",
            "range": "stddev: 0.00009497982443543729",
            "extra": "mean: 49.55024750000007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 238.6036069402011,
            "unit": "iter/sec",
            "range": "stddev: 0.000023993081984807834",
            "extra": "mean: 4.1910514799997145 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 122.5786572043496,
            "unit": "iter/sec",
            "range": "stddev: 0.000020399067780042662",
            "extra": "mean: 8.158027040000206 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 237.73970176752496,
            "unit": "iter/sec",
            "range": "stddev: 0.000032620854562618974",
            "extra": "mean: 4.206281040000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 10.127160060908283,
            "unit": "iter/sec",
            "range": "stddev: 0.00008978920501453328",
            "extra": "mean: 98.74436604000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 57.25110386597716,
            "unit": "iter/sec",
            "range": "stddev: 0.0015736029084446855",
            "extra": "mean: 17.466912119999733 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.96247453307702,
            "unit": "iter/sec",
            "range": "stddev: 0.0015873007157673757",
            "extra": "mean: 25.023475439998037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.42651381409425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958471028289875",
            "extra": "mean: 39.329025099999626 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.093131775415866,
            "unit": "iter/sec",
            "range": "stddev: 0.0025254277634428122",
            "extra": "mean: 82.69156564000241 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 583.367640211755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000132016535882072",
            "extra": "mean: 1.714184900000646 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 279.33562323742507,
            "unit": "iter/sec",
            "range": "stddev: 0.000015496696487901914",
            "extra": "mean: 3.5799229199994897 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 77.10642806110621,
            "unit": "iter/sec",
            "range": "stddev: 0.000021262383266745002",
            "extra": "mean: 12.969087340001124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 108.50789671426088,
            "unit": "iter/sec",
            "range": "stddev: 0.00003995275670153573",
            "extra": "mean: 9.215919120000535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 180.17394648629354,
            "unit": "iter/sec",
            "range": "stddev: 0.000033312019547100974",
            "extra": "mean: 5.550192019999258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.80936070072505,
            "unit": "iter/sec",
            "range": "stddev: 0.00005844301797705228",
            "extra": "mean: 6.142152980000901 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 128.56133011568622,
            "unit": "iter/sec",
            "range": "stddev: 0.000041674129060342547",
            "extra": "mean: 7.778388719999612 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 19.02570873702647,
            "unit": "iter/sec",
            "range": "stddev: 0.00029298655755175896",
            "extra": "mean: 52.56045983999911 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.1445935326870555,
            "unit": "iter/sec",
            "range": "stddev: 0.0028648983615162213",
            "extra": "mean: 873.67259332 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 17.195476312449948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005393604249169057",
            "extra": "mean: 58.15482989999964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 17.017577904119626,
            "unit": "iter/sec",
            "range": "stddev: 0.0015935195064939196",
            "extra": "mean: 58.76276904000065 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 16.996444405697012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258858876425861",
            "extra": "mean: 58.83583508000129 msec\nrounds: 5"
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
          "id": "d3891cc573a8ec769bcbd1787df8cd88d1f62515",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/d3891cc573a8ec769bcbd1787df8cd88d1f62515"
        },
        "date": 1619588492348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.467441402176869,
            "unit": "iter/sec",
            "range": "stddev: 0.044567290535151675",
            "extra": "mean: 2.1393055800000003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 60.47108913511056,
            "unit": "iter/sec",
            "range": "stddev: 0.0011063317653037669",
            "extra": "mean: 16.536828000000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.0518344063908667,
            "unit": "iter/sec",
            "range": "stddev: 0.003588234388704387",
            "extra": "mean: 327.6717759999997 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 85.45924602383646,
            "unit": "iter/sec",
            "range": "stddev: 0.0005704554023589031",
            "extra": "mean: 11.701484000000164 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.2967356673037681,
            "unit": "iter/sec",
            "range": "stddev: 0.04310141395155351",
            "extra": "mean: 3.370002699999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 166.85198360317884,
            "unit": "iter/sec",
            "range": "stddev: 0.0001808597370352311",
            "extra": "mean: 5.993335999997953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 2.7918657806729015,
            "unit": "iter/sec",
            "range": "stddev: 0.0015018334029181693",
            "extra": "mean: 358.1834079999999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.23963627438814658,
            "unit": "iter/sec",
            "range": "stddev: 0.058781204405909136",
            "extra": "mean: 4.172990932000003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 3303.4699648493774,
            "unit": "iter/sec",
            "range": "stddev: 0.00004436959510790536",
            "extra": "mean: 302.71200000015597 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 32.04231431126386,
            "unit": "iter/sec",
            "range": "stddev: 0.000925689065462122",
            "extra": "mean: 31.208732000000055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 3585.6687989554075,
            "unit": "iter/sec",
            "range": "stddev: 0.000020055307777130723",
            "extra": "mean: 278.88799999914227 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 32.646562826221185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004669853846534932",
            "extra": "mean: 30.631095999999616 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 3524.0055256349033,
            "unit": "iter/sec",
            "range": "stddev: 0.000024491665316966877",
            "extra": "mean: 283.76800000046387 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 30.939456804621344,
            "unit": "iter/sec",
            "range": "stddev: 0.001165919516077261",
            "extra": "mean: 32.32118799999853 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 3555.176336741512,
            "unit": "iter/sec",
            "range": "stddev: 0.000014363730365029104",
            "extra": "mean: 281.280000000379 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 32.68347900468762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008239361373134723",
            "extra": "mean: 30.59649800000102 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 1792.6415649030735,
            "unit": "iter/sec",
            "range": "stddev: 0.00003935229891643905",
            "extra": "mean: 557.8360000004068 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 16.085385343260207,
            "unit": "iter/sec",
            "range": "stddev: 0.002145563240510779",
            "extra": "mean: 62.16823400000181 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 6210.717213631523,
            "unit": "iter/sec",
            "range": "stddev: 0.000012390194509312865",
            "extra": "mean: 161.01199999980054 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 160.53936087996024,
            "unit": "iter/sec",
            "range": "stddev: 0.00019338006637121394",
            "extra": "mean: 6.229002000000037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 13862.319443202756,
            "unit": "iter/sec",
            "range": "stddev: 0.000006084260021002042",
            "extra": "mean: 72.13800000045012 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 164.62455394972454,
            "unit": "iter/sec",
            "range": "stddev: 0.00035482761641297475",
            "extra": "mean: 6.074428000001717 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 6338.903116165693,
            "unit": "iter/sec",
            "range": "stddev: 0.000004279664706168927",
            "extra": "mean: 157.75600000097256 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 34.2593451613924,
            "unit": "iter/sec",
            "range": "stddev: 0.0005772234639041329",
            "extra": "mean: 29.189116000002286 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 63.06910406049603,
            "unit": "iter/sec",
            "range": "stddev: 0.0006762122387079818",
            "extra": "mean: 15.855623999998441 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 6414.450474056811,
            "unit": "iter/sec",
            "range": "stddev: 0.000009413645414827254",
            "extra": "mean: 155.8979999992971 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 158.62506333109974,
            "unit": "iter/sec",
            "range": "stddev: 0.00011140350681185696",
            "extra": "mean: 6.304173999998284 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14832.833961287128,
            "unit": "iter/sec",
            "range": "stddev: 0.000003936695314745063",
            "extra": "mean: 67.41799999986142 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 162.1604967300358,
            "unit": "iter/sec",
            "range": "stddev: 0.0004938737385182794",
            "extra": "mean: 6.166729999999917 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 6278.5674820124295,
            "unit": "iter/sec",
            "range": "stddev: 0.000006608450651015539",
            "extra": "mean: 159.272000000783 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 28.78446320602957,
            "unit": "iter/sec",
            "range": "stddev: 0.0010518675172653594",
            "extra": "mean: 34.740964000000076 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 59.68558588325876,
            "unit": "iter/sec",
            "range": "stddev: 0.0010150024532872015",
            "extra": "mean: 16.754464000000553 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 6294.296108912419,
            "unit": "iter/sec",
            "range": "stddev: 0.00001116823978949532",
            "extra": "mean: 158.873999998832 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 152.05813730004954,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768140431232559",
            "extra": "mean: 6.576431999997112 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11590.440204767201,
            "unit": "iter/sec",
            "range": "stddev: 0.00002329840595438378",
            "extra": "mean: 86.27800000112984 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 158.33041213723408,
            "unit": "iter/sec",
            "range": "stddev: 0.0005697998624343815",
            "extra": "mean: 6.3159059999998135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 5700.279313708348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000210882348700009",
            "extra": "mean: 175.42999999932363 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 24.21940025305417,
            "unit": "iter/sec",
            "range": "stddev: 0.0013109402047514675",
            "extra": "mean: 41.289213999999674 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 61.93406202473649,
            "unit": "iter/sec",
            "range": "stddev: 0.001075125983585391",
            "extra": "mean: 16.146203999999216 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 3282.692332955032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059233833224475605",
            "extra": "mean: 304.6279999989565 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 76.9900345639027,
            "unit": "iter/sec",
            "range": "stddev: 0.00100339950175879",
            "extra": "mean: 12.988694000000578 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 5139.327159273857,
            "unit": "iter/sec",
            "range": "stddev: 0.00004325882880878912",
            "extra": "mean: 194.57800000054704 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 82.32638559011447,
            "unit": "iter/sec",
            "range": "stddev: 0.0003783544941324745",
            "extra": "mean: 12.146774000000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 2988.7324785462733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000076155334688851274",
            "extra": "mean: 334.59000000107153 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 12.078110396054639,
            "unit": "iter/sec",
            "range": "stddev: 0.0011628834146057733",
            "extra": "mean: 82.79440800000089 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 30.167439546410368,
            "unit": "iter/sec",
            "range": "stddev: 0.0017221202366040102",
            "extra": "mean: 33.148322000001826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 1474.948008081924,
            "unit": "iter/sec",
            "range": "stddev: 0.000033195590068719746",
            "extra": "mean: 677.9900000003636 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 37.387848605234105,
            "unit": "iter/sec",
            "range": "stddev: 0.0006222930849842411",
            "extra": "mean: 26.746658000000707 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 2659.0228622753066,
            "unit": "iter/sec",
            "range": "stddev: 0.00003828174460591368",
            "extra": "mean: 376.07800000046154 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 41.927465986969864,
            "unit": "iter/sec",
            "range": "stddev: 0.001062619831372842",
            "extra": "mean: 23.85071400000129 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 1281.650355529745,
            "unit": "iter/sec",
            "range": "stddev: 0.00010994220017830435",
            "extra": "mean: 780.2440000000388 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 6.298752660530152,
            "unit": "iter/sec",
            "range": "stddev: 0.0027382239356688845",
            "extra": "mean: 158.7615919999996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 15.055820810679366,
            "unit": "iter/sec",
            "range": "stddev: 0.002026720787069021",
            "extra": "mean: 66.41949400000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 794.1436669409729,
            "unit": "iter/sec",
            "range": "stddev: 0.000013106554467440426",
            "extra": "mean: 1.25921800000242 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 369.16225271660045,
            "unit": "iter/sec",
            "range": "stddev: 0.00008909021876768488",
            "extra": "mean: 2.708836000000474 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 702.5234642838055,
            "unit": "iter/sec",
            "range": "stddev: 0.00009709185290330578",
            "extra": "mean: 1.4234399999998004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 39.173836327480174,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987875107898045",
            "extra": "mean: 25.52724200000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 723.5722472410381,
            "unit": "iter/sec",
            "range": "stddev: 0.000026432070860936402",
            "extra": "mean: 1.3820320000013453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 369.0524430901399,
            "unit": "iter/sec",
            "range": "stddev: 0.00003823377067391316",
            "extra": "mean: 2.7096420000009402 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 671.7179859213805,
            "unit": "iter/sec",
            "range": "stddev: 0.00006021637900019237",
            "extra": "mean: 1.4887199999986933 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 31.950864171828314,
            "unit": "iter/sec",
            "range": "stddev: 0.00048090474906252185",
            "extra": "mean: 31.29805799999986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 589.781214760835,
            "unit": "iter/sec",
            "range": "stddev: 0.00003145770700459368",
            "extra": "mean: 1.695543999999245 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 324.742381868446,
            "unit": "iter/sec",
            "range": "stddev: 0.00011764741127656223",
            "extra": "mean: 3.0793640000001683 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 603.7400488546466,
            "unit": "iter/sec",
            "range": "stddev: 0.000021530410354003424",
            "extra": "mean: 1.656341999999995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 26.997146293649127,
            "unit": "iter/sec",
            "range": "stddev: 0.0006371060904365284",
            "extra": "mean: 37.0409519999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 300.95716416477865,
            "unit": "iter/sec",
            "range": "stddev: 0.00007310245700364518",
            "extra": "mean: 3.3227320000014515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 169.2237503503014,
            "unit": "iter/sec",
            "range": "stddev: 0.00011723104081268284",
            "extra": "mean: 5.909335999999712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 295.53674497007887,
            "unit": "iter/sec",
            "range": "stddev: 0.00024865167409613066",
            "extra": "mean: 3.383674000000383 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 14.096634515908587,
            "unit": "iter/sec",
            "range": "stddev: 0.002150249033464232",
            "extra": "mean: 70.93891799999938 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 150.67057445869202,
            "unit": "iter/sec",
            "range": "stddev: 0.00017662642237317985",
            "extra": "mean: 6.636995999999726 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 81.92484051282263,
            "unit": "iter/sec",
            "range": "stddev: 0.0005009787843308722",
            "extra": "mean: 12.206309999999121 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 147.0626298563083,
            "unit": "iter/sec",
            "range": "stddev: 0.00015731529798502735",
            "extra": "mean: 6.799823999999717 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 6.662341474581331,
            "unit": "iter/sec",
            "range": "stddev: 0.0016574742698747939",
            "extra": "mean: 150.09738000000084 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 44.67976182827493,
            "unit": "iter/sec",
            "range": "stddev: 0.0004337999727652138",
            "extra": "mean: 22.38149799999974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 29.832355289510563,
            "unit": "iter/sec",
            "range": "stddev: 0.0008050719616707569",
            "extra": "mean: 33.52065199999856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 17.94550588722018,
            "unit": "iter/sec",
            "range": "stddev: 0.0009656543745925148",
            "extra": "mean: 55.72425800000132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 9.414988752477838,
            "unit": "iter/sec",
            "range": "stddev: 0.0024711796793201153",
            "extra": "mean: 106.213616 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 415.50429340586976,
            "unit": "iter/sec",
            "range": "stddev: 0.00011254651274241133",
            "extra": "mean: 2.4067139999999654 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 190.01385961095156,
            "unit": "iter/sec",
            "range": "stddev: 0.00014388724311237657",
            "extra": "mean: 5.262773999999126 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 51.06783350537985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006655288362821297",
            "extra": "mean: 19.58179800000039 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 73.44366628431612,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234161997639277",
            "extra": "mean: 13.615878000000523 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 110.90967449563692,
            "unit": "iter/sec",
            "range": "stddev: 0.00024056686270198683",
            "extra": "mean: 9.016345999999658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 106.05353582486352,
            "unit": "iter/sec",
            "range": "stddev: 0.0004222505359968578",
            "extra": "mean: 9.429200000001856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 90.91930693304536,
            "unit": "iter/sec",
            "range": "stddev: 0.00041872113862409435",
            "extra": "mean: 10.998763999998573 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 13.426609601427538,
            "unit": "iter/sec",
            "range": "stddev: 0.0032984047493265713",
            "extra": "mean: 74.47896600000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 0.828679818281654,
            "unit": "iter/sec",
            "range": "stddev: 0.027682413861883828",
            "extra": "mean: 1.206738691999999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 11.655287686999692,
            "unit": "iter/sec",
            "range": "stddev: 0.001065497319784915",
            "extra": "mean: 85.79796800000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 11.942181593434285,
            "unit": "iter/sec",
            "range": "stddev: 0.0024536487017760445",
            "extra": "mean: 83.73679400000015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 11.680300458442277,
            "unit": "iter/sec",
            "range": "stddev: 0.0026286642836477964",
            "extra": "mean: 85.61423600000126 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}