---
title: Copiar uma área da página, ou uma sobreposição
summary: Copie parte de uma folha com um retângulo, uma elipse ou uma forma livre e cole em outra folha, no CadCraft, BimCraft, DetailCraft ou em qualquer programa, no tamanho real; copie como sobreposição transparente e alinhe uma imagem com dois pontos.
keywords: copiar área, área, recortar, captura, instantâneo, clipe, região, retângulo, elipse, círculo, forma livre, laço, imagem, png, sobreposição, transparente, tonalidade, opacidade, colar, tamanho real, escala, alinhar, dois pontos, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Escolha {{ui:Mais}} › {{ui:Copiar uma área da página…}}. Uma barra se abre sobre a folha.

## Escolher a área

Escolha {{ui:Retângulo}}, {{ui:Elipse}} ou {{ui:Livre}} na barra e arraste na folha:

- **Retângulo:** arraste uma caixa ao redor da parte a copiar.
- **Elipse:** arraste uma caixa; a elipse dentro dela é copiada e os cantos fora dela ficam transparentes.
- **Livre:** desenhe ao redor da parte a copiar; a forma se fecha sozinha. Do lado de fora ela fica transparente.

Arraste de novo para recomeçar, ou pressione {{key:Esc}}.

## Copiar

- {{ui:Incluir marcações}} copia as suas marcações junto com a página; desmarque para o desenho limpo.
- {{ui:Resolução}}: {{ui:Como na tela}}, 72, 150 ou 300 dpi. A imagem fica abaixo de 3 MB; quando uma área grande em alta resolução ultrapassaria isso, a resolução é reduzida e a linha de status diz para qual.
- {{ui:Copiar}} (ou {{key:Mod+C}} ou {{key:Enter}}) coloca a área na área de transferência como imagem PNG, que cola no Word, em e-mails, em outros programas de PDF e em programas de desenho.
- {{ui:Salvar como PNG}} baixa a imagem, para um programa que descarta as partes transparentes ao colar.

## Copiar como sobreposição

{{ui:Copiar como sobreposição}} também torna o papel branco transparente, então só as linhas permanecem. {{ui:Cor}} dá a cada linha uma única cor (vermelho, azul, verde, laranja ou roxo) para que a sobreposição se destaque do desenho embaixo; {{ui:Cores próprias}} mantém as cores originais. {{ui:Intensidade}} é a força inicial quando colada em nossos aplicativos (50%, a menos que você altere).

## Colar

**No MarkupCraft**, {{key:Mod+V}} em qualquer folha cola a área como uma marcação de imagem no ponteiro. Ela entra no tamanho real:

- no papel, o mesmo tamanho que tinha na folha de origem;
- quando as duas folhas têm escala, o mesmo tamanho no desenho: uma área de uma folha 1:50 entra com metade do tamanho de papel em uma folha 1:100.

Uma sobreposição começa na sua intensidade; altere-a com {{ui:Opacidade}} em {{ui:Propriedades}}. Mova, redimensione, bloqueie e apague como qualquer imagem, e marque {{ui:Achatar na página ao salvar}} para desenhá-la na página.

**No CadCraft, BimCraft e DetailCraft**, a cópia também conhece o seu tamanho, então uma colagem entra no tamanho real do desenho quando a folha tinha escala, ou pede uma escala quando não tinha. Veja a ajuda de cada aplicativo sobre imagens.

## Alinhar uma imagem com dois pontos

Selecione uma imagem ou sobreposição, depois escolha {{ui:Mais}} › {{ui:Alinhar uma imagem com dois pontos}}:

1. Clique em um ponto da imagem.
2. Clique onde esse ponto vai.
3. Clique em um segundo ponto da imagem, longe do primeiro.
4. Clique onde esse ponto vai.

A imagem é redimensionada, movida e girada para que os dois pontos caiam onde você clicou. {{key:Esc}} para; {{key:Mod+Z}} desfaz em um passo.

## Bom saber

- O tamanho acompanha a cópia somente entre os nossos aplicativos no mesmo site, e somente para uma cópia feita nas últimas horas; outro programa recebe uma imagem simples.
- Se o navegador não permitir que o MarkupCraft use a área de transferência do sistema, a linha de status informa isso: colar nos nossos aplicativos continua funcionando, e {{ui:Salvar como PNG}} funciona para outros programas.
- Alinhar gira a imagem redesenhando os seus pixels, então uma imagem girada fica um pouco mais suave que a original.
