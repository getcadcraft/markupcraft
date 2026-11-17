---
title: Buka set pelan dan bergerak antara helaian
summary: Buka satu PDF atau banyak, atau mula dengan halaman kosong, cari helaian mengikut nombor atau nama, zum dan pan, dan namakan semula helaian apabila fail memberinya nama yang salah.
keywords: buka, baharu, halaman kosong, helaian kosong, lakaran, grid, tanpa tajuk, set pelan, helaian, halaman, imej kecil, label halaman, nombor helaian, blok tajuk, namakan semula, navigasi, zum, pan, muat, cari helaian
from: 1e7f4d50
---

## Buka set

1. Pilih {{ui:Buka}} dalam bar alat, atau tekan {{key:Mod+O}}.
2. Dalam pemilih fail, pilih setiap PDF dalam set ({{pick:mac=tahan ⌘ dan klik setiap fail|windows linux=tahan Ctrl dan klik setiap fail}}, atau pilih julat dengan Shift), kemudian sahkan.
   Atau seret fail dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} ke kawasan helaian. "Lepaskan PDF untuk membukanya" muncul semasa anda menyeret.
3. Tunggu sehingga bar status berkata "Membuka <file>…". Untuk fail besar ia mengira: "(10 daripada 60 helaian)".

Hasilnya: senarai {{ui:Helaian}} menunjukkan setiap halaman bagi setiap fail, mengikut susunan anda membukanya, dan bar status berkata sesuatu seperti "Dibuka 3 fail (42 helaian dalam set)." Jika fail itu sudah ada ulasan, ia menambah berapa banyak yang dibaca.

Untuk menambah lebih banyak fail kepada set kemudian, buka dengan cara yang sama. Ia akan disambungkan di hujung senarai.

## Mula dengan halaman kosong

Untuk melakar atau mengambil nota tanpa lukisan, buat halaman kosong dan bukannya membuka PDF:

1. Pilih {{ui:Baharu}} dalam bar alat, atau {{ui:Mula dengan halaman kosong}} pada skrin permulaan, atau tekan {{key:Mod+N}} di tempat pelayar anda membenarkan halaman mendapatkannya (aplikasi desktop dan Studio sentiasa membenarkannya).
2. Pilih {{ui:Saiz kertas}}: Letter, Tabloid atau ANSI B, ARCH D, ARCH E, A4, A3 atau A1, dan {{ui:Potret}} atau {{ui:Landskap}}.
3. Pilih {{ui:Grid}}: {{ui:Tiada}}, {{ui:Titik}} atau {{ui:Petak}}. Grid ialah setiap 1/4 in, dengan garisan yang lebih tebal setiap 1 in pada kertas inci, dan setiap 5 mm, dengan garisan yang lebih tebal setiap 10 mm pada kertas metrik. Ia dicetak pada halaman itu.
4. Taip berapa banyak {{ui:Halaman}} yang anda mahu, dari 1 hingga 20, kemudian pilih {{ui:Cipta}}.

Hasilnya: PDF baharu bernama "Untitled-1.pdf" (kemudian "Untitled-2.pdf", dan seterusnya) dibuka seperti fail lain, dibuat di sini pada komputer ini. Setiap alat berfungsi padanya, dan {{ui:Simpan}} memuat turun "Untitled-1 (marked up).pdf". MarkupCraft mengingati pilihan anda untuk kali seterusnya.

Halaman tidak mempunyai skala: bar status berkata "Tidak ditentukur". Grid bukan skala. Untuk mengukur, tentukur helaian atau pilih skala dahulu; lihat [Tentukur dan ukur](topic:calibrate-and-measure).

Untuk menambah halaman pada set kosong, buka salah satu helaiannya dan pilih {{ui:Tambah halaman kosong}} di bawah senarai {{ui:Helaian}}. Halaman baharu mempunyai kertas dan grid yang sama dan diletakkan di hujung. Seperti setiap perubahan halaman, ia tidak boleh dibatalkan; lihat [Cetak, dan tukar halaman PDF](topic:pages-and-printing).

