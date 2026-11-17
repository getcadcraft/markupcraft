---
title: Des d'altre programari de marques
summary: Com els hàbits d'un programa d'escriptori de marcatge de PDF corresponen a MarkupCraft, i les diferències que sorprenen la gent.
keywords: canvi, migrar, familiar, marcatge de PDF d'escriptori, caixa d'eines, llista de marques, superposició, sessions, perfil, dreceres, diferències
from: c8f323e1
---

Si reviseu dibuixos a Bluebeam Revu (o comenteu PDF en un altre programa d'escriptori per a PDF), la major part de MarkupCraft us semblarà familiar: núvols, crides, una caixa d'eines, una llista de marques, estats amb respostes, mesures calibrades, superposicions de fulls. La gran diferència és com es gestionen els fitxers, de manera que llegiu la secció següent encara que us saltigueu la resta.

## Les cinc diferències que importen

1. **Desar fa un fitxer nou.** MarkupCraft funciona al navegador i no pot sobreescriure el PDF del vostre disc. {{ui:Desa}} baixa "<name> (marked up).pdf" i l'original es queda tal com estava. La propera vegada, obriu la còpia "(marked up)", i esborreu vosaltres mateixos les còpies velles.
2. **El PDF es desa quan deseu.** Fins llavors, una còpia de recuperació en aquest navegador conserva les vostres marques en cas de bloqueig o de pestanya tancada, i MarkupCraft us la torna a oferir la propera vegada. És una xarxa de seguretat: deseu el PDF per conservar la revisió.
3. **El vostre perfil viu al navegador.** El vostre nom d'autor, la configuració d'eines i la caixa d'eines es guarden en aquest navegador, en aquest ordinador. Un altre navegador o ordinador comença de zero, i esborrar les dades del lloc les elimina. Exporteu la caixa d'eines com a còpia de seguretat. Vegeu [Què es queda en aquest navegador](topic:browser-storage).
4. **Encara no hi ha sessions compartides.** No hi ha cap sessió de revisió en directe i compartida, ni cap projecte al núvol. La revisió viatja dins del PDF: el deseu, n'envieu la còpia, la persona següent respon i el torna a desar.
5. **L'escala és per full, i només per full.** No hi ha finestres gràfiques dins d'un full, ni cap "aplica aquesta escala a totes les pàgines". Calibreu cada full que mesureu.

## Hàbit per hàbit

| Hi esteu acostumat | A MarkupCraft |
|---|---|
| Panell de miniatures, etiquetes de pàgina | {{ui:Fulls}} a l'esquerra. Els noms surten de les etiquetes de pàgina o es llegeixen del caixetí; corregiu-los amb {{ui:Reanomena el full}}. |
| Obrir diversos PDF com a conjunt | Obriu-los tots alhora; passen a ser una sola llista. No es desa cap fitxer de conjunt: obriu els mateixos PDF la propera vegada. |
| Caixa d'eines amb conjunts d'eines | Pestanya {{ui:Eines}}: una caixa per navegador, eines desades amb estil i assumpte. Es comparteixen amb {{ui:Exporta}} i {{ui:Importa}} com a fitxer JSON. Els fitxers de conjunts d'eines d'altres programes no es poden importar. |
| Panell de propietats | Pestanya {{ui:Propietats}}: estat, assumpte, comentari, estil, respostes i element de la llista de deficiències, en un sol lloc. |
| Llista de marques amb columnes | Pestanya {{ui:Marques}} amb filtres per full, autor, estat i tipus. Exporta CSV o BCF. Encara no hi ha columnes personalitzades ni resum en PDF o en full de càlcul. |
| Estat i estat de revisió | {{ui:Estat}}: Obert, Acceptat, Rebutjat, Completat. No hi ha conjunts d'estats personalitzats. Es desen com a estats de revisió estàndard. |
| Respostes a una marca | El fil "Respostes" a {{ui:Propietats}}, amb els canvis d'estat registrats. Una resposta enviada no es pot editar. |
| Calibra, després longitud, àrea, recompte | {{ui:Calibra}}, {{ui:Longitud}} ({{key:M}}), {{ui:Àrea}} ({{key:Q}}, dóna àrea i perímetre), {{ui:Recompte}} ({{key:U}}). Encara no hi ha angle, radi, volum, longitud de polilínia ni forats. |
| Superposició de pàgines | Pestanya {{ui:Compara}}: vermell per a l'antic, blau per al nou, alineació per dos punts. No hi ha núvol automàtic de "compara documents". |
| Segells | {{ui:Segell}} amb sis segells integrats i text personalitzat, signat amb el vostre nom i la data. Encara no hi ha segells d'imatge ni de signatura. |
| Seguiment de deficiències o d'incidències | Pestanya {{ui:Llista de deficiències}}: elements numerats amb persona assignada, data límit i estat; exportació CSV. |
| Sessió de col·laboració en directe | Encara no disponible. Passeu el PDF desat. |
| Aplanar | Encara no implementat. Les marques es queden com a comentaris que altres visors poden mostrar i imprimir. |
| Capes per a marques | Encara no implementat. Useu els assumptes, els autors i els filtres de la llista per ordenar els comentaris. |
| Enllaços entre fulls | Encara no implementat. |
| Barra espaiadora per desplaçar, roda per fer zoom | Igual: manteniu {{key:Space}} i arrossegueu; la roda fa zoom al punter. La roda mai no desplaça la pàgina. |

## Tecles que canvien

Moltes tecles d'una sola lletra són les que us podríeu esperar, però comproveu aquestes abans que els dits les premin per vosaltres:

- {{key:K}} és {{ui:Crida}}, i {{key:Q}} és {{ui:Àrea}}. Si us heu acostumat a Q per a les crides, aquí començarà una àrea.
- {{key:C}} és el quadre {{ui:Núvol}}; {{key:Shift+C}} és {{ui:Núvol lliure}}.
- {{key:M}} és {{ui:Longitud}}, {{key:U}} és {{ui:Recompte}}, {{key:Y}} és {{ui:Polilínia}}, {{key:G}} és {{ui:Polígon}}, {{key:I}} és {{ui:Ressalta}}.
- {{key:Mod+D}} duplica la selecció (en lloc del marcador del navegador).
- {{key:Mod+Plus}} i {{key:Mod+Minus}} fan zoom al full, no a la pàgina del navegador.
- Qualsevol tecla es pot canviar: vegeu més avall.

:::tip
Si els dits coneixen Bluebeam Revu, trieu l'estil de menú {{ui:Revisió de PDF}} a {{ui:Configuració}} › {{ui:MarkupCraft}} › {{ui:Menús, tecles i ratolí}}: una barra de menús (Fitxer, Edició, Visualització, Document, Marca, Mesura, Finestra) sobre una fila d'eines de revisió, {{key:Q}} per a una crida, {{key:H}} per al ressaltador, {{key:N}} per a un polígon, i les mesures amb {{key:Alt+Shift}} i una lletra. Qualsevol tecla també es pot canviar allà. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse).
:::

