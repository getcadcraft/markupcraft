---
title: Meninjau di iPad atau layar sentuh
summary: Cubit, geser, dan gambar dengan jari atau stylus, apa yang bekerja saat jari diangkat, apa yang membutuhkan keyboard, dan cara menjaga pekerjaan Anda tetap aman di tablet.
keywords: ipad, tablet, sentuh, layar sentuh, cubit, zoom, dua jari, apple pencil, stylus, jari, lapangan, lokasi, surface, gestur, seluler
from: 91eb6438
---

MarkupCraft bekerja dengan sentuhan: di iPad (Safari atau Chrome), di laptop layar sentuh, atau di tablet Windows atau Android dengan peramban terbaru. Dalam mode lanskap, tablet menampilkan tata letak lengkap.

## Gestur

| Gestur | Fungsinya |
|---|---|
| Satu jari | Menggambar dengan alat aktif, atau memilih dengan {{ui:Pilih}} |
| Dua jari, direnggangkan atau dicubit | Zoom di sekitar titik di antara jari Anda |
| Dua jari, digerakkan bersama | Menggeser; Anda bisa zoom dan geser dalam satu gerakan |
| Jari kedua saat menggambar | Membatalkan yang dimulai jari pertama dan memulai zoom sebagai gantinya |
| Ketuk dua kali, atau sentuh lalu tahan | Menyelesaikan polyline, poligon, awan bebas, atau area |
| Sentuh lalu tahan teks, callout, atau catatan, dengan {{ui:Pilih}} | Membuka teksnya untuk diedit |
| Satu jari dengan {{ui:Geser}} aktif | Menggeser |

Di layar sentuh, tombol bilah alat, menu, tab, dan tombol dialog dibuat lebih besar agar mudah diketuk dengan jari.

## Yang terjadi saat jari diangkat

Agar jari pertama saat mencubit tidak meninggalkan goresan, beberapa alat bekerja saat Anda **mengangkat** jari, bukan saat menyentuh:

- {{ui:Hitung}}: titik ditambahkan saat jari diangkat.
- {{ui:Catatan}}: catatan diletakkan saat jari diangkat.
- {{ui:Polyline}}, {{ui:Poligon}}, {{ui:Awan bebas}}, dan {{ui:Luas}}: setiap titik ditambahkan saat jari diangkat.
- {{ui:Garis}}, {{ui:Panah}}, {{ui:Panjang}}, dan {{ui:Kalibrasi}}: saat Anda mengetuk titik awal lalu mengetuk titik akhir, titik akhir diletakkan saat jari diangkat.

Jika jari Anda bergeser lebih dari sedikit sebelum diangkat, itu tidak dihitung sebagai ketukan dan tidak ada yang ditambahkan. Ketuk dengan bersih; untuk memperbaiki, gunakan {{ui:Urungkan}}.

Alat yang diseret ({{ui:Pena}}, {{ui:Sorotan}}, {{ui:Awan}}, {{ui:Persegi panjang}}, {{ui:Elips}}, {{ui:Callout}}, {{ui:Teks}}, {{ui:Stempel}}) mulai saat Anda menyentuh; jari kedua membatalkannya.

## Memilih dengan jari

- Ketuk markup untuk memilihnya; seret untuk memindahkan; seret gagang untuk mengubah ukuran. Setelah jari menyentuh lembar, markup dan gagang mendapat area sentuh yang lebih besar, dan gagang digambar lebih besar.
- Seret di atas lembar kosong untuk membuat jendela pilihan (kiri ke kanan: sepenuhnya di dalam; kanan ke kiri: menyentuh).
- Di {{ui:Pilih}}, satu jari **tidak** menggeser. Gunakan dua jari, atau pilih {{ui:Geser}}.

## Hal yang membutuhkan keyboard

Tanpa keyboard tidak ada {{key:Shift}}, {{key:Esc}}, atau {{key:Enter}}. Berikut yang bisa dilakukan sebagai gantinya:

