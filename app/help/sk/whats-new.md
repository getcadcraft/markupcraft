---
title: Novinky vo verzii 0.9
summary: Poznámky a pracovná plocha, ktoré sa nikdy netlačia, šifrované súkromné poznámky a čistá kópia pre klienta, dávkové prepojenia pre celú sadu výkresov, nástroj Oblúk s desiatimi spôsobmi, sledovanie iného kontrolóra v relácii naživo a oprava zmazaných značiek, ktoré zostávali v uloženom PDF.
keywords: novinky, čo je nové, 0.9, poznámky k vydaniu, zoznam zmien, poznámky, pracovná plocha, súkromné poznámky, heslo, šifrované, skryť poznámky, zobraziť poznámky, čistá kópia, snímka, dávkové prepojenia, výnosy na listoch, prepojenie listov, popisové pole, číslo listu, dodatok, prečíslovanie, odkaz pdf, oblúk, spôsoby oblúka, oblúk tromi bodmi, polomer, sledovať, sledovať ma, naživo, zoznam ľudí, zmazaná značka, popisy, názvy kariet, novinky, 0.8, 0.8.1, verzia, nové funkcie, úloha, úlohy, zodpovedná osoba, termín, po termíne, skontrolovať teraz, čo sa zmenilo, revízie, porovnať, hlasová poznámka, rozhodnutie, červené opravy, súbor odpovedí, kreslič, asistent, mcp, problémy, jazyky, vstupné zariadenia, touchpad, riadky panela nástrojov, mriežka vlastností, aktualizácia
from: dbdd7ed4
---

Toto je zmena vo verzii MarkupCraft 0.9 oproti 0.8.1. Hlavná myšlienka je, že vaše pracovné poznámky zostanú mimo strany, ktorú dostane klient, a celú sadu výkresov možno prepojiť jedným prechodom.

## Nové

### Poznámky, pracovná plocha a súkromné poznámky

- **Pracovná plocha.** Oblasť okolo každého listu je stôl: všetko, čo nakreslíte, napíšete alebo vložíte vedľa listu, je poznámka a nikdy sa netlačí. Zvoľte {{ui:Show the pasteboard}} na oddialenie kvôli priestoru, alebo {{ui:Snapshot to the pasteboard}}, potiahnite rámček a potom {{ui:To the pasteboard}}, aby sa obrázok časti výkresu dostal vedľa listu. Snímka je obrázok a nemení sa, keď sa mení list. Pozri [Poznámky, pracovná plocha a súkromné poznámky](topic:notes-and-pasteboard).
- **Zobrazenie a skrytie poznámok.** Každá značka môže byť poznámka: nastavte {{ui:New markups are}} na karte {{ui:Notes}}, alebo {{ui:This markup is}} vo {{ui:Properties}}. {{key:Shift+H}} alebo prepínač {{ui:Notes}} pod listom skryje a zobrazí všetky poznámky naraz. Poznámky sa nezahŕňajú do tlače, sploštených kópií, zoznamov ani exportov a iné čítačky PDF ich nezobrazujú. Vaše uložené PDF si ich ponechá na ďalšie otvorenie v MarkupCraft.
- **Súkromné poznámky.** Zvoľte {{ui:Set a passphrase}}, potom urobte značku {{ui:A private note}}. Je zašifrovaná v súbore heslom aspoň 10 znakov a neexistuje obnova: nikto vrátane nás ju nemôže otvoriť bez hesla. {{ui:Lock}} odloží súkromné poznámky; {{ui:Stay unlocked on this device}} je predvolene vypnuté.
- **Uložiť čistú kópiu.** {{ui:Save a clean copy}} odstráni každú poznámku, súkromnú poznámku a všetko na pracovnej ploche. Použite ju pre súbor, ktorý ide klientovi.

### Prepojenie celej sady

