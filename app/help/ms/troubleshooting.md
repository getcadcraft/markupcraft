---
title: Penyelesaian masalah
summary: Mesej yang dipaparkan MarkupCraft dan perkara yang perlu dilakukan, serta pembetulan untuk perkara yang nampaknya tidak berfungsi.
keywords: masalah, ralat, tidak berfungsi, bantuan, mesej, tidak boleh dibuka, tidak boleh simpan, kata laluan, dilindungi, pengukuran ditolak, tentukur, luar talian, kosong, perlahan, markup hilang, tanda soal
from: bb650b39
---

Kebanyakan masalah diterangkan dalam bar status di bahagian bawah skrin. Baca dahulu.

## Membuka fail

**"MarkupCraft membuka fail PDF. "x" bukan PDF."**
Anda memilih atau menjatuhkan sesuatu yang lain. Hanya PDF dibuka. Eksport lukisan dari program CAD anda sebagai PDF dahulu.

'"nama" memerlukan kata laluan untuk dibuka. Buka salinan yang tidak dilindungi.'
PDF itu dilindungi kata laluan. Minta salinan yang tidak dilindungi daripada pengirim, atau buka dalam program PDF yang anda tahu kata laluannya dan simpan salinan tanpa kata laluan.

'"nama" tidak dapat dibaca sebagai PDF (…)'
Fail itu rosak atau bukan PDF yang sebenar (muat turun tidak lengkap, lampiran e-mel terpotong). Muat turun semula. Jika program PDF lain boleh membukanya, guna "simpan sebagai" mereka untuk membuat salinan yang bersih dan buka salinan itu.

**"Sesetengah fail tidak dibuka"**
Apabila anda membuka beberapa fail sekaligus, kotak ini menyenaraikan fail yang gagal dan sebabnya. Yang lain sudah dibuka.

**"Pembaca PDF tidak dapat memuatkan: …"**
Enjin PDF tidak dapat diambil. Dalam talian: muat semula halaman dan cuba lagi; semak sama ada tembok api atau penyekat kandungan tidak menyekat laman ini. Luar talian: MarkupCraft tidak disimpan untuk kegunaan luar talian dalam pelayar ini (bar di bahagian atas tidak berbunyi "Sedia luar talian"). Dapatkan sambungan, pilih {{ui:Simpan untuk luar talian}}, dan tunggu "Sedia luar talian". Lihat [Bekerja luar talian](common:offline).

**"Sesetengah anotasi mungkin dipaparkan dua kali pada skrin" atau "Butiran anotasi tambahan tidak dapat dibaca"**
Ulasan sedia ada dalam fail itu luar biasa. Ia tetap dibuka sebaik yang boleh dilakukan MarkupCraft; semak sebelum bergantung padanya. Penyimpanan masih berfungsi.

