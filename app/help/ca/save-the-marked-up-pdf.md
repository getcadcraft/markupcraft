---
title: Desa el PDF amb les marques
summary: Baixeu una còpia amb totes les marques incloses com a comentaris PDF estàndard, comproveu què veuen altres lectors de PDF i continueu treballant-hi més tard.
keywords: desa, baixa, exporta pdf, amb marques, anotacions, comentaris, comparteix, envia, incidència, continua treballant, torna a obrir, anada i tornada, imprimeix
from: 4c198ebe
---

## Desa

1. Trieu {{ui:Desa}} a la barra d'eines, o premeu {{key:Mod+S}}.
2. Si hi ha diversos fitxers oberts, trieu {{ui:Aquest fitxer}} (el fitxer del full en què sou) o {{ui:Cada fitxer canviat}}. Cada còpia es baixa per separat.
3. Espereu que acabi «Desant <file>…». El primer desament d'una sessió també carrega el generador de PDF.

Resultat: el navegador baixa «<name> (marked up).pdf», i la barra d'estat ho indica: 'Desat A-Plans (marked up).pdf (24 marques, 18.2 MB). El fitxer original no ha canviat.' El punt que hi ha després de {{ui:Desa}} desapareix.

**El PDF original no es canvia mai.** MarkupCraft escriu un fitxer nou. On va depèn de la configuració de descàrrega del navegador (vegeu [Fitxers que MarkupCraft obre i desa](topic:files#where-downloads-go)).

## Continua treballant-hi més tard

Obriu la còpia «(marked up)» la propera vegada, no l'original. Tot torna a ser editable: marques, estats, respostes, elements de la llista de deficiències, l'escala de cada full i els noms de full que hàgiu escrit. En tornar a desar, es baixa un fitxer amb el mateix nom «(marked up)»; el navegador hi pot afegir un número com «(1)» si la descàrrega anterior encara és a la carpeta. Substituïu o netegeu vosaltres mateixos les còpies antigues.

MarkupCraft no desa el PDF per si sol. Mentre treballeu, guarda una còpia de recuperació en aquest navegador, de manera que un bloqueig o una pestanya tancada no perd les marques: la propera vegada que obriu MarkupCraft pregunta «Vols recuperar el treball?». Vegeu [Recupera el treball](common:recover). Deseu igualment abans de tancar; si intenteu sortir amb marques sense desar, el navegador pregunta primer «Abandonar el lloc?» (l'iPad Safari no ho fa).

## Què veuen altres lectors de PDF

Cada marca s'escriu com a comentari (anotació) PDF estàndard amb el seu propi dibuix, de manera que qualsevol visor de PDF la mostra, l'imprimeix i la llista al seu tauler de comentaris:

- **L'aspecte és el mateix** que a MarkupCraft: núvols amb les seves arcades, punta de fletxa, segells, punts de recompte, números d'elements de la llista de deficiències, etiquetes de mesura.
- **Els detalls són estàndard:** autor, data, assumpte, el text del comentari i els colors.
- **Els núvols** són comentaris de rectangle o polígon amb vora ondulada; **els quadres de text** i **les crides** són comentaris de quadre de text; **les notes** són notes adhesives; **els traços de llapis** i **del marcador** són tinta; **els segells** són comentaris de segell.
- **Les longituds i les àrees** són comentaris de mesura, i cada full calibrat porta la seva escala, de manera que els visors que entenen les mesures poden mostrar els valors.
- **Les respostes** són respostes al comentari, i **els estats** són estats de revisió (Obert no es mostra com a cap estat).
- **Els números de full** que heu escrit es converteixen en les etiquetes de pàgina que mostren altres visors.

Hi ha unes quantes coses que només MarkupCraft torna a llegir: la persona responsable i la data límit de l'element de la llista de deficiències, l'estat de l'element i alguns detalls d'estil. Altres programes els mantenen tret que reescriguin el comentari.

En un altre programa, els comentaris es poden moure o editar com qualsevol altre. Si algú ho fa i torna a enviar el fitxer, MarkupCraft utilitza la nova posició del comentari quan l'obre.

Detall complet: [Què es desa al PDF](topic:what-the-pdf-keeps).

## Caràcters que s'imprimeixen com a «?»

El text de les marques s'escriu amb la tipografia Helvetica estàndard que tenen tots els visors de PDF. Cobreix l'anglès i les lletres de l'Europa occidental (é, ñ, ü, ø i similars), però no altres escriptures, símbols fora d'aquest conjunt ni emoji. Aquests caràcters es veuen bé a MarkupCraft però s'imprimeixen com a "?" a la còpia desada, i el missatge de desament els compta: "3 caràcters fora del conjunt de l'Europa occidental s'imprimeixen com a "?" a la còpia." Escriviu aquestes paraules en lletres o useu un substitut senzill (per exemple "dia." per al símbol del diàmetre).

## Fitxers que no es poden desar

- **PDF protegits:** "Aquest PDF està protegit (xifrat), de manera que no es pot escriure una còpia amb marques. Demaneu-ne una sense protecció." Encara el podeu revisar a la pantalla, i exportar el CSV i el BCF.
- Si el desament falla per un altre motiu, un quadre anomenat «No s'ha pogut desar <file>» mostra el motiu. Les marques són encara a la pestanya; no es perd res fins que la tanqueu.

## Aplanament i impressió

Encara no hi ha aplanament (gravar les marques dins la pàgina) ni ordre d'imprimir. Per imprimir, obriu la còpia desada a qualsevol visor de PDF i imprimiu-la amb els comentaris visibles.
