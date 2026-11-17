---
title: Unit, panjang dan skala
summary: Setiap cara untuk menaip panjang, unit yang panjang dan luas dipaparkan dalamnya, pembundaran, dan senarai skala pratetap.
keywords: unit, kaki, inci, kaki dan inci, metrik, meter, milimeter, sentimeter, skala, pratetap, skala seni bina, skala kejuruteraan, nisbah, kaki persegi, pembundaran, pecahan
from: 574b0291
---

## Menaip panjang

Apabila anda menentukur daripada dua titik, anda menaip jarak sebenar. MarkupCraft membaca semua ini:

| Anda taip | Maksudnya |
|---|---|
| `24'-0"` | 24 kaki |
| `12' 6 1/2"` atau `12'-6 1/2"` | 12 kaki 6½ inci |
| `12' 6` | 12 kaki 6 inci (tanda inci ditinggalkan) |
| `6"` atau `1/2"` | inci |
| `12.5'` atau `12.5 ft` | 12½ kaki |
| `3 ft 6 in` | 3 kaki 6 inci (juga feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrik (juga meter, metre, millimeter, centimetre…) |
| `24` | nombor biasa, dalam unit yang dipilih di bawah {{ui:Tunjukkan panjang dalam}} |

Tanda petik kerinting (’ ”) dan dua tanda apostrof ('') untuk inci juga berfungsi. Panjang sifar dan negatif ditolak.

:::warning
Koma dibaca sebagai titik perpuluhan: `1,5 m` ialah 1.5 meter. Jangan taip pemisah ribuan: `1,200 mm` dibaca sebagai 1.2 milimeter. Taip `1200 mm`.
:::

## Cara panjang dan luas dipaparkan

| {{ui:Tunjukkan panjang dalam}} | Panjang dipaparkan sebagai | Luas dipaparkan sebagai |
|---|---|---|
| {{ui:Kaki dan inci}} | `12'-6 1/2"`, dibundarkan kepada 1/16" | kaki persegi, dua titik perpuluhan |
| {{ui:Kaki perpuluhan}} | `12.54'`, dua titik perpuluhan | kaki persegi, dua titik perpuluhan |
| {{ui:Inci}} | `150.5"`, sehingga dua titik perpuluhan | inci persegi, satu titik perpuluhan |
| {{ui:Meter}} | `3.820 m`, tiga titik perpuluhan | meter persegi, tiga titik perpuluhan |
| {{ui:Milimeter}} | `3820 mm`, milimeter bulat | milimeter persegi, bulat |

Perimeter sesuatu luas menggunakan format panjang.

## Skala pratetap

Pratetap mengandaikan PDF pada saiz cetakan penuhnya: 72 titik PDF bagi setiap inci, seperti program CAD yang memplotnya.

| Kumpulan | Skala | Panjang dipaparkan dalam |
|---|---|---|
| Seni bina | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Kaki dan inci |
| Kejuruteraan | 1" = 10', 20', 30', 40', 50', 60', 100' | Kaki perpuluhan |
| Metrik | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimeter |
| Metrik | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meter |

Untuk menggunakan skala pratetap tetapi melihat panjang dalam unit lain, tentukur daripada dua titik dan pilih unit di situ.

## Skala yang disimpan oleh program lain

Apabila PDF sudah membawa skala untuk halaman daripada program lain (skala pengukuran yang disimpan pada halaman), MarkupCraft menggunakannya jika ia dalam kaki, inci, meter, sentimeter atau milimeter. Labelnya dipaparkan seperti yang dinyatakan fail.

## Kedudukan kertas

Bar status menunjukkan di mana penuding berada pada kertas, dalam inci dari sudut kiri atas helaian, tanpa mengira skala helaian. Langkah anjakan Compare adalah dalam point (72 point bagi setiap inci).

## Ketepatan

Pengukuran sebaik penentukuran dan klik anda. Tentukur ke atas dimensi diketahui yang paling panjang yang anda boleh cari, zum masuk untuk klik hujungnya, kemudian semak satu dimensi lain. PDF yang diskalakan semasa dibuat (plot "muat ke halaman" atau set separuh saiz) masih tepat selepas ditentukur daripada satu dimensi, tetapi tidak dengan pratetap.
