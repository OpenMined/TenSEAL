window.BENCHMARK_DATA = {
  "lastUpdate": 1619188624089,
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
      }
    ]
  }
}