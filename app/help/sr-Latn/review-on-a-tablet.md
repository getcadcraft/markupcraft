---
title: Pregled na iPad-u ili ekranu osetljivom na dodir
summary: Štipanje, pomeranje i crtanje prstima ili olovkom, šta se aktivira podizanjem prsta, šta zahteva tastaturu, i kako sačuvati rad na tabletu.
keywords: ipad, tablet, dodir, ekran osetljiv na dodir, štipanje, zum, dva prsta, apple pencil, olovka, prst, teren, lokacija, površina, pokreti, mobilni
from: 91eb6438
---

MarkupCraft radi sa dodirom: na iPad-u (Safari ili Chrome), na laptopu sa ekranom osetljivim na dodir, ili na Windows ili Android tabletu sa novim pregledačem. U pejzažu tablet prikazuje ceo raspored.

## Pokreti

| Pokret | Šta radi |
|---|---|
| Jedan prst | Crta tekućim alatom, ili bira alatom {{ui:Izbor}} |
| Dva prsta, raširena ili stegnuta | Zumira oko tačke između prstiju |
| Dva prsta, pomerena zajedno | Pomera pogled; možete zumirati i pomerati u jednom pokretu |
| Drugi prst dok crtate | Poništava ono što je prvi prst započeo i umesto toga pokreće zum |
| Dvostruki dodir, ili dodir i držanje | Završava polilinije, poligon, slobodni oblak ili površinu |
| Dodir i držanje teksta, pokazne oznake ili beleške, uz {{ui:Izbor}} | Otvara njen tekst za izmenu |
| Jedan prst uz uključen {{ui:Pomeri pogled}} | Pomera pogled |

Na ekranu osetljivom na dodir dugmad sa alatima, meniji, kartice i dugmad u dijalozima su veći, pa se lako pogode prstom.

## Šta se dešava pri podizanju

Da prvi prst štipanja nikada ne ostavi trag, neki alati deluju kada **podignete** prst, a ne kada dodirnete:

- {{ui:Brojanje}}: tačka se dodaje pri podizanju.
- {{ui:Beleška}}: beleška se postavlja pri podizanju.
- {{ui:Polilinija}}, {{ui:Poligon}}, {{ui:Slobodni oblak}} i {{ui:Površina}}: svaka tačka se dodaje pri podizanju.
- {{ui:Linija}}, {{ui:Strelica}}, {{ui:Dužina}} i {{ui:Kalibriši}}: kada dodirnete početak, pa kraj, kraj se postavlja pri podizanju.

Ako prst kliže malo više pre podizanja, to se ne računa kao dodir i ništa se ne dodaje. Dodirnite čisto; za ispravku upotrebite {{ui:Opozovi}}.

Alati koje prevlačite ({{ui:Olovka}}, {{ui:Isticanje}}, {{ui:Oblak}}, {{ui:Pravougaonik}}, {{ui:Elipsa}}, {{ui:Pokazna oznaka}}, {{ui:Tekst}}, {{ui:Pečat}}) počinju čim dodirnete; drugi prst ih poništava.

## Biranje prstom

- Dodirnite označavanje da ga izaberete; prevucite ga da ga pomerite; prevucite ručicu da mu promenite veličinu. Kada prst dodirne list, označavanja i ručice imaju veću površinu za dodir, a ručice se crtaju većim.
- Prevucite preko praznog lista da nacrtate okvir za izbor (sleva nadesno: potpuno unutar; zdesna nalevo: dodiruje).
- U {{ui:Izbor}}, jedan prst **ne** pomera pogled. Koristite dva prsta, ili izaberite {{ui:Pomeri pogled}}.

## Stvari koje zahtevaju tastaturu

Bez tastature nema {{key:Shift}}, {{key:Esc}} ni {{key:Enter}}. Evo šta raditi umesto toga:

