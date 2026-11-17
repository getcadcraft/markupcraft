---
title: Senarai markup, penapis dan eksport
summary: Lihat setiap markup dalam set, tapis mengikut helaian, pengarang, status dan jenis, lompat ke satu markup, dan eksport senarai sebagai CSV atau BCF.
keywords: senarai markup, senarai, ringkasan, xlsx, buku kerja hamparan, buku kerja, laporan PDF, import bcf, tapis, isih, laporan, eksport, csv, hamparan, bcf, bcfzip, isu, senarai komen, lompat
from: 6c70261e
---

## Buka senarai

Pilih tab {{ui:Markup}} di sebelah kanan. Setiap markup bagi setiap fail yang dibuka disenaraikan, mengikut susunan helaian dan kemudian mengikut susunan ia dibuat. Setiap baris memaparkan:

- ikon dalam warna markup, nombor punch jika ada ("#4"), dan subjeknya,
- teksnya, wording cop atau nilai ukuran, dan komennya,
- helaian, pengarang dan tarikh,
- statusnya (atau "Baca sahaja" untuk komen yang datang bersama fail), dan bilangan balasan apabila ia mempunyai balasan.

Baris di atas senarai mengiranya: "38 markup", atau "12 daripada 38 markup" apabila ditapis.

## Lompat ke markup

Klik satu baris. MarkupCraft menunjukkan helaian itu, memilih markup, dan mengezum kepadanya apabila ia berada di luar skrin atau terlalu kecil untuk dilihat. {{ui:Sifat}} mempunyai butirannya dan urutannya apabila anda beralih kembali ke tab itu.

## Tapis

Empat menu berada di atas senarai. Ia digabungkan.

| Menu | Pilihan |
|---|---|
| {{ui:Helaian}} | Semua helaian, Helaian ini (mengikut anda apabila anda menukar helaian), atau mana-mana helaian yang mempunyai markup |
| {{ui:Pengarang}} | Sesiapa, atau setiap pengarang dalam set |
| {{ui:Status}} | Sebarang status, Terbuka, Diterima, Ditolak, Selesai |
| {{ui:Jenis}} | Sebarang jenis, atau setiap jenis markup dalam set |

Contoh:

- Apa yang masih terbuka pada helaian ini: {{ui:Helaian}} "Helaian ini", {{ui:Status}} "Terbuka".
- Komen seorang perunding: {{ui:Pengarang}} nama mereka.
- Semua ukuran: {{ui:Jenis}} "Panjang" atau "Luas".

Senarai menunjukkan sehingga 2000 baris; sempitkannya dengan penapis dalam set yang sangat besar.

## Eksport ke CSV

Pilih {{ui:CSV}} di bahagian atas tab. Anda mendapat "<name> markups.csv" dengan **markup seperti yang ditapis sekarang**, satu setiap baris, dengan lajur berikut:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- "Text" memegang perkataan kotak teks dan callout, wording cop, atau nama kumpulan kiraan.
- "Measurement" memegang panjang, "luas, perimeter" bagi kawasan luas, dan "kumpulan: n" bagi kiraan.
- Tarikh ialah cap masa penuh dalam UTC.

Untuk mengeksport semuanya, tetapkan semula setiap penapis kepada pilihan pertamanya dahulu.

## Legenda pada helaian

{{ui:Petunjuk}} dalam tab {{ui:Markup}} meletakkan legenda di bahagian kanan atas apa yang anda lihat: kotak yang menyenaraikan setiap jenis markup pada helaian (mengikut subjek dan warna, seperti "Awan", "Soalan" atau "Plag") dengan bilangannya. Kumpulan kiraan mengira tandanya. Legenda terus mengira semasa anda melukis, mengalih atau memadam markup, dan ia dicetak serta disimpan dengan kiraan pada saat itu.

Alihkan dan ubah saiznya seperti mana-mana markup. Dalam {{ui:Sifat}}-nya, tukar {{ui:Tajuk}}-nya, atau tetapkan {{ui:Kiraan}} kepada {{ui:Keseluruhan set}} untuk mengira setiap helaian. Ruang, legenda lain dan komen daripada program lain tidak dikira.

