---
title: Įrankių skrynia
summary: Įrašykite žymėjimą su nustatyta išvaizda kaip daugkartinį įrankį, piešite juo ir bendrinkite savo skrynią su biuru kaip failą.
keywords: įrankių skrynia, įrankiai, įrankių rinkinys, tinkinti įrankiai, įrašyti žymėjimai, mėgstamiausi, biuro standartas, importuoti, eksportuoti, bendrinti, json
from: 7dfa36e0
---

Skirtukas {{ui:Įrankiai}} laiko jūsų **įrankių skrynią**: žymėjimus, įrašytus su jų išvaizda, kad galėtumėte vėl juos nupiešti. Įrankis išsaugo žymėjimo tipą, spalvą, linijos storį, užpildą, nepermatomumą, teksto dydį ir temą, taip pat antspaudo tekstą, skaičiavimo grupės pavadinimą ar teksto laukelio arba iškvietimo pradinį tekstą.

## Įrankiai, kuriuos turite iš pradžių

Nauja skrynia turi šešis įrankius: „Revizijos debesis“ (raudonas), „Klausimo debesis“ (mėlynas), „Geltonas žymeklis“, „RFI iškvietimas“ (mėlynas, prasideda „RFI: “), „Patikrinti vietoje“ (oranžinis iškvietimas su tekstu „Patikrinti vietoje.“) ir „Patvirtinta su pastabomis“ (antspaudas).

## Piešti įrankiu

1. Atidarykite skirtuką {{ui:Įrankiai}}.
2. Spustelėkite įrankį. Jis atrodo nuspaustas, o atitinkamas įrankių juostos įrankis įsijungia.
3. Piešite įprastai. Skydelyje {{ui:Ypatybės}} rodoma „Piešiama su ‚<tool>‘ iš įrankių skrynios.“

Kol įjungtas įrankis iš skrynios, pakeitimai, kuriuos prieš piešdami padarote skydelyje {{ui:Ypatybės}}, galioja tik tam įrankiui, nekeičiant išsaugoto įrankio ar įprastų įrankio nustatymų. Pasirinkus įrankių juostos mygtuką arba paspaudus įrankio klavišą, grįžtama prie paprasto įrankio.

## Įrašyti savo

1. Nupieškite žymėjimą ir nustatykite jį, kaip norite: spalva, linija, užpildas, tema, antspaudo tekstas.
2. Pasirinkite jį.
3. Skirtuke {{ui:Įrankiai}} pasirinkite {{ui:Įrašyti pasirinktus kaip įrankį}}, arba skydelyje {{ui:Ypatybės}} – {{ui:Įrašyti kaip įrankį}}.
4. Įveskite {{ui:Įrankio pavadinimas}} ir pasirinkite {{ui:Įrašyti įrankį}}.

Rezultatas: įrankis pridedamas skrynios pabaigoje, o skirtukas {{ui:Įrankiai}} atsiveria jį parodyti.

## Antspaudai iš pasirinkimo

Pasirinkite kelis žymėjimus (arba puslapio turinį įrankiu {{ui:Turinys}}) ir pasirinkite {{ui:Įrašyti pasirinkimą kaip antspaudą…}} skiltyje {{ui:Daugiau}} arba dešiniojo pelės klavišo meniu. Skrynioje atsiranda vienas antspaudas, kuriame yra visi jie („Antspaudas: 3 žymėjimai kartu“). Spustelėkite jį, tada spustelėkite bet kurį lapą: žymėjimai atsiranda kartu, centruoti ten, kur spustelėjote, kaip nauji žymėjimai su jūsų vardu; puslapio turinys nupiešiamas į puslapį toje vietoje. Šie antspaudai įrašomi ir bendrinami su skrynia kaip ir bet kuris įrankis.

## Pašalinti įrankį

Spustelėkite × eilutės gale, tada {{ui:Pašalinti}}. Žymėjimai, jau nupiešti su juo, lieka tokie, kokie yra.

## Kur saugoma skrynia

Skrynia saugoma **šioje naršyklėje, šiame kompiuteryje**. Kita naršyklė ar kitas kompiuteris turi savo skrynią (pradedant šešiais numatytaisiais įrankiais), privatus langas ją pamiršta uždarius jį, o išvalius šios svetainės duomenis naršyklės nustatymuose ji ištrinama.

Jei naršyklė jos neįrašo (saugykla išjungta arba pilna), būsenos juostoje rašoma: „Įrankių skrynios nepavyko išsaugoti šioje naršyklėje (saugykla išjungta arba pilna). Eksportuokite ją, kad išsaugotumėte.“

:::safari
Safari gali išvalyti svetainės saugomus duomenis, kai ilgai nenaudojate svetainės. Retkarčiais eksportuokite skrynią, kad galėtumėte ją vėl importuoti.
:::

**Eksportuokite savo skrynią kaip atsarginę kopiją**, ypač po to, kai sukūrėte įrankius, kuriais pasitikite.

## Bendrinti skrynią su biuru

1. Kartą nustatykite įrankius.
2. Pasirinkite {{ui:Eksportuoti}}. Gausite „MarkupCraft tool chest.json“.
3. Padėkite tą failą, kur biuras laiko savo standartus, arba išsiųskite jį.
4. Visi kiti pasirenka {{ui:Importuoti}} savo skirtuke {{ui:Įrankiai}} ir pasirenka failą.

Rezultatas: „Importuota 12 įrankių iš „MarkupCraft tool chest.json“.“ Įrankiai, atėję iš tos pačios skrynios, pakeičia senesnes kopijas, todėl importuojant atnaujintą biuro skrynią tie įrankiai atnaujinami, o ne dubliuojami; nauji įrankiai pridedami. Skrynioje telpa iki 500 įrankių.

MarkupCraft patikrina kiekvieną importuoto failo reikšmę ir praleidžia tas, kurių nepavyksta panaudoti („2 praleista (netinka)“). Failai, kurie nėra skrynios, atmetami: „Šis failas nėra MarkupCraft įrankių skrynia.“ arba „Šis failas nėra įrankių skrynia (tai nėra JSON).“

Įrankių skrynių failų iš kitų žymėjimo programų importuoti negalima.
