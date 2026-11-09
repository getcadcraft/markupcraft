---
title: Perkara baharu dalam 0.8 dan 0.8.1
summary: Markup yang menjadi tugasan dan tutup sendiri, senarai ringkas perubahan antara semakan, nota suara dan keputusan pada pelan, fail redline untuk juruambar, serta perubahan 0.8 yang dikongsi: peranti input, baris bar alat, Masalah, lebih banyak bahasa.
keywords: perkara baharu, what's new, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, tugasan, penerima tugas, tarikh akhir, lewat tempoh, semak sekarang, apa yang berubah, semakan, bandingkan, nota suara, keputusan, redline, fail jawapan, juruambar, pembantu, mcp, masalah, bahasa, peranti input, pad jejak, baris bar alat, grid sifat, kemas kini
from: 40368796
---

Ini ialah perubahan dalam MarkupCraft 0.8 dan 0.8.1, berbanding dengan 0.7. Perkara baharu yang paling besar ialah markup boleh menjadi tugasan yang dilakukan oleh seseorang, atau oleh pembantu anda sendiri, dan tugasan itu tutup sendiri apabila lukisan benar-benar berubah.

## Baharu

### Markup yang bertindak

- **Jadikan markup sebagai tugasan.** Pilih satu atau lebih markup, buka tab {{ui:Tasks}} dan pilih {{ui:Make selected a task}}. Tugasan mempunyai tajuk, orang atau pembantu yang disambungkan untuk melaksanakannya, hari akhir (jika mahu) dan keadaan, dan ia kekal di tempatnya pada helaian beserta utasnya. Lihat [Jadikan markup sebagai tugasan](topic:markups-that-act).
- **Tugasan yang tutup sendiri.** Tugasan boleh memerhati lukisan di dalam markupnya. Buka semakan helaian yang lebih baharu dan pilih {{ui:Check now}}: jika garisan di kawasan itu berubah lebih daripada sedikit, tugasan ditandakan Selesai, markupnya menjadi Selesai dan nota dalam utas menyatakan apa yang berubah. Cop tarikh baharu, atau garisan yang beralih kurang daripada 1.5 point, tidak dikira. Sebaliknya, tugasan boleh memerhati elemen model: pembantu anda melaporkan elemen dengan `tasks_check`, dan laporan kemudian yang berbeza, atau elemen yang dipadam, menutup tugasan. Satu langkah buat asal membukanya semula.
- **Cari kerja.** Tapis senarai {{ui:Tasks}} mengikut keadaan dan mengikut siapa ia untuk, termasuk {{ui:Overdue}}; pilih {{ui:Assigned to}}, kemudian {{ui:Assistant}} untuk melihat apa yang menunggu pembantu anda. Tugasan yang melepasi hari akhirnya dipaparkan sebagai amaran dalam panel Masalah. {{ui:CSV}} mengeksport senarai itu. Tugasan disimpan dalam PDF bersama markup dan dibawa melalui Live seperti sifat markup yang lain.

### Apa yang berubah, sebagai senarai ringkas

- **Senaraikan perubahan.** Buka tab {{ui:Compare}}, kemudian {{ui:Compare a whole set}}, pilih fail yang lebih awal dan yang lebih baharu, dan pilih {{ui:List the changes}}. Senarai itu bermula dengan kiraan, kemudian meliputi setiap helaian yang berubah, yang paling besar perubahannya dahulu: di mana pada helaian, sebesar mana (dalam unit sebenar dan juga inci kertas pada helaian yang ditentukur), sama ada garisan ditambah atau dialih keluar, berapa banyak markup berada di situ, dan perkataan yang muncul atau hilang. {{ui:Copy the list}} meletakkannya pada papan keratan, dan {{ui:CSV}} menulis satu baris bagi setiap perubahan. Lihat [Senaraikan apa yang berubah antara semakan](topic:what-changed-in-words).

### Nota suara dan keputusan

- **Nota suara.** Dalam tab {{ui:Notes}} pilih {{ui:Record a voice note}}, kemudian {{ui:Stop recording}}; rakaman berhenti dengan sendirinya selepas dua minit. Nota itu dilekatkan di tengah helaian, anda seret ke tempat yang sepatutnya dan taip kapsyen dalam {{ui:Properties}}, dan {{ui:Play}} dalam senarai memainkannya. Rakaman disimpan dalam PDF.
- **Keputusan.** {{ui:Pin a decision}} menulis satu atau dua ayat pada helaian. Jika ia menggantikan keputusan terdahulu, pilih keputusan itu dalam {{ui:It replaces}}: keputusan lama kekal, ditandakan Digantikan, dan menunjuk kepada yang baharu. Satu langkah buat asal membatalkannya. Lihat [Lekatkan nota suara dan keputusan pada helaian](topic:voice-notes-and-decisions).

### Redline kepada semakan

