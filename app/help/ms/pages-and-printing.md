---
title: Cetak, dan tukar halaman PDF
summary: Cetak helaian dengan markupnya, dan putar, alih, selit, padam atau ekstrak halaman bagi PDF yang terbuka.
keywords: cetak, pencetak, kertas, halaman, putar, pusing, susun semula, alih halaman, selit, tambah halaman, halaman kosong, padam halaman, buang halaman, ekstrak, pisah, operasi halaman
from: 81832d9b
---

Menu {{ui:Halaman}} dalam kumpulan {{ui:Fail}} berfungsi pada PDF yang dimiliki helaian terbuka. PDF anda pada komputer ini tidak pernah diubah: perubahan ialah sebahagian daripada salinan yang anda simpan.

## Cetak

1. Tekan {{key:Mod+P}}, atau pilih {{ui:Halaman}}, kemudian {{ui:Cetak…}}.
2. Apabila lebih daripada satu helaian dibuka, pilih apa yang hendak dicetak: {{ui:Helaian ini}}, setiap halaman fail ini, seluruh set, atau halaman yang anda taip (seperti `1-3, 5`).
3. Pilih {{ui:Cetak}}. Kotak dialog pencetak pelayar anda dibuka: pilih pencetak, kertas dan skala di sana.

Markup dicetak seperti yang kelihatan pada helaian: ia dilukis ke dalam halaman salinan yang dihantar ke pencetak. Ulasan yang dibuat oleh program lain dicetak mengikut cara PDF mereka menyatakannya.

:::safari firefox
Jika pelayar anda tidak dapat mencetak dari dalam halaman, helaian dibuka sebagai PDF dalam tab baharu. Cetak dari situ.
:::

## Putar halaman

Pilih {{ui:Halaman}}, kemudian {{ui:Putar halaman mengikut arah jam}} atau {{ui:Putar halaman lawan arah jam}}. Helaian terbuka berputar sukuan pusingan. Markupnya kekal di tempat asalnya pada lukisan, dan teks yang anda taip berputar bersama halaman supaya ia masih dibaca tegak.

## Alih halaman

Pilih {{ui:Halaman}}, kemudian {{ui:Alih halaman lebih awal}} atau {{ui:Alih halaman lebih lewat}}. Helaian terbuka bertukar tempat dengan jirannya dalam PDF-nya sendiri. Markupnya, skalanya dan nombor helaiannya turut berpindah.

## Selit halaman

- {{ui:Selit halaman daripada PDF…}} meletakkan setiap halaman PDF lain selepas helaian terbuka.
- {{ui:Selit halaman kosong}} menambah halaman kosong bersaiz sama selepas helaian terbuka, untuk lakaran dan nota. Dalam set yang dibuat dengan {{ui:Baharu}}, ia turut mempunyai grid set itu.
- Dalam set yang dibuat dengan {{ui:Baharu}}, {{ui:Tambah halaman kosong}} di bawah senarai {{ui:Helaian}} menambah satu lagi halaman seperti yang lain di hujung. Lihat [Mula dengan halaman kosong](topic:open-a-plan-set#start-with-blank-pages).

Halaman yang diselit mendapat nombor halaman mereka sebagai label sehingga anda menamakannya semula. Lihat [Namakan semula helaian](topic:open-a-plan-set#rename-a-sheet).

## Padam halaman

1. Pilih {{ui:Halaman}}, kemudian {{ui:Padam halaman…}}.
2. Taip nombor halaman PDF ini, seperti `3` atau `2-4`. Halaman helaian terbuka diisi secara automatik.
3. Pilih {{ui:Padam halaman}}. Jika halaman itu mempunyai markup, MarkupCraft memberitahu berapa banyak dan bertanya sekali lagi.

Sebuah PDF sentiasa mengekalkan sekurang-kurangnya satu halaman. Untuk membuang keseluruhan fail, tutup set dan buka fail yang masih anda perlukan.

## Ekstrak halaman

Pilih {{ui:Halaman}}, kemudian {{ui:Ekstrak halaman…}}, dan taip halamannya. Ia dimuat turun sebagai PDF baharu bernama "<fail> (halaman 1-3).pdf", dengan markupnya sebagai ulasan yang boleh anda terus sunting. Fail yang terbuka kekal seperti sediakala.

## Perkara yang perlu diketahui

- **Buat asal berhenti pada perubahan halaman.** {{key:Mod+Z}} membuat asal markup yang dilukis selepasnya, tetapi bukan perubahan halaman itu sendiri atau apa sahaja sebelumnya. Tutup tanpa menyimpan untuk bermula semula daripada PDF asal anda.
- Nombor halaman mengira halaman bagi satu PDF, bukan seluruh set. Mengalih halaman mengekalkannya dalam fail sendiri.
- Halaman yang diubah ialah kerja yang belum disimpan: {{ui:Simpan}} memuat turun salinan yang disusun semula, dan keluar akan bertanya dahulu.
