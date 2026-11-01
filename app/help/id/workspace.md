---
title: Tur layar
summary: Bilah alat, daftar lembar, area lembar, lima panel di kanan, dan bilah status, menurut nama di layar.
keywords: layar, tata letak, bilah alat, panel, bilah samping, gambar mini, properti, bilah status, antarmuka, layar penuh, tema, mode gelap
from: 18d82de6
---

MarkupCraft memenuhi jendela peramban. Dari atas ke bawah dan kiri ke kanan:

## Bilah paling atas

Bilah tipis di atas segalanya milik keluarga CadCraft, bukan MarkupCraft sendiri. Isinya:

- nama aplikasi dan versi yang sedang Anda jalankan,
- {{ui:Tentang MarkupCraft}}, yang membuka halaman aplikasi di situs web,
- {{ui:Bantuan}}, yang membuka bantuan ini di panel samping (atau tekan {{key:F1}}),
- {{ui:Simpan untuk offline}}, yang menyimpan MarkupCraft, pembaca dan penulis PDF-nya, serta bantuan ini di peramban ini agar terbuka tanpa koneksi; setelah itu berbunyi "Siap offline" (lihat [Bekerja offline](common:offline)),
- tombol mode layar ({{ui:Layar penuh}}), dan
- {{ui:Pengaturan}} (atau {{key:Mod+,}}), dengan tab {{ui:MarkupCraft}} untuk pengaturan aplikasi ini sendiri dan {{ui:Umum}} untuk pengaturan yang dipakai bersama semua aplikasi CadCraft (lihat [Pengaturan MarkupCraft](topic:settings)), dan
- {{ui:Kertas}} dan {{ui:Model}}, tema terang dan gelap. Di {{ui:Model}} lembar digambar terang-di-atas-gelap; markup Anda tetap memakai warnanya sendiri.

Tombol mode layar, atau {{key:Ctrl+Shift+F}}, bergantian melewati tiga mode: normal, layar penuh, dan layar penuh dengan bilah disembunyikan. Saat bilah disembunyikan, gerakkan penunjuk ke tepi atas layar (atau ketuk di sana) dan bilah meluncur kembali. Pintasan ini memakai tombol Control di semua komputer, termasuk Mac.

:::note
Di layar penuh, {{key:Esc}} juga membuat peramban keluar dari layar penuh. Jika Anda hanya bermaksud membatalkan gambar, tekan {{key:Ctrl+Shift+F}} lagi untuk kembali ke layar penuh.
:::

## Bilah alat

Di bawah bilah atas, alat dikelompokkan dan diberi label:

| Grup | Tombol |
|---|---|
| File | {{ui:Buka}}, {{ui:Simpan}}, {{ui:Tutup}} |
| Pilih | {{ui:Pilih}}, {{ui:Geser}} |
| Gambar | {{ui:Pena}}, {{ui:Sorotan}}, {{ui:Garis}}, {{ui:Panah}}, {{ui:Persegi panjang}}, {{ui:Elips}}, {{ui:Polyline}}, {{ui:Poligon}} |
| Revisi | {{ui:Awan}}, {{ui:Awan bebas}} |
| Anotasi | {{ui:Callout}}, {{ui:Teks}}, {{ui:Catatan}}, {{ui:Stempel}} |
| Ukur | {{ui:Kalibrasi}}, {{ui:Panjang}}, {{ui:Luas}}, {{ui:Hitung}} |
| Edit | {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, dan {{ui:Lainnya}}: {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat}}, {{ui:Hapus}}, {{ui:Pilih semua}}, {{ui:Batalkan pilihan}} |

Alat yang sedang Anda pakai tampak tertekan. Tahan penunjuk di atas tombol untuk melihat tombol pintasnya (misalnya "Persegi panjang (R)"); menu {{ui:Lainnya}} mencantumkan tombol setiap perintah di sebelahnya. Tombol yang tidak dapat bekerja saat ini diredupkan: {{ui:Salin}} sampai Anda memilih markup, {{ui:Tempel}} sampai ada yang disalin. Titik kecil setelah {{ui:Simpan}} berarti sebagian markup belum disimpan. Daftar lengkap tombol ada di [Keyboard dan mouse](topic:keyboard).

