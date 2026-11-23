---
title: Ukuran halaman dan nama kertas
summary: Lihat ukuran setiap halaman PDF dalam milimeter dan inci serta nama kertasnya (seri A, B, dan C, ANSI, ARCH), dan kelompokkan set campuran berdasarkan ukuran untuk menemukan halaman yang tidak biasa.
keywords: ukuran halaman, ukuran kertas, nama kertas, a0, a1, a2, a3, a4, seri b, seri c, ansi, arch, arsitektural, mm, inci, ukuran kustom, menurut ukuran, ukuran ganjil, set campuran, periksa pdf, klien, isu, mediabox, cropbox, rotasi
from: 08e1354f
---

Sebelum set dikirim ke klien, periksa bahwa setiap lembar memiliki ukuran yang seharusnya. {{ui:MarkupCraft}} membaca ukuran tiap halaman dari PDF itu sendiri dan menamai kertasnya.

## Yang akan Anda lakukan

Lihat ukuran satu lembar, lalu kelompokkan seluruh set berdasarkan ukuran.

## Langkah-langkah

1. Buka PDF ({{ui:Buka}}), lalu tekan {{key:Esc}} hingga tidak ada yang dipilih dan {{ui:Pilih}} menyala.
2. Lihat {{ui:Properti}}. {{ui:Kertas}} menyebutkan nama dan arahnya, misalnya "A4, potret". {{ui:Ukuran}} menampilkan milimeter dan inci.
3. Setiap baris daftar {{ui:Lembar}} memiliki baris ukuran di bawah nama lembar.
4. Pilih {{ui:Menurut ukuran}} di header {{ui:Lembar}}. Daftar mengelompokkan lembar di bawah satu judul untuk setiap ukuran, dengan kelompok terbesar lebih dulu. Ukuran yang hanya memiliki beberapa lembar ditandai sebagai yang tidak biasa.
5. Pilih {{ui:Menurut ukuran}} lagi untuk kembali ke urutan asli set.

Hasil: halaman yang ukurannya berbeda dari yang lain mudah terlihat sebelum Anda mengirim set.

## Cara nama dipilih

- Ukuran diambil dari kotak halaman di PDF dengan rotasi diterapkan, sehingga A3 lanskap tetap dikenali sebagai A3.
- Nama yang digunakan adalah seri A dan B (ISO 216), seri C (ISO 269), ANSI A sampai E, dan ARCH A sampai E.
- Halaman dalam jarak 2 mm dari ukuran bernama mendapatkan nama itu. Halaman lain menampilkan {{ui:kustom}}, dan {{ui:Ukuran bernama terdekat}} menyebutkan ukuran yang paling dekat serta selisihnya.
- Inci dihitung dari ukuran halaman yang sebenarnya, jadi halaman A4 berukuran 8.26 kali 11.69 in.

## Dalam file yang Anda simpan

Buku kerja ringkasan ({{ui:Daftar markup}}, lalu spreadsheet) memiliki kolom {{ui:Ukuran kertas}} pada lembar {{ui:Per lembar}} dan worksheet {{ui:Ukuran halaman}}. Laporan PDF memiliki baris "Ukuran halaman" dengan jumlah setiap ukuran.

:::note
Nilai inci ANSI dan ARCH diketik dari tabel yang dipublikasikan dan belum dibandingkan dengan standar cetak. Anggap halaman "kustom" yang dekat dengan salah satunya sebagai hal yang perlu Anda periksa sendiri.
:::
