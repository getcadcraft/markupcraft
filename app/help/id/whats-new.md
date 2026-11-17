---
title: Yang baru di 0.9
summary: Catatan dan papan tempel yang tidak pernah tercetak, catatan pribadi terenkripsi dan salinan bersih untuk klien, tautan massal untuk seluruh set gambar, alat Busur dengan sepuluh metode, mengikuti peninjau lain di Live, dan perbaikan agar markup yang dihapus tidak tetap ada di PDF yang disimpan.
keywords: yang baru, apa yang baru, 0.9, catatan rilis, changelog, catatan, papan tempel, catatan pribadi, frasa sandi, terenkripsi, sembunyikan catatan, tampilkan catatan, salinan bersih, jepretan, tautan massal, callout lembar, tautkan lembar, blok judul, nomor lembar, addendum, beri nomor ulang, tautan pdf, busur, metode busur, busur tiga titik, radius, ikuti, ikuti saya, live, tampilan kelas, daftar orang, markup yang dihapus, tooltip, judul tab, yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, tugas, penerima tugas, hari jatuh tempo, lewat batas waktu, periksa sekarang, apa yang berubah, revisi, bandingkan, catatan suara, keputusan, redline, file jawaban, drafter, asisten, mcp, masalah, bahasa, perangkat input, trackpad, baris bilah alat, kisi properti, pembaruan
from: dbdd7ed4
---

Ini yang berubah di MarkupCraft 0.9, dibandingkan dengan 0.8.1. Gagasan utamanya adalah catatan kerja Anda tetap berada di luar halaman yang diterima klien, dan seluruh set gambar dapat ditautkan dalam satu kali jalan.

## Baru

### Catatan, papan tempel, dan catatan pribadi

- **Papan tempel.** Area di sekitar setiap lembar adalah meja kerja: apa pun yang digambar, diketik, atau ditempel di samping lembar adalah catatan dan tidak pernah tercetak. Pilih {{ui:Tampilkan papan tempel}} untuk memperkecil tampilan agar ada ruang, atau {{ui:Jepretan ke papan tempel}}, seret kotak, lalu {{ui:Ke papan tempel}} untuk menaruh gambar sebagian dari gambar di samping lembar. Jepretan adalah gambar dan tidak berubah ketika lembar berubah. Lihat [Catatan, papan tempel, dan catatan pribadi](topic:notes-and-pasteboard).
- **Tampilkan dan sembunyikan catatan.** Markup apa pun dapat menjadi catatan: atur {{ui:Markup baru adalah}} di tab {{ui:Catatan}}, atau {{ui:Markup ini adalah}} di {{ui:Properti}}. {{key:Shift+H}} atau sakelar {{ui:Catatan}} di bawah lembar menyembunyikan dan menampilkan setiap catatan sekaligus. Catatan tidak ikut dicetak, salinan yang diratakan, daftar, dan ekspor, dan pembaca PDF lain tidak menampilkannya. PDF yang Anda simpan tetap menyimpannya untuk saat Anda membukanya lagi di MarkupCraft.
- **Catatan pribadi.** Pilih {{ui:Atur frasa sandi}}, lalu jadikan markup {{ui:Catatan pribadi}}. Catatan itu dienkripsi di dalam file dengan frasa sandi minimal 10 karakter, dan tidak ada pemulihan: tidak seorang pun, termasuk kami, dapat membukanya tanpa frasa sandi. {{ui:Kunci}} menyembunyikan catatan pribadi; {{ui:Tetap terbuka di perangkat ini}} nonaktif secara bawaan.
- **Simpan salinan bersih.** {{ui:Simpan salinan bersih}} menghapus setiap catatan, catatan pribadi, dan semua yang ada di papan tempel. Gunakan untuk file yang dikirim ke klien.

### Tautkan seluruh set

