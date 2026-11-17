---
title: Datang dari perisian markup lain
summary: Cara tabiat program markup PDF desktop dipetakan kepada MarkupCraft, dan perbezaan yang mengejutkan orang.
keywords: tukar, beralih, berpindah, biasa, pdf markup desktop, peti alat, senarai markup, tindihan, sesi, profil, pintasan, perbezaan
from: c8f323e1
---

Jika anda menyemak lukisan dalam Bluebeam Revu (atau mengulas PDF dalam program PDF desktop lain), kebanyakan MarkupCraft akan terasa biasa: awan, callout, peti alat, senarai markup, status dengan balasan, ukuran yang ditentukur, dan tindihan helaian. Cara fail dikendalikan ialah perbezaan utama, jadi baca bahagian seterusnya walaupun anda melangkau yang lain.

## Lima perbezaan yang penting

1. **Simpan mencipta fail baharu.** MarkupCraft berjalan dalam pelayar dan tidak dapat menulis ganti PDF pada cakera anda. {{ui:Simpan}} memuat turun "<name> (marked up).pdf" dan asal kekal seperti sedia ada. Kali seterusnya, buka salinan "(marked up)", dan kemaskan salinan lama sendiri.
2. **PDF disimpan apabila anda simpan.** Sehingga itu, salinan pemulihan dalam pelayar ini memelihara markup anda melalui ranap atau tab yang ditutup, dan MarkupCraft menawarkannya semula pada kali seterusnya. Ia jaring keselamatan: simpan PDF untuk mengekalkan semakan.
3. **Profil anda berada dalam pelayar.** Nama pengarang, tetapan alat dan peti alat anda disimpan dalam pelayar ini pada komputer ini. Pelayar atau komputer lain bermula dari awal, dan mengosongkan data laman web memadamkannya. Eksport peti alat anda sebagai sandaran. Lihat [Apa yang kekal dalam pelayar ini](topic:browser-storage).
4. **Belum ada sesi kongsi.** Tiada sesi semakan langsung yang dikongsi dan tiada projek awan. Semakan bergerak dalam PDF: simpan, hantar salinan, dan orang seterusnya membalas dan menyimpan.
5. **Skala ialah bagi setiap helaian, dan hanya bagi setiap helaian.** Tiada viewport dalam helaian dan tiada "guna skala ini pada semua halaman". Tentukur setiap helaian yang anda ukur.

## Setiap tabiat

| Anda biasa dengan | Dalam MarkupCraft |
|---|---|
| Panel imej kecil, label halaman | {{ui:Helaian}} di sebelah kiri. Nama datang daripada label halaman atau dibaca daripada blok tajuk; betulkannya dengan {{ui:Namakan semula helaian}}. |
| Membuka beberapa PDF sebagai satu set | Buka semuanya sekaligus; ia menjadi satu senarai. Tiada fail set disimpan: buka PDF yang sama kali seterusnya. |
| Peti alat dengan set alat | Tab {{ui:Alat}}: satu peti setiap pelayar, alat yang disimpan dengan gaya dan subjek. Kongsi melalui {{ui:Eksport}} dan {{ui:Import}} sebagai fail JSON. Fail set alat daripada program lain tidak boleh diimport. |
| Panel sifat | Tab {{ui:Sifat}}: status, subjek, ulasan, gaya, balasan dan item punch di satu tempat. |
| Senarai markup dengan lajur | Tab {{ui:Markup}} dengan penapis mengikut helaian, pengarang, status dan jenis. Eksport CSV atau BCF. Tiada lajur tersuai dan tiada ringkasan PDF atau buku kerja lagi. |
| Status dan keadaan semakan | {{ui:Status}}: Buka, Diterima, Ditolak, Selesai. Tiada set status tersuai. Disimpan sebagai keadaan semakan standard. |
| Balasan pada markup | Utas "Balasan" dalam {{ui:Sifat}}, dengan perubahan status dilog di dalamnya. Balasan yang telah dihantar tidak boleh disunting. |
| Tentukur, kemudian panjang, luas, kiraan | {{ui:Tentukur}}, {{ui:Panjang}} ({{key:M}}), {{ui:Luas}} ({{key:Q}}, memberi luas dan perimeter), {{ui:Kira}} ({{key:U}}). Tiada sudut, jejari, isipadu, panjang polygaris atau potongan lagi. |
| Tindihan halaman | Tab {{ui:Bandingkan}}: merah untuk lama, biru untuk baharu, jajarkan dengan dua titik. Tiada awan automatik "bandingkan dokumen". |
| Cop | {{ui:Cop}} dengan enam cop terbina dan wording tersuai, ditandatangani dengan nama anda dan tarikh. Tiada cop imej atau tandatangan lagi. |
| Penjejakan punch atau isu | Tab {{ui:Senarai kecacatan}}: item bernombor dengan penerima, tarikh akhir dan status; eksport CSV. |
| Sesi kerjasama langsung | Belum tersedia. Edarkan PDF yang disimpan. |
| Ratakan | Belum dibina. Markup kekal sebagai ulasan yang boleh ditunjukkan dan dicetak oleh pemapar lain. |
| Lapisan untuk markup | Belum dibina. Gunakan subjek, pengarang dan penapis senarai untuk menyusun ulasan. |
| Pautan hiperteks antara helaian | Belum dibina. |
| Bar ruang untuk pan, roda untuk zum | Sama: tahan {{key:Space}} dan seret; roda zum pada penuding. Roda tidak pernah menatal halaman. |

