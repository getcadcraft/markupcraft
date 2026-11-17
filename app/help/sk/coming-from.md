---
title: Prechod z iného softvéru na poznámky
summary: Ako si zvyky stolového programu na poznámky k PDF zodpovedajú MarkupCraft a rozdiely, ktoré ľudí prekvapia.
keywords: prepnutie, prechod, migrácia, známe, stolové poznámky k PDF, zbierka nástrojov, zoznam poznámok, prekrytie, relácie, profil, skratky, rozdiely
from: c8f323e1
---

Ak prezeráte výkresy v Bluebeam Revu (alebo pripomienkujete PDF v inom stolovom programe na PDF), väčšina MarkupCraft vám bude známa: oblaky, popisky, zbierka nástrojov, zoznam poznámok, stavy s odpoveďami, kalibrované merania, prekrytia listov. Veľký rozdiel je v spôsobe práce so súbormi, preto si prečítajte ďalšiu časť, aj keď ostatné preskočíte.

## Päť rozdielov, na ktorých záleží

1. **Uloženie vytvorí nový súbor.** MarkupCraft beží v prehliadači a nedokáže prepísať PDF na vašom disku. {{ui:Uložiť}} stiahne "<name> (marked up).pdf" a pôvodný súbor zostane nezmenený. Pri ďalšom otvorení otvorte kópiu "(marked up)" a staré kópie si upracte sami.
2. **PDF sa uloží, až keď ho uložíte.** Dovtedy záložná kópia v tomto prehliadači uchová vaše poznámky aj pri páde alebo zatvorenej karte a MarkupCraft ju pri ďalšom spustení ponúkne. Je to poistka: uložte PDF, aby sa revízia zachovala.
3. **Váš profil je v prehliadači.** Vaše meno autora, nastavenia nástrojov a zbierka nástrojov sa uchovávajú v tomto prehliadači na tomto počítači. Iný prehliadač alebo počítač začne od nuly a vymazanie údajov stránky ich odstráni. Zbierku nástrojov exportujte ako zálohu. Pozri [Čo zostáva v tomto prehliadači](topic:browser-storage).
4. **Zatiaľ žiadne spoločné relácie.** Nie je k dispozícii živá spoločná revízna relácia ani cloudový projekt. Revízia putuje v PDF: uložíte, pošlete kópiu, ďalšia osoba odpovie a uloží.
5. **Mierka je pre každý list a iba pre list.** Vnútri listu nie sú žiadne výrezy a nie je možnosť "použiť túto mierku na všetky strany". Kalibrujte každý list, na ktorom meriate.

## Zvyk po zvyku

| Na čo ste zvyknutí | V MarkupCraft |
|---|---|
| Panel miniatúr, označenia strán | {{ui:Listy}} vľavo. Názvy sa berú z označení strán alebo sa čítajú z popisového poľa; opravte ich pomocou {{ui:Premenovať list}}. |
| Otvorenie viacerých PDF ako sady | Otvorte ich všetky naraz; stanú sa jedným zoznamom. Súbor sady sa neukladá: pri ďalšom použití otvorte rovnaké PDF. |
| Zbierka nástrojov so sadami nástrojov | Karta {{ui:Nástroje}}: jedna zbierka na prehliadač, uložené nástroje so štýlom a predmetom. Zdieľajte cez {{ui:Exportovať}} a {{ui:Importovať}} ako súbor JSON. Súbory sád nástrojov z iných programov sa nedajú importovať. |
| Panel vlastností | Karta {{ui:Vlastnosti}}: stav, predmet, komentár, štýl, odpovede a položka nedostatku na jednom mieste. |
| Zoznam poznámok so stĺpcami | Karta {{ui:Poznámky}} s filtrami pre list, autora, stav a typ. Exportujte CSV alebo BCF. Vlastné stĺpce ani súhrn v PDF či zošite zatiaľ nie sú k dispozícii. |
| Stav a stav revízie | {{ui:Stav}}: Otvorené, Prijaté, Zamietnuté, Dokončené. Vlastné sady stavov nie sú k dispozícii. Ukladajú sa ako štandardné stavy revízie. |
| Odpovede na poznámku | Vlákno "Odpovede" vo {{ui:Vlastnosti}}, so zaznamenanými zmenami stavu. Odoslanú odpoveď nemožno upraviť. |
| Kalibrovať, potom dĺžka, plocha, počet | {{ui:Kalibrovať}}, {{ui:Dĺžka}} ({{key:M}}), {{ui:Plocha}} ({{key:Q}}, dáva plochu a obvod), {{ui:Počet}} ({{key:U}}). Zatiaľ nie sú k dispozícii uhol, polomer, objem, dĺžka lomenej čiary ani výrezy. |
| Prekrytie strán | Karta {{ui:Porovnať}}: červená pre starý, modrá pre nový, zarovnanie podľa dvoch bodov. Automatické oblakovanie pri porovnaní dokumentov nie je k dispozícii. |
| Pečiatky | {{ui:Pečiatka}} so šiestimi vstavanými pečiatkami a vlastným znením, podpísané vaším menom a dátumom. Pečiatky s obrázkom alebo podpisom zatiaľ nie sú k dispozícii. |
| Sledovanie nedostatkov alebo problémov | Karta {{ui:Zoznam nedostatkov}}: očíslované položky s pridelením, termínom a stavom; export CSV. |
| Živá spolupráca v relácii | Zatiaľ nie je k dispozícii. Uložené PDF posielajte ďalej. |
| Zlúčenie do strany | Ešte nie je hotové. Poznámky zostanú ako komentáre, ktoré môžu iné prehliadače zobraziť a vytlačiť. |
| Vrstvy pre poznámky | Ešte nie je hotové. Na triedenie komentárov použite predmety, autorov a filtre zoznamu. |
| Odkazy medzi listami | Ešte nie je hotové. |
| Medzerník na posun, koliesko na zväčšenie | Rovnako: podržte {{key:Space}} a potiahnite; koliesko zväčšuje pri kurzore. Koliesko nikdy neposúva stranu. |

