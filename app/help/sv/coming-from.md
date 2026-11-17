---
title: Om du kommer från annan markeringsprogramvara
summary: Hur vanorna i ett PDF-markeringsprogram för skrivbordet motsvaras i MarkupCraft, och de skillnader som överraskar folk.
keywords: byta, växla, migrera, bekant, skrivbordets pdf-markering, verktygslåda, markeringslista, överlägg, sessioner, profil, genvägar, skillnader
from: c8f323e1
---

Om du granskar ritningar i Bluebeam Revu (eller kommenterar PDF-filer i ett annat PDF-program för skrivbordet) känns största delen av MarkupCraft bekant: moln, utropsrutor, en verktygslåda, en markeringslista, statusar med svar, kalibrerade mätningar och överlägg av blad. Den stora skillnaden är hur filer hanteras, så läs nästa avsnitt även om du hoppar över resten.

## De fem skillnaderna som spelar roll

1. **Spara skapar en ny fil.** MarkupCraft körs i webbläsaren och kan inte skriva över PDF-filen på din disk. {{ui:Spara}} laddar ner "<name> (marked up).pdf" och originalet förblir som det var. Nästa gång öppnar du kopian "(marked up)" och städar gamla kopior själv.
2. **PDF-filen sparas när du sparar.** Tills dess håller en återställningskopia i den här webbläsaren dina markeringar genom en krasch eller en stängd flik, och MarkupCraft erbjuder den nästa gång. Det är ett skyddsnät: spara PDF-filen för att behålla granskningen.
3. **Din profil finns i webbläsaren.** Ditt författarnamn, verktygsinställningar och verktygslåda sparas i den här webbläsaren på den här datorn. En annan webbläsare eller dator börjar om, och rensning av webbplatsdata raderar dem. Exportera din verktygslåda som säkerhetskopia. Se [Vad som finns kvar i den här webbläsaren](topic:browser-storage).
4. **Inga delade sessioner ännu.** Det finns ingen levande, delad granskningssession och inget molnprojekt. Granskningen reser i PDF-filen: spara, skicka kopian, nästa person svarar och sparar.
5. **Skalan gäller per blad, och bara per blad.** Det finns inga vyportar inuti ett blad och ingen "använd denna skala på alla sidor". Ange skala för varje blad du mäter på.

## Vana för vana

| Du är van vid | I MarkupCraft |
|---|---|
| Miniatyrpanel, sidnamn | {{ui:Blad}} till vänster. Namnen kommer från sidnamnen eller läses från ritningshuvudet; rätta dem med {{ui:Byt namn på bladet}}. |
| Öppna flera PDF-filer som en uppsättning | Öppna dem alla samtidigt; de blir en lista. Ingen uppsättningsfil sparas: öppna samma PDF-filer nästa gång. |
| Verktygslåda med verktygsuppsättningar | Fliken {{ui:Verktyg}}: en låda per webbläsare, sparade verktyg med stil och ämne. Dela med {{ui:Exportera}} och {{ui:Importera}} som JSON-fil. Verktygsuppsättningsfiler från andra program kan inte importeras. |
| Egenskapspanel | Fliken {{ui:Egenskaper}}: status, ämne, kommentar, stil, svar och åtgärdspost på ett ställe. |
| Markeringslista med kolumner | Fliken {{ui:Markeringar}} med filter för blad, författare, status och typ. Exportera CSV eller BCF. Inga egna kolumner och ingen sammanfattning i PDF eller arbetsbok ännu. |
| Status och granskningsläge | {{ui:Status}}: Öppen, Godkänd, Avvisad, Slutförd. Inga egna statusuppsättningar. Sparas som standardgranskningslägen. |
| Svar på en markering | Tråden "Svar" i {{ui:Egenskaper}}, med statusändringar loggade i den. Ett skickat svar kan inte redigeras. |
| Kalibrera, sedan längd, area, antal | {{ui:Kalibrera}}, {{ui:Längd}} ({{key:M}}), {{ui:Area}} ({{key:Q}}, ger area och omkrets), {{ui:Räkna}} ({{key:U}}). Ingen vinkel, radie, volym, polylängd eller urtag ännu. |
| Överlägg av sidor | Fliken {{ui:Jämför}}: rött för gammalt, blått för nytt, passa in med två punkter. Ingen automatisk molnsättning för "jämför dokument". |
| Stämplar | {{ui:Stämpel}} med sex inbyggda stämplar och egen text, signerade med ditt namn och datum. Inga bild- eller signaturstämplar ännu. |
| Åtgärds- eller ärendeuppföljning | Fliken {{ui:Åtgärdslista}}: numrerade poster med ansvarig, förfallodatum och status; CSV-export. |
| Live-samarbetssession | Inte tillgänglig ännu. Skicka den sparade PDF-filen vidare. |
| Platta till | Finns inte ännu. Markeringar förblir kommentarer som andra visare kan visa och skriva ut. |
| Lager för markeringar | Finns inte ännu. Använd ämnen, författare och listfilter för att sortera kommentarer. |
| Hyperlänkar mellan blad | Finns inte ännu. |
| Mellanslag för att panorera, hjul för zoom | Samma: håll {{key:Space}} och dra; hjulet zoomar vid pekaren. Hjulet rullar aldrig sidan. |

