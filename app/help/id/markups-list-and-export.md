---
title: Daftar markup, filter, dan ekspor
summary: Lihat setiap markup dalam set, saring menurut lembar, pembuat, status, dan tipe, lompat ke satu markup, dan ekspor daftar sebagai CSV atau BCF.
keywords: daftar markup, daftar, ringkasan, xlsx, buku kerja spreadsheet, buku kerja, laporan pdf, impor bcf, filter, urutkan, laporan, ekspor, csv, spreadsheet, bcf, bcfzip, isu, daftar komentar, lompat
from: 6c70261e
---

## Membuka daftar

Pilih tab {{ui:Markup}} di sebelah kanan. Setiap markup dari setiap berkas yang terbuka dicantumkan, diurutkan menurut lembar lalu menurut urutan pembuatannya. Setiap baris menampilkan:

- ikon dengan warna markup, nomor punch-nya jika ada ("#4"), dan subjeknya,
- teksnya, kata-kata stempel, atau nilai terukurnya, serta komentarnya,
- lembar, pembuat, dan tanggalnya,
- statusnya (atau "Hanya baca" untuk komentar yang datang bersama berkas), dan jumlah balasan jika ada balasan.

Baris di atas daftar menghitungnya: "38 markup", atau "12 dari 38 markup" jika disaring.

## Lompat ke sebuah markup

Klik sebuah baris. MarkupCraft menampilkan lembar itu, memilih markupnya, dan melakukan zoom ke sana jika berada di luar layar atau terlalu kecil untuk dilihat. {{ui:Properti}} memuat detail dan utasnya saat Anda kembali ke tab itu.

## Saring

Empat menu di atas daftar. Keempatnya dapat dikombinasikan.

| Menu | Pilihan |
|---|---|
| {{ui:Lembar}} | Semua lembar, Lembar ini (mengikuti Anda saat Anda berpindah lembar), atau lembar mana pun yang memiliki markup |
| {{ui:Pembuat}} | Siapa saja, atau setiap pembuat dalam set |
| {{ui:Status}} | Status apa pun, Open, Accepted, Rejected, Completed |
| {{ui:Tipe}} | Tipe apa pun, atau setiap jenis markup dalam set |

Contoh:

- Yang masih terbuka di lembar ini: {{ui:Lembar}} "Lembar ini", {{ui:Status}} "Open".
- Komentar dari satu konsultan: {{ui:Pembuat}} nama mereka.
- Semua pengukuran: {{ui:Tipe}} "Length" atau "Area".

Daftar menampilkan hingga 2000 baris; persempit dengan filter pada set yang sangat besar.

## Ekspor ke CSV

Pilih {{ui:CSV}} di bagian atas tab. Anda akan mendapatkan "<name> markups.csv" dengan **markup sebagaimana disaring saat ini**, satu per baris, dengan kolom berikut:

No. punch, Lembar, Berkas, Halaman, Tipe, Subjek, Teks, Komentar, Pengukuran, Pembuat, Dibuat, Diubah, Status, Balasan, Balasan terakhir, Warna, Hanya baca.

- "Teks" berisi kata-kata dari kotak teks dan callout, kata-kata stempel, atau nama grup hitungan.
- "Pengukuran" berisi panjang, "luas, keliling" untuk area, dan "grup: n" untuk hitungan.
- Tanggal berupa cap waktu lengkap dalam UTC.

Untuk mengekspor semuanya, atur setiap filter kembali ke pilihan pertamanya terlebih dahulu.

## Legenda pada lembar

{{ui:Legenda}} di tab {{ui:Markup}} menempatkan legenda di pojok kanan atas dari apa yang Anda lihat: kotak yang mencantumkan setiap jenis markup pada lembar (menurut subjek dan warna, misalnya "Awan", "Pertanyaan", atau "Stopkontak") beserta jumlahnya. Grup hitungan dihitung menurut tandanya. Legenda terus menghitung saat Anda menggambar, memindahkan, atau menghapus markup, dan tercetak serta tersimpan bersama hitungan pada saat itu.

Pindahkan dan ubah ukurannya seperti markup lainnya. Di {{ui:Properti}}-nya, ubah {{ui:Judul}}-nya, atau atur {{ui:Hitungan}} ke {{ui:Seluruh set}} untuk menghitung setiap lembar. Spasi, legenda lain, dan komentar dari program lain tidak dihitung.