- **Tautan massal.** Pilih {{ui:Halaman}} › {{ui:Tautan massal…}}, atau {{ui:Tautkan callout lembar…}} di bawah {{ui:Cari teks}} pada panel {{ui:Lembar}}. Langkah 1 mendaftar nomor dan nama setiap lembar seperti yang dibaca dari blok judulnya; perbaiki yang salah. Langkah 2 mendaftar callout yang ditemukan, seperti `3/A-501` atau `DETAIL 2 ON A-501`. {{ui:Akan ditautkan}} menampilkan lembar dan tampilan untuk masing-masing, {{ui:Tidak ditautkan}} menampilkan nomor yang tidak dimiliki lembar mana pun yang terbuka, dan {{ui:Buat tautan}} membuat semuanya dalam satu langkah urungkan. Jalankan lagi setelah addendum atau penomoran ulang; tautan yang Anda buat sendiri tidak pernah diubah. Tautan dengan tampilan disimpan sebagai tautan PDF, sehingga pembaca lain juga dapat membuka detailnya. Lihat [Tautan lembar](topic:sheet-links).

### Gambar

- **Busur, sepuluh metode.** Alat {{ui:Busur}} ({{key:O}}) kini memiliki kotak {{ui:Metode busur}} di atas halaman dengan sepuluh cara menggambar busur, dan sudut, panjang, radius, serta arah dapat diklik atau diketik. Lihat [Gambar busur dengan sepuluh cara](topic:draw-an-arc).

### Bekerja bersama

- **Ikuti peninjau.** Dalam sesi Live, pilih {{ui:Ikuti}} di samping nama seseorang, dan tampilan Anda ikut bergerak bersama mereka; menggeser atau memperbesar tampilan sendiri akan menghentikannya. Host dapat memilih {{ui:Minta semua orang mengikuti saya}}. Daftar orang menampilkan warna, nama, lembar tempat mereka berada, dan kapan penyuntingan terakhir mereka. Lihat [Ikuti peninjau lain dalam sesi Live](topic:follow-in-live).

## Di setiap aplikasi

- Tooltip adalah tooltip Bootstrap, tip awal dapat ditutup, deret tab digulir saat meluap, dan judul tab peramban berbunyi `<document> — MarkupCraft | CadCraft`.
- Panel dengan beberapa bagian membuka satu dan menutup yang lain (gembok di samping tanda panah menjaga satu tetap terbuka); sakelar di Pengaturan mematikan ini.
- Setiap aplikasi dimulai dari kumpulan objek Pustaka bawaan.
- Satuan berat dan suhu tersedia di pengaturan Satuan.

## Diperbaiki

- **Markup yang dihapus tidak lagi dapat dibaca di dalam PDF yang disimpan.** Dulu, saat menyimpan, anotasi yang dihapus atau ditulis ulang dilepas dari halamannya, tetapi objeknya, beserta teksnya, tetap ada di file. Kini penyimpanan menghapus objek-objek itu. File yang disimpan oleh build sebelumnya masih menyimpannya sampai Anda menyimpannya lagi.

## Batasan yang jujur

- Tautan massal telah dicoba pada set uji kami sendiri. Set nyata menggambar gelembung dengan banyak cara, sehingga pada set klien beberapa tampilan mungkin terlewat. Lembar hasil pindai perlu {{ui:Baca teks (OCR)…}} lebih dulu.
- Catatan, catatan pribadi, dan papan tempel diuji di peramban tanpa antarmuka (headless) dan pada file kami sendiri, bukan dengan set vektor besar yang nyata dan bukan dalam sesi Live dua orang yang sungguhan. Mengubah frasa sandi belum dibuat. Build yang lebih lama dari 0.9 tidak menampilkan catatan.
- Tampilan kelas adalah daftar orang; belum dicoba dengan guru dan siswa sungguhan.
- Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya.
- Installer Windows tidak ditandatangani kodenya (Info selengkapnya, lalu Tetap jalankan); image disk macOS belum dinotarisasi (klik kanan, lalu Buka).

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di MarkupCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. Hal baru yang besar adalah markup dapat menjadi tugas yang dikerjakan seseorang atau asisten AI Anda, dan tugas itu menutup dirinya sendiri ketika gambar benar-benar berubah.

### Baru

**Markup yang bekerja**

