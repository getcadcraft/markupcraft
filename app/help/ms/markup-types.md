---
title: Setiap jenis markup
summary: Tujuh belas jenis markup, kekunci mereka, cara setiap satu dilukis, rupa lalainya, dan apa yang menjadi dalam PDF yang disimpan.
keywords: jenis markup, senarai alat, jenis anotasi, awan, callout, teks, nota, cop, pen, penyerlah, garisan, anak panah, segi empat tepat, elips, polygaris, poligon, ukuran, luas, kiraan
from: 29bf32e7
---

## Alat

| Bar alat | Kekunci | Cara melukis | Rupa lalai | Dalam PDF yang disimpan |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Seret | Merah, 1.5 pt | Dakwat |
| {{ui:Serlah}} | {{key:I}} | Seret | Kuning, 14 pt lebar, lut sinar, mewarnai apa yang berada di bawahnya | Dakwat (ditanda sebagai goresan penyerlah) |
| {{ui:Garisan}} | {{key:L}} | Seret, atau klik titik mula dan akhir | Merah, 2 pt | Garisan |
| {{ui:Anak panah}} | {{key:A}} | Seret, atau klik titik mula dan akhir | Merah, 2 pt, kepala anak panah tertutup di hujung | Garisan dengan kepala anak panah |
| {{ui:Lengkok}} | {{key:O}} | Klik titik mula, satu titik pada lengkok, kemudian hujung | Merah, 2 pt | Polygaris sepanjang lengkok |
| {{ui:Segi empat tepat}} | {{key:R}} | Seret kotak | Merah, 2 pt, tanpa isian | Segi empat sama |
| {{ui:Elips}} | {{key:E}} | Seret kotak | Merah, 2 pt, tanpa isian | Bulatan |
| {{ui:Polygaris}} | {{key:Y}} | Klik titik, klik dua kali untuk menamatkan | Merah, 2 pt | Polygaris |
| {{ui:Poligon}} | {{key:G}} | Klik titik, klik dua kali untuk menamatkan | Merah, 2 pt, tanpa isian | Poligon |
| {{ui:Awan}} | {{key:C}} | Seret kotak | Merah, lengkung 1.5 pt | Segi empat sama dengan sempadan berawan |
| {{ui:Awan bebas}} | {{key:Shift+C}} | Klik titik, klik dua kali untuk menamatkan | Merah, lengkung 1.5 pt | Poligon dengan sempadan berawan |
| {{ui:Callout}} | {{key:K}} | Tekan pada titik, seret ke teks, taip | Teks dan petunjuk merah, 1 pt, teks 12 pt | Kotak teks dengan petunjuk callout |
| {{ui:Teks}} | {{key:T}} | Klik atau seret kotak, taip | Teks merah 12 pt, tanpa sempadan | Kotak teks |
| {{ui:Nota}} | {{key:N}} | Klik, taip | Ikon nota kuning | Nota melekit |
| {{ui:Cop}} | {{key:S}} | Pilih cop, klik atau seret | Huruf besar berbingkai serta "Oleh <name>, <date>"; diwarnakan mengikut maksud | Cop |
| {{ui:Panjang}} | {{key:M}} | Klik titik mula dan akhir (perlu skala) | Garisan dimensi biru dengan tanda dan panjang | Garisan ditanda sebagai dimensi, dengan ukuran |
| {{ui:Sudut}} | {{key:X}} | Klik hujung satu lengan, kemudian bucu, kemudian hujung lengan yang satu lagi | Lengan biru, lengkok kecil di bucu dan sudut dalam darjah | Polygaris dengan sudut sebagai teksnya |
| {{ui:Luas}} | {{key:Q}} | Klik sudut, klik dua kali untuk menamatkan (perlu skala) | Garis luar biru, isian biru muda, luas dan perimeter | Poligon ditanda sebagai luas, dengan ukuran |
| {{ui:Kira}} | {{key:U}} | Klik setiap item | Titik bernombor jingga dan tag "kumpulan: n" | Satu komen dakwat bagi setiap kumpulan, satu cincin bagi setiap item |

Pada sentuhan, "klik dua kali untuk menamatkan" ialah ketik dua kali, dan "klik" ialah ketik yang bertindak apabila anda mengangkat jari (bagi titik, nota dan kiraan).

## Apa yang dibawa oleh setiap markup

| Medan | Di mana anda melihatnya |
|---|---|
| Pengarang | {{ui:Sifat}}, senarai, baris kedua cop, penonton PDF lain |
| Dicipta dan diubah suai | {{ui:Sifat}} (zon masa anda), senarai, CSV |
| Status | Terbuka, Diterima, Ditolak atau Selesai |
| Subjek | Label pendek; lalai mengikut jenis ("Awan", "Kotak teks", "Ukuran panjang") |
| Komen | Nota yang lebih panjang. Bagi nota, teksnya ialah komennya. |
| Teks | Kotak teks dan callout sahaja |
| Balasan | Urutan, dengan perubahan status |
| Item senarai kecacatan | Nombor, penerima tugas, tarikh akhir, status item, apabila ditambah ke {{ui:Senarai kecacatan}} |
| Gaya | Warna, lebar garisan, isian dan kelegapan isian (bentuk tertutup, teks dan callout), kelegapan, saiz teks (teks, callout dan ukuran) |

## Komen baca sahaja

Komen yang datang bersama fail dan yang MarkupCraft tidak boleh sunting (serlahan teks, cop program lain dan jenis khas lain) disenaraikan dengan jenis "Lain" dan cip status "Baca sahaja". Ia mengekalkan rupa tepat yang diberikan fail itu. Anda boleh memilihnya, melihat pengarang, subjek dan komennya, dan membalas kepadanya.

## Belum dibina

Lampiran fail belum dibina. Mana-mana markup boleh dipautkan ke helaian; lihat [Pautan helaian](topic:sheet-links). Gambar dan tandatangan diletakkan dengan alat {{ui:Cop}}; lihat [Cop dan nota](topic:stamps-and-notes). Lihat [Apa yang belum dibina](topic:not-built-yet).
