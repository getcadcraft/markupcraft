---
title: Nytt i 0.8 och 0.8.1
summary: Markeringar som blir uppgifter och stänger sig själva, en enkel lista över vad som ändrats mellan revisioner, röstanteckningar och beslut på ritningen, redlinefiler för ritaren samt de gemensamma ändringarna i 0.8: indataenheter, verktygsfältsrader, Problem och fler språk.
keywords: nytt, vad är nytt, versionsinformation, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, uppgift, uppgifter, tilldelad, förfallodag, försenad, kontrollera nu, vad ändrades, revisioner, jämför, röstanteckning, beslut, redline, svarsfil, ritare, assistent, mcp, problem, språk, indataenheter, pekplatta, verktygsfältsrader, egenskapsrutnät, uppdatera
from: 40368796
---

Det här är vad som ändrats i MarkupCraft 0.8 och 0.8.1, jämfört med 0.7. Den stora nyheten är att en markering kan vara en uppgift som någon, eller din egen assistent, utför, och som stänger sig själv när ritningen verkligen ändras.

## Nytt

### Markeringar som agerar

- **Gör en markering till en uppgift.** Markera en eller flera markeringar, öppna fliken {{ui:Tasks}} och välj {{ui:Make selected a task}}. En uppgift har en titel, en person eller din anslutna assistent som utför den, en valfri förfallodag och ett tillstånd, och den behåller sin plats på ritbladet och sin tråd. Se [Gör en markering till en uppgift](topic:markups-that-act).
- **Uppgifter som stänger sig själva.** En uppgift kan bevaka ritningen inom sin markering. Öppna en nyare revision av bladet och välj {{ui:Check now}}: om linjerna i det området ändrats mer än en hårsmån markeras uppgiften som Klar, dess markering blir Slutförd och en anteckning i tråden säger vad som ändrats. En ny datumstämpel, eller linjer som flyttats mindre än 1,5 punkter, räknas inte. En uppgift kan i stället bevaka ett modellelement: din assistent rapporterar elementet med `tasks_check`, och en senare rapport som skiljer sig, eller ett borttaget element, stänger uppgiften. Ett steg ångra öppnar den igen.
- **Hitta arbetet.** Filtrera listan {{ui:Tasks}} efter tillstånd och efter vem den är för, inklusive {{ui:Overdue}}. Välj {{ui:Assigned to}} och sedan {{ui:Assistant}} för att se vad som väntar på din assistent. En uppgift som passerat sin förfallodag visas som en varning i problempanelen. {{ui:CSV}} exporterar listan. Uppgifter sparas i PDF-filen tillsammans med markeringen och följer med via Live på samma sätt som andra markeringsegenskaper.

### Vad som ändrats, som en enkel lista

- **Lista ändringarna.** Öppna fliken {{ui:Compare}}, välj {{ui:Compare a whole set}}, välj den tidigare och den senare filen och välj {{ui:List the changes}}. Listan börjar med ett antal och tar sedan upp varje ändrat blad, med störst ändring först: var på bladet, hur stor den är (i verkliga enheter såväl som pappersstorlek i tum på ett kalibrerat blad), om linjer lagts till eller tagits bort, hur många markeringar som finns där och vilka ord som dykt upp eller försvunnit. {{ui:Copy the list}} lägger listan på urklippet och {{ui:CSV}} skriver en rad per ändring. Se [Lista vad som ändrats mellan revisioner](topic:what-changed-in-words).

### Röstanteckningar och beslut

- **Röstanteckningar.** Välj {{ui:Record a voice note}} i fliken {{ui:Notes}} och sedan {{ui:Stop recording}}. Inspelningar stoppas av sig själva efter två minuter. Anteckningen fästs i mitten av bladet, du drar den dit den hör hemma och skriver en bildtext i {{ui:Properties}}, och {{ui:Play}} i listan spelar upp den. Inspelningen sparas i PDF-filen.
- **Beslut.** {{ui:Pin a decision}} skriver en eller två meningar på bladet. Om det ersätter ett tidigare beslut väljer du det i {{ui:It replaces}}: det gamla finns kvar, markerat som Ersatt, och pekar på det nya. Ett steg ångra tar bort det. Se [Fäst röstanteckningar och beslut på ett blad](topic:voice-notes-and-decisions).

### Redline till revision

