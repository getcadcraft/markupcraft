---
title: MarkupCraft su DI asistentu
summary: Leiskite savo DI asistentui ar scenarijui išvardyti rinkinio žymėjimus, pridėti paprastus, nustatyti jų būseną, atsakyti ir eksportuoti sąrašą: leidimai, prisijungimas per CadCraft Studio ir veiklos žurnalas.
keywords: DI, dirbtinis intelektas, asistentas, agentas, mcp, model context protocol, scenarijus, automatizavimas, žymėjimai, peržiūra, leidimai, atjungti, veikla
from: 095f2977
---

## Ką sužinosite

Kaip leisti DI asistentui (ar jūsų parašytam scenarijui) dirbti su MarkupCraft ir kaip nuspręsti, ko jis gali liesti.

MarkupCraft **neturi jokio savo DI** ir niekur nieko nesiunčia. Asistentą atsinešate patys: bet kurią programą, kalbančią Model Context Protocol (MCP). MarkupCraft jam tik suteikia įrankius, o jūs pasirenkate, kuriuos.

## Įjungti

1. Atidarykite {{ui:Parametrai}} (krumpliaratis programos juostoje arba {{key:Mod+,}}) ir eikite į skirtuką {{ui:MarkupCraft}}.
2. Skiltyje {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir scenarijams naudoti MarkupCraft**. Iš pradžių tai išjungta, kol to nepadarote.
3. Pasirinkite, ką jis gali daryti: **Skaitymas** pažymėtas iš pradžių; pažymėkite **Redaguoti**, **Įrašyti** ar **Eksportuoti** tik tada, kai jų reikia.

Įrankiai, kurių neleidote pažymėdami leidimus, asistentui nepasiūlomi, o jei jis vis tiek paprašo vieno, MarkupCraft jį atmeta ir įrašo veiklos žurnale. Išjungus jungiklį, visi ryšiai nutraukiami iš karto; {{ui:Atstatyti MarkupCraft nustatymus}} jį taip pat išjungia.

## Prijunkite asistentą

Asistentai jungiasi per **CadCraft Studio** jūsų kompiuteryje: Studio paleidžia nedidelį serverį, kurį pasiekia tik šis kompiuteris, apsaugotą žetonu, kurį sukuria kiekvieną kartą paleidžiant. Studio programoje pasirinkite {{ui:Prijungti asistentą}}, nukopijuokite adresą ir žetoną į savo asistentą (Studio parodo, ką tiksliai įklijuoti). Niekada nesidalykite žetonu.

:::note
Naršyklės skirtukas negali atidaryti ryšio asistentui: naršyklės programose jungiklis neturi poveikio, kol nenaudojate CadCraft Studio savo kompiuteryje.
:::

## Jūs išlaikote kontrolę

- **Kiekvienas pakeitimas yra vienas atšaukiamas žingsnis**, pažymėtas asistento pavadinimu (pavyzdžiui, „Asistentas: pridėti cloudrect“). {{key:Mod+Z}} atšaukia visą paskutinį asistento pakeitimą.
- **Žinote, kada jis prijungtas.** Programos juostos mygtukas įvardija asistentą, kol jis prijungtas; spustelėkite jį, kad pamatytumėte, ką jis gali daryti, arba kad jį **atjungtumėte**.
- **Veikla.** {{ui:Parametrai}} › {{ui:MarkupCraft}} › {{ui:Asistentai}} › {{ui:Veikla}} išvardija kiekvieną kvietimą: kada, koks įrankis, įvykdytas ar atmestas. {{ui:Įrašyti žurnalą}} išsaugo kopiją.

## Ko gali prašyti asistentas

| Įrankis | Leidimas | Ką daro |
|---|---|---|
| `app_info`, `sheets_list` | Skaitymas | Atidaryti rinkiniai, jų lapai ir kiek žymėjimų turi kiekvienas |
| `markups_list` | Skaitymas | Žymėjimai su tipu, lapu, tekstu, komentaru, matavimu, būsena, autoriumi ir atsakymais, filtruojami pagal lapą, būseną, tipą ar autorių |
| `markup_add` | Redagavimas | Prideda į lapą stačiakampį, debesį, elipsę, teksto laukelį, pastabą, liniją ar rodyklę |
| `markup_status`, `markup_reply` | Redagavimas | Nustato žymėjimo būseną (įrašoma jo gijoje, pasirašoma asistento vardu); prideda komentarą prie gijos |
| `markups_export` | Eksportas | Žymėjimų sąrašo {{ui:Žymėjimai}} CSV arba BCF to, ką sąrašas rodo (su jūsų nustatytais filtrais); Studio programoje gali įrašyti failą į jūsų leistą aplanką |
| `tasks_list` | Skaitymas | Žymėjimai, kurie yra užduotys: atsakingasis (asmuo ar asistentas), terminas, būsena, nuoroda, kaip baigta. `assignee: "assistant"` išvardija darbą, laukiantį asistento |
| `task_set`, `task_clear` | Redagavimas | Paverčia žymėjimą užduotimi arba ją keičia (pavadinimas, atsakingasis, terminas, būsena, nuoroda); nuima užduotį |
| `tasks_check` | Redagavimas | Uždaro užduotis, kurių susietos brėžinio sritys ar modelio elementai iš tiesų pasikeitė; perduoda elementų būsenas, kurias perskaitėte iš kitos programos |
| `revisions_changes` | Skaitymas | Paprastas sąrašas, kas pasikeitė tarp dviejų atidarytų planų rinkinių, kad galėtumėte perteikti savo žodžiais |
| `pins_list`, `decision_add` | Skaitymas, Redagavimas | Balso pastabos (trukmė, kas, kada, antraštė; niekada garsas, jokios transkripcijos) ir sprendimai; prisegti sprendimą ir pakeisti ankstesnį |
| `redline_export`, `redline_answer` | Eksportas, Redagavimas | Įrašyti raudonųjų pastabų failą braižytojui; pritaikyti braižytojo atsakymus |

Žymėjimą, kurį prideda asistentas, kaip autorių nurodo programos pavadinimą, kurį asistentas pats sau duoda, pridėjus „(assistant)“, arba „(assistant for <your name>)“, kai nustatėte savo peržiūrėtojo vardą. Jo būsenos pakeitimai ir atsakymai pasirašomi taip pat. Kiekvienas yra vienas atšaukiamas žingsnis. Pažymėto PDF įrašymas lieka jums: naudokite {{ui:Įrašyti}}, kaip įprasta.

Neatidarę MarkupCraft, CadCraft MCP serveris išvardija PDF žymėjimus jūsų nurodytame aplanke (`markups_list`), o `cadcraft info Set.pdf` juos išveda komandinėje eilutėje.

## Jei kas nors neveikia

- **Asistentas nemato MarkupCraft įrankių:** patikrinkite, ar šiame lange jungiklis įjungtas ir ar langas atidarytas Studio programoje.
- **„reikia redagavimo leidimo“:** pažymėkite **Redagavimas** skiltyje {{ui:Asistentai}}, tada paklauskite dar kartą.
- **„401“ ar žetono klaidos:** žetonas pasikeitė (Studio paleistas iš naujo arba {{ui:Naujas žetonas}}). Nukopijuokite naują žetoną į asistento nustatymus.

## Žr. taip pat

- [Receptai DI asistentams](common:assistants-recipes): darbo pavyzdžiai, kiekvienas su įrankiais, kuriuos jis kviečia.
