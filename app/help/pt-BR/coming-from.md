---
title: Vindo de outros softwares de marcação
summary: Como os hábitos de um programa de marcação de PDF para desktop se mapeiam para o MarkupCraft, e as diferenças que pegam as pessoas de surpresa.
keywords: trocar, migrar, familiar, marcação de PDF para desktop, caixa de ferramentas, lista de marcações, sobreposição, sessões, perfil, atalhos, diferenças
from: c8f323e1
---

Se você revisa desenhos no Bluebeam Revu (ou comenta PDFs em outro programa de PDF para desktop), a maior parte do MarkupCraft vai parecer familiar: nuvens, chamadas, uma caixa de ferramentas, uma lista de marcações, status com respostas, medições calibradas, sobreposições de folhas. A forma como os arquivos são tratados é a grande diferença, então leia a próxima seção mesmo que pule o resto.

## As cinco diferenças que importam

1. **Salvar cria um arquivo novo.** O MarkupCraft roda no navegador e não consegue sobrescrever o PDF no seu disco. {{ui:Salvar}} baixa "<name> (marked up).pdf", e o original permanece como estava. Da próxima vez, abra a cópia "(marked up)" e limpe as cópias antigas por conta própria.
2. **O PDF é salvo quando você salva.** Até lá, uma cópia de recuperação neste navegador mantém suas marcações através de uma falha ou de uma aba fechada, e o MarkupCraft a oferece de volta na próxima vez. É uma rede de segurança: salve o PDF para manter a revisão.
3. **Seu perfil fica no navegador.** Seu nome de autor, configurações de ferramenta e caixa de ferramentas ficam armazenados neste navegador, neste computador. Um navegador ou computador diferente começa do zero, e limpar os dados do site os apaga. Exporte a sua caixa de ferramentas como backup. Veja [O que fica neste navegador](topic:browser-storage).
4. **Ainda não há sessões compartilhadas.** Não existe sessão de revisão ao vivo e compartilhada, nem projeto na nuvem. A revisão viaja no PDF: salve, envie a cópia, a próxima pessoa responde e salva.
5. **A escala é por folha, e só por folha.** Não há viewports dentro de uma folha nem "aplicar esta escala a todas as páginas". Calibre cada folha que você medir.

## Hábito por hábito

| Você está acostumado a | No MarkupCraft |
|---|---|
| Painel de miniaturas, rótulos de página | {{ui:Folhas}} à esquerda. Os nomes vêm dos rótulos de página ou são lidos da legenda; corrija-os com {{ui:Renomear folha}}. |
| Abrir vários PDFs como um conjunto | Abra todos de uma vez; eles viram uma lista só. Nenhum arquivo de conjunto é salvo: abra os mesmos PDFs na próxima vez. |
| Caixa de ferramentas com conjuntos de ferramentas | Guia {{ui:Ferramentas}}: uma caixa por navegador, ferramentas salvas com estilo e assunto. Compartilhe por {{ui:Exportar}} e {{ui:Importar}} como arquivo JSON. Arquivos de conjuntos de ferramentas de outros programas não podem ser importados. |
| Painel de propriedades | Guia {{ui:Propriedades}}: status, assunto, comentário, estilo, respostas e item de revisão em um só lugar. |
| Lista de marcações com colunas | Guia {{ui:Marcações}} com filtros por folha, autor, status e tipo. Exporte CSV ou BCF. Sem colunas personalizadas e sem resumo em PDF ou planilha por enquanto. |
| Status e estado de revisão | {{ui:Status}}: Aberto, Aceito, Rejeitado, Concluído. Sem conjuntos de status personalizados. Salvos como estados de revisão padrão. |
| Respostas em uma marcação | A conversa "Respostas" em {{ui:Propriedades}}, com as mudanças de status registradas nela. Uma resposta enviada não pode ser editada. |
| Calibrar, depois comprimento, área, contagem | {{ui:Calibrar}}, {{ui:Comprimento}} ({{key:M}}), {{ui:Área}} ({{key:Q}}, dá área e perímetro), {{ui:Contagem}} ({{key:U}}). Sem ângulo, raio, volume, comprimento de polilinha ou recortes ainda. |
| Sobrepor páginas | Guia {{ui:Comparar}}: vermelho para o antigo, azul para o novo, alinhe por dois pontos. Sem "comparar documentos" automático com nuvens. |
| Carimbos | {{ui:Carimbo}} com seis carimbos prontos e texto personalizado, assinado com o seu nome e a data. Ainda sem carimbos de imagem ou de assinatura. |
| Acompanhamento de pendências ou de problemas | Guia {{ui:Lista de pendências}}: itens numerados com responsável, data limite e status; exportação em CSV. |
| Sessão de colaboração ao vivo | Ainda não disponível. Passe o PDF salvo adiante. |
| Achatar | Ainda não implementado. As marcações continuam como comentários que outros visualizadores podem mostrar e imprimir. |
| Camadas para marcações | Ainda não implementado. Use assuntos, autores e os filtros da lista para ordenar os comentários. |
| Hiperlinks entre folhas | Ainda não implementado. |
| Barra de espaço para mover, roda para dar zoom | O mesmo: mantenha {{key:Space}} pressionada e arraste; a roda dá zoom no ponteiro. A roda nunca rola a página. |

