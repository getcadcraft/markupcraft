---
title: Bekerja dengan beberapa file sekaligus
summary: Buka banyak PDF sebagai satu set, temukan lembar di seluruh file, salin markup di antara mereka, dan simpan salinan setiap file.
keywords: beberapa file, banyak pdf, set rencana, set, batch, banyak file, gabung, disiplin, arsitektur, struktur, mekanikal, simpan semua, tutup
from: f59354ae
---

Satu set rencana sering datang sebagai satu PDF per disiplin, atau satu PDF per lembar. MarkupCraft memperlakukan semua yang Anda buka sebagai **satu set**.

## Buka bersamaan

Pilih semua PDF di pemilih file sekaligus, atau letakkan semuanya di area lembar. Untuk menambah nanti, buka dengan cara yang sama; file akan bergabung di akhir daftar {{ui:Lembar}} sesuai urutan Anda membukanya.

Hasilnya: "Dibuka 6 file (84 lembar dalam set)." Setiap halaman adalah lembar. Lembar yang memiliki nomor lembar menampilkan "Lembar A-101" di bawah namanya; yang lain menampilkan file dan halamannya.

Tidak ada file "set" yang tersimpan: lain kali, buka lagi PDF yang sama (salinan "(marked up)", jika Anda sudah menyimpan).

## Di seluruh set

- **Temukan lembar:** {{ui:Cari lembar}} mencari nomor lembar, nama lembar, dan nama file dari setiap file. {{key:PageUp}} dan {{key:PageDown}} menelusuri semua lembar dari semua file secara berurutan.
- **Daftar markup:** tab {{ui:Markup}} mencantumkan markup dari setiap file. Filter menurut {{ui:Lembar}} untuk mempersempitnya. CSV memiliki kolom File.
- **Daftar punch:** satu penomoran untuk seluruh set.
- **Bandingkan:** lembar lama dan baru dapat berasal dari file yang berbeda.
- **Salin dan tempel:** {{key:Mod+C}} pada satu lembar dan {{key:Mod+V}} pada lembar lain, di file mana pun. Salinan mendarat di tempat yang sama pada halaman, sedikit bergeser.

## Simpan

Pilih {{ui:Simpan}}. Dengan lebih dari satu file terbuka, MarkupCraft bertanya:

- {{ui:File ini}}: salinan yang diberi markup dari file lembar yang Anda buka.
- {{ui:Setiap file yang berubah}}: salinan dari setiap file yang memiliki perubahan belum disimpan. Setiap salinan diunduh terpisah, sebagai "<nama file> (marked up).pdf".
- {{ui:Batal}}

:::chromium
Saat pertama kali Anda menyimpan beberapa file sekaligus, Chrome dan Edge mungkin bertanya apakah situs ini boleh mengunduh banyak file. Pilih {{ui:Izinkan}}; jika tidak, hanya salinan pertama yang diterima.
:::

:::safari
Safari mungkin bertanya sekali untuk setiap file. Di iPad, setiap salinan masuk ke aplikasi Berkas.
:::

File yang markupnya sudah disimpan tidak lagi dihitung sebagai berubah; yang lain tetap.

Ekspor CSV, BCF, dan daftar punch dinamai sesuai file **pertama** yang Anda buka.

## Tutup

{{ui:Tutup}} menutup seluruh set; belum ada cara untuk menutup satu file saja. Jika ada yang belum disimpan, aplikasi bertanya:

- {{ui:Batal}}: tidak ada yang terjadi.
- {{ui:Tutup tanpa menyimpan}}: markup yang belum disimpan hilang.
- {{ui:Simpan salinan dulu}}: menyimpan setiap file yang berubah, lalu menutup.

Menutup juga menghapus riwayat urungkan.

## Set besar

- Teks setiap halaman dibaca saat dibuka untuk menemukan nomor lembar, sehingga set 100 lembar membutuhkan waktu. Bilah status menghitung lembar saat berjalan.
- Gambar lembar di daftar digambar saat Anda menggulir ke sana.
- Setiap PDF yang terbuka disimpan di memori tab browser. Jika tab melambat, tutup tab berat lainnya, atau tinjau satu disiplin dalam satu waktu.
- Membuka file yang sama dua kali memberi Anda dua salinan lembarnya. Jika itu terjadi, pilih {{ui:Tutup}} dan buka set lagi.