Alat tetap aktif setelah Anda menggambar dengannya, sehingga Anda dapat menggambar beberapa awan berturut-turut. Tekan {{key:Esc}} (dua kali jika markup baru masih terpilih) atau {{key:V}} untuk kembali ke {{ui:Pilih}}.

## Daftar lembar (kiri)

{{ui:Lembar}} mendaftar setiap halaman dari setiap PDF yang terbuka. Setiap baris menunjukkan gambar kecil lembar, namanya, nomor lembar atau file dan halamannya, serta jumlah markupnya. Angka setelah judul adalah jumlah lembar.

- Klik sebuah baris untuk menampilkan lembar itu.
- Ketik di {{ui:Cari lembar}} untuk menyaring menurut nama lembar, nomor lembar, atau nama file. Tekan {{key:Enter}} untuk membuka kecocokan pertama.

Nama lembar berasal dari PDF jika ada. Lihat [Buka set gambar dan berpindah antarlembar](topic:open-a-plan-set).

## Area lembar (tengah)

Lembar yang sedang Anda kerjakan. Sebelum ada yang dibuka, area ini menampilkan "Buka set gambar" dengan tombol {{ui:Buka PDF}}. Jatuhkan PDF di mana saja di sini untuk membukanya.

Di bawah lembar, bilah sempit berisi:

- panah lembar sebelumnya dan berikutnya, dan "3 dari 12: A-101 — Denah lantai" (tahan penunjuk di atasnya untuk melihat file dan halamannya),
- zoom keluar, kotak zoom (ketik persentase dan tekan {{key:Enter}}; 100% adalah ukuran sebenarnya di layar umum), zoom masuk,
- {{ui:Paskan halaman}} dan {{ui:Paskan lebar}}.

Setiap lembar mengingat zoom-nya sendiri selama set terbuka.

Saat Anda membandingkan dua lembar, legenda muncul di sini: "Hanya di lembar lama", "Hanya di lembar baru" dan "Di keduanya". Lihat [Bandingkan dua revisi](topic:compare-revisions).

## Panel (kanan)

Lima tab:

| Tab | Yang ditampilkan |
|---|---|
| {{ui:Properti}} | Markup yang dipilih: penulis, tanggal, nilai terukur, status, subjek, teks, komentar, gaya, balasannya, dan item daftar periksanya. Dengan alat gambar aktif dan tidak ada yang dipilih, pengaturan yang akan dipakai markup baru. Dengan tidak ada yang dipilih dan {{ui:Pilih}} aktif, lembar: nomor, judul, dari mana nama dibaca, ukuran kertas, skala, dan {{ui:Ganti nama lembar}}. |
| {{ui:Markup}} | Setiap markup di set yang terbuka, dengan filter, dan ekspor {{ui:CSV}} dan {{ui:BCF}}. Lihat [Daftar markup](topic:markups-list-and-export). |
| {{ui:Daftar periksa}} | Item daftar periksa bernomor dengan penerima tugas, tenggat, dan status. Lihat [Buat daftar periksa](topic:punch-list). |
| {{ui:Alat}} | Kotak alat: alat tersimpan yang bergaya. Lihat [Kotak alat](topic:tool-chest). |
| {{ui:Bandingkan}} | Tumpuk dua lembar. Lihat [Bandingkan dua revisi](topic:compare-revisions). |

## Bilah status (bawah)

- Di kiri, posisi penunjuk di lembar, dalam inci (atau milimeter, di [Pengaturan](topic:settings)) pada kertas.
- Di tengah, pesan: apa yang diharapkan alat selanjutnya, apa yang baru disimpan, mengapa sesuatu ditolak. **Bacalah saat sesuatu tidak terjadi.**
- Tombol skala lembar ("Belum dikalibrasi", atau skalanya). Klik untuk mengatur skala. Lihat [Kalibrasi lembar dan ukur](topic:calibrate-and-measure).
- Nama Anda ("Atur nama Anda" sampai Anda memberikannya). Klik untuk mengubahnya.

## Di layar kecil

Di bawah lebar sekitar 1180 piksel, panel menjadi lebih sempit dan gambar lembar mengecil. Di layar seukuran ponsel, bagian-bagiannya bertumpuk: bilah alat (gulir ke samping), lembar, bilah status, panel, lalu daftar lembar di bagian bawah. Tablet dalam posisi lanskap mempertahankan tata letak penuh.
