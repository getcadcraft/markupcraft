---
title: Jadikan markup sebuah tugas
summary: Beri markup penerima (seseorang atau asisten Anda), hari tenggat, dan tautan ke gambar atau elemen model yang dibahasnya, lalu lihat tugas itu tertutup saat perubahan benar-benar terjadi.
keywords: tugas, tugas, penerima, asisten, tenggat, lewat tenggat, tautan, menutup, berubah, elemen, area gambar, markup yang bertindak, MCP
from: 9e970202
---

Tugas adalah markup yang harus dikerjakan oleh seseorang. Ia tetap berada di tempatnya pada lembar dan utasnya, dan menambahkan judul, penerima, hari tenggat, status, serta, jika Anda mau, tautan ke hal yang dibahasnya.

## Membuat tugas

1. Pilih satu atau beberapa markup.
2. Buka tab {{ui:Tugas}} lalu pilih {{ui:Jadikan pilihan sebagai tugas}}.
3. Isi judulnya (diawali dari teks markup), untuk siapa tugas itu ({{ui:Orang}} atau {{ui:Asisten}}, dan sebuah nama), hari tenggat opsional, dan hal yang perlu diperhatikan.

Tugas untuk asisten adalah pekerjaan bagi asisten yang Anda hubungkan ke MarkupCraft (lihat [Gunakan MarkupCraft dengan asisten AI](topic:use-with-ai-assistants)). MarkupCraft tidak memiliki asisten sendiri: ia hanya mencantumkan pekerjaannya dan menerima jawaban asisten. Memilih {{ui:Ditugaskan kepada}}, lalu {{ui:Asisten}} dalam daftar, menampilkan apa yang sedang menunggunya.

## Memperhatikan perubahan

- **Gambar di dalam markup.** MarkupCraft menyimpan garis-garis di dalam kotak markup sebagaimana adanya sekarang. Saat Anda membuka revisi yang lebih baru dari lembar itu (berkas kedua dengan nomor lembar yang sama, atau posisi halaman yang sama), pilih {{ui:Periksa sekarang}}: jika garis di area tersebut berbeda lebih dari sedikit, tugas akan ditutup.
- **Elemen model.** Berikan aplikasinya dan id elemennya. Asisten Anda membaca elemen itu dengan alat aplikasi lain dan melaporkannya dengan `tasks_check`. Laporan pertama disimpan sebagai keadaan awal; laporan berikutnya yang berbeda akan menutup tugas. Elemen yang dihapus juga menutupnya.
- **Tidak ada.** Tugas biasa yang Anda selesaikan secara manual.

Tugas yang ditutup diberi tanda Done, markupnya menjadi Completed, dan sebuah catatan di utas menyebutkan apa yang berubah. Satu langkah urung membukanya kembali.

**Batas:** pemeriksaan mengasumsikan revisi yang lebih baru menggunakan titik asal dan ukuran halaman yang sama. Lembar yang dicetak ulang dengan ukuran lain tidak akan cocok, sehingga tugasnya tidak tertutup. Lembar dipasangkan berdasarkan nomor lembar, atau jika tidak, berdasarkan posisi halaman; MarkupCraft tidak menskalakan satu revisi agar sesuai dengan yang lain.

Mencetak ulang gambar yang sama dengan cap tanggal baru, atau garis yang bergeser kurang dari 1.5 pt, tidak dihitung sebagai perubahan. Jika tidak ada revisi yang lebih baru yang terbuka, tugas tetap terbuka dan bilah status menyebutkannya.

## Daftar

Daftar {{ui:Tugas}} dapat disaring menurut status dan untuk siapa tugas itu, termasuk {{ui:Lewat batas waktu}}. Tugas yang melewati hari tenggatnya tampil di panel Masalah sebagai peringatan. {{ui:CSV}} mengekspor daftar.

Tugas disimpan di dalam PDF bersama markupnya, dan berpindah melalui Live seperti properti markup lainnya.
