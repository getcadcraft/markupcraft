---
title: Opna teikningasett og fara milli blaða
summary: Opnaðu eina PDF-skrá eða margar, eða byrjaðu með auðum síðum, finndu blöð eftir númeri eða heiti, aðdraðu, hliðraðu og endurnefndu blað þegar skráin gefur því vitlaust heiti.
keywords: opna, nýtt, auð síða, autt blað, skissa, rist, ónefnt, teikningasett, blöð, síður, smámyndir, síðumerki, blaðnúmer, titilreitur, endurnefna, fletta, aðdráttur, hliðra, passa, leita í blöðum
from: 1e7f4d50
---

## Opna settið

1. Veldu {{ui:Opna}} á verkstikunni, eða ýttu á {{key:Mod+O}}.
2. Í skráarvalglugganum, veldu allar PDF-skrár settsins ({{pick:mac=haltu ⌘ inni og smelltu á hverja skrá|windows linux=haltu Ctrl inni og smelltu á hverja skrá}}, eða veldu bil með Shift), og staðfestu.
   Eða dragðu skrárnar úr {{pick:mac=Finder|windows=File Explorer|linux=skráastjóranum þínum}} yfir blaðasvæðið. „Slepptu PDF-skrám til að opna þær“ birtist meðan þú dregur.
3. Bíddu meðan stöðustikan segir „Opna <file>…“. Fyrir stórar skrár telur hún: „(10 af 60 blöðum)“.

Niðurstaða: Listinn {{ui:Blöð}} sýnir hverja síðu í hverri skrá, í þeirri röð sem þú opnaðir þær, og stöðustikan segir eitthvað á borð við „Opnaði 3 skrár (42 blöð í settinu).“ Ef skrárnar höfðu þegar athugasemdir bætir hún við hversu margar voru lesnar.

Til að bæta fleiri skrám við settið seinna, opnaðu þær á sama hátt. Þær bætast aftast í listann.

## Byrjaðu með auðum síðum

Til að skissa eða taka minnispunkta án teikningar, búðu til auðar síður í stað þess að opna PDF:

1. Veldu {{ui:Nýtt}} á verkstikunni, eða {{ui:Byrja með auðri síðu}} á upphafsskjánum, eða ýttu á {{key:Mod+N}} þar sem vafrinn leyfir síðunni að taka það (skjáborðsforritið og Studio gera það alltaf).
2. Veldu {{ui:Pappírsstærð}}: Letter, Tabloid eða ANSI B, ARCH D, ARCH E, A4, A3 eða A1, og {{ui:Standandi}} eða {{ui:Liggjandi}}.
3. Veldu {{ui:Rist}}: {{ui:Engin}}, {{ui:Punktar}} eða {{ui:Ferningar}}. Ristin er á 1/4 in fresti með þykkari línu á hverri tommu á tommupappír, og á 5 mm fresti með þykkari línu á 10 mm á metrapappír. Hún er prentuð á síðuna.
4. Sláðu inn hversu margar {{ui:Síður}} þú vilt, frá 1 til 20, og veldu síðan {{ui:Búa til}}.

Niðurstaða: Nýtt PDF heitir „Untitled-1.pdf“ (síðan „Untitled-2.pdf“, og svo framvegis) og opnast eins og hver önnur skrá, búin til hér á þessari tölvu. Öll verkfæri virka á hana, og {{ui:Vista}} sækir „Untitled-1 (marked up).pdf“. MarkupCraft man valin þín fyrir næst.

Síðurnar hafa engan mælikvarða: stöðustikan segir „Ekki kvarðað“. Ristin er ekki mælikvarði. Til að mæla skaltu kvarða blaðið eða velja mælikvarða fyrst; sjá [Kvarðaðu og mældu](topic:calibrate-and-measure).

Til að bæta síðu við auða settið, opnaðu eitt af blöðum þess og veldu {{ui:Bæta við auðri síðu}} undir listanum {{ui:Blöð}}. Nýja síðan hefur sama pappír og rist og fer aftast. Eins og allar breytingar á síðum er ekki hægt að afturkalla hana; sjá [Prentun og breyting á síðum](topic:pages-and-printing).

