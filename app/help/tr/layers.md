---
title: İşaretleme katmanları
summary: İşaretlemeleri adlandırılmış katmanlara koyun, sonra her katmanı gösterin, gizleyin ya da kilitleyin; diğer PDF görüntüleyicileri de bunları değiştirebilir.
keywords: katmanlar, katman, gizle, göster, kilitle, işaretlemeleri grupla, disiplin, mekanik, elektrik, isteğe bağlı içerik, ocg, görünürlük
from: 0fbb4c26
---

Katmanlar işaretlemeleri gruplar; örneğin disipline ya da gözden geçiren kişiye göre. Altındaki çizimi görmek için bir katmanı gizleyin ya da işaretlemelerinin yanlışlıkla taşınmaması için kilitleyin.

## Katman oluşturun ve üzerine çizin

1. {{ui:Sayfalar}} panelinin en üstündeki {{ui:Katmanlar}} bölümünü açın.
2. {{ui:Yeni katman}} seçin, `Mechanical` gibi bir ad yazın ve {{ui:Katman ekle}} seçeneğini seçin.
3. Yeni katman geçerli katman olur: bundan sonra çizdiğiniz her işaretleme ona eklenir. Yeni işaretlemelerin nereye gideceğini değiştirmek için başka bir katmanın adını ya da {{ui:Katman yok}} seçeneğini seçin.

Bir işaretlemeyi başka bir katmana taşımak için onu seçin ve {{ui:Özellikler}} içinde {{ui:Katman}} altından katmanı seçin. Bu listenin sonundaki {{ui:Yeni katman…}} seçeneği, o anda bir katman oluşturur. Taşıma {{key:Mod+Z}} ile geri alınabilir.

## Göster, gizle ve kilitle

Her katman satırında iki düğme vardır:

- **Göz** katmanı gösterir ya da gizler. Gizli işaretlemeler çizilmez ve seçilemez; yine de {{ui:İşaretlemeler}} listesinde sayılırlar.
- **Kilit** katmanın işaretlemelerini sayfada tutar, ama seçilmelerini, taşınmalarını ya da silinmelerini engeller.

Kalem düğmesi bir katmanın adını değiştirir ve işaretlemelerini de beraberinde taşır. Bir katmanın işaretlemelerini görmek için {{ui:İşaretlemeler}} listesini {{ui:Katman}} alanına göre süzün.

## Kaydedilen PDF'te

Her katman bir PDF katmanı (isteğe bağlı içerik) olur. Diğer PDF görüntüleyicileri katmanları kendi katman panellerinde listeler ve değiştirebilir; gizlediğiniz bir katman orada da gizli başlar. Çizimin zaten sahip olduğu katmanlar, örneğin CAD katmanları, olduğu gibi kalır. Kopyayı MarkupCraft'ta yeniden açtığınızda işaretlemeler, bıraktığınız gibi gizli ve kilitli olarak kendi katmanlarına geri döner.

## Bilmeniz iyi olacak

- Gizleme ve kilitleme düzenleme değildir: {{key:Mod+Z}} ile geri alınmazlar, ama PDF ile birlikte kaydedilirler.
- Kopyalama ve yapıştırma bir işaretlemenin katmanını korur.
- Düzleştirilmiş bir kopya, katmanı ne olursa olsun her işaretlemeyi sayfaya çizer. Bkz. [Düzleştirilmiş bir kopya kaydedin](topic:flatten).
