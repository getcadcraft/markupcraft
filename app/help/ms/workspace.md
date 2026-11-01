---
title: Lawatan skrin
summary: Bar alat, senarai helaian, kawasan helaian, lima panel di sebelah kanan dan bar status, mengikut nama pada skrin.
keywords: skrin, susun atur, bar alat, panel, bar sisi, imej kecil, sifat, bar status, antara muka, skrin penuh, tema, mod gelap
from: 18d82de6
---

MarkupCraft memenuhi tetingkap pelayar. Dari atas ke bawah dan kiri ke kanan:

## Bar di bahagian paling atas

Bar nipis di atas segalanya tergolong dalam keluarga CadCraft, bukan MarkupCraft itu sendiri. Ia mempunyai:

- nama aplikasi dan versi yang anda jalankan,
- {{ui:About MarkupCraft}}, yang membuka halaman aplikasi di laman web,
- {{ui:Help}}, yang membuka bantuan ini dalam panel sisi (atau tekan {{key:F1}}),
- {{ui:Save for offline}}, yang menyimpan MarkupCraft, pembaca dan penulis PDFnya, serta bantuan ini dalam pelayar ini supaya ia dibuka tanpa sambungan; kemudian ia berkata "Sedia luar talian" (lihat [Bekerja luar talian](common:offline)),
- butang mod skrin ({{ui:Full screen}}), dan
- {{ui:Settings}} (atau {{key:Mod+,}}), dengan tab {{ui:MarkupCraft}} untuk tetapan khusus aplikasi ini dan {{ui:General}} untuk tetapan yang dikongsi setiap aplikasi CadCraft (lihat [Tetapan MarkupCraft](topic:settings)), dan
- {{ui:Paper}} dan {{ui:Model}}, tema cerah dan gelap. Dalam {{ui:Model}} helaian dilukis cerah-atas-gelap; markup anda mengekalkan warnanya sendiri.

Butang mod skrin, atau {{key:Ctrl+Shift+F}}, bertukar melalui tiga mod: normal, skrin penuh, dan skrin penuh dengan bar disembunyikan. Dengan bar disembunyikan, gerakkan penuding ke tepi atas skrin (atau ketik di situ) dan bar akan meluncur kembali. Pintasan ini menggunakan kekunci Control pada setiap komputer, termasuk Mac.

:::note
Dalam skrin penuh, {{key:Esc}} juga menyebabkan pelayar keluar dari skrin penuh. Jika anda hanya mahu membatalkan lukisan, tekan {{key:Ctrl+Shift+F}} sekali lagi untuk kembali ke skrin penuh.
:::

## Bar alat

Di bawah bar atas, alat dikumpulkan dan dilabel:

| Kumpulan | Butang |
|---|---|
| Fail | {{ui:Open}}, {{ui:Save}}, {{ui:Close}} |
| Pilih | {{ui:Select}}, {{ui:Pan}} |
| Lukis | {{ui:Pen}}, {{ui:Highlight}}, {{ui:Line}}, {{ui:Arrow}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Polyline}}, {{ui:Polygon}} |
| Semak | {{ui:Cloud}}, {{ui:Free cloud}} |
| Anotasi | {{ui:Callout}}, {{ui:Text}}, {{ui:Note}}, {{ui:Stamp}} |
| Ukur | {{ui:Calibrate}}, {{ui:Length}}, {{ui:Area}}, {{ui:Count}} |
| Sunting | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, dan {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |

Alat yang anda gunakan kelihatan ditekan. Tahan penuding di atas butang untuk melihat kekuncinya (contohnya "Segi empat tepat (R)"); menu {{ui:More}} menyenaraikan kekunci setiap arahan di sebelahnya. Butang yang tidak boleh bertindak buat masa ini dimalapkan: {{ui:Copy}} sehingga anda memilih markup, {{ui:Paste}} sehingga sesuatu disalin. Titik kecil selepas {{ui:Save}} bermakna ada markup yang belum disimpan. Senarai kekunci penuh ada dalam [Papan kekunci dan tetikus](topic:keyboard).

Alat kekal aktif selepas anda melukis dengannya, jadi anda boleh melukis beberapa awan berturut-turut. Tekan {{key:Esc}} (dua kali jika markup baharu masih dipilih) atau {{key:V}} untuk kembali ke {{ui:Select}}.

## Senarai helaian (kiri)

{{ui:Sheets}} menyenaraikan setiap halaman bagi setiap PDF yang dibuka. Setiap baris menunjukkan gambar kecil helaian, namanya, nombor helaian atau fail dan halaman, serta berapa banyak markup yang ada. Bilangan selepas tajuk ialah bilangan helaian.

- Klik baris untuk memaparkan helaian itu.
- Taip dalam {{ui:Search sheets}} untuk menapis mengikut nama helaian, nombor helaian atau nama fail. Tekan {{key:Enter}} untuk membuka padanan pertama.

Nama helaian datang daripada PDF apabila ia ada. Lihat [Buka set pelan dan bergerak antara helaian](topic:open-a-plan-set).

## Kawasan helaian (tengah)

Helaian yang sedang anda kerjakan. Sebelum apa-apa dibuka ia memaparkan "Buka set pelan" dengan butang {{ui:Open PDFs}}. Lepaskan PDF di mana-mana sahaja di sini untuk membukanya.

Di bawah helaian, bar sempit mempunyai:

- anak panah helaian sebelumnya dan seterusnya, serta "3 daripada 12: A-101 — Pelan tingkat" (tahan penuding di atasnya untuk melihat fail dan halaman),
- zum keluar, kotak zum (taip peratusan dan tekan {{key:Enter}}; 100% ialah saiz sebenar pada skrin biasa), zum masuk,
- {{ui:Fit page}} dan {{ui:Fit width}}.

Setiap helaian mengingati zumnya sendiri semasa set dibuka.

Apabila anda membandingkan dua helaian, legenda muncul di sini: "Hanya pada helaian lama", "Hanya pada helaian baharu" dan "Pada kedua-duanya". Lihat [Bandingkan dua semakan](topic:compare-revisions).

## Panel (kanan)

Lima tab:

| Tab | Apa yang dipaparkan |
|---|---|
| {{ui:Properties}} | Markup yang dipilih: pengarang, tarikh, nilai ukuran, status, subjek, teks, ulasan, gaya, balasannya dan item kecacatannya. Dengan alat lukisan dihidupkan dan tiada apa dipilih, tetapan yang akan digunakan oleh markup baharu. Dengan tiada apa dipilih dan {{ui:Select}} dihidupkan, helaian: nombor, tajuk, di mana nama dibaca, saiz kertas, skala, dan {{ui:Rename sheet}}. |
| {{ui:Markups}} | Setiap markup dalam set yang dibuka, dengan penapis, dan eksport {{ui:CSV}} dan {{ui:BCF}}. Lihat [Senarai markup](topic:markups-list-and-export). |
| {{ui:Punch list}} | Item kecacatan bernombor dengan penerima tugas, tarikh akhir dan status. Lihat [Buat senarai kecacatan](topic:punch-list). |
| {{ui:Tools}} | Peti alat: alat tersimpan yang bergaya. Lihat [Peti alat](topic:tool-chest). |
| {{ui:Compare}} | Tindihkan dua helaian. Lihat [Bandingkan dua semakan](topic:compare-revisions). |

## Bar status (bawah)

- Di sebelah kiri, di mana penuding berada pada helaian, dalam inci (atau milimeter, dalam [Tetapan](topic:settings)) pada kertas.
- Di tengah, mesej: apa yang dijangka oleh alat seterusnya, apa yang baru disimpan, dan mengapa sesuatu ditolak. **Baca apabila sesuatu tidak berlaku.**
- Butang skala helaian ("Belum ditentukur", atau skalanya). Klik untuk menetapkan skala. Lihat [Tentukur helaian dan ukur](topic:calibrate-and-measure).
- Nama anda ("Tetapkan nama anda" sehingga anda memberikannya). Klik untuk menukarnya.

## Pada skrin kecil

Di bawah kira-kira 1180 piksel lebar, panel menjadi lebih sempit dan gambar helaian mengecil. Pada skrin saiz telefon, bahagiannya disusun bertindih: bar alat (tatal ke sisi), helaian, bar status, panel, kemudian senarai helaian di bahagian bawah. Tablet dalam mod landskap mengekalkan susun atur penuh.