La llista completa és a [Teclat i ratolí](topic:keyboard).

## Coses que funcionen diferent de com potser espereu

- **Les eines es queden activades.** Després d'un núvol, encara dibuixeu núvols. {{key:Esc}} una vegada neteja la selecció, dues vegades torna a {{ui:Selecció}}.
- **El text i les crides necessiten text.** Si acabeu sense escriure res, no s'afegeix cap marca. Les notes es guarden buides.
- **Les mesures necessiten primer una escala.** {{ui:Longitud}} i {{ui:Àrea}} passen a {{ui:Calibra}} en un full no calibrat i hi tornen després.
- **Comentaris fets en altres programes.** Els rectangles, les el·lipses, les línies, les polilínies, els polígons, la tinta, els quadres de text i les notes adhesives fets en altres llocs esdevenen marques editables de MarkupCraft, i es reescriuen a la manera de MarkupCraft en desar (el seu aspecte pot canviar una mica). Els ressaltats de text, els segells d'altres programes i altres tipus especials es queden de només lectura: hi podeu respondre, però no canviar-los.
- **Els caràcters fora de les lletres de l'Europa occidental** surten com a "?" al PDF desat. Vegeu [Desa el PDF amb marques](topic:save-the-marked-up-pdf).
- **Les dates dels segells** usen UTC, de manera que un segell fet tard a la nit a les Amèriques pot mostrar la data de demà.
- **Les mesures es porten** com a comentaris de mesura estàndard, i cada full calibrat manté la seva escala, de manera que un programa que llegeix les mesures del PDF normalment les pot mostrar. El comportament exacte depèn d'aquest programa.

## Usar-les totes dues

Podeu anar i tornar. Els comentaris fets en altres llocs s'obren a MarkupCraft, i el PDF "(marked up)" s'obre en altres programes de PDF amb totes les marques, respostes i estats visibles. El que només MarkupCraft llegeix de nou (la persona assignada i la data límit de l'element de la llista de deficiències, i l'estat de l'element) es guarda al fitxer per a MarkupCraft.
