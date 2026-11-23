---
title: Yang baru di 0.9 (sebelumnya)
summary: Catatan dan papan tempel yang tidak pernah tercetak, catatan pribadi terenkripsi dan salinan bersih untuk klien, tautan massal untuk seluruh set gambar, alat Busur dengan sepuluh metode, mengikuti peninjau lain di Live, serta perbaikan untuk markup yang dihapus tetapi tetap ada di PDF yang disimpan.
keywords: yang baru 0.9, rilis sebelumnya, yang baru, apa yang baru, 0.9, catatan rilis, changelog, catatan, papan tempel, catatan pribadi, frasa sandi, terenkripsi, sembunyikan catatan, tampilkan catatan, salinan bersih, jepretan, tautan massal, callout lembar, tautkan lembar, kepala gambar, nomor lembar, addendum, beri nomor ulang, tautan pdf, busur, metode busur, busur tiga titik, radius, ikuti, ikuti saya, live, tampilan kelas, daftar orang, markup terhapus, tooltip, judul tab, pembaruan, perubahan, 0.8, 0.8.1, versi, fitur baru, tugas, penerima tugas, hari tenggat, lewat batas waktu, periksa sekarang, apa yang berubah, revisi, bandingkan, catatan suara, keputusan, redline, file jawaban, drafter, asisten, mcp, masalah, bahasa, perangkat input, trackpad, baris bilah alat, kisi properti
from: aa3dfeb8
---

Ini yang berubah di MarkupCraft 0.9, dibandingkan dengan 0.8.1. Gagasan utamanya adalah catatan kerja Anda tetap tidak ada di halaman yang diterima klien, dan seluruh set gambar dapat ditautkan dalam satu kali proses.

## Baru

### Catatan, papan tempel, dan catatan pribadi

- **Papan tempel.** Area di sekitar setiap lembar adalah meja kerja: apa pun yang digambar, diketik, atau ditempel di samping lembar adalah catatan dan tidak pernah tercetak. Pilih {{ui:Tampilkan papan tempel}} untuk memperkecil tampilan agar ada ruang, atau {{ui:Jepretan ke papan tempel}}, seret kotak, lalu {{ui:Ke papan tempel}} untuk menempatkan gambar sebagian dari gambar di samping lembar. Jepretan adalah gambar dan tidak berubah ketika lembar berubah. Lihat [Catatan, papan tempel, dan catatan pribadi](topic:notes-and-pasteboard).
- **Tampilkan dan sembunyikan catatan.** Markup apa pun dapat menjadi catatan: atur {{ui:Markup baru adalah}} di tab {{ui:Catatan}}, atau {{ui:Markup ini adalah}} di {{ui:Properti}}. {{key:Shift+H}} atau sakelar {{ui:Catatan}} di bawah lembar menyembunyikan dan menampilkan semua catatan sekaligus. Catatan tidak disertakan saat mencetak, salinan rata, daftar, dan ekspor, serta pembaca PDF lain tidak menampilkannya. PDF yang Anda simpan tetap menyimpannya untuk saat Anda membukanya lagi di MarkupCraft.
- **Catatan pribadi.** Pilih {{ui:Atur frasa sandi}}, lalu jadikan markup {{ui:Catatan pribadi}}. Catatan itu dienkripsi di dalam file dengan frasa sandi minimal 10 karakter, dan tidak ada pemulihan: tidak seorang pun, termasuk kami, dapat membukanya tanpa frasa sandi. {{ui:Kunci}} menyembunyikan catatan pribadi; {{ui:Tetap terbuka di perangkat ini}} nonaktif secara default.
- **Simpan salinan bersih.** {{ui:Simpan salinan bersih}} menghapus setiap catatan, catatan pribadi, dan semua yang ada di papan tempel. Gunakan untuk file yang dikirim ke klien.

### Tautkan seluruh set

