---
title: File yang dibuka dan disimpan MarkupCraft
summary: PDF masuk, salinan PDF yang sudah diberi markup keluar, ditambah file CSV, BCF, dan kotak alat; ke mana masing-masing pergi, online dan offline.
keywords: pdf, buka, simpan, ekspor, unduh, csv, bcf, bcfzip, json, kotak alat, jenis file, format, unggah, kata sandi, terenkripsi
from: b3045b4c
---

## Yang dibuka MarkupCraft

| File | Cara | Yang terjadi |
|---|---|---|
| PDF (`.pdf`) | {{ui:Buka}}, {{key:Mod+O}}, atau jatuhkan di area lembar. Beberapa sekaligus tidak masalah. | Setiap halaman menjadi satu lembar. Markup yang sudah ada di file dibaca kembali (di bawah). |
| Kotak alat (`.json`) | tab {{ui:Alat}}, lalu {{ui:Impor}} | Alat ditambahkan ke kotak alat Anda. Lihat [Kotak alat](topic:tool-chest). |

Yang lain ditolak dengan "MarkupCraft membuka file PDF." di bilah status. Jika Anda menjatuhkan campuran, PDF dibuka dan bilah status menyebutkan berapa file yang bukan PDF.

### Markup yang sudah ada di PDF

- **Markup yang disimpan MarkupCraft** kembali persis seperti semula: tipe, gaya, penulis, tanggal, status, balasan, nomor daftar periksa, skala lembar, dan nama lembar apa pun yang Anda ketik.
- **Komentar dari program PDF lain** juga dibaca. Persegi panjang, elips, garis dan panah, polyline, poligon, goresan tinta (pena), kotak teks, dan catatan tempel menjadi markup MarkupCraft biasa yang dapat diedit. Balasan dan status tinjauannya ikut terbawa.
- **Semua yang lain** (sorotan teks yang dibuat dengan memilih teks, stempel program lain, dan jenis lainnya) ditampilkan apa adanya, ditandai hanya-baca. Anda dapat memilihnya, melihatnya di daftar markup, dan membalasnya, tetapi tidak dapat memindahkan, mengubah, atau menghapusnya.
- Tautan dan kolom isian formulir dibiarkan dan tidak didaftarkan.
- Skala yang disimpan program lain (viewport pengukuran) dipakai sebagai skala lembar jika MarkupCraft memahami satuannya.

### File yang tidak terbuka

- PDF yang memerlukan kata sandi: "“name” memerlukan kata sandi untuk dibuka. Buka salinan yang tidak dilindungi."
- File yang rusak atau yang sebenarnya bukan PDF: "“name” tidak dapat dibaca sebagai PDF (…)".
- PDF yang terbuka tetapi dilindungi dari perubahan tetap terbuka dengan baik. Menyimpannya ditolak (lihat di bawah).

Saat beberapa file dibuka sekaligus, yang berhasil dibuka, dan kotak bernama "Beberapa file tidak terbuka" mendaftar sisanya.

## Yang disimpan MarkupCraft

Menyimpan selalu berupa **unduhan** file baru. Halaman web tidak dapat menimpa file di komputer Anda, dan MarkupCraft tidak pernah mengubah file asli Anda.