## Bagaimana helaian mendapat nama

MarkupCraft menamakan setiap helaian "<nombor helaian> — <tajuk>", contohnya "A-101 — Pelan lantai", daripada yang pertama dalam senarai ini yang dijumpainya:

1. Nama yang anda taip dengan {{ui:Namakan semula helaian}} (di bawah).
2. Label halaman PDF, apabila orang yang membuat PDF menetapkannya (contohnya "A-101").
3. Blok tajuk: MarkupCraft membaca teks halaman dan mencari sesuatu yang berbentuk seperti nombor helaian (A-101, A1.01, M-201A, KA1-1), memihak kepada sudut kanan bawah, jalur kanan dan jalur bawah, dan mengambil tulisan terbesar berhampirannya sebagai tajuk.
4. Jika tidak, nama fail dan halaman: "Pelan — halaman 3".

Untuk melihat yang mana digunakan, tekan {{key:Esc}} sehingga tiada apa dipilih dan {{ui:Pilih}} dihidupkan, kemudian lihat {{ui:Sifat}}: "Dibaca daripada" berkata "Label halaman", "Blok tajuk", "Nama fail" atau "Ditaip secara manual".

:::note
Helaian yang diimbas, dan PDF yang hurufnya dieksport sebagai garisan, tidak mempunyai teks untuk dibaca. Ia dinamakan mengikut fail dan halaman sehingga anda menamakannya semula. MarkupCraft belum dapat membaca teks daripada imej.
:::

## Bergerak antara helaian

- Klik helaian dalam {{ui:Helaian}}.
- Tekan {{key:PageDown}} untuk helaian seterusnya dan {{key:PageUp}} untuk yang sebelumnya, atau gunakan anak panah dalam bar di bawah helaian.
- Taip dalam {{ui:Cari helaian}}: sebahagian nombor ("A-2"), satu perkataan tajuk ("bumbung"), atau nama fail. Senarai itu menyempit semasa anda menaip ("4 daripada 42"). Tekan {{key:Enter}} untuk membuka padanan pertama. Kosongkan kotak untuk melihat semua helaian semula.

Setiap helaian mengekalkan zum dan kedudukannya sendiri sehingga anda menutup set.

## Zum dan pan

:::mouse
- **Zum:** putar roda di atas helaian. Ia berzum di sekitar penuding. Atau tekan {{key:Plus}} dan {{key:Minus}} (juga dengan {{key:Mod}}), atau gunakan butang zum. Taip peratusan tepat dalam kotak zum.
- **Muat:** {{ui:Muat halaman}} ({{key:Mod+0}}) menunjukkan seluruh helaian; {{ui:Muat lebar}} ({{key:Mod+9}}) memenuhi lebar.
- **Pan:** seret dengan butang tengah (roda), atau seret dengan butang kanan, atau tahan {{key:Space}} dan seret, atau pilih {{ui:Pan}} ({{key:H}}) dan seret. Tanpa apa-apa dipilih, kekunci anak panah turut menggerakkan helaian.
:::

:::mac mouse
Pada pad jejak Mac, tatal dua jari berzum (ia tidak menatal helaian). Untuk pan, tahan {{key:Space}} dan seret dengan satu jari, atau tukar kepada {{ui:Pan}} dengan {{key:H}}. Cubitan berzum dalam Chrome, Edge dan Firefox.
:::

:::touch
- **Zum dan pan:** letakkan dua jari pada helaian. Renggangkan atau cubit untuk berzum di sekitar titik di antara jari, dan gerakkan bersama untuk pan. Kedua-duanya berlaku serentak.
- **Pan dengan satu jari:** pilih {{ui:Pan}} dahulu. Dengan alat lain, satu jari melukis atau memilih.
- {{ui:Muat halaman}} dan {{ui:Muat lebar}} berada dalam bar di bawah helaian.
:::

