window.BENCHMARK_DATA = {
  "lastUpdate": 1619590343040,
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
          "id": "9d89d74c470bb388687925de95228b465fb09420",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/9d89d74c470bb388687925de95228b465fb09420"
        },
        "date": 1619590342398,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9681967595538757,
            "unit": "iter/sec",
            "range": "stddev: 0.010276483329096659",
            "extra": "mean: 1.0328479104400003 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.88716765045012,
            "unit": "iter/sec",
            "range": "stddev: 0.00010615478458267639",
            "extra": "mean: 11.643182880006862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.826148600393686,
            "unit": "iter/sec",
            "range": "stddev: 0.0007886511068152144",
            "extra": "mean: 261.35942548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 109.35740617033527,
            "unit": "iter/sec",
            "range": "stddev: 0.000018022955969561756",
            "extra": "mean: 9.144328080005835 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3890460239105165,
            "unit": "iter/sec",
            "range": "stddev: 0.0032842121742954174",
            "extra": "mean: 2.5703899758399986 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 211.21528849939983,
            "unit": "iter/sec",
            "range": "stddev: 0.00012906810034295558",
            "extra": "mean: 4.734505759997774 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.6804341679462027,
            "unit": "iter/sec",
            "range": "stddev: 0.0015959879770791024",
            "extra": "mean: 271.7070743199929 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3202990308102798,
            "unit": "iter/sec",
            "range": "stddev: 0.02130358358122267",
            "extra": "mean: 3.12208250356 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6167.988116960096,
            "unit": "iter/sec",
            "range": "stddev: 0.00000843218625991087",
            "extra": "mean: 162.12742000107028 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.95274619307969,
            "unit": "iter/sec",
            "range": "stddev: 0.00005921416522099421",
            "extra": "mean: 25.029568560000826 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6055.628700738373,
            "unit": "iter/sec",
            "range": "stddev: 0.000007489610412332428",
            "extra": "mean: 165.13562000227466 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.73396637763937,
            "unit": "iter/sec",
            "range": "stddev: 0.00009717866195700868",
            "extra": "mean: 25.167384260000745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6094.827965569918,
            "unit": "iter/sec",
            "range": "stddev: 0.000006335856460357486",
            "extra": "mean: 164.0735399996629 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 39.850650759735565,
            "unit": "iter/sec",
            "range": "stddev: 0.00020961061604928528",
            "extra": "mean: 25.093693099997836 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6035.233937176192,
            "unit": "iter/sec",
            "range": "stddev: 0.000006148883915216862",
            "extra": "mean: 165.69365999885122 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 39.8335946802229,
            "unit": "iter/sec",
            "range": "stddev: 0.0001372097987818037",
            "extra": "mean: 25.104437799998323 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3047.581153115309,
            "unit": "iter/sec",
            "range": "stddev: 0.000010309837744345905",
            "extra": "mean: 328.12908000096286 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.74558036116238,
            "unit": "iter/sec",
            "range": "stddev: 0.00034285524740350646",
            "extra": "mean: 50.64424451999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12477.281989283543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037767760823188243",
            "extra": "mean: 80.14565999701517 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 203.29677351228483,
            "unit": "iter/sec",
            "range": "stddev: 0.00003085458004546101",
            "extra": "mean: 4.918917219999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 16360.646232116427,
            "unit": "iter/sec",
            "range": "stddev: 0.000004524732319165335",
            "extra": "mean: 61.122280001200124 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 211.04969593117082,
            "unit": "iter/sec",
            "range": "stddev: 0.00002491718273361524",
            "extra": "mean: 4.738220519996048 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11184.14106736031,
            "unit": "iter/sec",
            "range": "stddev: 0.000004776174604683716",
            "extra": "mean: 89.41231999642696 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.89220826823671,
            "unit": "iter/sec",
            "range": "stddev: 0.00008117344232262985",
            "extra": "mean: 22.275580520006315 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 84.15062552658446,
            "unit": "iter/sec",
            "range": "stddev: 0.000030845280858779606",
            "extra": "mean: 11.88345296000307 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11908.74282725792,
            "unit": "iter/sec",
            "range": "stddev: 0.000007839332981538436",
            "extra": "mean: 83.97192000074938 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 204.70456787030236,
            "unit": "iter/sec",
            "range": "stddev: 0.00004613229470084304",
            "extra": "mean: 4.8850888399988435 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15410.552530676423,
            "unit": "iter/sec",
            "range": "stddev: 0.000011226858362752254",
            "extra": "mean: 64.89059999694291 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 213.3681604792804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004071596456822575",
            "extra": "mean: 4.686734880001495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11034.312297351928,
            "unit": "iter/sec",
            "range": "stddev: 0.000005992976358839403",
            "extra": "mean: 90.62640000138346 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 37.56823315319278,
            "unit": "iter/sec",
            "range": "stddev: 0.00007665989899187007",
            "extra": "mean: 26.61823343999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 83.8711084506329,
            "unit": "iter/sec",
            "range": "stddev: 0.0000322642909376559",
            "extra": "mean: 11.92305691999536 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12453.666134858026,
            "unit": "iter/sec",
            "range": "stddev: 0.000004277749629185591",
            "extra": "mean: 80.29764000184514 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 202.48028959663804,
            "unit": "iter/sec",
            "range": "stddev: 0.000010349700929204406",
            "extra": "mean: 4.93875232000164 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 16364.38912580993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034775052940676628",
            "extra": "mean: 61.1082999989776 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 210.28648118013476,
            "unit": "iter/sec",
            "range": "stddev: 0.000024264603172568655",
            "extra": "mean: 4.755417439998837 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11199.926528607042,
            "unit": "iter/sec",
            "range": "stddev: 0.000002256310709580655",
            "extra": "mean: 89.28629999900295 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 32.174880907546246,
            "unit": "iter/sec",
            "range": "stddev: 0.00006305611475571223",
            "extra": "mean: 31.080146119995792 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 85.33350372725974,
            "unit": "iter/sec",
            "range": "stddev: 0.00007896825374848886",
            "extra": "mean: 11.7187266000019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5690.276001345933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070095971877765546",
            "extra": "mean: 175.73839999386107 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 101.29458223999684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000838453354136314",
            "extra": "mean: 9.872196300002543 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6640.960835573823,
            "unit": "iter/sec",
            "range": "stddev: 0.000006748955008183152",
            "extra": "mean: 150.5806199975268 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 106.49465785842229,
            "unit": "iter/sec",
            "range": "stddev: 0.00007913240268984127",
            "extra": "mean: 9.390142380000272 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5378.2773743661955,
            "unit": "iter/sec",
            "range": "stddev: 0.00000538005488928502",
            "extra": "mean: 185.93313999872407 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.13992184771626,
            "unit": "iter/sec",
            "range": "stddev: 0.00017988559816778916",
            "extra": "mean: 61.95816865999859 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.81632562341703,
            "unit": "iter/sec",
            "range": "stddev: 0.00009750596839392291",
            "extra": "mean: 23.914104960001623 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2845.672358417073,
            "unit": "iter/sec",
            "range": "stddev: 0.000011284301893147919",
            "extra": "mean: 351.4107999967564 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 50.65991520491031,
            "unit": "iter/sec",
            "range": "stddev: 0.00005282296420599297",
            "extra": "mean: 19.739472439998735 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3202.0076844263085,
            "unit": "iter/sec",
            "range": "stddev: 0.000011102639275335069",
            "extra": "mean: 312.3040600007698 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 53.12231822600395,
            "unit": "iter/sec",
            "range": "stddev: 0.00008404740860136351",
            "extra": "mean: 18.824479680001787 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2637.7934498893255,
            "unit": "iter/sec",
            "range": "stddev: 0.000009463678809249302",
            "extra": "mean: 379.1047400022763 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.050615186326256,
            "unit": "iter/sec",
            "range": "stddev: 0.0003043842582480399",
            "extra": "mean: 124.21410996000304 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.745368742992863,
            "unit": "iter/sec",
            "range": "stddev: 0.0003651273786755266",
            "extra": "mean: 48.20352978000301 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1041.6431645945593,
            "unit": "iter/sec",
            "range": "stddev: 0.00000667819620925219",
            "extra": "mean: 960.0216599983469 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 492.4980141511974,
            "unit": "iter/sec",
            "range": "stddev: 0.000028889608358298458",
            "extra": "mean: 2.0304650399930324 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1056.949875621762,
            "unit": "iter/sec",
            "range": "stddev: 0.000010534573354260798",
            "extra": "mean: 946.1186599901339 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.718882008567334,
            "unit": "iter/sec",
            "range": "stddev: 0.00009987330691291992",
            "extra": "mean: 19.33529808000003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 975.2993159500446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055629627029859975",
            "extra": "mean: 1.025326259996291 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 480.7691105748775,
            "unit": "iter/sec",
            "range": "stddev: 0.00002766498722330192",
            "extra": "mean: 2.08000052000898 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 979.5087360160757,
            "unit": "iter/sec",
            "range": "stddev: 0.000008671712866789896",
            "extra": "mean: 1.0209199399969293 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 42.36513546534959,
            "unit": "iter/sec",
            "range": "stddev: 0.00011854812702947123",
            "extra": "mean: 23.60431494000295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 771.2030201084855,
            "unit": "iter/sec",
            "range": "stddev: 0.000009476374479236063",
            "extra": "mean: 1.2966754199942443 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 419.69052641653406,
            "unit": "iter/sec",
            "range": "stddev: 0.000007177090371602599",
            "extra": "mean: 2.3827080600040063 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 768.2593348489655,
            "unit": "iter/sec",
            "range": "stddev: 0.00000563746083472888",
            "extra": "mean: 1.301643800002239 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.304910648992404,
            "unit": "iter/sec",
            "range": "stddev: 0.00010084332569341971",
            "extra": "mean: 28.324671599998513 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 373.29995653423384,
            "unit": "iter/sec",
            "range": "stddev: 0.00011741425461146093",
            "extra": "mean: 2.678810920001524 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 210.7229882127346,
            "unit": "iter/sec",
            "range": "stddev: 0.000032501632496535994",
            "extra": "mean: 4.7455667199938025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 390.19780351759516,
            "unit": "iter/sec",
            "range": "stddev: 0.00002724655195522723",
            "extra": "mean: 2.56280274000801 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.73931590078017,
            "unit": "iter/sec",
            "range": "stddev: 0.00020456127093376787",
            "extra": "mean: 56.37195964000057 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 194.03409198378003,
            "unit": "iter/sec",
            "range": "stddev: 0.000016151787658324863",
            "extra": "mean: 5.153733500005728 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 105.34027318424901,
            "unit": "iter/sec",
            "range": "stddev: 0.00008814255562305108",
            "extra": "mean: 9.49304543999915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 196.04238571260456,
            "unit": "iter/sec",
            "range": "stddev: 0.000031882665797900574",
            "extra": "mean: 5.10093771999891 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.828877528216871,
            "unit": "iter/sec",
            "range": "stddev: 0.0004172421035977454",
            "extra": "mean: 113.26468136000585 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 60.36255316441101,
            "unit": "iter/sec",
            "range": "stddev: 0.00035369205961277014",
            "extra": "mean: 16.566562340003657 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 41.106235048411264,
            "unit": "iter/sec",
            "range": "stddev: 0.00014405845751101063",
            "extra": "mean: 24.32720969999536 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.21413593283538,
            "unit": "iter/sec",
            "range": "stddev: 0.0004719525808379056",
            "extra": "mean: 41.298190560000876 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.2087125411332,
            "unit": "iter/sec",
            "range": "stddev: 0.0006331829835242765",
            "extra": "mean: 81.90871860000243 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 531.7614182212648,
            "unit": "iter/sec",
            "range": "stddev: 0.000015991102136962194",
            "extra": "mean: 1.8805425999971703 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 246.3307616652913,
            "unit": "iter/sec",
            "range": "stddev: 0.000014757327109433054",
            "extra": "mean: 4.059582299992144 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.50893241067976,
            "unit": "iter/sec",
            "range": "stddev: 0.000148296904001549",
            "extra": "mean: 14.812854599990715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 95.27073953010724,
            "unit": "iter/sec",
            "range": "stddev: 0.00004619963310153201",
            "extra": "mean: 10.496402200005834 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 163.27202626580652,
            "unit": "iter/sec",
            "range": "stddev: 0.00003546361048908022",
            "extra": "mean: 6.1247478999985105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 158.67901774194434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000535208431683361",
            "extra": "mean: 6.302030440006092 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 143.8113856382756,
            "unit": "iter/sec",
            "range": "stddev: 0.000041978687768949685",
            "extra": "mean: 6.953552360000685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.184234761803864,
            "unit": "iter/sec",
            "range": "stddev: 0.00024871659008410247",
            "extra": "mean: 47.20491494000271 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3076406163791032,
            "unit": "iter/sec",
            "range": "stddev: 0.0011529302855075338",
            "extra": "mean: 764.7361113400029 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.285751933777277,
            "unit": "iter/sec",
            "range": "stddev: 0.00017817289261982646",
            "extra": "mean: 65.42039962000672 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.250345296107076,
            "unit": "iter/sec",
            "range": "stddev: 0.00010410424728218113",
            "extra": "mean: 65.57228577999922 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.028889812457871,
            "unit": "iter/sec",
            "range": "stddev: 0.00047858846137741496",
            "extra": "mean: 66.53851432000465 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}