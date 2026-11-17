---
title: Výber, presun a zmena poznámok
summary: Vyberajte poznámky kliknutím alebo oknom, presúvajte, meňte veľkosť, posúvajte šípkami, vystrihujte, kopírujte, prilepujte, prilepujte na rovnaké miesto, duplikujte, mažte a vracajte späť.
keywords: výber, vybrať všetko, zrušiť výber, okno, prekríženie, presun, zmena veľkosti, úchyty, posun šípkami, vystrihnúť, kopírovať, prilepiť, prilepiť na rovnaké miesto, schránka, iná karta, zmazať, späť, znova, upraviť
from: 62c7def3
---

Najprv vyberte {{ui:Výber}} ({{key:V}}). Na {{ui:Výber}} sa dostanete aj stlačením {{key:Esc}}: prvé stlačenie zruší výber, ďalšie prepne späť na {{ui:Výber}}.

## Výber poznámok

:::mouse
- **Jedna poznámka:** kliknite na ňu. Zobrazí sa prerušovaný rámček a úchyty a {{ui:Vlastnosti}} ju zobrazia.
- **Pridanie alebo odobratie jednej:** podržte {{key:Shift}} a kliknite.
- **Úplne vo vnútri okna:** ťahajte zľava doprava po prázdnej časti listu. Vyberú sa len poznámky celé vo vnútri rámčeka (plný obrys).
- **Dotýkajúce sa okna:** ťahajte sprava doľava. Vyberie sa všetko, čoho sa rámček dotýka (zelený prerušovaný obrys).
- **Všetko na tomto liste:** {{key:Mod+A}}, alebo {{ui:Viac}} a potom {{ui:Vybrať všetko}} v skupine {{ui:Úpravy}} na paneli nástrojov.
- **Nič:** kliknite na prázdne miesto, stlačte {{key:Esc}}, alebo {{ui:Viac}} a potom {{ui:Zrušiť výber}}.
:::

:::touch
- **Jedna poznámka:** ťuknite na ňu.
- **Viac poznámok:** ťahajte jedným prstom po prázdnej časti listu a nakreslite okno. Zľava doprava vyberie to, čo je úplne vnútri; sprava doľava vyberie to, čoho sa dotýka.
- Ťuknutie s podrženým {{key:Shift}} funguje len s pripojenou klávesnicou. Bez nej použite okno.
- Jeden prst nikdy neposúva v {{ui:Výber}}; použite dva prsty alebo nástroj {{ui:Posun}}.
:::

Komentáre iba na čítanie, ktoré prišli so súborom, zobrazujú sivý prerušovaný rámček a nemajú úchyty. Dajú sa vybrať a zodpovedať, ale nedajú sa meniť.

## Presun a zmena veľkosti

- **Presun:** ťahajte vybranú poznámku. Podržte {{key:Shift}}, aby sa presúvala len v násobkoch 45°. Viac vybraných poznámok sa presúva spolu.
- **Zmena veľkosti:** pri jednej vybranej poznámke ťahajte úchyt. Štvorcové úchyty menia veľkosť rámčeka (podržte {{key:Shift}} na zachovanie pomeru strán); guľaté úchyty presúvajú jeden rohový bod čiary, lomenej čiary, mnohouholníka, oblaku alebo merania (podržte {{key:Shift}} pre 45°); kosoštvorcové úchyty presúvajú hrot a zalomenie odkazu. Ťahy pera sa škálujú podľa svojho rámčeka.
- **Jemný posun:** stlačte šípky a posuňte výber o jeden pixel obrazovky; podržte {{key:Shift}} pre desať. Každé stlačenie je jeden krok späť.

## Zmena textu alebo vzhľadu

- **Text, odkazy a poznámky:** dvakrát kliknite na poznámku, alebo stlačte {{key:Enter}}, alebo vyberte {{ui:Upraviť na liste}} v {{ui:Vlastnosti}}. Napíšte text, potom kliknite mimo alebo stlačte {{key:Mod+Enter}}. {{key:Esc}} úpravu zruší.
- **Pečiatky:** vyberte inú pečiatku v {{ui:Vlastnosti}} (dvojklik otvorí {{ui:Vlastnosti}} za vás).
- **Štýl:** {{ui:Farba}}, {{ui:Hrúbka čiary}}, {{ui:Výplň}}, {{ui:Krytie}} a {{ui:Veľkosť textu}} v časti "Štýl" v {{ui:Vlastnosti}}. Keď je vybraných viac poznámok, {{ui:Vlastnosti}} ukážu druhy, ktoré ste vybrali, a zmenia ich naraz.

## Kopírovanie, prilepenie a duplikovanie

Skupina {{ui:Úpravy}} na paneli nástrojov má {{ui:Kopírovať}} a {{ui:Prilepiť}}; jej ponuka {{ui:Viac}} obsahuje všetky tieto príkazy, každý so svojou klávesou.

