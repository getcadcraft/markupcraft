---
title: Vali, teisalda ja muuda märgistusi
summary: Vali märgistused klõpsates või aknaga, teisalda, muuda suurust, nihuta, lõika, kopeeri, kleebi, kleebi samasse kohta, dubleeri, kustuta ja võta tagasi.
keywords: vali, valik, vali kõik, tühista valik, aken, ristumine, teisalda, muuda suurust, käepidemed, nihuta, lõika, kopeeri, kleebi, kleebi samasse kohta, dubleeri, lõikelaud, teine vahekaart, kustuta, võta tagasi, tee uuesti, redigeeri
from: 62c7def3
---

Vali kõigepealt {{ui:Vali}} ({{key:V}}). Sama saab {{key:Esc}}-iga: esimene vajutus tühjendab valiku, järgmine lülitab tagasi režiimi {{ui:Vali}}.

## Märgistuste valimine

:::mouse
- **Üks märgistus:** klõpsa sellel. Ilmuvad kriipsjooneline kast ja käepidemed ning {{ui:Omadused}} näitab seda.
- **Lisa või eemalda üks:** hoia all {{key:Shift}} ja klõpsa.
- **Täielikult aknas:** lohista vasakult paremale tühjal kohal lehel. Valitakse ainult kasti täielikult jäävad märgistused (tahke joon).
- **Aknaga puudutades:** lohista paremalt vasakule. Valitakse kõik, mida kast puudutab (roheline, kriipsjooneline joon).
- **Kõik sellel lehel:** {{key:Mod+A}} või {{ui:Veel}}, seejärel {{ui:Vali kõik}} tööriistariba grupis {{ui:Redigeeri}}.
- **Mitte midagi:** klõpsa tühjal kohal, vajuta {{key:Esc}} või {{ui:Veel}}, seejärel {{ui:Tühista valik}}.
:::

:::touch
- **Üks märgistus:** koputa seda.
- **Mitu:** lohista ühe sõrmega üle tühja koha lehel, et joonistada aken. Vasakult paremale valib täielikult sees olevad; paremalt vasakule valib need, mida see puudutab.
- Koputamine koos {{key:Shift}}-iga töötab ainult ühendatud klaviatuuriga. Ilma selleta kasuta akent.
- Üks sõrm ei nihuta {{ui:Vali}} režiimis lehte; kasuta kahte sõrme või tööriista {{ui:Nihuta}}.
:::

Kaasasolevad ainult lugemiseks mõeldud kommentaarid näitavad hallilt kriipsjoonelist kasti ilma käepidemeteta. Neid saab valida ja neile vastata, kuid mitte muuta.

## Teisalda ja muuda suurust

- **Teisalda:** lohista valitud märgistust. Hoia all {{key:Shift}}, et liikuda ainult 45° kordsete suundades. Mitu valitud märgistust liiguvad koos.
- **Muuda suurust:** kui on valitud üks märgistus, lohista käepidet. Ruudukujulised käepidemed muudavad kasti suurust (hoia all {{key:Shift}}, et säilitada proportsioonid); ümarad käepidemed liigutavad joone, murdjoone, hulknurga, pilve või mõõdu ühte nurgapunkti (hoia all {{key:Shift}} 45° jaoks); rombikujulised käepidemed liigutavad viite otsa ja painet. Pliiatsi joonistused skaleeruvad oma kasti järgi.
- **Nihuta:** vajuta noolenuppe, et liigutada valikut ühe ekraanipiksli võrra; hoia all {{key:Shift}}, et liikuda kümme. Iga vajutus on üks tagasivõtmise samm.

## Muuda, mida see ütleb või kuidas see välja näeb

- **Tekst, viited ja märkmed:** topeelklõps märgistusel, või vajuta {{key:Enter}}, või vali {{ui:Redigeeri lehel}} {{ui:Omadustes}}. Kirjuta, seejärel klõpsa väljaspool või vajuta {{key:Mod+Enter}}. {{key:Esc}} tühistab muutmise.
- **Templid:** vali {{ui:Omadustes}} teine tempel (topeelklõps avab {{ui:Omadused}} sinu eest).
- **Stiil:** {{ui:Värv}}, {{ui:Joone laius}}, {{ui:Täide}}, {{ui:Läbipaistmatus}} ja {{ui:Teksti suurus}} jaotises „Stiil“ {{ui:Omadustes}}. Kui on valitud mitu, näitab {{ui:Omadused}} valitud liike ja muudab need kõik korraga.

## Kopeeri, kleebi ja dubleeri

Tööriistariba grupis {{ui:Redigeeri}} on {{ui:Kopeeri}} ja {{ui:Kleebi}}; selle menüüs {{ui:Veel}} on kõik need koos klahvidega.

