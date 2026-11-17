---
title: Dasar BCF
summary: Isi ekspor BCF dari MarkupCraft, cara menggunakannya dengan alat koordinasi BIM, dan batasannya.
keywords: bcf, bcfzip, bim collaboration format, isu, koordinasi, clash, topik, viewpoint, snapshot, openbim, buildingsmart, ekspor isu
from: 446f38c1
---

BCF (BIM Collaboration Format) adalah format file terbuka untuk meneruskan isu antar alat BIM. Banyak program koordinasi dan pembuatan model dapat mengimpor file `.bcfzip` sebagai daftar isu. MarkupCraft menulis **BCF 2.1**.

## Membuat satu file

1. Buka tab {{ui:Markup}}.
2. Saring daftar sesuai yang ingin Anda kirim, misalnya {{ui:Status}} "Terbuka". Hanya markup yang tercantum yang diekspor.
3. Pilih {{ui:BCF}}.
4. Tunggu sementara snapshot setiap markup dibuat ("Membuat snapshot untuk BCF (5 dari 20)…").

Hasil: "<name> markups.bcfzip" diunduh, dan bilah status menampilkan berapa topik yang dimuat serta ukuran file.

## Isi file

Setiap markup menjadi satu **topik**:

| Kolom topik | Diisi dengan |
|---|---|
| Title | Nomor punch, subjek, dan lembar, misalnya "#4 Awan pada A-101 — Denah lantai" |
| Type | Jenis markup (Awan, Callout, Panjang…) |
| Status | Terbuka, Diterima, Ditolak, atau Selesai |
| Labels | Jenis markup dan lembarnya |
| Author and dates | Penulis markup, tanggal dibuat dan tanggal diubah |
| Assigned to, due date | Dari item punch list-nya, jika ada |
| Description | Teks atau kata-kata stempel, nilai ukur, komentar, serta lembar dan file |
| Comments | Satu untuk setiap balasan, dengan penulis dan tanggal |
| Snapshot | Gambar markup pada bagian lembarnya |
| Viewpoint | Tampilan atas dari posisi markup di lembar |

Mengekspor ulang markup yang sama menghasilkan ID topik yang sama, sehingga alat yang mengimpor BCF dapat mengenalinya sebagai isu yang sama.

## Batasan yang perlu diketahui

- **Lembar bukan model.** Viewpoint menunjuk posisi markup di atas kertas, diukur dalam meter kertas. Ini tidak membawa alat BIM ke suatu tempat di dalam model. Gunakan snapshot dan nama lembar untuk menemukan lokasinya.
- **Status dan jenis adalah milik MarkupCraft** (Terbuka, Diterima, Ditolak, Selesai; Awan, Callout…). File mendeklarasikannya, sebagaimana diizinkan BCF, tetapi alat yang punya daftar tetap sendiri dapat memetakan atau mengabaikannya.
- **Mengimpor membawa komentar, bukan tampilan model.** {{ui:Impor BCF}} menambahkan balasan dan status ke markup yang Anda ekspor, serta membuat catatan untuk isu lain. Fitur ini tidak dapat menampilkan kamera model. Lihat [Daftar markup dan ekspor](topic:markups-list-and-export#import-bcf).
- Mengirim markup kembali sebagai PDF sering kali lebih sederhana untuk peninjauan gambar. BCF dipakai untuk memasukkan komentar gambar ke alur kerja koordinasi model.
