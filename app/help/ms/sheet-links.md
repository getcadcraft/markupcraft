---
title: Pautan helaian
summary: Jadikan markup melompat ke helaian lain, dan pautkan setiap callout helaian seperti 3/A-501 kepada helaian dan pandangannya dalam satu laluan dengan Pautan berkelompok.
keywords: hiperpautan, pautan, melompat, callout helaian, callout perincian, callout keratan, 3/A-501, pergi ke helaian, kembali, pautan automatik, pautan berkelompok, blok tajuk, nombor helaian, nama helaian, pandangan, perincian, namakan semula, nomborkan semula, addendum, pautan pdf
from: 86a17c37
---

Pautan helaian membawa anda daripada markup ke helaian lain dalam set: daripada gelembung perincian ke perincian, daripada nota ke helaian yang dirujuknya.

## Pautkan markup ke helaian

1. Pilih markup.
2. Dalam {{ui:Sifat}}, pilih helaian di bawah {{ui:Pautan ke helaian}}.

Anak panah kecil muncul di bahagian kanan atas markup. Untuk mengikutinya, tahan {{key:Mod}} dan klik markup, atau pilih markup dan pilih {{ui:Pergi ke …}} dalam {{ui:Sifat}}. {{key:Alt+Left}} kembali ke helaian yang anda datangi.

Pautan menamakan helaian mengikut nombornya, jadi ia masih berfungsi selepas anda membuka semula set atau menggantikan dengan isu baharu melalui slip-helaian: ia dibuka helaian terbaru dengan nombor itu. Jika helaian itu tidak dibuka, bar status memberitahu anda.

## Pautkan setiap callout helaian sekaligus

Pilih {{ui:Halaman}} › {{ui:Pautan berkelompok…}}, atau {{ui:Pautkan kenyataan helaian…}} di bawah {{ui:Cari teks}} di bahagian atas panel {{ui:Helaian}}.

1. **Semak nombor helaian.** MarkupCraft menyenaraikan setiap helaian yang dibuka dengan nombor dan nama yang dibacanya daripada blok tajuk helaian (atau label halamannya), dan dari mana ia datang. Betulkan mana-mana yang salah, dan taip nombor jika ia tidak menemuinya (blok tajuk yang nombornya dilukis sebagai garisan tidak mempunyai teks untuk dibaca). Kemudian pilih {{ui:Cari callout}}. Pembetulan anda ialah satu langkah buat asal, dan ia menjadi label halaman dalam PDF yang disimpan.
2. **Semak senarai.** MarkupCraft membaca teks setiap helaian untuk callout seperti "3/A-501", "5 / A501", "DETAIL 2 ON A-501", gelembung dengan "3" di atas "A-501", atau "A-501" biasa dalam nota, dan membaca tajuk pandangan setiap helaian (nombor perincian dengan nombor helaian di bawahnya, atau nombor besar dengan tajuk di sebelahnya). Senarai itu mempunyai tiga bahagian:
   - {{ui:Akan dipautkan}}: setiap callout, helaian yang dituju dan pandangan pada helaian itu. Nyahtanda mana-mana yang anda tidak mahu. Jika pandangan tidak dijumpai (callout ke pandangan 7 pada helaian dengan pandangan 1 hingga 6), pilih pandangan dari senarai di sebelahnya, atau biarkan {{ui:Keseluruhan helaian}}.
   - {{ui:Tidak dipautkan}}: nombor helaian yang tiada helaian terbuka untuknya, dengan bilangan callout yang menamakan setiap satu. Pilih helaian yang dimaksudkan bagi setiap satu (contohnya helaian yang dinomborkan semula), dan setiap callout ke nombor itu akan dipautkan kepadanya. Atau biarkan tidak dipautkan.
   - Berapa banyak callout yang sudah dipautkan dan masih menuju ke tempat yang betul. Ia dibiarkan seperti sedia ada.
3. Pilih {{ui:Cipta pautan}}.

Setiap callout mendapat kotak biru nipis yang merupakan pautan helaian. {{key:Mod}}+klik padanya membuka helaian yang di-zum ke pandangan. Satu {{key:Mod+Z}} membuang kesemuanya.

Kod yang hanya kelihatan seperti nombor helaian, seperti R-19 atau W12X26, ditinggalkan: callout mesti berbentuk seperti nombor helaian set itu sendiri. Nombor helaian sendiri, dalam blok tajuknya dan tajuk pandangannya, tidak pernah menjadi callout. Helaian imbasan tidak mempunyai teks untuk dibaca: gunakan {{ui:Baca teks (OCR)…}} dahulu, atau pautkan callout mereka satu demi satu.

## Jalankan semula apabila set berubah

Pautan berkelompok boleh dijalankan seberapa kerap yang anda mahu:

- **Helaian ditambah**, seperti addendum dengan A-601: buka failnya dan jalankan Pautan berkelompok sekali lagi. Callout ke A-601 yang tidak dipautkan sebelum ini kini dipautkan.
- **Helaian dinomborkan semula**: betulkan nombornya dalam langkah 1. Pautan yang dibuat oleh Pautan berkelompok yang tidak lagi menjumpai helaiannya disenaraikan di bawah {{ui:Tidak dipautkan}}; pilih helaian sekali dan semuanya akan mengikutinya. Pautan yang beralih ke pandangan lain dikemas kini.
- Pautan yang anda buat secara manual dalam {{ui:Sifat}} tidak pernah ditukar.

## Dalam PDF yang disimpan

Pautan ke helaian dalam PDF yang sama turut ditulis sebagai pautan PDF, jadi pemapar lain melompat ke sana apabila diklik. Pautan dengan pandangan membuka pandangan itu dalam pemapar lain (lompatan "fit rectangle" PDF); yang tanpa pandangan membuka keseluruhan helaian. Pautan ke helaian dalam fail lain bagi set itu hanya berfungsi dalam MarkupCraft.
