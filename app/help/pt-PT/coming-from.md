---
title: Vindo de outro software de anotação
summary: Como os hábitos de um programa de anotação de PDF de secretária se traduzem no MarkupCraft, e as diferenças que apanham as pessoas desprevenidas.
keywords: mudar, mudança, migrar, familiar, anotação de PDF de secretária, caixa de ferramentas, lista de anotações, sobreposição, sessões, perfil, atalhos, diferenças
from: c8f323e1
---

Se revê desenhos no Bluebeam Revu (ou comenta PDF noutro programa de PDF de secretária), a maior parte do MarkupCraft vai parecer-lhe familiar: nuvens, chamadas, uma caixa de ferramentas, uma lista de anotações, estados com respostas, medições calibradas, sobreposições de folhas. A grande diferença é a forma como os ficheiros são tratados, por isso leia a secção seguinte mesmo que salte o resto.

## As cinco diferenças que importam

1. **Guardar cria um ficheiro novo.** O MarkupCraft funciona no navegador e não consegue escrever por cima do PDF no seu disco. {{ui:Guardar}} transfere "<name> (marked up).pdf", e o original fica como estava. Da próxima vez, abra a cópia "(marked up)", e limpe as cópias antigas por si.
2. **O PDF é guardado quando guarda.** Até lá, uma cópia de recuperação neste navegador mantém as suas anotações, mesmo em caso de falha ou de separador fechado, e o MarkupCraft a oferece da próxima vez. É uma rede de segurança: guarde o PDF para manter a revisão.
3. **O seu perfil vive no navegador.** O seu nome de autor, as definições das ferramentas e a caixa de ferramentas ficam neste navegador, neste computador. Outro navegador ou computador começa de novo, e limpar os dados do site apaga-os. Exporte a sua caixa de ferramentas como cópia de segurança. Veja [O que fica neste navegador](topic:browser-storage).
4. **Ainda não há sessões partilhadas.** Não existe uma sessão de revisão partilhada em tempo real nem um projeto na nuvem. A revisão viaja no PDF: guarde, envie a cópia, a pessoa seguinte responde e guarda.
5. **A escala é por folha, e só por folha.** Não há viewports dentro de uma folha nem «aplicar esta escala a todas as páginas». Calibre cada folha em que medir.

## Hábito a hábito

| O que costuma fazer | No MarkupCraft |
|---|---|
| Painel de miniaturas, etiquetas de página | {{ui:Folhas}} à esquerda. Os nomes vêm das etiquetas de página ou são lidos da legenda; corrija-os com {{ui:Mudar o nome da folha}}. |
| Abrir vários PDF como conjunto | Abra-os todos de uma vez; passam a formar uma só lista. Nenhum ficheiro de conjunto é guardado: abra os mesmos PDF da próxima vez. |
| Caixa de ferramentas com conjuntos de ferramentas | Separador {{ui:Ferramentas}}: uma caixa por navegador, ferramentas guardadas com estilo e assunto. Partilhe-as com {{ui:Exportar}} e {{ui:Importar}} como ficheiro JSON. Ficheiros de conjuntos de ferramentas de outros programas não podem ser importados. |
| Painel de propriedades | Separador {{ui:Propriedades}}: estado, assunto, comentário, estilo, respostas e item da lista de anomalias, tudo no mesmo sítio. |
| Lista de anotações com colunas | Separador {{ui:Anotações}} com filtros por folha, autor, estado e tipo. Exporte CSV ou BCF. Ainda sem colunas personalizadas nem resumo em PDF ou em folha de cálculo. |
| Estado e situação da revisão | {{ui:Estado}}: Aberto, Aceite, Rejeitado, Concluído. Sem conjuntos de estados personalizados. Guardados como estados de revisão padrão. |
| Respostas numa anotação | O fio «Respostas» em {{ui:Propriedades}}, com as mudanças de estado registadas nele. Uma resposta enviada não pode ser editada. |
| Calibrar, depois comprimento, área, contagem | {{ui:Calibrar}}, {{ui:Comprimento}} ({{key:M}}), {{ui:Área}} ({{key:Q}}, dá área e perímetro), {{ui:Contagem}} ({{key:U}}). Ainda sem ângulo, raio, volume, comprimento de polilinha nem recortes. |
| Páginas em sobreposição | {{ui:Comparar}}: vermelho para a antiga, azul para a nova, alinhar por dois pontos. Sem nuvens automáticas de «comparar documentos». |
| Carimbos | {{ui:Carimbo}} com seis carimbos incorporados e texto personalizado, assinado com o seu nome e a data. Ainda sem carimbos com imagem ou assinatura. |
| Acompanhamento de anomalias ou questões | Separador {{ui:Lista de anomalias}}: itens numerados com responsável, data limite e estado; exportação em CSV. |
| Sessão de colaboração em tempo real | Ainda não disponível. Passe o PDF guardado a outras pessoas. |
| Achatar | Ainda não implementado. As anotações ficam como comentários que outros visualizadores conseguem mostrar e imprimir. Para as integrar na página, use {{ui:Integrar na página ao guardar}}. |
| Camadas para anotações | Ainda não implementado. Use assuntos, autores e os filtros da lista para ordenar os comentários. |
| Hiperligações entre folhas | Ainda não implementado. |
| Barra de espaço para deslocar a vista, roda para fazer zoom | O mesmo: mantenha {{key:Space}} premido e arraste; a roda faz zoom no ponteiro. A roda nunca desloca a página. |

