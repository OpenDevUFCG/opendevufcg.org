<template>
  <div class="contribuicao">
    <span class="sessao-head">
      <span class="sessao-titulo">Faça sua contribuição</span>
      <span class="sessao-subtitulo">
        Junte-se a comunidade do OpenDevUFCG!
      </span>
    </span>
    <div class="content">
      <ItemContribuicao v-for="item in listaContribuicao" :key="item.titulo" :item="item" />
    </div>
  </div>
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
          link: 'https://github.com/OpenDevUFCG'
        },
        {
          titulo: 'Fale conosco no Gitter',
          descricao:
            'Um bate-papo descontraído com a nossa comunidade, sinta-se à vontade pra compartilhar  ideias, tirar dúvidas...',
          link: 'https://gitter.im/OpenDevUFCG/community'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  grid-auto-rows: minmax(min-content, max-content);
}

@media screen and (max-width: 1000px) {
  .content {
    grid-template-columns: 1fr;
  }
}
</style>
