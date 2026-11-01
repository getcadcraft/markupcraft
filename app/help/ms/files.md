---
title: Fail yang dibuka dan disimpan oleh MarkupCraft
summary: PDF masuk, salinan PDF yang ditanda keluar, serta fail CSV, BCF dan peti alat; tempat setiap fail pergi, dalam talian dan luar talian.
keywords: pdf, buka, simpan, eksport, muat turun, csv, bcf, bcfzip, json, peti alat, jenis fail, format, muat naik, kata laluan, disulitkan
from: b3045b4c
---

## Fail yang MarkupCraft buka

| Fail | Cara | Apa yang berlaku |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open}}, {{key:Mod+O}}, atau lepaskan pada kawasan helaian. Beberapa fail sekali gus juga boleh. | Setiap halaman menjadi helaian. Markup yang sedia ada dalam fail dibaca semula (lihat di bawah). |
| Peti alat (`.json`) | Tab {{ui:Tools}}, kemudian {{ui:Import}} | Alat ditambah ke peti alat anda. Lihat [Peti alat](topic:tool-chest). |

Fail lain ditolak dengan mesej "MarkupCraft membuka fail PDF." dalam bar status. Jika anda melepaskan campuran fail, PDF akan dibuka dan bar status memberitahu berapa fail yang bukan PDF.

### Markup yang sedia ada dalam PDF

- **Markup yang disimpan oleh MarkupCraft** kembali sama persis: jenis, gaya, pengarang, tarikh, status, balasan, nombor kecacatan, skala helaian dan apa-apa nama helaian yang anda taip.
- **Ulasan daripada program PDF lain** turut dibaca. Segi empat tepat, elips, garisan dan anak panah, polygaris, poligon, coretan dakwat (pen), kotak teks dan nota melekat menjadi markup MarkupCraft biasa yang boleh disunting. Balasan dan status semakan mereka turut dibawa sama.
- **Perkara lain** (serlahan teks yang dibuat dengan memilih teks, cop daripada program lain, dan jenis lain) dipaparkan seperti asalnya, ditandakan sebagai baca sahaja. Anda boleh memilihnya, melihatnya dalam senarai markup dan membalasnya, tetapi tidak boleh mengalihkan, menukar atau memadamnya.
- Pautan dan medan borang tidak diusik dan tidak disenaraikan.
- Skala yang disimpan oleh program lain (viewport pengukuran) digunakan sebagai skala helaian apabila MarkupCraft memahami unitnya.

### Fail yang tidak dibuka

- PDF yang memerlukan kata laluan: '"name" memerlukan kata laluan untuk dibuka. Buka salinan yang tidak dilindungi.'
- Fail yang rosak atau bukan PDF sebenar: '"name" tidak dapat dibaca sebagai PDF (…)'.
- PDF yang dibuka tetapi dilindungi daripada perubahan akan dibuka dengan baik. Menyimpannya ditolak (lihat di bawah).

Apabila beberapa fail dibuka sekali gus, fail yang berjaya akan dibuka dan kotak bernama "Sebahagian fail tidak dibuka" menyenaraikan yang lain.

## Apa yang MarkupCraft simpan

Menyimpan sentiasa **memuat turun** fail baharu. Laman web tidak boleh menulis ganti fail pada komputer anda, dan MarkupCraft tidak sekali-kali menukar fail asal anda.

