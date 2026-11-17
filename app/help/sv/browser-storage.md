---
title: Vad som finns kvar i den här webbläsaren
summary: Ditt namn, inställningar, verktygslådan och de senaste markeringarna du kopierade sparas i den här webbläsaren på den här datorn; dina markeringar sparas bara i PDF-filerna du sparar.
keywords: lokal lagring, webbläsarlagring, inställningar, preferenser, profil, rensa data, privat fönster, inkognito, säkerhetskopia, annan dator, synkronisering, återställ
from: ab6e3c81
---

MarkupCraft har inget konto och ingen lagring på server. Några små saker sparas i din webbläsares lagring för den här webbplatsen, och allt annat finns i dina filer.

## Vad som sparas i webbläsaren

| Vad | Anges där | Sparas som |
|---|---|---|
| Ditt författarnamn | Namnknappen i statusfältet, eller {{ui:Inställningar}} | Ett namn |
| MarkupCraft-inställningar | {{ui:Inställningar}}, fliken {{ui:MarkupCraft}}: färg och linjetjocklek för nya markeringar, var inklistrade kopior hamnar, enheter (se [MarkupCraft-inställningar](topic:settings)) | En uppsättning |
| Verktygsinställningar | {{ui:Egenskaper}} när ett ritverktyg är på: färg, linje, fyllning, opacitet och textstorlek per verktyg, den valda stämpeln, namnet på räknegruppen | En uppsättning |
| Verktygslåda | Fliken {{ui:Verktyg}} | Upp till 500 verktyg |
| Det du kopierade senast | {{ui:Kopiera}} eller {{ui:Klipp ut}} | De kopierade markeringarna, så att en annan flik kan klistra in dem; ersätts av nästa kopiering |
| Stämpelbild och signatur | {{ui:Bild…}} och {{ui:Min signatur…}} i stämpellistan | Den senaste bilden och din signatur |
| Återställningskopior | Sparas åt dig medan en PDF har osparade markeringar | PDF-filen och dess markeringar, tas bort när du sparar, stänger eller kasserar den; sparas upp till 30 dagar |

## Vad det innebär

- **Per webbläsare, per dator.** Chrome och Firefox på samma dator har var sin. Din bärbara dator och kontorsdatorn har var sin. Inget synkas mellan dem, även om du loggar in i webbläsaren.
- **Privata fönster och inkognitofönster** börjar tomma och glömmer allt när de stängs.
- **Rensning av webbplatsdata raderar det.** Om du rensar cookies och webbplatsdata för den här webbplatsen, eller för alla webbplatser, i webbläsarens inställningar tas ditt namn, dina inställningar och din verktygslåda bort. Vissa rensningsverktyg och vissa företagsregler gör detta automatiskt.
- **Inget laddas upp.** Dessa värden lämnar aldrig datorn, förutom ditt namn i PDF-filerna du sparar. Återställningskopior stannar också i den här webbläsaren.

:::safari
Safari kan ta bort en webbplats lagrade data efter några veckor utan besök. Öppna MarkupCraft då och då, och behåll en exporterad verktygslåda.
:::

## Vad som inte sparas i webbläsaren

- **Dina markeringar, för gott.** De hör hemma i den PDF "(marked up)" du sparar. Återställningskopian är ett skyddsnät vid krasch eller en stängd flik, inte en plats att spara arbete på: den försvinner när du sparar, och rensning av webbplatsdata tar bort den. Se [Återställ ditt arbete](common:recover).
- **Dina öppna filer.** Varje gång du öppnar MarkupCraft öppnar du PDF-filerna igen.
- **Bladet du var på, zoom, filter och ångra-historik.** Dessa finns kvar tills du stänger uppsättningen eller fliken.

## Säkerhetskopiera och flytta din uppsättning

- **Verktygslåda:** {{ui:Verktyg}}, sedan {{ui:Exportera}}. På den andra webbläsaren eller datorn: {{ui:Verktyg}}, sedan {{ui:Importera}}.
- **Namn:** skriv in det igen i den andra webbläsaren (klicka på namnknappen i statusfältet).
- **Verktygsinställningar:** ställ in dem igen, eller spara varje formaterad markering som ett verktyg så att den följer med verktygslådan.

## Börja om

För att återställa allt, rensa den här webbplatsens data i webbläsarens inställningar. Ditt namn, dina inställningar och din verktygslåda försvinner; de sex standardverktygen kommer tillbaka.

## Den frånkopplade kopian

{{ui:Spara för offline}} i fältet överst lagrar appens egna filer (med PDF-läsaren och -skrivaren, ungefär 6 MB) i webbläsaren också, separat från dessa inställningar. Om du rensar webbplatsdata tas även den kopian bort; klicka på "Redo för offline" och välj "Ta bort offlinekopian" för att bara ta bort den. Se [Arbeta offline](common:offline).

Molnsparande och synkronisering mellan datorer finns inte ännu.
