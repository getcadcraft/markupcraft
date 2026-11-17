---
title: Bandingkan dua revisi
summary: Tumpang tindihkan isu lama dan baru dari sebuah lembar dengan dua warna, sejajarkan dengan dua titik, dan beri awan pada yang berubah.
keywords: bandingkan, overlay, overlay halaman, revisi, diff, perbedaan, perubahan, lama baru, sejajarkan, backcheck, isu, buletin
from: 62f5d1c5
---

Bandingkan menumpuk dua lembar. Garis yang hanya ada di lembar lama tampil merah, garis yang hanya ada di lembar baru tampil biru, dan garis yang ada di keduanya tampil abu-abu redup. Warnanya disebutkan dalam legenda di bawah lembar: "Hanya di lembar lama", "Hanya di lembar baru", "Di keduanya".

## Bandingkan dua lembar

1. Buka kedua isu. Keduanya dapat berupa halaman dari PDF yang sama atau dari PDF yang berbeda; buka bersama sebagai satu set (lihat [Bekerja dengan beberapa file sekaligus](topic:several-files)).
2. Pilih tab {{ui:Bandingkan}} di sisi kanan.
3. Pilih {{ui:Lembar lama}} dan {{ui:Lembar baru}}. Lembar baru dimulai dari yang sedang Anda buka. Saat beberapa file terbuka, nama file setiap lembar ditampilkan setelah namanya.
4. Pilih {{ui:Bandingkan}}.

Hasil: MarkupCraft menampilkan lembar baru dengan lembar lama tercampur di dalamnya, legenda muncul, dan tab menyatakan "Membandingkan <old> (lama) dengan <new> (baru). Markup di lembar baru tetap dapat diedit."

## Pudar antara lama dan baru

Seret penggeser {{ui:Lama dan baru}}. Sepenuhnya ke kiri hanya menampilkan lembar lama, sepenuhnya ke kanan hanya lembar baru, dan di tengah menampilkan keduanya. Menggeser bolak-balik sering kali cara tercepat untuk melihat perubahan kecil.

## Sejajarkan lembar

Jika kedua isu dicetak dengan margin, ukuran, atau rotasi yang berbeda, semuanya akan terlihat berubah. Perbaiki dengan cara berikut:

**Dengan dua titik (terbaik):**

1. Pilih {{ui:Sejajarkan dengan dua titik}}. Tampilan hanya menampilkan lembar lama.
2. Klik fitur tajam yang dapat Anda temukan di kedua lembar, seperti perpotongan grid kolom. Tab menghitung langkahnya ("1 dari 4").
3. Klik fitur kedua, jauh dari yang pertama, seperti sudut grid yang berseberangan.
4. Tampilan beralih ke lembar baru. Klik fitur pertama lagi.
5. Klik fitur kedua lagi.

Hasil: "Sejajar: lembar lama diskalakan 100.00%, diputar 0.00°. Geser untuk penyesuaian halus." Lembar lama dipindahkan, diskalakan, dan diputar agar pas. {{key:Esc}} membatalkan saat Anda sedang memilih. Perbesar setiap fitur sebelum mengklik untuk kecocokan yang lebih presisi.

**Dengan menggeser:** gunakan empat tombol panah di bawah "Sejajarkan" untuk memindahkan lembar lama. Pilih langkahnya (0.25, 1, 5, atau 20 pt; 72 pt adalah satu inci di kertas). Tab menyatakan seberapa jauh lembar sudah berpindah.

{{ui:Atur ulang}} menghapus penyejajaran dan pergeseran.

## Hanya garis yang berubah

Di bawah tombol penyejajaran, pilih {{ui:Garis yang berubah}} sebagai ganti {{ui:Tumpukan gambar}}. MarkupCraft kemudian membandingkan garis milik kedua lembar, bukan gambarnya: lembar baru tampil apa adanya, dengan garis yang hanya ada di lembar lama dalam merah dan garis yang hanya ada di lembar baru dalam biru. Garis yang hanya menjadi lebih pendek menampilkan bagian yang hilang saja. Sejajarkan lembar dulu (lihat di atas): perbandingan memakai penyejajaran, jadi lembar yang hanya digeser tidak menampilkan perubahan. Baris status menyatakan seberapa banyak yang berubah.

Ini berfungsi untuk PDF yang dicetak dari CAD, di mana gambar dibuat dari garis. Lembar hasil pindaian tidak memiliki garis untuk dibandingkan: gunakan overlay gambar untuk itu. Teks yang ditulis dengan font (bukan digambar sebagai goresan) tidak dibandingkan.

## Beri tanda pada perubahan

Saat membandingkan, Anda berada di lembar baru dan setiap alat berfungsi. Beri awan di sekitar perubahan saat Anda menemukannya; awan itu milik lembar baru dan tetap ada saat Anda berhenti membandingkan.

{{ui:Awani perubahan}} melakukannya untuk Anda: alat ini mengelompokkan garis yang berubah dan letaknya berdekatan, lalu menggambar awan revisi di sekeliling tiap kelompok di lembar baru, dengan "Berubah sejak <old sheet>" sebagai komentarnya. Satu {{key:Mod+Z}} menghapus semuanya; hapus yang tidak Anda perlukan.

## Bandingkan seluruh set

Saat isu baru datang sebagai PDF sendiri, buka kedua PDF dan buka {{ui:Bandingkan dua set}} di tab {{ui:Bandingkan}}. Pilih file lama dan file baru, lalu pilih {{ui:Bandingkan set}}. Lembar dipasangkan menurut nomornya (seperti dalam [slip-sheeting](topic:slip-sheet-a-revised-set)), dibandingkan berdasarkan garisnya, dan didaftarkan dengan yang paling banyak berubah di urutan pertama. Pilih lembar dalam daftar untuk membandingkan pasangan itu dengan {{ui:Garis yang berubah}}.

{{ui:Awani semua perubahan}} memberi awan pada setiap kelompok garis yang berubah di setiap lembar yang berubah, dalam satu langkah yang dapat Anda urungkan. Perbandingan set tidak menyejajarkan lembar lebih dulu, sehingga lembar yang digeser di halaman tampil sebagai berubah: bandingkan pasangan itu sendiri dan gunakan {{ui:Sejajarkan dengan dua titik}}.

## Berhenti membandingkan

Pilih {{ui:Berhenti membandingkan}}, atau buka lembar lain. Penyejajaran diingat untuk pasangan lembar yang sama hingga Anda menutup set.

## Yang perlu diketahui

- Bandingkan bekerja pada apa yang tergambar, piksel demi piksel. Ia tidak mengetahui bahwa sebuah garis berpindah; ia menampilkan posisi lama dalam satu warna dan posisi baru dalam warna lain.
- Teks yang mengalir ulang, tanggal pada kepala gambar yang berubah, atau gaya cetak yang berbeda juga muncul sebagai perubahan.
- Lembar hasil pindaian yang dibandingkan dengan lembar hasil cetak akan berisik: pemindaian mengaburkan dan menggeser garis.
- Membandingkan teks yang ditulis dengan font, serta daftar apa yang berubah, belum dibuat.
