# Changelog
Todas as mudanças desse projeto serão documentadas nesse arquivo.

O formato foi baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e esse projeto adere a [Semantic Versioning](https://semver.org/lang/pt-BR/spec/v2.0.0.html).

## [Não publicado]
### Adicionado
- Google Analytics Tracking code.
- Nova página `/hacktoberfest` com contador para o evento.
- Messagem no topo da página principal para redirecionar para `/hacktoberfest`.
- `Favicon` na página.
- Nova logo da OpenDev.
- Novo ícone no manifest. 

## [1.2.1] - 01/10/2019
### Adicionado
- Adiciona `theme_color` em manifest e metatag.

## [1.2.0] - 01/10/2019
### Adicionado
- Service Worker e `manifest.json`. Agora o portal é PWA.

### Modificado
- Meta tag de description no `index.html`.

## [1.1.3] - 26/08/2019
### Modificado
- Zerado padding e margin de tags `ul` do **body** do site.

### Corrigido
- Quebra de linha do texto da animação typewriter da primeira seção.
- Centralização de tópicos na seção "Sobre nós"
- Responsividade em telas maiores dos cards de comunidade na ultima seção.

## [1.1.2] - 16/08/2019

### Adicionado

- Novas seções explicativas do código e o processo de contribuição no `README.md` e `CONTRIBUTING.md`

## [1.1.1] - 05/08/2019

### Corrigido

- Redimensionamento dos cards da seção de projetos.

## [1.1.0] - 01/08/2019

### Adicionado

- Arquivos com os dados de *equipe* e *projetos* da OpenDevUFCG.
- Imagens dos membros da *equipe* agora são recuperados automaticamente pelo github, não sendo mais necessário upar as imagens no repositório.

#### Modificado

- Todo o site foi reescrito para apenas usar **Javascript**, **HTML** e **CSS**.
- Utilização de `grid` nas seções de projetos, visão e equipe, trocado para `flex`.
- Card da seção Comunidade foi refatorada e mudado seu estilo.

### Removido

- `Nuxt` e `Vue`.
- `Travis`.

## [1.0.0] - 17/07/2019

### Adicionado

- Esse arquivo de changelog para servir de exemplo para lançamentos futuros.
