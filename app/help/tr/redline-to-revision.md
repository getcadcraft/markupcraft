---
title: İşaretlemeleri çizimciye kırmızı kalem olarak gönderin
summary: Açık işaretlemeleri, değişiklikleri çizecek kişi için bir kırmızı kalem dosyası olarak yazın, sonra her işaretlemenin Kabul edildi veya Reddedildi göstermesi için yanıtlarını yükleyin.
keywords: kırmızı kalem, revizyon, çizimci, kabul et, reddet, yanıtlar, cc-redline, revizyon bulutu, işaretlemeleri uygula
from: cb099d04
---

Gözden geçirmek işin yarısıdır; çizim yine de değişmelidir. Kırmızı kalem dosyası her açık işaretlemeyi çizimciye taşır; çizimcinin yanıtları da sonucu geri getirir.

## Gönderin

1. {{ui:Görevler}} sekmesini açın ve {{ui:Revizyona kırmızı kalem}} seçeneğini açın.
2. İşaretlemelerin hangi revizyona karşı olduğunu yazın (örneğin B).
3. {{ui:Kırmızı kalem dosyasını dışa aktar}} seçeneğini seçin.

`.redline.json` dosyasını alırsınız; her Açık işaretleme için bir kalem içerir: sayfası, konumu (sayfanın oranları olarak, böylece farklı boyutta yeniden çizildiğinde de hizalı kalır, ve noktalar cinsinden), sözcükleri, yazarı ve yanıt dizisi, varsa görevi. Diğer programlardan gelen salt okunur açıklamalar, resimler ve lejantlar dışarıda bırakılır.

## Yanıtlar

Çizim tarafı her kalemi bir notla birlikte Kabul edildi, Reddedildi veya Tamamlandı olarak yanıtlar; `.redline-answers.json` dosyasında. {{ui:Yanıt dosyasını yükle…}} seçeneğini seçin ve onu seçin: her işaretleme o durumu ve çizimcinin notunu yanıt dizisinde alır; işaretlemesi kabul edilen veya tamamlanan bir görev bitmiş olur. Tek bir geri alma adımı tüm yanıtları geri alır.

Dosya biçimi `docs/REDLINE-FORMAT.md` dosyasındadır. CadCraft tarafı (paketi okuma, her kalemi kabul etme veya reddetme, revizyon bulutları ve günlük) ayrıca yapılmaktadır.
