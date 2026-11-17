---
title: Jelölési rétegek
summary: Helyezze a jelöléseket elnevezett rétegekre, majd jelenítse meg, rejtse el vagy zárolja az egyes rétegeket; más PDF-megtekintők is kapcsolhatják őket.
keywords: rétegek, réteg, elrejtés, megjelenítés, zárolás, jelölések csoportosítása, szakág, gépészet, villamos, opcionális tartalom, ocg, láthatóság
from: 0fbb4c26
---

A rétegek csoportosítják a jelöléseket, például szakág vagy véleményező szerint. Rejtse el a réteget, hogy lássa alatta a rajzot, vagy zárolja, hogy a jelöléseit ne lehessen véletlenül mozgatni.

## Réteg készítése és rajzolás rajta

1. Nyissa meg a {{ui:Rétegek}} részt, amely a {{ui:Rajzlapok}} panel tetején található.
2. Válassza az {{ui:Új réteg}} gombot, írjon be egy nevet, például `Mechanical`, majd válassza a {{ui:Réteg hozzáadása}} gombot.
3. Az új réteg lesz az aktuális réteg: minden ezután rajzolt jelölés erre kerül. Egy másik réteg nevének vagy a {{ui:Nincs réteg}} lehetőségnek a kiválasztásával módosíthatja, hová kerülnek az új jelölések.

Jelölés másik rétegre helyezéséhez jelölje ki, majd válassza ki a rétegét a {{ui:Tulajdonságok}} panel {{ui:Réteg}} mezőjében. A lista végén lévő {{ui:Új réteg…}} azonnal készít egyet. Az áthelyezés a {{key:Mod+Z}} billentyűvel visszavonható.

## Megjelenítés, elrejtés és zárolás

Minden réteg sorában két gomb van:

- A **szem** megjeleníti vagy elrejti a réteget. Az elrejtett jelöléseket nem rajzolja ki, és nem lehet kiválasztani; a {{ui:Jelölések}} listában továbbra is beleszámítanak.
- A **zár** a réteg jelöléseit a rajzlapon hagyja, de megakadályozza, hogy ki lehessen őket választani, mozgatni vagy törölni.

A **ceruza** gomb átnevezi a réteget, és a jelöléseit is vele viszi. A {{ui:Jelölések}} listát a {{ui:Réteg}} szerint szűrve egyetlen réteg jelöléseit láthatja.

## A mentett PDF-ben

Minden rétegből PDF-réteg (opcionális tartalom) lesz. Más PDF-megtekintők a rétegek panelen listázzák őket, és kapcsolhatják őket; az elrejtett réteg ott is rejtve indul. A rajzban már meglévő rétegek, például a CAD-rétegek, változatlanok maradnak. Amikor a másolatot újra megnyitja a MarkupCraftban, a jelölések visszakerülnek a rétegeikre, úgy elrejtve és zárolva, ahogy hagyta őket.

## Jó tudni

- Az elrejtés és a zárolás nem szerkesztés: a {{key:Mod+Z}} billentyűvel nem vonható vissza, de a PDF-fel együtt mentődnek.
- A másolás és a beillesztés megtartja a jelölés rétegét.
- A lapított másolat minden jelölést a lapra rajzol, a rétegétől függetlenül. Lásd: [Lapított másolat mentése](topic:flatten).
