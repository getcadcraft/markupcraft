---
title: Guna MarkupCraft dengan pembantu AI
summary: Benarkan pembantu AI anda sendiri atau skrip menyenaraikan markup bagi satu set, menambah yang mudah, menetapkan statusnya, membalas dan mengeksport senarai: kebenaran, menyambung melalui CadCraft Studio, dan log aktiviti.
keywords: ai, pembantu, ejen, mcp, model context protocol, skrip, automasi, markup, semakan, kebenaran, putus sambungan, aktiviti
from: 095f2977
---

## Apa yang anda akan pelajari

Cara membenarkan pembantu AI (atau skrip yang anda tulis) bekerja dengan MarkupCraft, dan cara memutuskan perkara yang boleh disentuhnya.

MarkupCraft **tidak mempunyai AI sendiri** dan tidak menghantar apa-apa ke mana-mana. Anda membawa pembantunya: mana-mana program yang bertutur Model Context Protocol (MCP). MarkupCraft hanya memberinya alat, dan anda memilih yang mana.

## Hidupkannya

1. Buka {{ui:Tetapan}} (ikon gear dalam bar apl, atau {{key:Mod+,}}) dan pergi ke tab {{ui:MarkupCraft}}.
2. Di bawah {{ui:Pembantu}}, tandai **Benarkan pembantu AI dan skrip guna MarkupCraft**. Ia dimatikan sehingga anda berbuat demikian.
3. Pilih apa yang boleh dilakukannya: **Baca** ditandai sejak mula; tandai **Sunting**, **Simpan** atau **Eksport** hanya apabila anda memerlukannya.

Alat di luar kebenaran yang anda tandai tidak ditawarkan kepada pembantu, dan jika ia memintanya juga, MarkupCraft menolak dan mencatatnya dalam log aktiviti. Mematikan suis menamatkan setiap sambungan serta-merta; {{ui:Tetapkan semula tetapan MarkupCraft}} turut mematikannya.

## Sambungkan pembantu anda

Pembantu menyambung melalui **CadCraft Studio** pada komputer anda: Studio menjalankan pelayan kecil yang hanya boleh dicapai oleh komputer ini, dilindungi oleh token yang dibuatnya setiap kali ia bermula. Dalam Studio, pilih {{ui:Sambung pembantu}} dan salin alamat serta token ke dalam pembantu anda (Studio menunjukkan tetapan tepat untuk ditampal). Jangan kongsi token.

:::note
Tab pelayar tidak boleh membuka sambungan untuk pembantu: dalam apl pelayar, suis tidak memberi kesan sehingga anda menggunakan CadCraft Studio pada komputer anda.
:::

## Anda kekal bertanggungjawab

- **Setiap perubahan ialah satu langkah buat asal**, dilabelkan dengan nama pembantu untuknya (contohnya "Pembantu: tambah cloudrect"). {{key:Mod+Z}} menarik balik perubahan terakhir pembantu secara keseluruhan.
- **Anda tahu apabila satu disambungkan.** Butang dalam bar apl menamakan pembantu semasa ia disambungkan; klik untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan sambungan**.
- **Aktiviti.** {{ui:Tetapan}} › {{ui:MarkupCraft}} › {{ui:Pembantu}} › {{ui:Aktiviti}} menyenaraikan setiap panggilan: bila, alat yang mana, selesai atau ditolak. {{ui:Simpan log}} menyimpan salinan.

## Apa yang boleh diminta oleh pembantu

| Alat | Kebenaran | Apa yang dilakukannya |
|---|---|---|
| `app_info`, `sheets_list` | Baca | Set yang dibuka, helaiannya dan berapa banyak markup setiap satu |
| `markups_list` | Baca | Markup dengan jenis, helaian, teks, ulasan, ukuran, status, pengarang dan balasan, ditapis mengikut helaian, status, jenis atau pengarang |
| `markup_add` | Sunting | Menambah segi empat tepat, awan, elips, kotak teks, nota, garisan atau anak panah pada helaian |
| `markup_status`, `markup_reply` | Sunting | Menetapkan status markup (dicatat dalam utasnya, ditandatangani oleh pembantu); menambah ulasan pada utas |
| `markups_export` | Eksport | CSV atau BCF bagi senarai {{ui:Markup}} sendiri bagi apa yang dipaparkan oleh senarai (penapisnya seperti yang anda tetapkan); dalam Studio ia boleh menulis fail ke folder yang anda benarkan |
| `tasks_list` | Baca | Markup yang merupakan tugas: penerima tugas (orang atau pembantu), hari akhir, keadaan, pautan, cara ia ditutup. `assignee: "assistant"` menyenaraikan kerja yang menunggu pembantu |
| `task_set`, `task_clear` | Sunting | Menjadikan markup sebagai tugas atau mengubahnya (tajuk, penerima, tarikh akhir, keadaan, pautan); mengeluarkan tugas |
| `tasks_check` | Sunting | Menutup tugas yang kawasan lukisan atau elemen model berkaitan benar-benar berubah; luluskan keadaan elemen yang anda baca daripada aplikasi lain |
| `revisions_changes` | Baca | Senarai ringkas perubahan antara dua set pelan yang dibuka, untuk disusun dengan kata-kata anda sendiri |
| `pins_list`, `decision_add` | Baca, Sunting | Nota suara (tempoh, siapa, bila, kapsyen; bukan bunyinya, tiada transkrip) dan keputusan; lekatkan keputusan dan gantikan keputusan terdahulu |
| `redline_export`, `redline_answer` | Eksport, Sunting | Tulis fail redline untuk pelukis; gunakan jawapan pelukis |

Markup yang ditambah oleh pembantu menamakan dirinya sebagai pengarang: nama yang diberikan program pembantu kepada dirinya sendiri, diikuti oleh "(pembantu)", atau oleh "(pembantu untuk <nama anda>)" apabila anda telah menetapkan nama pengulas anda. Perubahan statusnya dan balasannya ditandatangani dengan cara yang sama. Setiap satu ialah satu langkah buat asal. Menyimpan PDF yang bermarkup kekal dengan anda: guna {{ui:Simpan}} seperti biasa.

Tanpa membuka MarkupCraft, pelayan MCP CadCraft menyenaraikan markup PDF dalam folder yang anda namakan (`markups_list`), dan `cadcraft info Set.pdf` mencetaknya pada baris arahan.

## Jika ada sesuatu tidak berfungsi

- **Pembantu tidak nampak alat MarkupCraft:** semak bahawa suis dihidupkan dalam tetingkap ini, dan tetingkap itu dibuka dalam Studio.
- **"perlukan kebenaran sunting":** tandai **Sunting** di bawah {{ui:Pembantu}}, kemudian minta sekali lagi.
- **Ralat "401" atau "token":** token telah bertukar (Studio dimulakan semula, atau {{ui:Token baharu}}). Salin yang baharu ke dalam tetapan pembantu.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh berfungsi, setiap satu dengan alat yang dipanggilnya.
