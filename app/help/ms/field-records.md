---
title: Jejak RFI, penyerahan dan log harian
summary: Letakkan RFI, penyerahan dan log harian pada helaian, dengan nombor, penerima tugasan, tarikh akhir dan utas; tapis item yang tertunggak; eksport CSV atau BCF; kerja luar talian dan gabungkan salinan.
keywords: rfi, permintaan maklumat, penyerahan, log harian, laporan medan, diari tapak, pembinaan, tertunggak, tarikh akhir, ditugaskan kepada saya, utas, lampiran, gabung, luar talian, tablet, bcf, csv, medan
from: 95039c5a
---

Tab {{ui:Medan}} menyimpan tiga jenis rekod di sebelah markup anda. Setiap rekod dikaitkan dengan satu helaian; RFI atau penyerahan juga mempunyai pin di tempat pada helaian yang berkaitan.

- **RFI**: soalan untuk pasukan reka bentuk. Status: Terbuka, Dijawab, Ditutup.
- **Penyerahan**: sesuatu yang perlu disemak sebelum kerja diteruskan. Status: Terbuka, Dalam semakan, Diluluskan, Diluluskan dengan catatan, Semak semula dan hantar semula, Ditutup.
- **Log harian**: cuaca pada hari itu, bilangan orang di tapak dan kerja yang dilakukan. Status: Draf, Muktamad.

Setiap rekod mempunyai nombor sendiri mengikut jenisnya (RFI-0001, SUB-0001, LOG-0001), tajuk, teks, penerima tugasan, tarikh akhir, utas balasan dan senarai nama lampiran.

## Tambah satu

1. Buka tab {{ui:Medan}} dan pilih {{ui:RFI}} atau {{ui:Penyerahan}}.
2. Ketik atau klik helaian tempat ia patut berada. Pin muncul dan rekod dibuka dalam tab.
3. Isi tajuk, soalan atau huraian, kepada siapa ia ditugaskan dan bila ia perlu siap.

Log harian ditambah pada helaian yang dibuka tanpa pin. {{ui:Letak pin}} meletakkan pin kemudian; {{ui:Alih pin}} mengalihkan mana-mana pin. Mengetik pin pada helaian membuka rekodnya.

## Jawab dan jejak

Tukar {{ui:Status}} dan perubahan itu dicatat dalam utas. Tulis balasan dan pilih {{ui:Hantar balasan}} (Ctrl+Enter juga menghantar). Lampiran hanya nama: taip satu nama atau pilih fail, dan senarai memberitahu pasukan apa yang dikaitkan dengan rekod. Fail itu sendiri kekal di tempat asalnya.

Rekod yang tarikh akhirnya telah berlalu dan masih menunggu (RFI yang belum Dijawab atau Ditutup, penyerahan yang belum diputuskan) ditanda **Tertunggak**, dalam warna merah, pada senarai dan pada pinnya.

## Cari yang penting

Penapis berada di atas senarai: jenis, status, tarikh akhir (tertunggak, perlu siap dalam 7 hari, ada atau tiada tarikh akhir), helaian ini atau semua helaian, carian teks, dan {{ui:Ditugaskan kepada saya}}, yang membandingkan penerima tugasan dengan nama yang MarkupCraft kenali anda (lihat [Tetapkan nama anda](topic:set-your-name)). Baris di bawah penapis mengira apa yang dipaparkan dan apa yang tertunggak.

## Eksport

{{ui:CSV}} menulis rekod yang disenaraikan sebagai hamparan. {{ui:BCF}} menulisnya sebagai topik BCF, setiap satu dengan tangkapan kedudukannya pada helaian, supaya alat BCF lain boleh menyenaraikannya. Kedua-duanya mengikut penapis.

## Simpan, luar talian dan gabungkan salinan

Rekod disimpan dalam PDF apabila anda menyimpannya, dan kembali apabila anda membukanya. Tiada keperluan rangkaian: tambah, sunting, balas dan simpan pada tablet di ruang bawah tanah, kemudian bawa balik PDF itu. PDF lama, dan PDF daripada program lain, dibuka seperti biasa.

Untuk menggabungkan dua salinan, buka satu dan pilih {{ui:Gabung}}, kemudian pilih salinan lain bagi PDF yang sama. Rekod dicantum mengikut id-nya:

- rekod yang hanya ada dalam satu salinan akan ditambah;
- rekod yang ada dalam kedua-dua salinan mengambil medannya (tajuk, teks, status, penerima tugasan, tarikh akhir) daripada salinan yang diubah paling akhir, sebagai satu keseluruhan, jadi jika dua orang mengubah medan berlainan bagi rekod yang sama, versi salinan yang lebih lewat menang; utas dan nama lampiran daripada kedua-dua salinan digabungkan;
- jika kedua-dua salinan memberi nombor yang sama kepada rekod baharu, rekod yang tiba mendapat nombor kosong seterusnya;
- rekod yang dibuang dalam satu salinan kekal dibuang melainkan ia disunting selepas itu.

Satu penggabungan ialah satu langkah {{ui:Buat asal}}.

## Had

- Rekod belum dikongsi oleh Live TeamWork; gunakan {{ui:Gabung}}.
- Tiada pasukan, pemberitahuan atau projek awan untuk rekod dalam versi ini.
- Halaman yang dipadam daripada PDF membawa rekodnya sekali (pengesahan halaman mengira rekod tersebut).
