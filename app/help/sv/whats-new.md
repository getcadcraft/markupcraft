---
title: Nyheter i 0.9
summary: Anteckningar och en urklippsyta som aldrig skrivs ut, krypterade privata anteckningar och en ren kopia till kunden, batchlänkar för en hel ritningssats, ett Båge-verktyg med tio metoder, följning av en annan granskare i Live och en rättning för borttagna markeringar som ligger kvar i den sparade PDF-filen.
keywords: nyheter, vad är nytt, 0.9, versionsnoteringar, ändringslogg, anteckningar, urklippsyta, privata anteckningar, lösenord, krypterad, dölj anteckningar, visa anteckningar, ren kopia, ögonblicksbild, batchlänkar, bladhänvisningar, länka blad, titelruta, bladnummer, tillägg, numrera om, pdf-länk, båge, bågmetoder, trepunktsbåge, radie, följ, följ mig, live, klassvy, personlista, borttagen markering, verktygstips, flikrubriker, 0.8, 0.8.1, version, nya funktioner, uppgift, uppgifter, ansvarig, förfallodag, försenad, kontrollera nu, vad som ändrats, revisioner, jämför, röstanteckning, beslut, redline, svarsfil, ritare, assistent, mcp, problem, språk, indataenheter, pekplatta, verktygsfältsrader, egenskapsrutnät, uppdatering
from: dbdd7ed4
---

Det här är vad som ändrats i MarkupCraft 0.9, jämfört med 0.8.1. Huvudidén är att dina arbetsanteckningar stannar utanför sidan som kunden får, och att en hel ritningssats kan länkas på ett enda pass.

## Nytt

### Anteckningar, urklippsytan och privata anteckningar

- **Urklippsytan.** Området runt varje blad är ett skrivbord: allt som ritas, skrivs eller klistras in bredvid bladet är en anteckning och skrivs aldrig ut. Välj {{ui:Visa urklippsytan}} för att zooma ut för att få plats, eller {{ui:Ögonblicksbild till urklippsytan}}, dra en ruta och sedan {{ui:Till urklippsytan}} för att lägga en bild av en del av ritningen bredvid bladet. En ögonblicksbild är en bild och ändras inte när bladet ändras. Se [Anteckningar, urklippsytan och privata anteckningar](topic:notes-and-pasteboard).
- **Visa och dölj anteckningar.** Valfri markering kan vara en anteckning: ange {{ui:Nya markeringar är}} i fliken {{ui:Anteckningar}}, eller {{ui:Denna markering är}} i {{ui:Egenskaper}}. {{key:Shift+H}} eller omkopplaren {{ui:Anteckningar}} under bladet döljer och visar alla anteckningar på en gång. Anteckningar utelämnas vid utskrift, platta kopior, listor och exporter, och andra PDF-läsare visar dem inte. Din sparade PDF behåller dem till nästa gång du öppnar den i MarkupCraft.
- **Privata anteckningar.** Välj {{ui:Ange ett lösenord}} och gör sedan en markering till {{ui:En privat anteckning}}. Den krypteras i filen med ett lösenord på minst 10 tecken, och det finns ingen återställning: ingen, inte heller vi, kan öppna den utan lösenordet. {{ui:Lås}} lägger undan privata anteckningar; {{ui:Förbli upplåst på den här enheten}} är avstängt som standard.
- **Spara en ren kopia.** {{ui:Spara en ren kopia}} tar bort varje anteckning, privat anteckning och allt på urklippsytan. Använd den för filen som går till kunden.

### Länka en hel sats

- **Batchlänkar.** Välj {{ui:Sidor}} › {{ui:Batchlänkar…}}, eller {{ui:Länka bladhänvisningar…}} under {{ui:Sök text}} i panelen {{ui:Blad}}. Steg 1 listar varje blads nummer och namn så som de läses från dess titelruta; rätta de som är fel. Steg 2 listar de hänvisningar som hittats, till exempel `3/A-501` eller `DETAIL 2 ON A-501`. {{ui:Blir länkad}} visar bladet och vyn för varje, {{ui:Inte länkad}} visar nummer som inget öppet blad har, och {{ui:Skapa länkarna}} skapar alla i ett enda steg att ångra. Kör den igen efter ett tillägg eller en omnumrering; länkar du gjort för hand ändras aldrig. En länk med en vy sparas som en PDF-länk, så andra läsare öppnar detaljen också. Se [Bladlänkar](topic:sheet-links).

### Ritning

- **Båge, tio metoder.** Verktyget {{ui:Båge}} ({{key:O}}) har nu en ruta {{ui:Bågmetod}} över sidan med tio sätt att rita en båge, och vinkel, längd, radie och riktning kan klickas eller skrivas. Se [Rita en båge på tio sätt](topic:draw-an-arc).

### Att arbeta tillsammans

- **Följ en granskare.** I en Live-session välj {{ui:Följ}} bredvid en persons namn så rör sig din vy med deras; panorering eller zoomning själv stoppar det. Värden kan välja {{ui:Be alla följa mig}}. Personlistan visar varje persons färg, namn, bladet de är på och när deras senaste ändring gjordes. Se [Följ en annan granskare i en Live-session](topic:follow-in-live).

