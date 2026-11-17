---
title: Gabungkan suntingan dua orang bagi satu PDF
summary: Biarkan git, Fossil atau Mercurial menggabungkan dua salinan PDF yang sama yang ditandai, markup demi markup, termasuk nota.
keywords: gabung, git, fossil, mercurial, kawalan versi, konflik, tiga hala, cadcraft merge, gitattributes, markup, nota, pasukan, dua salinan
from: a450a9ef
---

Dua orang menandai PDF yang sama dalam dua salinan. Jika mereka menyentuh markup yang berbeza, salinan itu boleh digabungkan oleh program dan bukannya secara manual.

## Apa yang menjadikannya berfungsi

Setiap markup yang MarkupCraft simpan membawa namanya sendiri (id-nya) di dalam PDF, dan nama itu tidak pernah berubah. Penggabungan mencari markup mengikut nama itu, bukan mengikut tempatnya dalam fail, kerana setiap program menomborkan semula tempat apabila ia menyimpan. Nota dan nota peribadi yang dimeterai dipadankan dengan cara yang sama.

Helaian tidak pernah disentuh: kedua-dua salinan mesti mempunyai bilangan halaman yang sama. Jika berbeza, penggabungan mengekalkan salinan anda seperti sedia ada dan memberitahu anda, kerana menambah atau mengalih keluar halaman ialah kerja untuk orang.

## Sediakan

Git memerlukan dua baris sekali bagi setiap repositori:

```
# .gitattributes
*.pdf merge=cadcraft

# sekali sahaja, pada setiap komputer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Tanpa git, jalankan `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil dan Mercurial mengambil tiga fail yang sama dalam tetapan alat penggabungan mereka sendiri. Fail tugasan yang mengiringi lukisan (`<name>.markups.json`, lihat [Jadikan markup sebagai tugasan](topic:markups-that-act)) digabungkan dengan cara yang sama, sebagai teks biasa.

## Peraturan

- Markup yang diubah pada satu sisi sahaja diambil. Perubahan yang sama pada kedua-dua sisi diambil sekali.
- Markup yang sama yang diubah dengan dua cara ialah **konflik**: sisi anda kekal dan laporan menyenaraikan kedua-duanya. Buka hasilnya dan betulkan markup itu secara manual.
- Markup yang ditambah pada mana-mana sisi dikekalkan. Yang dialih keluar pada satu sisi dan tidak disentuh pada sisi lain dialih keluar. Dialih keluar pada satu sisi dan diubah pada sisi lain: dialih keluar, dan dilaporkan.
- Lapisan, lajur, rekod dan nota mengikut peraturan yang sama.
- Nota peribadi yang dimeterai tidak pernah dibuka: blok kedua-dua sisi dikekalkan seperti sedia ada.

Fail yang digabungkan ialah tulis semula penuh salinan anda, seperti Simpan MarkupCraft sendiri. Tiada apa-apa dimuat naik; semuanya berjalan pada komputer anda.