- **Tautan massal.** Pilih {{ui:Halaman}} › {{ui:Tautan massal…}}, atau {{ui:Tautkan callout lembar…}} di bawah {{ui:Cari teks}} pada panel {{ui:Lembar}}. Langkah 1 menampilkan nomor dan nama tiap lembar seperti yang dibaca dari kepala gambarnya; perbaiki yang keliru. Langkah 2 menampilkan callout yang ditemukan, seperti `3/A-501` atau `DETAIL 2 ON A-501`. {{ui:Akan ditautkan}} menampilkan lembar dan tampilan untuk setiap callout, {{ui:Belum ditautkan}} menampilkan nomor yang tidak ada pada lembar yang terbuka, dan {{ui:Buat tautan}} membuat semuanya dalam satu langkah urungkan. Jalankan lagi setelah addendum atau penomoran ulang; tautan yang Anda buat sendiri tidak pernah diubah. Tautan dengan tampilan disimpan sebagai tautan PDF, sehingga pembaca lain juga dapat membuka detailnya. Lihat [Tautan lembar](topic:sheet-links).

### Gambar

- **Busur, sepuluh metode.** Alat {{ui:Busur}} ({{key:O}}) sekarang memiliki kotak {{ui:Metode busur}} di atas halaman dengan sepuluh cara menggambar busur, dan sudut, panjang, radius, serta arahnya dapat diklik atau diketik. Lihat [Gambar busur dengan sepuluh cara](topic:draw-an-arc).

### Bekerja bersama

- **Ikuti peninjau.** Dalam sesi Live, pilih {{ui:Ikuti}} di samping nama seseorang dan tampilan Anda akan bergerak mengikuti mereka; menggeser atau memperbesar tampilan sendiri akan menghentikannya. Host dapat memilih {{ui:Minta semua orang mengikuti saya}}. Daftar orang menampilkan warna, nama, lembar tempat mereka berada, dan waktu suntingan terakhir mereka. Lihat [Ikuti peninjau lain dalam sesi Live](topic:follow-in-live).

## Di setiap aplikasi

- Tooltip adalah tooltip Bootstrap, tip awal dapat ditutup, deretan tab digulir jika meluap, dan judul tab peramban berbunyi `<document> — MarkupCraft | CadCraft`.
- Panel dengan beberapa bagian membuka satu dan menutup yang lain (gembok di samping tanda panah menjaga satu tetap terbuka); sakelar di {{ui:Pengaturan}} mematikan perilaku ini.
- Setiap aplikasi dimulai dari kumpulan objek {{ui:Pustaka}} default.
- Satuan berat dan suhu tersedia di pengaturan {{ui:Satuan}}.

## Diperbaiki

- **Markup yang dihapus tidak lagi dapat dibaca di dalam PDF yang disimpan.** Dahulu, saat menyimpan, anotasi yang dihapus atau ditulis ulang diambil dari halamannya, tetapi objeknya beserta teksnya tetap ada di file. Sekarang penyimpanan menghapus objek tersebut. File yang disimpan oleh build sebelumnya tetap memuatnya sampai Anda menyimpannya lagi.

## Batasan yang jujur

- Tautan massal sudah diuji pada set uji kami sendiri. Set nyata menggambar gelembung dengan banyak cara, sehingga pada set klien sebagian tampilan mungkin terlewat. Lembar hasil pindai perlu {{ui:Baca teks (OCR)…}} terlebih dahulu.
- Catatan, catatan pribadi, dan papan tempel diuji di peramban tanpa tampilan (headless) dan pada file kami sendiri, bukan pada set vektor besar yang nyata dan bukan dalam sesi Live dua orang yang sesungguhnya. Mengganti frasa sandi belum dibuat. Build yang lebih lama dari 0.9 tidak menampilkan catatan.
- Tampilan kelas adalah daftar orang; belum diuji dengan guru dan siswa yang sesungguhnya.
- Bahasa selain Inggris adalah draf mesin sampai dibaca oleh penutur asli.
- Pemasang Windows tidak ditandatangani kode (Info selengkapnya, lalu Tetap jalankan); image disk macOS belum dinotarisasi (klik kanan, lalu Buka).

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di MarkupCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. Hal besar yang baru adalah markup dapat menjadi tugas yang dikerjakan oleh seseorang, atau asisten Anda sendiri, dan tugas itu tertutup sendiri ketika gambar benar-benar berubah.

### Baru

**Markup yang bekerja**

