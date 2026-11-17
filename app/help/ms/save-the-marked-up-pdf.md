---
title: Simpan PDF yang telah dimarkup
summary: Muat turun salinan dengan setiap markup ditulis sebagai ulasan PDF standard, semak apa yang dilihat oleh pembaca PDF lain, dan teruskan kerja pada masa akan datang.
keywords: simpan, muat turun, eksport pdf, dimarkup, anotasi, ulasan, kongsi, hantar, isu, teruskan kerja, buka semula, pusingan penuh, cetak
from: 4c198ebe
---

## Simpan

1. Pilih {{ui:Simpan}} dalam bar alat, atau tekan {{key:Mod+S}}.
2. Jika beberapa fail dibuka, pilih {{ui:Fail ini}} (fail bagi helaian yang anda lihat) atau {{ui:Setiap fail yang diubah}}. Setiap salinan dimuat turun secara berasingan.
3. Tunggu sehingga "Menyimpan <file>…" selesai. Simpanan pertama dalam sesi juga memuatkan penulis PDF.

Hasil: pelayar anda memuat turun "<name> (marked up).pdf", dan bar status melaporkannya: 'Disimpan A-Plans (marked up).pdf (24 markup, 18.2 MB). Fail asal tidak berubah.' Titik di sebelah {{ui:Simpan}} hilang.

**PDF asal anda tidak pernah diubah.** MarkupCraft menulis fail baharu. Lokasinya bergantung pada tetapan muat turun pelayar anda (lihat [Fail yang dibuka dan disimpan oleh MarkupCraft](topic:files#where-downloads-go)).

## Teruskan kerja kemudian

Buka salinan "(marked up)" pada kali seterusnya, bukan fail asal. Semuanya kembali boleh disunting: markup, status, balasan, item senarai kecacatan, skala setiap helaian dan sebarang nama helaian yang anda taip. Simpan semula akan memuat turun fail dengan nama "(marked up)" yang sama; pelayar anda mungkin menambah nombor seperti "(1)" jika muat turun lama masih ada dalam folder. Gantikan atau kemas salinan lama sendiri.

MarkupCraft tidak menyimpan PDF dengan sendirinya. Semasa anda bekerja, ia menyimpan salinan pemulihan dalam pelayar ini, supaya ranap atau tab yang ditutup tidak menghilangkan markup anda: pada kali seterusnya anda membuka MarkupCraft, ia bertanya "Pulihkan kerja anda?". Lihat [Pulihkan kerja anda](common:recover). Tetap simpan sebelum menutup; jika anda cuba keluar dengan markup yang belum disimpan, pelayar bertanya "Tinggalkan laman?" dahulu (Safari pada iPad tidak).

## Apa yang dilihat oleh pemapar PDF lain

Setiap markup ditulis sebagai ulasan PDF standard (anotasi) dengan lukisannya sendiri, jadi mana-mana pemapar PDF memaparkannya, mencetaknya, dan menyenaraikannya dalam panel ulasan:

- **Rupanya sama** seperti dalam MarkupCraft: awan dengan lengkung gelombangnya, kepala anak panah, cop, titik kiraan, lencana nombor senarai kecacatan, label ukuran.
- **Butirannya standard:** pengarang, tarikh, subjek, teks ulasan dan warna.
- **Awan** ialah ulasan segi empat tepat atau poligon dengan sempadan berawan; **kotak teks** dan **callout** ialah ulasan kotak teks; **nota** ialah nota melekit; goresan **pen** dan **serlahan** ialah dakwat; **cop** ialah ulasan cop.
- **Panjang dan luas** ialah ulasan ukuran, dan setiap helaian yang ditentukur membawa skalanya, supaya pemapar yang memahami ukuran boleh memaparkan nilainya.
- **Balasan** ialah balasan kepada ulasan, dan **status** ialah keadaan semakan (Terbuka ditunjukkan sebagai tiada keadaan).
- **Nombor helaian** yang anda taip menjadi label halaman yang dipaparkan oleh pemapar lain.

Beberapa perkara hanya dibaca semula oleh MarkupCraft: penerima item senarai kecacatan dan tarikh tamatnya, status item, dan beberapa butiran gaya. Program lain mengekalkannya melainkan ia menulis semula ulasan.

Dalam program lain, ulasan boleh dialih atau disunting seperti biasa. Jika seseorang berbuat demikian dan menghantar fail itu kembali, MarkupCraft menggunakan kedudukan baharu ulasan apabila ia membuka fail.

Butiran penuh: [Apa yang disimpan dalam PDF](topic:what-the-pdf-keeps).

## Aksara yang dicetak sebagai "?"

Teks markup ditulis menggunakan fon Helvetica standard yang dimiliki oleh setiap pemapar PDF. Ia meliputi huruf Inggeris dan Eropah Barat (é, ñ, ü, ø, dan seumpamanya), tetapi bukan skrip lain, simbol di luar set itu, atau emoji. Aksara tersebut dipaparkan dengan baik dalam MarkupCraft tetapi dicetak sebagai "?" dalam salinan yang disimpan, dan mesej simpanan mengira aksara itu: "3 aksara di luar set Eropah Barat dicetak sebagai "?" dalam salinan." Tuliskan perkataan itu sepenuhnya, atau gunakan pengganti mudah (contohnya "dia." untuk tanda diameter).

## Fail yang tidak boleh disimpan

- **PDF dilindungi:** "PDF ini dilindungi (disulitkan), jadi salinan yang dimarkup tidak boleh ditulis. Minta salinan yang tidak dilindungi." Anda masih boleh menyemaknya pada skrin, dan mengeksport CSV serta BCF.
- Jika simpanan gagal atas sebab lain, kotak bernama "Tidak dapat menyimpan <file>" memaparkan sebabnya. Markup anda masih ada dalam tab; tiada apa yang hilang sehingga anda menutupnya.

## Meratakan dan mencetak

Belum ada ratakan (membakar markup ke dalam halaman) dan belum ada arahan cetak. Untuk mencetak, buka salinan yang disimpan dalam mana-mana pemapar PDF dan cetak dengan ulasan ditunjukkan.
