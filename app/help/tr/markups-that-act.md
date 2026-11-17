---
title: Bir işaretlemeyi göreve dönüştürün
summary: Bir işaretlemeye atanan kişi (bir kişi ya da asistanınız), bir son gün ve çizimle ya da model öğesiyle bağlantı verin; gerçekten değiştiğinde görevin kapandığını görün.
keywords: görev, görevler, atanan, asistan, son tarih, gecikmiş, bağlantı, kapanır, değişiklik, öğe, çizim alanı, eylem yapan işaretlemeler, MCP
from: 9e970202
---

Görev, birinin yapması gereken bir işaretlemedir. Sayfadaki yerini ve yanıt dizisini korur; bir başlık, bir atanan kişi, bir son gün, bir durum ve isterseniz ilgili olduğu şeye bir bağlantı ekler.

## Görev oluşturun

1. Bir ya da daha fazla işaretleme seçin.
2. {{ui:Görevler}} sekmesini açın ve {{ui:Seçileni göreve çevir}} seçeneğini seçin.
3. Başlığı doldurun (işaretlemenin metninden başlar), kimin için olduğunu ({{ui:Kişi}} ya da {{ui:Asistan}} ve bir ad), isteğe bağlı bir son günü ve neyin izleneceğini.

Asistan görevi, MarkupCraft'a bağladığınız yapay zekâ asistanı için yapılan iştir (bkz. [MarkupCraft'ı bir yapay zekâ asistanıyla kullanın](topic:use-with-ai-assistants)). MarkupCraft kendi asistanını içermez: yalnızca işi listeler ve asistanın yanıtlarını alır. {{ui:Atanan}} ve ardından listede {{ui:Asistan}} seçeneğini seçmek, ona bekleyen işleri gösterir.

## Bir değişikliği izleyin

- **İşaretlemenin içindeki çizim.** MarkupCraft işaretlemenin kutusu içindeki çizgileri şu anki hâliyle tutar. Bu sayfanın daha yeni bir revizyonunu açtığınızda (aynı sayfa numarasına sahip ikinci bir dosya ya da aynı sayfa konumu), {{ui:Şimdi denetle}} seçeneğini seçin: o alandaki çizgiler bir kıl payından fazla farklıysa görev kapanır.
- **Bir model öğesi.** Uygulamayı ve öğenin kimliğini verin. Asistanınız öğeyi diğer uygulamanın kendi araçlarıyla okur ve `tasks_check` ile bildirir. İlk bildirim başlangıç durumu olarak tutulur; sonraki farklı bir bildirim görevi kapatır. Silinmiş bir öğe de görevi kapatır.
- **Hiçbir şey.** Elle bitirdiğiniz düz bir görev.

Kapatılan görev Tamamlandı olarak işaretlenir, işaretlemesi Tamamlandı olur ve konu dizisinde neyin değiştiğini söyleyen bir not yer alır. Tek bir geri alma adımı onu yeniden açar.

**Sınır:** kontrol, daha yeni revizyonun aynı sayfa başlangıç noktasını ve sayfa boyutunu kullandığını varsayar. Başka bir boyuta yeniden çizilmiş bir sayfa eşleşmez, bu yüzden görevleri kapanmaz. Sayfalar sayfa numarasına göre, yoksa sayfa konumuna göre eşleştirilir; MarkupCraft bir revizyonu diğerine sığdırmak için ölçeklendirmez.

Aynı çizimi yeni bir tarih damgasıyla yeniden çizdirmek ya da çizgileri 1.5 pt'den az taşımak bir değişiklik sayılmaz. Daha yeni bir revizyon açık değilse görev açık kalır ve durum çubuğu bunu söyler.

## Liste

{{ui:Görevler}} listesi duruma ve kime ait olduğuna göre süzülebilir; {{ui:Gecikmiş}} dahil. Son günü geçmiş bir görev Sorunlar panelinde uyarı olarak görünür. {{ui:CSV}} listeyi dışa aktarır.

Görevler işaretlemeyle birlikte PDF'te kaydedilir ve diğer işaretleme özellikleri gibi Canlı üzerinden iletilir.
