---
title: Kaj je novega v 0.7 (prej)
summary: RFI-ji, predložitve in dnevniki del v novem zavihku Teren, z roki, zamudami v rdeči barvi, CSV in BCF, delo brez povezave in združevanje; pomočniki, ki nastavljajo stanja, odgovarjajo in izvozijo seznam; seznami enot, ki sledijo Nastavitvam; podokna, ki se lahko skrijejo, in pogovorna okna, ki se premikajo.
keywords: kaj je novega 0.7, prejšnja izdaja, opombe o izdaji, dnevnik sprememb, spremembe, 0.7, različica, nove funkcije, teren, zapisi na terenu, rfi, zahteva za informacije, predložitev, dnevnik del, gradbiščni dnevnik, zamuda, rok, dodeljeno meni, pritrditev, združi, brez povezave, tablični računalnik, bcf, csv, pomočnik, mcp, stanje označbe, odgovor, izvoz, enote, seznami enot, zvezdica, kalibriraj, strnjeno, podokna, pogovorna okna, portugalščina
from: f8578677
---

To je, kaj se je spremenilo v MarkupCraft 0.7 v primerjavi z 0.6. Največja novost so zapisi na terenu: RFI-ji, predložitve in dnevniki del, shranjeni v PDF poleg vaših označb.

## Novo

### RFI-ji, predložitve in dnevniki del

- **Zavihek Teren.** Odprite zavihek {{ui:Teren}} in izberite {{ui:RFI}}, {{ui:Predložitev}} ali {{ui:Dnevnik del}}. Dotaknite se ali kliknite list, kjer spada RFI ali predložitev, in pritrditev označi mesto; dnevnik del gre na odprti list brez pritrditve ({{ui:Postavi bucico}} doda eno pozneje, {{ui:Premakni bucico}} premakne katero koli pritrditev). Vsak zapis ima svojo številko (RFI-0001, SUB-0001, LOG-0001), naslov, besedilo, stanje, zadolženo osebo, rok, nit odgovorov in seznam imen prilog. Glejte [Sledenje RFI-jem, predložitvam in dnevnikom del](topic:field-records).
- **Poiščite, kar zamuja.** Seznam filtrirajte po vrsti, stanju, roku (zamujeno, v 7 dneh, z rokom ali brez roka), po tem listu ali vseh listih, z iskanjem besedila ali z {{ui:Dodeljeno meni}}. Zapis, ki je čez rok in še čaka, je označen z **Zamujeno** v rdeči barvi, na seznamu in na svoji pritrditvi. Glejte [Poiščite, kar šteje](topic:field-records#find-what-matters).
- **CSV in BCF.** {{ui:CSV}} zapiše navedene zapise kot preglednico; {{ui:BCF}} jih zapiše kot teme BCF, vsako s posnetkom njenega mesta na listu. Oba upoštevata filtre. Glejte [Izvoz](topic:field-records#export).
- **Brez povezave in dve kopiji v eno.** Zapisi se shranijo v PDF in ne potrebujejo omrežja, zato lahko tablični računalnik na terenu dodaja, odgovarja in shranjuje. Ko ste nazaj v pisarni, {{ui:Združi}} združi zapise druge kopije istega PDF po njihovih identifikatorjih kot en korak razveljavitve. Glejte [Shranjevanje, delo brez povezave in združevanje kopij](topic:field-records#save-offline-and-merging-copies).

### Pomočniki z umetno inteligenco

- **Več, kar lahko pomočnik naredi.** Vaš lastni pomočnik, povezan prek CadCraft Studio, lahko zdaj nastavi stanje označbe (`markup_status`, zabeleženo v njeni niti), odgovori v niti (`markup_reply`) in izvozi seznam {{ui:Označbe}} kot CSV ali BCF (`markups_export`, kar prikazuje seznam s svojimi filtri). Vsaka sprememba je en korak razveljavitve, podpisan z imenom pomočnika. Glejte [Kaj lahko zahteva pomočnik](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## V vseh aplikacijah

- **Enote.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}} ima za dolžino, površino, prostornino, kot in naklon vsak svoj seznam, z natančnimi velikostmi, ki jih dajo definicije enot (ameriška geodetska stopa je posebna enota). Izklopite enote, ki jih ne uporabljate, in odstranijo se s seznamov; eno označite z zvezdico, in novo delo se začne v njej. Datoteka vedno ohrani svojo enoto. V MarkupCraft merilne in položajne enote v {{ui:Nastavitve}} › {{ui:MarkupCraft}} ter enota v pogovornem oknu za kalibracijo sledijo stikalom; zvezdica nastavi merilno enoto, dokler ne shranite lastnih nastavitev MarkupCraft, resnična razdalja, ki jo vpišete pri kalibraciji, pa lahko ima oznako katere koli enote, na primer `3 yd` ali `1.5 km`. Glejte [Enote, vpisane vrednosti in seznami enot](common:unit-lists).
- **Gostejša postavitev in podokna, ki se skrijejo.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Gostota postavitve}} › {{ui:Strnjeno}} na zaslonu spravi več (zasloni na dotik in telefoni ohranijo velike gumbe). Vsako stransko podokno ima tanko naslovno vrstico: povlecite jo, da ga pripnete ali odlepite, spustite jo na naslovno vrstico drugega podokna, da delita en okvir kot zavihka, ga pritrdite, da se umakne do roba, ali ga skrijete in ponovno prikažete z roba. Glejte [Razporeditev podokon](common:arrange-panels#make-the-layout-denser).
- **Pogovorna okna se premikajo.** Pogovorno okno povlecite za naslovno vrstico iz poti risbe; vrne se tja, kjer ste ga pustili. Dvakrat kliknite naslovno vrstico, da ga spet postavite na sredino. Glejte [Premik pogovornega okna](common:arrange-panels#move-a-dialog).
- **Recepti za pomočnike z umetno inteligenco.** Deset zgledov zahtev za vašega pomočnika (urejanje risbe, izris kompleta, preverjanje risb, vprašanja o modelu, seštevek predizmer, preizkus variante dela …), vsak z orodji, ki jih kliče, in dovoljenji, ki jih potrebuje, in vsak ponovno preizkušen z našimi testi. Aplikacije ne vsebujejo umetne inteligence. Glejte [Recepti za pomočnike z umetno inteligenco](common:assistants-recipes).
- **Jeziki.** **Português (Portugal)** je nov v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Jezik}}. Zdaj imajo vse besede aplikacij tudi **Português (Brasil)**, **Español (México)** in **Bahasa Indonesia**, vsi kot osnutki, ki jih izvorni govorec še ni pregledal. Teme pomoči so v angleščini.
- **CadCraft Studio** pove, zakaj preverjanje posodobitev ni uspelo (še ni datoteke za vaš sistem, ni omrežja, napačen podpis), namesto da bi le pisal „Končano“, in ne prikazuje več kartice Kaj je novega, ki ste jo zaprli, dokler ni na voljo novejša izdaja.

