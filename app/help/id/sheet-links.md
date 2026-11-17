---
title: Tautan lembar
summary: Buat markup melompat ke lembar lain, dan tautkan setiap callout lembar seperti 3/A-501 ke lembar dan tampilannya sekaligus dengan Tautan massal.
keywords: hyperlink, tautan, tautkan, lompat, callout lembar, callout detail, callout potongan, 3/A-501, buka lembar, kembali, tautan otomatis, tautan massal, blok judul, nomor lembar, nama lembar, tampilan, detail, ganti nama, nomori ulang, addendum, tautan pdf
from: 86a17c37
---

Tautan lembar membawa Anda dari markup ke lembar lain dalam set: dari gelembung detail ke detailnya, dari catatan ke lembar yang dirujuknya.

## Tautkan markup ke lembar

1. Pilih markup.
2. Di {{ui:Properti}}, pilih lembar di bawah {{ui:Tautan ke lembar}}.

Panah kecil muncul di sudut kanan atas markup. Untuk mengikutinya, tahan {{key:Mod}} dan klik markup, atau pilih markup lalu pilih {{ui:Ke …}} di {{ui:Properti}}. {{key:Alt+Left}} kembali ke lembar tempat Anda berasal.

Tautan menyebut lembar dengan nomornya, sehingga tetap berfungsi setelah Anda membuka ulang set atau menyisipkan isu baru (slip-sheet): tautan membuka lembar terbaru dengan nomor itu. Jika lembar itu tidak terbuka, bilah status akan menyatakannya.

## Tautkan semua callout lembar sekaligus

Pilih {{ui:Halaman}} › {{ui:Tautan massal…}}, atau {{ui:Tautkan callout lembar…}} di bawah {{ui:Cari teks}} di bagian atas panel {{ui:Lembar}}.

1. **Periksa nomor lembar.** MarkupCraft mencantumkan setiap lembar terbuka dengan nomor dan nama yang dibacanya dari blok judul lembar (atau label halamannya), serta dari mana asalnya. Perbaiki yang salah, dan ketik nomor jika tidak menemukannya (blok judul yang nomornya dicetak sebagai garis tidak memiliki teks untuk dibaca). Lalu pilih {{ui:Temukan callout}}. Perbaikan Anda menjadi satu langkah urungkan, dan menjadi label halaman di PDF yang disimpan.
2. **Tinjau daftarnya.** MarkupCraft membaca teks setiap lembar untuk mencari callout seperti "3/A-501", "5 / A501", "DETAIL 2 ON A-501", gelembung dengan "3" di atas "A-501", atau "A-501" polos dalam catatan, dan membaca judul tampilan setiap lembar (nomor detail dengan nomor lembar di bawahnya, atau nomor besar dengan judul di sampingnya). Daftar memiliki tiga bagian:
   - {{ui:Akan ditautkan}}: setiap callout, lembar yang dituju, dan tampilan pada lembar itu. Hapus centang yang tidak Anda inginkan. Jika tampilan tidak ditemukan (callout ke tampilan 7 pada lembar dengan tampilan 1 sampai 6), pilih tampilan dari daftar di sebelahnya, atau biarkan {{ui:Seluruh lembar}}.
   - {{ui:Tidak ditautkan}}: nomor lembar yang tidak dimiliki lembar terbuka mana pun, dengan jumlah callout yang menyebutnya. Pilih lembar yang dimaksud (misalnya lembar yang diberi nomor baru), dan setiap callout ke nomor itu akan tertaut ke sana. Atau biarkan tidak tertaut.
   - Berapa banyak callout yang sudah tertaut dan masih menuju tempat yang benar. Itu dibiarkan apa adanya.
3. Pilih {{ui:Buat tautan}}.

Setiap callout mendapat kotak biru tipis yang merupakan tautan lembar. {{key:Mod}}+klik padanya membuka lembar yang diperbesar ke tampilan. Satu {{key:Mod+Z}} menghapus semuanya.

Kode yang hanya menyerupai nomor lembar, seperti R-19 atau W12X26, dikecualikan: callout harus berbentuk seperti nomor lembar milik set. Nomor lembar sendiri, di blok judul dan judul tampilannya, tidak pernah menjadi callout. Lembar hasil pindai tidak memiliki teks untuk dibaca: gunakan {{ui:Baca teks (OCR)…}} terlebih dahulu, atau tautkan callout mereka satu per satu.

## Jalankan lagi saat set berubah

Tautan massal dapat dijalankan kapan saja:

- **Lembar ditambahkan**, misalnya addendum dengan A-601: buka file-nya dan jalankan Tautan massal lagi. Callout ke A-601 yang sebelumnya tidak tertaut sekarang tertaut.
- **Lembar diberi nomor baru**: perbaiki nomornya pada langkah 1. Tautan yang dibuat Tautan massal dan tidak lagi menemukan lembarnya dicantumkan di bawah {{ui:Tidak ditautkan}}; pilih lembar sekali dan semuanya mengikuti. Tautan yang berpindah ke tampilan lain diperbarui.
- Tautan yang Anda buat secara manual di {{ui:Properti}} tidak pernah diubah.

## Di PDF yang disimpan

Tautan ke lembar dalam PDF yang sama juga ditulis sebagai tautan PDF, sehingga pembaca lain melompat ke sana saat diklik. Tautan dengan tampilan membuka tampilan itu di pembaca lain (lompatan "fit rectangle" PDF); tautan tanpa tampilan membuka seluruh lembar. Tautan ke lembar di file lain dalam set hanya berfungsi di MarkupCraft.
