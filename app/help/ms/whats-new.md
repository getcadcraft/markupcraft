---
title: Perkara baharu dalam 0.9
summary: Nota dan papan tampal yang tidak pernah dicetak, nota persendirian yang disulitkan dan salinan bersih untuk klien, pautan berkelompok untuk seluruh set lukisan, alat Lengkok dengan sepuluh kaedah, mengikut pengulas lain dalam Live, dan pembetulan untuk markup yang dipadam kekal dalam PDF yang disimpan.
keywords: perkara baharu, apa yang baharu, 0.9, nota keluaran, papan tampal, nota persendirian, frasa laluan, disulitkan, sembunyi nota, papar nota, salinan bersih, tangkapan, pautan berkelompok, kenyataan helaian, pautan helaian, blok tajuk, nombor helaian, addendum, nombor semula, pautan pdf, lengkok, kaedah lengkok, lengkok tiga titik, jejari, ikut, ikut saya, live, paparan kelas, senarai orang, markup dipadam, tooltip, tajuk tab, perubahan, 0.8, 0.8.1, versi, ciri baharu, tugasan, penerima tugas, hari tarikh akhir, lewat tempoh, semak sekarang, apa yang berubah, semakan, bandingkan, nota suara, keputusan, redline, fail jawapan, pelukis, pembantu, mcp, masalah, bahasa, peranti input, pad sentuh, baris bar alat, grid sifat, kemas kini
from: dbdd7ed4
---

Inilah yang berubah dalam MarkupCraft 0.9, berbanding 0.8.1. Idea utamanya ialah nota kerja anda kekal di luar halaman yang diterima klien, dan keseluruhan set lukisan boleh dipautkan dalam satu laluan.

## Baharu

### Nota, papan tampal dan nota persendirian

- **Papan tampal.** Kawasan di sekeliling setiap helaian ialah meja kerja: apa-apa yang dilukis, ditaip atau ditampal di sebelah helaian ialah nota dan tidak pernah dicetak. Pilih {{ui:Papar papan tampal}} untuk zum keluar bagi ruang, atau {{ui:Tangkapan ke papan tampal}}, seret kotak, kemudian {{ui:Ke papan tampal}} untuk meletakkan gambar sebahagian lukisan di sebelah helaian. Tangkapan ialah gambar dan tidak berubah apabila helaian berubah. Lihat [Nota, papan tampal dan nota persendirian](topic:notes-and-pasteboard).
- **Papar dan sembunyi nota.** Mana-mana markup boleh menjadi nota: tetapkan {{ui:Markup baharu ialah}} dalam tab {{ui:Nota}}, atau {{ui:Markup ini ialah}} dalam {{ui:Sifat}}. {{key:Shift+H}} atau suis {{ui:Nota}} di bawah helaian menyembunyikan dan memaparkan setiap nota sekaligus. Nota dikecualikan daripada cetakan, salinan diratakan, senarai dan eksport, dan pembaca PDF lain tidak memaparkannya. PDF tersimpan anda mengekalkannya untuk kali seterusnya anda membukanya dalam MarkupCraft.
- **Nota persendirian.** Pilih {{ui:Tetapkan frasa laluan}}, kemudian jadikan markup {{ui:Nota persendirian}}. Ia disulitkan dalam fail dengan frasa laluan sekurang-kurangnya 10 aksara, dan tiada pemulihan: tiada siapa, termasuk kami, boleh membukanya tanpa frasa laluan. {{ui:Kunci}} menyimpan nota persendirian; {{ui:Kekal dibuka kuncinya pada peranti ini}} dimatikan secara lalai.
- **Simpan salinan bersih.** {{ui:Simpan salinan bersih}} membuang setiap nota, nota persendirian dan segala yang ada pada papan tampal. Gunakannya untuk fail yang dihantar kepada klien.

### Pautkan seluruh set

