---
title: Pemecahan masalah
summary: Pesan yang ditampilkan MarkupCraft dan apa yang harus dilakukan, serta perbaikan untuk hal-hal yang tampaknya tidak berfungsi.
keywords: masalah, kesalahan, tidak berfungsi, bantuan, pesan, tidak bisa dibuka, tidak dapat menyimpan, kata sandi, dilindungi, pengukuran ditolak, kalibrasi, offline, kosong, lambat, markup hilang, tanda tanya
from: bb650b39
---

Sebagian besar masalah dijelaskan di bilah status di bagian bawah layar. Bacalah itu lebih dulu.

## Membuka file

**"MarkupCraft membuka file PDF. "x" bukan PDF."**
Anda memilih atau menjatuhkan sesuatu yang lain. Hanya PDF yang dapat dibuka. Ekspor gambar dari program CAD Anda sebagai PDF terlebih dahulu.

'"nama" memerlukan kata sandi untuk dibuka. Buka salinan yang tidak dilindungi.'
PDF itu dilindungi kata sandi. Mintalah salinan tanpa perlindungan kepada pengirim, atau buka di program PDF yang Anda ketahui kata sandinya, lalu simpan salinan tanpa kata sandi.

'"nama" tidak dapat dibaca sebagai PDF (…)'
File itu rusak atau bukan PDF sungguhan (unduhan tidak lengkap, lampiran email terpotong). Unduh ulang. Jika program PDF lain dapat membukanya, gunakan "simpan sebagai" di sana untuk membuat salinan yang bersih, lalu buka salinan itu.

**"Beberapa file tidak terbuka"**
Saat Anda membuka beberapa file sekaligus, kotak ini mendaftar file yang gagal beserta alasannya. File lainnya sudah terbuka.

**"Pembaca PDF tidak dapat memuat: …"**
Mesin PDF tidak dapat diambil. Daring: muat ulang halaman dan coba lagi; periksa apakah firewall atau pemblokir konten menghalangi situs ini. Luring: MarkupCraft belum disimpan untuk penggunaan offline di peramban ini (bilah di bagian atas tidak bertuliskan "Siap offline"). Sambungkan internet, pilih {{ui:Simpan untuk offline}}, dan tunggu "Siap offline". Lihat [Bekerja offline](common:offline).

**"Beberapa anotasi mungkin tampil dua kali di layar" atau "Detail anotasi tambahan tidak dapat dibaca"**
Komentar yang sudah ada di file itu tidak biasa. Komentar tetap dibuka sebaik mungkin oleh MarkupCraft; periksa dulu sebelum mengandalkannya. Penyimpanan tetap berfungsi.

