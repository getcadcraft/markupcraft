---
title: Nyheter i 0.9 (tidigare)
summary: Anteckningar och en urklippsyta som aldrig skrivs ut, krypterade privata anteckningar och en ren kopia till kunden, batchlänkar för en hel ritningsuppsättning, ett Båge-verktyg med tio metoder, följning av en annan granskare i Live samt en rättning för borttagna markeringar som stannar kvar i den sparade PDF:en.
keywords: nyheter 0.9, tidigare version, nyheter, vad är nytt, 0.9, versionsnoteringar, ändringslogg, anteckningar, urklippsyta, privata anteckningar, lösenord, krypterad, dölj anteckningar, visa anteckningar, ren kopia, ögonblicksbild, batchlänkar, bladhänvisningar, länka blad, ritningshuvud, bladnummer, tillägg, numrera om, pdf-länk, båge, bågmetoder, trepunktsbåge, radie, följ, följ mig, live, klassvy, deltagarlista, borttagen markering, verktygstips, flikrubriker, ändringar, 0.8, 0.8.1, version, nya funktioner, uppgift, uppgifter, tilldelad, förfallodag, försenad, kontrollera nu, vad som ändrats, revisioner, jämför, röstanteckning, beslut, redline, svarsfil, ritare, assistent, mcp, problem, språk, indataenheter, styrplatta, verktygsfältsrader, egenskapsrutnät, uppdatering
from: aa3dfeb8
---

Detta är vad som ändrats i MarkupCraft 0.9, jämfört med 0.8.1. Huvudidén är att dina arbetsanteckningar stannar utanför sidan som kunden får, och att en hel ritningsuppsättning kan länkas i ett enda svep.

## Nytt

### Anteckningar, urklippsytan och privata anteckningar

- **Urklippsytan.** Området runt varje blad är ett skrivbord: allt som ritas, skrivs eller klistras in bredvid bladet är en anteckning och skrivs aldrig ut. Välj {{ui:Visa urklippsytan}} för att zooma ut och få plats, eller {{ui:Ögonblicksbild till urklippsytan}}, dra en ruta och välj sedan {{ui:Till urklippsytan}} för att lägga en bild av en del av ritningen bredvid bladet. En ögonblicksbild är en bild och ändras inte när bladet ändras. Se [Anteckningar, urklippsytan och privata anteckningar](topic:notes-and-pasteboard).
- **Visa och dölj anteckningar.** Vilken markering som helst kan vara en anteckning: ställ in {{ui:Nya markeringar är}} i fliken {{ui:Anteckningar}}, eller {{ui:Denna markering är}} i {{ui:Egenskaper}}. {{key:Shift+H}} eller omkopplaren {{ui:Anteckningar}} under bladet döljer och visar alla anteckningar samtidigt. Anteckningar utelämnas vid utskrift, plattade kopior, listor och export, och andra PDF-läsare visar dem inte. Din sparade PDF behåller dem nästa gång du öppnar den i MarkupCraft.
- **Privata anteckningar.** Välj {{ui:Ange ett lösenord}} och gör sedan en markering till {{ui:En privat anteckning}}. Den krypteras i filen med ett lösenord på minst 10 tecken, och det finns ingen återställning: ingen, inte heller vi, kan öppna den utan lösenordet. {{ui:Lås}} döljer privata anteckningar; {{ui:Förbli upplåst på den här enheten}} är avstängt som standard.
- **Spara en ren kopia.** {{ui:Spara en ren kopia}} tar bort varje anteckning, privat anteckning och allt på urklippsytan. Använd den för filen som går till kunden.

### Länka en hel uppsättning

