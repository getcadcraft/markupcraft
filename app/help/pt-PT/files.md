---
title: Ficheiros que o MarkupCraft abre e guarda
summary: PDF à entrada, uma cópia de PDF anotada à saída, mais ficheiros CSV, BCF e da caixa de ferramentas; para onde vai cada um, online e offline.
keywords: pdf, abrir, guardar, exportar, transferir, csv, bcf, bcfzip, json, caixa de ferramentas, tipos de ficheiro, formatos, carregar, palavra-passe, encriptado
from: b3045b4c
---

## O que o MarkupCraft abre

| Ficheiro | Como | O que acontece |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir}}, {{key:Mod+O}}, ou largar na área da folha. Vários de uma vez não há problema. | Cada página passa a ser uma folha. As anotações que já estão no ficheiro são lidas de novo (abaixo). |
| Caixa de ferramentas (`.json`) | separador {{ui:Ferramentas}}, depois {{ui:Importar}} | As ferramentas são acrescentadas à sua caixa. Veja [A caixa de ferramentas](topic:tool-chest). |

Tudo o resto é recusado com «O MarkupCraft abre ficheiros PDF.» na barra de estado. Se largar uma mistura, os PDF abrem-se e a barra de estado diz quantos ficheiros não eram PDF.

### Anotações que já estão num PDF

- **As anotações que o MarkupCraft guardou** voltam exatamente como estavam: tipo, estilo, autor, datas, estado, respostas, número da lista de anomalias, a escala da folha e os nomes de folha que tiver escrito.
- **Os comentários de outros programas de PDF** também são lidos. Retângulos, elipses, linhas e setas, polilinhas, polígonos, traços de caneta, caixas de texto e notas autocolantes passam a ser anotações normais e editáveis do MarkupCraft. As respetivas respostas e estados de revisão vêm juntos.
- **Tudo o resto** (realces de texto feitos ao selecionar texto, carimbos de outros programas e outros tipos) é mostrado tal como está, marcado como só de leitura. Pode selecioná-lo, vê-lo na lista de anotações e responder-lhe, mas não o pode mover, alterar nem eliminar.
- As ligações e os campos de formulário ficam como estão e não são listados.
- Uma escala guardada por outro programa (uma viewport de medição) é usada como escala da folha quando o MarkupCraft compreende a sua unidade.

### Ficheiros que não abrem

- Um PDF que precisa de palavra-passe: «"name" precisa de uma palavra-passe para abrir. Abra uma cópia sem proteção.»
- Um ficheiro danificado ou que não é mesmo um PDF: «"name" não pôde ser lido como PDF (…)».
- Um PDF que abre mas está protegido contra alterações abre normalmente. Guardá-lo é recusado (veja abaixo).

Quando se abrem vários ficheiros de uma vez, abrem-se os que funcionam e uma caixa chamada «Alguns ficheiros não abriram» lista os restantes.

## O que o MarkupCraft guarda

Guardar é sempre uma **transferência** de um ficheiro novo. Uma página web não consegue substituir um ficheiro no seu computador, e o MarkupCraft nunca altera o original.

| Escolha | Obtém | Notas |
|---|---|---|
| {{ui:Guardar}} ({{key:Mod+S}}) | «<name> (marked up).pdf» | Uma cópia do PDF original com cada anotação escrita como um verdadeiro comentário de PDF. Se guardar de novo um ficheiro «(marked up)», o nome mantém-se; nunca passa a «(marked up) (marked up)». Veja [Guardar o PDF anotado](topic:save-the-marked-up-pdf). |
| separador {{ui:Anotações}}, depois {{ui:CSV}} | «<name> markups.csv» | As anotações como estão listadas (aplicam-se os filtros). |
| separador {{ui:Anotações}}, depois {{ui:BCF}} | «<name> markups.bcfzip» | BCF 2.1 para ferramentas de coordenação BIM, uma imagem instantânea por anotação. Veja [Noções básicas de BCF](topic:bcf-basics). |
| separador {{ui:Lista de anomalias}}, depois {{ui:Exportar CSV}} | «<name> punch list.csv» | Os itens da lista de anomalias por ordem de número. |
| separador {{ui:Ferramentas}}, depois {{ui:Exportar}} | «MarkupCraft tool chest.json» | A sua caixa de ferramentas, para partilhar ou conservar. |