- **Jadikan markup sebagai tugas.** Pilih satu atau lebih markup, buka tab {{ui:Tugas}}, dan pilih {{ui:Jadikan pilihan sebagai tugas}}. Tugas memiliki judul, orang atau asisten Anda yang terhubung untuk mengerjakannya, hari tenggat opsional, dan status; tugas itu menyimpan posisinya pada lembar serta utasnya. Lihat [Jadikan markup sebagai tugas](topic:markups-that-act).
- **Tugas yang menutup sendiri.** Tugas dapat memantau gambar di dalam markupnya. Buka revisi lembar yang lebih baru dan pilih {{ui:Periksa sekarang}}: jika garis di area itu berubah lebih dari sedikit, tugas ditandai Selesai, markupnya menjadi Selesai, dan catatan di utas menjelaskan apa yang berubah. Stempel tanggal baru, atau garis yang bergeser kurang dari 1.5 poin, tidak dihitung. Tugas juga dapat memantau elemen model: asisten Anda melaporkan elemen dengan `tasks_check`, dan laporan berikutnya yang berbeda, atau elemen yang dihapus, menutup tugas. Satu langkah urungkan membukanya kembali.
- **Temukan pekerjaannya.** Saring daftar {{ui:Tugas}} berdasarkan status dan untuk siapa tugas itu, termasuk {{ui:Lewat batas waktu}}; pilih {{ui:Ditugaskan kepada}}, lalu {{ui:Asisten}} untuk melihat apa yang menunggu asisten Anda. Tugas yang melewati hari tenggatnya tampil sebagai peringatan di panel Masalah. {{ui:CSV}} mengekspor daftar. Tugas disimpan di PDF bersama markupnya dan berpindah melalui Live seperti properti markup lainnya.

**Apa yang berubah, sebagai daftar biasa**

- **Daftarkan perubahan.** Buka tab {{ui:Bandingkan}}, lalu {{ui:Bandingkan seluruh set}}, pilih file yang lebih awal dan yang lebih baru, dan pilih {{ui:Daftarkan perubahan}}. Daftar dimulai dengan jumlah, lalu mencakup setiap lembar yang berubah, dengan perubahan terbesar lebih dulu: di mana posisinya pada lembar, seberapa besar (dalam satuan sebenarnya serta inci kertas pada lembar yang terkalibrasi), apakah garis ditambah atau dihapus, berapa banyak markup yang ada di sana, dan kata-kata yang muncul atau hilang. {{ui:Salin daftar}} menaruhnya di papan klip, dan {{ui:CSV}} menulis satu baris untuk setiap perubahan. Lihat [Daftar apa yang berubah antara revisi](topic:what-changed-in-words).

**Catatan suara dan keputusan**

- **Catatan suara.** Di tab {{ui:Catatan}} pilih {{ui:Rekam catatan suara}}, lalu {{ui:Hentikan rekaman}}; rekaman berhenti sendiri setelah dua menit. Catatan dipasang di tengah lembar, Anda menyeretnya ke tempat yang seharusnya, dan mengetik keterangan di {{ui:Properti}}; {{ui:Putar}} di daftar akan memutarnya. Rekaman disimpan di dalam PDF.
- **Keputusan.** {{ui:Sematkan keputusan}} menulis satu atau dua kalimat pada lembar. Jika menggantikan keputusan sebelumnya, pilih keputusan itu di {{ui:Menggantikan}}: keputusan lama tetap ada, ditandai Diganti, dan menunjuk ke yang baru. Satu langkah urungkan membatalkannya. Lihat [Sematkan catatan suara dan keputusan pada lembar](topic:voice-notes-and-decisions).

**Redline ke revisi**

- **Kirim dan jawab.** Di tab {{ui:Tugas}} buka {{ui:Redline ke revisi}}, ketik revisi tempat markup tersebut dibuat, dan pilih {{ui:Ekspor file redline}}. Anda mendapatkan file `.redline.json` dengan satu item untuk setiap markup yang terbuka: lembar, posisi (sebagai pecahan dari lembar, sehingga cetak ulang dengan ukuran lain tetap sejajar), kata-kata, penulis, utas, dan tugasnya. Siapa pun yang menggambar perubahan menjawab Diterima, Ditolak, atau Selesai dalam file `.redline-answers.json`; {{ui:Muat file jawaban…}} memberi setiap markup status itu beserta catatan drafter, sebagai satu langkah urungkan. Lihat [Kirim markup ke drafter sebagai redline](topic:redline-to-revision).

**Asisten AI**