| Aksi keyboard | Tanpa keyboard |
|---|---|
| {{key:Esc}} untuk membatalkan atau kembali ke Pilih | Ketuk {{ui:Pilih}} di bilah alat |
| {{key:Shift}} untuk garis 45°, persegi, dan lingkaran | Gambar dengan hati-hati; atur dengan gagang |
| {{key:Shift}}-klik untuk menambah ke pilihan | Gunakan jendela pilihan |
| {{key:Shift}}-klik untuk menghapus titik hitung | {{ui:Urungkan}} tepat setelah ketukan yang salah |
| {{key:Mod+Enter}} untuk selesai mengetik | Ketuk di luar kotak teks |
| {{key:Enter}} untuk menyelesaikan polyline, atau untuk mengedit teks markup | Sentuh lalu tahan, atau {{ui:Edit pada lembar}} di {{ui:Properti}} |
| {{key:Delete}} | {{ui:Hapus}} di bilah alat atau di {{ui:Properti}} |
| Memulai grup hitung baru dengan {{key:Esc}} | Ketuk lembar kosong dengan {{ui:Pilih}}, lalu ketuk {{ui:Hitung}} lagi |

Keyboard casing atau keyboard Bluetooth mengembalikan semua pintasan; di iPad, tombol ⌘ berfungsi untuk {{key:Mod+Z}} dan lainnya.

Tombol tidak menampilkan tooltip saat disentuh. Pintasan untuk setiap alat tercantum di [Keyboard dan mouse](topic:keyboard).

## Stylus dan Apple Pencil

Stylus (Apple Pencil, Surface Pen, dan sejenisnya) bekerja seperti mouse: menggambar dan memilih, serta bekerja segera saat menyentuh. Gunakan jari untuk mencubit dan menggeser. Tekanan tidak mengubah tebal garis.

## Membuka dan menyimpan di iPad

- {{ui:Buka}} menampilkan pemilih Files: iCloud Drive, On My iPad, dan aplikasi penyimpanan apa pun yang Anda hubungkan.
- {{ui:Simpan}} meminta unduhan; salinannya masuk ke Files, di bawah Downloads (atau folder yang diatur di pengaturan Safari).

## Jaga pekerjaan Anda tetap aman di tablet

:::warning
Safari di iPad tidak memperingatkan Anda sebelum meninggalkan halaman dengan pekerjaan yang belum disimpan, dan iPadOS dapat memuat ulang tab di latar belakang untuk membebaskan memori. MarkupCraft menyimpan salinan pemulihan di peramban dan menawarkannya kembali saat Anda membuka lagi (lihat [Pulihkan pekerjaan Anda](common:recover)), tetapi **simpan setelah setiap lembar atau setiap putaran lapangan**: tab privat tidak menyimpan salinan.
:::

- Nama, pengaturan alat, dan kotak alat Anda disimpan di peramban itu di iPad tersebut, seperti di komputer. Lihat [Apa yang tersimpan di peramban ini](topic:browser-storage).
- **Sebelum kunjungan lokasi tanpa sinyal:** selagi masih online, buka MarkupCraft di Safari (atau Chrome) di iPad dan pilih {{ui:Simpan untuk offline}} di bilah atas. Tunggu sampai muncul "Siap offline" (menghitung "Menyimpan N dari M"; pembaca dan penulis PDF sekitar 6 MB). Di lokasi, buka alamat yang sama atau bookmark-nya: membuka, memberi markup, dan menyimpan PDF tetap bisa tanpa koneksi. Jika muncul "Offline tidak tersedia", Anda berada di tab privat; gunakan tab biasa. Lihat [Bekerja offline](common:offline).
- Safari menghapus salinan offline yang tidak Anda gunakan selama beberapa minggu. Sebelum perjalanan, klik "Siap offline" dan pilih "Simpan lagi (dapatkan versi terbaru)".
- Set rencana yang sangat besar memakai banyak memori. Di tablet, buka hanya lembar yang Anda perlukan untuk kunjungan.

## Di ponsel

Aplikasi ini bisa dipakai, tetapi layarnya kecil: bagian-bagiannya ditumpuk (bilah alat, lembar, bilah status, panel, lalu daftar lembar), dan bilah alat digulir ke samping. Gunakan ponsel untuk melihat dan menambahkan catatan singkat, dan tablet atau komputer untuk peninjauan sungguhan.
