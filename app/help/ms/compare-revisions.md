---
title: Bandingkan dua semakan
summary: Tindihkan isu lama dan baharu bagi helaian dalam dua warna, jajarkan dengan dua titik, dan awankan apa yang berubah.
keywords: bandingkan, tindihan, tindihan halaman, semakan, diff, perbezaan, perubahan, lama baharu, jajar, semak balik, isu, buletin
from: 62f5d1c5
---

Bandingkan meletakkan dua helaian bertindih antara satu sama lain. Garisan hanya pada helaian lama muncul dalam merah, garisan hanya pada helaian baharu dalam biru, dan garisan pada kedua-duanya dalam kelabu lembut. Warna dinamakan dalam legenda di bawah helaian: "Hanya pada helaian lama", "Hanya pada helaian baharu", "Pada kedua-duanya".

## Bandingkan dua helaian

1. Buka kedua-dua isu. Ia boleh menjadi halaman daripada PDF yang sama atau PDF yang berbeza; buka bersama sebagai satu set (lihat [Bekerja dengan beberapa fail sekaligus](topic:several-files)).
2. Pilih tab {{ui:Bandingkan}} di sebelah kanan.
3. Pilih {{ui:Helaian lama}} dan {{ui:Helaian baharu}}. Helaian baharu bermula sebagai yang anda sedang lihat. Apabila beberapa fail dibuka, nama fail setiap helaian dipaparkan selepas namanya.
4. Pilih {{ui:Bandingkan}}.

Hasilnya: MarkupCraft menunjukkan helaian baharu dengan yang lama dicampur, legenda muncul, dan tab menyatakan "Membandingkan <old> (lama) dengan <new> (baharu). Markup pada helaian baharu kekal boleh disunting."

## Pudar antara lama dan baharu

Seret peluncur {{ui:Lama dan baharu}}. Ke kiri sepenuhnya hanya menunjukkan helaian lama, ke kanan sepenuhnya hanya yang baharu, dan di tengah menunjukkan kedua-duanya. Menggerakkan ke depan dan belakang selalunya cara terpantas untuk melihat perubahan kecil.

## Jajarkan helaian

Jika dua isu dicetak dengan margin, saiz atau putaran yang berbeza, segalanya kelihatan berubah. Betulkannya:

**Dengan dua titik (terbaik):**

1. Pilih {{ui:Jajarkan dengan dua titik}}. Paparan hanya menunjukkan helaian lama.
2. Klik ciri tajam yang dapat anda cari pada kedua-dua helaian, seperti persilangan grid tiang. Tab mengira langkah ("1 daripada 4").
3. Klik ciri kedua, jauh dari yang pertama, seperti bucu grid bertentangan.
4. Paparan bertukar kepada helaian baharu. Klik ciri pertama sekali lagi.
5. Klik ciri kedua sekali lagi.

Hasilnya: "Dijajarkan: helaian lama diskala 100.00%, dipusing 0.00°. Alih sedikit untuk penalaan halus." Helaian lama dialihkan, diskala dan dipusing untuk dipadankan. {{key:Esc}} membatalkan semasa anda memilih. Zum masuk pada setiap ciri sebelum klik untuk padanan yang tepat.

**Dengan mengalih sedikit:** gunakan empat butang anak panah di bawah "Jajar" untuk mengalihkan helaian lama. Pilih langkahnya (0.25, 1, 5 atau 20 pt; 72 pt ialah satu inci di atas kertas). Tab menyatakan sejauh mana ia telah dialihkan.

{{ui:Tetapkan semula}} membuang penjajaran dan alihan sedikit.

## Garisan yang berubah sahaja

Di bawah butang penjajaran, pilih {{ui:Garisan yang berubah}} dan bukannya {{ui:Tindihan gambar}}. MarkupCraft kemudian membandingkan garisan kedua-dua helaian, bukan gambar mereka: helaian baharu ditunjukkan seperti sedia ada, dengan garisan yang hanya ada pada helaian lama dalam merah dan garisan yang hanya ada pada yang baharu dalam biru. Garisan yang hanya menjadi lebih pendek menunjukkan bahagian yang hilang sahaja. Jajarkan helaian dahulu (lihat di atas): perbandingan menggunakan penjajaran, jadi helaian yang hanya dialihkan tidak menunjukkan perubahan. Baris status menyatakan berapa banyak yang berubah.

Ini berfungsi untuk PDF yang dicetak daripada CAD, di mana lukisan dibuat daripada garisan. Helaian yang diimbas tidak mempunyai garisan untuk dibandingkan: gunakan tindihan gambar untuknya. Teks yang ditetapkan dalam fon (bukan dilukis sebagai goresan) tidak dibandingkan.

## Tandakan perubahan

Semasa membandingkan, anda berada pada helaian baharu dan setiap alat berfungsi. Lukis awan di sekeliling perubahan semasa anda menjumpainya; ia tergolong kepada helaian baharu dan kekal apabila anda berhenti membandingkan.

{{ui:Awankan perubahan}} melakukannya untuk anda: ia mengumpulkan garisan yang berubah yang berdekatan dan melukis awan semakan di sekeliling setiap kumpulan pada helaian baharu, dengan "Diubah sejak <old sheet>" sebagai ulasannya. Satu {{key:Mod+Z}} membuangnya semua; padam yang tidak anda perlukan.

## Bandingkan satu set penuh

Apabila isu baharu tiba sebagai PDF sendiri, buka kedua-dua PDF dan buka {{ui:Bandingkan dua set}} dalam tab {{ui:Bandingkan}}. Pilih fail lama dan fail baharu, kemudian pilih {{ui:Bandingkan set}}. Helaian dipadankan mengikut nombornya (seperti dalam [slip-sheeting](topic:slip-sheet-a-revised-set)), dibandingkan mengikut garisannya, dan disenaraikan dengan yang paling banyak berubah dahulu. Pilih helaian dalam senarai untuk membandingkan pasangan itu dengan {{ui:Garisan yang berubah}}.

{{ui:Awankan semua perubahan}} mengawan setiap kumpulan garisan yang berubah pada setiap helaian yang berubah, dalam satu langkah yang boleh dibuat asal. Perbandingan set tidak menjajarkan helaian dahulu, jadi helaian yang dialihkan pada halaman ditunjukkan sebagai berubah: bandingkan pasangan itu sendiri dan gunakan {{ui:Jajarkan dengan dua titik}}.

## Berhenti membandingkan

Pilih {{ui:Henti membandingkan}}, atau pergi ke helaian lain. Penjajaran diingati untuk pasangan helaian yang sama sehingga anda menutup set.

## Perkara yang perlu diketahui

- Bandingkan berfungsi pada apa yang dilukis, piksel demi piksel. Ia tidak tahu bahawa garisan telah beralih; ia menunjukkan kedudukan lama dalam satu warna dan kedudukan baharu dalam warna yang lain.
- Teks yang dialir semula, tarikh blok tajuk yang berubah atau gaya plot yang berbeza juga muncul sebagai perubahan.
- Helaian yang diimbas dibandingkan dengan helaian yang dicetak adalah bising: pengimbasan mengaburkan dan mengalihkan garisan.
- Membandingkan teks yang ditulis dalam fon, dan senarai perkara yang berubah, belum dibina.
