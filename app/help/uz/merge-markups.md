---
title: Bir PDF ustidagi ikki tahrirni birlashtirish
summary: Git, Fossil yoki Mercurial dasturlariga bir PDF ning ikki belgilangan nusxasini har bir belgilashni alohida, eslatmalar bilan birga birlashtirishga ruxsat bering.
keywords: birlashtirish, git, fossil, mercurial, versiyalarni boshqarish, nizo, uch tomonlama, cadcraft merge, gitattributes, belgilashlar, eslatmalar, jamoa, ikki nusxa
from: a450a9ef
---

Ikki kishi bir PDF ni ikki nusxada belgilaydi. Agar ular turli belgilashlarga tegsa, nusxalarni qoʻlda emas, dastur yordamida birlashtirish mumkin.

## Bu qanday ishlaydi

MarkupCraft saqlaydigan har bir belgilash PDF ichida oʻz nomini (identifikatorini) olib yuradi va bu nom hech qachon oʻzgarmaydi. Birlashtirish belgilashlarni faylda joylashgan oʻrni boʻyicha emas, aynan shu nom boʻyicha topadi, chunki har bir dastur saqlaganda oʻrinlarni qayta raqamlaydi. Izohlar va muhrlangan shaxsiy izohlar ham xuddi shunday moslanadi.

Varaqlarga hech qachon tegilmaydi: ikkala nusxada ham sahifalar soni bir xil boʻlishi kerak. Agar ular farq qilsa, birlashtirish sizning nusxangizni oʻz holicha qoldiradi va buni aytadi, chunki sahifa qoʻshish yoki olib tashlash inson vazifasi.

## Sozlash

Git uchun har bir omborda bir marta ikki qator kerak:

```
# .gitattributes
*.pdf merge=cadcraft

# bir marta, har bir kompyuterda
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git siz boʻlsa, `cadcraft merge <base> <ours> <theirs> -o <result>` buyrugʻini ishga tushiring. Fossil va Mercurial oʻzlarining birlashtirish asbobi sozlamasida xuddi shu uchta faylni oladi. Chizma bilan birga yuradigan vazifa fayli (`<name>.markups.json`, qarang: [Harakat qiluvchi belgilashlar](topic:markups-that-act)) xuddi shunday, oddiy matn sifatida birlashadi.

## Qoidalar

- Faqat bir tomonda oʻzgargan belgilash olinadi. Ikkala tomonda bir xil oʻzgarish bir marta olinadi.
- Xuddi shu belgilash ikki xil oʻzgargan boʻlsa, bu **nizo**: sizning tomoningiz qoladi va hisobotda ikkalasi roʻyxatga olinadi. Natijani oching va oʻsha belgilashni qoʻlda tuzating.
- Ikki tomonning istalgan birida qoʻshilgan belgilash saqlanadi. Bir tomonda oʻchirilgan va ikkinchisida tegilmagan belgilash oʻchiriladi. Bir tomonda oʻchirilgan, ikkinchisida oʻzgargan belgilash: oʻchiriladi va hisobotda aytiladi.
- Qatlamlar, ustunlar, yozuvlar va izohlar xuddi shu qoidalarga amal qiladi.
- Muhrlangan shaxsiy izohlar hech qachon ochilmaydi: ikkala tomonning bloklari oʻz holicha saqlanadi.

Birlashtirilgan fayl sizning nusxangizning toʻliq qayta yozilishi boʻladi, xuddi MarkupCraft ning oʻz {{ui:Save}} amali kabi. Hech narsa yuklanmaydi; hammasi kompyuteringizda ishlaydi.