- **Batchlänkar.** Välj {{ui:Sidor}} › {{ui:Batchlänkar…}}, eller {{ui:Länka bladhänvisningar…}} under {{ui:Sök text}} i panelen {{ui:Blad}}. Steg 1 listar varje blads nummer och namn så som de lästs från dess ritningshuvud; rätta de som är fel. Steg 2 listar de hänvisningar som hittats, till exempel `3/A-501` eller `DETAIL 2 ON A-501`. {{ui:Kopplas}} visar bladet och vyn för varje, {{ui:Ej kopplad}} visar nummer som inget öppet blad har, och {{ui:Skapa länkarna}} skapar alla i ett enda steg för ångra. Kör igen efter ett tillägg eller en omnumrering; länkar du gjort för hand ändras aldrig. En länk med en vy sparas som en PDF-länk, så att andra läsare öppnar detaljen också. Se [Bladlänkar](topic:sheet-links).

### Ritning

- **Båge, tio metoder.** Verktyget {{ui:Båge}} ({{key:O}}) har nu en ruta {{ui:Bågmetod}} över sidan med tio sätt att rita en båge, och vinkel, längd, radie och riktning kan klickas eller skrivas. Se [Rita en båge på tio sätt](topic:draw-an-arc).

### Arbeta tillsammans

- **Följ en granskare.** I en Live-session väljer du {{ui:Följ}} bredvid en persons namn, så flyttas din vy med deras; att själv panorera eller zooma stoppar det. Värden kan välja {{ui:Be alla följa mig}}. Deltagarlistan visar varje persons färg, namn, bladet de är på och när deras senaste ändring gjordes. Se [Följ en annan granskare i en Live-session](topic:follow-in-live).

## I alla appar

- Verktygstips är Bootstrap-verktygstips, starttipset kan stängas, flikraderna rullar när de inte ryms, och webbläsarens flikrubriker visar `<document> — MarkupCraft | CadCraft`.
- En panel med flera avsnitt öppnar ett och stänger de andra (ett lås bredvid markören håller ett öppet); en omkopplare i Inställningar stänger av detta.
- Varje app startar från en standardsamling biblioteksobjekt.
- Vikt- och temperaturenheter finns i enhetsinställningarna.

## Rättat

- **Borttagna markeringar finns inte längre kvar läsbara i den sparade PDF:en.** Vid sparning togs en raderad eller omskriven annotation bort från sin sida, men objektet, med sin text, blev kvar i filen. Nu tar spara bort dessa objekt. Filer som sparats av tidigare versioner innehåller dem fortfarande tills du sparar dem igen.

## Ärliga begränsningar

- Batchlänkar testades på våra egna testuppsättningar. Verkliga uppsättningar ritar bubblor på många sätt, så på en kunds uppsättning kan vissa vyer missas. Skannade blad behöver {{ui:Läs text (OCR)…}} först.
- Anteckningar, privata anteckningar och urklippsytan testades i en huvudlös webbläsare och i våra egna filer, inte med en stor verklig vektoruppsättning och inte i en verklig tvåpersons Live-session. Att byta lösenord är inte byggt. Versioner äldre än 0.9 visar inga anteckningar.
- Klassvyn är deltagarlistan; den har inte prövats med en verklig lärare och verkliga elever.
- Språk utöver engelska är maskinella utkast tills en modersmålstalare har läst dem.
- Windows-installationsprogrammen är inte kodsignerade (Mer information, sedan Kör ändå); macOS-diskavbildningen är inte notariserad (högerklicka, sedan Öppna).

## Tidigare: 0.8 och 0.8.1

Detta är vad som ändrats i MarkupCraft 0.8 och 0.8.1, jämfört med 0.7. Det stora nya är att en markering kan vara en uppgift som någon, eller din egen assistent, utför, och som stänger sig själv när ritningen verkligen ändras.

### Nytt

**Markeringar som agerar**

