---
title: Peti alat
summary: Simpan markup yang bergaya sebagai alat yang boleh diguna semula, lukis dengannya, dan kongsi peti anda dengan pejabat sebagai fail.
keywords: peti alat, alat, set alat, alat tersuai, markup tersimpan, kegemaran, standard pejabat, import, eksport, kongsi, json
from: 7dfa36e0
---

Tab {{ui:Alat}} memegang **peti alat** anda: markup yang disimpan bersama rupanya, sedia untuk dilukis semula. Alat menyimpan jenis, warna, lebar garisan, isian, kelegapan, saiz teks dan subjek markup itu, serta wording cop, nama kumpulan kiraan, atau teks permulaan kotak teks atau callout.

## Alat yang anda mula dengan

Peti baharu mempunyai enam: "Awan semakan" (merah), "Awan soalan" (biru), "Penyerlah kuning", "Callout RFI" (biru, bermula dengan "RFI: "), "Sahkan di lapangan" (callout jingga yang berbunyi "Sahkan di lapangan.") dan "Diluluskan seperti dinyatakan" (cop).

## Lukis dengan alat

1. Buka tab {{ui:Alat}}.
2. Klik alat. Ia kelihatan ditekan, dan alat bar alat yang sepadan dihidupkan.
3. Lukis seperti biasa. {{ui:Sifat}} memberitahu 'Melukis dengan "<alat>" dari peti alat.'

Semasa alat peti dihidupkan, perubahan yang anda buat dalam {{ui:Sifat}} sebelum melukis terpakai kepada alat itu buat masa ini, tanpa menukar alat yang disimpan atau tetapan alat biasa anda. Memilih butang bar alat, atau menekan kekunci sesuatu alat, kembali kepada alat biasa.

## Simpan alat anda sendiri

1. Lukis markup dan gayakannya mengikut kehendak anda: warna, garisan, isian, subjek, wording cop.
2. Pilih markup itu.
3. Pilih {{ui:Simpan yang dipilih sebagai alat}} dalam tab {{ui:Alat}}, atau {{ui:Simpan sebagai alat}} dalam {{ui:Sifat}}.
4. Taip {{ui:Nama alat}} dan pilih {{ui:Simpan alat}}.

Hasilnya: alat itu ditambah di hujung peti, dan tab {{ui:Alat}} dibuka untuk menunjukkannya.

## Cop daripada pilihan

Pilih beberapa markup (atau kandungan halaman dengan alat {{ui:Kandungan}}) dan pilih {{ui:Simpan pilihan sebagai cop…}} dalam {{ui:Lagi}} atau dalam menu klik kanan. Peti mendapat satu cop yang memegang semuanya ("Cop: 3 markup bersama"). Klik padanya, kemudian klik pada mana-mana helaian: markup mendarat bersama, dipusatkan di tempat anda klik, sebagai markup baharu dengan nama anda; kandungan halaman dilukis ke dalam halaman di situ. Cop ini disimpan dan dikongsi dengan peti seperti mana-mana alat lain.

## Alih keluar alat

Pilih × di hujung baris alat, kemudian {{ui:Alih keluar}}. Markup yang sudah dilukis dengannya kekal seperti sedia ada.

## Di mana peti disimpan

Peti disimpan **dalam pelayar ini, pada komputer ini**. Pelayar atau komputer lain mempunyai peti sendiri (bermula dengan enam lalai), tetingkap persendirian melupakannya apabila ia ditutup, dan membersihkan data laman ini dalam tetapan pelayar memadamkannya.

Jika pelayar tidak akan menyimpannya (storan dimatikan, atau penuh), bar status berbunyi: "Peti alat tidak dapat disimpan dalam pelayar ini (storan dimatikan atau penuh). Eksport untuk menyimpannya."

:::safari
Safari boleh membersihkan data tersimpan sesuatu laman web apabila anda tidak menggunakan laman itu untuk tempoh tertentu. Eksport peti anda sekali-sekala supaya anda boleh mengimportnya semula.
:::

**Eksport peti anda sebagai sandaran**, terutamanya selepas membina alat yang anda bergantung padanya.

## Kongsi peti dengan pejabat anda

1. Tetapkan alat sekali.
2. Pilih {{ui:Eksport}}. Anda mendapat "MarkupCraft tool chest.json".
3. Letakkan fail itu di tempat pejabat menyimpan standardnya, atau hantarkannya.
4. Semua orang lain memilih {{ui:Import}} dalam tab {{ui:Alat}} mereka dan memilih fail itu.

Hasilnya: "Diimport 12 alat daripada "MarkupCraft tool chest.json"." Alat yang datang daripada peti yang sama menggantikan salinan lama mereka, jadi mengimport peti pejabat yang dikemas kini menyegarkan alat tersebut dan tidak menggandakannya; alat baharu ditambah. Peti memuat sehingga 500 alat.

MarkupCraft menyemak setiap nilai dalam fail yang diimport dan melangkau apa yang tidak boleh digunakan ("2 dilangkau (tidak boleh digunakan)"). Fail yang bukan peti ditolak: "Fail ini bukan peti alat MarkupCraft." atau "Fail ini bukan peti alat (ia bukan JSON)."

Fail peti alat daripada program markup lain tidak boleh diimport.
