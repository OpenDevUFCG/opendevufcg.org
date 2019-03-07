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
          descricao:
            'Crescemos mais juntos, por isso valorizamos a comunidade, criando um espaço que exista diálogo, amizade, respeito e suporte.',
          imagem: '~assets/comunidade_icon.svg'
        },
        {
          titulo: 'Livre',
          descricao: 'Acreditamos',
          imagem: '~assets/comunidade_icon.svg'
        },
        {
          titulo: 'Empoderamento',
          descricao:
            'Queremos empoderar pessoas, do iniciante ao experiente, todos podem aprender, sugerir e ajudar na OpenDevUFCG. Queremos ser a organização que possa encorajar pessoas a tomarem o primeiro passo, a sugerir novas ideias e principalmente, a contruí-las. Veja mais. ',
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2px 70px;
}
.topico {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10% 1fr;
  grid-gap: 2px 90px;
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
  color: #80858a;
  letter-spacing: 0.1rem;
}
</style>
