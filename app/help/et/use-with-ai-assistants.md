---
title: MarkupCraft’i kasutamine AI-assistendiga
summary: Lase oma AI-assistendil või skriptil loetleda komplekti märgistusi, lisada lihtsaid, määrata nende staatust, vastata ja eksportida loend: load, ühendamine CadCraft Studio kaudu ja tegevuslogi.
keywords: ai, assistent, agent, mcp, model context protocol, skript, automatiseerimine, märgistused, läbivaatus, load, ühenduse katkestamine, tegevus
from: 095f2977
---

## Mida õpid

Kuidas lasta AI-assistendil (või sinu kirjutatud skriptil) MarkupCraftiga töötada ja kuidas otsustada, mida see tohib puudutada.

MarkupCraftil **ei ole oma AI-d** ega saada midagi kuhugi. Sul on oma assistent: iga programm, mis räägib Model Context Protocolit (MCP). MarkupCraft annab sellele ainult tööriistu ja sina valid, millised.

## Sisselülitamine

1. Ava {{ui:Sätted}} (ülaosa ribal hammasratas või {{key:Mod+,}}) ja mine vahelehele {{ui:MarkupCraft}}.
2. Jaotises {{ui:Assistendid}} märgi **Luba AI-assistentidel ja skriptidel MarkupCraft’i kasutada**. See on algul välja lülitatud, kuni sa selle sisse lülitad.
3. Vali, mida see tohib teha: **Lugemine** on algul märgitud; märgi **Redigeeri**, **Salvesta** või **Ekspordi** ainult siis, kui vajad neid.

Tööriistu, mis jäävad väljapoole märgitud lube, assistendile ei pakuta, ja kui see neid ikka küsib, keeldub MarkupCraft ja kirjutab selle tegevuslogisse. Lüliti väljalülitamine lõpetab kõik ühendused korraga; {{ui:Lähtesta MarkupCraft’i sätted}} lülitab selle samuti välja.

## Assistendi ühendamine

Assistendid ühenduvad oma arvutis **CadCraft Studio** kaudu: Studio käivitab väikese serveri, millele pääseb ligi ainult see arvuti, ja mida kaitseb token, mille Studio iga käivitamisega loob. Studios vali {{ui:Ühenda assistent}} ja kopeeri aadress ja token oma assistenti (Studio näitab täpseid seadeid, mida kleepida). Ära kunagi jaga tokenit.

:::note
Brauseri vaheleht ei saa assistendi jaoks ühendust avada: brauserirakendustes lüliti ei mõju enne, kui kasutad oma arvutis CadCraft Studiot.
:::

## Sina juhid

- **Iga muudatus on üks tagasivõtmise samm**, mille nimi on assistendi nimi (näiteks „Assistent: lisa pilvkast“). {{key:Mod+Z}} võtab assistendi viimase muudatuse tervikuna tagasi.
- **Sa tead, millal see on ühendatud.** Ülaosa ribal olev nupp nimetab assistendi, kui see on ühendatud; klõpsa sellel, et näha, mida see tohib teha, või et {{ui:Katkesta ühendus}}.
- **Tegevus.** {{ui:Sätted}} › {{ui:MarkupCraft}} › {{ui:Assistendid}} › {{ui:Tegevus}} loetleb iga kutsung: millal, mis tööriist, tehtud või keeldutud. {{ui:Salvesta logi}} hoiab koopia alles.

## Mida assistent võib küsida

| Tööriist | Luba | Mida see teeb |
|---|---|---|
| `app_info`, `sheets_list` | Lugemine | Avatud komplektid, nende lehed ja iga kohta märgistuste arv |
| `markups_list` | Lugemine | Märgistused liigi, lehe, teksti, kommentaari, mõõtmise, staatuse, autori ja vastustega, filtreeritud lehe, staatuse, liigi või autori järgi |
| `markup_add` | Redigeeri | Lisab lehele ristküliku, pilve, ellipsi, tekstikasti, märkuse, joone või noole |
| `markup_status`, `markup_reply` | Redigeeri | Määrab märgistuse staatuse (kantakse lõimele, assistendi allkirjaga); lisab lõimele kommentaari |
| `markups_export` | Ekspordi | Märgistuste loendi enda CSV või BCF selle, mida loend näitab (filtrid nagu sa need seadistasid); Studios saab see kirjutada faili sinu lubatud kausta |
| `tasks_list` | Lugemine | Märgistused, mis on ülesanded: määratud isik (inimene või assistent), tähtpäev, olek, link, kuidas see suleti. `assignee: "assistant"` loetleb assistendi ootel oleva töö |
| `task_set`, `task_clear` | Redigeeri | Teeb märgistuse ülesandeks või muudab seda (pealkiri, määratud isik, tähtpäev, olek, link); eemaldab ülesande |
| `tasks_check` | Redigeeri | Sulgeb ülesanded, mille seotud joonise ala või mudeli element on tõesti muutunud; edasta elementide olekud, mis lugesid teisest rakendusest |
| `revisions_changes` | Lugemine | Lihtne loend sellest, mis muutus kahe avatud plaanikomplekti vahel, et see oma sõnadega kirjutada |
| `pins_list`, `decision_add` | Lugemine, Redigeeri | Häälmärkused (kestus, kes, millal, pealkiri; mitte heli ega transkriptsioon) ja otsused; kinnita otsus ja asenda varasem otsus |
| `redline_export`, `redline_answer` | Ekspordi, Redigeeri | Kirjutab punasjoonte faili koostajale; rakendab koostaja vastused |

Märgistus, mille assistent lisab, nimetab end autoriks: nimi, mille assistendi programm ise endale annab, millele järgneb „(assistent)“, või „(assistent sinu nimel: <sinu nimi>)“ kui oled seadistanud oma vaataja nime. Selle staatuse muudatused ja vastused on samamoodi allkirjastatud. Iga neist on üks tagasivõtmise samm. Märgistatud PDF-i salvestamine jääb sulle: kasuta tavapäraselt {{ui:Salvesta}}.

Ilma MarkupCraftit avamata loetleb CadCraft MCP-server PDF-i märgistused kaustas, mille sa nimetad (`markups_list`), ja `cadcraft info Set.pdf` prindib need käsurealt.

## Kui midagi ei tööta

- **Assistent ei näe MarkupCraft’i tööriistu:** kontrolli, et lüliti oleks sees selles aknas ja et aken oleks Studios avatud.
- **„vajab redigeerimisluba“:** märgi **Redigeeri** jaotises {{ui:Assistendid}}, seejärel küsi uuesti.
- **Vead „401“ või „token“:** token muutus (Studio taaskäivitati või {{ui:Uus token}}). Kopeeri uus assistendi seadetesse.

## Vaata ka

- [AI-assistentide retseptid](common:assistants-recipes): töötatud näited, igaüks koos tööriistadega, mida see kutsub.
