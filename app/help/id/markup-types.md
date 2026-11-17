---
title: Setiap jenis markup
summary: Tujuh belas jenis markup, pintasannya, cara menggambarnya, tampilan default, dan bentuknya di PDF yang disimpan.
keywords: jenis markup, daftar alat, jenis anotasi, awan, callout, teks, catatan, stempel, pena, penanda sorot, garis, panah, persegi panjang, elips, polyline, poligon, panjang, luas, hitungan
from: 29bf32e7
---

## Alat

| Bilah alat | Tombol | Cara menggambar | Tampilan default | Di PDF yang disimpan |
|---|---|---|---|---|
| {{ui:Pena}} | {{key:P}} | Seret | Merah, 1.5 pt | Ink |
| {{ui:Sorotan}} | {{key:I}} | Seret | Kuning, lebar 14 pt, tembus pandang, mewarnai apa yang ada di bawahnya | Ink (ditandai sebagai goresan penanda sorot) |
| {{ui:Garis}} | {{key:L}} | Seret, atau klik titik awal dan akhir | Merah, 2 pt | Line |
| {{ui:Panah}} | {{key:A}} | Seret, atau klik titik awal dan akhir | Merah, 2 pt, mata panah tertutup di ujung | Line dengan mata panah |
| {{ui:Busur}} | {{key:O}} | Klik titik awal, sebuah titik pada busur, lalu ujungnya | Merah, 2 pt | Polyline mengikuti busur |
| {{ui:Persegi panjang}} | {{key:R}} | Seret sebuah kotak | Merah, 2 pt, tanpa isian | Square |
| {{ui:Elips}} | {{key:E}} | Seret sebuah kotak | Merah, 2 pt, tanpa isian | Circle |
| {{ui:Polyline}} | {{key:Y}} | Klik titik-titik, klik dua kali untuk selesai | Merah, 2 pt | Polyline |
| {{ui:Poligon}} | {{key:G}} | Klik titik-titik, klik dua kali untuk selesai | Merah, 2 pt, tanpa isian | Polygon |
| {{ui:Awan}} | {{key:C}} | Seret sebuah kotak | Merah, lekukan 1.5 pt | Square dengan batas berawan |
| {{ui:Awan bebas}} | {{key:Shift+C}} | Klik titik-titik, klik dua kali untuk selesai | Merah, lekukan 1.5 pt | Polygon dengan batas berawan |
| {{ui:Callout}} | {{key:K}} | Tekan pada titik, seret ke teks, ketik | Teks dan leader merah, 1 pt, teks 12 pt | Kotak teks dengan leader callout |
| {{ui:Teks}} | {{key:T}} | Klik atau seret sebuah kotak, ketik | Teks merah 12 pt, tanpa bingkai | Kotak teks |
| {{ui:Catatan}} | {{key:N}} | Klik, ketik | Ikon catatan kuning | Catatan tempel |
| {{ui:Stempel}} | {{key:S}} | Pilih stempel, klik atau seret | Huruf kapital berbingkai ditambah "Oleh <name>, <date>"; diwarnai sesuai maknanya | Stamp |
| {{ui:Panjang}} | {{key:M}} | Klik titik awal dan akhir (membutuhkan skala) | Garis dimensi biru dengan tanda dan panjangnya | Line yang ditandai sebagai dimensi, dengan pengukuran |
| {{ui:Sudut}} | {{key:X}} | Klik ujung satu lengan, sudutnya, lalu ujung lengan lainnya | Lengan biru, busur kecil di sudut dan sudut dalam derajat | Polyline dengan sudut sebagai teksnya |
| {{ui:Luas}} | {{key:Q}} | Klik sudut-sudut, klik dua kali untuk selesai (membutuhkan skala) | Garis tepi biru, isian biru muda, luas dan keliling | Polygon yang ditandai sebagai luas, dengan pengukuran |
| {{ui:Hitung}} | {{key:U}} | Klik setiap item | Titik bernomor oranye dan tag "grup: n" | Satu komentar tinta per grup, satu cincin per item |

Di layar sentuh, "klik dua kali untuk selesai" berarti ketuk dua kali, dan "klik" berarti ketukan yang bekerja saat jari diangkat (untuk titik, catatan, dan hitungan).

## Yang dibawa setiap markup

| Bidang | Tempat Anda melihatnya |
|---|---|
| Pembuat | {{ui:Properti}}, daftar, baris kedua stempel, penampil PDF lain |
| Dibuat dan diubah | {{ui:Properti}} (zona waktu Anda), daftar, CSV |
| Status | Open, Accepted, Rejected, atau Completed (Terbuka, Diterima, Ditolak, atau Selesai) |
| Subjek | Label singkat; default-nya jenisnya ("Awan", "Kotak teks", "Pengukuran panjang") |
| Komentar | Catatan yang lebih panjang. Untuk catatan, teksnya adalah komentarnya. |
| Teks | Hanya kotak teks dan callout |
| Balasan | Utasnya, dengan perubahan status |
| Item punch | Nomor, penerima, tanggal tenggat, status item, saat ditambahkan ke daftar periksa |
| Gaya | Warna, tebal garis, isian dan opasitas isian (bentuk tertutup, teks, dan callout), opasitas, ukuran teks (teks, callout, dan pengukuran) |

## Komentar hanya baca

Komentar yang datang bersama berkas dan tidak dapat diedit oleh MarkupCraft (sorotan teks, stempel dari program lain, dan jenis khusus lainnya) dicantumkan dengan jenis "Lainnya" dan chip status "Hanya baca". Komentar itu mempertahankan tampilan persis seperti yang diberikan berkasnya. Anda dapat memilihnya, melihat pembuat, subjek, dan komentarnya, serta membalasnya.

## Belum dibuat

Lampiran berkas belum dibuat. Markup apa pun dapat ditautkan ke lembar; lihat [Tautan lembar](topic:sheet-links). Gambar dan tanda tangan ditempatkan dengan alat {{ui:Stempel}}; lihat [Stempel dan catatan](topic:stamps-and-notes). Lihat [Yang belum dibuat](topic:not-built-yet).
