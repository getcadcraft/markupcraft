---
title: Pilih, pindahkan, dan ubah markup
summary: Pilih markup dengan klik atau dengan jendela, pindahkan, ubah ukuran, geser sedikit, potong, salin, tempel, tempel di tempat yang sama, duplikat, hapus, dan urungkan.
keywords: pilih, pilihan, pilih semua, jendela, silang, pindahkan, ubah ukuran, grip, handel, geser sedikit, potong, salin, tempel, tempel di tempat yang sama, duplikat, papan klip, tab lain, hapus, urungkan, ulangi, edit
from: 62c7def3
---

Pilih {{ui:Pilih}} ({{key:V}}) terlebih dahulu. Menekan {{key:Esc}} juga membawa Anda ke sana: tekan pertama menghapus pilihan, tekan berikutnya beralih kembali ke {{ui:Pilih}}.

## Pilih markup

:::mouse
- **Satu markup:** klik. Kotak putus-putus dan handel muncul, dan {{ui:Properti}} menampilkannya.
- **Tambah atau hapus satu:** tahan {{key:Shift}} dan klik.
- **Sepenuhnya di dalam jendela:** seret dari kiri ke kanan pada bagian kosong lembar. Hanya markup yang sepenuhnya berada di dalam kotak yang dipilih (garis tepi solid).
- **Menyentuh jendela:** seret dari kanan ke kiri. Apa pun yang disentuh kotak akan dipilih (garis tepi hijau putus-putus).
- **Semua di lembar ini:** {{key:Mod+A}}, atau {{ui:Lainnya}} lalu {{ui:Pilih semua}} di grup {{ui:Edit}} pada bilah alat.
- **Tidak ada:** klik tempat kosong, tekan {{key:Esc}}, atau {{ui:Lainnya}} lalu {{ui:Batalkan pilihan}}.
:::

:::touch
- **Satu markup:** ketuk.
- **Beberapa:** seret satu jari pada bagian kosong lembar untuk membuat jendela. Kiri ke kanan memilih yang berada sepenuhnya di dalam; kanan ke kiri memilih yang disentuh.
- Mengetuk sambil menahan {{key:Shift}} hanya berfungsi jika keyboard terpasang. Tanpa keyboard, gunakan jendela.
- Satu jari tidak pernah menggeser di {{ui:Pilih}}; gunakan dua jari, atau alat {{ui:Geser}}.
:::

Komentar hanya-baca yang datang bersama file menampilkan kotak abu-abu putus-putus dan tanpa handel. Komentar tersebut dapat dipilih dan dibalas, tetapi tidak dapat diubah.

## Pindahkan dan ubah ukuran

- **Pindahkan:** seret markup yang dipilih. Tahan {{key:Shift}} untuk memindahkan hanya dengan kelipatan 45°. Beberapa markup yang dipilih bergerak bersama.
- **Ubah ukuran:** dengan satu markup dipilih, seret handel. Handel persegi mengubah ukuran kotak (tahan {{key:Shift}} untuk menjaga proporsinya); handel bulat memindahkan satu titik sudut garis, polyline, poligon, awan, atau pengukuran (tahan {{key:Shift}} untuk 45°); handel berbentuk belah ketupat memindahkan ujung dan tekukan callout. Goresan pena diskalakan dari kotaknya.
- **Geser sedikit:** tekan tombol panah untuk memindahkan pilihan satu piksel layar; tahan {{key:Shift}} untuk sepuluh piksel. Setiap tekanan adalah satu langkah urungkan.

## Ubah isi atau tampilannya

- **Teks, callout dan catatan:** klik dua kali markup, atau tekan {{key:Enter}}, atau pilih {{ui:Edit pada lembar}} di {{ui:Properti}}. Ketik, lalu klik di luar atau tekan {{key:Mod+Enter}}. {{key:Esc}} membatalkan pengeditan.
- **Stempel:** pilih stempel lain di {{ui:Properti}} (klik dua kali membuka {{ui:Properti}} untuk Anda).
- **Gaya:** {{ui:Warna}}, {{ui:Tebal garis}}, {{ui:Isian}}, {{ui:Opasitas}} dan {{ui:Ukuran teks}} di bawah "Gaya" pada {{ui:Properti}}. Saat beberapa markup dipilih, {{ui:Properti}} menampilkan jenis yang Anda pilih dan mengubahnya sekaligus.

## Salin, tempel, dan duplikat

Grup {{ui:Edit}} pada bilah alat memiliki {{ui:Salin}} dan {{ui:Tempel}}; menu {{ui:Lainnya}}-nya memiliki semua ini, masing-masing dengan pintasannya.