| Anda pilih | Anda dapat | Nota |
|---|---|---|
| {{ui:Save}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Salinan PDF asal dengan setiap markup ditulis sebagai ulasan PDF sebenar. Menyimpan fail "(marked up)" semula mengekalkan nama yang sama; ia tidak sekali-kali menjadi "(marked up) (marked up)". Lihat [Simpan PDF yang ditanda](topic:save-the-marked-up-pdf). |
| Tab {{ui:Markups}}, kemudian {{ui:CSV}} | "<name> markups.csv" | Markup seperti yang disenaraikan (penapis terpakai). |
| Tab {{ui:Markups}}, kemudian {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 untuk alat koordinasi BIM, satu syot bagi setiap markup. Lihat [Asas BCF](topic:bcf-basics). |
| Tab {{ui:Punch list}}, kemudian {{ui:Export CSV}} | "<name> punch list.csv" | Item kecacatan mengikut tertib nombor. |
| Tab {{ui:Tools}}, kemudian {{ui:Export}} | "MarkupCraft tool chest.json" | Peti alat anda, untuk dikongsi atau disimpan. |

"<name>" ialah nama fail PDF pertama yang dibuka tanpa ".pdf".

Fail CSV boleh dibuka dalam mana-mana hamparan. Ia dalam UTF-8 dengan penanda yang dicari oleh hamparan, jadi nama yang mempunyai aksen dipaparkan dengan betul. Sel yang bermula dengan =, +, - atau @ diberi tanda petik tunggal di hadapan supaya hamparan tidak sekali-kali menjalankannya sebagai formula.

## Ke mana muat turun pergi

Pelayar anda yang menentukan: biasanya folder Downloads anda, atau ia bertanya setiap kali jika anda menetapkannya begitu. Lihat [Pelayar dan komputer](common:browsers#what-differs-between-browsers).

:::chromium
Apabila anda menyimpan setiap fail yang diubah dalam satu set sekali gus, Chrome dan Edge mungkin bertanya sama ada laman ini boleh memuat turun berbilang fail. Pilih {{ui:Benarkan}}, atau anda hanya akan mendapat salinan pertama.
:::

:::safari
Pada iPad, Safari bertanya sebelum setiap muat turun dan meletakkan fail dalam app Files, di bawah Downloads. Pada Mac, ia pergi ke folder yang ditetapkan dalam tetapan Safari.
:::

## Dalam talian dan luar talian

- **PDF anda tidak pernah meninggalkan komputer ini**, sama ada dalam talian atau luar talian. Tiada muat naik di mana-mana.
- Pembaca PDF dimuatkan kali pertama anda membuka PDF ("Memuatkan pembaca PDF…"), dan penulis PDF kali pertama anda menyimpan ("Memuatkan penulis PDF…") atau membuka fail yang sudah mempunyai ulasan.
- Dengan sambungan, kedua-duanya dimuatkan dari laman web.
- **Untuk bekerja tanpa sambungan,** pilih {{ui:Save for offline}} dalam bar di bahagian atas semasa anda dalam talian. Butang itu mengira "Menyimpan N daripada M" dan kemudian berkata "Sedia luar talian". Salinan itu merangkumi pembaca PDF dan penulis PDF (kira-kira 6 MB semuanya) serta bantuan ini, jadi selepas itu membuka, menanda dan menyimpan PDF semuanya berfungsi luar talian dalam pelayar ini.
- Jika butang berkata "Tidak dapat menyimpan", sesetengah fail tidak dimuat turun: semak sambungan dan klik sekali lagi. Jika ia berkata "Luar talian tidak tersedia", tetingkap pelayar ini tidak boleh menyimpan salinan luar talian (tetingkap persendirian dan sesetengah komputer yang diurus); gunakan tetingkap biasa.
- Untuk mengemas kini atau mengalih keluar salinan, klik "Sedia luar talian" dan pilih "Simpan semula (dapatkan versi terbaru)" atau "Alih keluar salinan luar talian". Lagi dalam [Bekerja luar talian](common:offline).

:::offline
Anda sedang luar talian. Jika bar di bahagian atas berkata "Sedia luar talian", semuanya berfungsi, termasuk menyimpan. Jika tidak, dan anda belum menyimpan dalam tab ini, {{ui:Save}} boleh gagal dengan mesej "Penulis PDF tidak dapat dimuatkan". Markup anda masih ada dalam tab: biarkannya terbuka, kembali dalam talian, dan pilih {{ui:Save}} sekali lagi.
:::

## Perkara yang perlu diketahui

- Set pelan yang besar mengambil masa untuk dibuka: MarkupCraft membaca teks setiap halaman untuk mencari nombor helaian. Bar status mengira helaian semasa ia berjalan.
- Membuka PDF yang sama dua kali akan menambah helaiannya dua kali. Tutup set dan buka semula jika itu berlaku.
- {{ui:Close}} menutup setiap fail yang dibuka sekaligus. Jika mana-mana fail mempunyai markup yang belum disimpan, ia bertanya: {{ui:Cancel}}, {{ui:Close without saving}} atau {{ui:Save copies first}}.
- Simpanan awan belum tersedia, dan belum ada versi desktop. Simpan PDF anda bersama fail projek lain dan sandarkannya seperti biasa. Lihat [Di mana fail anda pergi](common:your-files).