| Príkaz | Klávesa | Čo robí |
|---|---|---|
| {{ui:Vystrihnúť}} | {{key:Mod+X}} | Skopíruje vybrané poznámky a zmaže ich |
| {{ui:Kopírovať}} | {{key:Mod+C}} | Skopíruje vybrané poznámky |
| {{ui:Prilepiť}} | {{key:Mod+V}} | Vloží kópiu na list, na ktorom ste (kde, pozri nižšie) |
| {{ui:Prilepiť na rovnaké miesto}} | {{key:Mod+Shift+V}} | Vloží kópiu presne na miesto, z ktorého bola skopírovaná: na tom istom liste navrch originálu; na inom liste na rovnaké miesto na papieri |
| {{ui:Duplikovať}} | {{key:Mod+D}} | Vytvorí kópiu výberu trochu nižšie a vpravo, bez zásahu do toho, čo ste kopírovali predtým |

**Kam {{ui:Prilepiť}} vloží kópiu:**

- {{key:Mod+V}} s ukazovateľom na liste vloží kópiu vycentrovanú tam, kde je ukazovateľ. Presuňte ukazovateľ, znova stlačte {{key:Mod+V}} a umiestnite ďalšiu.
- Tlačidlo {{ui:Prilepiť}} (keď je ukazovateľ na paneli nástrojov), alebo {{key:Mod+V}} s ukazovateľom mimo listu, vloží kópiu trochu nižšie a vpravo od originálu. Každé ďalšie prilepenie tej istej kópie sa posunie ďalej, takže kópie sa nikdy neskrývajú. Na inom liste prvé prilepenie pristane tam, kde bol originál na jeho liste. Ak je toto miesto mimo zobrazenia, kópia pristane v strede zobrazenia.
- Ak chcete, aby {{key:Mod+V}} vždy prilepil vedľa originálu, vyberte {{ui:Vedľa kópie}} v časti {{ui:Prilepiť}} v [nastaveniach MarkupCraft](topic:settings).

Vložené poznámky sú vybrané, takže ich môžete hneď ťahať. Každé vystrihnutie, prilepenie alebo duplikovanie je jeden krok späť: {{key:Mod+Z}} odstráni celé prilepenie.

Prilepené kópie sú nové poznámky: dostanú vaše meno, dnešný dátum, stav Otvorené, bez čísla položky a prázdne vlákno. Ich druh, tvar, štýl, text a komentár sa prenesú. Komentáre iba na čítanie, ktoré prišli so súborom, sa nedajú kopírovať ani vystrihnúť.

**Medzi kartami:** to, čo skopírujete, sa uchováva aj v tomto prehliadači, takže iná karta MarkupCraft v tom istom prehliadači to môže prilepiť. Kopírovanie poznámok nepoužíva schránku počítača: nedajú sa prilepiť do iného programu a text skopírovaný inde sa nevloží ako poznámka.

**Ponuka pravého tlačidla:** pravým tlačidlom kliknite na poznámku (alebo na prázdny papier) a získate {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť sem}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Uložiť výber ako pečiatku…}}, {{ui:Pri uložení zlúčiť do strany}}, {{ui:Vložiť sem obrázok…}} a {{ui:Vybrať všetko}}. Pravé kliknutie na poznámku, ktorá nie je vybraná, ju najprv vyberie. Ťahanie pravým tlačidlom stále posúva. Na dotykovej obrazovke dlhé stlačenie poznámky otvorí rovnakú ponuku (na texte začne úpravu textu). Kláves ponuky alebo {{key:Shift+F10}} ju otvorí pri výbere.

Obsah strany vybraný nástrojom {{ui:Obsah}} sa tiež kopíruje a prilepuje: pozri [Zmena vlastných čiar, obrázkov a textu strany](topic:page-content).

Ak chcete skopírovať časť samotnej strany ako obrázok (obdĺžnik, elipsu alebo voľný tvar), alebo ako priehľadné prekrytie pre iný list či aplikáciu, pozri [Kopírovanie oblasti strany alebo prekrytia](topic:copy-an-area).

## Mazanie

Stlačte {{key:Delete}} alebo {{key:Backspace}}, vyberte {{ui:Viac}} a potom {{ui:Zmazať}} na paneli nástrojov, alebo {{ui:Zmazať}} v {{ui:Vlastnosti}}. Stavový riadok povie, koľko ich bolo zmazaných. Komentáre iba na čítanie zo súboru sa nikdy nemažú ("ponechané ako v súbore").

## Späť a znova

- {{key:Mod+Z}} vráti späť, {{key:Mod+Y}} alebo {{key:Mod+Shift+Z}} vykoná znova. Na paneli nástrojov sú {{ui:Späť}} a {{ui:Znova}}.
- Stavový riadok povie, čo bolo vrátené späť ("Späť: presunutie poznámky.").
- Späť sa vzťahuje na každú zmenu poznámok, stavov, odpovedí, položiek nedostatkov, mierok listov a názvov listov, až do 500 krokov.
- História sa vymaže, keď zatvoríte sadu.

## Kopírovanie poznámok na iné listy

Ak chcete rovnakú pečiatku, poznámku alebo oblak na viacerých listoch, vyberte ju (alebo viac poznámok) a vyberte {{ui:Kopírovať na iné listy…}} v {{ui:Vlastnosti}}. Označte listy alebo {{ui:Všetky listy}} a vyberte {{ui:Kopírovať}}. Každý list dostane kópiu na rovnakom mieste na strane, podpísanú vaším menom. Jedno {{key:Mod+Z}} ich odstráni všetky.
