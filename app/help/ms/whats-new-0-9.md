---
title: Perkara baharu dalam 0.9 (terdahulu)
summary: Nota dan papan tampal yang tidak pernah dicetak, nota persendirian yang disulitkan dan salinan bersih untuk klien, pautan berkelompok untuk keseluruhan set lukisan, alat Lengkok dengan sepuluh kaedah, mengikut penyemak lain dalam Live, dan pembetulan bagi markup yang dipadam yang kekal dalam PDF tersimpan.
keywords: perkara baharu 0.9, keluaran terdahulu, perkara baharu, 0.9, nota keluaran, log perubahan, nota, papan tampal, nota persendirian, frasa laluan, disulitkan, sembunyi nota, tunjuk nota, salinan bersih, tangkapan, pautan berkelompok, pautan kenyataan helaian, pautkan helaian, blok tajuk, nombor helaian, addendum, nombor semula, pautan pdf, lengkok, kaedah lengkok, lengkok tiga titik, jejari, ikut, ikut saya, live, paparan kelas, senarai orang, markup dipadam, petua alat, tajuk tab, perkara baharu, 0.8, 0.8.1, versi, ciri baharu, tugasan, penerima tugas, hari akhir, lewat tempoh, semak sekarang, apa yang berubah, semakan, bandingkan, nota suara, keputusan, redline, fail jawapan, pelukis pelan, pembantu, mcp, masalah, bahasa, peranti input, trackpad, baris bar alat, grid sifat, kemas kini
from: aa3dfeb8
---

Ini ialah apa yang berubah dalam MarkupCraft 0.9, berbanding dengan 0.8.1. Idea utamanya ialah nota kerja anda kekal di luar halaman yang diterima klien, dan keseluruhan set lukisan boleh dipautkan dalam satu laluan.

## Baharu

### Nota, papan tampal dan nota persendirian

- **Papan tampal.** Kawasan di sekeliling setiap helaian ialah meja kerja: apa-apa yang dilukis, ditaip atau ditampal di sebelah helaian ialah nota dan tidak pernah dicetak. Pilih {{ui:Show the pasteboard}} untuk zum keluar bagi ruang, atau {{ui:Snapshot to the pasteboard}}, seret kotak, kemudian {{ui:To the pasteboard}} untuk meletakkan gambar sebahagian lukisan di sebelah helaian. Tangkapan ialah gambar dan tidak berubah apabila helaian berubah. Lihat [Nota, papan tampal dan nota persendirian](topic:notes-and-pasteboard).
- **Tunjuk dan sembunyikan nota.** Mana-mana markup boleh menjadi nota: tetapkan {{ui:New markups are}} dalam tab {{ui:Notes}}, atau {{ui:This markup is}} dalam {{ui:Properties}}. {{key:Shift+H}} atau suis {{ui:Notes}} di bawah helaian menyembunyikan dan menunjukkan setiap nota sekaligus. Nota ditinggalkan daripada cetakan, salinan rata, senarai dan eksport, dan pembaca PDF lain tidak memaparkannya. PDF tersimpan anda mengekalkannya untuk kali seterusnya anda membukanya dalam MarkupCraft.
- **Nota persendirian.** Pilih {{ui:Set a passphrase}}, kemudian jadikan markup {{ui:A private note}}. Ia disulitkan dalam fail dengan frasa laluan sekurang-kurangnya 10 aksara, dan tiada pemulihan: tiada siapa, termasuk kami, boleh membukanya tanpa frasa laluan. {{ui:Lock}} mengalihkan nota persendirian; {{ui:Stay unlocked on this device}} dimatikan secara lalai.
- **Simpan salinan bersih.** {{ui:Save a clean copy}} membuang setiap nota, nota persendirian dan semua yang ada pada papan tampal. Gunakannya untuk fail yang dihantar kepada klien.

### Pautkan seluruh set

