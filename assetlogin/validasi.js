function save() {
  var inputUsername = document.getElementById("nid");
  var inputNama = document.getElementById("namapeserta");

  localStorage.setItem("nid", inputUsername.value);
  document.getElementById("btn-login").click();

  if (inputUsername.value === "admin") {
    inputNama.value = "admin";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914103ZJY") {
    inputNama.value = "ACHMAD KHOIRUL ANAM";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115226ZJY") {
    inputNama.value = "ACHMAD ULUL AZMY";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305045JA") {
    inputNama.value = "ADE NUGROHO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8710036JA") {
    inputNama.value = "ADEF FARIYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9018045ZJY") {
    inputNama.value = "ADHID PRADITYA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914121ZJY") {
    inputNama.value = "ADIMAS ADRIAN ABIMANYU";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9211179JA") {
    inputNama.value = "ADY ROGO PRIYONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811120JA") {
    inputNama.value = "AFRINALDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9418042ZJY") {
    inputNama.value = "AFRIZAL EKA RAHMADHIKA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115227ZJY") {
    inputNama.value = "AGISTA RIZKY PRAMANA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9013039ZJY") {
    inputNama.value = "AGUNG NUR CAHYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8915228ZJY") {
    inputNama.value = "AGUNG SUFRYANCHE LUDEN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115229ZJY") {
    inputNama.value = "AHMAD AZIZ ALQURNAIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8711048JA") {
    inputNama.value = "AHMAD CHOIRUZ ZAMAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9116151ZJY") {
    inputNama.value = "AHMAD HISYAM";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8205044JA") {
    inputNama.value = "AHMAD SETIAWAN ";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8406041JA") {
    inputNama.value = "AHMAD SODIKIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9114224ZJY") {
    inputNama.value = "AJI PRAMUDIO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9117255ZJY") {
    inputNama.value = "AKHMAD HABIBI MALIK ARSY";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9317257ZJY") {
    inputNama.value = "AKHMAD RIDLO IQBAL MUKAFFI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215129ZJY") {
    inputNama.value = "ALAM HARDIK DEWANTARA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215230ZJY") {
    inputNama.value = "ALDA KURNIAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811134JA") {
    inputNama.value = "ALI SANDRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911114JA") {
    inputNama.value = "ALQA NURY MUHAMMAD ADNAN W.";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815303ZJY") {
    inputNama.value = "AMAD SUPRAYOGO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8913037ZJY") {
    inputNama.value = "AMANU YOGA CATUR UTAMA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115372ZJY") {
    inputNama.value = "ANANG MURBO NUGROHO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215130ZJY") {
    inputNama.value = "ANDES PRADESA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9214229ZJY") {
    inputNama.value = "ANDIKA TRIANTONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911117JA") {
    inputNama.value = "ANDRIKA KURNIA PUTRA ";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9016177ZJY") {
    inputNama.value = "ANDRIZKI MUHAMMAD";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9114107ZJY") {
    inputNama.value = "ANGGA NUGROHO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215231ZJY") {
    inputNama.value = "ANGGA SYAM PERMANA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9116132ZJY") {
    inputNama.value = "ANGGAWA RUDRADIANTONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8108029JA") {
    inputNama.value = "ANGGRESTA NURADRIKNI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8614122ZJY") {
    inputNama.value = "ANHAR ASHARI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9016104ZJY") {
    inputNama.value = "ANJU WISATA PARDEDE";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9011190JA") {
    inputNama.value = "ANWAR GOJALI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305055JA") {
    inputNama.value = "ARGGO GIANTO ";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015035ZJY") {
    inputNama.value = "ARI YULIANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9316136ZJY") {
    inputNama.value = "ARIEF RAHMAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7392233K3") {
    inputNama.value = "ARIEF SYARBINI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "6584062K3") {
    inputNama.value = "ARIEF TEGUH SUTRISNO ";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8610079JA") {
    inputNama.value = "ARIF ASTOMO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8308099JA") {
    inputNama.value = "ARIF CATUR PRASETYO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015232ZJY") {
    inputNama.value = "ARIF KURNIAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8505121JA") {
    inputNama.value = "ARIF SETIAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405115JA") {
    inputNama.value = "ARIF WIBOWO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9214222ZJY") {
    inputNama.value = "ARIO RICKY PRATAMA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9014115ZJY") {
    inputNama.value = "ARIS FRIANTO PANI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811135JA") {
    inputNama.value = "ARISTO JULIAN SIREGAR";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9418034ZJY") {
    inputNama.value = "ARYATAMA WISNU WARDHANA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7907013JA") {
    inputNama.value = "ASNAWADI HIDAYAT";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7493284K3") {
    inputNama.value = "ATENG SOBARI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9014117ZJY") {
    inputNama.value = "AVISTYA PARADIPTA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115107ZJY") {
    inputNama.value = "AWANG ASMORO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911046JA") {
    inputNama.value = "BAGUS KOKOH SURYO ANGGORO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9317028ZJY") {
    inputNama.value = "BAGUS SETIAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8007020JA") {
    inputNama.value = "BAROKAH SUTATRI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9619013ZJY") {
    inputNama.value = "BILLY RUDYPRATAMA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7392231K3") {
    inputNama.value = "BUDIYONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8306044JA") {
    inputNama.value = "CATUR WAHYUDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8610085JA") {
    inputNama.value = "CHANDRA WIDYANIPUTRI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8107021JA") {
    inputNama.value = "DAMMORA WIBAWA PASARIBU";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8008097JA") {
    inputNama.value = "DANAN TRI YULIANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9316086ZJY") {
    inputNama.value = "DEDE KURNIA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "6584375K3") {
    inputNama.value = "DEDI HERMADI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405122JA") {
    inputNama.value = "DEDI KRISTANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305041JA") {
    inputNama.value = "DEDI UTOMO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8008067JA") {
    inputNama.value = "DEDY HIDAYAT";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115158ZJY") {
    inputNama.value = "DERI DAGI WACONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7393330K3") {
    inputNama.value = "DEWI CAHYAWATI AE.";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911126JA") {
    inputNama.value = "DHIAN TRISNADI SETYAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8714118ZJY") {
    inputNama.value = "DIAH WULANDARI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9317148ZJY") {
    inputNama.value = "DIANTY RIZKI ROOSMANTY";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9519038ZJY") {
    inputNama.value = "DICKY EKA CANDRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9417251ZJY") {
    inputNama.value = "DIENDA ARUM PRATIWI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215350ZJY") {
    inputNama.value = "DODI ANDIKA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305047JA") {
    inputNama.value = "DODY SUWONDO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8915304ZJY") {
    inputNama.value = "DONAL AFRIWANDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7292088K3") {
    inputNama.value = "DONAR PARLUHUTAN S.";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9114226ZJY") {
    inputNama.value = "DONI SAFRIYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914119ZJY") {
    inputNama.value = "DWI AJI SULISTYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9114108ZJY") {
    inputNama.value = "DZULFIKAR AZHAR";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8205040JA") {
    inputNama.value = "EDWARD MALAU";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811113JA") {
    inputNama.value = "EKO RIYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8506040JA") {
    inputNama.value = "EKO SUPRIYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914104ZJY") {
    inputNama.value = "EKO WAHYU PUTRANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811049JA") {
    inputNama.value = "EKY KARTIKA NUGRAHA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215373ZJY") {
    inputNama.value = "ERICT ILYAS SETIAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9619039ZJY") {
    inputNama.value = "FAHMI NURFAISHAL";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405116JA") {
    inputNama.value = "FAHRONI ARDI RAMADHAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115233ZJY") {
    inputNama.value = "FAI'DIL IHSAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8814111ZJY") {
    inputNama.value = "FAILASOFA AFIEQ AKBAR";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9217254ZJY") {
    inputNama.value = "FAJAR LUQMANTARA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8611045JA") {
    inputNama.value = "FALANSTYA KURNIA PUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9016231ZJY") {
    inputNama.value = "FARII FAHMIUDDIN FIKRI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9111116JA") {
    inputNama.value = "FARIS AZHARUDDIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9117019ZJY") {
    inputNama.value = "FAUZAN MAHMUDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115284ZJY") {
    inputNama.value = "FAUZI RUSYDA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115275ZJY") {
    inputNama.value = "FEBRI ADHI PUJIYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8913038ZJY") {
    inputNama.value = "FEBRI IKBAL TAWAKAL SINAGA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9116068ZJY") {
    inputNama.value = "FERDY HARDIYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215234ZJY") {
    inputNama.value = "FERI SETIA PUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9216101ZJY") {
    inputNama.value = "FERI SETIAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9417252ZJY") {
    inputNama.value = "FIRDHA ANGGRAINI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8609070JA") {
    inputNama.value = "FUAD ANWAR";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8915034ZJY") {
    inputNama.value = "GARDIKA SATYA NURDIANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9719140ZJY") {
    inputNama.value = "GEOVANNI ILHAM AKBAR SANTOSO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215235ZJY") {
    inputNama.value = "GIDION";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115135ZJY") {
    inputNama.value = "GUMILANG CAHYA PRAYOGA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8915236ZJY") {
    inputNama.value = "GUSTAF PARULIAN SINURAT";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115237ZJY") {
    inputNama.value = "HADRATUL HENDRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8614123ZJY") {
    inputNama.value = "HARTININGSIH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811055JA") {
    inputNama.value = "HARTO YUDOTOMO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811043JA") {
    inputNama.value = "HASTRI NOFIAN HIDAYATULLAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8814109ZJY") {
    inputNama.value = "HENDI HERDIANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914124ZJY") {
    inputNama.value = "HENDRA GUNAWAN SUSANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305117JA") {
    inputNama.value = "HENDRA SUHARIADI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9117259ZJY") {
    inputNama.value = "HENDRI PRIONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8007038JA") {
    inputNama.value = "HERMAWAN IMANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9216078ZJY") {
    inputNama.value = "HERU BAYU SAPUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9014130ZJY") {
    inputNama.value = "HERU NUGRAHA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115238ZJY") {
    inputNama.value = "HERWIN JANUARDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9113040ZJY") {
    inputNama.value = "I DEWA GEDE WISNU PRACANDA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8915093ZJY") {
    inputNama.value = "I KOMANG ARTHA WINADI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9416053ZJY") {
    inputNama.value = "IHROM NUR IZZAN ANANTHA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8105048JA") {
    inputNama.value = "IING SARIPUDIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9417258ZJY") {
    inputNama.value = "IKHSAN MUHAMMAD ROHMAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8610102JA") {
    inputNama.value = "IMAN FIRMANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8813044ZJY") {
    inputNama.value = "INDRAS WATI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8711133JA") {
    inputNama.value = "IRPAN RUDIANSAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7293124K3") {
    inputNama.value = "IRSAM ADHAROMI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305046JA") {
    inputNama.value = "JAMINGAN SAID";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9114225ZJY") {
    inputNama.value = "JANRI TUA SIAHAAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815127ZJY") {
    inputNama.value = "JATMIKO ARIF WIBOWO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8814120ZJY") {
    inputNama.value = "JHON ACRIDMA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8610083JA") {
    inputNama.value = "JIMMY PERIANTO SITUMORANG";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215305ZJY") {
    inputNama.value = "JOSIA PERDAMENTA GINTING";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7603019JA") {
    inputNama.value = "JUNAIDI ABDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8209031JA") {
    inputNama.value = "KOMANG GEDE NARA UTAMA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7906114JA") {
    inputNama.value = "KUNJUNG SRI HERLAMBANG";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8510099JA") {
    inputNama.value = "LATIFA NOOR HAKIKI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405049JA") {
    inputNama.value = "LILIK KURNIANTORO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8007061JA") {
    inputNama.value = "LUKFIANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811111JA") {
    inputNama.value = "LUKMAN BUDIONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9013041ZJY") {
    inputNama.value = "M. FAIZAL HARIS";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405123JA") {
    inputNama.value = "M. KHOLIQ RIDHO ANTARTIKA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9014223ZJY") {
    inputNama.value = "MEGA SETYAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215030ZJY") {
    inputNama.value = "MIRADHA HERDINI WIDIATMI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9216153ZJY") {
    inputNama.value = "MOCH REZA ZULFAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "0019008ZJY") {
    inputNama.value = "MOCHAMAD AGIL ANDRIAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911127JA") {
    inputNama.value = "MOCHAMAD BAYU SAKTI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8711053JA") {
    inputNama.value = "MOCHAMAD FAISHOL ARIF";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9919007ZJY") {
    inputNama.value = "MOCHAMMAD RIZAL SUHANTONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7292117K3") {
    inputNama.value = "MOHAMAD ALI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811122JA") {
    inputNama.value = "MOHAMAD IRSAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9316031ZJY") {
    inputNama.value = "MOHAMAD YANURI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9318004ZJY") {
    inputNama.value = "MOHAMAT TOEFIK RIJAL";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9316032ZJY") {
    inputNama.value = "MOHAMMAD HASAN LUTFI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9316123ZJY") {
    inputNama.value = "MOHAMMAD SAMSUDIN HAFID";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8005052JA") {
    inputNama.value = "MOHAMMAD SHOLEH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405125JA") {
    inputNama.value = "MU'AMAR SAFI'I";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8207014JA") {
    inputNama.value = "MUCHLISIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9315352ZJY") {
    inputNama.value = "MUH FERIZQO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9011186JA") {
    inputNama.value = "MUHAMAD MURSID NUR ICHSAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9214110ZJY") {
    inputNama.value = "MUHAMAD ROSHIE FRIANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8309163Z") {
    inputNama.value = "MUHAMMAD AMIN FAUZI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215374ZJY") {
    inputNama.value = "MUHAMMAD AMIR MUJAHID";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215241ZJY") {
    inputNama.value = "MUHAMMAD DIMAS FIRDAUS";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9619040ZJY") {
    inputNama.value = "MUHAMMAD FAKHRI HADIYANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9114227ZJY") {
    inputNama.value = "MUHAMMAD HAFIDZ WIRANDRYO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8614135ZJY") {
    inputNama.value = "MUHAMMAD IRFAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015132ZJY") {
    inputNama.value = "MUHAMMAD SIDDIQ B.";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405124JA") {
    inputNama.value = "MUHAMMAD SULHAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815033ZJY") {
    inputNama.value = "MUHAMMAD SYARIFUDIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911119JA") {
    inputNama.value = "MUHAMMAD YUNAS AMRAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115032ZJY") {
    inputNama.value = "MULYA PANCA PERJAKA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7092137K3") {
    inputNama.value = "MUNANDAR";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8207062JA") {
    inputNama.value = "NASTOPO DARMAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8008026JA") {
    inputNama.value = "NDARU TRI HATMOKO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9011177JA") {
    inputNama.value = "NICHOLAS WAHYUSETIO NUGROHO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015028ZJY") {
    inputNama.value = "NUGROHO MULYO PRAKOSO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8814131ZJY") {
    inputNama.value = "NUGROHO NANDAR DYTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8505126JA") {
    inputNama.value = "NUR KHOLIQ MASRUCHI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8711050JA") {
    inputNama.value = "OGIK KURNIAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8711052JA") {
    inputNama.value = "ONGKO SATRIYO WIBOWO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9316099ZJY") {
    inputNama.value = "OSLO JEFFRICHO MARULI SIMANJUNTAK";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9315375ZJY") {
    inputNama.value = "PANSKINTI OKTONAEL SUMARLIN WARUWU";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9315243ZJY") {
    inputNama.value = "PINKAN DYAH BATHARI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9014128ZJY") {
    inputNama.value = "PRIAGUNG PAMBUDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9216183ZJY") {
    inputNama.value = "PRICILIA DUMA LAURA SINAGA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8609071JA") {
    inputNama.value = "PRIMA KHARISMA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305053JA") {
    inputNama.value = "PRIYATNO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "6993125K3") {
    inputNama.value = "PUJIYONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8611054JA") {
    inputNama.value = "RADIAR OKTAVIANTORO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8711044JA") {
    inputNama.value = "RAHMAT ALQADRI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115244ZJY") {
    inputNama.value = "RAKEL MASUTA ISMAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911125JA") {
    inputNama.value = "RANDI AZMI RIDHA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115096ZJY") {
    inputNama.value = "RATIH PUSPANINGTYAS";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8008028JA") {
    inputNama.value = "RATNA BUDIYANTI NURSITA DEWI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7906073JA") {
    inputNama.value = "RATNO WIJAYA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9919011ZJY") {
    inputNama.value = "RENDRA FAJRI AL HARIS";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215306ZJY") {
    inputNama.value = "RENDY DWI ANGGARA PRASETIA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815245ZJY") {
    inputNama.value = "REZA SAVANA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815095ZJY") {
    inputNama.value = "RIAN DEORITA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9319088ZJY") {
    inputNama.value = "RIANDIKA ADI PRAYOGO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115246ZJY") {
    inputNama.value = "RICO EKO WIBOWO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9517077ZJY") {
    inputNama.value = "RICO MULYA SAPUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115156ZJY") {
    inputNama.value = "RIDHO PRIMA OKTANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8814126ZJY") {
    inputNama.value = "RIDIAN PRAWIJAYA PUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811056JA") {
    inputNama.value = "RIEFIK ANGGIDIANSAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914132ZJY") {
    inputNama.value = "RIFKY NORDIAN HAMIDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215247ZJY") {
    inputNama.value = "RIFQI ARRIDHO ABID";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9418035ZJY") {
    inputNama.value = "RISWANDHA PRASDIATMAJA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7292129K3") {
    inputNama.value = "RIYU RINDANI RIANDINI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9214228ZJY") {
    inputNama.value = "RIZAL MOCHTYONO WIDODO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9116179ZJY") {
    inputNama.value = "RIZKA WIDYA ARIANI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9517256ZJY") {
    inputNama.value = "RIZKY AUGLIUS PASARIBU";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911115JA") {
    inputNama.value = "RONI SUSANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914112ZJY") {
    inputNama.value = "RYAN PERDANA PUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405118JA") {
    inputNama.value = "SANDY WIBOWO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8911129JA") {
    inputNama.value = "SATRIYA SEJATI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8410081JA") {
    inputNama.value = "SEFYAN DEDDY YULIANANTA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9315349ZJY") {
    inputNama.value = "SETIYO MUKTI AL AMIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8713043ZJY") {
    inputNama.value = "SETO TRI SUGIANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8611047JA") {
    inputNama.value = "SETYA BUDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9011184JA") {
    inputNama.value = "SHAFRUDIN NURUL IHSAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9415248ZJY") {
    inputNama.value = "SHOFYAN AJI UTAMA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914129ZJY") {
    inputNama.value = "SIGIT WISNU HABSORO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9114106ZJY") {
    inputNama.value = "SINGGIH DWI CAHYONO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7092096JA") {
    inputNama.value = "SJAREAT ACHDORI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9316145ZJY") {
    inputNama.value = "STEFANI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "6892128K3") {
    inputNama.value = "SUDASLI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8205054JA") {
    inputNama.value = "SUDIRMAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815126ZJY") {
    inputNama.value = "SUGENG RAHARJA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7393261K3") {
    inputNama.value = "SUKMA EFENDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7193127K3") {
    inputNama.value = "SUPRAPTO WALUYO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8105042JA") {
    inputNama.value = "SURYANA ADI WIJAYA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015249ZJY") {
    inputNama.value = "SURYAWAN GITA NUGRAHA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8305039JA") {
    inputNama.value = "SUTRISNO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015308ZJY") {
    inputNama.value = "SUWOKO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815029ZJY") {
    inputNama.value = "SYAFIUL HUDA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9216161ZJY") {
    inputNama.value = "SYAFRI FIRMANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7293279K3") {
    inputNama.value = "SYAIFUDIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115133ZJY") {
    inputNama.value = "SYAIFUL AMIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9014114ZJY") {
    inputNama.value = "SYAIFUL ARIFIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8815250ZJY") {
    inputNama.value = "SYAIFURRIDZAL";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8205050JA") {
    inputNama.value = "TAMJID";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "6793277K3") {
    inputNama.value = "TASFIN YAQZAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8609069JA") {
    inputNama.value = "TAUFIK HIDAYAT JOMANTARA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8405119JA") {
    inputNama.value = "TAUFIQUROCHMAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7193249K3") {
    inputNama.value = "TEDI KARTEDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914137ZJY") {
    inputNama.value = "TEGAR ISNAIN SULISTIANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9418027ZJY") {
    inputNama.value = "TIARA VIKASARI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015027ZJY") {
    inputNama.value = "TITO GARRY SURYA BHIRAWA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914136ZJY") {
    inputNama.value = "TITO KAROSEKALI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9216184ZJY") {
    inputNama.value = "TONI AZIZ";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9014133ZJY") {
    inputNama.value = "TONY EKA MAHENDRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8106014JA") {
    inputNama.value = "TOVI HARDANTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8914113ZJY") {
    inputNama.value = "TRI YUDHO HARIYO PAMUNGKAS";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8205043JA") {
    inputNama.value = "TRISNADIN NUGRAHA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9315251ZJY") {
    inputNama.value = "TRYAS ADYTIA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8105056JA") {
    inputNama.value = "TUSLAM";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8609072JA") {
    inputNama.value = "VIKANANTA DRAMASTYA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9115094ZJY") {
    inputNama.value = "VILANTIE KARTIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9318038ZJY") {
    inputNama.value = "VINCENSIUS CAHYA DWINANDA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8915131ZJY") {
    inputNama.value = "WAHYU SURYA PUTRA PRADANA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7193203K3") {
    inputNama.value = "WAHYUDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8406042JA") {
    inputNama.value = "WAWAN ARIF SISWOKO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8915097ZJY") {
    inputNama.value = "WIDIANTO DWI ARI IRAWAN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8610082JA") {
    inputNama.value = "WILLY PRASETYO ADI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8811128JA") {
    inputNama.value = "YAN MARTIN SITUMEANG";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9015309ZJY") {
    inputNama.value = "YOAN SAPUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8406043JA") {
    inputNama.value = "YOGIK MUSTAFA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7807018JA") {
    inputNama.value = "YOHANES PRIYO GUNO SUMAKTO";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9215252ZJY") {
    inputNama.value = "YUANDHICA ADI PRADANA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8711051JA") {
    inputNama.value = "YUDA ARIAWAN FIRDANI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7906083JA") {
    inputNama.value = "YUDI FIRSTIANTARA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8714134ZJY") {
    inputNama.value = "YUDIKA FARINDRA PUTRA";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8308062JA") {
    inputNama.value = "YULI FITRIANINGRUM";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9517080ZJY") {
    inputNama.value = "YUSUF EKO ARDIANSYAH";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "7806077JA") {
    inputNama.value = "ZAENAL ARIFIN";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "8306046JA") {
    inputNama.value = "ZAINAL MURSIDI";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9318009ZJY") {
    inputNama.value = "ZIA ULHAQ";
    localStorage.setItem("nama", inputNama.value);
  } else if (inputUsername.value === "9013042ZJY") {
    inputNama.value = "ZULI AGUS PRASETYO";
    localStorage.setItem("nama", inputNama.value);
  }
}