- **Jadikan markup sebuah tugas.** Pilih satu atau lebih markup, buka tab {{ui:Tugas}}, dan pilih {{ui:Jadikan pilihan sebagai tugas}}. Tugas memiliki judul, seseorang atau asisten Anda yang terhubung untuk mengerjakannya, hari jatuh tempo opsional, dan status; tugas itu menyimpan posisinya di lembar dan utasnya. Lihat [Jadikan markup sebagai tugas](topic:markups-that-act).
- **Tugas yang menutup dirinya sendiri.** Tugas dapat mengawasi gambar di dalam markupnya. Buka revisi lembar yang lebih baru dan pilih {{ui:Periksa sekarang}}: jika garis di area itu berubah lebih dari sedikit, tugas ditandai Done, markupnya menjadi Completed, dan catatan di utas menyebutkan apa yang berubah. Cap tanggal baru, atau garis yang bergeser kurang dari 1,5 poin, tidak dihitung. Tugas juga dapat mengawasi elemen model: asisten Anda melaporkan elemen dengan `tasks_check`, dan laporan berikutnya yang berbeda, atau elemen yang dihapus, menutup tugas. Satu langkah urungkan membukanya kembali.
- **Temukan pekerjaannya.** Saring daftar {{ui:Tugas}} menurut status dan untuk siapa tugas itu, termasuk {{ui:Lewat batas waktu}}; pilih {{ui:Ditugaskan kepada}}, lalu {{ui:Asisten}} untuk melihat apa yang menunggu asisten Anda. Tugas yang melewati hari jatuh temponya tampil sebagai peringatan di panel Masalah. {{ui:CSV}} mengekspor daftar. Tugas disimpan di dalam PDF bersama markupnya dan berpindah melalui Live seperti properti markup lainnya.

**Yang berubah, sebagai daftar biasa**

- **Daftarkan perubahan.** Buka tab {{ui:Bandingkan}}, lalu {{ui:Bandingkan seluruh set}}, pilih file yang lebih awal dan yang lebih baru, lalu pilih {{ui:Daftarkan perubahan}}. Daftar dimulai dengan jumlah, lalu mencakup setiap lembar yang berubah, perubahan terbesar lebih dulu: di mana posisinya pada lembar, seberapa besar (dalam satuan sebenarnya serta inci kertas pada lembar yang terkalibrasi), apakah garis ditambahkan atau dihapus, berapa banyak markup yang ada di sana, dan kata mana yang muncul atau hilang. {{ui:Salin daftar}} menaruhnya di papan klip, dan {{ui:CSV}} menulis satu baris per perubahan. Lihat [Daftar apa yang berubah antar revisi](topic:what-changed-in-words).

**Catatan suara dan keputusan**

- **Catatan suara.** Di tab {{ui:Catatan}}, pilih {{ui:Rekam catatan suara}}, lalu {{ui:Hentikan rekaman}}; rekaman berhenti sendiri setelah dua menit. Catatan disematkan di tengah lembar; Anda menyeretnya ke tempat yang semestinya dan mengetik keterangan di {{ui:Properti}}, dan {{ui:Putar}} di daftar akan memutarnya. Rekaman disimpan di dalam PDF.
- **Keputusan.** {{ui:Sematkan keputusan}} menulis satu atau dua kalimat di lembar. Jika menggantikan keputusan sebelumnya, pilih keputusan itu di {{ui:Menggantikan}}: yang lama tetap ada, ditandai Replaced, dan menunjuk ke yang baru. Satu langkah urungkan membatalkannya. Lihat [Sematkan catatan suara dan keputusan di lembar](topic:voice-notes-and-decisions).

**Redline ke revisi**

- **Kirim dan jawab.** Di tab {{ui:Tugas}}, buka {{ui:Redline ke revisi}}, ketik revisi yang menjadi acuan markup, lalu pilih {{ui:Ekspor file redline}}. Anda mendapat file `.redline.json` dengan satu item per markup terbuka: lembar, posisi (sebagai pecahan dari lembar, sehingga cetak ulang pada ukuran lain tetap sejajar), kata-kata, penulis, utas, dan tugasnya. Siapa pun yang menggambar perubahan menjawab Accepted, Rejected, atau Done dalam file `.redline-answers.json`; {{ui:Muat file jawaban…}} memberi setiap markup status itu dan catatan drafter-nya, sebagai satu langkah urungkan. Lihat [Kirim markup ke drafter sebagai redline](topic:redline-to-revision).

**Asisten AI**

