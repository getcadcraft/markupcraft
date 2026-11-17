---
title: İki kişinin bir PDF üzerindeki düzenlemelerini birleştirin
summary: git, Fossil ya da Mercurial'ın aynı PDF'in iki işaretlenmiş kopyasını, işaretleme işaretleme ve notlar dahil, birleştirmesine izin verin.
keywords: birleştir, git, fossil, mercurial, sürüm kontrolü, çakışma, üç yönlü, cadcraft merge, gitattributes, işaretlemeler, notlar, takım, iki kopya
from: a450a9ef
---

İki kişi aynı PDF'i iki kopyada işaretler. Farklı işaretlemelere dokunduysalar, kopyalar elle değil bir program tarafından birleştirilebilir.

## Bunu mümkün kılan

MarkupCraft'ın kaydettiği her işaretleme, PDF'in içinde kendi adını (kimliğini) taşır ve bu ad asla değişmez. Birleştirme işaretlemeleri dosyadaki yerlerine göre değil, bu adına göre arar; çünkü her program kaydederken yerleri yeniden numaralandırır. Notlar ve mühürlü özel notlar da aynı şekilde eşleştirilir.

Sayfalara hiç dokunulmaz: iki kopyanın da sayfa sayısı aynı olmalıdır. Farklıysa birleştirme kendi kopyanızı olduğu gibi tutar ve bunu söyler; çünkü sayfa eklemek ya da çıkarmak bir insanın işidir.

## Kurun

Git, depo başına bir kez iki satıra ihtiyaç duyar:

```
# .gitattributes
*.pdf merge=cadcraft

# bir kez, her bilgisayarda
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git olmadan, `cadcraft merge <base> <ours> <theirs> -o <result>` komutunu çalıştırın. Fossil ve Mercurial aynı üç dosyayı kendi birleştirme aracı ayarlarında alır. Bir çizimle birlikte giden görev dosyası (`<name>.markups.json`, bkz. [İşaretlemeyi göreve dönüştürün](topic:markups-that-act)) düz metin olarak aynı şekilde birleşir.

## Kurallar

- Yalnızca bir tarafta değiştirilen bir işaretleme alınır. İki tarafta aynı değişiklik yapılmışsa bir kez alınır.
- Aynı işaretleme iki farklı şekilde değiştirilmişse bu bir **çakışma**dır: sizin tarafınız kalır ve rapor her iki tarafı listeler. Sonucu açın ve o işaretlemeyi elle düzeltin.
- Herhangi bir tarafta eklenen işaretleme korunur. Bir tarafta silinen ve diğer tarafta dokunulmamış olan işaretleme silinir. Bir tarafta silinip diğer tarafta değiştirilmişse: silinir ve raporlanır.
- Katmanlar, sütunlar, kayıtlar ve notlar aynı kurallara uyar.
- Mühürlü özel notlar asla açılmaz: iki tarafın blokları olduğu gibi tutulur.

Birleştirilmiş dosya, MarkupCraft'ın kendi Kaydet işleminde olduğu gibi kopyanızın tam bir yeniden yazımıdır. Hiçbir şey yüklenmez; her şey bilgisayarınızda çalışır.
