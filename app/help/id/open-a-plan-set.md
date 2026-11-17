---
title: Buka set rencana dan pindah antar lembar
summary: Buka satu PDF atau banyak, atau mulai dengan halaman kosong, cari lembar berdasarkan nomor atau nama, zoom dan geser, dan ganti nama lembar jika file memberinya nama yang salah.
keywords: buka, baru, halaman kosong, lembar kosong, sketsa, grid, tanpa judul, set rencana, lembar, halaman, thumbnail, label halaman, nomor lembar, kepala gambar, ganti nama, navigasi, zoom, geser, paskan, cari lembar
from: 1e7f4d50
---

## Buka set

1. Pilih {{ui:Buka}} di bilah alat, atau tekan {{key:Mod+O}}.
2. Di pemilih file, pilih setiap PDF dari set ({{pick:mac=tahan ⌘ dan klik setiap file|windows linux=tahan Ctrl dan klik setiap file}}, atau pilih rentang dengan Shift), lalu konfirmasi.
   Atau seret file dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} ke area lembar. "Lepaskan PDF untuk membukanya" muncul saat Anda menyeret.
3. Tunggu sementara bilah status menampilkan "Membuka <file>…". Untuk file besar, bilah status menghitung: "(10 dari 60 lembar)".

Hasil: daftar {{ui:Lembar}} menampilkan setiap halaman dari setiap file, sesuai urutan Anda membukanya, dan bilah status menampilkan sesuatu seperti "3 file dibuka (42 lembar dalam set)." Jika file sudah memiliki komentar, ditambahkan berapa banyak yang dibaca.

Untuk menambah file ke set nanti, buka dengan cara yang sama. File baru bergabung di akhir daftar.

## Mulai dengan halaman kosong

Untuk membuat sketsa atau mencatat tanpa gambar, buat halaman kosong alih-alih membuka PDF:

1. Pilih {{ui:Baru}} di bilah alat, atau {{ui:Mulai dengan halaman kosong}} di layar awal, atau tekan {{key:Mod+N}} jika peramban Anda mengizinkan halaman memakainya (aplikasi desktop dan Studio selalu bisa).
2. Pilih {{ui:Ukuran kertas}}: Letter, Tabloid, atau ANSI B, ARCH D, ARCH E, A4, A3, atau A1, dan {{ui:Potret}} atau {{ui:Lanskap}}.
3. Pilih {{ui:Grid}}: {{ui:Tidak ada}}, {{ui:Titik}}, atau {{ui:Kotak}}. Grid berjarak setiap 1/4 in dengan garis lebih tebal setiap inci pada kertas inci, dan setiap 5 mm dengan garis lebih tebal setiap 10 mm pada kertas metrik. Grid ikut tercetak di halaman.
4. Ketik berapa {{ui:Halaman}} yang Anda inginkan, dari 1 sampai 20, lalu pilih {{ui:Buat}}.

Hasil: PDF baru bernama "Untitled-1.pdf" (lalu "Untitled-2.pdf", dan seterusnya) terbuka seperti file lain, dibuat di komputer ini. Setiap alat bekerja padanya, dan {{ui:Simpan}} mengunduh "Untitled-1 (marked up).pdf". MarkupCraft mengingat pilihan Anda untuk lain kali.

Halaman tidak memiliki skala: bilah status menampilkan "Belum dikalibrasi". Grid bukan skala. Untuk mengukur, kalibrasi lembar atau pilih skala terlebih dahulu; lihat [Kalibrasi dan ukur](topic:calibrate-and-measure).

Untuk menambah halaman ke set kosong, buka salah satu lembarnya dan pilih {{ui:Tambah halaman kosong}} di bawah daftar {{ui:Lembar}}. Halaman baru memiliki kertas dan grid yang sama, dan ditempatkan di akhir. Seperti setiap perubahan halaman, ini tidak bisa dibatalkan; lihat [Cetak, dan ubah halaman](topic:pages-and-printing).