## Teclas que diferem

Muitas teclas de uma letra são o que você espera, mas confira estas antes que os dedos façam isso por você:

- {{key:K}} é {{ui:Chamada}}, e {{key:Q}} é {{ui:Área}}. Se você está acostumado a usar Q para chamadas, aqui ele vai iniciar uma área.
- {{key:C}} é a caixa {{ui:Nuvem}}; {{key:Shift+C}} é {{ui:Nuvem livre}}.
- {{key:M}} é {{ui:Comprimento}}, {{key:U}} é {{ui:Contagem}}, {{key:Y}} é {{ui:Polilinha}}, {{key:G}} é {{ui:Polígono}}, {{key:I}} é {{ui:Destaque}}.
- {{key:Mod+D}} duplica a seleção (em vez do favorito do navegador).
- {{key:Mod+Plus}} e {{key:Mod+Minus}} aplicam zoom na folha, não na página do navegador.
- Qualquer tecla pode ser alterada: veja abaixo.

:::tip
Se os seus dedos conhecem o Bluebeam Revu, escolha o estilo de menu {{ui:Revisão de PDF}} em {{ui:Configurações}} › {{ui:MarkupCraft}} › {{ui:Menus, teclas e mouse}}: uma barra de menus (Arquivo, Editar, Exibir, Documento, Marcação, Medir, Janela) sobre uma fileira de ferramentas de revisão, {{key:Q}} para uma chamada, {{key:H}} para o destaque, {{key:N}} para um polígono, e as medições em {{key:Alt+Shift}} com uma letra. Qualquer tecla também pode ser alterada ali. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).
:::

A lista completa está em [Teclado e mouse](topic:keyboard).

## Coisas que funcionam de forma diferente do esperado

- **As ferramentas continuam ativas.** Depois de uma nuvem, você continua desenhando nuvens. {{key:Esc}} uma vez limpa a seleção; duas vezes volta para {{ui:Selecionar}}.
- **Texto e chamadas precisam de texto.** Termine sem nada digitado e nenhuma marcação é adicionada. Notas são mantidas vazias.
- **Medições precisam de escala antes.** {{ui:Comprimento}} e {{ui:Área}} mudam para {{ui:Calibrar}} em uma folha não calibrada e voltam depois.
- **Comentários de outros programas.** Retângulos, elipses, linhas, polilinhas, polígonos, tinta, caixas de texto e notas adesivas feitos em outros lugares viram marcações editáveis do MarkupCraft, e são reescritos do jeito do MarkupCraft ao salvar (a aparência pode mudar um pouco). Destaques de texto, carimbos de outros programas e outros tipos especiais permanecem somente leitura: você pode responder a eles, mas não alterá-los.
- **Caracteres fora das letras da Europa Ocidental** são impressos como "?" no PDF salvo. Veja [Salvar o PDF marcado](topic:save-the-marked-up-pdf).
- **Datas de carimbo** usam UTC, então um carimbo feito tarde da noite nas Américas pode mostrar a data de amanhã.
- **Medições são transferidas** como comentários de medição padrão, e cada folha calibrada mantém a sua escala, então um programa que lê medições de PDF geralmente consegue mostrá-las. O comportamento exato depende desse programa.

## Usando os dois

Você pode alternar entre eles. Comentários feitos em outros lugares abrem no MarkupCraft, e o PDF "(marked up)" abre em outros programas de PDF com todas as marcações, respostas e status visíveis. O que só o MarkupCraft lê de volta (responsável e data limite do item de revisão, status do item) fica guardado no arquivo para o MarkupCraft.