- **Pautan berkelompok.** Pilih {{ui:Halaman}} › {{ui:Pautan berkelompok…}}, atau {{ui:Pautkan kenyataan helaian…}} di bawah {{ui:Cari teks}} dalam panel {{ui:Helaian}}. Langkah 1 menyenaraikan nombor dan nama setiap helaian seperti yang dibaca daripada blok tajuknya; betulkan mana-mana yang salah. Langkah 2 menyenaraikan kenyataan yang ditemui, seperti `3/A-501` atau `DETAIL 2 ON A-501`. {{ui:Akan dipautkan}} menunjukkan helaian dan paparan bagi setiap satu, {{ui:Belum dipautkan}} menunjukkan nombor yang tiada helaian terbuka, dan {{ui:Cipta pautan}} mencipta kesemuanya dalam satu langkah buat asal. Jalankan semula selepas addendum atau penomboran semula; pautan yang anda buat secara manual tidak pernah diubah. Pautan dengan paparan disimpan sebagai pautan PDF, supaya pembaca lain turut membuka perincian itu. Lihat [Pautan helaian](topic:sheet-links).

### Lukisan

- **Lengkok, sepuluh kaedah.** Alat {{ui:Lengkok}} ({{key:O}}) kini mempunyai kotak {{ui:Kaedah lengkok}} di atas halaman dengan sepuluh cara melukis lengkok, dan sudut, panjang, jejari serta arah boleh diklik atau ditaip. Lihat [Lukis lengkok dengan sepuluh cara](topic:draw-an-arc).

### Bekerjasama

- **Ikut pengulas.** Dalam sesi Live pilih {{ui:Ikut}} di sebelah nama seseorang dan paparan anda bergerak mengikut mereka; menggerakkan atau zum paparan anda sendiri menghentikannya. Hos boleh memilih {{ui:Minta semua orang ikut saya}}. Senarai orang menunjukkan warna, nama setiap orang, helaian yang mereka lihat dan bila suntingan terakhir mereka. Lihat [Ikut pengulas lain dalam sesi Live](topic:follow-in-live).

## Dalam setiap app

- Tooltip ialah tooltip Bootstrap, tip permulaan boleh ditutup, jalur tab bergulung apabila melimpah, dan tajuk tab pelayar berbunyi `<document> — MarkupCraft | CadCraft`.
- Panel dengan beberapa bahagian membuka satu dan menutup yang lain (kunci di sebelah caret menyimpan satu terbuka); suis Tetapan mematikan ciri ini.
- Setiap app bermula dengan koleksi lalai objek Pustaka.
- Unit berat dan suhu tersedia dalam tetapan Unit.

## Dibetulkan

- **Markup yang dipadam tidak lagi boleh dibaca dalam PDF yang disimpan.** Dahulu, menyimpan mengambil anotasi yang dipadam atau ditulis semula daripada halamannya tetapi meninggalkan objek itu, dengan teksnya, dalam fail. Kini simpanan memadam objek tersebut. Fail yang disimpan oleh binaan lebih awal masih menyimpannya sehingga anda menyimpannya semula.

## Had yang jujur

- Pautan berkelompok telah dicuba pada set ujian kami sendiri. Set sebenar melukis gelembung dalam banyak cara, jadi pada set klien sesetengah paparan mungkin terlepas. Helaian yang diimbas memerlukan {{ui:Baca teks (OCR)…}} dahulu.
- Nota, nota persendirian dan papan tampal telah diuji dalam pelayar tanpa kepala dan pada fail kami sendiri, bukan dengan set vektor sebenar yang besar dan bukan dalam sesi Live dua orang yang sebenar. Menukar frasa laluan belum dibina. Binaan yang lebih lama daripada 0.9 tidak memaparkan nota.
- Paparan kelas ialah senarai orang; ia belum dicuba dengan guru dan pelajar sebenar.
- Bahasa selain Inggeris ialah draf mesin sehingga penutur asli membacanya.
- Pemasang Windows tidak ditandatangani kod (Maklumat lanjut, kemudian Jalankan juga); imej cakera macOS tidak dinotarikan (klik kanan, kemudian Buka).

## Terdahulu: 0.8 dan 0.8.1

Inilah yang berubah dalam MarkupCraft 0.8 dan 0.8.1, berbanding 0.7. Perkara baharu yang paling besar ialah markup boleh menjadi tugasan yang dilakukan oleh seseorang, atau pembantu anda sendiri, dan tugasan itu menutup dirinya apabila lukisan benar-benar berubah.

### Baharu

**Markup yang bertindak**