## Cara lembar mendapat nama

MarkupCraft memberi setiap lembar nama "<nomor lembar> — <judul>", misalnya "A-101 — Denah lantai", dari yang pertama ditemukan di antara berikut ini:

1. Nama yang Anda ketik dengan {{ui:Ganti nama lembar}} (di bawah).
2. Label halaman PDF, saat orang yang membuat PDF mengaturnya (misalnya "A-101").
3. Blok judul: MarkupCraft membaca teks halaman dan mencari sesuatu yang berbentuk seperti nomor lembar (A-101, A1.01, M-201A, KA1-1), dengan memprioritaskan sudut kanan bawah, strip kanan, dan pita bawah, lalu mengambil tulisan terbesar di dekatnya sebagai judul.
4. Jika tidak ada, nama file dan halaman: "Plans — halaman 3".

Untuk melihat yang mana yang dipakai, tekan {{key:Esc}} sampai tidak ada yang dipilih dan {{ui:Pilih}} aktif, lalu lihat {{ui:Properti}}: "Dibaca dari" menampilkan "Label halaman", "Blok judul", "Nama file", atau "Diketik manual".

:::note
Lembar hasil pindai, dan PDF yang tulisannya diekspor sebagai garis, tidak memiliki teks untuk dibaca. Lembar tersebut dinamai berdasarkan file dan halaman sampai Anda menggantinya namanya. MarkupCraft belum bisa membaca teks dari gambar.
:::

## Pindah antar lembar

- Klik lembar di {{ui:Lembar}}.
- Tekan {{key:PageDown}} untuk lembar berikutnya dan {{key:PageUp}} untuk sebelumnya, atau gunakan panah di bilah di bawah lembar.
- Ketik di {{ui:Cari lembar}}: sebagian nomor ("A-2"), sebuah kata dari judul ("atap"), atau nama file. Daftar menyempit saat Anda mengetik ("4 dari 42"). Tekan {{key:Enter}} untuk membuka kecocokan pertama. Kosongkan kotak untuk melihat semua lembar lagi.

Setiap lembar menyimpan zoom dan posisinya sendiri sampai Anda menutup set.

## Zoom dan geser

:::mouse
- **Zoom:** putar roda di atas lembar. Zoom berpusat di sekitar penunjuk. Atau tekan {{key:Plus}} dan {{key:Minus}} (juga dengan {{key:Mod}}), atau gunakan tombol zoom. Ketik persentase tepat di kotak zoom.
- **Paskan:** {{ui:Paskan halaman}} ({{key:Mod+0}}) menampilkan seluruh lembar; {{ui:Paskan lebar}} ({{key:Mod+9}}) mengisi lebar.
- **Geser:** seret dengan tombol tengah (roda), atau seret dengan tombol kanan, atau tahan {{key:Space}} dan seret, atau pilih {{ui:Geser}} ({{key:H}}) dan seret. Jika tidak ada yang dipilih, tombol panah juga menggeser lembar.
:::

:::mac mouse
Pada trackpad Mac, gulir dua jari melakukan zoom (bukan menggulir lembar). Untuk menggeser, tahan {{key:Space}} dan seret dengan satu jari, atau beralih ke {{ui:Geser}} dengan {{key:H}}. Cubitan melakukan zoom di Chrome, Edge, dan Firefox.
:::

:::touch
- **Zoom dan geser:** letakkan dua jari di atas lembar. Renggangkan atau cubit untuk zoom di sekitar titik di antara keduanya, dan gerakkan bersama untuk menggeser. Keduanya terjadi sekaligus.
- **Geser dengan satu jari:** pilih {{ui:Geser}} dulu. Dengan alat lain, satu jari menggambar atau memilih.
- {{ui:Paskan halaman}} dan {{ui:Paskan lebar}} ada di bilah di bawah lembar.
:::

