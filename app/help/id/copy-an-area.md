---
title: Salin area halaman, atau overlay
summary: Salin sebagian lembar dengan persegi panjang, elips, atau bentuk bebas, lalu tempelkan ke lembar lain, CadCraft, BimCraft, DetailCraft, atau program apa pun, pada ukurannya; salin sebagai overlay tembus pandang, dan sejajarkan gambar dengan dua titik.
keywords: salin area, area, pangkas, cuplik, snapshot, klip, wilayah, persegi panjang, elips, lingkaran, bentuk bebas, laso, gambar, png, overlay, transparan, tembus pandang, rona, opasitas, tempel, ukuran sebenarnya, skala, sejajarkan, dua titik, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Pilih {{ui:Lainnya}} › {{ui:Salin area halaman…}}. Sebuah bilah terbuka di atas lembar.

## Pilih area

Pilih {{ui:Persegi panjang}}, {{ui:Elips}}, atau {{ui:Bebas}} di bilah, lalu seret di lembar:

- **Persegi panjang:** seret kotak di sekitar bagian yang akan disalin.
- **Elips:** seret kotak; elips di dalamnya yang disalin, dan sudut di luarnya tembus pandang.
- **Bebas:** gambar di sekitar bagian yang akan disalin; bentuk itu menutup sendiri. Di luarnya tembus pandang.

Seret lagi untuk mulai ulang, atau tekan {{key:Esc}}.

## Salin

- {{ui:Sertakan markup}} menyalin markup Anda bersama halaman; hapus centangnya untuk gambar yang bersih.
- {{ui:Resolusi}}: {{ui:Seperti di layar}}, 72, 150, atau 300 dpi. Gambar dijaga di bawah 3 MB; jika area besar pada resolusi tinggi akan melampaui itu, resolusinya diturunkan dan baris status menyatakan ke berapa.
- {{ui:Salin}} (atau {{key:Mod+C}} atau {{key:Enter}}) menaruh area di papan klip sebagai gambar PNG, yang dapat ditempel ke Word, email, program PDF lain, dan program gambar.
- {{ui:Simpan sebagai PNG}} mengunduh gambar sebagai gantinya, untuk program yang menghilangkan bagian tembus pandang saat tempel.

## Salin sebagai overlay

{{ui:Salin sebagai overlay}} juga membuat kertas putih menjadi tembus pandang, sehingga hanya garisnya yang tersisa. {{ui:Warna}} memberi setiap garis satu warna (merah, biru, hijau, oranye, atau ungu) agar overlay menonjol dari gambar di bawahnya; {{ui:Warna asli}} mempertahankannya. {{ui:Kekuatan}} adalah seberapa kuat overlay dimulai saat ditempel di aplikasi kami (50% kecuali Anda mengubahnya).

## Tempel

**Di MarkupCraft**, {{key:Mod+V}} pada lembar mana pun menempelkan area sebagai markup gambar di penunjuk. Area itu masuk dengan ukurannya:

- di kertas, ukuran yang sama seperti di lembar asalnya;
- ketika kedua lembar memiliki skala, ukuran yang sama di gambar: area dari lembar 1:50 masuk dengan setengah ukuran kertasnya pada lembar 1:100.

Overlay dimulai dengan kekuatannya; ubah dengan {{ui:Opasitas}} di {{ui:Properti}}. Pindahkan, ubah ukuran, kunci, dan hapus seperti gambar biasa, dan centang {{ui:Ratakan ke halaman saat disimpan}} untuk menggambarnya ke dalam halaman.

**Di CadCraft, BimCraft, dan DetailCraft**, salinan juga mengetahui ukurannya, sehingga tempel masuk pada ukuran nyata gambar jika lembar memiliki skala, atau meminta skala jika tidak. Lihat bantuan setiap aplikasi tentang gambar.

## Sejajarkan gambar dengan dua titik

Pilih satu gambar atau overlay, lalu pilih {{ui:Lainnya}} › {{ui:Sejajarkan gambar raster dengan dua titik}}:

1. Klik sebuah titik pada gambar.
2. Klik di tempat titik itu harus berada.
3. Klik titik kedua pada gambar, jauh dari yang pertama.
4. Klik di tempat titik itu harus berada.

Gambar diskalakan, dipindahkan, dan diputar sehingga kedua titik mendarat di tempat Anda mengklik. {{key:Esc}} berhenti; {{key:Mod+Z}} membatalkannya dalam satu langkah.

## Yang perlu diketahui

- Ukuran ikut dengan salinan hanya antar aplikasi kami di situs yang sama, dan hanya untuk salinan yang dibuat dalam beberapa jam terakhir; program lain mendapat gambar biasa.
- Jika peramban tidak mengizinkan MarkupCraft menggunakan papan klip sistem, baris status akan menyatakannya: tempel di aplikasi kami tetap berfungsi, dan {{ui:Simpan sebagai PNG}} berfungsi untuk program lain.
- Penyejajaran memutar gambar dengan menggambar ulang pikselnya, sehingga gambar yang diputar sedikit lebih lembut daripada aslinya.