## Kolom Anda sendiri, dan pengurutan

{{ui:Kolom}} di tab {{ui:Markup}} menambahkan kolom milik Anda ke setiap markup: **teks**, **pilihan** (seperti Trade: Mechanical, Electrical, Plumbing), **angka** (seperti Biaya), atau **tanggal**. Beri nama masing-masing, pilih jenisnya, cantumkan pilihan untuk kolom pilihan, lalu pilih {{ui:Simpan kolom}}.

- Isi kolom tersebut di bawah {{ui:Properti}}: setiap kolom memiliki isian di sana. Kolom angka hanya menerima angka, kolom tanggal hanya menerima tanggal.
- Daftar menampilkan nilai di bawah setiap markup, filter {{ui:Kolom}} memilih satu nilai (atau markup yang nilainya kosong), dan {{ui:Urutkan}} mengurutkan daftar menurut kolom, menurut pembuat, status, jenis, atau tanggal, alih-alih menurut lembar.
- Ekspor CSV dan XLSX membawa kolom-kolom tersebut setelah kolom biasa. Kolom disimpan bersama PDF dan kembali saat Anda membukanya lagi.

## Ekspor ringkasan: buku kerja atau PDF

- {{ui:XLSX}} mengunduh "<name> markup summary.xlsx" dengan tiga lembar: **Markup** (satu baris per markup dalam daftar, kolomnya sama dengan CSV), **Per lembar** (berapa markup yang dimiliki setiap lembar, terbuka dan tertutup, dan berapa banyak dari setiap jenis, dengan total) dan **Daftar periksa** (jika ada item punch).
- {{ui:PDF}} mengunduh "<name> markup summary.pdf": laporan untuk dicetak atau dikirim, dengan nama set, tanggal, dan tabel markup dalam daftar (nomor, lembar, jenis, subjek, teks atau komentar, nilai terukur, pembuat, status, dan balasan terakhir). Teks panjang dibungkus; header tabel diulang di setiap halaman.

Keduanya mengambil daftar sebagaimana disaring, jadi saring terlebih dahulu untuk melaporkan satu lembar, satu pembuat, atau hanya item yang masih terbuka.

## Ekspor ke BCF

Pilih {{ui:BCF}}. MarkupCraft membuat gambar setiap markup dalam daftar pada lembarnya ("Membuat cuplikan untuk BCF (3 dari 12)…"), lalu mengunduh "<name> markups.bcfzip". Setiap markup menjadi satu topik BCF dengan statusnya, pembuat, tanggal, balasan sebagai komentar, penerima dan tanggal tenggat dari item punch-nya, serta cuplikannya.

Gunakan ini untuk membawa komentar peninjauan gambar ke alat koordinasi BIM yang membaca BCF. Apa yang ikut terbawa dan apa yang tidak tercantum dalam [Dasar-dasar BCF](topic:bcf-basics).

## Impor BCF

{{ui:Impor BCF}} membaca berkas .bcfzip (atau .bcf) dari alat BIM:

- Isu yang berasal dari ekspor BCF MarkupCraft sendiri menemukan kembali markupnya: balasan baru ditambahkan ke utas, dan status baru diatur (Closed dihitung sebagai Completed). Balasan yang sudah ada tidak ditambahkan dua kali.
- Isu lain menjadi catatan, dengan judul, deskripsi, pembuat, dan komentarnya. Catatan ditempatkan pada lembar yang nomor atau namanya disebut label isu, jika tidak pada lembar yang terbuka; kamera BIM tidak memiliki tempat di atas kertas, sehingga catatan seperti itu ditumpuk di pojok kiri atas lembar agar Anda pindahkan.

Seluruh impor adalah satu langkah: {{key:Mod+Z}} membatalkannya. Lihat [Dasar-dasar BCF](topic:bcf-basics).

## Yang belum dapat dilakukan daftar

- Mengelompokkan daftar (urutkan, lalu saring, sebagai gantinya).
- Mengedit nilai dalam daftar (edit di {{ui:Properti}}; bidang punch dapat diedit di tab {{ui:Daftar periksa}}).
