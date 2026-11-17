---
title: Kalibrasi lembar dan ukur
summary: Atur skala tiap lembar dari preset atau dimensi yang diketahui, lalu ukur panjang, luas dengan keliling, dan jumlah.
keywords: kalibrasi, skala, atur skala, ukur, panjang, jarak, dimensi, luas, kaki persegi, keliling, hitung, takeoff, kuantitas, penggaris, aritmetika, perhitungan, tambah, pecahan
from: 49a25c6d
---

Panjang dan luas memerlukan skala lembar. MarkupCraft menyimpan skala **per lembar**: kalibrasi setiap lembar yang Anda ukur. Jumlah tidak memerlukan skala.

Bilah status menampilkan skala lembar saat ini, atau "Belum dikalibrasi".

## Pilih skala dari daftar

Gunakan ini saat PDF berukuran penuh (lembar 24 × 36 yang dicetak 24 × 36) dan gambar menyatakan skalanya.

1. Klik tombol skala di bilah status ("Belum dikalibrasi"). Kotak "Skala lembar" terbuka.
2. Di bawah {{ui:Skala}}, pilih skalanya: arsitektural (1/32" = 1'-0" hingga 3" = 1'-0"), teknik (1" = 10' hingga 1" = 100') atau metrik (1:1 hingga 1:1000).
3. Pilih {{ui:Atur skala}}.

Hasil: bilah status menampilkan skalanya, misalnya `1/4" = 1'-0"`. Skala arsitektural menampilkan panjang dalam kaki dan inci, skala teknik dalam kaki desimal, dan skala metrik hingga 1:50 dalam milimeter, dari 1:100 dalam meter.

:::warning
Preset hanya tepat jika PDF tidak diperkecil. Set berukuran setengah, atau lembar yang "fit to page" saat dibuat, akan salah diukur dengan preset. Kalibrasi dari dimensi yang diketahui sebagai gantinya, dan periksa satu dimensi dengan cara apa pun.
:::

## Kalibrasi dari dimensi yang diketahui

Gunakan ini untuk set berukuran setengah, lembar hasil pindaian, detail pada skala yang tidak biasa, atau untuk memeriksa preset.

1. Temukan dimensi panjang yang Anda percaya, atau batang skala grafis.
2. Pilih {{ui:Kalibrasi}} di grup {{ui:Ukur}} (atau pilih {{ui:Pilih dua titik}} di kotak "Skala lembar").
3. Klik satu ujung dimensi, lalu ujung lainnya. (Atau seret dari satu ujung ke ujung lainnya.) Zoom dulu untuk akurasi; {{key:Shift}} menjaga garis pada kelipatan 45°.
4. Kotak menyatakan seberapa jauh titik-titik itu di kertas dan bertanya "Sebenarnya seberapa jauh jaraknya?". Ketik {{ui:Jarak sebenarnya}}, misalnya `24'-0"`, `12' 6 1/2"`, `7.2 m` atau `900 mm`.
5. Pilih cara panjang ditampilkan di bawah {{ui:Tampilkan panjang dalam}}: {{ui:Kaki dan inci}}, {{ui:Kaki desimal}}, {{ui:Inci}}, {{ui:Meter}} atau {{ui:Milimeter}}.
6. Pilih {{ui:Atur skala}}.

Hasil: bilah status menampilkan "Terkalibrasi: 24'-0" untuk 1.00 in" (panjang sebenarnya dan panjang di kertas), dan alat yang akan Anda pakai untuk mengukur kembali aktif. Setiap cara mengetik panjang ada di [Satuan dan panjang](topic:units-and-scales).

Jarak sebenarnya juga bisa berupa perhitungan kecil: `12'6"+3/4"`, `(24'-0")/3` atau `2*450mm`. Gunakan `+ - * /` dan kurung. Angka tanpa satuan dihitung dalam satuan di bawah {{ui:Tampilkan panjang dalam}} (kaki untuk {{ui:Kaki dan inci}}). {{ui:Atur skala}} memakai hasilnya.

Jika MarkupCraft tidak dapat membaca apa yang Anda ketik, kotak akan menyatakannya: 'Itu bukan panjang yang dipahami MarkupCraft. Coba 24'-0", 12' 6 1/2", 7.2 m atau 900 mm.' Perhitungan yang tidak dapat diselesaikan akan menjelaskan alasan dan lokasinya, misalnya "Kurung tidak tertutup (karakter 5)."

## Ukur panjang

1. Pilih {{ui:Panjang}} ({{key:M}}).
2. Klik titik awal, lalu titik akhir. Atau seret dari awal ke akhir. {{key:Shift}} menjaga garis pada kelipatan 45°.

Hasil: garis dimensi dengan tanda dan panjang yang tertulis di atasnya. Bilah status mengulanginya ("Panjang: 12'-6 1/2" (1/4" = 1'-0")."), dan {{ui:Properti}} menampilkannya di bawah {{ui:Panjang}}. Kaki dan inci dibulatkan ke 1/16" terdekat.

Jika lembar belum memiliki skala, memilih {{ui:Panjang}} akan beralih ke {{ui:Kalibrasi}}, dan bilah status menjelaskan: "Kalibrasi lembar ini dulu: pilih dua titik yang berjarak diketahui, atau pilih skalanya. Lalu ukur." Setelah Anda mengatur skala, {{ui:Panjang}} kembali.

## Sketsa sesuai skala

Pada lembar yang sudah dikalibrasi, Anda dapat mengetik panjang sebenarnya saat menggambar {{ui:Garis}}, {{ui:Panah}}, {{ui:Panjang}}, {{ui:Polyline}}, {{ui:Poligon}}, {{ui:Awan bebas}}, {{ui:Luas}}, atau sebuah ruang:

1. Klik titik pertama.
2. Arahkan ke mana segmen berikutnya pergi dan ketik panjangnya, seperti `16` (dalam satuan lembar), `12'6"` atau `3.5 m`. Sebuah kotak terbuka di dekat penunjuk saat Anda mengetik.
3. Tekan {{key:Enter}}. Titik akan ditempatkan sejauh itu, searah penunjuk.

Untuk mengatur arah dengan tepat, tambahkan `<` dan sudut dalam derajat: `8 < 90` pergi 8 kaki lurus ke atas, `4<0` ke kanan, `10 < 225` ke bawah dan ke kiri, sebagaimana lembar dilihat (termasuk halaman yang diputar). Teruslah mengetik panjang untuk sudut berikutnya, lalu selesaikan bentuknya seperti biasa. {{key:Esc}} menutup kotak tanpa menempatkan titik.

## Ukur sudut

1. Pilih {{ui:Sudut}} ({{key:X}}).
2. Klik ujung salah satu lengan, lalu sudutnya, lalu ujung lengan lainnya.

Hasil: kedua lengan, busur kecil di sudut, dan sudutnya dalam derajat, hingga sepersepuluh (0° sampai 180°). Sudut tidak memerlukan skala. {{ui:Properti}} menampilkannya di bawah {{ui:Sudut}}, dan daftar, CSV, serta BCF memuatnya.

{{ui:Busur}} ({{key:O}}) pada lembar terkalibrasi juga menampilkan panjangnya sepanjang kurva di {{ui:Properti}}.

## Ukur luas dan kelilingnya

1. Pilih {{ui:Luas}} ({{key:Q}}).
2. Klik setiap sudut ruangan atau wilayah.
3. Selesaikan dengan klik dua kali, {{key:Enter}}, atau klik kanan (ketuk dua kali di layar sentuh). {{key:Backspace}} menghapus sudut terakhir.

Hasil: garis tepi berbayang dengan luas, serta "P" dengan keliling di tengah, misalnya "128.00 ft²" dan "P 48'-0"". Skala kaki memberi kaki persegi, inci memberi inci persegi, meter memberi meter persegi, dan milimeter memberi milimeter persegi. Sebuah luas memerlukan minimal tiga sudut.

### Lubang potong

Untuk meninggalkan kolom, shaft, atau halaman dalam, pilih area lalu pilih {{ui:Tambah lubang potong}} di {{ui:Properti}}. Klik sudut-sudut lubang potong di dalam area, dan selesaikan seperti untuk area. Lubang potong tetap terbuka (tanpa bayangan), luasnya dikurangkan, dan tepinya ditambahkan ke keliling: ruangan 16' × 8' dengan lubang potong 4' × 4' terbaca "112.00 ft²" dan "P 64'-0"". Tambahkan sebanyak yang Anda perlukan; lubang-lubang itu tidak boleh saling tumpang tindih atau memotong garis tepi area. {{ui:Buang lubang potong}} menghapus semuanya, dan {{key:Mod+Z}} membatalkan satu lubang.

## Hitung benda

1. Pilih {{ui:Hitung}} ({{key:U}}).
2. Di {{ui:Properti}}, ketik {{ui:Nama grup}}, misalnya "Saluran lantai". (Nama itu disimpan untuk lain kali.)
3. Klik setiap benda di lembar.

Hasil: setiap klik menambahkan titik bernomor. Titik pertama membawa tag seperti "Saluran lantai: 7", dan bilah status menyimpan total yang berjalan.

- **Mulai grup lain:** tekan {{key:Esc}} sekali (ini menghapus pilihan), ubah {{ui:Nama grup}}, lalu klik lagi.
- **Tambah ke grup yang ada:** pilih grupnya dulu, lalu pilih {{ui:Hitung}} dan klik.
- **Hapus tanda:** dengan grup terpilih, tahan {{key:Shift}} dan klik titiknya. Menghapus titik terakhir akan menghapus grupnya. Di layar sentuh tanpa keyboard, gunakan {{key:Mod+Z}} atau {{ui:Urungkan}} sebagai gantinya.
- **Ganti nama grup:** pilih grupnya dan edit {{ui:Nama grup}} di {{ui:Properti}}.

Grup hitung termasuk satu lembar. Hitungan pada beberapa lembar tampil sebagai grup terpisah di daftar markup.

## Ubah atau hapus skala

Klik tombol skala di bilah status. Kotak menampilkan skala saat ini; pilih skala lain, pilih {{ui:Pilih dua titik}}, atau pilih {{ui:Hapus skala}}.

Panjang dan luas yang sudah digambar **diukur ulang** dengan skala baru seketika. Urungkan akan mengembalikan skala lama.

## Ke mana angkanya pergi

- {{ui:Properti}} menampilkan nilai dari pengukuran yang dipilih.
- Tab {{ui:Markup}} mencantumkan setiap nilai, dan CSV-nya memiliki kolom "Pengukuran". Lihat [Daftar markup](topic:markups-list-and-export).
- PDF yang disimpan menyimpan skala pada halaman dan menulis panjang serta luas sebagai komentar pengukuran, sehingga program PDF lain yang memahami pengukuran dapat menampilkannya. Lihat [Apa yang disimpan di PDF](topic:what-the-pdf-keeps).

Untuk perhitungan volume penuh dengan item, rakitan, dan harga, gunakan TakeoffCraft: MarkupCraft mengukur untuk peninjauan, bukan untuk estimasi.
