---
title: Substituir folhas por um conjunto revisto
summary: Abra a nova emissão de um conjunto de desenhos ao lado da antiga e transfira cada anotação aberta para a folha com o mesmo número.
keywords: substituir folhas, conjunto revisto, nova emissão, revisão, substituir, substituída, passar as anotações, reemitir, aditamento, boletim
from: e15163a0
---

Quando chega uma nova emissão dos desenhos, a substituição de folhas leva a sua revisão para ela: cada folha nova recebe as anotações da folha antiga com o mesmo número, e a folha antiga fica carimbada como "Substituída".

## Substituir folhas

1. Abra o conjunto atual, com as suas anotações.
2. Escolha {{ui:Páginas}}, depois {{ui:Substituir folhas por um conjunto revisto…}}, e escolha os novos PDF. Abrem-se ao lado do conjunto antigo.
3. A caixa lista cada folha nova e a folha antiga que substitui. Desmarque uma linha para deixar as anotações dessa folha onde estão. As folhas com um número novo não têm nada para transferir.
4. Escolha se deixa as anotações fechadas (Aceite, Rejeitado, Concluído) nas folhas antigas, e se carimba as folhas antigas.
5. Escolha {{ui:Passar as anotações}}.

Resultado: as anotações aparecem nas folhas novas, no mesmo sítio, com as respostas, os estados e os autores. Um item da lista de anomalias passa para a folha nova e mantém o seu número. As folhas antigas mantêm as suas anotações como registo, sob um carimbo vermelho "Substituída". A barra de estado resume o que foi transferido.

{{ui:Só abrir os ficheiros}} abre o novo conjunto sem transferir nada, por exemplo para comparar primeiro. Veja [Comparar duas revisões](topic:compare-revisions).

## Como as folhas são associadas

- **Pelo número da folha**, lido tal como a lista de folhas o mostra: um número que escreveu com {{ui:Mudar o nome da folha}}, a etiqueta de página do PDF, ou a legenda. Maiúsculas, espaços, pontos e traços não importam: "A-101" coincide com "a101".
- Se dois ficheiros abertos tiverem uma folha com esse número, substitui-se a mais recente, por isso pode substituir emissão após emissão.
- **Conjuntos digitalizados** não têm números para ler. Quando um ficheiro novo não tem nenhum, as suas páginas são associadas, por ordem de página, a um ficheiro aberto com o mesmo número de páginas. Verifique essas linhas antes de transferir.

## Bons a saber

- Um {{key:Mod+Z}} desfaz toda a substituição: as cópias, os carimbos e os itens da lista de anomalias movidos. Os novos ficheiros continuam abertos.
- Se uma folha nova tiver um tamanho diferente, as anotações são escaladas com a página, e a barra de estado indica quantas convém verificar.
- A escala de uma folha antiga é transferida quando a folha nova tem o mesmo tamanho e não tem escala.
- Os comentários feitos por outros programas ficam nas folhas antigas: aqui são só de leitura.
- Guarde os novos ficheiros para manter as anotações transferidas. Veja [Guardar o PDF com anotações](topic:save-the-marked-up-pdf).
