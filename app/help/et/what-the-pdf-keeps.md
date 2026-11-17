---
title: Mis salvestatakse PDF-i
summary: Täpselt, mida märgistatud koopia sisaldab, mida teised PDF-programmid näevad ja mis loetakse tagasi faili avamisel.
keywords: pdf-annotatsioonid, kommentaarid, salvestatud andmed, edasi-tagasi, lehesildid, mõõtmine, ülevaatuse olek, vastused, koostalitlusvõime, ühilduvus, uuesti avamine, privaatsed andmed
from: 6439ad28
---

Märgistatud koopia on algne PDF, millele on lisatud kommentaarid (PDF-annotatsioonid). Lehed ise, nende joonised, tekst, järjehoidjad ja lingid kopeeritakse täpselt nii, nagu need olid.

## Iga märgistus

| MarkupCraft | Salvestatud kujul | Teised PDF-vaatajad näevad |
|---|---|---|
| Ristkülik, kastpilv | Ruutannotatsioon (pilv: pilvine äärejoon) | Ristküliku või pilve kommentaari |
| Ellips | Ringannotatsioon | Ellipsi kommentaari |
| Hulknurk, vaba pilv | Hulknurkannotatsioon (pilv: pilvine äärejoon) | Hulknurga või pilve kommentaari |
| Murdjoon | PolyLine-annotatsioon | Murdjoone kommentaari |
| Joon, nool | Joonannotatsioon (nool: suletud noolepea) | Joone või noole kommentaari |
| Pikkus | Joonannotatsioon, märgitud mõõtena, koos mõõtmisega | Pikkuse mõõtmise, kui vaataja seda toetab |
| Pindala | Hulknurkannotatsioon, märgitud pindalana, koos mõõtmisega | Pindalamõõtmise, kui seda toetatakse; muidu hulknurga |
| Loenduse rühm | Üks tindiannotatsioon, iga üksuse kohta rõngas; tekst on "group: n" | Tindikommentaari |
| Pliiats, marker | Tindiannotatsioon (marker märgitud nii) | Tindikommentaari |
| Tekst | FreeText-annotatsioon | Tekstikasti kommentaari |
| Viide | FreeText-annotatsioon koos viite juhtjoonega | Viite kommentaari |
| Märkus | Tekstiannotatsioon | Kleeplehemärke, mis avaneb oma tekstiga |
| Pitsat | Pitsatiannotatsioon | Pitsati kommentaari |

Iga märgistus salvestatakse koos:

- **oma välimusega**, joonistatud täpselt nii, nagu MarkupCraft seda ekraanil joonistab, nii et see näeb kõigis vaatajates samasugune ja trükitakse samamoodi, punch-numbri märk kaasa arvatud;
- **autoriga**, **loomise ja muutmise kuupäevadega**, **teemaga**, **kommentaari tekstiga** (tekstikastide ja viidete puhul tekst ja kommentaar), **värviga** ja **läbipaistmatusega**;
- **oma MarkupCraft'i andmetega** eraldi kirjes, mida teised programmid ignoreerivad: olek, punch-kirje, stiil ja tüüp, et see avaneks täpselt samana.

## Lõimed ja olekud

- Iga vastus salvestatakse vastuskommentaarina, mis on seotud oma märgistusega, koos autori, kuupäeva ja tekstiga. Vastustel endil pole lehel ikooni.
- Iga olekumuutus salvestatakse vastusena, mis kannab ülevaatuse olekut. Teised ülevaatustööriistad näitavad seda kui Aktsepteeritud, Tagasi lükatud või Lõpetatud; Avatud salvestatakse ilma olekuta.
- Märgistus, mille olek on muu kui Avatud, kuid millele pole logitud olekumuutust, saab ühe ülevaatuseoleku vastuse, et teised programmid näeksid ka olekut.
- Algfailis olevate kirjutuskaitstud kommentaaride vastused salvestatakse samal viisil, seotuna selle kommentaariga.

## Iga leht

- **Mõõtkava:** kalibreeritud leht saab lehe katva mõõtevaate (tavapärane viis lehe mõõtkava salvestamiseks) ja MarkupCraft'i enda koopia kalibreerimisest.
- **Lehenumber:** numbri, mis on sisestatud {{ui:Nimeta leht ümber}} abil, kasutatakse lehesildina. Kui failis on mõnel lehel silt, saab selle faili iga leht sildi: sisestatud number, muidu vana silt, muidu lehe number.
- **Lehe pealkiri:** sisestatud pealkiri salvestatakse ainult MarkupCraft'ile; teised vaatajad seda ei näita.

## Tekst ja märgid

Tekst kirjutatakse fondiga Helvetica, mis on igas PDF-vaatajas olemas. Läänemaailma tähestikust (Windows-1252) väljaspool olevad tähed trükitakse koopias kui „?“; salvestamise teade loeb need kokku.

## Arvutuslehed ja põhjendused

Arvutuslehed ja põhjendused hoitakse PDF-i privaatses kirjes nimega `/MarkupCraftShell`. Teised PDF-programmid seda ignoreerivad. Vanem MarkupCraft ignoreerib samuti ja eemaldab selle, kui ta faili järgmine kord salvestab.

## Mis saab juba olemasolevate kommentaaridega

Kui avad PDF-i, millel on juba kommentaare:

- MarkupCraft'i enda kommentaarid loetakse tagasi täpselt. Kui teine programm on ühe neist liigutanud või suurendanud, võidab uus asukoht.
- Teiste programmide ristkülikud, ellipsid, jooned, murdjooned, hulknurgad, tint, tekstikastid ja kleeplehemärked muutuvad muudetavateks märgistusteks. **Salvestamisel MarkupCraft eemaldab algsed ja kirjutab need uuesti omal moel**, koos nende hüpikakende ja vastustega. Nende välimus võib natuke muutuda.
- Teiste programmide ülevaatuseoleku märked määravad oleku; uuem võidab.
- Kõik muu (teksti esiletõstud, teiste programmide pitsatid ja erilised liigid) **jäetakse koopias puutumata**, kirjutuskaitstuna.
- Lingid ja vormiväljad jäetakse puutumata ega loetleta.

Sama faili uuesti salvestamine ei dubleeri kunagi midagi: MarkupCraft'i loetud märgistused asendatakse, neid ei lisata uuesti.

## Mida ei muudeta

Sinu algne fail kettal ei muutu kunagi. Koopiat ei optimeerita suuruse järgi, seetõttu võib see olla algfailist natuke suurem. Kaitstud (krüpteeritud) PDF-e ei saa salvestada.
