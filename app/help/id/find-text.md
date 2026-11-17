---
title: Cari teks di gambar
summary: Cari kata di setiap lembar, lompat ke tiap temuan, dan beri awan pada semuanya sekaligus.
keywords: cari, pencarian, teks, kata, ctrl f, catatan, keynote, callout, awan semua, sorot temuan, ocr, pindai, dipindai, baca teks, pilih teks, salin teks, tesseract
from: 3435c9eb
---

{{ui:Cari teks}}, di bagian atas panel {{ui:Lembar}}, mencari kata yang tergambar pada lembar itu sendiri. {{ui:Cari lembar}} di bawahnya hanya mencari nama lembar.

## Cari

1. Tekan {{key:Mod+F}}, atau buka {{ui:Cari teks}}.
2. Ketik kata-katanya, misalnya `hood` atau `verify in field`.
3. Pilih {{ui:Semua lembar}} atau {{ui:Lembar ini}}, dan centang {{ui:Cocokkan huruf besar/kecil}} atau {{ui:Kata utuh}} jika perlu.
4. Tekan {{key:Enter}} atau pilih {{ui:Cari}}.

Hasil: setiap temuan tercantum dengan nomor lembarnya dan kata-kata di sekitarnya, dan ditandai kuning pada lembarnya. Pilih satu temuan untuk membuka lembarnya dan memperbesar ke sana.

Frasa tetap ditemukan meskipun gambar memecahnya menjadi dua potongan teks atau dua baris.

## Beri awan pada setiap temuan

Pilih {{ui:Awani semua}}. Awan revisi mengelilingi setiap temuan dalam daftar, di setiap lembar, dengan "Ditemukan: <kata Anda>" sebagai komentarnya. Satu {{key:Mod+Z}} menghapus semuanya.

## Baca teks pada pindaian (OCR)

Lembar hasil pindaian hanyalah gambar: sampai katanya dibaca, tidak ada yang bisa dicari. Saat hitungan menyebut lembar tanpa teks, pilih {{ui:Baca teks (OCR)…}} di bawahnya, atau {{ui:Halaman}} › {{ui:Baca teks (OCR)…}}.

1. Pilih halamannya: lembar ini, setiap halaman file, atau setiap halaman dari semua file yang terbuka.
2. Pilih bahasa teksnya. {{ui:Juga bahasa Inggris}} juga membaca kata bahasa Inggris.
3. Pilih {{ui:Baca teks}}. Bilah menunjukkan halaman yang sedang dibaca; {{ui:Berhenti}} mengakhiri proses dan menyimpan halaman yang sudah dibaca.

Hasil: kata-kata dapat dicari, dipilih, dan disalin seperti teks lainnya. Semuanya berjalan di komputer Anda: tidak ada yang dikirim ke mana pun. Ini bekerja tanpa koneksi di Studio, dan di peramban setelah aplikasi disimpan untuk offline (bahasa Inggris dan bahasa antarmuka Anda) atau setelah sebuah bahasa pernah digunakan sekali. Halaman yang sudah memiliki teks dibiarkan apa adanya.

Saat Anda menyimpan, kata-kata masuk ke PDF sebagai teks tak terlihat di belakang gambar, terpisah dari markup Anda, sehingga program PDF lain juga dapat mencarinya dan menyalinnya. Sampai Anda menyimpan, file ditampilkan sebagai belum disimpan.

## Pilih dan salin teks

Pilih {{ui:Lainnya}} › {{ui:Pilih teks untuk disalin}}. Seret dari satu kata ke kata lain untuk memilih kata-kata di antaranya, seret dari area kosong untuk memilih kata dalam sebuah kotak, atau klik ganda satu kata. {{key:Mod+A}} memilih setiap kata pada lembar. {{key:Mod+C}} menyalinnya dengan mempertahankan baris. Alat lain mengakhirinya.

## Perlu diketahui

- Gambar yang hurufnya digambar sebagai garis juga tidak memiliki teks; membacanya sebagai gambar paling baik untuk teks cetak seperti buku pindaian atau spesifikasi.
- Pembacanya adalah Tesseract, sudah dibangun dalam aplikasi dengan data bahasa untuk bahasa Inggris dan bahasa aplikasi. Pemakaian pertama memuatnya (sekitar 6 MB, lebih untuk bahasa kedua).
- Seberapa baik ia membaca bergantung pada pindaian: halaman bersih pada 300 dpi terbaca hampir kata per kata; pindaian lama, pudar, atau beresolusi rendah lebih banyak melewatkan kata.
- Daftar menampilkan 500 temuan pertama; {{ui:Awani semua}} memberi awan hingga 2.000.
- Temuan dihapus saat Anda menutup set, dan untuk satu file saat Anda mengubah halamannya.
