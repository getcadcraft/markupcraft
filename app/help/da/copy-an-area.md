---
title: Kopiér et område af siden eller et overlay
summary: Kopiér en del af et ark med en rektangel, en ellipse eller en frihåndsform, og indsæt den i et andet ark, i CadCraft, BimCraft, DetailCraft eller et hvilket som helst program, i sin størrelse; kopiér den som et gennemsigtigt overlay, og justér et billede med to punkter.
keywords: kopiér område, område, beskær, udsnit, snapshot, klip, region, rektangel, ellipse, cirkel, frihånd, lasso, billede, png, overlay, transparent, gennemsigtig, farvetone, dækning, indsæt, rigtig størrelse, målestok, ret ind, to punkter, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Vælg {{ui:Mere}} › {{ui:Kopiér et område af siden…}}. En bjælke åbnes over arket.

## Vælg området

Vælg {{ui:Rektangel}}, {{ui:Ellipse}} eller {{ui:Frihånd}} i bjælken, og træk derefter på arket:

- **Rektangel:** træk en boks rundt om den del, der skal kopieres.
- **Ellipse:** træk en boks; ellipsen inde i den kopieres, og hjørnerne uden for den er gennemsigtige.
- **Frihånd:** tegn rundt om den del, der skal kopieres; formen lukker sig selv. Uden for den er det gennemsigtigt.

Træk igen for at starte forfra, eller tryk {{key:Esc}}.

## Kopiér

- {{ui:Medtag markeringer}} kopierer dine markeringer med siden; fjern fluebenet for den rene tegning.
- {{ui:Opløsning}}: {{ui:Som på skærmen}}, 72, 150 eller 300 dpi. Billedet holdes under 3 MB; hvis et stort område i høj opløsning ville overskride det, sænkes opløsningen, og statuslinjen siger til hvad.
- {{ui:Kopiér}} (eller {{key:Mod+C}} eller {{key:Enter}}) lægger området på udklipsholderen som et PNG-billede, der kan indsættes i Word, e-mail, andre PDF-programmer og tegneprogrammer.
- {{ui:Gem som PNG}} downloader billedet i stedet, til et program, der fjerner de gennemsigtige dele ved indsættelse.

## Kopiér som overlay

{{ui:Kopiér som overlay}} gør også det hvide papir gennemsigtigt, så kun linjerne er tilbage. {{ui:Farve}} giver hver linje én farve (rød, blå, grøn, orange eller lilla), så overlayet skiller sig ud fra tegningen under det; {{ui:Egne farver}} beholder dem. {{ui:Styrke}} er, hvor kraftigt det starter, når det indsættes i vores apps (50 %, medmindre du ændrer det).

## Indsæt det

**I MarkupCraft** indsætter {{key:Mod+V}} på ethvert ark området som et billedmarkering ved markøren. Det kommer ind i sin størrelse:

- på papir, i samme størrelse som på det ark, det kom fra;
- når begge ark har en målestok, i samme størrelse i tegningen: et område fra et 1:50-ark kommer ind med halvdelen af sin papirstørrelse på et 1:100-ark.

Et overlay starter med sin styrke; ændr den med {{ui:Dækning}} i {{ui:Egenskaber}}. Flyt, ændr størrelse på, lås og slet det ligesom et hvilket som helst billede, og sæt flueben i {{ui:Fladgør ind i siden ved gemning}} for at tegne det ind i siden.

**I CadCraft, BimCraft og DetailCraft** kender kopien også sin størrelse, så en indsættelse kommer ind i tegningens rigtige størrelse, når arket havde en målestok, eller spørger efter en, når det ikke havde. Se hver apps hjælp om billeder.

## Ret et billede ind efter to punkter

Vælg ét billede eller overlay, og vælg derefter {{ui:Mere}} › {{ui:Justér et billede med to punkter}}:

1. Klik på et punkt på billedet.
2. Klik, hvor det punkt skal hen.
3. Klik på et andet punkt på billedet, væk fra det første.
4. Klik, hvor det punkt skal hen.

Billedet skaleres, flyttes og drejes, så begge punkter lander, hvor du klikkede. {{key:Esc}} stopper; {{key:Mod+Z}} fortryder det i ét trin.

## Godt at vide

- Størrelsen følger kun med kopien mellem vores apps på samme site, og kun for en kopi lavet inden for de sidste par timer; et andet program får et almindeligt billede.
- Kan MarkupCraft ikke bruge systemets udklipsholder, fordi browseren ikke tillader det, siger statuslinjen det: indsættelse i vores apps virker stadig, og {{ui:Gem som PNG}} virker til andre programmer.
- Justering drejer billedet ved at tegne dets pixels om, så et drejet billede er lidt blødere end originalen.
