---
title: Ruang
summary: Beri nama ruangan atau zona pada lembar, lalu saring, hitung, dan ekspor markup menurut ruang tempatnya berada.
keywords: ruang, ruangan, zona, sayap, area kerja, lokasi, saring menurut ruangan, kelompokkan menurut ruangan, ekspor menurut ruang
from: b199339c
---

Ruang adalah zona bernama pada lembar: sebuah ruangan, sayap, atau tahap pekerjaan. Setiap markup di dalamnya menjadi milik ruang itu, sehingga Anda dapat mendaftar, menyaring, dan mengekspor markup satu ruangan.

## Membuat ruang

1. Buka {{ui:Ruang}}, di bagian atas panel {{ui:Lembar}}, lalu pilih {{ui:Ruang baru}}.
2. Klik sudut-sudut zona, lalu klik dua kali atau tekan {{key:Enter}}.
3. Ketik namanya, misalnya `Dapur` atau `Lantai 2 timur`, lalu pilih {{ui:Tambah ruang}}.

Ruang tampil sebagai zona hijau muda dengan garis tepi putus-putus dan namanya. Bilah status menyatakan berapa markup yang ada di dalamnya.

## Isi ruang

Sebuah markup berada di ruang yang memuat titik tengah markup itu. Jika ruang berada di dalam ruang lain (sebuah ruangan di dalam sayap), ruang yang lebih kecil yang berlaku. Pindahkan markup dan ia ikut berpindah antarruang. Pilih ruang untuk mengubah garis tepinya dengan gagangnya, atau namanya di bawah {{ui:Nama}} pada {{ui:Properti}}.

- {{ui:Properti}} menampilkan ruang sebuah markup.
- Daftar {{ui:Markup}} menyaring menurut {{ui:Ruang}}, termasuk {{ui:Tanpa ruang}}.
- Ekspor CSV dan XLSX mendapat kolom {{ui:Ruang}} begitu set memiliki ruang.
- Panel {{ui:Ruang}} mendaftar setiap ruang beserta jumlah markup di dalamnya; pilih satu untuk menuju ke sana.

## Di PDF yang disimpan

Ruang adalah komentar poligon dengan namanya sebagai teks, digambar dengan batas putus-putus, sehingga penampil lain juga menampilkannya. Ruang itu terbuka kembali di MarkupCraft sebagai ruang.