- **Lebih banyak alat.** Asisten yang Anda hubungkan melalui CadCraft Studio dapat menampilkan tugas (`tasks_list`), membuat atau mengubah satu tugas (`task_set`), melepas tugas (`task_clear`), memeriksa satu tugas terhadap revisi yang lebih baru atau elemen (`tasks_check`), dan membaca daftar perubahan biasa antara dua set rencana yang terbuka (`revisions_changes`). Asisten hanya mendapatkan alat yang Anda centang di bawah sakelar Asisten, dan setiap perubahan adalah satu langkah urungkan. Lihat [Gunakan MarkupCraft dengan asisten AI](topic:use-with-ai-assistants).

### Di setiap aplikasi

- **Bahasa.** CadCraft Studio sekarang memiliki 54 bahasa. Sepuluh di antaranya baru: Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipina, Swahili, dan Uzbek. Semua bahasa selain Inggris adalah draf mesin sampai dibaca oleh penutur asli.
- **Perangkat input.** {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Perangkat input}} menentukan apa yang dilakukan trackpad, tombol samping mouse, pena, ketukan jari, mouse 3D, pengontrol game, atau pengontrol MIDI, untuk setiap aplikasi atau hanya untuk aplikasi ini. Sampai Anda mengubah sesuatu, setiap perangkat bekerja seperti sebelumnya. Lihat [Gunakan trackpad, mouse 3D, atau pengontrol](common:input-devices).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memiliki {{ui:Lipat}} (bawaan), {{ui:2 baris}}, dan {{ui:1 baris}}, sehingga gambar mendapat lebih banyak ruang. Lihat [Atur panel](common:arrange-panels).
- **Kisi properti.** Kolom Gaya pada markup menggunakan kisi bersama, dengan kategori yang dapat diciutkan serta kolom label dan nilai.
- **Panel Masalah.** Peringatan dari aplikasi, seperti tugas yang lewat batas waktu, terkumpul dalam satu panel Masalah.
- **Live dan add-on.** Sesi Live dijelaskan di [Bekerja bersama secara langsung](common:work-together-live); daftar add-on yang mengikuti akun Anda ada di [Add-on dan daftar akun Anda](common:addons-basics).
- **Hubungkan AI Anda.** CadCraft Studio adalah hub untuk asisten Anda sendiri: hubungkan sekali untuk semua delapan aplikasi. Aplikasi tidak memiliki AI sendiri.

### Diperbaiki di 0.8.1

- **Studio dapat mengganti bahasa saat berjalan.** Sebelumnya, aplikasi desktop dan edisi kemasan tetap dalam bahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasanya tidak berubah.
- Pemasangan Studio 0.8 ditawarkan 0.8.1 melalui {{ui:Pengaturan}} › {{ui:Pembaruan}}.

### Belum ada di versi ini

- **Belum ditandatangani kode.** Pemasang Windows dan .dmg macOS belum memiliki tanda tangan. Di Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Info lainnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. Build toko ditunda.
- **Hubungkan AI Anda belum selesai di beberapa bagian.** Penghubungan satu klik di dalam Studio, konektor hosted untuk asisten peramban, dan kunci API Anda sendiri di dalam Studio belum dijanjikan untuk rilis ini. Siklus tugas sudah diuji, tetapi belum dengan asisten yang sesungguhnya.
- **Pemeriksaan tugas memerlukan ukuran halaman yang sama.** Lembar yang dicetak ulang dengan ukuran lain tidak akan cocok, sehingga tugasnya tidak tertutup. Lembar dipasangkan berdasarkan nomor lembar, jika tidak ada maka berdasarkan posisi halaman.
- **Catatan suara hanya rekaman.** Tidak ada transkrip, dan asisten hanya melihat panjang, penulis, dan keterangan catatan, bukan suaranya. Perekaman diuji dengan mikrofon palsu di peramban tanpa tampilan; mikrofon sungguhan pada ponsel, tablet, atau laptop masih perlu diperiksa.
- **Lembar hitungan dan alasan dalam PDF** disimpan di entri privat file. MarkupCraft yang lebih lama mengabaikan entri itu dan membuangnya saat menyimpan file lagi, jadi buka dan simpan file seperti itu dengan 0.8 atau yang lebih baru.
- **Sisi drafter dari redline.** CadCraft membaca file redline dan menjawabnya belum dibuat.
- **Bahasa lain.** Bilah aplikasi untuk bahasa Tamil meluap sebesar 528 px.

Semua hal lain ada di [Yang belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