- **Jadikan markup sebagai tugasan.** Pilih satu atau lebih markup, buka tab {{ui:Tugasan}} dan pilih {{ui:Jadikan yang dipilih sebagai tugasan}}. Tugasan mempunyai tajuk, orang atau pembantu anda yang disambungkan untuk melakukannya, hari akhir (pilihan) dan keadaan, dan ia mengekalkan kedudukannya pada helaian dan utasnya. Lihat [Jadikan markup sebagai tugasan](topic:markups-that-act).
- **Tugasan yang menutup sendiri.** Tugasan boleh memerhati lukisan di dalam markupnya. Buka semakan terbaharu helaian dan pilih {{ui:Semak sekarang}}: jika garisan di kawasan itu berubah lebih daripada sehelai rambut, tugasan ditanda Done, markupnya menjadi Completed dan nota dalam utas menyatakan apa yang berubah. Cop tarikh baharu, atau garisan yang bergerak kurang daripada 1.5 mata, tidak dikira. Sebaliknya, tugasan boleh memerhati elemen model: pembantu anda melaporkan elemen dengan `tasks_check`, dan laporan kemudian yang berbeza, atau elemen yang dipadam, menutup tugasan. Satu langkah buat asal membukanya semula.

**Cari kerja**

- Tapis senarai {{ui:Tugasan}} mengikut keadaan dan mengikut untuk siapa, termasuk {{ui:Lewat tempoh}}; pilih {{ui:Diberikan kepada}}, kemudian {{ui:Pembantu}} untuk melihat apa yang menunggu pembantu anda. Tugasan yang melepasi hari akhirnya dipaparkan sebagai amaran dalam panel Masalah. {{ui:CSV}} mengeksport senarai. Tugasan disimpan dalam PDF bersama markup dan dibawa melalui Live seperti sifat markup lain.

**Apa yang berubah, sebagai senarai ringkas**

- **Senaraikan perubahan.** Buka tab {{ui:Bandingkan}}, kemudian {{ui:Bandingkan keseluruhan set}}, pilih fail yang lebih awal dan yang lebih baharu dan pilih {{ui:Senaraikan perubahan}}. Senarai bermula dengan kiraan, kemudian merangkumi setiap helaian yang berubah, perubahan terbesar dahulu: di mana pada helaian, berapa besar (dalam unit sebenar serta inci kertas pada helaian yang ditentukur), sama ada garisan ditambah atau dibuang, berapa banyak markup berada di situ, dan perkataan mana yang muncul atau hilang. {{ui:Salin senarai}} meletakkannya pada papan keratan dan {{ui:CSV}} menulis satu baris bagi setiap perubahan. Lihat [Senaraikan perubahan antara semakan](topic:what-changed-in-words).

**Nota suara dan keputusan**

- **Nota suara.** Dalam tab {{ui:Nota}} pilih {{ui:Rakam nota suara}}, kemudian {{ui:Henti rakaman}}; rakaman berhenti sendiri selepas dua minit. Nota itu dilekatkan di tengah helaian; anda seretnya ke tempat yang sepatutnya dan menaip kapsyen dalam {{ui:Sifat}}, dan {{ui:Main}} dalam senarai memainkannya. Rakaman itu disimpan dalam PDF.
- **Keputusan.** {{ui:Lekatkan keputusan}} menulis satu atau dua ayat pada helaian. Jika ia menggantikan keputusan terdahulu, pilih yang itu dalam {{ui:Ia menggantikan}}: yang lama kekal, ditanda Replaced, dan menunjuk kepada yang baharu. Satu langkah buat asal membatalkannya. Lihat [Lekatkan nota suara dan keputusan pada helaian](topic:voice-notes-and-decisions).

**Redline kepada semakan**

- **Hantar dan jawab.** Dalam tab {{ui:Tugasan}} buka {{ui:Redline kepada semakan}}, taip semakan yang markupnya merujuk kepadanya dan pilih {{ui:Eksport fail redline}}. Anda mendapat fail `.redline.json` dengan satu item bagi setiap markup terbuka: helaian, kedudukan (sebagai pecahan helaian, supaya plot semula pada saiz lain masih sejajar), perkataan, pengarang, utas dan tugasannya. Sesiapa yang melukis perubahan menjawab Accepted, Rejected atau Done dalam fail `.redline-answers.json`; {{ui:Muatkan fail jawapan…}} memberikan setiap markup status itu dan nota pelukis, sebagai satu langkah buat asal. Lihat [Hantar markup kepada pelukis sebagai redline](topic:redline-to-revision).

**Pembantu AI**

