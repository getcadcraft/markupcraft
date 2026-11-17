---
title: Cetak, dan ubah halaman PDF
summary: Cetak lembar beserta markup-nya, dan putar, pindahkan, sisipkan, hapus, atau ekstrak halaman dari PDF yang terbuka.
keywords: cetak, pencetak, kertas, halaman, putar, urutkan ulang, pindahkan halaman, sisipkan, tambah halaman, halaman kosong, hapus halaman, hilangkan halaman, ekstrak, pisahkan, operasi halaman
from: 81832d9b
---

Menu {{ui:Halaman}} di grup {{ui:File}} bekerja pada PDF tempat lembar yang terbuka berasal. PDF Anda di komputer ini tidak pernah berubah: perubahan menjadi bagian dari salinan yang Anda simpan.

## Cetak

1. Tekan {{key:Mod+P}}, atau pilih {{ui:Halaman}}, lalu {{ui:Print…}}.
2. Saat lebih dari satu lembar terbuka, pilih apa yang akan dicetak: {{ui:Lembar ini}}, setiap halaman dari file ini, seluruh set, atau halaman yang Anda ketik (misalnya `1-3, 5`).
3. Pilih {{ui:Cetak}}. Dialog pencetak peramban Anda terbuka: pilih pencetak, kertas, dan skala di sana.

Markup tercetak seperti tampilannya di lembar: markup digambar ke halaman salinan yang dikirim ke pencetak. Komentar yang dibuat program lain tercetak sesuai cara PDF-nya.

:::safari firefox
Jika peramban Anda tidak dapat mencetak dari dalam halaman, lembar akan dibuka sebagai PDF di tab baru. Cetak dari sana.
:::

## Putar halaman

Pilih {{ui:Halaman}}, lalu {{ui:Putar halaman searah jarum jam}} atau {{ui:Putar halaman berlawanan arah jarum jam}}. Lembar yang terbuka berputar seperempat putaran. Markup-nya tetap di tempatnya pada gambar, dan teks yang Anda ketik ikut berputar dengan halaman sehingga tetap terbaca tegak.

## Pindahkan halaman

Pilih {{ui:Halaman}}, lalu {{ui:Pindahkan halaman ke depan}} atau {{ui:Pindahkan halaman ke belakang}}. Lembar yang terbuka bertukar tempat dengan tetangganya di PDF-nya sendiri. Markup, skala, dan nomor lembarnya ikut berpindah.

## Sisipkan halaman

- {{ui:Sisipkan halaman dari PDF…}} memasukkan setiap halaman dari PDF lain setelah lembar yang terbuka.
- {{ui:Sisipkan halaman kosong}} menambahkan halaman kosong dengan ukuran sama setelah lembar yang terbuka, untuk sketsa dan catatan. Dalam set yang dibuat dengan {{ui:Baru}}, halaman ini juga memiliki grid set.
- Dalam set yang dibuat dengan {{ui:Baru}}, {{ui:Tambah halaman kosong}} di bawah daftar {{ui:Lembar}} menambahkan satu halaman lagi seperti yang lain di akhir. Lihat [Mulai dengan halaman kosong](topic:open-a-plan-set#start-with-blank-pages).

Halaman yang disisipkan mendapat nomor halamannya sebagai label sampai Anda menggantinya namanya. Lihat [Ganti nama lembar](topic:open-a-plan-set#rename-a-sheet).

## Hapus halaman

1. Pilih {{ui:Halaman}}, lalu {{ui:Hapus halaman…}}.
2. Ketik nomor halaman dari PDF ini, seperti `3` atau `2-4`. Halaman lembar yang terbuka sudah terisi.
3. Pilih {{ui:Hapus halaman}}. Jika halaman-halaman itu memiliki markup, MarkupCraft memberi tahu berapa jumlahnya dan bertanya lagi.

Sebuah PDF selalu menyisakan setidaknya satu halaman. Untuk membuang seluruh file, tutup set dan buka file yang masih Anda perlukan.

## Ekstrak halaman

Pilih {{ui:Halaman}}, lalu {{ui:Ekstrak halaman…}}, dan ketik halamannya. Halaman itu diunduh sebagai PDF baru bernama "<file> (pages 1-3).pdf", dengan markup-nya sebagai komentar yang tetap bisa Anda edit. File yang terbuka tetap seperti semula.

## Yang perlu diketahui

- **Urungkan berhenti di perubahan halaman.** {{key:Mod+Z}} membatalkan markup yang digambar setelahnya, tetapi tidak perubahan halamannya atau apa pun sebelumnya. Tutup tanpa menyimpan untuk mulai lagi dari PDF asli Anda.
- Nomor halaman dihitung per PDF, bukan seluruh set. Memindahkan halaman menjaganya tetap di dalam file asalnya.
- Halaman yang berubah adalah pekerjaan yang belum disimpan: {{ui:Simpan}} mengunduh salinan yang sudah diatur ulang, dan saat keluar Anda akan ditanya terlebih dahulu.
