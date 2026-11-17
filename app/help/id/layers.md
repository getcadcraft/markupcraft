---
title: Layer markup
summary: Letakkan markup pada layer bernama, lalu tampilkan, sembunyikan, atau kunci setiap layer; penampil PDF lain juga dapat mengubahnya.
keywords: layers, layer, sembunyikan, tampilkan, kunci, kelompokkan markup, disiplin, mekanikal, elektrikal, konten opsional, ocg, visibilitas
from: 0fbb4c26
---

Layer mengelompokkan markup, misalnya menurut disiplin atau menurut peninjau. Sembunyikan sebuah layer untuk melihat gambar di bawahnya, atau kunci agar markupnya tidak tergeser secara tidak sengaja.

## Membuat layer dan menggambar di atasnya

1. Buka {{ui:Layer}}, di bagian atas panel {{ui:Lembar}}.
2. Pilih {{ui:Layer baru}}, ketik nama seperti `Mekanikal`, lalu pilih {{ui:Tambah layer}}.
3. Layer baru menjadi layer aktif: setiap markup yang Anda gambar mulai sekarang akan berada di atasnya. Pilih nama layer lain, atau {{ui:Tanpa layer}}, untuk mengubah tempat markup baru.

Untuk memindahkan markup ke layer lain, pilih markup itu lalu pilih layer di bawah {{ui:Layer}} pada {{ui:Properti}}. {{ui:Layer baru…}} di ujung daftar tersebut membuat layer seketika. Pemindahan dapat diurungkan dengan {{key:Mod+Z}}.

## Menampilkan, menyembunyikan, dan mengunci

Setiap baris layer memiliki dua tombol:

- **Mata** menampilkan atau menyembunyikan layer. Markup yang tersembunyi tidak digambar dan tidak dapat dipilih; markup itu tetap dihitung dalam daftar {{ui:Markup}}.
- **Kunci** membuat markup pada layer tetap berada di lembar, tetapi tidak dapat dipilih, dipindahkan, atau dihapus.

Tombol pensil mengganti nama layer dan ikut memindahkan markupnya. Saring daftar {{ui:Markup}} menurut {{ui:Layer}} untuk melihat markup dari satu layer.

## Di dalam PDF yang disimpan

Setiap layer menjadi layer PDF (konten opsional). Penampil PDF lain mencantumkan layer di panel layer mereka dan dapat mengubahnya; layer yang Anda sembunyikan juga tersembunyi di sana. Layer yang sudah ada pada gambar, seperti layer CAD, tetap seperti semula. Saat Anda membuka kembali salinan itu di MarkupCraft, markup kembali ke layernya, tersembunyi dan terkunci sesuai keadaan terakhir Anda.

## Perlu diketahui

- Menyembunyikan dan mengunci bukan suntingan: keduanya tidak diurungkan dengan {{key:Mod+Z}}, tetapi tersimpan bersama PDF.
- Salin dan tempel mempertahankan layer sebuah markup.
- Salinan yang diratakan menggambar setiap markup ke dalam halaman, apa pun layernya. Lihat [Simpan salinan yang diratakan](topic:flatten).
