---
title: Hantar markup kepada pelukis sebagai redline
summary: Tulis markup yang terbuka sebagai fail redline untuk sesiapa yang melukis perubahan, kemudian muatkan jawapan mereka supaya setiap markup menunjukkan Diterima atau Ditolak.
keywords: redline, semakan, pelukis, terima, tolak, jawapan, cc-redline, awan semakan, guna markup
from: cb099d04
---

Menyemak ialah separuh daripada kerja; lukisan tetap perlu diubah. Fail redline membawa setiap markup terbuka kepada pelukis, dan jawapan pelukis membawa hasilnya kembali.

## Hantar

1. Buka tab {{ui:Tugasan}} dan buka {{ui:Redline kepada semakan}}.
2. Taip semakan yang markup itu merujuk (contohnya B).
3. Pilih {{ui:Eksport fail redline}}.

Anda mendapat fail `.redline.json` dengan satu item bagi setiap markup Terbuka: helaiannya, kedudukannya (sebagai pecahan helaian, supaya plot semula pada saiz lain masih sejajar, dan dalam titik), perkataannya, pengarang dan utasnya, serta tugasnya jika ada. Ulasan baca sahaja daripada program lain, gambar dan petunjuk (lejen) dikecualikan.

## Jawapan

Pihak lukisan menjawab setiap item sebagai Diterima, Ditolak atau Selesai, dengan nota, dalam fail `.redline-answers.json`. Pilih {{ui:Muatkan fail jawapan…}} dan pilih fail itu: setiap markup mendapat status itu dan nota pelukis dalam utasnya, dan tugas yang markupnya diterima atau selesai akan ditamatkan. Satu langkah buat asal mengambil semula semua jawapan.

Format fail terdapat dalam `docs/REDLINE-FORMAT.md`. Bahagian CadCraft (membaca pakej, menerima atau menolak setiap item, awan semakan dan log) dibina secara berasingan.
