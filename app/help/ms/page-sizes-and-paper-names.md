---
title: Saiz halaman dan nama kertas
summary: Lihat saiz setiap halaman PDF dalam milimeter dan inci serta nama kertasnya (siri A, B dan C, ANSI, ARCH), dan kumpulkan set bercampur mengikut saiz untuk mencari halaman yang ganjil.
keywords: saiz halaman, saiz kertas, nama kertas, a0, a1, a2, a3, a4, siri b, siri c, ansi, arch, architectural, mm, inci, saiz tersuai, mengikut saiz, saiz ganjil, set bercampur, semak pdf, klien, isu, mediabox, cropbox, putaran
from: 08e1354f
---

Sebelum satu set dihantar kepada klien, semak bahawa setiap helaian mempunyai saiz yang sepatutnya. {{ui:MarkupCraft}} membaca saiz setiap halaman daripada PDF itu sendiri dan menamakan kertasnya.

## Apa yang akan anda lakukan

Lihat saiz satu helaian, kemudian kumpulkan keseluruhan set mengikut saiz.

## Langkah

1. Buka PDF ({{ui:Open}}), kemudian tekan {{key:Esc}} sehingga tiada apa-apa dipilih dan {{ui:Select}} dihidupkan.
2. Lihat {{ui:Properties}}. {{ui:Paper}} menyatakan nama dan arah, contohnya "A4, potret". {{ui:Size}} memberi milimeter dan inci.
3. Setiap baris senarai {{ui:Sheets}} mempunyai baris saiz di bawah nama helaian.
4. Pilih {{ui:By size}} dalam pengepala {{ui:Sheets}}. Senarai itu mengumpulkan helaian di bawah satu tajuk bagi setiap saiz, kumpulan terbesar dahulu. Saiz yang hanya mempunyai beberapa helaian ditandakan sebagai yang ganjil.
5. Pilih {{ui:By size}} sekali lagi untuk kembali kepada susunan asal set.

Hasil: halaman yang saiznya berbeza daripada yang lain mudah dilihat sebelum anda menghantar set.

## Cara nama dipilih

- Saiz diambil daripada kotak halaman dalam PDF dengan putaran diguna pakai, jadi A3 landskap tetap A3.
- Nama ialah siri A dan B (ISO 216), siri C (ISO 269), ANSI A hingga E dan ARCH A hingga E.
- Halaman dalam lingkungan 2 mm daripada saiz bernama mengambil nama itu. Mana-mana halaman lain menyatakan {{ui:custom}}, dan {{ui:Nearest named size}} menyatakan saiz yang paling hampir serta jaraknya.
- Inci diambil daripada saiz halaman sebenar, jadi halaman A4 ialah 8.26 x 11.69 in.

## Dalam fail yang anda simpan

Ringkasan buku kerja ({{ui:Markups list}}, kemudian hamparan) mempunyai lajur {{ui:Paper size}} pada helaian {{ui:By sheet}} dan helaian kerja {{ui:Page sizes}}. Laporan PDF mempunyai baris "Saiz halaman" dengan bilangan bagi setiap saiz.

:::note
Nilai inci ANSI dan ARCH ditaip daripada jadual yang diterbitkan dan belum dibandingkan dengan standard yang dicetak. Anggap halaman "tersuai" yang hampir dengan salah satu daripadanya sebagai perkara untuk semakan anda sendiri.
:::
