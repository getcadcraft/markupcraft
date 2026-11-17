---
title: Pilih, alih dan tukar markup
summary: Pilih markup dengan klik atau dengan tetingkap, alih, ubah saiz, anjak sedikit, potong, salin, tampal, tampal di tempat yang sama, pendua, padam dan buat asal.
keywords: pilih, pilihan, pilih semua, tetingkap, silang, alih, ubah saiz, grip, pemegang, anjak, potong, salin, tampal, tampal di tempat yang sama, pendua, papan keratan, tab lain, padam, buat asal, buat semula, sunting
from: 62c7def3
---

Pilih {{ui:Pilih}} ({{key:V}}) dahulu. Menekan {{key:Esc}} juga membawa anda ke sana: tekanan pertama mengosongkan pilihan, dan tekanan seterusnya bertukar kembali ke {{ui:Pilih}}.

## Pilih markup

:::mouse
- **Satu markup:** klik ia. Kotak putus-putus dan pemegang muncul, dan {{ui:Sifat}} menunjukkannya.
- **Tambah atau buang satu:** tahan {{key:Shift}} dan klik.
- **Sepenuhnya dalam tetingkap:** seret dari kiri ke kanan pada bahagian kosong helaian. Hanya markup yang berada sepenuhnya dalam kotak dipilih (garis luar pepejal).
- **Menyentuh tetingkap:** seret dari kanan ke kiri. Apa-apa yang disentuh kotak dipilih (hijau, garis luar putus-putus).
- **Semua pada helaian ini:** {{key:Mod+A}}, atau {{ui:Lagi}} kemudian {{ui:Pilih semua}} dalam kumpulan {{ui:Sunting}} bar alat.
- **Tiada apa-apa:** klik tempat kosong, tekan {{key:Esc}}, atau {{ui:Lagi}} kemudian {{ui:Nyahpilih semua}}.
:::

:::touch
- **Satu markup:** ketik ia.
- **Beberapa:** seret satu jari merentasi bahagian kosong helaian untuk melukis tetingkap. Kiri ke kanan memilih apa yang berada sepenuhnya di dalam; kanan ke kiri memilih apa yang disentuhnya.
- Mengetik sambil menahan {{key:Shift}} hanya berfungsi dengan papan kekunci disambungkan. Tanpa papan kekunci, gunakan tetingkap.
- Satu jari tidak pernah menggerakkan paparan dalam {{ui:Pilih}}; gunakan dua jari, atau alat {{ui:Pan}}.
:::

Ulasan baca sahaja yang datang bersama fail menunjukkan kotak putus-putus kelabu dan tiada pemegang. Ia boleh dipilih dan dibalas, tetapi tidak boleh diubah.

## Alih dan ubah saiz

- **Alih:** seret markup yang dipilih. Tahan {{key:Shift}} untuk mengalih hanya mengikut gandaan 45°. Beberapa markup yang dipilih bergerak bersama.
- **Ubah saiz:** dengan satu markup dipilih, seret pemegang. Pemegang segi empat mengubah saiz kotak (tahan {{key:Shift}} untuk mengekalkan nisbahnya); pemegang bulat mengalih satu titik sudut garisan, polygaris, poligon, awan atau ukuran (tahan {{key:Shift}} untuk 45°); pemegang berlian mengalih hujung dan lenturan callout. Goresan pen diskala dari kotaknya.
- **Anjak sedikit:** tekan kekunci anak panah untuk mengalih pilihan satu piksel skrin; tahan {{key:Shift}} untuk sepuluh piksel. Setiap tekanan ialah satu langkah buat asal.

## Tukar apa yang dikatakan atau cara ia kelihatan

- **Teks, callout dan nota:** klik dua kali markup, atau tekan {{key:Enter}}, atau pilih {{ui:Sunting pada helaian}} dalam {{ui:Sifat}}. Taip, kemudian klik di luar atau tekan {{key:Mod+Enter}}. {{key:Esc}} membatalkan suntingan.
- **Cop:** pilih cop yang berbeza dalam {{ui:Sifat}} (klik dua kali membuka {{ui:Sifat}} untuk anda).
- **Gaya:** {{ui:Warna}}, {{ui:Lebar garisan}}, {{ui:Isian}}, {{ui:Kelegapan}} dan {{ui:Saiz teks}} di bawah "Gaya" dalam {{ui:Sifat}}. Dengan beberapa markup dipilih, {{ui:Sifat}} menunjukkan jenis yang anda pilih dan menukar kesemuanya sekaligus.

## Salin, tampal dan pendua

Kumpulan {{ui:Sunting}} bar alat mempunyai {{ui:Salin}} dan {{ui:Tampal}}; menu {{ui:Lagi}} mempunyai semua ini, setiap satu dengan kekuncinya.

