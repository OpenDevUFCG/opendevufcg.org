<template>
  <div class="topicos">
      <div class="topico" v-for="topico in topicos" :key="topico.titulo">
          <span class="topico-titulo">{{ topico.titulo }}</span>
          <span class="topico-descricao">{{ topico.descricao }}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Topicos',
  data() {
    return {
      topicos: [
        {
          titulo: 'Comunidade',
          descricao: 'Acreditamos na comunidade dsadsad dsadsad dsa.',
          imagem: '~assets/comunidade_icon.svg'
        },
        {
          titulo: 'Livre',
          descricao: 'Liberdade blabla dasdsa dsa dsa  dsa da.',
          imagem: '~assets/comunidade_icon.svg'
        },
        {
          titulo: 'Empoderamento',
          descricao: 'Empodera empodera dasdsadsadasddsa dsadas dsa dss.',
          imagem: '~assets/comunidade_icon.svg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.topicos {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: auto;
  grid-gap: 10px 90px;
}
.topico {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10% 90%;
  grid-gap: 2px 2px;
  grid-template-areas:
    'titulo'
    'descricao';
}
.topico-titulo {
  font-size: 2rem;
  color: #387ca5;
  letter-spacing: 0.2rem;
  grid-area: titulo;
}
.topico-descricao {
  grid-area: descricao;
}
</style>
