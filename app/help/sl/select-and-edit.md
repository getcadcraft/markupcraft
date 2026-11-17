---
title: Izbira, premikanje in spreminjanje označb
summary: Izberite označbe s klikom ali z okvirjem, premaknite, spremenite velikost, prestavite, izrežite, kopirajte, prilepite, prilepite na isto mesto, podvojite, izbrišite in razveljavite.
keywords: izbor, izbira, izberi vse, prekliči izbor, okvir, sekanje, premakni, spremeni velikost, ročice, prestavi, izreži, kopiraj, prilepi, prilepi na isto mesto, drugi zavihek, podvoji, odložišče, izbriši, razveljavi, uveljavi, uredi
from: 62c7def3
---

Izberite {{ui:Izbor}} ({{key:V}}). Tudi s pritiskom {{key:Esc}} pridete tja: prvi pritisk počisti izbor, naslednji pa preklopi nazaj na {{ui:Izbor}}.

## Izbira označb

:::mouse
- **Ena označba:** kliknite nanjo. Prikaže se črtkan okvirček in ročice, {{ui:Lastnosti}} pa jo prikažejo.
- **Dodajte ali odstranite eno:** držite {{key:Shift}} in kliknite.
- **Popolnoma znotraj okvirja:** povlecite od leve proti desni po prazni površini lista. Izberejo se samo označbe, ki so v celoti znotraj okvirja (polna obroba).
- **Dotika se okvirja:** povlecite od desne proti levi. Izbere se vse, česar se okvir dotika (zelena črtkana obroba).
- **Vse na tem listu:** {{key:Mod+A}} ali {{ui:Več}}, nato {{ui:Izberi vse}} v skupini {{ui:Urejanje}} na orodni vrstici.
- **Nič:** kliknite prazno mesto, pritisnite {{key:Esc}} ali {{ui:Več}}, nato {{ui:Prekliči izbor}}.
:::

:::touch
- **Ena označba:** tapnite jo.
- **Več:** z enim prstom povlecite po prazni površini lista in narišite okvir. Od leve proti desni izbere, kar je v celoti znotraj; od desne proti levi izbere, kar se dotika.
- Tapnjenje s pridržanim {{key:Shift}} deluje samo s priklopljeno tipkovnico. Brez nje uporabite okvir.
- Z enim prstom se v {{ui:Izbor}} nikoli ne pomika; uporabite dva prsta ali orodje {{ui:Pomik}}.
:::

Komentarji iz datoteke, ki so samo za branje, prikažejo sivo črtkan okvirček in brez ročic. Izberete jih in nanje lahko odgovorite, ne morete pa jih spremeniti.

## Premikanje in spreminjanje velikosti

- **Premik:** povlecite izbrano označbo. Držite {{key:Shift}}, da premikate samo po večkratnikih 45°. Več izbranih označb se premakne skupaj.
- **Sprememba velikosti:** ko je izbrana ena označba, povlecite ročico. Kvadratne ročice spremenijo velikost okvirja (držite {{key:Shift}}, da ohranite razmerja); okrogle ročice premaknejo eno oglišče črte, polilinije, mnogokotnika, oblaka ali meritve (držite {{key:Shift}} za 45°); romboidne ročice premaknejo konico in zavoj oblačka. Poteze peresa se skalirajo glede na svoj okvir.
- **Prestavljanje:** pritisnite puščične tipke, da izbor premaknete za en zaslonski slikovni element; držite {{key:Shift}} za deset. Vsak pritisk je en korak razveljavitve.

## Spremenite besedilo ali videz

- **Besedilo, oblački in opombe:** dvakrat kliknite označbo, pritisnite {{key:Enter}} ali izberite {{ui:Uredi na listu}} v {{ui:Lastnosti}}. Vtipkajte besedilo, nato kliknite zunaj ali pritisnite {{key:Mod+Enter}}. {{key:Esc}} prekliče urejanje.
- **Žigi:** v {{ui:Lastnosti}} izberite drug žig (dvojni klik odpre {{ui:Lastnosti}} za vas).
- **Slog:** {{ui:Barva}}, {{ui:Debelina črte}}, {{ui:Polnilo}}, {{ui:Neprosojnost}} in {{ui:Velikost besedila}} pod „Slog“ v {{ui:Lastnosti}}. Če je izbranih več označb, {{ui:Lastnosti}} prikažejo vrste, ki ste jih izbrali, in jih vse hkrati spremenijo.

## Kopiranje, lepljenje in podvajanje

Skupina {{ui:Urejanje}} na orodni vrstici ima {{ui:Kopiraj}} in {{ui:Prilepi}}; njen meni {{ui:Več}} ima vse te ukaze, vsakega s svojo tipko.

