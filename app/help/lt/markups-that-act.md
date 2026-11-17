---
title: Padaryti žymėjimą užduotimi
summary: Priskirkite žymėjimui atsakingą asmenį (žmogų ar jūsų asistentą), terminą ir nuorodą į brėžinio ar modelio elementą, apie kurį jis yra, ir matykite, kaip jis užsidaro, kai tai tikrai pasikeičia.
keywords: užduotis, užduotys, atsakingas, asistentas, terminas, pavėluota, nuoroda, užsidaro, pakeista, elementas, brėžinio sritis, veiksmingi žymėjimai, MCP
from: 9e970202
---

Užduotis – tai žymėjimas, kurį turi atlikti kažkas. Jis išlaiko savo vietą lape ir giją, o prideda pavadinimą, atsakingą asmenį, terminą, būseną ir, jei norite, nuorodą į dalyką, apie kurį jis yra.

## Padaryti užduotimi

1. Pasirinkite vieną ar kelis žymėjimus.
2. Atidarykite skirtuką {{ui:Užduotys}} ir pasirinkite {{ui:Padaryti pasirinktą užduotimi}}.
3. Užpildykite pavadinimą (jis pradedamas nuo žymėjimo teksto), kam ji skirta ({{ui:Asmuo}} arba {{ui:Asistentas}}, ir vardą), neprivalomą terminą bei ką stebėti.

Asistento užduotis – tai darbas jūsų prie MarkupCraft prijungtam asistentui (žr. [Naudoti MarkupCraft su DI asistentu](topic:use-with-ai-assistants)). MarkupCraft neturi savo asistento: jis tik išvardija darbą ir priima asistento atsakymus. Pasirinkus {{ui:Priskirta}}, o tada {{ui:Asistentas}} sąraše, matote, kas laukia jo.

## Stebėti pakeitimą

- **Brėžinys žymėjimo viduje.** MarkupCraft išsaugo linijas žymėjimo langelyje tokias, kokios jos yra dabar. Kai atidarote naujesnę to lapo reviziją (antrą failą su tuo pačiu lapo numeriu arba ta pačia puslapio vieta), pasirinkite {{ui:Tikrinti dabar}}: jei linijos toje srityje skiriasi daugiau nei per plauką, užduotis užsidaro.
- **Modelio elementas.** Nurodykite programą ir elemento id. Jūsų asistentas skaito elementą kitos programos įrankiais ir praneša per `tasks_check`. Pirmasis pranešimas išsaugomas kaip pradinė būsena; vėlesnis, skirtingas pranešimas užveria užduotį. Ištrintas elementas taip pat ją užveria.
- **Nieko.** Paprasta užduotis, kurią baigiate rankiniu būdu.

Užbaigta užduotis pažymima kaip Atlikta, jos žymėjimas tampa Užbaigtu, o gijoje esanti pastaba nurodo, kas pasikeitė. Vienas atšaukimo žingsnis ją vėl atidaro.

**Apribojimas:** tikrinimas daro prielaidą, kad naujesnė revizija naudoja tą patį puslapio pradžios tašką ir puslapio dydį. Lapas, perbraižytas kitu dydžiu, neatitiks, todėl jo užduotys neužsidarys. Lapai susiejami pagal lapo numerį, o jei jo nėra – pagal puslapio vietą; MarkupCraft nekeičia vienos revizijos mastelio, kad ji tilptų į kitą.

Tas pats brėžinys, perbraižytas su nauja datos žyma, arba linijos, pasislinkusios mažiau nei 1.5 pt, nelaikomi pakeitimu. Jei nėra atidarytos naujesnės revizijos, užduotis lieka atvira ir būsenos juosta apie tai praneša.

## Sąrašas

{{ui:Užduotys}} sąrašą galima filtruoti pagal būseną ir pagal tai, kam ji skirta, įskaitant {{ui:Pavėluota}}. Užduotis, praėjusi savo terminą, Problemų skydelyje rodoma kaip įspėjimas. {{ui:CSV}} eksportuoja sąrašą.

Užduotys išsaugomos PDF kartu su žymėjimu ir keliauja per Live kaip kitos žymėjimo savybės.
