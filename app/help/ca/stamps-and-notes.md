---
title: Segells i notes adhesives
summary: Segelleu un full com a Aprovat, Revisa i torna a enviar o amb el vostre propi text, i deixeu notes adhesives que s'obren com a comentaris emergents.
keywords: segell, imatge, enganxa imatge, captura de pantalla, porta-retalls, logotip, segell de foto, signatura, signa, aprovat, aprovat amb notes, revisa i torna a enviar, rebutjat, revisat, anul·lat, segell personalitzat, nota adhesiva, nota, comentari, emergent
from: 76026792
---

## Segellar un full

1. Trieu {{ui:Segell}} ({{key:S}}).
2. A {{ui:Propietats}} a la dreta, trieu el segell sota {{ui:Segell}}:
   - Aprovat
   - Aprovat amb notes
   - Revisa i torna a enviar
   - Rebutjat
   - Revisat
   - Anul·lat
   - Text personalitzat… (escriviu fins a 60 caràcters al quadre que apareix, i després premeu {{key:Enter}} o feu clic en un altre lloc)
3. Feu clic al full on va el segell. O arrossegueu un quadre per triar-ne la mida.

Resultat: un segell emmarcat en majúscules amb una segona línia "Per <el vostre nom>, <data>". Un segell fet amb un clic es dimensiona segons la pantalla al zoom actual, i en el full imprès es manté entre mitja polzada i una polzada i un quart d'alçada.

El segell que heu triat es manté seleccionat per al següent, també després de tornar a obrir MarkupCraft en aquest navegador.

**Els colors segueixen el significat:** els segells Aprovat i Aprovat amb notes són verds, Revisa i torna a enviar és taronja, Rebutjat i Anul·lat són vermells, Revisat és blau, i els segells personalitzats són morats. Si trieu un altre color a {{ui:Propietats}}, es manté aquest color.

### Canviar un segell més tard

Seleccioneu-lo i trieu un altre segell a {{ui:Propietats}}. Si encara tenia el color automàtic, el color canvia segons el significat.

El nom i la data del segell són l'autor del segell i el dia en què es va fer. No canvien quan l'editeu, i no es pot canviar l'autor d'un segell. Per segellar amb el nom d'una altra persona, aquesta ha de definir el seu nom i segellar-ho ella mateixa.

:::note
La data d'un segell és la data en temps universal coordinat (UTC). Tard al vespre a Amèrica, o d'hora al matí a Àsia i Austràlia, pot mostrar el dia següent o el dia anterior respecte del vostre rellotge. L'hora de creació a {{ui:Propietats}} és en la vostra zona horària.
:::

### Segells que useu sovint