- **Dávkové prepojenia.** Zvoľte {{ui:Pages}} › {{ui:Batch links…}}, alebo {{ui:Link sheet callouts…}} pod {{ui:Find text}} v paneli {{ui:Sheets}}. Krok 1 vypíše číslo a názov každého listu tak, ako sú načítané z jeho popisového poľa; opravte chybné. Krok 2 vypíše nájdené výnosy, napríklad `3/A-501` alebo `DETAIL 2 ON A-501`. {{ui:Will link}} ukáže list a pohľad pre každý, {{ui:Not linked}} ukáže čísla, ktoré žiadny otvorený list nemá, a {{ui:Create the links}} ich vytvorí všetky v jednom kroku späť. Po dodatku alebo prečíslovaní to spustite znova; odkazy, ktoré ste vytvorili ručne, sa nikdy nemenia. Odkaz s pohľadom sa uloží ako odkaz PDF, takže aj iné čítačky otvoria detail. Pozri [Odkazy na listy](topic:sheet-links).

### Kreslenie

- **Oblúk, desať spôsobov.** Nástroj {{ui:Arc}} ({{key:O}}) má teraz nad stranou okno {{ui:Arc method}} s desiatimi spôsobmi kreslenia oblúka; uhol, dĺžku, polomer a smer možno klikať alebo zadávať. Pozri [Nakreslenie oblúka desiatimi spôsobmi](topic:draw-an-arc).

### Spolupráca

- **Sledovanie kontrolóra.** V relácii naživo zvoľte {{ui:Follow}} vedľa mena osoby a váš pohľad sa posúva s jej pohľadom; vlastné posúvanie alebo priblíženie ho zastaví. Hostiteľ môže zvoliť {{ui:Ask everyone to follow me}}. Zoznam ľudí ukazuje farbu každej osoby, meno, list, na ktorom je, a kedy bola jej posledná úprava. Pozri [Sledovanie iného kontrolóra v relácii naživo](topic:follow-in-live).

## Vo všetkých aplikáciách

- Popisky (tooltipy) sú Bootstrap tooltipy, úvodný tip sa dá zavrieť, pásy kariet sa posúvajú, keď pretečú, a názvy kariet prehliadača sú v tvare `<document> — MarkupCraft | CadCraft`.
- Panel s viacerými sekciami otvorí jednu a ostatné zatvorí (zámok vedľa šípky nechá jednu otvorenú); prepínač v nastaveniach to vypne.
- Každá aplikácia sa spustí s predvolenou zbierkou objektov knižnice.
- Jednotky hmotnosti a teploty sú dostupné v nastaveniach jednotiek.

## Opravené

- **Odstránené značky už nezostávajú čitateľné v uloženom PDF.** Uloženie predtým odstránilo zmazanú alebo prepísanú anotáciu zo strany, ale objekt s jej textom zostal v súbore. Teraz uloženie tieto objekty odstráni. Súbory uložené staršími zostavami ich obsahujú, kým ich znovu neuložíte.

## Čestné obmedzenia

- Dávkové prepojenia boli vyskúšané na našich vlastných testovacích sadách. Skutočné sady kreslia bubliny mnohými spôsobmi, takže na klientskej sade môžu byť niektoré pohľady prehliadnuté. Skenované listy najprv potrebujú {{ui:Read text (OCR)…}}.
- Poznámky, súkromné poznámky a pracovná plocha boli testované v bezhlavom prehliadači a na našich vlastných súboroch, nie na veľkej skutočnej vektorovej sade a nie v skutočnej relácii naživo dvoch ľudí. Zmena hesla nie je hotová. Zostavy staršie ako 0.9 poznámky nezobrazujú.
- Zobrazenie tried je zoznam ľudí; nebolo vyskúšané so skutočným učiteľom a študentmi.
- Jazyky iné ako angličtina sú strojové koncepty, kým ich nepreskúma rodený hovoriaci.
- Inštalátory pre Windows nie sú podpísané kódom (Viac informácií, potom Spustiť aj tak); obraz disku pre macOS nie je notarizovaný (kliknutie pravým tlačidlom, potom Otvoriť).

## Staršie: 0.8 a 0.8.1

Toto je zmena vo verziách MarkupCraft 0.8 a 0.8.1 oproti 0.7. Hlavnou novinkou je, že značka môže byť úloha, ktorú vykoná niekto alebo váš vlastný asistent, a ktorá sa sama uzavrie, keď sa výkres skutočne zmení.

### Nové

**Značky, ktoré konajú**

