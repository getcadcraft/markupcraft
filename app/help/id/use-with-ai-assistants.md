---
title: Gunakan MarkupCraft dengan asisten AI
summary: Biarkan asisten AI atau skrip Anda sendiri mendaftar markup dari sebuah set, menambah markup sederhana, mengatur status, membalas, dan mengekspor daftar: izin, menyambung melalui CadCraft Studio, dan log aktivitas.
keywords: ai, asisten, agen, mcp, model context protocol, skrip, otomatisasi, markup, tinjauan, izin, putuskan, aktivitas
from: 095f2977
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (atau skrip yang Anda tulis) bekerja dengan MarkupCraft, dan cara memutuskan apa yang boleh disentuhnya.

MarkupCraft **tidak memiliki AI sendiri** dan tidak mengirim apa pun ke mana pun. Anda membawa asistennya: program apa pun yang berbicara Model Context Protocol (MCP). MarkupCraft hanya memberinya alat, dan Anda yang memilih alat mana.

## Menyalakannya

1. Buka {{ui:Pengaturan}} (ikon roda gigi di bilah aplikasi, atau {{key:Mod+,}}) dan buka tab {{ui:MarkupCraft}}.
2. Di bawah {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip menggunakan MarkupCraft**. Ini mati sampai Anda melakukannya.
3. Pilih apa yang boleh dilakukannya: **Baca** sudah tercentang sejak awal; centang **Edit**, **Simpan**, atau **Ekspor** hanya jika Anda membutuhkannya.

Alat di luar izin yang Anda centang tidak ditawarkan kepada asisten, dan jika asisten tetap memintanya, MarkupCraft menolak dan mencatatnya di log aktivitas. Mematikan sakelar mengakhiri setiap koneksi sekaligus; {{ui:Atur ulang pengaturan MarkupCraft}} juga mematikannya.

## Hubungkan asisten Anda

Asisten terhubung melalui **CadCraft Studio** di komputer Anda: Studio menjalankan server kecil yang hanya dapat dijangkau komputer ini, yang dilindungi token yang dibuatnya setiap kali ia mulai. Di Studio, pilih {{ui:Hubungkan asisten}} dan salin alamat dan token ke asisten Anda (Studio menampilkan pengaturan persis yang harus ditempelkan). Jangan pernah membagikan token.

:::note
Tab peramban tidak dapat membuka koneksi untuk asisten: di aplikasi peramban, sakelar tidak berpengaruh sampai Anda memakai CadCraft Studio di komputer Anda.
:::

## Anda tetap yang mengendalikan

- **Setiap perubahan adalah satu langkah urungkan**, diberi label dengan nama yang diberikan asisten untuknya (misalnya "Asisten: tambah cloudrect"). {{key:Mod+Z}} membatalkan perubahan terakhir asisten secara keseluruhan.
- **Anda tahu saat asisten tersambung.** Tombol di bilah aplikasi menyebut nama asisten selama tersambung; klik untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan** sambungannya.
- **Aktivitas.** {{ui:Pengaturan}} › {{ui:MarkupCraft}} › {{ui:Asisten}} › {{ui:Aktivitas}} mendaftar setiap panggilan: kapan, alat yang mana, dan selesai atau ditolak. {{ui:Simpan log}} menyimpan salinannya.

## Yang dapat diminta asisten

| Alat | Izin | Apa yang dilakukannya |
|---|---|---|
| `app_info`, `sheets_list` | Baca | Set yang terbuka, lembarnya, dan jumlah markup masing-masing |
| `markups_list` | Baca | Markup dengan jenis, lembar, teks, komentar, pengukuran, status, pembuat, dan balasan, disaring menurut lembar, status, jenis, atau pembuat |
| `markup_add` | Edit | Menambahkan persegi panjang, awan, elips, kotak teks, catatan, garis, atau panah ke sebuah lembar |
| `markup_status`, `markup_reply` | Edit | Mengatur status markup (dicatat di utasnya, ditandatangani oleh asisten); menambahkan komentar ke utas |
| `markups_export` | Ekspor | CSV atau BCF dari daftar {{ui:Markup}} itu sendiri, yang menampilkan apa pun yang tampil di daftar (dengan filter yang Anda atur); di Studio ia dapat menulis file ke folder yang Anda izinkan |
| `tasks_list` | Baca | Markup yang merupakan tugas: penerima (orang atau asisten), hari tenggat, status, tautan, dan cara penutupannya. `assignee: "assistant"` mendaftar pekerjaan yang menunggu asisten |
| `task_set`, `task_clear` | Edit | Menjadikan markup sebuah tugas atau mengubahnya (judul, penerima, tenggat, status, tautan); menghapus tugas |
| `tasks_check` | Edit | Menutup tugas yang area gambar atau elemen modelnya yang tertaut benar-benar berubah; berikan keadaan elemen yang Anda baca dari aplikasi lain |
| `revisions_changes` | Baca | Daftar biasa tentang apa yang berubah di antara dua set rencana yang terbuka, untuk Anda susun dengan kata-kata sendiri |
| `pins_list`, `decision_add` | Baca, Edit | Catatan suara (panjang, siapa, kapan, keterangan; tidak pernah suaranya, dan tanpa transkrip) dan keputusan; sematkan keputusan dan ganti keputusan sebelumnya |
| `redline_export`, `redline_answer` | Ekspor, Edit | Menulis file redline untuk drafter; menerapkan jawaban drafter |

Markup yang ditambahkan asisten menyebutnya sebagai pembuat: nama yang diberikan program asisten kepada dirinya sendiri, diikuti "(asisten)", atau "(asisten untuk <nama Anda>)" setelah Anda mengatur nama peninjau Anda. Perubahan status dan balasannya ditandatangani dengan cara yang sama. Masing-masing adalah satu langkah urungkan. Menyimpan PDF yang sudah diberi markup tetap menjadi tanggung jawab Anda: gunakan {{ui:Simpan}} seperti biasa.

Tanpa membuka MarkupCraft, server MCP CadCraft mendaftar markup sebuah PDF di folder yang Anda sebutkan (`markups_list`), dan `cadcraft info Set.pdf` mencetaknya di baris perintah.

## Jika ada yang tidak berfungsi

- **Asisten tidak melihat alat MarkupCraft:** periksa bahwa sakelar menyala di jendela ini, dan jendela itu terbuka di Studio.
- **"memerlukan izin edit":** centang **Edit** di bawah {{ui:Asisten}}, lalu minta lagi.
- **Galat "401" atau "token":** token berubah (Studio dimulai ulang, atau {{ui:Token baru}}). Salin token yang baru ke pengaturan asisten.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh kerja, masing-masing dengan alat yang dipanggilnya.