## Hvernig blöð fá nöfn

MarkupCraft nefnir hvert blað „<blaðnúmer> — <titill>“, til dæmis „A-101 — Grunnmynd“, úr fyrsta af þessum atriðum sem það finnur:

1. Nafn sem þú slóst inn með {{ui:Endurnefna blað}} (hér að neðan).
2. Síðumerki PDF-skrárinnar, þegar sá sem bjó til PDF-skrána setti þau (til dæmis „A-101“).
3. Titilreiturinn: MarkupCraft les texta síðunnar og leitar að einhverju sem líkist blaðnúmeri (A-101, A1.01, M-201A, KA1-1), og hefur forgang fyrir neðra hægra hornið, hægri ræmuna og neðra bandið, og tekur stærsta textann nálægt því sem titil.
4. Annars skráarheitið og síðan: „Teikningar — síða 3“.

Til að sjá hver var notuð, ýttu á {{key:Esc}} þar til ekkert er valið og {{ui:Velja}} er á, og skoðaðu síðan {{ui:Eiginleikar}}: „Lesið úr“ segir „Síðumerkið“, „Titilreiturinn“, „Skráarheitið“ eða „Slegið inn handvirkt“.

:::note
Skönnuð blöð, og PDF-skrár þar sem letrið hefur verið flutt út sem línur, hafa engan texta til að lesa. Þau fá nafn eftir skrá og síðu þar til þú endurnefnir þau. MarkupCraft getur ekki lesið texta úr myndum enn.
:::

## Fara á milli blaða

- Smelltu á blað í {{ui:Blöð}}.
- Ýttu á {{key:PageDown}} fyrir næsta blað og {{key:PageUp}} fyrir það fyrra, eða notaðu örvarnar á stikunni undir blaðinu.
- Skrifaðu í {{ui:Leita í blöðum}}: hluta af númeri („A-2“), orð úr titlinum („þak“), eða skráarheiti. Listinn þrengist meðan þú skrifar („4 af 42“). Ýttu á {{key:Enter}} til að opna fyrsta samsvörun. Hreinsaðu reitinn til að sjá öll blöð aftur.

Hvert blað heldur eigin aðdrætti og stöðu þar til þú lokar settinu.

## Aðdráttur og hliðrun

:::mouse
- **Aðdráttur:** snúðu hjólinu yfir blaðinu. Það aðdrattar um bendilinn. Eða ýttu á {{key:Plus}} og {{key:Minus}} (einnig með {{key:Mod}}), eða notaðu aðdráttarhnappana. Sláðu inn nákvæmt hlutfall í aðdráttarreitinn.
- **Passa:** {{ui:Passa síðu}} ({{key:Mod+0}}) sýnir alla blaðsíðuna; {{ui:Passa breidd}} ({{key:Mod+9}}) fyllir breiddina.
- **Hliðra:** dragðu með miðjuhnappinum (hjólinu), eða dragðu með hægri hnappinum, eða haltu inni {{key:Space}} og dragðu, eða veldu {{ui:Hliðra}} ({{key:H}}) og dragðu. Þegar ekkert er valið hreyfa örvatakkarnir blaðið líka.
:::

:::mac mouse
Á Mac snertiplötu aðdráttar tveggja fingra skrun (hún skrollar ekki blaðinu). Til að hliðra, haltu inni {{key:Space}} og dragðu með einum fingri, eða skiptu yfir í {{ui:Hliðra}} með {{key:H}}. Klípa aðdrættir í Chrome, Edge og Firefox.
:::

:::touch
- **Aðdráttur og hliðrun:** settu tvo fingur á blaðið. Dreifðu þeim eða klíptu til að aðdraga um punktinn á milli þeirra, og færðu þá saman til að hliðra. Hvort tveggja gerist í einu.
- **Hliðra með einum fingri:** veldu fyrst {{ui:Hliðra}}. Með hvaða öðru verkfæri sem er teiknar eða velur einn fingur.
- {{ui:Passa síðu}} og {{ui:Passa breidd}} eru á stikunni undir blaðinu.
:::

