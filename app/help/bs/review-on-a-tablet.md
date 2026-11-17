---
title: Pregled na iPad-u ili ekranu osjetljivom na dodir
summary: Stiskanje, pomjeranje i crtanje prstima ili olovkom, šta se aktivira pri podizanju, šta traži tastaturu i kako sačuvati rad na tabletu.
keywords: ipad, tablet, dodir, ekran osjetljiv na dodir, stisak, uvećanje, dva prsta, Apple Pencil, olovka, prst, teren, gradilište, površina, pokreti, mobilni
from: 91eb6438
---

MarkupCraft radi s dodirom: na iPad-u (Safari ili Chrome), na laptopu s ekranom osjetljivim na dodir, ili na Windows ili Android tabletu s novijim pregledačem. U vodoravnom položaju tablet prikazuje cijeli raspored.

## Pokreti

| Pokret | Šta radi |
|---|---|
| Jedan prst | Crta trenutnim alatom, ili bira pomoću {{ui:Select}} |
| Dva prsta, raširena ili stisnuta | Uvećava oko tačke između prstiju |
| Dva prsta, pomjerena zajedno | Pomjera; možete uvećati i pomjerati u jednom pokretu |
| Drugi prst dok crtate | Poništava ono što je prvi prst započeo i umjesto toga počinje uvećavanje |
| Dvostruki dodir, ili dodirni i zadrži | Završava polilinije, poligon, slobodni oblak ili područje |
| Dodirnite i zadržite tekst, izvučenu oznaku ili bilješku, s {{ui:Select}} | Otvara njegov tekst za uređivanje |
| Jedan prst s uključenim {{ui:Pan}} | Pomjera |

Na ekranu osjetljivom na dodir dugmad na alatnoj traci, meniji, kartice i dugmad u dijalozima su veća, pa ih je lako pogoditi prstom.

## Šta se dešava pri podizanju

Da prvi prst stiskanja ne ostavi trag, neki alati djeluju kad **podignete** prst, a ne kad dodirnete:

- {{ui:Count}}: tačka brojanja se dodaje pri podizanju.
- {{ui:Note}}: bilješka se postavlja pri podizanju.
- {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} i {{ui:Area}}: svaka tačka se dodaje pri podizanju.
- {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}} i {{ui:Calibrate}}: kad dodirnete početak pa dodirnete kraj, kraj se postavlja pri podizanju.

Ako prst kliza više nego malo prije podizanja, to se ne računa kao dodir i ništa se ne dodaje. Dodirujte čisto; za ispravku koristite {{ui:Undo}}.

Alati koje prevlačite ({{ui:Pen}}, {{ui:Highlight}}, {{ui:Cloud}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Callout}}, {{ui:Text}}, {{ui:Stamp}}) počinju čim dodirnete; drugi prst ih poništava.

## Odabir prstom

- Dodirnite označavanje da ga odaberete; prevucite ga da pomjerate; prevucite ručicu da promijenite veličinu. Nakon što prst dotakne list, označavanja i ručice imaju veću površinu za dodir, a ručice se crtaju veće.
- Prevucite preko praznog lista da nacrtate okvir za odabir (s lijeva na desno: potpuno unutra; s desna na lijevo: dodiruje).
- U {{ui:Select}}, jedan prst **ne** pomjera. Koristite dva prsta ili odaberite {{ui:Pan}}.

## Stvari koje traže tastaturu

Bez tastature nema {{key:Shift}}, {{key:Esc}} ili {{key:Enter}}. Evo šta raditi umjesto toga:

| Radnja tastature | Bez tastature |
|---|---|
| {{key:Esc}} za otkazivanje ili povratak na Select | Dodirnite {{ui:Select}} na alatnoj traci |
| {{key:Shift}} za linije pod 45°, kvadrate i krugove | Crtajte pažljivo; prilagodite ručicama |
| {{key:Shift}}-klik za dodavanje u odabir | Koristite okvir za odabir |
| {{key:Shift}}-klik za uklanjanje tačke brojanja | {{ui:Undo}} odmah nakon pogrešnog dodira |
| {{key:Mod+Enter}} za završetak kucanja | Dodirnite van okvira za tekst |
| {{key:Enter}} za završetak polilinije ili za uređivanje teksta označavanja | Dodirnite i zadržite, ili {{ui:Edit on the sheet}} u {{ui:Properties}} |
| {{key:Delete}} | {{ui:Delete}} na alatnoj traci ili u {{ui:Properties}} |
| Početak nove grupe brojanja s {{key:Esc}} | Dodirnite prazan list s {{ui:Select}}, pa ponovo dodirnite {{ui:Count}} |

Tastatura s kućištem ili Bluetooth tastatura vraća svaku prečicu; na iPad-u, taster ⌘ radi za {{key:Mod+Z}} i ostale.

Dugmad na dodir ne prikazuju svoje savjete. Taster za svaki alat naveden je u [Tastatura i miš](topic:keyboard).

## Olovka i Apple Pencil

Olovka (Apple Pencil, Surface Pen i slične) radi kao miš: crta i bira, i djeluje odmah pri dodiru. Koristite prste za stiskanje i pomjeranje. Pritisak ne mijenja debljinu linije.

## Otvaranje i spašavanje na iPad-u

- {{ui:Open}} prikazuje birač Files: iCloud Drive, On My iPad i svaku aplikaciju za pohranu koju ste povezali.
- {{ui:Save}} traži preuzimanje; kopija završi u Files, u folderu Downloads (ili u folderu koji je postavljen u postavkama pregledača Safari).

## Čuvajte rad na tabletu

:::warning
iPad Safari ne upozorava prije napuštanja stranice s nesačuvanim radom, a iPadOS može ponovo učitati karticu u pozadini da oslobodi memoriju. MarkupCraft čuva kopiju za oporavak u pregledaču i ponudi je kad ponovo otvorite (pogledajte [Oporavak rada](common:recover)), ali **spasite poslije svakog lista ili svakog obilaska**: privatna kartica ne čuva kopiju.
:::

- Vaše ime, postavke alata i sanduk s alatima čuvaju se u tom pregledaču na tom iPad-u, kao i na računaru. Pogledajte [Šta ostaje u ovom pregledaču](topic:browser-storage).
- **Prije posjete gradilištu bez signala:** dok ste još na mreži, otvorite MarkupCraft u pregledaču Safari (ili Chrome) na iPad-u i odaberite {{ui:Save for offline}} u traci na vrhu. Sačekajte dok ne piše „Spremno za rad van mreže” (broji „Spašavanje N od M”; PDF čitač i pisač su oko 6 MB). Na terenu otvorite istu adresu ili oznaku te adrese: otvaranje, označavanje i spašavanje PDF-ova rade bez veze. Ako piše „Nije dostupno van mreže”, u privatnoj ste kartici; koristite običnu. Pogledajte [Rad van mreže](common:offline).
- Safari uklanja kopiju za rad van mreže koju nekoliko sedmica niste koristili. Prije putovanja kliknite „Spremno za rad van mreže” i odaberite „Spasi ponovo (preuzmi najnoviju verziju)”.
- Vrlo veliki setovi osnova troše puno memorije. Na tabletu otvorite samo listove koji vam trebaju za posjetu.

## Na telefonu

Radi, ali je ekran mali: dijelovi se slažu jedan ispod drugog (alatna traka, list, statusna traka, paneli, pa lista listova), a alatna traka klizi u stranu. Koristite telefon za gledanje i za brzu bilješku, a tablet ili računar za pravi pregled.
