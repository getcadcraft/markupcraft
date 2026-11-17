---
title: O cofre de ferramentas
summary: Garde unha anotación con estilo como ferramenta reutilizable, debuxe con ela e comparta o seu cofre coa oficina como ficheiro.
keywords: cofre de ferramentas, ferramentas, conxunto de ferramentas, ferramentas propias, anotacións gardadas, favoritos, estándar da oficina, importar, exportar, compartir, json
from: 7dfa36e0
---

O separador {{ui:Ferramentas}} contén o seu **cofre de ferramentas**: anotacións gardadas co seu aspecto, listas para debuxar de novo. Unha ferramenta conserva o tipo de anotación, a cor, o grosor de liña, o recheo, a opacidade, o tamaño do texto e o asunto, ademais do texto dun selo, do nome de grupo dun contador ou do texto inicial dun recadro ou dunha chamada.

## As ferramentas iniciais

Un cofre novo ten seis: "Nube de revisión" (vermella), "Nube de pregunta" (azul), "Marcador amarelo", "Chamada RFI" (azul, comeza con "RFI: "), "Verificar en obra" (unha chamada laranxa que di "Verificar en obra.") e "Aprobado con observacións" (un selo).

## Debuxar cunha ferramenta

1. Abra o separador {{ui:Ferramentas}}.
2. Faga clic nunha ferramenta. Parece premida, e a ferramenta correspondente da barra de ferramentas actívase.
3. Debuxe como de costume. {{ui:Propiedades}} di: 'Debuxando con "<ferramenta>" desde o cofre de ferramentas.'

Mentres unha ferramenta do cofre está activa, os cambios que faga en {{ui:Propiedades}} antes de debuxar aplícanse a esa ferramenta só por agora, sen cambiar a ferramenta gardada nin os seus axustes normais. Escoller un botón da barra de ferramentas, ou premer a tecla dunha ferramenta, volve á ferramenta simple.

## Gardar as súas propias

1. Debuxe unha anotación e déalle o estilo que quere: cor, liña, recheo, asunto, texto do selo.
2. Seleccióneaa.
3. Escolla {{ui:Gardar o seleccionado como ferramenta}} no separador {{ui:Ferramentas}}, ou {{ui:Gardar como ferramenta}} en {{ui:Propiedades}}.
4. Escriba un {{ui:Nome da ferramenta}} e escolla {{ui:Gardar ferramenta}}.

Resultado: a ferramenta engádese ao final do cofre, e o separador {{ui:Ferramentas}} ábrese para amosala.

## Selos feitos a partir dunha selección

Seleccione varias anotacións (ou contido da páxina coa ferramenta {{ui:Contido}}) e escolla {{ui:Gardar a selección como selo…}} en {{ui:Máis}} ou no menú do botón dereito. O cofre recibe un selo que as contén todas ("Selo: 3 anotacións xuntas"). Faga clic nel e logo faga clic en calquera folla: as anotacións caen xuntas, centradas onde fai clic, como anotacións novas co seu nome; o contido da páxina debúxase na páxina nese punto. Estes selos gárdanse e compártense co cofre como calquera ferramenta.

## Retirar unha ferramenta

Escolla a × ao final da fila da ferramenta, e logo {{ui:Eliminar}}. As anotacións xa debuxadas con ela quedan como están.

## Onde se garda o cofre

O cofre gárdase **neste navegador, neste ordenador**. Outro navegador ou ordenador ten o seu propio cofre (comezando polas seis predeterminadas); unha xanela privada esquécao ao pechala, e borrar os datos deste sitio nos axustes do navegador elimínao.

Se o navegador non o pode gardar (almacenamento desactivado ou cheo), a barra de estado di: "O cofre de ferramentas non se puido conservar neste navegador (o almacenamento está desactivado ou cheo). Expórteo para conservalo."

:::safari
Safari pode borrar os datos almacenados dun sitio web cando non o usou durante un tempo. Exporte o seu cofre de cando en vez para poder importalo de novo.
:::

**Exporte o seu cofre como copia de seguridade**, especialmente despois de crear ferramentas nas que confía.

## Compartir un cofre coa oficina

1. Defina as ferramentas unha vez.
2. Escolla {{ui:Exportar}}. Obterá "MarkupCraft tool chest.json".
3. Coloque ese ficheiro onde a oficina garda os seus estándares, ou envíeo.
4. Os demais escollen {{ui:Importar}} no seu separador {{ui:Ferramentas}} e seleccionan o ficheiro.

Resultado: "Importadas 12 ferramentas desde «MarkupCraft tool chest.json»." As ferramentas que proceden do mesmo cofre substitúen as súas copias anteriores, así que importar un cofre de oficina actualizado renova esas ferramentas en vez de duplicalas; as novas engádense. Un cofre admite até 500 ferramentas.

MarkupCraft comproba cada valor dun ficheiro importado e omite o que non pode usar ("2 omitidas (non utilizables)"). Os ficheiros que non son un cofre recházanse: "Este ficheiro non é un cofre de ferramentas de MarkupCraft." ou "Este ficheiro non é un cofre de ferramentas (non é JSON)."

Non se poden importar os ficheiros de cofres de ferramentas doutros programas de anotación.