Þú getur aðdregið langt út fyrir alla síðuna og inn í allt að 6400%. Blaðið er teiknað aftur skýrt augnabliki eftir að þú hættir að hreyfa það.

## Bókamerki

{{ui:Bókamerki}}, efst í spjaldinu {{ui:Blöð}}, sýnir bókamerkin (útlínuna) í PDF-skránni sem opna blaðið tilheyrir. Veldu eitt til að fara á síðu þess. Blýanturinn endurnefnir bókamerki og krossinn fjarlægir það. {{ui:Búa til úr blöðum}} býr til eitt bókamerki fyrir hvert blað, með nafni eins og blaðalistinn sýnir það (blaðnúmer og titill), og {{ui:Bæta við fyrir þetta blað}} bætir einu við fyrir blaðið sem þú ert á. Breytingar eru hluti af óvistaðri vinnu skrárinnar: {{ui:Vista}} skrifar þær í afritið, þar sem öll PDF-skoðunarforrit sýna þær.

## Snúa sýninni

Tveir snúningshnappar hægra megin á stikunni undir blaðinu snúa sýninni fjórðung í hvora átt, fyrir blað sem er teiknað á hliðina. Aðeins sýnin snýst: PDF-skráin og merkingar hennar haldast eins og þær eru, og næsta blað opnast eins og PDF-skrá þess er (hvert blað man sinn snúning meðan settið er opið). Texti sem þú bætir við á snúinni sýn les upprétt eins og þú sérð hann. Til að snúa síðunni sjálfri í vistuðu PDF-skránni, veldu {{ui:Síður}}, síðan {{ui:Snúa síðu réttsælis}}; sjá [Prentun og breyting á síðum](topic:pages-and-printing).

## Endurnefna blað

Þegar nafn blaðs er rangt eða vantar:

1. Sýndu blaðið.
2. Ýttu á {{key:Esc}} þar til ekkert er valið og verkfærið {{ui:Velja}} er á. {{ui:Eiginleikar}} sýnir nú blaðið.
3. Veldu {{ui:Endurnefna blað}}.
4. Sláðu inn {{ui:Blaðnúmer}} og {{ui:Heiti}}, og veldu síðan {{ui:Vista}}.

Niðurstaða: blaðalistinn, stikan undir blaðinu og listinn yfir merkingar nota allir nýja nafnið, og „Lesið úr“ segir „Slegið inn handvirkt“. Hægt er að afturkalla endurnefninguna með {{key:Mod+Z}}.

Til að fara aftur í það sem skráin segir, opnaðu {{ui:Endurnefna blað}} aftur, hreinsaðu báða reitina og veldu {{ui:Vista}}.

Þegar þú vistar verður slegið blaðnúmer að síðumerki síðunnar í PDF-skránni, svo aðrir PDF-skoðarar sýni „A-101“ í síðureitnum sínum. Ef þú gefur einhverri síðu skráar númer fær hver síða í þeirri skrá merki í afritinu (slegna númerið sitt, annars gamla merkið, annars síðunúmerið sitt). Slegið heiti er geymt fyrir MarkupCraft en önnur skoðunarforrit sýna það ekki.

## Taktu PDF-skrána með í TakeoffCraft, eða færðu hana hingað

Þegar TakeoffCraft er opið á sama stað (tilraunastofunni, Try eða netforritunum), er {{ui:Opna í TakeoffCraft}} á stikunni undir blaðinu. Það opnar PDF-skrá blaðsins í TakeoffCraft í nýjum flipa, eins og hún var opnuð hér, svo þú getir mælt magn á henni. Merkingarnar þínar eru hér; vistaðu þær eins og venjulega.

Hnappurinn {{ui:MarkupCraft}} í TakeoffCraft gerir það sama hinn veginn: PDF-skráin opnast hér eins og þú hefðir valið {{ui:Opna}}. Ef vafrinn lokar fyrir nýja flipann, leyfðu sprettiglugga fyrir þessa síðu og veldu hnappinn aftur.