**Helaian mempunyai nama yang salah, atau "halaman 3"**
Lihat [Cara helaian mendapat namanya](topic:open-a-plan-set#how-sheets-get-their-names). Helaian yang diimbas tidak mempunyai teks untuk dibaca; guna {{ui:Namakan semula helaian}}.

**Helaian yang sama muncul dua kali**
Fail yang sama dibuka dua kali. Pilih {{ui:Tutup}} (simpan dahulu jika perlu) dan buka set itu semula.

## Melukis dan memilih

**Tiada apa berlaku apabila saya klik pada helaian**
Semak alat mana yang ditekan dalam bar alat, dan baca bar status. Dengan {{ui:Segi empat tepat}}, {{ui:Elips}} dan {{ui:Awan}}, klik tanpa menyeret tidak melukis apa-apa: seret. Dengan {{ui:Polygaris}}, {{ui:Poligon}}, {{ui:Awan bebas}} dan {{ui:Luas}}, titik sedang ditambah: selesaikan dengan klik dua kali atau {{key:Enter}}.

**"Poligon memerlukan sekurang-kurangnya 3 titik." (atau 2 untuk polygaris)**
Klik lebih banyak titik sebelum menyelesaikan.

**"Tiada apa ditaip, jadi tiada teks ditambah."**
Kotak teks dan callout hanya dikekalkan apabila ia mempunyai teks. Lukis semula dan taip sebelum klik di tempat lain.

**"Kedua-dua titik sama. Klik dua titik yang berbeza."**
Bagi garisan, anak panah, panjang dan tentukur, dua hujung mesti berjauhan. Seret, atau klik dua kali di tempat yang berbeza.

**Saya tidak dapat mengalih atau memadam markup; ia mempunyai kotak putus-putus kelabu**
Ia ialah ulasan baca sahaja yang datang bersama fail (contohnya serlahan teks). MarkupCraft mengekalkannya seperti sedia ada: anda hanya boleh membalasnya. Bar status berbunyi "markup baca sahaja dikekalkan seperti dalam fail".

**Kekunci saya menaip huruf dalam kotak dan bukannya memilih alat**
Kursor berada dalam kotak teks (balasan, medan dalam {{ui:Sifat}}, carian helaian). Klik pada bahagian kosong kawasan helaian dahulu, atau tekan {{key:Esc}} jika anda sedang menyunting teks markup.

**Space tidak menggerakkan paparan, atau kekunci anak panah tidak berfungsi**
Anda baru sahaja mengklik butang bar alat, jadi ia masih memegang papan kekunci. Seret dengan butang tengah tetikus, atau klik helaian sekali dengan {{ui:Pilih}} dihidupkan, kemudian cuba lagi. Lihat juga [Papan kekunci dan tetikus](topic:keyboard#when-a-key-does-nothing).

**Cubitan pada skrin sentuh meninggalkan kesan**
Alat seret (pen, awan, segi empat tepat) mula sebelum jari kedua tiba dan selesai sebelum ia dibatalkan. Tekan {{ui:Buat asal}}. Letakkan kedua-dua jari serentak apabila anda mahu zum.

## Mengukur

**"Tentukur helaian ini dahulu: pilih dua titik pada jarak yang diketahui, atau pilih skalanya. Kemudian ukur."**
Setiap helaian memerlukan skalanya sendiri sebelum {{ui:Panjang}} atau {{ui:Luas}}. MarkupCraft telah bertukar kepada {{ui:Tentukur}}: klik dua hujung dimensi yang diketahui dan taip panjangnya, atau klik butang skala dalam bar status dan pilih skala. Lihat [Tentukur helaian dan ukur](topic:calibrate-and-measure).

**'Itu bukan panjang yang difahami MarkupCraft.'**
Taip seperti `24'-0"`, `12' 6 1/2"`, `7.2 m` atau `900 mm`. Lihat [Unit, panjang dan skala](topic:units-and-scales).

**Pengukuran sedikit tersasar, atau tersasar teruk**
- Skala pratetap pada PDF yang tidak bersaiz penuh mengukur dengan salah. Tentukur daripada dimensi diketahui yang panjang sebaliknya.
- Pemisah ribuan dibaca sebagai titik perpuluhan: `1,200 mm` bermaksud 1.2 mm. Taip `1200 mm`.
- Zum masuk apabila anda klik hujung.
- Lukisan mungkin tidak mengikut skala ("NTS").

**"Pilih kumpulan kiraan dahulu, kemudian Shift+klik tanda untuk mengalihkannya."**
Pilih {{ui:Pilih}}, klik kumpulan kiraan, kemudian pilih {{ui:Kira}} semula dan klik {{key:Shift}} pada titik itu.

## Menyimpan

**"PDF ini dilindungi (disulitkan), jadi salinan yang bermarkup tidak dapat ditulis."**
Fail itu melarang perubahan. Minta salinan yang tidak dilindungi. Sementara itu anda masih boleh mengeksport senarai markup sebagai CSV atau BCF.

**"Penulis PDF tidak dapat memuatkan: …"**
Biasanya anda luar talian dan aplikasi tidak disimpan untuk kegunaan luar talian (tiada "Sedia luar talian" dalam bar di bahagian atas). Markup anda masih ada dalam tab: biarkan tab terbuka, dapatkan sambungan, dan pilih {{ui:Simpan}} sekali lagi. Kemudian pilih {{ui:Simpan untuk luar talian}} supaya ia berfungsi luar talian kali seterusnya; salinan yang disimpan termasuk penulis PDF.

**"Tidak dapat menyimpan <fail>"**
Kotak menunjukkan sebabnya. Markup anda masih ada dalam tab. Cuba lagi; jika berulang, eksport CSV supaya ulasan tidak hilang, dan laporkan mesejnya.

**Saya pilih Simpan tetapi hanya satu fail sampai**
Pelayar anda menyekat muat turun tambahan. Cari notis dalam bar alamat dan benarkan laman ini memuat turun berbilang fail, kemudian simpan semula.

**Saya tidak dapat mencari fail yang disimpan**
Ia pergi ke folder muat turun pelayar anda. Buka senarai muat turun pelayar (dalam Chrome dan Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; dalam Firefox dan Safari, butang muat turun dalam bar alat) untuk melihat lokasinya. Lihat [Pelayar dan komputer](common:browsers).

**Sesetengah teks menunjukkan "?" dalam pelihat PDF lain**
Aksara di luar set Eropah Barat dicetak sebagai "?" dalam salinan. Mesej simpan mengira aksara tersebut. Lihat [Simpan PDF yang bermarkup](topic:save-the-marked-up-pdf).

**Cop menunjukkan tarikh esok (atau semalam)**
Tarikh cop adalah dalam UTC. Lihat [Cop dan nota melekit](topic:stamps-and-notes).

## Bekerja luar talian

**Butang luar talian berbunyi "Tidak dapat menyimpan"**
Beberapa fail aplikasi tidak dimuat turun. Semak sambungan dan klik butang sekali lagi; ia mengira "Menyimpan N daripada M" sehingga "Sedia luar talian".

**Butang luar talian berbunyi "Luar talian tidak tersedia"**
Tetingkap pelayar ini tidak dapat menyimpan salinan luar talian: tetingkap persendirian, atau komputer yang dasarnya menyekatnya. Buka MarkupCraft dalam tetingkap biasa dan cuba lagi.

**Luar talian, aplikasi ialah versi yang lebih lama**
Salinan luar talian ialah versi yang anda simpan. Apabila anda dalam talian, klik "Sedia luar talian" dan pilih "Simpan semula (dapatkan versi terbaru)". Untuk membebaskan ruang, pilih "Alih keluar salinan luar talian". Lihat [Bekerja luar talian](common:offline).

**Bantuan tidak akan dibuka**
Tekan {{key:F1}} (pada Mac, dengan **fn**), atau pilih {{ui:Bantuan}} dalam bar di bahagian atas. Ia berfungsi luar talian juga.

## Perkara yang hilang

**Markup saya hilang selepas menutup atau memuat semula tab**
Buka MarkupCraft semula dalam pelayar yang sama: ia menawarkan kerja yang belum disimpan dengan "Pulihkan kerja anda?". Pilih {{ui:Pulihkan}} dan simpan PDF. Salinan disimpan sehingga 30 hari; tetingkap persendirian, atau membersihkan data laman, tidak meninggalkan apa-apa. Lihat [Pulihkan kerja anda](common:recover).

**Nama, tetapan alat atau peti alat saya hilang**
Ia disimpan dalam pelayar ini sahaja dan telah dibersihkan (data laman dibersihkan, tetingkap persendirian, pelayar atau komputer lain, atau pembersihan Safari untuk laman yang tidak dilawati sekian lama). Tetapkan nama semula dan import peti yang anda eksport. Lihat [Apa yang kekal dalam pelayar ini](topic:browser-storage).

**"Peti alat tidak dapat disimpan dalam pelayar ini (storan dimatikan atau penuh). Eksport untuk menyimpannya."**
Pelayar enggan menyimpan data untuk laman ini (mod persendirian, storan disekat oleh tetapan atau dasar, atau penuh). Eksport peti selepas mengubahnya, dan import semula pada kali seterusnya.

## Paparan dan kelajuan

**Helaian kelihatan kabur seketika**
MarkupCraft menunjukkan paparan kasar yang pantas semasa anda zum atau mengalih paparan, dan melukisnya semula dengan tajam sejurus selepas anda berhenti.

**Semuanya perlahan dengan set yang besar**
Tutup tab berat yang lain, buka lebih sedikit fail sekaligus, dan elakkan zum ke tahap maksimum pada helaian yang sangat besar. Lihat [Bekerja dengan beberapa fail sekaligus](topic:several-files#big-sets).

**Helaian gelap dengan garisan terang**
Anda berada dalam tema {{ui:Model}}. Pilih {{ui:Kertas}} dalam bar di bahagian atas untuk garisan gelap pada latar putih. Markup anda dan PDF yang disimpan tidak terjejas.