## Tangenter som skiljer sig

Många enbokstavstangenter är vad du kan förvänta dig, men kontrollera dessa innan fingrarna gör det åt dig:

- {{key:K}} är {{ui:Utropsruta}}, och {{key:Q}} är {{ui:Area}}. Om du är van vid Q för utropsrutor startar den en area här.
- {{key:C}} är rutan {{ui:Moln}}; {{key:Shift+C}} är {{ui:Fritt moln}}.
- {{key:M}} är {{ui:Längd}}, {{key:U}} är {{ui:Räkna}}, {{key:Y}} är {{ui:Polylinje}}, {{key:G}} är {{ui:Polygon}} och {{key:I}} är {{ui:Överstrykning}}.
- {{key:Mod+D}} duplicerar markeringen (i stället för webbläsarens bokmärke).
- {{key:Mod+Plus}} och {{key:Mod+Minus}} zoomar bladet, inte webbläsarsidan.
- Vilken tangent som helst kan ändras: se nedan.

:::tip
Om dina fingrar känner Bluebeam Revu, välj menystilen {{ui:PDF-granskning}} i {{ui:Inställningar}} › {{ui:MarkupCraft}} › {{ui:Menyer, tangenter och mus}}: en menyrad (Arkiv, Redigera, Visa, Dokument, Markering, Mät, Fönster) över en rad granskningsverktyg, {{key:Q}} för en utropsruta, {{key:H}} för överstrykningsverktyget, {{key:N}} för en polygon och mätningarna på {{key:Alt+Shift}} med en bokstav. Vilken tangent som helst kan också ändras där. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).
:::

Hela listan finns i [Tangentbord och mus](topic:keyboard).

## Saker som fungerar annorlunda än du kanske förväntar dig

- **Verktygen förblir på.** Efter ett moln ritar du fortfarande moln. {{key:Esc}} en gång rensar markeringen, två gånger återgår du till {{ui:Markera}}.
- **Text och utropsrutor behöver text.** Avslutar du utan något skrivet läggs ingen markering till. Noteringar lämnas tomma.
- **Mätningar behöver en skala först.** {{ui:Längd}} och {{ui:Area}} byter till {{ui:Kalibrera}} på ett okalibrerat blad och återgår efteråt.
- **Kommentarer från andra program.** Rektanglar, ellipser, linjer, polylinjer, polygoner, bläck, textrutor och klisterlappar som gjorts någon annanstans blir redigerbara MarkupCraft-markeringar och skrivs om på MarkupCraft:s sätt när du sparar (utseendet kan ändras något). Textöverstrykningar, andra programs stämplar och andra speciella typer förblir skrivskyddade: du kan svara på dem, men inte ändra dem.
- **Tecken utanför västeuropeiska bokstäver** skrivs ut som "?" i den sparade PDF-filen. Se [Spara den markerade PDF-filen](topic:save-the-marked-up-pdf).
- **Stämpeldatum** använder UTC, så en stämpel som gjorts sent på kvällen i Amerika kan visa morgondagens datum.
- **Mätningar följer med** som vanliga mätkommentarer, och varje kalibrerat blad behåller sin skala, så ett program som läser PDF-mätningar kan oftast visa dem. Exakt beteende beror på programmet.

## Använda båda

Du kan gå fram och tillbaka. Kommentarer som gjorts någon annanstans öppnas i MarkupCraft, och den "(marked up)" PDF-filen öppnas i andra PDF-program med alla markeringar, svar och statusar synliga. Det som bara MarkupCraft läser tillbaka (åtgärdens ansvarige och förfallodatum, postens status) sparas i filen för MarkupCraft.
