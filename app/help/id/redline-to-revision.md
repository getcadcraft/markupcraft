---
title: Kirim markup ke pembuat gambar sebagai redline
summary: Tulis markup yang terbuka sebagai file redline untuk orang yang menggambar perubahannya, lalu muat jawaban mereka agar setiap markup menampilkan Diterima atau Ditolak.
keywords: redline, revisi, drafter, terima, tolak, jawaban, cc-redline, awan revisi, terapkan markup
from: cb099d04
---

Meninjau hanya separuh pekerjaan; gambar tetap harus diubah. File redline membawa setiap markup terbuka ke drafter, dan jawaban drafter membawa hasilnya kembali.

## Kirim

1. Buka tab {{ui:Tugas}} dan buka {{ui:Redline ke revisi}}.
2. Ketik revisi yang menjadi acuan markup (misalnya B).
3. Pilih {{ui:Ekspor file redline}}.

Anda mendapat file `.redline.json` dengan satu item untuk setiap markup Terbuka: lembarnya, posisinya (sebagai pecahan dari lembar, sehingga hasil cetak ulang dengan ukuran lain tetap sejajar, dan dalam poin), kata-katanya, penulis dan utasnya, serta tugasnya jika ada. Komentar hanya-baca dari program lain, gambar, dan legenda tidak disertakan.

## Jawaban

Sisi drafter menjawab setiap item dengan Diterima, Ditolak, atau Selesai, beserta catatan, dalam file `.redline-answers.json`. Pilih {{ui:Muat file jawaban…}} dan pilih file itu: setiap markup mendapat status tersebut dan catatan drafter di utasnya, dan tugas yang markup-nya diterima atau selesai ditandai tuntas. Satu langkah urungkan mengembalikan semua jawaban.

Format file ada di `docs/REDLINE-FORMAT.md`. Sisi CadCraft (membaca paket, menerima atau menolak setiap item, awan revisi, dan log) dibuat terpisah.