## I alla appar

- Verktygstips är Bootstrap-tooltips, starttipset kan stängas, flikraderna rullar när de flödar över, och webbläsarens flikrubriker lyder `<dokument> — MarkupCraft | CadCraft`.
- En panel med flera avsnitt öppnar ett och stänger de andra (ett lås bredvid pekaren håller ett öppet); en inställningsomkopplare stänger av detta.
- Varje app startar från en standardsamling av biblioteksobjekt.
- Vikt- och temperaturenheter finns i enhetsinställningarna.

## Rättat

- **Borttagna markeringar är inte längre läsbara i den sparade PDF-filen.** Sparning tog tidigare bort en raderad eller omskriven annotering från sin sida men lämnade objektet, med dess text, kvar i filen. Nu tar sparningen bort de objekten. Filer sparade av tidigare byggen innehåller dem fortfarande tills du sparar dem igen.

## Ärliga begränsningar

- Batchlänkar testades på våra egna testsatser. Riktiga satser ritar bubblor på många sätt, så på en kundsats kan vissa vyer missas. Skannade blad behöver {{ui:Läs text (OCR)…}} först.
- Anteckningar, privata anteckningar och urklippsytan testades i en headless-webbläsare och i våra egna filer, inte med en stor riktig vektorsats och inte i en riktig tvåpersons Live-session. Att byta lösenord är inte byggt. Byggen äldre än 0.9 visar inte anteckningar.
- Klassvyn är personlistan; den har inte prövats med en riktig lärare och riktiga elever.
- Språk som inte är engelska är maskinutkast tills en infödd talare har läst dem.
- Windows-installationsprogram är inte kodsignerade (Mer information, sedan Kör ändå); macOS-diskavbildningen är inte notariserad (högerklicka, sedan Öppna).

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrats i MarkupCraft 0.8 och 0.8.1, jämfört med 0.7. Det stora nya är att en markering kan vara en uppgift som någon, eller din egen assistent, utför, och som stänger sig själv när ritningen verkligen ändras.

### Nytt

**Markeringar som gör något**

- **Gör en markering till en uppgift.** Markera en eller flera markeringar, öppna fliken {{ui:Uppgifter}} och välj {{ui:Gör markerade till en uppgift}}. En uppgift har en titel, en person eller din anslutna assistent som utför den, en valfri förfallodag och ett tillstånd, och den behåller sin plats på bladet och sin tråd. Se [Gör en markering till en uppgift](topic:markups-that-act).
- **Uppgifter som stänger sig själva.** En uppgift kan bevaka ritningen inuti sin markering. Öppna en nyare revision av bladet och välj {{ui:Kontrollera nu}}: om linjerna i området ändrats mer än ett hårstrå markeras uppgiften som Done, dess markering blir Completed, och en anteckning i tråden säger vad som ändrats. En ny datumstämpel, eller linjer som flyttats mindre än 1,5 punkter, räknas inte. En uppgift kan i stället bevaka ett modellelement: din assistent rapporterar elementet med `tasks_check`, och en senare rapport som skiljer sig, eller ett borttaget element, stänger uppgiften. Ett steg att ångra öppnar den igen.
- **Hitta arbetet.** Filtrera listan {{ui:Uppgifter}} efter tillstånd och efter vem den är för, inklusive {{ui:Försenad}}; välj {{ui:Tilldelad}}, och sedan {{ui:Assistent}} för att se vad som väntar på din assistent. En uppgift som passerat sin förfallodag visas som en varning i panelen Problem. {{ui:CSV}} exporterar listan. Uppgifter sparas i PDF-filen tillsammans med markeringen och färdas genom Live som andra markeringsegenskaper.

**Vad som ändrats, som en enkel lista**

- **Lista ändringarna.** Öppna fliken {{ui:Jämför}}, välj sedan {{ui:Jämför en hel sats}}, välj den tidigare och den senare filen och välj {{ui:Lista ändringarna}}. Listan börjar med en räkning och går sedan igenom varje ändrat blad, med störst ändring först: var på bladet, hur stor den är (i verkliga enheter och tum på papperet för ett kalibrerat blad), om linjer lagts till eller tagits bort, hur många markeringar som finns där, och vilka ord som dök upp eller försvann. {{ui:Kopiera listan}} lägger den på urklipp och {{ui:CSV}} skriver en rad per ändring. Se [Lista vad som ändrats mellan revisioner](topic:what-changed-in-words).

**Röstanteckningar och beslut**

- **Röstanteckningar.** I fliken {{ui:Anteckningar}} välj {{ui:Spela in en röstanteckning}}, och sedan {{ui:Stoppa inspelningen}}; inspelningar stoppar av sig själva efter två minuter. Anteckningen fästs i bladets mitt, du drar den dit den hör hemma och skriver en bildtext i {{ui:Egenskaper}}, och {{ui:Spela upp}} i listan spelar upp den. Inspelningen sparas i PDF-filen.
- **Beslut.** {{ui:Fäst ett beslut}} skriver en eller två meningar på bladet. Om det ersätter ett tidigare beslut väljer du det under {{ui:Det ersätter}}: det gamla finns kvar, markerat Replaced, och pekar på det nya. Ett steg att ångra tar bort det. Se [Fäst röstanteckningar och beslut på ett blad](topic:voice-notes-and-decisions).