| Ukaz | Tipka | Kaj naredi |
|---|---|---|
| {{ui:Izreži}} | {{key:Mod+X}} | Kopira izbrane označbe in jih izbriše |
| {{ui:Kopiraj}} | {{key:Mod+C}} | Kopira izbrane označbe |
| {{ui:Prilepi}} | {{key:Mod+V}} | Postavi kopijo na list, na katerem ste (kje, spodaj) |
| {{ui:Prilepi na isto mesto}} | {{key:Mod+Shift+V}} | Postavi kopijo točno tja, kjer je bila kopirana: na istem listu čez original; na drugem listu na isto mesto na papirju |
| {{ui:Podvoji}} | {{key:Mod+D}} | Naredi kopijo izbora malo nižje in desno, ne da bi se dotaknil tega, kar ste kopirali prej |

**Kam Prilepi postavi kopijo:**

- {{key:Mod+V}} s kazalcem na listu postavi kopijo centrirano tam, kjer je kazalec. Premaknite kazalec, znova pritisnite {{key:Mod+V}} in postavili boste še eno.
- Gumb {{ui:Prilepi}} (takrat je kazalec na orodni vrstici) ali {{key:Mod+V}} s kazalcem zunaj lista postavi kopijo malo nižje in desno od originala. Vsako lepljenje istega izreza se pomakne še nekoliko dlje, zato se kopije nikoli ne skrivajo. Na drugem listu prvo lepljenje pristane tam, kjer je bil original na svojem listu. Če to mesto ni vidno, pristane kopija na sredini pogleda.
- Če želite, da {{key:Mod+V}} vedno prilepi poleg originala, izberite {{ui:Ob kopiji}} pod {{ui:Prilepi}} v [nastavitvah MarkupCraft](topic:settings).

Prilepljene označbe so izbrane, zato jih lahko takoj povlečete. Vsako izrezovanje, lepljenje ali podvajanje je en korak razveljavitve: {{key:Mod+Z}} odstrani celotno lepljenje.

Prilepljene kopije so nove označbe: dobijo vaše ime, današnji datum, stanje Odprto, brez številke točke pomanjkljivosti in prazno nit. Njihova vrsta, oblika, slog, besedilo in komentar se prenesejo. Komentarjev samo za branje, ki so prišli z datoteko, ni mogoče kopirati ali izrezati.

**Med zavihki:** kar kopirate, se hrani tudi v tem brskalniku, zato lahko drug zavihek MarkupCraft v istem brskalniku prilepi. Kopiranje označb ne uporablja odložišča računalnika: ne morete jih prilepiti v drug program, besedilo, ki ste ga kopirali drugje, pa se ne prilepi kot označba.

**Meni z desnim klikom:** z desnim klikom na označbo (ali prazen papir) dobite {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi sem}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji}}, {{ui:Izbriši}}, {{ui:Shrani izbor kot žig …}}, {{ui:Ob shranjevanju izravnaj v stran}}, {{ui:Vstavi sliko sem …}} in {{ui:Izberi vse}}. Desni klik na označbo, ki ni izbrana, jo najprej izbere. Povlečenje z desno tipko še vedno pomika. Na zaslonu na dotik dolg pritisk na označbo odpre isti meni (na besedilu se začne urejanje besedila). Tipka za meni ali {{key:Shift+F10}} odpre meni pri izboru.

Vsebina, izbrana z orodjem {{ui:Vsebina}}, se prav tako kopira in prilepi: glejte [Spreminjanje lastnih črt, slik in besedila strani](topic:page-content).

Če želite del same strani kopirati kot sliko (pravokotnik, elipso ali prosto obliko) ali kot prosojno prekrivanje za drug list ali program, glejte [Kopiranje območja strani ali prosojnega prekrivanja](topic:copy-an-area).

## Brisanje

Pritisnite {{key:Delete}} ali {{key:Backspace}}, na orodni vrstici izberite {{ui:Več}}, nato {{ui:Izbriši}}, ali pa {{ui:Izbriši}} v {{ui:Lastnosti}}. Vrstica stanja pove, koliko jih je bilo izbrisanih. Komentarji iz datoteke, ki so samo za branje, se nikoli ne izbrišejo („ohranjeno kot v datoteki“).

## Razveljavitev in uveljavitev

- {{key:Mod+Z}} razveljavi, {{key:Mod+Y}} ali {{key:Mod+Shift+Z}} uveljavi. Na orodni vrstici sta {{ui:Razveljavi}} in {{ui:Uveljavi}}.
- Vrstica stanja pove, kaj je bilo razveljavljeno („Razveljavljeno: premakni označbo.“).
- Razveljavitev zajema vsako spremembo označb, stanj, odgovorov, točk pomanjkljivosti, meril listov in imen listov, do 500 korakov.
- Zgodovina se počisti, ko zaprete komplet.

## Kopiranje označb na druge liste

Če želite isti žig, opombo ali oblak dati na več listov, izberite označbo (ali več označb) in izberite {{ui:Kopiraj na druge liste …}} v {{ui:Lastnosti}}. Označite liste ali izberite {{ui:Vsi listi}} in kliknite {{ui:Kopiraj}}. Vsak list dobi kopijo na istem mestu na strani, podpisano z vašim imenom. En {{key:Mod+Z}} jih odstrani vse.
