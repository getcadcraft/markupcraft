---
title: Salvesta märgistatud PDF
summary: Laadi alla koopia, kus iga märgistus on kirjutatud standardsete PDF-kommentaaridena, vaata, mida teised PDF-lugejad näevad, ja jätka hiljem tööd.
keywords: salvesta, lae alla, ekspordi pdf, märgistatud, annotatsioonid, kommentaarid, jaga, saada, probleem, jätka tööd, ava uuesti, edasi-tagasi, prindi
from: 4c198ebe
---

## Salvesta

1. Vali tööriistaribal {{ui:Salvesta}} või vajuta {{key:Mod+S}}.
2. Kui mitu faili on avatud, vali {{ui:See fail}} (lehe fail, millel sa oled) või {{ui:Kõik muudetud failid}}. Iga koopia laaditakse eraldi alla.
3. Oota, kuni „Salvestan <file>…“ lõpeb. Esimene salvestamine seansi jooksul laadib ka PDF-kirjutaja.

Tulemus: sinu brauser laadib alla faili „<name> (marked up).pdf“ ja olekuribal kuvatakse: „Salvestatud A-Plans (marked up).pdf (24 märgistust, 18,2 MB). Algne fail on muutmata.“ Punkt {{ui:Salvesta}} nupu järel kaob.

**Sinu algset PDF-i ei muudeta kunagi.** MarkupCraft kirjutab uue faili. Asukoht sõltub sinu brauseri allalaadimise sätetest (vt [Failid, mida MarkupCraft avab ja salvestab](topic:files#where-downloads-go)).

## Jätka tööd hiljem

Ava järgmine kord „(marked up)“ koopia, mitte algne fail. Kõik tuleb tagasi muudetavana: märgistused, staatused, vastused, punktikirjed, iga lehe mõõtkava ja kõik lehtede nimed, mille sa kirjutasid. Kui salvestad uuesti, laaditakse alla fail samanimeliselt „(marked up)“; brauser võib lisada numbri nagu „(1)“, kui vana allalaadimine on kaustas veel alles. Vanad koopiad asenda või korrasta ise.

MarkupCraft ei salvesta PDF-i iseseisvalt. Töö ajal hoiab ta selles brauseris taastamiskoopiat, nii et krahh või suletud vahekaart ei kaota sinu märgistusi: järgmisel MarkupCraft-i avamisel küsib ta „Kas taastada sinu töö?“. Vt [Taasta oma töö](common:recover). Salvesta siiski enne sulgemist; kui proovid lahkuda salvestamata märgistustega, küsib brauser esmalt „Kas lahkuda lehelt?“ (iPadi Safari seda ei tee).

## Mida näevad teised PDF-lugejad

Iga märgistus kirjutatakse standardse PDF-kommentaarina (annotatsioonina) oma joonistusega, nii et iga PDF-vaataja kuvab, prindib ja loetleb selle kommentaaride paneelis:

- **Välimus on sama** mis MarkupCraft-is: pilved koos kaarjate servadega, nooled, templid, loenduspunktid, punktinumbri märgid, mõõtesildid.
- **Üksikasjad on standardsed:** autor, kuupäev, teema, kommentaari tekst ja värvid.
- **Pilved** on ristkülik- või hulknurkkommentaarid pilvise äärisega; **tekstikastid** ja **viited** on tekstikasti kommentaarid; **märkmed** on kleepuvad märkmed; **pliiats** ja **markeri** joonistused on tint; **templid** on templikommentaarid.
- **Pikkused ja pindalad** on mõõtekommentaarid ning iga kalibreeritud leht kannab oma mõõtkava, nii et mõõtmisi mõistvad vaatajad saavad väärtusi näidata.
- **Vastused** on kommentaari vastused ja **staatused** on ülevaatuse olekud (Avatud kuvatakse olekuta).
- **Lehenumbrid**, mille sa kirjutasid, saavad lehtede sildideks, mida teised vaatajad näitavad.

Mõned asjad loeb tagasi ainult MarkupCraft: punktikirje vastutaja ja tähtaeg, kirje staatus ning mõned stiilidetailid. Teised programmid need säilitavad, kui nad kommentaari uuesti ei kirjuta.

Teises programmis saab kommentaare liigutada või muuta nagu iga teisi. Kui keegi seda teeb ja saadab faili tagasi, kasutab MarkupCraft faili avamisel kommentaari uut asukohta.

Täielik kirjeldus: [Mis PDF-i sisse salvestatakse](topic:what-the-pdf-keeps).

## Märgid, mis prinditakse küsimärgina „?“

Märgistuse tekst kirjutatakse standardse Helvetica fondiga, mis on igal PDF-vaatajal olemas. See katab inglise ja Lääne-Euroopa tähti (é, ñ, ü, ø jms), kuid mitte teisi kirjasüsteeme, selle hulgast väljapoole jäävaid sümboleid ega emojisid. Need märgid kuvatakse MarkupCraft-is korrektselt, kuid salvestatud koopias prinditakse need küsimärgina „?“, ja salvestamise teade loeb need kokku: „3 märki Lääne-Euroopa tähestikust välja prinditakse koopias küsimärgina „?“.“ Kirjuta sellised sõnad välja või kasuta lihtsat asendust (näiteks „dia.“ läbimõõdu märgi asemel).

## Failid, mida ei saa salvestada

- **Kaitstud PDF-id:** „See PDF on kaitstud (krüptitud), seega märgistatud koopiat ei saa kirjutada. Palu kaitsmata koopiat.“ Ülevaatust saad siiski teha ekraanil, eksportida CSV ja BCF.
- Kui salvestamine ebaõnnestub muul põhjusel, näitab kast „Faili ei saanud salvestada: <file>“ põhjust. Sinu märgistused on jätkuvalt vahekaardil; midagi ei kao enne, kui vahekaardi sulged.

## Lamestamine ja printimine

Lamestamist (märgistuste põletamist lehele) ega printimise käsku veel ei ole. Printimiseks ava salvestatud koopia mis tahes PDF-vaatajas ja prindi kommentaarid nähtavana.