- **Alat lebih banyak.** Asisten yang Anda hubungkan lewat CadCraft Studio dapat mendaftar tugas (`tasks_list`), membuat atau mengubah satu tugas (`task_set`), melepas tugas (`task_clear`), memeriksa satu tugas terhadap revisi atau elemen yang lebih baru (`tasks_check`), dan membaca daftar perubahan biasa antara dua set gambar yang terbuka (`revisions_changes`). Asisten hanya mendapat alat yang Anda centang di bawah sakelar Asisten, dan setiap perubahan adalah satu langkah urungkan. Lihat [Gunakan MarkupCraft dengan asisten AI](topic:use-with-ai-assistants).

### Di setiap aplikasi

- **Bahasa.** CadCraft Studio kini memiliki 54 bahasa. Sepuluh baru: Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, dan Uzbek. Semua bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya.
- **Perangkat input.** {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Perangkat input}} menentukan apa yang dilakukan trackpad, tombol samping mouse, pena, ketukan jari, mouse 3D, pengontrol game, atau pengontrol MIDI, untuk setiap aplikasi atau hanya untuk aplikasi ini. Sampai Anda mengubah sesuatu, setiap perangkat bekerja seperti sebelumnya. Lihat [Gunakan trackpad, mouse 3D, atau pengontrol](common:input-devices).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memiliki {{ui:Lipat}} (bawaan), {{ui:2 baris}}, dan {{ui:1 baris}}, sehingga gambar mendapat lebih banyak ruang. Lihat [Atur panel](common:arrange-panels).
- **Kisi properti.** Kolom Style pada markup memakai kisi bersama, dengan kategori yang dapat diciutkan serta kolom label dan nilai.
- **Panel Masalah.** Peringatan dari aplikasi, seperti tugas yang lewat batas waktu, dikumpulkan dalam satu panel Masalah.
- **Live dan add-on.** Sesi Live dijelaskan di [Bekerja bersama secara live](common:work-together-live); daftar add-on yang mengikuti akun Anda ada di [Add-on dan daftar akun Anda](common:addons-basics).
- **Hubungkan AI Anda.** CadCraft Studio adalah hub untuk asisten Anda sendiri: hubungkan sekali untuk kedelapan aplikasi. Aplikasi tidak memiliki AI sendiri.

### Diperbaiki di 0.8.1

- **Studio dapat mengganti bahasa saat berjalan.** Sebelumnya, aplikasi desktop dan edisi paket tetap berbahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasanya tidak berubah.
- Pemasangan Studio 0.8 ditawari 0.8.1 melalui {{ui:Pengaturan}} › {{ui:Pembaruan}}.

### Belum ada di versi ini

- **Belum ditandatangani kode.** Installer Windows dan .dmg macOS belum memiliki tanda tangan. Di Windows, jika SmartScreen menghentikan installer, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. Build toko ditunda.
- **Hubungkan AI Anda belum selesai di beberapa bagian.** Penyambungan satu klik di dalam Studio, konektor yang dihosting untuk asisten peramban, dan kunci API Anda sendiri di dalam Studio belum dijanjikan untuk rilis ini. Loop tugas telah diuji, tetapi belum dengan asisten sungguhan.
- **Pemeriksaan tugas memerlukan ukuran halaman yang sama.** Lembar yang dicetak ulang dengan ukuran lain tidak akan cocok, sehingga tugasnya tidak menutup. Lembar dipasangkan berdasarkan nomor lembar, jika tidak ada, berdasarkan posisi halaman.
- **Catatan suara hanya rekaman.** Tidak ada transkrip, dan asisten melihat panjang, penulis, dan keterangan catatan, bukan suaranya. Perekaman telah dicoba dengan mikrofon palsu di peramban tanpa antarmuka; mikrofon sungguhan pada ponsel, tablet, atau laptop masih perlu diperiksa.
- **Lembar kalkulasi dan alasan di PDF** disimpan dalam entri pribadi file. MarkupCraft yang lebih lama mengabaikan entri itu dan membuangnya saat menyimpan file, jadi buka dan simpan file seperti itu dengan 0.8 atau yang lebih baru.
- **Sisi drafter dari redline.** CadCraft yang membaca file redline dan menjawabnya belum dibuat.
- **Bahasa lain.** Bilah aplikasi Tamil meluap 528 px.

Yang lain ada di [Yang belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
