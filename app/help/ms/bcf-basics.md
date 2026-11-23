---
title: Asas BCF
summary: Apa yang terkandung dalam eksport BCF daripada MarkupCraft, cara menggunakannya dengan alat koordinasi BIM, dan hadnya.
keywords: bcf, bcfzip, format kerjasama BIM, isu, koordinasi, pertembungan, topik, pandangan, tangkapan, openbim, buildingsmart, eksport isu
from: 0de26175
---

BCF (BIM Collaboration Format) ialah format fail terbuka untuk menghantar isu antara alat BIM. Banyak program pemodelan koordinasi dan pengarangan boleh mengimport fail `.bcfzip` sebagai senarai isu. MarkupCraft menulis **BCF 2.1**.

## Buat satu

1. Buka tab {{ui:Markup}}.
2. Tapis senarai kepada apa yang anda mahu hantar, contohnya {{ui:Status}} "Buka". Hanya markup yang disenaraikan dieksport.
3. Pilih {{ui:BCF}}.
4. Tunggu sementara ia membuat tangkapan bagi setiap markup ("Membuat tangkapan untuk BCF (5 daripada 20)…").

Hasil: "<name> markups.bcfzip" dimuat turun, dan bar status menyatakan berapa topik yang dikandunginya serta saiz failnya.

## Apa yang ada di dalamnya

Setiap markup menjadi satu **topik**:

| Medan topik | Diisi dengan |
|---|---|
| Tajuk | Nombor punch, subjek dan helaian, contohnya "#4 Awan pada A-101 — Pelan lantai" |
| Jenis | Jenis markup (Awan, Callout, Panjang…) |
| Status | Buka, Diterima, Ditolak atau Selesai |
| Label | Jenis markup dan helaian |
| Pengarang dan tarikh | Pengarang markup, tarikh dicipta dan tarikh diubah suai |
| Diberikan kepada, tarikh akhir | Daripada item punch-nya, apabila ada |
| Penerangan | Teks atau wording cop, nilai ukuran, ulasan, serta helaian dan fail |
| Ulasan | Satu bagi setiap balasan, dengan pengarang dan tarikh |
| Tangkapan | Gambar markup pada bahagiannya pada helaian |
| Pandangan | Pandangan dari atas tentang kedudukan markup pada helaian |

Mengeksport markup yang sama semula memberikan ID topik yang sama, supaya alat yang mengimport BCF boleh mengenalinya sebagai isu yang sama.

## Apa yang kembali apabila anda mengimport

{{ui:Import BCF}} membaca fail BCF 2.0, 2.1 dan 3.0 (diuji pada 19 fail ujian rasmi buildingSMART 3.0: setiap topik dibaca, dan ulasan bagi tiga yang mempunyai teks). Bagi topik yang merupakan milik anda (ID topik sama), ia menambah ulasan baharu sebagai balasan dan mengambil status baharu. Mana-mana topik lain menjadi nota pada helaian yang dinyatakan oleh labelnya atau nama failnya, jika tidak pada helaian yang terbuka, dengan tajuk, penerangan, penerima tugas dan tarikh akhir sebagai teks nota, dan ulasannya sebagai balasan.

| Dalam topik BCF | Dalam MarkupCraft |
|---|---|
| Tajuk, penerangan, penerima tugas, tarikh akhir | Teks nota |
| Ulasan yang mempunyai teks | Balasan |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done dikira sebagai Completed) | Status markup |
| Pengarang dan tarikh dicipta | Pengarang dan tarikh nota |
| Kedudukan kamera | Kedudukan pada helaian, hanya bagi topik yang dikaitkan dengan helaian melalui label atau nama fail |
| Pemilihan model, bahagian tersembunyi, satah pemotongan, tangkapan | Tidak disimpan: helaian tiada model untuk memaparkannya |

## Had yang perlu diketahui

- **Helaian bukan model.** Pandangan menunjuk kepada kedudukan markup pada kertas, diukur dalam meter kertas. Ia tidak membawa alat BIM ke suatu tempat dalam model. Gunakan tangkapan dan nama helaian untuk mencari lokasinya.
- **Status dan jenis ialah milik MarkupCraft.** (Open, Accepted, Rejected, Completed; Cloud, Callout…) Fail mengisytiharkannya, seperti yang dibenarkan BCF, tetapi alat yang mempunyai senarai tetap sendiri mungkin memetakan atau mengabaikannya.
- **Mengimport membawa ulasan, bukan pandangan model.** {{ui:Import BCF}} menambah balasan dan status kepada markup yang anda eksport, dan membuat nota bagi isu lain; ia tidak dapat memaparkan kamera model. Lihat [Senarai markup dan eksport](topic:markups-list-and-export#import-bcf).
- Menghantar markup semula sebagai PDF selalunya lebih mudah untuk semakan lukisan. BCF ialah untuk memasukkan ulasan lukisan ke dalam aliran kerja koordinasi model.
