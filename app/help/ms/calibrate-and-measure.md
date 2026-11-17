---
title: Tentukur helaian dan ukur
summary: Tetapkan skala setiap helaian daripada pratetap atau dimensi yang diketahui, kemudian ukur panjang, luas dengan perimeter, dan kiraan.
keywords: tentukur, skala, tetapkan skala, ukur, panjang, jarak, dimensi, luas, kaki persegi, perimeter, kira, pengukuran kuantiti, pembaris, aritmetik, pengiraan, tambah, pecahan
from: 49a25c6d
---

Panjang dan luas perlu tahu skala helaian. MarkupCraft menyimpan skala **bagi setiap helaian**: tentukur setiap helaian yang anda ukur. Kiraan tidak memerlukan skala.

Bar status menunjukkan skala helaian semasa, atau "Belum ditentukur".

## Pilih skala daripada senarai

Gunakan ini apabila PDF berada pada saiz penuh (helaian 24 × 36 yang dicetak pada 24 × 36) dan lukisan menyatakan skalanya.

1. Klik butang skala dalam bar status ("Belum ditentukur"). Kotak "Skala helaian" dibuka.
2. Di bawah {{ui:Skala}}, pilih skala: seni bina (1/32" = 1'-0" hingga 3" = 1'-0"), kejuruteraan (1" = 10' hingga 1" = 100') atau metrik (1:1 hingga 1:1000).
3. Pilih {{ui:Tetapkan skala}}.

Hasilnya: bar status menunjukkan skala, contohnya `1/4" = 1'-0"`. Skala seni bina menunjukkan panjang dalam kaki dan inci, skala kejuruteraan dalam kaki perpuluhan, dan skala metrik sehingga 1:50 dalam milimeter serta dari 1:100 dalam meter.

:::warning
Pratetap hanya betul jika PDF tidak dikecilkan. Set separuh saiz, atau helaian yang "muat ke halaman" semasa dibuat, akan diukur salah dengan pratetap. Tentukur daripada dimensi yang diketahui sebaliknya, dan semak satu dimensi bagaimanapun.
:::

## Tentukur daripada dimensi yang diketahui

Gunakan ini untuk set separuh saiz, helaian yang diimbas, perincian pada skala ganjil, atau untuk menyemak pratetap.

1. Cari dimensi panjang yang anda percayai, atau bar skala grafik.
2. Pilih {{ui:Tentukur}} dalam kumpulan {{ui:Ukur}} (atau pilih {{ui:Pilih dua titik}} dalam kotak "Skala helaian").
3. Klik satu hujung dimensi, kemudian hujung yang satu lagi. (Atau seret dari satu hujung ke hujung yang lain.) Zum masuk dahulu untuk ketepatan; {{key:Shift}} memastikan garisan pada langkah 45°.
4. Kotak menyatakan berapa jauh titik-titik itu di atas kertas dan bertanya "Berapa jauhkah jarak sebenarnya?". Taip {{ui:Jarak sebenar}}, contohnya `24'-0"`, `12' 6 1/2"`, `7.2 m` atau `900 mm`.
5. Pilih cara panjang ditunjukkan di bawah {{ui:Tunjukkan panjang dalam}}: {{ui:Kaki dan inci}}, {{ui:Kaki perpuluhan}}, {{ui:Inci}}, {{ui:Meter}} atau {{ui:Milimeter}}.
6. Pilih {{ui:Tetapkan skala}}.

Hasilnya: bar status menunjukkan "Ditentukur: 24'-0" berbanding 1.00 in" (panjang sebenar dan panjang di atas kertas), dan alat yang anda hendak gunakan untuk mengukur kembali dihidupkan. Setiap cara menaip panjang ada dalam [Unit dan panjang](topic:units-and-scales).

Jarak sebenar juga boleh menjadi pengiraan kecil: `12'6"+3/4"`, `(24'-0")/3` atau `2*450mm`. Gunakan `+ - * /` dan kurungan; nombor tanpa unit dikira dalam unit di bawah {{ui:Tunjukkan panjang dalam}} (kaki untuk {{ui:Kaki dan inci}}). {{ui:Tetapkan skala}} menggunakan hasilnya.

Jika MarkupCraft tidak dapat membaca apa yang anda taip, kotak itu memberitahu: 'Itu bukan panjang yang difahami MarkupCraft. Cuba 24'-0", 12' 6 1/2", 7.2 m atau 900 mm.' Pengiraan yang tidak dapat diselesaikan menyatakan sebabnya dan di mana, contohnya "Kurung tidak ditutup (aksara 5)."

## Ukur panjang

1. Pilih {{ui:Panjang}} ({{key:M}}).
2. Klik permulaan, kemudian pengakhiran. Atau seret dari permulaan ke pengakhiran. {{key:Shift}} memastikannya pada langkah 45°.

Hasilnya: garisan dimensi dengan tanda dan panjang ditulis padanya. Bar status mengulanginya ("Panjang: 12'-6 1/2" (1/4" = 1'-0")."), dan {{ui:Sifat}} menunjukkannya di bawah {{ui:Panjang}}. Kaki dan inci dibundarkan kepada 1/16" terdekat.

Jika helaian belum mempunyai skala, memilih {{ui:Panjang}} akan bertukar kepada {{ui:Tentukur}} dan bar status menerangkan: "Tentukur helaian ini dahulu: pilih dua titik yang berjarak diketahui, atau pilih skalanya. Kemudian ukur." Selepas anda menetapkan skala, {{ui:Panjang}} kembali.

## Lakar mengikut skala

Pada helaian yang ditentukur, anda boleh menaip panjang sebenar semasa melukis {{ui:Garisan}}, {{ui:Anak panah}}, {{ui:Panjang}}, {{ui:Polygaris}}, {{ui:Poligon}}, {{ui:Awan bebas}}, {{ui:Luas}} atau ruang:

1. Klik titik pertama.
2. Tunjuk arah segmen seterusnya dan taip panjangnya, seperti `16` (dalam unit helaian), `12'6"` atau `3.5 m`. Kotak dibuka di sebelah penuding semasa anda menaip.
3. Tekan {{key:Enter}}. Titik itu diletakkan sejauh itu, dalam arah penuding.

Untuk menetapkan arah dengan tepat, tambah `<` dan sudut dalam darjah: `8 < 90` pergi 8 kaki lurus ke atas, `4<0` ke kanan, `10 < 225` ke bawah dan ke kiri, seperti helaian dilihat (termasuk halaman yang dipusing). Teruskan menaip panjang untuk bucu seterusnya, dan siapkan bentuk seperti biasa. {{key:Esc}} menutup kotak tanpa meletakkan titik.

## Ukur sudut

1. Pilih {{ui:Sudut}} ({{key:X}}).
2. Klik hujung satu lengan, kemudian bucu, kemudian hujung lengan yang satu lagi.

Hasilnya: dua lengan, lengkok kecil di bucu dan sudut dalam darjah, hingga persepuluh (0° hingga 180°). Sudut tidak memerlukan skala. {{ui:Sifat}} menunjukkannya di bawah {{ui:Sudut}}, dan senarai, CSV serta BCF turut membawanya.

{{ui:Lengkok}} ({{key:O}}) pada helaian yang ditentukur juga menunjukkan panjangnya sepanjang lengkung dalam {{ui:Sifat}}.

## Ukur luas dan perimeternya

1. Pilih {{ui:Luas}} ({{key:Q}}).
2. Klik setiap bucu bilik atau kawasan.
3. Selesaikan dengan klik dua kali, {{key:Enter}} atau klik kanan (ketik dua kali pada skrin sentuh). {{key:Backspace}} membuang bucu terakhir.

Hasilnya: garis luar berlorek dengan luas, dan "P" bersama perimeter di tengah, contohnya "128.00 sq ft" dan "P 48'-0"". Skala kaki memberi kaki persegi, inci memberi inci persegi, meter memberi meter persegi, dan milimeter memberi milimeter persegi. Luas memerlukan sekurang-kurangnya tiga bucu.

### Potongan

Untuk meninggalkan tiang, aci atau anjung, pilih kawasan dan pilih {{ui:Tambah potongan}} dalam {{ui:Sifat}}. Klik bucu potongan di dalam kawasan dan selesaikan seperti untuk kawasan. Potongan kekal terbuka (tidak berlorek), luasnya ditolak, dan tepinya ditambah kepada perimeter: bilik 16' × 8' dengan potongan 4' × 4' dibaca "112.00 sq ft" dan "P 64'-0"". Tambah seberapa banyak yang anda perlukan; ia tidak boleh bertindih antara satu sama lain atau merentasi garis luar kawasan. {{ui:Alih keluar potongan}} membuang semuanya, dan {{key:Mod+Z}} membuat asal satu.

## Kira benda

1. Pilih {{ui:Kira}} ({{key:U}}).
2. Dalam {{ui:Sifat}}, taip {{ui:Nama kumpulan}}, contohnya "Longkang lantai". (Ia kekal untuk kali seterusnya.)
3. Klik setiap item pada helaian.

Hasilnya: setiap klik menambah titik bernombor, titik pertama membawa tag seperti "Longkang lantai: 7", dan bar status menyimpan jumlah berjalan.

- **Mulakan kumpulan lain:** tekan {{key:Esc}} sekali (ia mengosongkan pilihan), tukar {{ui:Nama kumpulan}}, dan klik semula.
- **Tambah pada kumpulan sedia ada:** pilih kumpulan dahulu, kemudian pilih {{ui:Kira}} dan klik.
- **Alih keluar tanda:** dengan kumpulan dipilih, tahan {{key:Shift}} dan klik titik itu. Mengalih keluar titik terakhir juga mengalih keluar kumpulan. Pada skrin sentuh tanpa papan kekunci, gunakan {{key:Mod+Z}} atau {{ui:Buat asal}} sebagai gantinya.
- **Namakan semula kumpulan:** pilih kumpulan dan edit {{ui:Nama kumpulan}} dalam {{ui:Sifat}}.

Kumpulan kiraan tergolong kepada satu helaian. Kiraan pada beberapa helaian dipaparkan sebagai kumpulan berasingan dalam senarai markup.

## Tukar atau alih keluar skala

Klik butang skala dalam bar status. Kotak menunjukkan skala semasa; pilih yang lain, pilih {{ui:Pilih dua titik}}, atau pilih {{ui:Alih keluar skala}}.

Panjang dan luas yang sudah dilukis **diukur semula** dengan skala baharu serta-merta. Buat asal mengembalikan skala lama.

## Ke mana nombor pergi

- {{ui:Sifat}} menunjukkan nilai ukuran bagi pengukuran yang dipilih.
- Tab {{ui:Markup}} menyenaraikan setiap nilai, dan CSV-nya mempunyai lajur "Ukuran". Lihat [Senarai markup](topic:markups-list-and-export).
- PDF yang disimpan mengekalkan skala pada halaman dan menulis panjang serta luas sebagai ulasan ukuran, supaya program PDF lain yang memahami ukuran boleh memaparkannya. Lihat [Apa yang disimpan dalam PDF](topic:what-the-pdf-keeps).

Untuk pengukuran kuantiti penuh dengan item, himpunan dan harga, gunakan TakeoffCraft: MarkupCraft mengukur untuk semakan, bukan untuk anggaran kos.
