---
title: Markup sebuah lembar
summary: Gambar awan revisi, callout, kotak teks, panah, bentuk, goresan pena, dan sorotan, serta atur warna dan garis sebelum atau sesudahnya.
keywords: markup, redline, awan, awan revisi, callout, leader, kotak teks, panah, garis, persegi panjang, elips, lingkaran, polyline, poligon, pena, bebas, tinta, penanda sorot, warna, tebal garis
from: 9d6de0ac
---

Setiap alat bekerja dengan cara yang sama: pilih alatnya, gambar di lembar, dan markup baru akan dipilih sehingga Anda dapat melihatnya di {{ui:Properti}}. Alat tetap aktif untuk berikutnya. Bilah status selalu menyebutkan apa yang diharapkan alat berikutnya.

:::touch
Pada layar sentuh, gunakan satu jari untuk menggambar. Jari kedua membatalkan apa yang dimulai jari pertama dan mencubit atau menggeser sebagai gantinya, sehingga Anda tidak pernah meninggalkan coretan secara tidak sengaja saat melakukan zoom. Selengkapnya di [Tinjau di iPad atau layar sentuh](topic:review-on-a-tablet).
:::

## Awan revisi

**Awan kotak:** pilih {{ui:Awan}} ({{key:C}}) lalu seret sebuah kotak. Tahan {{key:Shift}} untuk membuatnya menjadi bujur sangkar.

**Awan bebas** di sekeliling bentuk yang tidak beraturan:

1. Pilih {{ui:Awan bebas}} ({{key:Shift+C}}).
2. Klik setiap sudut area.
3. Selesaikan dengan klik dua kali, {{key:Enter}}, atau klik kanan. Di layar sentuh, ketuk dua kali.

Saat Anda mengklik titik, {{key:Backspace}} menghapus titik terakhir dan {{key:Esc}} membatalkan seluruh bentuk. Tahan {{key:Shift}} untuk menjaga sisi berikutnya pada kelipatan 45°. Awan bebas membutuhkan minimal tiga titik.

Lekukan selalu menggembung ke luar dan ukurannya mengikuti tebal garis: garis yang lebih tebal menghasilkan lengkung yang lebih besar.

## Callout

Callout adalah kotak teks dengan leader yang menunjuk sesuatu.

1. Pilih {{ui:Callout}} ({{key:K}}).
2. Tekan pada titik yang ingin Anda beri callout lalu seret ke tempat teks harus berada. Lepaskan.
   Jika Anda hanya mengklik tanpa menyeret, kotak akan diletakkan ke atas dan ke kanan dari titik tersebut.
3. Ketik teksnya. Kotak akan bertambah ke bawah saat baris membungkus.
4. Klik di mana saja di luar kotak, atau tekan {{key:Mod+Enter}}, untuk menyelesaikan. {{key:Esc}} membuang callout.

Jika Anda menyelesaikan tanpa mengetik apa pun, tidak ada callout yang ditambahkan ("Tidak ada yang diketik, jadi tidak ada callout yang ditambahkan.").

Setelah digambar, pilih callout untuk memindahkan kotak, menyeret ujung leader atau tekukannya (dua pegangan berbentuk belah ketupat), atau mengubah ukuran kotak.

## Kotak teks

1. Pilih {{ui:Teks}} ({{key:T}}).
2. Klik di tempat teks dimulai (Anda mendapat kotak dengan lebar yang wajar), atau seret kotak dengan ukuran yang Anda inginkan.
3. Ketik, lalu klik di luar atau tekan {{key:Mod+Enter}}.

Teks tidak memiliki bingkai secara default. Untuk memberinya bingkai, naikkan {{ui:Tebal garis}} di {{ui:Properti}}. Untuk memberinya latar, centang {{ui:Isian}}.

Untuk mengubah kata-katanya nanti: dengan {{ui:Pilih}} aktif, klik dua kali teks, atau pilih teks lalu tekan {{key:Enter}}, atau pilih {{ui:Edit pada lembar}} di {{ui:Properti}}. Anda juga dapat mengeditnya di kotak {{ui:Teks}} pada {{ui:Properti}}.

## Panah dan garis

1. Pilih {{ui:Panah}} ({{key:A}}) atau {{ui:Garis}} ({{key:L}}).
2. Seret dari titik awal ke titik akhir. Atau klik titik awal, lepaskan, lalu klik titik akhir.
3. Tahan {{key:Shift}} untuk menjaganya pada kelipatan 45°.

Mata panah berada di ujung tempat Anda menyelesaikan.

## Persegi panjang, elips, polyline, dan poligon

- {{ui:Persegi panjang}} ({{key:R}}) dan {{ui:Elips}} ({{key:E}}): seret sebuah kotak. {{key:Shift}} membuat bujur sangkar atau lingkaran. Klik tanpa menyeret tidak menggambar apa pun dan bilah status meminta Anda menyeret.
- {{ui:Polyline}} ({{key:Y}}) dan {{ui:Poligon}} ({{key:G}}): klik titik-titik; selesaikan dengan klik dua kali, {{key:Enter}}, atau klik kanan (ketuk dua kali di layar sentuh). {{key:Backspace}} menghapus titik terakhir. Poligon menutup dirinya sendiri dan membutuhkan tiga titik; polyline membutuhkan dua titik.

## Pena dan penanda sorot

- {{ui:Pena}} ({{key:P}}): seret untuk menggambar bebas. Goresan sedikit dihaluskan saat Anda melepaskannya.
- {{ui:Sorotan}} ({{key:I}}): sama, dengan goresan kuning lebar dan tembus pandang yang mewarnai gambar di bawahnya alih-alih menutupinya.
- Tahan {{key:Shift}} saat menggambar untuk mendapatkan satu goresan lurus dari titik awal Anda.

Penanda sorot adalah goresan bebas. Ia tidak menempel pada teks di PDF.

## Warna, garis, dan isian

Ada dua cara:

- **Sebelum menggambar:** pilih alatnya. Jika tidak ada yang dipilih, {{ui:Properti}} menampilkan pengaturan "alat <tool>": {{ui:Warna}}, {{ui:Tebal garis}} (dalam poin), {{ui:Isian}} dan {{ui:Opasitas isian}} untuk bentuk tertutup, {{ui:Opasitas}}, dan {{ui:Ukuran teks}} untuk teks. Setiap markup baru dari jenis itu menggunakannya, dan MarkupCraft mengingatnya di peramban ini.
- **Setelah menggambar:** pilih satu atau beberapa markup lalu ubah kontrol yang sama di bawah "Gaya". Jika beberapa dipilih, perubahan berlaku untuk semuanya dalam satu langkah.

Default: markup merah, penanda sorot kuning, pengukuran biru, hitungan oranye, dan stempel diwarnai sesuai maknanya.

Gaya yang tersimpan dan sering Anda pakai ulang berada di peti alat: lihat [Peti alat](topic:tool-chest).

## Subjek dan komentar

Setiap markup juga memiliki {{ui:Subjek}} (label singkat seperti "Awan" atau "RFI", ditampilkan dalam daftar markup dan di penampil PDF lain) dan {{ui:Komentar}} (catatan yang lebih panjang). Isi keduanya di {{ui:Properti}}. Untuk percakapan tentang sebuah markup, gunakan balasan: lihat [Status dan balasan](topic:statuses-and-replies).

## Berikutnya

- [Pilih, pindahkan, dan ubah markup](topic:select-and-edit)
- [Stempel dan catatan](topic:stamps-and-notes)
- [Setiap jenis markup](topic:markup-types)