- **Pautan berkelompok.** Pilih {{ui:Pages}} › {{ui:Batch links…}}, atau {{ui:Link sheet callouts…}} di bawah {{ui:Find text}} dalam panel {{ui:Sheets}}. Langkah 1 menyenaraikan nombor dan nama setiap helaian seperti yang dibaca daripada blok tajuknya; betulkan mana-mana yang salah. Langkah 2 menyenaraikan callout yang dijumpai, seperti `3/A-501` atau `DETAIL 2 ON A-501`. {{ui:Will link}} menunjukkan helaian dan pandangan bagi setiap satu, {{ui:Not linked}} menunjukkan nombor yang tiada helaian terbuka miliki, dan {{ui:Create the links}} mencipta kesemuanya dalam satu langkah buat asal. Jalankan semula selepas addendum atau penomboran semula; pautan yang anda buat secara manual tidak pernah diubah. Pautan dengan pandangan disimpan sebagai pautan PDF, supaya pembaca lain turut membuka perincian itu. Lihat [Pautan helaian](topic:sheet-links).

### Lukisan

- **Lengkok, sepuluh kaedah.** Alat {{ui:Arc}} ({{key:O}}) kini mempunyai kotak {{ui:Arc method}} di atas halaman dengan sepuluh cara untuk melukis lengkok, dan sudut, panjang, jejari serta arah boleh diklik atau ditaip. Lihat [Lukis lengkok dalam sepuluh cara](topic:draw-an-arc).

### Bekerjasama

- **Ikut penyemak.** Dalam sesi Live, pilih {{ui:Follow}} di sebelah nama seseorang dan pandangan anda bergerak mengikut mereka; menggeser atau zum pandangan anda sendiri akan menghentikannya. Hos boleh memilih {{ui:Ask everyone to follow me}}. Senarai orang menunjukkan warna, nama setiap orang, helaian yang mereka sedang lihat dan bila suntingan terakhir mereka. Lihat [Ikut penyemak lain dalam sesi Live](topic:follow-in-live).

## Dalam setiap aplikasi

- Petua alat ialah petua alat Bootstrap, petua mula boleh ditutup, jalur tab menatal apabila melimpah, dan tajuk tab pelayar dibaca `<document> — MarkupCraft | CadCraft`.
- Panel dengan beberapa bahagian membuka satu dan menutup yang lain (kunci di sebelah caret mengekalkan satu terbuka); suis dalam Tetapan mematikan ini.
- Setiap aplikasi bermula dengan koleksi lalai objek Pustaka.
- Unit berat dan suhu tersedia dalam tetapan Unit.

## Diperbetulkan

- **Markup yang dibuang tidak lagi kekal boleh dibaca dalam PDF tersimpan.** Dahulu, menyimpan akan membuang anotasi yang dipadam atau ditulis semula daripada halamannya tetapi meninggalkan objek itu, dengan teksnya, dalam fail. Kini simpanan memadamkan objek tersebut. Fail yang disimpan oleh binaan terdahulu masih mengandunginya sehingga anda menyimpannya semula.

## Had yang perlu diakui

- Pautan berkelompok diuji pada set ujian kami sendiri. Set sebenar melukis gelembung dengan banyak cara, jadi pada set klien sesetengah pandangan mungkin terlepas. Helaian yang diimbas memerlukan {{ui:Read text (OCR)…}} dahulu.
- Nota, nota persendirian dan papan tampal diuji dalam pelayar tanpa kepala dan dalam fail kami sendiri, bukan dengan set vektor besar sebenar dan bukan dalam sesi Live dua orang yang sebenar. Menukar frasa laluan belum dibina. Binaan terdahulu 0.9 tidak memaparkan nota.
- Paparan kelas ialah senarai orang; ia belum dicuba dengan guru dan pelajar sebenar.
- Bahasa selain Bahasa Inggeris ialah draf mesin sehingga penutur asli membacanya.
- Pemasang Windows tidak ditandatangani kod (Maklumat lanjut, kemudian Jalankan juga); imej cakera macOS tidak dinotarikan (klik kanan, kemudian Buka).

## Terdahulu: 0.8 dan 0.8.1

Ini ialah apa yang berubah dalam MarkupCraft 0.8 dan 0.8.1, berbanding dengan 0.7. Perkara baharu yang besar ialah markup boleh menjadi tugasan yang dilakukan oleh seseorang, atau pembantu anda sendiri, dan ia tertutup dengan sendirinya apabila lukisan benar-benar berubah.

### Baharu

**Markup yang bertindak**

