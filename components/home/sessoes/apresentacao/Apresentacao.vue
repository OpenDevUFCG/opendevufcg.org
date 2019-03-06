<template>
  <section>  
    <span class="sessao-titulo titulo">
      Sobre nós
    </span>
    <span class="sessao-subtitulo subtitulo">
      Desenvolvemos projetos para a comunidade da UFCG, você também pode contribuir para eles! Veja alguns deles abaixo:
    </span>
    <topicos/>
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
section {
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10% 10% 80%;
  grid-template-areas:
    'titulo'
    'subtitulo'
    'main';
}

.titulo {
  grid-area: titulo;
  justify-self: center;
}

.subtitulo {
  grid-area: subtitulo;
  justify-self: center;
}

.content {
  grid-area: main;
}
</style>