- **Lebih banyak alat.** Pembantu yang anda sambungkan melalui CadCraft Studio boleh menyenaraikan tugasan (`tasks_list`), membuat atau menukar satu (`task_set`), mengeluarkan tugasan (`task_clear`), menyemak satu terhadap semakan yang lebih baharu atau elemen (`tasks_check`) dan membaca senarai ringkas perubahan antara dua set pelan terbuka (`revisions_changes`). Ia hanya mendapat alat yang anda tanda di bawah suis Pembantu, dan setiap perubahan ialah satu langkah buat asal. Lihat [Gunakan MarkupCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Dalam setiap app

- **Bahasa.** CadCraft Studio kini mempunyai 54 bahasa. Sepuluh baharu: Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek. Semua bahasa bukan Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Peranti input.** {{ui:Tetapan}} › {{ui:Global}} › {{ui:Peranti input}} menetapkan apa yang dilakukan oleh pad sentuh, butang sisi tetikus anda, pen, ketukan jari, tetikus 3D, pengawal permainan atau pengawal MIDI, untuk setiap app atau hanya untuk app ini. Sehingga anda menukar sesuatu, setiap peranti berfungsi seperti sebelumnya. Lihat [Gunakan pad sentuh, tetikus 3D atau pengawal](common:input-devices).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} mempunyai {{ui:Balut}} (lalai), {{ui:2 baris}} dan {{ui:1 baris}}, supaya lukisan mendapat lebih ruang. Lihat [Susun panel](common:arrange-panels).
- **Grid sifat.** Medan Style bagi markup menggunakan grid dikongsi, dengan kategori boleh dikuncupkan serta lajur label dan nilai.
- **Panel Masalah.** Amaran daripada app, seperti tugasan yang lewat tempoh, dikumpulkan dalam satu panel Masalah.
- **Live dan add-on.** Sesi Live diterangkan dalam [Bekerjasama secara langsung](common:work-together-live); senarai add-on yang mengikut akaun anda ada dalam [Add-on dan senarai akaun anda](common:addons-basics).
- **Sambungkan AI anda.** CadCraft Studio ialah hab untuk pembantu anda sendiri: sambung sekali untuk kesemua lapan app. Aplikasi tidak mempunyai AI sendiri.

### Dibetulkan dalam 0.8.1

- **Studio boleh menukar bahasa semasa ia berjalan.** Dahulu, aplikasi desktop dan edisi berpek kekal dalam bahasa Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.
- Pemasangan Studio 0.8 ditawarkan 0.8.1 melalui {{ui:Tetapan}} › {{ui:Kemas kini}}.

### Belum ada dalam versi ini lagi

- **Tidak ditandatangani kod.** Pemasang Windows dan imej cakera .dmg macOS belum mempunyai tandatangan. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. Binaan kedai sedang ditangguhkan.
- **Sambungkan AI anda belum lengkap di beberapa tempat.** Sambungan satu klik dalam Studio, penyambung dihoskan untuk pembantu pelayar dan kunci API anda sendiri dalam Studio tidak dijanjikan untuk keluaran ini. Gelung tugasan telah diuji, tetapi belum dengan pembantu sebenar.
- **Semakan tugasan memerlukan saiz halaman yang sama.** Helaian yang diplot semula pada saiz lain tidak akan sepadan, jadi tugasannya tidak akan menutup. Helaian dipadankan mengikut nombor helaian; jika tiada, mengikut kedudukan halaman.
- **Nota suara ialah rakaman sahaja.** Tiada transkrip, dan pembantu melihat panjang nota, pengarang dan kapsyen, bukan bunyinya. Rakaman diuji dengan mikrofon palsu dalam pelayar tanpa kepala; mikrofon sebenar pada telefon, tablet atau komputer riba masih perlu diperiksa.
- **Helaian pengiraan dan sebab dalam PDF** disimpan dalam entri persendirian fail. MarkupCraft yang lebih lama mengabaikan entri itu dan membuangnya apabila ia menyimpan fail kali seterusnya, jadi buka dan simpan fail sebegini dengan 0.8 atau lebih baharu.
- **Bahagian pelukis bagi redline.** CadCraft membaca fail redline dan menjawabnya belum dibina lagi.
- **Bahasa lain.** Bar app Tamil melimpah sebanyak 528 px.

Selebihnya terdapat dalam [Apa yang belum dibina](topic:not-built-yet). Untuk keluaran sebelum ini, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