## Teclas que diferem

Muitas teclas de uma só letra são o que se espera, mas confirme estas antes de as premir:

- {{key:K}} é {{ui:Chamada}}, e {{key:Q}} é {{ui:Área}}. Se está habituado a Q para chamadas, aqui inicia uma área.
- {{key:C}} é a caixa {{ui:Nuvem}}; {{key:Shift+C}} é {{ui:Nuvem livre}}.
- {{key:M}} é {{ui:Comprimento}}, {{key:U}} é {{ui:Contagem}}, {{key:Y}} é {{ui:Polilinha}}, {{key:G}} é {{ui:Polígono}}, {{key:I}} é {{ui:Realce}}.
- {{key:Mod+D}} duplica a seleção (em vez do marcador do navegador).
- {{key:Mod+Plus}} e {{key:Mod+Minus}} fazem zoom na folha, não na página do navegador.
- Qualquer tecla pode ser alterada: veja abaixo.

:::tip
Se os seus dedos conhecem o Bluebeam Revu, escolha o estilo de menu {{ui:Revisão de PDF}} em {{ui:Definições}} › {{ui:MarkupCraft}} › {{ui:Menus, teclas e rato}}: uma barra de menus (Ficheiro, Editar, Ver, Documento, Anotação, Medir, Janela) sobre uma linha de ferramentas de revisão, {{key:Q}} para uma chamada, {{key:H}} para o realce, {{key:N}} para um polígono, e as medições em {{key:Alt+Shift}} com uma letra. Qualquer tecla também pode ser alterada aí. Veja [Menus, teclas e rato](topic:menus-keys-and-mouse).
:::

A lista completa está em [Teclado e rato](topic:keyboard).

## Coisas que funcionam de forma diferente do que poderia esperar

- **As ferramentas continuam ativas.** Depois de uma nuvem, continua a desenhar nuvens. {{key:Esc}} uma vez limpa a seleção; duas vezes volta a {{ui:Selecionar}}.
- **Texto e chamadas precisam de texto.** Termine sem nada escrito e não é acrescentada nenhuma anotação. As notas ficam vazias.
- **As medições precisam primeiro de escala.** {{ui:Comprimento}} e {{ui:Área}} mudam para {{ui:Calibrar}} numa folha sem calibrar e voltam depois.
- **Comentários de outros programas.** Retângulos, elipses, linhas, polilinhas, polígonos, tinta, caixas de texto e notas adesivas feitos noutros programas tornam-se anotações do MarkupCraft editáveis, e são reescritos à maneira do MarkupCraft ao guardar (o aspeto pode mudar ligeiramente). Os realces de texto, os carimbos de outros programas e outros tipos especiais ficam só de leitura: pode responder-lhes, mas não alterá-los.
- **Os caracteres fora das letras da Europa Ocidental** saem como «?» no PDF guardado. Veja [Guardar o PDF anotado](topic:save-the-marked-up-pdf).
- **As datas dos carimbos** usam UTC, por isso um carimbo feito tarde à noite nas Américas pode mostrar a data de amanhã.
- **As medições transitam** como comentários de medição padrão, e cada folha calibrada mantém a sua escala, por isso um programa que leia medições de PDF costuma poder mostrá-las. O comportamento exato depende desse programa.

## Usar os dois

Pode ir e voltar. Os comentários feitos noutros programas abrem no MarkupCraft, e o PDF "(marked up)" abre noutros programas de PDF com todas as anotações, respostas e estados visíveis. O que só o MarkupCraft lê de volta (responsável e data limite do item da lista de anomalias, estado do item) fica guardado no ficheiro para o MarkupCraft.
