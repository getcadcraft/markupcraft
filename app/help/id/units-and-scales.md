---
title: Satuan, panjang, dan skala
summary: Setiap cara mengetik panjang, satuan tempat panjang dan luas ditampilkan, pembulatan, dan daftar skala prasetel.
keywords: satuan, kaki, inci, kaki dan inci, metrik, meter, milimeter, sentimeter, skala, prasetel, skala arsitektural, skala teknik, rasio, kaki persegi, pembulatan, pecahan
from: 574b0291
---

## Mengetik panjang

Saat Anda mengkalibrasi dari dua titik, Anda mengetik jarak sebenarnya. MarkupCraft membaca semua ini:

| Anda ketik | Artinya |
|---|---|
| `24'-0"` | 24 kaki |
| `12' 6 1/2"` atau `12'-6 1/2"` | 12 kaki 6½ inci |
| `12' 6` | 12 kaki 6 inci (tanda inci dihilangkan) |
| `6"` atau `1/2"` | inci |
| `12.5'` atau `12.5 ft` | 12½ kaki |
| `3 ft 6 in` | 3 kaki 6 inci (juga feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrik (juga meter, metre, millimeter, centimetre…) |
| `24` | angka saja, dalam satuan yang dipilih di {{ui:Tampilkan panjang dalam}} |

Tanda kutip melengkung (’ ”) dan dua apostrof ('') untuk inci juga berfungsi. Panjang nol dan negatif ditolak.

:::warning
Koma dibaca sebagai titik desimal: `1,5 m` berarti 1,5 meter. Jangan ketik pemisah ribuan: `1,200 mm` dibaca sebagai 1,2 milimeter. Ketik `1200 mm`.
:::

## Cara panjang dan luas ditampilkan

| {{ui:Tampilkan panjang dalam}} | Panjang tampil sebagai | Luas tampil sebagai |
|---|---|---|
| {{ui:Kaki dan inci}} | `12'-6 1/2"`, dibulatkan ke 1/16" | kaki persegi, dua desimal |
| {{ui:Kaki desimal}} | `12.54'`, dua desimal | kaki persegi, dua desimal |
| {{ui:Inci}} | `150.5"`, hingga dua desimal | inci persegi, satu desimal |
| {{ui:Meter}} | `3.820 m`, tiga desimal | meter persegi, tiga desimal |
| {{ui:Milimeter}} | `3820 mm`, milimeter utuh | milimeter persegi, utuh |

Keliling sebuah area menggunakan format panjang.

## Skala prasetel

Prasetel mengasumsikan PDF berada pada ukuran cetak penuhnya: 72 titik PDF per inci, seperti yang diplot oleh program CAD.

| Grup | Skala | Panjang ditampilkan dalam |
|---|---|---|
| Arsitektural | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Kaki dan inci |
| Teknik | 1" = 10', 20', 30', 40', 50', 60', 100' | Kaki desimal |
| Metrik | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimeter |
| Metrik | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meter |

Untuk memakai skala prasetel tetapi melihat panjang dalam satuan lain, kalibrasi dari dua titik saja dan pilih satuannya di sana.

## Skala yang disimpan program lain

Saat sebuah PDF sudah membawa skala untuk halaman dari program lain (skala pengukuran yang tersimpan di halaman), MarkupCraft memakainya jika berupa kaki, inci, meter, sentimeter, atau milimeter. Labelnya ditampilkan sebagaimana file menyatakannya.

## Posisi di kertas

Bilah status menampilkan di mana penunjuk berada pada kertas, dalam inci dari sudut kiri atas lembar, apa pun skala lembarnya. Langkah geser Compare dihitung dalam titik (72 titik per inci).

## Akurasi

Pengukuran hanya sebaik kalibrasi dan klik Anda. Kalibrasi dari dimensi terpanjang yang diketahui yang dapat Anda temukan, perbesar untuk mengklik ujung-ujungnya, lalu periksa satu dimensi lain. PDF yang diskalakan saat dibuat (plot "fit to page" atau set setengah ukuran) tetap akurat setelah dikalibrasi dari sebuah dimensi, tetapi tidak dengan prasetel.
