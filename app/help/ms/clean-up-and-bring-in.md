---
title: Bersihkan goresan pen, dan bawa masuk ulasan semakan dan kemajuan tapak
summary: Tukar goresan pen bentuk bebas kepada garisan, bulatan, lengkok dan segi empat tepat; bawa masuk ulasan semakan permit pakej dan tinjauan kemajuan tapak sebagai nota.
keywords: pen, bentuk bebas, bersihkan, luruskan, bulatan, garisan, segi empat tepat, lengkok, permit, ulasan semakan, kemajuan, drone, imbasan, tinjauan, nota, csv
from: 547d8e42
---

## Bersihkan goresan pen

Lukis dengan {{ui:Pen}}, kemudian buka menu {{ui:Lagi}} dalam kumpulan Sunting, dan pilih {{ui:Bersihkan goresan pen}}. Setiap goresan pen yang dipilih menjadi apa yang sepatutnya: goresan lurus menjadi garisan (dijadikan betul-betul mendatar atau tegak apabila hampir begitu), yang bulat menjadi elips, sebahagian bulatan menjadi lengkok, yang tertutup dengan empat bucu menjadi segi empat tepat, dan yang lain menjadi polygaris atau poligon. Hujung goresan yang dilukis bersama ditarik ke antara satu sama lain. Tanpa goresan pen dipilih, setiap goresan pen pada helaian yang dibuka akan dibersihkan. Ia satu langkah buat asal: Ctrl+Z mengembalikan bentuk bebas. Bentuk dikira pada komputer anda mengikut peraturan tetap; tiada apa-apa dihantar ke mana-mana.

## Bawa masuk ulasan semakan

Pakej permit BimCraft memegang `01-review-comments.csv`: ulasan yang mungkin dibuat oleh pemeriksa pelan, setiap satu dengan peraturan, klausa, apa yang diperlukan, apa yang ditemui dan apa yang perlu dilakukan. Dalam tab {{ui:Tugasan}}, buka {{ui:Ulasan semakan permit}} dan pilih {{ui:Bawa masuk ulasan (CSV)}}. Setiap ulasan menjadi nota Buka dalam lajur di sebelah kiri helaian yang dibuka; seret setiap satu ke tempat yang diulasnya. Ulasan ini dikira daripada semakan yang sedia ada, bukan daripada pemeriksa pelan.

## Bawa masuk nod HAZOP

Add-on P&ID CadCraft melukis nod kajian HAZOP dan boleh menyimpannya sebagai {{ui:Kotak nod HAZOP}} (fail JSON). Buka helaian P&ID yang dicetak di sini, pergi ke tab {{ui:Tugasan}}, buka {{ui:Kotak nod HAZOP}} dan pilih {{ui:Bawa masuk kotak nod (JSON)}}. Setiap nod menjadi segi empat tepat Buka pada helaian dengan nombor, nama, peralatan dan talian dalam teks, dan pasukan menulis dapatan mereka sebagai balasan padanya. Helaian diambil seperti yang dicetak pada saiz penuh dari bucu kiri bawah lukisan; jika ia dicetak pada skala lain, taip nombor itu dalam {{ui:Dicetak pada}} dahulu (0.5 untuk 1:2). Nod yang jatuh di luar halaman tidak dilukis, dan panel menyatakan berapa banyak. Penanda ialah alat bantu kajian: ia menunjukkan di mana nod berada, dan ia tidak menilai kajian.

## Bawa masuk kemajuan tapak

CivilCraft menyimpan satu baris untuk setiap penerbangan drone atau imbasan tapak. Dalam tab {{ui:Tugasan}}, buka {{ui:Kemajuan tapak}} dan pilih {{ui:Bawa masuk kemajuan (JSON)}}. Setiap tinjauan menjadi nota pada helaian yang dibuka yang menyatakan berapa banyak yang telah siap, apa yang tinggal untuk dipotong atau ditambak, apa yang digali berlebihan atau ditambak berlebihan dan apa yang berada di luar pelan. Tinjauan dengan sesuatu di luar pelan kekal Buka; tinjauan yang bersih menjadi Diterima.