- **Značka ako úloha.** Vyberte jednu alebo viac značiek, otvorte kartu {{ui:Tasks}} a zvoľte {{ui:Make selected a task}}. Úloha má názov, osobu alebo vášho pripojeného asistenta, ktorý ju vykoná, voliteľný termín a stav; drží si miesto na liste a svoje vlákno. Pozri [Urobenie značky úlohou](topic:markups-that-act).
- **Úlohy, ktoré sa uzavrú samy.** Úloha môže sledovať kresbu vo svojej značke. Otvorte novšiu revíziu listu a zvoľte {{ui:Check now}}: ak sa čiary v tej oblasti zmenili o viac než nepatrne, úloha sa označí ako Hotovo, značka sa stane Dokončenou a poznámka vo vlákne povie, čo sa zmenilo. Nový dátumový štítok alebo čiary, ktoré sa posunuli menej ako o 1,5 bodu, sa nerátajú. Úloha môže namiesto toho sledovať prvok modelu: váš asistent ho nahlási nástrojom `tasks_check` a neskoršie hlásenie, ktoré sa líši, alebo odstránený prvok úlohu uzavrie. Jeden krok späť ju znovu otvorí.
- **Nájdite prácu.** Filtrujte zoznam {{ui:Tasks}} podľa stavu a podľa toho, pre koho je, vrátane {{ui:Overdue}}; zvoľte {{ui:Assigned to}}, potom {{ui:Assistant}}, aby ste videli, čo čaká na vášho asistenta. Úloha po termíne sa zobrazí ako upozornenie v paneli problémov. {{ui:CSV}} exportuje zoznam. Úlohy sa ukladajú v PDF so značkou a cestujú cez relácie naživo rovnako ako iné vlastnosti značiek.

**Čo sa zmenilo, ako prostý zoznam**

- **Zoznam zmien.** Otvorte kartu {{ui:Compare}}, potom {{ui:Compare a whole set}}, vyberte skorší a neskorší súbor a zvoľte {{ui:List the changes}}. Zoznam začína počtom, potom pokrýva každý zmenený list, od najväčšej zmeny: kde na liste, aká veľká je (v reálnych jednotkách aj v palcoch na papieri na kalibrovanom liste), či boli čiary pridané alebo odstránené, koľko značiek tam je a ktoré slová sa objavili alebo zmizli. {{ui:Copy the list}} ho dá do schránky a {{ui:CSV}} zapíše jeden riadok na zmenu. Pozri [Zoznam zmien medzi revíziami](topic:what-changed-in-words).

**Hlasové poznámky a rozhodnutia**

- **Hlasové poznámky.** Na karte {{ui:Notes}} zvoľte {{ui:Record a voice note}}, potom {{ui:Stop recording}}; nahrávky sa zastavia samy po dvoch minútach. Poznámka je pripnutá v strede listu, potiahnete ju tam, kam patrí, popis napíšete vo {{ui:Properties}} a {{ui:Play}} v zozname ju prehrá. Nahrávka sa uloží do PDF.
- **Rozhodnutia.** {{ui:Pin a decision}} zapíše na list jednu alebo dve vety. Ak nahrádza skoršie rozhodnutie, vyberte ho v {{ui:It replaces}}: staré zostane, označené ako Nahradené, a odkazuje na nové. Jeden krok späť ho vráti. Pozri [Pripnutie hlasových poznámok a rozhodnutí na list](topic:voice-notes-and-decisions).

**Červené opravy do revízie**

- **Odoslanie a odpoveď.** Na karte {{ui:Tasks}} otvorte {{ui:Redline to revision}}, zadajte revíziu, voči ktorej sú značky, a zvoľte {{ui:Export redline file}}. Dostanete súbor `.redline.json` s jednou položkou na každú otvorenú značku: list, poloha (ako zlomky listu, takže nové vykreslenie v inej veľkosti sa stále zhoduje), slová, autor, vlákno a jeho úloha. Kto kreslí zmeny, odpovie Prijaté, Zamietnuté alebo Hotovo v súbore `.redline-answers.json`; {{ui:Load answers file…}} dá každej značke tento stav a poznámku kreslíča ako jeden krok späť. Pozri [Odoslanie značiek kreslíčovi ako červených opráv](topic:redline-to-revision).

**AI asistenti**