| Anda memilih | Anda mendapat | Catatan |
|---|---|---|
| {{ui:Simpan}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Salinan PDF asli dengan setiap markup ditulis sebagai komentar PDF yang sebenarnya. Menyimpan file "(marked up)" lagi mempertahankan nama yang sama; tidak pernah menjadi "(marked up) (marked up)". Lihat [Simpan PDF yang sudah diberi markup](topic:save-the-marked-up-pdf). |
| tab {{ui:Markup}}, lalu {{ui:CSV}} | "<name> markups.csv" | Markup seperti yang tercantum di daftar (filter berlaku). |
| tab {{ui:Markup}}, lalu {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 untuk alat koordinasi BIM, satu snapshot per markup. Lihat [Dasar-dasar BCF](topic:bcf-basics). |
| tab {{ui:Daftar periksa}}, lalu {{ui:Ekspor CSV}} | "<name> punch list.csv" | Item daftar periksa menurut urutan nomor. |
| tab {{ui:Alat}}, lalu {{ui:Ekspor}} | "MarkupCraft tool chest.json" | Kotak alat Anda, untuk dibagikan atau disimpan. |

"<name>" adalah nama file PDF pertama yang terbuka tanpa ".pdf".

File CSV terbuka di spreadsheet apa pun. Formatnya UTF-8 dengan penanda yang dicari spreadsheet, sehingga nama dengan aksen tampil dengan benar. Sel yang diawali =, +, - atau @ diberi apostrof di depannya agar spreadsheet tidak pernah menjalankannya sebagai rumus.

## Ke mana unduhan pergi

Peramban Anda yang menentukan: biasanya folder Downloads, atau bertanya setiap kali jika Anda mengaturnya demikian. Lihat [Peramban dan komputer](common:browsers#what-differs-between-browsers).

:::chromium
Saat Anda menyimpan semua file yang berubah dalam satu set sekaligus, Chrome dan Edge mungkin bertanya apakah situs ini boleh mengunduh beberapa file. Pilih {{ui:Izinkan}}, atau Anda hanya mendapat salinan pertama.
:::

:::safari
Di iPad, Safari bertanya sebelum setiap unduhan dan menaruh file di aplikasi File, di bawah Unduhan. Di Mac, file masuk ke folder yang diatur di pengaturan Safari.
:::

## Online dan offline

- **PDF Anda tidak pernah meninggalkan komputer ini**, baik online maupun offline. Tidak ada unggahan ke mana pun.
- Pembaca PDF dimuat saat pertama kali Anda membuka PDF ("Memuat pembaca PDF…"), dan penulis PDF saat pertama kali Anda menyimpan ("Memuat penulis PDF…") atau membuka file yang sudah berisi komentar.
- Dengan koneksi, keduanya dimuat dari situs web.
- **Untuk bekerja tanpa koneksi,** pilih {{ui:Simpan untuk offline}} di bilah atas selagi Anda online. Tombol menghitung "Menyimpan N dari M" lalu berubah menjadi "Siap offline". Salinan itu mencakup pembaca PDF dan penulis PDF (sekitar 6 MB seluruhnya) serta bantuan ini, sehingga setelahnya membuka, memberi markup, dan menyimpan PDF semuanya berfungsi offline di peramban ini.
- Jika tombol berbunyi "Tidak dapat menyimpan", sebagian file tidak terunduh: periksa koneksi dan klik lagi. Jika berbunyi "Offline tidak tersedia", jendela peramban ini tidak dapat menyimpan salinan offline (jendela pribadi dan beberapa komputer yang dikelola); gunakan jendela biasa.
- Untuk memperbarui atau membuang salinan, klik "Siap offline" dan pilih "Simpan lagi (ambil versi terbaru)" atau "Hapus salinan offline". Selengkapnya di [Bekerja offline](common:offline).

:::offline
Anda sedang offline. Jika bilah atas berbunyi "Siap offline", semuanya berfungsi, termasuk menyimpan. Jika tidak, dan Anda belum menyimpan di tab ini, {{ui:Simpan}} dapat gagal dengan "Penulis PDF tidak dapat dimuat". Markup Anda masih ada di tab: biarkan tetap terbuka, online kembali, lalu pilih {{ui:Simpan}} lagi.
:::

## Hal yang perlu diketahui

- Set gambar yang besar perlu waktu untuk dibuka: MarkupCraft membaca teks setiap halaman untuk menemukan nomor lembar. Bilah status menghitung lembar selama prosesnya.
- Membuka PDF yang sama dua kali menambahkan lembarnya dua kali. Tutup set itu dan buka lagi jika itu terjadi.
- {{ui:Tutup}} menutup semua file yang terbuka sekaligus. Jika ada yang punya markup yang belum disimpan, ia bertanya: {{ui:Batal}}, {{ui:Tutup tanpa menyimpan}} atau {{ui:Simpan salinan dulu}}.
- Penyimpanan cloud belum tersedia, dan belum ada versi desktop. Simpan PDF Anda bersama file proyek lainnya dan buat cadangan seperti biasa. Lihat [Ke mana file Anda pergi](common:your-files).
