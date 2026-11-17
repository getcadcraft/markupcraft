---
title: Trabalhar com vários ficheiros de uma vez
summary: Abra muitos PDF como um só conjunto, encontre folhas entre ficheiros, copie anotações entre eles e guarde a cópia de cada ficheiro.
keywords: vários ficheiros, vários pdf, conjunto de desenhos, conjunto, lote, muitos ficheiros, combinar, disciplinas, arquitetónico, estrutural, mecânico, guardar tudo, fechar
from: f59354ae
---

Um conjunto de desenhos chega muitas vezes como um PDF por disciplina, ou como um PDF por folha. O MarkupCraft trata tudo o que abre como **um só conjunto**.

## Abrir em conjunto

Selecione todos os PDF no seletor de ficheiros de uma vez, ou largue-os todos na área das folhas. Para acrescentar mais depois, abra-os da mesma forma; juntam-se ao fim da lista {{ui:Folhas}}, pela ordem de abertura.

Resultado: "Abertos 6 ficheiros (84 folhas no conjunto)." Cada página é uma folha. As folhas com número mostram "Folha A-101" por baixo do nome; as outras mostram o ficheiro e a página.

Não há ficheiro de conjunto guardado: da próxima vez, abra de novo os mesmos PDF (as cópias "(marked up)", se tiverem sido guardadas).

## No conjunto inteiro

- **Procurar uma folha:** {{ui:Procurar folhas}} procura nos números de folha, nos nomes de folha e nos nomes de ficheiro de todos os ficheiros. {{key:PageUp}} e {{key:PageDown}} percorrem todas as folhas de todos os ficheiros, por ordem.
- **Lista de anotações:** o separador {{ui:Anotações}} lista as anotações de todos os ficheiros. Filtre por {{ui:Folha}} para a reduzir. O CSV tem uma coluna Ficheiro.
- **Lista de anomalias:** uma só numeração para todo o conjunto.
- **Comparar:** a folha antiga e a nova podem vir de ficheiros diferentes.
- **Copiar e colar:** {{key:Mod+C}} numa folha e {{key:Mod+V}} noutra, em qualquer ficheiro. A cópia fica no mesmo sítio da página, ligeiramente deslocada.

## Guardar

Escolha {{ui:Guardar}}. Com mais de um ficheiro aberto, o MarkupCraft pergunta:

- {{ui:Este ficheiro}}: uma cópia anotada do ficheiro da folha em que está.
- {{ui:Todos os ficheiros alterados}}: uma cópia de cada ficheiro com alterações não guardadas. Cada uma é transferida separadamente, como "<file name> (marked up).pdf".
- {{ui:Cancelar}}

:::chromium
Na primeira vez que guardar vários ficheiros de uma vez, o Chrome e o Edge podem perguntar se este site pode transferir vários ficheiros. Escolha {{ui:Permitir}}; caso contrário, só chega a primeira cópia.
:::

:::safari
O Safari pode perguntar uma vez por cada ficheiro. No iPad, cada cópia vai para a app Ficheiros.
:::

Um ficheiro cujas anotações foram guardadas deixa de contar como alterado; os outros continuam a contar.

As exportações CSV, BCF e da lista de anomalias têm o nome do **primeiro** ficheiro que abriu.

## Fechar

{{ui:Fechar}} fecha o conjunto inteiro; ainda não há maneira de fechar só um ficheiro. Se houver algo não guardado, pergunta:

- {{ui:Cancelar}}: nada acontece.
- {{ui:Fechar sem guardar}}: as anotações não guardadas perdem-se.
- {{ui:Guardar cópias primeiro}}: guarda cada ficheiro alterado e depois fecha.

Fechar também limpa o histórico de anulação.

## Conjuntos grandes

- O texto de cada página é lido ao abrir para encontrar os números das folhas, por isso um conjunto de 100 folhas demora algum tempo. A barra de estado conta as folhas à medida que avança.
- As imagens das folhas na lista são desenhadas à medida que as percorre.
- Cada PDF aberto fica na memória do separador do navegador. Se o separador ficar lento, feche outros separadores pesados, ou reveja uma disciplina de cada vez.
- Abrir o mesmo ficheiro duas vezes dá duas cópias das suas folhas. Se isso acontecer, escolha {{ui:Fechar}} e abra o conjunto de novo.