Anda boleh zum keluar jauh melebihi keseluruhan helaian dan zum masuk sehingga 6400%. Helaian dilukis semula dengan tajam sebentar selepas anda berhenti bergerak.

## Penanda buku

{{ui:Penanda buku}}, di bahagian atas panel {{ui:Helaian}}, menunjukkan penanda buku (rangka) PDF yang dimiliki helaian terbuka. Pilih satu untuk pergi ke halamannya. Ikon pensel menamakan semula penanda buku dan ikon silang mengeluarkannya. {{ui:Bina daripada helaian}} membuat satu penanda buku bagi setiap helaian, dinamakan seperti yang dipaparkan dalam senarai helaian (nombor helaian dan tajuk), dan {{ui:Tambah untuk helaian ini}} menambah satu untuk helaian yang anda lihat. Perubahan ialah sebahagian daripada kerja fail yang belum disimpan: {{ui:Simpan}} menulisnya ke dalam salinan, di mana setiap pembaca PDF menunjukkannya.

## Putar paparan

Dua butang putar di sebelah kanan bar di bawah helaian memutar paparan sukuan pusingan ke mana-mana arah, untuk helaian yang dilukis mendatar. Hanya paparan yang berputar: PDF dan markupnya kekal seperti sediakala, dan helaian seterusnya dibuka mengikut cara PDF-nya (setiap helaian mengingati putarannya sendiri semasa set dibuka). Teks yang anda tambah pada paparan yang diputar dibaca tegak seperti yang anda lihat. Untuk memutar halaman itu sendiri dalam PDF yang disimpan, gunakan {{ui:Halaman}}, kemudian {{ui:Putar halaman mengikut arah jam}}; lihat [Cetak, dan tukar halaman PDF](topic:pages-and-printing).

## Namakan semula helaian

Apabila nama helaian salah atau hilang:

1. Tunjukkan helaian.
2. Tekan {{key:Esc}} sehingga tiada apa dipilih dan alat {{ui:Pilih}} dihidupkan. {{ui:Sifat}} kini menunjukkan helaian.
3. Pilih {{ui:Namakan semula helaian}}.
4. Taip {{ui:Nombor helaian}} dan {{ui:Tajuk}}, kemudian pilih {{ui:Simpan}}.

Hasilnya: senarai helaian, bar di bawah helaian dan senarai markup semuanya menggunakan nama baharu, dan "Dibaca daripada" berkata "Ditaip secara manual". Penamaan semula boleh dibatalkan dengan {{key:Mod+Z}}.

Untuk kembali kepada apa yang dinyatakan oleh fail, buka {{ui:Namakan semula helaian}} sekali lagi, kosongkan kedua-dua kotak, dan pilih {{ui:Simpan}}.

Apabila anda menyimpan, nombor helaian yang ditaip menjadi label halaman dalam PDF, supaya pembaca PDF lain turut menunjukkan "A-101" dalam kotak halamannya. Jika anda memberi mana-mana halaman fail satu nombor, setiap halaman fail itu mendapat label dalam salinan (nombor yang ditaip, atau label lamanya, atau nombor halamannya). Tajuk yang ditaip dikekalkan untuk MarkupCraft tetapi pembaca lain tidak menunjukkannya.

## Bawa PDF ke TakeoffCraft, atau bawa ke sini

Apabila TakeoffCraft dibuka di tempat yang sama (makmal, Try atau aplikasi dalam talian), bar di bawah helaian mempunyai {{ui:Buka dalam TakeoffCraft}}. Ia membuka PDF helaian dalam TakeoffCraft dalam tab baharu, seperti yang dibuka di sini, supaya anda boleh mengukur kuantiti padanya. Markup anda kekal di sini; simpannya seperti biasa.

Butang {{ui:MarkupCraft}} dalam TakeoffCraft melakukan perkara yang sama ke arah sebaliknya: PDF dibuka di sini seolah-olah anda telah memilih {{ui:Buka}}. Jika pelayar menyekat tab baharu, benarkan tetingkap timbul untuk laman ini dan pilih butang itu sekali lagi.