## Lajur anda sendiri, dan pengisihan

{{ui:Lajur}} dalam tab {{ui:Markup}} menambah lajur anda sendiri kepada setiap markup: **teks**, **pilihan** (seperti Perdagangan: Mekanikal, Elektrikal, Paip), **nombor** (seperti Kos) atau **tarikh**. Berikan setiap satu nama, pilih jenisnya, senaraikan pilihan bagi lajur pilihan, dan pilih {{ui:Simpan lajur}}.

- Isikannya di bawah {{ui:Sifat}}: setiap lajur mempunyai medan di sana. Lajur nombor menerima nombor sahaja, dan lajur tarikh menerima tarikh sahaja.
- Senarai menunjukkan nilai di bawah setiap markup, penapis {{ui:Lajur}} memilih satu nilai (atau markup yang kosong), dan {{ui:Isih}} menyusun senarai mengikut lajur, pengarang, status, jenis atau tarikh, bukan mengikut helaian.
- Eksport CSV dan XLSX membawa lajur selepas yang biasa. Lajur disimpan dengan PDF dan kembali apabila anda membukanya semula.

## Eksport ringkasan: buku kerja atau PDF

- {{ui:XLSX}} memuat turun "<name> markup summary.xlsx" dengan tiga helaian: **Markup** (satu baris bagi setiap markup yang disenaraikan, lajur yang sama seperti CSV), **Mengikut helaian** (berapa markup setiap helaian ada, terbuka dan tertutup, dan berapa bagi setiap jenis, dengan jumlah) dan **Senarai kecacatan** (apabila ada item punch).
- {{ui:PDF}} memuat turun "<name> markup summary.pdf": laporan untuk dicetak atau dihantar, dengan nama set, tarikh dan jadual markup yang disenaraikan (nombor, helaian, jenis, subjek, teks atau komen, nilai ukuran, pengarang, status dan balasan terkini). Teks panjang dibalut; pengepala jadual berulang pada setiap halaman.

Kedua-duanya mengambil senarai seperti yang ditapis, jadi tapis dahulu untuk melaporkan satu helaian, seorang pengarang, atau item terbuka sahaja.

## Eksport ke BCF

Pilih {{ui:BCF}}. MarkupCraft membuat tangkapan bagi setiap markup yang disenaraikan pada helaiannya ("Membuat tangkapan untuk BCF (3 daripada 12)…"), kemudian memuat turun "<name> markups.bcfzip". Setiap markup menjadi satu topik BCF dengan statusnya, pengarang, tarikh, balasan sebagai komen, penerima tugas dan tarikh akhir daripada item punchnya, serta tangkapannya.

Gunakannya untuk membawa komen semakan lukisan ke dalam alat koordinasi BIM yang membaca BCF. Apa yang dibawa bersama dan apa yang tidak, ada dalam [Asas BCF](topic:bcf-basics).

## Import BCF

{{ui:Import BCF}} membaca fail .bcfzip (atau .bcf) daripada alat BIM:

- Isu yang datang daripada eksport BCF MarkupCraft sendiri mencari semula markupnya: balasan baharu ditambah ke urutan, dan status baharu ditetapkan (Ditutup dikira sebagai Selesai). Balasan yang sudah ada tidak ditambah dua kali.
- Isu lain menjadi nota, dengan tajuk, penerangan, pengarang dan komen. Nota diletakkan pada helaian yang nombor atau namanya diberikan oleh label isu, jika tidak pada helaian yang dibuka. Kamera BIM tiada tempat di atas kertas, jadi nota sebegini ditimbun di bahagian kiri atas helaian untuk anda alihkan.

Keseluruhan import ialah satu langkah: {{key:Mod+Z}} membatalkannya. Lihat [Asas BCF](topic:bcf-basics).

## Apa yang senarai belum lakukan

- Mengumpulkan senarai (isih, kemudian tapis, sebagai gantinya).
- Menyunting nilai dalam senarai (sunting dalam {{ui:Sifat}}; medan punch boleh disunting dalam tab {{ui:Senarai kecacatan}}).
