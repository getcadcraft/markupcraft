---
title: Copiar uma área da página, ou uma sobreposição
summary: Copie uma parte de uma folha com um retângulo, uma elipse ou uma forma livre e cole-a noutra folha, no CadCraft, no BimCraft, no DetailCraft ou em qualquer programa, no seu tamanho; copie-a como sobreposição transparente, e alinhe uma imagem com dois pontos.
keywords: copiar área, área, recortar, captura, instantâneo, área de transferência, região, retângulo, elipse, círculo, forma livre, laço, imagem, png, sobreposição, transparente, tonalidade, opacidade, colar, tamanho real, escala, alinhar, dois pontos, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Escolha {{ui:Mais}} › {{ui:Copiar uma área da página…}}. Abre-se uma barra sobre a folha.

## Escolher a área

Escolha {{ui:Retângulo}}, {{ui:Elipse}} ou {{ui:Livre}} na barra, e arraste na folha:

- **Retângulo:** arraste uma caixa à volta da parte a copiar.
- **Elipse:** arraste uma caixa; a elipse dentro dela é copiada, e os cantos fora dela ficam transparentes.
- **Livre:** desenhe à volta da parte a copiar; a forma fecha-se sozinha. O exterior fica transparente.

Arraste de novo para recomeçar, ou prima {{key:Esc}}.

## Copiar

- {{ui:Incluir anotações}} copia as suas anotações com a página; desmarque para o desenho limpo.
- {{ui:Resolução}}: {{ui:Como no ecrã}}, 72, 150 ou 300 dpi. A imagem fica abaixo de 3 MB; quando uma área grande numa resolução alta ultrapassaria esse valor, a resolução é reduzida e a linha de estado indica para qual.
- {{ui:Copiar}} (ou {{key:Mod+C}} ou {{key:Enter}}) põe a área na área de transferência como imagem PNG, que se cola no Word, no e-mail, noutros programas de PDF e em programas de desenho.
- {{ui:Guardar como PNG}} transfere a imagem, em vez disso, para um programa que elimina as partes transparentes ao colar.

## Copiar como sobreposição

{{ui:Copiar como sobreposição}} também torna o papel branco transparente, deixando apenas as linhas. {{ui:Cor}} dá a cada linha uma só cor (vermelho, azul, verde, laranja ou roxo), para que a sobreposição se distinga do desenho por baixo; {{ui:Cores próprias}} mantém-nas. {{ui:Intensidade}} é a força inicial quando colada nas nossas aplicações (50% a não ser que a altere).

## Colar

**No MarkupCraft**, {{key:Mod+V}} em qualquer folha cola a área como anotação de imagem no ponteiro. Entra no seu tamanho:

- no papel, o mesmo tamanho que tinha na folha de origem;
- quando as duas folhas têm escala, o mesmo tamanho no desenho: uma área de uma folha 1:50 entra com metade do seu tamanho no papel numa folha 1:100.

Uma sobreposição começa com a sua intensidade; altere-a com {{ui:Opacidade}} em {{ui:Propriedades}}. Mova, redimensione, bloqueie e apague-a como qualquer imagem, e marque {{ui:Integrar na página ao guardar}} para a desenhar na página.

**No CadCraft, no BimCraft e no DetailCraft** a cópia também conhece o seu tamanho, por isso a colagem entra à escala real do desenho quando a folha tinha escala, ou pede uma quando não tinha. Veja a ajuda de cada aplicação sobre imagens.

## Alinhar uma imagem com dois pontos

Selecione uma imagem ou sobreposição e escolha {{ui:Mais}} › {{ui:Alinhar uma imagem com dois pontos}}:

1. Clique num ponto da imagem.
2. Clique onde esse ponto deve ir.
3. Clique num segundo ponto da imagem, longe do primeiro.
4. Clique onde esse ponto deve ir.

A imagem é escalada, movida e rodada para que os dois pontos caiam onde clicou. {{key:Esc}} para; {{key:Mod+Z}} anula tudo num só passo.

## Bom saber

- O tamanho acompanha a cópia apenas entre as nossas aplicações no mesmo site, e só para uma cópia feita nas últimas horas; outro programa recebe uma imagem simples.
- Se o navegador não deixar o MarkupCraft usar a área de transferência do sistema, a linha de estado diz-o: colar nas nossas aplicações continua a funcionar, e {{ui:Guardar como PNG}} funciona para os outros programas.
- Alinhar roda a imagem redesenhando os seus pixels, por isso uma imagem rodada fica ligeiramente mais suave do que a original.
