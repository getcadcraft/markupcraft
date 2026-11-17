---
title: Dari perangkat lunak markup lain
summary: Cara kebiasaan program markup PDF desktop dipetakan ke MarkupCraft, dan perbedaan yang sering membuat orang keliru.
keywords: beralih, pindah, migrasi, familiar, markup PDF desktop, kotak alat, daftar markup, overlay, sesi, profil, pintasan, perbedaan
from: c8f323e1
---

Jika Anda meninjau gambar di Bluebeam Revu (atau memberi komentar pada PDF di program PDF desktop lain), sebagian besar MarkupCraft akan terasa familiar: awan, callout, kotak alat, daftar markup, status dengan balasan, pengukuran terkalibrasi, dan overlay lembar. Cara file ditangani adalah perbedaan terbesarnya, jadi baca bagian berikutnya meskipun Anda melewati sisanya.

## Lima perbedaan yang penting

1. **Simpan membuat file baru.** MarkupCraft berjalan di peramban dan tidak dapat menimpa PDF di disk Anda. {{ui:Simpan}} mengunduh "<name> (marked up).pdf", dan aslinya tetap seperti semula. Lain kali, buka salinan "(marked up)", dan rapikan salinan lama secara manual.
2. **PDF disimpan saat Anda menyimpan.** Hingga itu, salinan pemulihan di peramban ini menjaga markup Anda saat terjadi crash atau tab tertutup, dan MarkupCraft menawarkannya kembali lain kali. Itu adalah jaring pengaman: simpan PDF untuk menyimpan tinjauan.
3. **Profil Anda ada di peramban.** Nama penulis, pengaturan alat, dan kotak alat Anda disimpan di peramban ini pada komputer ini. Peramban atau komputer lain mulai dari awal, dan menghapus data situs akan menghapusnya. Ekspor kotak alat Anda sebagai cadangan. Lihat [Apa yang tersimpan di peramban ini](topic:browser-storage).
4. **Belum ada sesi bersama.** Tidak ada sesi tinjauan langsung dan bersama, dan tidak ada proyek cloud. Tinjauan berpindah dalam PDF: simpan, kirim salinannya, lalu orang berikutnya membalas dan menyimpan.
5. **Skala ditetapkan per lembar, dan hanya per lembar.** Tidak ada viewport di dalam lembar dan tidak ada "terapkan skala ini ke semua halaman". Kalibrasi setiap lembar yang Anda ukur.

## Kebiasaan demi kebiasaan

| Yang biasa Anda gunakan | Di MarkupCraft |
|---|---|
| Panel thumbnail, label halaman | {{ui:Lembar}} di sebelah kiri. Nama berasal dari label halaman atau dibaca dari kepala gambar; perbaiki dengan {{ui:Ganti nama lembar}}. |
| Membuka beberapa PDF sebagai satu set | Buka semuanya sekaligus; mereka menjadi satu daftar. Tidak ada file set yang disimpan: buka PDF yang sama lain kali. |
| Kotak alat dengan set alat | Tab {{ui:Alat}}: satu kotak per peramban, alat tersimpan dengan gaya dan subjek. Bagikan dengan {{ui:Ekspor}} dan {{ui:Impor}} sebagai file JSON. File set alat dari program lain tidak dapat diimpor. |
| Panel properti | Tab {{ui:Properti}}: status, subjek, komentar, gaya, balasan, dan item punch list dalam satu tempat. |
| Daftar markup dengan kolom | Tab {{ui:Markup}} dengan saringan untuk lembar, penulis, status, dan jenis. Ekspor CSV atau BCF. Tidak ada kolom kustom, dan belum ada ringkasan PDF atau ringkasan buku kerja. |
| Status dan kondisi tinjauan | {{ui:Status}}: Terbuka, Diterima, Ditolak, Selesai. Tidak ada set status kustom. Disimpan sebagai status tinjauan standar. |
| Balasan pada markup | Thread "Balasan" di {{ui:Properti}}, dengan perubahan status tercatat di dalamnya. Balasan yang sudah dikirim tidak dapat diedit. |
| Kalibrasi, lalu panjang, luas, hitung | {{ui:Kalibrasi}}, {{ui:Panjang}} ({{key:M}}), {{ui:Luas}} ({{key:Q}}, memberi luas dan keliling), {{ui:Hitung}} ({{key:U}}). Belum ada sudut, radius, volume, panjang polyline, atau lubang potong. |
| Overlay halaman | Tab {{ui:Bandingkan}}: merah untuk lama, biru untuk baru, sejajarkan dengan dua titik. Tidak ada pemberian awan otomatis "bandingkan dokumen". |
| Stempel | {{ui:Stempel}} dengan enam stempel bawaan dan kata-kata kustom, ditandatangani dengan nama Anda dan tanggal. Belum ada stempel gambar atau tanda tangan. |
| Pelacakan punch atau isu | Tab {{ui:Daftar periksa}}: item bernomor dengan penerima tugas, tanggal jatuh tempo, dan status; ekspor CSV. |
| Sesi kolaborasi langsung | Belum tersedia. Kirimkan PDF yang tersimpan. |
| Ratakan | Belum dibuat. Markup tetap sebagai komentar yang dapat ditampilkan dan dicetak oleh penampil lain. |
| Layer untuk markup | Belum dibuat. Gunakan subjek, penulis, dan saringan daftar untuk mengurutkan komentar. |
| Hyperlink antar lembar | Belum dibuat. |
| Spasi untuk geser, roda untuk zoom | Sama: tahan {{key:Space}} dan seret; roda zoom di penunjuk. Roda tidak pernah menggulir halaman. |

