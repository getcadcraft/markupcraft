---
title: Įrašyti žymėtą PDF
summary: Atsisiųskite kopiją, kurioje kiekvienas žymėjimas įrašytas kaip standartinis PDF komentaras, patikrinkite, ką mato kiti PDF skaitytuvai, ir vėliau toliau dirbkite su failu.
keywords: įrašyti, atsisiųsti, eksportuoti pdf, žymėta, anotacijos, komentarai, bendrinti, siųsti, išleidimas, tęsti darbą, atidaryti iš naujo, grįžtamasis ciklas, spausdinti
from: 4c198ebe
---

## Įrašyti

1. Įrankių juostoje pasirinkite {{ui:Įrašyti}} arba paspauskite {{key:Mod+S}}.
2. Jei atidaryta keli failai, pasirinkite {{ui:Šis failas}} (failą, kuriame yra lapas, kuriame esate) arba {{ui:Kiekvienas pakeistas failas}}. Kiekviena kopija atsisiunčiama atskirai.
3. Palaukite, kol baigsis „Įrašoma <file>…“. Pirmasis įrašymas seansui taip pat įkelia PDF rašymo modulį.

Rezultatas: naršyklė atsisiunčia „<name> (marked up).pdf“, o būsenos juostoje pranešama: „Įrašytas A-Plans (marked up).pdf (žymėjimų: 24, 18.2 MB). Originalus failas nepakeistas.“ Taškas po {{ui:Įrašyti}} dingsta.

**Jūsų originalus PDF niekada nekeičiamas.** MarkupCraft įrašo naują failą. Kur jis atsiras, priklauso nuo naršyklės atsisiuntimo nustatymų (žr. [Failai, kuriuos MarkupCraft atidaro ir įrašo](topic:files#where-downloads-go)).

## Tęsti darbą vėliau

Kitą kartą atidarykite kopiją „(marked up)“, o ne originalą. Viskas grįžta redaguojama: žymėjimai, būsenos, atsakymai, trūkumų elementai, kiekvieno lapo mastelis ir visi jūsų įvesti lapų pavadinimai. Įrašius iš naujo atsisiunčiamas failas su tuo pačiu pavadinimu „(marked up)“; naršyklė gali pridėti numerį, pvz., „(1)“, jei senas atsisiuntimas vis dar yra aplanke. Senas kopijas pakeiskite ar sutvarkykite patys.

MarkupCraft PDF pats neįrašo. Dirbdamas jis šioje naršyklėje saugo atkūrimo kopiją, todėl žymėjimai nepražūsta nei dėl avarijos, nei uždarius skirtuką: kitą kartą atidarius MarkupCraft, jis klausia „Atkurti jūsų darbą?“. Žr. [Atkurti jūsų darbą](common:recover). Vis dėlto prieš uždarydami įrašykite; jei bandysite išeiti su neįrašytais žymėjimais, naršyklė pirmiausia klausia „Palikti svetainę?“ (iPad Safari to nedaro).

## Ką mato kiti PDF skaitytuvai

Kiekvienas žymėjimas įrašomas kaip standartinis PDF komentaras (anotacija) su savo piešiniu, todėl bet kuri PDF žiūryklė jį rodo, spausdina ir išvardija komentarų skydelyje:

- **Išvaizda ta pati** kaip MarkupCraft: debesėliai su banguotais kraštais, rodyklių galai, antspaudai, skaičių taškai, trūkumų numerių ženkliukai, matavimų etiketės.
- **Duomenys standartiniai:** autorius, data, tema, komentaro tekstas ir spalvos.
- **Debesėliai** yra stačiakampio ar daugiakampio komentarai su debesėlio kraštine; **teksto laukai** ir **iškvietimai** yra teksto laukų komentarai; **pastabos** yra lipnieji lapeliai; **pieštuko** ir **žymeklio** brūkšniai yra rašalo komentarai; **antspaudai** yra antspaudų komentarai.
- **Ilgiai ir plotai** yra matavimų komentarai, o kiekvienas kalibruotas lapas turi savo mastelį, todėl žiūryklės, suprantančios matavimus, gali rodyti reikšmes.
- **Atsakymai** yra atsakymai į komentarą, o **būsenos** yra peržiūros būsenos (Atvira rodoma kaip be būsenos).
- **Lapų numeriai**, kuriuos įvedėte, tampa puslapių etiketėmis, kurias rodo kitos žiūryklės.

Kai kuriuos dalykus skaito tik MarkupCraft: trūkumo elemento atsakingąjį asmenį ir terminą, elemento būseną bei kai kurias stiliaus detales. Kitos programos juos išsaugo, nebent perrašo komentarą.

Kitoje programoje komentarus galima perkelti ar redaguoti kaip bet kuriuos kitus. Jei kas nors taip padaro ir grąžina failą, MarkupCraft atidarydamas failą naudoja naują komentaro padėtį.

Visas aprašymas: [Ką PDF išsaugo](topic:what-the-pdf-keeps).

## Simboliai, kurie spausdinami kaip „?“

Žymėjimų tekstas rašomas standartiniu Helvetica šriftu, kurį turi kiekviena PDF žiūryklė. Jis apima anglų ir Vakarų Europos raides (é, ñ, ü, ø ir panašiai), bet ne kitus rašmenis, simbolius už šio rinkinio ribų ar emoji. Tokie simboliai MarkupCraft rodomi gerai, bet įrašytoje kopijoje spausdinami kaip „?“, o įrašymo pranešime jie suskaičiuojami: „Kopijoje 3 simboliai už Vakarų Europos rinkinio ribų spausdinami kaip „?“.“ Tokius žodžius išrašykite žodžiais arba naudokite paprastą pakaitalą (pvz., „skers.“ skersmens ženklui).

## Failai, kurių negalima įrašyti

- **Apsaugoti PDF:** „Šis PDF yra apsaugotas (užšifruotas), todėl žymėtos kopijos įrašyti negalima. Paprašykite neapsaugotos kopijos.“ Vis tiek galite peržiūrėti jį ekrane, eksportuoti CSV ir BCF.
- Jei įrašymas nepavyksta dėl kitos priežasties, langas, pavadintas „Nepavyko įrašyti <file>“, parodo priežastį. Žymėjimai vis dar yra skirtuke; nieko nepraradote, kol jo neuždarote.

## Suplokštinimas ir spausdinimas

Suplokštinimo (žymėjimų įrašymo į puslapį) ir spausdinimo komandos kol kas nėra. Norėdami spausdinti, atidarykite įrašytą kopiją bet kurioje PDF žiūryklėje ir spausdinkite su rodomais komentarais.