«<name>» é o nome do primeiro PDF aberto, sem «.pdf».

Os ficheiros CSV abrem-se em qualquer folha de cálculo. São UTF-8 com a marca que as folhas de cálculo procuram, para que os nomes com acentos saiam certos. Uma célula que comece por =, +, - ou @ recebe um apóstrofo à frente, para que uma folha de cálculo nunca a execute como fórmula.

## Para onde vão as transferências

Quem decide é o seu navegador: normalmente a pasta Transferências, ou pergunta de cada vez se o tiver configurado assim. Veja [Navegadores e computadores](common:browsers#what-differs-between-browsers).

:::chromium
Quando guarda de uma só vez todos os ficheiros alterados de um conjunto, o Chrome e o Edge podem perguntar se este site pode transferir vários ficheiros. Escolha {{ui:Permitir}}, ou fica só com a primeira cópia.
:::

:::safari
Num iPad, o Safari pergunta antes de cada transferência e coloca o ficheiro na aplicação Ficheiros, em Transferências. Num Mac vai para a pasta definida nas definições do Safari.
:::

## Online e offline

- **Os seus PDF nunca saem deste computador**, online ou offline. Não há qualquer carregamento para lado nenhum.
- O leitor de PDF é carregado na primeira vez que abre um PDF («A carregar o leitor de PDF…»), e o gravador de PDF na primeira vez que guarda («A carregar o gravador de PDF…») ou abre um ficheiro que já tem comentários.
- Com ligação, ambos são carregados a partir do site.
- **Para trabalhar sem ligação,** escolha {{ui:Guardar para offline}} na barra no topo enquanto estiver online. O botão conta «A guardar N de M» e depois diz «Pronto para offline». Essa cópia inclui o leitor de PDF e o gravador de PDF (cerca de 6 MB no total) e esta ajuda, pelo que depois abrir, anotar e guardar PDF funciona offline neste navegador.
- Se o botão disser «Não foi possível guardar», alguns ficheiros não foram transferidos: verifique a ligação e clique nele de novo. Se disser «Offline indisponível», esta janela do navegador não consegue manter uma cópia offline (janelas privadas e alguns computadores geridos); use uma janela normal.
- Para atualizar ou largar a cópia, clique em «Pronto para offline» e escolha «Guardar novamente (obter a versão mais recente)» ou «Remover a cópia offline». Mais em [Trabalhar offline](common:offline).

:::offline
Está offline. Se a barra no topo disser «Pronto para offline», tudo funciona, incluindo guardar. Se não disser e ainda não tiver guardado neste separador, {{ui:Guardar}} pode falhar com «Não foi possível carregar o gravador de PDF». As suas anotações continuam no separador: mantenha-o aberto, volte a ficar online e escolha {{ui:Guardar}} de novo.
:::

## Coisas a saber

- Os conjuntos de plantas grandes demoram a abrir: o MarkupCraft lê o texto de cada página para encontrar os números das folhas. A barra de estado conta as folhas à medida que avança.
- Abrir o mesmo PDF duas vezes acrescenta as suas folhas duas vezes. Se isso acontecer, feche o conjunto e abra-o de novo.
- {{ui:Fechar}} fecha de uma vez todos os ficheiros abertos. Se algum tiver anotações por guardar, pergunta: {{ui:Cancelar}}, {{ui:Fechar sem guardar}} ou {{ui:Guardar cópias primeiro}}.
- Guardar na nuvem ainda não está disponível, nem há ainda versões para computador. Mantenha os seus PDF junto dos outros ficheiros do projeto e faça cópias de segurança como de costume. Veja [Para onde vão os seus ficheiros](common:your-files).
