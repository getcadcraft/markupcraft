---
title: Apa yang disimpan di PDF
summary: Isi persis salinan yang sudah diberi markup, apa yang dilihat program PDF lain, dan apa yang dibaca kembali saat Anda membuka file.
keywords: anotasi pdf, komentar, data tersimpan, bolak-balik, label halaman, pengukuran, status tinjauan, balasan, interoperabilitas, kompatibilitas, buka ulang, data pribadi
from: 6439ad28
---

Salinan yang sudah diberi markup adalah PDF asli dengan komentar (anotasi PDF) yang ditambahkan. Halamannya sendiri, gambarnya, teks, bookmark, dan tautan disalin apa adanya.

## Setiap markup

| MarkupCraft | Disimpan sebagai | Penampil PDF lain menampilkan |
|---|---|---|
| Persegi panjang, awan kotak | Anotasi Square (awan: batas berawan) | Komentar persegi panjang atau awan |
| Elips | Anotasi Circle | Komentar elips |
| Poligon, awan bebas | Anotasi Polygon (awan: batas berawan) | Komentar poligon atau awan |
| Polyline | Anotasi PolyLine | Komentar polyline |
| Garis, panah | Anotasi Line (panah: ujung panah tertutup) | Komentar garis atau panah |
| Panjang | Anotasi Line ditandai sebagai dimensi, dengan pengukuran | Pengukuran panjang, di penampil yang mendukungnya |
| Luas | Anotasi Polygon ditandai sebagai area, dengan pengukuran | Pengukuran luas, jika didukung; jika tidak, poligon |
| Grup hitungan | Satu anotasi Ink, satu cincin per item; teksnya "group: n" | Komentar ink |
| Pena, penyorot | Anotasi Ink (penyorot ditandai sebagai demikian) | Komentar ink |
| Teks | Anotasi FreeText | Komentar kotak teks |
| Callout | Anotasi FreeText dengan leader callout | Komentar callout |
| Catatan | Anotasi Text | Catatan tempel yang terbuka ke teksnya |
| Stempel | Anotasi Stamp | Komentar stempel |

Setiap markup disimpan dengan:

- **tampilannya sendiri**, digambar persis seperti MarkupCraft menggambarnya di layar, sehingga tampak sama di penampil mana pun dan tercetak sama, termasuk lencana nomor punch;
- **penulis**, **tanggal dibuat dan diubah**, **subjek**, **teks komentar** (untuk kotak teks dan callout, teks dan komentarnya), **warna**, dan **opasitas**;
- **detail MarkupCraft-nya** dalam entri pribadi yang diabaikan program lain: status, item punch, gaya, dan tipe, sehingga dibuka kembali persis seperti semula.

## Utas dan status

- Setiap balasan disimpan sebagai komentar balasan yang ditautkan ke markupnya, dengan penulis, tanggal, dan teksnya. Balasan tidak memiliki ikon sendiri di lembar.
- Setiap perubahan status disimpan sebagai balasan yang membawa status tinjauan. Alat tinjauan lain menampilkannya sebagai Accepted, Rejected, atau Completed; Open disimpan tanpa status.
- Markup dengan status selain Open tetapi tanpa perubahan status yang tercatat mendapat satu balasan status tinjauan, sehingga program lain juga melihat statusnya.
- Balasan pada komentar hanya-baca dari file asli disimpan dengan cara yang sama, ditautkan ke komentar itu.

## Setiap lembar

- **Skala:** lembar yang terkalibrasi mendapat viewport pengukuran yang menutupi halaman (cara standar menyimpan skala halaman) dan salinan kalibrasi milik MarkupCraft sendiri.
- **Nomor lembar:** nomor yang diketik dengan {{ui:Ganti nama lembar}} menjadi label halaman. Bila salah satu halaman dalam file memilikinya, setiap halaman dalam file itu mendapat label: nomor yang diketik, atau label lamanya, atau nomor halamannya.
- **Judul lembar:** judul yang diketik disimpan hanya untuk MarkupCraft; penampil lain tidak menampilkannya.

## Teks dan karakter

Teks ditulis dengan Helvetica, yang dimiliki setiap penampil PDF. Huruf di luar himpunan Eropa Barat (Windows-1252) dicetak sebagai "?" di salinan; pesan simpan menghitungnya.

## Lembar kalkulasi dan alasan

Lembar kalkulasi dan alasan disimpan dalam entri pribadi PDF bernama `/MarkupCraftShell`. Program PDF lain mengabaikannya. MarkupCraft yang lebih lama juga mengabaikannya, dan membuangnya saat file itu disimpan lagi.

## Yang terjadi pada komentar yang sudah ada

Saat Anda membuka PDF yang sudah memiliki komentar:

- Komentar milik MarkupCraft dibaca kembali persis. Jika program lain memindahkan atau mengubah ukurannya, posisi barunya yang berlaku.
- Persegi panjang, elips, garis, polyline, poligon, ink, kotak teks, dan catatan tempel dari program lain menjadi markup yang dapat diedit. **Saat Anda menyimpan, MarkupCraft menghapus yang asli dan menuliskannya lagi dengan caranya sendiri**, beserta pop-up dan balasannya. Tampilannya bisa sedikit berubah.
- Status tinjauan dari program lain mengatur status; yang terbaru yang berlaku.
- Yang lain (sorotan teks, stempel program lain, dan jenis khusus lainnya) **dibiarkan tidak berubah** di salinan, hanya-baca.
- Tautan dan kolom formulir dibiarkan tidak berubah dan tidak didaftar.

Menyimpan file yang sama lagi tidak pernah menggandakan apa pun: markup yang dibaca MarkupCraft diganti, tidak ditambahkan lagi.

## Yang tidak berubah

File asli Anda di disk tidak pernah diubah. Salinan tidak dioptimalkan ukurannya, sehingga bisa sedikit lebih besar dari aslinya. PDF yang dilindungi (terenkripsi) tidak dapat disimpan.