## Kekunci yang berbeza

Ramai kekunci satu huruf adalah seperti yang anda jangkakan, tetapi semak ini sebelum jari anda melakukannya untuk anda:

- {{key:K}} ialah {{ui:Callout}}, dan {{key:Q}} ialah {{ui:Luas}}. Jika anda biasa menggunakan Q untuk callout, ia akan memulakan kawasan di sini.
- {{key:C}} ialah kotak {{ui:Awan}}; {{key:Shift+C}} ialah {{ui:Awan bebas}}.
- {{key:M}} ialah {{ui:Panjang}}, {{key:U}} ialah {{ui:Kira}}, {{key:Y}} ialah {{ui:Polygaris}}, {{key:G}} ialah {{ui:Poligon}}, {{key:I}} ialah {{ui:Serlah}}.
- {{key:Mod+D}} menduplikasi pilihan (bukan penanda buku pelayar).
- {{key:Mod+Plus}} dan {{key:Mod+Minus}} men zum helaian, bukan halaman pelayar.
- Mana-mana kekunci boleh ditukar: lihat di bawah.

:::tip
Jika jari anda biasa dengan Bluebeam Revu, pilih gaya menu {{ui:Semakan PDF}} dalam {{ui:Tetapan}} › {{ui:MarkupCraft}} › {{ui:Menu, kekunci dan tetikus}}: bar menu (Fail, Sunting, Paparan, Dokumen, Markup, Ukur, Tetingkap) di atas baris alat semakan, {{key:Q}} untuk callout, {{key:H}} untuk penyerlah, {{key:N}} untuk poligon, dan ukuran pada {{key:Alt+Shift}} dengan huruf. Mana-mana kekunci boleh ditukar di sana juga. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).
:::

Senarai penuh ada dalam [Papan kekunci dan tetikus](topic:keyboard).

## Perkara yang berfungsi berbeza daripada jangkaan anda

- **Alat kekal aktif.** Selepas awan, anda masih melukis awan. {{key:Esc}} sekali mengosongkan pilihan, dua kali kembali kepada {{ui:Pilih}}.
- **Teks dan callout memerlukan teks.** Jika tamat tanpa menaip apa-apa, tiada markup ditambah. Nota dibiarkan kosong.
- **Ukuran memerlukan skala dahulu.** {{ui:Panjang}} dan {{ui:Luas}} bertukar kepada {{ui:Tentukur}} pada helaian yang belum ditentukur dan kembali selepas itu.
- **Ulasan daripada program lain.** Segi empat tepat, elips, garisan, polygaris, poligon, dakwat, kotak teks dan nota melekit yang dibuat di tempat lain menjadi markup MarkupCraft yang boleh disunting, dan ditulis semula mengikut cara MarkupCraft apabila anda simpan (rupanya boleh berubah sedikit). Serlahan teks, cop program lain dan jenis khas lain kekal baca sahaja: anda boleh membalasnya, tetapi tidak mengubahnya.
- **Aksara di luar huruf Eropah Barat** dicetak sebagai "?" dalam PDF yang disimpan. Lihat [Simpan PDF yang telah ditandai](topic:save-the-marked-up-pdf).
- **Tarikh cop** menggunakan UTC, jadi cop yang dibuat lewat malam di Amerika boleh menunjukkan tarikh esok.
- **Ukuran dibawa** sebagai ulasan ukuran standard, dan setiap helaian yang ditentukur mengekalkan skalanya, jadi program yang membaca ukuran PDF biasanya boleh memaparkannya. Kelakuan tepat bergantung pada program itu.

## Menggunakan kedua-duanya

Anda boleh berulang-alik. Ulasan yang dibuat di tempat lain dibuka dalam MarkupCraft, dan PDF "(marked up)" dibuka dalam program PDF lain dengan setiap markup, balasan dan status kelihatan. Apa yang hanya dibaca semula oleh MarkupCraft (penerima dan tarikh akhir punch, status item) disimpan dalam fail untuk MarkupCraft.