| Käsk | Klahv | Mida teeb |
|---|---|---|
| {{ui:Lõika}} | {{key:Mod+X}} | Kopeerib valitud märgistused ja kustutab need |
| {{ui:Kopeeri}} | {{key:Mod+C}} | Kopeerib valitud märgistused |
| {{ui:Kleebi}} | {{key:Mod+V}} | Paneb koopia lehele, millel sa oled (kus, allpool) |
| {{ui:Kleebi samasse kohta}} | {{key:Mod+Shift+V}} | Paneb koopia täpselt sinna, kust see kopeeriti: samale lehele, originaali peale; teisele lehele, paberil samasse kohta |
| {{ui:Dubleeri}} | {{key:Mod+D}} | Teeb valiku koopia veidi alla ja paremale, ilma et muudaks varem kopeeritut |

**Kuhu Kleebi koopia paneb:**

- {{key:Mod+V}}, kui kursor on lehel, paneb koopia keskele kohta, kuhu kursor osutab. Liiguta kursorit, vajuta uuesti {{key:Mod+V}} ja paigutad järgmise.
- Nupp {{ui:Kleebi}} (kui kursor on siis tööriistaribal) või {{key:Mod+V}}, kui kursor on väljaspool lehte, paneb koopia veidi originaalist alla ja paremale. Sama koopia iga kleepimine liigub veidi edasi, nii et koopiad ei kata üksteist. Teisel lehel läheb esimene kleepimine sinna, kus originaal oli oma lehel. Kui see koht on vaatest väljas, läheb koopia vaate keskele.
- Et {{key:Mod+V}} kleepiks alati originaali kõrvale, vali [MarkupCraft-i sätted](topic:settings) jaotises {{ui:Kleebi}} all {{ui:Koopia kõrval}}.

Kleebitud märgistused on valitud, nii et saad need kohe lohistada. Iga lõikamine, kleepimine või dubleerimine on üks tagasivõtmise samm: {{key:Mod+Z}} eemaldab kogu kleepimise.

Kleebitud koopiad on uued märgistused: need saavad sinu nime, tänase kuupäeva, staatuse Avatud, punktinumbrit ei ole ja lõim on tühi. Nende liik, kuju, stiil, tekst ja kommentaar tulevad kaasa. Faili kaasasolevaid ainult lugemiseks mõeldud kommentaare ei saa kopeerida ega lõigata.

**Vahekaartide vahel:** see, mida kopeerid, jääb ka selle brauseri mällu, nii et teine MarkupCraft-i vahekaart samas brauseris saab selle kleepida. Märgistuste kopeerimine ei kasuta arvuti lõikelauda: neid ei saa kleepida teise programmi; mujal kopeeritud tekst ei kleepu märgistusena.

**Paremklõpsu menüü:** paremklõpsa märgistusel (või tühjal paberil), et saada {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi siia}}, {{ui:Kleebi samasse kohta}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Salvesta valik templina…}}, {{ui:Lamesta lehele salvestamisel}}, {{ui:Lisa siia pilt…}} ja {{ui:Vali kõik}}. Paremklõps märgistusel, mis pole valitud, valib selle kõigepealt. Lohistamine parema nupuga nihutab endiselt lehte. Puuteekraanil avab pikk vajutus märgistusel sama menüü (tekstil alustab see teksti muutmist). Menüüklahv või {{key:Shift+F10}} avab selle valiku juures.

Lehe enda sisu, mis on valitud tööriistaga {{ui:Sisu}}, kopeeritakse ja kleebitakse samuti: vt [Muuda lehe enda jooni, pilte ja teksti](topic:page-content).

Osa lehe enda kopeerimiseks pildina (ristkülik, ellips või vabakujuline kuju) või läbipaistva kattekihina teisele lehele või rakendusse vt [Kopeeri lehe ala või kattekiht](topic:copy-an-area).

## Kustuta

Vajuta {{key:Delete}} või {{key:Backspace}}, vali tööriistaribal {{ui:Veel}} ja seejärel {{ui:Kustuta}}, või vali {{ui:Kustuta}} {{ui:Omadustes}}. Olekuriba ütleb, mitu kustutati. Faili kaasasolevaid ainult lugemiseks mõeldud kommentaare ei kustutata kunagi („jäetakse nagu failis“).

## Tagasivõtmine ja uuesti tegemine

- {{key:Mod+Z}} võtab tagasi, {{key:Mod+Y}} või {{key:Mod+Shift+Z}} teeb uuesti. Tööriistaribal on {{ui:Võta tagasi}} ja {{ui:Tee uuesti}}.
- Olekuriba ütleb, mis võeti tagasi („Võeti tagasi: teisalda märgistust.“).
- Tagasivõtmine katab kõik muudatused märgistustes, staatustes, vastustes, punktikirjetes, lehtede mõõtkavades ja lehtede nimedes, kuni 500 sammu.
- Ajalugu tühjendatakse, kui sulged komplekti.

## Kopeeri märgistused teistele lehtedele

Et panna sama tempel, märkus või pilv mitmele lehele, vali see (või mitu märgistust) ja vali {{ui:Omadustes}} {{ui:Kopeeri teistele lehtedele…}}. Märgi lehed või {{ui:Kõik lehed}} ja vali {{ui:Kopeeri}}. Iga leht saab koopia samasse kohta paberil, allkirjastatuna sinu nimega. Üks {{key:Mod+Z}} eemaldab need kõik.
