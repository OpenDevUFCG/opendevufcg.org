# CONTRIBUTING

Contribuições sempre serão bem vindas, sejam pequenas ou grandes. Leia o código de conduta antes de abrir qualquer issue ou pull request.

## Issues

As issues são um espaço aberto para requisitar novas funcionalidades, mudança ou conserto. Também pode ser usadas como espaço para tirar dúvidas ou discutir ideias.

### Labels

Usamos algumas classificações para categorizar as issues, veja:

- **Bug** - Alerta sobre algum bug relacionado às implementações de código.
- **Congelado** - A issue está temporariamente inativa, será retomada futuramente.
- **Discussão** - Indica que a issue foi aberta com a finalidade de se discutir um assunto. Qualquer um pode participar.
- **Duplicado** - Alerta de que a issue atual é idêntica (ou muito semelhante) a uma já existente.
- **Em andamento** - Indica que as atividades requisitadas pela issue já estão sendo executadas.
- **Feature** - Indica que a issue está relacionada a uma nova funcionalidade ou nova requisição de material.
- **good first issue** - Indica que a issue é de dificuldade relativamente simples, um bom começo para novos contribuintes.
- **Precisa de ajuda** - Indica que se precisa de ajuda para resolver o tópico da issue.
- **Descontinuado** - Indica que o tópico da issue foi descontinuado e não será retomado.

## Contribuir

Você pode contribuir tanto sugerindo novas ideias em nossas issues ou no nosso [chat](https://gitter.im/OpenDevUFCG/portal), como também criando um "fork" do repositório e submetendo sua PR para melhorar nosso conteúdo e código.

## Estrutura

O site é feito utilizando apenas o essencial, **Javascript**, **HTML** e **CSS**. Caso não conheça essas linguagens e como elas se comunicam, [veja aqui](http://apexensino.com.br/html-css-e-javascript-entendendo-melhor-base-da-programacao-front-end/).

Nosso código se concentra na pasta `docs/` deste repositório, aqui uma descrição da estrutura:

| Arquivo/Pasta  	|   Descrição	|
|---	|---	|
|  `index.html`	| Aqui é o código *HTML* na nossa página principal. Esse arquivo é o que importa o *javascript* e *css* que iremos criar.|
|  `js/`	| Todos os scripts *javascript* ficam localizados aqui. Sendo o principal o `app.js`. 	|
|  `img/` 	|   Toda imagem que precisamos usar no site, é colocada aqui.	|
|  `data/` 	|   Para facilitar, colocamos alguns dados estáticos em um dicionário do *javascript*. Esses dados são consumidos por `apps.js`	|
|  `css/` 	| Aqui fica localizado todos os arquivos *css* responsáveis por estilizar	o site.|

Ainda tem dúvida? Abre uma [Issue](https://github.com/OpenDevUFCG/opendevufcg.org/issues) que a gente responde!

## Desenvolvimento

Para rodar e fazer alterações locais na sua máquina, primeiro você deve fazer um *Fork* deste repositório e depois cloná-lo para sua máquina:

``` bash
git clone https://github.com/<seu_usuario>/opendevufcg
``` 

Depois, abra o arquivo `docs/index.html` no navegador de sua preferência, agora é só começar a codar que você irá poder ver suas alterações no navegador!

## Contribuir

Deseja contribuir? Ficamos muito felizes! Aqui vai alguma dicas e regras que você deve ter em mente.

### Filosofia do projeto

Lembre que o objetivo desse portal é ser simples! Por favor evite adicionar complexidas que podem ser desnecessárias, principalmente a adição de bibliotecas. Estamos nos esforçando para apenas usar o básico de *javascript* para ser um projeto agradável para iniciantes **web**.

### Boas práticas

Já está pronto para abrir uma *Pull Request*? Ótimo! Aqui vai algumas dicas de boas práticas para ajudar o processo de revisão:

1. Crie uma [Branch](https://git-scm.com/book/pt-br/v1/Ramifica%C3%A7%C3%A3o-Branching-no-Git-B%C3%A1sico-de-Branch-e-Merge) no seu *Fork*, com um nome descritivo!
2. Seja claro nos seus comitivos! Não precisa ser longo, uma frase descritiva do seu trabalho está ótimo!
3. Siga nossos conselhos de como preencher sua **PR**, vai nos ajudar a entender o que você fez!
4. Se você fez baseado numa issue, referencie ela!
5. Esteja aberto a sugestões, assim como estaremos também!


## Dúvidas ou sugestões?

Dúvidas e sugestões são sempre bem vindas! Estamos sempre respondendo issues e também falando no [discord](https://discord.gg/zHVQKg)!
