---
title: Siųsti žymėjimus braižytojui kaip raudonąjį žymėjimą
summary: Įrašykite atvirus žymėjimus kaip raudonojo žymėjimo failą tam, kas braižo pakeitimus, tada įkelkite jų atsakymus, kad kiekvienas žymėjimas rodytų Priimtas arba Atmestas.
keywords: raudonasis žymėjimas, revizija, braižytojas, priimti, atmesti, atsakymai, cc-redline, revizijos debesis, taikyti žymėjimus
from: cb099d04
---

Peržiūra yra tik pusė darbo; brėžinį vis dar reikia pakeisti. Raudonojo žymėjimo failas perduoda kiekvieną atvirą žymėjimą braižytojui, o braižytojo atsakymai grąžina rezultatą.

## Siųsti

1. Atidarykite {{ui:Užduotys}} skirtuką ir atidarykite {{ui:Raudonasis žymėjimas iki revizijos}}.
2. Įveskite revizijos, su kuria lyginami žymėjimai, numerį (pavyzdžiui, B).
3. Pasirinkite {{ui:Eksportuoti raudonųjų pakeitimų failą}}.

Gaunate `.redline.json` failą su vienu elementu kiekvienam atvirui žymėjimui: jo lapą, jo vietą (kaip lapo dalis, todėl perbraižymas kitu dydžiu vis tiek sutampa, ir taškais), jo žodžius, autorių ir giją bei jo užduotį, jei ji yra. Tik skaitymui skirti komentarai iš kitų programų, paveikslėliai ir legendos neįtraukiami.

## Atsakymai

Braižymo pusė kiekvienam elementui pateikia atsakymą Priimtas, Atmestas arba Įvykdytas su pastaba `.redline-answers.json` faile. Pasirinkite {{ui:Įkelti atsakymų failą…}} ir jį pasirinkite: kiekvienas žymėjimas gauna tą būseną ir braižytojo pastabą savo gijoje, o užduotis, kurios žymėjimas buvo priimtas ar įvykdytas, užbaigiama. Vienas anuliavimo žingsnis atšaukia visus atsakymus.

Failo formatas aprašytas `docs/REDLINE-FORMAT.md`. CadCraft pusė (paketo skaitymas, kiekvieno elemento priėmimas arba atmetimas, revizijos debesys ir žurnalas) kuriama atskirai.
