---
title: Spremenite lastne črte, slike in besedilo strani
summary: Premaknite, spremenite velikost, prebarvajte ali izbrišite, kar PDF sam riše, premaknite točke črte, zamenjajte sliko in spremenite besede vrstice besedila.
keywords: vsebina strani, osnovna vsebina, uredi PDF, uredi risbo, vektor, pot, oblika, črta, slika, fotografija, zamenjaj sliko, besedilo, besede, pisava, točke, vozlišča, premakni, spremeni velikost, prebarvaj, izbriši, orodje za vsebino
from: 471d457e
---

Oznake ležijo na vrhu lista. Orodje {{ui:Vsebina}} deluje na samem listu: na črtah, slikah in vrsticah besedila, ki jih riše PDF. Vaša datoteka PDF na tem računalniku se nikoli ne spremeni: spremembe so del kopije, ki jo shranite.

## Izbira, kaj spremeniti

1. Izberite {{ui:Vsebina}} v skupini {{ui:Izbor}} ali pritisnite {{key:B}}.
2. V {{ui:Kaj izbrati}} v {{ui:Lastnosti}} vklopite ali izklopite {{ui:Oblike}}, {{ui:Slike}} in {{ui:Besedilo}}. Izbrati je mogoče samo vrste, ki so vklopljene, zato lahko izberete besedilo zapletene risbe, ne da bi zajeli njene črte.
3. Kliknite nekaj, da to izberete. Shift+klik doda ali odstrani. Povlecite okvir čez prazen papir, da izberete več stvari: vlek v desno vzame vse, kar je v okvirju v celoti, vlek v levo pa vse, česar se okvir dotika.

Oblika znotraj obrezanega območja je izbrana samo tam, kjer je vidna.

## Premakni, spremeni velikost, prebarvaj, izbriši

- **Premakni:** povlecite izbrani predmet ali pritisnite puščične tipke (za večje korake držite Shift). Med vlečenjem držite Shift, da se premaknete naravnost vodoravno ali navpično.
- **Spremeni velikost:** povlecite enega od osmih kvadratkov okoli izbora. Predmet se poveča ali pomanjša z nasprotne strani. Držite Shift, da ohranite razmerja.
- **Prebarvaj:** za črte in oblike nastavite {{ui:Barva črte}}, {{ui:Barva polnila}} in {{ui:Debelina črte (pt)}} v {{ui:Lastnosti}}.
- **Izbriši:** pritisnite {{key:Delete}} ali izberite {{ui:Izbriši s strani}}.
- **Razveljavitev:** vsaka sprememba je en korak: {{key:Mod+Z}} jo razveljavi, {{key:Mod+Y}} jo uveljavi.

{{ui:Povrni, kot je bilo}} razveljavi vse spremembe izbranih predmetov naenkrat; {{ui:Povrni to stran, kot je bila}} stori to za celotno stran.

## Kopiraj, izreži in prilepi vsebino strani

Izberite črte, slike ali besedilo z orodjem {{ui:Vsebina}}, nato:

- {{key:Mod+C}} kopira, {{key:Mod+X}} izreže (kopira in jih vzame s strani), {{key:Mod+D}} postavi kopijo zraven njih.
- {{key:Mod+V}} prilepi kot vsebino strani, zraven izvirnika ali tam, kjer je kazalec (kot pravita [Nastavitve](topic:settings)); {{key:Mod+Shift+V}} prilepi na povsem isto mesto. Prilepite lahko na drugo stran, v drugo odprto datoteko PDF ali v drug zavihek MarkupCraft v tem brskalniku.
- Meni skupine {{ui:Urejanje}} in meni z desnim klikom imata iste ukaze.

Prilepek ohrani črte kot črte, besede kot besede v njihovi pisavi in slike kot slike. Je en kos: premaknite ga, spremenite mu velikost s kvadratki, izbrišite ga ali ga odstranite z {{key:Mod+Z}}. Postane del strani v kopiji, ki jo shranite. {{key:Mod+V}} prilepi tisto, kar ste nazadnje kopirali, oznake ali vsebino strani.

Vsebina kopije je obrezana na okvir okoli izbora: kar MarkupCraft ne more vzeti iz kopije (glejte spodaj) in leži znotraj tega okvira, pride skupaj.

## Premakni točke črte

Dvakrat kliknite črto ali krivuljo (ali jo izberite in izberite {{ui:Uredi točke}}). Njene točke so prikazane kot kvadratki, ročice krivulje pa kot krogci. Povlecite točko ali ročico; točka prinese s seboj ročice ob sebi, da krivulja ohrani obliko okoli nje. Ko končate, pritisnite {{key:Esc}} ali kliknite mimo črte.

Pravokotniki nimajo točk za vleko: spremenite jim velikost s kvadratki okoli njih.

## Zamenjaj sliko

Izberite sliko in izberite {{ui:Zamenjaj sliko …}}, nato izberite datoteko PNG, JPEG ali SVG (ali PDF: njeno prvo stran). Nova slika zapolni mesto stare in ohrani svoja razmerja.

## Spremeni besede vrstice besedila

Dvakrat kliknite vrstico besedila, vpišite nove besede v {{ui:Besede}} in pritisnite {{key:Enter}}. Besede so zapisane v pisavi in velikosti vrstice, vrstica ohrani dolžino, zato se besedilo za njo ne premakne.

:::note
Večina datotek PDF hrani samo črke, ki jih uporabljajo iz vsake pisave. Ko vpišete črko, ki je v kopiji pisave v datoteki ni, MarkupCraft natisne to črko v Helvetici in to pove. {{ui:Lastnosti}} pokažejo, katere črke ima pisava v datoteki.
:::

Besedilo se spreminja po eno vrstico; ne preliva se v naslednjo vrstico.

## Kaj MarkupCraft pusti nespremenjeno

- **Skenirane strani** so ena slika: sliko lahko premaknete, spremenite ji velikost, zamenjate ali izbrišete, vsebine v njej pa ni mogoče urejati.
- **Šifrirane in podpisane datoteke PDF:** sprememba strani bi pokvarila podpis, zato orodje {{ui:Vsebina}} to pove in ničesar ne spremeni. Oznake še vedno delujejo.
- **Območja obrezovanja, predmeti, razdeljeni med dva dela vsebine strani, in mešanja barv, ki zapolnijo celotno območje**, ostanejo, kakršni so; MarkupCraft pove, zakaj, ko poskusite.
- **Besede v standardni pisavi, ki je datoteka PDF ne opisuje** (na primer pisava Times brez širin črk v datoteki), ni mogoče spremeniti, ker MarkupCraft ne bi mogel ohraniti razmika vrstice. Vrstico je še vedno mogoče premakniti.

## Vstavite oznake v stran

Črte, pravokotniki, elipse, polilinije, oblaki in poteze pisala, ki ste jih narisali kot oznake, lahko postanejo del same strani: izberite jih in izberite {{ui:Vstavi v stran}} v {{ui:Lastnosti}}. Besedilo, žigi, slike in prosojne barve ostanejo oznake.