## Klávesy, ktoré sa líšia

Mnohé jednopísmenové klávesy sú také, aké by ste čakali, ale tieto si overte skôr, než to za vás urobia prsty:

- {{key:K}} je {{ui:Popisok}} a {{key:Q}} je {{ui:Plocha}}. Ak ste zvyknutí používať Q na popisky, tu spustí plochu.
- {{key:C}} je obdĺžnikový {{ui:Oblak}}; {{key:Shift+C}} je {{ui:Voľný oblak}}.
- {{key:M}} je {{ui:Dĺžka}}, {{key:U}} je {{ui:Počet}}, {{key:Y}} je {{ui:Lomená čiara}}, {{key:G}} je {{ui:Mnohouholník}}, {{key:I}} je {{ui:Zvýrazňovač}}.
- {{key:Mod+D}} duplikuje výber (namiesto záložky prehliadača).
- {{key:Mod+Plus}} a {{key:Mod+Minus}} zväčšujú list, nie stránku prehliadača.
- Ľubovoľnú klávesu možno zmeniť: pozri nižšie.

:::tip
Ak vám prsty už vedia Bluebeam Revu, vyberte štýl ponuky {{ui:Kontrola PDF}} v {{ui:Nastavenia}} › {{ui:MarkupCraft}} › {{ui:Ponuky, klávesy a myš}}: panel ponúk (Súbor, Úpravy, Zobrazenie, Dokument, Poznámka, Meranie, Okno) nad radom nástrojov na revíziu, {{key:Q}} pre popisok, {{key:H}} pre zvýrazňovač, {{key:N}} pre mnohouholník a merania na {{key:Alt+Shift}} s písmenom. Ľubovoľnú klávesu možno zmeniť aj tam. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).
:::

Úplný zoznam je v [Klávesnica a myš](topic:keyboard).

## Veci, ktoré fungujú inak, než by ste mohli čakať

- **Nástroje zostávajú zapnuté.** Po oblaku stále kreslíte oblaky. {{key:Esc}} raz zruší výber, dvakrát sa vrátite k {{ui:Výber}}.
- **Text a popisky potrebujú text.** Ak dokončite bez napísaného textu, nepridá sa žiadna poznámka. Poznámky ostanú prázdne.
- **Merania potrebujú najprv mierku.** {{ui:Dĺžka}} a {{ui:Plocha}} na nekalibrovanom liste prepnú na {{ui:Kalibrovať}} a potom sa vrátia.
- **Komentáre z iných programov.** Obdĺžniky, elipsy, úsečky, lomené čiary, mnohouholníky, atramentové ťahy, textové polia a lepiace poznámky vytvorené inde sa stanú upraviteľnými poznámkami MarkupCraft a pri uložení sa prepíšu spôsobom MarkupCraft (ich vzhľad sa môže mierne zmeniť). Textové zvýraznenia, pečiatky iných programov a iné špeciálne typy zostanú iba na čítanie: môžete na ne odpovedať, ale nemožno ich meniť.
- **Znaky mimo západoeurópskych písmen** sa v uloženom PDF vytlačia ako "?". Pozri [Uloženie PDF s poznámkami](topic:save-the-marked-up-pdf).
- **Dátumy pečiatok** používajú UTC, takže pečiatka vytvorená večer v Amerike môže ukázať zajtrajší dátum.
- **Merania sa prenášajú** ako štandardné komentáre merania a každý kalibrovaný list si ponechá svoju mierku, takže program, ktorý číta merania v PDF, ich zvyčajne zobrazí. Presné správanie závisí od tohto programu.

## Používanie oboch

Môžete prechádzať tam a späť. Komentáre vytvorené inde sa otvoria v MarkupCraft a PDF "(marked up)" sa otvorí v iných programoch pre PDF so všetkými poznámkami, odpoveďami a stavmi viditeľnými. To, čo číta iba MarkupCraft (pridelenie a termín položky nedostatku, stav položky), sa uchováva v súbore pre MarkupCraft.
