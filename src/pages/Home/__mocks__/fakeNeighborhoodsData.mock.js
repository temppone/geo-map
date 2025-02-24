const fakeNeighborhoodsData = {
  type: "FeatureCollection",
  name: "bairros",
  crs: {
    type: "name",
    properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
  },
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        name: "Jd. Colinas",
        setor: "Aquarius",
        zona: "Oeste",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-45.908432084467613, -23.20827026939924],
              [-45.908440869466112, -23.208268520563383],
              [-45.911773564461015, -23.207731109770791],
              [-45.912443426443865, -23.211305155499108],
              [-45.912933396587448, -23.211232006440916],
              [-45.914383221422874, -23.211022305455412],
              [-45.915661335197676, -23.21081863110058],
              [-45.916854901083759, -23.210665903455382],
              [-45.916621102495547, -23.209282398103401],
              [-45.916607216531851, -23.209024567386749],
              [-45.91610258154396, -23.205731423796067],
              [-45.915664108281369, -23.203303179858263],
              [-45.915550162128504, -23.202510082481641],
              [-45.915376988593444, -23.202012093772797],
              [-45.915242179502904, -23.201805430336911],
              [-45.914838298632048, -23.201263918839334],
              [-45.913633724631858, -23.199785128851286],
              [-45.912889085449407, -23.19891652962858],
              [-45.91215233237056, -23.199655284192211],
              [-45.911694155756493, -23.200046677823092],
              [-45.910335724668982, -23.201209530537124],
              [-45.910107132588045, -23.201479974546054],
              [-45.909520310195148, -23.201976765087792],
              [-45.908949619845629, -23.202469720886107],
              [-45.908009160050476, -23.203278785993824],
              [-45.907005474995778, -23.204305006851204],
              [-45.906805291629318, -23.204467444169879],
              [-45.905912829293797, -23.205190322031562],
              [-45.906314058607798, -23.205572431476831],
              [-45.906425383620906, -23.205667163551748],
              [-45.906627672146662, -23.205861369415484],
              [-45.906845365240798, -23.206045947937685],
              [-45.907387664834445, -23.206737378846018],
              [-45.907771672358734, -23.207295589642289],
              [-45.908424935389213, -23.208261910526844],
              [-45.908432084467613, -23.20827026939924],
            ],
          ],
        ],
      },
      bbox: [-45.916855, -23.211305, -45.905913, -23.198917],
    },
    {
      type: "Feature",
      properties: {
        id: 2,
        name: "Jd. das Industrias",
        setor: "Jd. das Industrias",
        zona: "Oeste",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-45.917073951577279, -23.219348899996696],
              [-45.917038215818337, -23.219542654799863],
              [-45.916952648054455, -23.219998368980551],
              [-45.916854913518947, -23.220517227332461],
              [-45.916767510714003, -23.220959123480718],
              [-45.916609438803064, -23.221803382572482],
              [-45.916491977119044, -23.22245788686552],
              [-45.916309281412182, -23.223082711444398],
              [-45.916117120103443, -23.223512193017111],
              [-45.915736870084956, -23.224024459144864],
              [-45.915410329234795, -23.22447482873455],
              [-45.915026298491576, -23.22506124416326],
              [-45.914727573380802, -23.225657341849473],
              [-45.914782098315207, -23.228104371554799],
              [-45.91263486326077, -23.229499587601683],
              [-45.912813594565627, -23.230244309877865],
              [-45.912877866029902, -23.230837843980279],
              [-45.912898823979113, -23.230967644283343],
              [-45.912689175785687, -23.231141290356305],
              [-45.912475041790088, -23.231142533692964],
              [-45.912287162616707, -23.231069378015384],
              [-45.912036373958763, -23.230930605486392],
              [-45.912043308961898, -23.230938310527236],
              [-45.913964994100645, -23.232752463814574],
              [-45.914790480901345, -23.233479167518237],
              [-45.916170011142313, -23.234708171432391],
              [-45.916350992787038, -23.234534489207956],
              [-45.917177090403023, -23.233689459251892],
              [-45.919804645731389, -23.231395656341427],
              [-45.920594595264213, -23.230963438155626],
              [-45.921124861378246, -23.231204675403443],
              [-45.923379802680081, -23.233318451576263],
              [-45.924120568429466, -23.232998253309365],
              [-45.927081488527897, -23.23166007414985],
              [-45.928240475409446, -23.231320471732214],
              [-45.928207929650632, -23.231053441216229],
              [-45.928207406395018, -23.230977771091325],
              [-45.928228780781268, -23.230738810866047],
              [-45.928283828621616, -23.230192216879249],
              [-45.928323516134313, -23.230012265348563],
              [-45.928392893794971, -23.229687882403187],
              [-45.928559491485267, -23.229365291590494],
              [-45.928673656107371, -23.228930078641522],
              [-45.928811644126398, -23.228362951526204],
              [-45.928782279503594, -23.227921459993258],
              [-45.928737631760633, -23.227822196063197],
              [-45.928647125337164, -23.227612475164833],
              [-45.928561181975503, -23.227500051093912],
              [-45.928461277725951, -23.227370005976706],
              [-45.928269982417362, -23.227109910418534],
              [-45.928213065579527, -23.226986015214976],
              [-45.927996849520049, -23.22679100923261],
              [-45.927712173112795, -23.226683912660619],
              [-45.927571246029906, -23.226649274165805],
              [-45.927179276359524, -23.226561723494946],
              [-45.926724451794598, -23.226336410212806],
              [-45.926269104233128, -23.225906153916942],
              [-45.926029761456739, -23.225674618912727],
              [-45.925777465618467, -23.225439628137742],
              [-45.925684749578139, -23.225347944471054],
              [-45.925573364142508, -23.225243129195352],
              [-45.92549062120267, -23.225164799773943],
              [-45.92537575904641, -23.22505180341166],
              [-45.925249633399282, -23.22493667838388],
              [-45.925061691287205, -23.22476042454484],
              [-45.924935835142243, -23.224630430354814],
              [-45.924785664067848, -23.224487753107571],
              [-45.924608730403683, -23.224358709434043],
              [-45.92438770570039, -23.22420630512643],
              [-45.924166697718306, -23.224056257846676],
              [-45.92393551341177, -23.223915726958946],
              [-45.923691514293381, -23.223770547072235],
              [-45.923534808816257, -23.223672147588221],
              [-45.923363235586123, -23.223524988106067],
              [-45.923138527544126, -23.223326854532047],
              [-45.922986690331662, -23.223192955688848],
              [-45.922726781595792, -23.222965094803637],
              [-45.922572043587685, -23.222781552469762],
              [-45.922293550667199, -23.222454479687304],
              [-45.92216015921462, -23.222135876759125],
              [-45.922064103230511, -23.22189155390587],
              [-45.921982491533385, -23.221482016047137],
              [-45.921853377500774, -23.220820996704113],
              [-45.921733600174491, -23.220251429634065],
              [-45.921691254526493, -23.220043580507639],
              [-45.921622561966409, -23.2197247421615],
              [-45.921531991306104, -23.219571559701141],
              [-45.921458309186839, -23.219458382048376],
              [-45.921323820724943, -23.219242663601069],
              [-45.920971245489675, -23.21888633264188],
              [-45.920721785299705, -23.218634127721469],
              [-45.920497263615388, -23.218397230815093],
              [-45.920223680303586, -23.218121365885402],
              [-45.919935185541981, -23.217825617041786],
              [-45.919732028725413, -23.217651360113329],
              [-45.919529261835223, -23.217481165205722],
              [-45.919322306676158, -23.217305800874698],
              [-45.918641869243679, -23.216851012751953],
              [-45.91833236971609, -23.217064178876505],
              [-45.918041273362554, -23.217264790312491],
              [-45.917776016118985, -23.217558500970117],
              [-45.917519352194262, -23.21787858084328],
              [-45.917369986375007, -23.218159176932328],
              [-45.917354122492043, -23.218297582715447],
              [-45.917090352628975, -23.219054384057092],
              [-45.917073951577279, -23.219348899996696],
            ],
          ],
        ],
      },
      bbox: [-45.928812, -23.234708, -45.912036, -23.216851],
    },
    {
      type: "Feature",
      properties: {
        id: 3,
        name: "Jd. Alvorada",
        setor: "Jd. das Industrias",
        zona: "Oeste",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-45.91263486326077, -23.229499587601683],
              [-45.914782098315207, -23.228104371554799],
              [-45.914727573380802, -23.225657341849473],
              [-45.915026298491576, -23.22506124416326],
              [-45.915410329234795, -23.22447482873455],
              [-45.915736870084956, -23.224024459144864],
              [-45.916117120103443, -23.223512193017111],
              [-45.916309281412182, -23.223082711444398],
              [-45.916491977119044, -23.22245788686552],
              [-45.916609438803064, -23.221803382572482],
              [-45.916767510714003, -23.220959123480718],
              [-45.916854913518947, -23.220517227332461],
              [-45.916952648054455, -23.219998368980551],
              [-45.917038215818337, -23.219542654799863],
              [-45.917073951577279, -23.219348899996696],
              [-45.916385759396036, -23.219617209711721],
              [-45.91474495977991, -23.220387672413249],
              [-45.913668054482564, -23.220906966029965],
              [-45.91204723973366, -23.221558228904115],
              [-45.911308147331752, -23.221908654825967],
              [-45.911673605563799, -23.224128619160968],
              [-45.911799964077588, -23.224863140632657],
              [-45.91263486326077, -23.229499587601683],
            ],
          ],
        ],
      },
      bbox: [-45.917074, -23.2295, -45.911308, -23.219349],
    },
    {
      type: "Feature",
      properties: {
        id: 4,
        name: "Pq. Res. Aquarius",
        setor: "Aquarius",
        zona: "Oeste",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-45.907372459550217, -23.221781905028372],
              [-45.908079632129514, -23.221590245830985],
              [-45.908332847643678, -23.221526071010754],
              [-45.909269905845086, -23.221056921102676],
              [-45.910976010276094, -23.220440608583456],
              [-45.910806038497441, -23.219286220945541],
              [-45.91055105308903, -23.217984283886061],
              [-45.910046751326789, -23.215460383894989],
              [-45.909696587128664, -23.213553625002749],
              [-45.907884778191509, -23.213779915102716],
              [-45.906030921661525, -23.214074369573542],
              [-45.905672163832733, -23.212189454530545],
              [-45.90186390066193, -23.21278521351266],
              [-45.901341618018883, -23.21282369621197],
              [-45.900760671620311, -23.21295115757145],
              [-45.900809450363511, -23.213550858004897],
              [-45.900932152988453, -23.21516390864776],
              [-45.90096201441176, -23.216280950664252],
              [-45.900990915027059, -23.217253171947572],
              [-45.901130451744947, -23.218038555451116],
              [-45.901312100682063, -23.218430605827947],
              [-45.901537814379708, -23.218718963881347],
              [-45.901942958304325, -23.219068354242488],
              [-45.902214266338156, -23.21948057334804],
              [-45.902451173602856, -23.220737539580572],
              [-45.902564929223352, -23.221712984965816],
              [-45.90326322557106, -23.222391717639958],
              [-45.903730201605136, -23.222337576266305],
              [-45.903843144343249, -23.222335373415071],
              [-45.907372459550217, -23.221781905028372],
            ],
          ],
        ],
      },
      bbox: [-45.910976, -23.222392, -45.900761, -23.212189],
    },
  ],
};

export default fakeNeighborhoodsData;
