---
title: Práca s viacerými súbormi naraz
summary: Otvorte mnoho PDF ako jednu sadu, hľadajte listy naprieč súbormi, kopírujte poznámky medzi nimi a uložte kópiu každého súboru.
keywords: viac súborov, viac PDF, sada plánov, sada, dávka, mnoho súborov, skombinovať, profesie, architektonické, konštrukčné, strojové, uložiť všetko, zatvoriť
from: f59354ae
---

Súbor plánov často prichádza ako jedno PDF pre každú profesiu alebo jedno PDF pre každý list. MarkupCraft berie všetko, čo otvoríte, ako **jednu sadu**.

## Otvorenie naraz

Vyberte všetky PDF vo výbere súborov naraz, alebo ich všetky pretiahnite na oblasť listov. Ak chcete pridať ďalšie neskôr, otvorte ich rovnakým spôsobom; pripoja sa na koniec zoznamu {{ui:Listy}} v poradí, v akom ich otvoríte.

Výsledok: "Otvorených súborov: 6 (84 listov v sade)." Každá strana je list. Listy s číslom listu zobrazujú "List A-101" pod svojím názvom; ostatné zobrazujú súbor a stranu.

Uloženého súboru „sada“ niet: nabudúce otvorte tie isté PDF znova (kópie "(marked up)", ak ste ich uložili).

## Naprieč celou sadou

- **Nájdenie listu:** {{ui:Hľadať listy}} prehľadáva čísla listov, názvy listov a názvy súborov všetkých súborov. {{key:PageUp}} a {{key:PageDown}} prechádzajú všetkými listami všetkých súborov v poradí.
- **Zoznam poznámok:** karta {{ui:Poznámky}} zobrazuje poznámky zo všetkých súborov. Filtrujte podľa {{ui:List}}, aby ste ho zúžili. CSV má stĺpec Súbor.
- **Zoznam nedostatkov:** jedno číslovanie pre celú sadu.
- **Porovnanie:** starý a nový list môžu pochádzať z rôznych súborov.
- **Kopírovanie a prilepenie:** {{key:Mod+C}} na jednom liste a {{key:Mod+V}} na inom, v ľubovoľnom súbore. Kópia pristane na rovnakom mieste na strane, mierne posunutá.

## Uloženie

Vyberte {{ui:Uložiť}}. Keď je otvorených viac súborov, MarkupCraft sa opýta:

- {{ui:Tento súbor}}: kópia súboru listu, na ktorom ste, s poznámkami.
- {{ui:Každý zmenený súbor}}: kópia každého súboru s neuloženými zmenami. Každá sa stiahne samostatne ako "<názov súboru> (marked up).pdf".
- {{ui:Zrušiť}}

:::chromium
Keď prvýkrát uložíte naraz viac súborov, Chrome a Edge sa môžu opýtať, či táto stránka smie sťahovať viac súborov. Vyberte {{ui:Povoliť}}; inak príde len prvá kópia.
:::

:::safari
Safari sa môže opýtať raz pre každý súbor. Na iPade sa každá kópia uloží do aplikácie Súbory.
:::

Súbor, ktorého poznámky sa uložili, sa prestane počítať ako zmenený; ostatné sa počítajú ďalej.

Exporty CSV, BCF a zoznamu nedostatkov sa pomenujú podľa **prvého** súboru, ktorý ste otvorili.

## Zatvorenie

{{ui:Zatvoriť}} zatvára celú sadu; zatiaľ nie je možné zatvoriť len jeden súbor. Ak je niečo neuložené, opýta sa:

- {{ui:Zrušiť}}: nestane sa nič.
- {{ui:Zavrieť bez uloženia}}: neuložené poznámky sa stratia.
- {{ui:Najprv uložiť kópie}}: uloží každý zmenený súbor a potom zatvorí.

Zatvorenie tiež vymaže históriu späť.

## Veľké sady

- Text každej strany sa pri otvorení číta, aby sa našli čísla listov, takže sada so 100 listami chvíľu trvá. Stavový riadok počíta listy, ako postupuje.
- Obrázky listov v zozname sa kreslia pri posúvaní k nim.
- Každé otvorené PDF sa drží v pamäti karty prehliadača. Ak sa karta spomalí, zatvorte ostatné ťažké karty alebo kontrolujte jednu profesiu naraz.
- Otvorenie toho istého súboru dvakrát vám dá dve kópie jeho listov. Ak sa to stane, vyberte {{ui:Zatvoriť}} a sadu otvorte znova.
