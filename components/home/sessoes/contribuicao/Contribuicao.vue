<template>
  <section class="sessao">
    <header class="sessao-head">
      <span class="sessao-titulo">Faça sua contribuição</span>
      <span class="sessao-subtitulo">
        Junte-se a comunidade da OpenDevUFCG!
      </span>
    </header>
    <div class="cards">
      <ItemContribuicao v-for="item in listaContribuicao" :key="item.titulo" :item="item" />
    </div>
  </section>
</template>
<script>
import ItemContribuicao from './ItemContribuicao.vue'

export default {
  name: 'Contribuicao',
  components: {
    ItemContribuicao
  },
  data() {
    return {
      listaContribuicao: [
        {
          titulo: 'Acesse nosso Github',
          descricao:
            'Aqui você pode acessar todos os nossos repositórios. Não esqueça de deixar uma star em cada um!',
          link: 'https://github.com/OpenDevUFCG',
          img: 'github_white.png'
        },
        {
          titulo: 'Fale conosco no Gitter',
          descricao:
            'Um bate-papo descontraído com a nossa comunidade, sinta-se à vontade pra compartilhar  ideias, tirar dúvidas...',
          link: 'https://gitter.im/OpenDevUFCG/community',
          img: 'gitter_white.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: auto;
  padding: 30px 80px 30px 80px;
  grid-auto-rows: minmax(min-content, max-content);
}

@media screen and (max-width: 820px) {
  .cards {
    grid-template-columns: 1fr;
    padding: 30px 20px 30px 20px;
  }
}
</style>
