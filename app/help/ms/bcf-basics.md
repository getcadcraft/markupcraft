---
title: Asas BCF
summary: Kandungan eksport BCF daripada MarkupCraft, cara menggunakannya dengan alat koordinasi BIM, dan hadnya.
keywords: bcf, bcfzip, format kolaborasi BIM, isu, koordinasi, pertembungan, topik, sudut pandangan, syot kilat, openbim, buildingsmart, eksport isu
from: 446f38c1
---

BCF (BIM Collaboration Format) ialah format fail terbuka untuk menghantar isu antara alat BIM. Banyak program pemodelan koordinasi dan penghasilan boleh mengimport fail `.bcfzip` sebagai senarai isu. MarkupCraft menulis **BCF 2.1**.

## Buat satu

1. Buka tab {{ui:Markup}}.
2. Tapis senarai mengikut apa yang anda mahu hantar, contohnya {{ui:Status}} "Buka". Hanya markup yang disenaraikan akan dieksport.
3. Pilih {{ui:BCF}}.
4. Tunggu sementara ia membuat syot kilat bagi setiap markup ("Membuat syot kilat untuk BCF (5 daripada 20)…").

Hasilnya: "<name> markups.bcfzip" dimuat turun, dan bar status menyatakan berapa topik yang ada di dalamnya serta saiz fail.

## Apa yang terkandung di dalamnya

Setiap markup menjadi satu **topik**:

| Medan topik | Diisi dengan |
|---|---|
| Tajuk | Nombor punch, subjek dan helaian, contohnya "#4 Awan pada A-101 — Pelan lantai" |
| Jenis | Jenis markup (Awan, Callout, Panjang…) |
| Status | Buka, Diterima, Ditolak atau Selesai |
| Label | Jenis markup dan helaian |
| Pengarang dan tarikh | Pengarang markup, tarikh dicipta dan tarikh diubah suai |
| Diberikan kepada, tarikh akhir | Daripada item punch-nya, jika ada |
| Huraian | Teks atau perkataan cop, nilai ukuran, ulasan, serta helaian dan fail |
| Ulasan | Satu bagi setiap balasan, dengan pengarang dan tarikh |
| Syot kilat | Gambar markup pada bahagiannya di helaian |
| Pandangan | Pandangan dari atas bagi kedudukan markup pada helaian |

Mengeksport semula markup yang sama memberikan ID topik yang sama, supaya alat yang mengimport BCF boleh mengenalinya sebagai isu yang sama.

## Had yang perlu diketahui

- **Helaian bukan model.** Pandangan menunjuk kepada kedudukan markup pada kertas, diukur dalam meter kertas. Ia tidak membawa alat BIM ke sesuatu tempat dalam model. Gunakan syot kilat dan nama helaian untuk mencari lokasi tersebut.
- **Status dan jenis ialah milik MarkupCraft.** (Buka, Diterima, Ditolak, Selesai; Awan, Callout…). Fail mengisytiharkannya, seperti yang dibenarkan BCF, tetapi alat yang mempunyai senarai tetap sendiri mungkin memetakan atau mengabaikannya.
- **Mengimport membawa ulasan, bukan pandangan model.** {{ui:Import BCF}} menambah balasan dan status kepada markup yang anda eksport, dan membuat nota bagi isu lain; ia tidak dapat menunjukkan kamera model. Lihat [Senarai markup dan eksport](topic:markups-list-and-export#import-bcf).
- Menghantar markup balik sebagai PDF selalunya lebih mudah untuk semakan lukisan. BCF ialah untuk membawa ulasan lukisan ke dalam aliran kerja koordinasi model.
