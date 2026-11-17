---
title: Apa yang disimpan dalam PDF
summary: Kandungan tepat salinan yang dimarkup, apa yang dilihat oleh program PDF lain, dan apa yang dibaca semula apabila anda membuka fail.
keywords: anotasi pdf, ulasan, data tersimpan, pusingan penuh, label halaman, pengukuran, keadaan semakan, balasan, kebolehoperasian, keserasian, buka semula, data persendirian
from: 6439ad28
---

Salinan yang dimarkup ialah PDF asal dengan ulasan (anotasi PDF) ditambah. Halaman itu sendiri, lukisannya, teks, penanda buku dan pautannya disalin seperti asalnya.

## Setiap markup

| MarkupCraft | Disimpan sebagai | Pemapar PDF lain menunjukkan |
|---|---|---|
| Segi empat tepat, kotak awan | Anotasi segi empat sama (awan: sempadan berawan) | Ulasan segi empat tepat atau awan |
| Elips | Anotasi bulatan | Ulasan elips |
| Poligon, awan bebas | Anotasi poligon (awan: sempadan berawan) | Ulasan poligon atau awan |
| Polygaris | Anotasi PolyLine | Ulasan polygaris |
| Garisan, anak panah | Anotasi garisan (anak panah: kepala anak panah tertutup) | Ulasan garisan atau anak panah |
| Panjang | Anotasi garisan ditanda sebagai dimensi, dengan ukuran | Ukuran panjang, di mana pemapar menyokongnya |
| Luas | Anotasi poligon ditanda sebagai luas, dengan ukuran | Ukuran luas, di mana disokong; jika tidak, poligon |
| Kumpulan kiraan | Satu anotasi dakwat, satu bulatan bagi setiap item; teksnya ialah "group: n" | Ulasan dakwat |
| Pen, serlahan | Anotasi dakwat (serlahan ditanda sebagai begitu) | Ulasan dakwat |
| Teks | Anotasi FreeText | Ulasan kotak teks |
| Callout | Anotasi FreeText dengan petunjuk callout | Ulasan callout |
| Nota | Anotasi teks | Nota pelekat yang terbuka kepada teksnya |
| Cop | Anotasi cop | Ulasan cop |

Setiap satu disimpan bersama:

- **rupanya sendiri**, dilukis tepat seperti MarkupCraft melukisnya pada skrin, supaya ia kelihatan sama dalam mana-mana pemapar dan dicetak sama, termasuk lencana nombor senarai kecacatan;
- **pengarang**, **tarikh dicipta dan diubah suai**, **subjek**, **teks ulasan** (bagi kotak teks dan callout, teks dan ulasan), **warna** dan **kelegapan**;
- **butiran MarkupCraft** dalam entri persendirian yang diabaikan oleh program lain: status, item senarai kecacatan, gaya dan jenis, supaya ia dibuka semula dengan tepat.

## Utas dan status

- Setiap balasan disimpan sebagai ulasan balasan yang dipautkan kepada markupnya, dengan pengarang, tarikh dan teksnya. Balasan tidak mempunyai ikon sendiri pada helaian.
- Setiap perubahan status disimpan sebagai balasan yang membawa keadaan semakan. Alat semakan lain menunjukkannya sebagai Accepted, Rejected atau Completed; Open disimpan tanpa keadaan.
- Markup dengan status selain Open tetapi tanpa perubahan status yang dilog akan mendapat satu balasan keadaan semakan, supaya program lain turut melihat statusnya.
- Balasan pada ulasan bacaan sahaja daripada fail asal disimpan dengan cara yang sama, dipautkan kepada ulasan itu.

## Setiap helaian

- **Skala:** helaian yang ditentukur mendapat viewport ukuran yang meliputi halaman (cara piawai menyimpan skala halaman) dan salinan penentukuran milik MarkupCraft sendiri.
- **Nombor helaian:** nombor yang ditaip dengan {{ui:Namakan semula helaian}} menjadi label halaman. Apabila mana-mana halaman dalam fail mempunyai label, setiap halaman dalam fail itu mendapat label: nombor yang ditaip, atau label lamanya, atau nombor halamannya.
- **Tajuk helaian:** tajuk yang ditaip disimpan untuk MarkupCraft sahaja; pemapar lain tidak menunjukkannya.

## Teks dan aksara

Teks ditulis dalam Helvetica, yang dimiliki oleh setiap pemapar PDF. Huruf di luar set Eropah Barat (Windows-1252) dicetak sebagai "?" dalam salinan; mesej simpan mengira jumlahnya.

## Helaian pengiraan dan sebab

Helaian pengiraan dan sebab disimpan dalam entri persendirian PDF bernama `/MarkupCraftShell`. Program PDF lain mengabaikannya. MarkupCraft yang lebih lama juga mengabaikannya, dan membuangnya apabila ia menyimpan fail itu kali seterusnya.

## Apa yang berlaku kepada ulasan yang sudah sedia ada

Apabila anda membuka PDF yang sudah mempunyai ulasan:

- Ulasan MarkupCraft sendiri dibaca semula dengan tepat. Jika program lain mengalihkan atau menyaiz semula satu ulasan, kedudukan barunya yang diutamakan.
- Segi empat tepat, bulatan, garisan, polygaris, poligon, dakwat, kotak teks dan nota pelekat daripada program lain menjadi markup yang boleh disunting. **Apabila anda menyimpan, MarkupCraft membuang yang asal dan menulisnya semula mengikut caranya sendiri**, bersama pop-up dan balasannya. Rupanya mungkin berubah sedikit.
- Keadaan semakan daripada program lain menetapkan status; yang terbaru menang.
- Segala yang lain (serlahan teks, cop program lain dan jenis khas) **dikekalkan tanpa disentuh** dalam salinan, sebagai bacaan sahaja.
- Pautan dan medan borang dikekalkan tanpa disentuh dan tidak disenaraikan.

Menyimpan fail yang sama sekali lagi tidak pernah menggandakan apa-apa: markup yang dibaca MarkupCraft digantikan, bukan ditambah semula.

## Apa yang tidak berubah

Fail asal anda pada cakera tidak pernah diubah. Salinan tidak dioptimumkan untuk saiz, jadi ia mungkin sedikit lebih besar daripada yang asal. PDF yang dilindungi (disulitkan) tidak boleh disimpan.