- **Viac nástrojov.** Asistent, ktorého ste pripojili cez CadCraft Studio, môže vypísať úlohy (`tasks_list`), vytvoriť alebo zmeniť jednu (`task_set`), úlohu odobrať (`task_clear`), skontrolovať ju voči novšej revízii alebo prvku (`tasks_check`) a prečítať prostý zoznam zmien medzi dvoma otvorenými sadami výkresov (`revisions_changes`). Dostane len nástroje, ktoré ste označili pod prepínačom Asistenti, a každá zmena je jeden krok späť. Pozri [Používanie MarkupCraft s AI asistentom](topic:use-with-ai-assistants).

### Vo všetkých aplikáciách

- **Jazyky.** CadCraft Studio má teraz 54 jazykov. Desať je nových: litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina. Všetky neanglické sú strojové koncepty, kým ich nepreskúma rodený hovoriaci.
- **Vstupné zariadenia.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} nastaví, čo robí touchpad, bočné tlačidlá myši, pero, ťuknutia prstom, 3D myš, herný ovládač alebo MIDI ovládač, pre každú aplikáciu alebo len pre túto. Kým nič nezmeníte, každé zariadenie funguje ako predtým. Pozri [Používanie touchpadu, 3D myši alebo ovládača](common:input-devices).
- **Riadky panela nástrojov.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} má {{ui:Wrap}} (predvolené), {{ui:2 rows}} a {{ui:1 row}}, takže kresba má viac miesta. Pozri [Usporiadanie panelov](common:arrange-panels).
- **Mriežka vlastností.** Polia Štýl značky používajú spoločnú mriežku so zbaliteľnými kategóriami a stĺpcami názvov a hodnôt.
- **Panel problémov.** Upozornenia z aplikácie, napríklad úloha po termíne, sa zbierajú v jednom paneli problémov.
- **Live a doplnky.** Relácie naživo sú opísané v [Spolupráca naživo](common:work-together-live); zoznam doplnkov, ktorý nasleduje váš účet, je v [Doplnky a zoznam vášho účtu](common:addons-basics).
- **Pripojte svoju AI.** CadCraft Studio je centrum pre vášho vlastného asistenta: pripojte ho raz pre všetkých osem aplikácií. Aplikácie nemajú vlastnú AI.

### Opravené v 0.8.1

- **Studio môže prepínať jazyk počas behu.** Predtým desktopová aplikácia a zabalené vydania zostali v angličtine. Ešte nie je testované na každej platforme: povedzte nám, ak sa jazyk nezmení.
- Inštalácie Studio 0.8 dostanú 0.8.1 cez {{ui:Settings}} › {{ui:Updates}}.

### Ešte nie v tejto verzii

- **Nie je podpísané kódom.** Inštalátory pre Windows a obraz .dmg pre macOS zatiaľ nemajú podpis. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:More info}}, potom {{ui:Run anyway}}. Na Macu kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Open}}. Verzie pre obchody sú pozastavené.
- **Pripojenie AI je miestami nedokončené.** Pripojenie jedným kliknutím v Studiu, hostovaný konektor pre webových asistentov a váš vlastný API kľúč v Studiu nie sú sľúbené pre toto vydanie. Slučka úloh bola testovaná, ale zatiaľ nie so skutočným asistentom.
- **Kontroly úloh vyžadujú rovnakú veľkosť strany.** List prevykreslený v inej veľkosti sa nezhoduje, takže jeho úlohy sa nezatvoria. Listy sa párujú podľa čísla listu, inak podľa polohy strany.
- **Hlasové poznámky sú len nahrávky.** Nie je prepis a asistent vidí dĺžku poznámky, autora a popis, nie zvuk. Nahrávanie bolo vyskúšané s falošným mikrofónom v bezhlavom prehliadači; skutočný mikrofón na telefóne, tablete alebo notebooku ešte treba overiť.
- **Výpočtové listy a dôvody v PDF** sa uchovávajú v súkromnom zázname súboru. Staršie MarkupCraft tento záznam ignoruje a pri ďalšom uložení súboru ho odstráni, preto takýto súbor otvorte a uložte s verziou 0.8 alebo novšou.
- **Kreslič a jeho odpoveď na červené opravy.** Čítanie súboru červených opráv v CadCraft a odpovedanie na neho ešte nie je hotové.
- **Ostatné jazyky.** Lišta aplikácie v tamilčine pretečie o 528 px.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Pre vydanie pred týmto pozri [Novinky vo verzii 0.7](topic:whats-new-0-7).
