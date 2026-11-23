---
title: Yang baru di 0.7 (sebelumnya)
summary: RFI, submittal, dan laporan harian di tab Lapangan yang baru, dengan tanggal jatuh tempo, lewat batas waktu dalam merah, CSV dan BCF, kerja offline dan Gabungkan; asisten yang mengatur status, membalas, dan mengekspor daftar; daftar satuan yang mengikuti Pengaturan; panel yang merapikan diri dan dialog yang dapat dipindah.
keywords: yang baru 0.7, rilis sebelumnya, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, lapangan, catatan lapangan, rfi, permintaan informasi, submittal, laporan harian, buku harian lokasi, lewat batas waktu, tanggal jatuh tempo, ditugaskan kepada saya, pin, gabungkan, offline, tablet, bcf, csv, asisten, mcp, status markup, balasan, ekspor, satuan, daftar satuan, bintang, kalibrasi, padat, panel, dialog, portugis
from: ca5ba1f0
---

Ini yang berubah di MarkupCraft 0.7, dibandingkan dengan 0.6. Hal baru yang besar adalah catatan lapangan: RFI, submittal, dan laporan harian yang disimpan di dalam PDF, di samping markup Anda.

## Baru

### RFI, submittal, dan laporan harian

- **Tab Lapangan.** Buka tab {{ui:Lapangan}} dan pilih {{ui:RFI}}, {{ui:Submittal}}, atau {{ui:Laporan harian}}. Ketuk atau klik lembar tempat RFI atau submittal seharusnya berada, dan sebuah pin menandai tempatnya; laporan harian ditaruh pada lembar yang terbuka tanpa pin ({{ui:Tempatkan pin}} menambahkannya nanti, {{ui:Pindahkan pin}} memindahkan pin apa pun). Setiap catatan memiliki nomornya sendiri (RFI-0001, SUB-0001, LOG-0001), judul, teks, status, penerima tugas, tanggal jatuh tempo, utas balasan, dan daftar nama lampiran. Lihat [Lacak RFI, submittal, dan laporan harian](topic:field-records).
- **Lihat yang terlambat.** Saring daftar menurut tipe, status, tanggal jatuh tempo (lewat batas waktu, jatuh tempo dalam 7 hari, punya atau tidak punya tanggal jatuh tempo), lembar ini atau semua lembar, pencarian teks, atau {{ui:Ditugaskan kepada saya}}. Catatan yang sudah lewat tanggal jatuh temponya dan masih menunggu ditandai **Lewat batas waktu**, dengan warna merah, di daftar dan pada pinnya. Lihat [Temukan yang penting](topic:field-records#find-what-matters).
- **CSV dan BCF.** {{ui:CSV}} menulis catatan yang didaftar sebagai spreadsheet; {{ui:BCF}} menulisnya sebagai topik BCF, masing-masing dengan jepretan tempatnya pada lembar. Keduanya mengikuti filter. Lihat [Ekspor](topic:field-records#export).
- **Offline, dan dua salinan menjadi satu.** Catatan disimpan di dalam PDF dan tidak memerlukan jaringan, sehingga tablet di lokasi dapat menambahkan, menjawab, dan menyimpannya. Kembali di kantor, {{ui:Gabungkan}} menggabungkan catatan dari salinan lain dari PDF yang sama berdasarkan id-nya, sebagai satu langkah urungkan. Lihat [Simpan, offline, dan menggabungkan salinan](topic:field-records#save-offline-and-merging-copies).

### Asisten AI

- **Lebih banyak yang bisa dilakukan asisten.** Asisten Anda sendiri, yang terhubung lewat CadCraft Studio, kini dapat mengatur status markup (`markup_status`, dicatat di utasnya), membalas di utas (`markup_reply`), dan mengekspor daftar {{ui:Markup}} sebagai CSV atau BCF (`markups_export`, yaitu apa yang ditampilkan daftar dengan filternya). Setiap perubahan adalah satu langkah urungkan, ditandatangani dengan nama asisten. Lihat [Apa yang dapat diminta asisten](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar masing-masing untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuannya (kaki survei AS, US survey foot, adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu keluar dari daftar; beri bintang pada satu satuan dan pekerjaan baru dimulai dengannya. File selalu menyimpan satuannya sendiri. Di MarkupCraft, satuan pengukuran dan posisi di {{ui:Pengaturan}} › {{ui:MarkupCraft}} serta satuan di dialog kalibrasi mengikuti sakelar; bintang menetapkan satuan pengukuran sampai Anda menyimpan pengaturan MarkupCraft sendiri; dan jarak nyata yang Anda ketik saat kalibrasi dapat memakai tanda satuan apa pun, seperti `3 yd` atau `1.5 km`. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak lebih rapat dan panel yang merapikan diri.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap mempertahankan tombol besarnya). Setiap panel samping memiliki bilah judul yang ramping: seret untuk menambatkan atau mengambangkan panel, jatuhkan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindah.** Seret dialog dengan bilah judulnya agar tidak menghalangi gambar; dialog itu kembali ke tempat terakhir Anda meninggalkannya. Klik dua kali bilah judul untuk memusatkannya lagi. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan yang sudah dikerjakan untuk asisten Anda sendiri (merapikan gambar, mencetak set, memeriksa gambar, mengajukan pertanyaan tentang model, menjumlahkan takeoff, mencoba varian part…), masing-masing dengan alat yang dipanggilnya dan izin yang dibutuhkannya, dan masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak mengandung AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Português (Portugal) ini, **Português (Brasil)**, **Español (México)**, dan **Bahasa Indonesia** kini memiliki setiap kata aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan tersedia dalam bahasa Inggris.
- **CadCraft Studio** menyebutkan alasan pemeriksaan pembaruan gagal (belum ada berkas untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan dan paket Microsoft Store dipindah ke 0.8 karena validasi sertifikatnya belum selesai. Periksa SHA-256 di samping setiap berkas di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan installer, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, untuk pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build untuk iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} disimpan, tetapi belum ada kotak yang membacanya.
- Catatan lapangan tidak dibagikan dalam sesi live CadCraft Studio (sesi live hanya membawa markup); bawa salinan bersama-sama dengan {{ui:Gabungkan}}.
- Gabungkan mengambil catatan secara utuh dari salinan yang terakhir diubah: jika dua orang mengubah kolom yang berbeda dari satu catatan, kolom dari salinan yang lebih baru yang berlaku. Utas dan nama lampiran digabungkan.
- Lampiran hanya berupa nama; berkasnya tetap di tempatnya. Tidak ada tim, notifikasi, atau proyek cloud untuk catatan, dan asisten belum memiliki alat untuk catatan.
- Catatan lapangan telah diuji di peramban pada ukuran ponsel dan tablet dengan jaringan diputus, tetapi belum dicoba langsung di tablet sungguhan.
- Masih dari 0.6: memutar objek halaman ke sudut mana pun, menggambar bentuk baru langsung ke halaman, mengubah font atau ukuran garis, dan teks yang mengalir lewat beberapa baris. Salinan yang disimpan dengan perubahan halaman belum pernah dibuka di Acrobat.
- Masih dari 0.5: membatalkan perubahan halaman (seperti menambahkan halaman kosong), membaca teks dari lembar hasil pindai, dan sesi live di luar jaringan Anda sendiri.

Yang lain ada di [Yang belum dibuat](topic:not-built-yet).