| Radnja na tastaturi | Bez tastature |
|---|---|
| {{key:Esc}} za otkazivanje ili povratak na {{ui:Izbor}} | Dodirnite {{ui:Izbor}} na traci sa alatima |
| {{key:Shift}} za linije pod 45°, kvadrate i krugove | Crtajte pažljivo; podešavajte ručicama |
| {{key:Shift}}-klik za dodavanje u izbor | Koristite okvir za izbor |
| {{key:Shift}}-klik za uklanjanje tačke brojanja | {{ui:Opozovi}} odmah posle pogrešnog dodira |
| {{key:Mod+Enter}} za završetak kucanja | Dodirnite van okvira za tekst |
| {{key:Enter}} za završetak polilinije, ili za izmenu teksta označavanja | Dodir i držanje, ili {{ui:Izmeni na listu}} u {{ui:Svojstva}} |
| {{key:Delete}} | {{ui:Izbriši}} na traci sa alatima ili u {{ui:Svojstva}} |
| Početak nove grupe brojanja pomoću {{key:Esc}} | Dodirnite prazan list sa {{ui:Izbor}}, pa ponovo dodirnite {{ui:Brojanje}} |

Kućište sa tastaturom ili Bluetooth tastatura vraćaju svaku prečicu; na iPad-u, taster ⌘ radi za {{key:Mod+Z}} i ostale.

Dugmad na dodir ne prikazuju svoje savete. Taster za svaki alat naveden je u [Tastatura i miš](topic:keyboard).

## Olovka i Apple Pencil

Olovka (Apple Pencil, Surface Pen i slične) radi kao miš: crta i bira, i deluje odmah pri pritisku. Za štipanje i pomeranje koristite prste. Pritisak ne menja debljinu linije.

## Otvaranje i čuvanje na iPad-u

- {{ui:Otvori}} prikazuje birač Files: iCloud Drive, On My iPad i svaku aplikaciju za skladište koju ste povezali.
- {{ui:Sačuvaj}} traži preuzimanje; kopija stiže u Files, u fasciklu Preuzimanja (ili fasciklu podešenu u Safari podešavanjima).

## Čuvajte rad na tabletu

:::warning
iPad Safari vas ne upozorava pre napuštanja strane sa nesačuvanim radom, a iPadOS može ponovo učitati karticu u pozadini da oslobodi memoriju. MarkupCraft čuva kopiju za oporavak u pregledaču i nudi je ponovo kada ponovo otvorite stranicu (pogledajte [Oporavak rada](common:recover)), ali **sačuvajte posle svakog lista ili svakog obilaska**: privatna kartica ne čuva nikakvu kopiju.
:::

- Vaše ime, podešavanja alata i sanduk sa alatima čuvaju se u tom pregledaču na tom iPad-u, kao i na računaru. Pogledajte [Šta ostaje u ovom pregledaču](topic:browser-storage).
- **Pre posete lokaciji bez signala:** dok ste još na mreži, otvorite MarkupCraft u Safari-ju (ili Chrome-u) na iPad-u i izaberite {{ui:Sačuvaj za rad van mreže}} u traci na vrhu. Sačekajte dok ne piše „Spremno za rad van mreže” (broji „Čuvanje N od M”; čitač i pisač PDF-ova su oko 6 MB). Na lokaciji otvorite istu adresu ili oznaku za nju: otvaranje, označavanje i čuvanje PDF-ova rade bez veze. Ako piše „Rad van mreže nije dostupan”, nalazite se u privatnoj kartici; koristite običnu. Pogledajte [Rad van mreže](common:offline).
- Safari uklanja kopiju za rad van mreže koju nekoliko nedelja niste koristili. Pre puta kliknite „Spremno za rad van mreže” i izaberite „Sačuvaj ponovo (preuzmi najnoviju verziju)”.
- Vrlo veliki skupovi listova troše mnogo memorije. Na tabletu otvorite samo listove koji su vam potrebni za posetu.

## Na telefonu

Radi, ali je ekran mali: delovi se slažu jedan ispod drugog (traka sa alatima, list, statusna traka, paneli, pa lista listova), a traka sa alatima se pomera u stranu. Koristite telefon da pogledate i da brzo dodate belešku, a tablet ili računar za pravi pregled.
