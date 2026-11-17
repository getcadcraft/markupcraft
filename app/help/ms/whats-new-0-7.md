---
title: Perkara baharu dalam 0.7 (terdahulu)
summary: RFI, penyerahan dan log harian dalam tab Medan baharu, dengan tarikh akhir, lewat tempoh dalam merah, CSV dan BCF, kerja luar talian dan Gabung; pembantu yang menetapkan status, membalas dan mengeksport senarai; senarai unit yang mengikut Tetapan; panel yang boleh dikemas dan kotak dialog yang boleh dialihkan.
keywords: perkara baharu 0.7, keluaran terdahulu, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, medan, rekod medan, rfi, permintaan maklumat, penyerahan, log harian, diari tapak, lewat tempoh, tarikh akhir, ditugaskan kepada saya, pin, gabung, luar talian, tablet, bcf, csv, pembantu, mcp, status markup, balasan, eksport, unit, senarai unit, bintang, tentukur, padat, panel, kotak dialog, portugis
from: f8578677
---

Inilah yang berubah dalam MarkupCraft 0.7, berbanding 0.6. Perkara baharu yang paling besar ialah rekod medan: RFI, penyerahan dan log harian yang disimpan dalam PDF, bersebelahan markup anda.

## Baharu

### RFI, penyerahan dan log harian

- **Tab Medan.** Buka tab {{ui:Medan}} dan pilih {{ui:RFI}}, {{ui:Penyerahan}} atau {{ui:Log harian}}. Ketik atau klik helaian tempat RFI atau penyerahan patut berada, dan pin akan menandakan tempatnya; log harian diletakkan pada helaian terbuka tanpa pin ({{ui:Letak pin}} menambah satu kemudian, {{ui:Alih pin}} mengalihkan mana-mana pin). Setiap rekod mempunyai nombornya sendiri (RFI-0001, SUB-0001, LOG-0001), tajuk, teks, status, penerima tugas, tarikh akhir, utas balasan dan senarai nama lampiran. Lihat [Jejak RFI, penyerahan dan log harian](topic:field-records).
- **Lihat apa yang lewat.** Tapis senarai mengikut jenis, status, tarikh akhir (lewat tempoh, tamat dalam 7 hari, ada atau tiada tarikh akhir), helaian ini atau semua helaian, carian teks, atau {{ui:Ditugaskan kepada saya}}. Rekod yang melepasi tarikh akhirnya dan masih menunggu ditanda **Lewat tempoh**, dalam warna merah, pada senarai dan pada pinnya. Lihat [Cari yang penting](topic:field-records#find-what-matters).
- **CSV dan BCF.** {{ui:CSV}} menulis rekod yang disenaraikan sebagai hamparan; {{ui:BCF}} menulisnya sebagai topik BCF, setiap satu dengan tangkapan tempatnya pada helaian. Kedua-duanya mengikut tapisan. Lihat [Eksport](topic:field-records#export).
- **Luar talian, dan dua salinan menjadi satu.** Rekod disimpan dalam PDF dan tidak memerlukan rangkaian, jadi tablet di tapak boleh menambah, menjawab dan menyimpannya. Apabila kembali ke pejabat, {{ui:Gabung}} menyertakan rekod salinan lain bagi PDF yang sama mengikut ID mereka, sebagai satu langkah buat asal. Lihat [Simpan, luar talian dan menggabungkan salinan](topic:field-records#save-offline-and-merging-copies).

### Pembantu AI

- **Lebih banyak yang boleh dilakukan pembantu.** Pembantu anda sendiri, yang disambungkan melalui CadCraft Studio, kini boleh menetapkan status markup (`markup_status`, dilog dalam utasnya), membalas dalam utas (`markup_reply`) dan mengeksport senarai {{ui:Markup}} sebagai CSV atau BCF (`markups_export`, iaitu apa yang dipaparkan senarai dengan tapisannya). Setiap perubahan ialah satu langkah buat asal, ditandatangani dengan nama pembantu. Lihat [Apa yang boleh diminta oleh pembantu](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Dalam setiap app

- **Unit.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} mempunyai satu senarai setiap satu untuk panjang, luas, isipadu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrif unit (kaki survei AS ialah unit tersendiri). Matikan unit yang tidak pernah anda guna dan ia keluar daripada senarai unit; bintangkan satu dan kerja baharu bermula dengannya. Fail sentiasa mengekalkan unitnya sendiri. Dalam MarkupCraft, unit pengukuran dan kedudukan dalam {{ui:Tetapan}} › {{ui:MarkupCraft}}, serta unit dalam kotak dialog penentukuran, mengikut suis; bintang menetapkan unit pengukuran sehingga anda menyimpan tetapan MarkupCraft sendiri; dan jarak sebenar yang anda taip semasa menentukur boleh membawa tanda unit mana-mana, seperti `3 yd` atau `1.5 km`. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Susun atur lebih padat dan panel yang boleh dikemas.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Ketumpatan reka letak}} › {{ui:Padat}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besarnya). Setiap panel sisi mempunyai bar tajuk nipis: seret untuk melekapkan atau menerbangkan panel, lepaskannya pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pin untuk menggelongsor ke tepi, atau sembunyikannya dan tarik semula dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Kotak dialog boleh dialihkan.** Seret kotak dialog mengikut bar tajuknya keluar dari laluan lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alih kotak dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang disediakan untuk pembantu anda sendiri (kemaskan lukisan, plot satu set, semak lukisan, tanya soalan kepada model, jumlahkan takeoff, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukannya, dan setiap satu dimainkan semula oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan kekal dalam bahasa Inggeris.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (belum ada fail untuk sistem anda, tiada rangkaian, tandatangan tidak sah) dan bukannya sekadar "Selesai", dan berhenti memunculkan semula kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini lagi

- **0.7 tidak ditandatangani kod.** Penandatanganan dan pakej Microsoft Store dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan cerun dalam {{ui:Unit}} disimpan, tetapi tiada kotak yang membacanya lagi.
- Rekod medan tidak dikongsi dalam sesi langsung CadCraft Studio (sesi langsung hanya membawa markup); bawa salinan bersama dengan {{ui:Gabung}}.
- Gabung mengambil rekod sebagai keseluruhan daripada salinan yang diubah terakhir: jika dua orang mengubah medan berbeza dalam satu rekod, medan salinan yang terkemudian menang. Utas dan nama lampiran digabungkan.
- Lampiran hanya nama; fail kekal di tempat asalnya. Tiada pasukan, pemberitahuan atau projek awan untuk rekod, dan pembantu belum mempunyai alat untuk rekod.
- Rekod medan telah diuji dalam pelayar pada saiz telefon dan tablet dengan rangkaian diputuskan, tetapi belum diuji secara manual pada tablet sebenar.
- Masih dari 0.6: memusingkan objek halaman ke mana-mana sudut, melukis bentuk baharu terus ke halaman, menukar fon atau saiz garisan, dan teks yang mengalir merentasi beberapa baris. Salinan tersimpan dengan suntingan halaman belum dibuka dalam Acrobat.
- Masih dari 0.5: membuat asal perubahan halaman (seperti menambah halaman kosong), membaca teks daripada helaian yang diimbas, dan sesi langsung melebihi rangkaian anda sendiri.

Selebihnya terdapat dalam [Apa yang belum dibina](topic:not-built-yet).