| Arahan | Kekunci | Apa yang dilakukannya |
|---|---|---|
| {{ui:Potong}} | {{key:Mod+X}} | Menyalin markup yang dipilih dan memadamkannya |
| {{ui:Salin}} | {{key:Mod+C}} | Menyalin markup yang dipilih |
| {{ui:Tampal}} | {{key:Mod+V}} | Meletakkan salinan pada helaian yang anda lihat (di mana, di bawah) |
| {{ui:Tampal di tempat yang sama}} | {{key:Mod+Shift+V}} | Meletakkan salinan tepat di tempat ia disalin: pada helaian yang sama, di atas yang asal; pada helaian lain, di tempat yang sama pada kertas |
| {{ui:Pendua}} | {{key:Mod+D}} | Membuat salinan pilihan sedikit ke bawah dan ke kanan, tanpa menjejaskan apa yang anda salin sebelum ini |

**Di mana Tampal meletakkan salinan:**

- {{key:Mod+V}} dengan penunjuk pada helaian meletakkan salinan berpusat di tempat penunjuk berada. Alih penunjuk, tekan {{key:Mod+V}} sekali lagi, dan anda meletakkan satu lagi.
- Butang {{ui:Tampal}} (penunjuk berada pada bar alat ketika itu), atau {{key:Mod+V}} dengan penunjuk di luar helaian, meletakkannya sedikit ke bawah dan ke kanan asal. Setiap tampalan salinan yang sama melangkah sedikit lebih jauh, jadi salinan tidak pernah menutupi satu sama lain. Pada helaian lain, tampalan pertama mendarat di tempat asal berada pada helaiannya. Jika tempat itu di luar pandangan, salinan mendarat di tengah pandangan.
- Untuk menjadikan {{key:Mod+V}} sentiasa menampal di sebelah asal, pilih {{ui:Di sebelah salinan}} di bawah {{ui:Tampal}} dalam [tetapan MarkupCraft](topic:settings).

Markup yang ditampal dipilih, supaya anda boleh terus menyeretnya. Setiap potong, tampal atau pendua ialah satu langkah buat asal: {{key:Mod+Z}} membuang keseluruhan tampalan.

Salinan yang ditampal ialah markup baharu: ia mendapat nama anda, tarikh hari ini, status Terbuka, tiada nombor senarai kecacatan dan utas kosong. Jenis, bentuk, gaya, teks dan ulasannya turut dibawa. Ulasan baca sahaja yang datang bersama fail tidak boleh disalin atau dipotong.

**Antara tab:** apa yang anda salin turut disimpan dalam pelayar ini, jadi tab MarkupCraft lain dalam pelayar yang sama boleh menampalnya. Menyalin markup tidak menggunakan papan keratan komputer: anda tidak boleh menampalnya ke dalam program lain, dan teks yang anda salin di tempat lain tidak ditampal sebagai markup.

**Menu klik kanan:** klik kanan pada markup (atau kertas kosong) untuk {{ui:Potong}}, {{ui:Salin}}, {{ui:Tampal di sini}}, {{ui:Tampal di tempat yang sama}}, {{ui:Pendua}}, {{ui:Padam}}, {{ui:Simpan pilihan sebagai cop…}}, {{ui:Ratakan ke dalam halaman apabila disimpan}}, {{ui:Selit gambar di sini…}} dan {{ui:Pilih semua}}. Klik kanan pada markup yang tidak dipilih memilihnya dahulu. Menyeret dengan butang kanan masih menggerakkan paparan (pan). Pada skrin sentuh, tekan lama pada markup membuka menu yang sama (pada teks, ia memulakan penyuntingan teks). Kekunci menu atau {{key:Shift+F10}} membukanya pada pilihan.

Kandungan halaman yang dipilih dengan alat {{ui:Kandungan}} juga boleh disalin dan ditampal: lihat [Tukar garisan, gambar dan teks halaman sendiri](topic:page-content).

Untuk menyalin sebahagian halaman itu sendiri sebagai gambar (segi empat tepat, elips atau bentuk bebas), atau sebagai overlay lut sinar untuk helaian atau aplikasi lain, lihat [Salin kawasan halaman, atau overlay](topic:copy-an-area).

## Padam

Tekan {{key:Delete}} atau {{key:Backspace}}, pilih {{ui:Lagi}} kemudian {{ui:Padam}} dalam bar alat, atau {{ui:Padam}} dalam {{ui:Sifat}}. Bar status memberitahu berapa banyak yang dipadamkan. Ulasan baca sahaja daripada fail tidak pernah dipadamkan ("dikekalkan seperti dalam fail").

## Buat asal dan buat semula

- {{key:Mod+Z}} membuat asal, {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} membuat semula. Bar alat mempunyai {{ui:Buat asal}} dan {{ui:Buat semula}}.
- Bar status memberitahu apa yang dibuat asal ("Buat asal alih markup.").
- Buat asal meliputi setiap perubahan pada markup, status, balasan, item senarai kecacatan, skala helaian dan nama helaian, sehingga 500 langkah.
- Sejarah dikosongkan apabila anda menutup set.

## Salin markup ke helaian lain

Untuk meletakkan cop, nota atau awan yang sama pada beberapa helaian, pilih ia (atau beberapa markup) dan pilih {{ui:Salin ke helaian lain…}} dalam {{ui:Sifat}}. Tanda helaian, atau {{ui:Semua helaian}}, dan pilih {{ui:Salin}}. Setiap helaian mendapat salinan di tempat yang sama pada halaman, ditandatangani dengan nama anda. Satu {{key:Mod+Z}} membuang kesemuanya.
