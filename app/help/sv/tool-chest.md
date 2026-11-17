---
title: Verktygslådan
summary: Spara en formaterad markering som ett återanvändbart verktyg, rita med det och dela din låda med kontoret som en fil.
keywords: verktygslåda, verktyg, verktygsuppsättning, egna verktyg, sparade markeringar, favoriter, kontorsstandard, importera, exportera, dela, json
from: 7dfa36e0
---

Fliken {{ui:Tools}} innehåller din **verktygslåda**: markeringar sparade med sitt utseende, redo att ritas igen. Ett verktyg behåller markeringens typ, färg, linjebredd, fyllning, opacitet, textstorlek och ämne, samt en stämpels formulering, en räknings gruppnamn eller startsatsen för en textruta eller utropsruta.

## Verktygen du börjar med

En ny låda har sex: ”Revisionsmoln” (röd), ”Frågemoln” (blå), ”Gul överstrykningspenna”, ”RFI-utropsruta” (blå, börjar med ”RFI: ”), ”Fältkontroll” (en orange utropsruta som säger ”Fältkontroll.”) och ”Godkänd med anmärkning” (en stämpel).

## Rita med ett verktyg

1. Öppna fliken {{ui:Tools}}.
2. Klicka på ett verktyg. Det ser nedtryckt ut, och motsvarande verktyg i verktygsfältet slås på.
3. Rita som vanligt. {{ui:Properties}} säger ”Ritar med ”<verktyg>” från verktygslådan.”

När ett verktyg från lådan är på gäller ändringar du gör i {{ui:Properties}} innan du ritar för det verktyget just nu, utan att ändra det sparade verktyget eller dina vanliga verktygsinställningar. Att välja en knapp i verktygsfältet, eller trycka på ett verktygs tangent, återgår till det vanliga verktyget.

## Spara egna verktyg

1. Rita en markering och ge den det utseende du vill ha: färg, linje, fyllning, ämne, stämpeltext.
2. Markera den.
3. Välj {{ui:Save selected as a tool}} i fliken {{ui:Tools}}, eller {{ui:Save as a tool}} i {{ui:Properties}}.
4. Skriv ett {{ui:Tool name}} och välj {{ui:Save tool}}.

Resultat: verktyget läggs till sist i lådan, och fliken {{ui:Tools}} öppnas och visar det.

## Stämplar gjorda av en markering

Markera flera markeringar (eller sidinnehåll med verktyget {{ui:Content}}) och välj {{ui:Save selection as a stamp…}} i {{ui:More}} eller i högerklicksmenyn. Lådan får en stämpel som håller dem alla (”Stämpel: 3 markeringar tillsammans”). Klicka på den och klicka sedan på valfritt blad: markeringarna hamnar tillsammans, centrerade där du klickar, som nya markeringar med ditt namn. Sidinnehåll ritas in på sidan där. Dessa stämplar sparas och delas med lådan som vilket verktyg som helst.

## Ta bort ett verktyg

Välj × i slutet av verktygets rad, och sedan {{ui:Remove}}. Markeringar som redan ritats med verktyget finns kvar som de är.

## Var lådan sparas

Lådan lagras **i den här webbläsaren, på den här datorn**. En annan webbläsare eller dator har sin egen låda (som börjar med de sex standardverktygen), ett privat fönster glömmer den när det stängs, och att rensa den här webbplatsens data i webbläsarens inställningar raderar den.

Om webbläsaren inte vill lagra den (lagring avstängd eller full) säger statusfältet: ”Verktygslådan kunde inte sparas i den här webbläsaren (lagringen är avstängd eller full). Exportera den för att behålla den.”

:::safari
Safari kan rensa en webbplats lagrade data när du inte har använt sajten på ett tag. Exportera din låda då och då så att du kan importera den igen.
:::

**Exportera din låda som en säkerhetskopia**, särskilt efter att du byggt verktyg som du förlitar dig på.

## Dela en låda med ditt kontor

1. Ställ in verktygen en gång.
2. Välj {{ui:Export}}. Du får ”MarkupCraft tool chest.json”.
3. Lägg filen där kontoret har sina standarder, eller skicka den runt.
4. Alla andra väljer {{ui:Import}} i sin flik {{ui:Tools}} och väljer filen.

Resultat: ”Importerade 12 verktyg från ”MarkupCraft tool chest.json”.” Verktyg som kommer från samma låda ersätter sina äldre kopior, så att import av en uppdaterad kontorslåda uppdaterar dessa verktyg i stället för att dubblera dem. Nya verktyg läggs till. En låda innehåller upp till 500 verktyg.

MarkupCraft kontrollerar varje värde i en importerad fil och hoppar över det som inte går att använda (”2 hoppades över (kunde inte användas)”). Filer som inte är en verktygslåda avvisas: ”Den här filen är inte en MarkupCraft-verktygslåda.” eller ”Den här filen är inte en verktygslåda (den är inte JSON).”

Verktygslådefiler från andra markeringsprogram kan inte importeras.