- **Hantar dan jawab.** Dalam tab {{ui:Tasks}} buka {{ui:Redline to revision}}, taip semakan yang markup itu merujuk, dan pilih {{ui:Export redline file}}. Anda mendapat fail `.redline.json` dengan satu item bagi setiap markup terbuka: helaian, kedudukan (sebagai pecahan helaian, supaya cetakan semula pada saiz lain masih sejajar), perkataan, pengarang, utas dan tugasannya. Sesiapa yang melukis perubahan itu menjawab Diterima, Ditolak atau Selesai dalam fail `.redline-answers.json`; {{ui:Load answers file…}} memberikan setiap markup status itu dan nota juruambar, sebagai satu langkah buat asal. Lihat [Hantar markup kepada juruambar sebagai redline](topic:redline-to-revision).

### Pembantu AI

- **Lebih banyak alat.** Pembantu yang anda sambungkan melalui CadCraft Studio boleh menyenaraikan tugasan (`tasks_list`), mencipta atau menukar satu (`task_set`), mengeluarkan tugasan (`task_clear`), menyemak satu terhadap semakan yang lebih baharu atau elemen (`tasks_check`), dan membaca senarai ringkas perubahan antara dua set pelan yang dibuka (`revisions_changes`). Ia hanya mendapat alat yang anda tandakan di bawah suis Pembantu, dan setiap perubahan ialah satu langkah buat asal. Lihat [Gunakan MarkupCraft dengan pembantu AI](topic:use-with-ai-assistants).

## Dalam setiap aplikasi

- **Bahasa.** CadCraft Studio kini mempunyai 54 bahasa. Sepuluh adalah baharu: Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek. Semua bahasa selain Bahasa Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Peranti input.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} menentukan apa yang dilakukan oleh pad jejak, butang sisi tetikus anda, pen, ketukan jari, tetikus 3D, pengawal permainan atau pengawal MIDI, untuk setiap aplikasi atau hanya untuk aplikasi ini. Sehingga anda menukar sesuatu, setiap peranti berfungsi seperti sebelumnya. Lihat [Gunakan pad jejak, tetikus 3D atau pengawal](common:input-devices).
- **Baris bar alat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} mempunyai {{ui:Wrap}} (lalai), {{ui:2 rows}} dan {{ui:1 row}}, supaya lukisan mendapat lebih ruang. Lihat [Susun panel](common:arrange-panels).
- **Grid sifat.** Medan Gaya bagi markup menggunakan grid kongsi, dengan kategori yang boleh dilipat serta lajur label dan nilai.
- **Panel masalah.** Amaran daripada aplikasi, seperti tugasan yang lewat tempoh, dikumpulkan dalam satu panel Masalah.
- **Live dan alat tambah.** Sesi Live diterangkan dalam [Bekerja bersama secara langsung](common:work-together-live); senarai alat tambah yang mengikut akaun anda terdapat dalam [Alat tambah dan senarai akaun anda](common:addons-basics).
- **Sambungkan AI anda.** CadCraft Studio ialah hab untuk pembantu AI anda sendiri: sambung sekali untuk kesemua lapan aplikasi. Aplikasi tidak mengandungi AI sendiri.

## Diperbetulkan dalam 0.8.1

- **Studio boleh bertukar bahasa semasa ia berjalan.** Sebelum ini, aplikasi desktop dan edisi terpek kekal dalam Bahasa Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak bertukar.
- Pemasangan Studio 0.8 ditawarkan 0.8.1 melalui {{ui:Settings}} › {{ui:Updates}}.

## Belum dibina dalam versi ini

- **Belum ditandatangani kod.** Pemasang Windows dan fail .dmg macOS belum mempunyai tandatangan. Pada Windows, jika SmartScreen menghalang pemasang, pilih {{ui:More info}}, kemudian {{ui:Run anyway}}. Pada Mac, klik kanan CadCraft Studio dan pilih {{ui:Open}}. Binaan kedai ditangguhkan.
- **Sambungkan AI anda belum siap sepenuhnya.** Sambungan satu klik dalam Studio, penyambung hos untuk pembantu pelayar dan kunci API anda sendiri dalam Studio tidak dijanjikan untuk keluaran ini. Gelung tugasan telah diuji, tetapi belum diuji dengan pembantu sebenar.
- **Semakan tugasan memerlukan saiz halaman yang sama.** Helaian yang dicetak semula pada saiz lain tidak akan sepadan, jadi tugasannya tidak tertutup. Helaian dipadankan mengikut nombor helaian, jika tidak mengikut kedudukan halaman.
- **Nota suara hanyalah rakaman.** Tiada transkrip, dan pembantu hanya melihat panjang, pengarang dan kapsyen nota, bukan bunyinya. Rakaman telah dicuba dengan mikrofon olok-olok dalam pelayar tanpa kepala; mikrofon sebenar pada telefon, tablet atau komputer riba masih perlu disemak.
- **Helaian kiraan dan sebab dalam PDF** disimpan dalam entri peribadi fail. MarkupCraft yang lebih lama mengabaikan entri itu dan membuangnya apabila ia menyimpan fail itu kali seterusnya, jadi bukalah dan simpan fail sebegitu dengan 0.8 atau lebih baharu.
- **Bahagian juruambar bagi redline.** CadCraft membaca fail redline dan menjawabnya belum dibina.
- **Bahasa lain.** Bar aplikasi Tamil melimpah sebanyak 528 px.

Selebihnya terdapat dalam [Apa yang belum dibina](topic:not-built-yet). Bagi keluaran sebelum ini, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