La [caixa d'eines](topic:tool-chest) inclou una eina de segell "Aprovat amb notes", i podeu desar qualsevol segell (el seu text i color) com a eina pròpia.

Els segells amb camps per omplir (data de recepció, número de projecte) encara no estan implementats.

## Segellar una imatge o la vostra signatura

La llista de segells de {{ui:Propietats}} acaba amb dues opcions més:

- {{ui:Imatge…}} demana un fitxer PNG, JPEG o SVG d'aquest ordinador, o una pàgina d'un PDF, com ara un segell d'empresa o un logotip. Les imatges grans es redueixen fins a 1600 píxels pel costat més llarg; un SVG o una pàgina PDF es converteix en una imatge d'aquesta mida.
- {{ui:La meva signatura…}} obre un quadre de signatura: signeu amb el ratolí, un llapis o un dit, i trieu {{ui:Usa aquesta signatura}}. {{ui:Neteja}} torna a començar. {{ui:Usa una imatge d'una signatura…}} agafa en lloc d'això un escaneig o una foto de la vostra signatura: MarkupCraft fa transparent el paper blanc i retalla la imatge fins a la tinta (en un PNG, primer pregunta).

Després feu clic al full per col·locar-la (una imatge de 3 in d'amplada, una signatura de 2 in d'amplada), o arrossegueu un quadre per ajustar-la a dins; es mantenen les proporcions. Canvieu-ne la mida amb els seus punts de control com qualsevol marca ({{key:Shift}} manté les proporcions).

L'última imatge es desa en aquest navegador, de manera que és a punt la propera vegada; {{ui:Trieu una altra imatge…}} la substitueix. Cada signatura que dibuixeu o carregueu es desa a {{ui:Les teves signatures}} (fins a vuit, la més recent primer): feu clic a una per usar-la, o a × per eliminar-la. Vegeu [Què es conserva en aquest navegador](topic:browser-storage).

Al PDF desat, una imatge és un comentari de segell que mostra la imatge, de manera que qualsevol visualitzador de PDF la mostra i la imprimeix. Una signatura dibuixada aquí és una imatge de la vostra signatura, no una signatura digital certificada.

## Enganxar una imatge del porta-retalls

Copieu una imatge en un altre programa, o feu una captura de pantalla al porta-retalls, i després premeu {{key:Mod+V}} sobre el full. Apareix on és el punter, com a màxim de 3 in d'amplada o alçada amb les proporcions mantingudes, com una marca d'imatge que podeu moure i canviar de mida. Al PDF desat és un comentari de segell que mostra la imatge, com les imatges anteriors.

{{ui:Més}} › {{ui:Enganxa una imatge}} al grup {{ui:Edita}} fa el mateix des del menú; el navegador pot demanar-ho primer. Quan el porta-retalls no conté cap imatge, {{key:Mod+V}} enganxa les marques copiades com abans.

## Inserir una imatge d'un fitxer

Trieu {{ui:Més}} › {{ui:Insereix una imatge d'un fitxer…}} al grup {{ui:Edita}} (o {{ui:Insereix una imatge aquí…}} al menú contextual), i trieu un fitxer PNG, JPEG o SVG, o un PDF (un PDF amb diverses pàgines pregunta quina). També podeu arrossegar un fitxer PNG, JPEG o SVG sobre el full: apareix on el deixeu anar. La imatge és una marca, com a màxim de 3 in d'amplada o alçada: mogueu-la i canvieu-ne la mida com qualsevol altra.

Per fer que una imatge formi part de la pàgina, marqueu {{ui:Aplana dins la pàgina en desar}} a {{ui:Propietats}}. Vegeu [Desar una còpia aplanada](topic:flatten).

## Crear un segell des d'una selecció

Seleccioneu marques (o contingut de la pàgina amb l'eina {{ui:Contingut}}) i trieu {{ui:Desa la selecció com a segell…}} a {{ui:Més}}, al menú contextual, o {{ui:Desa com a segell…}} a {{ui:Propietats}}. Doneu-li un nom. Va a la caixa d'eines: feu-hi clic i després feu clic en qualsevol full per col·locar tot el que heu seleccionat, junt, centrat on feu clic. Vegeu [La caixa d'eines](topic:tool-chest).

## Notes adhesives

1. Trieu {{ui:Nota}} ({{key:N}}).
2. Feu clic on va la nota. Apareix una petita icona de nota amb un quadre al costat.
3. Escriviu la nota. Feu clic fora o premeu {{key:Mod+Enter}} per conservar-la; {{key:Esc}} la descarta.

A diferència del text i de les crides, una nota es conserva encara que no escriviu res, de manera que podeu col·locar la icona ara i escriure més tard.

- El text de la nota és el seu camp {{ui:Nota}} a {{ui:Propietats}}. Feu doble clic a la icona (o seleccioneu-la i premeu {{key:Enter}}) per editar-lo al full.
- Al full només es veu la icona. Altres visualitzadors de PDF mostren una nota adhesiva estàndard que s'obre amb el text en fer-hi clic.
- Canvieu el color de la icona amb {{ui:Color}} a {{ui:Propietats}}.

Per a converses d'anada i tornada, useu el fil de resposta de qualsevol marca: vegeu [Estats i respostes](topic:statuses-and-replies).
