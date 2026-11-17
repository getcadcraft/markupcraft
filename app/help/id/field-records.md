---
title: Lacak RFI, submittal, dan log harian
summary: Tempatkan RFI, submittal, dan log harian pada lembar, dengan nomor, penerima tugas, tenggat, dan utas; saring yang terlambat; ekspor CSV atau BCF; bekerja offline dan gabungkan salinan.
keywords: rfi, permintaan informasi, submittal, log harian, laporan lapangan, buku harian lokasi, konstruksi, terlambat, tenggat, ditugaskan kepada saya, utas, lampiran, gabungkan, offline, tablet, bcf, csv, lapangan
from: 95039c5a
---

Tab {{ui:Lapangan}} menyimpan tiga jenis rekaman di samping markup Anda. Setiap rekaman terikat pada sebuah lembar; RFI atau submittal juga memiliki pin di tempat pada lembar yang dimaksud.

- **RFI**: pertanyaan untuk tim desain. Status: Terbuka, Dijawab, Ditutup.
- **Submittal**: sesuatu yang harus ditinjau sebelum pekerjaan dilanjutkan. Status: Terbuka, Dalam tinjauan, Disetujui, Disetujui dengan catatan, Revisi dan kirim ulang, Ditutup.
- **Log harian**: cuaca hari itu, jumlah orang di lokasi, dan pekerjaan yang dilakukan. Status: Draf, Final.

Setiap rekaman memiliki nomor sendiri dalam jenisnya (RFI-0001, SUB-0001, LOG-0001), judul, teks, penerima tugas, tenggat, utas balasan, dan daftar nama lampiran.

## Tambahkan satu

1. Buka tab {{ui:Lapangan}} dan pilih {{ui:RFI}} atau {{ui:Submittal}}.
2. Ketuk atau klik lembar tempat rekaman itu berada. Pin muncul dan rekaman terbuka di tab.
3. Isi judul, pertanyaan atau deskripsi, siapa yang ditugaskan, dan kapan tenggatnya.

Log harian ditambahkan ke lembar yang terbuka tanpa pin. {{ui:Tempatkan pin}} memasang satu nanti; {{ui:Pindahkan pin}} memindahkan pin mana pun. Mengetuk pin pada lembar membuka rekamannya.

## Jawab dan lacak

Ubah {{ui:Status}} dan perubahannya dicatat di utas. Tulis balasan lalu pilih {{ui:Kirim balasan}} (Ctrl+Enter juga mengirim). Lampiran hanya berupa nama: ketik satu atau pilih file, dan daftar memberi tahu tim apa yang menyertai rekaman. File itu sendiri tetap di tempatnya.

Rekaman yang tenggatnya sudah lewat dan masih menunggu (RFI yang belum Dijawab atau Ditutup, submittal yang belum diputuskan) diberi tanda **Terlambat**, dalam warna merah, pada daftar dan pada pinnya.

## Temukan yang penting

Filter berada di atas daftar: jenis, status, tenggat (terlambat, jatuh tempo dalam 7 hari, punya atau tidak punya tenggat), lembar ini atau semua lembar, pencarian teks, dan {{ui:Ditugaskan kepada saya}}, yang membandingkan penerima tugas dengan nama yang dikenal MarkupCraft untuk Anda (lihat [Atur nama Anda](topic:set-your-name)). Baris di bawah filter menghitung apa yang ditampilkan dan apa yang terlambat.

## Ekspor

{{ui:CSV}} menulis rekaman yang tercantum sebagai spreadsheet. {{ui:BCF}} menulisnya sebagai topik BCF, masing-masing dengan cuplikan posisinya pada lembar, sehingga alat BCF lain dapat mendaftarkannya. Keduanya mengikuti filter.

## Simpan, offline, dan menggabungkan salinan

Rekaman disimpan di dalam PDF saat Anda menyimpannya, dan kembali saat Anda membukanya. Tidak perlu jaringan: tambah, sunting, balas, dan simpan di tablet di ruang bawah tanah, lalu bawa kembali PDF-nya. PDF lama, dan PDF dari program lain, terbuka seperti biasa.

Untuk menyatukan dua salinan, buka salah satunya dan pilih {{ui:Gabungkan}}, lalu pilih salinan lain dari PDF yang sama. Rekaman digabungkan berdasarkan id-nya:

- rekaman yang hanya ada di satu salinan ditambahkan;
- rekaman yang ada di kedua salinan mengambil isinya (judul, teks, status, penerima tugas, tenggat) dari salinan yang terakhir diubah, secara utuh; jadi jika dua orang mengubah bidang yang berbeda pada rekaman yang sama, versi salinan yang lebih baru yang menang; utas dan nama lampiran dari kedua salinan digabungkan;
- jika kedua salinan memberi nomor yang sama pada rekaman baru, yang datang kemudian mendapat nomor bebas berikutnya;
- rekaman yang dihapus di satu salinan tetap terhapus, kecuali jika diedit setelahnya.

Penggabungan adalah satu langkah urungkan.

## Batasan

- Rekaman belum dibagikan oleh Live TeamWork; gunakan Gabungkan.
- Tidak ada tim, notifikasi, atau proyek cloud untuk rekaman dalam versi ini.
- Halaman yang dihapus dari PDF membawa rekamannya (konfirmasi halaman menghitungnya).
