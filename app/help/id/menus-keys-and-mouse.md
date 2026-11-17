---
title: Menu, tombol, dan mouse
summary: Pilih toolbar MarkupCraft sendiri, bilah menu peninjauan PDF, atau pita, beri alat tombol Anda sendiri, pindahkan alat antar menu, dan atur apa yang dilakukan roda serta tombol mouse.
keywords: gaya menu, menu, bilah menu, toolbar, pita, tab, peninjauan pdf, pintasan keyboard, tombol pintas, tombol, sesuaikan, pasang ulang, mouse, roda, balik, arah zoom, tombol tengah, tombol kanan, geser, ekspor, impor, beralih, familiar
from: 081438a6
---

Alat-alat MarkupCraft sama saja dari cara mana pun Anda menjangkaunya. **Gaya menu** hanya menentukan di mana alat itu berada di layar, bagaimana namanya ditampilkan, dan tombol mana yang memilihnya. Pilih satu di {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menu, tombol, dan mouse}}; perubahannya langsung berlaku, dan peramban ini mengingatnya.

## Tiga gaya

| Gaya | Yang Anda dapatkan |
|---|---|
| {{ui:MarkupCraft}} | Toolbar MarkupCraft sendiri (File, Pilih, Gambar, Revisi, Anotasi, Ukur, Edit) dan tombol satu hurufnya: {{key:V}} pilih, {{key:H}} geser, {{key:P}} pena, {{key:I}} penanda sorot, {{key:L}} garis, {{key:A}} panah, {{key:R}} persegi panjang, {{key:E}} elips, {{key:C}} awan, {{key:K}} callout, {{key:T}} teks, {{key:N}} catatan, {{key:S}} stempel, {{key:M}} panjang, {{key:Q}} luas, {{key:U}} hitung. Titik awal. |
| {{ui:Peninjauan PDF}} | Bilah menu ({{ui:File}}, {{ui:Edit}}, {{ui:Tampilan}}, {{ui:Dokumen}}, {{ui:Markup}}, {{ui:Ukur}}, {{ui:Tinjau}}, {{ui:Jendela}}) di atas deretan alat peninjauan, dengan tombol yang disusun seperti program peninjauan PDF menyusun tombolnya: {{key:V}} pilih, {{key:Shift+V}} geser, {{key:H}} penanda sorot, {{key:Q}} callout, {{key:N}} poligon, {{key:Shift+N}} polyline, {{key:Shift+T}} catatan, {{key:Shift+A}} busur, dan pengukuran pada {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibrasi, {{key:Alt+Shift+L}} panjang, {{key:Alt+Shift+G}} sudut, {{key:Alt+Shift+A}} luas, {{key:Alt+Shift+C}} hitung. {{key:Alt+L}} membuka daftar markup. Tombol tengah menggeser; klik kanan tidak. |
| {{ui:Pita}} | Tab yang dinamai menurut pekerjaannya: {{ui:Markup}} (pilih, gambar, awan, callout, teks, catatan, stempel), {{ui:Ukur}}, {{ui:Edit}}, {{ui:Tinjau}} (daftar markup dan ekspornya, isu BCF, daftar periksa, catatan lapangan, peti alat, bandingkan), {{ui:Halaman}} dan {{ui:Tampilan}}, dengan {{ui:File}} dan tombol cepat untuk buka, simpan, urungkan, dan ulangi. Alat-alat tetap memakai tombol satu huruf milik MarkupCraft. Tombol untuk panel yang belum terbuka akan membuka panel itu terlebih dahulu. |

Setiap gaya tetap menggunakan tombol {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} paskan halaman, dan {{key:Mod+9}} paskan lebar; {{key:PageUp}} dan {{key:PageDown}} mengganti lembar.

:::tip
Tombol yang termasuk tata letak MarkupCraft tetapi tidak termasuk gaya yang Anda pilih tidak berfungsi, dan bilah status menyebutkan ke mana alatnya pindah ("Di Peninjauan PDF, Callout adalah Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}}, dan tombol panah selalu mempertahankan maknanya. Saat Anda mengetik di kotak teks, callout, atau catatan, setiap tombol menjadi milik teks; angka yang diketik saat menggambar tetap membuka kotak panjang.
:::

## Buat milik Anda sendiri

1. Pilih gaya yang paling mendekati keinginan Anda, lalu klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Tombol dan menu}}, cari sebuah alat (kotak pencarian membantu). Pilih {{ui:Tambah tombol}} lalu tekan tombolnya, atau dua tombol berurutan untuk tombol dua huruf. Klik sebuah tombol untuk melepasnya.
3. Dengan bilah menu, {{ui:Letaknya}} memindahkan alat ke menu lain, atau ke {{ui:Hanya tombol}}.
4. Pada {{ui:Mouse}}, atur roda dan tombol yang menggeser lembar.
5. Beri nama lalu klik {{ui:Simpan}}.

Menyimpan gaya bawaan membuat salinan Anda sendiri ("PDF review saya"); gaya bawaan tidak pernah berubah. Tombol yang diberikan kepada dua alat ditampilkan dengan warna merah dan harus diperbaiki sebelum Anda dapat menyimpan.

## Mouse

- **Roda mouse**: {{ui:Gulir ke atas memperbesar}} (titik awal) atau {{ui:Gulir ke atas memperkecil}}, dan seberapa cepat. Cubitan trackpad selalu melakukan zoom mengikuti arah gerakan jari Anda.
- **Geser lembar dengan**: tombol tengah, tombol kanan, atau keduanya. {{key:Space}} dan seret, serta alat {{ui:Geser}}, selalu menggeser; tombol kiri selebihnya menggambar dan memilih, jadi mencentangnya tidak mengubah apa pun di sini.
- MarkupCraft tidak memiliki tampilan 3D, jadi tombol 3D tidak melakukan apa pun di sini.

## Bawa bersama Anda

{{ui:Ekspor}} menyimpan gaya yang sedang dipakai sebagai berkas `.ccinput.json` kecil; {{ui:Impor…}} menambahkannya, dari komputer lain atau dari rekan kerja. Berkas yang diimpor hanya dapat menunjuk ke alat milik MarkupCraft sendiri: apa pun selain itu dibuang dan dihitung di bilah status. {{ui:Hapus gaya ini}} menghapus gaya milik Anda sendiri.

:::note
Pengaturan ini tetap berada di peramban ini. {{ui:Gunakan gaya ini di setiap aplikasi}} di bawah kartu gaya membuat setiap aplikasi terbuka dengan gaya yang sesuai: {{ui:Peninjauan PDF}} mengikuti gaya bilah menu aplikasi lain, {{ui:Pita}} mengikuti pita mereka, dan toolbar MarkupCraft sendiri mengikuti toolbar mereka. Aplikasi tanpa gaya yang sesuai tetap memakai miliknya sendiri.
:::

:::tip
Tata letak ruang kerja di {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Tata letak}} ({{ui:Pita dan peramban proyek}}, {{ui:Kotak alat dan kotak info}}) membangun pitanya dari tab gaya {{ui:Pita}}, dan kotak alatnya dari toolbar MarkupCraft, sehingga setiap alat bekerja dengan cara yang sama di dalamnya.
:::

Terkait: [Keyboard dan mouse](topic:keyboard) · [Pengaturan MarkupCraft](topic:settings) · [Dari perangkat lunak markup lain](topic:coming-from)