## Še ni v tej različici

- **0.7 ni podpisana s kodo.** Podpisovanje in paket Microsoft Store sta preložena v 0.8, ker potrdilo še ni potrjeno. Preverite zgoščeno vrednost SHA-256 ob vsaki datoteki na getcadcraft.com/download. V sistemu Windows, če SmartScreen ustavi namestitveni program, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu ob prvem zagonu z desno tipko kliknite CadCraft Studio in izberite {{ui:Odpri}}. CadCraft Studio še ni v trgovini z aplikacijami, izdaje za iPad ali iPhone pa še ni.
- Seznami kotov in naklonov v {{ui:Enote}} so shranjeni, vendar jih zaenkrat nobeno okno ne bere.
- Zapisi na terenu se ne delijo v seji v živo v CadCraft Studio (seje v živo prenašajo samo označbe); kopije združite z {{ui:Združi}}.
- Združevanje vzame zapis kot celoto iz kopije, spremenjene nazadnje: če sta dve osebi spremenili različna polja enega zapisa, veljajo polja poznejše kopije. Niti in imena prilog se združijo.
- Priloge so samo imena; datoteke ostanejo, kjer so. Za zapise ni ekip, obvestil ali oblačnih projektov, pomočniki pa zanje še nimajo orodij.
- Zapisi na terenu so bili preizkušeni v brskalniku pri velikostih telefona in tabličnega računalnika z odklopljenim omrežjem, še ne ročno na pravem tabličnem računalniku.
- Še iz 0.6: obračanje predmetov strani pod poljubnim kotom, risanje novih oblik neposredno v stran, spreminjanje pisave ali velikosti črte in besedilo, ki teče čez več vrstic. Shranjena kopija z urejanjem strani še ni bila odprta v Acrobatu.
- Še iz 0.5: razveljavitev spremembe strani (na primer dodajanja prazne strani), branje besedila iz skeniranih listov in seje v živo zunaj vašega lastnega omrežja.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet).