- **Skicka och svara.** Öppna {{ui:Redline to revision}} i fliken {{ui:Tasks}}, skriv in revisionen som markeringarna gäller mot och välj {{ui:Export redline file}}. Du får en fil `.redline.json` med ett objekt per öppen markering: blad, position (som andelar av bladet, så att en ny utskrift i en annan storlek fortfarande stämmer), ord, författare, tråd och dess uppgift. Den som ritar ändringarna svarar Accepterad, Avvisad eller Klar i en fil `.redline-answers.json`. {{ui:Load answers file…}} ger varje markering den statusen och ritarens kommentar, som ett enda steg att ångra. Se [Skicka markeringar till ritaren som en redline](topic:redline-to-revision).

### AI-assistenter

- **Fler verktyg.** En assistent som du anslutit via CadCraft Studio kan lista uppgifter (`tasks_list`), skapa eller ändra en (`task_set`), ta bort uppgiften (`task_clear`), kontrollera en mot en nyare revision eller ett element (`tasks_check`) och läsa den enkla listan över ändringar mellan två öppna plansatser (`revisions_changes`). Den får bara de verktyg du bockat i under reglaget Assistenter, och varje ändring är ett steg att ångra. Se [Använd MarkupCraft med en AI-assistent](topic:use-with-ai-assistants).

## I alla appar

- **Språk.** CadCraft Studio har nu 54 språk. Tio är nya: litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska. Alla icke-engelska språk är maskinella utkast tills en modersmålstalare har läst igenom dem.
- **Indataenheter.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} avgör vad en pekplatta, sidoknapparna på musen, en penna, fingertryckningar, en 3D-mus, en handkontroll eller en MIDI-kontroller gör, för alla appar eller bara för den här. Tills du ändrar något fungerar alla enheter som tidigare. Se [Använd pekplatta, 3D-mus eller kontroller](common:input-devices).
- **Verktygsfältsrader.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} har {{ui:Wrap}} (standard), {{ui:2 rows}} och {{ui:1 row}}, så att ritningen får mer plats. Se [Ordna panelerna](common:arrange-panels).
- **Egenskapsrutnät.** Stilfälten för en markering använder det gemensamma rutnätet, med hopfällbara kategorier och kolumner för etikett och värde.
- **Problempanelen.** Varningar från appen, till exempel en försenad uppgift, samlas i en gemensam problempanel.
- **Live och tillägg.** Live-sessioner beskrivs i [Arbeta tillsammans live](common:work-together-live). Listan över tillägg som följer ditt konto finns i [Tillägg och din kontolista](common:addons-basics).
- **Anslut din AI.** CadCraft Studio är navet för din egen assistent: anslut en gång för alla åtta apparna. Apparna har ingen egen AI.

## Åtgärdat i 0.8.1

- **Studio kan byta språk medan den körs.** Tidigare stannade skrivbordsappen och de packade utgåvorna på engelska. Detta är ännu inte testat på alla plattformar: säg till om språket inte ändras.
- Installationer av Studio 0.8 erbjuds 0.8.1 via {{ui:Settings}} › {{ui:Updates}}.

## Inte i den här versionen ännu

- **Inte kodsignerad.** Windows-installationsprogrammen och macOS-filen .dmg saknar ännu signatur. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:More info}} och sedan {{ui:Run anyway}}. På en Mac, högerklicka på CadCraft Studio och välj {{ui:Open}}. Butiksversioner är pausade.
- **Anslut din AI är delvis ofärdig.** Anslutning med ett klick i Studio, den värdbaserade kopplingen för webbläsarassistenter och din egen API-nyckel i Studio utlovas inte i den här versionen. Uppgiftsflödet har testats, men ännu inte med en riktig assistent.
- **Uppgiftskontroller kräver samma sidstorlek.** Ett blad som skrivs ut på nytt i en annan storlek matchar inte, så dess uppgifter stängs inte. Blad paras ihop efter bladnummer, annars efter sidans position.
- **Röstanteckningar är enbart inspelningar.** Det finns ingen transkribering, och en assistent ser en anteckningens längd, författare och bildtext, inte ljudet. Inspelning har prövats med en falsk mikrofon i en webbläsare utan gränssnitt; en riktig mikrofon på mobiltelefon, surfplatta eller bärbar dator återstår att kontrollera.
- **Kalkylblad och skäl i en PDF** sparas i en privat post i filen. En äldre MarkupCraft ignorerar den posten och tar bort den nästa gång den sparar filen, så öppna och spara en sådan fil med 0.8 eller senare.
- **Ritarens sida av redlines.** Att CadCraft läser redlinefilen och svarar på den är inte byggt ännu.
- **Andra språk.** Tamils appfält flödar över med 528 px.

Allt annat finns i [Det som inte är byggt ännu](topic:not-built-yet). För versionen före den här, se [Nytt i 0.7](topic:whats-new-0-7).
