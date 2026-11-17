---
title: Buscar texto nos debuxos
summary: Busque as palabras de cada folla, vaia a cada coincidencia e marque todas con nube dun só paso.
keywords: buscar, texto, palabra, palabras, ctrl f, nota, nota clave, chamada, marcar todas con nube, resaltar coincidencias, ocr, escaneo, escaneado, ler texto, seleccionar texto, copiar texto, tesseract
from: 3435c9eb
---

{{ui:Buscar texto}}, na parte superior do panel {{ui:Follas}}, busca as palabras debuxadas nas propias follas. {{ui:Buscar follas}}, debaixo, só busca nomes de follas.

## Buscar

1. Prema {{key:Mod+F}} ou abra {{ui:Buscar texto}}.
2. Escriba as palabras, por exemplo `hood` ou `verify in field`.
3. Escolla {{ui:Todas as follas}} ou {{ui:Esta folla}}, e marque {{ui:Distinguir maiúsculas}} ou {{ui:Palabras completas}} se os precisa.
4. Prema {{key:Enter}} ou escolla {{ui:Buscar}}.

Resultado: cada coincidencia aparece na lista co número da folla e as palabras do seu contorno, e márcase en amarelo na súa folla. Escolla unha coincidencia para abrir a súa folla e achegar o zoom.

Atópase unha frase aínda que o debuxo a divida en dous fragmentos de texto ou en dúas liñas.

## Marcar todas as coincidencias con nube

Escolla {{ui:Marcar todas con nube}}. Unha nube de revisión rodea cada coincidencia da lista, en todas as follas, co comentario "Atopado: <as súas palabras>". Cunha pulsación de {{key:Mod+Z}} elimínanse todas.

## Ler o texto dun escaneo (OCR)

Unha folla escaneada é só unha imaxe: ata que se leen as súas palabras, non hai nada que buscar. Cando o recuento indique que as follas non teñen texto, escolla {{ui:Ler texto (OCR)…}} debaixo del, ou {{ui:Páxinas}} › {{ui:Ler texto (OCR)…}}.

1. Escolla as páxinas: esta folla, todas as páxinas do ficheiro ou todas as páxinas de todos os ficheiros abertos.
2. Escolla a lingua do texto. {{ui:Tamén inglés}} le tamén palabras en inglés.
3. Escolla {{ui:Ler texto}}. Unha barra mostra a páxina que se está lendo; {{ui:Parar}} remata a execución e conserva as páxinas xa lidas.

Resultado: as palabras pódense buscar, seleccionar e copiar como calquera outro texto. Todo se executa no seu computador: non se envía nada a ningún lado. Funciona sen conexión en Studio, e no navegador cando a aplicación se gardou para uso sen conexión (en inglés e na lingua da súa interface) ou cando se usou unha lingua unha vez. As páxinas que xa teñen texto déixanse como están.

Ao gardar, as palabras pasan ao PDF como texto invisible detrás da imaxe, á parte das súas anotacións, para que tamén outros programas de PDF as poidan buscar e copiar. Ata que garde, o ficheiro aparece como sen gardar.

## Seleccionar e copiar texto

Escolla {{ui:Máis}} › {{ui:Seleccionar texto para copiar}}. Arrastre desde unha palabra ata outra para seleccionar as palabras entre ambas, arrastre desde un espazo baleiro do papel para seleccionar as palabras dentro dunha caixa, ou faga dobre clic nunha palabra. {{key:Mod+A}} selecciona todas as palabras da folla. {{key:Mod+C}} copia as palabras conservando as liñas. Calquera outra ferramenta remata este modo.

## Cousas útiles

- Os debuxos cuxas letras están debuxadas como liñas tampouco teñen texto; lelos como imaxe funciona mellor con texto impreso, como un libro escaneado ou unha especificación.
- O lector é Tesseract, integrado na aplicación cos seus datos de idioma para inglés e para os idiomas da aplicación. A primeira execución cárgao (uns 6 MB, máis para un segundo idioma).
- A calidade da lectura depende do escaneo: as páxinas limpas a 300 dpi léense case palabra por palabra; os escaneos antigos, débiles ou de baixa resolución perden máis palabras.
- A lista amosa as primeiras 500 coincidencias; {{ui:Marcar todas con nube}} marca ata 2.000.
- As coincidencias bórranse ao pechar o conxunto, e, para un ficheiro, ao cambiar as súas páxinas.
