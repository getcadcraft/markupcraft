---
title: Jadikan markup sebagai tugasan
summary: Beri markup penerima tugas (orang atau pembantu anda), hari akhir dan pautan kepada lukisan atau elemen model yang berkaitan, dan lihat ia ditutup apabila perubahan itu benar-benar berlaku.
keywords: tugasan, tugasan, penerima tugas, pembantu, tarikh akhir, pautan, ditutup, berubah, elemen, kawasan lukisan, markup yang bertindak, MCP
from: 9e970202
---

Tugasan ialah markup yang mesti dilaksanakan oleh seseorang. Ia mengekalkan tempatnya pada helaian dan balasannya, dan menambah tajuk, penerima tugas, hari akhir, keadaan dan, jika anda mahu, pautan kepada perkara yang berkaitan.

## Buat tugasan

1. Pilih satu atau lebih markup.
2. Buka tab {{ui:Tugasan}} dan pilih {{ui:Jadikan yang dipilih sebagai tugasan}}.
3. Isikan tajuk (ia bermula daripada teks markup), untuk siapa ia ({{ui:Orang}} atau {{ui:Pembantu}}, dan nama), hari akhir pilihan, dan perkara yang perlu dipantau.

Tugasan pembantu ialah kerja untuk pembantu yang anda sambungkan ke MarkupCraft (lihat [Gunakan MarkupCraft dengan pembantu AI](topic:use-with-ai-assistants)). MarkupCraft tidak mempunyai pembantu sendiri: ia hanya menyenaraikan kerja dan menerima jawapan pembantu. Memilih {{ui:Diberikan kepada}}, kemudian {{ui:Pembantu}} dalam senarai, menunjukkan apa yang sedang menunggunya.

## Pantau perubahan

- **Lukisan di dalam markup.** MarkupCraft menyimpan garisan di dalam kotak markup seperti keadaannya sekarang. Apabila anda membuka semakan yang lebih baharu bagi helaian itu (fail kedua dengan nombor helaian yang sama, atau kedudukan halaman yang sama), pilih {{ui:Semak sekarang}}: jika garisan di kawasan itu berbeza lebih daripada sedikit, tugasan ditutup.
- **Elemen model.** Beri nama aplikasi dan id elemen. Pembantu anda membaca elemen dengan alat aplikasi lain dan melaporkannya dengan `tasks_check`. Laporan pertama disimpan sebagai keadaan permulaan; laporan kemudian yang berbeza menutup tugasan. Elemen yang dipadam juga menutupnya.
- **Tiada apa-apa.** Tugasan biasa yang anda selesaikan secara manual.

Tugasan yang ditutup ditanda Selesai, markupnya menjadi Selesai, dan nota dalam urutan menyatakan apa yang berubah. Satu langkah buat asal membukanya semula.

**Had:** semakan itu mengandaikan semakan yang lebih baharu menggunakan asal dan saiz halaman yang sama. Helaian yang dicetak semula pada saiz lain tidak akan sepadan, jadi tugasannya tidak ditutup. Helaian dipadankan mengikut nombor helaian, jika tidak mengikut kedudukan halaman; MarkupCraft tidak menskalakan satu semakan agar sesuai dengan yang lain.

Mencetak semula lukisan yang sama dengan cap tarikh baharu, atau garisan yang bergerak kurang daripada 1.5 pt, tidak dikira sebagai perubahan. Jika tiada semakan yang lebih baharu dibuka, tugasan kekal terbuka dan bar status memberitahu anda.

## Senarai

Senarai {{ui:Tugasan}} boleh ditapis mengikut keadaan dan untuk siapa ia, termasuk {{ui:Lewat tempoh}}. Tugasan yang melepasi hari akhirnya muncul dalam panel Masalah sebagai amaran. {{ui:CSV}} mengeksport senarai.

Tugasan disimpan dalam PDF bersama markup, dan ia bergerak melalui Live seperti sifat markup yang lain.