- **Jadikan markup sebagai tugasan.** Pilih satu atau lebih markup, buka tab {{ui:Tasks}} dan pilih {{ui:Make selected a task}}. Tugasan mempunyai tajuk, seseorang atau pembantu bersambung anda untuk melakukannya, hari akhir pilihan dan keadaan, dan ia mengekalkan kedudukannya pada helaian serta utasnya. Lihat [Jadikan markup sebagai tugasan](topic:markups-that-act).
- **Tugasan yang tertutup sendiri.** Tugasan boleh memerhatikan lukisan di dalam markupnya. Buka semakan yang lebih baharu bagi helaian dan pilih {{ui:Check now}}: jika garisan di kawasan itu berubah lebih daripada sedikit, tugasan ditandakan Done, markupnya menjadi Completed dan nota dalam utas menyatakan apa yang berubah. Cop tarikh baharu, atau garisan yang bergerak kurang daripada 1.5 titik, tidak dikira. Tugasan sebaliknya boleh memerhatikan elemen model: pembantu anda melaporkan elemen dengan `tasks_check`, dan laporan kemudian yang berbeza, atau elemen yang dipadam, menutup tugasan. Satu langkah buat asal membukanya semula.
- **Cari kerja.** Tapis senarai {{ui:Tasks}} mengikut keadaan dan mengikut untuk siapa ia, termasuk {{ui:Overdue}}; pilih {{ui:Assigned to}}, kemudian {{ui:Assistant}} untuk melihat apa yang menunggu pembantu anda. Tugasan yang melepasi hari akhirnya dipaparkan sebagai amaran dalam panel Masalah. {{ui:CSV}} mengeksport senarai itu. Tugasan disimpan dalam PDF bersama markup dan bergerak melalui Live seperti sifat markup yang lain.

**Apa yang berubah, dalam senarai biasa**

- **Senaraikan perubahan.** Buka tab {{ui:Compare}}, kemudian {{ui:Compare a whole set}}, pilih fail yang lebih awal dan yang lebih baharu, dan pilih {{ui:List the changes}}. Senarai bermula dengan kiraan, kemudian meliputi setiap helaian yang berubah, yang paling besar perubahannya dahulu: di mana pada helaian, sebesar mana (dalam unit sebenar serta inci kertas pada helaian yang ditentukur), sama ada garisan ditambah atau dibuang, berapa markup berada di situ, dan perkataan yang muncul atau hilang. {{ui:Copy the list}} meletakkannya pada papan keratan, dan {{ui:CSV}} menulis satu baris bagi setiap perubahan. Lihat [Senaraikan apa yang berubah antara semakan](topic:what-changed-in-words).

**Nota suara dan keputusan**

- **Nota suara.** Dalam tab {{ui:Notes}} pilih {{ui:Record a voice note}}, kemudian {{ui:Stop recording}}; rakaman berhenti dengan sendirinya selepas dua minit. Nota itu dilekatkan di tengah helaian, anda menyeretnya ke tempat yang sepatutnya dan menaip kapsyen dalam {{ui:Properties}}, dan {{ui:Play}} dalam senarai memainkannya. Rakaman disimpan di dalam PDF.
- **Keputusan.** {{ui:Pin a decision}} menulis satu atau dua ayat pada helaian. Jika ia menggantikan keputusan terdahulu, pilih yang itu dalam {{ui:It replaces}}: yang lama kekal, ditandakan Replaced, dan merujuk kepada yang baharu. Satu langkah buat asal membatalkannya. Lihat [Lekatkan nota suara dan keputusan pada helaian](topic:voice-notes-and-decisions).

**Redline kepada semakan**

- **Hantar dan jawab.** Dalam tab {{ui:Tasks}} buka {{ui:Redline to revision}}, taip semakan yang markupnya merujuk kepadanya dan pilih {{ui:Export redline file}}. Anda mendapat fail `.redline.json` dengan satu item bagi setiap markup terbuka: helaian, kedudukan (sebagai pecahan helaian, supaya plot semula pada saiz lain masih sejajar), perkataan, pengarang, utas dan tugasannya. Sesiapa yang melukis perubahan itu menjawab Accepted, Rejected atau Done dalam fail `.redline-answers.json`; {{ui:Load answers file…}} memberikan setiap markup status itu dan nota pelukis pelan, sebagai satu langkah buat asal. Lihat [Hantar markup kepada pelukis pelan sebagai redline](topic:redline-to-revision).

**Pembantu AI**

