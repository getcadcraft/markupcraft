---
title: Bekerja dengan beberapa fail sekaligus
summary: Buka banyak PDF sebagai satu set, cari helaian merentasi fail, salin markup antara mereka, dan simpan salinan setiap fail.
keywords: beberapa fail, pelbagai pdf, set pelan, set, berkelompok, banyak fail, gabung, disiplin, arkitek, struktur, mekanikal, simpan semua, tutup
from: f59354ae
---

Satu set pelan selalunya datang sebagai satu PDF setiap disiplin, atau satu PDF setiap helaian. MarkupCraft menganggap apa sahaja yang anda buka sebagai **satu set**.

## Buka bersama

Pilih semua PDF dalam pemilih fail sekaligus, atau lepaskan semuanya pada kawasan helaian. Untuk menambah lagi kemudian, buka dengan cara yang sama; ia akan disambungkan di hujung senarai {{ui:Helaian}} mengikut susunan anda membukanya.

Hasil: "Dibuka 6 fail (84 helaian dalam set)." Setiap halaman ialah helaian. Helaian yang mempunyai nombor helaian menunjukkan "Helaian A-101" di bawah namanya; yang lain menunjukkan fail dan halaman.

Tiada fail "set" yang disimpan: kali seterusnya, buka semula PDF yang sama (salinan "(marked up)", jika anda telah menyimpan).

## Merentasi keseluruhan set

- **Cari helaian:** {{ui:Cari helaian}} mencari dalam nombor helaian, nama helaian dan nama fail setiap fail. {{key:PageUp}} dan {{key:PageDown}} melalui semua helaian bagi semua fail mengikut susunan.
- **Senarai markup:** tab {{ui:Markup}} menyenaraikan markup daripada setiap fail. Tapis mengikut {{ui:Helaian}} untuk mempersempitkannya. CSV mempunyai lajur Fail.
- **Senarai kecacatan:** satu penomboran untuk keseluruhan set.
- **Bandingkan:** helaian lama dan baharu boleh datang daripada fail yang berbeza.
- **Salin dan tampal:** {{key:Mod+C}} pada satu helaian dan {{key:Mod+V}} pada helaian lain, dalam mana-mana fail. Salinan mendarat di tempat yang sama pada halaman, sedikit beralih.

## Simpan

Pilih {{ui:Simpan}}. Dengan lebih daripada satu fail dibuka, MarkupCraft bertanya:

- {{ui:Fail ini}}: salinan yang dimarkup bagi fail helaian yang anda lihat.
- {{ui:Setiap fail yang diubah}}: salinan bagi setiap fail yang mempunyai perubahan belum disimpan. Setiap satu dimuat turun secara berasingan, sebagai "<nama fail> (marked up).pdf".
- {{ui:Batal}}

:::chromium
Kali pertama anda menyimpan beberapa fail sekaligus, Chrome dan Edge mungkin bertanya sama ada laman ini dibenarkan memuat turun berbilang fail. Pilih {{ui:Benarkan}}; jika tidak, hanya salinan pertama sampai.
:::

:::safari
Safari mungkin bertanya sekali untuk setiap fail. Pada iPad setiap salinan pergi ke aplikasi Files.
:::

Fail yang markupnya telah disimpan tidak lagi dikira sebagai diubah; yang lain masih dikira.

Nama eksport CSV, BCF dan senarai kecacatan dinamakan mengikut fail **pertama** yang anda buka.

## Tutup

{{ui:Tutup}} menutup keseluruhan set; belum ada cara untuk menutup satu fail sahaja. Jika ada yang belum disimpan, ia bertanya:

- {{ui:Batal}}: tiada apa berlaku.
- {{ui:Tutup tanpa menyimpan}}: markup yang belum disimpan akan hilang.
- {{ui:Simpan salinan dahulu}}: menyimpan setiap fail yang diubah, kemudian menutup.

Menutup juga mengosongkan sejarah buat asal.

## Set besar

- Teks setiap halaman dibaca semasa dibuka untuk mencari nombor helaian, jadi set 100 helaian mengambil masa. Bar status mengira helaian semasa ia berjalan.
- Gambar helaian dalam senarai dilukis semasa anda menatal ke sana.
- Setiap PDF yang dibuka disimpan dalam memori tab pelayar. Jika tab menjadi perlahan, tutup tab berat yang lain, atau semak satu disiplin pada satu masa.
- Membuka fail yang sama dua kali memberi anda dua salinan helaiannya. Jika itu berlaku, pilih {{ui:Tutup}} dan buka set semula.
