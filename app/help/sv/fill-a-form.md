---
title: Fyll i ett PDF-formulär
summary: Skriv i en PDF:s formulärfält, bocka i dess rutor och välj från dess listor; värdena sparas i själva formuläret.
keywords: formulär, ifyllbart, fyll i, fyll i, acroform, fält, textfält, kryssruta, bocka, alternativknapp, rullgardinslista, lista, bygglov, ansökan, besiktningsformulär, inlämningsformulär, signera
from: ab366541
---

Många PDF-filer kommer med ett formulär: bygglovsansökningar, besiktningschecklistor, försättsblad för inlämning. MarkupCraft visar formulärets fält och deras värden och låter dig fylla i dem. Värdena läggs i PDF-filens egna fält, så Acrobat och alla andra PDF-läsare visar och behåller dem.

## Fyll i formuläret

1. Öppna PDF-filen. När den har ett formulär visar statusfältet hur många fält det har.
2. Välj {{ui:Fyll i formulär}} i verktygsfältet (eller tryck {{key:F}}). Varje fält på sidan får en ruta som du kan skriva i.
3. Klicka på ett fält och skriv. Bocka i kryssrutor, välj alternativknappar, och välj i rullgardinslistor och listor. {{key:Tab}} går till nästa fält.
4. För att flytta bladet medan du fyller i, dra någonstans utanför fälten.
5. Tryck på {{key:Esc}} eller välj ett annat verktyg när du är klar. Det du skrev finns kvar på bladet.

Med {{ui:Markera}} startar ett dubbelklick på ett fält {{ui:Fyll i formulär}} och placerar dig i det fältet.

## Spara det ifyllda formuläret

Välj {{ui:Spara}}. Kopian du laddar ner har dina värden i sina fält, med dina markeringar bredvid. Statusfältet visar hur många fält som fylldes i.

För att lämna in ett formulär som ingen kan ändra: välj {{ui:Sidor}} och sedan {{ui:Spara en tillplattad kopia…}}. Då blir värdena en del av sidan. Utskrift gör samma sak.

## Bra att veta

- Ett fält som PDF-filen låser (skrivskyddat) kan inte ändras. Dess ruta är grå.
- Text upp till fältets egna teckengräns sparas; extra tecken skrivs inte.
- Vissa formulär saknar ritade bilder av sina rutor och knappar, och andra program visar dem tomma. MarkupCraft ritar dem, och när du sparar lägger den till bilden så att de syns överallt.
- Ångra i ett fält gäller bara fältet: tryck {{key:Ctrl+Z}} medan du skriver i det. Ångra för markeringar ångrar inte formulärvärden.
- Om din webbläsare stängs kommer värdena du skrev tillbaka tillsammans med resten av ditt osparade arbete.
- Värden som skrivs med tecken som PDF:ens standardtypsnitt inte kan skriva (till exempel kinesiska) sparas, och PDF-filen ber varje läsare att rita dem själv.
- Signaturfält och tryckknappar fylls inte i här. För att signera, använd {{ui:Stämpel}} och din signatur.
- Värden som skrivs i ett formulär delas ännu inte i en Live-session.
