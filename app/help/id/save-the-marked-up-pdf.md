---
title: Simpan PDF yang sudah diberi markup
summary: Unduh salinan dengan semua markup ditulis sebagai komentar PDF standar, periksa tampilannya di pembaca PDF lain, dan lanjutkan pengerjaannya nanti.
keywords: simpan, unduh, ekspor pdf, diberi markup, anotasi, komentar, bagikan, kirim, isu, lanjutkan pengerjaan, buka kembali, bolak-balik, cetak
from: 4c198ebe
---

## Simpan

1. Pilih {{ui:Simpan}} di bilah alat, atau tekan {{key:Mod+S}}.
2. Jika beberapa file terbuka, pilih {{ui:File ini}} (file dari lembar yang sedang Anda buka) atau {{ui:Setiap file yang berubah}}. Setiap salinan diunduh terpisah.
3. Tunggu "Menyimpan <file>…" selesai. Penyimpanan pertama dalam sesi ini juga memuat penulis PDF.

Hasilnya: browser Anda mengunduh "<name> (marked up).pdf", dan bilah status melaporkannya: 'Disimpan A-Plans (marked up).pdf (24 markup, 18.2 MB). File asli tidak berubah.' Titik di samping {{ui:Simpan}} hilang.

**PDF asli Anda tidak pernah diubah.** MarkupCraft menulis file baru. Lokasinya bergantung pada pengaturan unduhan browser Anda (lihat [File yang dibuka dan disimpan MarkupCraft](topic:files#where-downloads-go)).

## Lanjutkan pengerjaan nanti

Buka salinan "(marked up)", bukan file asli, saat berikutnya. Semuanya kembali dapat diedit: markup, status, balasan, item punch, skala setiap lembar, dan nama lembar yang Anda ketik. Menyimpannya lagi akan mengunduh file dengan nama "(marked up)" yang sama; browser Anda mungkin menambahkan angka seperti "(1)" jika unduhan lama masih ada di folder. Ganti atau rapikan salinan lama sendiri.

MarkupCraft tidak menyimpan PDF dengan sendirinya. Selama Anda bekerja, ia menyimpan salinan pemulihan di browser ini, sehingga crash atau tab yang ditutup tidak menghilangkan markup Anda: saat Anda membuka MarkupCraft lagi, ia bertanya "Pulihkan pekerjaan Anda?". Lihat [Pulihkan pekerjaan Anda](common:recover). Tetap simpan sebelum menutup; jika Anda mencoba keluar dengan markup yang belum disimpan, browser akan bertanya "Tinggalkan situs?" terlebih dahulu (iPad Safari tidak).

## Yang dilihat pembaca PDF lain

Setiap markup ditulis sebagai komentar PDF standar (anotasi) dengan gambarnya sendiri, sehingga pembaca PDF mana pun menampilkannya, mencetaknya, dan mencantumkannya di panel komentar:

- **Tampilannya sama** seperti di MarkupCraft: awan dengan lengkungnya, mata panah, stempel, titik hitung, lencana nomor punch, label pengukuran.
- **Detailnya standar:** penulis, tanggal, subjek, teks komentar, dan warna.
- **Awan** adalah komentar persegi panjang atau poligon dengan batas berawan; **kotak teks** dan **callout** adalah komentar kotak teks; **catatan** adalah sticky note; goresan **pena** dan **penyorot** adalah ink; **stempel** adalah komentar stempel.
- **Panjang dan luas** adalah komentar pengukuran, dan setiap lembar yang dikalibrasi membawa skalanya, sehingga pembaca yang memahami pengukuran dapat menampilkan nilainya.
- **Balasan** adalah balasan atas komentar, dan **status** adalah keadaan tinjauan (Terbuka tampil sebagai tanpa status).
- **Nomor lembar** yang Anda ketik menjadi label halaman yang ditampilkan pembaca lain.

Beberapa hal hanya dibaca kembali oleh MarkupCraft: penerima dan tanggal jatuh tempo item punch, status item, dan beberapa detail gaya. Program lain tetap menyimpannya kecuali mereka menulis ulang komentar.

Di program lain, komentar dapat dipindahkan atau diedit seperti biasa. Jika seseorang melakukannya dan mengirim file kembali, MarkupCraft memakai posisi baru komentar saat membuka file.

Selengkapnya: [Apa yang disimpan dalam PDF](topic:what-the-pdf-keeps).

## Karakter yang tercetak sebagai "?"

Teks markup ditulis dengan font Helvetica standar yang dimiliki setiap pembaca PDF. Font ini mencakup huruf Inggris dan Eropa Barat (é, ñ, ü, ø, dan sejenisnya), tetapi tidak mencakup aksara lain, simbol di luar kumpulan itu, atau emoji. Karakter tersebut tampil baik di MarkupCraft, tetapi tercetak sebagai "?" pada salinan yang disimpan, dan pesan simpan menghitungnya: "3 karakter di luar kumpulan Eropa Barat tercetak sebagai "?" pada salinan." Eja kata seperti itu secara lengkap, atau gunakan pengganti sederhana (misalnya "dia." untuk simbol diameter).

## File yang tidak dapat disimpan

- **PDF yang dilindungi:** "PDF ini dilindungi (terenkripsi), sehingga salinan yang diberi markup tidak dapat ditulis. Minta salinan yang tidak dilindungi." Anda tetap dapat meninjaunya di layar, dan mengekspor CSV serta BCF.
- Jika penyimpanan gagal karena alasan lain, kotak bernama "Tidak dapat menyimpan <file>" menampilkan alasannya. Markup Anda tetap ada di tab; tidak ada yang hilang sampai Anda menutupnya.

## Meratakan dan mencetak

Belum ada perintah untuk meratakan (membakar markup ke halaman) dan belum ada perintah cetak. Untuk mencetak, buka salinan yang disimpan di pembaca PDF apa pun dan cetak dengan komentar ditampilkan.