| Perintah | Tombol | Fungsi |
|---|---|---|
| {{ui:Potong}} | {{key:Mod+X}} | Menyalin markup yang dipilih dan menghapusnya |
| {{ui:Salin}} | {{key:Mod+C}} | Menyalin markup yang dipilih |
| {{ui:Tempel}} | {{key:Mod+V}} | Menempatkan salinan di lembar yang Anda buka (di mana, lihat di bawah) |
| {{ui:Tempel di tempat yang sama}} | {{key:Mod+Shift+V}} | Menempatkan salinan tepat di tempat asalnya disalin: pada lembar yang sama, di atas aslinya; pada lembar lain, di tempat yang sama di kertas |
| {{ui:Duplikat}} | {{key:Mod+D}} | Membuat salinan pilihan sedikit ke bawah dan ke kanan, tanpa mengubah apa yang Anda salin sebelumnya |

**Tempat Tempel menaruh salinan:**

- {{key:Mod+V}} dengan penunjuk di lembar menempatkan salinan di tengah posisi penunjuk. Pindahkan penunjuk, tekan {{key:Mod+V}} lagi, dan Anda menempatkan yang lain.
- Tombol {{ui:Tempel}} (penunjuk berada di bilah alat saat itu), atau {{key:Mod+V}} dengan penunjuk di luar lembar, menempatkannya sedikit ke bawah dan ke kanan dari aslinya. Setiap tempel dari salinan yang sama melangkah sedikit lebih jauh, sehingga salinan tidak saling menutupi. Pada lembar lain, tempel pertama mendarat di tempat aslinya berada pada lembarnya. Jika posisi itu di luar tampilan, salinan mendarat di tengah tampilan.
- Agar {{key:Mod+V}} selalu menempel di samping aslinya, pilih {{ui:Di samping salinan}} di bawah {{ui:Tempel}} pada [pengaturan MarkupCraft](topic:settings).

Markup yang ditempel dipilih, sehingga Anda dapat langsung menyeretnya. Setiap potong, tempel, atau duplikat adalah satu langkah urungkan: {{key:Mod+Z}} menghapus seluruh tempelan.

Salinan yang ditempel adalah markup baru: mereka mendapat nama Anda, tanggal hari ini, status Terbuka, tanpa nomor punch, dan utas kosong. Jenis, bentuk, gaya, teks, dan komentarnya ikut terbawa. Komentar hanya-baca yang datang bersama file tidak dapat disalin atau dipotong.

**Antar tab:** apa yang Anda salin juga disimpan di browser ini, sehingga tab MarkupCraft lain di browser yang sama dapat menempelkannya. Menyalin markup tidak menggunakan papan klip komputer: Anda tidak dapat menempelkannya ke program lain, dan teks yang Anda salin di tempat lain tidak tertempel sebagai markup.

**Menu klik kanan:** klik kanan markup (atau kertas kosong) untuk {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel di sini}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat}}, {{ui:Hapus}}, {{ui:Simpan pilihan sebagai stempel…}}, {{ui:Ratakan ke halaman saat disimpan}}, {{ui:Sisipkan gambar raster di sini…}} dan {{ui:Pilih semua}}. Mengklik kanan markup yang tidak dipilih akan memilihnya terlebih dahulu. Menyeret dengan tombol kanan tetap menggeser. Pada layar sentuh, tekan lama markup membuka menu yang sama (pada teks, ini memulai pengeditan teks). Tombol menu atau {{key:Shift+F10}} membukanya pada pilihan.

Konten halaman yang dipilih dengan alat {{ui:Konten}} juga disalin dan ditempel: lihat [Ubah garis, gambar, dan teks halaman itu sendiri](topic:page-content).

Untuk menyalin sebagian halaman sebagai gambar (persegi panjang, elips, atau bentuk bebas), atau sebagai overlay transparan untuk lembar atau aplikasi lain, lihat [Salin area halaman, atau overlay](topic:copy-an-area).

## Hapus

Tekan {{key:Delete}} atau {{key:Backspace}}, pilih {{ui:Lainnya}} lalu {{ui:Hapus}} di bilah alat, atau {{ui:Hapus}} di {{ui:Properti}}. Bilah status menyatakan berapa yang dihapus. Komentar hanya-baca dari file tidak pernah dihapus ("dibiarkan seperti di file").

## Urungkan dan ulangi

- {{key:Mod+Z}} mengurungkan, {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} mengulangi. Bilah alat memiliki {{ui:Urungkan}} dan {{ui:Ulangi}}.
- Bilah status menyatakan apa yang diurungkan ("Diurungkan: pindahkan markup.").
- Urungkan mencakup setiap perubahan pada markup, status, balasan, item punch, skala lembar, dan nama lembar, hingga 500 langkah.
- Riwayat dihapus saat Anda menutup set.

## Salin markup ke lembar lain

Untuk meletakkan stempel, catatan, atau awan yang sama pada beberapa lembar, pilih markup tersebut (atau beberapa markup) dan pilih {{ui:Salin ke lembar lain…}} di {{ui:Properti}}. Centang lembar, atau {{ui:Semua lembar}}, lalu pilih {{ui:Salin}}. Setiap lembar mendapat salinan di posisi yang sama pada halaman, ditandatangani dengan nama Anda. Satu {{key:Mod+Z}} menghapus semuanya.