- **Lebih banyak alat.** Pembantu yang anda sambungkan melalui CadCraft Studio boleh menyenaraikan tugasan (`tasks_list`), membuat atau menukar satu (`task_set`), mengeluarkan tugasan (`task_clear`), menyemak satu dengan semakan yang lebih baharu atau elemen (`tasks_check`) dan membaca senarai ringkas perubahan antara dua set pelan yang terbuka (`revisions_changes`). Ia hanya mendapat alat yang anda tandakan di bawah suis Pembantu, dan setiap perubahan ialah satu langkah buat asal. Lihat [Gunakan MarkupCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Dalam setiap aplikasi

- **Bahasa.** CadCraft Studio kini mempunyai 54 bahasa. Sepuluh daripadanya baharu: Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek. Semua bahasa selain Bahasa Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Peranti input.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} menetapkan apa yang dilakukan oleh trackpad, butang sisi tetikus anda, pen, ketukan jari, tetikus 3D, pengawal permainan atau pengawal MIDI, untuk setiap aplikasi atau hanya untuk yang ini. Sehingga anda menukar sesuatu, setiap peranti berfungsi seperti sebelumnya. Lihat [Gunakan trackpad, tetikus 3D atau pengawal](common:input-devices).
- **Baris bar alat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} mempunyai {{ui:Wrap}} (lalai), {{ui:2 rows}} dan {{ui:1 row}}, supaya lukisan mendapat lebih ruang. Lihat [Susun panel](common:arrange-panels).
- **Grid sifat.** Medan Style bagi markup menggunakan grid kongsi, dengan kategori yang boleh dikuncupkan serta lajur label dan nilai.
- **Panel Masalah.** Amaran daripada aplikasi, seperti tugasan yang lewat tempoh, dikumpulkan dalam satu panel Masalah.
- **Live dan alat tambah.** Sesi Live diterangkan dalam [Bekerjasama secara Live](common:work-together-live); senarai alat tambah yang mengikut akaun anda ada dalam [Alat tambah dan senarai akaun anda](common:addons-basics).
- **Sambungkan AI anda.** CadCraft Studio ialah hab untuk pembantu anda sendiri: sambung sekali untuk kesemua lapan aplikasi. Aplikasi tidak mengandungi AI mereka sendiri.

### Diperbetulkan dalam 0.8.1

- **Studio boleh menukar bahasa semasa ia berjalan.** Dahulu, aplikasi desktop dan edisi pakej kekal dalam Bahasa Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.
- Pemasangan Studio 0.8 ditawarkan 0.8.1 melalui {{ui:Settings}} › {{ui:Updates}}.

### Belum ada dalam versi ini

- **Belum ditandatangani kod.** Pemasang Windows dan .dmg macOS belum mempunyai tandatangan. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:More info}}, kemudian {{ui:Run anyway}}. Pada Mac, klik kanan CadCraft Studio dan pilih {{ui:Open}}. Binaan kedai ditangguhkan.
- **Sambung AI anda belum siap di beberapa bahagian.** Penyambungan satu klik dalam Studio, penyambung hos untuk pembantu pelayar dan kunci API anda sendiri dalam Studio tidak dijanjikan untuk keluaran ini. Gelung tugasan telah diuji, tetapi belum diuji dengan pembantu sebenar.
- **Semakan tugasan memerlukan saiz halaman yang sama.** Helaian yang diplot semula pada saiz lain tidak akan sepadan, jadi tugasannya tidak tertutup. Helaian dipadankan mengikut nombor helaian, jika tidak mengikut kedudukan halaman.
- **Nota suara hanya rakaman.** Tiada transkrip, dan pembantu melihat panjang, pengarang dan kapsyen nota, bukan bunyinya. Rakaman diuji dengan mikrofon palsu dalam pelayar tanpa kepala; mikrofon sebenar pada telefon, tablet atau komputer riba masih perlu disemak.
- **Helaian pengiraan dan sebab dalam PDF** disimpan dalam entri peribadi fail. MarkupCraft yang lebih lama mengabaikan entri itu dan membuangnya apabila ia menyimpan fail semula, jadi buka dan simpan fail sebegitu dengan 0.8 atau yang lebih baharu.
- **Bahagian pelukis pelan bagi redline.** CadCraft membaca fail redline dan menjawabnya belum dibina.
- **Bahasa lain.** Bar aplikasi bahasa Tamil melimpah sebanyak 528 px.

Selebihnya terdapat dalam [Apa yang belum dibina](topic:not-built-yet). Untuk keluaran sebelum ini, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
