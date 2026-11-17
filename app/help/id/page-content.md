---
title: Ubah garis, gambar, dan teks milik halaman
summary: Pindahkan, ubah ukuran, ubah warna, atau hapus yang digambar PDF itu sendiri, pindahkan titik garis, ganti gambar, dan ubah kata pada baris teks.
keywords: konten halaman, konten dasar, edit pdf, edit gambar, vektor, path, bentuk, garis, gambar, citra, ganti citra, teks, kata, font, titik, node, pindahkan, ubah ukuran, ubah warna, hapus, alat konten
from: 471d457e
---

Markup berada di atas lembar. Alat {{ui:Konten}} bekerja pada lembar itu sendiri: garis, gambar, dan baris teks yang digambar PDF. PDF Anda di komputer ini tidak pernah berubah: suntingan menjadi bagian dari salinan yang Anda simpan.

## Pilih apa yang diubah

1. Pilih {{ui:Konten}} di grup {{ui:Pilih}}, atau tekan {{key:B}}.
2. Di bawah {{ui:Pilih}} di {{ui:Properti}}, nyalakan atau matikan {{ui:Bentuk}}, {{ui:Gambar raster}}, dan {{ui:Teks}}. Hanya jenis yang aktif yang bisa dipilih, sehingga Anda bisa memilih teks dari gambar yang padat tanpa ikut mengambil garisnya.
3. Klik sesuatu untuk memilihnya. Shift+klik menambah atau menghapus. Seret kotak di atas kertas kosong untuk memilih beberapa: menyeret ke kanan mengambil yang sepenuhnya di dalam kotak, menyeret ke kiri mengambil yang tersentuh kotak.

Bentuk di dalam area terpotong hanya bisa dipilih di bagian yang terlihat.

## Pindahkan, ubah ukuran, ubah warna, hapus

- **Pindahkan:** seret objek yang dipilih, atau tekan tombol panah (tahan Shift untuk langkah lebih besar). Tahan Shift saat menyeret untuk bergerak lurus ke samping atau lurus ke atas.
- **Ubah ukuran:** seret salah satu dari delapan kotak di sekitar pilihan. Ia membesar atau mengecil dari sisi yang berlawanan. Tahan Shift untuk menjaga proporsinya.
- **Ubah warna:** untuk garis dan bentuk, atur {{ui:Warna garis}}, {{ui:Warna isian}}, dan {{ui:Tebal garis (pt)}} di {{ui:Properti}}.
- **Hapus:** tekan {{key:Delete}}, atau pilih {{ui:Hapus dari halaman}}.
- **Urungkan:** setiap perubahan adalah satu langkah: {{key:Mod+Z}} membatalkannya, {{key:Mod+Y}} mengembalikannya.

{{ui:Kembalikan seperti semula}} membatalkan setiap perubahan pada objek yang dipilih sekaligus; {{ui:Kembalikan halaman ini seperti semula}} melakukannya untuk seluruh halaman.

## Salin, potong, dan tempel konten halaman

Pilih garis, gambar, atau teks dengan alat {{ui:Konten}}, lalu:

- {{key:Mod+C}} menyalin, {{key:Mod+X}} memotong (menyalin dan mengeluarkannya dari halaman), {{key:Mod+D}} menempatkan salinan di sampingnya.
- {{key:Mod+V}} menempel sebagai konten halaman, di samping aslinya atau di tempat penunjuk berada (seperti yang dijelaskan [Pengaturan](topic:settings)); {{key:Mod+Shift+V}} menempel di tempat yang persis sama. Tempel di halaman lain, di PDF terbuka lain, atau di tab MarkupCraft lain di peramban ini.
- Menu grup {{ui:Edit}} dan menu klik kanan memiliki perintah yang sama.

Tempelan menyimpan garis sebagai garis, kata sebagai kata dengan font-nya sendiri, dan gambar sebagai gambar. Ia satu bagian: pindahkan, ubah ukurannya dengan kotak-kotaknya, hapus, atau {{key:Mod+Z}} untuk membatalkannya. Ia menjadi bagian dari halaman di salinan yang Anda simpan. Apa pun yang terakhir Anda salin, markup atau konten halaman, itulah yang ditempel {{key:Mod+V}}.

Isi salinan dipotong sesuai kotak di sekitar pilihan: sesuatu yang tidak dapat dibawa MarkupCraft ke dalam salinan (lihat di bawah) dan berada di dalam kotak itu ikut terbawa.

## Pindahkan titik garis

Klik dua kali garis atau kurva (atau pilih lalu pilih {{ui:Edit titik}}). Titiknya tampil sebagai kotak dan gagang kurvanya sebagai lingkaran. Seret titik atau gagang; titik membawa gagang di sebelahnya, sehingga kurva mempertahankan bentuknya di sekitarnya. Tekan {{key:Esc}}, atau klik di luar garis, saat Anda selesai.

Persegi panjang tidak memiliki titik untuk diseret: ubah ukurannya dengan kotak di sekelilingnya.

## Ganti gambar

Pilih gambar dan pilih {{ui:Ganti gambar raster…}}, lalu pilih file PNG, JPEG, atau SVG (atau PDF: halaman pertamanya). Gambar baru mengisi tempat gambar lama, dengan mempertahankan proporsinya sendiri.

## Ubah kata pada baris teks

Klik dua kali baris teks, ketik kata-kata baru di {{ui:Kata-kata}}, lalu tekan {{key:Enter}}. Kata ditulis dalam font dan ukuran baris itu sendiri, dan baris mempertahankan panjangnya, sehingga teks setelahnya tidak bergeser.

:::note
Sebagian besar PDF hanya membawa huruf yang dipakai dari setiap font. Saat Anda mengetik huruf yang tidak dimiliki salinan font di file, MarkupCraft mencetak huruf itu dalam Helvetica dan memberi tahu Anda. {{ui:Properti}} menampilkan huruf mana yang dimiliki font di file.
:::

Teks diubah satu baris pada satu waktu; teks tidak mengalir ke baris berikutnya.

## Yang dibiarkan MarkupCraft apa adanya

- **Halaman hasil pindai** adalah satu gambar: Anda bisa memindahkan, mengubah ukuran, mengganti, atau menghapus gambar, tetapi isinya tidak bisa diedit.
- **PDF terenkripsi dan bertanda tangan:** mengubah halaman akan merusak tanda tangan, jadi alat {{ui:Konten}} memberi tahu Anda dan tidak mengubah apa pun. Markup tetap bekerja.
- **Area pemotongan, objek yang terbagi antara dua bagian konten halaman, dan campuran warna yang mengisi seluruh area** tetap seperti semula; MarkupCraft memberi tahu alasannya saat Anda mencoba.
- **Kata dalam font standar yang tidak dijelaskan PDF** (seperti font Times tanpa lebar huruf di file) tidak bisa diubah, karena MarkupCraft tidak dapat mempertahankan spasi baris. Baris itu tetap bisa dipindahkan.

## Masukkan markup ke halaman

Garis, persegi panjang, elips, polyline, awan, dan goresan pena yang Anda gambar sebagai markup bisa menjadi bagian dari halaman itu sendiri: pilih markup tersebut lalu pilih {{ui:Masukkan ke halaman}} di {{ui:Properti}}. Teks, stempel, gambar, dan warna tembus pandang tetap sebagai markup.
