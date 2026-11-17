---
title: Rapikan goresan pena, dan bawa masuk komentar review serta progres tapak
summary: Ubah goresan pena bebas menjadi garis, lingkaran, busur, dan persegi panjang; bawa komentar review paket izin dan progres survei tapak masuk sebagai catatan.
keywords: pena, bebas, rapikan, luruskan, lingkaran, garis, persegi panjang, busur, izin, komentar review, progres, drone, pindai, survei, catatan, csv
from: 547d8e42
---

## Rapikan goresan pena

Gambar dengan {{ui:Pena}}, lalu buka menu {{ui:Lainnya}} di grup Sunting dan pilih {{ui:Rapikan goresan pena}}. Setiap goresan pena yang dipilih berubah menjadi bentuk yang dimaksudkan: goresan lurus menjadi garis (dibuat tepat datar atau tegak lurus jika hampir demikian), goresan bulat menjadi elips, sebagian lingkaran menjadi busur, goresan tertutup dengan empat sudut menjadi persegi panjang, dan lainnya menjadi polyline atau poligon. Ujung-ujung goresan yang digambar berdekatan ditarik agar saling bertemu. Tanpa goresan pena yang dipilih, setiap goresan pena di lembar yang terbuka akan dirapikan. Ini satu langkah urungkan: Ctrl+Z mengembalikan goresan bebasnya. Bentuknya dihitung di komputer Anda dengan aturan tetap; tidak ada yang dikirim ke mana pun.

## Bawa masuk komentar review

Paket izin BimCraft memuat `01-review-comments.csv`: komentar yang mungkin dibuat oleh pemeriksa rencana, masing-masing dengan aturan, pasal, yang dibutuhkan, yang ditemukan, dan apa yang harus dilakukan. Di tab {{ui:Tugas}}, buka {{ui:Komentar review izin}} dan pilih {{ui:Bawa masuk komentar (CSV)}}. Setiap komentar menjadi catatan Terbuka dalam kolom di sisi kiri lembar yang terbuka; seret masing-masing ke tempat yang dimaksud. Komentar ini dihitung dari pemeriksaan yang tersedia, bukan dari pemeriksa rencana.

## Bawa masuk kotak node HAZOP

Add-on P&ID CadCraft menggambar node studi HAZOP dan dapat menyimpannya sebagai {{ui:Kotak node HAZOP}} (file JSON). Buka lembar P&ID yang sudah dicetak di sini, buka tab {{ui:Tugas}}, buka {{ui:Kotak node HAZOP}}, lalu pilih {{ui:Impor kotak node (JSON)}}. Setiap node menjadi persegi panjang Terbuka di lembar, dengan nomor, nama, peralatan, dan jalur pipanya dalam teks; tim menulis temuannya sebagai balasan di atasnya. Lembar diambil seperti tercetak pada ukuran penuh dari sudut kiri bawah gambar. Jika dicetak pada skala lain, ketik angka itu di {{ui:Dicetak pada}} lebih dulu (0.5 untuk 1:2). Node yang berada di luar halaman tidak digambar, dan panel menyatakan jumlahnya. Penanda ini adalah alat bantu studi: penanda menunjukkan letak node, tetapi tidak menilai studi itu.

## Bawa masuk progres tapak

CivilCraft menyimpan satu baris untuk setiap penerbangan drone atau pindaian tapak. Di tab {{ui:Tugas}}, buka {{ui:Progres tapak}} dan pilih {{ui:Bawa masuk progres (JSON)}}. Setiap survei menjadi catatan di lembar yang terbuka yang menyatakan berapa banyak yang sudah selesai, apa yang tersisa untuk galian atau timbunan, apa yang kelebihan galian atau timbunan, dan apa yang berada di luar rencana. Survei yang memiliki sesuatu di luar rencana tetap Terbuka; survei yang bersih menjadi Diterima.