Anda bisa memperkecil jauh melampaui seluruh lembar dan memperbesar hingga 6400%. Lembar digambar ulang dengan tajam sesaat setelah Anda berhenti bergerak.

## Bookmark

{{ui:Bookmark}}, di bagian atas panel {{ui:Lembar}}, menampilkan bookmark (outline) dari PDF tempat lembar yang terbuka berasal. Pilih salah satu untuk pergi ke halamannya. Ikon pensil mengganti nama bookmark dan tanda silang menghapusnya. {{ui:Buat dari lembar}} membuat satu bookmark per lembar, dinamai seperti daftar lembar menampilkannya (nomor lembar dan judul), dan {{ui:Tambah untuk lembar ini}} menambahkan satu untuk lembar yang sedang Anda buka. Perubahan adalah bagian dari pekerjaan file yang belum disimpan: {{ui:Simpan}} menuliskannya ke salinan, tempat setiap penampil PDF menampilkannya.

## Putar tampilan

Dua tombol putar di kanan bilah di bawah lembar memutar tampilan seperempat putaran ke salah satu arah, untuk lembar yang digambar miring. Hanya tampilan yang berputar: PDF dan markup-nya tetap seperti semula, dan lembar berikutnya terbuka sesuai dengan PDF-nya (setiap lembar mengingat putarannya sendiri selama set terbuka). Teks yang Anda tambahkan di tampilan yang diputar terbaca tegak seperti yang Anda lihat. Untuk memutar halaman itu sendiri di PDF yang disimpan, gunakan {{ui:Halaman}}, lalu {{ui:Putar halaman searah jarum jam}}; lihat [Cetak, dan ubah halaman](topic:pages-and-printing).

## Ganti nama lembar

Saat nama lembar salah atau hilang:

1. Tampilkan lembar.
2. Tekan {{key:Esc}} sampai tidak ada yang dipilih dan alat {{ui:Pilih}} aktif. {{ui:Properti}} sekarang menampilkan lembar.
3. Pilih {{ui:Ganti nama lembar}}.
4. Ketik {{ui:Nomor lembar}} dan {{ui:Judul}}, lalu pilih {{ui:Simpan}}.

Hasil: daftar lembar, bilah di bawah lembar, dan daftar markup semuanya memakai nama baru, dan "Dibaca dari" menampilkan "Diketik manual". Penggantian nama bisa dibatalkan dengan {{key:Mod+Z}}.

Untuk kembali ke yang tertulis di file, buka {{ui:Ganti nama lembar}} lagi, kosongkan kedua kotak, lalu pilih {{ui:Simpan}}.

Saat Anda menyimpan, nomor lembar yang diketik menjadi label halaman di PDF, sehingga penampil PDF lain juga menampilkan "A-101" di kotak halamannya. Jika Anda memberi nomor pada halaman mana pun dari sebuah file, setiap halaman dari file itu mendapat label di salinan (nomor yang diketik, atau labelnya yang lama, atau nomor halamannya). Judul yang diketik disimpan untuk MarkupCraft, tetapi penampil lain tidak menampilkannya.

## Bawa PDF ke TakeoffCraft, atau bawa ke sini

Saat TakeoffCraft terbuka di tempat yang sama (laboratorium, Try, atau aplikasi daring), bilah di bawah lembar memiliki {{ui:Buka di TakeoffCraft}}. Ini membuka PDF lembar di TakeoffCraft pada tab baru, seperti saat dibuka di sini, sehingga Anda bisa mengukur kuantitas di atasnya. Markup Anda tetap di sini; simpan seperti biasa.

Tombol {{ui:MarkupCraft}} milik TakeoffCraft melakukan hal yang sama sebaliknya: PDF terbuka di sini seolah-olah Anda memilih {{ui:Buka}}. Jika peramban memblokir tab baru, izinkan pop-up untuk situs ini dan pilih tombol itu lagi.
