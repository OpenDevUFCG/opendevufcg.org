<template>
  <section class="sessao">
    <div class="sessao-head">
      <span class="sessao-titulo">Sobre nós</span>
      <span
        class="sessao-subtitulo"
      >Somos uma comunidade voltada a incentivar a cultura open source no curso de Ciência da Computação da UFCG.</span>
    </div>
    <topicos class="topicos" />
  </section>
</template>
<script>
import Topicos from './Topicos.vue'
export default {
  name: 'Apresentacao',
  components: {
    Topicos
  }
}
</script>
<style lang="scss" scoped>
.sessao {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 60px 0px;
  grid-template-areas:
    'head head head'
    '. topicos .';
}

.sessao-head {
  grid-area: head;
}

.topicos {
  grid-area: topicos;
}
</style>
