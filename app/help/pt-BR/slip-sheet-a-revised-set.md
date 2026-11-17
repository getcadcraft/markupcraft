---
title: Substituir folhas por um conjunto revisado
summary: Abra a nova emissão de um conjunto de plantas ao lado da antiga e leve cada marcação aberta para a folha com o mesmo número.
keywords: substituir folhas, substituição de folhas, conjunto revisado, nova emissão, revisão, substituída, levar adiante, reemissão, aditivo, boletim
from: e15163a0
---

Quando chega uma nova emissão dos desenhos, a substituição de folhas leva a sua revisão para ela: cada nova folha recebe as marcações da folha antiga com o mesmo número, e a folha antiga recebe um carimbo "Substituído".

## Substituir folhas

1. Abra o conjunto atual, com as suas marcações.
2. Escolha {{ui:Páginas}}, depois {{ui:Substituir folhas por um conjunto revisado…}}, e escolha os novos PDFs. Eles abrem ao lado do conjunto antigo.
3. A caixa lista cada nova folha e a folha antiga que ela substitui. Desmarque uma linha para deixar as marcações dessa folha onde estão. Folhas com um número novo não têm nada para levar.
4. Escolha se deixa as marcações fechadas (Aceitas, Rejeitadas, Concluídas) nas folhas antigas, e se carimba as folhas antigas.
5. Escolha {{ui:Levar as marcações adiante}}.

Resultado: as marcações aparecem nas novas folhas no mesmo lugar, com as respostas, os status e os autores. Um item de pendência passa para a nova folha e mantém o seu número. As folhas antigas mantêm as marcações como registro, sob um carimbo vermelho "Substituído". A barra de status resume o que foi movido.

{{ui:Apenas abrir os arquivos}} abre o novo conjunto sem levar nada, por exemplo para comparar antes. Veja [Comparar duas revisões](topic:compare-revisions).

## Como as folhas são correspondidas

- **Pelo número da folha**, lido como a lista de folhas mostra: um número que você digitou com {{ui:Renomear folha}}, o rótulo de página do PDF ou a legenda. Maiúsculas, espaços, pontos e traços não importam: "A-101" corresponde a "a101".
- Se dois arquivos abertos tiverem uma folha com esse número, a mais recente é substituída, então você pode substituir emissão após emissão.
- **Conjuntos digitalizados** não têm números para ler. Quando um arquivo novo não tem números, as páginas dele são correspondidas em ordem de página a um arquivo aberto com o mesmo número de páginas. Confira essas linhas antes de levar.

## Bom saber

- Um {{key:Mod+Z}} desfaz a substituição inteira: as cópias, os carimbos e os itens de pendência movidos. Os novos arquivos continuam abertos.
- Se uma nova folha tiver tamanho diferente, as marcações são escaladas junto com a página, e a barra de status informa quantas devem ser conferidas.
- A escala de uma folha antiga é levada junto quando a nova folha tem o mesmo tamanho e não tem escala.
- Comentários feitos por outros programas ficam nas folhas antigas: são somente leitura aqui.
- Salve os novos arquivos para manter as marcações levadas. Veja [Salvar o PDF com marcações](topic:save-the-marked-up-pdf).
