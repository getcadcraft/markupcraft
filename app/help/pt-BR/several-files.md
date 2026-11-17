---
title: Trabalhar com vários arquivos de uma vez
summary: Abra vários PDFs como um conjunto, encontre folhas entre arquivos, copie marcações entre eles e salve a cópia de cada arquivo.
keywords: vários arquivos, vários pdfs, conjunto de plantas, conjunto, lote, muitos arquivos, combinar, disciplinas, arquitetônico estrutural mecânico, salvar tudo, fechar
from: f59354ae
---

Um conjunto de plantas costuma chegar como um PDF por disciplina, ou um PDF por folha. O MarkupCraft trata tudo o que você abre como **um conjunto**.

## Abrir todos juntos

Selecione todos os PDFs no seletor de arquivos de uma vez, ou solte-os todos na área das folhas. Para adicionar mais depois, abra-os da mesma forma; eles entram no fim da lista {{ui:Folhas}}, na ordem em que você os abriu.

Resultado: "6 arquivos abertos (84 folhas no conjunto)." Cada página é uma folha. Folhas com número mostram "Folha A-101" abaixo do nome; as outras mostram o arquivo e a página.

Não há um arquivo de "conjunto" salvo: na próxima vez, abra os mesmos PDFs de novo (as cópias "(marked up)", se você as salvou).

## No conjunto inteiro

- **Encontrar uma folha:** {{ui:Buscar folhas}} procura em números, nomes de folha e nomes de arquivo de todos os arquivos. {{key:PageUp}} e {{key:PageDown}} percorrem todas as folhas de todos os arquivos, em ordem.
- **Lista de marcações:** a guia {{ui:Marcações}} lista marcações de todos os arquivos. Filtre por {{ui:Folha}} para restringir. O CSV tem uma coluna Arquivo.
- **Lista de pendências:** uma numeração para o conjunto inteiro.
- **Comparar:** a folha antiga e a nova podem vir de arquivos diferentes.
- **Copiar e colar:** {{key:Mod+C}} em uma folha e {{key:Mod+V}} em outra, em qualquer arquivo. A cópia cai no mesmo lugar da página, levemente deslocada.

## Salvar

Escolha {{ui:Salvar}}. Com mais de um arquivo aberto, o MarkupCraft pergunta:

- {{ui:Este arquivo}}: uma cópia com marcações do arquivo da folha em que você está.
- {{ui:Todos os arquivos alterados}}: uma cópia de cada arquivo com alterações não salvas. Cada um é baixado separadamente, como "<nome do arquivo> (marked up).pdf".
- {{ui:Cancelar}}

:::chromium
Na primeira vez que você salvar vários arquivos de uma vez, o Chrome e o Edge podem perguntar se este site pode baixar vários arquivos. Escolha {{ui:Permitir}}; caso contrário, só a primeira cópia chega.
:::

:::safari
O Safari pode perguntar uma vez para cada arquivo. No iPad, cada cópia vai para o app Arquivos.
:::

Um arquivo cujas marcações foram salvas deixa de contar como alterado; os outros continuam contando.

As exportações de CSV, BCF e da lista de pendências recebem o nome do **primeiro** arquivo que você abriu.

## Fechar

{{ui:Fechar}} fecha o conjunto inteiro; ainda não há como fechar só um arquivo. Se houver algo não salvo, ele pergunta:

- {{ui:Cancelar}}: nada acontece.
- {{ui:Fechar sem salvar}}: as marcações não salvas são perdidas.
- {{ui:Salvar cópias primeiro}}: salva todos os arquivos alterados e depois fecha.

Fechar também apaga o histórico de desfazer.

## Conjuntos grandes

- O texto de cada página é lido na abertura para encontrar números de folha, então um conjunto de 100 folhas leva um tempo. A barra de status conta as folhas conforme avança.
- As imagens das folhas na lista são desenhadas conforme você rola até elas.
- Cada PDF aberto fica na memória da aba do navegador. Se a aba ficar lenta, feche outras abas pesadas, ou revise uma disciplina por vez.
- Abrir o mesmo arquivo duas vezes dá duas cópias das folhas dele. Se isso acontecer, escolha {{ui:Fechar}} e abra o conjunto de novo.
