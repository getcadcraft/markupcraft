---
title: Trikčių šalinimas
summary: Pranešimai, kuriuos rodo MarkupCraft, ir ką su jais daryti, bei taisymai, kai kas atrodo neveikia.
keywords: problema, klaida, neveikia, žinynas, pranešimas, neatsidaro, negalima įrašyti, slaptažodis, apsaugotas, matavimas atmestas, kalibruoti, neprisijungus, tuščias, lėtas, pamesti žymėjimai, klaustukai
from: bb650b39
---

Daugumos problemų paaiškinimas rodomas būsenos juostoje ekrano apačioje. Pirmiausia perskaitykite ją.

## Failų atidarymas

**„MarkupCraft atidaro PDF failus. ‚x‘ nėra PDF.“**
Pasirinkote arba įmetėte ką kita. Atidaromi tik PDF failai. Pirmiausia eksportuokite brėžinius iš savo CAD programos kaip PDF.

**'"name" atidarymui reikia slaptažodžio. Atidarykite neapsaugotą kopiją.'**
PDF failas apsaugotas slaptažodžiu. Paprašykite siuntėjo neapsaugotos kopijos arba atidarykite jį PDF programoje, kurioje žinote slaptažodį, ir įrašykite kopiją be slaptažodžio.

**'"name" nepavyko perskaityti kaip PDF (…)'**
Failas sugadintas arba iš tiesų nėra PDF (neužbaigtas atsisiuntimas, nukirstas el. laiško priedas). Atsisiųskite jį iš naujo. Jei kitos PDF programos gali jį atidaryti, naudokite jų „įrašyti kaip“, kad padarytumėte švarią kopiją, ir atidarykite ją.

**„Kai kurie failai neatsidarė“**
Kai atidarote kelis vienu metu, šiame langelyje išvardijami failai, kurie nepavyko, ir kodėl. Kiti atidaryti.

**„PDF skaitytuvo nepavyko įkelti: …“**
Nepavyko gauti PDF variklio. Prisijungus: perkraukite puslapį ir bandykite dar kartą; patikrinkite, ar ugniasienė ar turinio blokavimo priemonė neblokuoja svetainės. Neprisijungus: MarkupCraft šioje naršyklėje neįrašytas naudoti neprisijungus (viršutinė juosta nerodo „Paruošta neprisijungus“). Prisijunkite, pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite, kol atsiras „Paruošta neprisijungus“. Žr. [Darbas neprisijungus](common:offline).

**„Kai kurie komentarai gali būti rodomi ekrane dukart“ arba „Papildomų komentarų detalių nepavyko perskaityti“**
Esami failo komentarai neįprasti. Jie vis tiek atidaromi, kiek tai įmanoma MarkupCraft; prieš juos naudodami patikrinkite. Įrašymas vis tiek veikia.

