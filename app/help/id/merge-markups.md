---
title: Gabungkan suntingan dua orang pada satu PDF
summary: Biarkan git, Fossil, atau Mercurial menggabungkan dua salinan PDF yang sudah diberi markup, markup demi markup, termasuk catatan.
keywords: gabung, git, fossil, mercurial, kontrol versi, konflik, tiga arah, cadcraft merge, gitattributes, markup, catatan, tim, dua salinan
from: a450a9ef
---

Dua orang memberi markup pada PDF yang sama dalam dua salinan. Jika mereka menyentuh markup yang berbeda, kedua salinan dapat digabung oleh program alih-alih secara manual.

## Apa yang membuatnya berfungsi

Setiap markup yang disimpan MarkupCraft membawa namanya sendiri (id-nya) di dalam PDF, dan nama itu tidak pernah berubah. Penggabungan mencari markup berdasarkan nama itu, bukan berdasarkan tempatnya dalam berkas, karena setiap program menomori ulang tempatnya saat menyimpan. Catatan dan catatan privat yang tersegel dicocokkan dengan cara yang sama.

Lembar tidak pernah disentuh: kedua salinan harus memiliki jumlah halaman yang sama. Jika berbeda, penggabungan mempertahankan salinan Anda apa adanya dan memberi tahu Anda, karena menambah atau menghapus halaman adalah pekerjaan orang.

## Pengaturan

Git membutuhkan dua baris sekali per repositori:

```
# .gitattributes
*.pdf merge=cadcraft

# sekali, di setiap komputer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Tanpa git, jalankan `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil dan Mercurial menerima tiga berkas yang sama di pengaturan alat penggabungan mereka sendiri. Berkas tugas yang menyertai gambar (`<name>.markups.json`, lihat [Markup yang bertindak](topic:markups-that-act)) digabung dengan cara yang sama, sebagai teks biasa.

## Aturan

- Markup yang hanya berubah di satu sisi diambil. Perubahan yang sama di kedua sisi diambil satu kali.
- Markup yang berubah dengan dua cara berbeda adalah **konflik**: sisi Anda tetap ada dan laporan mencantumkan keduanya. Buka hasilnya dan perbaiki markup itu secara manual.
- Markup yang ditambahkan di salah satu sisi dipertahankan. Markup yang dihapus di satu sisi dan tidak disentuh di sisi lain ikut dihapus. Dihapus di satu sisi dan diubah di sisi lain: dihapus, dan dilaporkan.
- Layer, kolom, rekaman, dan catatan mengikuti aturan yang sama.
- Catatan privat yang tersegel tidak pernah dibuka: blok dari kedua sisi dipertahankan apa adanya.

Berkas hasil penggabungan adalah penulisan ulang penuh dari salinan Anda, sama seperti Simpan bawaan MarkupCraft. Tidak ada yang diunggah; semuanya berjalan di komputer Anda.
