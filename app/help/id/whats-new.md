---
title: Yang baru di 0.8 dan 0.8.1
summary: Markup yang menjadi tugas dan menutup sendiri, daftar biasa tentang apa yang berubah antarrevisi, catatan suara dan keputusan pada rencana, file redline untuk drafter, serta perubahan 0.8 yang dipakai bersama: perangkat input, baris bilah alat, Masalah, lebih banyak bahasa.
keywords: yang baru, what's new, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, tugas, tasks, penerima tugas, hari jatuh tempo, lewat batas waktu, periksa sekarang, apa yang berubah, revisi, bandingkan, catatan suara, keputusan, redline, file jawaban, drafter, asisten, mcp, masalah, bahasa, perangkat input, trackpad, baris bilah alat, kisi properti, perbarui
from: 40368796
---

Ini yang berubah di MarkupCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. Hal baru yang paling besar adalah markup bisa menjadi tugas yang dikerjakan seseorang, atau asisten Anda sendiri, dan tugas itu menutup sendiri saat gambar benar-benar berubah.

## Baru

### Markup yang bekerja

- **Jadikan markup sebagai tugas.** Pilih satu atau lebih markup, buka tab {{ui:Tasks}} lalu pilih {{ui:Make selected a task}}. Tugas memiliki judul, orang atau asisten Anda yang terhubung untuk mengerjakannya, hari jatuh tempo opsional dan status, serta tetap berada di posisinya pada lembar dan utasnya. Lihat [Jadikan markup sebagai tugas](topic:markups-that-act).
- **Tugas yang menutup sendiri.** Tugas dapat memantau gambar di dalam markup-nya. Buka revisi lembar yang lebih baru lalu pilih {{ui:Check now}}: jika garis di area itu berubah lebih dari sedikit, tugas ditandai Selesai, markup-nya menjadi Tuntas, dan catatan di utas menjelaskan apa yang berubah. Cap tanggal baru, atau garis yang bergeser kurang dari 1.5 poin, tidak dihitung. Sebagai gantinya, tugas dapat memantau elemen model: asisten Anda melaporkan elemen dengan `tasks_check`, dan laporan berikutnya yang berbeda, atau elemen yang dihapus, menutup tugas. Satu langkah urungkan akan membukanya kembali.
- **Temukan pekerjaannya.** Saring daftar {{ui:Tasks}} menurut status dan untuk siapa tugas itu, termasuk {{ui:Overdue}}; pilih {{ui:Assigned to}}, lalu {{ui:Assistant}} untuk melihat apa yang menunggu asisten Anda. Tugas yang melewati hari jatuh temponya tampil sebagai peringatan di panel Masalah. {{ui:CSV}} mengekspor daftar. Tugas disimpan di PDF bersama markup dan ikut berpindah melalui Live seperti properti markup lainnya.

### Apa yang berubah, sebagai daftar biasa

- **Daftarkan perubahan.** Buka tab {{ui:Compare}}, lalu {{ui:Compare a whole set}}, pilih file yang lebih lama dan yang lebih baru lalu pilih {{ui:List the changes}}. Daftar dimulai dengan jumlah, lalu mencakup setiap lembar yang berubah, yang perubahannya paling besar lebih dulu: di mana letaknya pada lembar, seberapa besar (dalam satuan sebenarnya serta inci kertas pada lembar yang dikalibrasi), apakah garis ditambahkan atau dihapus, berapa banyak markup yang ada di sana, dan kata mana yang muncul atau hilang. {{ui:Copy the list}} menempatkannya di papan klip, dan {{ui:CSV}} menulis satu baris untuk setiap perubahan. Lihat [Daftarkan apa yang berubah antarrevisi](topic:what-changed-in-words).

### Catatan suara dan keputusan

- **Catatan suara.** Di tab {{ui:Notes}} pilih {{ui:Record a voice note}}, lalu {{ui:Stop recording}}; rekaman berhenti sendiri setelah dua menit. Catatan disematkan di tengah lembar, Anda menyeretnya ke tempat yang seharusnya, dan mengetik keterangan di {{ui:Properties}}. {{ui:Play}} pada daftar akan memutarnya. Rekaman disimpan di dalam PDF.
- **Keputusan.** {{ui:Pin a decision}} menulis satu atau dua kalimat pada lembar. Jika menggantikan keputusan sebelumnya, pilih keputusan itu di {{ui:It replaces}}: keputusan lama tetap ada, ditandai Diganti, dan mengarah ke keputusan baru. Satu langkah urungkan akan mengembalikannya. Lihat [Sematkan catatan suara dan keputusan pada lembar](topic:voice-notes-and-decisions).

### Redline ke revisi

- **Kirim dan jawab.** Di tab {{ui:Tasks}} buka {{ui:Redline to revision}}, ketik revisi yang menjadi acuan markup, lalu pilih {{ui:Export redline file}}. Anda mendapatkan file `.redline.json` dengan satu item untuk setiap markup yang masih terbuka: lembar, posisi (sebagai pecahan dari lembar, sehingga cetak ulang pada ukuran lain tetap sejajar), kata, penulis, utas dan tugasnya. Siapa pun yang menggambar perubahan menjawab Diterima, Ditolak atau Selesai di file `.redline-answers.json`; {{ui:Load answers file…}} memberi setiap markup status itu beserta catatan drafter, sebagai satu langkah urungkan. Lihat [Kirim markup ke drafter sebagai redline](topic:redline-to-revision).