**Lembar memiliki nama yang salah, atau "halaman 3"**
Lihat [Cara lembar mendapat namanya](topic:open-a-plan-set#how-sheets-get-their-names). Lembar hasil pindai tidak memiliki teks untuk dibaca; gunakan {{ui:Ganti nama lembar}}.

**Lembar yang sama muncul dua kali**
File yang sama dibuka dua kali. Pilih {{ui:Tutup}} (simpan dulu jika perlu), lalu buka set itu lagi.

## Menggambar dan memilih

**Tidak terjadi apa-apa saat saya mengklik lembar**
Periksa alat mana yang ditekan di bilah alat, dan baca bilah status. Dengan {{ui:Persegi panjang}}, {{ui:Elips}}, dan {{ui:Awan}}, klik tanpa menyeret tidak menggambar apa pun: seret. Dengan {{ui:Polyline}}, {{ui:Poligon}}, {{ui:Awan bebas}}, dan {{ui:Luas}}, titik sedang ditambahkan: selesaikan dengan klik dua kali atau {{key:Enter}}.

"Poligon memerlukan minimal 3 titik." (atau 2 untuk polyline)
Klik lebih banyak titik sebelum menyelesaikan.

"Tidak ada yang diketik, jadi tidak ada teks yang ditambahkan."
Kotak teks dan callout hanya disimpan jika memiliki teks. Gambar ulang dan ketik sebelum mengklik di tempat lain.

"Kedua titik sama. Klik dua titik yang berbeda."
Untuk garis, panah, panjang, dan kalibrasi, kedua ujungnya harus berjauhan. Seret, atau klik dua kali di tempat yang berbeda.

**Saya tidak dapat memindahkan atau menghapus markup; ia memiliki kotak abu-abu putus-putus**
Itu adalah komentar hanya-baca yang datang bersama file (misalnya sorotan teks). MarkupCraft mempertahankannya apa adanya: Anda hanya dapat membalasnya. Bilah status menyatakan "markup hanya-baca dipertahankan seperti di file".

**Tombol keyboard saya mengetik huruf di kotak alih-alih memilih alat**
Kursor berada di kotak teks (balasan, kolom di {{ui:Properti}}, pencarian lembar). Klik bagian kosong area lembar dahulu, atau tekan {{key:Esc}} jika Anda sedang menyunting teks markup.

**Spasi tidak menggeser, atau tombol panah tidak melakukan apa-apa**
Anda baru saja mengklik tombol bilah alat, sehingga keyboard masih terpusat padanya. Seret dengan tombol mouse tengah, atau klik lembar sekali dengan {{ui:Pilih}} aktif, lalu coba lagi. Lihat juga [Keyboard dan mouse](topic:keyboard#when-a-key-does-nothing).

**Cubitan di layar sentuh meninggalkan bekas**
Alat seret (pena, awan, persegi panjang) dimulai sebelum jari kedua tiba dan selesai sebelum dibatalkan. Tekan {{ui:Urungkan}}. Letakkan kedua jari bersamaan saat Anda bermaksud melakukan zoom.

## Mengukur

"Kalibrasi lembar ini dulu: pilih dua titik dengan jarak yang sudah diketahui, atau pilih skalanya. Lalu ukur."
Setiap lembar memerlukan skalanya sendiri sebelum {{ui:Panjang}} atau {{ui:Luas}}. MarkupCraft telah beralih ke {{ui:Kalibrasi}}: klik kedua ujung dimensi yang diketahui dan ketik panjangnya, atau klik tombol skala di bilah status dan pilih skala. Lihat [Kalibrasi lembar dan ukur](topic:calibrate-and-measure).

'Itu bukan panjang yang dipahami MarkupCraft.'
Ketik seperti `24'-0"`, `12' 6 1/2"`, `7.2 m`, atau `900 mm`. Lihat [Satuan, panjang, dan skala](topic:units-and-scales).

**Pengukuran sedikit meleset, atau sangat meleset**
- Skala prasetel pada PDF yang tidak berukuran penuh akan mengukur salah. Kalibrasi dari dimensi panjang yang diketahui sebagai gantinya.
- Pemisah ribuan dibaca sebagai titik desimal: `1,200 mm` berarti 1,2 mm. Ketik `1200 mm`.
- Perbesar saat Anda mengklik ujung-ujungnya.
- Gambar mungkin tidak sesuai skala ("NTS").

"Pilih grup hitungan dulu, lalu Shift+klik tanda untuk menghapusnya."
Pilih {{ui:Pilih}}, klik grup hitungan, lalu pilih {{ui:Hitung}} lagi dan {{key:Shift}}-klik titik itu.

## Menyimpan

"PDF ini dilindungi (dienkripsi), sehingga salinan yang sudah diberi markup tidak dapat ditulis."
File itu melarang perubahan. Mintalah salinan tanpa perlindungan. Sementara itu, Anda tetap dapat mengekspor daftar markup sebagai CSV atau BCF.

"Penulis PDF tidak dapat memuat: …"
Biasanya Anda sedang luring dan aplikasi belum disimpan untuk penggunaan offline (tidak ada "Siap offline" di bilah atas). Markup Anda masih ada di tab: biarkan terbuka, sambungkan internet, dan pilih {{ui:Simpan}} lagi. Lalu pilih {{ui:Simpan untuk offline}} agar berfungsi offline di lain waktu; salinan yang tersimpan menyertakan penulis PDF.

"Tidak dapat menyimpan <file>"
Kotak menampilkan alasannya. Markup Anda masih ada di tab. Coba lagi; jika terus berulang, ekspor CSV agar komentar tidak hilang, dan laporkan pesan itu.

**Saya memilih Simpan tetapi hanya satu file yang diterima**
Peramban Anda memblokir unduhan tambahan. Cari pemberitahuan di bilah alamat dan izinkan situs ini mengunduh beberapa file, lalu simpan lagi.

**Saya tidak dapat menemukan file yang disimpan**
File itu masuk ke folder unduhan peramban Anda. Buka daftar unduhan peramban (di Chrome dan Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; di Firefox dan Safari, tombol unduhan di bilah alat) untuk melihat lokasinya. Lihat [Peramban dan komputer](common:browsers).

**Beberapa teks menampilkan "?" di penampil PDF lain**
Karakter di luar kumpulan Eropa Barat dicetak sebagai "?" pada salinan. Pesan penyimpanan menghitungnya. Lihat [Simpan PDF yang sudah diberi markup](topic:save-the-marked-up-pdf).

**Stempel menampilkan tanggal besok (atau kemarin)**
Tanggal stempel dalam UTC. Lihat [Stempel dan catatan tempel](topic:stamps-and-notes).

## Bekerja offline

**Tombol offline bertuliskan "Tidak dapat menyimpan"**
Beberapa file aplikasi tidak terunduh. Periksa koneksi dan klik tombol itu lagi; ia menghitung "Menyimpan N dari M" hingga "Siap offline".

**Tombol offline bertuliskan "Offline tidak tersedia"**
Jendela peramban ini tidak dapat menyimpan salinan offline: jendela privat, atau komputer yang kebijakannya memblokirnya. Buka MarkupCraft di jendela biasa dan coba lagi.

**Saat offline, aplikasinya adalah versi lama**
Salinan offline adalah versi yang Anda simpan. Saat daring, klik "Siap offline" dan pilih "Simpan lagi (dapatkan versi terbaru)". Untuk membebaskan ruang, pilih "Buang salinan offline". Lihat [Bekerja offline](common:offline).

**Bantuan tidak mau terbuka**
Tekan {{key:F1}} (di Mac, dengan **fn**), atau pilih {{ui:Bantuan}} di bilah atas. Bantuan juga berfungsi offline.

## Hal yang hilang

**Markup saya hilang setelah menutup atau memuat ulang tab**
Buka MarkupCraft lagi di peramban yang sama: ia menawarkan kembali pekerjaan yang belum disimpan dengan "Pulihkan pekerjaan Anda?". Pilih {{ui:Pulihkan}} dan simpan PDF. Salinan disimpan hingga 30 hari; jendela privat, atau menghapus data situs, tidak menyisakan apa pun. Lihat [Pulihkan pekerjaan Anda](common:recover).

**Nama, pengaturan alat, atau kotak alat saya hilang**
Semuanya hanya disimpan di peramban ini dan telah dihapus (data situs dihapus, jendela privat, peramban atau komputer lain, atau pembersihan Safari untuk situs yang lama tidak dikunjungi). Atur nama lagi dan impor kotak yang sudah Anda ekspor. Lihat [Yang tersimpan di peramban ini](topic:browser-storage).

"Kotak alat tidak dapat disimpan di peramban ini (penyimpanan mati atau penuh). Ekspor untuk menyimpannya."
Peramban menolak menyimpan data untuk situs ini (mode privat, penyimpanan diblokir oleh pengaturan atau kebijakan, atau penuh). Ekspor kotak setelah mengubahnya, dan impor lagi lain kali.

## Tampilan dan kecepatan

**Lembar tampak buram sejenak**
MarkupCraft menampilkan render kasar yang cepat saat Anda melakukan zoom atau menggeser, lalu menggambarnya ulang dengan tajam sesaat setelah Anda berhenti.

**Semuanya lambat dengan set besar**
Tutup tab berat lainnya, buka lebih sedikit file sekaligus, dan hindari zoom hingga maksimum pada lembar yang sangat besar. Lihat [Bekerja dengan beberapa file sekaligus](topic:several-files#big-sets).

**Lembar tampak gelap dengan garis terang**
Anda berada di tema {{ui:Model}}. Pilih {{ui:Kertas}} di bilah atas untuk garis gelap pada latar putih. Markup Anda dan PDF yang disimpan tidak terpengaruh.