**Lapas turi netinkamą pavadinimą arba „puslapis 3“**
Žr. [Kaip lapai gauna pavadinimus](topic:open-a-plan-set#how-sheets-get-their-names). Nuskenuoti lapai neturi teksto, kurį būtų galima perskaityti; naudokite {{ui:Pervardyti lapą}}.

**Tie patys lapai rodomi du kartus**
Tas pats failas atidarytas du kartus. Pasirinkite {{ui:Uždaryti}} (jei reikia, pirmiausia įrašykite) ir atidarykite rinkinį iš naujo.

## Piešimas ir pasirinkimas

**Spustelėjus lapą nieko nevyksta**
Patikrinkite, koks įrankis nuspaustas įrankių juostoje, ir perskaitykite būsenos juostą. Su {{ui:Stačiakampis}}, {{ui:Elipsė}} ir {{ui:Debesis}} spustelėjimas be vilkimo nieko nenupiešia: vilkite. Su {{ui:Polilinija}}, {{ui:Daugiakampis}}, {{ui:Laisvas debesis}} ir {{ui:Plotas}} pridedami taškai: baikite dukart spustelėdami arba paspausdami {{key:Enter}}.

**„Daugiakampiui reikia bent 3 taškų.“ (arba 2 polilinijai)**
Prieš baigdami spustelėkite daugiau taškų.

**„Nieko neįvesta, todėl tekstas nepridėtas.“**
Teksto laukeliai ir iškvietimai išsaugomi tik tada, kai juose yra tekstas. Nupieškite iš naujo ir įveskite tekstą, prieš spustelėdami kitur.

**„Abu taškai sutampa. Spustelėkite du skirtingus taškus.“**
Linijoms, rodyklėms, ilgiams ir kalibravimui du galai turi būti atskiri. Vilkite arba spustelėkite du kartus skirtingose vietose.

**Negaliu perkelti ar ištrinti žymėjimo; jis turi pilką brūkšninį rėmelį**
Tai tik skaitomas komentaras, atėjęs su failu (pvz., teksto paryškinimas). MarkupCraft jį palieka tokį, koks yra: galite tik atsakyti į jį. Būsenos juostoje rašoma „tik skaitomi žymėjimai paliekami kaip faile“.

**Mano klavišai įveda raides į langelį, o ne parenka įrankius**
Žymeklis yra teksto langelyje (atsakymo, lauke skydelyje {{ui:Ypatybės}}, lapų paieškoje). Pirmiausia spustelėkite tuščią lapo sritį arba paspauskite {{key:Esc}}, jei redaguojate žymėjimo tekstą.

**Tarpo klavišas neslenka, o rodyklių klavišai nieko nedaro**
Ką tik spustelėjote įrankių juostos mygtuką, todėl jis dar turi klaviatūrą. Vietoj to vilkite vidurinio pelės mygtuko pagalba arba, įjungę {{ui:Pasirinkti}}, vieną kartą spustelėkite lapą ir bandykite dar kartą. Taip pat žr. [Klaviatūra ir pelė](topic:keyboard#when-a-key-does-nothing).

**Suspaudimo gestas jutikliniame ekrane paliko žymę**
Vilkimo įrankis (rašiklis, debesis, stačiakampis) pradėjo veikti prieš atsirandant antram pirštui ir baigėsi prieš atšaukiant. Paspauskite {{ui:Anuliuoti}}. Kai norite keisti mastelį, padėkite abu pirštus kartu.

## Matavimas

**„Pirmiausia kalibruokite šį lapą: pasirinkite du taškus, kurių atstumas žinomas, arba pasirinkite jo mastelį. Tada matuokite.“**
Kiekvienam lapui prieš {{ui:Ilgis}} ar {{ui:Plotas}} reikia savo mastelio. MarkupCraft perjungė į {{ui:Kalibruoti}}: spustelėkite žinomo matmens du galus ir įveskite jo ilgį arba spustelėkite mastelio mygtuką būsenos juostoje ir pasirinkite mastelį. Žr. [Kalibruoti lapą ir matuoti](topic:calibrate-and-measure).

**'Tai nėra ilgis, kurį MarkupCraft supranta.'**
Įveskite taip: `24'-0"`, `12' 6 1/2"`, `7.2 m` arba `900 mm`. Žr. [Vienetai, ilgiai ir mastelis](topic:units-and-scales).

**Matavimai šiek tiek netikslūs arba labai netikslūs**
- Iš anksto nustatytas mastelis PDF, kurio dydis nėra pilnas, matuoja klaidingai. Vietoj to kalibruokite pagal ilgą žinomą matmenį.
- Tūkstančių skyriklis buvo perskaitytas kaip dešimtainis skyriklis: `1,200 mm` reiškia 1.2 mm. Įveskite `1200 mm`.
- Priartinkite, kai spustelite galus.
- Brėžinys gali būti nemasteliuotas („NTS“).

**„Pirmiausia pasirinkite skaičiavimo grupę, tada Shift+spustelėkite ženklą, kad jį pašalintumėte.“**
Pasirinkite {{ui:Pasirinkti}}, spustelėkite skaičiavimo grupę, tada vėl pasirinkite {{ui:Skaičiuoti}} ir {{key:Shift}}-spustelėkite tašką.

## Įrašymas

**„Šis PDF apsaugotas (užšifruotas), todėl pažymėtos kopijos įrašyti negalima.“**
Failas draudžia keitimus. Paprašykite neapsaugotos kopijos. Tuo tarpu galite eksportuoti žymėjimų sąrašą kaip CSV arba BCF.

**„PDF rašytuvo nepavyko įkelti: …“**
Dažniausiai esate neprisijungę, o programa neįrašyta naudoti neprisijungus (viršutinėje juostoje nėra „Paruošta neprisijungus“). Jūsų žymėjimai vis dar yra skirtuke: palikite jį atidarytą, prisijunkite ir vėl pasirinkite {{ui:Įrašyti}}. Tada pasirinkite {{ui:Įrašyti neprisijungus}}, kad kitą kartą veiktų neprisijungus; įrašyta kopija apima PDF rašytuvą.

**„Nepavyko įrašyti <file>“**
Langelyje parodoma priežastis. Jūsų žymėjimai vis dar skirtuke. Bandykite dar kartą; jei kartojasi, eksportuokite CSV, kad komentarai nepradingtų, ir praneškite apie pranešimą.

**Pasirinkau {{ui:Įrašyti}}, bet atkeliavo tik vienas failas**
Naršyklė užblokavo papildomus atsisiuntimus. Ieškokite pranešimo adresų juostoje, leiskite šiai svetainei atsisiųsti kelis failus ir įrašykite dar kartą.

**Neradau įrašyto failo**
Jis nukeliavo į naršyklės atsisiuntimų aplanką. Atidarykite naršyklės atsisiuntimų sąrašą (Chrome ir Edge naršyklėse {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; Firefox ir Safari – atsisiuntimų mygtuką įrankių juostoje), kad pamatytumėte, kur jis. Žr. [Naršyklės ir kompiuteriai](common:browsers).

**Kai kuriose kitose PDF peržiūros programose tekstas rodo „?“**
Simboliai, kurie nepriklauso Vakarų Europos rinkiniui, kopijoje rodomi kaip „?“. Įrašymo pranešime jie suskaičiuojami. Žr. [Įrašyti pažymėtą PDF](topic:save-the-marked-up-pdf).

**Antspaude rodoma rytojaus (arba vakarykštė) data**
Antspaudų datos yra UTC. Žr. [Antspaudai ir lipnios pastabos](topic:stamps-and-notes).

## Darbas neprisijungus

**Mygtukas neprisijungus rodo „Nepavyko įrašyti“**
Kai kurie programos failai neatsisiųsti. Patikrinkite ryšį ir spustelėkite mygtuką dar kartą; jis rodo „Įrašoma N iš M“, kol atsiras „Paruošta neprisijungus“.

**Mygtukas rodo „Neprisijungus nepasiekiama“**
Šis naršyklės langas negali išlaikyti kopijos neprisijungus: privatus langas arba kompiuteris, kurio politika tai blokuoja. Atidarykite MarkupCraft įprastame lange ir bandykite dar kartą.

**Neprisijungus programa yra senesnė versija**
Kopija neprisijungus yra versija, kurią įrašėte. Kai esate prisijungę, spustelėkite „Paruošta neprisijungus“ ir pasirinkite „Įrašyti dar kartą (gauti naujausią versiją)“. Norėdami atlaisvinti vietą, pasirinkite „Pašalinti kopiją neprisijungus“. Žr. [Darbas neprisijungus](common:offline).

**Žinynas neatsidaro**
Paspauskite {{key:F1}} (Mac kompiuteryje su **fn**) arba viršutinėje juostoje pasirinkite {{ui:Žinynas}}. Jis veikia ir neprisijungus.

## Pamesti dalykai

**Mano žymėjimai dingo uždarius ar perkrovus skirtuką**
Vėl atidarykite MarkupCraft toje pačioje naršyklėje: ji siūlo grąžinti neįrašytą darbą su „Atkurti jūsų darbą?“. Pasirinkite {{ui:Atkurti}} ir įrašykite PDF. Kopijos saugomos iki 30 dienų; privatus langas arba svetainės duomenų išvalymas jų nepalieka. Žr. [Atkurti jūsų darbą](common:recover).

**Mano vardas, įrankių nustatymai ar įrankių skrynia dingo**
Jie saugomi tik šioje naršyklėje ir buvo išvalyti (išvalyti svetainės duomenys, privatus langas, kita naršyklė ar kompiuteris arba Safari valymas svetainėms, kurios ilgai neaplankytos). Vėl nustatykite vardą ir importuokite eksportuotą skrynią. Žr. [Kas lieka šioje naršyklėje](topic:browser-storage).

**„Įrankių skrynios nepavyko išsaugoti šioje naršyklėje (saugykla išjungta arba pilna). Eksportuokite ją, kad išsaugotumėte.“**
Naršyklė atsisako saugoti šios svetainės duomenis (privatus režimas, saugykla užblokuota nustatymu ar politika arba pilna). Pakeitę skrynią, ją eksportuokite, o kitą kartą importuokite.

## Rodymas ir greitis

**Lapas kurį laiką atrodo neryškus**
MarkupCraft rodo greitą, grubų vaizdą, kol keičiate mastelį ar slenkate, ir jį perpiešia ryškiai po trumpo laiko, kai sustojate.

**Su dideliu rinkiniu viskas lėta**
Uždarykite kitus sunkius skirtukus, atidarykite mažiau failų vienu metu ir venkite didžiausio mastelio labai dideliuose lapuose. Žr. [Darbas su keliais failais vienu metu](topic:several-files#big-sets).

**Lapas tamsus su šviesiomis linijomis**
Esate {{ui:Modelis}} temoje. Viršutinėje juostoje pasirinkite {{ui:Popierius}}, kad linijos būtų tamsios ant baltos. Jūsų žymėjimai ir įrašytas PDF faile nepaveikiami.