## Tombol yang berbeda

Banyak tombol satu huruf sesuai dengan dugaan Anda, tetapi periksa ini sebelum jari Anda melakukannya:

- {{key:K}} adalah {{ui:Callout}}, dan {{key:Q}} adalah {{ui:Luas}}. Jika Anda terbiasa menggunakan Q untuk callout, di sini Q akan memulai area.
- {{key:C}} adalah kotak {{ui:Awan}}; {{key:Shift+C}} adalah {{ui:Awan bebas}}.
- {{key:M}} adalah {{ui:Panjang}}, {{key:U}} adalah {{ui:Hitung}}, {{key:Y}} adalah {{ui:Polyline}}, {{key:G}} adalah {{ui:Poligon}}, {{key:I}} adalah {{ui:Sorotan}}.
- {{key:Mod+D}} menduplikasi pilihan (bukan bookmark peramban).
- {{key:Mod+Plus}} dan {{key:Mod+Minus}} men-zoom lembar, bukan halaman peramban.
- Setiap tombol dapat diubah: lihat di bawah.

:::tip
Jika jari Anda sudah terbiasa dengan Bluebeam Revu, pilih gaya menu {{ui:Peninjauan PDF}} di {{ui:Pengaturan}} › {{ui:MarkupCraft}} › {{ui:Menu, tombol, dan mouse}}: bilah menu (File, Edit, View, Document, Markup, Measure, Window) di atas deretan alat tinjauan, {{key:Q}} untuk callout, {{key:H}} untuk alat sorotan, {{key:N}} untuk poligon, dan pengukuran di {{key:Alt+Shift}} dengan sebuah huruf. Setiap tombol juga dapat diubah di sana. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).
:::

Daftar lengkapnya ada di [Keyboard dan mouse](topic:keyboard).

## Hal-hal yang bekerja berbeda dari dugaan Anda

- **Alat tetap aktif.** Setelah awan, Anda tetap menggambar awan. {{key:Esc}} sekali menghapus pilihan, dua kali kembali ke {{ui:Pilih}}.
- **Teks dan callout memerlukan teks.** Jika selesai tanpa mengetik apa pun, tidak ada markup yang ditambahkan. Catatan dibiarkan kosong.
- **Pengukuran memerlukan skala lebih dulu.** {{ui:Panjang}} dan {{ui:Luas}} beralih ke {{ui:Kalibrasi}} pada lembar yang belum dikalibrasi dan kembali setelahnya.
- **Komentar dari program lain.** Persegi panjang, elips, garis, polyline, poligon, tinta, kotak teks, dan catatan tempel yang dibuat di tempat lain menjadi markup MarkupCraft yang dapat diedit, dan ditulis ulang dengan cara MarkupCraft saat Anda menyimpan (tampilannya dapat sedikit berubah). Penyorot teks, stempel program lain, dan jenis khusus lainnya tetap hanya-baca: Anda dapat membalasnya, tetapi tidak dapat mengubahnya.
- **Karakter di luar huruf Eropa Barat** dicetak sebagai "?" di PDF yang disimpan. Lihat [Simpan PDF yang sudah diberi markup](topic:save-the-marked-up-pdf).
- **Tanggal stempel** memakai UTC, sehingga stempel yang dibuat larut malam di Amerika dapat menampilkan tanggal besok.
- **Pengukuran terbawa** sebagai komentar pengukuran standar, dan setiap lembar terkalibrasi menyimpan skalanya, sehingga program yang membaca pengukuran PDF biasanya dapat menampilkannya. Perilaku pastinya bergantung pada program tersebut.

## Menggunakan keduanya

Anda dapat bolak-balik. Komentar yang dibuat di tempat lain terbuka di MarkupCraft, dan PDF "(marked up)" terbuka di program PDF lain dengan setiap markup, balasan, dan status terlihat. Yang hanya dibaca kembali oleh MarkupCraft (penerima tugas dan tanggal jatuh tempo punch, serta status item) disimpan dalam file untuk MarkupCraft.
