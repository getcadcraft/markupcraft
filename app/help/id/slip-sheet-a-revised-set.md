---
title: Sisipkan set revisi (slip-sheet)
summary: Buka isu baru dari set rencana di samping yang lama dan pindahkan setiap markup yang terbuka ke lembar dengan nomor yang sama.
keywords: slip sheet, slip-sheet, set revisi, isu baru, revisi, menggantikan, digantikan, bawa ke depan, ganti lembar, terbitkan ulang, addendum, buletin
from: e15163a0
---

Saat isu baru gambar tiba, slip-sheeting memindahkan tinjauan Anda ke sana: setiap lembar baru mengambil markup dari lembar lama dengan nomor yang sama, dan lembar lama diberi stempel "Digantikan".

## Sisipkan

1. Buka set saat ini, dengan markup Anda.
2. Pilih {{ui:Halaman}}, lalu {{ui:Sisipkan set revisi…}}, dan pilih PDF baru. Mereka terbuka di samping set lama.
3. Dialog mencantumkan setiap lembar baru dan lembar lama yang digantikannya. Hapus centang baris untuk membiarkan markup lembar itu tetap di tempatnya. Lembar dengan nomor baru tidak memiliki apa pun untuk dibawa.
4. Pilih apakah markup yang sudah ditutup (Diterima, Ditolak, Selesai) tetap berada di lembar lama, dan apakah lembar lama akan diberi stempel.
5. Pilih {{ui:Bawa markup ke depan}}.

Hasilnya: markup muncul di lembar baru di tempat yang sama, dengan balasan, status, dan penulisnya. Item punch berpindah ke lembar baru dan mempertahankan nomornya. Lembar lama menyimpan markup mereka sebagai catatan, di bawah stempel merah "Digantikan". Bilah status merangkum apa yang berpindah.

{{ui:Buka file saja}} membuka set baru tanpa membawa apa pun, misalnya untuk membandingkan terlebih dahulu. Lihat [Bandingkan dua revisi](topic:compare-revisions).

## Cara lembar dicocokkan

- **Berdasarkan nomor lembar**, dibaca seperti yang ditampilkan daftar lembar: nomor yang Anda ketik dengan {{ui:Ganti nama lembar}}, label halaman PDF, atau blok judul. Huruf besar-kecil, spasi, titik, dan tanda hubung tidak berpengaruh: "A-101" cocok dengan "a101".
- Jika dua file terbuka memiliki lembar dengan nomor itu, lembar yang terbaru yang digantikan, sehingga Anda dapat menyisipkan isu demi isu.
- **Set hasil pindai** tidak memiliki nomor untuk dibaca. Jika file baru tidak memilikinya, halamannya dicocokkan secara berurutan dengan file terbuka yang memiliki jumlah halaman sama. Periksa baris tersebut sebelum membawa.

## Yang perlu diketahui

- Satu {{key:Mod+Z}} membatalkan seluruh slip-sheet: salinan, stempel, dan item punch yang dipindahkan. File baru tetap terbuka.
- Jika lembar baru berukuran berbeda, markup diskalakan mengikuti halaman, dan bilah status menyatakan berapa yang perlu diperiksa.
- Skala lembar lama ikut terbawa saat lembar baru berukuran sama dan belum memilikinya.
- Komentar yang dibuat program lain tetap berada di lembar lama: di sini hanya-baca.
- Simpan file baru untuk menyimpan markup yang terbawa. Lihat [Simpan PDF yang sudah diberi markup](topic:save-the-marked-up-pdf).
