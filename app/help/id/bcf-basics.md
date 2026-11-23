---
title: Dasar-dasar BCF
summary: Isi ekspor BCF dari MarkupCraft, cara menggunakannya dengan alat koordinasi BIM, dan batasannya.
keywords: bcf, bcfzip, format kolaborasi BIM, isu, koordinasi, benturan, topik, sudut pandang, jepretan, openbim, buildingsmart, ekspor isu
from: 0de26175
---

BCF (BIM Collaboration Format) adalah format file terbuka untuk meneruskan isu di antara alat BIM. Banyak program koordinasi dan pemodelan model dapat mengimpor file `.bcfzip` sebagai daftar isu. MarkupCraft menulis **BCF 2.1**.

## Membuat file

1. Buka tab {{ui:Markups}}.
2. Saring daftar sesuai yang ingin Anda kirim, misalnya {{ui:Status}} "Open". Hanya markup dalam daftar yang diekspor.
3. Pilih {{ui:BCF}}.
4. Tunggu sementara jepretan tiap markup dibuat ("Making snapshots for BCF (5 of 20)…").

Hasil: "<name> markups.bcfzip" diunduh, dan bilah status menampilkan jumlah topik di dalamnya serta ukuran file.

## Isi file

Setiap markup menjadi satu **topik**:

| Bidang topik | Diisi dengan |
|---|---|
| Judul | Nomor punch, subjek, dan lembar, misalnya "#4 Awan pada A-101 — Denah lantai" |
| Jenis | Jenis markup (Awan, Callout, Panjang…) |
| Status | Terbuka, Diterima, Ditolak, atau Selesai |
| Label | Jenis markup dan lembar |
| Penulis dan tanggal | Penulis markup, tanggal dibuat, dan tanggal diubah |
| Ditugaskan kepada, tenggat | Dari item punch-nya, jika ada |
| Deskripsi | Teks atau kata-kata stempel, nilai ukur, komentar, serta lembar dan file |
| Komentar | Satu untuk setiap balasan, dengan penulis dan tanggal |
| Jepretan | Gambar markup pada bagian lembarnya |
| Sudut pandang | Tampilan dari atas atas posisi markup pada lembar |

Mengekspor markup yang sama lagi menghasilkan ID topik yang sama, sehingga alat yang mengimpor BCF dapat mengenalinya sebagai isu yang sama.

## Yang kembali saat Anda mengimpor

{{ui:Impor BCF}} membaca file BCF 2.0, 2.1, dan 3.0 (diperiksa pada 19 file uji resmi buildingSMART 3.0: setiap topik terbaca, dan komentar dari tiga file yang memiliki teks). Untuk topik yang berasal dari Anda (ID topik yang sama), file ini menambahkan komentar baru sebagai balasan dan mengambil status baru. Topik lain menjadi catatan pada lembar yang dinamai oleh label atau nama file-nya, atau jika tidak ada, pada lembar yang terbuka. Judul, deskripsi, penerima tugas, dan tenggat menjadi teks catatan, sedangkan komentarnya menjadi balasan.

| Di topik BCF | Di MarkupCraft |
|---|---|
| Judul, deskripsi, penerima tugas, tenggat | Teks catatan |
| Komentar yang berisi teks | Balasan |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done dihitung sebagai Selesai) | Status markup |
| Penulis dan tanggal dibuat | Penulis dan tanggal catatan |
| Posisi kamera | Posisi pada lembar, hanya untuk topik yang ditautkan ke lembar melalui label atau nama file |
| Pilihan model, bagian tersembunyi, bidang potong, jepretan | Tidak disimpan: lembar tidak memiliki model untuk menampilkannya |

## Batasan yang perlu diketahui

- **Lembar bukan model.** Sudut pandang menunjuk posisi markup pada kertas, diukur dalam meter kertas. Ini tidak membawa alat BIM ke suatu tempat di dalam model. Gunakan jepretan dan nama lembar untuk menemukan lokasinya.
- **Status dan jenis adalah milik MarkupCraft** (Open, Accepted, Rejected, Completed; Awan, Callout…). File menyatakannya, sesuai yang diizinkan BCF, tetapi alat dengan daftar tetap sendiri mungkin memetakan atau mengabaikannya.
- **Impor membawa komentar, bukan tampilan model.** {{ui:Impor BCF}} menambahkan balasan dan status ke markup yang Anda ekspor, serta membuat catatan dari isu lain; fitur ini tidak dapat menampilkan kamera model. Lihat [Daftar markup dan ekspor](topic:markups-list-and-export#import-bcf).
- Mengirim markup kembali sebagai PDF sering kali lebih sederhana untuk tinjauan gambar. BCF dipakai untuk memasukkan komentar gambar ke alur kerja koordinasi model.
