---
title: PDF-űrlap kitöltése
summary: Írjon be a PDF űrlapmezőibe, jelöljön be négyzeteket, és válasszon a listákból; az értékek magába az űrlapba mentődnek.
keywords: űrlap, űrlapok, kitölthető, kitöltés, kitölt, acroform, mező, mezők, szövegmező, jelölőnégyzet, rádiógomb, legördülő, lista, engedély, kérelem, ellenőrzési űrlap, beadványi űrlap, jóváhagyás
from: ab366541
---

Sok PDF-hez tartozik űrlap: építési engedélykérelmek, ellenőrzési listák, beadványok fedőlapjai. A MarkupCraft megmutatja az űrlap mezőit és azok értékeit, és lehetővé teszi a kitöltésüket. Az értékek a PDF saját mezőibe kerülnek, így az Acrobat és minden más PDF-olvasó megjeleníti és megőrzi őket.

## Az űrlap kitöltése

1. Nyissa meg a PDF-fájlt. Ha van benne űrlap, az állapotsor megmutatja, hány mezője van.
2. Válassza a {{ui:Fill form}} lehetőséget az eszköztárban (vagy nyomja meg az {{key:F}} billentyűt). Az oldal minden mezője kap egy dobozt, amelybe lehet írni.
3. Kattintson egy mezőre, és írjon. Jelölje be a négyzeteket, válassza ki a rádiógombokat, és válasszon a legördülő menükből és listákból. A {{key:Tab}} billentyű a következő mezőre lépteti.
4. Az űrlap kitöltése közben az oldal mozgatásához húzzon a mezőkön kívüli bárhová.
5. Ha végzett, nyomja meg az {{key:Esc}} billentyűt, vagy válasszon másik eszközt. Amit beírt, az az oldalon marad.

Ha a {{ui:Select}} eszköz van kiválasztva, a mezőre duplán kattintva bekapcsolja a {{ui:Fill form}} eszközt, és az adott mezőbe lép.

## A kitöltött űrlap mentése

Válassza a {{ui:Save}} lehetőséget. A letöltött másolat a mezőiben tartalmazza az értékeit, a jelölései pedig mellette. Az állapotsor megmutatja, hány mező lett kitöltve.

Ha olyan űrlapot kell benyújtani, amelyet senki nem módosíthat, válassza az {{ui:Pages}} lehetőséget, majd a {{ui:Save a flattened copy…}} lehetőséget: az értékek az oldal részévé válnak. Nyomtatáskor ugyanez történik.

## Jó tudni

- A PDF által zárolt (csak olvasható) mező nem módosítható. A dobozának színe szürke.
- A mező saját hosszkorlátjáig a szöveg megmarad; a többletkarakterek nem kerülnek be.
- Egyes űrlapokhoz nem tartozik rajzolt kép a dobozaikról és gombjaikról, és más programok üresen mutatják őket. A MarkupCraft kirajzolja őket, mentéskor pedig hozzáadja a képet, így mindenhol látszanak.
- A mezőben a visszavonás a mezőé: a {{key:Ctrl+Z}} billentyűt akkor nyomja meg, amikor abban ír. A jelölések visszavonása nem vonja vissza az űrlapértékeket.
- Ha a böngésző bezárul, a beírt értékek a többi nem mentett munkával együtt visszaállnak.
- A szabványos PDF-betűtípussal le nem írható karakterekkel (például kínai) beírt értékek mentődnek, és a PDF minden olvasótól kéri, hogy maga rajzolja ki őket.
- Az aláírásmezők és a nyomógombok itt nem tölthetők ki. Aláíráshoz használja a {{ui:Stamp}} eszközt és az aláírását.
- Az űrlapba írt értékek élő munkamenetben még nem oszthatók meg.
