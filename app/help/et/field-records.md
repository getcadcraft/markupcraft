---
title: Jälgi RFI-sid, esitusi ja päevalogi kirjeid
summary: Lisa lehtedele RFI-d, esitused ja päevalogi kirjed numbrite, vastutajate, tähtaegade ja lõimedega; filtreeri tähtaja ületanud kirjeid; ekspordi CSV või BCF; tööta võrguta ja ühenda koopiad.
keywords: rfi, teabenõue, esitus, päevalogi, väljaraport, objektipäevik, ehitus, tähtaeg ületatud, tähtaeg, määratud mulle, lõim, manus, ühenda, võrguta, tahvelarvuti, bcf, csv, väli
from: 95039c5a
---

Vahekaart {{ui:Väli}} hoiab märgistuste kõrval kolme liiki kirjeid. Iga kirje on seotud lehega; RFI-l või esitusel on lisaks naast lehel selle koha juures, millega ta seotud on.

- **RFI**: küsimus projekteerimismeeskonnale. Staatused: Avatud, Vastatud, Suletud.
- **Esitus**: midagi, mis tuleb enne töö jätkamist üle vaadata. Staatused: Avatud, Ülevaatamisel, Kinnitatud, Kinnitatud märkustega, Muuda ja esita uuesti, Suletud.
- **Päevalogi**: päeva ilm, objektil viibinud inimeste arv ja tehtud töö. Staatused: Mustand, Lõplik.

Igal kirjel on oma liigi number (RFI-0001, SUB-0001, LOG-0001), pealkiri, tekst, vastutaja, tähtaeg, vastuste lõim ja manuste nimede loend.

## Lisa uus

1. Ava vahekaart {{ui:Väli}} ja vali {{ui:RFI}} või {{ui:Esitus}}.
2. Puuduta või klõpsa lehte, kuhu kirje kuulub. Ilmub naast ja kirje avaneb vahekaardil.
3. Täida pealkiri, küsimus või kirjeldus, kellele see on määratud ja millal on tähtaeg.

Päevalogi lisatakse avatud lehele ilma naastuta. {{ui:Aseta naast}} paneb naasta hiljem; {{ui:Teisalda naast}} teisaldab mis tahes naasta. Lehel naastu puudutamine avab selle kirje.

## Vasta ja jälgi

Muuda {{ui:Staatust}} ja muudatus kantakse lõimes logisse. Kirjuta vastus ja vali {{ui:Saada vastus}} (Ctrl+Enter saadab samuti). Manused on ainult nimed: kirjuta üks või vali failid, ja loend näitab meeskonnale, mis kuulub kirje juurde. Failid ise jäävad oma kohale.

Kirje, mille tähtaeg on möödas ja mis on veel ootel (RFI, mis pole Vastatud ega Suletud, või esitus, mille otsust pole tehtud), on loendis ja oma naastul punasega märgitud **Tähtaeg ületatud**.

## Leia olulised kirjed

Filtrid asuvad loendi kohal: liik, staatus, tähtaeg (tähtaeg ületatud, tähtaeg 7 päeva pärast, on või pole tähtaega), see leht või kõik lehed, tekstiotsing ning {{ui:Määratud mulle}}, mis võrdleb vastutajat nimega, mille järgi MarkupCraft sind tunneb (vt [Sea oma nimi](topic:set-your-name)). Filtrite all olev rida loeb kokku, mis on näidatud ja mis on tähtaeg ületanud.

## Eksport

{{ui:CSV}} kirjutab loetletud kirjed tabelarvutusfailina. {{ui:BCF}} kirjutab need BCF-teemadena, igaüks koos oma koha hetktõmmisega lehel, et teised BCF-tööriistad saaksid need loetleda. Mõlemad järgivad filtreid.

## Salvestamine, võrguta töö ja koopiate ühendamine

Kirjed salvestatakse PDF-i sisse, kui sa faili salvestad, ja need tulevad avamisel tagasi. Võrku pole vaja: lisa, muuda, vasta ja salvesta tahvelarvutis keldris, seejärel too PDF tagasi. Vanad PDF-id ja teiste programmide PDF-id avanevad nagu varem.

Kahe koopia kokkuviimiseks ava üks ja vali {{ui:Ühenda}}, seejärel vali sama PDF-i teine koopia. Kirjed ühendatakse nende ID-de järgi:

- kirje, mis on ainult ühel koopial, lisatakse;
- kirje, mis on mõlemal, võtab oma väljad (pealkiri, tekst, staatus, vastutaja, tähtaeg) tervikuna sellelt koopialt, mida muudeti viimati; kui kaks inimest muutsid sama kirje eri välju, jääb võidule hilisema koopia versioon; lõimed ja manuste nimed mõlemast koopiast liidetakse;
- kui mõlemad koopiad nummerdasid uue kirje sama numbriga, saab see, mis saabub, järgmise vaba numbri;
- kirje, mis on ühes koopias eemaldatud, jääb eemaldatuks, välja arvatud juhul, kui seda muudeti pärast.

Ühendamine on üks tagasivõtmise samm.

## Piirangud

- Kirjeid ei jagata veel Live TeamWorkiga; kasuta {{ui:Ühenda}}.
- Selles versioonis pole kirjete jaoks meeskondi, teavitusi ega pilveprojekte.
- PDF-ist kustutatud lehed viivad kaasa oma kirjed (lehe kinnitusdialoog loeb need kokku).
