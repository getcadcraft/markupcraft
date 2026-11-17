---
title: Kotak alat
summary: Simpan markup yang sudah diberi gaya sebagai alat yang dapat dipakai ulang, gambar dengannya, dan bagikan kotak Anda dengan kantor sebagai file.
keywords: kotak alat, alat, set alat, alat kustom, markup tersimpan, favorit, standar kantor, impor, ekspor, bagikan, json
from: 7dfa36e0
---

Tab {{ui:Alat}} menyimpan **kotak alat** Anda: markup yang disimpan beserta tampilannya, siap digambar lagi. Sebuah alat menyimpan jenis, warna, lebar garis, isian, opasitas, ukuran teks, dan subjek markup, ditambah kata-kata stempel, nama grup hitungan, atau teks awal kotak teks atau callout.

## Alat yang Anda mulai dengan

Kotak baru berisi enam alat: "Awan revisi" (merah), "Awan pertanyaan" (biru), "Penyorot kuning", "Callout RFI" (biru, dimulai dengan "RFI: "), "Verifikasi lapangan" (callout oranye yang bertuliskan "Verifikasi lapangan.") dan "Disetujui dengan catatan" (sebuah stempel).

## Menggambar dengan alat

1. Buka tab {{ui:Alat}}.
2. Klik sebuah alat. Ia tampak ditekan, dan alat yang sesuai di bilah alat aktif.
3. Gambar seperti biasa. {{ui:Properti}} menampilkan 'Menggambar dengan "<alat>" dari kotak alat.'

Selama alat kotak aktif, perubahan yang Anda buat di {{ui:Properti}} sebelum menggambar berlaku untuk alat itu untuk saat ini, tanpa mengubah alat yang tersimpan atau pengaturan alat normal Anda. Memilih tombol bilah alat, atau menekan tombol sebuah alat, kembali ke alat biasa.

## Simpan alat Anda sendiri

1. Gambar markup dan beri gaya sesuai keinginan: warna, garis, isian, subjek, kata-kata stempel.
2. Pilih markup itu.
3. Pilih {{ui:Simpan yang dipilih sebagai alat}} di tab {{ui:Alat}}, atau {{ui:Simpan sebagai alat}} di {{ui:Properti}}.
4. Ketik {{ui:Nama alat}} dan pilih {{ui:Simpan alat}}.

Hasil: alat ditambahkan di akhir kotak, dan tab {{ui:Alat}} terbuka untuk menampilkannya.

## Stempel dari pilihan

Pilih beberapa markup (atau konten halaman dengan alat {{ui:Konten}}), lalu pilih {{ui:Simpan pilihan sebagai stempel…}} di {{ui:Lainnya}} atau di menu klik kanan. Kotak mendapat satu stempel yang memuat semuanya ("Stempel: 3 markup bersama"). Klik itu, lalu klik di lembar mana pun: markup mendarat bersama, di tengah tempat Anda mengklik, sebagai markup baru atas nama Anda; konten halaman digambar ke halaman di sana. Stempel ini disimpan dan dibagikan bersama kotak seperti alat lain.

## Buang alat

Pilih × di ujung baris alat, lalu {{ui:Buang}}. Markup yang sudah digambar dengannya tetap seperti semula.

## Tempat kotak disimpan

Kotak disimpan **di peramban ini, di komputer ini**. Peramban atau komputer lain memiliki kotaknya sendiri (dimulai dengan enam alat bawaan), jendela privat melupakannya saat ditutup, dan menghapus data situs ini di pengaturan peramban akan menghapusnya.

Jika peramban tidak mau menyimpannya (penyimpanan dimatikan, atau penuh), bilah status menyatakan: "Kotak alat tidak dapat disimpan di peramban ini (penyimpanan mati atau penuh). Ekspor untuk menyimpannya."

:::safari
Safari dapat menghapus data tersimpan sebuah situs web jika Anda lama tidak memakai situs itu. Ekspor kotak Anda sesekali agar dapat mengimpornya kembali.
:::

**Ekspor kotak Anda sebagai cadangan**, terutama setelah membuat alat yang Anda andalkan.

## Bagikan kotak dengan kantor Anda

1. Atur alat sekali saja.
2. Pilih {{ui:Ekspor}}. Anda mendapatkan "MarkupCraft tool chest.json".
3. Simpan file itu di tempat kantor menyimpan standarnya, atau kirim ke rekan-rekan.
4. Semua orang lain memilih {{ui:Impor}} di tab {{ui:Alat}} mereka, lalu memilih file itu.

Hasil: "Diimpor 12 alat dari "MarkupCraft tool chest.json"." Alat yang berasal dari kotak yang sama menggantikan salinan lamanya, sehingga mengimpor kotak kantor yang diperbarui menyegarkan alat-alat itu alih-alih menggandakannya; alat baru ditambahkan. Satu kotak memuat hingga 500 alat.

MarkupCraft memeriksa setiap nilai dalam file yang diimpor dan melewati yang tidak dapat dipakai ("2 dilewati (tidak dapat dipakai)"). File yang bukan kotak ditolak: "File ini bukan kotak alat MarkupCraft." atau "File ini bukan kotak alat (bukan JSON)."

File kotak alat dari program markup lain tidak dapat diimpor.
