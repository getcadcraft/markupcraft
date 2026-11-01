---
title: Perkara baharu dalam 0.7
summary: RFI, penyerahan dan log harian dalam tab Medan baharu, dengan tarikh akhir, tertunggak dalam merah, CSV dan BCF, kerja luar talian dan Gabung; pembantu yang menetapkan status, membalas dan mengeksport senarai; senarai unit yang mengikut Tetapan; panel yang boleh dikemas dan kotak dialog yang boleh dialihkan.
keywords: perkara baharu, apa yang baharu, nota keluaran, senarai perubahan, perubahan, 0.7, versi, ciri baharu, medan, rekod medan, rfi, permintaan maklumat, penyerahan, log harian, diari tapak, tertunggak, tarikh akhir, ditugaskan kepada saya, pin, gabung, luar talian, tablet, bcf, csv, pembantu, mcp, status markup, balas, eksport, unit, senarai unit, bintang, kalibrasi, padat, panel, kotak dialog, portugis
from: 142e1a1e
---

Inilah yang berubah dalam MarkupCraft 0.7, berbanding 0.6. Perkara baharu yang paling besar ialah rekod medan: RFI, penyerahan dan log harian yang disimpan dalam PDF bersebelahan markup anda.

## Baharu

### RFI, penyerahan dan log harian

- **Tab Medan.** Buka tab {{ui:Field}} dan pilih {{ui:RFI}}, {{ui:Submittal}} atau {{ui:Daily log}}. Ketik atau klik pada helaian tempat RFI atau penyerahan patut berada dan pin akan menandakan tempatnya; log harian diletakkan pada helaian yang dibuka tanpa pin ({{ui:Place pin}} menambah satu kemudian, {{ui:Move pin}} mengalihkan mana-mana pin). Setiap rekod mempunyai nombornya sendiri (RFI-0001, SUB-0001, LOG-0001), tajuk, teks, status, penerima tugas, tarikh akhir, utas balasan dan senarai nama lampiran. Lihat [Jejak RFI, penyerahan dan log harian](topic:field-records).
- **Lihat apa yang lewat.** Tapis senarai mengikut jenis, status, tarikh akhir (tertunggak, perlu dalam 7 hari, ada atau tiada tarikh akhir), helaian ini atau semua helaian, carian teks, atau {{ui:Assigned to me}}. Rekod yang melepasi tarikh akhirnya dan masih menunggu ditandakan **Tertunggak**, dalam merah, pada senarai dan pada pinnya. Lihat [Cari apa yang penting](topic:field-records#find-what-matters).
- **CSV dan BCF.** {{ui:CSV}} menulis rekod yang disenaraikan sebagai hamparan; {{ui:BCF}} menulisnya sebagai topik BCF, setiap satu dengan syot tempatnya pada helaian. Kedua-duanya mengikut penapis. Lihat [Eksport](topic:field-records#export).
- **Luar talian, dan dua salinan menjadi satu.** Rekod disimpan dalam PDF dan tidak memerlukan rangkaian, jadi tablet di tapak boleh menambah, menjawab dan menyimpannya. Di pejabat, {{ui:Merge}} menggabungkan rekod salinan lain bagi PDF yang sama mengikut id mereka, sebagai satu langkah buat asal. Lihat [Simpan, luar talian dan menggabungkan salinan](topic:field-records#save-offline-and-merging-copies).

### Pembantu AI

- **Lebih banyak yang boleh dilakukan pembantu.** Pembantu anda sendiri, disambungkan melalui CadCraft Studio, kini boleh menetapkan status markup (`markup_status`, dilog dalam utasnya), membalas dalam utas (`markup_reply`) dan mengeksport senarai {{ui:Markups}} sebagai CSV atau BCF (`markups_export`, apa yang dipaparkan senarai dengan penapisnya). Setiap perubahan ialah satu langkah buat asal, ditandatangani dengan nama pembantu. Lihat [Apa yang boleh diminta oleh pembantu](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Dalam setiap aplikasi

- **Unit.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} mempunyai satu senarai setiap satu untuk panjang, luas, isipadu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrif unit (kaki tinjauan AS ialah unit tersendiri). Matikan unit yang tidak pernah anda gunakan dan ia keluar daripada senarai unit; bintangkan satu dan kerja baharu bermula dalam unit itu. Fail sentiasa mengekalkan unitnya sendiri. Dalam MarkupCraft, unit ukuran dan kedudukan dalam {{ui:Settings}} › {{ui:MarkupCraft}} dan unit dalam kotak dialog kalibrasi mengikut suis; bintang menetapkan unit ukuran sehingga anda menyimpan tetapan MarkupCraft sendiri; dan jarak sebenar yang anda taip semasa kalibrasi boleh membawa tanda mana-mana unit, seperti `3 yd` atau `1.5 km`. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Susun atur yang lebih padat dan panel yang boleh dikemas.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besarnya). Setiap panel sisi mempunyai bar tajuk nipis: seret untuk melekapkan atau menerapungkan panel, lepaskan pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pin untuk meluncur ke tepi, atau sembunyikannya dan panggil semula dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Kotak dialog boleh dialihkan.** Seret kotak dialog mengikut bar tajuknya keluar dari laluan lukisan; ia kembali ke tempat anda meninggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alihkan kotak dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang dikerjakan untuk pembantu anda sendiri (kemaskan lukisan, plot satu set, semak lukisan, tanya model soalan, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukannya, dan setiap satu diulang oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam bahasa Inggeris.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (tiada fail untuk sistem anda lagi, tiada rangkaian, tandatangan tidak sah) dan bukannya hanya "Selesai", dan berhenti memunculkan semula kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan dan pakej Microsoft Store dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:More info}}, kemudian {{ui:Run anyway}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Open}}. CadCraft Studio belum berada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan cerun dalam {{ui:Units}} disimpan, tetapi belum ada kotak yang membacanya.
- Rekod medan tidak dikongsi dalam sesi langsung CadCraft Studio (sesi langsung hanya membawa markup); bawa salinan bersama dengan {{ui:Merge}}.
- Gabung mengambil rekod sebagai keseluruhan daripada salinan yang diubah terakhir: jika dua orang mengubah medan berbeza bagi satu rekod, medan salinan terkemudian menang. Utas dan nama lampiran digabungkan.
- Lampiran hanyalah nama; fail kekal di tempatnya. Tiada pasukan, pemberitahuan atau projek awan untuk rekod, dan pembantu belum mempunyai alat untuk rekod.
- Rekod medan diuji dalam pelayar pada saiz telefon dan tablet dengan rangkaian diputuskan, tetapi belum diuji secara manual pada tablet sebenar.
- Masih dari 0.6: memusingkan objek halaman ke sebarang sudut, melukis bentuk baharu terus ke dalam halaman, menukar fon atau saiz garisan, dan teks yang mengalir merentasi beberapa baris. Salinan tersimpan dengan suntingan halaman belum dibuka dalam Acrobat.
- Masih dari 0.5: membuat asal perubahan halaman (seperti menambah halaman kosong), membaca teks daripada helaian yang diimbas, dan sesi langsung melebihi rangkaian anda sendiri.

Senarai penuh yang lain ada dalam [Apa yang belum dibina](topic:not-built-yet).