- **Gör en markering till en uppgift.** Markera en eller flera markeringar, öppna fliken {{ui:Uppgifter}} och välj {{ui:Gör markerade till en uppgift}}. En uppgift har en titel, en person eller din anslutna assistent som ska utföra den, ett valfritt förfallodatum och ett tillstånd, och den behåller sin plats på bladet och sin tråd. Se [Gör en markering till en uppgift](topic:markups-that-act).
- **Uppgifter som stänger sig själva.** En uppgift kan bevaka ritningen inuti sin markering. Öppna en nyare revision av bladet och välj {{ui:Kontrollera nu}}: om linjerna i området ändrats mer än en hårsmån markeras uppgiften som Klar, dess markering blir Slutförd och en anteckning i tråden säger vad som ändrats. Ett nytt datumstämpel, eller linjer som flyttats mindre än 1.5 punkter, räknas inte. En uppgift kan i stället bevaka ett modellelement: din assistent rapporterar elementet med `tasks_check`, och en senare rapport som skiljer sig, eller ett borttaget element, stänger uppgiften. Ett ångra-steg öppnar den igen.
- **Hitta arbetet.** Filtrera listan {{ui:Uppgifter}} efter tillstånd och efter vem den är för, inklusive {{ui:Försenad}}; välj {{ui:Tilldelad}} och sedan {{ui:Assistent}} för att se vad som väntar på din assistent. En uppgift som passerat sitt förfallodatum visas som en varning i problempanelen. {{ui:CSV}} exporterar listan. Uppgifter sparas i PDF:en tillsammans med markeringen och följer med via Live som andra markeringsegenskaper.

**Vad som ändrats, som en enkel lista**

- **Lista ändringarna.** Öppna fliken {{ui:Jämför}}, välj {{ui:Jämför en hel uppsättning}}, välj den tidigare och den senare filen och välj {{ui:Lista ändringarna}}. Listan börjar med ett antal och täcker sedan varje ändrat blad, störst ändring först: var på bladet, hur stor (i verkliga enheter såväl som pappertum på ett kalibrerat blad), om linjer lagts till eller tagits bort, hur många markeringar som sitter där och vilka ord som dök upp eller försvann. {{ui:Kopiera listan}} lägger den på urklippet och {{ui:CSV}} skriver en rad per ändring. Se [Lista vad som ändrats mellan revisioner](topic:what-changed-in-words).

**Röstanteckningar och beslut**

- **Röstanteckningar.** I fliken {{ui:Anteckningar}} väljer du {{ui:Spela in en röstanteckning}}, sedan {{ui:Stoppa inspelningen}}; inspelningar stannar av sig själva efter två minuter. Anteckningen fästs i bladets mitt, du drar den dit den hör hemma och skriver en bildtext i {{ui:Egenskaper}}, och {{ui:Spela upp}} i listan spelar upp den. Inspelningen sparas i PDF:en.
- **Beslut.** {{ui:Fäst ett beslut}} skriver en eller två meningar på bladet. Om det ersätter ett tidigare beslut väljer du det i {{ui:Det ersätter}}: det gamla finns kvar, markerat Ersatt, och pekar på det nya. Ett ångra-steg tar tillbaka det. Se [Fäst röstanteckningar och beslut på ett blad](topic:voice-notes-and-decisions).

**Redline till revision**

- **Skicka och svara.** I fliken {{ui:Uppgifter}} öppnar du {{ui:Redline till revision}}, skriver den revision markeringarna gäller mot och väljer {{ui:Exportera redlinefil}}. Du får en `.redline.json`-fil med ett objekt per öppen markering: blad, position (som andelar av bladet, så att en ny utskrift i annan storlek fortfarande stämmer), ord, författare, tråd och dess uppgift. Den som ritar ändringarna svarar Godkänd, Avvisad eller Klar i en `.redline-answers.json`-fil; {{ui:Läs in svarsfil…}} ger varje markering den statusen och ritarens anteckning, som ett enda ångra-steg. Se [Skicka markeringar till ritaren som en redline](topic:redline-to-revision).

**AI-assistenter**

