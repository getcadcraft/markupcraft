---
title: Tukar garisan, gambar dan teks halaman itu sendiri
summary: Alih, ubah saiz, tukar warna atau padam apa yang dilukis oleh PDF itu sendiri, alihkan titik garisan, gantikan gambar, dan tukar perkataan bagi satu baris teks.
keywords: kandungan halaman, kandungan asas, edit pdf, edit lukisan, vektor, laluan, bentuk, garisan, gambar, imej, gantikan imej, teks, perkataan, fon, titik, nod, alih, ubah saiz, tukar warna, padam, alat kandungan
from: 471d457e
---

Markup berada di atas helaian. Alat {{ui:Kandungan}} berfungsi pada helaian itu sendiri: garisan, gambar dan baris teks yang dilukis oleh PDF. PDF anda pada komputer ini tidak pernah diubah: suntingan ialah sebahagian daripada salinan yang anda simpan.

## Pilih apa yang hendak ditukar

1. Pilih {{ui:Kandungan}} dalam kumpulan {{ui:Pilih}}, atau tekan {{key:B}}.
2. Di bawah {{ui:Pilih}} dalam {{ui:Sifat}}, hidupkan atau matikan {{ui:Bentuk}}, {{ui:Gambar}} dan {{ui:Teks}}. Hanya jenis yang dihidupkan boleh dipilih, jadi anda boleh memilih teks lukisan yang sibuk tanpa turut menangkap garisannya.
3. Klik sesuatu untuk memilihnya. Shift+klik menambah atau mengeluarkan. Seret kotak di atas kertas kosong untuk memilih beberapa objek: menyeret ke kanan mengambil apa yang berada sepenuhnya dalam kotak, menyeret ke kiri mengambil apa sahaja yang disentuhnya.

Bentuk di dalam kawasan terpangkas hanya dipilih di tempat ia kelihatan.

## Alih, ubah saiz, tukar warna, padam

- **Alih:** seret objek yang dipilih, atau tekan kekunci anak panah (tahan Shift untuk langkah yang lebih besar). Tahan Shift semasa menyeret untuk bergerak lurus merentasi atau lurus ke atas.
- **Ubah saiz:** seret salah satu daripada lapan petak di sekeliling pilihan. Ia membesar atau mengecil dari sisi bertentangan. Tahan Shift untuk mengekalkan nisbah.
- **Tukar warna:** untuk garisan dan bentuk, tetapkan {{ui:Warna garisan}}, {{ui:Warna isian}} dan {{ui:Lebar garisan (pt)}} dalam {{ui:Sifat}}.
- **Padam:** tekan {{key:Delete}}, atau pilih {{ui:Padam daripada halaman}}.
- **Buat asal:** setiap perubahan ialah satu langkah: {{key:Mod+Z}} membatalkannya, {{key:Mod+Y}} mengembalikannya.

{{ui:Kembalikan seperti asal}} membatalkan setiap perubahan kepada objek yang dipilih sekaligus; {{ui:Kembalikan halaman ini seperti asal}} melakukannya untuk seluruh halaman.

## Salin, potong dan tampal kandungan halaman

Pilih garisan, gambar atau teks dengan alat {{ui:Kandungan}}, kemudian:

- {{key:Mod+C}} menyalin, {{key:Mod+X}} memotong (menyalin dan mengeluarkannya daripada halaman), {{key:Mod+D}} meletakkan salinan di sebelahnya.
- {{key:Mod+V}} menampal sebagai kandungan halaman, di sebelah asal atau di tempat penuding berada (seperti yang dinyatakan dalam [Tetapan](topic:settings)); {{key:Mod+Shift+V}} menampal di tempat yang tepat sama. Tampal pada halaman lain, dalam PDF lain yang terbuka, atau dalam tab MarkupCraft lain pada pelayar ini.
- Menu kumpulan {{ui:Sunting}} dan menu klik kanan mempunyai arahan yang sama.

