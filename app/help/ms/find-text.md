---
title: Cari teks dalam lukisan
summary: Cari perkataan pada setiap helaian, lompat ke setiap padanan, dan awankan semuanya dalam satu langkah.
keywords: cari, carian, teks, perkataan, ctrl f, cari, nota, keynote, callout, awankan semua, serlahkan padanan, ocr, imbasan, diimbas, baca teks, pilih teks, salin teks, tesseract
from: 3435c9eb
---

{{ui:Cari teks}}, di bahagian atas panel {{ui:Helaian}}, mencari perkataan yang dilukis pada helaian itu sendiri. {{ui:Cari helaian}} di bawahnya hanya mencari nama helaian.

## Cari

1. Tekan {{key:Mod+F}}, atau buka {{ui:Cari teks}}.
2. Taip perkataan, seperti `hood` atau `verify in field`.
3. Pilih {{ui:Semua helaian}} atau {{ui:Helaian ini}}, dan tanda {{ui:Padan huruf besar/kecil}} atau {{ui:Keseluruhan perkataan}} jika perlu.
4. Tekan {{key:Enter}} atau pilih {{ui:Cari}}.

Hasil: setiap padanan disenaraikan dengan nombor helaiannya dan perkataan di sekelilingnya, dan ditanda dengan warna kuning pada helaiannya. Pilih satu padanan untuk membuka helaiannya dan zum kepadanya.

Frasa dijumpai walaupun lukisan memisahkannya kepada dua bahagian teks atau dua baris.

## Awankan setiap padanan

Pilih {{ui:Awankan semua}}. Awan semakan dilukis mengelilingi setiap padanan dalam senarai, pada setiap helaian, dengan "Ditemui: <perkataan anda>" sebagai ulasannya. Satu {{key:Mod+Z}} membuangkan kesemuanya.

## Baca teks pada imbasan (OCR)

Helaian yang diimbas hanyalah gambar: sehingga perkataannya dibaca, tiada apa yang boleh dicari. Apabila kiraan menunjukkan helaian tiada teks, pilih {{ui:Baca teks (OCR)…}} di bawahnya, atau {{ui:Halaman}} › {{ui:Baca teks (OCR)…}}.

1. Pilih halaman: helaian ini, setiap halaman fail, atau setiap halaman bagi setiap fail yang dibuka.
2. Pilih bahasa teks. {{ui:Juga Inggeris}} turut membaca perkataan Inggeris.
3. Pilih {{ui:Baca teks}}. Bar menunjukkan halaman yang sedang dibaca; {{ui:Henti}} menamatkan larian dan mengekalkan halaman yang telah dibaca.

Hasil: perkataan boleh dicari, dipilih dan disalin seperti teks lain. Semuanya berjalan pada komputer anda: tiada apa dihantar ke mana-mana. Ia berfungsi tanpa sambungan dalam Studio, dan dalam pelayar setelah aplikasi disimpan untuk kegunaan luar talian (Inggeris dan bahasa antara muka anda) atau bahasa itu pernah digunakan sekali. Halaman yang sudah ada teks dibiarkan seperti sedia ada.

Apabila anda menyimpan, perkataan dimasukkan ke dalam PDF sebagai teks tidak kelihatan di belakang gambar, berasingan daripada markup anda, supaya program PDF lain juga boleh mencari dan menyalinnya. Sehingga anda menyimpan, fail dipaparkan sebagai belum disimpan.

## Pilih dan salin teks

Pilih {{ui:Lagi}} › {{ui:Pilih teks untuk disalin}}. Seret dari satu perkataan ke perkataan lain untuk memilih perkataan di antaranya, seret dari ruang kosong untuk memilih perkataan dalam kotak, atau klik dua kali pada satu perkataan. {{key:Mod+A}} memilih setiap perkataan pada helaian. {{key:Mod+C}} menyalinnya, dengan mengekalkan baris. Mana-mana alat lain menamatkannya.

## Perkara yang perlu diketahui

- Lukisan yang hurufnya dilukis sebagai garisan juga tiada teks; membaca sebagai gambar paling berkesan pada teks bercetak seperti buku imbasan atau spesifikasi.
- Pembaca ialah Tesseract, dibina dalam aplikasi dengan data bahasanya untuk Inggeris dan bahasa aplikasi. Larian pertama memuatkannya (kira-kira 6 MB, lebih untuk bahasa kedua).
- Keupayaan bacaannya bergantung pada imbasan: halaman yang bersih pada 300 dpi dibaca hampir setiap perkataan; imbasan lama, pudar atau beresolusi rendah terlepas lebih banyak perkataan.
- Senarai menunjukkan 500 padanan pertama; {{ui:Awankan semua}} mengawan sehingga 2,000.
- Padanan dibersihkan apabila anda menutup set, dan bagi satu fail apabila anda menukar halamannya.