- **Fler verktyg.** En assistent du anslöt via CadCraft Studio kan lista uppgifter (`tasks_list`), skapa eller ändra en (`task_set`), ta bort uppgiften (`task_clear`), kontrollera en mot en nyare revision eller ett element (`tasks_check`) och läsa den enkla listan över ändringar mellan två öppna plansatser (`revisions_changes`). Den får bara de verktyg du bockat för under omkopplaren Assistenter, och varje ändring är ett ångra-steg. Se [Använd MarkupCraft med en AI-assistent](topic:use-with-ai-assistants).

### I alla appar

- **Språk.** CadCraft Studio har nu 54 språk. Tio är nya: litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska. Alla de icke-engelska är maskinella utkast tills en modersmålstalare har läst dem.
- **Indataenheter.** {{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Indataenheter}} styr vad en styrplatta, musens sidoknappar, en penna, fingertryck, en 3D-mus, en spelkontroll eller en MIDI-kontroller gör, för alla appar eller bara för denna. Tills du ändrar något fungerar varje enhet som förut. Se [Använd en styrplatta, 3D-mus eller kontroller](common:input-devices).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} har {{ui:Radbryt}} (standard), {{ui:2 rader}} och {{ui:1 rad}}, så att ritningen får mer plats. Se [Ordna panelerna](common:arrange-panels).
- **Egenskapsrutnät.** Stilfälten för en markering använder det gemensamma rutnätet, med hopfällbara kategorier och kolumner för etikett och värde.
- **Problempanelen.** Varningar från appen, som en försenad uppgift, samlas i en gemensam problempanel.
- **Live och tillägg.** Live-sessioner beskrivs i [Arbeta tillsammans live](common:work-together-live); listan över tillägg som följer ditt konto finns i [Tillägg och din kontolista](common:addons-basics).
- **Anslut din AI.** CadCraft Studio är navet för din egna assistent: anslut en gång för alla åtta apparna. Apparna har ingen AI av egen.

### Rättat i 0.8.1

- **Studio kan byta språk medan den körs.** Tidigare stannade skrivbordsappen och de paketerade utgåvorna på engelska. Detta är ännu inte testat på alla plattformar: säg till om språket inte ändras.
- Studio 0.8-installationer erbjuds 0.8.1 via {{ui:Inställningar}} › {{ui:Uppdateringar}}.

### Inte i den här versionen ännu

- **Inte kodsignerad.** Windows-installationsprogrammen och macOS:s .dmg saknar signatur ännu. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac högerklickar du på CadCraft Studio och väljer {{ui:Öppna}}. Butiksversioner är pausade.
- **Anslut din AI är ofullständig på vissa ställen.** Anslutning med ett klick i Studio, den hostade kopplingen för webbläsarassistenter och din egen API-nyckel i Studio utlovas inte i den här versionen. Uppgiftsslingan har testats, men ännu inte med en verklig assistent.
- **Uppgiftskontroller kräver samma sidstorlek.** Ett blad som ritas om i en annan storlek matchar inte, så dess uppgifter stängs inte. Blad paras ihop efter bladnummer, annars efter sidposition.
- **Röstanteckningar är bara inspelningar.** Det finns ingen transkription, och en assistent ser en anteckningens längd, författare och bildtext, inte ljudet. Inspelning har testats med en falsk mikrofon i en huvudlös webbläsare; en verklig mikrofon på en telefon, surfplatta eller laptop återstår att kontrollera.
- **Kalkylblad och skäl i en PDF** sparas i en privat post i filen. En äldre MarkupCraft ignorerar den posten och tar bort den nästa gång den sparar filen, så öppna och spara en sådan fil med 0.8 eller senare.
- **Ritarens sida av redlines.** Att CadCraft läser redline-filen och svarar på den är inte byggt ännu.
- **Andra språk.** Tamils appfält flödar över med 528 px.

Allt annat finns i [Det som inte finns ännu](topic:not-built-yet). För versionen före den, se [Nyheter i 0.7](topic:whats-new-0-7).
