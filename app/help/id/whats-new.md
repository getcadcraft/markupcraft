---
title: Yang baru di 0.7
summary: RFI, submittal, dan laporan harian di tab Lapangan yang baru, dengan tenggat, yang terlambat berwarna merah, CSV dan BCF, kerja offline dan Gabungkan; asisten yang mengatur status, membalas, dan mengekspor daftar; daftar satuan yang mengikuti Pengaturan; panel yang dapat disimpan dan dialog yang dapat dipindahkan.
keywords: yang baru, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, lapangan, catatan lapangan, rfi, permintaan informasi, submittal, laporan harian, buku harian proyek, terlambat, tenggat, ditugaskan kepada saya, pin, gabungkan, offline, tablet, bcf, csv, asisten, mcp, status markup, balasan, ekspor, satuan, daftar satuan, bintang, kalibrasi, padat, panel, dialog, portugis
from: 142e1a1e
---

Ini yang berubah di MarkupCraft 0.7 dibandingkan dengan 0.6. Hal baru yang terbesar adalah catatan lapangan: RFI, submittal, dan laporan harian yang disimpan di dalam PDF di samping markup Anda.

## Baru

### RFI, submittal, dan laporan harian

- **Tab Lapangan.** Buka tab {{ui:Lapangan}} dan pilih {{ui:RFI}}, {{ui:Submittal}} atau {{ui:Laporan harian}}. Ketuk atau klik lembar tempat RFI atau submittal berada dan sebuah pin menandai tempatnya; laporan harian ditaruh di lembar yang terbuka tanpa pin ({{ui:Tempatkan pin}} menambahkannya nanti, {{ui:Pindahkan pin}} memindahkan pin mana pun). Setiap catatan punya nomornya sendiri (RFI-0001, SUB-0001, LOG-0001), judul, teks, status, penerima tugas, tenggat, utas balasan, dan daftar nama lampiran. Lihat [Lacak RFI, submittal, dan laporan harian](topic:field-records).
- **Lihat apa yang terlambat.** Saring daftar menurut tipe, status, tenggat (terlambat, jatuh tempo dalam 7 hari, punya atau tanpa tenggat), lembar ini atau semua lembar, pencarian teks, atau {{ui:Ditugaskan kepada saya}}. Catatan yang melewati tenggat dan masih menunggu ditandai **Lewat batas waktu**, berwarna merah, di daftar dan pada pinnya. Lihat [Temukan yang penting](topic:field-records#find-what-matters).
- **CSV dan BCF.** {{ui:CSV}} menulis catatan yang tercantum sebagai spreadsheet; {{ui:BCF}} menulisnya sebagai topik BCF, masing-masing dengan snapshot tempatnya di lembar. Keduanya mengikuti filter. Lihat [Ekspor](topic:field-records#export).
- **Offline, dan dua salinan dijadikan satu.** Catatan disimpan di dalam PDF dan tidak memerlukan jaringan, sehingga tablet di lokasi dapat menambah, menjawab, dan menyimpannya. Kembali di kantor, {{ui:Gabungkan}} menyatukan catatan dari salinan lain PDF yang sama menurut id-nya, sebagai satu langkah urungkan. Lihat [Simpan, offline, dan menggabungkan salinan](topic:field-records#save-offline-and-merging-copies).

### Asisten AI

- **Lebih banyak yang dapat dilakukan asisten.** Asisten Anda sendiri, yang tersambung lewat CadCraft Studio, kini dapat mengatur status markup (`markup_status`, dicatat di utasnya), membalas di utas (`markup_reply`), dan mengekspor daftar {{ui:Markup}} sebagai CSV atau BCF (`markups_export`, apa yang ditampilkan daftar beserta filternya). Setiap perubahan adalah satu langkah urungkan, ditandatangani dengan nama asisten. Lihat [Yang dapat diminta asisten](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} punya satu daftar masing-masing untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuannya (kaki survei AS adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu hilang dari daftar satuan; beri bintang pada satu satuan dan pekerjaan baru dimulai dengannya. File selalu mempertahankan satuannya sendiri. Di MarkupCraft, satuan pengukuran dan posisi di {{ui:Pengaturan}} › {{ui:MarkupCraft}} serta satuan di dialog kalibrasi mengikuti sakelar itu, bintang menentukan satuan pengukuran sampai Anda menyimpan pengaturan MarkupCraft sendiri, dan jarak sebenarnya yang Anda ketik saat kalibrasi dapat membawa tanda satuan apa pun, seperti `3 yd` atau `1.5 km`. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak yang lebih padat dan panel yang dapat disimpan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap memakai tombol besarnya). Setiap panel samping punya bilah judul tipis: seret untuk menambatkan atau mengambangkan panel, jatuhkan di bilah panel lain agar berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog pada bilah judulnya agar tidak menghalangi gambar; dialog kembali di tempat Anda meninggalkannya. Klik dua kali bilah judul untuk menengahkannya lagi. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan yang sudah dikerjakan untuk asisten Anda sendiri (merapikan gambar, mem-plot set, memeriksa gambar, bertanya kepada model, menjumlahkan takeoff, mencoba varian part…), masing-masing dengan alat yang dipanggilnya dan izin yang diperlukannya, dan masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak mengandung AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru ada di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa itu, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini memiliki setiap kata aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan dalam bahasa Inggris.
- **CadCraft Studio** menjelaskan mengapa pemeriksaan pembaruan gagal (belum ada file untuk sistem Anda, tidak ada jaringan, tanda tangan buruk) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindah ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap file di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan penginstal, pilih {{ui:Info lebih lanjut}}, lalu {{ui:Tetap jalankan}}. Di Mac, pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build untuk iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} tersimpan, tetapi belum ada kotak yang membacanya.
- Catatan lapangan tidak dibagikan dalam sesi Live CadCraft Studio (sesi Live hanya membawa markup); satukan salinan dengan {{ui:Gabungkan}}.
- Gabungkan mengambil satu catatan secara utuh dari salinan yang terakhir diubah: jika dua orang mengubah kolom berbeda dari satu catatan, kolom salinan yang lebih baru yang menang. Utas dan nama lampiran digabungkan.
- Lampiran hanya berupa nama; filenya tetap di tempatnya. Belum ada tim, notifikasi, atau proyek cloud untuk catatan, dan asisten belum punya alat untuk catatan.
- Catatan lapangan diuji di peramban pada ukuran ponsel dan tablet dengan jaringan diputus, tetapi belum dengan tangan di tablet sungguhan.
- Masih dari 0.6: memutar objek halaman ke sudut apa pun, menggambar bentuk baru langsung ke halaman, mengubah font atau ukuran satu baris, dan teks yang mengalir melewati beberapa baris. Salinan tersimpan dengan edit halaman belum dibuka di Acrobat.
- Masih dari 0.5: mengurungkan perubahan halaman (seperti menambah halaman kosong), membaca teks dari lembar hasil pindai, dan sesi Live di luar jaringan Anda sendiri.

Yang lainnya ada di [Yang belum dibuat](topic:not-built-yet).