**Redline till revision**

- **Skicka och svara.** I fliken {{ui:Uppgifter}} öppna {{ui:Redline till revision}}, skriv in revisionen markeringarna gäller mot och välj {{ui:Exportera redlinefil}}. Du får en `.redline.json`-fil med ett objekt per öppen markering: blad, position (som andelar av bladet, så att en omplottning i en annan storlek fortfarande stämmer), ord, författare, tråd och dess uppgift. Den som ritar ändringarna svarar Accepted, Rejected eller Done i en `.redline-answers.json`-fil; {{ui:Läs in svarsfil…}} ger varje markering den statusen och ritarens anteckning, som ett steg att ångra. Se [Skicka markeringar till ritaren som en redline](topic:redline-to-revision).

**AI-assistenter**

- **Fler verktyg.** En assistent du anslutit via CadCraft Studio kan lista uppgifter (`tasks_list`), skapa eller ändra en (`task_set`), ta bort uppgiften (`task_clear`), kontrollera en mot en nyare revision eller ett element (`tasks_check`) och läsa den enkla listan över ändringar mellan två öppna ritningssatser (`revisions_changes`). Den får bara de verktyg du bockat för under omkopplaren Assistenter, och varje ändring är ett steg att ångra. Se [Använd MarkupCraft med en AI-assistent](topic:use-with-ai-assistants).

### I alla appar

- **Språk.** CadCraft Studio har nu 54 språk. Tio är nya: litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska. Alla icke-engelska språk är maskinutkast tills en infödd talare har läst dem.
- **Indataenheter.** {{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Indataenheter}} avgör vad en pekplatta, musens sidoknappar, en penna, fingertryck, en 3D-mus, en handkontroll eller en MIDI-kontroller gör, för alla appar eller bara för den här. Tills du ändrar något fungerar varje enhet som förut. Se [Använd en pekplatta, 3D-mus eller kontroller](common:input-devices).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} har {{ui:Radbryt}} (standard), {{ui:2 rader}} och {{ui:1 rad}}, så att ritningen får mer plats. Se [Ordna panelerna](common:arrange-panels).
- **Egenskapsrutnät.** Stilfälten för en markering använder det gemensamma rutnätet, med hopfällbara kategorier och kolumner för namn och värde.
- **Panelen Problem.** Varningar från appen, till exempel en försenad uppgift, samlas i en panel för Problem.
- **Live och tillägg.** Live-sessioner beskrivs i [Arbeta tillsammans live](common:work-together-live); listan över tillägg som följer ditt konto finns i [Tillägg och din kontolista](common:addons-basics).
- **Anslut din AI.** CadCraft Studio är navet för din egen assistent: anslut en gång för alla åtta apparna. Apparna innehåller ingen egen AI.

### Rättat i 0.8.1

- **Studio kan byta språk medan den körs.** Förut stannade skrivbordsappen och de paketerade utgåvorna på engelska. Det här är ännu inte testat på alla plattformar: säg till om språket inte ändras.
- Studio 0.8-installationer erbjuds 0.8.1 via {{ui:Inställningar}} › {{ui:Uppdateringar}}.

### Inte i den här versionen ännu

- **Inte kodsignerad.** Windows-installationsprogrammen och macOS-.dmg-filen har ännu ingen signatur. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac, högerklicka på CadCraft Studio och välj {{ui:Öppna}}. Butiksversioner är på is.
- **Anslut din AI är ofullständig på vissa punkter.** Anslutning med ett klick i Studio, den hostade kopplingen för webbläsarassistenter och din egen API-nyckel i Studio utlovas inte för den här utgåvan. Uppgiftsloopen har testats, men ännu inte med en riktig assistent.
- **Uppgiftskontroller kräver samma sidstorlek.** Ett blad som omplottas i en annan storlek matchar inte, så dess uppgifter stängs inte. Blad paras ihop efter bladnummer, annars efter sidans position.
- **Röstanteckningar är bara inspelningar.** Det finns ingen avskrift, och en assistent ser en antecknings längd, författare och bildtext, inte ljudet. Inspelning testades med en falsk mikrofon i en headless-webbläsare; en riktig mikrofon på telefon, surfplatta eller bärbar dator återstår att kontrollera.
- **Kalkylblad och motiveringar i en PDF** sparas i en privat post i filen. En äldre MarkupCraft ignorerar den posten och tar bort den nästa gång den sparar filen, så öppna och spara en sådan fil med 0.8 eller senare.
- **Ritarens sida av redlines.** Att CadCraft läser redline-filen och svarar på den är inte byggt ännu.
- **Andra språk.** Tamils appfält flödar över med 528 px.

Allt annat finns i [Vad som inte är byggt ännu](topic:not-built-yet). För versionen före den här, se [Nyheter i 0.7](topic:whats-new-0-7).
