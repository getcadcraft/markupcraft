---
title: Membuat daftar periksa
summary: Ubah markup menjadi item punch bernomor dengan penanggung jawab, tanggal tenggat, dan status, lalu ekspor daftarnya.
keywords: punch list, punch, daftar kekurangan, cacat, isu lapangan, observasi, tugaskan, penanggung jawab, tanggal tenggat, serah terima, panduan langkah demi langkah, nomor
from: b98b38e6
---

Item punch adalah markup dengan nomor, penanggung jawab, tanggal tenggat, dan status item. Nomor digambar di lembar di samping markup, sehingga lembar yang tercetak dan daftar saling cocok.

## Tambahkan item

1. Beri markup pada setiap isu di lembar: awan, callout, catatan, apa pun.
2. Pilih satu atau lebih dari markup itu (lihat [Pilih, pindahkan, dan ubah markup](topic:select-and-edit)).
3. Buka tab {{ui:Daftar periksa}} dan pilih {{ui:Tambahkan yang dipilih ke daftar periksa}}, atau pilih {{ui:Tambahkan ke daftar periksa}} di {{ui:Properti}}.

Hasil: setiap markup mendapat nomor berikutnya (1, 2, 3…), sesuai urutan lembar lalu urutan saat digambar. Lencana bernomor muncul di lembar, dan bilah status menampilkan "3 item ditambahkan ke daftar periksa." Markup yang sudah memiliki nomor, dan komentar hanya-baca, dilewati.

## Isi rinciannya

Di tab {{ui:Daftar periksa}}, setiap item menampilkan nomor, subjek, teks, lembar, dan statusnya, dengan tiga kolom isian di bawahnya. Kolom yang sama juga ada di {{ui:Properti}} di bawah "Daftar periksa" saat markup dipilih:

- {{ui:Penanggung jawab}}: nama atau bidang kerja, sebagai teks bebas.
- {{ui:Tenggat}}: tanggal, dari pemilih tanggal.
- {{ui:Status item}}: Terbuka, Sedang dikerjakan, Siap ditinjau, atau Ditutup.

Klik judul item untuk melompat ke lembarnya.

Status item terpisah dari status tinjauan markup (Terbuka, Diterima, Ditolak, Selesai). Gunakan status item untuk pekerjaannya, dan status tinjauan untuk komentarnya.

## Lepaskan item

Pilih markup dan pilih {{ui:Keluarkan dari daftar periksa}} di {{ui:Properti}}. Markup tetap ada; hanya nomornya yang dilepas. Selama set terbuka, nomor tidak dipakai ulang: item berikutnya tetap mendapat nomor baru berikutnya, sehingga celah berarti sebuah item telah dilepas. Saat file dibuka lagi, penomoran dilanjutkan setelah nomor tertinggi di dalamnya.

## Ekspor daftar

Pilih {{ui:Ekspor CSV}} di tab {{ui:Daftar periksa}}. Anda mendapat "<name> punch list.csv" dengan kolom No., Lembar, File, Halaman, Item, Komentar, Penanggung jawab, Tenggat, Status, Status markup, Penulis, dan Dibuat, diurutkan berdasarkan nomor. Buka di aplikasi spreadsheet apa pun.

Nomor punch, penanggung jawab, tenggat, dan status item juga disimpan di dalam PDF yang sudah diberi markup, sehingga kembali saat Anda membukanya lagi. Penampil PDF lain menampilkan lencana nomor sebagai bagian dari markup. Ekspor BCF di daftar markup juga membawa penanggung jawab dan tenggat (lihat [Dasar BCF](topic:bcf-basics)).

## Di lokasi dengan tablet

Buka set di iPad, keliling lokasi, dan letakkan {{ui:Catatan}} atau gambar {{ui:Awan}} di setiap isu. Tambahkan ke daftar periksa saat Anda berjalan, dan simpan sebelum pergi. Lihat [Tinjau di iPad atau layar sentuh](topic:review-on-a-tablet).

Laporan daftar periksa sebagai PDF atau spreadsheet yang terformat, dan foto yang dilampirkan ke item, belum dibuat.