Tampalan mengekalkan garisan sebagai garisan, perkataan sebagai perkataan dalam fonnya sendiri, dan gambar sebagai gambar. Ia ialah satu bahagian: alihkannya, ubah saizkannya melalui petaknya, padamkannya, atau {{key:Mod+Z}} untuk membuangnya. Ia menjadi sebahagian daripada halaman dalam salinan yang anda simpan. Apa sahaja yang anda salin terakhir, sama ada markup atau kandungan halaman, itulah yang {{key:Mod+V}} tampal.

Kandungan salinan dipangkas mengikut kotak di sekeliling pilihan: sesuatu yang MarkupCraft tidak dapat ambil daripada salinan (lihat di bawah) dan yang berada dalam kotak itu turut dibawa.

## Alih titik garisan

Klik dua kali pada garisan atau lengkung (atau pilih dan pilih {{ui:Sunting titik}}). Titiknya ditunjukkan sebagai petak dan pemegang lengkungnya sebagai bulatan. Seret titik atau pemegang; titik membawa pemegang di sebelahnya bersamanya, supaya lengkung mengekalkan bentuknya di sekelilingnya. Tekan {{key:Esc}}, atau klik di luar garisan, apabila anda selesai.

Segi empat tepat tidak mempunyai titik untuk diseret: ubah saizkannya dengan petak di sekelilingnya.

## Gantikan gambar

Pilih gambar dan pilih {{ui:Gantikan gambar…}}, kemudian pilih fail PNG, JPEG atau SVG (atau PDF: halaman pertamanya). Gambar baharu mengisi tempat yang lama, dengan mengekalkan nisbahnya sendiri.

## Tukar perkataan bagi baris teks

Klik dua kali pada baris teks, taip perkataan baharu dalam {{ui:Perkataan}} dan tekan {{key:Enter}}. Perkataan ditulis dalam fon dan saiz baris itu sendiri, dan baris itu mengekalkan panjangnya, jadi teks selepasnya tidak bergerak.

:::note
Kebanyakan PDF hanya membawa huruf yang digunakan daripada setiap fon. Apabila anda menaip huruf yang salinan fon fail itu tidak ada, MarkupCraft mencetak huruf itu dalam Helvetica dan memberitahu anda begitu. {{ui:Sifat}} menunjukkan huruf mana yang ada dalam fon fail itu.
:::

Teks ditukar satu baris pada satu masa; ia tidak mengalir ke baris seterusnya.

## Apa yang MarkupCraft biarkan

- **Halaman yang diimbas** ialah satu gambar: anda boleh mengalih, mengubah saiz, menggantikan atau memadam gambar itu, tetapi apa yang ada di dalamnya tidak boleh disunting.
- **PDF yang disulitkan dan ditandatangani:** menukar halaman akan memecahkan tandatangan, jadi alat {{ui:Kandungan}} memberitahu anda dan tidak menukar apa-apa. Markup masih berfungsi.
- **Kawasan pemangkasan**, objek yang dibahagikan antara dua bahagian kandungan halaman, dan campuran warna yang mengisi seluruh kawasan kekal seperti sediakala; MarkupCraft memberitahu sebabnya apabila anda mencubanya.
- **Perkataan dalam fon standard yang PDF tidak huraikan** (seperti fon Times tanpa lebar huruf dalam fail) tidak boleh ditukar, kerana MarkupCraft tidak dapat mengekalkan jarak baris. Baris itu masih boleh dialihkan.

## Letakkan markup ke dalam halaman

Garisan, segi empat tepat, elips, polygaris, awan dan goresan pen yang anda lukis sebagai markup boleh menjadi sebahagian daripada halaman itu sendiri: pilih mereka dan pilih {{ui:Letakkan ke dalam halaman}} dalam {{ui:Sifat}}. Teks, cop, gambar dan warna lutsinar kekal sebagai markup.