### Asisten AI

- **Lebih banyak alat.** Asisten yang Anda hubungkan melalui CadCraft Studio dapat mendaftar tugas (`tasks_list`), membuat atau mengubah satu tugas (`task_set`), melepas tugas (`task_clear`), memeriksa satu tugas terhadap revisi yang lebih baru atau elemen (`tasks_check`), dan membaca daftar biasa perubahan antara dua set rencana yang terbuka (`revisions_changes`). Asisten hanya mendapat alat yang Anda centang di bawah sakelar Asisten, dan setiap perubahan adalah satu langkah urungkan. Lihat [Gunakan MarkupCraft dengan asisten AI](topic:use-with-ai-assistants).

## Di setiap aplikasi

- **Bahasa.** CadCraft Studio sekarang memiliki 54 bahasa. Sepuluh di antaranya baru: Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipina, Swahili dan Uzbek. Semua bahasa selain bahasa Inggris masih berupa draf mesin sampai penutur asli membacanya.
- **Perangkat input.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} menentukan apa yang dilakukan trackpad, tombol samping mouse Anda, pena, ketukan jari, mouse 3D, pengontrol game, atau pengontrol MIDI, untuk setiap aplikasi atau hanya untuk aplikasi ini. Sampai Anda mengubah sesuatu, setiap perangkat bekerja seperti sebelumnya. Lihat [Gunakan trackpad, mouse 3D, atau pengontrol](common:input-devices).
- **Baris bilah alat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} memiliki {{ui:Wrap}} (bawaan), {{ui:2 rows}} dan {{ui:1 row}}, sehingga gambar mendapat lebih banyak ruang. Lihat [Atur panel](common:arrange-panels).
- **Kisi properti.** Kolom Gaya pada markup menggunakan kisi bersama, dengan kategori yang dapat diciutkan serta kolom label dan nilai.
- **Panel Masalah.** Peringatan dari aplikasi, seperti tugas yang lewat batas waktu, dikumpulkan dalam satu panel Masalah.
- **Live dan add-on.** Sesi Live dijelaskan di [Bekerja bersama secara langsung](common:work-together-live); daftar add-on yang mengikuti akun Anda ada di [Add-on dan daftar akun Anda](common:addons-basics).
- **Hubungkan AI Anda.** CadCraft Studio adalah hub untuk asisten Anda sendiri: hubungkan sekali untuk kedelapan aplikasi. Aplikasi itu sendiri tidak memiliki AI.

## Diperbaiki di 0.8.1

- **Studio bisa mengganti bahasa saat berjalan.** Sebelumnya, aplikasi desktop dan edisi paket tetap dalam bahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasanya tidak berubah.
- Instalasi Studio 0.8 ditawari 0.8.1 melalui {{ui:Settings}} › {{ui:Updates}}.

## Belum ada di versi ini

- **Belum ditandatangani kode.** Installer Windows dan .dmg macOS belum memiliki tanda tangan. Di Windows, jika SmartScreen menghentikan installer, pilih {{ui:More info}}, lalu {{ui:Run anyway}}. Di Mac, klik kanan CadCraft Studio dan pilih {{ui:Open}}. Build toko ditunda.
- **Hubungkan AI masih belum lengkap di beberapa bagian.** Penghubungan satu klik di dalam Studio, konektor hosted untuk asisten peramban, dan kunci API Anda sendiri di dalam Studio belum dijanjikan untuk rilis ini. Alur tugas sudah diuji, tetapi belum dengan asisten sungguhan.
- **Pemeriksaan tugas memerlukan ukuran halaman yang sama.** Lembar yang dicetak ulang pada ukuran lain tidak akan cocok, sehingga tugasnya tidak tertutup. Lembar dipasangkan menurut nomor lembar, atau jika tidak ada, menurut posisi halaman.
- **Catatan suara hanya berupa rekaman.** Tidak ada transkrip, dan asisten hanya melihat panjang, penulis dan keterangan catatan, bukan suaranya. Perekaman sudah dicoba dengan mikrofon palsu di peramban tanpa tampilan; mikrofon sungguhan pada ponsel, tablet atau laptop masih perlu diperiksa.
- **Lembar kalkulasi dan alasan dalam PDF** disimpan di entri privat file. MarkupCraft yang lebih lama mengabaikan entri itu dan membuangnya saat menyimpan file lagi, jadi buka dan simpan file seperti itu dengan 0.8 atau yang lebih baru.
- **Sisi drafter dari redline.** CadCraft membaca file redline dan menjawabnya belum dibuat.
- **Bahasa lain.** Bilah aplikasi bahasa Tamil meluap 528 px.

Yang lainnya ada di [Yang belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
