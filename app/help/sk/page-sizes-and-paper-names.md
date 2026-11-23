---
title: Veľkosti strán a názvy papiera
summary: Pozrite si veľkosť každej strany PDF v milimetroch a palcoch a názov papiera (rady A, B a C, ANSI, ARCH) a zoskupte zmiešanú sadu podľa veľkosti, aby ste našli nezvyčajné strany.
keywords: veľkosť strany, veľkosť papiera, názov papiera, a0, a1, a2, a3, a4, rad b, rad c, ansi, arch, architektonický, mm, palce, vlastná veľkosť, podľa veľkosti, nezvyčajná veľkosť, zmiešaná sada, skontrolovať pdf, klient, problém, mediabox, cropbox, otočenie
from: 08e1354f
---

Pred odoslaním sady klientovi skontrolujte, či má každý list správnu veľkosť. {{ui:MarkupCraft}} číta veľkosť každej strany priamo z PDF a pomenúva papier.

## Čo budete robiť

Pozriete si veľkosť jedného listu a potom zoskupíte celú sadu podľa veľkosti.

## Postup

1. Otvorte PDF ({{ui:Otvoriť}}), potom stláčajte {{key:Esc}}, kým nie je nič vybrané, a {{ui:Výber}} je zapnutý.
2. Pozrite sa na {{ui:Vlastnosti}}. {{ui:Papier}} uvádza názov a orientáciu, napríklad "A4, na výšku". {{ui:Veľkosť}} uvádza milimetre a palce.
3. Každý riadok zoznamu {{ui:Listy}} má pod názvom listu riadok s veľkosťou.
4. Vyberte {{ui:Podľa veľkosti}} v hlavičke {{ui:Listy}}. Zoznam zoskupí listy pod jeden nadpis pre každú veľkosť, pričom najväčšia skupina je prvá. Veľkosť s iba niekoľkými listami sa označí ako výnimka.
5. Vyberte {{ui:Podľa veľkosti}} znova, aby ste sa vrátili k pôvodnému poradiu sady.

Výsledok: stranu s inou veľkosťou ako ostatné ľahko uvidíte skôr, ako odošlete sadu.

## Ako sa vyberá názov

- Veľkosť pochádza z boxu strany v PDF s uplatneným otočením, takže A3 na šírku je stále A3.
- Názvy sú rad A a B (ISO 216), rad C (ISO 269), ANSI A až E a ARCH A až E.
- Strana do 2 mm od pomenovanej veľkosti dostane tento názov. Každá iná strana má názov {{ui:vlastný}} a {{ui:Najbližší pomenovaný formát}} uvádza, ktorá veľkosť je najbližšia a o koľko sa líši.
- Palce sa odvodzujú zo skutočnej veľkosti strany, takže strana A4 má 8.26 na 11.69 in.

## V uložených súboroch

Súhrnný zošit ({{ui:Zoznam poznámok}}, potom tabuľkový hárok) má stĺpec {{ui:Formát papiera}} na hárku {{ui:Podľa listov}} a hárok {{ui:Veľkosti strán}}. PDF správa má riadok "Veľkosti strán" s počtom každej veľkosti.

:::note
Hodnoty ANSI a ARCH v palcoch boli zadané z publikovaných tabuliek a neboli porovnané s tlačenými normami. Stranu "vlastný", ktorá je blízko jednej z nich, považujte za vec vlastnej kontroly.
:::
